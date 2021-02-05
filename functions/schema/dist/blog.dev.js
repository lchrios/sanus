"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Blog =
/*#__PURE__*/
function () {
  function Blog(title, content, date, author, likes, comments, img) {
    _classCallCheck(this, Blog);

    this.title = title;
    this.content = content;
    this.date = date;
    this.author = author;
    this.likes = likes;
    this.comments = comments;
    this.img = img;
  }

  _createClass(Blog, [{
    key: "toString",
    value: function toString() {
      return this.author + ': ' + this.title + '\n' + this.date + ' | likes: ' + this.likes.length + ' | comms: ' + this.comments.length;
    }
  }]);

  return Blog;
}();

var blogConverter = {
  toFirestore: function toFirestore(blog) {
    return {
      title: blog.title,
      content: blog.content,
      date: blog.date,
      author: blog.author,
      likes: blog.likes,
      comments: blog.comments,
      img: blog.img
    };
  },
  fromFirestore: function fromFirestore(snapshot, options) {
    var data = snapshot.data(options);
    return new User(data.title, data.content, data.date, data.author, data.likes, data.comments, data.img);
  }
};
module.exports = {
  Blog: Blog,
  blogConverter: blogConverter
};