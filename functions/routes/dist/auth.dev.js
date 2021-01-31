"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../firestore'),
    db = _require.db,
    auth = _require.auth;

var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var reolse = db.collection('roles');

var _require2 = require('../schema/user'),
    User = _require2.User,
    userConverter = _require2.userConverter;

var initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null
};

exports.validateIdToken = function _callee(req, res, next) {
  var idToken, decodedIdToken;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Check if request is authorized with Firebase ID token');

          if (!((req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session))) {
            _context.next = 5;
            break;
          }

          console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.', 'Make sure you authorize your request by providing the following HTTP header:', 'Authorization: Bearer <Firebase ID Token>', 'or by passing a "__session" cookie.');
          return _context.abrupt("return", res.status(403).send('Unauthorized'));

        case 5:
          if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            _context.next = 10;
            break;
          }

          console.log('Found "Authorization" header'); // Read the ID Token from the Authorization header.

          idToken = req.headers.authorization.split('Bearer ')[1];
          _context.next = 16;
          break;

        case 10:
          if (!req.cookies) {
            _context.next = 15;
            break;
          }

          console.log('Found "__session" cookie'); // Read the ID Token from cookie.

          idToken = req.cookies.__session;
          _context.next = 16;
          break;

        case 15:
          return _context.abrupt("return", res.status(403).send('Unauthorized'));

        case 16:
          _context.prev = 16;
          _context.next = 19;
          return regeneratorRuntime.awrap(auth.verifyIdToken(idToken));

        case 19:
          decodedIdToken = _context.sent;
          console.log('ID Token correctly decoded', decodedIdToken);
          req.user = decodedIdToken;
          next();
          return _context.abrupt("return");

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](16);
          console.error('Error while verifying Firebase ID token:', _context.t0);
          res.status(403).send('Unauthorized');
          return _context.abrupt("return");

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[16, 26]]);
};

exports.signInWithEmailAndPassword = function (req, res) {
  auth.signInWithEmailAndPassword(req.body.email, req.body.password).then(function (user) {
    console.log("Authenticated successfully with payload:", user);
    return res.status(200).send(user);
  })["catch"](function (error) {
    console.log("Login fallido!", error);
    return res.status(404).send(error);
  });
};

exports.signInWithGoogle = function (req, res) {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function (result) {
    var credential = result.credential;
    var token = result.accessToken;
    var user = result.user;
    console.log("Login con Google exitoso!");
    return res.status(200).send({
      credential: _objectSpread({}, credential),
      token: _objectSpread({}, token),
      user: _objectSpread({}, user)
    });
  })["catch"](function (error) {
    console.log("Login con Google fallido!", error);
    return res.status(404).send(error);
  });
};

exports.signInWithFacebook = function (req, res) {
  var provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).then(function (result) {
    var credential = result.credential;
    var token = result.accessToken;
    var user = result.user;
    console.log("Login con Facebook exitoso!");
    return res.status(200).send({
      credential: _objectSpread({}, credential),
      token: _objectSpread({}, token),
      user: _objectSpread({}, user)
    });
  })["catch"](function (error) {
    console.log("Login con Facebook fallido!", error);
    return res.status(404).send(error);
  });
};

exports.signInWithTwitter = function (req, res) {
  var provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider).then(function (result) {
    var credential = result.credential;
    var token = result.accessToken;
    var user = result.user;
    console.log("Login con Twitter exitoso!");
    return res.status(200).send({
      credential: _objectSpread({}, credential),
      token: _objectSpread({}, token),
      user: _objectSpread({}, user)
    });
  })["catch"](function (error) {
    console.log("Login con Twitter fallido!", error);
    return res.status(404).send(error);
  });
};

exports.createUserWithEmailAndPassword = function (req, res) {
  auth.createUserWithEmailAndPassword(req.body.email, req.body.password).then(function (user) {
    // subir a colleccion de usuarios
    users.doc(user.uid).withConverter(userConverter).set(_construct(User, _toConsumableArray(req.body.userdata))).then(function () {
      console.log("Collection: Users - Done!");
    }).then(function () {
      // subir a colleccion de roles
      roles.doc(user.uid).set({
        role: "users"
      }).then(function () {
        console.log("Collection: Roles - Done!");
      });
    }).then(function () {
      console.log("Usuario registrado correctamente.");
      return res.status(201).send(user);
    });
  })["catch"](function (error) {
    console.log("Error creando usuario!", error);
    return res.status(404).send(error);
  });
};

exports.logout = function (req, res) {
  auth.signOut().then(function () {
    return res.status(200);
  }, function (error) {
    return res.status(404).send(error);
  });
};
/*useEffect(() => {
    
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            
            firebase.firestore()
                .collection('roles')
                .doc(user.uid)
                .get()
                .then(doc => {
                    firebase.firestore()
                        .collection('patients')
                        .doc(user.uid)
                        .get()
                        .then(docRole => {
                            setDbRef(docRole.ref)
                        })              
                })
            dispatch({
                type: 'FB_AUTH_STATE_CHANGED',
                payload: {
                    isAuthenticated: true,
                    user: {
                        uid: user.uid,
                        name: user.displayName || user.email,
                        img: user.photoURL,
                        email: user.email,
                        age: 18,
                        phone: user.phoneNumber,
                        db_ref: dbRef
                    },
                },
            })
        } else {
            dispatch({
                type: 'FB_AUTH_STATE_CHANGED',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            })
        }
    })

    return unsubscribe
}, [dispatch])*/