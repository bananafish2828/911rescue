webpackHotUpdate(0,{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(84);

var _reactRouterDom = __webpack_require__(56);

var _Auth = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserNavBar = function UserNavBar(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.Navbar,
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: '../../../media/call911.jpg', alt: '', height: '40px', width: '60px' }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              '911Rescue'
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Nav,
        null,
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', onClick: function onClick() {
                return props.dispatch((0, _Auth.logoutUser)(props.history));
              } },
            'Logout'
          )
        )
      )
    )
  );
};

exports.default = UserNavBar;

/***/ })

})
//# sourceMappingURL=0.c2dfda95aec5b9395a19.hot-update.js.map