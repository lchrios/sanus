"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable require-jsdoc */
var Therapist =
/*#__PURE__*/
function () {
  function Therapist(age, email, img, name, resume, payment_met, phone, sessions, users, blogs) {
    _classCallCheck(this, Therapist);

    this.age = age;
    this.email = email;
    this.img = img;
    this.name = name;
    this.resume = resume;
    this.payment_met = payment_met;
    this.phone = phone;
    this.sessions = sessions;
    this.users = users;
    this.blogs = blogs;
  }

  _createClass(Therapist, [{
    key: "toString",
    value: function toString() {
      return this.name + ", " + this.age + ". " + this.email;
    }
  }]);

  return Therapist;
}();

var therapistConverter = {
  toFirestore: function toFirestore(therapist) {
    return {
      age: therapist.age,
      email: therapist.email,
      img: therapist.img,
      name: therapist.name,
      resume: therapist.resume,
      payment_met: therapist.payment_met,
      phone: therapist.phone,
      sessions: therapist.sessions,
      therapist: therapist.therapist
    };
  },
  fromFirestore: function fromFirestore(snapshot, options) {
    var data = snapshot.data(options);
    return new Therapist(data.age, data.email, data.img, data.name, data.resume, data.payment_met, data.phone, data.sessions, data.patients, data.blogs);
  }
};
module.exports = {
  Therapist: Therapist,
  therapistConverter: therapistConverter
};