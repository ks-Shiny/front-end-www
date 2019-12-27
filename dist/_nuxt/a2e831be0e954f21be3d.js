(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    174(t, n, e) {
      let content = e(190);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(14).default)("5049df56", content, !0, { sourceMap: !1 });
    },
    189(t, n, e) {
      const o = e(174);
      e.n(o).a;
    },
    190(t, n, e) {
      (t.exports = e(13)(!1)).push([
        t.i,
        ".joinus .joinus-banner{width:100%;height:450px;background:#eee8aa}.joinus .m-b-item{margin-bottom:24px}.joinus .position-list{margin:67px auto 50px 360px}.joinus .position-list .position-item{margin-bottom:116px;font-size:18px;line-height:25px;color:#fff}.joinus .position-list .position-item:last-child{margin-bottom:0}.joinus .position-list .position-item .subtype{color:#a6a6a6;margin-top:8px;display:block;font-size:12px}.joinus .position-list .position-item .list{margin-top:8px;list-style:none}.joinus .position-list .position-item .list .item{line-height:26px;color:#d9d9d9;font-size:14px}.joinus .position-list .position-item .subdetail{font-size:14px;line-height:26px;margin-top:16px;display:block}",
        ""
      ]);
    },
    210(t, n, e) {
      e.r(n);
      const o = {
        data() {
          return {
            list: [
              {
                name: "高级运维工程师",
                type: "运维测试类",
                duty: [
                  "负责业务系统部署方案评估、后台的搭建、部署、监控、故障处理、调优、升级、日常维护和管理工作；",
                  "负责业务服务器系统部署、应用调整和优化，增强系统可用性；",
                  "负责大流量、高并发系统下服务器系统部署方案的运维保障；"
                ],
                require: [
                  "有2年以上运维和服务器集群管理经验；",
                  "熟练使用Linux/unix操作系统；",
                  "精通Shell编程，并熟练掌握Perl、PHP、Python之一的脚本编程；",
                  "熟悉TCP/IP、HTTP等协议，有良好的网络、存储、安全、计算机体系结构方面的知识；",
                  "熟悉Linux系统、Nginx、PHP、IPTABLES等，了解cvm，docker等虚拟化技术；",
                  "熟悉MySQL、Redis、MongoDB运维及云平台日常操作；",
                  "熟练使用阿里云、百度云等云平台，具备公有云相关运维经验优先考虑；",
                  "熟练掌握docker相关技术，有docker平台开发或运维管理经验者优先；",
                  "掌握Kubernetes等编排服务框架者优先；",
                  "对运维工作兴趣浓厚，具备较强的运维技能；"
                ],
                place: "北京",
                mail: "yumeng@wdcloud.cc"
              },
              {
                name: "高级运维工程师",
                type: "运维测试类",
                duty: [
                  "负责业务系统部署方案评估、后台的搭建、部署、监控、故障处理、调优、升级、日常维护和管理工作；",
                  "负责业务服务器系统部署、应用调整和优化，增强系统可用性；",
                  "负责大流量、高并发系统下服务器系统部署方案的运维保障；"
                ],
                require: [
                  "有2年以上运维和服务器集群管理经验；",
                  "熟练使用Linux/unix操作系统；",
                  "精通Shell编程，并熟练掌握Perl、PHP、Python之一的脚本编程；",
                  "熟悉TCP/IP、HTTP等协议，有良好的网络、存储、安全、计算机体系结构方面的知识；",
                  "熟悉Linux系统、Nginx、PHP、IPTABLES等，了解cvm，docker等虚拟化技术；",
                  "熟悉MySQL、Redis、MongoDB运维及云平台日常操作；",
                  "熟练使用阿里云、百度云等云平台，具备公有云相关运维经验优先考虑；",
                  "熟练掌握docker相关技术，有docker平台开发或运维管理经验者优先；",
                  "掌握Kubernetes等编排服务框架者优先；",
                  "对运维工作兴趣浓厚，具备较强的运维技能；"
                ],
                place: "北京",
                mail: "yumeng@wdcloud.cc"
              }
            ]
          };
        }
      };
      const l = (e(189), e(6));
      const component = Object(l.a)(
        o,
        function() {
          const t = this;
          const n = t.$createElement;
          const e = t._self._c || n;
          return e("div", { staticClass: "joinus" }, [
            e("div", { staticClass: "joinus-banner" }),
            t._v(" "),
            e(
              "div",
              { staticClass: "position-list" },
              t._l(t.list, (n, o) =>
                e("div", { key: o, staticClass: "position-item" }, [
                  e("div", { staticClass: "name m-b-item" }, [
                    t._v(`\n                ${t._s(n.name)}\n                `),
                    e("span", { staticClass: "subtype" }, [
                      t._v(` ${t._s(n.type)} `)
                    ])
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "sublist m-b-item" }, [
                    t._v("\n                岗位职责\n                "),
                    e(
                      "ul",
                      { staticClass: "list" },
                      t._l(n.duty, (n, i) =>
                        e("li", { key: i, staticClass: "item" }, [
                          t._v(
                            `\n                        (${t._s(i + 1)})${t._s(
                              n
                            )}\n                    `
                          )
                        ])
                      ),
                      0
                    )
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "sublist m-b-item" }, [
                    t._v("\n                任职要求\n                "),
                    e(
                      "ul",
                      { staticClass: "list" },
                      t._l(n.require, (n, i) =>
                        e("li", { key: i, staticClass: "item" }, [
                          t._v(
                            `\n                        (${t._s(i + 1)})${t._s(
                              n
                            )}\n                    `
                          )
                        ])
                      ),
                      0
                    )
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "palce m-b-item" }, [
                    t._v("\n                工作地点\n                "),
                    e("span", { staticClass: "subdetail" }, [
                      t._v(t._s(n.place))
                    ])
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "mail" }, [
                    t._v("\n                联系邮箱\n                "),
                    e("span", { staticClass: "subdetail" }, [
                      t._v(t._s(n.mail))
                    ])
                  ])
                ])
              ),
              0
            )
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
      n.default = component.exports;
    }
  }
]);
