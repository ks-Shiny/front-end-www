(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    211(t, e, n) {
      n.r(e);
      const r = {
        data() {
          return { pdfUrl: "/article/pdf/test.pdf" };
        }
      };
      const l = n(6);
      const component = Object(l.a)(
        r,
        function() {
          const t = this.$createElement;
          return (this._self._c || t)(
            "iframe",
            {
              attrs: {
                src: `/js/pdfjs/web/viewer.html?file=${this.pdfUrl}`,
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
