(() => {
  "use strict";
  function t(t) {
    this.type = t;
  }
  (t.prototype.init = function () {
    const t = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let t = 0; t < this.nodes.length; t++) {
      const e = this.nodes[t],
        n = e.dataset.da.trim().split(","),
        r = {};
      (r.element = e),
        (r.parent = e.parentNode),
        (r.destination = document.querySelector(n[0].trim())),
        (r.breakpoint = n[1] ? n[1].trim() : "767"),
        (r.place = n[2] ? n[2].trim() : "last"),
        (r.index = this.indexInParent(r.parent, r.element)),
        this.оbjects.push(r);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (t) {
          return (
            "(" + this.type + "-width: " + t.breakpoint + "px)," + t.breakpoint
          );
        },
        this,
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (t, e, n) {
          return Array.prototype.indexOf.call(n, t) === e;
        },
      ));
    for (let e = 0; e < this.mediaQueries.length; e++) {
      const n = this.mediaQueries[e],
        r = String.prototype.split.call(n, ","),
        o = window.matchMedia(r[0]),
        i = r[1],
        s = Array.prototype.filter.call(this.оbjects, function (t) {
          return t.breakpoint === i;
        });
      o.addListener(function () {
        t.mediaHandler(o, s);
      }),
        this.mediaHandler(o, s);
    }
  }),
    (t.prototype.mediaHandler = function (t, e) {
      if (t.matches)
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (t.prototype.moveTo = function (t, e, n) {
      e.classList.add(this.daClassname),
        "last" === t || t >= n.children.length
          ? n.insertAdjacentElement("beforeend", e)
          : "first" !== t
          ? n.children[t].insertAdjacentElement("beforebegin", e)
          : n.insertAdjacentElement("afterbegin", e);
    }),
    (t.prototype.moveBack = function (t, e, n) {
      e.classList.remove(this.daClassname),
        void 0 !== t.children[n]
          ? t.children[n].insertAdjacentElement("beforebegin", e)
          : t.insertAdjacentElement("beforeend", e);
    }),
    (t.prototype.indexInParent = function (t, e) {
      const n = Array.prototype.slice.call(t.children);
      return Array.prototype.indexOf.call(n, e);
    }),
    (t.prototype.arraySort = function (t) {
      "min" === this.type
        ? Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? -1
                : "last" === t.place || "first" === e.place
                ? 1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          })
        : Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? 1
                : "last" === t.place || "first" === e.place
                ? -1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          });
    });
  new t("max").init();
  let e = !0,
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < r.length; t++) {
            r[t].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    r = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < r.length; t++) {
          r[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function o(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  let i = (t, e = !1, r = 500, i = 0) => {
    const s = document.querySelector(t);
    if (s) {
      let a = "",
        l = 0;
      e &&
        ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: r,
        header: a,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (n(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(s, "", c);
      else {
        let t = s.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
      }
      o(`[gotoBlock]: Юхуу...едем к ${t}`);
    } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
  };
  let s = !1;
  var a, l;
  function c(t) {
    return "object" == typeof t && "function" == typeof t.to;
  }
  function u(t) {
    t.parentElement.removeChild(t);
  }
  function d(t) {
    return null != t;
  }
  function p(t) {
    t.preventDefault();
  }
  function f(t) {
    return "number" == typeof t && !isNaN(t) && isFinite(t);
  }
  function h(t, e, n) {
    n > 0 &&
      (b(t, e),
      setTimeout(function () {
        S(t, e);
      }, n));
  }
  function m(t) {
    return Math.max(Math.min(t, 100), 0);
  }
  function g(t) {
    return Array.isArray(t) ? t : [t];
  }
  function v(t) {
    var e = (t = String(t)).split(".");
    return e.length > 1 ? e[1].length : 0;
  }
  function b(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.add(e)
      : (t.className += " " + e);
  }
  function S(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.remove(e)
      : (t.className = t.className.replace(
          new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
          " ",
        ));
  }
  function y(t) {
    var e = void 0 !== window.pageXOffset,
      n = "CSS1Compat" === (t.compatMode || "");
    return {
      x: e
        ? window.pageXOffset
        : n
        ? t.documentElement.scrollLeft
        : t.body.scrollLeft,
      y: e
        ? window.pageYOffset
        : n
        ? t.documentElement.scrollTop
        : t.body.scrollTop,
    };
  }
  function x(t, e) {
    return 100 / (e - t);
  }
  function w(t, e, n) {
    return (100 * e) / (t[n + 1] - t[n]);
  }
  function E(t, e) {
    for (var n = 1; t >= e[n]; ) n += 1;
    return n;
  }
  function A(t, e, n) {
    if (n >= t.slice(-1)[0]) return 100;
    var r = E(n, t),
      o = t[r - 1],
      i = t[r],
      s = e[r - 1],
      a = e[r];
    return (
      s +
      (function (t, e) {
        return w(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
      })([o, i], n) /
        x(s, a)
    );
  }
  function C(t, e, n, r) {
    if (100 === r) return r;
    var o = E(r, t),
      i = t[o - 1],
      s = t[o];
    return n
      ? r - i > (s - i) / 2
        ? s
        : i
      : e[o - 1]
      ? t[o - 1] +
        (function (t, e) {
          return Math.round(t / e) * e;
        })(r - t[o - 1], e[o - 1])
      : r;
  }
  setTimeout(() => {
    if (s) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (function (t) {
      (t.Range = "range"),
        (t.Steps = "steps"),
        (t.Positions = "positions"),
        (t.Count = "count"),
        (t.Values = "values");
    })(a || (a = {})),
    (function (t) {
      (t[(t.None = -1)] = "None"),
        (t[(t.NoValue = 0)] = "NoValue"),
        (t[(t.LargeValue = 1)] = "LargeValue"),
        (t[(t.SmallValue = 2)] = "SmallValue");
    })(l || (l = {}));
  var k = (function () {
      function t(t, e, n) {
        var r;
        (this.xPct = []),
          (this.xVal = []),
          (this.xSteps = []),
          (this.xNumSteps = []),
          (this.xHighestCompleteStep = []),
          (this.xSteps = [n || !1]),
          (this.xNumSteps = [!1]),
          (this.snap = e);
        var o = [];
        for (
          Object.keys(t).forEach(function (e) {
            o.push([g(t[e]), e]);
          }),
            o.sort(function (t, e) {
              return t[0][0] - e[0][0];
            }),
            r = 0;
          r < o.length;
          r++
        )
          this.handleEntryPoint(o[r][1], o[r][0]);
        for (
          this.xNumSteps = this.xSteps.slice(0), r = 0;
          r < this.xNumSteps.length;
          r++
        )
          this.handleStepPoint(r, this.xNumSteps[r]);
      }
      return (
        (t.prototype.getDistance = function (t) {
          for (var e = [], n = 0; n < this.xNumSteps.length - 1; n++)
            e[n] = w(this.xVal, t, n);
          return e;
        }),
        (t.prototype.getAbsoluteDistance = function (t, e, n) {
          var r,
            o = 0;
          if (t < this.xPct[this.xPct.length - 1])
            for (; t > this.xPct[o + 1]; ) o++;
          else
            t === this.xPct[this.xPct.length - 1] && (o = this.xPct.length - 2);
          n || t !== this.xPct[o + 1] || o++, null === e && (e = []);
          var i = 1,
            s = e[o],
            a = 0,
            l = 0,
            c = 0,
            u = 0;
          for (
            r = n
              ? (t - this.xPct[o]) / (this.xPct[o + 1] - this.xPct[o])
              : (this.xPct[o + 1] - t) / (this.xPct[o + 1] - this.xPct[o]);
            s > 0;

          )
            (a = this.xPct[o + 1 + u] - this.xPct[o + u]),
              e[o + u] * i + 100 - 100 * r > 100
                ? ((l = a * r), (i = (s - 100 * r) / e[o + u]), (r = 1))
                : ((l = ((e[o + u] * a) / 100) * i), (i = 0)),
              n
                ? ((c -= l), this.xPct.length + u >= 1 && u--)
                : ((c += l), this.xPct.length - u >= 1 && u++),
              (s = e[o + u] * i);
          return t + c;
        }),
        (t.prototype.toStepping = function (t) {
          return (t = A(this.xVal, this.xPct, t));
        }),
        (t.prototype.fromStepping = function (t) {
          return (function (t, e, n) {
            if (n >= 100) return t.slice(-1)[0];
            var r = E(n, e),
              o = t[r - 1],
              i = t[r],
              s = e[r - 1];
            return (function (t, e) {
              return (e * (t[1] - t[0])) / 100 + t[0];
            })([o, i], (n - s) * x(s, e[r]));
          })(this.xVal, this.xPct, t);
        }),
        (t.prototype.getStep = function (t) {
          return (t = C(this.xPct, this.xSteps, this.snap, t));
        }),
        (t.prototype.getDefaultStep = function (t, e, n) {
          var r = E(t, this.xPct);
          return (
            (100 === t || (e && t === this.xPct[r - 1])) &&
              (r = Math.max(r - 1, 1)),
            (this.xVal[r] - this.xVal[r - 1]) / n
          );
        }),
        (t.prototype.getNearbySteps = function (t) {
          var e = E(t, this.xPct);
          return {
            stepBefore: {
              startValue: this.xVal[e - 2],
              step: this.xNumSteps[e - 2],
              highestStep: this.xHighestCompleteStep[e - 2],
            },
            thisStep: {
              startValue: this.xVal[e - 1],
              step: this.xNumSteps[e - 1],
              highestStep: this.xHighestCompleteStep[e - 1],
            },
            stepAfter: {
              startValue: this.xVal[e],
              step: this.xNumSteps[e],
              highestStep: this.xHighestCompleteStep[e],
            },
          };
        }),
        (t.prototype.countStepDecimals = function () {
          var t = this.xNumSteps.map(v);
          return Math.max.apply(null, t);
        }),
        (t.prototype.hasNoSize = function () {
          return this.xVal[0] === this.xVal[this.xVal.length - 1];
        }),
        (t.prototype.convert = function (t) {
          return this.getStep(this.toStepping(t));
        }),
        (t.prototype.handleEntryPoint = function (t, e) {
          var n;
          if (
            !f((n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) ||
            !f(e[0])
          )
            throw new Error("noUiSlider: 'range' value isn't numeric.");
          this.xPct.push(n), this.xVal.push(e[0]);
          var r = Number(e[1]);
          n
            ? this.xSteps.push(!isNaN(r) && r)
            : isNaN(r) || (this.xSteps[0] = r),
            this.xHighestCompleteStep.push(0);
        }),
        (t.prototype.handleStepPoint = function (t, e) {
          if (e)
            if (this.xVal[t] !== this.xVal[t + 1]) {
              this.xSteps[t] =
                w([this.xVal[t], this.xVal[t + 1]], e, 0) /
                x(this.xPct[t], this.xPct[t + 1]);
              var n = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
                r = Math.ceil(Number(n.toFixed(3)) - 1),
                o = this.xVal[t] + this.xNumSteps[t] * r;
              this.xHighestCompleteStep[t] = o;
            } else this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t];
        }),
        t
      );
    })(),
    N = {
      to: function (t) {
        return void 0 === t ? "" : t.toFixed(2);
      },
      from: Number,
    },
    L = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub",
    },
    P = { tooltips: ".__tooltips", aria: ".__aria" };
  function V(t, e) {
    if (!f(e)) throw new Error("noUiSlider: 'step' is not numeric.");
    t.singleStep = e;
  }
  function U(t, e) {
    if (!f(e))
      throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }
  function _(t, e) {
    if (!f(e))
      throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    t.keyboardMultiplier = e;
  }
  function M(t, e) {
    if (!f(e))
      throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }
  function D(t, e) {
    if ("object" != typeof e || Array.isArray(e))
      throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max)
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    t.spectrum = new k(e, t.snap || !1, t.singleStep);
  }
  function O(t, e) {
    if (((e = g(e)), !Array.isArray(e) || !e.length))
      throw new Error("noUiSlider: 'start' option is incorrect.");
    (t.handles = e.length), (t.start = e);
  }
  function j(t, e) {
    if ("boolean" != typeof e)
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
    t.snap = e;
  }
  function H(t, e) {
    if ("boolean" != typeof e)
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
    t.animate = e;
  }
  function T(t, e) {
    if ("number" != typeof e)
      throw new Error(
        "noUiSlider: 'animationDuration' option must be a number.",
      );
    t.animationDuration = e;
  }
  function q(t, e) {
    var n,
      r = [!1];
    if (
      ("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]),
      !0 === e || !1 === e)
    ) {
      for (n = 1; n < t.handles; n++) r.push(e);
      r.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count.",
        );
      r = e;
    }
    t.connect = r;
  }
  function R(t, e) {
    switch (e) {
      case "horizontal":
        t.ort = 0;
        break;
      case "vertical":
        t.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function z(t, e) {
    if (!f(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }
  function F(t, e) {
    if (!f(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
      throw new Error(
        "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.",
      );
  }
  function B(t, e) {
    var n;
    if (!f(e) && !Array.isArray(e))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
      );
    if (Array.isArray(e) && 2 !== e.length && !f(e[0]) && !f(e[1]))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
      );
    if (0 !== e) {
      for (
        Array.isArray(e) || (e = [e, e]),
          t.padding = [
            t.spectrum.getDistance(e[0]),
            t.spectrum.getDistance(e[1]),
          ],
          n = 0;
        n < t.spectrum.xNumSteps.length - 1;
        n++
      )
        if (t.padding[0][n] < 0 || t.padding[1][n] < 0)
          throw new Error(
            "noUiSlider: 'padding' option must be a positive number(s).",
          );
      var r = e[0] + e[1],
        o = t.spectrum.xVal[0];
      if (r / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - o) > 1)
        throw new Error(
          "noUiSlider: 'padding' option must not exceed 100% of the range.",
        );
    }
  }
  function I(t, e) {
    switch (e) {
      case "ltr":
        t.dir = 0;
        break;
      case "rtl":
        t.dir = 1;
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function Y(t, e) {
    if ("string" != typeof e)
      throw new Error(
        "noUiSlider: 'behaviour' must be a string containing options.",
      );
    var n = e.indexOf("tap") >= 0,
      r = e.indexOf("drag") >= 0,
      o = e.indexOf("fixed") >= 0,
      i = e.indexOf("snap") >= 0,
      s = e.indexOf("hover") >= 0,
      a = e.indexOf("unconstrained") >= 0,
      l = e.indexOf("drag-all") >= 0,
      c = e.indexOf("smooth-steps") >= 0;
    if (o) {
      if (2 !== t.handles)
        throw new Error(
          "noUiSlider: 'fixed' behaviour must be used with 2 handles",
        );
      z(t, t.start[1] - t.start[0]);
    }
    if (a && (t.margin || t.limit))
      throw new Error(
        "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit",
      );
    t.events = {
      tap: n || i,
      drag: r,
      dragAll: l,
      smoothSteps: c,
      fixed: o,
      snap: i,
      hover: s,
      unconstrained: a,
    };
  }
  function Q(t, e) {
    if (!1 !== e)
      if (!0 === e || c(e)) {
        t.tooltips = [];
        for (var n = 0; n < t.handles; n++) t.tooltips.push(e);
      } else {
        if ((e = g(e)).length !== t.handles)
          throw new Error("noUiSlider: must pass a formatter for all handles.");
        e.forEach(function (t) {
          if ("boolean" != typeof t && !c(t))
            throw new Error(
              "noUiSlider: 'tooltips' must be passed a formatter or 'false'.",
            );
        }),
          (t.tooltips = e);
      }
  }
  function W(t, e) {
    if (e.length !== t.handles)
      throw new Error("noUiSlider: must pass a attributes for all handles.");
    t.handleAttributes = e;
  }
  function X(t, e) {
    if (!c(e))
      throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    t.ariaFormat = e;
  }
  function $(t, e) {
    if (
      !(function (t) {
        return c(t) && "function" == typeof t.from;
      })(e)
    )
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    t.format = e;
  }
  function G(t, e) {
    if ("boolean" != typeof e)
      throw new Error(
        "noUiSlider: 'keyboardSupport' option must be a boolean.",
      );
    t.keyboardSupport = e;
  }
  function J(t, e) {
    t.documentElement = e;
  }
  function K(t, e) {
    if ("string" != typeof e && !1 !== e)
      throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }
  function Z(t, e) {
    if ("object" != typeof e)
      throw new Error("noUiSlider: 'cssClasses' must be an object.");
    "string" == typeof t.cssPrefix
      ? ((t.cssClasses = {}),
        Object.keys(e).forEach(function (n) {
          t.cssClasses[n] = t.cssPrefix + e[n];
        }))
      : (t.cssClasses = e);
  }
  function tt(t) {
    var e = {
        margin: null,
        limit: null,
        padding: null,
        animate: !0,
        animationDuration: 300,
        ariaFormat: N,
        format: N,
      },
      n = {
        step: { r: !1, t: V },
        keyboardPageMultiplier: { r: !1, t: U },
        keyboardMultiplier: { r: !1, t: _ },
        keyboardDefaultStep: { r: !1, t: M },
        start: { r: !0, t: O },
        connect: { r: !0, t: q },
        direction: { r: !0, t: I },
        snap: { r: !1, t: j },
        animate: { r: !1, t: H },
        animationDuration: { r: !1, t: T },
        range: { r: !0, t: D },
        orientation: { r: !1, t: R },
        margin: { r: !1, t: z },
        limit: { r: !1, t: F },
        padding: { r: !1, t: B },
        behaviour: { r: !0, t: Y },
        ariaFormat: { r: !1, t: X },
        format: { r: !1, t: $ },
        tooltips: { r: !1, t: Q },
        keyboardSupport: { r: !0, t: G },
        documentElement: { r: !1, t: J },
        cssPrefix: { r: !0, t: K },
        cssClasses: { r: !0, t: Z },
        handleAttributes: { r: !1, t: W },
      },
      r = {
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: !0,
        cssPrefix: "noUi-",
        cssClasses: L,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
      };
    t.format && !t.ariaFormat && (t.ariaFormat = t.format),
      Object.keys(n).forEach(function (o) {
        if (d(t[o]) || void 0 !== r[o]) n[o].t(e, d(t[o]) ? t[o] : r[o]);
        else if (n[o].r)
          throw new Error("noUiSlider: '" + o + "' is required.");
      }),
      (e.pips = t.pips);
    var o = document.createElement("div"),
      i = void 0 !== o.style.msTransform,
      s = void 0 !== o.style.transform;
    e.transformRule = s ? "transform" : i ? "msTransform" : "webkitTransform";
    return (
      (e.style = [
        ["left", "top"],
        ["right", "bottom"],
      ][e.dir][e.ort]),
      e
    );
  }
  function et(t, e, n) {
    var r,
      o,
      i,
      s,
      c,
      f,
      v,
      x = window.navigator.pointerEnabled
        ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
        : window.navigator.msPointerEnabled
        ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
        : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend",
          },
      w =
        window.CSS &&
        CSS.supports &&
        CSS.supports("touch-action", "none") &&
        (function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("test", null, e);
          } catch (t) {}
          return t;
        })(),
      E = t,
      A = e.spectrum,
      C = [],
      k = [],
      N = [],
      L = 0,
      V = {},
      U = t.ownerDocument,
      _ = e.documentElement || U.documentElement,
      M = U.body,
      D = "rtl" === U.dir || 1 === e.ort ? 0 : 100;
    function O(t, e) {
      var n = U.createElement("div");
      return e && b(n, e), t.appendChild(n), n;
    }
    function j(t, n) {
      var r = O(t, e.cssClasses.origin),
        o = O(r, e.cssClasses.handle);
      if (
        (O(o, e.cssClasses.touchArea),
        o.setAttribute("data-handle", String(n)),
        e.keyboardSupport &&
          (o.setAttribute("tabindex", "0"),
          o.addEventListener("keydown", function (t) {
            return (function (t, n) {
              if (q() || R(n)) return !1;
              var r = ["Left", "Right"],
                o = ["Down", "Up"],
                i = ["PageDown", "PageUp"],
                s = ["Home", "End"];
              e.dir && !e.ort
                ? r.reverse()
                : e.ort && !e.dir && (o.reverse(), i.reverse());
              var a,
                l = t.key.replace("Arrow", ""),
                c = l === i[0],
                u = l === i[1],
                d = l === o[0] || l === r[0] || c,
                p = l === o[1] || l === r[1] || u,
                f = l === s[0],
                h = l === s[1];
              if (!(d || p || f || h)) return !0;
              if ((t.preventDefault(), p || d)) {
                var m = d ? 0 : 1,
                  g = vt(n)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = A.getDefaultStep(k[n], d, e.keyboardDefaultStep)),
                  (g *=
                    u || c ? e.keyboardPageMultiplier : e.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= d ? -1 : 1),
                  (a = C[n] + g);
              } else
                a = h
                  ? e.spectrum.xVal[e.spectrum.xVal.length - 1]
                  : e.spectrum.xVal[0];
              return (
                pt(n, A.toStepping(a), !0, !0),
                st("slide", n),
                st("update", n),
                st("change", n),
                st("set", n),
                !1
              );
            })(t, n);
          })),
        void 0 !== e.handleAttributes)
      ) {
        var i = e.handleAttributes[n];
        Object.keys(i).forEach(function (t) {
          o.setAttribute(t, i[t]);
        });
      }
      return (
        o.setAttribute("role", "slider"),
        o.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"),
        0 === n
          ? b(o, e.cssClasses.handleLower)
          : n === e.handles - 1 && b(o, e.cssClasses.handleUpper),
        (r.handle = o),
        r
      );
    }
    function H(t, n) {
      return !!n && O(t, e.cssClasses.connect);
    }
    function T(t, n) {
      return (
        !(!e.tooltips || !e.tooltips[n]) &&
        O(t.firstChild, e.cssClasses.tooltip)
      );
    }
    function q() {
      return E.hasAttribute("disabled");
    }
    function R(t) {
      return o[t].hasAttribute("disabled");
    }
    function z() {
      c &&
        (it("update" + P.tooltips),
        c.forEach(function (t) {
          t && u(t);
        }),
        (c = null));
    }
    function F() {
      z(),
        (c = o.map(T)),
        ot("update" + P.tooltips, function (t, n, r) {
          if (c && e.tooltips && !1 !== c[n]) {
            var o = t[n];
            !0 !== e.tooltips[n] && (o = e.tooltips[n].to(r[n])),
              (c[n].innerHTML = o);
          }
        });
    }
    function B(t, e) {
      return t.map(function (t) {
        return A.fromStepping(e ? A.getStep(t) : t);
      });
    }
    function I(t) {
      var e,
        n = (function (t) {
          if (t.mode === a.Range || t.mode === a.Steps) return A.xVal;
          if (t.mode === a.Count) {
            if (t.values < 2)
              throw new Error(
                "noUiSlider: 'values' (>= 2) required for mode 'count'.",
              );
            for (var e = t.values - 1, n = 100 / e, r = []; e--; ) r[e] = e * n;
            return r.push(100), B(r, t.stepped);
          }
          return t.mode === a.Positions
            ? B(t.values, t.stepped)
            : t.mode === a.Values
            ? t.stepped
              ? t.values.map(function (t) {
                  return A.fromStepping(A.getStep(A.toStepping(t)));
                })
              : t.values
            : [];
        })(t),
        r = {},
        o = A.xVal[0],
        i = A.xVal[A.xVal.length - 1],
        s = !1,
        c = !1,
        u = 0;
      return (
        (e = n.slice().sort(function (t, e) {
          return t - e;
        })),
        (n = e.filter(function (t) {
          return !this[t] && (this[t] = !0);
        }, {}))[0] !== o && (n.unshift(o), (s = !0)),
        n[n.length - 1] !== i && (n.push(i), (c = !0)),
        n.forEach(function (e, o) {
          var i,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            b,
            S,
            y = e,
            x = n[o + 1],
            w = t.mode === a.Steps;
          for (
            w && (i = A.xNumSteps[o]),
              i || (i = x - y),
              void 0 === x && (x = y),
              i = Math.max(i, 1e-7),
              d = y;
            d <= x;
            d = Number((d + i).toFixed(7))
          ) {
            for (
              v = (h = (f = A.toStepping(d)) - u) / (t.density || 1),
                S = h / (b = Math.round(v)),
                p = 1;
              p <= b;
              p += 1
            )
              r[(m = u + p * S).toFixed(5)] = [A.fromStepping(m), 0];
            (g =
              n.indexOf(d) > -1 ? l.LargeValue : w ? l.SmallValue : l.NoValue),
              !o && s && d !== x && (g = 0),
              (d === x && c) || (r[f.toFixed(5)] = [d, g]),
              (u = f);
          }
        }),
        r
      );
    }
    function Y(t, n, r) {
      var o,
        i,
        s = U.createElement("div"),
        a =
          (((o = {})[l.None] = ""),
          (o[l.NoValue] = e.cssClasses.valueNormal),
          (o[l.LargeValue] = e.cssClasses.valueLarge),
          (o[l.SmallValue] = e.cssClasses.valueSub),
          o),
        c =
          (((i = {})[l.None] = ""),
          (i[l.NoValue] = e.cssClasses.markerNormal),
          (i[l.LargeValue] = e.cssClasses.markerLarge),
          (i[l.SmallValue] = e.cssClasses.markerSub),
          i),
        u = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
        d = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
      function p(t, n) {
        var r = n === e.cssClasses.value,
          o = r ? a : c;
        return n + " " + (r ? u : d)[e.ort] + " " + o[t];
      }
      return (
        b(s, e.cssClasses.pips),
        b(
          s,
          0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical,
        ),
        Object.keys(t).forEach(function (o) {
          !(function (t, o, i) {
            if ((i = n ? n(o, i) : i) !== l.None) {
              var a = O(s, !1);
              (a.className = p(i, e.cssClasses.marker)),
                (a.style[e.style] = t + "%"),
                i > l.NoValue &&
                  (((a = O(s, !1)).className = p(i, e.cssClasses.value)),
                  a.setAttribute("data-value", String(o)),
                  (a.style[e.style] = t + "%"),
                  (a.innerHTML = String(r.to(o))));
            }
          })(o, t[o][0], t[o][1]);
        }),
        s
      );
    }
    function Q() {
      s && (u(s), (s = null));
    }
    function W(t) {
      Q();
      var e = I(t),
        n = t.filter,
        r = t.format || {
          to: function (t) {
            return String(Math.round(t));
          },
        };
      return (s = E.appendChild(Y(e, n, r)));
    }
    function X() {
      var t = r.getBoundingClientRect(),
        n = "offset" + ["Width", "Height"][e.ort];
      return 0 === e.ort ? t.width || r[n] : t.height || r[n];
    }
    function $(t, n, r, o) {
      var i = function (i) {
          var s,
            a,
            l = (function (t, e, n) {
              var r = 0 === t.type.indexOf("touch"),
                o = 0 === t.type.indexOf("mouse"),
                i = 0 === t.type.indexOf("pointer"),
                s = 0,
                a = 0;
              0 === t.type.indexOf("MSPointer") && (i = !0);
              if ("mousedown" === t.type && !t.buttons && !t.touches) return !1;
              if (r) {
                var l = function (e) {
                  var r = e.target;
                  return (
                    r === n ||
                    n.contains(r) ||
                    (t.composed && t.composedPath().shift() === n)
                  );
                };
                if ("touchstart" === t.type) {
                  var c = Array.prototype.filter.call(t.touches, l);
                  if (c.length > 1) return !1;
                  (s = c[0].pageX), (a = c[0].pageY);
                } else {
                  var u = Array.prototype.find.call(t.changedTouches, l);
                  if (!u) return !1;
                  (s = u.pageX), (a = u.pageY);
                }
              }
              (e = e || y(U)),
                (o || i) && ((s = t.clientX + e.x), (a = t.clientY + e.y));
              return (
                (t.pageOffset = e), (t.points = [s, a]), (t.cursor = o || i), t
              );
            })(i, o.pageOffset, o.target || n);
          return (
            !!l &&
            !(q() && !o.doNotReject) &&
            ((s = E),
            (a = e.cssClasses.tap),
            !(
              (s.classList
                ? s.classList.contains(a)
                : new RegExp("\\b" + a + "\\b").test(s.className)) &&
              !o.doNotReject
            ) &&
              !(t === x.start && void 0 !== l.buttons && l.buttons > 1) &&
              (!o.hover || !l.buttons) &&
              (w || l.preventDefault(),
              (l.calcPoint = l.points[e.ort]),
              void r(l, o)))
          );
        },
        s = [];
      return (
        t.split(" ").forEach(function (t) {
          n.addEventListener(t, i, !!w && { passive: !0 }), s.push([t, i]);
        }),
        s
      );
    }
    function G(t) {
      var n,
        o,
        i,
        s,
        a,
        l,
        c =
          (100 *
            (t -
              ((n = r),
              (o = e.ort),
              (i = n.getBoundingClientRect()),
              (s = n.ownerDocument),
              (a = s.documentElement),
              (l = y(s)),
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
              o ? i.top + l.y - a.clientTop : i.left + l.x - a.clientLeft))) /
          X();
      return (c = m(c)), e.dir ? 100 - c : c;
    }
    function J(t, e) {
      "mouseout" === t.type &&
        "HTML" === t.target.nodeName &&
        null === t.relatedTarget &&
        Z(t, e);
    }
    function K(t, n) {
      if (
        -1 === navigator.appVersion.indexOf("MSIE 9") &&
        0 === t.buttons &&
        0 !== n.buttonsProperty
      )
        return Z(t, n);
      var r = (e.dir ? -1 : 1) * (t.calcPoint - n.startCalcPoint);
      ct(
        r > 0,
        (100 * r) / n.baseSize,
        n.locations,
        n.handleNumbers,
        n.connect,
      );
    }
    function Z(t, n) {
      n.handle && (S(n.handle, e.cssClasses.active), (L -= 1)),
        n.listeners.forEach(function (t) {
          _.removeEventListener(t[0], t[1]);
        }),
        0 === L &&
          (S(E, e.cssClasses.drag),
          dt(),
          t.cursor &&
            ((M.style.cursor = ""), M.removeEventListener("selectstart", p))),
        e.events.smoothSteps &&
          (n.handleNumbers.forEach(function (t) {
            pt(t, k[t], !0, !0, !1, !1);
          }),
          n.handleNumbers.forEach(function (t) {
            st("update", t);
          })),
        n.handleNumbers.forEach(function (t) {
          st("change", t), st("set", t), st("end", t);
        });
    }
    function et(t, n) {
      if (!n.handleNumbers.some(R)) {
        var r;
        if (1 === n.handleNumbers.length)
          (r = o[n.handleNumbers[0]].children[0]),
            (L += 1),
            b(r, e.cssClasses.active);
        t.stopPropagation();
        var i = [],
          s = $(x.move, _, K, {
            target: t.target,
            handle: r,
            connect: n.connect,
            listeners: i,
            startCalcPoint: t.calcPoint,
            baseSize: X(),
            pageOffset: t.pageOffset,
            handleNumbers: n.handleNumbers,
            buttonsProperty: t.buttons,
            locations: k.slice(),
          }),
          a = $(x.end, _, Z, {
            target: t.target,
            handle: r,
            listeners: i,
            doNotReject: !0,
            handleNumbers: n.handleNumbers,
          }),
          l = $("mouseout", _, J, {
            target: t.target,
            handle: r,
            listeners: i,
            doNotReject: !0,
            handleNumbers: n.handleNumbers,
          });
        i.push.apply(i, s.concat(a, l)),
          t.cursor &&
            ((M.style.cursor = getComputedStyle(t.target).cursor),
            o.length > 1 && b(E, e.cssClasses.drag),
            M.addEventListener("selectstart", p, !1)),
          n.handleNumbers.forEach(function (t) {
            st("start", t);
          });
      }
    }
    function nt(t) {
      t.stopPropagation();
      var n = G(t.calcPoint),
        r = (function (t) {
          var e = 100,
            n = !1;
          return (
            o.forEach(function (r, o) {
              if (!R(o)) {
                var i = k[o],
                  s = Math.abs(i - t);
                (s < e || (s <= e && t > i) || (100 === s && 100 === e)) &&
                  ((n = o), (e = s));
              }
            }),
            n
          );
        })(n);
      !1 !== r &&
        (e.events.snap || h(E, e.cssClasses.tap, e.animationDuration),
        pt(r, n, !0, !0),
        dt(),
        st("slide", r, !0),
        st("update", r, !0),
        e.events.snap
          ? et(t, { handleNumbers: [r] })
          : (st("change", r, !0), st("set", r, !0)));
    }
    function rt(t) {
      var e = G(t.calcPoint),
        n = A.getStep(e),
        r = A.fromStepping(n);
      Object.keys(V).forEach(function (t) {
        "hover" === t.split(".")[0] &&
          V[t].forEach(function (t) {
            t.call(bt, r);
          });
      });
    }
    function ot(t, e) {
      (V[t] = V[t] || []),
        V[t].push(e),
        "update" === t.split(".")[0] &&
          o.forEach(function (t, e) {
            st("update", e);
          });
    }
    function it(t) {
      var e = t && t.split(".")[0],
        n = e ? t.substring(e.length) : t;
      Object.keys(V).forEach(function (t) {
        var r = t.split(".")[0],
          o = t.substring(r.length);
        (e && e !== r) ||
          (n && n !== o) ||
          ((function (t) {
            return t === P.aria || t === P.tooltips;
          })(o) &&
            n !== o) ||
          delete V[t];
      });
    }
    function st(t, n, r) {
      Object.keys(V).forEach(function (o) {
        var i = o.split(".")[0];
        t === i &&
          V[o].forEach(function (t) {
            t.call(
              bt,
              C.map(e.format.to),
              n,
              C.slice(),
              r || !1,
              k.slice(),
              bt,
            );
          });
      });
    }
    function at(t, n, r, i, s, a, l) {
      var c;
      return (
        o.length > 1 &&
          !e.events.unconstrained &&
          (i &&
            n > 0 &&
            ((c = A.getAbsoluteDistance(t[n - 1], e.margin, !1)),
            (r = Math.max(r, c))),
          s &&
            n < o.length - 1 &&
            ((c = A.getAbsoluteDistance(t[n + 1], e.margin, !0)),
            (r = Math.min(r, c)))),
        o.length > 1 &&
          e.limit &&
          (i &&
            n > 0 &&
            ((c = A.getAbsoluteDistance(t[n - 1], e.limit, !1)),
            (r = Math.min(r, c))),
          s &&
            n < o.length - 1 &&
            ((c = A.getAbsoluteDistance(t[n + 1], e.limit, !0)),
            (r = Math.max(r, c)))),
        e.padding &&
          (0 === n &&
            ((c = A.getAbsoluteDistance(0, e.padding[0], !1)),
            (r = Math.max(r, c))),
          n === o.length - 1 &&
            ((c = A.getAbsoluteDistance(100, e.padding[1], !0)),
            (r = Math.min(r, c)))),
        l || (r = A.getStep(r)),
        !((r = m(r)) === t[n] && !a) && r
      );
    }
    function lt(t, n) {
      var r = e.ort;
      return (r ? n : t) + ", " + (r ? t : n);
    }
    function ct(t, n, r, o, i) {
      var s = r.slice(),
        a = o[0],
        l = e.events.smoothSteps,
        c = [!t, t],
        u = [t, !t];
      (o = o.slice()),
        t && o.reverse(),
        o.length > 1
          ? o.forEach(function (t, e) {
              var r = at(s, t, s[t] + n, c[e], u[e], !1, l);
              !1 === r ? (n = 0) : ((n = r - s[t]), (s[t] = r));
            })
          : (c = u = [!0]);
      var d = !1;
      o.forEach(function (t, e) {
        d = pt(t, r[t] + n, c[e], u[e], !1, l) || d;
      }),
        d &&
          (o.forEach(function (t) {
            st("update", t), st("slide", t);
          }),
          null != i && st("drag", a));
    }
    function ut(t, n) {
      return e.dir ? 100 - t - n : t;
    }
    function dt() {
      N.forEach(function (t) {
        var e = k[t] > 50 ? -1 : 1,
          n = 3 + (o.length + e * t);
        o[t].style.zIndex = String(n);
      });
    }
    function pt(t, n, r, i, s, a) {
      return (
        s || (n = at(k, t, n, r, i, !1, a)),
        !1 !== n &&
          ((function (t, n) {
            (k[t] = n), (C[t] = A.fromStepping(n));
            var r = "translate(" + lt(ut(n, 0) - D + "%", "0") + ")";
            (o[t].style[e.transformRule] = r), ft(t), ft(t + 1);
          })(t, n),
          !0)
      );
    }
    function ft(t) {
      if (i[t]) {
        var n = 0,
          r = 100;
        0 !== t && (n = k[t - 1]), t !== i.length - 1 && (r = k[t]);
        var o = r - n,
          s = "translate(" + lt(ut(n, o) + "%", "0") + ")",
          a = "scale(" + lt(o / 100, "1") + ")";
        i[t].style[e.transformRule] = s + " " + a;
      }
    }
    function ht(t, n) {
      return null === t || !1 === t || void 0 === t
        ? k[n]
        : ("number" == typeof t && (t = String(t)),
          !1 !== (t = e.format.from(t)) && (t = A.toStepping(t)),
          !1 === t || isNaN(t) ? k[n] : t);
    }
    function mt(t, n, r) {
      var o = g(t),
        i = void 0 === k[0];
      (n = void 0 === n || n),
        e.animate && !i && h(E, e.cssClasses.tap, e.animationDuration),
        N.forEach(function (t) {
          pt(t, ht(o[t], t), !0, !1, r);
        });
      var s = 1 === N.length ? 0 : 1;
      if (i && A.hasNoSize() && ((r = !0), (k[0] = 0), N.length > 1)) {
        var a = 100 / (N.length - 1);
        N.forEach(function (t) {
          k[t] = t * a;
        });
      }
      for (; s < N.length; ++s)
        N.forEach(function (t) {
          pt(t, k[t], !0, !0, r);
        });
      dt(),
        N.forEach(function (t) {
          st("update", t), null !== o[t] && n && st("set", t);
        });
    }
    function gt(t) {
      if ((void 0 === t && (t = !1), t))
        return 1 === C.length ? C[0] : C.slice(0);
      var n = C.map(e.format.to);
      return 1 === n.length ? n[0] : n;
    }
    function vt(t) {
      var n = k[t],
        r = A.getNearbySteps(n),
        o = C[t],
        i = r.thisStep.step,
        s = null;
      if (e.snap)
        return [
          o - r.stepBefore.startValue || null,
          r.stepAfter.startValue - o || null,
        ];
      !1 !== i &&
        o + i > r.stepAfter.startValue &&
        (i = r.stepAfter.startValue - o),
        (s =
          o > r.thisStep.startValue
            ? r.thisStep.step
            : !1 !== r.stepBefore.step && o - r.stepBefore.highestStep),
        100 === n ? (i = null) : 0 === n && (s = null);
      var a = A.countStepDecimals();
      return (
        null !== i && !1 !== i && (i = Number(i.toFixed(a))),
        null !== s && !1 !== s && (s = Number(s.toFixed(a))),
        [s, i]
      );
    }
    b((f = E), e.cssClasses.target),
      0 === e.dir ? b(f, e.cssClasses.ltr) : b(f, e.cssClasses.rtl),
      0 === e.ort ? b(f, e.cssClasses.horizontal) : b(f, e.cssClasses.vertical),
      b(
        f,
        "rtl" === getComputedStyle(f).direction
          ? e.cssClasses.textDirectionRtl
          : e.cssClasses.textDirectionLtr,
      ),
      (r = O(f, e.cssClasses.base)),
      (function (t, n) {
        var r = O(n, e.cssClasses.connects);
        (o = []), (i = []).push(H(r, t[0]));
        for (var s = 0; s < e.handles; s++)
          o.push(j(n, s)), (N[s] = s), i.push(H(r, t[s + 1]));
      })(e.connect, r),
      (v = e.events).fixed ||
        o.forEach(function (t, e) {
          $(x.start, t.children[0], et, { handleNumbers: [e] });
        }),
      v.tap && $(x.start, r, nt, {}),
      v.hover && $(x.move, r, rt, { hover: !0 }),
      v.drag &&
        i.forEach(function (t, n) {
          if (!1 !== t && 0 !== n && n !== i.length - 1) {
            var r = o[n - 1],
              s = o[n],
              a = [t],
              l = [r, s],
              c = [n - 1, n];
            b(t, e.cssClasses.draggable),
              v.fixed && (a.push(r.children[0]), a.push(s.children[0])),
              v.dragAll && ((l = o), (c = N)),
              a.forEach(function (e) {
                $(x.start, e, et, { handles: l, handleNumbers: c, connect: t });
              });
          }
        }),
      mt(e.start),
      e.pips && W(e.pips),
      e.tooltips && F(),
      it("update" + P.aria),
      ot("update" + P.aria, function (t, n, r, i, s) {
        N.forEach(function (t) {
          var n = o[t],
            i = at(k, t, 0, !0, !0, !0),
            a = at(k, t, 100, !0, !0, !0),
            l = s[t],
            c = String(e.ariaFormat.to(r[t]));
          (i = A.fromStepping(i).toFixed(1)),
            (a = A.fromStepping(a).toFixed(1)),
            (l = A.fromStepping(l).toFixed(1)),
            n.children[0].setAttribute("aria-valuemin", i),
            n.children[0].setAttribute("aria-valuemax", a),
            n.children[0].setAttribute("aria-valuenow", l),
            n.children[0].setAttribute("aria-valuetext", c);
        });
      });
    var bt = {
      destroy: function () {
        for (
          it(P.aria),
            it(P.tooltips),
            Object.keys(e.cssClasses).forEach(function (t) {
              S(E, e.cssClasses[t]);
            });
          E.firstChild;

        )
          E.removeChild(E.firstChild);
        delete E.noUiSlider;
      },
      steps: function () {
        return N.map(vt);
      },
      on: ot,
      off: it,
      get: gt,
      set: mt,
      setHandle: function (t, e, n, r) {
        if (!((t = Number(t)) >= 0 && t < N.length))
          throw new Error("noUiSlider: invalid handle number, got: " + t);
        pt(t, ht(e, t), !0, !0, r), st("update", t), n && st("set", t);
      },
      reset: function (t) {
        mt(e.start, t);
      },
      disable: function (t) {
        null != t
          ? (o[t].setAttribute("disabled", ""),
            o[t].handle.removeAttribute("tabindex"))
          : (E.setAttribute("disabled", ""),
            o.forEach(function (t) {
              t.handle.removeAttribute("tabindex");
            }));
      },
      enable: function (t) {
        null != t
          ? (o[t].removeAttribute("disabled"),
            o[t].handle.setAttribute("tabindex", "0"))
          : (E.removeAttribute("disabled"),
            o.forEach(function (t) {
              t.removeAttribute("disabled"),
                t.handle.setAttribute("tabindex", "0");
            }));
      },
      __moveHandles: function (t, e, n) {
        ct(t, e, k, n);
      },
      options: n,
      updateOptions: function (t, r) {
        var o = gt(),
          i = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
          ];
        i.forEach(function (e) {
          void 0 !== t[e] && (n[e] = t[e]);
        });
        var s = tt(n);
        i.forEach(function (n) {
          void 0 !== t[n] && (e[n] = s[n]);
        }),
          (A = s.spectrum),
          (e.margin = s.margin),
          (e.limit = s.limit),
          (e.padding = s.padding),
          e.pips ? W(e.pips) : Q(),
          e.tooltips ? F() : z(),
          (k = []),
          mt(d(t.start) ? t.start : o, r);
      },
      target: E,
      removePips: Q,
      removeTooltips: z,
      getPositions: function () {
        return k.slice();
      },
      getTooltips: function () {
        return c;
      },
      getOrigins: function () {
        return o;
      },
      pips: W,
    };
    return bt;
  }
  const nt = {
    __spectrum: k,
    cssClasses: L,
    create: function (t, e) {
      if (!t || !t.nodeName)
        throw new Error(
          "noUiSlider: create requires a single element, got: " + t,
        );
      if (t.noUiSlider)
        throw new Error("noUiSlider: Slider was already initialized.");
      var n = et(t, tt(e), e);
      return (t.noUiSlider = n), n;
    },
  };
  window.addEventListener("DOMContentLoaded", () => {
    const t = document.querySelector(".menu__btn"),
      e = document.querySelector(".menu__btn-drop-icon"),
      n = document.querySelector(".drop-menu");
    t.addEventListener("click", function (t) {
      if (e.classList.contains("menu__btn-drop-menu-icon-close"))
        return (
          e.classList.remove("menu__btn-drop-menu-icon-close"),
          e.classList.add("menu__btn-drop-icon"),
          void n.classList.add("drop-menu__hidden")
        );
      e.classList.contains("menu__btn-drop-icon") &&
        (e.classList.add("menu__btn-drop-menu-icon-close"),
        e.classList.remove("menu__btn-drop-icon"),
        n.classList.remove("drop-menu__hidden"));
    }),
      document.addEventListener("click", function (r) {
        r.target === e ||
          r.target === n ||
          t.contains(r.target) ||
          n.contains(r.target) ||
          (e.classList.remove("menu__btn-drop-menu-icon-close"),
          e.classList.add("menu__btn-drop-icon"),
          n.classList.add("drop-menu__hidden"));
      });
    let r = document.getElementById("range");
    nt.create(r, {
      start: 68,
      behaviour: "snap",
      connect: [!0, !1],
      step: 1,
      range: { min: 20, max: 133 },
    });
    let o = document.getElementById("slider-range-value");
    r.noUiSlider.on("update", function (t, e) {
      o.innerHTML = `${t[e].slice(0, -3)}м²`;
    });
    const i = document.querySelectorAll("._anim-items");
    if (i.length > 0) {
      function a() {
        for (let t = 0; t < i.length; t++) {
          const e = i[t],
            n = e.offsetHeight,
            r = l(e).top,
            o = 4;
          let s = window.innerHeight - n / o;
          n > window.innerHeight &&
            (s = window.innerHeight - window.innerHeight / o),
            pageYOffset > r - s && pageYOffset < r + n
              ? e.classList.add("_active")
              : e.classList.contains("_anim-no-hide") ||
                e.classList.remove("_active");
        }
      }
      function l(t) {
        const e = t.getBoundingClientRect(),
          n = window.pageXOffset || document.documentElement.scrollLeft,
          r = window.pageYOffset || document.documentElement.scrollTop;
        return { top: e.top + r, left: e.left + n };
      }
      window.addEventListener("scroll", a),
        setTimeout(() => {
          a();
        }, 100);
    }
    const s = document.querySelector(".img");
    window.addEventListener("scroll", function () {
      s.style.right = "-" + scrollY + "px";
    });
    document
      .querySelector(".arrow-scroll__button")
      .addEventListener("click", function () {
        window.scrollTo(scrollY, 30),
          setTimeout(() => {
            window.scrollTo(scrollY, -30);
          }, 100);
      });
  }),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          e &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? n(t) : r(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      function t(t) {
        if ("click" === t.type) {
          const e = t.target;
          if (e.closest("[data-goto]")) {
            const n = e.closest("[data-goto]"),
              r = n.dataset.goto ? n.dataset.goto : "",
              o = !!n.hasAttribute("data-goto-header"),
              s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
            i(r, o, s), t.preventDefault();
          }
        } else if ("watcherCallback" === t.type && t.detail) {
          const e = t.detail.entry,
            n = e.target;
          if ("navigator" === n.dataset.watch) {
            const t = n.id,
              r =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${t}"]`));
            e.isIntersecting
              ? r && r.classList.add("_navigator-active")
              : r && r.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", t),
        document.addEventListener("watcherCallback", t);
    })();
})();
