exports.allAccess = (request, response) => {
  response.status(200).send("You are Accessing Public Content.");
};

exports.userBoard = (request, response) => {
  response.status(200).send("You are Accessing User's Content.");
};

exports.adminBoard = (request, response) => {
  response.status(200).send("You are Accessing Admin's Content.");
};

exports.moderatorBoard = (request, response) => {
  response.status(200).send("You are Accessing Moderator's Content.");
};
