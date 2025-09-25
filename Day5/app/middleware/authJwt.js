const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (request, response, next) => {
  let token = request.headers["x-access-token"];

  if (!token) {
    return response.status(403).send({ message: "Token not found !" });
  }

  jwt.verify(token,
            config.secret,
            (err, decoded) => {
              if (err) {
                return response.status(401).send({
                  message: "Unauthorized!",
                });
              }
              request.userId = decoded.id;
              next();
            });
};

isAdmin = (request, response, next) => {
  User.findById(request.userId).exec((err, user) => {
    if (err) {
      response.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          response.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }

        response.status(403).send({ message: "Only Admin can Access!" });
        return;
      }
    );
  });
};

isModerator = (request, response, next) => {
  User.findById(request.userId).exec((err, user) => {
    if (err) {
      response.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          response.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }

        response.status(403).send({ message: "Only Moderator can Access!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
module.exports = authJwt;
