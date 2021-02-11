"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatxLayoutSettings = void 0;

var _Layout1Settings = _interopRequireDefault(require("./Layout1/Layout1Settings"));

var _Layout2Settings = _interopRequireDefault(require("./Layout2/Layout2Settings"));

var _initThemes = require("../MatxTheme/initThemes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MatxLayoutSettings = {
  activeLayout: 'layout1',
  // layout1, layout2
  activeTheme: 'blue',
  // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: false,
  themes: _initThemes.themes,
  layout1Settings: _Layout1Settings["default"],
  // open Layout1/Layout1Settings.js
  layout2Settings: _Layout2Settings["default"],
  // open Layout1/Layout2Settings.js
  secondarySidebar: {
    show: true,
    open: false,
    theme: 'slateDark1' // View all valid theme colors inside MatxTheme/themeColors.js

  },
  // Footer options
  footer: {
    show: true,
    fixed: false,
    theme: 'slateDark1' // View all valid theme colors inside MatxTheme/themeColors.js

  }
};
exports.MatxLayoutSettings = MatxLayoutSettings;