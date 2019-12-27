(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    183(t, e, r) {
      let content = r(197);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(14).default)("33753543", content, !0, { sourceMap: !1 });
    },
    195(t, e, r) {
      const map = {
        "./BE/1.md": [200, 12],
        "./FE/blog1.md": [201, 13],
        "./QA/qa.md": [202, 14],
        "./UI/ui.md": [203, 15]
      };
      function n(t) {
        if (!r.o(map, t)) {
          return Promise.resolve().then(() => {
            const e = new Error(`Cannot find module '${t}'`);
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        }
        const e = map[t];
        const n = e[0];
        return r.e(e[1]).then(() => r.t(n, 7));
      }
      (n.keys = function() {
        return Object.keys(map);
      }),
        (n.id = 195),
        (t.exports = n);
    },
    196(t, e, r) {
      const n = r(183);
      r.n(n).a;
    },
    197(t, e, r) {
      (t.exports = r(13)(!1)).push([
        t.i,
        ".article-detail{color:#fff;width:80%;margin:20px auto;min-width:980px}.article-detail .elevate-cover{font-size:14px}.article-detail .elevate-cover .title{font-size:36px;font-weight:500;margin-bottom:12px}.article-detail .elevate-cover .img-cover{line-height:0}.article-detail .elevate-cover img{max-width:100%}.article-detail .description{margin:0;opacity:0;-webkit-animation:fadeIn .5s ease;animation:fadeIn .5s ease;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.markdow-part{padding:20px 0;font-size:16px;line-height:1.7}.markdow-part h2{padding-top:20px;padding-bottom:20px}.markdow-part h3{padding-top:15px;padding-bottom:15px}.markdow-part li{list-style-type:disc}.markdow-part pre{box-shadow:0 4px 12px 0 rgba(0,0,0,.05);padding:24px;border-radius:4px;overflow-x:scroll;display:block;margin-bottom:50px}.markdow-part pre,.markdow-part pre code{background-color:#f6f8fa}.markdow-part code{background:#f3f4f4;border-radius:4px;display:inline;font-size:14px;padding:10px 15px}.pdf-outer{min-height:500px;height:500px}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}",
        ""
      ]);
    },
    207(t, e, r) {
      r.r(e);
      r(59), r(20);
      let n;
      const o = r(3);
      const d = {
        asyncData:
          ((n = Object(o.a)(
            regeneratorRuntime.mark(function t(e) {
              let n;
              let o;
              let d;
              let c;
              let html;
              return regeneratorRuntime.wrap(
                t => {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.params),
                          (o = e.error),
                          (t.prev = 1),
                          (t.next = 4),
                          r(195)("./".concat(n.type, "/").concat(n.name, ".md"))
                        );
                      case 4:
                        (d = t.sent), (t.next = 11);
                        break;
                      case 7:
                        if (
                          ((t.prev = 7),
                          (t.t0 = t.catch(1)),
                          t.t0.code !== "MODULE_NOT_FOUND")
                        ) {
                          t.next = 11;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          o({ statusCode: 404, message: "noeeet found" })
                        );
                      case 11:
                        return (
                          (c = d.attributes),
                          (html = d.html),
                          t.abrupt("return", {
                            title: c.title,
                            author: c.author,
                            date: c.date,
                            description: c.description,
                            html,
                            noMainImage: c.noMainImage,
                            name: c.name,
                            type: n.type,
                            pdfUrl: c.pdfname
                              ? "http://localhost:3333/pdf/".concat(
                                  c.pdfname,
                                  ".pdf"
                                )
                              : ""
                          })
                        );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                  }
                },
                t,
                null,
                [[1, 7]]
              );
            })
          )),
          function(t) {
            return n.apply(this, arguments);
          }),
        head() {
          return { title: this.title };
        },
        transition: { name: "slide-fade" }
      };
      const c = (r(196), r(6));
      const component = Object(c.a)(
        d,
        function() {
          const t = this;
          const e = t.$createElement;
          const r = t._self._c || e;
          return r("div", { staticClass: "article-detail" }, [
            r("div", { staticClass: "intro" }, [
              r("div", { staticClass: "elevate-cover" }, [
                r("div", [
                  r("span", { staticClass: "date" }, [
                    t._v(`${t._s(t.date)}-${t._s(t.author)}`)
                  ]),
                  t._v(" "),
                  r("h1", { staticClass: "title" }, [
                    t._v(
                      `\n                    ${t._s(t.title)}\n                `
                    )
                  ]),
                  t._v(" "),
                  r("p", { staticClass: "description" }, [
                    t._v(
                      `\n                    ${t._s(
                        t.description
                      )}\n                `
                    )
                  ])
                ]),
                t._v(" "),
                r("div", { staticClass: "img" }, [
                  r("img", {
                    attrs: {
                      src: `/images/${t.type}/${t.name}/_main.jpg`
                    }
                  })
                ])
              ])
            ]),
            t._v(" "),
            r("div", {
              staticClass: "markdow-part",
              domProps: { innerHTML: t._s(t.html) }
            }),
            t._v(" "),
            t.pdfUrl
              ? r("div", { staticClass: "pdf-outer" }, [
                  r(
                    "iframe",
                    {
                      attrs: {
                        src: `/third-party/pdfjs/web/viewer.html?file=${t.pdfUrl}`,
                        width: "100%",
                        height: "100%",
                        scrolling: "no"
                      }
                    },
                    [t._v("\n            您的浏览器不支持PDF阅读\n        ")]
                  )
                ])
              : t._e()
          ]);
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
