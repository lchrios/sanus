"use strict";

var _require = require('../firestore'),
    db = _require.db,
    auth = _require.auth;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions');