"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCartAmount = exports.deleteProductFromCart = exports.addProductToCart = exports.getCartList = exports.getBrandList = exports.getRatingList = exports.getCategoryList = exports.getProductList = exports.UPDATE_CART_AMOUNT = exports.DELETE_PRODUCT_FROM_CART = exports.ADD_PRODUCT_TO_CART = exports.GET_BRAND_LIST = exports.GET_RATING_LIST = exports.GET_CATEGORY_LIST = exports.GET_CART_LIST = exports.GET_PRODUCT_LIST = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
exports.GET_PRODUCT_LIST = GET_PRODUCT_LIST;
var GET_CART_LIST = 'GET_CART_LIST';
exports.GET_CART_LIST = GET_CART_LIST;
var GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
exports.GET_CATEGORY_LIST = GET_CATEGORY_LIST;
var GET_RATING_LIST = 'GET_RATING_LIST';
exports.GET_RATING_LIST = GET_RATING_LIST;
var GET_BRAND_LIST = 'GET_BRAND_LIST';
exports.GET_BRAND_LIST = GET_BRAND_LIST;
var ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
exports.ADD_PRODUCT_TO_CART = ADD_PRODUCT_TO_CART;
var DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
exports.DELETE_PRODUCT_FROM_CART = DELETE_PRODUCT_FROM_CART;
var UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT';
exports.UPDATE_CART_AMOUNT = UPDATE_CART_AMOUNT;

var getProductList = function getProductList() {
  return function (dispatch) {
    _axios["default"].get('/api/ecommerce/get-product-list').then(function (res) {
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: res.data
      });
    });
  };
};

exports.getProductList = getProductList;

var getCategoryList = function getCategoryList() {
  return function (dispatch) {
    _axios["default"].get('/api/ecommerce/get-category-list').then(function (res) {
      dispatch({
        type: GET_CATEGORY_LIST,
        payload: res.data
      });
    });
  };
};

exports.getCategoryList = getCategoryList;

var getRatingList = function getRatingList() {
  return function (dispatch) {
    _axios["default"].get('/api/ecommerce/get-rating-list').then(function (res) {
      dispatch({
        type: GET_RATING_LIST,
        payload: res.data
      });
    });
  };
};

exports.getRatingList = getRatingList;

var getBrandList = function getBrandList() {
  return function (dispatch) {
    _axios["default"].get('/api/ecommerce/get-brand-list').then(function (res) {
      dispatch({
        type: GET_BRAND_LIST,
        payload: res.data
      });
    });
  };
};

exports.getBrandList = getBrandList;

var getCartList = function getCartList(uid) {
  return function (dispatch) {
    _axios["default"].get('/api/ecommerce/get-cart-list', {
      data: uid
    }).then(function (res) {
      dispatch({
        type: GET_CART_LIST,
        payload: res.data
      });
    });
  };
};

exports.getCartList = getCartList;

var addProductToCart = function addProductToCart(uid, productId) {
  return function (dispatch) {
    _axios["default"].post('/api/ecommerce/add-to-cart', {
      uid: uid,
      productId: productId
    }).then(function (res) {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: res.data
      });
    });
  };
};

exports.addProductToCart = addProductToCart;

var deleteProductFromCart = function deleteProductFromCart(uid, productId) {
  return function (dispatch) {
    _axios["default"].post('/api/ecommerce/delete-from-cart', {
      uid: uid,
      productId: productId
    }).then(function (res) {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: res.data
      });
    });
  };
};

exports.deleteProductFromCart = deleteProductFromCart;

var updateCartAmount = function updateCartAmount(uid, productId, amount) {
  return function (dispatch) {
    console.log(uid, productId, amount);

    _axios["default"].post('/api/ecommerce/update-cart-amount', {
      uid: uid,
      productId: productId,
      amount: amount
    }).then(function (res) {
      dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: res.data
      });
    });
  };
};

exports.updateCartAmount = updateCartAmount;