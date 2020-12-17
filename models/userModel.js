var sql = require('../shared/db');
var userModel = {};

userModel.getAllUsers = async function (result) {
	await sql.query("Select * from users", function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
};

userModel.createUser = async function(user,result) {
	var sqlQuery = 'insert into users SET ?';
	await sql.query(sqlQuery, user, async function (err, res) {
		if(err) {
			console.log("error: ", err);
			return err;
		}
		else{
			result(null,res);
		}
	});
};

userModel.getUser = async function (userId,result) {
	var sqlQuery = 'Select * from users where userId = ?';
	await sql.query(sqlQuery, userId, function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res[0]);
		}
	});
};

userModel.updateUser = async function (userId,user,result) {
	var sqlQuery = 'update users set ? where userId = ?';
	sql.query(sqlQuery, [user,userId], function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(null, err);
		}
		else{
			result(null, res[0]);
		}
	});
};

userModel.deleteUser = async function (userId,result) {
	var sqlQuery = 'delete from users where userId = ?';
	sql.query(sqlQuery, userId, function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(null, err);
		}
		else{
			result(null, res[0]);
		}
	});
};

module.exports = userModel;