(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    211: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          data: function() {
            return { pdfUrl: "/article/pdf/test.pdf" };
          }
        },
        l = n(6),
        component = Object(l.a)(
          r,
          function() {
            var t = this.$createElement;
            return (this._self._c || t)(
              "iframe",
              {
                attrs: {
                  src: "/js/pdfjs/web/viewer.html?file=" + this.pdfUrl,
                  width: "100%",
                  height: "100%",
                  scrolling: "no"
                }
              },
              [this._v("\n    您的浏览器不支持PDF阅读\n")]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    }
  }
]);
