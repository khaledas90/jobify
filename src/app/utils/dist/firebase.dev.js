"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBelZTJlK3TdE11QUSj-byrVwPEBUdvu3o",
  authDomain: "skillhive-a0543.firebaseapp.com",
  projectId: "skillhive-a0543",
  storageBucket: "skillhive-a0543.firebasestorage.app",
  messagingSenderId: "148931814211",
  appId: "1:148931814211:web:d0a68d237cdb638578c5f6"
}; // Initialize Firebase app

var app = (0, _app.initializeApp)(firebaseConfig); // Initialize Firebase Authentication and Firestore

var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var db = (0, _firestore.getFirestore)(app);
exports.db = db;