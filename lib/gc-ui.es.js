import { defineComponent as L, ref as E, computed as x, watchEffect as ee, resolveComponent as te, createElementBlock as M, openBlock as u, createVNode as w, unref as o, withCtx as g, Fragment as I, renderList as z, createBlock as h, createCommentVNode as _, createElementVNode as ae, createTextVNode as O, shallowRef as ne, h as oe, reactive as G, onMounted as le, toRefs as re, renderSlot as N, toDisplayString as se, mergeProps as Y, nextTick as $ } from "vue";
import { TreeSelect as j, Form as K, Row as ce, Col as F, FormItem as Q, Input as W, DatePicker as ie, RangePicker as ue, Select as q, Space as J, Button as P, message as B, Table as ve, Modal as H, Switch as de, InputNumber as me } from "ant-design-vue";
import { isArray as fe, isString as ge, isNumber as he } from "lodash-es";
const ye = { class: "table-page-search-wrapper mrgin-bottom-16" }, ke = { class: "table-page-search-submitButtons" }, be = {
  name: "BaseSearch"
}, we = /* @__PURE__ */ L({
  ...be,
  props: {
    searchOptions: {
      type: Object,
      default: () => {
      }
    },
    enableExport: {
      type: Boolean,
      default: !1
    },
    enableImport: {
      type: Boolean,
      default: !1
    },
    enableCreate: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["search", "reset", "create", "import", "export"],
  setup(v, { expose: b, emit: k }) {
    const n = j.SHOW_PARENT, y = v, m = k, t = E({}), d = x(() => {
      const c = {};
      return Object.keys(t.value).forEach((a) => {
        fe(t.value[a]) && t.value[a].find((C) => C === "tree-all") || t.value[a] !== null && t.value[a] !== void 0 && (c[a] = t.value[a]);
      }), c;
    }), r = (c) => c === "hour" || !c ? "date" : c, s = (c) => c === "hour" ? { format: "HH:mm:ss" } : !1, f = (c) => {
      switch (c) {
        case "hour":
          return "YYYY-MM-DD HH:mm:ss";
        case "date":
          return "YYYY-MM-DD";
        case "month":
          return "YYYY-MM";
        case "year":
          return "YYYY";
        default:
          return "YYYY-MM-DD";
      }
    }, U = () => {
      t.value = {};
      const c = y.searchOptions || {};
      Object.keys(c).forEach((a) => {
        c[a].type.toLowerCase() === "treeselect" && (t.value[a] = ["tree-all"]);
      }), m("reset", d.value);
    }, p = (c = !0) => {
      console.log(d.value), m("search", d.value, c);
    }, S = () => {
      console.log("导出"), m("export", d.value);
    }, R = () => {
      console.log("导入"), m("import", d.value);
    }, T = () => {
      m("create");
    }, A = (c = {}, a = !0) => {
      t.value = { ...t.value, ...c }, p(a);
    };
    return ee(() => {
      t.value = {};
      const c = y.searchOptions;
      Object.keys(c).forEach((a) => {
        c[a].type.toLowerCase() === "treeselect" && (t.value[a] = ["tree-all"]);
      });
    }), b({
      setQueryParam: A,
      onSearch: p,
      onReset: U,
      onImport: R,
      onExport: S
    }), (c, a) => {
      const C = te("a-input-number");
      return u(), M("div", ye, [
        w(o(K), { colon: !1 }, {
          default: g(() => [
            w(o(ce), { gutter: 24 }, {
              default: g(() => [
                (u(!0), M(I, null, z(v.searchOptions, (e, l) => (u(), h(o(F), {
                  key: l,
                  md: 6,
                  sm: 24
                }, {
                  default: g(() => [
                    w(o(Q), {
                      label: e.label
                    }, {
                      default: g(() => [
                        e.type.toLowerCase() === "number" ? (u(), h(C, {
                          key: 0,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          valueModifiers: { trim: !0 },
                          max: 99999999,
                          placeholder: "请输入" + e.label,
                          controls: !1,
                          style: { width: "100%" }
                        }, null, 8, ["value", "onUpdate:value", "placeholder"])) : _("", !0),
                        e.type.toLowerCase() === "string" ? (u(), h(o(W), {
                          key: 1,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          valueModifiers: { trim: !0 },
                          placeholder: "请输入" + e.label
                        }, null, 8, ["value", "onUpdate:value", "placeholder"])) : e.type.toLowerCase() === "datapicker" ? (u(), h(o(ie), {
                          key: 2,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          picker: r(e == null ? void 0 : e.picker),
                          "show-time": s(e == null ? void 0 : e.picker),
                          format: f(e == null ? void 0 : e.picker),
                          "value-format": f(e == null ? void 0 : e.picker),
                          style: { width: "100%" }
                        }, null, 8, ["value", "onUpdate:value", "picker", "show-time", "format", "value-format"])) : e.type.toLowerCase() === "rangepicker" ? (u(), h(o(ue), {
                          key: 3,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          picker: r(e == null ? void 0 : e.picker),
                          "show-time": s(e == null ? void 0 : e.picker),
                          format: f(e == null ? void 0 : e.picker),
                          "value-format": f(e == null ? void 0 : e.picker),
                          style: { width: "100%" }
                        }, null, 8, ["value", "onUpdate:value", "picker", "show-time", "format", "value-format"])) : e.type.toLowerCase() === "select" ? (u(), h(o(q), {
                          key: 4,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          placeholder: "请选择" + e.label,
                          options: e.options
                        }, null, 8, ["value", "onUpdate:value", "placeholder", "options"])) : e.type.toLowerCase() === "treeselect" ? (u(), h(o(j), {
                          key: 5,
                          value: t.value[e.name],
                          "onUpdate:value": (i) => t.value[e.name] = i,
                          "max-tag-count": 1,
                          "show-checked-strategy": o(n),
                          "tree-data": [
                            {
                              label: "全部",
                              value: "tree-all",
                              children: e.options
                            }
                          ],
                          "tree-checkable": "",
                          "tree-default-expand-all": "",
                          "allow-clear": "",
                          placeholder: "请选择" + e.label,
                          "tree-node-filter-prop": "label"
                        }, null, 8, ["value", "onUpdate:value", "show-checked-strategy", "tree-data", "placeholder"])) : _("", !0)
                      ]),
                      _: 2
                    }, 1032, ["label"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                w(o(F), {
                  md: 6,
                  sm: 24
                }, {
                  default: g(() => [
                    ae("span", ke, [
                      w(o(J), null, {
                        default: g(() => [
                          w(o(P), {
                            type: "primary",
                            onClick: a[0] || (a[0] = (e) => p())
                          }, {
                            default: g(() => a[3] || (a[3] = [
                              O("查询")
                            ])),
                            _: 1
                          }),
                          w(o(P), { onClick: U }, {
                            default: g(() => a[4] || (a[4] = [
                              O("重置")
                            ])),
                            _: 1
                          }),
                          v.enableCreate ? (u(), h(o(P), {
                            key: 0,
                            type: "primary",
                            class: "create",
                            onClick: T
                          }, {
                            default: g(() => a[5] || (a[5] = [
                              O("新增")
                            ])),
                            _: 1
                          })) : _("", !0),
                          v.enableExport ? (u(), h(o(P), {
                            key: 1,
                            type: "primary",
                            onClick: a[1] || (a[1] = (e) => S())
                          }, {
                            default: g(() => a[6] || (a[6] = [
                              O("导出")
                            ])),
                            _: 1
                          })) : _("", !0),
                          v.enableImport ? (u(), h(o(P), {
                            key: 2,
                            type: "primary",
                            onClick: a[2] || (a[2] = (e) => R())
                          }, {
                            default: g(() => a[7] || (a[7] = [
                              O("导入")
                            ])),
                            _: 1
                          })) : _("", !0)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Ce = (v, b) => {
  const k = v.__vccOpts || v;
  for (const [n, y] of b)
    k[n] = y;
  return k;
}, Se = /* @__PURE__ */ Ce(we, [["__scopeId", "data-v-df7c24fc"]]), pe = (v) => {
  console.log(v);
  const { searchOptions: b, ...k } = v, n = ne(), y = L((t, { attrs: d }) => () => oe(Se, {
    searchOptions: b,
    ref: n,
    ...k,
    ...t,
    ...d
  })), m = new Proxy({}, {
    get(t, d) {
      return () => {
        var r, s;
        return (s = (r = n.value) == null ? void 0 : r[d]) == null ? void 0 : s.call(r);
      };
    }
  });
  return [y, m];
}, _e = (v, b = !0, k) => {
  const n = G({
    search: {},
    tableData: [],
    selectedRowKeys: [],
    // 被选中的列表
    pagination: {
      size: "default",
      // position: ['bottomCenter'],
      current: 1,
      pageSize: 10,
      total: 0,
      showSizeChanger: !0,
      pageSizeOptions: ["10", "20", "30", "40", "50"],
      showTotal: (s) => `共${s}条数据`,
      onChange: (s, f) => {
        r(s, f);
      }
    },
    /** 选中操作 */
    rowSelection: {
      checkStrictly: !0,
      onChange: (s) => {
        n.selectedRowKeys = s;
      }
    }
  }), y = () => {
    const { pagination: { current: s, pageSize: f } = {} } = n, U = ge(k) || he(k) ? k : { ...k, ...n.search }, p = {
      page: {
        page: s,
        size: f
      },
      param: U
    };
    if (!v) return B.error("API.getPage参数不存在");
    v(p).then((S) => {
      console.log(S, "res"), n.tableData = S.records, n.pagination.total = S.total, n.pagination.pageSize = f, n.pagination.current = s;
    });
  }, m = (s = {}, f = !0) => {
    f && (n.pagination.current = 1, n.pagination.pageSize = 10), n.search = s, y();
  }, t = (s = {}) => {
    n.pagination.current = 1, n.pagination.pageSize = 10, n.search = { ...s }, y();
  }, d = (s, ...f) => {
    k = s, m(...f);
  }, r = (s, f) => {
    n.pagination.pageSize = f, n.pagination.current = s, y();
  };
  return le(() => {
    b && y();
  }), {
    ...re(n),
    search: n.search,
    onSearch: m,
    onReset: t,
    onSetParam: d
  };
}, Ue = /* @__PURE__ */ L({
  __name: "index",
  props: {
    options: {}
  },
  setup(v) {
    const b = v, k = x(() => b.options.search), n = x(() => b.options.table), y = x(() => b.options.modal), m = x(() => b.options.API), t = E(0), d = E(), r = G({
      name: ""
    }), s = () => {
      console.log("新增"), t.value = 1;
    }, f = (C, e) => {
      switch (C) {
        case 1:
          console.log("编辑"), m.value.detailApi(e).then((l) => {
            console.log(l), t.value = 1, $(() => {
              Object.assign(r, l);
            });
          });
          break;
        case 2:
          m.value.detailApi(e).then((l) => {
            t.value = 2, $(() => {
              Object.assign(r, l);
            });
          }), console.log("查看");
          break;
        case 3:
          H.confirm({
            title: "确定删除吗？",
            content: "删除后不可恢复",
            onOk: () => {
              m.value.delApi(e).then(() => {
                B.success("删除成功"), a.onSearch();
              });
            },
            onCancel: () => {
            }
          }), console.log("删除");
          break;
      }
    }, U = async () => {
      if (console.log(111), t.value === 1 && d.value)
        try {
          await d.value.validateFields(), console.log(r), r.id && await m.value.putApi(r), r.id || await m.value.postApi(r), await d.value.resetFields(), t.value = 0, a.onSearch(), B.success("操作成功");
        } catch (C) {
          console.log(C);
        }
      else
        t.value = 0;
    }, p = () => {
      d.value && (console.log(1), d.value.resetFields()), t.value = 0;
    }, { tableData: S, pagination: R, onSearch: T, onReset: A } = _e(
      m.value.getPage,
      n.value.init || !0,
      n.value.initParam
    ), [c, a] = pe({
      ...k.value,
      onCreate: s,
      onSearch: T,
      onReset: A
    });
    return (C, e) => (u(), M("div", null, [
      w(o(c)),
      w(o(ve), {
        bordered: n.value.bordered || !0,
        columns: n.value.columns,
        "data-source": o(S),
        "row-key": n.value.rowKey || "id",
        scroll: n.value.scroll,
        pagination: o(R)
      }, {
        bodyCell: g(({ column: l, record: i, text: X, index: Z }) => [
          N(C.$slots, "bodyCell", {
            column: l,
            record: i,
            text: X,
            index: Z
          }),
          l.dataIndex === "action" ? (u(), h(o(J), { key: 0 }, {
            default: g(() => [
              (u(!0), M(I, null, z(n.value.actions, (D, V) => (u(), h(o(P), {
                key: V,
                type: D.type,
                onClick: (Oe) => f(D.key, i.id)
              }, {
                default: g(() => [
                  O(se(D.label), 1)
                ]),
                _: 2
              }, 1032, ["type", "onClick"]))), 128)),
              N(C.$slots, "action", { record: i })
            ]),
            _: 2
          }, 1024)) : _("", !0)
        ]),
        _: 3
      }, 8, ["bordered", "columns", "data-source", "row-key", "scroll", "pagination"]),
      w(o(H), {
        title: y.value.title,
        open: t.value !== 0,
        "destroy-on-close": "",
        onOk: U,
        onCancel: p
      }, {
        default: g(() => [
          w(o(K), Y(y.value.form.config, {
            ref_key: "formRef",
            ref: d,
            model: r,
            disabled: t.value !== 1
          }), {
            default: g(() => [
              (u(!0), M(I, null, z(y.value.form.fields, (l) => (u(), h(o(Q), Y({
                key: l.name,
                ref_for: !0
              }, l), {
                default: g(() => [
                  l.type === "switch" ? (u(), h(o(de), Y({
                    key: 0,
                    checked: r[l.name],
                    "onUpdate:checked": (i) => r[l.name] = i,
                    ref_for: !0
                  }, l.config), null, 16, ["checked", "onUpdate:checked"])) : l.type === "select" ? (u(), h(o(q), Y({
                    key: 1,
                    value: r[l.name],
                    "onUpdate:value": (i) => r[l.name] = i,
                    ref_for: !0
                  }, l.config), null, 16, ["value", "onUpdate:value"])) : l.type === "input" ? (u(), h(o(W), Y({
                    key: 2,
                    value: r[l.name],
                    "onUpdate:value": (i) => r[l.name] = i,
                    ref_for: !0
                  }, l.config), null, 16, ["value", "onUpdate:value"])) : l.type === "number" ? (u(), h(o(me), Y({
                    key: 3,
                    value: r[l.name],
                    "onUpdate:value": (i) => r[l.name] = i,
                    ref_for: !0
                  }, l.config), null, 16, ["value", "onUpdate:value"])) : _("", !0)
                ]),
                _: 2
              }, 1040))), 128))
            ]),
            _: 1
          }, 16, ["model", "disabled"])
        ]),
        _: 1
      }, 8, ["title", "open"])
    ]));
  }
}), Ye = (v) => (v.component("GTablePage", Ue), v), Re = {
  install: Ye
};
export {
  Ue as GTablePage,
  Re as default
};
