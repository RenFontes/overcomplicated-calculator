const admin = require("firebase-admin");
const fireApp = admin.initializeApp();
const { user: User } = require("../models/index");
const { v4: uuidv4 } = require('uuid');

exports.validateIdToken = async (req, res, next) => {
  if (
    typeof req.headers["auth-token"] === "undefined" ||
    !req.headers["auth-token"]
  ) {
    res.status(401);
    res.send("auth-token header is required");
    return;
  }
  let idToken = req.headers["auth-token"];

  try {
    const decodedToken = await admin
      .auth()
      .verifyIdToken(idToken);

    let uid = decodedToken.uid;
    req.UserData = {};
    req.UserData.idToken = req.headers["auth-token"];
    req.UserData.username = req.header["username"];
    req.UserData.userId = uid;
    return next();
  } catch (error) {
    res.status(401);
    res.send(`Authentication failed. \n Error:${JSON.stringify(error)}`);
    return next();
  }
};

exports.registerUser = async (req, res, next) => {
  User.build({ firebase_uid: req.UserData.idToken, uuid: uuidv4(), username: req.UserData.username, role: 'user', status: 'active' });
  await User.save();
  return next();
};