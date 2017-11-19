const db = require('../../config/database');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const saltRounds = 10;
const User = require('../../models/index').User;

const login = (req, res) => {
  User.findOne({where: {name: req.params.name }}).then((user) => {
    if(user){
      bcrypt.compare(req.params.password, user.password, (err, data) => {
        if(data){
          console.log("User Logged In");
          res.status(200).send(user);
        } else {
          console.log('Invalid Login Credentials');
          res.send('Invalid Login Credentials');
        }
      });
    } else {
      console.log('Invalid Login Credentials');
      res.send('Invalid Login Credentials');
    }
  });
}

const signUp = (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      User.findOne({where: {name: req.body.name }}).then((person) => {
        if(person){
          console.log('That username is taken. Please try another name.');
          res.status(404).send(err);
        } else {
          User.create({
            name: req.body.name,
            password: hash,
            callbackContactNumber: req.body.callbackContactNumber,
            email: req.body.email
          })
          .then((newUser) => {
            res.status(201).send(newUser);
          })
        }
      });
    });
  });
};

module.exports = {
  signUp,
  login
}