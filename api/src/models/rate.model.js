'user strict';
var dbConn = require('../../config/db.config');

//Rate object create
var Rate = function (rate) {
    this.updated_by = rate.updated_by;
    this.usd = rate.usd;
    this.zar = rate.zar;
    this.zwl = rate.zwl
    this.kwacha = rate.kwacha;
    this.updated_at = rate.updated_at;
};
Rate.create = function (newRate, result) {
    dbConn.query("INSERT INTO rates set ?", newRate, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Rate.findById = function (id, result) {
    dbConn.query("Select * from rates where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Rate.findByDate = function (updated_at, result) {

    dbConn.query("Select * from rates where updated_at= ? ", updated_at, function () {
        if (err) {
            console.console.log("error", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Rate.findAll = function (result) {
    dbConn.query("Select * from rates", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('rates : ', res);
            result(null, res);
        }
    });
};
Rate.update = function (id, rate, result) {
    dbConn.query("UPDATE rates SET updated_by=?,usd=?, zar=?,zwl=?,kwacha=? WHERE id = ?", [rate.updated_by, rate.usd, rate.zar, rate.zwl, rate.kwacha, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Rate.delete = function (id, result) {
    dbConn.query("DELETE FROM rates WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Rate;