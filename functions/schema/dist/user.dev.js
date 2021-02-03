"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(age, email, img, name, payment_met, phone, sessions, therapist) {
    _classCallCheck(this, User);

    this.age = age;
    this.email = email;
    this.img = img;
    this.name = name;
    this.payment_met = payment_met;
    this.phone = phone;
    this.sessions = sessions;
    this.therapist = therapist;
  }

  _createClass(User, [{
    key: "toString",
    value: function toString() {
      return this.name + ', ' + this.age + '. ' + this.email + ' | ' + this.phone + ' | ' + this.therapist;
    }
  }]);

  return User;
}();

var userConverter = {
  toFirestore: function toFirestore(user) {
    return {
      age: user.age,
      email: user.email,
      img: user.img,
      name: user.name,
      payment_met: user.payment_met,
      phone: user.phone,
      sessions: user.sessions,
      therapist: user.therapist
    };
  },
  fromFirestore: function fromFirestore(snapshot, options) {
    var data = snapshot.data(options);
    return new User(data.age, data.email, data.img, data.name, data.payment_met, data.phone, data.sessions, data.therapist);
  }
};
module.exports = {
  User: User,
  userConverter: userConverter
};