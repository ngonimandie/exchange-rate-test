'use strict';

const Rate = require('../models/rate.model');

exports.findAll = function(req, res) {
  Rate.findAll(function(err, rate) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', rate);
    res.send(rate);
  });
};



exports.create = function(req, res) {
    const new_rate = new Rate(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Rate.create(new_rate, function(err, rate) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Rates added successfully!",data:rate});
        });
    }
};


exports.findById = function(req, res) {
    Rate.findById(req.params.id, function(err, rate) {
        if (err)
        res.send(err);
        res.json(rate);
    });
};
exports.findByDate = function(req, res) {
    Rate.findByDate(req.params.date, function(err, rate) {
        if (err)
        res.send(err);
        res.json(rate);
    });
};



exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Rate.update(req.params.id, new Rate(req.body), function(err, rate) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Rate successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Rate.delete( req.params.id, function(err, rate) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Rate successfully deleted' });
  });
};