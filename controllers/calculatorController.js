const { Service, Record } = require('../models/index');
const mathjs = require('mathjs');
const axios = require('axios').default;

const randomStringUrl = 'https://www.random.org/strings/?num=1&len=15&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';

async function getDbService(serviceType) {
  var dbService = await Service.findOne({ where : { type : serviceType}})
  return dbService;
}

exports.ValidateNums = async (req, res, next) => {
  if (req.body.nums == null || !req.body.nums.constructor === Array) {
  } else if (req.body.nums.length === 0) {
    throw new Error('nums array is empty');
  }

  return next();
}

exports.ValidateNum = async (req, res, next) => {
  if (req.body.num == null || typeof req.body.num !== 'number') {
    console.log('validate num')
    throw new Error('num property of type number was expected');
  }
  return next();
}

exports.ValidateExpression = async (req, res, next) => {
  if (req.body.expression == null || typeof req.body.expression !== 'string') {
    throw new Error('expression property of type string was expected');
  }
  
  return next();
}

exports.Addition = async (req, res, next) => {
  console.log('addition');
  req.result = req.body.nums.reduce((a, b) => a + b)
  req.serviceType = 'addition';
  return next();
}

exports.Subtraction = async (req, res, next) => {
  req.result = req.body.nums.reduce((a, b) => a - b);
  req.serviceType = 'subtraction';
  return next();
}

exports.Multiplication = async (req, res, next) => {
  req.result = req.body.nums.reduce((a, b) => a * b);
  req.serviceType = 'multiplication';
  return next();
}

exports.Division = async (req, res, next) => {
  req.result = req.body.nums.reduce((a, b) => a / b);
  req.serviceType = 'division';
  return next();
}

exports.SquareRoot = async (req, res, next) => {
  req.result = Math.sqrt(req.body.num);
  req.serviceType = 'square_root';
  return next();
}

// it would have been fun to implement the evaluation myself but there were many other requirements to take care of 😛
exports.FreeForm = async (req, res, next) => {
  req.result = mathjs.evaluate(req.body.expression);
  req.serviceType = 'free_form';
  return next();
}

exports.RandomString = async (req, res, next) => {
  const response = await axios.get(randomStringUrl)
  req.result = response.data.trim();
  req.serviceType = 'random_string';
  return next();
}

// take credit from account and return the result
exports.FinalizeCalculation = async (req, res, next) => {
  // todo: take credit from account
  const serviceType = await getDbService(req.serviceType);
  res.json({ result: req.result });
}