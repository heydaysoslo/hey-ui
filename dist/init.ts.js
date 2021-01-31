var Theme = /*#__PURE__*/function () {
  function Theme(theme) {
    this.theme = theme;
  }

  var _proto = Theme.prototype;

  _proto.getTheme = function getTheme() {
    return this.theme;
  };

  _proto.setTheme = function setTheme(theme) {
    this.theme = theme;
  };

  return Theme;
}();

var init = new Theme({});

module.exports = init;
//# sourceMappingURL=init.ts.js.map
