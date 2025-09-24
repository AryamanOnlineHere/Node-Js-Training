const {tutorials}=require("../models");

exports.checkDuplicateTitle=(title)=>{
return tutorials.find({'title':title})
}