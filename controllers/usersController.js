var usersModel = require('../models/userModel.js');
var response = require('../shared/response')
var userController = {};

userController.getAllUsers = function(req, res) {
  usersModel.getAllUsers(function(err, users) {
    if (err){
      res.send(err);
    }
    if(users.length > 0){
      var resp = response.gotData;
      resp.message = "Data retrived successfully";
      resp.data = users;
      res.send(resp);
    } else {
      res.send(response.noData);
    }
  });
};

userController.createUser = function(req, res) {
  usersModel.createUser(req.body,function(err, user) {
    if (err){
      res.send(err);
    }
    if(user.insertId) {
      usersModel.getUser(user.insertId,function(err, user) {
        if (err){
          res.send(err);
        }
        if(user){
          var resp = response.gotData;
          resp.message = "Data inserted correctly";
          resp.data = user;
          res.send(resp);
        } else {
          res.send(response.noData);
        }
      });
    } else {
      res.send(response.noData);
    }
  });
};

userController.getUser = function(req, res) {
  usersModel.getUser(req.params.userId,function(err, user) {
    if (err){
      res.send(err);
    }
    if(user){
      var resp = response.gotData;
      resp.message = "Data retrived correctly";
      resp.data = user;
      res.send(resp);
    } else {
      res.send(response.noData);
    }
  });
};

userController.updateUser = function(req, res) {
  usersModel.getUser(req.params.userId,function(err, user) {
    if (err){
      res.send(err);
    }
    if(user){
      usersModel.updateUser(req.params.userId, req.body,function(err, user) {
        if (err){
          res.send(err);
        }
        var resp = response.gotData;
        resp.message = "Data updated correctly";
        resp.data = "";
        res.send(resp);
      });
    } else {
      res.send(response.noData);
    }
  });
};

userController.deleteUser = function(req, res) {
  usersModel.getUser(req.params.userId,function(err, user) {
    if (err){
      res.send(err);
    }
    if(user){
      usersModel.deleteUser(req.params.userId,function(err, user) {
        if (err){
          res.send(err);
        }
        var resp = response.gotData;
        resp.message = "User deleted successfully";
        resp.data = "";
        res.send(resp);
      });
    } else {
      res.send(response.noData);
    }
  });
};

module.exports = userController;