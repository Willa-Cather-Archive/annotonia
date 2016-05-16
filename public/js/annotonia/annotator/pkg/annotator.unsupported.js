
/*
** Annotator v1.2.10
** https://github.com/okfn/annotator/
**
** Copyright 2015, the Annotator project contributors.
** Dual licensed under the MIT and GPLv3 licenses.
** https://github.com/okfn/annotator/blob/master/LICENSE
**
** Built at: 2015-02-26 03:26:47Z
 */


//

// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Annotator.Plugin.Unsupported = (function(_super) {
    __extends(Unsupported, _super);

    function Unsupported() {
      _ref = Unsupported.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Unsupported.prototype.options = {
      message: Annotator._t("Sorry your current browser does not support the Annotator")
    };

    Unsupported.prototype.pluginInit = function() {
      var _this = this;
      if (!Annotator.supported()) {
        return $(function() {
          Annotator.showNotification(_this.options.message);
          if ((window.XMLHttpRequest === void 0) && (ActiveXObject !== void 0)) {
            return $('html').addClass('ie6');
          }
        });
      }
    };

    return Unsupported;

  })(Annotator.Plugin);

}).call(this);

//
//# sourceMappingURL=annotator.unsupported.map