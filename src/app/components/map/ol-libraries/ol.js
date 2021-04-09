! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ol = e() : t.ol = e() }(window, function() {
    return function(t) { var e = {};

        function r(n) { if (e[n]) return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports } return r.m = t, r.c = e, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var i in t) r.d(n, i, function(e) { return t[e] }.bind(null, i)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 7) }([function(t, e, r) { t.exports = function() { "use strict";

            function t(t, n, i, o, a) {! function t(r, n, i, o, a) { for (; o > i;) { if (o - i > 600) { var s = o - i + 1,
                                u = n - i + 1,
                                l = Math.log(s),
                                h = .5 * Math.exp(2 * l / 3),
                                c = .5 * Math.sqrt(l * h * (s - h) / s) * (u - s / 2 < 0 ? -1 : 1);
                            t(r, n, Math.max(i, Math.floor(n - u * h / s + c)), Math.min(o, Math.floor(n + (s - u) * h / s + c)), a) } var p = r[n],
                            f = i,
                            d = o; for (e(r, i, n), a(r[o], p) > 0 && e(r, i, o); f < d;) { for (e(r, f, d), f++, d--; a(r[f], p) < 0;) f++; for (; a(r[d], p) > 0;) d-- }
                        0 === a(r[i], p) ? e(r, i, d) : e(r, ++d, o), d <= n && (i = d + 1), n <= d && (o = d - 1) } }(t, n, i || 0, o || t.length - 1, a || r) }

            function e(t, e, r) { var n = t[e];
                t[e] = t[r], t[r] = n }

            function r(t, e) { return t < e ? -1 : t > e ? 1 : 0 } var n = function(t) { void 0 === t && (t = 9), this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear() };

            function i(t, e, r) { if (!r) return e.indexOf(t); for (var n = 0; n < e.length; n++)
                    if (r(t, e[n])) return n;
                return -1 }

            function o(t, e) { a(t, 0, t.children.length, e, t) }

            function a(t, e, r, n, i) { i || (i = d(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0; for (var o = e; o < r; o++) { var a = t.children[o];
                    s(i, t.leaf ? n(a) : a) } return i }

            function s(t, e) { return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t }

            function u(t, e) { return t.minX - e.minX }

            function l(t, e) { return t.minY - e.minY }

            function h(t) { return (t.maxX - t.minX) * (t.maxY - t.minY) }

            function c(t) { return t.maxX - t.minX + (t.maxY - t.minY) }

            function p(t, e) { return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY }

            function f(t, e) { return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY }

            function d(t) { return { children: t, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 } }

            function _(e, r, n, i, o) { for (var a = [r, n]; a.length;)
                    if (!((n = a.pop()) - (r = a.pop()) <= i)) { var s = r + Math.ceil((n - r) / i / 2) * i;
                        t(e, s, r, n, o), a.push(r, s, s, n) } } return n.prototype.all = function() { return this._all(this.data, []) }, n.prototype.search = function(t) { var e = this.data,
                    r = []; if (!f(t, e)) return r; for (var n = this.toBBox, i = []; e;) { for (var o = 0; o < e.children.length; o++) { var a = e.children[o],
                            s = e.leaf ? n(a) : a;
                        f(t, s) && (e.leaf ? r.push(a) : p(t, s) ? this._all(a, r) : i.push(a)) }
                    e = i.pop() } return r }, n.prototype.collides = function(t) { var e = this.data; if (!f(t, e)) return !1; for (var r = []; e;) { for (var n = 0; n < e.children.length; n++) { var i = e.children[n],
                            o = e.leaf ? this.toBBox(i) : i; if (f(t, o)) { if (e.leaf || p(t, o)) return !0;
                            r.push(i) } }
                    e = r.pop() } return !1 }, n.prototype.load = function(t) { if (!t || !t.length) return this; if (t.length < this._minEntries) { for (var e = 0; e < t.length; e++) this.insert(t[e]); return this } var r = this._build(t.slice(), 0, t.length - 1, 0); if (this.data.children.length)
                    if (this.data.height === r.height) this._splitRoot(this.data, r);
                    else { if (this.data.height < r.height) { var n = this.data;
                            this.data = r, r = n }
                        this._insert(r, this.data.height - r.height - 1, !0) }
                else this.data = r; return this }, n.prototype.insert = function(t) { return t && this._insert(t, this.data.height - 1), this }, n.prototype.clear = function() { return this.data = d([]), this }, n.prototype.remove = function(t, e) { if (!t) return this; for (var r, n, o, a = this.data, s = this.toBBox(t), u = [], l = []; a || u.length;) { if (a || (a = u.pop(), n = u[u.length - 1], r = l.pop(), o = !0), a.leaf) { var h = i(t, a.children, e); if (-1 !== h) return a.children.splice(h, 1), u.push(a), this._condense(u), this }
                    o || a.leaf || !p(a, s) ? n ? (r++, a = n.children[r], o = !1) : a = null : (u.push(a), l.push(r), r = 0, n = a, a = a.children[0]) } return this }, n.prototype.toBBox = function(t) { return t }, n.prototype.compareMinX = function(t, e) { return t.minX - e.minX }, n.prototype.compareMinY = function(t, e) { return t.minY - e.minY }, n.prototype.toJSON = function() { return this.data }, n.prototype.fromJSON = function(t) { return this.data = t, this }, n.prototype._all = function(t, e) { for (var r = []; t;) t.leaf ? e.push.apply(e, t.children) : r.push.apply(r, t.children), t = r.pop(); return e }, n.prototype._build = function(t, e, r, n) { var i, a = r - e + 1,
                    s = this._maxEntries; if (a <= s) return o(i = d(t.slice(e, r + 1)), this.toBBox), i;
                n || (n = Math.ceil(Math.log(a) / Math.log(s)), s = Math.ceil(a / Math.pow(s, n - 1))), (i = d([])).leaf = !1, i.height = n; var u = Math.ceil(a / s),
                    l = u * Math.ceil(Math.sqrt(s));
                _(t, e, r, l, this.compareMinX); for (var h = e; h <= r; h += l) { var c = Math.min(h + l - 1, r);
                    _(t, h, c, u, this.compareMinY); for (var p = h; p <= c; p += u) { var f = Math.min(p + u - 1, c);
                        i.children.push(this._build(t, p, f, n - 1)) } } return o(i, this.toBBox), i }, n.prototype._chooseSubtree = function(t, e, r, n) { for (; n.push(e), !e.leaf && n.length - 1 !== r;) { for (var i = 1 / 0, o = 1 / 0, a = void 0, s = 0; s < e.children.length; s++) { var u = e.children[s],
                            l = h(u),
                            c = (p = t, f = u, (Math.max(f.maxX, p.maxX) - Math.min(f.minX, p.minX)) * (Math.max(f.maxY, p.maxY) - Math.min(f.minY, p.minY)) - l);
                        c < o ? (o = c, i = l < i ? l : i, a = u) : c === o && l < i && (i = l, a = u) }
                    e = a || e.children[0] } var p, f; return e }, n.prototype._insert = function(t, e, r) { var n = r ? t : this.toBBox(t),
                    i = [],
                    o = this._chooseSubtree(n, this.data, e, i); for (o.children.push(t), s(o, n); e >= 0 && i[e].children.length > this._maxEntries;) this._split(i, e), e--;
                this._adjustParentBBoxes(n, i, e) }, n.prototype._split = function(t, e) { var r = t[e],
                    n = r.children.length,
                    i = this._minEntries;
                this._chooseSplitAxis(r, i, n); var a = this._chooseSplitIndex(r, i, n),
                    s = d(r.children.splice(a, r.children.length - a));
                s.height = r.height, s.leaf = r.leaf, o(r, this.toBBox), o(s, this.toBBox), e ? t[e - 1].children.push(s) : this._splitRoot(r, s) }, n.prototype._splitRoot = function(t, e) { this.data = d([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, o(this.data, this.toBBox) }, n.prototype._chooseSplitIndex = function(t, e, r) { for (var n, i, o, s, u, l, c, p = 1 / 0, f = 1 / 0, d = e; d <= r - e; d++) { var _ = a(t, 0, d, this.toBBox),
                        g = a(t, d, r, this.toBBox),
                        y = (i = _, o = g, s = Math.max(i.minX, o.minX), u = Math.max(i.minY, o.minY), l = Math.min(i.maxX, o.maxX), c = Math.min(i.maxY, o.maxY), Math.max(0, l - s) * Math.max(0, c - u)),
                        v = h(_) + h(g);
                    y < p ? (p = y, n = d, f = v < f ? v : f) : y === p && v < f && (f = v, n = d) } return n }, n.prototype._chooseSplitAxis = function(t, e, r) { var n = t.leaf ? this.compareMinX : u,
                    i = t.leaf ? this.compareMinY : l;
                this._allDistMargin(t, e, r, n) < this._allDistMargin(t, e, r, i) && t.children.sort(n) }, n.prototype._allDistMargin = function(t, e, r, n) { t.children.sort(n); for (var i = this.toBBox, o = a(t, 0, e, i), u = a(t, r - e, r, i), l = c(o) + c(u), h = e; h < r - e; h++) { var p = t.children[h];
                    s(o, t.leaf ? i(p) : p), l += c(o) } for (var f = r - e - 1; f >= e; f--) { var d = t.children[f];
                    s(u, t.leaf ? i(d) : d), l += c(u) } return l }, n.prototype._adjustParentBBoxes = function(t, e, r) { for (var n = r; n >= 0; n--) s(e[n], t) }, n.prototype._condense = function(t) { for (var e = t.length - 1, r = void 0; e >= 0; e--) 0 === t[e].children.length ? e > 0 ? (r = t[e - 1].children).splice(r.indexOf(t[e]), 1) : this.clear() : o(t[e], this.toBBox) }, n }() }, function(t, e, r) {
        /*!
         * PEP v0.5.3 | https://github.com/jquery/PEP
         * Copyright jQuery Foundation and other contributors | http://jquery.org/license
         */
        t.exports = function() { "use strict"; var t = ["bubbles", "cancelable", "view", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"],
                e = [!1, !1, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0];

            function r(r, n) { n = n || Object.create(null); var i = document.createEvent("Event");
                i.initEvent(r, n.bubbles || !1, n.cancelable || !1); for (var o, a = 2; a < t.length; a++) i[o = t[a]] = n[o] || e[a];
                i.buttons = n.buttons || 0; var s = 0; return s = void 0 !== n.pressure && i.buttons ? n.pressure : i.buttons ? .5 : 0, i.x = i.clientX, i.y = i.clientY, i.pointerId = n.pointerId || 0, i.width = n.width || 1, i.height = n.height || 1, i.pressure = s, i.tiltX = n.tiltX || 0, i.tiltY = n.tiltY || 0, i.twist = n.twist || 0, i.tangentialPressure = n.tangentialPressure || 0, i.pointerType = n.pointerType || "", i.hwTimestamp = n.hwTimestamp || 0, i.isPrimary = n.isPrimary || !1, i.detail = 0, i } var n = window.Map && window.Map.prototype.forEach ? Map : i;

            function i() { this.array = [], this.size = 0 }
            i.prototype = { set: function(t, e) { if (void 0 === e) return this.delete(t);
                    this.has(t) || this.size++, this.array[t] = e }, has: function(t) { return void 0 !== this.array[t] }, delete: function(t) { this.has(t) && (delete this.array[t], this.size--) }, get: function(t) { return this.array[t] }, clear: function() { this.array.length = 0, this.size = 0 }, forEach: function(t, e) { return this.array.forEach(function(r, n) { t.call(e, r, n, this) }, this) } }; var o = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"],
                a = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0],
                s = { pointerover: 1, pointerout: 1, pointerenter: 1, pointerleave: 1 },
                u = "undefined" != typeof SVGElementInstance,
                l = { pointermap: new n, eventMap: Object.create(null), captureInfo: Object.create(null), eventSources: Object.create(null), eventSourceList: [], registerSource: function(t, e) { var r = e,
                            n = r.events;
                        n && (n.forEach(function(t) { r[t] && (this.eventMap[t] = r[t].bind(r)) }, this), this.eventSources[t] = r, this.eventSourceList.push(r)) }, register: function(t) { for (var e, r = this.eventSourceList.length, n = 0; n < r && (e = this.eventSourceList[n]); n++) e.register.call(e, t) }, unregister: function(t) { for (var e, r = this.eventSourceList.length, n = 0; n < r && (e = this.eventSourceList[n]); n++) e.unregister.call(e, t) }, contains: function(t, e) { try { return t.contains(e) } catch (t) { return !1 } }, down: function(t) { t.bubbles = !0, this.fireEvent("pointerdown", t) }, move: function(t) { t.bubbles = !0, this.fireEvent("pointermove", t) }, up: function(t) { t.bubbles = !0, this.fireEvent("pointerup", t) }, enter: function(t) { t.bubbles = !1, this.fireEvent("pointerenter", t) }, leave: function(t) { t.bubbles = !1, this.fireEvent("pointerleave", t) }, over: function(t) { t.bubbles = !0, this.fireEvent("pointerover", t) }, out: function(t) { t.bubbles = !0, this.fireEvent("pointerout", t) }, cancel: function(t) { t.bubbles = !0, this.fireEvent("pointercancel", t) }, leaveOut: function(t) { this.out(t), this.propagate(t, this.leave, !1) }, enterOver: function(t) { this.over(t), this.propagate(t, this.enter, !0) }, eventHandler: function(t) { if (!t._handledByPE) { var e = t.type,
                                r = this.eventMap && this.eventMap[e];
                            r && r(t), t._handledByPE = !0 } }, listen: function(t, e) { e.forEach(function(e) { this.addEvent(t, e) }, this) }, unlisten: function(t, e) { e.forEach(function(e) { this.removeEvent(t, e) }, this) }, addEvent: function(t, e) { t.addEventListener(e, this.boundHandler) }, removeEvent: function(t, e) { t.removeEventListener(e, this.boundHandler) }, makeEvent: function(t, e) { this.captureInfo[e.pointerId] && (e.relatedTarget = null); var n = new r(t, e); return e.preventDefault && (n.preventDefault = e.preventDefault), n._target = n._target || e.target, n }, fireEvent: function(t, e) { var r = this.makeEvent(t, e); return this.dispatchEvent(r) }, cloneEvent: function(t) { for (var e, r = Object.create(null), n = 0; n < o.length; n++) r[e = o[n]] = t[e] || a[n], !u || "target" !== e && "relatedTarget" !== e || r[e] instanceof SVGElementInstance && (r[e] = r[e].correspondingUseElement); return t.preventDefault && (r.preventDefault = function() { t.preventDefault() }), r }, getTarget: function(t) { var e = this.captureInfo[t.pointerId]; return e ? t._target !== e && t.type in s ? void 0 : e : t._target }, propagate: function(t, e, r) { for (var n = t.target, i = []; null != n && n !== document && !n.contains(t.relatedTarget);)
                            if (i.push(n), !(n = n.parentNode)) return;
                        r && i.reverse(), i.forEach(function(r) { t.target = r, e.call(this, t) }, this) }, setCapture: function(t, e, n) { this.captureInfo[t] && this.releaseCapture(t, n), this.captureInfo[t] = e, this.implicitRelease = this.releaseCapture.bind(this, t, n), document.addEventListener("pointerup", this.implicitRelease), document.addEventListener("pointercancel", this.implicitRelease); var i = new r("gotpointercapture", { bubbles: !0 });
                        i.pointerId = t, i._target = e, n || this.asyncDispatchEvent(i) }, releaseCapture: function(t, e) { var n = this.captureInfo[t]; if (n) { this.captureInfo[t] = void 0, document.removeEventListener("pointerup", this.implicitRelease), document.removeEventListener("pointercancel", this.implicitRelease); var i = new r("lostpointercapture", { bubbles: !0 });
                            i.pointerId = t, i._target = n, e || this.asyncDispatchEvent(i) } }, dispatchEvent: function(t) { var e = this.getTarget(t); if (e) return e.dispatchEvent(t) }, asyncDispatchEvent: function(t) { requestAnimationFrame(this.dispatchEvent.bind(this, t)) } };
            l.boundHandler = l.eventHandler.bind(l); var h = { shadow: function(t) { if (t) return t.shadowRoot || t.webkitShadowRoot }, canTarget: function(t) { return t && Boolean(t.elementFromPoint) }, targetingShadow: function(t) { var e = this.shadow(t); if (this.canTarget(e)) return e }, olderShadow: function(t) { var e = t.olderShadowRoot; if (!e) { var r = t.querySelector("shadow");
                            r && (e = r.olderShadowRoot) } return e }, allShadows: function(t) { for (var e = [], r = this.shadow(t); r;) e.push(r), r = this.olderShadow(r); return e }, searchRoot: function(t, e, r) { if (t) { var n, i, o = t.elementFromPoint(e, r); for (i = this.targetingShadow(o); i;) { if (n = i.elementFromPoint(e, r)) { var a = this.targetingShadow(n); return this.searchRoot(a, e, r) || n }
                                i = this.olderShadow(i) } return o } }, owner: function(t) { for (var e = t; e.parentNode;) e = e.parentNode; return e.nodeType !== Node.DOCUMENT_NODE && e.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (e = document), e }, findTarget: function(t) { var e = t.clientX,
                            r = t.clientY,
                            n = this.owner(t.target); return n.elementFromPoint(e, r) || (n = document), this.searchRoot(n, e, r) } },
                c = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                p = Array.prototype.map.call.bind(Array.prototype.map),
                f = Array.prototype.slice.call.bind(Array.prototype.slice),
                d = Array.prototype.filter.call.bind(Array.prototype.filter),
                _ = window.MutationObserver || window.WebKitMutationObserver,
                g = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, attributeFilter: ["touch-action"] };

            function y(t, e, r, n) { this.addCallback = t.bind(n), this.removeCallback = e.bind(n), this.changedCallback = r.bind(n), _ && (this.observer = new _(this.mutationWatcher.bind(this))) }

            function v(t) { return "{ -ms-touch-action: " + t + "; touch-action: " + t + "; }" }
            y.prototype = { watchSubtree: function(t) { this.observer && h.canTarget(t) && this.observer.observe(t, g) }, enableOnSubtree: function(t) { this.watchSubtree(t), t === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(t) }, installNewSubtree: function(t) { c(this.findElements(t), this.addElement, this) }, findElements: function(t) { return t.querySelectorAll ? t.querySelectorAll("[touch-action]") : [] }, removeElement: function(t) { this.removeCallback(t) }, addElement: function(t) { this.addCallback(t) }, elementChanged: function(t, e) { this.changedCallback(t, e) }, concatLists: function(t, e) { return t.concat(f(e)) }, installOnLoad: function() { document.addEventListener("readystatechange", function() { "complete" === document.readyState && this.installNewSubtree(document) }.bind(this)) }, isElement: function(t) { return t.nodeType === Node.ELEMENT_NODE }, flattenMutationTree: function(t) { var e = p(t, this.findElements, this); return e.push(d(t, this.isElement)), e.reduce(this.concatLists, []) }, mutationWatcher: function(t) { t.forEach(this.mutationHandler, this) }, mutationHandler: function(t) { "childList" === t.type ? (this.flattenMutationTree(t.addedNodes).forEach(this.addElement, this), this.flattenMutationTree(t.removedNodes).forEach(this.removeElement, this)) : "attributes" === t.type && this.elementChanged(t.target, t.oldValue) } }; var m = [{ selector: '[touch-action="none"]', value: "none" }, { selector: '[touch-action="auto"]', value: "auto" }, { selector: '[touch-action~="pan-x"]', value: "pan-x" }, { selector: '[touch-action~="pan-y"]', value: "pan-y" }, { selector: '[touch-action~="pan-up"]', value: "pan-up" }, { selector: '[touch-action~="pan-down"]', value: "pan-down" }, { selector: '[touch-action~="pan-left"]', value: "pan-left" }, { selector: '[touch-action~="pan-right"]', value: "pan-right" }],
                E = "",
                T = window.PointerEvent || window.MSPointerEvent,
                S = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
                w = l.pointermap,
                x = [1, 4, 2, 8, 16],
                O = !1; try { O = 1 === new MouseEvent("test", { buttons: 1 }).buttons } catch (t) {} var R, C = { POINTER_ID: 1, POINTER_TYPE: "mouse", events: ["mousedown", "webkitmouseforcechanged", "mousemove", "mouseup", "mouseover", "mouseout"], register: function(t) { l.listen(t, this.events) }, unregister: function(t) { l.unlisten(t, this.events) }, lastTouches: [], isEventSimulatedFromTouch: function(t) { for (var e, r = this.lastTouches, n = t.clientX, i = t.clientY, o = 0, a = r.length; o < a && (e = r[o]); o++) { var s = Math.abs(n - e.x),
                                u = Math.abs(i - e.y); if (s <= 25 && u <= 25) return !0 } }, prepareEvent: function(t) { var e = l.cloneEvent(t),
                            r = e.preventDefault; return e.preventDefault = function() { t.preventDefault(), r() }, e.pointerId = this.POINTER_ID, e.isPrimary = !0, e.pointerType = this.POINTER_TYPE, "webkitForce" in t && (e.pressure = t.webkitForce - MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN), e }, prepareButtonsForMove: function(t, e) { var r = w.get(this.POINTER_ID);
                        0 !== e.which && r ? t.buttons = r.buttons : t.buttons = 0, e.buttons = t.buttons }, mousedown: function(t) { if (!this.isEventSimulatedFromTouch(t)) { var e = w.get(this.POINTER_ID),
                                r = this.prepareEvent(t);
                            O || (r.buttons = x[r.button], e && (r.buttons |= e.buttons), t.buttons = r.buttons), w.set(this.POINTER_ID, t), e && 0 !== e.buttons ? l.move(r) : l.down(r) } }, webkitmouseforcechanged: function(t) { this.mousemove(t) }, mousemove: function(t) { if (!this.isEventSimulatedFromTouch(t)) { var e = this.prepareEvent(t);
                            O || this.prepareButtonsForMove(e, t), e.button = -1, w.set(this.POINTER_ID, t), l.move(e) } }, mouseup: function(t) { if (!this.isEventSimulatedFromTouch(t)) { var e = w.get(this.POINTER_ID),
                                r = this.prepareEvent(t); if (!O) { var n = x[r.button];
                                r.buttons = e ? e.buttons & ~n : 0, t.buttons = r.buttons }
                            w.set(this.POINTER_ID, t), r.buttons &= ~x[r.button], 0 === r.buttons ? l.up(r) : l.move(r) } }, mouseover: function(t) { if (!this.isEventSimulatedFromTouch(t)) { var e = this.prepareEvent(t);
                            O || this.prepareButtonsForMove(e, t), e.button = -1, w.set(this.POINTER_ID, t), l.enterOver(e) } }, mouseout: function(t) { if (!this.isEventSimulatedFromTouch(t)) { var e = this.prepareEvent(t);
                            O || this.prepareButtonsForMove(e, t), e.button = -1, l.leaveOut(e) } }, cancel: function(t) { var e = this.prepareEvent(t);
                        l.cancel(e), this.deactivateMouse() }, deactivateMouse: function() { w.delete(this.POINTER_ID) } },
                P = l.captureInfo,
                I = h.findTarget.bind(h),
                b = h.allShadows.bind(h),
                L = l.pointermap,
                M = { events: ["touchstart", "touchmove", "touchforcechange", "touchend", "touchcancel"], register: function(t) { R.enableOnSubtree(t) }, unregister: function() {}, elementAdded: function(t) { var e = t.getAttribute("touch-action"),
                            r = this.touchActionToScrollType(e); "number" == typeof r && (t._scrollType = r, l.listen(t, this.events), b(t).forEach(function(t) { t._scrollType = r, l.listen(t, this.events) }, this)) }, elementRemoved: function(t) { if (L.size > 0) { var e = this.events;
                            t.addEventListener("touchend", function() { t._scrollType = void 0, l.unlisten(t, e) }) } else t._scrollType = void 0, l.unlisten(t, this.events);
                        b(t).forEach(function(t) { t._scrollType = void 0, l.unlisten(t, this.events) }, this) }, elementChanged: function(t, e) { var r = t.getAttribute("touch-action"),
                            n = this.touchActionToScrollType(r),
                            i = this.touchActionToScrollType(e); "number" == typeof n && "number" == typeof i ? (t._scrollType = n, b(t).forEach(function(t) { t._scrollType = n }, this)) : "number" == typeof i ? this.elementRemoved(t) : "number" == typeof n && this.elementAdded(t) }, scrollTypes: { UP: function(t) { return t.includes("pan-y") || t.includes("pan-up") ? 1 : 0 }, DOWN: function(t) { return t.includes("pan-y") || t.includes("pan-down") ? 2 : 0 }, LEFT: function(t) { return t.includes("pan-x") || t.includes("pan-left") ? 4 : 0 }, RIGHT: function(t) { return t.includes("pan-x") || t.includes("pan-right") ? 8 : 0 } }, touchActionToScrollType: function(t) { if (t) { if ("auto" === t) return 15; if ("none" === t) return 0; var e = t.split(" "),
                                r = this.scrollTypes; return r.UP(e) | r.DOWN(e) | r.LEFT(e) | r.RIGHT(e) } }, POINTER_TYPE: "touch", firstTouch: null, isPrimaryTouch: function(t) { return this.firstTouch === t.identifier }, setPrimaryTouch: function(t) {
                        (0 === L.size || 1 === L.size && L.has(1)) && (this.firstTouch = t.identifier, this.firstXY = { X: t.clientX, Y: t.clientY }, this.scrolling = !1) }, removePrimaryPointer: function(t) { t.isPrimary && (this.firstTouch = null, this.firstXY = null) }, typeToButtons: function(t) { var e = 0; return "touchstart" !== t && "touchmove" !== t && "touchforcechange" !== t || (e = 1), e }, touchToPointer: function(t) { var e = this.currentTouchEvent,
                            r = l.cloneEvent(t),
                            n = r.pointerId = t.identifier + 2; if (r.target = P[n] || I(r), r.bubbles = !0, r.cancelable = !0, r.button = 0, r.buttons = this.typeToButtons(e.type), r.width = 2 * (t.radiusX || t.webkitRadiusX || 0), r.height = 2 * (t.radiusY || t.webkitRadiusY || 0), r.pressure = void 0 !== t.force ? t.force : void 0 !== t.webkitForce ? t.webkitForce : void 0, r.isPrimary = this.isPrimaryTouch(t), t.altitudeAngle) { var i = Math.tan(t.altitudeAngle),
                                o = 180 / Math.PI;
                            r.tiltX = Math.atan(Math.cos(t.azimuthAngle) / i) * o, r.tiltY = Math.atan(Math.sin(t.azimuthAngle) / i) * o } else r.tiltX = 0, r.tiltY = 0; "stylus" === t.touchType ? r.pointerType = "pen" : r.pointerType = this.POINTER_TYPE, r.altKey = e.altKey, r.ctrlKey = e.ctrlKey, r.metaKey = e.metaKey, r.shiftKey = e.shiftKey; var a = this; return r.preventDefault = function() { a.scrolling = !1, a.firstXY = null, e.preventDefault() }, r }, processTouches: function(t, e) { var r = t.changedTouches;
                        this.currentTouchEvent = t; for (var n, i = 0; i < r.length; i++) n = r[i], e.call(this, this.touchToPointer(n)) }, shouldScroll: function(t) { if (this.firstXY) { var e, r = t.currentTarget._scrollType; if (0 === r) e = !1;
                            else if (15 === r) e = !0;
                            else { var n = t.changedTouches[0],
                                    i = n.clientY - this.firstXY.Y,
                                    o = Math.abs(i),
                                    a = n.clientX - this.firstXY.X,
                                    s = Math.abs(a),
                                    u = 1 & r,
                                    l = 2 & r,
                                    h = 4 & r,
                                    c = 8 & r;
                                h && c ? e = s > o : h ? e = s > o && a > 0 : c && (e = s > o && a < 0), e || (u && l ? e = s < o : u ? e = s < o && i > 0 : l && (e = s < o && i < 0)) } return this.firstXY = null, e } }, findTouch: function(t, e) { for (var r, n = 0, i = t.length; n < i && (r = t[n]); n++)
                            if (r.identifier === e) return !0 }, vacuumTouches: function(t) { var e = t.touches; if (L.size >= e.length) { var r = [];
                            L.forEach(function(t, n) { if (1 !== n && !this.findTouch(e, n - 2)) { var i = t.out;
                                    r.push(i) } }, this), r.forEach(this.cancelOut, this) } }, touchstart: function(t) { this.vacuumTouches(t), this.setPrimaryTouch(t.changedTouches[0]), this.dedupSynthMouse(t), this.scrolling || this.processTouches(t, this.overDown) }, overDown: function(t) { L.set(t.pointerId, { target: t.target, out: t, outTarget: t.target }), l.enterOver(t), l.down(t) }, touchforcechange: function(t) { this.touchmove(t) }, touchmove: function(t) { this.scrolling || (this.shouldScroll(t) ? (this.scrolling = !0, this.touchcancel(t)) : ("touchforcechange" !== t.type && t.preventDefault(), this.processTouches(t, this.moveOverOut))) }, moveOverOut: function(t) { var e = t,
                            r = L.get(e.pointerId); if (r) { var n = r.out,
                                i = r.outTarget;
                            l.move(e), n && i !== e.target && (n.relatedTarget = e.target, e.relatedTarget = i, n.target = i, e.target ? (l.leaveOut(n), l.enterOver(e)) : (e.target = i, e.relatedTarget = null, this.cancelOut(e))), r.out = e, r.outTarget = e.target } }, touchend: function(t) { this.dedupSynthMouse(t), this.processTouches(t, this.upOut) }, upOut: function(t) { this.scrolling || (l.up(t), l.leaveOut(t)), this.cleanUpPointer(t) }, touchcancel: function(t) { this.processTouches(t, this.cancelOut) }, cancelOut: function(t) { l.cancel(t), l.leaveOut(t), this.cleanUpPointer(t) }, cleanUpPointer: function(t) { L.delete(t.pointerId), this.removePrimaryPointer(t) }, dedupSynthMouse: function(t) { var e = C.lastTouches,
                            r = t.changedTouches[0]; if (this.isPrimaryTouch(r)) { var n = { x: r.clientX, y: r.clientY };
                            e.push(n); var i = function(t, e) { var r = t.indexOf(e);
                                r > -1 && t.splice(r, 1) }.bind(null, e, n);
                            setTimeout(i, 2500) } } };
            R = new y(M.elementAdded, M.elementRemoved, M.elementChanged, M); var F, A, N, G = l.pointermap,
                D = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
                j = { events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"], register: function(t) { l.listen(t, this.events) }, unregister: function(t) { l.unlisten(t, this.events) }, POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"], prepareEvent: function(t) { var e = t; return D && ((e = l.cloneEvent(t)).pointerType = this.POINTER_TYPES[t.pointerType]), e }, cleanup: function(t) { G.delete(t) }, MSPointerDown: function(t) { G.set(t.pointerId, t); var e = this.prepareEvent(t);
                        l.down(e) }, MSPointerMove: function(t) { var e = this.prepareEvent(t);
                        l.move(e) }, MSPointerUp: function(t) { var e = this.prepareEvent(t);
                        l.up(e), this.cleanup(t.pointerId) }, MSPointerOut: function(t) { var e = this.prepareEvent(t);
                        l.leaveOut(e) }, MSPointerOver: function(t) { var e = this.prepareEvent(t);
                        l.enterOver(e) }, MSPointerCancel: function(t) { var e = this.prepareEvent(t);
                        l.cancel(e), this.cleanup(t.pointerId) }, MSLostPointerCapture: function(t) { var e = l.makeEvent("lostpointercapture", t);
                        l.dispatchEvent(e) }, MSGotPointerCapture: function(t) { var e = l.makeEvent("gotpointercapture", t);
                        l.dispatchEvent(e) } };

            function k(t) { if (!l.pointermap.has(t)) { var e = new Error("NotFoundError"); throw e.name = "NotFoundError", e } }

            function U(t) { for (var e = t.parentNode; e && e !== t.ownerDocument;) e = e.parentNode; if (!e) { var r = new Error("InvalidStateError"); throw r.name = "InvalidStateError", r } }

            function B(t) { return 0 !== l.pointermap.get(t).buttons } return window.navigator.msPointerEnabled ? (F = function(t) { k(t), U(this), B(t) && (l.setCapture(t, this, !0), this.msSetPointerCapture(t)) }, A = function(t) { k(t), l.releaseCapture(t, !0), this.msReleasePointerCapture(t) }) : (F = function(t) { k(t), U(this), B(t) && l.setCapture(t, this) }, A = function(t) { k(t), l.releaseCapture(t) }), N = function(t) { return !!l.captureInfo[t] },
                function() { if (T) { m.forEach(function(t) { E += t.selector + v(t.value) + "\n", S && (E += function(t) { return "body /shadow-deep/ " + t }(t.selector) + v(t.value) + "\n") }); var t = document.createElement("style");
                        t.textContent = E, document.head.appendChild(t) } }(),
                function() { if (!window.PointerEvent) { if (window.PointerEvent = r, window.navigator.msPointerEnabled) { var t = window.navigator.msMaxTouchPoints;
                            Object.defineProperty(window.navigator, "maxTouchPoints", { value: t, enumerable: !0 }), l.registerSource("ms", j) } else Object.defineProperty(window.navigator, "maxTouchPoints", { value: 0, enumerable: !0 }), l.registerSource("mouse", C), void 0 !== window.ontouchstart && l.registerSource("touch", M);
                        l.register(document) } }(), window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, { setPointerCapture: { value: F }, releasePointerCapture: { value: A }, hasPointerCapture: { value: N } }), { dispatcher: l, Installer: y, PointerEvent: r, PointerMap: n, targetFinding: h } }()
    }, function(t, e, r) { "use strict";
        t.exports = i; var n = r(4);

        function i(t) { this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0), this.pos = 0, this.type = 0, this.length = this.buf.length }
        i.Varint = 0, i.Fixed64 = 1, i.Bytes = 2, i.Fixed32 = 5;

        function o(t) { return t.type === i.Bytes ? t.readVarint() + t.pos : t.pos + 1 }

        function a(t, e, r) { return r ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0) }

        function s(t, e, r) { var n = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.floor(Math.log(e) / (7 * Math.LN2));
            r.realloc(n); for (var i = r.pos - 1; i >= t; i--) r.buf[i + n] = r.buf[i] }

        function u(t, e) { for (var r = 0; r < t.length; r++) e.writeVarint(t[r]) }

        function l(t, e) { for (var r = 0; r < t.length; r++) e.writeSVarint(t[r]) }

        function h(t, e) { for (var r = 0; r < t.length; r++) e.writeFloat(t[r]) }

        function c(t, e) { for (var r = 0; r < t.length; r++) e.writeDouble(t[r]) }

        function p(t, e) { for (var r = 0; r < t.length; r++) e.writeBoolean(t[r]) }

        function f(t, e) { for (var r = 0; r < t.length; r++) e.writeFixed32(t[r]) }

        function d(t, e) { for (var r = 0; r < t.length; r++) e.writeSFixed32(t[r]) }

        function _(t, e) { for (var r = 0; r < t.length; r++) e.writeFixed64(t[r]) }

        function g(t, e) { for (var r = 0; r < t.length; r++) e.writeSFixed64(t[r]) }

        function y(t, e) { return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + 16777216 * t[e + 3] }

        function v(t, e, r) { t[r] = e, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24 }

        function m(t, e) { return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + (t[e + 3] << 24) }
        i.prototype = { destroy: function() { this.buf = null }, readFields: function(t, e, r) { for (r = r || this.length; this.pos < r;) { var n = this.readVarint(),
                        i = n >> 3,
                        o = this.pos;
                    this.type = 7 & n, t(i, e, this), this.pos === o && this.skip(n) } return e }, readMessage: function(t, e) { return this.readFields(t, e, this.readVarint() + this.pos) }, readFixed32: function() { var t = y(this.buf, this.pos); return this.pos += 4, t }, readSFixed32: function() { var t = m(this.buf, this.pos); return this.pos += 4, t }, readFixed64: function() { var t = y(this.buf, this.pos) + 4294967296 * y(this.buf, this.pos + 4); return this.pos += 8, t }, readSFixed64: function() { var t = y(this.buf, this.pos) + 4294967296 * m(this.buf, this.pos + 4); return this.pos += 8, t }, readFloat: function() { var t = n.read(this.buf, this.pos, !0, 23, 4); return this.pos += 4, t }, readDouble: function() { var t = n.read(this.buf, this.pos, !0, 52, 8); return this.pos += 8, t }, readVarint: function(t) { var e, r, n = this.buf; return e = 127 & (r = n[this.pos++]), r < 128 ? e : (e |= (127 & (r = n[this.pos++])) << 7, r < 128 ? e : (e |= (127 & (r = n[this.pos++])) << 14, r < 128 ? e : (e |= (127 & (r = n[this.pos++])) << 21, r < 128 ? e : function(t, e, r) { var n, i, o = r.buf; if (i = o[r.pos++], n = (112 & i) >> 4, i < 128) return a(t, n, e); if (i = o[r.pos++], n |= (127 & i) << 3, i < 128) return a(t, n, e); if (i = o[r.pos++], n |= (127 & i) << 10, i < 128) return a(t, n, e); if (i = o[r.pos++], n |= (127 & i) << 17, i < 128) return a(t, n, e); if (i = o[r.pos++], n |= (127 & i) << 24, i < 128) return a(t, n, e); if (i = o[r.pos++], n |= (1 & i) << 31, i < 128) return a(t, n, e); throw new Error("Expected varint not more than 10 bytes") }(e |= (15 & (r = n[this.pos])) << 28, t, this)))) }, readVarint64: function() { return this.readVarint(!0) }, readSVarint: function() { var t = this.readVarint(); return t % 2 == 1 ? (t + 1) / -2 : t / 2 }, readBoolean: function() { return Boolean(this.readVarint()) }, readString: function() { var t = this.readVarint() + this.pos,
                    e = function(t, e, r) { var n = "",
                            i = e; for (; i < r;) { var o, a, s, u = t[i],
                                l = null,
                                h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1; if (i + h > r) break;
                            1 === h ? u < 128 && (l = u) : 2 === h ? 128 == (192 & (o = t[i + 1])) && (l = (31 & u) << 6 | 63 & o) <= 127 && (l = null) : 3 === h ? (o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && ((l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) <= 2047 || l >= 55296 && l <= 57343) && (l = null)) : 4 === h && (o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && ((l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) <= 65535 || l >= 1114112) && (l = null)), null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, n += String.fromCharCode(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n += String.fromCharCode(l), i += h } return n }(this.buf, this.pos, t); return this.pos = t, e }, readBytes: function() { var t = this.readVarint() + this.pos,
                    e = this.buf.subarray(this.pos, t); return this.pos = t, e }, readPackedVarint: function(t, e) { if (this.type !== i.Bytes) return t.push(this.readVarint(e)); var r = o(this); for (t = t || []; this.pos < r;) t.push(this.readVarint(e)); return t }, readPackedSVarint: function(t) { if (this.type !== i.Bytes) return t.push(this.readSVarint()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readSVarint()); return t }, readPackedBoolean: function(t) { if (this.type !== i.Bytes) return t.push(this.readBoolean()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readBoolean()); return t }, readPackedFloat: function(t) { if (this.type !== i.Bytes) return t.push(this.readFloat()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readFloat()); return t }, readPackedDouble: function(t) { if (this.type !== i.Bytes) return t.push(this.readDouble()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readDouble()); return t }, readPackedFixed32: function(t) { if (this.type !== i.Bytes) return t.push(this.readFixed32()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readFixed32()); return t }, readPackedSFixed32: function(t) { if (this.type !== i.Bytes) return t.push(this.readSFixed32()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readSFixed32()); return t }, readPackedFixed64: function(t) { if (this.type !== i.Bytes) return t.push(this.readFixed64()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readFixed64()); return t }, readPackedSFixed64: function(t) { if (this.type !== i.Bytes) return t.push(this.readSFixed64()); var e = o(this); for (t = t || []; this.pos < e;) t.push(this.readSFixed64()); return t }, skip: function(t) { var e = 7 & t; if (e === i.Varint)
                    for (; this.buf[this.pos++] > 127;);
                else if (e === i.Bytes) this.pos = this.readVarint() + this.pos;
                else if (e === i.Fixed32) this.pos += 4;
                else { if (e !== i.Fixed64) throw new Error("Unimplemented type: " + e);
                    this.pos += 8 } }, writeTag: function(t, e) { this.writeVarint(t << 3 | e) }, realloc: function(t) { for (var e = this.length || 16; e < this.pos + t;) e *= 2; if (e !== this.length) { var r = new Uint8Array(e);
                    r.set(this.buf), this.buf = r, this.length = e } }, finish: function() { return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length) }, writeFixed32: function(t) { this.realloc(4), v(this.buf, t, this.pos), this.pos += 4 }, writeSFixed32: function(t) { this.realloc(4), v(this.buf, t, this.pos), this.pos += 4 }, writeFixed64: function(t) { this.realloc(8), v(this.buf, -1 & t, this.pos), v(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4), this.pos += 8 }, writeSFixed64: function(t) { this.realloc(8), v(this.buf, -1 & t, this.pos), v(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4), this.pos += 8 }, writeVarint: function(t) {
                (t = +t || 0) > 268435455 || t < 0 ? function(t, e) { var r, n;
                    t >= 0 ? (r = t % 4294967296 | 0, n = t / 4294967296 | 0) : (n = ~(-t / 4294967296), 4294967295 ^ (r = ~(-t % 4294967296)) ? r = r + 1 | 0 : (r = 0, n = n + 1 | 0)); if (t >= 0x10000000000000000 || t < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
                    e.realloc(10),
                        function(t, e, r) { r.buf[r.pos++] = 127 & t | 128, t >>>= 7, r.buf[r.pos++] = 127 & t | 128, t >>>= 7, r.buf[r.pos++] = 127 & t | 128, t >>>= 7, r.buf[r.pos++] = 127 & t | 128, t >>>= 7, r.buf[r.pos] = 127 & t }(r, 0, e),
                        function(t, e) { var r = (7 & t) << 4; if (e.buf[e.pos++] |= r | ((t >>>= 3) ? 128 : 0), !t) return; if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return; if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return; if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return; if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
                            e.buf[e.pos++] = 127 & t }(n, e) }(t, this) : (this.realloc(4), this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127)))) }, writeSVarint: function(t) { this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t) }, writeBoolean: function(t) { this.writeVarint(Boolean(t)) }, writeString: function(t) { t = String(t), this.realloc(4 * t.length), this.pos++; var e = this.pos;
                this.pos = function(t, e, r) { for (var n, i, o = 0; o < e.length; o++) { if ((n = e.charCodeAt(o)) > 55295 && n < 57344) { if (!i) { n > 56319 || o + 1 === e.length ? (t[r++] = 239, t[r++] = 191, t[r++] = 189) : i = n; continue } if (n < 56320) { t[r++] = 239, t[r++] = 191, t[r++] = 189, i = n; continue }
                            n = i - 55296 << 10 | n - 56320 | 65536, i = null } else i && (t[r++] = 239, t[r++] = 191, t[r++] = 189, i = null);
                        n < 128 ? t[r++] = n : (n < 2048 ? t[r++] = n >> 6 | 192 : (n < 65536 ? t[r++] = n >> 12 | 224 : (t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128), t[r++] = n >> 6 & 63 | 128), t[r++] = 63 & n | 128) } return r }(this.buf, t, this.pos); var r = this.pos - e;
                r >= 128 && s(e, r, this), this.pos = e - 1, this.writeVarint(r), this.pos += r }, writeFloat: function(t) { this.realloc(4), n.write(this.buf, t, this.pos, !0, 23, 4), this.pos += 4 }, writeDouble: function(t) { this.realloc(8), n.write(this.buf, t, this.pos, !0, 52, 8), this.pos += 8 }, writeBytes: function(t) { var e = t.length;
                this.writeVarint(e), this.realloc(e); for (var r = 0; r < e; r++) this.buf[this.pos++] = t[r] }, writeRawMessage: function(t, e) { this.pos++; var r = this.pos;
                t(e, this); var n = this.pos - r;
                n >= 128 && s(r, n, this), this.pos = r - 1, this.writeVarint(n), this.pos += n }, writeMessage: function(t, e, r) { this.writeTag(t, i.Bytes), this.writeRawMessage(e, r) }, writePackedVarint: function(t, e) { e.length && this.writeMessage(t, u, e) }, writePackedSVarint: function(t, e) { e.length && this.writeMessage(t, l, e) }, writePackedBoolean: function(t, e) { e.length && this.writeMessage(t, p, e) }, writePackedFloat: function(t, e) { e.length && this.writeMessage(t, h, e) }, writePackedDouble: function(t, e) { e.length && this.writeMessage(t, c, e) }, writePackedFixed32: function(t, e) { e.length && this.writeMessage(t, f, e) }, writePackedSFixed32: function(t, e) { e.length && this.writeMessage(t, d, e) }, writePackedFixed64: function(t, e) { e.length && this.writeMessage(t, _, e) }, writePackedSFixed64: function(t, e) { e.length && this.writeMessage(t, g, e) }, writeBytesField: function(t, e) { this.writeTag(t, i.Bytes), this.writeBytes(e) }, writeFixed32Field: function(t, e) { this.writeTag(t, i.Fixed32), this.writeFixed32(e) }, writeSFixed32Field: function(t, e) { this.writeTag(t, i.Fixed32), this.writeSFixed32(e) }, writeFixed64Field: function(t, e) { this.writeTag(t, i.Fixed64), this.writeFixed64(e) }, writeSFixed64Field: function(t, e) { this.writeTag(t, i.Fixed64), this.writeSFixed64(e) }, writeVarintField: function(t, e) { this.writeTag(t, i.Varint), this.writeVarint(e) }, writeSVarintField: function(t, e) { this.writeTag(t, i.Varint), this.writeSVarint(e) }, writeStringField: function(t, e) { this.writeTag(t, i.Bytes), this.writeString(e) }, writeFloatField: function(t, e) { this.writeTag(t, i.Fixed32), this.writeFloat(e) }, writeDoubleField: function(t, e) { this.writeTag(t, i.Fixed64), this.writeDouble(e) }, writeBooleanField: function(t, e) { this.writeVarintField(t, Boolean(e)) } } }, function(t, e, r) { var n = r(5);
        e.Processor = n }, function(t, e) { e.read = function(t, e, r, n, i) { var o, a, s = 8 * i - n - 1,
                u = (1 << s) - 1,
                l = u >> 1,
                h = -7,
                c = r ? i - 1 : 0,
                p = r ? -1 : 1,
                f = t[e + c]; for (c += p, o = f & (1 << -h) - 1, f >>= -h, h += s; h > 0; o = 256 * o + t[e + c], c += p, h -= 8); for (a = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; a = 256 * a + t[e + c], c += p, h -= 8); if (0 === o) o = 1 - l;
            else { if (o === u) return a ? NaN : 1 / 0 * (f ? -1 : 1);
                a += Math.pow(2, n), o -= l } return (f ? -1 : 1) * a * Math.pow(2, o - n) }, e.write = function(t, e, r, n, i, o) { var a, s, u, l = 8 * o - i - 1,
                h = (1 << l) - 1,
                c = h >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = n ? 0 : o - 1,
                d = n ? 1 : -1,
                _ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = h) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + c >= 1 ? p / u : p * Math.pow(2, 1 - c)) * u >= 2 && (a++, u /= 2), a + c >= h ? (s = 0, a = h) : a + c >= 1 ? (s = (e * u - 1) * Math.pow(2, i), a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + f] = 255 & s, f += d, s /= 256, i -= 8); for (a = a << i | s, l += i; l > 0; t[r + f] = 255 & a, f += d, a /= 256, l -= 8);
            t[r + f - d] |= 128 * _ } }, function(t, e, r) { var n = r(6).newImageData;

        function i(t) { var e = !0; try { new ImageData(10, 10) } catch (t) { e = !1 }

            function r(t, r, n) { return e ? new ImageData(t, r, n) : { data: t, width: r, height: n } } return function(e) { var n, i, o = e.buffers,
                    a = e.meta,
                    s = e.imageOps,
                    u = e.width,
                    l = e.height,
                    h = o.length,
                    c = o[0].byteLength; if (s) { var p = new Array(h); for (i = 0; i < h; ++i) p[i] = r(new Uint8ClampedArray(o[i]), u, l);
                    n = t(p, a).data } else { n = new Uint8ClampedArray(c); var f = new Array(h),
                        d = new Array(h); for (i = 0; i < h; ++i) f[i] = new Uint8ClampedArray(o[i]), d[i] = [0, 0, 0, 0]; for (var _ = 0; _ < c; _ += 4) { for (var g = 0; g < h; ++g) { var y = f[g];
                            d[g][0] = y[_], d[g][1] = y[_ + 1], d[g][2] = y[_ + 2], d[g][3] = y[_ + 3] } var v = t(d, a);
                        n[_] = v[0], n[_ + 1] = v[1], n[_ + 2] = v[2], n[_ + 3] = v[3] } } return n.buffer } }

        function o(t, e) { var r = Object.keys(t.lib || {}).map(function(e) { return "var " + e + " = " + t.lib[e].toString() + ";" }).concat(["var __minion__ = (" + i.toString() + ")(", t.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]),
                n = new Blob(r, { type: "text/javascript" }),
                o = URL.createObjectURL(n),
                a = new Worker(o); return a.addEventListener("message", e), a }

        function a(t) { var e;
            this._imageOps = !!t.imageOps; var r = []; if (e = 0 === t.threads ? 0 : this._imageOps ? 1 : t.threads || 1)
                for (var n = 0; n < e; ++n) r[n] = o(t, this._onWorkerMessage.bind(this, n));
            else r[0] = function(t, e) { var r = i(t.operation); return { postMessage: function(t) { setTimeout(function() { e({ data: { buffer: r(t), meta: t.meta } }) }, 0) } } }(t, this._onWorkerMessage.bind(this, 0));
            this._workers = r, this._queue = [], this._maxQueueLength = t.queue || 1 / 0, this._running = 0, this._dataLookup = {}, this._job = null }
        a.prototype.process = function(t, e, r) { this._enqueue({ inputs: t, meta: e, callback: r }), this._dispatch() }, a.prototype.destroy = function() { for (var t in this) this[t] = null;
            this._destroyed = !0 }, a.prototype._enqueue = function(t) { for (this._queue.push(t); this._queue.length > this._maxQueueLength;) this._queue.shift().callback(null, null) }, a.prototype._dispatch = function() { if (0 === this._running && this._queue.length > 0) { var t = this._job = this._queue.shift(),
                    e = t.inputs[0].width,
                    r = t.inputs[0].height,
                    n = t.inputs.map(function(t) { return t.data.buffer }),
                    i = this._workers.length; if (this._running = i, 1 === i) this._workers[0].postMessage({ buffers: n, meta: t.meta, imageOps: this._imageOps, width: e, height: r }, n);
                else
                    for (var o = t.inputs[0].data.length, a = 4 * Math.ceil(o / 4 / i), s = 0; s < i; ++s) { for (var u = s * a, l = [], h = 0, c = n.length; h < c; ++h) l.push(n[s].slice(u, u + a));
                        this._workers[s].postMessage({ buffers: l, meta: t.meta, imageOps: this._imageOps, width: e, height: r }, l) } } }, a.prototype._onWorkerMessage = function(t, e) { this._destroyed || (this._dataLookup[t] = e.data, --this._running, 0 === this._running && this._resolveJob()) }, a.prototype._resolveJob = function() { var t, e, r = this._job,
                i = this._workers.length; if (1 === i) t = new Uint8ClampedArray(this._dataLookup[0].buffer), e = this._dataLookup[0].meta;
            else { var o = r.inputs[0].data.length;
                t = new Uint8ClampedArray(o), e = new Array(o); for (var a = 4 * Math.ceil(o / 4 / i), s = 0; s < i; ++s) { var u = this._dataLookup[s].buffer,
                        l = s * a;
                    t.set(new Uint8ClampedArray(u), l), e[s] = this._dataLookup[s].meta } }
            this._job = null, this._dataLookup = {}, r.callback(null, n(t, r.inputs[0].width, r.inputs[0].height), e), this._dispatch() }, t.exports = a }, function(t, e) { var r = !0; try { new ImageData(10, 10) } catch (t) { r = !1 } var n = document.createElement("canvas").getContext("2d");
        e.newImageData = function(t, e, i) { if (r) return new ImageData(t, e, i); var o = n.createImageData(e, i); return o.data.set(t), o } }, function(t, e, r) { "use strict";

        function n() { return function() { throw new Error("Unimplemented abstract method.") }() }
        r.r(e); var i = 0;

        function o(t) { return t.ol_uid || (t.ol_uid = String(++i)) } var a, s = "6.0.0",
            u = (a = function(t, e) { return (a = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(t, e) }, function(t, e) {
                function r() { this.constructor = t }
                a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r) }),
            l = function(t) {
                function e(e) { var r = this,
                        n = "Assertion failed. See https://openlayers.org/en/" + ("latest" === s ? s : "v" + s.split("-")[0]) + "/doc/errors/#" + e + " for details."; return (r = t.call(this, n) || this).code = e, r.name = "AssertionError", r.message = n, r } return u(e, t), e }(Error),
            h = { ADD: "add", REMOVE: "remove" },
            c = "propertychange",
            p = "function" == typeof Object.assign ? Object.assign : function(t, e) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var r = Object(t), n = 1, i = arguments.length; n < i; ++n) { var o = arguments[n]; if (null != o)
                        for (var a in o) o.hasOwnProperty(a) && (r[a] = o[a]) } return r };

        function f(t) { for (var e in t) delete t[e] } var d = "function" == typeof Object.values ? Object.values : function(t) { var e = []; for (var r in t) e.push(t[r]); return e };

        function _(t) { var e; for (e in t) return !1; return !e }

        function g(t, e, r, n, i) { if (n && n !== t && (r = r.bind(n)), i) { var o = r;
                r = function() { t.removeEventListener(e, r), o.apply(this, arguments) } } var a = { target: t, type: e, listener: r }; return t.addEventListener(e, r), a }

        function y(t, e, r, n) { return g(t, e, r, n, !0) }

        function v(t) { t && t.target && (t.target.removeEventListener(t.type, t.listener), f(t)) } var m = function() {
            function t() { this.disposed_ = !1 } return t.prototype.dispose = function() { this.disposed_ || (this.disposed_ = !0, this.disposeInternal()) }, t.prototype.disposeInternal = function() {}, t }();

        function E(t, e) { return t > e ? 1 : t < e ? -1 : 0 }

        function T(t, e) { return t.indexOf(e) >= 0 }

        function S(t, e, r) { var n = t.length; if (t[0] <= e) return 0; if (e <= t[n - 1]) return n - 1; var i = void 0; if (r > 0) { for (i = 1; i < n; ++i)
                    if (t[i] < e) return i - 1 } else if (r < 0) { for (i = 1; i < n; ++i)
                    if (t[i] <= e) return i } else
                for (i = 1; i < n; ++i) { if (t[i] == e) return i; if (t[i] < e) return t[i - 1] - e < e - t[i] ? i - 1 : i }
            return n - 1 }

        function w(t, e, r) { for (; e < r;) { var n = t[e];
                t[e] = t[r], t[r] = n, ++e, --r } }

        function x(t, e) { for (var r = Array.isArray(e) ? e : [e], n = r.length, i = 0; i < n; i++) t[t.length] = r[i] }

        function O(t, e) { for (var r, n = t.length >>> 0, i = 0; i < n; i++)
                if (e(r = t[i], i, t)) return r;
            return null }

        function R(t, e) { var r = t.length; if (r !== e.length) return !1; for (var n = 0; n < r; n++)
                if (t[n] !== e[n]) return !1;
            return !0 }

        function C(t, e) { var r; return !t.every(function(n, i) { return r = i, !e(n, i, t) }) ? r : -1 }

        function P() { return !0 }

        function I() { return !1 }

        function b() {}

        function L(t) { t.stopPropagation() } var M = function() {
                function t(t) { this.propagationStopped, this.type = t, this.target = null } return t.prototype.preventDefault = function() { this.propagationStopped = !0 }, t.prototype.stopPropagation = function() { this.propagationStopped = !0 }, t }(),
            F = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            A = function(t) {
                function e(e) { var r = t.call(this) || this; return r.target_ = e, r.pendingRemovals_ = {}, r.dispatching_ = {}, r.listeners_ = {}, r } return F(e, t), e.prototype.addEventListener = function(t, e) { if (t && e) { var r = this.listeners_[t];
                        r || (r = this.listeners_[t] = []), -1 === r.indexOf(e) && r.push(e) } }, e.prototype.dispatchEvent = function(t) { var e = "string" == typeof t ? new M(t) : t,
                        r = e.type;
                    e.target || (e.target = this.target_ || this); var n, i = this.listeners_[r]; if (i) { r in this.dispatching_ || (this.dispatching_[r] = 0, this.pendingRemovals_[r] = 0), ++this.dispatching_[r]; for (var o = 0, a = i.length; o < a; ++o)
                            if (!1 === i[o].call(this, e) || e.propagationStopped) { n = !1; break }
                        if (--this.dispatching_[r], 0 === this.dispatching_[r]) { var s = this.pendingRemovals_[r]; for (delete this.pendingRemovals_[r]; s--;) this.removeEventListener(r, b);
                            delete this.dispatching_[r] } return n } }, e.prototype.disposeInternal = function() { f(this.listeners_) }, e.prototype.getListeners = function(t) { return this.listeners_[t] }, e.prototype.hasListener = function(t) { return t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 }, e.prototype.removeEventListener = function(t, e) { var r = this.listeners_[t]; if (r) { var n = r.indexOf(e); - 1 !== n && (t in this.pendingRemovals_ ? (r[n] = b, ++this.pendingRemovals_[t]) : (r.splice(n, 1), 0 === r.length && delete this.listeners_[t])) } }, e }(m),
            N = { CHANGE: "change", ERROR: "error", CLEAR: "clear", CONTEXTMENU: "contextmenu", CLICK: "click", DBLCLICK: "dblclick", DRAGENTER: "dragenter", DRAGOVER: "dragover", DROP: "drop", KEYDOWN: "keydown", KEYPRESS: "keypress", LOAD: "load", RESIZE: "resize", WHEEL: "wheel" },
            G = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(); var D = function(t) {
                function e() { var e = t.call(this) || this; return e.revision_ = 0, e } return G(e, t), e.prototype.changed = function() {++this.revision_, this.dispatchEvent(N.CHANGE) }, e.prototype.getRevision = function() { return this.revision_ }, e.prototype.on = function(t, e) { if (Array.isArray(t)) { for (var r = t.length, n = new Array(r), i = 0; i < r; ++i) n[i] = g(this, t[i], e); return n } return g(this, t, e) }, e.prototype.once = function(t, e) { if (Array.isArray(t)) { for (var r = t.length, n = new Array(r), i = 0; i < r; ++i) n[i] = y(this, t[i], e); return n } return y(this, t, e) }, e.prototype.un = function(t, e) { if (Array.isArray(t))
                        for (var r = 0, n = t.length; r < n; ++r) this.removeEventListener(t[r], e);
                    else this.removeEventListener(t, e) }, e }(A),
            j = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            k = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.key = r, i.oldValue = n, i } return j(e, t), e }(M),
            U = function(t) {
                function e(e) { var r = t.call(this) || this; return o(r), r.values_ = {}, void 0 !== e && r.setProperties(e), r } return j(e, t), e.prototype.get = function(t) { var e; return this.values_.hasOwnProperty(t) && (e = this.values_[t]), e }, e.prototype.getKeys = function() { return Object.keys(this.values_) }, e.prototype.getProperties = function() { return p({}, this.values_) }, e.prototype.notify = function(t, e) { var r;
                    r = Y(t), this.dispatchEvent(new k(r, t, e)), r = c, this.dispatchEvent(new k(r, t, e)) }, e.prototype.set = function(t, e, r) { if (r) this.values_[t] = e;
                    else { var n = this.values_[t];
                        this.values_[t] = e, n !== e && this.notify(t, n) } }, e.prototype.setProperties = function(t, e) { for (var r in t) this.set(r, t[r], e) }, e.prototype.unset = function(t, e) { if (t in this.values_) { var r = this.values_[t];
                        delete this.values_[t], e || this.notify(t, r) } }, e }(D),
            B = {};

        function Y(t) { return B.hasOwnProperty(t) ? B[t] : B[t] = "change:" + t } var z = U,
            X = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            V = "length",
            W = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.element = r, i.index = n, i } return X(e, t), e }(M),
            Z = function(t) {
                function e(e, r) { var n = t.call(this) || this,
                        i = r || {}; if (n.unique_ = !!i.unique, n.array_ = e || [], n.unique_)
                        for (var o = 0, a = n.array_.length; o < a; ++o) n.assertUnique_(n.array_[o], o); return n.updateLength_(), n } return X(e, t), e.prototype.clear = function() { for (; this.getLength() > 0;) this.pop() }, e.prototype.extend = function(t) { for (var e = 0, r = t.length; e < r; ++e) this.push(t[e]); return this }, e.prototype.forEach = function(t) { for (var e = this.array_, r = 0, n = e.length; r < n; ++r) t(e[r], r, e) }, e.prototype.getArray = function() { return this.array_ }, e.prototype.item = function(t) { return this.array_[t] }, e.prototype.getLength = function() { return this.get(V) }, e.prototype.insertAt = function(t, e) { this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(new W(h.ADD, e, t)) }, e.prototype.pop = function() { return this.removeAt(this.getLength() - 1) }, e.prototype.push = function(t) { this.unique_ && this.assertUnique_(t); var e = this.getLength(); return this.insertAt(e, t), this.getLength() }, e.prototype.remove = function(t) { for (var e = this.array_, r = 0, n = e.length; r < n; ++r)
                        if (e[r] === t) return this.removeAt(r) }, e.prototype.removeAt = function(t) { var e = this.array_[t]; return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new W(h.REMOVE, e, t)), e }, e.prototype.setAt = function(t, e) { var r = this.getLength(); if (t < r) { this.unique_ && this.assertUnique_(e, t); var n = this.array_[t];
                        this.array_[t] = e, this.dispatchEvent(new W(h.REMOVE, n, t)), this.dispatchEvent(new W(h.ADD, e, t)) } else { for (var i = r; i < t; ++i) this.insertAt(i, void 0);
                        this.insertAt(t, e) } }, e.prototype.updateLength_ = function() { this.set(V, this.array_.length) }, e.prototype.assertUnique_ = function(t, e) { for (var r = 0, n = this.array_.length; r < n; ++r)
                        if (this.array_[r] === t && r !== e) throw new l(58) }, e }(z);

        function K(t, e) { if (!t) throw new l(e) } var H = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(); var q = function(t) {
                function e(e) { var r = t.call(this) || this; if (r.id_ = void 0, r.geometryName_ = "geometry", r.style_ = null, r.styleFunction_ = void 0, r.geometryChangeKey_ = null, r.addEventListener(Y(r.geometryName_), r.handleGeometryChanged_), e)
                        if ("function" == typeof e.getSimplifiedGeometry) { var n = e;
                            r.setGeometry(n) } else { var i = e;
                            r.setProperties(i) }
                    return r } return H(e, t), e.prototype.clone = function() { var t = new e(this.getProperties());
                    t.setGeometryName(this.getGeometryName()); var r = this.getGeometry();
                    r && t.setGeometry(r.clone()); var n = this.getStyle(); return n && t.setStyle(n), t }, e.prototype.getGeometry = function() { return this.get(this.geometryName_) }, e.prototype.getId = function() { return this.id_ }, e.prototype.getGeometryName = function() { return this.geometryName_ }, e.prototype.getStyle = function() { return this.style_ }, e.prototype.getStyleFunction = function() { return this.styleFunction_ }, e.prototype.handleGeometryChange_ = function() { this.changed() }, e.prototype.handleGeometryChanged_ = function() { this.geometryChangeKey_ && (v(this.geometryChangeKey_), this.geometryChangeKey_ = null); var t = this.getGeometry();
                    t && (this.geometryChangeKey_ = g(t, N.CHANGE, this.handleGeometryChange_, this)), this.changed() }, e.prototype.setGeometry = function(t) { this.set(this.geometryName_, t) }, e.prototype.setStyle = function(t) { this.style_ = t, this.styleFunction_ = t ? function(t) { if ("function" == typeof t) return t; var e;
                        Array.isArray(t) ? e = t : (K("function" == typeof t.getZIndex, 41), e = [t]); return function() { return e } }(t) : void 0, this.changed() }, e.prototype.setId = function(t) { this.id_ = t, this.changed() }, e.prototype.setGeometryName = function(t) { this.removeEventListener(Y(this.geometryName_), this.handleGeometryChanged_), this.geometryName_ = t, this.addEventListener(Y(this.geometryName_), this.handleGeometryChanged_), this.handleGeometryChanged_() }, e }(z),
            J = { BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", TOP_LEFT: "top-left", TOP_RIGHT: "top-right" },
            Q = { UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16 };

        function $(t) { for (var e = st(), r = 0, n = t.length; r < n; ++r) dt(e, t[r]); return e }

        function tt(t, e, r) { return r ? (r[0] = t[0] - e, r[1] = t[1] - e, r[2] = t[2] + e, r[3] = t[3] + e, r) : [t[0] - e, t[1] - e, t[2] + e, t[3] + e] }

        function et(t, e) { return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t.slice() }

        function rt(t, e, r) { var n, i; return (n = e < t[0] ? t[0] - e : t[2] < e ? e - t[2] : 0) * n + (i = r < t[1] ? t[1] - r : t[3] < r ? r - t[3] : 0) * i }

        function nt(t, e) { return ot(t, e[0], e[1]) }

        function it(t, e) { return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3] }

        function ot(t, e, r) { return t[0] <= e && e <= t[2] && t[1] <= r && r <= t[3] }

        function at(t, e) { var r = t[0],
                n = t[1],
                i = t[2],
                o = t[3],
                a = e[0],
                s = e[1],
                u = Q.UNKNOWN; return a < r ? u |= Q.LEFT : a > i && (u |= Q.RIGHT), s < n ? u |= Q.BELOW : s > o && (u |= Q.ABOVE), u === Q.UNKNOWN && (u = Q.INTERSECTING), u }

        function st() { return [1 / 0, 1 / 0, -1 / 0, -1 / 0] }

        function ut(t, e, r, n, i) { return i ? (i[0] = t, i[1] = e, i[2] = r, i[3] = n, i) : [t, e, r, n] }

        function lt(t) { return ut(1 / 0, 1 / 0, -1 / 0, -1 / 0, t) }

        function ht(t, e) { var r = t[0],
                n = t[1]; return ut(r, n, r, n, e) }

        function ct(t, e, r, n, i) { return gt(lt(i), t, e, r, n) }

        function pt(t, e) { return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3] }

        function ft(t, e) { return e[0] < t[0] && (t[0] = e[0]), e[2] > t[2] && (t[2] = e[2]), e[1] < t[1] && (t[1] = e[1]), e[3] > t[3] && (t[3] = e[3]), t }

        function dt(t, e) { e[0] < t[0] && (t[0] = e[0]), e[0] > t[2] && (t[2] = e[0]), e[1] < t[1] && (t[1] = e[1]), e[1] > t[3] && (t[3] = e[1]) }

        function _t(t, e) { for (var r = 0, n = e.length; r < n; ++r) dt(t, e[r]); return t }

        function gt(t, e, r, n, i) { for (; r < n; r += i) yt(t, e[r], e[r + 1]); return t }

        function yt(t, e, r) { t[0] = Math.min(t[0], e), t[1] = Math.min(t[1], r), t[2] = Math.max(t[2], e), t[3] = Math.max(t[3], r) }

        function vt(t, e) { var r; return (r = e(Et(t))) ? r : (r = e(Tt(t))) ? r : (r = e(Pt(t))) ? r : (r = e(Ct(t))) || !1 }

        function mt(t) { var e = 0; return Lt(t) || (e = It(t) * Ot(t)), e }

        function Et(t) { return [t[0], t[1]] }

        function Tt(t) { return [t[2], t[1]] }

        function St(t) { return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2] }

        function wt(t, e) { var r; return e === J.BOTTOM_LEFT ? r = Et(t) : e === J.BOTTOM_RIGHT ? r = Tt(t) : e === J.TOP_LEFT ? r = Ct(t) : e === J.TOP_RIGHT ? r = Pt(t) : K(!1, 13), r }

        function xt(t, e, r, n, i) { var o = e * n[0] / 2,
                a = e * n[1] / 2,
                s = Math.cos(r),
                u = Math.sin(r),
                l = o * s,
                h = o * u,
                c = a * s,
                p = a * u,
                f = t[0],
                d = t[1],
                _ = f - l + p,
                g = f - l - p,
                y = f + l - p,
                v = f + l + p,
                m = d - h - c,
                E = d - h + c,
                T = d + h + c,
                S = d + h - c; return ut(Math.min(_, g, y, v), Math.min(m, E, T, S), Math.max(_, g, y, v), Math.max(m, E, T, S), i) }

        function Ot(t) { return t[3] - t[1] }

        function Rt(t, e, r) { var n = r || [1 / 0, 1 / 0, -1 / 0, -1 / 0]; return bt(t, e) ? (t[0] > e[0] ? n[0] = t[0] : n[0] = e[0], t[1] > e[1] ? n[1] = t[1] : n[1] = e[1], t[2] < e[2] ? n[2] = t[2] : n[2] = e[2], t[3] < e[3] ? n[3] = t[3] : n[3] = e[3]) : lt(n), n }

        function Ct(t) { return [t[0], t[3]] }

        function Pt(t) { return [t[2], t[3]] }

        function It(t) { return t[2] - t[0] }

        function bt(t, e) { return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1] }

        function Lt(t) { return t[2] < t[0] || t[3] < t[1] }

        function Mt(t, e) { var r = (t[2] - t[0]) / 2 * (e - 1),
                n = (t[3] - t[1]) / 2 * (e - 1);
            t[0] -= r, t[2] += r, t[1] -= n, t[3] += n }

        function Ft(t, e, r) { var n = [t[0], t[1], t[0], t[3], t[2], t[1], t[2], t[3]]; return e(n, n, 2),
                function(t, e, r) { return ut(Math.min.apply(null, t), Math.min.apply(null, e), Math.max.apply(null, t), Math.max.apply(null, e), r) }([n[0], n[2], n[4], n[6]], [n[1], n[3], n[5], n[7]], r) } var At = { XY: "XY", XYZ: "XYZ", XYM: "XYM", XYZM: "XYZM" },
            Nt = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" };

        function Gt(t, e, r, n, i, o) { for (var a = o || [], s = 0, u = e; u < r; u += n) { var l = t[u],
                    h = t[u + 1];
                a[s++] = i[0] * l + i[2] * h + i[4], a[s++] = i[1] * l + i[3] * h + i[5] } return o && a.length != s && (a.length = s), a }

        function Dt(t, e, r, n, i, o, a) { for (var s = a || [], u = Math.cos(i), l = Math.sin(i), h = o[0], c = o[1], p = 0, f = e; f < r; f += n) { var d = t[f] - h,
                    _ = t[f + 1] - c;
                s[p++] = h + d * u - _ * l, s[p++] = c + d * l + _ * u; for (var g = f + 2; g < f + n; ++g) s[p++] = t[g] } return a && s.length != p && (s.length = p), s }

        function jt(t, e, r, n, i, o, a) { for (var s = a || [], u = 0, l = e; l < r; l += n) { s[u++] = t[l] + i, s[u++] = t[l + 1] + o; for (var h = l + 2; h < l + n; ++h) s[u++] = t[h] } return a && s.length != u && (s.length = u), s }

        function kt(t, e, r) { return Math.min(Math.max(t, e), r) } var Ut = "cosh" in Math ? Math.cosh : function(t) { var e = Math.exp(t); return (e + 1 / e) / 2 };

        function Bt(t, e, r, n, i, o) { var a = i - r,
                s = o - n; if (0 !== a || 0 !== s) { var u = ((t - r) * a + (e - n) * s) / (a * a + s * s);
                u > 1 ? (r = i, n = o) : u > 0 && (r += a * u, n += s * u) } return Yt(t, e, r, n) }

        function Yt(t, e, r, n) { var i = r - t,
                o = n - e; return i * i + o * o }

        function zt(t) { return 180 * t / Math.PI }

        function Xt(t) { return t * Math.PI / 180 }

        function Vt(t, e) { var r = t % e; return r * e < 0 ? r + e : r }

        function Wt(t, e, r) { return t + r * (e - t) }
        /**
         * @license
         * Latitude/longitude spherical geodesy formulae taken from
         * http://www.movable-type.co.uk/scripts/latlong.html
         * Licensed under CC-BY-3.0.
         */
        var Zt = 6371008.8;

        function Kt(t, e, r) { var n = r || Zt,
                i = Xt(t[1]),
                o = Xt(e[1]),
                a = (o - i) / 2,
                s = Xt(e[0] - t[0]) / 2,
                u = Math.sin(a) * Math.sin(a) + Math.sin(s) * Math.sin(s) * Math.cos(i) * Math.cos(o); return 2 * n * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)) }

        function Ht(t, e) { for (var r = 0, n = 0, i = t.length; n < i - 1; ++n) r += Kt(t[n], t[n + 1], e); return r }

        function qt(t, e) { for (var r = 0, n = t.length, i = t[n - 1][0], o = t[n - 1][1], a = 0; a < n; a++) { var s = t[a][0],
                    u = t[a][1];
                r += Xt(s - i) * (2 + Math.sin(Xt(o)) + Math.sin(Xt(u))), i = s, o = u } return r * e * e / 2 }

        function Jt(t, e, r, n) { var i = n || Zt,
                o = Xt(t[1]),
                a = Xt(t[0]),
                s = e / i,
                u = Math.asin(Math.sin(o) * Math.cos(s) + Math.cos(o) * Math.sin(s) * Math.cos(r)); return [zt(a + Math.atan2(Math.sin(r) * Math.sin(s) * Math.cos(o), Math.cos(s) - Math.sin(o) * Math.sin(u))), zt(u)] } var Qt = { DEGREES: "degrees", FEET: "ft", METERS: "m", PIXELS: "pixels", TILE_PIXELS: "tile-pixels", USFEET: "us-ft" },
            $t = {};
        $t[Qt.DEGREES] = 2 * Math.PI * 6370997 / 360, $t[Qt.FEET] = .3048, $t[Qt.METERS] = 1, $t[Qt.USFEET] = 1200 / 3937; var te = Qt,
            ee = function() {
                function t(t) { this.code_ = t.code, this.units_ = t.units, this.extent_ = void 0 !== t.extent ? t.extent : null, this.worldExtent_ = void 0 !== t.worldExtent ? t.worldExtent : null, this.axisOrientation_ = void 0 !== t.axisOrientation ? t.axisOrientation : "enu", this.global_ = void 0 !== t.global && t.global, this.canWrapX_ = !(!this.global_ || !this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit } return t.prototype.canWrapX = function() { return this.canWrapX_ }, t.prototype.getCode = function() { return this.code_ }, t.prototype.getExtent = function() { return this.extent_ }, t.prototype.getUnits = function() { return this.units_ }, t.prototype.getMetersPerUnit = function() { return this.metersPerUnit_ || $t[this.units_] }, t.prototype.getWorldExtent = function() { return this.worldExtent_ }, t.prototype.getAxisOrientation = function() { return this.axisOrientation_ }, t.prototype.isGlobal = function() { return this.global_ }, t.prototype.setGlobal = function(t) { this.global_ = t, this.canWrapX_ = !(!t || !this.extent_) }, t.prototype.getDefaultTileGrid = function() { return this.defaultTileGrid_ }, t.prototype.setDefaultTileGrid = function(t) { this.defaultTileGrid_ = t }, t.prototype.setExtent = function(t) { this.extent_ = t, this.canWrapX_ = !(!this.global_ || !t) }, t.prototype.setWorldExtent = function(t) { this.worldExtent_ = t }, t.prototype.setGetPointResolution = function(t) { this.getPointResolutionFunc_ = t }, t.prototype.getPointResolutionFunc = function() { return this.getPointResolutionFunc_ }, t }(),
            re = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ne = 6378137,
            ie = Math.PI * ne,
            oe = [-ie, -ie, ie, ie],
            ae = [-180, -85, 180, 85],
            se = function(t) {
                function e(e) { return t.call(this, { code: e, units: te.METERS, extent: oe, global: !0, worldExtent: ae, getPointResolution: function(t, e) { return t / Ut(e[1] / ne) } }) || this } return re(e, t), e }(ee),
            ue = [new se("EPSG:3857"), new se("EPSG:102100"), new se("EPSG:102113"), new se("EPSG:900913"), new se("urn:ogc:def:crs:EPSG:6.18:3:3857"), new se("urn:ogc:def:crs:EPSG::3857"), new se("http://www.opengis.net/gml/srs/epsg.xml#3857")];

        function le(t, e, r) { var n = t.length,
                i = r > 1 ? r : 2,
                o = e;
            void 0 === o && (o = i > 2 ? t.slice() : new Array(n)); for (var a = ie, s = 0; s < n; s += i) { o[s] = a * t[s] / 180; var u = ne * Math.log(Math.tan(Math.PI * (+t[s + 1] + 90) / 360));
                u > a ? u = a : u < -a && (u = -a), o[s + 1] = u } return o }

        function he(t, e, r) { var n = t.length,
                i = r > 1 ? r : 2,
                o = e;
            void 0 === o && (o = i > 2 ? t.slice() : new Array(n)); for (var a = 0; a < n; a += i) o[a] = 180 * t[a] / ie, o[a + 1] = 360 * Math.atan(Math.exp(t[a + 1] / ne)) / Math.PI - 90; return o } var ce = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            pe = [-180, -90, 180, 90],
            fe = 6378137 * Math.PI / 180,
            de = function(t) {
                function e(e, r) { return t.call(this, { code: e, units: te.DEGREES, extent: pe, axisOrientation: r, global: !0, metersPerUnit: fe, worldExtent: pe }) || this } return ce(e, t), e }(ee),
            _e = [new de("CRS:84"), new de("EPSG:4326", "neu"), new de("urn:ogc:def:crs:EPSG::4326", "neu"), new de("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new de("urn:ogc:def:crs:OGC:1.3:CRS84"), new de("urn:ogc:def:crs:OGC:2:84"), new de("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new de("urn:x-ogc:def:crs:EPSG:4326", "neu")],
            ge = {};

        function ye(t, e, r) { var n = t.getCode(),
                i = e.getCode();
            n in ge || (ge[n] = {}), ge[n][i] = r }

        function ve(t, e) { var r; return t in ge && e in ge[t] && (r = ge[t][e]), r } var me = {};

        function Ee(t, e, r) { var n; if (void 0 !== e) { for (var i = 0, o = t.length; i < o; ++i) e[i] = t[i];
                n = e } else n = t.slice(); return n }

        function Te(t, e, r) { if (void 0 !== e && t !== e) { for (var n = 0, i = t.length; n < i; ++n) e[n] = t[n];
                t = e } return t }

        function Se(t) {! function(t, e) { me[t] = e }(t.getCode(), t), ye(t, t, Ee) }

        function we(t) { return "string" == typeof t ? me[t] || null : t || null }

        function xe(t, e, r, n) { var i, o = (t = we(t)).getPointResolutionFunc(); if (o) i = o(e, r), n && n !== t.getUnits() && (a = t.getMetersPerUnit()) && (i = i * a / $t[n]);
            else if (t.getUnits() == te.DEGREES && !n || n == te.DEGREES) i = e;
            else { var a, s = be(t, we("EPSG:4326")),
                    u = [r[0] - e / 2, r[1], r[0] + e / 2, r[1], r[0], r[1] - e / 2, r[0], r[1] + e / 2];
                i = (Kt((u = s(u, u, 2)).slice(0, 2), u.slice(2, 4)) + Kt(u.slice(4, 6), u.slice(6, 8))) / 2, void 0 !== (a = n ? $t[n] : t.getMetersPerUnit()) && (i /= a) } return i }

        function Oe(t) {! function(t) { t.forEach(Se) }(t), t.forEach(function(e) { t.forEach(function(t) { e !== t && ye(e, t, Ee) }) }) }

        function Re(t, e) { return t ? "string" == typeof t ? we(t) : t : we(e) }

        function Ce(t) { return function(e, r, n) { for (var i = e.length, o = void 0 !== n ? n : 2, a = void 0 !== r ? r : new Array(i), s = 0; s < i; s += o) { var u = t([e[s], e[s + 1]]);
                    a[s] = u[0], a[s + 1] = u[1]; for (var l = o - 1; l >= 2; --l) a[s + l] = e[s + l] } return a } }

        function Pe(t, e, r, n) { var i = we(t),
                o = we(e);
            ye(i, o, Ce(r)), ye(o, i, Ce(n)) }

        function Ie(t, e) { if (t === e) return !0; var r = t.getUnits() === e.getUnits(); return t.getCode() === e.getCode() ? r : be(t, e) === Ee && r }

        function be(t, e) { var r = ve(t.getCode(), e.getCode()); return r || (r = Te), r }

        function Le(t, e) { return be(we(t), we(e)) }

        function Me(t, e, r) { return Le(e, r)(t, void 0, t.length) }

        function Fe(t, e, r) { return Ft(t, Le(e, r)) } var Ae, Ne, Ge, De = null;

        function je() { return De }

        function ke(t, e) { return De ? Me(t, e, De) : t }

        function Ue(t, e) { return De ? Me(t, De, e) : t }

        function Be(t, e) { return De ? Fe(t, e, De) : t }

        function Ye(t, e) { return De ? Fe(t, De, e) : t }
        Oe(ue), Oe(_e), Ae = ue, Ne = le, Ge = he, _e.forEach(function(t) { Ae.forEach(function(e) { ye(t, e, Ne), ye(e, t, Ge) }) }); var ze = new Array(6);

        function Xe(t) { return We(t, 1, 0, 0, 1, 0, 0) }

        function Ve(t, e) { var r = t[0],
                n = t[1],
                i = t[2],
                o = t[3],
                a = t[4],
                s = t[5],
                u = e[0],
                l = e[1],
                h = e[2],
                c = e[3],
                p = e[4],
                f = e[5]; return t[0] = r * u + i * l, t[1] = n * u + o * l, t[2] = r * h + i * c, t[3] = n * h + o * c, t[4] = r * p + i * f + a, t[5] = n * p + o * f + s, t }

        function We(t, e, r, n, i, o, a) { return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t[4] = o, t[5] = a, t }

        function Ze(t, e) { var r = e[0],
                n = e[1]; return e[0] = t[0] * r + t[2] * n + t[4], e[1] = t[1] * r + t[3] * n + t[5], e }

        function Ke(t, e, r) { return Ve(t, We(ze, e, 0, 0, r, 0, 0)) }

        function He(t, e, r) { return We(t, e, 0, 0, r, 0, 0) }

        function qe(t, e, r, n, i, o, a, s) { var u = Math.sin(o),
                l = Math.cos(o); return t[0] = n * l, t[1] = i * u, t[2] = -n * u, t[3] = i * l, t[4] = a * n * l - s * n * u + e, t[5] = a * i * u + s * i * l + r, t }

        function Je(t, e) { var r, n = (r = e)[0] * r[3] - r[1] * r[2];
            K(0 !== n, 32); var i = e[0],
                o = e[1],
                a = e[2],
                s = e[3],
                u = e[4],
                l = e[5]; return t[0] = s / n, t[1] = -o / n, t[2] = -a / n, t[3] = i / n, t[4] = (a * l - s * u) / n, t[5] = -(i * l - o * u) / n, t }

        function Qe(t) { return "matrix(" + t.join(", ") + ")" } var $e = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            tr = [1, 0, 0, 1, 0, 0],
            er = function(t) {
                function e() { var e, r, n, i, o, a = t.call(this) || this; return a.extent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a.extentRevision_ = -1, a.simplifiedGeometryMaxMinSquaredTolerance = 0, a.simplifiedGeometryRevision = 0, a.simplifyTransformedInternal = (e = function(t, e, r, n) { if (!r || !n) return this.getSimplifiedGeometry(e); var i = be(r, n),
                            o = this.clone(); return o.applyTransform(i), o.getSimplifiedGeometry(e) }, o = !1, function() { var t = Array.prototype.slice.call(arguments); return o && this === i && R(t, n) || (o = !0, i = this, n = t, r = e.apply(this, arguments)), r }), a } return $e(e, t), e.prototype.simplifyTransformed = function(t, e, r) { return this.simplifyTransformedInternal(this.getRevision(), t, e, r) }, e.prototype.clone = function() { return n() }, e.prototype.closestPointXY = function(t, e, r, i) { return n() }, e.prototype.containsXY = function(t, e) { var r = this.getClosestPoint([t, e]); return r[0] === t && r[1] === e }, e.prototype.getClosestPoint = function(t, e) { var r = e || [NaN, NaN]; return this.closestPointXY(t[0], t[1], r, 1 / 0), r }, e.prototype.intersectsCoordinate = function(t) { return this.containsXY(t[0], t[1]) }, e.prototype.computeExtent = function(t) { return n() }, e.prototype.getExtent = function(t) { return this.extentRevision_ != this.getRevision() && (this.extent_ = this.computeExtent(this.extent_), this.extentRevision_ = this.getRevision()),
                        function(t, e) { return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t }(this.extent_, t) }, e.prototype.rotate = function(t, e) { n() }, e.prototype.scale = function(t, e, r) { n() }, e.prototype.simplify = function(t) { return this.getSimplifiedGeometry(t * t) }, e.prototype.getSimplifiedGeometry = function(t) { return n() }, e.prototype.getType = function() { return n() }, e.prototype.applyTransform = function(t) { n() }, e.prototype.intersectsExtent = function(t) { return n() }, e.prototype.translate = function(t, e) { n() }, e.prototype.transform = function(t, e) { var r = we(t),
                        n = r.getUnits() == te.TILE_PIXELS ? function(t, n, i) { var o = r.getExtent(),
                                a = r.getWorldExtent(),
                                s = Ot(a) / Ot(o); return qe(tr, a[0], a[3], s, -s, 0, 0, 0), Gt(t, 0, t.length, i, tr, n), Le(r, e)(t, n, i) } : Le(r, e); return this.applyTransform(n), this }, e }(z),
            rr = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function nr(t) { var e; return t == At.XY ? e = 2 : t == At.XYZ || t == At.XYM ? e = 3 : t == At.XYZM && (e = 4), e } var ir = function(t) {
            function e() { var e = t.call(this) || this; return e.layout = At.XY, e.stride = 2, e.flatCoordinates = null, e } return rr(e, t), e.prototype.computeExtent = function(t) { return ct(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t) }, e.prototype.getCoordinates = function() { return n() }, e.prototype.getFirstCoordinate = function() { return this.flatCoordinates.slice(0, this.stride) }, e.prototype.getFlatCoordinates = function() { return this.flatCoordinates }, e.prototype.getLastCoordinate = function() { return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride) }, e.prototype.getLayout = function() { return this.layout }, e.prototype.getSimplifiedGeometry = function(t) { if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t <= this.simplifiedGeometryMaxMinSquaredTolerance) return this; var e = this.getSimplifiedGeometryInternal(t); return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this) }, e.prototype.getSimplifiedGeometryInternal = function(t) { return this }, e.prototype.getStride = function() { return this.stride }, e.prototype.setFlatCoordinates = function(t, e) { this.stride = nr(t), this.layout = t, this.flatCoordinates = e }, e.prototype.setCoordinates = function(t, e) { n() }, e.prototype.setLayout = function(t, e, r) { var n; if (t) n = nr(t);
                else { for (var i = 0; i < r; ++i) { if (0 === e.length) return this.layout = At.XY, void(this.stride = 2);
                        e = e[0] }
                    t = function(t) { var e;
                        2 == t ? e = At.XY : 3 == t ? e = At.XYZ : 4 == t && (e = At.XYZM); return e }(n = e.length) }
                this.layout = t, this.stride = n }, e.prototype.applyTransform = function(t) { this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed()) }, e.prototype.rotate = function(t, e) { var r = this.getFlatCoordinates(); if (r) { var n = this.getStride();
                    Dt(r, 0, r.length, n, t, e, r), this.changed() } }, e.prototype.scale = function(t, e, r) { var n = e;
                void 0 === n && (n = t); var i = r;
                i || (i = St(this.getExtent())); var o = this.getFlatCoordinates(); if (o) { var a = this.getStride();! function(t, e, r, n, i, o, a, s) { for (var u = s || [], l = a[0], h = a[1], c = 0, p = e; p < r; p += n) { var f = t[p] - l,
                                d = t[p + 1] - h;
                            u[c++] = l + i * f, u[c++] = h + o * d; for (var _ = p + 2; _ < p + n; ++_) u[c++] = t[_] }
                        s && u.length != c && (u.length = c) }(o, 0, o.length, a, t, n, i, o), this.changed() } }, e.prototype.translate = function(t, e) { var r = this.getFlatCoordinates(); if (r) { var n = this.getStride();
                    jt(r, 0, r.length, n, t, e, r), this.changed() } }, e }(er);

        function or(t, e, r, n) { for (var i = 0, o = t[r - n], a = t[r - n + 1]; e < r; e += n) { var s = t[e],
                    u = t[e + 1];
                i += a * s - o * u, o = s, a = u } return i / 2 }

        function ar(t, e, r, n) { for (var i = 0, o = 0, a = r.length; o < a; ++o) { var s = r[o];
                i += or(t, e, s, n), e = s } return i }

        function sr(t, e, r, n, i, o, a) { var s, u = t[e],
                l = t[e + 1],
                h = t[r] - u,
                c = t[r + 1] - l; if (0 === h && 0 === c) s = e;
            else { var p = ((i - u) * h + (o - l) * c) / (h * h + c * c); if (p > 1) s = r;
                else { if (p > 0) { for (var f = 0; f < n; ++f) a[f] = Wt(t[e + f], t[r + f], p); return void(a.length = n) }
                    s = e } } for (f = 0; f < n; ++f) a[f] = t[s + f];
            a.length = n }

        function ur(t, e, r, n, i) { var o = t[e],
                a = t[e + 1]; for (e += n; e < r; e += n) { var s = t[e],
                    u = t[e + 1],
                    l = Yt(o, a, s, u);
                l > i && (i = l), o = s, a = u } return i }

        function lr(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { var s = r[o];
                i = ur(t, e, s, n, i), e = s } return i }

        function hr(t, e, r, n, i, o, a, s, u, l, h) { if (e == r) return l; var c, p; if (0 === i) { if ((p = Yt(a, s, t[e], t[e + 1])) < l) { for (c = 0; c < n; ++c) u[c] = t[e + c]; return u.length = n, p } return l } for (var f = h || [NaN, NaN], d = e + n; d < r;)
                if (sr(t, d - n, d, n, a, s, f), (p = Yt(a, s, f[0], f[1])) < l) { for (l = p, c = 0; c < n; ++c) u[c] = f[c];
                    u.length = n, d += n } else d += n * Math.max((Math.sqrt(p) - Math.sqrt(l)) / i | 0, 1);
            if (o && (sr(t, r - n, e, n, a, s, f), (p = Yt(a, s, f[0], f[1])) < l)) { for (l = p, c = 0; c < n; ++c) u[c] = f[c];
                u.length = n } return l }

        function cr(t, e, r, n, i, o, a, s, u, l, h) { for (var c = h || [NaN, NaN], p = 0, f = r.length; p < f; ++p) { var d = r[p];
                l = hr(t, e, d, n, i, o, a, s, u, l, c), e = d } return l }

        function pr(t, e, r, n) { for (var i = 0, o = r.length; i < o; ++i) t[e++] = r[i]; return e }

        function fr(t, e, r, n) { for (var i = 0, o = r.length; i < o; ++i)
                for (var a = r[i], s = 0; s < n; ++s) t[e++] = a[s]; return e }

        function dr(t, e, r, n, i) { for (var o = i || [], a = 0, s = 0, u = r.length; s < u; ++s) { var l = fr(t, e, r[s], n);
                o[a++] = l, e = l } return o.length = a, o }

        function _r(t, e, r, n, i) { for (var o = void 0 !== i ? i : [], a = 0, s = e; s < r; s += n) o[a++] = t.slice(s, s + n); return o.length = a, o }

        function gr(t, e, r, n, i) { for (var o = void 0 !== i ? i : [], a = 0, s = 0, u = r.length; s < u; ++s) { var l = r[s];
                o[a++] = _r(t, e, l, n, o[a]), e = l } return o.length = a, o }

        function yr(t, e, r, n, i) { for (var o = void 0 !== i ? i : [], a = 0, s = 0, u = r.length; s < u; ++s) { var l = r[s];
                o[a++] = gr(t, e, l, n, o[a]), e = l[l.length - 1] } return o.length = a, o }

        function vr(t, e, r, n, i, o, a) { var s = (r - e) / n; if (s < 3) { for (; e < r; e += n) o[a++] = t[e], o[a++] = t[e + 1]; return a } var u = new Array(s);
            u[0] = 1, u[s - 1] = 1; for (var l = [e, r - n], h = 0; l.length > 0;) { for (var c = l.pop(), p = l.pop(), f = 0, d = t[p], _ = t[p + 1], g = t[c], y = t[c + 1], v = p + n; v < c; v += n) { var m = Bt(t[v], t[v + 1], d, _, g, y);
                    m > f && (h = v, f = m) }
                f > i && (u[(h - e) / n] = 1, p + n < h && l.push(p, h), h + n < c && l.push(h, c)) } for (v = 0; v < s; ++v) u[v] && (o[a++] = t[e + v * n], o[a++] = t[e + v * n + 1]); return a }

        function mr(t, e, r, n, i, o, a, s) { for (var u = 0, l = r.length; u < l; ++u) { var h = r[u];
                a = vr(t, e, h, n, i, o, a), s.push(a), e = h } return a }

        function Er(t, e) { return e * Math.round(t / e) }

        function Tr(t, e, r, n, i, o, a) { if (e == r) return a; var s, u, l = Er(t[e], i),
                h = Er(t[e + 1], i);
            e += n, o[a++] = l, o[a++] = h;
            do { if (s = Er(t[e], i), u = Er(t[e + 1], i), (e += n) == r) return o[a++] = s, o[a++] = u, a } while (s == l && u == h); for (; e < r;) { var c = Er(t[e], i),
                    p = Er(t[e + 1], i); if (e += n, c != s || p != u) { var f = s - l,
                        d = u - h,
                        _ = c - l,
                        g = p - h;
                    f * g == d * _ && (f < 0 && _ < f || f == _ || f > 0 && _ > f) && (d < 0 && g < d || d == g || d > 0 && g > d) ? (s = c, u = p) : (o[a++] = s, o[a++] = u, l = s, h = u, s = c, u = p) } } return o[a++] = s, o[a++] = u, a }

        function Sr(t, e, r, n, i, o, a, s) { for (var u = 0, l = r.length; u < l; ++u) { var h = r[u];
                a = Tr(t, e, h, n, i, o, a), s.push(a), e = h } return a } var wr = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            xr = function(t) {
                function e(e, r) { var n = t.call(this) || this; return n.maxDelta_ = -1, n.maxDeltaRevision_ = -1, void 0 === r || Array.isArray(e[0]) ? n.setCoordinates(e, r) : n.setFlatCoordinates(r, e), n } return wr(e, t), e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout) }, e.prototype.closestPointXY = function(t, e, r, n) { return n < rt(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(ur(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), hr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, r, n)) }, e.prototype.getArea = function() { return or(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride) }, e.prototype.getCoordinates = function() { return _r(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride) }, e.prototype.getSimplifiedGeometryInternal = function(t) { var r = []; return r.length = vr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, r, 0), new e(r, At.XY) }, e.prototype.getType = function() { return Nt.LINEAR_RING }, e.prototype.intersectsExtent = function(t) { return !1 }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = fr(this.flatCoordinates, 0, t, this.stride), this.changed() }, e }(ir),
            Or = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Rr = function(t) {
                function e(e, r) { var n = t.call(this) || this; return n.setCoordinates(e, r), n } return Or(e, t), e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout) }, e.prototype.closestPointXY = function(t, e, r, n) { var i = this.flatCoordinates,
                        o = Yt(t, e, i[0], i[1]); if (o < n) { for (var a = this.stride, s = 0; s < a; ++s) r[s] = i[s]; return r.length = a, o } return n }, e.prototype.getCoordinates = function() { return this.flatCoordinates ? this.flatCoordinates.slice() : [] }, e.prototype.computeExtent = function(t) { return ht(this.flatCoordinates, t) }, e.prototype.getType = function() { return Nt.POINT }, e.prototype.intersectsExtent = function(t) { return ot(t, this.flatCoordinates[0], this.flatCoordinates[1]) }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = pr(this.flatCoordinates, 0, t, this.stride), this.changed() }, e }(ir);

        function Cr(t, e, r, n, i) { return !vt(i, function(i) { return !Pr(t, e, r, n, i[0], i[1]) }) }

        function Pr(t, e, r, n, i, o) { for (var a = 0, s = t[r - n], u = t[r - n + 1]; e < r; e += n) { var l = t[e],
                    h = t[e + 1];
                u <= o ? h > o && (l - s) * (o - u) - (i - s) * (h - u) > 0 && a++ : h <= o && (l - s) * (o - u) - (i - s) * (h - u) < 0 && a--, s = l, u = h } return 0 !== a }

        function Ir(t, e, r, n, i, o) { if (0 === r.length) return !1; if (!Pr(t, e, r[0], n, i, o)) return !1; for (var a = 1, s = r.length; a < s; ++a)
                if (Pr(t, r[a - 1], r[a], n, i, o)) return !1;
            return !0 }

        function br(t, e, r, n, i, o, a) { for (var s, u, l, h, c, p, f, d = i[o + 1], _ = [], g = 0, y = r.length; g < y; ++g) { var v = r[g]; for (h = t[v - n], p = t[v - n + 1], s = e; s < v; s += n) c = t[s], f = t[s + 1], (d <= p && f <= d || p <= d && d <= f) && (l = (d - p) / (f - p) * (c - h) + h, _.push(l)), h = c, p = f } var m = NaN,
                T = -1 / 0; for (_.sort(E), h = _[0], s = 1, u = _.length; s < u; ++s) { c = _[s]; var S = Math.abs(c - h);
                S > T && Ir(t, e, r, n, l = (h + c) / 2, d) && (m = l, T = S), h = c } return isNaN(m) && (m = i[o]), a ? (a.push(m, d, T), a) : [m, d, T] }

        function Lr(t, e, r, n, i) { for (var o = [], a = 0, s = r.length; a < s; ++a) { var u = r[a];
                o = br(t, e, u, n, i, 2 * a, o), e = u[u.length - 1] } return o }

        function Mr(t, e, r, n, i) { for (var o, a = [t[e], t[e + 1]], s = []; e + n < r; e += n) { if (s[0] = t[e + n], s[1] = t[e + n + 1], o = i(a, s)) return o;
                a[0] = s[0], a[1] = s[1] } return !1 }

        function Fr(t, e, r, n, i) { var o = gt([1 / 0, 1 / 0, -1 / 0, -1 / 0], t, e, r, n); return !!bt(i, o) && (!!it(i, o) || (o[0] >= i[0] && o[2] <= i[2] || (o[1] >= i[1] && o[3] <= i[3] || Mr(t, e, r, n, function(t, e) { return function(t, e, r) { var n = !1,
                        i = at(t, e),
                        o = at(t, r); if (i === Q.INTERSECTING || o === Q.INTERSECTING) n = !0;
                    else { var a = t[0],
                            s = t[1],
                            u = t[2],
                            l = t[3],
                            h = e[0],
                            c = e[1],
                            p = r[0],
                            f = r[1],
                            d = (f - c) / (p - h),
                            _ = void 0,
                            g = void 0;
                        o & Q.ABOVE && !(i & Q.ABOVE) && (n = (_ = p - (f - l) / d) >= a && _ <= u), n || !(o & Q.RIGHT) || i & Q.RIGHT || (n = (g = f - (p - u) * d) >= s && g <= l), n || !(o & Q.BELOW) || i & Q.BELOW || (n = (_ = p - (f - s) / d) >= a && _ <= u), n || !(o & Q.LEFT) || i & Q.LEFT || (n = (g = f - (p - a) * d) >= s && g <= l) } return n }(i, t, e) })))) }

        function Ar(t, e, r, n, i) { if (! function(t, e, r, n, i) { return !!Fr(t, e, r, n, i) || (!!Pr(t, e, r, n, i[0], i[1]) || (!!Pr(t, e, r, n, i[0], i[3]) || (!!Pr(t, e, r, n, i[2], i[1]) || !!Pr(t, e, r, n, i[2], i[3])))) }(t, e, r[0], n, i)) return !1; if (1 === r.length) return !0; for (var o = 1, a = r.length; o < a; ++o)
                if (Cr(t, r[o - 1], r[o], n, i) && !Fr(t, r[o - 1], r[o], n, i)) return !1;
            return !0 }

        function Nr(t, e, r, n) { for (; e < r - n;) { for (var i = 0; i < n; ++i) { var o = t[e + i];
                    t[e + i] = t[r - n + i], t[r - n + i] = o }
                e += n, r -= n } }

        function Gr(t, e, r, n) { for (var i = 0, o = t[r - n], a = t[r - n + 1]; e < r; e += n) { var s = t[e],
                    u = t[e + 1];
                i += (s - o) * (u + a), o = s, a = u } return i > 0 }

        function Dr(t, e, r, n, i) { for (var o = void 0 !== i && i, a = 0, s = r.length; a < s; ++a) { var u = r[a],
                    l = Gr(t, e, u, n); if (0 === a) { if (o && l || !o && !l) return !1 } else if (o && !l || !o && l) return !1;
                e = u } return !0 }

        function jr(t, e, r, n, i) { for (var o = void 0 !== i && i, a = 0, s = r.length; a < s; ++a) { var u = r[a],
                    l = Gr(t, e, u, n);
                (0 === a ? o && l || !o && !l : o && !l || !o && l) && Nr(t, e, u, n), e = u } return e }

        function kr(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) e = jr(t, e, r[o], n, i); return e } var Ur = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Br = function(t) {
                function e(e, r, n) { var i = t.call(this) || this; return i.ends_ = [], i.flatInteriorPointRevision_ = -1, i.flatInteriorPoint_ = null, i.maxDelta_ = -1, i.maxDeltaRevision_ = -1, i.orientedRevision_ = -1, i.orientedFlatCoordinates_ = null, void 0 !== r && n ? (i.setFlatCoordinates(r, e), i.ends_ = n) : i.setCoordinates(e, r), i } return Ur(e, t), e.prototype.appendLinearRing = function(t) { this.flatCoordinates ? x(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed() }, e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout, this.ends_.slice()) }, e.prototype.closestPointXY = function(t, e, r, n) { return n < rt(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(lr(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), cr(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, r, n)) }, e.prototype.containsXY = function(t, e) { return Ir(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e) }, e.prototype.getArea = function() { return ar(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride) }, e.prototype.getCoordinates = function(t) { var e; return void 0 !== t ? jr(e = this.getOrientedFlatCoordinates().slice(), 0, this.ends_, this.stride, t) : e = this.flatCoordinates, gr(e, 0, this.ends_, this.stride) }, e.prototype.getEnds = function() { return this.ends_ }, e.prototype.getFlatInteriorPoint = function() { if (this.flatInteriorPointRevision_ != this.getRevision()) { var t = St(this.getExtent());
                        this.flatInteriorPoint_ = br(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0), this.flatInteriorPointRevision_ = this.getRevision() } return this.flatInteriorPoint_ }, e.prototype.getInteriorPoint = function() { return new Rr(this.getFlatInteriorPoint(), At.XYM) }, e.prototype.getLinearRingCount = function() { return this.ends_.length }, e.prototype.getLinearRing = function(t) { return t < 0 || this.ends_.length <= t ? null : new xr(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout) }, e.prototype.getLinearRings = function() { for (var t = this.layout, e = this.flatCoordinates, r = this.ends_, n = [], i = 0, o = 0, a = r.length; o < a; ++o) { var s = r[o],
                            u = new xr(e.slice(i, s), t);
                        n.push(u), i = s } return n }, e.prototype.getOrientedFlatCoordinates = function() { if (this.orientedRevision_ != this.getRevision()) { var t = this.flatCoordinates;
                        Dr(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = jr(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision() } return this.orientedFlatCoordinates_ }, e.prototype.getSimplifiedGeometryInternal = function(t) { var r = [],
                        n = []; return r.length = Sr(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), r, 0, n), new e(r, At.XY, n) }, e.prototype.getType = function() { return Nt.POLYGON }, e.prototype.intersectsExtent = function(t) { return Ar(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t) }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []); var r = dr(this.flatCoordinates, 0, t, this.stride, this.ends_);
                    this.flatCoordinates.length = 0 === r.length ? 0 : r[r.length - 1], this.changed() }, e }(ir),
            Yr = Br;

        function zr(t, e, r, n) { for (var i = r || 32, o = [], a = 0; a < i; ++a) x(o, Jt(t, e, 2 * Math.PI * a / i, n)); return o.push(o[0], o[1]), new Br(o, At.XY, [o.length]) }

        function Xr(t) { var e = t[0],
                r = t[1],
                n = t[2],
                i = t[3],
                o = [e, r, e, i, n, i, n, r, e, r]; return new Br(o, At.XY, [o.length]) }

        function Vr(t, e, r) { for (var n = e || 32, i = t.getStride(), o = t.getLayout(), a = t.getCenter(), s = i * (n + 1), u = new Array(s), l = 0; l < s; l += i) { u[l] = 0, u[l + 1] = 0; for (var h = 2; h < i; h++) u[l + h] = a[h] } var c = [u.length],
                p = new Br(u, o, c); return Wr(p, a, t.getRadius(), r), p }

        function Wr(t, e, r, n) { for (var i = t.getFlatCoordinates(), o = t.getStride(), a = i.length / o - 1, s = n || 0, u = 0; u <= a; ++u) { var l = u * o,
                    h = s + 2 * Vt(u, a) * Math.PI / a;
                i[l] = e[0] + r * Math.cos(h), i[l + 1] = e[1] + r * Math.sin(h) }
            t.changed() } var Zr = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Kr = { ACCURACY: "accuracy", ACCURACY_GEOMETRY: "accuracyGeometry", ALTITUDE: "altitude", ALTITUDE_ACCURACY: "altitudeAccuracy", HEADING: "heading", POSITION: "position", PROJECTION: "projection", SPEED: "speed", TRACKING: "tracking", TRACKING_OPTIONS: "trackingOptions" },
            Hr = function(t) {
                function e(e) { var r = t.call(this, N.ERROR) || this; return r.code = e.code, r.message = e.message, r } return Zr(e, t), e }(M),
            qr = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.position_ = null, r.transform_ = Te, r.watchId_ = void 0, r.addEventListener(Y(Kr.PROJECTION), r.handleProjectionChanged_), r.addEventListener(Y(Kr.TRACKING), r.handleTrackingChanged_), void 0 !== n.projection && r.setProjection(n.projection), void 0 !== n.trackingOptions && r.setTrackingOptions(n.trackingOptions), r.setTracking(void 0 !== n.tracking && n.tracking), r } return Zr(e, t), e.prototype.disposeInternal = function() { this.setTracking(!1), t.prototype.disposeInternal.call(this) }, e.prototype.handleProjectionChanged_ = function() { var t = this.getProjection();
                    t && (this.transform_ = be(we("EPSG:4326"), t), this.position_ && this.set(Kr.POSITION, this.transform_(this.position_))) }, e.prototype.handleTrackingChanged_ = function() { if ("geolocation" in navigator) { var t = this.getTracking();
                        t && void 0 === this.watchId_ ? this.watchId_ = navigator.geolocation.watchPosition(this.positionChange_.bind(this), this.positionError_.bind(this), this.getTrackingOptions()) : t || void 0 === this.watchId_ || (navigator.geolocation.clearWatch(this.watchId_), this.watchId_ = void 0) } }, e.prototype.positionChange_ = function(t) { var e = t.coords;
                    this.set(Kr.ACCURACY, e.accuracy), this.set(Kr.ALTITUDE, null === e.altitude ? void 0 : e.altitude), this.set(Kr.ALTITUDE_ACCURACY, null === e.altitudeAccuracy ? void 0 : e.altitudeAccuracy), this.set(Kr.HEADING, null === e.heading ? void 0 : Xt(e.heading)), this.position_ ? (this.position_[0] = e.longitude, this.position_[1] = e.latitude) : this.position_ = [e.longitude, e.latitude]; var r = this.transform_(this.position_);
                    this.set(Kr.POSITION, r), this.set(Kr.SPEED, null === e.speed ? void 0 : e.speed); var n = zr(this.position_, e.accuracy);
                    n.applyTransform(this.transform_), this.set(Kr.ACCURACY_GEOMETRY, n), this.changed() }, e.prototype.positionError_ = function(t) { this.setTracking(!1), this.dispatchEvent(new Hr(t)) }, e.prototype.getAccuracy = function() { return this.get(Kr.ACCURACY) }, e.prototype.getAccuracyGeometry = function() { return this.get(Kr.ACCURACY_GEOMETRY) || null }, e.prototype.getAltitude = function() { return this.get(Kr.ALTITUDE) }, e.prototype.getAltitudeAccuracy = function() { return this.get(Kr.ALTITUDE_ACCURACY) }, e.prototype.getHeading = function() { return this.get(Kr.HEADING) }, e.prototype.getPosition = function() { return this.get(Kr.POSITION) }, e.prototype.getProjection = function() { return this.get(Kr.PROJECTION) }, e.prototype.getSpeed = function() { return this.get(Kr.SPEED) }, e.prototype.getTracking = function() { return this.get(Kr.TRACKING) }, e.prototype.getTrackingOptions = function() { return this.get(Kr.TRACKING_OPTIONS) }, e.prototype.setProjection = function(t) { this.set(Kr.PROJECTION, we(t)) }, e.prototype.setTracking = function(t) { this.set(Kr.TRACKING, t) }, e.prototype.setTrackingOptions = function(t) { this.set(Kr.TRACKING_OPTIONS, t) }, e }(z),
            Jr = function() {
                function t(t, e, r) { this.decay_ = t, this.minVelocity_ = e, this.delay_ = r, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0 } return t.prototype.begin = function() { this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0 }, t.prototype.update = function(t, e) { this.points_.push(t, e, Date.now()) }, t.prototype.end = function() { if (this.points_.length < 6) return !1; var t = Date.now() - this.delay_,
                        e = this.points_.length - 3; if (this.points_[e + 2] < t) return !1; for (var r = e - 3; r > 0 && this.points_[r + 2] > t;) r -= 3; var n = this.points_[e + 2] - this.points_[r + 2]; if (n < 1e3 / 60) return !1; var i = this.points_[e] - this.points_[r],
                        o = this.points_[e + 1] - this.points_[r + 1]; return this.angle_ = Math.atan2(o, i), this.initialVelocity_ = Math.sqrt(i * i + o * o) / n, this.initialVelocity_ > this.minVelocity_ }, t.prototype.getDistance = function() { return (this.minVelocity_ - this.initialVelocity_) / this.decay_ }, t.prototype.getAngle = function() { return this.angle_ }, t }(),
            Qr = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            $r = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.map = r, i.frameState = void 0 !== n ? n : null, i } return Qr(e, t), e }(M),
            tn = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            en = function(t) {
                function e(e, r, n, i, o) { var a = t.call(this, e, r, o) || this; return a.originalEvent = n, a.pixel_ = null, a.coordinate_ = null, a.dragging = void 0 !== i && i, a } return tn(e, t), Object.defineProperty(e.prototype, "pixel", { get: function() { return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_ }, set: function(t) { this.pixel_ = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "coordinate", { get: function() { return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_ }, set: function(t) { this.coordinate_ = t }, enumerable: !0, configurable: !0 }), e.prototype.preventDefault = function() { t.prototype.preventDefault.call(this), this.originalEvent.preventDefault() }, e.prototype.stopPropagation = function() { t.prototype.stopPropagation.call(this), this.originalEvent.stopPropagation() }, e }($r),
            rn = (r(1), "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : ""),
            nn = -1 !== rn.indexOf("firefox"),
            on = (-1 !== rn.indexOf("safari") && rn.indexOf("chrom"), -1 !== rn.indexOf("webkit") && -1 == rn.indexOf("edge")),
            an = -1 !== rn.indexOf("macintosh"),
            sn = window.devicePixelRatio || 1,
            un = "undefined" != typeof Image && Image.prototype.decode,
            ln = { SINGLECLICK: "singleclick", CLICK: N.CLICK, DBLCLICK: N.DBLCLICK, POINTERDRAG: "pointerdrag", POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown", POINTERUP: "pointerup", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERCANCEL: "pointercancel" },
            hn = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            cn = function(t) {
                function e(e, r, n, i, o) { var a = t.call(this, e, r, n, i, o) || this; return a.pointerEvent = n, a } return hn(e, t), e }(en),
            pn = { POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown", POINTERUP: "pointerup", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERCANCEL: "pointercancel" },
            fn = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            dn = function(t) {
                function e(e, r) { var n = t.call(this, e) || this;
                    n.map_ = e, n.clickTimeoutId_, n.dragging_ = !1, n.dragListenerKeys_ = [], n.moveTolerance_ = r ? r * sn : sn, n.down_ = null; var i = n.map_.getViewport(); return i.setAttribute("touch-action", "none"), n.activePointers_ = 0, n.trackedTouches_ = {}, n.element_ = i, n.pointerdownListenerKey_ = g(i, pn.POINTERDOWN, n.handlePointerDown_, n), n.relayedListenerKey_ = g(i, pn.POINTERMOVE, n.relayEvent_, n), n } return fn(e, t), e.prototype.emulateClick_ = function(t) { var e = new cn(ln.CLICK, this.map_, t);
                    this.dispatchEvent(e), void 0 !== this.clickTimeoutId_ ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new cn(ln.DBLCLICK, this.map_, t), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(function() { this.clickTimeoutId_ = void 0; var e = new cn(ln.SINGLECLICK, this.map_, t);
                        this.dispatchEvent(e) }.bind(this), 250) }, e.prototype.updateActivePointers_ = function(t) { var e = t;
                    e.type == ln.POINTERUP || e.type == ln.POINTERCANCEL ? delete this.trackedTouches_[e.pointerId] : e.type == ln.POINTERDOWN && (this.trackedTouches_[e.pointerId] = !0), this.activePointers_ = Object.keys(this.trackedTouches_).length }, e.prototype.handlePointerUp_ = function(t) { this.updateActivePointers_(t); var e = new cn(ln.POINTERUP, this.map_, t);
                    this.dispatchEvent(e), e.propagationStopped || this.dragging_ || !this.isMouseActionButton_(t) || this.emulateClick_(this.down_), 0 === this.activePointers_ && (this.dragListenerKeys_.forEach(v), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null) }, e.prototype.isMouseActionButton_ = function(t) { return 0 === t.button }, e.prototype.handlePointerDown_ = function(t) { this.updateActivePointers_(t); var e = new cn(ln.POINTERDOWN, this.map_, t);
                    this.dispatchEvent(e), this.down_ = t, 0 === this.dragListenerKeys_.length && this.dragListenerKeys_.push(g(document, ln.POINTERMOVE, this.handlePointerMove_, this), g(document, ln.POINTERUP, this.handlePointerUp_, this), g(this.element_, ln.POINTERCANCEL, this.handlePointerUp_, this)) }, e.prototype.handlePointerMove_ = function(t) { if (this.isMoving_(t)) { this.dragging_ = !0; var e = new cn(ln.POINTERDRAG, this.map_, t, this.dragging_);
                        this.dispatchEvent(e) } }, e.prototype.relayEvent_ = function(t) { var e = !(!this.down_ || !this.isMoving_(t));
                    this.dispatchEvent(new cn(t.type, this.map_, t, e)) }, e.prototype.isMoving_ = function(t) { return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_ }, e.prototype.disposeInternal = function() { this.relayedListenerKey_ && (v(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.pointerdownListenerKey_ && (v(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(v), this.dragListenerKeys_.length = 0, this.element_ = null, t.prototype.disposeInternal.call(this) }, e }(A),
            _n = "postrender",
            gn = "movestart",
            yn = "moveend",
            vn = { LAYERGROUP: "layergroup", SIZE: "size", TARGET: "target", VIEW: "view" },
            mn = "prerender",
            En = "postrender",
            Tn = "precompose",
            Sn = "postcompose",
            wn = "rendercomplete",
            xn = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4, ABORT: 5 },
            On = function() {
                function t(t, e) { this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {} } return t.prototype.clear = function() { this.elements_.length = 0, this.priorities_.length = 0, f(this.queuedElements_) }, t.prototype.dequeue = function() { var t = this.elements_,
                        e = this.priorities_,
                        r = t[0];
                    1 == t.length ? (t.length = 0, e.length = 0) : (t[0] = t.pop(), e[0] = e.pop(), this.siftUp_(0)); var n = this.keyFunction_(r); return delete this.queuedElements_[n], r }, t.prototype.enqueue = function(t) { K(!(this.keyFunction_(t) in this.queuedElements_), 31); var e = this.priorityFunction_(t); return e != 1 / 0 && (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) }, t.prototype.getCount = function() { return this.elements_.length }, t.prototype.getLeftChildIndex_ = function(t) { return 2 * t + 1 }, t.prototype.getRightChildIndex_ = function(t) { return 2 * t + 2 }, t.prototype.getParentIndex_ = function(t) { return t - 1 >> 1 }, t.prototype.heapify_ = function() { var t; for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t) }, t.prototype.isEmpty = function() { return 0 === this.elements_.length }, t.prototype.isKeyQueued = function(t) { return t in this.queuedElements_ }, t.prototype.isQueued = function(t) { return this.isKeyQueued(this.keyFunction_(t)) }, t.prototype.siftUp_ = function(t) { for (var e = this.elements_, r = this.priorities_, n = e.length, i = e[t], o = r[t], a = t; t < n >> 1;) { var s = this.getLeftChildIndex_(t),
                            u = this.getRightChildIndex_(t),
                            l = u < n && r[u] < r[s] ? u : s;
                        e[t] = e[l], r[t] = r[l], t = l }
                    e[t] = i, r[t] = o, this.siftDown_(a, t) }, t.prototype.siftDown_ = function(t, e) { for (var r = this.elements_, n = this.priorities_, i = r[e], o = n[e]; e > t;) { var a = this.getParentIndex_(e); if (!(n[a] > o)) break;
                        r[e] = r[a], n[e] = n[a], e = a }
                    r[e] = i, n[e] = o }, t.prototype.reprioritize = function() { var t, e, r, n = this.priorityFunction_,
                        i = this.elements_,
                        o = this.priorities_,
                        a = 0,
                        s = i.length; for (e = 0; e < s; ++e)(r = n(t = i[e])) == 1 / 0 ? delete this.queuedElements_[this.keyFunction_(t)] : (o[a] = r, i[a++] = t);
                    i.length = a, o.length = a, this.heapify_() }, t }(),
            Rn = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Cn = function(t) {
                function e(e, r) { var n = t.call(this, function(t) { return e.apply(null, t) }, function(t) { return t[0].getKey() }) || this; return n.boundHandleTileChange_ = n.handleTileChange.bind(n), n.tileChangeCallback_ = r, n.tilesLoading_ = 0, n.tilesLoadingKeys_ = {}, n } return Rn(e, t), e.prototype.enqueue = function(e) { var r = t.prototype.enqueue.call(this, e);
                    r && e[0].addEventListener(N.CHANGE, this.boundHandleTileChange_); return r }, e.prototype.getTilesLoading = function() { return this.tilesLoading_ }, e.prototype.handleTileChange = function(t) { var e = t.target,
                        r = e.getState(); if (e.hifi && r === xn.LOADED || r === xn.ERROR || r === xn.EMPTY || r === xn.ABORT) { e.removeEventListener(N.CHANGE, this.boundHandleTileChange_); var n = e.getKey();
                        n in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[n], --this.tilesLoading_), this.tileChangeCallback_() } }, e.prototype.loadMoreTiles = function(t, e) { for (var r, n, i, o = 0, a = !1; this.tilesLoading_ < t && o < e && this.getCount() > 0;) i = (n = this.dequeue()[0]).getKey(), (r = n.getState()) === xn.ABORT ? a = !0 : r !== xn.IDLE || i in this.tilesLoadingKeys_ || (n.load(), n.getState() === xn.LOADING && (this.tilesLoadingKeys_[i] = !0, ++this.tilesLoading_, ++o));
                    0 === o && a && this.tileChangeCallback_() }, e }(On),
            Pn = 42,
            In = 256;

        function bn(t, e, r) { return function(n, i, o, a) { if (n) { var s = e ? 0 : o[0] * i,
                        u = e ? 0 : o[1] * i,
                        l = t[0] + s / 2,
                        h = t[2] - s / 2,
                        c = t[1] + u / 2,
                        p = t[3] - u / 2;
                    l > h && (l = h = (h + l) / 2), c > p && (c = p = (p + c) / 2); var f = kt(n[0], l, h),
                        d = kt(n[1], c, p),
                        _ = 30 * i; return a && r && (f += -_ * Math.log(1 + Math.max(0, l - n[0]) / _) + _ * Math.log(1 + Math.max(0, n[0] - h) / _), d += -_ * Math.log(1 + Math.max(0, c - n[1]) / _) + _ * Math.log(1 + Math.max(0, n[1] - p) / _)), [f, d] } } }

        function Ln(t) { return t }

        function Mn(t, e, r) { var n = It(e) / r[0],
                i = Ot(e) / r[1]; return Math.min(t, Math.min(n, i)) }

        function Fn(t, e, r) { var n = Math.min(t, e); return n *= Math.log(1 + 50 * Math.max(0, t / e - 1)) / 50 + 1, r && (n = Math.max(n, r), n /= Math.log(1 + 50 * Math.max(0, r / t - 1)) / 50 + 1), kt(n, r / 2, 2 * e) }

        function An(t, e, r, n) { return function(i, o, a, s) { if (void 0 !== i) { var u = n ? Mn(t, n, a) : t; return (void 0 === r || r) && s ? Fn(i, u, e) : kt(i, e, u) } } }

        function Nn(t) { return void 0 !== t ? 0 : void 0 }

        function Gn(t) { return void 0 !== t ? t : void 0 } var Dn = 0,
            jn = 1,
            kn = "center",
            Un = "resolution",
            Bn = "rotation";

        function Yn(t, e, r) { var n = void 0 !== r ? t.toFixed(r) : "" + t,
                i = n.indexOf("."); return (i = -1 === i ? n.length : i) > e ? n : new Array(1 + e - i).join("0") + n }

        function zn(t, e) { for (var r = ("" + t).split("."), n = ("" + e).split("."), i = 0; i < Math.max(r.length, n.length); i++) { var o = parseInt(r[i] || "0", 10),
                    a = parseInt(n[i] || "0", 10); if (o > a) return 1; if (a > o) return -1 } return 0 }

        function Xn(t, e) { return t[0] += +e[0], t[1] += +e[1], t }

        function Vn(t, e) { var r, n, i = t[0],
                o = t[1],
                a = e[0],
                s = e[1],
                u = a[0],
                l = a[1],
                h = s[0],
                c = s[1],
                p = h - u,
                f = c - l,
                d = 0 === p && 0 === f ? 0 : (p * (i - u) + f * (o - l)) / (p * p + f * f || 0); return d <= 0 ? (r = u, n = l) : d >= 1 ? (r = h, n = c) : (r = u + d * p, n = l + d * f), [r, n] }

        function Wn(t, e, r) { var n = Vt(e + 180, 360) - 180,
                i = Math.abs(3600 * n),
                o = r || 0,
                a = Math.pow(10, o),
                s = Math.floor(i / 3600),
                u = Math.floor((i - 3600 * s) / 60),
                l = i - 3600 * s - 60 * u; return (l = Math.ceil(l * a) / a) >= 60 && (l = 0, u += 1), u >= 60 && (u = 0, s += 1), s + "° " + Yn(u, 2) + "′ " + Yn(l, 2, o) + "″" + (0 == n ? "" : " " + t.charAt(n < 0 ? 1 : 0)) }

        function Zn(t, e, r) { return t ? e.replace("{x}", t[0].toFixed(r)).replace("{y}", t[1].toFixed(r)) : "" }

        function Kn(t, e) { for (var r = !0, n = t.length - 1; n >= 0; --n)
                if (t[n] != e[n]) { r = !1; break }
            return r }

        function Hn(t, e) { var r = Math.cos(e),
                n = Math.sin(e),
                i = t[0] * r - t[1] * n,
                o = t[1] * r + t[0] * n; return t[0] = i, t[1] = o, t }

        function qn(t, e) { return t[0] *= e, t[1] *= e, t }

        function Jn(t, e) { var r = t[0] - e[0],
                n = t[1] - e[1]; return r * r + n * n }

        function Qn(t, e) { return Math.sqrt(Jn(t, e)) }

        function $n(t, e) { return Jn(t, Vn(t, e)) }

        function ti(t, e) { return Zn(t, "{x}, {y}", e) }

        function ei(t) { return Math.pow(t, 3) }

        function ri(t) { return 1 - ei(1 - t) }

        function ni(t) { return 3 * t * t - 2 * t * t * t }

        function ii(t) { return t } var oi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ai = 0;

        function si(t, e) { setTimeout(function() { t(e) }, 0) }

        function ui(t) { return !(t.sourceCenter && t.targetCenter && !Kn(t.sourceCenter, t.targetCenter)) && (t.sourceResolution === t.targetResolution && t.sourceRotation === t.targetRotation) } var li = function(t) {
            function e(e) { var r = t.call(this) || this,
                    n = p({}, e); return r.hints_ = [0, 0], r.animations_ = [], r.updateAnimationKey_, r.projection_ = Re(n.projection, "EPSG:3857"), r.targetCenter_ = null, r.targetResolution_, r.targetRotation_, n.center && (n.center = Ue(n.center, r.projection_)), n.extent && (n.extent = Ye(n.extent, r.projection_)), r.applyOptions_(n), r } return oi(e, t), e.prototype.applyOptions_ = function(t) { var e = function(t) { var e, r, n, i = void 0 !== t.minZoom ? t.minZoom : ai,
                        o = void 0 !== t.maxZoom ? t.maxZoom : 28,
                        a = void 0 !== t.zoomFactor ? t.zoomFactor : 2,
                        s = void 0 !== t.multiWorld && t.multiWorld,
                        u = void 0 === t.smoothResolutionConstraint || t.smoothResolutionConstraint,
                        l = Re(t.projection, "EPSG:3857"),
                        h = l.getExtent(),
                        c = t.constrainOnlyCenter,
                        p = t.extent;
                    s || p || !l.isGlobal() || (c = !1, p = h); if (void 0 !== t.resolutions) { var f = t.resolutions;
                        r = f[i], n = void 0 !== f[o] ? f[o] : f[f.length - 1], e = t.constrainResolution ? function(t, e, r) { return function(n, i, o, a) { if (void 0 !== n) { var s = t[0],
                                        u = t[t.length - 1],
                                        l = r ? Mn(s, r, o) : s; if (a) return void 0 === e || e ? Fn(n, l, u) : kt(n, u, l); var h = Math.min(l, n),
                                        c = Math.floor(S(t, h, i)); return t[c] > l && c < t.length - 1 ? t[c + 1] : t[c] } } }(f, u, !c && p) : An(r, n, u, !c && p) } else { var d = (h ? Math.max(It(h), Ot(h)) : 360 * $t[te.DEGREES] / l.getMetersPerUnit()) / In / Math.pow(2, ai),
                            _ = d / Math.pow(2, 28 - ai);
                        void 0 !== (r = t.maxResolution) ? i = 0 : r = d / Math.pow(a, i), void 0 === (n = t.minResolution) && (n = void 0 !== t.maxZoom ? void 0 !== t.maxResolution ? r / Math.pow(a, o) : d / Math.pow(a, o) : _), o = i + Math.floor(Math.log(r / n) / Math.log(a)), n = r / Math.pow(a, o - i), e = t.constrainResolution ? function(t, e, r, n, i) { return function(o, a, s, u) { if (void 0 !== o) { var l = i ? Mn(e, i, s) : e,
                                        h = void 0 !== r ? r : 0; if (u) return void 0 === n || n ? Fn(o, l, h) : kt(o, h, l); var c = -a * (.5 - 1e-9) + .5,
                                        p = Math.min(l, o),
                                        f = Math.floor(Math.log(e / p) / Math.log(t) + c); return kt(e / Math.pow(t, f), h, l) } } }(a, r, n, u, !c && p) : An(r, n, u, !c && p) } return { constraint: e, maxResolution: r, minResolution: n, minZoom: i, zoomFactor: a } }(t);
                this.maxResolution_ = e.maxResolution, this.minResolution_ = e.minResolution, this.zoomFactor_ = e.zoomFactor, this.resolutions_ = t.resolutions, this.minZoom_ = e.minZoom; var r = function(t) { if (void 0 !== t.extent) { var e = void 0 === t.smoothExtentConstraint || t.smoothExtentConstraint; return bn(t.extent, t.constrainOnlyCenter, e) } var r = Re(t.projection, "EPSG:3857"); if (!0 !== t.multiWorld && r.isGlobal()) { var n = r.getExtent().slice(); return n[0] = -1 / 0, n[2] = 1 / 0, bn(n, !1, !1) } return Ln }(t),
                    n = e.constraint,
                    i = function(t) { if (void 0 === t.enableRotation || t.enableRotation) { var e = t.constrainRotation; return void 0 === e || !0 === e ? (o = i || Xt(5), function(t, e) { return e ? t : void 0 !== t ? Math.abs(t) <= o ? 0 : t : void 0 }) : !1 === e ? Gn : "number" == typeof e ? (r = e, n = 2 * Math.PI / r, function(t, e) { return e ? t : void 0 !== t ? t = Math.floor(t / n + .5) * n : void 0 }) : Gn } return Nn; var r, n; var i, o }(t);
                this.constraints_ = { center: r, resolution: n, rotation: i }, this.setRotation(void 0 !== t.rotation ? t.rotation : 0), this.setCenterInternal(void 0 !== t.center ? t.center : null), void 0 !== t.resolution ? this.setResolution(t.resolution) : void 0 !== t.zoom && this.setZoom(t.zoom), this.resolveConstraints(0), this.setProperties({}), this.options_ = t }, e.prototype.getUpdatedOptions_ = function(t) { var e = p({}, this.options_); return void 0 !== e.resolution ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), p({}, e, t) }, e.prototype.animate = function(t) { this.isDef() && !this.getAnimating() && this.resolveConstraints(0); for (var e = new Array(arguments.length), r = 0; r < e.length; ++r) { var n = arguments[r];
                    n.center && ((n = p({}, n)).center = Ue(n.center, this.getProjection())), n.anchor && ((n = p({}, n)).anchor = Ue(n.anchor, this.getProjection())), e[r] = n }
                this.animateInternal.apply(this, e) }, e.prototype.animateInternal = function(t) { var e, r = arguments.length; if (r > 1 && "function" == typeof arguments[r - 1] && (e = arguments[r - 1], --r), !this.isDef()) { var n = arguments[r - 1]; return n.center && this.setCenterInternal(n.center), void 0 !== n.zoom && this.setZoom(n.zoom), void 0 !== n.rotation && this.setRotation(n.rotation), void(e && si(e, !0)) } for (var i = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, s = this.targetRotation_, u = [], l = 0; l < r; ++l) { var h = arguments[l],
                        c = { start: i, complete: !1, anchor: h.anchor, duration: void 0 !== h.duration ? h.duration : 1e3, easing: h.easing || ni, callback: e }; if (h.center && (c.sourceCenter = o, c.targetCenter = h.center.slice(), o = c.targetCenter), void 0 !== h.zoom ? (c.sourceResolution = a, c.targetResolution = this.getResolutionForZoom(h.zoom), a = c.targetResolution) : h.resolution && (c.sourceResolution = a, c.targetResolution = h.resolution, a = c.targetResolution), void 0 !== h.rotation) { c.sourceRotation = s; var p = Vt(h.rotation - s + Math.PI, 2 * Math.PI) - Math.PI;
                        c.targetRotation = s + p, s = c.targetRotation }
                    ui(c) ? c.complete = !0 : i += c.duration, u.push(c) }
                this.animations_.push(u), this.setHint(Dn, 1), this.updateAnimations_() }, e.prototype.getAnimating = function() { return this.hints_[Dn] > 0 }, e.prototype.getInteracting = function() { return this.hints_[jn] > 0 }, e.prototype.cancelAnimations = function() { this.setHint(Dn, -this.hints_[Dn]); for (var t = 0, e = this.animations_.length; t < e; ++t) { var r = this.animations_[t];
                    r[0].callback && si(r[0].callback, !1) }
                this.animations_.length = 0 }, e.prototype.updateAnimations_ = function() { if (void 0 !== this.updateAnimationKey_ && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), this.getAnimating()) { for (var t = Date.now(), e = !1, r = this.animations_.length - 1; r >= 0; --r) { for (var n = this.animations_[r], i = !0, o = 0, a = n.length; o < a; ++o) { var s = n[o]; if (!s.complete) { var u = t - s.start,
                                    l = s.duration > 0 ? u / s.duration : 1;
                                l >= 1 ? (s.complete = !0, l = 1) : i = !1; var h = s.easing(l); if (s.sourceCenter) { var c = s.sourceCenter[0],
                                        p = s.sourceCenter[1],
                                        f = c + h * (s.targetCenter[0] - c),
                                        d = p + h * (s.targetCenter[1] - p);
                                    this.targetCenter_ = [f, d] } if (s.sourceResolution && s.targetResolution) { var _ = 1 === h ? s.targetResolution : s.sourceResolution + h * (s.targetResolution - s.sourceResolution); if (s.anchor) { var g = this.getSizeFromViewport_(this.getRotation()),
                                            y = this.constraints_.resolution(_, 0, g, !0);
                                        this.targetCenter_ = this.calculateCenterZoom(y, s.anchor) }
                                    this.targetResolution_ = _, this.applyTargetState_(!0) } if (void 0 !== s.sourceRotation && void 0 !== s.targetRotation) { var v = 1 === h ? Vt(s.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : s.sourceRotation + h * (s.targetRotation - s.sourceRotation); if (s.anchor) { var m = this.constraints_.rotation(v, !0);
                                        this.targetCenter_ = this.calculateCenterRotate(m, s.anchor) }
                                    this.targetRotation_ = v } if (this.applyTargetState_(!0), e = !0, !s.complete) break } } if (i) { this.animations_[r] = null, this.setHint(Dn, -1); var E = n[0].callback;
                            E && si(E, !0) } }
                    this.animations_ = this.animations_.filter(Boolean), e && void 0 === this.updateAnimationKey_ && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this))) } }, e.prototype.calculateCenterRotate = function(t, e) { var r, n = this.getCenterInternal(); return void 0 !== n && (Hn(r = [n[0] - e[0], n[1] - e[1]], t - this.getRotation()), Xn(r, e)), r }, e.prototype.calculateCenterZoom = function(t, e) { var r, n = this.getCenterInternal(),
                    i = this.getResolution();
                void 0 !== n && void 0 !== i && (r = [e[0] - t * (e[0] - n[0]) / i, e[1] - t * (e[1] - n[1]) / i]); return r }, e.prototype.getSizeFromViewport_ = function(t) { var e = [100, 100],
                    r = '.ol-viewport[data-view="' + o(this) + '"]',
                    n = document.querySelector(r); if (n) { var i = getComputedStyle(n);
                    e[0] = parseInt(i.width, 10), e[1] = parseInt(i.height, 10) } if (t) { var a = e[0],
                        s = e[1];
                    e[0] = Math.abs(a * Math.cos(t)) + Math.abs(s * Math.sin(t)), e[1] = Math.abs(a * Math.sin(t)) + Math.abs(s * Math.cos(t)) } return e }, e.prototype.getCenter = function() { var t = this.getCenterInternal(); return t ? ke(t, this.getProjection()) : t }, e.prototype.getCenterInternal = function() { return this.get(kn) }, e.prototype.getConstraints = function() { return this.constraints_ }, e.prototype.getHints = function(t) { return void 0 !== t ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice() }, e.prototype.calculateExtent = function(t) { return Be(this.calculateExtentInternal(t), this.getProjection()) }, e.prototype.calculateExtentInternal = function(t) { var e = t || this.getSizeFromViewport_(),
                    r = this.getCenterInternal();
                K(r, 1); var n = this.getResolution();
                K(void 0 !== n, 2); var i = this.getRotation(); return K(void 0 !== i, 3), xt(r, n, i, e) }, e.prototype.getMaxResolution = function() { return this.maxResolution_ }, e.prototype.getMinResolution = function() { return this.minResolution_ }, e.prototype.getMaxZoom = function() { return this.getZoomForResolution(this.minResolution_) }, e.prototype.setMaxZoom = function(t) { this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t })) }, e.prototype.getMinZoom = function() { return this.getZoomForResolution(this.maxResolution_) }, e.prototype.setMinZoom = function(t) { this.applyOptions_(this.getUpdatedOptions_({ minZoom: t })) }, e.prototype.setConstrainResolution = function(t) { this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t })) }, e.prototype.getProjection = function() { return this.projection_ }, e.prototype.getResolution = function() { return this.get(Un) }, e.prototype.getResolutions = function() { return this.resolutions_ }, e.prototype.getResolutionForExtent = function(t, e) { return this.getResolutionForExtentInternal(Ye(t, this.getProjection()), e) }, e.prototype.getResolutionForExtentInternal = function(t, e) { var r = e || this.getSizeFromViewport_(),
                    n = It(t) / r[0],
                    i = Ot(t) / r[1]; return Math.max(n, i) }, e.prototype.getResolutionForValueFunction = function(t) { var e = t || 2,
                    r = this.maxResolution_,
                    n = this.minResolution_,
                    i = Math.log(r / n) / Math.log(e); return function(t) { return r / Math.pow(e, t * i) } }, e.prototype.getRotation = function() { return this.get(Bn) }, e.prototype.getValueForResolutionFunction = function(t) { var e = t || 2,
                    r = this.maxResolution_,
                    n = this.minResolution_,
                    i = Math.log(r / n) / Math.log(e); return function(t) { return Math.log(r / t) / Math.log(e) / i } }, e.prototype.getState = function() { var t = this.getCenterInternal(),
                    e = this.getProjection(),
                    r = this.getResolution(),
                    n = this.getRotation(); return { center: t.slice(0), projection: void 0 !== e ? e : null, resolution: r, rotation: n, zoom: this.getZoom() } }, e.prototype.getZoom = function() { var t, e = this.getResolution(); return void 0 !== e && (t = this.getZoomForResolution(e)), t }, e.prototype.getZoomForResolution = function(t) { var e, r, n = this.minZoom_ || 0; if (this.resolutions_) { var i = S(this.resolutions_, t, 1);
                    n = i, e = this.resolutions_[i], r = i == this.resolutions_.length - 1 ? 2 : e / this.resolutions_[i + 1] } else e = this.maxResolution_, r = this.zoomFactor_; return n + Math.log(e / t) / Math.log(r) }, e.prototype.getResolutionForZoom = function(t) { if (this.resolutions_) { if (this.resolutions_.length <= 1) return 0; var e = kt(Math.floor(t), 0, this.resolutions_.length - 2),
                        r = this.resolutions_[e] / this.resolutions_[e + 1]; return this.resolutions_[e] / Math.pow(r, kt(t - e, 0, 1)) } return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_) }, e.prototype.fit = function(t, e) { var r, n = p({ size: this.getSizeFromViewport_() }, e || {}); if (K(Array.isArray(t) || "function" == typeof t.getSimplifiedGeometry, 24), Array.isArray(t)) K(!Lt(t), 25), r = Xr(i = Ye(t, this.getProjection()));
                else if (t.getType() === Nt.CIRCLE) { var i;
                    (r = Xr(i = Ye(t.getExtent(), this.getProjection()))).rotate(this.getRotation(), St(i)) } else { var o = je();
                    r = o ? r.clone().transform(o, this.getProjection()) : t }
                this.fitInternal(r, n) }, e.prototype.fitInternal = function(t, e) { var r = e || {},
                    n = r.size;
                n || (n = this.getSizeFromViewport_()); var i, o = void 0 !== r.padding ? r.padding : [0, 0, 0, 0],
                    a = void 0 !== r.nearest && r.nearest;
                i = void 0 !== r.minResolution ? r.minResolution : void 0 !== r.maxZoom ? this.getResolutionForZoom(r.maxZoom) : 0; for (var s = t.getFlatCoordinates(), u = this.getRotation(), l = Math.cos(-u), h = Math.sin(-u), c = 1 / 0, p = 1 / 0, f = -1 / 0, d = -1 / 0, _ = t.getStride(), g = 0, y = s.length; g < y; g += _) { var v = s[g] * l - s[g + 1] * h,
                        m = s[g] * h + s[g + 1] * l;
                    c = Math.min(c, v), p = Math.min(p, m), f = Math.max(f, v), d = Math.max(d, m) } var E = this.getResolutionForExtentInternal([c, p, f, d], [n[0] - o[1] - o[3], n[1] - o[0] - o[2]]);
                E = isNaN(E) ? i : Math.max(E, i), E = this.getConstrainedResolution(E, a ? 0 : 1), h = -h; var T = (c + f) / 2,
                    S = (p + d) / 2,
                    w = [(T += (o[1] - o[3]) / 2 * E) * l - (S += (o[0] - o[2]) / 2 * E) * h, S * l + T * h],
                    x = r.callback ? r.callback : b;
                void 0 !== r.duration ? this.animateInternal({ resolution: E, center: this.getConstrainedCenter(w, E), duration: r.duration, easing: r.easing }, x) : (this.targetResolution_ = E, this.targetCenter_ = w, this.applyTargetState_(!1, !0), si(x, !0)) }, e.prototype.centerOn = function(t, e, r) { this.centerOnInternal(Ue(t, this.getProjection()), e, r) }, e.prototype.centerOnInternal = function(t, e, r) { var n = this.getRotation(),
                    i = Math.cos(-n),
                    o = Math.sin(-n),
                    a = t[0] * i - t[1] * o,
                    s = t[1] * i + t[0] * o,
                    u = this.getResolution(),
                    l = (a += (e[0] / 2 - r[0]) * u) * i - (s += (r[1] - e[1] / 2) * u) * (o = -o),
                    h = s * i + a * o;
                this.setCenterInternal([l, h]) }, e.prototype.isDef = function() { return !!this.getCenterInternal() && void 0 !== this.getResolution() }, e.prototype.adjustCenter = function(t) { var e = ke(this.targetCenter_, this.getProjection());
                this.setCenter([e[0] + t[0], e[1] + t[1]]) }, e.prototype.adjustCenterInternal = function(t) { var e = this.targetCenter_;
                this.setCenterInternal([e[0] + t[0], e[1] + t[1]]) }, e.prototype.adjustResolution = function(t, e) { var r = e && Ue(e, this.getProjection());
                this.adjustResolutionInternal(t, r) }, e.prototype.adjustResolutionInternal = function(t, e) { var r = this.getAnimating() || this.getInteracting(),
                    n = this.getSizeFromViewport_(this.getRotation()),
                    i = this.constraints_.resolution(this.targetResolution_ * t, 0, n, r);
                void 0 !== e && (this.targetCenter_ = this.calculateCenterZoom(i, e)), this.targetResolution_ *= t, this.applyTargetState_() }, e.prototype.adjustZoom = function(t, e) { this.adjustResolution(Math.pow(this.zoomFactor_, -t), e) }, e.prototype.adjustRotation = function(t, e) { e && (e = Ue(e, this.getProjection())), this.adjustRotationInternal(t, e) }, e.prototype.adjustRotationInternal = function(t, e) { var r = this.getAnimating() || this.getInteracting(),
                    n = this.constraints_.rotation(this.targetRotation_ + t, r);
                void 0 !== e && (this.targetCenter_ = this.calculateCenterRotate(n, e)), this.targetRotation_ += t, this.applyTargetState_() }, e.prototype.setCenter = function(t) { this.setCenterInternal(Ue(t, this.getProjection())) }, e.prototype.setCenterInternal = function(t) { this.targetCenter_ = t, this.applyTargetState_() }, e.prototype.setHint = function(t, e) { return this.hints_[t] += e, this.changed(), this.hints_[t] }, e.prototype.setResolution = function(t) { this.targetResolution_ = t, this.applyTargetState_() }, e.prototype.setRotation = function(t) { this.targetRotation_ = t, this.applyTargetState_() }, e.prototype.setZoom = function(t) { this.setResolution(this.getResolutionForZoom(t)) }, e.prototype.applyTargetState_ = function(t, e) { var r = this.getAnimating() || this.getInteracting() || e,
                    n = this.constraints_.rotation(this.targetRotation_, r),
                    i = this.getSizeFromViewport_(n),
                    o = this.constraints_.resolution(this.targetResolution_, 0, i, r),
                    a = this.constraints_.center(this.targetCenter_, o, i, r);
                this.get(Bn) !== n && this.set(Bn, n), this.get(Un) !== o && this.set(Un, o), this.get(kn) && Kn(this.get(kn), a) || this.set(kn, a), this.getAnimating() && !t && this.cancelAnimations() }, e.prototype.resolveConstraints = function(t, e, r) { var n = void 0 !== t ? t : 200,
                    i = e || 0,
                    o = this.constraints_.rotation(this.targetRotation_),
                    a = this.getSizeFromViewport_(o),
                    s = this.constraints_.resolution(this.targetResolution_, i, a),
                    u = this.constraints_.center(this.targetCenter_, s, a); if (0 === n) return this.targetResolution_ = s, this.targetRotation_ = o, this.targetCenter_ = u, void this.applyTargetState_();
                this.getResolution() === s && this.getRotation() === o && this.getCenterInternal() && Kn(this.getCenterInternal(), u) || (this.getAnimating() && this.cancelAnimations(), this.animateInternal({ rotation: o, center: u, resolution: s, duration: n, easing: ri, anchor: r })) }, e.prototype.beginInteraction = function() { this.resolveConstraints(0), this.setHint(jn, 1) }, e.prototype.endInteraction = function(t, e, r) { var n = r && Ue(r, this.getProjection());
                this.endInteractionInternal(t, e, n) }, e.prototype.endInteractionInternal = function(t, e, r) { this.setHint(jn, -1), this.resolveConstraints(t, e, r) }, e.prototype.getConstrainedCenter = function(t, e) { var r = this.getSizeFromViewport_(this.getRotation()); return this.constraints_.center(t, e || this.getResolution(), r) }, e.prototype.getConstrainedZoom = function(t, e) { var r = this.getResolutionForZoom(t); return this.getZoomForResolution(this.getConstrainedResolution(r, e)) }, e.prototype.getConstrainedResolution = function(t, e) { var r = e || 0,
                    n = this.getSizeFromViewport_(this.getRotation()); return this.constraints_.resolution(t, r, n) }, e }(z);

        function hi(t, e) { var r = document.createElement("canvas"); return t && (r.width = t), e && (r.height = e), r.getContext("2d") }

        function ci(t) { var e = t.offsetWidth,
                r = getComputedStyle(t); return e += parseInt(r.marginLeft, 10) + parseInt(r.marginRight, 10) }

        function pi(t) { var e = t.offsetHeight,
                r = getComputedStyle(t); return e += parseInt(r.marginTop, 10) + parseInt(r.marginBottom, 10) }

        function fi(t, e) { var r = e.parentNode;
            r && r.replaceChild(t, e) }

        function di(t) { return t && t.parentNode ? t.parentNode.removeChild(t) : null }

        function _i(t) { for (; t.lastChild;) t.removeChild(t.lastChild) } var gi = { OPACITY: "opacity", VISIBLE: "visible", EXTENT: "extent", Z_INDEX: "zIndex", MAX_RESOLUTION: "maxResolution", MIN_RESOLUTION: "minResolution", MAX_ZOOM: "maxZoom", MIN_ZOOM: "minZoom", SOURCE: "source" },
            yi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            vi = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = p({}, e); return n[gi.OPACITY] = void 0 !== e.opacity ? e.opacity : 1, K("number" == typeof n[gi.OPACITY], 64), n[gi.VISIBLE] = void 0 === e.visible || e.visible, n[gi.Z_INDEX] = e.zIndex, n[gi.MAX_RESOLUTION] = void 0 !== e.maxResolution ? e.maxResolution : 1 / 0, n[gi.MIN_RESOLUTION] = void 0 !== e.minResolution ? e.minResolution : 0, n[gi.MIN_ZOOM] = void 0 !== e.minZoom ? e.minZoom : -1 / 0, n[gi.MAX_ZOOM] = void 0 !== e.maxZoom ? e.maxZoom : 1 / 0, r.className_ = void 0 !== n.className ? e.className : "ol-layer", delete n.className, r.setProperties(n), r.state_ = null, r } return yi(e, t), e.prototype.getClassName = function() { return this.className_ }, e.prototype.getLayerState = function(t) { var e = this.state_ || { layer: this, managed: void 0 === t || t, hasOverlay: !1 }; return e.opacity = kt(Math.round(100 * this.getOpacity()) / 100, 0, 1), e.sourceState = this.getSourceState(), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = this.getZIndex() || (!1 === e.managed ? 1 / 0 : 0), e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e }, e.prototype.getLayersArray = function(t) { return n() }, e.prototype.getLayerStatesArray = function(t) { return n() }, e.prototype.getExtent = function() { return this.get(gi.EXTENT) }, e.prototype.getMaxResolution = function() { return this.get(gi.MAX_RESOLUTION) }, e.prototype.getMinResolution = function() { return this.get(gi.MIN_RESOLUTION) }, e.prototype.getMinZoom = function() { return this.get(gi.MIN_ZOOM) }, e.prototype.getMaxZoom = function() { return this.get(gi.MAX_ZOOM) }, e.prototype.getOpacity = function() { return this.get(gi.OPACITY) }, e.prototype.getSourceState = function() { return n() }, e.prototype.getVisible = function() { return this.get(gi.VISIBLE) }, e.prototype.getZIndex = function() { return this.get(gi.Z_INDEX) }, e.prototype.setExtent = function(t) { this.set(gi.EXTENT, t) }, e.prototype.setMaxResolution = function(t) { this.set(gi.MAX_RESOLUTION, t) }, e.prototype.setMinResolution = function(t) { this.set(gi.MIN_RESOLUTION, t) }, e.prototype.setMaxZoom = function(t) { this.set(gi.MAX_ZOOM, t) }, e.prototype.setMinZoom = function(t) { this.set(gi.MIN_ZOOM, t) }, e.prototype.setOpacity = function(t) { K("number" == typeof t, 64), this.set(gi.OPACITY, t) }, e.prototype.setVisible = function(t) { this.set(gi.VISIBLE, t) }, e.prototype.setZIndex = function(t) { this.set(gi.Z_INDEX, t) }, e }(z),
            mi = { UNDEFINED: "undefined", LOADING: "loading", READY: "ready", ERROR: "error" },
            Ei = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ti = { LAYERS: "layers" },
            Si = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n);
                    delete i.layers; var o = n.layers; return (r = t.call(this, i) || this).layersListenerKeys_ = [], r.listenerKeys_ = {}, r.addEventListener(Y(Ti.LAYERS), r.handleLayersChanged_), o ? Array.isArray(o) ? o = new Z(o.slice(), { unique: !0 }) : K("function" == typeof o.getArray, 43) : o = new Z(void 0, { unique: !0 }), r.setLayers(o), r } return Ei(e, t), e.prototype.handleLayerChange_ = function() { this.changed() }, e.prototype.handleLayersChanged_ = function() { this.layersListenerKeys_.forEach(v), this.layersListenerKeys_.length = 0; var t = this.getLayers(); for (var e in this.layersListenerKeys_.push(g(t, h.ADD, this.handleLayersAdd_, this), g(t, h.REMOVE, this.handleLayersRemove_, this)), this.listenerKeys_) this.listenerKeys_[e].forEach(v);
                    f(this.listenerKeys_); for (var r = t.getArray(), n = 0, i = r.length; n < i; n++) { var a = r[n];
                        this.listenerKeys_[o(a)] = [g(a, c, this.handleLayerChange_, this), g(a, N.CHANGE, this.handleLayerChange_, this)] }
                    this.changed() }, e.prototype.handleLayersAdd_ = function(t) { var e = t.element;
                    this.listenerKeys_[o(e)] = [g(e, c, this.handleLayerChange_, this), g(e, N.CHANGE, this.handleLayerChange_, this)], this.changed() }, e.prototype.handleLayersRemove_ = function(t) { var e = o(t.element);
                    this.listenerKeys_[e].forEach(v), delete this.listenerKeys_[e], this.changed() }, e.prototype.getLayers = function() { return this.get(Ti.LAYERS) }, e.prototype.setLayers = function(t) { this.set(Ti.LAYERS, t) }, e.prototype.getLayersArray = function(t) { var e = void 0 !== t ? t : []; return this.getLayers().forEach(function(t) { t.getLayersArray(e) }), e }, e.prototype.getLayerStatesArray = function(t) { var e = void 0 !== t ? t : [],
                        r = e.length;
                    this.getLayers().forEach(function(t) { t.getLayerStatesArray(e) }); for (var n = this.getLayerState(), i = r, o = e.length; i < o; i++) { var a = e[i];
                        a.opacity *= n.opacity, a.visible = a.visible && n.visible, a.maxResolution = Math.min(a.maxResolution, n.maxResolution), a.minResolution = Math.max(a.minResolution, n.minResolution), a.minZoom = Math.max(a.minZoom, n.minZoom), a.maxZoom = Math.min(a.maxZoom, n.maxZoom), void 0 !== n.extent && (void 0 !== a.extent ? a.extent = Rt(a.extent, n.extent) : a.extent = n.extent) } return e }, e.prototype.getSourceState = function() { return mi.READY }, e }(vi);

        function wi(t, e, r) { return void 0 === r && (r = [0, 0]), r[0] = t[0] + 2 * e, r[1] = t[1] + 2 * e, r }

        function xi(t, e, r) { return void 0 === r && (r = [0, 0]), r[0] = t[0] * e + .5 | 0, r[1] = t[1] * e + .5 | 0, r }

        function Oi(t, e) { return Array.isArray(t) ? t : (void 0 === e ? e = [t, t] : e[0] = e[1] = t, e) } var Ri = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(); var Ci, Pi, Ii = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = function(t) { var e = null;
                            void 0 !== t.keyboardEventTarget && (e = "string" == typeof t.keyboardEventTarget ? document.getElementById(t.keyboardEventTarget) : t.keyboardEventTarget); var r, n, i, o = {},
                                a = t.layers && "function" == typeof t.layers.getLayers ? t.layers : new Si({ layers: t.layers });
                            o[vn.LAYERGROUP] = a, o[vn.TARGET] = t.target, o[vn.VIEW] = void 0 !== t.view ? t.view : new li, void 0 !== t.controls && (Array.isArray(t.controls) ? r = new Z(t.controls.slice()) : (K("function" == typeof t.controls.getArray, 47), r = t.controls));
                            void 0 !== t.interactions && (Array.isArray(t.interactions) ? n = new Z(t.interactions.slice()) : (K("function" == typeof t.interactions.getArray, 48), n = t.interactions));
                            void 0 !== t.overlays ? Array.isArray(t.overlays) ? i = new Z(t.overlays.slice()) : (K("function" == typeof t.overlays.getArray, 49), i = t.overlays) : i = new Z; return { controls: r, interactions: n, keyboardEventTarget: e, overlays: i, values: o } }(e);
                    r.boundHandleBrowserEvent_ = r.handleBrowserEvent.bind(r), r.maxTilesLoading_ = void 0 !== e.maxTilesLoading ? e.maxTilesLoading : 16, r.pixelRatio_ = void 0 !== e.pixelRatio ? e.pixelRatio : sn, r.postRenderTimeoutHandle_, r.animationDelayKey_, r.animationDelay_ = function() { this.animationDelayKey_ = void 0, this.renderFrame_(Date.now()) }.bind(r), r.coordinateToPixelTransform_ = [1, 0, 0, 1, 0, 0], r.pixelToCoordinateTransform_ = [1, 0, 0, 1, 0, 0], r.frameIndex_ = 0, r.frameState_ = null, r.previousExtent_ = null, r.viewPropertyListenerKey_ = null, r.viewChangeListenerKey_ = null, r.layerGroupPropertyListenerKeys_ = null, r.viewport_ = document.createElement("div"), r.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), r.viewport_.style.position = "relative", r.viewport_.style.overflow = "hidden", r.viewport_.style.width = "100%", r.viewport_.style.height = "100%", r.viewport_.style.msTouchAction = "none", r.viewport_.style.touchAction = "none", r.overlayContainer_ = document.createElement("div"), r.overlayContainer_.style.position = "absolute", r.overlayContainer_.style.zIndex = "0", r.overlayContainer_.style.width = "100%", r.overlayContainer_.style.height = "100%", r.overlayContainer_.className = "ol-overlaycontainer", r.viewport_.appendChild(r.overlayContainer_), r.overlayContainerStopEvent_ = document.createElement("div"), r.overlayContainerStopEvent_.style.position = "absolute", r.overlayContainerStopEvent_.style.zIndex = "0", r.overlayContainerStopEvent_.style.width = "100%", r.overlayContainerStopEvent_.style.height = "100%", r.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", r.viewport_.appendChild(r.overlayContainerStopEvent_), r.mapBrowserEventHandler_ = new dn(r, e.moveTolerance); var i = r.handleMapBrowserEvent.bind(r); for (var o in ln) r.mapBrowserEventHandler_.addEventListener(ln[o], i);
                    r.keyboardEventTarget_ = n.keyboardEventTarget, r.keyHandlerKeys_ = null; var a = r.handleBrowserEvent.bind(r); return r.viewport_.addEventListener(N.CONTEXTMENU, a, !1), r.viewport_.addEventListener(N.WHEEL, a, !1), r.controls = n.controls || new Z, r.interactions = n.interactions || new Z, r.labelCache_ = null, r.labelCacheListenerKey_, r.overlays_ = n.overlays, r.overlayIdIndex_ = {}, r.renderer_ = null, r.handleResize_, r.postRenderFunctions_ = [], r.tileQueue_ = new Cn(r.getTilePriority.bind(r), r.handleTileChange_.bind(r)), r.addEventListener(Y(vn.LAYERGROUP), r.handleLayerGroupChanged_), r.addEventListener(Y(vn.VIEW), r.handleViewChanged_), r.addEventListener(Y(vn.SIZE), r.handleSizeChanged_), r.addEventListener(Y(vn.TARGET), r.handleTargetChanged_), r.setProperties(n.values), r.controls.forEach(function(t) { t.setMap(this) }.bind(r)), r.controls.addEventListener(h.ADD, function(t) { t.element.setMap(this) }.bind(r)), r.controls.addEventListener(h.REMOVE, function(t) { t.element.setMap(null) }.bind(r)), r.interactions.forEach(function(t) { t.setMap(this) }.bind(r)), r.interactions.addEventListener(h.ADD, function(t) { t.element.setMap(this) }.bind(r)), r.interactions.addEventListener(h.REMOVE, function(t) { t.element.setMap(null) }.bind(r)), r.overlays_.forEach(r.addOverlayInternal_.bind(r)), r.overlays_.addEventListener(h.ADD, function(t) { this.addOverlayInternal_(t.element) }.bind(r)), r.overlays_.addEventListener(h.REMOVE, function(t) { var e = t.element.getId();
                        void 0 !== e && delete this.overlayIdIndex_[e.toString()], t.element.setMap(null) }.bind(r)), r } return Ri(e, t), e.prototype.createRenderer = function() { throw new Error("Use a map type that has a createRenderer method") }, e.prototype.addControl = function(t) { this.getControls().push(t) }, e.prototype.addInteraction = function(t) { this.getInteractions().push(t) }, e.prototype.addLayer = function(t) { this.getLayerGroup().getLayers().push(t) }, e.prototype.addOverlay = function(t) { this.getOverlays().push(t) }, e.prototype.addOverlayInternal_ = function(t) { var e = t.getId();
                    void 0 !== e && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this) }, e.prototype.disposeInternal = function() { this.mapBrowserEventHandler_.dispose(), this.viewport_.removeEventListener(N.CONTEXTMENU, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(N.WHEEL, this.boundHandleBrowserEvent_), void 0 !== this.handleResize_ && (removeEventListener(N.RESIZE, this.handleResize_, !1), this.handleResize_ = void 0), this.setTarget(null), t.prototype.disposeInternal.call(this) }, e.prototype.forEachFeatureAtPixel = function(t, e, r) { if (this.frameState_) { var n = this.getCoordinateFromPixelInternal(t),
                            i = void 0 !== (r = void 0 !== r ? r : {}).hitTolerance ? r.hitTolerance * this.frameState_.pixelRatio : 0,
                            o = void 0 !== r.layerFilter ? r.layerFilter : P,
                            a = !1 !== r.checkWrapped; return this.renderer_.forEachFeatureAtCoordinate(n, this.frameState_, i, a, e, null, o, null) } }, e.prototype.getFeaturesAtPixel = function(t, e) { var r = []; return this.forEachFeatureAtPixel(t, function(t) { r.push(t) }, e), r }, e.prototype.forEachLayerAtPixel = function(t, e, r) { if (this.frameState_) { var n = r || {},
                            i = void 0 !== n.hitTolerance ? r.hitTolerance * this.frameState_.pixelRatio : 0,
                            o = n.layerFilter || P; return this.renderer_.forEachLayerAtPixel(t, this.frameState_, i, e, o) } }, e.prototype.hasFeatureAtPixel = function(t, e) { if (!this.frameState_) return !1; var r = this.getCoordinateFromPixelInternal(t),
                        n = void 0 !== (e = void 0 !== e ? e : {}).layerFilter ? e.layerFilter : P,
                        i = void 0 !== e.hitTolerance ? e.hitTolerance * this.frameState_.pixelRatio : 0,
                        o = !1 !== e.checkWrapped; return this.renderer_.hasFeatureAtCoordinate(r, this.frameState_, i, o, n, null) }, e.prototype.getEventCoordinate = function(t) { return this.getCoordinateFromPixel(this.getEventPixel(t)) }, e.prototype.getEventCoordinateInternal = function(t) { return this.getCoordinateFromPixelInternal(this.getEventPixel(t)) }, e.prototype.getEventPixel = function(t) { var e = this.viewport_.getBoundingClientRect(),
                        r = "changedTouches" in t ? t.changedTouches[0] : t; return [r.clientX - e.left, r.clientY - e.top] }, e.prototype.getTarget = function() { return this.get(vn.TARGET) }, e.prototype.getTargetElement = function() { var t = this.getTarget(); return void 0 !== t ? "string" == typeof t ? document.getElementById(t) : t : null }, e.prototype.getCoordinateFromPixel = function(t) { return ke(this.getCoordinateFromPixelInternal(t), this.getView().getProjection()) }, e.prototype.getCoordinateFromPixelInternal = function(t) { var e = this.frameState_; return e ? Ze(e.pixelToCoordinateTransform, t.slice()) : null }, e.prototype.getControls = function() { return this.controls }, e.prototype.getOverlays = function() { return this.overlays_ }, e.prototype.getOverlayById = function(t) { var e = this.overlayIdIndex_[t.toString()]; return void 0 !== e ? e : null }, e.prototype.getInteractions = function() { return this.interactions }, e.prototype.getLayerGroup = function() { return this.get(vn.LAYERGROUP) }, e.prototype.getLayers = function() { return this.getLayerGroup().getLayers() }, e.prototype.getLoading = function() { for (var t = this.getLayerGroup().getLayerStatesArray(), e = 0, r = t.length; e < r; ++e) { var n = t[e].layer.getSource(); if (n && n.loading) return !0 } return !1 }, e.prototype.getPixelFromCoordinate = function(t) { var e = Ue(t, this.getView().getProjection()); return this.getPixelFromCoordinateInternal(e) }, e.prototype.getPixelFromCoordinateInternal = function(t) { var e = this.frameState_; return e ? Ze(e.coordinateToPixelTransform, t.slice(0, 2)) : null }, e.prototype.getRenderer = function() { return this.renderer_ }, e.prototype.getSize = function() { return this.get(vn.SIZE) }, e.prototype.getView = function() { return this.get(vn.VIEW) }, e.prototype.getViewport = function() { return this.viewport_ }, e.prototype.getOverlayContainer = function() { return this.overlayContainer_ }, e.prototype.getOverlayContainerStopEvent = function() { return this.overlayContainerStopEvent_ }, e.prototype.getTilePriority = function(t, e, r, n) { var i = this.frameState_; if (!(i && e in i.wantedTiles)) return 1 / 0; if (!i.wantedTiles[e][t.getKey()]) return 1 / 0; var o = i.viewState.center,
                        a = r[0] - o[0],
                        s = r[1] - o[1]; return 65536 * Math.log(n) + Math.sqrt(a * a + s * s) / n }, e.prototype.handleBrowserEvent = function(t, e) { var r = e || t.type,
                        n = new en(r, this, t);
                    this.handleMapBrowserEvent(n) }, e.prototype.handleMapBrowserEvent = function(t) { if (this.frameState_) { for (var e = t.originalEvent.target; e instanceof HTMLElement;) { if (e.parentElement === this.overlayContainerStopEvent_) return;
                            e = e.parentElement }
                        t.frameState = this.frameState_; var r = this.getInteractions().getArray(); if (!1 !== this.dispatchEvent(t))
                            for (var n = r.length - 1; n >= 0; n--) { var i = r[n]; if (i.getActive())
                                    if (!i.handleEvent(t)) break } } }, e.prototype.handlePostRender = function() { var t = this.frameState_,
                        e = this.tileQueue_; if (!e.isEmpty()) { var r = this.maxTilesLoading_,
                            n = r; if (t) { var i = t.viewHints; if (i[Dn] || i[jn]) { var o = !un && Date.now() - t.time > 8;
                                r = o ? 0 : 8, n = o ? 0 : 2 } }
                        e.getTilesLoading() < r && (e.reprioritize(), e.loadMoreTiles(r, n)) }!t || !this.hasListener(wn) || t.animate || this.tileQueue_.getTilesLoading() || this.getLoading() || this.renderer_.dispatchRenderEvent(wn, t); for (var a = this.postRenderFunctions_, s = 0, u = a.length; s < u; ++s) a[s](this, t);
                    a.length = 0 }, e.prototype.handleSizeChanged_ = function() { this.getView() && this.getView().resolveConstraints(0), this.render() }, e.prototype.handleTargetChanged_ = function() { var t; if (this.getTarget() && (t = this.getTargetElement()), this.keyHandlerKeys_) { for (var e = 0, r = this.keyHandlerKeys_.length; e < r; ++e) v(this.keyHandlerKeys_[e]);
                        this.keyHandlerKeys_ = null } if (t) { t.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = this.createRenderer()); var n = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : t;
                        this.keyHandlerKeys_ = [g(n, N.KEYDOWN, this.handleBrowserEvent, this), g(n, N.KEYPRESS, this.handleBrowserEvent, this)], this.handleResize_ || (this.handleResize_ = this.updateSize.bind(this), window.addEventListener(N.RESIZE, this.handleResize_, !1)) } else this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0), di(this.viewport_), void 0 !== this.handleResize_ && (removeEventListener(N.RESIZE, this.handleResize_, !1), this.handleResize_ = void 0);
                    this.updateSize() }, e.prototype.handleTileChange_ = function() { this.render() }, e.prototype.handleViewPropertyChanged_ = function() { this.render() }, e.prototype.handleViewChanged_ = function() { this.viewPropertyListenerKey_ && (v(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (v(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null); var t = this.getView();
                    t && (this.viewport_.setAttribute("data-view", o(t)), this.viewPropertyListenerKey_ = g(t, c, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = g(t, N.CHANGE, this.handleViewPropertyChanged_, this), t.resolveConstraints(0)), this.render() }, e.prototype.handleLayerGroupChanged_ = function() { this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(v), this.layerGroupPropertyListenerKeys_ = null); var t = this.getLayerGroup();
                    t && (this.layerGroupPropertyListenerKeys_ = [g(t, c, this.render, this), g(t, N.CHANGE, this.render, this)]), this.render() }, e.prototype.isRendered = function() { return !!this.frameState_ }, e.prototype.renderSync = function() { this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_() }, e.prototype.redrawText = function() { for (var t = this.getLayerGroup().getLayerStatesArray(), e = 0, r = t.length; e < r; ++e) { var n = t[e].layer;
                        n.hasRenderer() && n.getRenderer().handleFontsChanged() } }, e.prototype.render = function() { this.renderer_ && void 0 === this.animationDelayKey_ && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_)) }, e.prototype.removeControl = function(t) { return this.getControls().remove(t) }, e.prototype.removeInteraction = function(t) { return this.getInteractions().remove(t) }, e.prototype.removeLayer = function(t) { return this.getLayerGroup().getLayers().remove(t) }, e.prototype.removeOverlay = function(t) { return this.getOverlays().remove(t) }, e.prototype.renderFrame_ = function(t) { var e = this.getSize(),
                        r = this.getView(),
                        n = this.frameState_,
                        i = null; if (void 0 !== e && function(t) { return t[0] > 0 && t[1] > 0 }(e) && r && r.isDef()) { var o = r.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
                            a = r.getState();
                        i = { animate: !1, coordinateToPixelTransform: this.coordinateToPixelTransform_, declutterItems: n ? n.declutterItems : [], extent: xt(a.center, a.resolution, a.rotation, e), index: this.frameIndex_++, layerIndex: 0, layerStatesArray: this.getLayerGroup().getLayerStatesArray(), pixelRatio: this.pixelRatio_, pixelToCoordinateTransform: this.pixelToCoordinateTransform_, postRenderFunctions: [], size: e, tileQueue: this.tileQueue_, time: t, usedTiles: {}, viewState: a, viewHints: o, wantedTiles: {} } } if (this.frameState_ = i, this.renderer_.renderFrame(i), i) { if (i.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, i.postRenderFunctions), n)(!this.previousExtent_ || !Lt(this.previousExtent_) && !pt(i.extent, this.previousExtent_)) && (this.dispatchEvent(new $r(gn, this, n)), this.previousExtent_ = lt(this.previousExtent_));
                        this.previousExtent_ && !i.viewHints[Dn] && !i.viewHints[jn] && !pt(i.extent, this.previousExtent_) && (this.dispatchEvent(new $r(yn, this, i)), et(i.extent, this.previousExtent_)) }
                    this.dispatchEvent(new $r(_n, this, i)), this.postRenderTimeoutHandle_ = setTimeout(this.handlePostRender.bind(this), 0) }, e.prototype.setLayerGroup = function(t) { this.set(vn.LAYERGROUP, t) }, e.prototype.setSize = function(t) { this.set(vn.SIZE, t) }, e.prototype.setTarget = function(t) { this.set(vn.TARGET, t) }, e.prototype.setView = function(t) { this.set(vn.VIEW, t) }, e.prototype.updateSize = function() { var t = this.getTargetElement(); if (t) { var e = getComputedStyle(t);
                        this.setSize([t.offsetWidth - parseFloat(e.borderLeftWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) - parseFloat(e.borderRightWidth), t.offsetHeight - parseFloat(e.borderTopWidth) - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) - parseFloat(e.borderBottomWidth)]) } else this.setSize(void 0) }, e }(z),
            bi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Li = function(t) {
                function e(e) { var r = t.call(this) || this; return r.element = e.element ? e.element : null, r.target_ = null, r.map_ = null, r.listenerKeys = [], r.render = e.render ? e.render : b, e.target && r.setTarget(e.target), r } return bi(e, t), e.prototype.disposeInternal = function() { di(this.element), t.prototype.disposeInternal.call(this) }, e.prototype.getMap = function() { return this.map_ }, e.prototype.setMap = function(t) { this.map_ && di(this.element); for (var e = 0, r = this.listenerKeys.length; e < r; ++e) v(this.listenerKeys[e]);
                    (this.listenerKeys.length = 0, this.map_ = t, this.map_) && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== b && this.listenerKeys.push(g(t, _n, this.render, this)), t.render()) }, e.prototype.setTarget = function(t) { this.target_ = "string" == typeof t ? document.getElementById(t) : t }, e }(z),
            Mi = "ol-hidden",
            Fi = "ol-selectable",
            Ai = "ol-unselectable",
            Ni = "ol-unsupported",
            Gi = "ol-control",
            Di = "ol-collapsed",
            ji = (Pi = {}, function(t) { if (Ci || (Ci = document.createElement("div").style), !(t in Pi)) { Ci.font = t; var e = Ci.fontFamily,
                        r = Ci.fontWeight,
                        n = Ci.fontStyle; if (Ci.font = "", !e) return null; var i = e.split(/,\s?/);
                    Pi[t] = { families: i, weight: r, style: n } } return Pi[t] }),
            ki = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Ui(t, e) { if (!t.visible) return !1; var r = e.resolution; if (r < t.minResolution || r >= t.maxResolution) return !1; var n = e.zoom; return n > t.minZoom && n <= t.maxZoom } var Bi = function(t) {
                function e(e) { var r = this,
                        n = p({}, e);
                    delete n.source, (r = t.call(this, n) || this).mapPrecomposeKey_ = null, r.mapRenderKey_ = null, r.sourceChangeKey_ = null, r.renderer_ = null, e.render && (r.render = e.render), e.map && r.setMap(e.map), r.addEventListener(Y(gi.SOURCE), r.handleSourcePropertyChange_); var i = e.source ? e.source : null; return r.setSource(i), r } return ki(e, t), e.prototype.getLayersArray = function(t) { var e = t || []; return e.push(this), e }, e.prototype.getLayerStatesArray = function(t) { var e = t || []; return e.push(this.getLayerState()), e }, e.prototype.getSource = function() { return this.get(gi.SOURCE) || null }, e.prototype.getSourceState = function() { var t = this.getSource(); return t ? t.getState() : mi.UNDEFINED }, e.prototype.handleSourceChange_ = function() { this.changed() }, e.prototype.handleSourcePropertyChange_ = function() { this.sourceChangeKey_ && (v(this.sourceChangeKey_), this.sourceChangeKey_ = null); var t = this.getSource();
                    t && (this.sourceChangeKey_ = g(t, N.CHANGE, this.handleSourceChange_, this)), this.changed() }, e.prototype.render = function(t, e) { var r = this.getRenderer(); if (r.prepareFrame(t)) return r.renderFrame(t, e) }, e.prototype.setMap = function(t) { this.mapPrecomposeKey_ && (v(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (v(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = g(t, Tn, function(t) { t.frameState.layerStatesArray.push(this.getLayerState(!1)) }, this), this.mapRenderKey_ = g(this, N.CHANGE, t.render, t), this.changed()) }, e.prototype.setSource = function(t) { this.set(gi.SOURCE, t) }, e.prototype.getRenderer = function() { return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_ }, e.prototype.hasRenderer = function() { return !!this.renderer_ }, e.prototype.createRenderer = function() { return null }, e }(vi),
            Yi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function zi(t) { this.updateElement_(t.frameState) } var Xi = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { element: document.createElement("div"), render: n.render || zi, target: n.target }) || this).ulElement_ = document.createElement("ul"), r.collapsed_ = void 0 === n.collapsed || n.collapsed, r.overrideCollapsible_ = void 0 !== n.collapsible, r.collapsible_ = void 0 === n.collapsible || n.collapsible, r.collapsible_ || (r.collapsed_ = !1); var i = void 0 !== n.className ? n.className : "ol-attribution",
                        o = void 0 !== n.tipLabel ? n.tipLabel : "Attributions",
                        a = void 0 !== n.collapseLabel ? n.collapseLabel : "»"; "string" == typeof a ? (r.collapseLabel_ = document.createElement("span"), r.collapseLabel_.textContent = a) : r.collapseLabel_ = a; var s = void 0 !== n.label ? n.label : "i"; "string" == typeof s ? (r.label_ = document.createElement("span"), r.label_.textContent = s) : r.label_ = s; var u = r.collapsible_ && !r.collapsed_ ? r.collapseLabel_ : r.label_,
                        l = document.createElement("button");
                    l.setAttribute("type", "button"), l.title = o, l.appendChild(u), l.addEventListener(N.CLICK, r.handleClick_.bind(r), !1); var h = i + " " + Ai + " " + Gi + (r.collapsed_ && r.collapsible_ ? " " + Di : "") + (r.collapsible_ ? "" : " ol-uncollapsible"),
                        c = r.element; return c.className = h, c.appendChild(r.ulElement_), c.appendChild(l), r.renderedAttributions_ = [], r.renderedVisible_ = !0, r } return Yi(e, t), e.prototype.collectSourceAttributions_ = function(t) { for (var e = {}, r = [], n = t.layerStatesArray, i = 0, o = n.length; i < o; ++i) { var a = n[i]; if (Ui(a, t.viewState)) { var s = a.layer.getSource(); if (s) { var u = s.getAttributions(); if (u) { var l = u(t); if (l)
                                        if (this.overrideCollapsible_ || !1 !== s.getAttributionsCollapsible() || this.setCollapsible(!1), Array.isArray(l))
                                            for (var h = 0, c = l.length; h < c; ++h) l[h] in e || (r.push(l[h]), e[l[h]] = !0);
                                        else l in e || (r.push(l), e[l] = !0) } } } } return r }, e.prototype.updateElement_ = function(t) { if (t) { var e = this.collectSourceAttributions_(t),
                            r = e.length > 0; if (this.renderedVisible_ != r && (this.element.style.display = r ? "" : "none", this.renderedVisible_ = r), !R(e, this.renderedAttributions_)) { _i(this.ulElement_); for (var n = 0, i = e.length; n < i; ++n) { var o = document.createElement("li");
                                o.innerHTML = e[n], this.ulElement_.appendChild(o) }
                            this.renderedAttributions_ = e } } else this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1) }, e.prototype.handleClick_ = function(t) { t.preventDefault(), this.handleToggle_() }, e.prototype.handleToggle_ = function() { this.element.classList.toggle(Di), this.collapsed_ ? fi(this.collapseLabel_, this.label_) : fi(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_ }, e.prototype.getCollapsible = function() { return this.collapsible_ }, e.prototype.setCollapsible = function(t) { this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), !t && this.collapsed_ && this.handleToggle_()) }, e.prototype.setCollapsed = function(t) { this.collapsible_ && this.collapsed_ !== t && this.handleToggle_() }, e.prototype.getCollapsed = function() { return this.collapsed_ }, e }(Li),
            Vi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Wi(t) { var e = t.frameState; if (e) { var r = e.viewState.rotation; if (r != this.rotation_) { var n = "rotate(" + r + "rad)"; if (this.autoHide_) { var i = this.element.classList.contains(Mi);
                        i || 0 !== r ? i && 0 !== r && this.element.classList.remove(Mi) : this.element.classList.add(Mi) }
                    this.label_.style.transform = n }
                this.rotation_ = r } } var Zi = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    r = t.call(this, { element: document.createElement("div"), render: n.render || Wi, target: n.target }) || this; var i = void 0 !== n.className ? n.className : "ol-rotate",
                        o = void 0 !== n.label ? n.label : "⇧";
                    r.label_ = null, "string" == typeof o ? (r.label_ = document.createElement("span"), r.label_.className = "ol-compass", r.label_.textContent = o) : (r.label_ = o, r.label_.classList.add("ol-compass")); var a = n.tipLabel ? n.tipLabel : "Reset rotation",
                        s = document.createElement("button");
                    s.className = i + "-reset", s.setAttribute("type", "button"), s.title = a, s.appendChild(r.label_), s.addEventListener(N.CLICK, r.handleClick_.bind(r), !1); var u = i + " " + Ai + " " + Gi,
                        l = r.element; return l.className = u, l.appendChild(s), r.callResetNorth_ = n.resetNorth ? n.resetNorth : void 0, r.duration_ = void 0 !== n.duration ? n.duration : 250, r.autoHide_ = void 0 === n.autoHide || n.autoHide, r.rotation_ = void 0, r.autoHide_ && r.element.classList.add(Mi), r } return Vi(e, t), e.prototype.handleClick_ = function(t) { t.preventDefault(), void 0 !== this.callResetNorth_ ? this.callResetNorth_() : this.resetNorth_() }, e.prototype.resetNorth_ = function() { var t = this.getMap().getView();
                    t && void 0 !== t.getRotation() && (this.duration_ > 0 ? t.animate({ rotation: 0, duration: this.duration_, easing: ri }) : t.setRotation(0)) }, e }(Li),
            Ki = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Hi = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    r = t.call(this, { element: document.createElement("div"), target: n.target }) || this; var i = void 0 !== n.className ? n.className : "ol-zoom",
                        o = void 0 !== n.delta ? n.delta : 1,
                        a = void 0 !== n.zoomInLabel ? n.zoomInLabel : "+",
                        s = void 0 !== n.zoomOutLabel ? n.zoomOutLabel : "−",
                        u = void 0 !== n.zoomInTipLabel ? n.zoomInTipLabel : "Zoom in",
                        l = void 0 !== n.zoomOutTipLabel ? n.zoomOutTipLabel : "Zoom out",
                        h = document.createElement("button");
                    h.className = i + "-in", h.setAttribute("type", "button"), h.title = u, h.appendChild("string" == typeof a ? document.createTextNode(a) : a), h.addEventListener(N.CLICK, r.handleClick_.bind(r, o), !1); var c = document.createElement("button");
                    c.className = i + "-out", c.setAttribute("type", "button"), c.title = l, c.appendChild("string" == typeof s ? document.createTextNode(s) : s), c.addEventListener(N.CLICK, r.handleClick_.bind(r, -o), !1); var p = i + " " + Ai + " " + Gi,
                        f = r.element; return f.className = p, f.appendChild(h), f.appendChild(c), r.duration_ = void 0 !== n.duration ? n.duration : 250, r } return Ki(e, t), e.prototype.handleClick_ = function(t, e) { e.preventDefault(), this.zoomByDelta_(t) }, e.prototype.zoomByDelta_ = function(t) { var e = this.getMap().getView(); if (e) { var r = e.getZoom(); if (void 0 !== r) { var n = e.getConstrainedZoom(r + t);
                            this.duration_ > 0 ? (e.getAnimating() && e.cancelAnimations(), e.animate({ zoom: n, duration: this.duration_, easing: ri })) : e.setZoom(n) } } }, e }(Li);

        function qi(t) { var e = t || {},
                r = new Z; return (void 0 === e.zoom || e.zoom) && r.push(new Hi(e.zoomOptions)), (void 0 === e.rotate || e.rotate) && r.push(new Zi(e.rotateOptions)), (void 0 === e.attribution || e.attribution) && r.push(new Xi(e.attributionOptions)), r } var Ji = { ACTIVE: "active" },
            Qi = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function $i(t, e, r, n) { var i = t.getZoom(); if (void 0 !== i) { var o = t.getConstrainedZoom(i + e),
                    a = t.getResolutionForZoom(o);
                t.getAnimating() && t.cancelAnimations(), t.animate({ resolution: a, anchor: r, duration: void 0 !== n ? n : 250, easing: ri }) } } var to = function(t) {
                function e(e) { var r = t.call(this) || this; return e.handleEvent && (r.handleEvent = e.handleEvent), r.map_ = null, r.setActive(!0), r } return Qi(e, t), e.prototype.getActive = function() { return this.get(Ji.ACTIVE) }, e.prototype.getMap = function() { return this.map_ }, e.prototype.handleEvent = function(t) { return !0 }, e.prototype.setActive = function(t) { this.set(Ji.ACTIVE, t) }, e.prototype.setMap = function(t) { this.map_ = t }, e }(z),
            eo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function ro(t) { var e = !1; if (t.type == ln.DBLCLICK) { var r = t.originalEvent,
                    n = t.map,
                    i = t.coordinate,
                    o = r.shiftKey ? -this.delta_ : this.delta_;
                $i(n.getView(), o, i, this.duration_), t.preventDefault(), e = !0 } return !e } var no = function(t) {
                function e(e) { var r = t.call(this, { handleEvent: ro }) || this,
                        n = e || {}; return r.delta_ = n.delta ? n.delta : 1, r.duration_ = void 0 !== n.duration ? n.duration : 250, r } return eo(e, t), e }(to),
            io = function(t) { var e = t.originalEvent; return e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey },
            oo = function(t) { var e = t.originalEvent; return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey },
            ao = function(t) { return t.target.getTargetElement() === document.activeElement },
            so = P,
            uo = function(t) { var e = t.originalEvent; return 0 == e.button && !(on && an && e.ctrlKey) },
            lo = I,
            ho = function(t) { return "pointermove" == t.type },
            co = function(t) { return t.type == ln.SINGLECLICK },
            po = function(t) { var e = t.originalEvent; return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey },
            fo = function(t) { var e = t.originalEvent; return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey },
            _o = function(t) { var e = t.target.tagName; return "INPUT" !== e && "SELECT" !== e && "TEXTAREA" !== e },
            go = function(t) { var e = t.pointerEvent; return K(void 0 !== e, 56), "mouse" == e.pointerType },
            yo = function(t) { var e = t.pointerEvent; return K(void 0 !== e, 56), e.isPrimary && 0 === e.button },
            vo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function mo(t) { for (var e = t.length, r = 0, n = 0, i = 0; i < e; i++) r += t[i].clientX, n += t[i].clientY; return [r / e, n / e] } var Eo = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return r = t.call(this, n) || this, n.handleDownEvent && (r.handleDownEvent = n.handleDownEvent), n.handleDragEvent && (r.handleDragEvent = n.handleDragEvent), n.handleMoveEvent && (r.handleMoveEvent = n.handleMoveEvent), n.handleUpEvent && (r.handleUpEvent = n.handleUpEvent), n.stopDown && (r.stopDown = n.stopDown), r.handlingDownUpSequence = !1, r.trackedPointers_ = {}, r.targetPointers = [], r } return vo(e, t), e.prototype.handleDownEvent = function(t) { return !1 }, e.prototype.handleDragEvent = function(t) {}, e.prototype.handleEvent = function(t) { if (!t.pointerEvent) return !0; var e = !1; if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) { if (t.type == ln.POINTERDRAG) this.handleDragEvent(t);
                        else if (t.type == ln.POINTERUP) { var r = this.handleUpEvent(t);
                            this.handlingDownUpSequence = r && this.targetPointers.length > 0 } } else if (t.type == ln.POINTERDOWN) { var n = this.handleDownEvent(t);
                        n && t.preventDefault(), this.handlingDownUpSequence = n, e = this.stopDown(n) } else t.type == ln.POINTERMOVE && this.handleMoveEvent(t); return !e }, e.prototype.handleMoveEvent = function(t) {}, e.prototype.handleUpEvent = function(t) { return !1 }, e.prototype.stopDown = function(t) { return t }, e.prototype.updateTrackedPointers_ = function(t) { if (function(t) { var e = t.type; return e === ln.POINTERDOWN || e === ln.POINTERDRAG || e === ln.POINTERUP }(t)) { var e = t.pointerEvent,
                            r = e.pointerId.toString();
                        t.type == ln.POINTERUP ? delete this.trackedPointers_[r] : t.type == ln.POINTERDOWN ? this.trackedPointers_[r] = e : r in this.trackedPointers_ && (this.trackedPointers_[r] = e), this.targetPointers = d(this.trackedPointers_) } }, e }(to),
            To = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function So(t) { return po(t) && yo(t) } var wo = function(t) {
                function e(e) { var r = t.call(this, { stopDown: I }) || this,
                        n = e || {}; return r.kinetic_ = n.kinetic, r.lastCentroid = null, r.lastPointersCount_, r.panning_ = !1, r.condition_ = n.condition ? n.condition : So, r.noKinetic_ = !1, r } return To(e, t), e.prototype.handleDragEvent = function(t) { this.panning_ || (this.panning_ = !0, this.getMap().getView().beginInteraction()); var e = this.targetPointers,
                        r = mo(e); if (e.length == this.lastPointersCount_) { if (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid) { var n = [this.lastCentroid[0] - r[0], r[1] - this.lastCentroid[1]],
                                i = t.map.getView();
                            qn(n, i.getResolution()), Hn(n, i.getRotation()), i.adjustCenterInternal(n) } } else this.kinetic_ && this.kinetic_.begin();
                    this.lastCentroid = r, this.lastPointersCount_ = e.length }, e.prototype.handleUpEvent = function(t) { var e = t.map,
                        r = e.getView(); if (0 === this.targetPointers.length) { if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) { var n = this.kinetic_.getDistance(),
                                i = this.kinetic_.getAngle(),
                                o = r.getCenterInternal(),
                                a = e.getPixelFromCoordinateInternal(o),
                                s = e.getCoordinateFromPixelInternal([a[0] - n * Math.cos(i), a[1] - n * Math.sin(i)]);
                            r.animateInternal({ center: r.getConstrainedCenter(s), duration: 500, easing: ri }) } return this.panning_ && (this.panning_ = !1, r.endInteraction()), !1 } return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0 }, e.prototype.handleDownEvent = function(t) { if (this.targetPointers.length > 0 && this.condition_(t)) { var e = t.map.getView(); return this.lastCentroid = null, e.getAnimating() && e.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0 } return !1 }, e }(Eo),
            xo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Oo = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { stopDown: I }) || this).condition_ = n.condition ? n.condition : oo, r.lastAngle_ = void 0, r.duration_ = void 0 !== n.duration ? n.duration : 250, r } return xo(e, t), e.prototype.handleDragEvent = function(t) { if (go(t)) { var e = t.map,
                            r = e.getView(); if (r.getConstraints().rotation !== Nn) { var n = e.getSize(),
                                i = t.pixel,
                                o = Math.atan2(n[1] / 2 - i[1], i[0] - n[0] / 2); if (void 0 !== this.lastAngle_) { var a = o - this.lastAngle_;
                                r.adjustRotationInternal(-a) }
                            this.lastAngle_ = o } } }, e.prototype.handleUpEvent = function(t) { return !go(t) || (t.map.getView().endInteraction(this.duration_), !1) }, e.prototype.handleDownEvent = function(t) { return !!go(t) && (!(!uo(t) || !this.condition_(t)) && (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0)) }, e }(Eo),
            Ro = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Co = function(t) {
                function e(e) { var r = t.call(this) || this; return r.geometry_ = null, r.element_ = document.createElement("div"), r.element_.style.position = "absolute", r.element_.className = "ol-box " + e, r.map_ = null, r.startPixel_ = null, r.endPixel_ = null, r } return Ro(e, t), e.prototype.disposeInternal = function() { this.setMap(null) }, e.prototype.render_ = function() { var t = this.startPixel_,
                        e = this.endPixel_,
                        r = this.element_.style;
                    r.left = Math.min(t[0], e[0]) + "px", r.top = Math.min(t[1], e[1]) + "px", r.width = Math.abs(e[0] - t[0]) + "px", r.height = Math.abs(e[1] - t[1]) + "px" }, e.prototype.setMap = function(t) { if (this.map_) { this.map_.getOverlayContainer().removeChild(this.element_); var e = this.element_.style;
                        e.left = e.top = e.width = e.height = "inherit" }
                    this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_) }, e.prototype.setPixels = function(t, e) { this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_() }, e.prototype.createOrUpdateGeometry = function() { var t = this.startPixel_,
                        e = this.endPixel_,
                        r = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_);
                    r[4] = r[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([r]) : this.geometry_ = new Yr([r]) }, e.prototype.getGeometry = function() { return this.geometry_ }, e }(m),
            Po = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Io = "boxstart",
            bo = "boxdrag",
            Lo = "boxend",
            Mo = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.coordinate = r, i.mapBrowserEvent = n, i } return Po(e, t), e }(M),
            Fo = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.box_ = new Co(n.className || "ol-dragbox"), r.minArea_ = void 0 !== n.minArea ? n.minArea : 64, r.onBoxEnd_ = n.onBoxEnd ? n.onBoxEnd : b, r.startPixel_ = null, r.condition_ = n.condition ? n.condition : so, r.boxEndCondition_ = n.boxEndCondition ? n.boxEndCondition : r.defaultBoxEndCondition, r } return Po(e, t), e.prototype.defaultBoxEndCondition = function(t, e, r) { var n = r[0] - e[0],
                        i = r[1] - e[1]; return n * n + i * i >= this.minArea_ }, e.prototype.getGeometry = function() { return this.box_.getGeometry() }, e.prototype.handleDragEvent = function(t) { go(t) && (this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new Mo(bo, t.coordinate, t))) }, e.prototype.handleUpEvent = function(t) { return !go(t) || (this.box_.setMap(null), this.boxEndCondition_(t, this.startPixel_, t.pixel) && (this.onBoxEnd_(t), this.dispatchEvent(new Mo(Lo, t.coordinate, t))), !1) }, e.prototype.handleDownEvent = function(t) { return !!go(t) && (!(!uo(t) || !this.condition_(t)) && (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new Mo(Io, t.coordinate, t)), !0)) }, e }(Eo),
            Ao = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function No() { var t, e, r = this.getMap(),
                n = r.getView(),
                i = r.getSize(),
                o = this.getGeometry().getExtent(); if (this.out_) { var a = n.calculateExtentInternal(i),
                    s = (t = [r.getPixelFromCoordinateInternal(Et(o)), r.getPixelFromCoordinateInternal(Pt(o))], _t(lt(e), t));
                Mt(a, 1 / n.getResolutionForExtentInternal(s, i)), o = a } var u = n.getConstrainedResolution(n.getResolutionForExtentInternal(o, i)),
                l = n.getConstrainedCenter(St(o), u);
            n.animateInternal({ resolution: u, center: l, duration: this.duration_, easing: ri }) } var Go = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n.condition ? n.condition : fo; return (r = t.call(this, { condition: i, className: n.className || "ol-dragzoom", minArea: n.minArea, onBoxEnd: No }) || this).duration_ = void 0 !== n.duration ? n.duration : 200, r.out_ = void 0 !== n.out && n.out, r } return Ao(e, t), e }(Fo),
            Do = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
            jo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function ko(t) { var e = !1; if (t.type == N.KEYDOWN) { var r = t.originalEvent.keyCode; if (this.condition_(t) && (r == Do.DOWN || r == Do.LEFT || r == Do.RIGHT || r == Do.UP)) { var n = t.map.getView(),
                        i = n.getResolution() * this.pixelDelta_,
                        o = 0,
                        a = 0;
                    r == Do.DOWN ? a = -i : r == Do.LEFT ? o = -i : r == Do.RIGHT ? o = i : a = i; var s = [o, a];
                    Hn(s, n.getRotation()),
                        function(t, e, r) { var n = t.getCenterInternal(); if (n) { var i = [n[0] + e[0], n[1] + e[1]];
                                t.animateInternal({ duration: void 0 !== r ? r : 250, easing: ii, center: t.getConstrainedCenter(i) }) } }(n, s, this.duration_), t.preventDefault(), e = !0 } } return !e } var Uo = function(t) {
                function e(e) { var r = t.call(this, { handleEvent: ko }) || this,
                        n = e || {}; return r.defaultCondition_ = function(t) { return po(t) && _o(t) }, r.condition_ = void 0 !== n.condition ? n.condition : r.defaultCondition_, r.duration_ = void 0 !== n.duration ? n.duration : 100, r.pixelDelta_ = void 0 !== n.pixelDelta ? n.pixelDelta : 128, r } return jo(e, t), e }(to),
            Bo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Yo(t) { var e = !1; if (t.type == N.KEYDOWN || t.type == N.KEYPRESS) { var r = t.originalEvent.charCode; if (this.condition_(t) && (r == "+".charCodeAt(0) || r == "-".charCodeAt(0))) { var n = t.map,
                        i = r == "+".charCodeAt(0) ? this.delta_ : -this.delta_;
                    $i(n.getView(), i, void 0, this.duration_), t.preventDefault(), e = !0 } } return !e } var zo = function(t) {
                function e(e) { var r = t.call(this, { handleEvent: Yo }) || this,
                        n = e || {}; return r.condition_ = n.condition ? n.condition : _o, r.delta_ = n.delta ? n.delta : 1, r.duration_ = void 0 !== n.duration ? n.duration : 100, r } return Bo(e, t), e }(to),
            Xo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Vo = "trackpad",
            Wo = "wheel",
            Zo = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).totalDelta_ = 0, r.lastDelta_ = 0, r.maxDelta_ = void 0 !== n.maxDelta ? n.maxDelta : 1, r.duration_ = void 0 !== n.duration ? n.duration : 250, r.timeout_ = void 0 !== n.timeout ? n.timeout : 80, r.useAnchor_ = void 0 === n.useAnchor || n.useAnchor, r.condition_ = n.condition ? n.condition : so, r.lastAnchor_ = null, r.startTime_ = void 0, r.timeoutId_, r.mode_ = void 0, r.trackpadEventGap_ = 400, r.trackpadTimeoutId_, r.trackpadDeltaPerZoom_ = 300, r } return Xo(e, t), e.prototype.endInteraction_ = function() { this.trackpadTimeoutId_ = void 0, this.getMap().getView().endInteraction(void 0, Math.sign(this.lastDelta_), this.lastAnchor_) }, e.prototype.handleEvent = function(t) { if (!this.condition_(t)) return !0; if (t.type !== N.WHEEL) return !0;
                    t.preventDefault(); var e, r = t.map,
                        n = t.originalEvent; if (this.useAnchor_ && (this.lastAnchor_ = t.coordinate), t.type == N.WHEEL && (e = n.deltaY, nn && n.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (e /= sn), n.deltaMode === WheelEvent.DOM_DELTA_LINE && (e *= 40)), 0 === e) return !1;
                    this.lastDelta_ = e; var i = Date.now(); if (void 0 === this.startTime_ && (this.startTime_ = i), (!this.mode_ || i - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(e) < 4 ? Vo : Wo), this.mode_ === Vo) { var o = r.getView(); return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : o.beginInteraction(), this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.trackpadEventGap_), o.adjustZoom(-e / this.trackpadDeltaPerZoom_, this.lastAnchor_), this.startTime_ = i, !1 }
                    this.totalDelta_ += e; var a = Math.max(this.timeout_ - (i - this.startTime_), 0); return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, r), a), !1 }, e.prototype.handleWheelZoom_ = function(t) { var e = t.getView();
                    e.getAnimating() && e.cancelAnimations(), $i(e, -kt(this.totalDelta_, -this.maxDelta_, this.maxDelta_), this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0 }, e.prototype.setMouseAnchor = function(t) { this.useAnchor_ = t, t || (this.lastAnchor_ = null) }, e }(to),
            Ko = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ho = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n; return i.stopDown || (i.stopDown = I), (r = t.call(this, i) || this).anchor_ = null, r.lastAngle_ = void 0, r.rotating_ = !1, r.rotationDelta_ = 0, r.threshold_ = void 0 !== n.threshold ? n.threshold : .3, r.duration_ = void 0 !== n.duration ? n.duration : 250, r } return Ko(e, t), e.prototype.handleDragEvent = function(t) { var e = 0,
                        r = this.targetPointers[0],
                        n = this.targetPointers[1],
                        i = Math.atan2(n.clientY - r.clientY, n.clientX - r.clientX); if (void 0 !== this.lastAngle_) { var o = i - this.lastAngle_;
                        this.rotationDelta_ += o, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = o }
                    this.lastAngle_ = i; var a = t.map,
                        s = a.getView(); if (s.getConstraints().rotation !== Nn) { var u = a.getViewport().getBoundingClientRect(),
                            l = mo(this.targetPointers);
                        l[0] -= u.left, l[1] -= u.top, this.anchor_ = a.getCoordinateFromPixelInternal(l), this.rotating_ && (a.render(), s.adjustRotationInternal(e, this.anchor_)) } }, e.prototype.handleUpEvent = function(t) { return !(this.targetPointers.length < 2) || (t.map.getView().endInteraction(this.duration_), !1) }, e.prototype.handleDownEvent = function(t) { if (this.targetPointers.length >= 2) { var e = t.map; return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0 } return !1 }, e }(Eo),
            qo = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Jo = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n; return i.stopDown || (i.stopDown = I), (r = t.call(this, i) || this).anchor_ = null, r.duration_ = void 0 !== n.duration ? n.duration : 400, r.lastDistance_ = void 0, r.lastScaleDelta_ = 1, r } return qo(e, t), e.prototype.handleDragEvent = function(t) { var e = 1,
                        r = this.targetPointers[0],
                        n = this.targetPointers[1],
                        i = r.clientX - n.clientX,
                        o = r.clientY - n.clientY,
                        a = Math.sqrt(i * i + o * o);
                    void 0 !== this.lastDistance_ && (e = this.lastDistance_ / a), this.lastDistance_ = a; var s = t.map,
                        u = s.getView();
                    1 != e && (this.lastScaleDelta_ = e); var l = s.getViewport().getBoundingClientRect(),
                        h = mo(this.targetPointers);
                    h[0] -= l.left, h[1] -= l.top, this.anchor_ = s.getCoordinateFromPixelInternal(h), s.render(), u.adjustResolutionInternal(e, this.anchor_) }, e.prototype.handleUpEvent = function(t) { if (this.targetPointers.length < 2) { var e = t.map.getView(),
                            r = this.lastScaleDelta_ > 1 ? 1 : -1; return e.endInteraction(this.duration_, r), !1 } return !0 }, e.prototype.handleDownEvent = function(t) { if (this.targetPointers.length >= 2) { var e = t.map; return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0 } return !1 }, e }(Eo);

        function Qo(t) { var e = t || {},
                r = new Z,
                n = new Jr(-.005, .05, 100); return (void 0 === e.altShiftDragRotate || e.altShiftDragRotate) && r.push(new Oo), (void 0 === e.doubleClickZoom || e.doubleClickZoom) && r.push(new no({ delta: e.zoomDelta, duration: e.zoomDuration })), (void 0 === e.dragPan || e.dragPan) && r.push(new wo({ condition: e.onFocusOnly ? ao : void 0, kinetic: n })), (void 0 === e.pinchRotate || e.pinchRotate) && r.push(new Ho), (void 0 === e.pinchZoom || e.pinchZoom) && r.push(new Jo({ duration: e.zoomDuration })), (void 0 === e.keyboard || e.keyboard) && (r.push(new Uo), r.push(new zo({ delta: e.zoomDelta, duration: e.zoomDuration }))), (void 0 === e.mouseWheelZoom || e.mouseWheelZoom) && r.push(new Zo({ condition: e.onFocusOnly ? ao : void 0, duration: e.zoomDuration })), (void 0 === e.shiftDragZoom || e.shiftDragZoom) && r.push(new Go({ duration: e.zoomDuration })), r } var $o = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ta = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e) || this; return o.inversePixelTransform = r, o.frameState = n, o.context = i, o } return $o(e, t), e }(M),
            ea = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
            ra = /^([a-z]*)$/i;

        function na(t) { return "string" == typeof t ? t : sa(t) } var ia = function() { var t = {},
                e = 0; return function(r) { var n; if (t.hasOwnProperty(r)) n = t[r];
                else { if (e >= 1024) { var i = 0; for (var o in t) 0 == (3 & i++) && (delete t[o], --e) }
                    n = function(t) { var e, r, n, i, o;
                        ra.exec(t) && (t = function(t) { var e = document.createElement("div"); if (e.style.color = t, "" !== e.style.color) { document.body.appendChild(e); var r = getComputedStyle(e).color; return document.body.removeChild(e), r } return "" }(t)); if (ea.exec(t)) { var a = t.length - 1,
                                s = void 0;
                            s = a <= 4 ? 1 : 2; var u = 4 === a || 8 === a;
                            e = parseInt(t.substr(1 + 0 * s, s), 16), r = parseInt(t.substr(1 + 1 * s, s), 16), n = parseInt(t.substr(1 + 2 * s, s), 16), i = u ? parseInt(t.substr(1 + 3 * s, s), 16) : 255, 1 == s && (e = (e << 4) + e, r = (r << 4) + r, n = (n << 4) + n, u && (i = (i << 4) + i)), o = [e, r, n, i / 255] } else 0 == t.indexOf("rgba(") ? aa(o = t.slice(5, -1).split(",").map(Number)) : 0 == t.indexOf("rgb(") ? ((o = t.slice(4, -1).split(",").map(Number)).push(1), aa(o)) : K(!1, 14); return o }(r), t[r] = n, ++e } return n } }();

        function oa(t) { return Array.isArray(t) ? t : ia(t) }

        function aa(t) { return t[0] = kt(t[0] + .5 | 0, 0, 255), t[1] = kt(t[1] + .5 | 0, 0, 255), t[2] = kt(t[2] + .5 | 0, 0, 255), t[3] = kt(t[3], 0, 1), t }

        function sa(t) { var e = t[0];
            e != (0 | e) && (e = e + .5 | 0); var r = t[1];
            r != (0 | r) && (r = r + .5 | 0); var n = t[2]; return n != (0 | n) && (n = n + .5 | 0), "rgba(" + e + "," + r + "," + n + "," + (void 0 === t[3] ? 1 : t[3]) + ")" } var ua = function() {
            function t() { this.cache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32 } return t.prototype.clear = function() { this.cache_ = {}, this.cacheSize_ = 0 }, t.prototype.canExpireCache = function() { return this.cacheSize_ > this.maxCacheSize_ }, t.prototype.expire = function() { if (this.canExpireCache()) { var t = 0; for (var e in this.cache_) { var r = this.cache_[e];
                        0 != (3 & t++) || r.hasListener() || (delete this.cache_[e], --this.cacheSize_) } } }, t.prototype.get = function(t, e, r) { var n = la(t, e, r); return n in this.cache_ ? this.cache_[n] : null }, t.prototype.set = function(t, e, r, n) { var i = la(t, e, r);
                this.cache_[i] = n, ++this.cacheSize_ }, t.prototype.setSize = function(t) { this.maxCacheSize_ = t, this.expire() }, t }();

        function la(t, e, r) { return e + ":" + t + ":" + (r ? na(r) : "null") } var ha = new ua;

        function ca(t) { return Array.isArray(t) ? sa(t) : t } var pa, fa = function() {
                function t() {} return t.prototype.drawCustom = function(t, e, r) {}, t.prototype.drawGeometry = function(t) {}, t.prototype.setStyle = function(t) {}, t.prototype.drawCircle = function(t, e) {}, t.prototype.drawFeature = function(t, e) {}, t.prototype.drawGeometryCollection = function(t, e) {}, t.prototype.drawLineString = function(t, e) {}, t.prototype.drawMultiLineString = function(t, e) {}, t.prototype.drawMultiPoint = function(t, e) {}, t.prototype.drawMultiPolygon = function(t, e) {}, t.prototype.drawPoint = function(t, e) {}, t.prototype.drawPolygon = function(t, e) {}, t.prototype.drawText = function(t, e) {}, t.prototype.setFillStrokeStyle = function(t, e) {}, t.prototype.setImageStyle = function(t, e) {}, t.prototype.setTextStyle = function(t, e) {}, t }(),
            da = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            _a = function(t) {
                function e(e) { var r = t.call(this) || this; return r.highWaterMark = void 0 !== e ? e : 2048, r.count_ = 0, r.entries_ = {}, r.oldest_ = null, r.newest_ = null, r } return da(e, t), e.prototype.canExpireCache = function() { return this.getCount() > this.highWaterMark }, e.prototype.clear = function() { this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null, this.dispatchEvent(N.CLEAR) }, e.prototype.containsKey = function(t) { return this.entries_.hasOwnProperty(t) }, e.prototype.forEach = function(t) { for (var e = this.oldest_; e;) t(e.value_, e.key_, this), e = e.newer }, e.prototype.get = function(t, e) { var r = this.entries_[t]; return K(void 0 !== r, 15), r === this.newest_ ? r.value_ : (r === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (r.newer.older = r.older, r.older.newer = r.newer), r.newer = null, r.older = this.newest_, this.newest_.newer = r, this.newest_ = r, r.value_) }, e.prototype.remove = function(t) { var e = this.entries_[t]; return K(void 0 !== e, 15), e === this.newest_ ? (this.newest_ = e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_ }, e.prototype.getCount = function() { return this.count_ }, e.prototype.getKeys = function() { var t, e = new Array(this.count_),
                        r = 0; for (t = this.newest_; t; t = t.older) e[r++] = t.key_; return e }, e.prototype.getValues = function() { var t, e = new Array(this.count_),
                        r = 0; for (t = this.newest_; t; t = t.older) e[r++] = t.value_; return e }, e.prototype.peekLast = function() { return this.oldest_.value_ }, e.prototype.peekLastKey = function() { return this.oldest_.key_ }, e.prototype.peekFirstKey = function() { return this.newest_.key_ }, e.prototype.pop = function() { var t = this.oldest_; return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_ }, e.prototype.replace = function(t, e) { this.get(t), this.entries_[t].value_ = e }, e.prototype.set = function(t, e) { K(!(t in this.entries_), 16); var r = { key_: t, newer: null, older: this.newest_, value_: e };
                    this.newest_ ? this.newest_.newer = r : this.oldest_ = r, this.newest_ = r, this.entries_[t] = r, ++this.count_ }, e.prototype.setSize = function(t) { this.highWaterMark = t }, e }(A),
            ga = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ya = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.consumers = {}, r } return ga(e, t), e.prototype.clear = function() { this.consumers = {}, t.prototype.clear.call(this) }, e.prototype.get = function(e, r) { var n = t.prototype.get.call(this, e),
                        i = o(r); return i in this.consumers || (this.consumers[i] = {}), this.consumers[i][e] = !0, n }, e.prototype.prune = function() { t: for (; this.canExpireCache();) { var t = this.peekLastKey(); for (var e in this.consumers)
                            if (t in this.consumers[e]) break t;
                        var r = this.pop(); for (var e in r.width = r.height = 0, this.consumers) delete this.consumers[e][t] } }, e.prototype.release = function(t) { delete this.consumers[o(t)] }, e }(_a),
            va = [],
            ma = [0, 0, 0, 0],
            Ea = new ya,
            Ta = {},
            Sa = null,
            wa = {},
            xa = function() { var t, e, r = 100,
                    n = Ta,
                    i = "32px ",
                    o = ["monospace", "serif"],
                    a = o.length,
                    s = "wmytzilWMYTZIL@#/&?$%10";

                function u(t, r, n) { for (var u = Oa(), l = !0, h = 0; h < a; ++h) { var c = o[h]; if (u.font = t + " " + r + " " + i + c, e = u.measureText(s).width, n != c) { u.font = t + " " + r + " " + i + n + "," + c; var p = u.measureText(s).width;
                            l = l && p != e } } return !!l }

                function l() { var e = !0; for (var i in n) n[i] < r && (u.apply(this, i.split("\n")) ? (n[i] = r, f(wa), Sa = null, pa = void 0, Ea.getCount() && Ea.clear()) : (++n[i], e = !1));
                    e && (clearInterval(t), t = void 0) } return function(e) { var i = ji(e); if (i)
                        for (var o = i.families, a = 0, s = o.length; a < s; ++a) { var h = o[a],
                                c = i.style + "\n" + i.weight + "\n" + h;
                            c in n || (n[c] = r, u(i.style, i.weight, h) || (n[c] = 0, void 0 === t && (t = setInterval(l, 32)))) } } }();

        function Oa() { return Sa || (Sa = hi(1, 1)), Sa } var Ra, Ca, Pa = (Ca = wa, function(t) { var e = Ca[t]; return null == e && (Ra || ((Ra = document.createElement("div")).innerHTML = "M", Ra.style.margin = Ra.style.padding = "0 !important", Ra.style.position = "absolute !important", Ra.style.left = "-99999px !important"), Ra.style.font = t, document.body.appendChild(Ra), e = Ca[t] = Ra.offsetHeight, document.body.removeChild(Ra)), e });

        function Ia(t, e) { var r = Oa(); return t != pa && (r.font = pa = t), r.measureText(e).width }

        function ba(t, e, r) { return e in r ? r[e] : r[e] = Ia(t, e) }

        function La(t, e, r, n) { 0 !== e && (t.translate(r, n), t.rotate(e), t.translate(-r, -n)) } var Ma = [1, 0, 0, 1, 0, 0];

        function Fa(t, e, r, n, i, o, a, s, u, l, h) { var c;
            1 != r && (c = t.globalAlpha, t.globalAlpha = c * r), e && t.setTransform.apply(t, e), t.drawImage(n, i, o, a, s, u, l, a * h, s * h), 1 != r && (t.globalAlpha = c), e && t.setTransform.apply(t, Ma) } var Aa = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Na = function(t) {
                function e(e, r, n, i, o) { var a = t.call(this) || this; return a.context_ = e, a.pixelRatio_ = r, a.extent_ = n, a.transform_ = i, a.viewRotation_ = o, a.contextFillState_ = null, a.contextStrokeState_ = null, a.contextTextState_ = null, a.fillState_ = null, a.strokeState_ = null, a.image_ = null, a.imageAnchorX_ = 0, a.imageAnchorY_ = 0, a.imageHeight_ = 0, a.imageOpacity_ = 0, a.imageOriginX_ = 0, a.imageOriginY_ = 0, a.imageRotateWithView_ = !1, a.imageRotation_ = 0, a.imageScale_ = 0, a.imageWidth_ = 0, a.text_ = "", a.textOffsetX_ = 0, a.textOffsetY_ = 0, a.textRotateWithView_ = !1, a.textRotation_ = 0, a.textScale_ = 0, a.textFillState_ = null, a.textStrokeState_ = null, a.textState_ = null, a.pixelCoordinates_ = [], a.tmpLocalTransform_ = [1, 0, 0, 1, 0, 0], a } return Aa(e, t), e.prototype.drawImages_ = function(t, e, r, n) { if (this.image_) { var i = Gt(t, e, r, 2, this.transform_, this.pixelCoordinates_),
                            o = this.context_,
                            a = this.tmpLocalTransform_,
                            s = o.globalAlpha;
                        1 != this.imageOpacity_ && (o.globalAlpha = s * this.imageOpacity_); var u = this.imageRotation_;
                        this.imageRotateWithView_ && (u += this.viewRotation_); for (var l = 0, h = i.length; l < h; l += 2) { var c = i[l] - this.imageAnchorX_,
                                p = i[l + 1] - this.imageAnchorY_; if (0 !== u || 1 != this.imageScale_) { var f = c + this.imageAnchorX_,
                                    d = p + this.imageAnchorY_;
                                qe(a, f, d, this.imageScale_, this.imageScale_, u, -f, -d), o.setTransform.apply(o, a) }
                            o.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, c, p, this.imageWidth_, this.imageHeight_) }
                        0 === u && 1 == this.imageScale_ || o.setTransform(1, 0, 0, 1, 0, 0), 1 != this.imageOpacity_ && (o.globalAlpha = s) } }, e.prototype.drawText_ = function(t, e, r, n) { if (this.textState_ && "" !== this.text_) { this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_); var i = Gt(t, e, r, n, this.transform_, this.pixelCoordinates_),
                            o = this.context_,
                            a = this.textRotation_; for (this.textRotateWithView_ && (a += this.viewRotation_); e < r; e += n) { var s = i[e] + this.textOffsetX_,
                                u = i[e + 1] + this.textOffsetY_; if (0 !== a || 1 != this.textScale_) { var l = qe(this.tmpLocalTransform_, s, u, this.textScale_, this.textScale_, a, -s, -u);
                                o.setTransform.apply(o, l) }
                            this.textStrokeState_ && o.strokeText(this.text_, s, u), this.textFillState_ && o.fillText(this.text_, s, u) }
                        0 === a && 1 == this.textScale_ || o.setTransform(1, 0, 0, 1, 0, 0) } }, e.prototype.moveToLineTo_ = function(t, e, r, n, i) { var o = this.context_,
                        a = Gt(t, e, r, n, this.transform_, this.pixelCoordinates_);
                    o.moveTo(a[0], a[1]); var s = a.length;
                    i && (s -= 2); for (var u = 2; u < s; u += 2) o.lineTo(a[u], a[u + 1]); return i && o.closePath(), r }, e.prototype.drawRings_ = function(t, e, r, n) { for (var i = 0, o = r.length; i < o; ++i) e = this.moveToLineTo_(t, e, r[i], n, !0); return e }, e.prototype.drawCircle = function(t) { if (bt(this.extent_, t.getExtent())) { if (this.fillState_ || this.strokeState_) { this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_); var e = function(t, e, r) { var n = t.getFlatCoordinates(); if (n) { var i = t.getStride(); return Gt(n, 0, n.length, i, e, r) } return null }(t, this.transform_, this.pixelCoordinates_),
                                r = e[2] - e[0],
                                n = e[3] - e[1],
                                i = Math.sqrt(r * r + n * n),
                                o = this.context_;
                            o.beginPath(), o.arc(e[0], e[1], i, 0, 2 * Math.PI), this.fillState_ && o.fill(), this.strokeState_ && o.stroke() } "" !== this.text_ && this.drawText_(t.getCenter(), 0, 2, 2) } }, e.prototype.setStyle = function(t) { this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText()) }, e.prototype.drawGeometry = function(t) { switch (t.getType()) {
                        case Nt.POINT:
                            this.drawPoint(t); break;
                        case Nt.LINE_STRING:
                            this.drawLineString(t); break;
                        case Nt.POLYGON:
                            this.drawPolygon(t); break;
                        case Nt.MULTI_POINT:
                            this.drawMultiPoint(t); break;
                        case Nt.MULTI_LINE_STRING:
                            this.drawMultiLineString(t); break;
                        case Nt.MULTI_POLYGON:
                            this.drawMultiPolygon(t); break;
                        case Nt.GEOMETRY_COLLECTION:
                            this.drawGeometryCollection(t); break;
                        case Nt.CIRCLE:
                            this.drawCircle(t) } }, e.prototype.drawFeature = function(t, e) { var r = e.getGeometryFunction()(t);
                    r && bt(this.extent_, r.getExtent()) && (this.setStyle(e), this.drawGeometry(r)) }, e.prototype.drawGeometryCollection = function(t) { for (var e = t.getGeometriesArray(), r = 0, n = e.length; r < n; ++r) this.drawGeometry(e[r]) }, e.prototype.drawPoint = function(t) { var e = t.getFlatCoordinates(),
                        r = t.getStride();
                    this.image_ && this.drawImages_(e, 0, e.length, r), "" !== this.text_ && this.drawText_(e, 0, e.length, r) }, e.prototype.drawMultiPoint = function(t) { var e = t.getFlatCoordinates(),
                        r = t.getStride();
                    this.image_ && this.drawImages_(e, 0, e.length, r), "" !== this.text_ && this.drawText_(e, 0, e.length, r) }, e.prototype.drawLineString = function(t) { if (bt(this.extent_, t.getExtent())) { if (this.strokeState_) { this.setContextStrokeState_(this.strokeState_); var e = this.context_,
                                r = t.getFlatCoordinates();
                            e.beginPath(), this.moveToLineTo_(r, 0, r.length, t.getStride(), !1), e.stroke() } if ("" !== this.text_) { var n = t.getFlatMidpoint();
                            this.drawText_(n, 0, 2, 2) } } }, e.prototype.drawMultiLineString = function(t) { var e = t.getExtent(); if (bt(this.extent_, e)) { if (this.strokeState_) { this.setContextStrokeState_(this.strokeState_); var r = this.context_,
                                n = t.getFlatCoordinates(),
                                i = 0,
                                o = t.getEnds(),
                                a = t.getStride();
                            r.beginPath(); for (var s = 0, u = o.length; s < u; ++s) i = this.moveToLineTo_(n, i, o[s], a, !1);
                            r.stroke() } if ("" !== this.text_) { var l = t.getFlatMidpoints();
                            this.drawText_(l, 0, l.length, 2) } } }, e.prototype.drawPolygon = function(t) { if (bt(this.extent_, t.getExtent())) { if (this.strokeState_ || this.fillState_) { this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_); var e = this.context_;
                            e.beginPath(), this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()), this.fillState_ && e.fill(), this.strokeState_ && e.stroke() } if ("" !== this.text_) { var r = t.getFlatInteriorPoint();
                            this.drawText_(r, 0, 2, 2) } } }, e.prototype.drawMultiPolygon = function(t) { if (bt(this.extent_, t.getExtent())) { if (this.strokeState_ || this.fillState_) { this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_); var e = this.context_,
                                r = t.getOrientedFlatCoordinates(),
                                n = 0,
                                i = t.getEndss(),
                                o = t.getStride();
                            e.beginPath(); for (var a = 0, s = i.length; a < s; ++a) { var u = i[a];
                                n = this.drawRings_(r, n, u, o) }
                            this.fillState_ && e.fill(), this.strokeState_ && e.stroke() } if ("" !== this.text_) { var l = t.getFlatInteriorPoints();
                            this.drawText_(l, 0, l.length, 2) } } }, e.prototype.setContextFillState_ = function(t) { var e = this.context_,
                        r = this.contextFillState_;
                    r ? r.fillStyle != t.fillStyle && (r.fillStyle = e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = { fillStyle: t.fillStyle }) }, e.prototype.setContextStrokeState_ = function(t) { var e = this.context_,
                        r = this.contextStrokeState_;
                    r ? (r.lineCap != t.lineCap && (r.lineCap = e.lineCap = t.lineCap), e.setLineDash && (R(r.lineDash, t.lineDash) || e.setLineDash(r.lineDash = t.lineDash), r.lineDashOffset != t.lineDashOffset && (r.lineDashOffset = e.lineDashOffset = t.lineDashOffset)), r.lineJoin != t.lineJoin && (r.lineJoin = e.lineJoin = t.lineJoin), r.lineWidth != t.lineWidth && (r.lineWidth = e.lineWidth = t.lineWidth), r.miterLimit != t.miterLimit && (r.miterLimit = e.miterLimit = t.miterLimit), r.strokeStyle != t.strokeStyle && (r.strokeStyle = e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = { lineCap: t.lineCap, lineDash: t.lineDash, lineDashOffset: t.lineDashOffset, lineJoin: t.lineJoin, lineWidth: t.lineWidth, miterLimit: t.miterLimit, strokeStyle: t.strokeStyle }) }, e.prototype.setContextTextState_ = function(t) { var e = this.context_,
                        r = this.contextTextState_,
                        n = t.textAlign ? t.textAlign : "center";
                    r ? (r.font != t.font && (r.font = e.font = t.font), r.textAlign != n && (r.textAlign = e.textAlign = n), r.textBaseline != t.textBaseline && (r.textBaseline = e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = n, e.textBaseline = t.textBaseline, this.contextTextState_ = { font: t.font, textAlign: n, textBaseline: t.textBaseline }) }, e.prototype.setFillStrokeStyle = function(t, e) { if (t) { var r = t.getColor();
                        this.fillState_ = { fillStyle: ca(r || "#000") } } else this.fillState_ = null; if (e) { var n = e.getColor(),
                            i = e.getLineCap(),
                            o = e.getLineDash(),
                            a = e.getLineDashOffset(),
                            s = e.getLineJoin(),
                            u = e.getWidth(),
                            l = e.getMiterLimit();
                        this.strokeState_ = { lineCap: void 0 !== i ? i : "round", lineDash: o || va, lineDashOffset: a || 0, lineJoin: void 0 !== s ? s : "round", lineWidth: this.pixelRatio_ * (void 0 !== u ? u : 1), miterLimit: void 0 !== l ? l : 10, strokeStyle: ca(n || "#000") } } else this.strokeState_ = null }, e.prototype.setImageStyle = function(t) { if (t) { var e = t.getAnchor(),
                            r = t.getImage(1),
                            n = t.getOrigin(),
                            i = t.getSize();
                        this.imageAnchorX_ = e[0], this.imageAnchorY_ = e[1], this.imageHeight_ = i[1], this.image_ = r, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = n[0], this.imageOriginY_ = n[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation(), this.imageScale_ = t.getScale() * this.pixelRatio_, this.imageWidth_ = i[0] } else this.image_ = null }, e.prototype.setTextStyle = function(t) { if (t) { var e = t.getFill(); if (e) { var r = e.getColor();
                            this.textFillState_ = { fillStyle: ca(r || "#000") } } else this.textFillState_ = null; var n = t.getStroke(); if (n) { var i = n.getColor(),
                                o = n.getLineCap(),
                                a = n.getLineDash(),
                                s = n.getLineDashOffset(),
                                u = n.getLineJoin(),
                                l = n.getWidth(),
                                h = n.getMiterLimit();
                            this.textStrokeState_ = { lineCap: void 0 !== o ? o : "round", lineDash: a || va, lineDashOffset: s || 0, lineJoin: void 0 !== u ? u : "round", lineWidth: void 0 !== l ? l : 1, miterLimit: void 0 !== h ? h : 10, strokeStyle: ca(i || "#000") } } else this.textStrokeState_ = null; var c = t.getFont(),
                            p = t.getOffsetX(),
                            f = t.getOffsetY(),
                            d = t.getRotateWithView(),
                            _ = t.getRotation(),
                            g = t.getScale(),
                            y = t.getText(),
                            v = t.getTextAlign(),
                            m = t.getTextBaseline();
                        this.textState_ = { font: void 0 !== c ? c : "10px sans-serif", textAlign: void 0 !== v ? v : "center", textBaseline: void 0 !== m ? m : "middle" }, this.text_ = void 0 !== y ? y : "", this.textOffsetX_ = void 0 !== p ? this.pixelRatio_ * p : 0, this.textOffsetY_ = void 0 !== f ? this.pixelRatio_ * f : 0, this.textRotateWithView_ = void 0 !== d && d, this.textRotation_ = void 0 !== _ ? _ : 0, this.textScale_ = this.pixelRatio_ * (void 0 !== g ? g : 1) } else this.text_ = "" }, e }(fa);

        function Ga(t, e) { e && e.clear(); for (var r = t.declutterItems, n = r.length - 1; n >= 0; --n)
                for (var i = r[n], o = i.items, a = 0, s = o.length; a < s; a += 3) e = o[a].renderDeclutter(o[a + 1], o[a + 2], i.opacity, e); return r.length = 0, e } var Da = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function ja(t, e) { ha.expire() } var ka = function(t) {
                function e(e) { var r = t.call(this) || this; return r.map_ = e, r.declutterTree_ = null, r } return Da(e, t), e.prototype.dispatchRenderEvent = function(t, e) { n() }, e.prototype.calculateMatrices2D = function(t) { var e = t.viewState,
                        r = t.coordinateToPixelTransform,
                        n = t.pixelToCoordinateTransform;
                    qe(r, t.size[0] / 2, t.size[1] / 2, 1 / e.resolution, -1 / e.resolution, -e.rotation, -e.center[0], -e.center[1]), Je(n, r) }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i, o, a, s) { var u, l = e.viewState;

                    function h(t, e, r) { return i.call(o, e, t ? r : null) } var c = l.projection,
                        p = t,
                        f = [
                            [0, 0]
                        ]; if (c.canWrapX()) { var d = c.getExtent(),
                            _ = It(d),
                            g = t[0]; if (g < d[0] || g > d[2]) p = [g + _ * Math.ceil((d[0] - g) / _), t[1]];
                        n && f.push([-_, 0], [_, 0]) } var y, v = e.layerStatesArray,
                        m = v.length;
                    this.declutterTree_ && (y = this.declutterTree_.all().map(function(t) { return t.value })); for (var E = [], T = 0; T < f.length; T++)
                        for (var S = m - 1; S >= 0; --S) { var w = v[S],
                                x = w.layer; if (x.hasRenderer() && Ui(w, l) && a.call(s, x)) { var O = x.getRenderer(),
                                    R = x.getSource(),
                                    C = R.getWrapX() ? p : t; if (O && R) { var P = h.bind(null, w.managed);
                                    E[0] = C[0] + f[T][0], E[1] = C[1] + f[T][1], u = O.forEachFeatureAtCoordinate(E, e, r, P, y) } if (u) return u } } }, e.prototype.forEachLayerAtPixel = function(t, e, r, i, o) { return n() }, e.prototype.hasFeatureAtCoordinate = function(t, e, r, n, i, o) { return void 0 !== this.forEachFeatureAtCoordinate(t, e, r, n, P, this, i, o) }, e.prototype.getMap = function() { return this.map_ }, e.prototype.renderFrame = function(t) { this.declutterTree_ = Ga(t, this.declutterTree_) }, e.prototype.scheduleExpireIconCache = function(t) { ha.canExpireCache() && t.postRenderFunctions.push(ja) }, e }(m),
            Ua = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ba = function(t) {
                function e(e) { var r = t.call(this, e) || this;
                    r.labelCacheKey_ = g(Ea, N.CLEAR, e.redrawText.bind(e)), r.element_ = document.createElement("div"); var n = r.element_.style;
                    n.position = "absolute", n.width = "100%", n.height = "100%", n.zIndex = "0", r.element_.className = Ai + " ol-layers"; var i = e.getViewport(); return i.insertBefore(r.element_, i.firstChild || null), r.children_ = [], r.renderedVisible_ = !0, r } return Ua(e, t), e.prototype.dispatchRenderEvent = function(t, e) { var r = this.getMap(); if (r.hasListener(t)) { var n = new ta(t, void 0, e);
                        r.dispatchEvent(n) } }, e.prototype.disposeInternal = function() { v(this.labelCacheKey_), t.prototype.disposeInternal.call(this) }, e.prototype.renderFrame = function(e) { if (e) { this.calculateMatrices2D(e), this.dispatchRenderEvent(Tn, e); var r = e.layerStatesArray.sort(function(t, e) { return t.zIndex - e.zIndex }),
                            n = e.viewState;
                        this.children_.length = 0; for (var i = !1, o = null, a = 0, s = r.length; a < s; ++a) { var u = r[a]; if (i = i || u.hasOverlay, e.layerIndex = a, Ui(u, n) && (u.sourceState == mi.READY || u.sourceState == mi.UNDEFINED)) { var l = u.layer.render(e, o); if (l) { var h = l.childElementCount;
                                    l === o && a != s - 1 || 2 !== h || i || l.removeChild(l.lastElementChild), l !== o && (this.children_.push(l), i = 2 === h, o = l) } } }
                        t.prototype.renderFrame.call(this, e),
                            function(t, e) { for (var r = t.childNodes, n = 0;; ++n) { var i = r[n],
                                        o = e[n]; if (!i && !o) break;
                                    i !== o && (i ? o ? t.insertBefore(o, i) : (t.removeChild(i), --n) : t.appendChild(o)) } }(this.element_, this.children_), this.dispatchRenderEvent(Sn, e), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(e) } else this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1) }, e.prototype.forEachLayerAtPixel = function(t, e, r, n, i) { for (var o = e.viewState, a = e.layerStatesArray, s = a.length - 1; s >= 0; --s) { var u = a[s],
                            l = u.layer; if (l.hasRenderer() && Ui(u, o) && i(l)) { var h = l.getRenderer().getDataAtPixel(t, e, r); if (h) { var c = n(l, h); if (c) return c } } } }, e }(ka),
            Ya = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            za = function(t) {
                function e(e) { return (e = p({}, e)).controls || (e.controls = qi()), e.interactions || (e.interactions = Qo()), t.call(this, e) || this } return Ya(e, t), e.prototype.createRenderer = function() { return new Ba(this) }, e }(Ii),
            Xa = { BOTTOM_LEFT: "bottom-left", BOTTOM_CENTER: "bottom-center", BOTTOM_RIGHT: "bottom-right", CENTER_LEFT: "center-left", CENTER_CENTER: "center-center", CENTER_RIGHT: "center-right", TOP_LEFT: "top-left", TOP_CENTER: "top-center", TOP_RIGHT: "top-right" },
            Va = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Wa = { ELEMENT: "element", MAP: "map", OFFSET: "offset", POSITION: "position", POSITIONING: "positioning" },
            Za = function(t) {
                function e(e) { var r = t.call(this) || this; return r.options = e, r.id = e.id, r.insertFirst = void 0 === e.insertFirst || e.insertFirst, r.stopEvent = void 0 === e.stopEvent || e.stopEvent, r.element = document.createElement("div"), r.element.className = void 0 !== e.className ? e.className : "ol-overlay-container " + Fi, r.element.style.position = "absolute", r.autoPan = void 0 !== e.autoPan && e.autoPan, r.autoPanAnimation = e.autoPanAnimation || {}, r.autoPanMargin = void 0 !== e.autoPanMargin ? e.autoPanMargin : 20, r.rendered = { bottom_: "", left_: "", right_: "", top_: "", visible: !0 }, r.mapPostrenderListenerKey = null, r.addEventListener(Y(Wa.ELEMENT), r.handleElementChanged), r.addEventListener(Y(Wa.MAP), r.handleMapChanged), r.addEventListener(Y(Wa.OFFSET), r.handleOffsetChanged), r.addEventListener(Y(Wa.POSITION), r.handlePositionChanged), r.addEventListener(Y(Wa.POSITIONING), r.handlePositioningChanged), void 0 !== e.element && r.setElement(e.element), r.setOffset(void 0 !== e.offset ? e.offset : [0, 0]), r.setPositioning(void 0 !== e.positioning ? e.positioning : Xa.TOP_LEFT), void 0 !== e.position && r.setPosition(e.position), r } return Va(e, t), e.prototype.getElement = function() { return this.get(Wa.ELEMENT) }, e.prototype.getId = function() { return this.id }, e.prototype.getMap = function() { return this.get(Wa.MAP) }, e.prototype.getOffset = function() { return this.get(Wa.OFFSET) }, e.prototype.getPosition = function() { return this.get(Wa.POSITION) }, e.prototype.getPositioning = function() { return this.get(Wa.POSITIONING) }, e.prototype.handleElementChanged = function() { _i(this.element); var t = this.getElement();
                    t && this.element.appendChild(t) }, e.prototype.handleMapChanged = function() { this.mapPostrenderListenerKey && (di(this.element), v(this.mapPostrenderListenerKey), this.mapPostrenderListenerKey = null); var t = this.getMap(); if (t) { this.mapPostrenderListenerKey = g(t, _n, this.render, this), this.updatePixelPosition(); var e = this.stopEvent ? t.getOverlayContainerStopEvent() : t.getOverlayContainer();
                        this.insertFirst ? e.insertBefore(this.element, e.childNodes[0] || null) : e.appendChild(this.element) } }, e.prototype.render = function() { this.updatePixelPosition() }, e.prototype.handleOffsetChanged = function() { this.updatePixelPosition() }, e.prototype.handlePositionChanged = function() { this.updatePixelPosition(), this.get(Wa.POSITION) && this.autoPan && this.panIntoView() }, e.prototype.handlePositioningChanged = function() { this.updatePixelPosition() }, e.prototype.setElement = function(t) { this.set(Wa.ELEMENT, t) }, e.prototype.setMap = function(t) { this.set(Wa.MAP, t) }, e.prototype.setOffset = function(t) { this.set(Wa.OFFSET, t) }, e.prototype.setPosition = function(t) { this.set(Wa.POSITION, t) }, e.prototype.panIntoView = function() { var t = this.getMap(); if (t && t.getTargetElement()) { var e = this.getRect(t.getTargetElement(), t.getSize()),
                            r = this.getElement(),
                            n = this.getRect(r, [ci(r), pi(r)]),
                            i = this.autoPanMargin; if (!it(e, n)) { var o = n[0] - e[0],
                                a = e[2] - n[2],
                                s = n[1] - e[1],
                                u = e[3] - n[3],
                                l = [0, 0]; if (o < 0 ? l[0] = o - i : a < 0 && (l[0] = Math.abs(a) + i), s < 0 ? l[1] = s - i : u < 0 && (l[1] = Math.abs(u) + i), 0 !== l[0] || 0 !== l[1]) { var h = t.getView().getCenterInternal(),
                                    c = t.getPixelFromCoordinateInternal(h),
                                    p = [c[0] + l[0], c[1] + l[1]];
                                t.getView().animateInternal({ center: t.getCoordinateFromPixelInternal(p), duration: this.autoPanAnimation.duration, easing: this.autoPanAnimation.easing }) } } } }, e.prototype.getRect = function(t, e) { var r = t.getBoundingClientRect(),
                        n = r.left + window.pageXOffset,
                        i = r.top + window.pageYOffset; return [n, i, n + e[0], i + e[1]] }, e.prototype.setPositioning = function(t) { this.set(Wa.POSITIONING, t) }, e.prototype.setVisible = function(t) { this.rendered.visible !== t && (this.element.style.display = t ? "" : "none", this.rendered.visible = t) }, e.prototype.updatePixelPosition = function() { var t = this.getMap(),
                        e = this.getPosition(); if (t && t.isRendered() && e) { var r = t.getPixelFromCoordinate(e),
                            n = t.getSize();
                        this.updateRenderedPosition(r, n) } else this.setVisible(!1) }, e.prototype.updateRenderedPosition = function(t, e) { var r = this.element.style,
                        n = this.getOffset(),
                        i = this.getPositioning();
                    this.setVisible(!0); var o = n[0],
                        a = n[1]; if (i == Xa.BOTTOM_RIGHT || i == Xa.CENTER_RIGHT || i == Xa.TOP_RIGHT) { "" !== this.rendered.left_ && (this.rendered.left_ = r.left = ""); var s = Math.round(e[0] - t[0] - o) + "px";
                        this.rendered.right_ != s && (this.rendered.right_ = r.right = s) } else { "" !== this.rendered.right_ && (this.rendered.right_ = r.right = ""), i != Xa.BOTTOM_CENTER && i != Xa.CENTER_CENTER && i != Xa.TOP_CENTER || (o -= this.element.offsetWidth / 2); var u = Math.round(t[0] + o) + "px";
                        this.rendered.left_ != u && (this.rendered.left_ = r.left = u) } if (i == Xa.BOTTOM_LEFT || i == Xa.BOTTOM_CENTER || i == Xa.BOTTOM_RIGHT) { "" !== this.rendered.top_ && (this.rendered.top_ = r.top = ""); var l = Math.round(e[1] - t[1] - a) + "px";
                        this.rendered.bottom_ != l && (this.rendered.bottom_ = r.bottom = l) } else { "" !== this.rendered.bottom_ && (this.rendered.bottom_ = r.bottom = ""), i != Xa.CENTER_LEFT && i != Xa.CENTER_CENTER && i != Xa.CENTER_RIGHT || (a -= this.element.offsetHeight / 2); var h = Math.round(t[1] + a) + "px";
                        this.rendered.top_ != h && (this.rendered.top_ = r.top = h) } }, e.prototype.getOptions = function() { return this.options }, e }(z),
            Ka = { ARRAY_BUFFER: "arraybuffer", JSON: "json", TEXT: "text", XML: "xml" },
            Ha = !1;

        function qa(t, e, r, n) { return function(i, o, a) { var s = new XMLHttpRequest;
                s.open("GET", "function" == typeof t ? t(i, o, a) : t, !0), e.getType() == Ka.ARRAY_BUFFER && (s.responseType = "arraybuffer"), s.withCredentials = Ha, s.onload = function(t) { if (!s.status || s.status >= 200 && s.status < 300) { var o = e.getType(),
                            u = void 0;
                        o == Ka.JSON || o == Ka.TEXT ? u = s.responseText : o == Ka.XML ? (u = s.responseXML) || (u = (new DOMParser).parseFromString(s.responseText, "application/xml")) : o == Ka.ARRAY_BUFFER && (u = s.response), u ? r.call(this, e.readFeatures(u, { extent: i, featureProjection: a }), e.readProjection(u)) : n.call(this) } else n.call(this) }.bind(this), s.onerror = function() { n.call(this) }.bind(this), s.send() } }

        function Ja(t, e) { return qa(t, e, function(t, e) { "function" == typeof this.addFeatures && this.addFeatures(t) }, b) }

        function Qa(t, e) { return [
                [-1 / 0, -1 / 0, 1 / 0, 1 / 0]
            ] }

        function $a(t, e) { return [t] } var ts = function() {
            function t(t, e, r, n) { this.minX = t, this.maxX = e, this.minY = r, this.maxY = n } return t.prototype.contains = function(t) { return this.containsXY(t[1], t[2]) }, t.prototype.containsTileRange = function(t) { return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY }, t.prototype.containsXY = function(t, e) { return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY }, t.prototype.equals = function(t) { return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY }, t.prototype.extend = function(t) { t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY) }, t.prototype.getHeight = function() { return this.maxY - this.minY + 1 }, t.prototype.getSize = function() { return [this.getWidth(), this.getHeight()] }, t.prototype.getWidth = function() { return this.maxX - this.minX + 1 }, t.prototype.intersects = function(t) { return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY }, t }();

        function es(t, e, r, n, i) { return void 0 !== i ? (i.minX = t, i.maxX = e, i.minY = r, i.maxY = n, i) : new ts(t, e, r, n) } var rs = ts;

        function ns(t, e, r, n) { return void 0 !== n ? (n[0] = t, n[1] = e, n[2] = r, n) : [t, e, r] }

        function is(t, e, r) { return t + "/" + e + "/" + r }

        function os(t) { return is(t[0], t[1], t[2]) }

        function as(t) { return (t[1] << t[0]) + t[2] } var ss = [0, 0, 0],
            us = function() {
                function t(t) { var e, r, n, i; if (this.minZoom = void 0 !== t.minZoom ? t.minZoom : 0, this.resolutions_ = t.resolutions, K((e = this.resolutions_, r = !0, n = function(t, e) { return e - t } || E, e.every(function(t, i) { if (0 === i) return !0; var o = n(e[i - 1], t); return !(o > 0 || r && 0 === o) })), 17), !t.origins)
                        for (var o = 0, a = this.resolutions_.length - 1; o < a; ++o)
                            if (i) { if (this.resolutions_[o] / this.resolutions_[o + 1] !== i) { i = void 0; break } } else i = this.resolutions_[o] / this.resolutions_[o + 1];
                    this.zoomFactor_ = i, this.maxZoom = this.resolutions_.length - 1, this.origin_ = void 0 !== t.origin ? t.origin : null, this.origins_ = null, void 0 !== t.origins && (this.origins_ = t.origins, K(this.origins_.length == this.resolutions_.length, 20)); var s = t.extent;
                    void 0 === s || this.origin_ || this.origins_ || (this.origin_ = Ct(s)), K(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, 18), this.tileSizes_ = null, void 0 !== t.tileSizes && (this.tileSizes_ = t.tileSizes, K(this.tileSizes_.length == this.resolutions_.length, 19)), this.tileSize_ = void 0 !== t.tileSize ? t.tileSize : this.tileSizes_ ? null : In, K(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, 22), this.extent_ = void 0 !== s ? s : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], void 0 !== t.sizes ? this.fullTileRanges_ = t.sizes.map(function(t, e) { return new rs(Math.min(0, t[0]), Math.max(t[0] - 1, -1), Math.min(0, t[1]), Math.max(t[1] - 1, -1)) }, this) : s && this.calculateTileRanges_(s) } return t.prototype.forEachTileCoord = function(t, e, r) { for (var n = this.getTileRangeForExtentAndZ(t, e), i = n.minX, o = n.maxX; i <= o; ++i)
                        for (var a = n.minY, s = n.maxY; a <= s; ++a) r([e, i, a]) }, t.prototype.forEachTileCoordParentTileRange = function(t, e, r, n) { var i, o, a = null,
                        s = t[0] - 1; for (2 === this.zoomFactor_ ? (i = t[1], o = t[2]) : a = this.getTileCoordExtent(t, n); s >= this.minZoom;) { if (e(s, 2 === this.zoomFactor_ ? es(i = Math.floor(i / 2), i, o = Math.floor(o / 2), o, r) : this.getTileRangeForExtentAndZ(a, s, r))) return !0;--s } return !1 }, t.prototype.getExtent = function() { return this.extent_ }, t.prototype.getMaxZoom = function() { return this.maxZoom }, t.prototype.getMinZoom = function() { return this.minZoom }, t.prototype.getOrigin = function(t) { return this.origin_ ? this.origin_ : this.origins_[t] }, t.prototype.getResolution = function(t) { return this.resolutions_[t] }, t.prototype.getResolutions = function() { return this.resolutions_ }, t.prototype.getTileCoordChildTileRange = function(t, e, r) { if (t[0] < this.maxZoom) { if (2 === this.zoomFactor_) { var n = 2 * t[1],
                                i = 2 * t[2]; return es(n, n + 1, i, i + 1, e) } var o = this.getTileCoordExtent(t, r); return this.getTileRangeForExtentAndZ(o, t[0] + 1, e) } return null }, t.prototype.getTileRangeExtent = function(t, e, r) { var n = this.getOrigin(t),
                        i = this.getResolution(t),
                        o = Oi(this.getTileSize(t), this.tmpSize_),
                        a = n[0] + e.minX * o[0] * i,
                        s = n[0] + (e.maxX + 1) * o[0] * i; return ut(a, n[1] + e.minY * o[1] * i, s, n[1] + (e.maxY + 1) * o[1] * i, r) }, t.prototype.getTileRangeForExtentAndZ = function(t, e, r) { var n = ss;
                    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, n); var i = n[1],
                        o = n[2]; return this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, n), es(i, n[1], o, n[2], r) }, t.prototype.getTileCoordCenter = function(t) { var e = this.getOrigin(t[0]),
                        r = this.getResolution(t[0]),
                        n = Oi(this.getTileSize(t[0]), this.tmpSize_); return [e[0] + (t[1] + .5) * n[0] * r, e[1] - (t[2] + .5) * n[1] * r] }, t.prototype.getTileCoordExtent = function(t, e) { var r = this.getOrigin(t[0]),
                        n = this.getResolution(t[0]),
                        i = Oi(this.getTileSize(t[0]), this.tmpSize_),
                        o = r[0] + t[1] * i[0] * n,
                        a = r[1] - (t[2] + 1) * i[1] * n; return ut(o, a, o + i[0] * n, a + i[1] * n, e) }, t.prototype.getTileCoordForCoordAndResolution = function(t, e, r) { return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, r) }, t.prototype.getTileCoordForXYAndResolution_ = function(t, e, r, n, i) { var o = this.getZForResolution(r),
                        a = r / this.getResolution(o),
                        s = this.getOrigin(o),
                        u = Oi(this.getTileSize(o), this.tmpSize_),
                        l = n ? .5 : 0,
                        h = n ? .5 : 0,
                        c = Math.floor((t - s[0]) / r + l),
                        p = Math.floor((s[1] - e) / r + h),
                        f = a * c / u[0],
                        d = a * p / u[1]; return n ? (f = Math.ceil(f) - 1, d = Math.ceil(d) - 1) : (f = Math.floor(f), d = Math.floor(d)), ns(o, f, d, i) }, t.prototype.getTileCoordForXYAndZ_ = function(t, e, r, n, i) { var o = this.getOrigin(r),
                        a = this.getResolution(r),
                        s = Oi(this.getTileSize(r), this.tmpSize_),
                        u = n ? .5 : 0,
                        l = n ? .5 : 0,
                        h = Math.floor((t - o[0]) / a + u),
                        c = Math.floor((o[1] - e) / a + l),
                        p = h / s[0],
                        f = c / s[1]; return n ? (p = Math.ceil(p) - 1, f = Math.ceil(f) - 1) : (p = Math.floor(p), f = Math.floor(f)), ns(r, p, f, i) }, t.prototype.getTileCoordForCoordAndZ = function(t, e, r) { return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, r) }, t.prototype.getTileCoordResolution = function(t) { return this.resolutions_[t[0]] }, t.prototype.getTileSize = function(t) { return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t] }, t.prototype.getFullTileRange = function(t) { return this.fullTileRanges_ ? this.fullTileRanges_[t] : null }, t.prototype.getZForResolution = function(t, e) { return kt(S(this.resolutions_, t, e || 0), this.minZoom, this.maxZoom) }, t.prototype.calculateTileRanges_ = function(t) { for (var e = this.resolutions_.length, r = new Array(e), n = this.minZoom; n < e; ++n) r[n] = this.getTileRangeForExtentAndZ(t, n);
                    this.fullTileRanges_ = r }, t }();

        function ls(t) { var e = t.getDefaultTileGrid(); return e || (e = ps(t), t.setDefaultTileGrid(e)), e }

        function hs(t) { var e = t || {},
                r = e.extent || we("EPSG:3857").getExtent(),
                n = { extent: r, minZoom: e.minZoom, tileSize: e.tileSize, resolutions: cs(r, e.maxZoom, e.tileSize) }; return new us(n) }

        function cs(t, e, r) { for (var n = void 0 !== e ? e : Pn, i = Ot(t), o = It(t), a = Oi(void 0 !== r ? r : In), s = Math.max(o / a[0], i / a[1]), u = n + 1, l = new Array(u), h = 0; h < u; ++h) l[h] = s / Math.pow(2, h); return l }

        function ps(t, e, r, n) { return function(t, e, r, n) { var i = void 0 !== n ? n : J.TOP_LEFT,
                    o = cs(t, e, r); return new us({ extent: t, origin: wt(t, i), resolutions: o, tileSize: r }) }(fs(t), e, r, n) }

        function fs(t) { var e = (t = we(t)).getExtent(); if (!e) { var r = 180 * $t[te.DEGREES] / t.getMetersPerUnit();
                e = ut(-r, -r, r, r) } return e } var ds, _s = 34962,
            gs = 34963,
            ys = 35048,
            vs = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

        function ms(t, e) { for (var r = vs.length, n = 0; n < r; ++n) try { var i = t.getContext(vs[n], e); if (i) return i } catch (t) {}
            return null } var Es = document.implementation.createDocument("", "", null),
            Ts = "http://www.w3.org/2001/XMLSchema-instance";

        function Ss(t, e) { return Es.createElementNS(t, e) }

        function ws(t, e) { return function t(e, r, n) { if (e.nodeType == Node.CDATA_SECTION_NODE || e.nodeType == Node.TEXT_NODE) r ? n.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : n.push(e.nodeValue);
                else { var i = void 0; for (i = e.firstChild; i; i = i.nextSibling) t(i, r, n) } return n }(t, e, []).join("") }

        function xs(t) { return "documentElement" in t }

        function Os(t) { return (new DOMParser).parseFromString(t, "application/xml") }

        function Rs(t, e) { return function(r, n) { var i = t.call(void 0 !== e ? e : this, r, n);
                void 0 !== i && x(n[n.length - 1], i) } }

        function Cs(t, e) { return function(r, n) { var i = t.call(void 0 !== e ? e : this, r, n);
                void 0 !== i && n[n.length - 1].push(i) } }

        function Ps(t, e) { return function(r, n) { var i = t.call(void 0 !== e ? e : this, r, n);
                void 0 !== i && (n[n.length - 1] = i) } }

        function Is(t, e, r) { return function(n, i) { var o = t.call(void 0 !== r ? r : this, n, i); if (void 0 !== o) { var a = i[i.length - 1],
                        s = void 0 !== e ? e : n.localName;
                    (s in a ? a[s] : a[s] = []).push(o) } } }

        function bs(t, e, r) { return function(n, i) { var o = t.call(void 0 !== r ? r : this, n, i);
                void 0 !== o && (i[i.length - 1][void 0 !== e ? e : n.localName] = o) } }

        function Ls(t, e) { return function(r, n, i) { t.call(void 0 !== e ? e : this, r, n, i), i[i.length - 1].node.appendChild(r) } }

        function Ms(t, e) { var r, n; return function(e, i, o) { if (void 0 === r) { r = {}; var a = {};
                    a[e.localName] = t, r[e.namespaceURI] = a, n = Fs(e.localName) }
                ks(r, n, i, o) } }

        function Fs(t, e) { var r = t; return function(t, n, i) { var o = n[n.length - 1].node,
                    a = r; return void 0 === a && (a = i), Ss(void 0 !== e ? e : o.namespaceURI, a) } } var As = Fs();

        function Ns(t, e) { for (var r = e.length, n = new Array(r), i = 0; i < r; ++i) n[i] = t[e[i]]; return n }

        function Gs(t, e, r) { var n, i, o = void 0 !== r ? r : {}; for (n = 0, i = t.length; n < i; ++n) o[t[n]] = e; return o }

        function Ds(t, e, r, n) { var i; for (i = e.firstElementChild; i; i = i.nextElementSibling) { var o = t[i.namespaceURI]; if (void 0 !== o) { var a = o[i.localName];
                    void 0 !== a && a.call(n, i, r) } } }

        function js(t, e, r, n, i) { return n.push(t), Ds(e, r, n, i), n.pop() }

        function ks(t, e, r, n, i, o) { for (var a, s, u = (void 0 !== i ? i : r).length, l = 0; l < u; ++l) void 0 !== (a = r[l]) && void 0 !== (s = e.call(void 0 !== o ? o : this, a, n, void 0 !== i ? i[l] : void 0)) && t[s.namespaceURI][s.localName].call(o, s, a, n) }

        function Us(t, e, r, n, i, o, a) { return i.push(t), ks(e, r, n, i, o, a), i.pop() } var Bs = { STATIC_DRAW: 35044, STREAM_DRAW: 35040, DYNAMIC_DRAW: ys };

        function Ys(t) { switch (t) {
                case _s:
                    return Float32Array;
                case gs:
                    return Uint32Array;
                default:
                    return Float32Array } } var zs = function() {
                function t(t, e) { this.array = null, this.type = t, K(t === _s || t === gs, 62), this.usage = void 0 !== e ? e : Bs.STATIC_DRAW } return t.prototype.ofSize = function(t) { this.array = new(Ys(this.type))(t) }, t.prototype.fromArray = function(t) { this.array = Ys(this.type).from(t) }, t.prototype.fromArrayBuffer = function(t) { this.array = new(Ys(this.type))(t) }, t.prototype.getType = function() { return this.type }, t.prototype.getArray = function() { return this.array }, t.prototype.getUsage = function() { return this.usage }, t.prototype.getSize = function() { return this.array ? this.array.length : 0 }, t }(),
            Xs = { LOST: "webglcontextlost", RESTORED: "webglcontextrestored" };

        function Vs(t, e) { return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t } var Ws = "\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n",
            Zs = "\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n   \n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord);\n  }\n",
            Ks = function() {
                function t(t) { this.gl_ = t.webGlContext; var e = this.gl_;
                    this.scaleRatio_ = t.scaleRatio || 1, this.renderTargetTexture_ = e.createTexture(), this.renderTargetTextureSize_ = null, this.frameBuffer_ = e.createFramebuffer(); var r = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(r, t.vertexShader || Ws), e.compileShader(r); var n = e.createShader(e.FRAGMENT_SHADER);
                    e.shaderSource(n, t.fragmentShader || Zs), e.compileShader(n), this.renderTargetProgram_ = e.createProgram(), e.attachShader(this.renderTargetProgram_, r), e.attachShader(this.renderTargetProgram_, n), e.linkProgram(this.renderTargetProgram_), this.renderTargetVerticesBuffer_ = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), e.STATIC_DRAW), this.renderTargetAttribLocation_ = e.getAttribLocation(this.renderTargetProgram_, "a_position"), this.renderTargetUniformLocation_ = e.getUniformLocation(this.renderTargetProgram_, "u_screenSize"), this.renderTargetTextureLocation_ = e.getUniformLocation(this.renderTargetProgram_, "u_image"), this.uniforms_ = [], t.uniforms && Object.keys(t.uniforms).forEach(function(r) { this.uniforms_.push({ value: t.uniforms[r], location: e.getUniformLocation(this.renderTargetProgram_, r) }) }.bind(this)) } return t.prototype.getGL = function() { return this.gl_ }, t.prototype.init = function(t) { var e = this.getGL(),
                        r = e.canvas,
                        n = t.size; if (e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer()), e.viewport(0, 0, r.width * this.scaleRatio_, r.height * this.scaleRatio_), !this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== n[0] || this.renderTargetTextureSize_[1] !== n[1]) { this.renderTargetTextureSize_ = n; var i = e.RGBA,
                            o = e.RGBA,
                            a = e.UNSIGNED_BYTE;
                        e.bindTexture(e.TEXTURE_2D, this.renderTargetTexture_), e.texImage2D(e.TEXTURE_2D, 0, i, r.width * this.scaleRatio_, r.height * this.scaleRatio_, 0, o, a, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.renderTargetTexture_, 0) } }, t.prototype.apply = function(t, e) { var r = this.getGL(),
                        n = r.canvas;
                    r.bindFramebuffer(r.FRAMEBUFFER, e ? e.getFrameBuffer() : null), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, this.renderTargetTexture_), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.enable(r.BLEND), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA), r.viewport(0, 0, n.width, n.height), r.bindBuffer(r.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), r.useProgram(this.renderTargetProgram_), r.enableVertexAttribArray(this.renderTargetAttribLocation_), r.vertexAttribPointer(this.renderTargetAttribLocation_, 2, r.FLOAT, !1, 0, 0), r.uniform2f(this.renderTargetUniformLocation_, n.width, n.height), r.uniform1i(this.renderTargetTextureLocation_, 0), this.applyUniforms(t), r.drawArrays(r.TRIANGLES, 0, 6) }, t.prototype.getFrameBuffer = function() { return this.frameBuffer_ }, t.prototype.applyUniforms = function(t) { var e, r = this.getGL(),
                        n = 1;
                    this.uniforms_.forEach(function(i) { if ((e = "function" == typeof i.value ? i.value(t) : i.value) instanceof HTMLCanvasElement || e instanceof ImageData) i.texture || (i.texture = r.createTexture()), r.activeTexture(r["TEXTURE" + n]), r.bindTexture(r.TEXTURE_2D, i.texture), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), e instanceof ImageData ? r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, e.width, e.height, 0, r.UNSIGNED_BYTE, new Uint8Array(e.data)) : r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e), r.uniform1i(i.location, n++);
                        else if (Array.isArray(e)) switch (e.length) {
                            case 2:
                                return void r.uniform2f(i.location, e[0], e[1]);
                            case 3:
                                return void r.uniform3f(i.location, e[0], e[1], e[2]);
                            case 4:
                                return void r.uniform4f(i.location, e[0], e[1], e[2], e[3]);
                            default:
                                return } else "number" == typeof e && r.uniform1f(i.location, e) }) }, t }(),
            Hs = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            qs = { PROJECTION_MATRIX: "u_projectionMatrix", OFFSET_SCALE_MATRIX: "u_offsetScaleMatrix", OFFSET_ROTATION_MATRIX: "u_offsetRotateMatrix" },
            Js = { UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123, UNSIGNED_INT: 5125, FLOAT: 5126 };

        function Qs(t) { for (var e = 0, r = 0; r < t.length; r++) { var n = t[r];
                e += n.size * $s(n.type) } return e }

        function $s(t) { switch (t) {
                case Js.UNSIGNED_BYTE:
                    return Uint8Array.BYTES_PER_ELEMENT;
                case Js.UNSIGNED_SHORT:
                    return Uint16Array.BYTES_PER_ELEMENT;
                case Js.UNSIGNED_INT:
                    return Uint32Array.BYTES_PER_ELEMENT;
                case Js.FLOAT:
                default:
                    return Float32Array.BYTES_PER_ELEMENT } } var tu = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {};
                    r.boundHandleWebGLContextLost_ = r.handleWebGLContextLost.bind(r), r.boundHandleWebGLContextRestored_ = r.handleWebGLContextRestored.bind(r), r.canvas_ = document.createElement("canvas"), r.canvas_.style.position = "absolute", r.gl_ = ms(r.canvas_); var i = r.getGL(); if (r.bufferCache_ = {}, r.shaderCache_ = [], r.programCache_ = [], r.currentProgram_ = null, K(T(function() { if (!ds) { var t = ms(document.createElement("canvas"));
                                t && (ds = t.getSupportedExtensions()) } return ds }(), "OES_element_index_uint"), 63), i.getExtension("OES_element_index_uint"), r.canvas_.addEventListener(Xs.LOST, r.boundHandleWebGLContextLost_), r.canvas_.addEventListener(Xs.RESTORED, r.boundHandleWebGLContextRestored_), r.offsetRotateMatrix_ = [1, 0, 0, 1, 0, 0], r.offsetScaleMatrix_ = [1, 0, 0, 1, 0, 0], r.tmpMat4_ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.uniformLocations_ = {}, r.attribLocations_ = {}, r.uniforms_ = [], n.uniforms)
                        for (var o in n.uniforms) r.uniforms_.push({ name: o, value: n.uniforms[o] }); return r.postProcessPasses_ = n.postProcesses ? n.postProcesses.map(function(t) { return new Ks({ webGlContext: i, scaleRatio: t.scaleRatio, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader, uniforms: t.uniforms }) }) : [new Ks({ webGlContext: i })], r.shaderCompileErrors_ = null, r } return Hs(e, t), e.prototype.bindBuffer = function(t) { var e = this.getGL(),
                        r = o(t),
                        n = this.bufferCache_[r]; if (!n) { var i = e.createBuffer();
                        n = this.bufferCache_[r] = { buffer: t, webGlBuffer: i } }
                    e.bindBuffer(t.getType(), n.webGlBuffer) }, e.prototype.flushBufferData = function(t) { var e = this.getGL();
                    this.bindBuffer(t), e.bufferData(t.getType(), t.getArray(), t.getUsage()) }, e.prototype.deleteBuffer = function(t) { var e = this.getGL(),
                        r = o(t),
                        n = this.bufferCache_[r];
                    e.isContextLost() || e.deleteBuffer(n.buffer), delete this.bufferCache_[r] }, e.prototype.disposeInternal = function() { this.canvas_.removeEventListener(Xs.LOST, this.boundHandleWebGLContextLost_), this.canvas_.removeEventListener(Xs.RESTORED, this.boundHandleWebGLContextRestored_); var t = this.getGL(); if (!t.isContextLost()) { for (var e in this.bufferCache_) t.deleteBuffer(this.bufferCache_[e].buffer); for (var e in this.programCache_) t.deleteProgram(this.programCache_[e]); for (var e in this.shaderCache_) t.deleteShader(this.shaderCache_[e]) } }, e.prototype.prepareDraw = function(t) { var e = this.getGL(),
                        r = this.getCanvas(),
                        n = t.size,
                        i = t.pixelRatio;
                    r.width = n[0] * i, r.height = n[1] * i, r.style.width = n[0] + "px", r.style.height = n[1] + "px", e.useProgram(this.currentProgram_); for (var o = this.postProcessPasses_.length - 1; o >= 0; o--) this.postProcessPasses_[o].init(t);
                    e.bindTexture(e.TEXTURE_2D, null), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.useProgram(this.currentProgram_), this.applyFrameState(t), this.applyUniforms(t) }, e.prototype.prepareDrawToRenderTarget = function(t, e, r) { var n = this.getGL();
                    n.bindFramebuffer(n.FRAMEBUFFER, e.getFramebuffer()), n.viewport(0, 0, t.size[0], t.size[1]), n.bindTexture(n.TEXTURE_2D, e.getTexture()), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.enable(n.BLEND), n.blendFunc(n.ONE, r ? n.ZERO : n.ONE_MINUS_SRC_ALPHA), n.useProgram(this.currentProgram_), this.applyFrameState(t), this.applyUniforms(t) }, e.prototype.drawElements = function(t, e) { var r = this.getGL(),
                        n = r.UNSIGNED_INT,
                        i = e - t,
                        o = 4 * t;
                    r.drawElements(r.TRIANGLES, i, n, o) }, e.prototype.finalizeDraw = function(t) { for (var e = 0; e < this.postProcessPasses_.length; e++) this.postProcessPasses_[e].apply(t, this.postProcessPasses_[e + 1] || null) }, e.prototype.getCanvas = function() { return this.canvas_ }, e.prototype.getGL = function() { return this.gl_ }, e.prototype.applyFrameState = function(t) { var e = t.size,
                        r = t.viewState.rotation,
                        n = Xe(this.offsetScaleMatrix_);
                    Ke(n, 2 / e[0], 2 / e[1]); var i, o, a, s, u = Xe(this.offsetRotateMatrix_);
                    0 !== r && (i = u, o = -r, a = Math.cos(o), s = Math.sin(o), Ve(i, We(ze, a, s, -s, a, 0, 0))), this.setUniformMatrixValue(qs.OFFSET_SCALE_MATRIX, Vs(this.tmpMat4_, n)), this.setUniformMatrixValue(qs.OFFSET_ROTATION_MATRIX, Vs(this.tmpMat4_, u)) }, e.prototype.applyUniforms = function(t) { var e, r = this.getGL(),
                        n = 0;
                    this.uniforms_.forEach(function(i) { if ((e = "function" == typeof i.value ? i.value(t) : i.value) instanceof HTMLCanvasElement || e instanceof HTMLImageElement || e instanceof ImageData) i.texture || (i.texture = r.createTexture()), r.activeTexture(r["TEXTURE" + n]), r.bindTexture(r.TEXTURE_2D, i.texture), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (!(e instanceof HTMLImageElement) || e.complete) && r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e), r.uniform1i(this.getUniformLocation(i.name), n++);
                        else if (Array.isArray(e) && 6 === e.length) this.setUniformMatrixValue(i.name, Vs(this.tmpMat4_, e));
                        else if (Array.isArray(e) && e.length <= 4) switch (e.length) {
                            case 2:
                                return void r.uniform2f(this.getUniformLocation(i.name), e[0], e[1]);
                            case 3:
                                return void r.uniform3f(this.getUniformLocation(i.name), e[0], e[1], e[2]);
                            case 4:
                                return void r.uniform4f(this.getUniformLocation(i.name), e[0], e[1], e[2], e[3]);
                            default:
                                return } else "number" == typeof e && r.uniform1f(this.getUniformLocation(i.name), e) }.bind(this)) }, e.prototype.useProgram = function(t) { return t != this.currentProgram_ && (this.getGL().useProgram(t), this.currentProgram_ = t, this.uniformLocations_ = {}, this.attribLocations_ = {}, !0) }, e.prototype.compileShader = function(t, e) { var r = this.getGL(),
                        n = r.createShader(e); return r.shaderSource(n, t), r.compileShader(n), this.shaderCache_.push(n), n }, e.prototype.getProgram = function(t, e) { var r = this.getGL(),
                        n = this.compileShader(t, r.FRAGMENT_SHADER),
                        i = this.compileShader(e, r.VERTEX_SHADER);
                    this.shaderCompileErrors_ = null, r.getShaderInfoLog(n) && (this.shaderCompileErrors_ = "Fragment shader compilation failed:\n" + r.getShaderInfoLog(n)), r.getShaderInfoLog(i) && (this.shaderCompileErrors_ = (this.shaderCompileErrors_ || "") + "Vertex shader compilation failed:\n" + r.getShaderInfoLog(i)); var o = r.createProgram(); return r.attachShader(o, n), r.attachShader(o, i), r.linkProgram(o), this.programCache_.push(o), o }, e.prototype.getShaderCompileErrors = function() { return this.shaderCompileErrors_ }, e.prototype.getUniformLocation = function(t) { return void 0 === this.uniformLocations_[t] && (this.uniformLocations_[t] = this.getGL().getUniformLocation(this.currentProgram_, t)), this.uniformLocations_[t] }, e.prototype.getAttributeLocation = function(t) { return void 0 === this.attribLocations_[t] && (this.attribLocations_[t] = this.getGL().getAttribLocation(this.currentProgram_, t)), this.attribLocations_[t] }, e.prototype.makeProjectionTransform = function(t, e) { var r = t.size,
                        n = t.viewState.rotation,
                        i = t.viewState.resolution,
                        o = t.viewState.center; return Xe(e), qe(e, 0, 0, 2 / (i * r[0]), 2 / (i * r[1]), -n, -o[0], -o[1]), e }, e.prototype.setUniformFloatValue = function(t, e) { this.getGL().uniform1f(this.getUniformLocation(t), e) }, e.prototype.setUniformMatrixValue = function(t, e) { this.getGL().uniformMatrix4fv(this.getUniformLocation(t), !1, e) }, e.prototype.enableAttributeArray_ = function(t, e, r, n, i) { var o = this.getAttributeLocation(t);
                    o < 0 || (this.getGL().enableVertexAttribArray(o), this.getGL().vertexAttribPointer(o, e, r, !1, n, i)) }, e.prototype.enableAttributes = function(t) { for (var e = Qs(t), r = 0, n = 0; n < t.length; n++) { var i = t[n];
                        this.enableAttributeArray_(i.name, i.size, i.type || 5126, e, r), r += i.size * $s(i.type) } }, e.prototype.handleWebGLContextLost = function() { f(this.bufferCache_), f(this.shaderCache_), f(this.programCache_), this.currentProgram_ = null }, e.prototype.handleWebGLContextRestored = function() {}, e.prototype.createTexture = function(t, e, r) { var n = this.getGL(),
                        i = r || n.createTexture(),
                        o = n.RGBA,
                        a = n.RGBA,
                        s = n.UNSIGNED_BYTE; return n.bindTexture(n.TEXTURE_2D, i), e ? n.texImage2D(n.TEXTURE_2D, 0, o, a, s, e) : n.texImage2D(n.TEXTURE_2D, 0, o, t[0], t[1], 0, a, s, null), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), i }, e }(m),
            eu = new Uint8Array(4),
            ru = function() {
                function t(t, e) { this.helper_ = t; var r = t.getGL();
                    this.texture_ = r.createTexture(), this.framebuffer_ = r.createFramebuffer(), this.size_ = e || [1, 1], this.data_ = new Uint8Array(0), this.dataCacheDirty_ = !0, this.updateSize_() } return t.prototype.setSize = function(t) { R(t, this.size_) || (this.size_[0] = t[0], this.size_[1] = t[1], this.updateSize_()) }, t.prototype.getSize = function() { return this.size_ }, t.prototype.clearCachedData = function() { this.dataCacheDirty_ = !0 }, t.prototype.readAll = function() { if (this.dataCacheDirty_) { var t = this.size_,
                            e = this.helper_.getGL();
                        e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.readPixels(0, 0, t[0], t[1], e.RGBA, e.UNSIGNED_BYTE, this.data_), this.dataCacheDirty_ = !1 } return this.data_ }, t.prototype.readPixel = function(t, e) { this.readAll(); var r = Math.floor(t) + (this.size_[1] - Math.floor(e) - 1) * this.size_[0]; return eu[0] = this.data_[4 * r], eu[1] = this.data_[4 * r + 1], eu[2] = this.data_[4 * r + 2], eu[3] = this.data_[4 * r + 3], eu }, t.prototype.getTexture = function() { return this.texture_ }, t.prototype.getFramebuffer = function() { return this.framebuffer_ }, t.prototype.updateSize_ = function() { var t = this.size_,
                        e = this.helper_.getGL();
                    this.texture_ = this.helper_.createTexture(t, null, this.texture_), e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.viewport(0, 0, t[0], t[1]), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture_, 0), this.data_ = new Uint8Array(t[0] * t[1] * 4) }, t }(),
            nu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            iu = function(t) {
                function e(e) { var r = t.call(this, { extent: e.extent, origin: e.origin, origins: e.origins, resolutions: e.resolutions, tileSize: e.tileSize, tileSizes: e.tileSizes, sizes: e.sizes }) || this; return r.matrixIds_ = e.matrixIds, r } return nu(e, t), e.prototype.getMatrixId = function(t) { return this.matrixIds_[t] }, e.prototype.getMatrixIds = function() { return this.matrixIds_ }, e }(us),
            ou = iu;

        function au(t, e, r) { var n = [],
                i = [],
                o = [],
                a = [],
                s = [],
                u = void 0 !== r ? r : [],
                l = t.SupportedCRS,
                h = we(l.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || we(l),
                c = h.getMetersPerUnit(),
                p = "ne" == h.getAxisOrientation().substr(0, 2); return t.TileMatrix.sort(function(t, e) { return e.ScaleDenominator - t.ScaleDenominator }), t.TileMatrix.forEach(function(e) { if (!(u.length > 0) || O(u, function(r) { return e.Identifier == r.TileMatrix || -1 === e.Identifier.indexOf(":") && t.Identifier + ":" + e.Identifier === r.TileMatrix })) { i.push(e.Identifier); var r = 28e-5 * e.ScaleDenominator / c,
                        l = e.TileWidth,
                        h = e.TileHeight;
                    p ? o.push([e.TopLeftCorner[1], e.TopLeftCorner[0]]) : o.push(e.TopLeftCorner), n.push(r), a.push(l == h ? l : [l, h]), s.push([e.MatrixWidth, e.MatrixHeight]) } }), new iu({ extent: e, origins: o, resolutions: n, matrixIds: i, tileSizes: a, sizes: s }) } var su = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 },
            uu = function() {
                function t(t) { this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale } return t.prototype.clone = function() { return new t({ opacity: this.getOpacity(), scale: this.getScale(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView() }) }, t.prototype.getOpacity = function() { return this.opacity_ }, t.prototype.getRotateWithView = function() { return this.rotateWithView_ }, t.prototype.getRotation = function() { return this.rotation_ }, t.prototype.getScale = function() { return this.scale_ }, t.prototype.getAnchor = function() { return n() }, t.prototype.getImage = function(t) { return n() }, t.prototype.getHitDetectionImage = function(t) { return n() }, t.prototype.getImageState = function() { return n() }, t.prototype.getImageSize = function() { return n() }, t.prototype.getHitDetectionImageSize = function() { return n() }, t.prototype.getOrigin = function() { return n() }, t.prototype.getSize = function() { return n() }, t.prototype.setOpacity = function(t) { this.opacity_ = t }, t.prototype.setRotateWithView = function(t) { this.rotateWithView_ = t }, t.prototype.setRotation = function(t) { this.rotation_ = t }, t.prototype.setScale = function(t) { this.scale_ = t }, t.prototype.listenImageChange = function(t) { n() }, t.prototype.load = function() { n() }, t.prototype.unlistenImageChange = function(t) { n() }, t }(),
            lu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            hu = function(t) {
                function e(e) { var r = this,
                        n = void 0 !== e.rotateWithView && e.rotateWithView; return (r = t.call(this, { opacity: 1, rotateWithView: n, rotation: void 0 !== e.rotation ? e.rotation : 0, scale: 1 }) || this).canvas_ = null, r.hitDetectionCanvas_ = null, r.fill_ = void 0 !== e.fill ? e.fill : null, r.origin_ = [0, 0], r.points_ = e.points, r.radius_ = void 0 !== e.radius ? e.radius : e.radius1, r.radius2_ = e.radius2, r.angle_ = void 0 !== e.angle ? e.angle : 0, r.stroke_ = void 0 !== e.stroke ? e.stroke : null, r.anchor_ = null, r.size_ = null, r.imageSize_ = null, r.hitDetectionImageSize_ = null, r.render(), r } return lu(e, t), e.prototype.clone = function() { var t = new e({ fill: this.getFill() ? this.getFill().clone() : void 0, points: this.getPoints(), radius: this.getRadius(), radius2: this.getRadius2(), angle: this.getAngle(), stroke: this.getStroke() ? this.getStroke().clone() : void 0, rotation: this.getRotation(), rotateWithView: this.getRotateWithView() }); return t.setOpacity(this.getOpacity()), t.setScale(this.getScale()), t }, e.prototype.getAnchor = function() { return this.anchor_ }, e.prototype.getAngle = function() { return this.angle_ }, e.prototype.getFill = function() { return this.fill_ }, e.prototype.getHitDetectionImage = function(t) { return this.hitDetectionCanvas_ }, e.prototype.getImage = function(t) { return this.canvas_ }, e.prototype.getImageSize = function() { return this.imageSize_ }, e.prototype.getHitDetectionImageSize = function() { return this.hitDetectionImageSize_ }, e.prototype.getImageState = function() { return su.LOADED }, e.prototype.getOrigin = function() { return this.origin_ }, e.prototype.getPoints = function() { return this.points_ }, e.prototype.getRadius = function() { return this.radius_ }, e.prototype.getRadius2 = function() { return this.radius2_ }, e.prototype.getSize = function() { return this.size_ }, e.prototype.getStroke = function() { return this.stroke_ }, e.prototype.listenImageChange = function(t) {}, e.prototype.load = function() {}, e.prototype.unlistenImageChange = function(t) {}, e.prototype.render = function() { var t, e = "round",
                        r = "round",
                        n = 0,
                        i = null,
                        o = 0,
                        a = 0;
                    this.stroke_ && (null === (t = this.stroke_.getColor()) && (t = "#000"), t = ca(t), void 0 === (a = this.stroke_.getWidth()) && (a = 1), i = this.stroke_.getLineDash(), o = this.stroke_.getLineDashOffset(), void 0 === (r = this.stroke_.getLineJoin()) && (r = "round"), void 0 === (e = this.stroke_.getLineCap()) && (e = "round"), void 0 === (n = this.stroke_.getMiterLimit()) && (n = 10)); var s = 2 * (this.radius_ + a) + 1,
                        u = { strokeStyle: t, strokeWidth: a, size: s, lineCap: e, lineDash: i, lineDashOffset: o, lineJoin: r, miterLimit: n },
                        l = hi(s, s);
                    this.canvas_ = l.canvas; var h = s = this.canvas_.width;
                    this.draw_(u, l, 0, 0), this.createHitDetectionCanvas_(u), this.anchor_ = [s / 2, s / 2], this.size_ = [s, s], this.imageSize_ = [h, h] }, e.prototype.draw_ = function(t, e, r, n) { var i, o, a;
                    e.setTransform(1, 0, 0, 1, 0, 0), e.translate(r, n), e.beginPath(); var s = this.points_; if (s === 1 / 0) e.arc(t.size / 2, t.size / 2, this.radius_, 0, 2 * Math.PI, !0);
                    else { var u = void 0 !== this.radius2_ ? this.radius2_ : this.radius_; for (u !== this.radius_ && (s *= 2), i = 0; i <= s; i++) o = 2 * i * Math.PI / s - Math.PI / 2 + this.angle_, a = i % 2 == 0 ? this.radius_ : u, e.lineTo(t.size / 2 + a * Math.cos(o), t.size / 2 + a * Math.sin(o)) } if (this.fill_) { var l = this.fill_.getColor();
                        null === l && (l = "#000"), e.fillStyle = ca(l), e.fill() }
                    this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, e.setLineDash && t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke()), e.closePath() }, e.prototype.createHitDetectionCanvas_ = function(t) { if (this.hitDetectionImageSize_ = [t.size, t.size], this.hitDetectionCanvas_ = this.canvas_, this.fill_) { var e = this.fill_.getColor(),
                            r = 0; if ("string" == typeof e && (e = oa(e)), null === e ? r = 1 : Array.isArray(e) && (r = 4 === e.length ? e[3] : 1), 0 === r) { var n = hi(t.size, t.size);
                            this.hitDetectionCanvas_ = n.canvas, this.drawHitDetectionCanvas_(t, n, 0, 0) } } }, e.prototype.drawHitDetectionCanvas_ = function(t, e, r, n) { e.setTransform(1, 0, 0, 1, 0, 0), e.translate(r, n), e.beginPath(); var i = this.points_; if (i === 1 / 0) e.arc(t.size / 2, t.size / 2, this.radius_, 0, 2 * Math.PI, !0);
                    else { var o = void 0 !== this.radius2_ ? this.radius2_ : this.radius_;
                        o !== this.radius_ && (i *= 2); var a = void 0,
                            s = void 0,
                            u = void 0; for (a = 0; a <= i; a++) u = 2 * a * Math.PI / i - Math.PI / 2 + this.angle_, s = a % 2 == 0 ? this.radius_ : o, e.lineTo(t.size / 2 + s * Math.cos(u), t.size / 2 + s * Math.sin(u)) }
                    e.fillStyle = "#000", e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.stroke()), e.closePath() }, e }(uu),
            cu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            pu = function(t) {
                function e(e) { var r = e || {}; return t.call(this, { points: 1 / 0, fill: r.fill, radius: r.radius, stroke: r.stroke }) || this } return cu(e, t), e.prototype.clone = function() { var t = new e({ fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, radius: this.getRadius() }); return t.setOpacity(this.getOpacity()), t.setScale(this.getScale()), t }, e.prototype.setRadius = function(t) { this.radius_ = t, this.render() }, e }(hu),
            fu = function() {
                function t(t) { var e = t || {};
                    this.color_ = void 0 !== e.color ? e.color : null } return t.prototype.clone = function() { var e = this.getColor(); return new t({ color: Array.isArray(e) ? e.slice() : e || void 0 }) }, t.prototype.getColor = function() { return this.color_ }, t.prototype.setColor = function(t) { this.color_ = t }, t }(),
            du = { FRACTION: "fraction", PIXELS: "pixels" },
            _u = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            gu = function(t) {
                function e(e, r, n, i) { var o = t.call(this) || this; return o.extent = e, o.pixelRatio_ = n, o.resolution = r, o.state = i, o } return _u(e, t), e.prototype.changed = function() { this.dispatchEvent(N.CHANGE) }, e.prototype.getExtent = function() { return this.extent }, e.prototype.getImage = function() { return n() }, e.prototype.getPixelRatio = function() { return this.pixelRatio_ }, e.prototype.getResolution = function() { return this.resolution }, e.prototype.getState = function() { return this.state }, e.prototype.load = function() { n() }, e }(A),
            yu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function vu(t, e, r) { var n = t; if (n.src && un) { var i = n.decode(),
                    o = !0; return i.then(function() { o && e() }).catch(function(t) { o && ("EncodingError" === t.name && "Invalid image type." === t.message ? e() : r()) }),
                    function() { o = !1 } } var a = [y(n, N.LOAD, e), y(n, N.ERROR, r)]; return function() { a.forEach(v) } } var mu = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, e, r, n, su.IDLE) || this; return s.src_ = i, s.image_ = new Image, null !== o && (s.image_.crossOrigin = o), s.unlisten_ = null, s.state = su.IDLE, s.imageLoadFunction_ = a, s } return yu(e, t), e.prototype.getImage = function() { return this.image_ }, e.prototype.handleImageError_ = function() { this.state = su.ERROR, this.unlistenImage_(), this.changed() }, e.prototype.handleImageLoad_ = function() { void 0 === this.resolution && (this.resolution = Ot(this.extent) / this.image_.height), this.state = su.LOADED, this.unlistenImage_(), this.changed() }, e.prototype.load = function() { this.state != su.IDLE && this.state != su.ERROR || (this.state = su.LOADING, this.changed(), this.imageLoadFunction_(this, this.src_), this.unlisten_ = vu(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))) }, e.prototype.setImage = function(t) { this.image_ = t }, e.prototype.unlistenImage_ = function() { this.unlisten_ && (this.unlisten_(), this.unlisten_ = null) }, e }(gu),
            Eu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Tu = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this) || this; return s.hitDetectionImage_ = null, s.image_ = e || new Image, null !== i && (s.image_.crossOrigin = i), s.canvas_ = a ? document.createElement("canvas") : null, s.color_ = a, s.unlisten_ = null, s.imageState_ = o, s.size_ = n, s.src_ = r, s.tainted_, s } return Eu(e, t), e.prototype.isTainted_ = function() { if (void 0 === this.tainted_ && this.imageState_ === su.LOADED) { this.tainted_ = !1; var t = hi(1, 1); try { t.drawImage(this.image_, 0, 0), t.getImageData(0, 0, 1, 1) } catch (t) { this.tainted_ = !0 } } return !0 === this.tainted_ }, e.prototype.dispatchChangeEvent_ = function() { this.dispatchEvent(N.CHANGE) }, e.prototype.handleImageError_ = function() { this.imageState_ = su.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_() }, e.prototype.handleImageLoad_ = function() { this.imageState_ = su.LOADED, this.size_ && (this.image_.width = this.size_[0], this.image_.height = this.size_[1]), this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.replaceColor_(), this.dispatchChangeEvent_() }, e.prototype.getImage = function(t) { return this.canvas_ ? this.canvas_ : this.image_ }, e.prototype.getImageState = function() { return this.imageState_ }, e.prototype.getHitDetectionImage = function(t) { if (!this.hitDetectionImage_)
                        if (this.isTainted_()) { var e = this.size_[0],
                                r = this.size_[1],
                                n = hi(e, r);
                            n.fillRect(0, 0, e, r), this.hitDetectionImage_ = n.canvas } else this.hitDetectionImage_ = this.image_;
                    return this.hitDetectionImage_ }, e.prototype.getSize = function() { return this.size_ }, e.prototype.getSrc = function() { return this.src_ }, e.prototype.load = function() { if (this.imageState_ == su.IDLE) { this.imageState_ = su.LOADING; try { this.image_.src = this.src_ } catch (t) { this.handleImageError_() }
                        this.unlisten_ = vu(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this)) } }, e.prototype.replaceColor_ = function() { if (this.color_ && !this.isTainted_()) { this.canvas_.width = this.image_.width, this.canvas_.height = this.image_.height; var t = this.canvas_.getContext("2d");
                        t.drawImage(this.image_, 0, 0); for (var e = t.getImageData(0, 0, this.image_.width, this.image_.height), r = e.data, n = this.color_[0] / 255, i = this.color_[1] / 255, o = this.color_[2] / 255, a = 0, s = r.length; a < s; a += 4) r[a] *= n, r[a + 1] *= i, r[a + 2] *= o;
                        t.putImageData(e, 0, 0) } }, e.prototype.unlistenImage_ = function() { this.unlisten_ && (this.unlisten_(), this.unlisten_ = null) }, e }(A); var Su = { BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", TOP_LEFT: "top-left", TOP_RIGHT: "top-right" },
            wu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            xu = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = void 0 !== n.opacity ? n.opacity : 1,
                        a = void 0 !== n.rotation ? n.rotation : 0,
                        s = void 0 !== n.scale ? n.scale : 1,
                        u = void 0 !== n.rotateWithView && n.rotateWithView;
                    (r = t.call(this, { opacity: i, rotation: a, scale: s, rotateWithView: u }) || this).anchor_ = void 0 !== n.anchor ? n.anchor : [.5, .5], r.normalizedAnchor_ = null, r.anchorOrigin_ = void 0 !== n.anchorOrigin ? n.anchorOrigin : Su.TOP_LEFT, r.anchorXUnits_ = void 0 !== n.anchorXUnits ? n.anchorXUnits : du.FRACTION, r.anchorYUnits_ = void 0 !== n.anchorYUnits ? n.anchorYUnits : du.FRACTION, r.crossOrigin_ = void 0 !== n.crossOrigin ? n.crossOrigin : null; var l = void 0 !== n.img ? n.img : null,
                        h = void 0 !== n.imgSize ? n.imgSize : null,
                        c = n.src;
                    K(!(void 0 !== c && l), 4), K(!l || l && h, 5), void 0 !== c && 0 !== c.length || !l || (c = l.src || o(l)), K(void 0 !== c && c.length > 0, 6); var p = void 0 !== n.src ? su.IDLE : su.LOADED; return r.color_ = void 0 !== n.color ? oa(n.color) : null, r.iconImage_ = function(t, e, r, n, i, o) { var a = ha.get(e, n, o); return a || (a = new Tu(t, e, r, n, i, o), ha.set(e, n, o, a)), a }(l, c, h, r.crossOrigin_, p, r.color_), r.offset_ = void 0 !== n.offset ? n.offset : [0, 0], r.offsetOrigin_ = void 0 !== n.offsetOrigin ? n.offsetOrigin : Su.TOP_LEFT, r.origin_ = null, r.size_ = void 0 !== n.size ? n.size : null, r } return wu(e, t), e.prototype.clone = function() { return new e({ anchor: this.anchor_.slice(), anchorOrigin: this.anchorOrigin_, anchorXUnits: this.anchorXUnits_, anchorYUnits: this.anchorYUnits_, crossOrigin: this.crossOrigin_, color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0, src: this.getSrc(), offset: this.offset_.slice(), offsetOrigin: this.offsetOrigin_, size: null !== this.size_ ? this.size_.slice() : void 0, opacity: this.getOpacity(), scale: this.getScale(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView() }) }, e.prototype.getAnchor = function() { if (this.normalizedAnchor_) return this.normalizedAnchor_; var t = this.anchor_,
                        e = this.getSize(); if (this.anchorXUnits_ == du.FRACTION || this.anchorYUnits_ == du.FRACTION) { if (!e) return null;
                        t = this.anchor_.slice(), this.anchorXUnits_ == du.FRACTION && (t[0] *= e[0]), this.anchorYUnits_ == du.FRACTION && (t[1] *= e[1]) } if (this.anchorOrigin_ != Su.TOP_LEFT) { if (!e) return null;
                        t === this.anchor_ && (t = this.anchor_.slice()), this.anchorOrigin_ != Su.TOP_RIGHT && this.anchorOrigin_ != Su.BOTTOM_RIGHT || (t[0] = -t[0] + e[0]), this.anchorOrigin_ != Su.BOTTOM_LEFT && this.anchorOrigin_ != Su.BOTTOM_RIGHT || (t[1] = -t[1] + e[1]) } return this.normalizedAnchor_ = t, this.normalizedAnchor_ }, e.prototype.setAnchor = function(t) { this.anchor_ = t, this.normalizedAnchor_ = null }, e.prototype.getColor = function() { return this.color_ }, e.prototype.getImage = function(t) { return this.iconImage_.getImage(t) }, e.prototype.getImageSize = function() { return this.iconImage_.getSize() }, e.prototype.getHitDetectionImageSize = function() { return this.getImageSize() }, e.prototype.getImageState = function() { return this.iconImage_.getImageState() }, e.prototype.getHitDetectionImage = function(t) { return this.iconImage_.getHitDetectionImage(t) }, e.prototype.getOrigin = function() { if (this.origin_) return this.origin_; var t = this.offset_; if (this.offsetOrigin_ != Su.TOP_LEFT) { var e = this.getSize(),
                            r = this.iconImage_.getSize(); if (!e || !r) return null;
                        t = t.slice(), this.offsetOrigin_ != Su.TOP_RIGHT && this.offsetOrigin_ != Su.BOTTOM_RIGHT || (t[0] = r[0] - e[0] - t[0]), this.offsetOrigin_ != Su.BOTTOM_LEFT && this.offsetOrigin_ != Su.BOTTOM_RIGHT || (t[1] = r[1] - e[1] - t[1]) } return this.origin_ = t, this.origin_ }, e.prototype.getSrc = function() { return this.iconImage_.getSrc() }, e.prototype.getSize = function() { return this.size_ ? this.size_ : this.iconImage_.getSize() }, e.prototype.listenImageChange = function(t) { this.iconImage_.addEventListener(N.CHANGE, t) }, e.prototype.load = function() { this.iconImage_.load() }, e.prototype.unlistenImageChange = function(t) { this.iconImage_.removeEventListener(N.CHANGE, t) }, e }(uu),
            Ou = function() {
                function t(t) { var e = t || {};
                    this.color_ = void 0 !== e.color ? e.color : null, this.lineCap_ = e.lineCap, this.lineDash_ = void 0 !== e.lineDash ? e.lineDash : null, this.lineDashOffset_ = e.lineDashOffset, this.lineJoin_ = e.lineJoin, this.miterLimit_ = e.miterLimit, this.width_ = e.width } return t.prototype.clone = function() { var e = this.getColor(); return new t({ color: Array.isArray(e) ? e.slice() : e || void 0, lineCap: this.getLineCap(), lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0, lineDashOffset: this.getLineDashOffset(), lineJoin: this.getLineJoin(), miterLimit: this.getMiterLimit(), width: this.getWidth() }) }, t.prototype.getColor = function() { return this.color_ }, t.prototype.getLineCap = function() { return this.lineCap_ }, t.prototype.getLineDash = function() { return this.lineDash_ }, t.prototype.getLineDashOffset = function() { return this.lineDashOffset_ }, t.prototype.getLineJoin = function() { return this.lineJoin_ }, t.prototype.getMiterLimit = function() { return this.miterLimit_ }, t.prototype.getWidth = function() { return this.width_ }, t.prototype.setColor = function(t) { this.color_ = t }, t.prototype.setLineCap = function(t) { this.lineCap_ = t }, t.prototype.setLineDash = function(t) { this.lineDash_ = t }, t.prototype.setLineDashOffset = function(t) { this.lineDashOffset_ = t }, t.prototype.setLineJoin = function(t) { this.lineJoin_ = t }, t.prototype.setMiterLimit = function(t) { this.miterLimit_ = t }, t.prototype.setWidth = function(t) { this.width_ = t }, t }(),
            Ru = function() {
                function t(t) { var e = t || {};
                    this.geometry_ = null, this.geometryFunction_ = bu, void 0 !== e.geometry && this.setGeometry(e.geometry), this.fill_ = void 0 !== e.fill ? e.fill : null, this.image_ = void 0 !== e.image ? e.image : null, this.renderer_ = void 0 !== e.renderer ? e.renderer : null, this.stroke_ = void 0 !== e.stroke ? e.stroke : null, this.text_ = void 0 !== e.text ? e.text : null, this.zIndex_ = e.zIndex } return t.prototype.clone = function() { var e = this.getGeometry(); return e && "object" == typeof e && (e = e.clone()), new t({ geometry: e, fill: this.getFill() ? this.getFill().clone() : void 0, image: this.getImage() ? this.getImage().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, text: this.getText() ? this.getText().clone() : void 0, zIndex: this.getZIndex() }) }, t.prototype.getRenderer = function() { return this.renderer_ }, t.prototype.setRenderer = function(t) { this.renderer_ = t }, t.prototype.getGeometry = function() { return this.geometry_ }, t.prototype.getGeometryFunction = function() { return this.geometryFunction_ }, t.prototype.getFill = function() { return this.fill_ }, t.prototype.setFill = function(t) { this.fill_ = t }, t.prototype.getImage = function() { return this.image_ }, t.prototype.setImage = function(t) { this.image_ = t }, t.prototype.getStroke = function() { return this.stroke_ }, t.prototype.setStroke = function(t) { this.stroke_ = t }, t.prototype.getText = function() { return this.text_ }, t.prototype.setText = function(t) { this.text_ = t }, t.prototype.getZIndex = function() { return this.zIndex_ }, t.prototype.setGeometry = function(t) { "function" == typeof t ? this.geometryFunction_ = t : "string" == typeof t ? this.geometryFunction_ = function(e) { return e.get(t) } : t ? void 0 !== t && (this.geometryFunction_ = function() { return t }) : this.geometryFunction_ = bu, this.geometry_ = t }, t.prototype.setZIndex = function(t) { this.zIndex_ = t }, t }(); var Cu = null;

        function Pu(t, e) { if (!Cu) { var r = new fu({ color: "rgba(255,255,255,0.4)" }),
                    n = new Ou({ color: "#3399CC", width: 1.25 });
                Cu = [new Ru({ image: new pu({ fill: r, stroke: n, radius: 5 }), fill: r, stroke: n })] } return Cu }

        function Iu() { var t = {},
                e = [255, 255, 255, 1],
                r = [0, 153, 255, 1]; return t[Nt.POLYGON] = [new Ru({ fill: new fu({ color: [255, 255, 255, .5] }) })], t[Nt.MULTI_POLYGON] = t[Nt.POLYGON], t[Nt.LINE_STRING] = [new Ru({ stroke: new Ou({ color: e, width: 5 }) }), new Ru({ stroke: new Ou({ color: r, width: 3 }) })], t[Nt.MULTI_LINE_STRING] = t[Nt.LINE_STRING], t[Nt.CIRCLE] = t[Nt.POLYGON].concat(t[Nt.LINE_STRING]), t[Nt.POINT] = [new Ru({ image: new pu({ radius: 6, fill: new fu({ color: r }), stroke: new Ou({ color: e, width: 1.5 }) }), zIndex: 1 / 0 })], t[Nt.MULTI_POINT] = t[Nt.POINT], t[Nt.GEOMETRY_COLLECTION] = t[Nt.POLYGON].concat(t[Nt.LINE_STRING], t[Nt.POINT]), t }

        function bu(t) { return t.getGeometry() } var Lu = Ru,
            Mu = { POINT: "point", LINE: "line" },
            Fu = "#333",
            Au = function() {
                function t(t) { var e = t || {};
                    this.font_ = e.font, this.rotation_ = e.rotation, this.rotateWithView_ = e.rotateWithView, this.scale_ = e.scale, this.text_ = e.text, this.textAlign_ = e.textAlign, this.textBaseline_ = e.textBaseline, this.fill_ = void 0 !== e.fill ? e.fill : new fu({ color: Fu }), this.maxAngle_ = void 0 !== e.maxAngle ? e.maxAngle : Math.PI / 4, this.placement_ = void 0 !== e.placement ? e.placement : Mu.POINT, this.overflow_ = !!e.overflow, this.stroke_ = void 0 !== e.stroke ? e.stroke : null, this.offsetX_ = void 0 !== e.offsetX ? e.offsetX : 0, this.offsetY_ = void 0 !== e.offsetY ? e.offsetY : 0, this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null, this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null, this.padding_ = void 0 === e.padding ? null : e.padding } return t.prototype.clone = function() { return new t({ font: this.getFont(), placement: this.getPlacement(), maxAngle: this.getMaxAngle(), overflow: this.getOverflow(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: this.getScale(), text: this.getText(), textAlign: this.getTextAlign(), textBaseline: this.getTextBaseline(), fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, offsetX: this.getOffsetX(), offsetY: this.getOffsetY(), backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0, backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0, padding: this.getPadding() }) }, t.prototype.getOverflow = function() { return this.overflow_ }, t.prototype.getFont = function() { return this.font_ }, t.prototype.getMaxAngle = function() { return this.maxAngle_ }, t.prototype.getPlacement = function() { return this.placement_ }, t.prototype.getOffsetX = function() { return this.offsetX_ }, t.prototype.getOffsetY = function() { return this.offsetY_ }, t.prototype.getFill = function() { return this.fill_ }, t.prototype.getRotateWithView = function() { return this.rotateWithView_ }, t.prototype.getRotation = function() { return this.rotation_ }, t.prototype.getScale = function() { return this.scale_ }, t.prototype.getStroke = function() { return this.stroke_ }, t.prototype.getText = function() { return this.text_ }, t.prototype.getTextAlign = function() { return this.textAlign_ }, t.prototype.getTextBaseline = function() { return this.textBaseline_ }, t.prototype.getBackgroundFill = function() { return this.backgroundFill_ }, t.prototype.getBackgroundStroke = function() { return this.backgroundStroke_ }, t.prototype.getPadding = function() { return this.padding_ }, t.prototype.setOverflow = function(t) { this.overflow_ = t }, t.prototype.setFont = function(t) { this.font_ = t }, t.prototype.setMaxAngle = function(t) { this.maxAngle_ = t }, t.prototype.setOffsetX = function(t) { this.offsetX_ = t }, t.prototype.setOffsetY = function(t) { this.offsetY_ = t }, t.prototype.setPlacement = function(t) { this.placement_ = t }, t.prototype.setRotateWithView = function(t) { this.rotateWithView_ = t }, t.prototype.setFill = function(t) { this.fill_ = t }, t.prototype.setRotation = function(t) { this.rotation_ = t }, t.prototype.setScale = function(t) { this.scale_ = t }, t.prototype.setStroke = function(t) { this.stroke_ = t }, t.prototype.setText = function(t) { this.text_ = t }, t.prototype.setTextAlign = function(t) { this.textAlign_ = t }, t.prototype.setTextBaseline = function(t) { this.textBaseline_ = t }, t.prototype.setBackgroundFill = function(t) { this.backgroundFill_ = t }, t.prototype.setBackgroundStroke = function(t) { this.backgroundStroke_ = t }, t.prototype.setPadding = function(t) { this.padding_ = t }, t }();

        function Nu(t, e) { var r = /\{z\}/g,
                n = /\{x\}/g,
                i = /\{y\}/g,
                o = /\{-y\}/g; return function(a, s, u) { return a ? t.replace(r, a[0].toString()).replace(n, a[1].toString()).replace(i, a[2].toString()).replace(o, function() { var t = a[0],
                        r = e.getFullTileRange(t); return K(r, 55), (r.getHeight() - a[2] - 1).toString() }) : void 0 } }

        function Gu(t, e) { for (var r = t.length, n = new Array(r), i = 0; i < r; ++i) n[i] = Nu(t[i], e); return Du(n) }

        function Du(t) { return 1 === t.length ? t[0] : function(e, r, n) { if (e) { var i = Vt(as(e), t.length); return t[i](e, r, n) } } }

        function ju(t, e, r) {}

        function ku(t) { var e = [],
                r = /\{([a-z])-([a-z])\}/.exec(t); if (r) { var n = r[1].charCodeAt(0),
                    i = r[2].charCodeAt(0),
                    o = void 0; for (o = n; o <= i; ++o) e.push(t.replace(r[0], String.fromCharCode(o))); return e } if (r = r = /\{(\d+)-(\d+)\}/.exec(t)) { for (var a = parseInt(r[2], 10), s = parseInt(r[1], 10); s <= a; s++) e.push(t.replace(r[0], s.toString())); return e } return e.push(t), e }

        function Uu(t, e, r, n) { var i = document.createElement("script"),
                a = "olc_" + o(e);

            function s() { delete window[a], i.parentNode.removeChild(i) }
            i.async = !0, i.src = t + (-1 == t.indexOf("?") ? "?" : "&") + (n || "callback") + "=" + a; var u = setTimeout(function() { s(), r && r() }, 1e4);
            window[a] = function(t) { clearTimeout(u), s(), e(t) }, document.getElementsByTagName("head")[0].appendChild(i) } var Bu = .5,
            Yu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            zu = function(t) {
                function e(e, r, n) { var i = t.call(this) || this,
                        o = n || {}; return i.tileCoord = e, i.state = r, i.interimTile = null, i.hifi = !0, i.key = "", i.transition_ = void 0 === o.transition ? 250 : o.transition, i.transitionStarts_ = {}, i } return Yu(e, t), e.prototype.changed = function() { this.dispatchEvent(N.CHANGE) }, e.prototype.getKey = function() { return this.key + "/" + this.tileCoord }, e.prototype.getInterimTile = function() { if (!this.interimTile) return this; var t = this.interimTile;
                    do { if (t.getState() == xn.LOADED) return this.transition_ = 0, t;
                        t = t.interimTile } while (t); return this }, e.prototype.refreshInterimChain = function() { if (this.interimTile) { var t = this.interimTile,
                            e = this;
                        do { if (t.getState() == xn.LOADED) { t.interimTile = null; break }
                            t.getState() == xn.LOADING ? e = t : t.getState() == xn.IDLE ? e.interimTile = t.interimTile : e = t, t = e.interimTile } while (t) } }, e.prototype.getTileCoord = function() { return this.tileCoord }, e.prototype.getState = function() { return this.state }, e.prototype.setState = function(t) { this.state = t, this.changed() }, e.prototype.load = function() { n() }, e.prototype.getAlpha = function(t, e) { if (!this.transition_) return 1; var r = this.transitionStarts_[t]; if (r) { if (-1 === r) return 1 } else r = e, this.transitionStarts_[t] = r; var n = e - r + 1e3 / 60; return n >= this.transition_ ? 1 : ei(n / this.transition_) }, e.prototype.inTransition = function(t) { return !!this.transition_ && -1 !== this.transitionStarts_[t] }, e.prototype.endTransition = function(t) { this.transition_ && (this.transitionStarts_[t] = -1) }, e }(A),
            Xu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Vu() { var t = hi(1, 1); return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), t.canvas } var Wu = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, e, r, a) || this; return s.crossOrigin_ = i, s.src_ = n, s.image_ = new Image, null !== i && (s.image_.crossOrigin = i), s.unlisten_ = null, s.tileLoadFunction_ = o, s } return Xu(e, t), e.prototype.disposeInternal = function() { this.state == xn.LOADING && (this.unlistenImage_(), this.image_ = Vu()), this.interimTile && this.interimTile.dispose(), this.state = xn.ABORT, this.changed(), t.prototype.disposeInternal.call(this) }, e.prototype.getImage = function() { return this.image_ }, e.prototype.getKey = function() { return this.src_ }, e.prototype.handleImageError_ = function() { this.state = xn.ERROR, this.unlistenImage_(), this.image_ = Vu(), this.changed() }, e.prototype.handleImageLoad_ = function() { var t = this.image_;
                    t.naturalWidth && t.naturalHeight ? this.state = xn.LOADED : this.state = xn.EMPTY, this.unlistenImage_(), this.changed() }, e.prototype.load = function() { this.state == xn.ERROR && (this.state = xn.IDLE, this.image_ = new Image, null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_)), this.state == xn.IDLE && (this.state = xn.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = vu(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))) }, e.prototype.unlistenImage_ = function() { this.unlisten_ && (this.unlisten_(), this.unlisten_ = null) }, e }(zu),
            Zu = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ku = function(t) {
                function e(e) { return t.call(this, e) || this } return Zu(e, t), e.prototype.expireCache = function(t) { for (; this.canExpireCache();) { if (this.peekLast().getKey() in t) break;
                        this.pop().dispose() } }, e.prototype.pruneExceptNewestZ = function() { if (0 !== this.getCount()) { var t = function(t) { return t.split("/").map(Number) }(this.peekFirstKey())[0];
                        this.forEach(function(e) { e.tileCoord[0] !== t && (this.remove(os(e.tileCoord)), e.dispose()) }.bind(this)) } }, e }(_a);

        function Hu(t, e, r, n) { var i = Me(r, e, t),
                o = xe(e, n, r),
                a = e.getMetersPerUnit();
            void 0 !== a && (o *= a); var s = t.getMetersPerUnit();
            void 0 !== s && (o /= s); var u = t.getExtent(); if (!u || nt(u, i)) { var l = xe(t, o, i) / o;
                isFinite(l) && l > 0 && (o /= l) } return o }

        function qu(t, e, r, n) { var i = r - t,
                o = n - e,
                a = Math.sqrt(i * i + o * o); return [Math.round(r + i / a), Math.round(n + o / a)] }

        function Ju(t, e, r, n, i, o, a, s, u, l, h) { var c = hi(Math.round(r * t), Math.round(r * e)); if (0 === u.length) return c.canvas;
            c.scale(r, r); var p = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            u.forEach(function(t, e, r) { ft(p, t.extent) }); var f = It(p),
                d = Ot(p),
                _ = hi(Math.round(r * f / n), Math.round(r * d / n)),
                g = r / n;
            u.forEach(function(t, e, r) { var n = t.extent[0] - p[0],
                    i = -(t.extent[3] - p[3]),
                    o = It(t.extent),
                    a = Ot(t.extent);
                _.drawImage(t.image, l, l, t.image.width - 2 * l, t.image.height - 2 * l, n * g, i * g, o * g, a * g) }); var y = Ct(a); return s.getTriangles().forEach(function(t, e, i) { var a = t.source,
                    s = t.target,
                    u = a[0][0],
                    l = a[0][1],
                    h = a[1][0],
                    f = a[1][1],
                    d = a[2][0],
                    g = a[2][1],
                    v = (s[0][0] - y[0]) / o,
                    m = -(s[0][1] - y[1]) / o,
                    E = (s[1][0] - y[0]) / o,
                    T = -(s[1][1] - y[1]) / o,
                    S = (s[2][0] - y[0]) / o,
                    w = -(s[2][1] - y[1]) / o,
                    x = u,
                    O = l;
                u = 0, l = 0; var R = function(t) { for (var e = t.length, r = 0; r < e; r++) { for (var n = r, i = Math.abs(t[r][r]), o = r + 1; o < e; o++) { var a = Math.abs(t[o][r]);
                            a > i && (i = a, n = o) } if (0 === i) return null; var s = t[n];
                        t[n] = t[r], t[r] = s; for (var u = r + 1; u < e; u++)
                            for (var l = -t[u][r] / t[r][r], h = r; h < e + 1; h++) r == h ? t[u][h] = 0 : t[u][h] += l * t[r][h] } for (var c = new Array(e), p = e - 1; p >= 0; p--) { c[p] = t[p][e] / t[p][p]; for (var f = p - 1; f >= 0; f--) t[f][e] -= t[f][p] * c[p] } return c }([
                    [h -= x, f -= O, 0, 0, E - v],
                    [d -= x, g -= O, 0, 0, S - v],
                    [0, 0, h, f, T - m],
                    [0, 0, d, g, w - m]
                ]); if (R) { c.save(), c.beginPath(); var C = (v + E + S) / 3,
                        P = (m + T + w) / 3,
                        I = qu(C, P, v, m),
                        b = qu(C, P, E, T),
                        L = qu(C, P, S, w);
                    c.moveTo(b[0], b[1]), c.lineTo(I[0], I[1]), c.lineTo(L[0], L[1]), c.clip(), c.transform(R[0], R[2], R[1], R[3], v, m), c.translate(p[0] - x, p[3] - O), c.scale(n / r, -n / r), c.drawImage(_.canvas, 0, 0), c.restore() } }), h && (c.save(), c.strokeStyle = "black", c.lineWidth = 1, s.getTriangles().forEach(function(t, e, r) { var n = t.target,
                    i = (n[0][0] - y[0]) / o,
                    a = -(n[0][1] - y[1]) / o,
                    s = (n[1][0] - y[0]) / o,
                    u = -(n[1][1] - y[1]) / o,
                    l = (n[2][0] - y[0]) / o,
                    h = -(n[2][1] - y[1]) / o;
                c.beginPath(), c.moveTo(s, u), c.lineTo(i, a), c.lineTo(l, h), c.closePath(), c.stroke() }), c.restore()), c.canvas } var Qu = 10,
            $u = function() {
                function t(t, e, r, n, i) { this.sourceProj_ = t, this.targetProj_ = e; var o = {},
                        a = Le(this.targetProj_, this.sourceProj_);
                    this.transformInv_ = function(t) { var e = t[0] + "/" + t[1]; return o[e] || (o[e] = a(t)), o[e] }, this.maxSourceExtent_ = n, this.errorThresholdSquared_ = i * i, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!n && !!this.sourceProj_.getExtent() && It(n) == It(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? It(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? It(this.targetProj_.getExtent()) : null; var s = Ct(r),
                        u = Pt(r),
                        l = Tt(r),
                        h = Et(r),
                        c = this.transformInv_(s),
                        p = this.transformInv_(u),
                        f = this.transformInv_(l),
                        d = this.transformInv_(h); if (this.addQuad_(s, u, l, h, c, p, f, d, Qu), this.wrapsXInSource_) { var _ = 1 / 0;
                        this.triangles_.forEach(function(t, e, r) { _ = Math.min(_, t.source[0][0], t.source[1][0], t.source[2][0]) }), this.triangles_.forEach(function(t) { if (Math.max(t.source[0][0], t.source[1][0], t.source[2][0]) - _ > this.sourceWorldWidth_ / 2) { var e = [
                                    [t.source[0][0], t.source[0][1]],
                                    [t.source[1][0], t.source[1][1]],
                                    [t.source[2][0], t.source[2][1]]
                                ];
                                e[0][0] - _ > this.sourceWorldWidth_ / 2 && (e[0][0] -= this.sourceWorldWidth_), e[1][0] - _ > this.sourceWorldWidth_ / 2 && (e[1][0] -= this.sourceWorldWidth_), e[2][0] - _ > this.sourceWorldWidth_ / 2 && (e[2][0] -= this.sourceWorldWidth_); var r = Math.min(e[0][0], e[1][0], e[2][0]);
                                Math.max(e[0][0], e[1][0], e[2][0]) - r < this.sourceWorldWidth_ / 2 && (t.source = e) } }.bind(this)) }
                    o = {} } return t.prototype.addTriangle_ = function(t, e, r, n, i, o) { this.triangles_.push({ source: [n, i, o], target: [t, e, r] }) }, t.prototype.addQuad_ = function(t, e, r, n, i, o, a, s, u) { var l = $([i, o, a, s]),
                        h = this.sourceWorldWidth_ ? It(l) / this.sourceWorldWidth_ : null,
                        c = this.sourceWorldWidth_,
                        p = this.sourceProj_.canWrapX() && h > .5 && h < 1,
                        f = !1; if (u > 0) { if (this.targetProj_.isGlobal() && this.targetWorldWidth_) f = It($([t, e, r, n])) / this.targetWorldWidth_ > .25 || f;!p && this.sourceProj_.isGlobal() && h && (f = h > .25 || f) } if (f || !this.maxSourceExtent_ || bt(l, this.maxSourceExtent_)) { if (!(f || isFinite(i[0]) && isFinite(i[1]) && isFinite(o[0]) && isFinite(o[1]) && isFinite(a[0]) && isFinite(a[1]) && isFinite(s[0]) && isFinite(s[1]))) { if (!(u > 0)) return;
                            f = !0 } if (u > 0) { if (!f) { var d = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2],
                                    _ = this.transformInv_(d),
                                    g = void 0; if (p) g = (Vt(i[0], c) + Vt(a[0], c)) / 2 - Vt(_[0], c);
                                else g = (i[0] + a[0]) / 2 - _[0]; var y = (i[1] + a[1]) / 2 - _[1];
                                f = g * g + y * y > this.errorThresholdSquared_ } if (f) { if (Math.abs(t[0] - r[0]) <= Math.abs(t[1] - r[1])) { var v = [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2],
                                        m = this.transformInv_(v),
                                        E = [(n[0] + t[0]) / 2, (n[1] + t[1]) / 2],
                                        T = this.transformInv_(E);
                                    this.addQuad_(t, e, v, E, i, o, m, T, u - 1), this.addQuad_(E, v, r, n, T, m, a, s, u - 1) } else { var S = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
                                        w = this.transformInv_(S),
                                        x = [(r[0] + n[0]) / 2, (r[1] + n[1]) / 2],
                                        O = this.transformInv_(x);
                                    this.addQuad_(t, S, x, n, i, w, O, s, u - 1), this.addQuad_(S, e, r, x, w, o, a, O, u - 1) } return } } if (p) { if (!this.canWrapXInSource_) return;
                            this.wrapsXInSource_ = !0 }
                        this.addTriangle_(t, r, n, i, a, s), this.addTriangle_(t, e, r, i, o, a) } }, t.prototype.calculateSourceExtent = function() { var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; return this.triangles_.forEach(function(e, r, n) { var i = e.source;
                        dt(t, i[0]), dt(t, i[1]), dt(t, i[2]) }), t }, t.prototype.getTriangles = function() { return this.triangles_ }, t }(),
            tl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            el = function(t) {
                function e(e, r, n, i, o, a, s, u, l, h, c) { var p = t.call(this, o, xn.IDLE) || this;
                    p.renderEdges_ = void 0 !== c && c, p.pixelRatio_ = s, p.gutter_ = u, p.canvas_ = null, p.sourceTileGrid_ = r, p.targetTileGrid_ = i, p.wrappedTileCoord_ = a || o, p.sourceTiles_ = [], p.sourcesListenerKeys_ = null, p.sourceZ_ = 0; var f = i.getTileCoordExtent(p.wrappedTileCoord_),
                        d = p.targetTileGrid_.getExtent(),
                        _ = p.sourceTileGrid_.getExtent(),
                        g = d ? Rt(f, d) : f; if (0 === mt(g)) return p.state = xn.EMPTY, p; var y = e.getExtent();
                    y && (_ = _ ? Rt(_, y) : y); var v = i.getResolution(p.wrappedTileCoord_[0]),
                        m = Hu(e, n, St(g), v); if (!isFinite(m) || m <= 0) return p.state = xn.EMPTY, p; var E = void 0 !== h ? h : Bu; if (p.triangulation_ = new $u(e, n, g, _, m * E), 0 === p.triangulation_.getTriangles().length) return p.state = xn.EMPTY, p;
                    p.sourceZ_ = r.getZForResolution(m); var T = p.triangulation_.calculateSourceExtent(); if (_ && (e.canWrapX() ? (T[1] = kt(T[1], _[1], _[3]), T[3] = kt(T[3], _[1], _[3])) : T = Rt(T, _)), mt(T)) { for (var S = r.getTileRangeForExtentAndZ(T, p.sourceZ_), w = S.minX; w <= S.maxX; w++)
                            for (var x = S.minY; x <= S.maxY; x++) { var O = l(p.sourceZ_, w, x, s);
                                O && p.sourceTiles_.push(O) }
                        0 === p.sourceTiles_.length && (p.state = xn.EMPTY) } else p.state = xn.EMPTY; return p } return tl(e, t), e.prototype.disposeInternal = function() { this.state == xn.LOADING && this.unlistenSources_(), t.prototype.disposeInternal.call(this) }, e.prototype.getImage = function() { return this.canvas_ }, e.prototype.reproject_ = function() { var t = []; if (this.sourceTiles_.forEach(function(e, r, n) { e && e.getState() == xn.LOADED && t.push({ extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord), image: e.getImage() }) }.bind(this)), this.sourceTiles_.length = 0, 0 === t.length) this.state = xn.ERROR;
                    else { var e = this.wrappedTileCoord_[0],
                            r = this.targetTileGrid_.getTileSize(e),
                            n = "number" == typeof r ? r : r[0],
                            i = "number" == typeof r ? r : r[1],
                            o = this.targetTileGrid_.getResolution(e),
                            a = this.sourceTileGrid_.getResolution(this.sourceZ_),
                            s = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
                        this.canvas_ = Ju(n, i, this.pixelRatio_, a, this.sourceTileGrid_.getExtent(), o, s, this.triangulation_, t, this.gutter_, this.renderEdges_), this.state = xn.LOADED }
                    this.changed() }, e.prototype.load = function() { if (this.state == xn.IDLE) { this.state = xn.LOADING, this.changed(); var t = 0;
                        this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(function(e, r, n) { var i = e.getState(); if (i == xn.IDLE || i == xn.LOADING) { t++; var o = g(e, N.CHANGE, function(r) { var n = e.getState();
                                    n != xn.LOADED && n != xn.ERROR && n != xn.EMPTY || (v(o), 0 === --t && (this.unlistenSources_(), this.reproject_())) }, this);
                                this.sourcesListenerKeys_.push(o) } }.bind(this)), this.sourceTiles_.forEach(function(t, e, r) { t.getState() == xn.IDLE && t.load() }), 0 === t && setTimeout(this.reproject_.bind(this), 0) } }, e.prototype.unlistenSources_ = function() { this.sourcesListenerKeys_.forEach(v), this.sourcesListenerKeys_ = null }, e }(zu),
            rl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function nl(t) { return t ? Array.isArray(t) ? function(e) { return t } : "function" == typeof t ? t : function(e) { return [t] } : null } var il = function(t) {
                function e(e) { var r = t.call(this) || this; return r.projection_ = we(e.projection), r.attributions_ = nl(e.attributions), r.attributionsCollapsible_ = void 0 === e.attributionsCollapsible || e.attributionsCollapsible, r.loading = !1, r.state_ = void 0 !== e.state ? e.state : mi.READY, r.wrapX_ = void 0 !== e.wrapX && e.wrapX, r } return rl(e, t), e.prototype.getAttributions = function() { return this.attributions_ }, e.prototype.getAttributionsCollapsible = function() { return this.attributionsCollapsible_ }, e.prototype.getProjection = function() { return this.projection_ }, e.prototype.getResolutions = function() { return n() }, e.prototype.getState = function() { return this.state_ }, e.prototype.getWrapX = function() { return this.wrapX_ }, e.prototype.refresh = function() { this.changed() }, e.prototype.setAttributions = function(t) { this.attributions_ = nl(t), this.changed() }, e.prototype.setState = function(t) { this.state_ = t, this.changed() }, e }(z),
            ol = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            al = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, attributionsCollapsible: e.attributionsCollapsible, projection: e.projection, state: e.state, wrapX: e.wrapX }) || this;
                    r.opaque_ = void 0 !== e.opaque && e.opaque, r.tilePixelRatio_ = void 0 !== e.tilePixelRatio ? e.tilePixelRatio : 1, r.tileGrid = void 0 !== e.tileGrid ? e.tileGrid : null; var n = e.cacheSize; if (void 0 === n) { var i = [256, 256],
                            o = e.tileGrid;
                        o && Oi(o.getTileSize(o.getMinZoom()), i); var a = "undefined" != typeof screen,
                            s = a ? screen.availWidth || screen.width : 1920,
                            u = a ? screen.availHeight || screen.height : 1080;
                        n = 4 * Math.ceil(s / i[0]) * Math.ceil(u / i[1]) } return r.tileCache = new Ku(n), r.tmpSize = [0, 0], r.key_ = e.key || "", r.tileOptions = { transition: e.transition }, r.zDirection = e.zDirection ? e.zDirection : 0, r } return ol(e, t), e.prototype.canExpireCache = function() { return this.tileCache.canExpireCache() }, e.prototype.expireCache = function(t, e) { var r = this.getTileCacheForProjection(t);
                    r && r.expireCache(e) }, e.prototype.forEachLoadedTile = function(t, e, r, n) { var i = this.getTileCacheForProjection(t); if (!i) return !1; for (var o, a, s, u = !0, l = r.minX; l <= r.maxX; ++l)
                        for (var h = r.minY; h <= r.maxY; ++h) a = is(e, l, h), s = !1, i.containsKey(a) && (s = (o = i.get(a)).getState() === xn.LOADED) && (s = !1 !== n(o)), s || (u = !1); return u }, e.prototype.getGutterForProjection = function(t) { return 0 }, e.prototype.getKey = function() { return this.key_ }, e.prototype.setKey = function(t) { this.key_ !== t && (this.key_ = t, this.changed()) }, e.prototype.getOpaque = function(t) { return this.opaque_ }, e.prototype.getResolutions = function() { return this.tileGrid.getResolutions() }, e.prototype.getTile = function(t, e, r, i, o) { return n() }, e.prototype.getTileGrid = function() { return this.tileGrid }, e.prototype.getTileGridForProjection = function(t) { return this.tileGrid ? this.tileGrid : ls(t) }, e.prototype.getTileCacheForProjection = function(t) { var e = this.getProjection(); return e && !Ie(e, t) ? null : this.tileCache }, e.prototype.getTilePixelRatio = function(t) { return this.tilePixelRatio_ }, e.prototype.getTilePixelSize = function(t, e, r) { var n = this.getTileGridForProjection(r),
                        i = this.getTilePixelRatio(e),
                        o = Oi(n.getTileSize(t), this.tmpSize); return 1 == i ? o : xi(o, i, this.tmpSize) }, e.prototype.getTileCoordForTileUrlFunction = function(t, e) { var r = void 0 !== e ? e : this.getProjection(),
                        n = this.getTileGridForProjection(r); return this.getWrapX() && r.isGlobal() && (t = function(t, e, r) { var n = e[0],
                                i = t.getTileCoordCenter(e),
                                o = fs(r); if (nt(o, i)) return e; var a = It(o),
                                s = Math.ceil((o[0] - i[0]) / a); return i[0] += a * s, t.getTileCoordForCoordAndZ(i, n) }(n, t, r)),
                        function(t, e) { var r = t[0],
                                n = t[1],
                                i = t[2]; if (e.getMinZoom() > r || r > e.getMaxZoom()) return !1; var o, a = e.getExtent(); return !(o = a ? e.getTileRangeForExtentAndZ(a, r) : e.getFullTileRange(r)) || o.containsXY(n, i) }(t, n) ? t : null }, e.prototype.clear = function() { this.tileCache.clear() }, e.prototype.refresh = function() { this.clear(), t.prototype.refresh.call(this) }, e.prototype.useTile = function(t, e, r, n) {}, e }(il),
            sl = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.tile = r, n } return ol(e, t), e }(M),
            ul = al,
            ll = "tileloadstart",
            hl = "tileloadend",
            cl = "tileloaderror",
            pl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            fl = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, cacheSize: e.cacheSize, opaque: e.opaque, projection: e.projection, state: e.state, tileGrid: e.tileGrid, tilePixelRatio: e.tilePixelRatio, wrapX: e.wrapX, transition: e.transition, key: e.key, attributionsCollapsible: e.attributionsCollapsible, zDirection: e.zDirection }) || this; return r.generateTileUrlFunction_ = !e.tileUrlFunction, r.tileLoadFunction = e.tileLoadFunction, r.tileUrlFunction = e.tileUrlFunction ? e.tileUrlFunction.bind(r) : ju, r.urls = null, e.urls ? r.setUrls(e.urls) : e.url && r.setUrl(e.url), r.tileLoadingKeys_ = {}, r } return pl(e, t), e.prototype.getTileLoadFunction = function() { return this.tileLoadFunction }, e.prototype.getTileUrlFunction = function() { return this.tileUrlFunction }, e.prototype.getUrls = function() { return this.urls }, e.prototype.handleTileChange = function(t) { var e, r = t.target,
                        n = o(r),
                        i = r.getState();
                    i == xn.LOADING ? (this.tileLoadingKeys_[n] = !0, e = ll) : n in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[n], e = i == xn.ERROR ? cl : i == xn.LOADED || i == xn.ABORT ? hl : void 0), null != e && this.dispatchEvent(new sl(e, r)) }, e.prototype.setTileLoadFunction = function(t) { this.tileCache.clear(), this.tileLoadFunction = t, this.changed() }, e.prototype.setTileUrlFunction = function(t, e) { this.tileUrlFunction = t, this.tileCache.pruneExceptNewestZ(), void 0 !== e ? this.setKey(e) : this.changed() }, e.prototype.setUrl = function(t) { var e = this.urls = ku(t);
                    this.setUrls(e) }, e.prototype.setUrls = function(t) { this.urls = t; var e = t.join("\n");
                    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Gu(t, this.tileGrid), e) : this.setKey(e) }, e.prototype.useTile = function(t, e, r) { var n = is(t, e, r);
                    this.tileCache.containsKey(n) && this.tileCache.get(n) }, e }(ul),
            dl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function _l(t, e) { t.getImage().src = e } var gl = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, cacheSize: e.cacheSize, opaque: e.opaque, projection: e.projection, state: e.state, tileGrid: e.tileGrid, tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : _l, tilePixelRatio: e.tilePixelRatio, tileUrlFunction: e.tileUrlFunction, url: e.url, urls: e.urls, wrapX: e.wrapX, transition: e.transition, key: e.key, attributionsCollapsible: e.attributionsCollapsible, zDirection: e.zDirection }) || this; return r.crossOrigin = void 0 !== e.crossOrigin ? e.crossOrigin : null, r.tileClass = void 0 !== e.tileClass ? e.tileClass : Wu, r.tileCacheForProjection = {}, r.tileGridForProjection = {}, r.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold, r.renderReprojectionEdges_ = !1, r } return dl(e, t), e.prototype.canExpireCache = function() { if (this.tileCache.canExpireCache()) return !0; for (var t in this.tileCacheForProjection)
                        if (this.tileCacheForProjection[t].canExpireCache()) return !0;
                    return !1 }, e.prototype.expireCache = function(t, e) { var r = this.getTileCacheForProjection(t); for (var n in this.tileCache.expireCache(this.tileCache == r ? e : {}), this.tileCacheForProjection) { var i = this.tileCacheForProjection[n];
                        i.expireCache(i == r ? e : {}) } }, e.prototype.getGutterForProjection = function(t) { return this.getProjection() && t && !Ie(this.getProjection(), t) ? 0 : this.getGutter() }, e.prototype.getGutter = function() { return 0 }, e.prototype.getOpaque = function(e) { return !(this.getProjection() && e && !Ie(this.getProjection(), e)) && t.prototype.getOpaque.call(this, e) }, e.prototype.getTileGridForProjection = function(t) { var e = this.getProjection(); if (!this.tileGrid || e && !Ie(e, t)) { var r = o(t); return r in this.tileGridForProjection || (this.tileGridForProjection[r] = ls(t)), this.tileGridForProjection[r] } return this.tileGrid }, e.prototype.getTileCacheForProjection = function(t) { var e = this.getProjection(); if (!e || Ie(e, t)) return this.tileCache; var r = o(t); return r in this.tileCacheForProjection || (this.tileCacheForProjection[r] = new Ku(this.tileCache.highWaterMark)), this.tileCacheForProjection[r] }, e.prototype.createTile_ = function(t, e, r, n, i, o) { var a = [t, e, r],
                        s = this.getTileCoordForTileUrlFunction(a, i),
                        u = s ? this.tileUrlFunction(s, n, i) : void 0,
                        l = new this.tileClass(a, void 0 !== u ? xn.IDLE : xn.EMPTY, void 0 !== u ? u : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions); return l.key = o, l.addEventListener(N.CHANGE, this.handleTileChange.bind(this)), l }, e.prototype.getTile = function(t, e, r, n, i) { var o = this.getProjection(); if (o && i && !Ie(o, i)) { var a = this.getTileCacheForProjection(i),
                            s = [t, e, r],
                            u = void 0,
                            l = os(s);
                        a.containsKey(l) && (u = a.get(l)); var h = this.getKey(); if (u && u.key == h) return u; var c = this.getTileGridForProjection(o),
                            p = this.getTileGridForProjection(i),
                            f = this.getTileCoordForTileUrlFunction(s, i),
                            d = new el(o, c, i, p, s, f, this.getTilePixelRatio(n), this.getGutter(), function(t, e, r, n) { return this.getTileInternal(t, e, r, n, o) }.bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_); return d.key = h, u ? (d.interimTile = u, d.refreshInterimChain(), a.replace(l, d)) : a.set(l, d), d } return this.getTileInternal(t, e, r, n, o || i) }, e.prototype.getTileInternal = function(t, e, r, n, i) { var o = null,
                        a = is(t, e, r),
                        s = this.getKey(); if (this.tileCache.containsKey(a)) { if ((o = this.tileCache.get(a)).key != s) { var u = o;
                            o = this.createTile_(t, e, r, n, i, s), u.getState() == xn.IDLE ? o.interimTile = u.interimTile : o.interimTile = u, o.refreshInterimChain(), this.tileCache.replace(a, o) } } else o = this.createTile_(t, e, r, n, i, s), this.tileCache.set(a, o); return o }, e.prototype.setRenderReprojectionEdges = function(t) { if (this.renderReprojectionEdges_ != t) { for (var e in this.renderReprojectionEdges_ = t, this.tileCacheForProjection) this.tileCacheForProjection[e].clear();
                        this.changed() } }, e.prototype.setTileGridForProjection = function(t, e) { var r = we(t); if (r) { var n = o(r);
                        n in this.tileGridForProjection || (this.tileGridForProjection[n] = e) } }, e }(fl),
            yl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(); var vl = function(t) {
                function e(e) { var r = this,
                        n = void 0 !== e.hidpi && e.hidpi; return (r = t.call(this, { cacheSize: e.cacheSize, crossOrigin: "anonymous", opaque: !0, projection: we("EPSG:3857"), reprojectionErrorThreshold: e.reprojectionErrorThreshold, state: mi.LOADING, tileLoadFunction: e.tileLoadFunction, tilePixelRatio: n ? 2 : 1, wrapX: void 0 === e.wrapX || e.wrapX, transition: e.transition }) || this).hidpi_ = n, r.culture_ = void 0 !== e.culture ? e.culture : "en-us", r.maxZoom_ = void 0 !== e.maxZoom ? e.maxZoom : -1, r.apiKey_ = e.key, r.imagerySet_ = e.imagerySet, Uu("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + r.imagerySet_ + "?uriScheme=https&include=ImageryProviders&key=" + r.apiKey_ + "&c=" + r.culture_, r.handleImageryMetadataResponse.bind(r), void 0, "jsonp"), r } return yl(e, t), e.prototype.getApiKey = function() { return this.apiKey_ }, e.prototype.getImagerySet = function() { return this.imagerySet_ }, e.prototype.handleImageryMetadataResponse = function(t) { if (200 == t.statusCode && "OK" == t.statusDescription && "ValidCredentials" == t.authenticationResultCode && 1 == t.resourceSets.length && 1 == t.resourceSets[0].resources.length) { var e = t.resourceSets[0].resources[0],
                            r = -1 == this.maxZoom_ ? e.zoomMax : this.maxZoom_,
                            n = fs(this.getProjection()),
                            i = this.hidpi_ ? 2 : 1,
                            o = e.imageWidth == e.imageHeight ? e.imageWidth / i : [e.imageWidth / i, e.imageHeight / i],
                            a = hs({ extent: n, minZoom: e.zoomMin, maxZoom: r, tileSize: o });
                        this.tileGrid = a; var s = this.culture_,
                            u = this.hidpi_; if (this.tileUrlFunction = Du(e.imageUrlSubdomains.map(function(t) { var r = [0, 0, 0],
                                    n = e.imageUrl.replace("{subdomain}", t).replace("{culture}", s); return function(t, e, i) { if (t) { ns(t[0], t[1], t[2], r); var o = n; return u && (o += "&dpi=d1&device=mobile"), o.replace("{quadkey}", function(t) { var e, r, n = t[0],
                                                i = new Array(n),
                                                o = 1 << n - 1; for (e = 0; e < n; ++e) r = 48, t[1] & o && (r += 1), t[2] & o && (r += 2), i[e] = String.fromCharCode(r), o >>= 1; return i.join("") }(r)) } } })), e.imageryProviders) { var l = be(we("EPSG:4326"), this.getProjection());
                            this.setAttributions(function(t) { var r = [],
                                    n = t.viewState,
                                    i = this.getTileGrid(),
                                    o = i.getZForResolution(n.resolution, this.zDirection),
                                    a = i.getTileCoordForCoordAndZ(n.center, o)[0]; return e.imageryProviders.map(function(e) { for (var n = !1, i = e.coverageAreas, o = 0, s = i.length; o < s; ++o) { var u = i[o]; if (a >= u.zoomMin && a <= u.zoomMax) { var h = u.bbox; if (bt(Ft([h[1], h[0], h[3], h[2]], l), t.extent)) { n = !0; break } } }
                                    n && r.push(e.attribution) }), r.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'), r }.bind(this)) }
                        this.setState(mi.READY) } else this.setState(mi.ERROR) }, e }(gl),
            ml = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            El = function(t) {
                function e(e) { var r = e || {},
                        n = void 0 !== r.projection ? r.projection : "EPSG:3857",
                        i = void 0 !== r.tileGrid ? r.tileGrid : hs({ extent: fs(n), maxZoom: r.maxZoom, minZoom: r.minZoom, tileSize: r.tileSize }); return t.call(this, { attributions: r.attributions, cacheSize: r.cacheSize, crossOrigin: r.crossOrigin, opaque: r.opaque, projection: n, reprojectionErrorThreshold: r.reprojectionErrorThreshold, tileGrid: i, tileLoadFunction: r.tileLoadFunction, tilePixelRatio: r.tilePixelRatio, tileUrlFunction: r.tileUrlFunction, url: r.url, urls: r.urls, wrapX: void 0 === r.wrapX || r.wrapX, transition: r.transition, attributionsCollapsible: r.attributionsCollapsible, zDirection: r.zDirection }) || this } return ml(e, t), e }(gl),
            Tl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Sl = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, cacheSize: e.cacheSize, crossOrigin: e.crossOrigin, maxZoom: void 0 !== e.maxZoom ? e.maxZoom : 18, minZoom: e.minZoom, projection: e.projection, wrapX: e.wrapX }) || this; return r.account_ = e.account, r.mapId_ = e.map || "", r.config_ = e.config || {}, r.templateCache_ = {}, r.initializeMap_(), r } return Tl(e, t), e.prototype.getConfig = function() { return this.config_ }, e.prototype.updateConfig = function(t) { p(this.config_, t), this.initializeMap_() }, e.prototype.setConfig = function(t) { this.config_ = t || {}, this.initializeMap_() }, e.prototype.initializeMap_ = function() { var t = JSON.stringify(this.config_); if (this.templateCache_[t]) this.applyTemplate_(this.templateCache_[t]);
                    else { var e = "https://" + this.account_ + ".carto.com/api/v1/map";
                        this.mapId_ && (e += "/named/" + this.mapId_); var r = new XMLHttpRequest;
                        r.addEventListener("load", this.handleInitResponse_.bind(this, t)), r.addEventListener("error", this.handleInitError_.bind(this)), r.open("POST", e), r.setRequestHeader("Content-type", "application/json"), r.send(JSON.stringify(this.config_)) } }, e.prototype.handleInitResponse_ = function(t, e) { var r = e.target; if (!r.status || r.status >= 200 && r.status < 300) { var n = void 0; try { n = JSON.parse(r.responseText) } catch (t) { return void this.setState(mi.ERROR) }
                        this.applyTemplate_(n), this.templateCache_[t] = n, this.setState(mi.READY) } else this.setState(mi.ERROR) }, e.prototype.handleInitError_ = function(t) { this.setState(mi.ERROR) }, e.prototype.applyTemplate_ = function(t) { var e = "https://" + t.cdn_url.https + "/" + this.account_ + "/api/v1/map/" + t.layergroupid + "/{z}/{x}/{y}.png";
                    this.setUrl(e) }, e }(El),
            wl = { ADDFEATURE: "addfeature", CHANGEFEATURE: "changefeature", CLEAR: "clear", REMOVEFEATURE: "removefeature" },
            xl = r(0),
            Ol = r.n(xl),
            Rl = function() {
                function t(t) { this.rbush_ = new Ol.a(t), this.items_ = {} } return t.prototype.insert = function(t, e) { var r = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e };
                    this.rbush_.insert(r), this.items_[o(e)] = r }, t.prototype.load = function(t, e) { for (var r = new Array(e.length), n = 0, i = e.length; n < i; n++) { var a = t[n],
                            s = e[n],
                            u = { minX: a[0], minY: a[1], maxX: a[2], maxY: a[3], value: s };
                        r[n] = u, this.items_[o(s)] = u }
                    this.rbush_.load(r) }, t.prototype.remove = function(t) { var e = o(t),
                        r = this.items_[e]; return delete this.items_[e], null !== this.rbush_.remove(r) }, t.prototype.update = function(t, e) { var r = this.items_[o(e)];
                    pt([r.minX, r.minY, r.maxX, r.maxY], t) || (this.remove(e), this.insert(t, e)) }, t.prototype.getAll = function() { return this.rbush_.all().map(function(t) { return t.value }) }, t.prototype.getInExtent = function(t) { var e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] }; return this.rbush_.search(e).map(function(t) { return t.value }) }, t.prototype.forEach = function(t) { return this.forEach_(this.getAll(), t) }, t.prototype.forEachInExtent = function(t, e) { return this.forEach_(this.getInExtent(t), e) }, t.prototype.forEach_ = function(t, e) { for (var r, n = 0, i = t.length; n < i; n++)
                        if (r = e(t[n])) return r;
                    return r }, t.prototype.isEmpty = function() { return _(this.items_) }, t.prototype.clear = function() { this.rbush_.clear(), this.items_ = {} }, t.prototype.getExtent = function(t) { var e = this.rbush_.toJSON(); return ut(e.minX, e.minY, e.maxX, e.maxY, t) }, t.prototype.concat = function(t) { for (var e in this.rbush_.load(t.rbush_.all()), t.items_) this.items_[e] = t.items_[e] }, t }(),
            Cl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Pl = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.feature = r, n } return Cl(e, t), e }(M),
            Il = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { attributions: n.attributions, projection: void 0, state: mi.READY, wrapX: void 0 === n.wrapX || n.wrapX }) || this).loader_ = b, r.format_ = n.format, r.overlaps_ = null == n.overlaps || n.overlaps, r.url_ = n.url, void 0 !== n.loader ? r.loader_ = n.loader : void 0 !== r.url_ && (K(r.format_, 7), r.loader_ = Ja(r.url_, r.format_)), r.strategy_ = void 0 !== n.strategy ? n.strategy : Qa; var i, o, a = void 0 === n.useSpatialIndex || n.useSpatialIndex; return r.featuresRtree_ = a ? new Rl : null, r.loadedExtentsRtree_ = new Rl, r.nullGeometryFeatures_ = {}, r.idIndex_ = {}, r.uidIndex_ = {}, r.featureChangeKeys_ = {}, r.featuresCollection_ = null, Array.isArray(n.features) ? o = n.features : n.features && (o = (i = n.features).getArray()), a || void 0 !== i || (i = new Z(o)), void 0 !== o && r.addFeaturesInternal(o), void 0 !== i && r.bindFeaturesCollection_(i), r } return Cl(e, t), e.prototype.addFeature = function(t) { this.addFeatureInternal(t), this.changed() }, e.prototype.addFeatureInternal = function(t) { var e = o(t); if (this.addToIndex_(e, t)) { this.setupChangeEvents_(e, t); var r = t.getGeometry(); if (r) { var n = r.getExtent();
                            this.featuresRtree_ && this.featuresRtree_.insert(n, t) } else this.nullGeometryFeatures_[e] = t;
                        this.dispatchEvent(new Pl(wl.ADDFEATURE, t)) } else this.featuresCollection_ && this.featuresCollection_.remove(t) }, e.prototype.setupChangeEvents_ = function(t, e) { this.featureChangeKeys_[t] = [g(e, N.CHANGE, this.handleFeatureChange_, this), g(e, c, this.handleFeatureChange_, this)] }, e.prototype.addToIndex_ = function(t, e) { var r = !0,
                        n = e.getId(); return void 0 !== n && (n.toString() in this.idIndex_ ? r = !1 : this.idIndex_[n.toString()] = e), r && (K(!(t in this.uidIndex_), 30), this.uidIndex_[t] = e), r }, e.prototype.addFeatures = function(t) { this.addFeaturesInternal(t), this.changed() }, e.prototype.addFeaturesInternal = function(t) { for (var e = [], r = [], n = [], i = 0, a = t.length; i < a; i++) { var s = o(l = t[i]);
                        this.addToIndex_(s, l) && r.push(l) }
                    i = 0; for (var u = r.length; i < u; i++) { var l;
                        s = o(l = r[i]);
                        this.setupChangeEvents_(s, l); var h = l.getGeometry(); if (h) { var c = h.getExtent();
                            e.push(c), n.push(l) } else this.nullGeometryFeatures_[s] = l }
                    this.featuresRtree_ && this.featuresRtree_.load(e, n);
                    i = 0; for (var p = r.length; i < p; i++) this.dispatchEvent(new Pl(wl.ADDFEATURE, r[i])) }, e.prototype.bindFeaturesCollection_ = function(t) { var e = !1;
                    this.addEventListener(wl.ADDFEATURE, function(r) { e || (e = !0, t.push(r.feature), e = !1) }), this.addEventListener(wl.REMOVEFEATURE, function(r) { e || (e = !0, t.remove(r.feature), e = !1) }), t.addEventListener(h.ADD, function(t) { e || (e = !0, this.addFeature(t.element), e = !1) }.bind(this)), t.addEventListener(h.REMOVE, function(t) { e || (e = !0, this.removeFeature(t.element), e = !1) }.bind(this)), this.featuresCollection_ = t }, e.prototype.clear = function(t) { if (t) { for (var e in this.featureChangeKeys_) { this.featureChangeKeys_[e].forEach(v) }
                        this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}) } else if (this.featuresRtree_)
                        for (var r in this.featuresRtree_.forEach(this.removeFeatureInternal.bind(this)), this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[r]);
                    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {}; var n = new Pl(wl.CLEAR);
                    this.dispatchEvent(n), this.changed() }, e.prototype.forEachFeature = function(t) { if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
                    this.featuresCollection_ && this.featuresCollection_.forEach(t) }, e.prototype.forEachFeatureAtCoordinateDirect = function(t, e) { var r = [t[0], t[1], t[0], t[1]]; return this.forEachFeatureInExtent(r, function(r) { return r.getGeometry().intersectsCoordinate(t) ? e(r) : void 0 }) }, e.prototype.forEachFeatureInExtent = function(t, e) { if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e);
                    this.featuresCollection_ && this.featuresCollection_.forEach(e) }, e.prototype.forEachFeatureIntersectingExtent = function(t, e) { return this.forEachFeatureInExtent(t, function(r) { if (r.getGeometry().intersectsExtent(t)) { var n = e(r); if (n) return n } }) }, e.prototype.getFeaturesCollection = function() { return this.featuresCollection_ }, e.prototype.getFeatures = function() { var t; return this.featuresCollection_ ? t = this.featuresCollection_.getArray() : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), _(this.nullGeometryFeatures_) || x(t, d(this.nullGeometryFeatures_))), t }, e.prototype.getFeaturesAtCoordinate = function(t) { var e = []; return this.forEachFeatureAtCoordinateDirect(t, function(t) { e.push(t) }), e }, e.prototype.getFeaturesInExtent = function(t) { return this.featuresRtree_.getInExtent(t) }, e.prototype.getClosestFeatureToCoordinate = function(t, e) { var r = t[0],
                        n = t[1],
                        i = null,
                        o = [NaN, NaN],
                        a = 1 / 0,
                        s = [-1 / 0, -1 / 0, 1 / 0, 1 / 0],
                        u = e || P; return this.featuresRtree_.forEachInExtent(s, function(t) { if (u(t)) { var e = t.getGeometry(),
                                l = a; if ((a = e.closestPointXY(r, n, o, a)) < l) { i = t; var h = Math.sqrt(a);
                                s[0] = r - h, s[1] = n - h, s[2] = r + h, s[3] = n + h } } }), i }, e.prototype.getExtent = function(t) { return this.featuresRtree_.getExtent(t) }, e.prototype.getFeatureById = function(t) { var e = this.idIndex_[t.toString()]; return void 0 !== e ? e : null }, e.prototype.getFeatureByUid = function(t) { var e = this.uidIndex_[t]; return void 0 !== e ? e : null }, e.prototype.getFormat = function() { return this.format_ }, e.prototype.getOverlaps = function() { return this.overlaps_ }, e.prototype.getUrl = function() { return this.url_ }, e.prototype.handleFeatureChange_ = function(t) { var e = t.target,
                        r = o(e),
                        n = e.getGeometry(); if (n) { var i = n.getExtent();
                        r in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[r], this.featuresRtree_ && this.featuresRtree_.insert(i, e)) : this.featuresRtree_ && this.featuresRtree_.update(i, e) } else r in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[r] = e); var a = e.getId(); if (void 0 !== a) { var s = a.toString();
                        this.idIndex_[s] !== e && (this.removeFromIdIndex_(e), this.idIndex_[s] = e) } else this.removeFromIdIndex_(e), this.uidIndex_[r] = e;
                    this.changed(), this.dispatchEvent(new Pl(wl.CHANGEFEATURE, e)) }, e.prototype.hasFeature = function(t) { var e = t.getId(); return void 0 !== e ? e in this.idIndex_ : o(t) in this.uidIndex_ }, e.prototype.isEmpty = function() { return this.featuresRtree_.isEmpty() && _(this.nullGeometryFeatures_) }, e.prototype.loadFeatures = function(t, e, r) { var n = this.loadedExtentsRtree_,
                        i = this.strategy_(t, e);
                    this.loading = !1; for (var o = function(t, o) { var s = i[t];
                            n.forEachInExtent(s, function(t) { return it(t.extent, s) }) || (a.loader_.call(a, s, e, r), n.insert(s, { extent: s.slice() }), a.loading = a.loader_ !== b) }, a = this, s = 0, u = i.length; s < u; ++s) o(s) }, e.prototype.refresh = function() { this.clear(!0), this.loadedExtentsRtree_.clear(), t.prototype.refresh.call(this) }, e.prototype.removeLoadedExtent = function(t) { var e, r = this.loadedExtentsRtree_;
                    r.forEachInExtent(t, function(r) { if (pt(r.extent, t)) return e = r, !0 }), e && r.remove(e) }, e.prototype.removeFeature = function(t) { var e = o(t);
                    e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t), this.removeFeatureInternal(t), this.changed() }, e.prototype.removeFeatureInternal = function(t) { var e = o(t);
                    this.featureChangeKeys_[e].forEach(v), delete this.featureChangeKeys_[e]; var r = t.getId();
                    void 0 !== r && delete this.idIndex_[r.toString()], delete this.uidIndex_[e], this.dispatchEvent(new Pl(wl.REMOVEFEATURE, t)) }, e.prototype.removeFromIdIndex_ = function(t) { var e = !1; for (var r in this.idIndex_)
                        if (this.idIndex_[r] === t) { delete this.idIndex_[r], e = !0; break }
                    return e }, e.prototype.setLoader = function(t) { this.loader_ = t }, e.prototype.setUrl = function(t) { K(this.format_, 7), this.setLoader(Ja(t, this.format_)) }, e }(il),
            bl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ll = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, wrapX: e.wrapX }) || this; return r.resolution = void 0, r.distance = void 0 !== e.distance ? e.distance : 20, r.features = [], r.geometryFunction = e.geometryFunction || function(t) { var e = t.getGeometry(); return K(e.getType() == Nt.POINT, 10), e }, r.source = e.source, r.source.addEventListener(N.CHANGE, r.refresh.bind(r)), r } return bl(e, t), e.prototype.getDistance = function() { return this.distance }, e.prototype.getSource = function() { return this.source }, e.prototype.loadFeatures = function(t, e, r) { this.source.loadFeatures(t, e, r), e !== this.resolution && (this.clear(), this.resolution = e, this.cluster(), this.addFeatures(this.features)) }, e.prototype.setDistance = function(t) { this.distance = t, this.refresh() }, e.prototype.refresh = function() { this.clear(), this.cluster(), this.addFeatures(this.features) }, e.prototype.cluster = function() { if (void 0 !== this.resolution) { this.features.length = 0; for (var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0], e = this.distance * this.resolution, r = this.source.getFeatures(), n = {}, i = 0, a = r.length; i < a; i++) { var s = r[i]; if (!(o(s) in n)) { var u = this.geometryFunction(s); if (u) { ht(u.getCoordinates(), t), tt(t, e, t); var l = this.source.getFeaturesInExtent(t);
                                    l = l.filter(function(t) { var e = o(t); return !(e in n) && (n[e] = !0, !0) }), this.features.push(this.createCluster(l)) } } } } }, e.prototype.createCluster = function(t) { for (var e = [0, 0], r = t.length - 1; r >= 0; --r) { var n = this.geometryFunction(t[r]);
                        n ? Xn(e, n.getCoordinates()) : t.splice(r, 1) }
                    qn(e, 1 / t.length); var i = new q(new Rr(e)); return i.set("features", t), i }, e }(Il),
            Ml = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Fl = { DEFAULT: "default", TRUNCATED: "truncated" },
            Al = function(t) {
                function e(e, r, n, i, o, a, s, u) { var l = t.call(this, n, i, o, a, s, u) || this; return l.zoomifyImage_ = null, l.tileSize_ = Oi(r.getTileSize(n[0])).map(function(t) { return t * e }), l } return Ml(e, t), e.prototype.getImage = function() { if (this.zoomifyImage_) return this.zoomifyImage_; var e = t.prototype.getImage.call(this); if (this.state == xn.LOADED) { var r = this.tileSize_; if (e.width == r[0] && e.height == r[1]) return this.zoomifyImage_ = e, e; var n = hi(r[0], r[1]); return n.drawImage(e, 0, 0), this.zoomifyImage_ = n.canvas, n.canvas } return e }, e }(Wu),
            Nl = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n.size,
                        o = void 0 !== n.tierSizeCalculation ? n.tierSizeCalculation : Fl.DEFAULT,
                        a = i[0],
                        s = i[1],
                        u = n.extent || [0, -i[1], i[0], 0],
                        l = [],
                        h = n.tileSize || In,
                        c = n.tilePixelRatio || 1,
                        p = h; switch (o) {
                        case Fl.DEFAULT:
                            for (; a > p || s > p;) l.push([Math.ceil(a / p), Math.ceil(s / p)]), p += p; break;
                        case Fl.TRUNCATED:
                            for (var f = a, d = s; f > p || d > p;) l.push([Math.ceil(f / p), Math.ceil(d / p)]), f >>= 1, d >>= 1; break;
                        default:
                            K(!1, 53) }
                    l.push([1, 1]), l.reverse(); for (var _ = [1], g = [0], y = 1, v = l.length; y < v; y++) _.push(1 << y), g.push(l[y - 1][0] * l[y - 1][1] + g[y - 1]);
                    _.reverse(); var m = new us({ tileSize: h, extent: u, origin: Ct(u), resolutions: _ }),
                        E = n.url;
                    E && -1 == E.indexOf("{TileGroup}") && -1 == E.indexOf("{tileIndex}") && (E += "{TileGroup}/{z}-{x}-{y}.jpg"); var T = Du(ku(E).map(function(t) { return function(e, r, n) { if (e) { var i = e[0],
                                        o = e[1],
                                        a = e[2],
                                        s = o + a * l[i][0],
                                        u = m.getTileSize(i),
                                        h = Array.isArray(u) ? u[0] : u,
                                        c = { z: i, x: o, y: a, tileIndex: s, TileGroup: "TileGroup" + ((s + g[i]) / h | 0) }; return t.replace(/\{(\w+?)\}/g, function(t, e) { return c[e] }) } } })),
                        S = Al.bind(null, c, m); return (r = t.call(this, { attributions: n.attributions, cacheSize: n.cacheSize, crossOrigin: n.crossOrigin, projection: n.projection, tilePixelRatio: c, reprojectionErrorThreshold: n.reprojectionErrorThreshold, tileClass: S, tileGrid: m, tileUrlFunction: T, transition: n.transition }) || this).zDirection = n.zDirection, r } return Ml(e, t), e }(gl),
            Gl = { VERSION1: "version1", VERSION2: "version2", VERSION3: "version3" },
            Dl = {};
        Dl[Gl.VERSION1] = { level0: { supports: [], formats: [], qualities: ["native"] }, level1: { supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"], formats: ["jpg"], qualities: ["native"] }, level2: { supports: ["regionByPx", "regionByPct", "sizeByW", "sizeByH", "sizeByPct", "sizeByConfinedWh", "sizeByWh"], formats: ["jpg", "png"], qualities: ["native", "color", "grey", "bitonal"] } }, Dl[Gl.VERSION2] = { level0: { supports: [], formats: ["jpg"], qualities: ["default"] }, level1: { supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"], formats: ["jpg"], qualities: ["default"] }, level2: { supports: ["regionByPx", "regionByPct", "sizeByW", "sizeByH", "sizeByPct", "sizeByConfinedWh", "sizeByDistortedWh", "sizeByWh"], formats: ["jpg", "png"], qualities: ["default", "bitonal"] } }, Dl[Gl.VERSION3] = { level0: { supports: [], formats: ["jpg"], qualities: ["default"] }, level1: { supports: ["regionByPx", "regionSquare", "sizeByW", "sizeByH", "sizeByWh"], formats: ["jpg"], qualities: ["default"] }, level2: { supports: ["regionByPx", "regionSquare", "regionByPct", "sizeByW", "sizeByH", "sizeByPct", "sizeByConfinedWh", "sizeByWh"], formats: ["jpg", "png"], qualities: ["default"] } }, Dl.none = { none: { supports: [], formats: [], qualities: [] } }; var jl = new RegExp("^https?://library.stanford.edu/iiif/image-api/(1.1/)?compliance.html#level[0-2]$"),
            kl = new RegExp("^https?://iiif.io/api/image/2/level[0-2](.json)?$"),
            Ul = new RegExp("(^https?://iiif.io/api/image/3/level[0-2](.json)?$)|(^level[0-2]$)"); var Bl = {};
        Bl[Gl.VERSION1] = function(t) { var e = t.getComplianceLevelSupportedFeatures(); return void 0 === e && (e = Dl[Gl.VERSION1].level0), { url: void 0 === t.imageInfo["@id"] ? void 0 : t.imageInfo["@id"].replace(/\/?(info.json)?$/g, ""), supports: e.supports, formats: e.formats.concat([void 0 === t.imageInfo.formats ? [] : t.imageInfo.formats]), qualities: e.qualities.concat([void 0 === t.imageInfo.qualities ? [] : t.imageInfo.qualities]), resolutions: t.imageInfo.scale_factors, tileSize: void 0 !== t.imageInfo.tile_width ? void 0 !== t.imageInfo.tile_height ? [t.imageInfo.tile_width, t.imageInfo.tile_height] : [t.imageInfo.tile_width, t.imageInfo.tile_width] : null != t.imageInfo.tile_height ? [t.imageInfo.tile_height, t.imageInfo.tile_height] : void 0 } }, Bl[Gl.VERSION2] = function(t) { var e = t.getComplianceLevelSupportedFeatures(),
                r = Array.isArray(t.imageInfo.profile) && t.imageInfo.profile.length > 1,
                n = r && t.imageInfo.profile[1].supports ? t.imageInfo.profile[1].supports : [],
                i = r && t.imageInfo.profile[1].formats ? t.imageInfo.profile[1].formats : [],
                o = r && t.imageInfo.profile[1].qualities ? t.imageInfo.profile[1].qualities : []; return { url: t.imageInfo["@id"].replace(/\/?(info.json)?$/g, ""), sizes: void 0 === t.imageInfo.sizes ? void 0 : t.imageInfo.sizes.map(function(t) { return [t.width, t.height] }), tileSize: void 0 === t.imageInfo.tiles ? void 0 : [t.imageInfo.tiles.map(function(t) { return t.width })[0], t.imageInfo.tiles.map(function(t) { return void 0 === t.height ? t.width : t.height })[0]], resolutions: void 0 === t.imageInfo.tiles ? void 0 : t.imageInfo.tiles.map(function(t) { return t.scaleFactors })[0], supports: e.supports.concat(n), formats: e.formats.concat(i), qualities: e.qualities.concat(o) } }, Bl[Gl.VERSION3] = function(t) { var e = t.getComplianceLevelSupportedFeatures(),
                r = void 0 === t.imageInfo.extraFormats ? e.formats : e.formats.concat(t.imageInfo.extraFormats),
                n = void 0 !== t.imageInfo.preferredFormats && Array.isArray(t.imageInfo.preferredFormats) && t.imageInfo.preferredFormats.length > 0 ? t.imageInfo.preferredFormats.filter(function(t) { return ["jpg", "png", "gif"].includes(t) }).reduce(function(t, e) { return void 0 === t && r.includes(e) ? e : t }, void 0) : void 0; return { url: t.imageInfo.id, sizes: void 0 === t.imageInfo.sizes ? void 0 : t.imageInfo.sizes.map(function(t) { return [t.width, t.height] }), tileSize: void 0 === t.imageInfo.tiles ? void 0 : [t.imageInfo.tiles.map(function(t) { return t.width })[0], t.imageInfo.tiles.map(function(t) { return t.height })[0]], resolutions: void 0 === t.imageInfo.tiles ? void 0 : t.imageInfo.tiles.map(function(t) { return t.scaleFactors })[0], supports: void 0 === t.imageInfo.extraFeatures ? e.supports : e.supports.concat(t.imageInfo.extraFeatures), formats: r, qualities: void 0 === t.imageInfo.extraQualities ? e.qualities : e.qualities.concat(t.imageInfo.extraQualities), preferredFormat: n } }; var Yl = function() {
                function t(t) { this.setImageInfo(t) } return t.prototype.setImageInfo = function(t) { this.imageInfo = "string" == typeof t ? JSON.parse(t) : t }, t.prototype.getImageApiVersion = function() { if (void 0 !== this.imageInfo) { var t = this.imageInfo["@context"] || "ol-no-context"; "string" == typeof t && (t = [t]); for (var e = 0; e < t.length; e++) switch (t[e]) {
                            case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                            case "http://iiif.io/api/image/1/context.json":
                                return Gl.VERSION1;
                            case "http://iiif.io/api/image/2/context.json":
                                return Gl.VERSION2;
                            case "http://iiif.io/api/image/3/context.json":
                                return Gl.VERSION3;
                            case "ol-no-context":
                                if (this.getComplianceLevelEntryFromProfile(Gl.VERSION1) && this.imageInfo.identifier) return Gl.VERSION1 }
                        K(!1, 61) } }, t.prototype.getComplianceLevelEntryFromProfile = function(t) { if (void 0 !== this.imageInfo && void 0 !== this.imageInfo.profile) switch (void 0 === t && (t = this.getImageApiVersion()), t) {
                        case Gl.VERSION1:
                            if (jl.test(this.imageInfo.profile)) return this.imageInfo.profile; break;
                        case Gl.VERSION3:
                            if (Ul.test(this.imageInfo.profile)) return this.imageInfo.profile; break;
                        case Gl.VERSION2:
                            if ("string" == typeof this.imageInfo.profile && kl.test(this.imageInfo.profile)) return this.imageInfo.profile; if (Array.isArray(this.imageInfo.profile) && this.imageInfo.profile.length > 0 && "string" == typeof this.imageInfo.profile[0] && kl.test(this.imageInfo.profile[0])) return this.imageInfo.profile[0] } }, t.prototype.getComplianceLevelFromProfile = function(t) { var e = this.getComplianceLevelEntryFromProfile(t); if (void 0 !== e) { var r = e.match(/level[0-2](\.json)?$/g); return Array.isArray(r) ? r[0].replace(".json", "") : void 0 } }, t.prototype.getComplianceLevelSupportedFeatures = function() { if (void 0 !== this.imageInfo) { var t = this.getImageApiVersion(),
                            e = this.getComplianceLevelFromProfile(t); return void 0 === e ? Dl.none.none : Dl[t][e] } }, t.prototype.getTileSourceOptions = function(t) { var e = t || {},
                        r = this.getImageApiVersion(); if (void 0 !== r) { var n = void 0 === r ? void 0 : Bl[r](this); if (void 0 !== n) return { url: n.url, version: r, size: [this.imageInfo.width, this.imageInfo.height], sizes: n.sizes, format: void 0 !== e.format && n.formats.includes(e.format) ? e.format : void 0 !== n.preferredFormat ? n.preferredFormat : "jpg", supports: n.supports, quality: e.quality && n.qualities.includes(e.quality) ? e.quality : n.qualities.includes("native") ? "native" : "default", resolutions: Array.isArray(n.resolutions) ? n.resolutions.sort(function(t, e) { return e - t }) : void 0, tileSize: n.tileSize } } }, t }(),
            zl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Xl(t) { return t.toLocaleString("en", { maximumFractionDigits: 10 }) } var Vl = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n.url || "";
                    i += i.lastIndexOf("/") === i.length - 1 || "" === i ? "" : "/"; var o = n.version || Gl.VERSION2,
                        a = n.sizes || [],
                        s = n.size;
                    K(null != s && Array.isArray(s) && 2 == s.length && !isNaN(s[0]) && s[0] > 0 && !isNaN(s[1]) && s[1] > 0, 60); var u, l, h, c = s[0],
                        p = s[1],
                        f = n.tileSize,
                        d = n.tilePixelRatio || 1,
                        _ = n.format || "jpg",
                        g = n.quality || (n.version == Gl.VERSION1 ? "native" : "default"),
                        y = n.resolutions || [],
                        v = n.supports || [],
                        m = n.extent || [0, -p, c, 0],
                        E = null != a && Array.isArray(a) && a.length > 0,
                        T = null != f && ("number" == typeof f && Number.isInteger(f) && f > 0 || Array.isArray(f) && f.length > 0),
                        S = null != v && Array.isArray(v) && (v.includes("regionByPx") || v.includes("regionByPct")) && (v.includes("sizeByWh") || v.includes("sizeByH") || v.includes("sizeByW") || v.includes("sizeByPct")); if (y.sort(function(t, e) { return e - t }), T || S)
                        if (null != f && ("number" == typeof f && Number.isInteger(f) && f > 0 ? (u = f, l = f) : Array.isArray(f) && f.length > 0 && ((1 == f.length || null == f[1] && Number.isInteger(f[0])) && (u = f[0], l = f[0]), 2 == f.length && (Number.isInteger(f[0]) && Number.isInteger(f[1]) ? (u = f[0], l = f[1]) : null == f[0] && Number.isInteger(f[1]) && (u = f[1], l = f[1])))), void 0 !== u && void 0 !== l || (u = In, l = In), 0 == y.length)
                            for (var w = h = Math.max(Math.ceil(Math.log(c / u) / Math.LN2), Math.ceil(Math.log(p / l) / Math.LN2)); w >= 0; w--) y.push(Math.pow(2, w));
                        else { var x = Math.max.apply(Math, y);
                            h = Math.round(Math.log(x) / Math.LN2) }
                    else if (u = c, l = p, y = [], E) { a.sort(function(t, e) { return t[0] - e[0] }), h = -1; var O = []; for (w = 0; w < a.length; w++) { var R = c / a[w][0];
                            y.length > 0 && y[y.length - 1] == R ? O.push(w) : (y.push(R), h++) } if (O.length > 0)
                            for (w = 0; w < O.length; w++) a.splice(O[w] - w, 1) } else y.push(1), a.push([c, p]), h = 0; var C = new us({ tileSize: [u, l], extent: m, origin: Ct(m), resolutions: y }),
                        P = Al.bind(null, d, C); return (r = t.call(this, { attributions: n.attributions, attributionsCollapsible: n.attributionsCollapsible, cacheSize: n.cacheSize, crossOrigin: n.crossOrigin, projection: n.projection, reprojectionErrorThreshold: n.reprojectionErrorThreshold, state: n.state, tileClass: P, tileGrid: C, tilePixelRatio: n.tilePixelRatio, tileUrlFunction: function(t, e, r) { var n, s, f = t[0]; if (!(f > h)) { var d = t[1],
                                    m = t[2],
                                    w = y[f]; if (!(void 0 === d || void 0 === m || void 0 === w || d < 0 || Math.ceil(c / w / u) <= d || m < 0 || Math.ceil(p / w / l) <= m)) { if (S || T) { var x = d * u * w,
                                            O = m * l * w,
                                            R = u * w,
                                            C = l * w,
                                            P = u,
                                            I = l; if (x + R > c && (R = c - x), O + C > p && (C = p - O), x + u * w > c && (P = Math.floor((c - x + w - 1) / w)), O + l * w > p && (I = Math.floor((p - O + w - 1) / w)), 0 == x && R == c && 0 == O && C == p) n = "full";
                                        else if (!S || v.includes("regionByPx")) n = x + "," + O + "," + R + "," + C;
                                        else if (v.includes("regionByPct")) { n = "pct:" + Xl(x / c * 100) + "," + Xl(O / p * 100) + "," + Xl(R / c * 100) + "," + Xl(C / p * 100) }
                                        o != Gl.VERSION3 || S && !v.includes("sizeByWh") ? !S || v.includes("sizeByW") ? s = P + "," : v.includes("sizeByH") ? s = "," + I : v.includes("sizeByWh") ? s = P + "," + I : v.includes("sizeByPct") && (s = "pct:" + Xl(100 / w)) : s = P + "," + I } else if (n = "full", E) { var b = a[f][0],
                                            L = a[f][1];
                                        s = o == Gl.VERSION3 ? b == c && L == p ? "max" : b + "," + L : b == c ? "full" : b + "," } else s = o == Gl.VERSION3 ? "max" : "full"; return i + n + "/" + s + "/0/" + g + "." + _ } } }, transition: n.transition }) || this).zDirection = n.zDirection, r } return zl(e, t), e }(gl),
            Wl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Zl = function(t) {
                function e(e, r, n, i, o, a) { var s = this,
                        u = e.getExtent(),
                        l = r.getExtent(),
                        h = l ? Rt(n, l) : n,
                        c = Hu(e, r, St(h), i),
                        p = new $u(e, r, h, u, c * Bu),
                        f = a(p.calculateSourceExtent(), c, o),
                        d = f ? su.IDLE : su.EMPTY,
                        _ = f ? f.getPixelRatio() : 1; return (s = t.call(this, n, i, _, d) || this).targetProj_ = r, s.maxSourceExtent_ = u, s.triangulation_ = p, s.targetResolution_ = i, s.targetExtent_ = n, s.sourceImage_ = f, s.sourcePixelRatio_ = _, s.canvas_ = null, s.sourceListenerKey_ = null, s } return Wl(e, t), e.prototype.disposeInternal = function() { this.state == su.LOADING && this.unlistenSource_(), t.prototype.disposeInternal.call(this) }, e.prototype.getImage = function() { return this.canvas_ }, e.prototype.getProjection = function() { return this.targetProj_ }, e.prototype.reproject_ = function() { var t = this.sourceImage_.getState(); if (t == su.LOADED) { var e = It(this.targetExtent_) / this.targetResolution_,
                            r = Ot(this.targetExtent_) / this.targetResolution_;
                        this.canvas_ = Ju(e, r, this.sourcePixelRatio_, this.sourceImage_.getResolution(), this.maxSourceExtent_, this.targetResolution_, this.targetExtent_, this.triangulation_, [{ extent: this.sourceImage_.getExtent(), image: this.sourceImage_.getImage() }], 0) }
                    this.state = t, this.changed() }, e.prototype.load = function() { if (this.state == su.IDLE) { this.state = su.LOADING, this.changed(); var t = this.sourceImage_.getState();
                        t == su.LOADED || t == su.ERROR ? this.reproject_() : (this.sourceListenerKey_ = g(this.sourceImage_, N.CHANGE, function(t) { var e = this.sourceImage_.getState();
                            e != su.LOADED && e != su.ERROR || (this.unlistenSource_(), this.reproject_()) }, this), this.sourceImage_.load()) } }, e.prototype.unlistenSource_ = function() { v(this.sourceListenerKey_), this.sourceListenerKey_ = null }, e }(gu),
            Kl = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Hl = "imageloadstart",
            ql = "imageloadend",
            Jl = "imageloaderror",
            Ql = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.image = r, n } return Kl(e, t), e }(M);

        function $l(t, e) { t.getImage().src = e } var th = function(t) {
            function e(e) { var r = t.call(this, { attributions: e.attributions, projection: e.projection, state: e.state }) || this; return r.resolutions_ = void 0 !== e.resolutions ? e.resolutions : null, r.reprojectedImage_ = null, r.reprojectedRevision_ = 0, r } return Kl(e, t), e.prototype.getResolutions = function() { return this.resolutions_ }, e.prototype.findNearestResolution = function(t) { if (this.resolutions_) { var e = S(this.resolutions_, t, 0);
                    t = this.resolutions_[e] } return t }, e.prototype.getImage = function(t, e, r, n) { var i = this.getProjection(); if (i && n && !Ie(i, n)) { if (this.reprojectedImage_) { if (this.reprojectedRevision_ == this.getRevision() && Ie(this.reprojectedImage_.getProjection(), n) && this.reprojectedImage_.getResolution() == e && pt(this.reprojectedImage_.getExtent(), t)) return this.reprojectedImage_;
                        this.reprojectedImage_.dispose(), this.reprojectedImage_ = null } return this.reprojectedImage_ = new Zl(i, n, t, e, r, function(t, e, r) { return this.getImageInternal(t, e, r, i) }.bind(this)), this.reprojectedRevision_ = this.getRevision(), this.reprojectedImage_ } return i && (n = i), this.getImageInternal(t, e, r, n) }, e.prototype.getImageInternal = function(t, e, r, i) { return n() }, e.prototype.handleImageChange = function(t) { var e = t.target; switch (e.getState()) {
                    case su.LOADING:
                        this.loading = !0, this.dispatchEvent(new Ql(Hl, e)); break;
                    case su.LOADED:
                        this.loading = !1, this.dispatchEvent(new Ql(ql, e)); break;
                    case su.ERROR:
                        this.loading = !1, this.dispatchEvent(new Ql(Jl, e)) } }, e }(il);

        function eh(t, e) { var r = [];
            Object.keys(e).forEach(function(t) { null !== e[t] && void 0 !== e[t] && r.push(t + "=" + encodeURIComponent(e[t])) }); var n = r.join("&"); return (t = -1 === (t = t.replace(/[?&]$/, "")).indexOf("?") ? t + "?" : t + "&") + n } var rh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            nh = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { attributions: n.attributions, projection: n.projection, resolutions: n.resolutions }) || this).crossOrigin_ = void 0 !== n.crossOrigin ? n.crossOrigin : null, r.hidpi_ = void 0 === n.hidpi || n.hidpi, r.url_ = n.url, r.imageLoadFunction_ = void 0 !== n.imageLoadFunction ? n.imageLoadFunction : $l, r.params_ = n.params || {}, r.image_ = null, r.imageSize_ = [0, 0], r.renderedRevision_ = 0, r.ratio_ = void 0 !== n.ratio ? n.ratio : 1.5, r } return rh(e, t), e.prototype.getParams = function() { return this.params_ }, e.prototype.getImageInternal = function(t, e, r, n) { if (void 0 === this.url_) return null;
                    e = this.findNearestResolution(e), r = this.hidpi_ ? r : 1; var i = this.image_; if (i && this.renderedRevision_ == this.getRevision() && i.getResolution() == e && i.getPixelRatio() == r && it(i.getExtent(), t)) return i; var o = { F: "image", FORMAT: "PNG32", TRANSPARENT: !0 };
                    p(o, this.params_); var a = ((t = t.slice())[0] + t[2]) / 2,
                        s = (t[1] + t[3]) / 2; if (1 != this.ratio_) { var u = this.ratio_ * It(t) / 2,
                            l = this.ratio_ * Ot(t) / 2;
                        t[0] = a - u, t[1] = s - l, t[2] = a + u, t[3] = s + l } var h = e / r,
                        c = Math.ceil(It(t) / h),
                        f = Math.ceil(Ot(t) / h);
                    t[0] = a - h * c / 2, t[2] = a + h * c / 2, t[1] = s - h * f / 2, t[3] = s + h * f / 2, this.imageSize_[0] = c, this.imageSize_[1] = f; var d = this.getRequestUrl_(t, this.imageSize_, r, n, o); return this.image_ = new mu(t, e, r, d, this.crossOrigin_, this.imageLoadFunction_), this.renderedRevision_ = this.getRevision(), this.image_.addEventListener(N.CHANGE, this.handleImageChange.bind(this)), this.image_ }, e.prototype.getImageLoadFunction = function() { return this.imageLoadFunction_ }, e.prototype.getRequestUrl_ = function(t, e, r, n, i) { var o = n.getCode().split(":").pop();
                    i.SIZE = e[0] + "," + e[1], i.BBOX = t.join(","), i.BBOXSR = o, i.IMAGESR = o, i.DPI = Math.round(90 * r); var a = this.url_,
                        s = a.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"); return s == a && K(!1, 50), eh(s, i) }, e.prototype.getUrl = function() { return this.url_ }, e.prototype.setImageLoadFunction = function(t) { this.image_ = null, this.imageLoadFunction_ = t, this.changed() }, e.prototype.setUrl = function(t) { t != this.url_ && (this.url_ = t, this.image_ = null, this.changed()) }, e.prototype.updateParams = function(t) { p(this.params_, t), this.image_ = null, this.changed() }, e }(th),
            ih = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            oh = function(t) {
                function e(e, r, n, i, o) { var a = this,
                        s = void 0 !== o ? su.IDLE : su.LOADED; return (a = t.call(this, e, r, n, s) || this).loader_ = void 0 !== o ? o : null, a.canvas_ = i, a.error_ = null, a } return ih(e, t), e.prototype.getError = function() { return this.error_ }, e.prototype.handleLoad_ = function(t) { t ? (this.error_ = t, this.state = su.ERROR) : this.state = su.LOADED, this.changed() }, e.prototype.load = function() { this.state == su.IDLE && (this.state = su.LOADING, this.changed(), this.loader_(this.handleLoad_.bind(this))) }, e.prototype.getImage = function() { return this.canvas_ }, e }(gu),
            ah = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            sh = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { attributions: n.attributions, projection: n.projection, resolutions: n.resolutions, state: n.state }) || this).canvasFunction_ = n.canvasFunction, r.canvas_ = null, r.renderedRevision_ = 0, r.ratio_ = void 0 !== n.ratio ? n.ratio : 1.5, r } return ah(e, t), e.prototype.getImageInternal = function(t, e, r, n) { e = this.findNearestResolution(e); var i = this.canvas_; if (i && this.renderedRevision_ == this.getRevision() && i.getResolution() == e && i.getPixelRatio() == r && it(i.getExtent(), t)) return i;
                    Mt(t = t.slice(), this.ratio_); var o = [It(t) / e * r, Ot(t) / e * r],
                        a = this.canvasFunction_.call(this, t, e, r, o, n); return a && (i = new oh(t, e, r, a)), this.canvas_ = i, this.renderedRevision_ = this.getRevision(), i }, e }(th),
            uh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(); var lh = function(t) {
                function e(e) { var r = t.call(this, { projection: e.projection, resolutions: e.resolutions }) || this; return r.crossOrigin_ = void 0 !== e.crossOrigin ? e.crossOrigin : null, r.displayDpi_ = void 0 !== e.displayDpi ? e.displayDpi : 96, r.params_ = e.params || {}, r.url_ = e.url, r.imageLoadFunction_ = void 0 !== e.imageLoadFunction ? e.imageLoadFunction : $l, r.hidpi_ = void 0 === e.hidpi || e.hidpi, r.metersPerUnit_ = void 0 !== e.metersPerUnit ? e.metersPerUnit : 1, r.ratio_ = void 0 !== e.ratio ? e.ratio : 1, r.useOverlay_ = void 0 !== e.useOverlay && e.useOverlay, r.image_ = null, r.renderedRevision_ = 0, r } return uh(e, t), e.prototype.getParams = function() { return this.params_ }, e.prototype.getImageInternal = function(t, e, r, n) { e = this.findNearestResolution(e), r = this.hidpi_ ? r : 1; var i = this.image_; if (i && this.renderedRevision_ == this.getRevision() && i.getResolution() == e && i.getPixelRatio() == r && it(i.getExtent(), t)) return i;
                    1 != this.ratio_ && Mt(t = t.slice(), this.ratio_); var o = [It(t) / e * r, Ot(t) / e * r]; if (void 0 !== this.url_) { var a = this.getUrl(this.url_, this.params_, t, o, n);
                        (i = new mu(t, e, r, a, this.crossOrigin_, this.imageLoadFunction_)).addEventListener(N.CHANGE, this.handleImageChange.bind(this)) } else i = null; return this.image_ = i, this.renderedRevision_ = this.getRevision(), i }, e.prototype.getImageLoadFunction = function() { return this.imageLoadFunction_ }, e.prototype.updateParams = function(t) { p(this.params_, t), this.changed() }, e.prototype.getUrl = function(t, e, r, n, i) { var o = function(t, e, r, n) { var i = It(t),
                                o = Ot(t),
                                a = e[0],
                                s = e[1],
                                u = .0254 / n; return s * i > a * o ? i * r / (a * u) : o * r / (s * u) }(r, n, this.metersPerUnit_, this.displayDpi_),
                        a = St(r),
                        s = { OPERATION: this.useOverlay_ ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE", VERSION: "2.0.0", LOCALE: "en", CLIENTAGENT: "ol/source/ImageMapGuide source", CLIP: "1", SETDISPLAYDPI: this.displayDpi_, SETDISPLAYWIDTH: Math.round(n[0]), SETDISPLAYHEIGHT: Math.round(n[1]), SETVIEWSCALE: o, SETVIEWCENTERX: a[0], SETVIEWCENTERY: a[1] }; return p(s, e), eh(t, s) }, e.prototype.setImageLoadFunction = function(t) { this.image_ = null, this.imageLoadFunction_ = t, this.changed() }, e }(th),
            hh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ch = function(t) {
                function e(e) { var r = this,
                        n = void 0 !== e.crossOrigin ? e.crossOrigin : null,
                        i = void 0 !== e.imageLoadFunction ? e.imageLoadFunction : $l; return (r = t.call(this, { attributions: e.attributions, projection: we(e.projection) }) || this).url_ = e.url, r.imageExtent_ = e.imageExtent, r.image_ = new mu(r.imageExtent_, void 0, 1, r.url_, n, i), r.imageSize_ = e.imageSize ? e.imageSize : null, r.image_.addEventListener(N.CHANGE, r.handleImageChange.bind(r)), r } return hh(e, t), e.prototype.getImageExtent = function() { return this.imageExtent_ }, e.prototype.getImageInternal = function(t, e, r, n) { return bt(t, this.image_.getExtent()) ? this.image_ : null }, e.prototype.getUrl = function() { return this.url_ }, e.prototype.handleImageChange = function(e) { if (this.image_.getState() == su.LOADED) { var r = this.image_.getExtent(),
                            n = this.image_.getImage(),
                            i = void 0,
                            o = void 0;
                        this.imageSize_ ? (i = this.imageSize_[0], o = this.imageSize_[1]) : (i = n.width, o = n.height); var a = Ot(r) / o,
                            s = Math.ceil(It(r) / a); if (s != i) { var u = hi(s, o),
                                l = u.canvas;
                            u.drawImage(n, 0, 0, i, o, 0, 0, l.width, l.height), this.image_.setImage(l) } }
                    t.prototype.handleImageChange.call(this, e) }, e }(th),
            ph = "1.3.0",
            fh = "carmentaserver",
            dh = "geoserver",
            _h = "mapserver",
            gh = "qgis",
            yh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            vh = [101, 101],
            mh = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { attributions: n.attributions, projection: n.projection, resolutions: n.resolutions }) || this).crossOrigin_ = void 0 !== n.crossOrigin ? n.crossOrigin : null, r.url_ = n.url, r.imageLoadFunction_ = void 0 !== n.imageLoadFunction ? n.imageLoadFunction : $l, r.params_ = n.params || {}, r.v13_ = !0, r.updateV13_(), r.serverType_ = n.serverType, r.hidpi_ = void 0 === n.hidpi || n.hidpi, r.image_ = null, r.imageSize_ = [0, 0], r.renderedRevision_ = 0, r.ratio_ = void 0 !== n.ratio ? n.ratio : 1.5, r } return yh(e, t), e.prototype.getFeatureInfoUrl = function(t, e, r, n) { if (void 0 !== this.url_) { var i = we(r),
                            o = this.getProjection();
                        o && o !== i && (e = Hu(o, i, t, e), t = Me(t, i, o)); var a = xt(t, e, 0, vh),
                            s = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetFeatureInfo", FORMAT: "image/png", TRANSPARENT: !0, QUERY_LAYERS: this.params_.LAYERS };
                        p(s, this.params_, n); var u = Math.floor((t[0] - a[0]) / e),
                            l = Math.floor((a[3] - t[1]) / e); return s[this.v13_ ? "I" : "X"] = u, s[this.v13_ ? "J" : "Y"] = l, this.getRequestUrl_(a, vh, 1, o || i, s) } }, e.prototype.getLegendUrl = function(t, e) { if (void 0 !== this.url_) { var r = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetLegendGraphic", FORMAT: "image/png" }; if (void 0 === e || void 0 === e.LAYER) { var n = this.params_.LAYERS; if (!(!Array.isArray(n) || 1 === n.length)) return;
                            r.LAYER = n } if (void 0 !== t) { var i = this.getProjection() ? this.getProjection().getMetersPerUnit() : 1;
                            r.SCALE = t * i * 39.37 * (25.4 / .28) } return p(r, e), eh(this.url_, r) } }, e.prototype.getParams = function() { return this.params_ }, e.prototype.getImageInternal = function(t, e, r, n) { if (void 0 === this.url_) return null;
                    e = this.findNearestResolution(e), 1 == r || this.hidpi_ && void 0 !== this.serverType_ || (r = 1); var i = e / r,
                        o = St(t),
                        a = xt(o, i, 0, [Math.ceil(It(t) / i), Math.ceil(Ot(t) / i)]),
                        s = xt(o, i, 0, [Math.ceil(this.ratio_ * It(t) / i), Math.ceil(this.ratio_ * Ot(t) / i)]),
                        u = this.image_; if (u && this.renderedRevision_ == this.getRevision() && u.getResolution() == e && u.getPixelRatio() == r && it(u.getExtent(), a)) return u; var l = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0 };
                    p(l, this.params_), this.imageSize_[0] = Math.round(It(s) / i), this.imageSize_[1] = Math.round(Ot(s) / i); var h = this.getRequestUrl_(s, this.imageSize_, r, n, l); return this.image_ = new mu(s, e, r, h, this.crossOrigin_, this.imageLoadFunction_), this.renderedRevision_ = this.getRevision(), this.image_.addEventListener(N.CHANGE, this.handleImageChange.bind(this)), this.image_ }, e.prototype.getImageLoadFunction = function() { return this.imageLoadFunction_ }, e.prototype.getRequestUrl_ = function(t, e, r, n, i) { if (K(void 0 !== this.url_, 9), i[this.v13_ ? "CRS" : "SRS"] = n.getCode(), "STYLES" in this.params_ || (i.STYLES = ""), 1 != r) switch (this.serverType_) {
                        case dh:
                            var o = 90 * r + .5 | 0; "FORMAT_OPTIONS" in i ? i.FORMAT_OPTIONS += ";dpi:" + o : i.FORMAT_OPTIONS = "dpi:" + o; break;
                        case _h:
                            i.MAP_RESOLUTION = 90 * r; break;
                        case fh:
                        case gh:
                            i.DPI = 90 * r; break;
                        default:
                            K(!1, 8) }
                    i.WIDTH = e[0], i.HEIGHT = e[1]; var a, s = n.getAxisOrientation(); return a = this.v13_ && "ne" == s.substr(0, 2) ? [t[1], t[0], t[3], t[2]] : t, i.BBOX = a.join(","), eh(this.url_, i) }, e.prototype.getUrl = function() { return this.url_ }, e.prototype.setImageLoadFunction = function(t) { this.image_ = null, this.imageLoadFunction_ = t, this.changed() }, e.prototype.setUrl = function(t) { t != this.url_ && (this.url_ = t, this.image_ = null, this.changed()) }, e.prototype.updateParams = function(t) { p(this.params_, t), this.updateV13_(), this.image_ = null, this.changed() }, e.prototype.updateV13_ = function() { var t = this.params_.VERSION || ph;
                    this.v13_ = zn(t, "1.3") >= 0 }, e }(th),
            Eh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Th = '&#169; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
            Sh = function(t) {
                function e(e) { var r, n = e || {};
                    r = void 0 !== n.attributions ? n.attributions : [Th]; var i = void 0 !== n.crossOrigin ? n.crossOrigin : "anonymous",
                        o = void 0 !== n.url ? n.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"; return t.call(this, { attributions: r, cacheSize: n.cacheSize, crossOrigin: i, opaque: void 0 === n.opaque || n.opaque, maxZoom: void 0 !== n.maxZoom ? n.maxZoom : 19, reprojectionErrorThreshold: n.reprojectionErrorThreshold, tileLoadFunction: n.tileLoadFunction, url: o, wrapX: n.wrapX, attributionsCollapsible: !1 }) || this } return Eh(e, t), e }(El),
            wh = r(3),
            xh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Oh = function(t) {
                function e(e) { var r = e || {}; return t.call(this, r) || this } return xh(e, t), e }(Bi),
            Rh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ch = function(t) {
                function e(e) { var r = t.call(this) || this; return r.boundHandleImageChange_ = r.handleImageChange_.bind(r), r.layer_ = e, r } return Rh(e, t), e.prototype.prepareFrame = function(t) { return n() }, e.prototype.renderFrame = function(t, e) { return n() }, e.prototype.loadedTileCallback = function(t, e, r) { t[e] || (t[e] = {}), t[e][r.tileCoord.toString()] = r }, e.prototype.createLoadedTileFinder = function(t, e, r) { return function(n, i) { var o = this.loadedTileCallback.bind(this, r, n); return t.forEachLoadedTile(e, n, i, o) }.bind(this) }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i) {}, e.prototype.getDataAtPixel = function(t, e, r) { return n() }, e.prototype.getLayer = function() { return this.layer_ }, e.prototype.handleFontsChanged = function() {}, e.prototype.handleImageChange_ = function(t) { t.target.getState() === su.LOADED && this.renderIfReadyAndVisible() }, e.prototype.loadImage = function(t) { var e = t.getState(); return e != su.LOADED && e != su.ERROR && t.addEventListener(N.CHANGE, this.boundHandleImageChange_), e == su.IDLE && (t.load(), e = t.getState()), e == su.LOADED }, e.prototype.renderIfReadyAndVisible = function() { var t = this.getLayer();
                    t.getVisible() && t.getSourceState() == mi.READY && t.changed() }, e }(D),
            Ph = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ih = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.container = null, r.renderedResolution, r.tempTransform_ = [1, 0, 0, 1, 0, 0], r.pixelTransform = [1, 0, 0, 1, 0, 0], r.inversePixelTransform = [1, 0, 0, 1, 0, 0], r.context = null, r.containerReused = !1, r } return Ph(e, t), e.prototype.useContainer = function(t, e, r) { var n, i, o = this.getLayer().getClassName();
                    t && "" === t.style.opacity && t.className === o && ((s = t.firstElementChild) instanceof HTMLCanvasElement && (i = s.getContext("2d"))); if (i && i.canvas.style.transform === Qe(e) ? (this.container = t, this.context = i, this.containerReused = !0) : this.containerReused && (this.container = null, this.context = null, this.containerReused = !1), !this.container) {
                        (n = document.createElement("div")).className = o; var a = n.style;
                        a.position = "absolute", a.width = "100%", a.height = "100%"; var s = (i = hi()).canvas;
                        n.appendChild(s), (a = s.style).position = "absolute", a.transformOrigin = "top left", this.container = n, this.context = i } }, e.prototype.clip = function(t, e, r) { var n = e.pixelRatio,
                        i = e.size[0] * n / 2,
                        o = e.size[1] * n / 2,
                        a = e.viewState.rotation,
                        s = Ct(r),
                        u = Pt(r),
                        l = Tt(r),
                        h = Et(r);
                    Ze(e.coordinateToPixelTransform, s), Ze(e.coordinateToPixelTransform, u), Ze(e.coordinateToPixelTransform, l), Ze(e.coordinateToPixelTransform, h), t.save(), La(t, -a, i, o), t.beginPath(), t.moveTo(s[0] * n, s[1] * n), t.lineTo(u[0] * n, u[1] * n), t.lineTo(l[0] * n, l[1] * n), t.lineTo(h[0] * n, h[1] * n), t.clip(), La(t, a, i, o) }, e.prototype.clipUnrotated = function(t, e, r) { var n = Ct(r),
                        i = Pt(r),
                        o = Tt(r),
                        a = Et(r);
                    Ze(e.coordinateToPixelTransform, n), Ze(e.coordinateToPixelTransform, i), Ze(e.coordinateToPixelTransform, o), Ze(e.coordinateToPixelTransform, a); var s = this.inversePixelTransform;
                    Ze(s, n), Ze(s, i), Ze(s, o), Ze(s, a), t.save(), t.beginPath(), t.moveTo(Math.round(n[0]), Math.round(n[1])), t.lineTo(Math.round(i[0]), Math.round(i[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip() }, e.prototype.dispatchRenderEvent_ = function(t, e, r) { var n = this.getLayer(); if (n.hasListener(t)) { var i = new ta(t, this.inversePixelTransform, r, e);
                        n.dispatchEvent(i) } }, e.prototype.preRender = function(t, e) { this.dispatchRenderEvent_(mn, t, e) }, e.prototype.postRender = function(t, e) { this.dispatchRenderEvent_(En, t, e) }, e.prototype.getRenderTransform = function(t, e, r, n) { var i = t.viewState,
                        o = e / 2,
                        a = r / 2,
                        s = t.pixelRatio / i.resolution,
                        u = -s,
                        l = -i.center[0] + n,
                        h = -i.center[1]; return qe(this.tempTransform_, o, a, s, u, -i.rotation, l, h) }, e.prototype.getDataAtPixel = function(t, e, r) { var n, i = Ze(this.inversePixelTransform, t.slice()),
                        o = this.context; try { n = o.getImageData(Math.round(i[0]), Math.round(i[1]), 1, 1).data } catch (t) { return "SecurityError" === t.name ? new Uint8Array : n } return 0 === n[3] ? null : n }, e }(Ch),
            bh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Lh = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.image_ = null, r } return bh(e, t), e.prototype.getImage = function() { return this.image_ ? this.image_.getImage() : null }, e.prototype.prepareFrame = function(t) { var e = t.layerStatesArray[t.layerIndex],
                        r = t.pixelRatio,
                        n = t.viewState,
                        i = n.resolution,
                        o = this.getLayer().getSource(),
                        a = t.viewHints,
                        s = t.extent; if (void 0 !== e.extent && (s = Rt(s, Ye(e.extent, n.projection))), !a[Dn] && !a[jn] && !Lt(s)) { var u = n.projection,
                            l = o.getImage(s, i, r, u);
                        l && this.loadImage(l) && (this.image_ = l) } return !!this.image_ }, e.prototype.renderFrame = function(t, e) { var r = this.image_,
                        n = r.getExtent(),
                        i = r.getResolution(),
                        o = r.getPixelRatio(),
                        a = t.layerStatesArray[t.layerIndex],
                        s = t.pixelRatio,
                        u = t.viewState,
                        l = u.center,
                        h = u.resolution,
                        c = t.size,
                        p = s * i / (h * o),
                        f = Math.round(c[0] * s),
                        d = Math.round(c[1] * s),
                        _ = u.rotation;
                    _ && (f = d = Math.round(Math.sqrt(f * f + d * d)));
                    qe(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / s, 1 / s, _, -f / 2, -d / 2), Je(this.inversePixelTransform, this.pixelTransform), this.useContainer(e, this.pixelTransform, a.opacity); var g = this.context,
                        y = g.canvas;
                    y.width != f || y.height != d ? (y.width = f, y.height = d) : this.containerReused || g.clearRect(0, 0, f, d); var v = !1; if (a.extent) { var m = Ye(a.extent, u.projection);
                        (v = !it(m, t.extent) && bt(m, t.extent)) && this.clipUnrotated(g, t, m) } var E = r.getImage(),
                        T = qe(this.tempTransform_, f / 2, d / 2, p, p, 0, o * (n[0] - l[0]) / i, o * (l[1] - n[3]) / i);
                    this.renderedResolution = i * s / o; var S = T[4],
                        w = T[5],
                        x = E.width * T[0],
                        O = E.height * T[3]; if (this.preRender(g, t), x >= .5 && O >= .5) { var R = a.opacity,
                            C = void 0;
                        1 !== R && (C = this.context.globalAlpha, this.context.globalAlpha = R), this.context.drawImage(E, 0, 0, +E.width, +E.height, Math.round(S), Math.round(w), Math.round(x), Math.round(O)), 1 !== R && (this.context.globalAlpha = C) }
                    this.postRender(g, t), v && g.restore(); var P = Qe(this.pixelTransform); return P !== y.style.transform && (y.style.transform = P), this.container }, e }(Ih),
            Mh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Fh = function(t) {
                function e(e) { return t.call(this, e) || this } return Mh(e, t), e.prototype.createRenderer = function() { return new Lh(this) }, e }(Oh),
            Ah = "preload",
            Nh = "useInterimTilesOnError",
            Gh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Dh = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n); return delete i.preload, delete i.useInterimTilesOnError, (r = t.call(this, i) || this).setPreload(void 0 !== n.preload ? n.preload : 0), r.setUseInterimTilesOnError(void 0 === n.useInterimTilesOnError || n.useInterimTilesOnError), r } return Gh(e, t), e.prototype.getPreload = function() { return this.get(Ah) }, e.prototype.setPreload = function(t) { this.set(Ah, t) }, e.prototype.getUseInterimTilesOnError = function() { return this.get(Nh) }, e.prototype.setUseInterimTilesOnError = function(t) { this.set(Nh, t) }, e }(Bi),
            jh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            kh = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.extentChanged = !0, r.renderedExtent_ = null, r.renderedRevision, r.renderedTiles = [], r.newTiles_ = !1, r.tmpExtent = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r.tmpTileRange_ = new rs(0, 0, 0, 0), r } return jh(e, t), e.prototype.isDrawableTile = function(t) { var e = this.getLayer(),
                        r = t.getState(),
                        n = e.getUseInterimTilesOnError(); return r == xn.LOADED || r == xn.EMPTY || r == xn.ERROR && !n }, e.prototype.getTile = function(t, e, r, n) { var i = n.pixelRatio,
                        o = n.viewState.projection,
                        a = this.getLayer(),
                        s = a.getSource().getTile(t, e, r, i, o); return s.getState() == xn.ERROR && (a.getUseInterimTilesOnError() ? a.getPreload() > 0 && (this.newTiles_ = !0) : s.setState(xn.LOADED)), this.isDrawableTile(s) || (s = s.getInterimTile()), s }, e.prototype.loadedTileCallback = function(e, r, n) { return !!this.isDrawableTile(n) && t.prototype.loadedTileCallback.call(this, e, r, n) }, e.prototype.prepareFrame = function(t) { return !!this.getLayer().getSource() }, e.prototype.renderFrame = function(t, e) { var r = t.layerStatesArray[t.layerIndex],
                        n = t.viewState,
                        i = n.projection,
                        a = n.resolution,
                        s = n.center,
                        u = n.rotation,
                        l = t.pixelRatio,
                        h = this.getLayer(),
                        c = h.getSource(),
                        p = c.getRevision(),
                        f = c.getTileGridForProjection(i),
                        d = f.getZForResolution(a, c.zDirection),
                        _ = f.getResolution(d),
                        g = t.extent,
                        y = r.extent && Ye(r.extent, i);
                    y && (g = Rt(g, Ye(r.extent, i))); var v = c.getTilePixelRatio(l),
                        m = Math.round(t.size[0] * v),
                        T = Math.round(t.size[1] * v);
                    u && (m = T = Math.round(Math.sqrt(m * m + T * T))); var S = _ * m / 2 / v,
                        w = _ * T / 2 / v,
                        x = [s[0] - S, s[1] - w, s[0] + S, s[1] + w],
                        O = f.getTileRangeForExtentAndZ(g, d),
                        R = {};
                    R[d] = {}; var C = this.createLoadedTileFinder(c, i, R),
                        P = this.tmpExtent,
                        I = this.tmpTileRange_;
                    this.newTiles_ = !1; for (var b = O.minX; b <= O.maxX; ++b)
                        for (var L = O.minY; L <= O.maxY; ++L) { var M = this.getTile(d, b, L, t); if (this.isDrawableTile(M)) { var F = o(this); if (M.getState() == xn.LOADED) { R[d][M.tileCoord.toString()] = M; var A = M.inTransition(F);
                                    this.newTiles_ || !A && -1 !== this.renderedTiles.indexOf(M) || (this.newTiles_ = !0) } if (1 === M.getAlpha(F, t.time)) continue } var N = f.getTileCoordChildTileRange(M.tileCoord, I, P),
                                G = !1;
                            N && (G = C(d + 1, N)), G || f.forEachTileCoordParentTileRange(M.tileCoord, C, I, P) }
                    var D = _ / a;
                    qe(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / v, 1 / v, u, -m / 2, -T / 2), this.useContainer(e, this.pixelTransform, r.opacity); var j = this.context,
                        k = j.canvas;
                    Je(this.inversePixelTransform, this.pixelTransform), qe(this.tempTransform_, m / 2, T / 2, D, D, 0, -m / 2, -T / 2), k.width != m || k.height != T ? (k.width = m, k.height = T) : this.containerReused || j.clearRect(0, 0, m, T), y && this.clipUnrotated(j, t, y), this.preRender(j, t), this.renderedTiles.length = 0; var U, B, Y, z = Object.keys(R).map(Number);
                    z.sort(E), 1 !== r.opacity || this.containerReused && !c.getOpaque(t.viewState.projection) ? (U = [], B = []) : z = z.reverse(); for (var X = z.length - 1; X >= 0; --X) { var V = z[X],
                            W = c.getTilePixelSize(V, l, i),
                            Z = f.getResolution(V) / _,
                            K = W[0] * Z * D,
                            H = W[1] * Z * D,
                            q = f.getTileCoordForCoordAndZ(Ct(x), V),
                            J = f.getTileCoordExtent(q),
                            Q = Ze(this.tempTransform_, [v * (J[0] - x[0]) / _, v * (x[3] - J[3]) / _]),
                            $ = v * c.getGutterForProjection(i),
                            tt = R[V]; for (var et in tt) { var rt = (M = tt[et]).tileCoord,
                                nt = Q[0] - (q[1] - rt[1]) * K,
                                it = Math.round(nt + K),
                                ot = Q[1] - (q[2] - rt[2]) * H,
                                at = Math.round(ot + H),
                                st = it - (b = Math.round(nt)),
                                ut = at - (L = Math.round(ot)),
                                lt = d === V; if (!(A = lt && 1 !== M.getAlpha(o(this), t.time)))
                                if (U) { j.save(), Y = [b, L, b + st, L, b + st, L + ut, b, L + ut]; for (var ht = 0, ct = U.length; ht < ct; ++ht)
                                        if (d !== V && V < B[ht]) { var ft = U[ht];
                                            j.beginPath(), j.moveTo(Y[0], Y[1]), j.lineTo(Y[2], Y[3]), j.lineTo(Y[4], Y[5]), j.lineTo(Y[6], Y[7]), j.moveTo(ft[6], ft[7]), j.lineTo(ft[4], ft[5]), j.lineTo(ft[2], ft[3]), j.lineTo(ft[0], ft[1]), j.clip() }
                                    U.push(Y), B.push(V) } else j.clearRect(b, L, st, ut);
                            this.drawTileImage(M, t, b, L, st, ut, $, lt, r.opacity), U && !A && j.restore(), this.renderedTiles.push(M), this.updateUsedTiles(t.usedTiles, c, M) } }
                    this.renderedRevision = p, this.renderedResolution = _, this.extentChanged = !this.renderedExtent_ || !pt(this.renderedExtent_, x), this.renderedExtent_ = x, this.manageTilePyramid(t, c, f, l, i, g, d, h.getPreload()), this.updateCacheSize_(t, c), this.scheduleExpireCache(t, c), this.postRender(j, t), r.extent && j.restore(); var dt = Qe(this.pixelTransform); return dt !== k.style.transform && (k.style.transform = dt), this.container }, e.prototype.drawTileImage = function(t, e, r, n, i, a, s, u, l) { var h = this.getTileImage(t); if (h) { var c = o(this),
                            p = u ? t.getAlpha(c, e.time) : 1,
                            f = l * p,
                            d = f !== this.context.globalAlpha;
                        d && (this.context.save(), this.context.globalAlpha = f), this.context.drawImage(h, s, s, h.width - 2 * s, h.height - 2 * s, r, n, i, a), d && this.context.restore(), 1 !== p ? e.animate = !0 : u && t.endTransition(c) } }, e.prototype.getImage = function() { var t = this.context; return t ? t.canvas : null }, e.prototype.getTileImage = function(t) { return t.getImage() }, e.prototype.scheduleExpireCache = function(t, e) { if (e.canExpireCache()) { var r = function(t, e, r) { var n = o(t);
                            n in r.usedTiles && t.expireCache(r.viewState.projection, r.usedTiles[n]) }.bind(null, e);
                        t.postRenderFunctions.push(r) } }, e.prototype.updateUsedTiles = function(t, e, r) { var n = o(e);
                    n in t || (t[n] = {}), t[n][r.getKey()] = !0 }, e.prototype.updateCacheSize_ = function(t, e) { var r = o(e),
                        n = 0;
                    r in t.usedTiles && (n += Object.keys(t.usedTiles[r]).length), r in t.wantedTiles && (n += Object.keys(t.wantedTiles[r]).length); var i = e.tileCache;
                    i.highWaterMark < n && (i.highWaterMark = n) }, e.prototype.manageTilePyramid = function(t, e, r, n, i, a, s, u, l) { var h = o(e);
                    h in t.wantedTiles || (t.wantedTiles[h] = {}); var c, p, f, d, _, g, y = t.wantedTiles[h],
                        v = t.tileQueue; for (g = r.getMinZoom(); g <= s; ++g)
                        for (p = r.getTileRangeForExtentAndZ(a, g, p), f = r.getResolution(g), d = p.minX; d <= p.maxX; ++d)
                            for (_ = p.minY; _ <= p.maxY; ++_) s - g <= u ? ((c = e.getTile(g, d, _, n, i)).getState() == xn.IDLE && (y[c.getKey()] = !0, v.isKeyQueued(c.getKey()) || v.enqueue([c, h, r.getTileCoordCenter(c.tileCoord), f])), void 0 !== l && l(c)) : e.useTile(g, d, _, i) }, e }(Ih);
        kh.prototype.getLayer; var Uh = kh,
            Bh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Yh = function(t) {
                function e(e) { return t.call(this, e) || this } return Bh(e, t), e.prototype.createRenderer = function() { return new Uh(this) }, e }(Dh),
            zh = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Xh = "beforeoperations",
            Vh = "afteroperations",
            Wh = { PIXEL: "pixel", IMAGE: "image" },
            Zh = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.extent = r.extent, i.resolution = r.viewState.resolution / r.pixelRatio, i.data = n, i } return zh(e, t), e }(M),
            Kh = function(t) {
                function e(e) { var r = t.call(this, { projection: null }) || this;
                    r.worker_ = null, r.operationType_ = void 0 !== e.operationType ? e.operationType : Wh.PIXEL, r.threads_ = void 0 !== e.threads ? e.threads : 1, r.layers_ = function(t) { for (var e = t.length, r = new Array(e), n = 0; n < e; ++n) r[n] = Jh(t[n]); return r }(e.sources); for (var n, i = r.changed.bind(r), o = 0, a = r.layers_.length; o < a; ++o) r.layers_[o].addEventListener(N.CHANGE, i); return r.tileQueue_ = new Cn(function() { return 1 }, r.changed.bind(r)), r.requestedFrameState_, r.renderedImageCanvas_ = null, r.renderedRevision_, r.frameState_ = { animate: !1, coordinateToPixelTransform: [1, 0, 0, 1, 0, 0], extent: null, index: 0, layerIndex: 0, layerStatesArray: (n = r.layers_, n.map(function(t) { return t.getLayerState() })), pixelRatio: 1, pixelToCoordinateTransform: [1, 0, 0, 1, 0, 0], postRenderFunctions: [], size: [0, 0], tileQueue: r.tileQueue_, time: Date.now(), usedTiles: {}, viewState: { rotation: 0 }, viewHints: [], wantedTiles: {}, declutterItems: [] }, r.setAttributions(function(t) { for (var r = [], n = 0, i = e.sources.length; n < i; ++n) { var o = e.sources[n],
                                a = (o instanceof il ? o : o.getSource()).getAttributions(); if ("function" == typeof a) { var s = a(t);
                                r.push.apply(r, s) } } return 0 !== r.length ? r : null }), void 0 !== e.operation && r.setOperation(e.operation, e.lib), r } return zh(e, t), e.prototype.setOperation = function(t, e) { this.worker_ = new wh.Processor({ operation: t, imageOps: this.operationType_ === Wh.IMAGE, queue: 1, lib: e, threads: this.threads_ }), this.changed() }, e.prototype.updateFrameState_ = function(t, e, r) { var n = p({}, this.frameState_);
                    n.viewState = p({}, n.viewState); var i = St(t);
                    n.extent = t.slice(), n.size[0] = Math.round(It(t) / e), n.size[1] = Math.round(Ot(t) / e), n.time = 1 / 0; var o = n.viewState; return o.center = i, o.projection = r, o.resolution = e, n }, e.prototype.allSourcesReady_ = function() { for (var t = !0, e = 0, r = this.layers_.length; e < r; ++e)
                        if (this.layers_[e].getSource().getState() !== mi.READY) { t = !1; break }
                    return t }, e.prototype.getImage = function(t, e, r, n) { if (!this.allSourcesReady_()) return null; var i = this.updateFrameState_(t, e, n); if (this.requestedFrameState_ = i, this.renderedImageCanvas_) { var o = this.renderedImageCanvas_.getResolution(),
                            a = this.renderedImageCanvas_.getExtent();
                        e === o && pt(t, a) || (this.renderedImageCanvas_ = null) } return this.renderedImageCanvas_ && this.getRevision() === this.renderedRevision_ || this.processSources_(), i.tileQueue.loadMoreTiles(16, 16), i.animate && requestAnimationFrame(this.changed.bind(this)), this.renderedImageCanvas_ }, e.prototype.processSources_ = function() { for (var t = this.requestedFrameState_, e = this.layers_.length, r = new Array(e), n = 0; n < e; ++n) { t.layerIndex = n; var i = qh(this.layers_[n], t); if (!i) return;
                        r[n] = i } var o = {};
                    this.dispatchEvent(new Zh(Xh, t, o)), this.worker_.process(r, o, this.onWorkerComplete_.bind(this, t)) }, e.prototype.onWorkerComplete_ = function(t, e, r, n) { if (!e && r) { var i = t.extent,
                            o = t.viewState.resolution; if (o === this.requestedFrameState_.viewState.resolution && pt(i, this.requestedFrameState_.extent)) { var a; if (this.renderedImageCanvas_) a = this.renderedImageCanvas_.getImage().getContext("2d");
                            else a = hi(Math.round(It(i) / o), Math.round(Ot(i) / o)), this.renderedImageCanvas_ = new oh(i, o, 1, a.canvas);
                            a.putImageData(r, 0, 0), this.changed(), this.renderedRevision_ = this.getRevision(), this.dispatchEvent(new Zh(Vh, t, n)) } } }, e.prototype.getImageInternal = function() { return null }, e }(th),
            Hh = null;

        function qh(t, e) { var r = t.getRenderer(); if (!r) throw new Error("Unsupported layer type: " + t); if (!r.prepareFrame(e)) return null; var n, i = e.size[0],
                o = e.size[1],
                a = r.renderFrame(e, null); if (a && (n = a.firstElementChild), !(n instanceof HTMLCanvasElement)) throw new Error("Unsupported rendered element: " + n); if (n.width === i && n.height === o) return n.getContext("2d").getImageData(0, 0, i, o); if (Hh) { var s = Hh.canvas;
                s.width !== i || s.height !== o ? Hh = hi(i, o) : Hh.clearRect(0, 0, i, o) } else Hh = hi(i, o); return Hh.drawImage(n, 0, 0, i, o), Hh.getImageData(0, 0, i, o) }

        function Jh(t) { var e; return t instanceof il ? t instanceof ul ? e = new Yh({ source: t }) : t instanceof th && (e = new Fh({ source: t })) : e = t, e } var Qh = Kh,
            $h = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            tc = ['Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.', Th],
            ec = { terrain: { extension: "jpg", opaque: !0 }, "terrain-background": { extension: "jpg", opaque: !0 }, "terrain-labels": { extension: "png", opaque: !1 }, "terrain-lines": { extension: "png", opaque: !1 }, "toner-background": { extension: "png", opaque: !0 }, toner: { extension: "png", opaque: !0 }, "toner-hybrid": { extension: "png", opaque: !1 }, "toner-labels": { extension: "png", opaque: !1 }, "toner-lines": { extension: "png", opaque: !1 }, "toner-lite": { extension: "png", opaque: !0 }, watercolor: { extension: "jpg", opaque: !0 } },
            rc = { terrain: { minZoom: 0, maxZoom: 18 }, toner: { minZoom: 0, maxZoom: 20 }, watercolor: { minZoom: 0, maxZoom: 18 } },
            nc = function(t) {
                function e(e) { var r = e.layer.indexOf("-"),
                        n = -1 == r ? e.layer : e.layer.slice(0, r),
                        i = rc[n],
                        o = ec[e.layer],
                        a = void 0 !== e.url ? e.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + e.layer + "/{z}/{x}/{y}." + o.extension; return t.call(this, { attributions: tc, cacheSize: e.cacheSize, crossOrigin: "anonymous", maxZoom: null != e.maxZoom ? e.maxZoom : i.maxZoom, minZoom: null != e.minZoom ? e.minZoom : i.minZoom, opaque: o.opaque, reprojectionErrorThreshold: e.reprojectionErrorThreshold, tileLoadFunction: e.tileLoadFunction, transition: e.transition, url: a, wrapX: e.wrapX }) || this } return $h(e, t), e }(El),
            ic = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function oc(t, e, r) { var n = this.getTileGrid(); if (n || (n = this.getTileGridForProjection(r)), !(n.getResolutions().length <= t[0])) { 1 == e || this.hidpi_ || (e = 1); var i = n.getTileCoordExtent(t, this.tmpExtent_),
                    o = Oi(n.getTileSize(t[0]), this.tmpSize);
                1 != e && (o = xi(o, e, this.tmpSize)); var a = { F: "image", FORMAT: "PNG32", TRANSPARENT: !0 }; return p(a, this.params_), this.getRequestUrl_(t, o, i, e, r, a) } } var ac = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { attributions: n.attributions, cacheSize: n.cacheSize, crossOrigin: n.crossOrigin, projection: n.projection, reprojectionErrorThreshold: n.reprojectionErrorThreshold, tileGrid: n.tileGrid, tileLoadFunction: n.tileLoadFunction, tileUrlFunction: oc, url: n.url, urls: n.urls, wrapX: void 0 === n.wrapX || n.wrapX, transition: n.transition }) || this).params_ = n.params || {}, r.hidpi_ = void 0 === n.hidpi || n.hidpi, r.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r.setKey(r.getKeyForParams_()), r } return ic(e, t), e.prototype.getKeyForParams_ = function() { var t = 0,
                        e = []; for (var r in this.params_) e[t++] = r + "-" + this.params_[r]; return e.join("/") }, e.prototype.getParams = function() { return this.params_ }, e.prototype.getRequestUrl_ = function(t, e, r, n, i, o) { var a = this.urls; if (a) { var s, u = i.getCode().split(":").pop(); if (o.SIZE = e[0] + "," + e[1], o.BBOX = r.join(","), o.BBOXSR = u, o.IMAGESR = u, o.DPI = Math.round(o.DPI ? o.DPI * n : 90 * n), 1 == a.length) s = a[0];
                        else s = a[Vt(as(t), a.length)]; return eh(s.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"), o) } }, e.prototype.getTilePixelRatio = function(t) { return this.hidpi_ ? t : 1 }, e.prototype.updateParams = function(t) { p(this.params_, t), this.setKey(this.getKeyForParams_()) }, e }(gl),
            sc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            uc = function(t) {
                function e(e, r, n) { var i = t.call(this, e, xn.LOADED) || this; return i.tileSize_ = r, i.text_ = n, i.canvas_ = null, i } return sc(e, t), e.prototype.getImage = function() { if (this.canvas_) return this.canvas_; var t = this.tileSize_,
                        e = hi(t[0], t[1]); return e.strokeStyle = "grey", e.strokeRect(.5, .5, t[0] + .5, t[1] + .5), e.fillStyle = "grey", e.strokeStyle = "white", e.textAlign = "center", e.textBaseline = "middle", e.font = "24px sans-serif", e.lineWidth = 4, e.strokeText(this.text_, t[0] / 2, t[1] / 2, t[0]), e.fillText(this.text_, t[0] / 2, t[1] / 2, t[0]), this.canvas_ = e.canvas, e.canvas }, e.prototype.load = function() {}, e }(zu),
            lc = function(t) {
                function e(e) { var r = e || {}; return t.call(this, { opaque: !1, projection: r.projection, tileGrid: r.tileGrid, wrapX: void 0 === r.wrapX || r.wrapX, zDirection: r.zDirection }) || this } return sc(e, t), e.prototype.getTile = function(t, e, r) { var n = is(t, e, r); if (this.tileCache.containsKey(n)) return this.tileCache.get(n); var i = Oi(this.tileGrid.getTileSize(t)),
                        o = [t, e, r],
                        a = this.getTileCoordForTileUrlFunction(o),
                        s = void 0;
                    s = a ? "z:" + a[0] + " x:" + a[1] + " y:" + a[2] : "none"; var u = new uc(o, i, s); return this.tileCache.set(n, u), u }, e }(El),
            hc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            cc = function(t) {
                function e(e) { var r = t.call(this, { attributions: e.attributions, cacheSize: e.cacheSize, crossOrigin: e.crossOrigin, projection: we("EPSG:3857"), reprojectionErrorThreshold: e.reprojectionErrorThreshold, state: mi.LOADING, tileLoadFunction: e.tileLoadFunction, wrapX: void 0 === e.wrapX || e.wrapX, transition: e.transition }) || this; if (r.tileJSON_ = null, r.tileSize_ = e.tileSize, e.url)
                        if (e.jsonp) Uu(e.url, r.handleTileJSONResponse.bind(r), r.handleTileJSONError.bind(r));
                        else { var n = new XMLHttpRequest;
                            n.addEventListener("load", r.onXHRLoad_.bind(r)), n.addEventListener("error", r.onXHRError_.bind(r)), n.open("GET", e.url), n.send() }
                    else e.tileJSON ? r.handleTileJSONResponse(e.tileJSON) : K(!1, 51); return r } return hc(e, t), e.prototype.onXHRLoad_ = function(t) { var e = t.target; if (!e.status || e.status >= 200 && e.status < 300) { var r = void 0; try { r = JSON.parse(e.responseText) } catch (t) { return void this.handleTileJSONError() }
                        this.handleTileJSONResponse(r) } else this.handleTileJSONError() }, e.prototype.onXHRError_ = function(t) { this.handleTileJSONError() }, e.prototype.getTileJSON = function() { return this.tileJSON_ }, e.prototype.handleTileJSONResponse = function(t) { var e, r = we("EPSG:4326"),
                        n = this.getProjection(); if (void 0 !== t.bounds) { var i = be(r, n);
                        e = Ft(t.bounds, i) } var o = t.minzoom || 0,
                        a = t.maxzoom || 22,
                        s = hs({ extent: fs(n), maxZoom: a, minZoom: o, tileSize: this.tileSize_ }); if (this.tileGrid = s, this.tileUrlFunction = Gu(t.tiles, s), void 0 !== t.attribution && !this.getAttributions()) { var u = void 0 !== e ? e : r.getExtent();
                        this.setAttributions(function(e) { return bt(u, e.extent) ? [t.attribution] : null }) }
                    this.tileJSON_ = t, this.setState(mi.READY) }, e.prototype.handleTileJSONError = function() { this.setState(mi.ERROR) }, e }(gl),
            pc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function fc(t, e, r) { var n = this.getTileGrid(); if (n || (n = this.getTileGridForProjection(r)), !(n.getResolutions().length <= t[0])) { 1 == e || this.hidpi_ && void 0 !== this.serverType_ || (e = 1); var i = n.getResolution(t[0]),
                    o = n.getTileCoordExtent(t, this.tmpExtent_),
                    a = Oi(n.getTileSize(t[0]), this.tmpSize),
                    s = this.gutter_;
                0 !== s && (a = wi(a, s, this.tmpSize), o = tt(o, i * s, o)), 1 != e && (a = xi(a, e, this.tmpSize)); var u = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0 }; return p(u, this.params_), this.getRequestUrl_(t, a, o, e, r, u) } } var dc = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n.params || {},
                        o = !("TRANSPARENT" in i) || i.TRANSPARENT; return (r = t.call(this, { attributions: n.attributions, cacheSize: n.cacheSize, crossOrigin: n.crossOrigin, opaque: !o, projection: n.projection, reprojectionErrorThreshold: n.reprojectionErrorThreshold, tileClass: n.tileClass, tileGrid: n.tileGrid, tileLoadFunction: n.tileLoadFunction, tileUrlFunction: fc, url: n.url, urls: n.urls, wrapX: void 0 === n.wrapX || n.wrapX, transition: n.transition }) || this).gutter_ = void 0 !== n.gutter ? n.gutter : 0, r.params_ = i, r.v13_ = !0, r.serverType_ = n.serverType, r.hidpi_ = void 0 === n.hidpi || n.hidpi, r.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r.updateV13_(), r.setKey(r.getKeyForParams_()), r } return pc(e, t), e.prototype.getFeatureInfoUrl = function(t, e, r, n) { var i = we(r),
                        o = this.getProjection(),
                        a = this.getTileGrid();
                    a || (a = this.getTileGridForProjection(i)); var s = a.getZForResolution(e, this.zDirection),
                        u = a.getTileCoordForCoordAndZ(t, s); if (!(a.getResolutions().length <= u[0])) { var l = a.getResolution(u[0]),
                            h = a.getTileCoordExtent(u, this.tmpExtent_),
                            c = Oi(a.getTileSize(u[0]), this.tmpSize),
                            f = this.gutter_;
                        0 !== f && (c = wi(c, f, this.tmpSize), h = tt(h, l * f, h)), o && o !== i && (l = Hu(o, i, t, l), h = Fe(h, i, o), t = Me(t, i, o)); var d = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetFeatureInfo", FORMAT: "image/png", TRANSPARENT: !0, QUERY_LAYERS: this.params_.LAYERS };
                        p(d, this.params_, n); var _ = Math.floor((t[0] - h[0]) / l),
                            g = Math.floor((h[3] - t[1]) / l); return d[this.v13_ ? "I" : "X"] = _, d[this.v13_ ? "J" : "Y"] = g, this.getRequestUrl_(u, c, h, 1, o || i, d) } }, e.prototype.getLegendUrl = function(t, e) { if (void 0 !== this.urls[0]) { var r = { SERVICE: "WMS", VERSION: ph, REQUEST: "GetLegendGraphic", FORMAT: "image/png" }; if (void 0 === e || void 0 === e.LAYER) { var n = this.params_.LAYERS; if (!(!Array.isArray(n) || 1 === n.length)) return;
                            r.LAYER = n } if (void 0 !== t) { var i = this.getProjection() ? this.getProjection().getMetersPerUnit() : 1;
                            r.SCALE = t * i * 39.37 * (25.4 / .28) } return p(r, e), eh(this.urls[0], r) } }, e.prototype.getGutter = function() { return this.gutter_ }, e.prototype.getParams = function() { return this.params_ }, e.prototype.getRequestUrl_ = function(t, e, r, n, i, o) { var a = this.urls; if (a) { if (o.WIDTH = e[0], o.HEIGHT = e[1], o[this.v13_ ? "CRS" : "SRS"] = i.getCode(), "STYLES" in this.params_ || (o.STYLES = ""), 1 != n) switch (this.serverType_) {
                            case dh:
                                var s = 90 * n + .5 | 0; "FORMAT_OPTIONS" in o ? o.FORMAT_OPTIONS += ";dpi:" + s : o.FORMAT_OPTIONS = "dpi:" + s; break;
                            case _h:
                                o.MAP_RESOLUTION = 90 * n; break;
                            case fh:
                            case gh:
                                o.DPI = 90 * n; break;
                            default:
                                K(!1, 52) }
                        var u, l = i.getAxisOrientation(),
                            h = r; if (this.v13_ && "ne" == l.substr(0, 2)) { var c = void 0;
                            c = r[0], h[0] = r[1], h[1] = c, c = r[2], h[2] = r[3], h[3] = c } if (o.BBOX = h.join(","), 1 == a.length) u = a[0];
                        else u = a[Vt(as(t), a.length)]; return eh(u, o) } }, e.prototype.getTilePixelRatio = function(t) { return this.hidpi_ && void 0 !== this.serverType_ ? t : 1 }, e.prototype.getKeyForParams_ = function() { var t = 0,
                        e = []; for (var r in this.params_) e[t++] = r + "-" + this.params_[r]; return e.join("/") }, e.prototype.updateParams = function(t) { p(this.params_, t), this.updateV13_(), this.setKey(this.getKeyForParams_()) }, e.prototype.updateV13_ = function() { var t = this.params_.VERSION || ph;
                    this.v13_ = zn(t, "1.3") >= 0 }, e }(gl),
            _c = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            gc = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, e, r) || this; return s.src_ = n, s.extent_ = i, s.preemptive_ = o, s.grid_ = null, s.keys_ = null, s.data_ = null, s.jsonp_ = a, s } return _c(e, t), e.prototype.getImage = function() { return null }, e.prototype.getData = function(t) { if (!this.grid_ || !this.keys_) return null; var e = (t[0] - this.extent_[0]) / (this.extent_[2] - this.extent_[0]),
                        r = (t[1] - this.extent_[1]) / (this.extent_[3] - this.extent_[1]),
                        n = this.grid_[Math.floor((1 - r) * this.grid_.length)]; if ("string" != typeof n) return null; var i = n.charCodeAt(Math.floor(e * n.length));
                    i >= 93 && i--, i >= 35 && i--; var o = null; if ((i -= 32) in this.keys_) { var a = this.keys_[i];
                        o = this.data_ && a in this.data_ ? this.data_[a] : a } return o }, e.prototype.forDataAtCoordinate = function(t, e, r) { this.state == xn.IDLE && !0 === r ? (y(this, N.CHANGE, function(r) { e(this.getData(t)) }, this), this.loadInternal_()) : !0 === r ? setTimeout(function() { e(this.getData(t)) }.bind(this), 0) : e(this.getData(t)) }, e.prototype.getKey = function() { return this.src_ }, e.prototype.handleError_ = function() { this.state = xn.ERROR, this.changed() }, e.prototype.handleLoad_ = function(t) { this.grid_ = t.grid, this.keys_ = t.keys, this.data_ = t.data, this.state = xn.EMPTY, this.changed() }, e.prototype.loadInternal_ = function() { if (this.state == xn.IDLE)
                        if (this.state = xn.LOADING, this.jsonp_) Uu(this.src_, this.handleLoad_.bind(this), this.handleError_.bind(this));
                        else { var t = new XMLHttpRequest;
                            t.addEventListener("load", this.onXHRLoad_.bind(this)), t.addEventListener("error", this.onXHRError_.bind(this)), t.open("GET", this.src_), t.send() } }, e.prototype.onXHRLoad_ = function(t) { var e = t.target; if (!e.status || e.status >= 200 && e.status < 300) { var r = void 0; try { r = JSON.parse(e.responseText) } catch (t) { return void this.handleError_() }
                        this.handleLoad_(r) } else this.handleError_() }, e.prototype.onXHRError_ = function(t) { this.handleError_() }, e.prototype.load = function() { this.preemptive_ && this.loadInternal_() }, e }(zu),
            yc = function(t) {
                function e(e) { var r = t.call(this, { projection: we("EPSG:3857"), state: mi.LOADING }) || this; if (r.preemptive_ = void 0 === e.preemptive || e.preemptive, r.tileUrlFunction_ = ju, r.template_ = void 0, r.jsonp_ = e.jsonp || !1, e.url)
                        if (r.jsonp_) Uu(e.url, r.handleTileJSONResponse.bind(r), r.handleTileJSONError.bind(r));
                        else { var n = new XMLHttpRequest;
                            n.addEventListener("load", r.onXHRLoad_.bind(r)), n.addEventListener("error", r.onXHRError_.bind(r)), n.open("GET", e.url), n.send() }
                    else e.tileJSON ? r.handleTileJSONResponse(e.tileJSON) : K(!1, 51); return r } return _c(e, t), e.prototype.onXHRLoad_ = function(t) { var e = t.target; if (!e.status || e.status >= 200 && e.status < 300) { var r = void 0; try { r = JSON.parse(e.responseText) } catch (t) { return void this.handleTileJSONError() }
                        this.handleTileJSONResponse(r) } else this.handleTileJSONError() }, e.prototype.onXHRError_ = function(t) { this.handleTileJSONError() }, e.prototype.getTemplate = function() { return this.template_ }, e.prototype.forDataAtCoordinateAndResolution = function(t, e, r, n) { if (this.tileGrid) { var i = this.tileGrid.getZForResolution(e, this.zDirection),
                            o = this.tileGrid.getTileCoordForCoordAndZ(t, i);
                        this.getTile(o[0], o[1], o[2], 1, this.getProjection()).forDataAtCoordinate(t, r, n) } else !0 === n ? setTimeout(function() { r(null) }, 0) : r(null) }, e.prototype.handleTileJSONError = function() { this.setState(mi.ERROR) }, e.prototype.handleTileJSONResponse = function(t) { var e, r = we("EPSG:4326"),
                        n = this.getProjection(); if (void 0 !== t.bounds) { var i = be(r, n);
                        e = Ft(t.bounds, i) } var o = t.minzoom || 0,
                        a = t.maxzoom || 22,
                        s = hs({ extent: fs(n), maxZoom: a, minZoom: o });
                    this.tileGrid = s, this.template_ = t.template; var u = t.grids; if (u) { if (this.tileUrlFunction_ = Gu(u, s), void 0 !== t.attribution) { var l = void 0 !== e ? e : r.getExtent();
                            this.setAttributions(function(e) { return bt(l, e.extent) ? [t.attribution] : null }) }
                        this.setState(mi.READY) } else this.setState(mi.ERROR) }, e.prototype.getTile = function(t, e, r, n, i) { var o = is(t, e, r); if (this.tileCache.containsKey(o)) return this.tileCache.get(o); var a = [t, e, r],
                        s = this.getTileCoordForTileUrlFunction(a, i),
                        u = this.tileUrlFunction_(s, n, i),
                        l = new gc(a, void 0 !== u ? xn.IDLE : xn.EMPTY, void 0 !== u ? u : "", this.tileGrid.getTileCoordExtent(a), this.preemptive_, this.jsonp_); return this.tileCache.set(o, l), l }, e.prototype.useTile = function(t, e, r) { var n = is(t, e, r);
                    this.tileCache.containsKey(n) && this.tileCache.get(n) }, e }(ul),
            vc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            mc = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, e, r, { transition: 0 }) || this; return s.context_ = {}, s.executorGroups = {}, s.loadingSourceTiles = 0, s.errorSourceTileKeys = {}, s.replayState_ = {}, s.wantedResolution, s.getSourceTiles_ = o, s.removeSourceTiles_ = a, s.sourceTileGrid_ = i, s.sourceZ = -1, s.hifi = !1, s.wrappedTileCoord = n, s } return vc(e, t), e.prototype.disposeInternal = function() { for (var e in this.removeSourceTiles_(this), this.context_) { var r = this.context_[e].canvas;
                        r.width = r.height = 0 } for (var e in this.executorGroups)
                        for (var n = this.executorGroups[e], i = 0, o = n.length; i < o; ++i) n[i].disposeInternal();
                    this.setState(xn.ABORT), t.prototype.disposeInternal.call(this) }, e.prototype.getContext = function(t) { var e = o(t); return e in this.context_ || (this.context_[e] = hi()), this.context_[e] }, e.prototype.hasContext = function(t) { return o(t) in this.context_ }, e.prototype.getImage = function(t) { return this.hasContext(t) ? this.getContext(t).canvas : null }, e.prototype.getReplayState = function(t) { var e = o(t); return e in this.replayState_ || (this.replayState_[e] = { dirty: !1, renderedRenderOrder: null, renderedResolution: NaN, renderedRevision: -1, renderedTileResolution: NaN, renderedTileRevision: -1, renderedZ: -1, renderedTileZ: -1 }), this.replayState_[e] }, e.prototype.load = function() { this.getSourceTiles_(this) }, e }(zu),
            Ec = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Tc = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, e, r, a) || this; return s.consumers = 0, s.extent = null, s.format_ = i, s.features_ = null, s.loader_, s.projection = null, s.resolution, s.tileLoadFunction_ = o, s.url_ = n, s } return Ec(e, t), e.prototype.disposeInternal = function() { this.setState(xn.ABORT), t.prototype.disposeInternal.call(this) }, e.prototype.getFormat = function() { return this.format_ }, e.prototype.getFeatures = function() { return this.features_ }, e.prototype.getKey = function() { return this.url_ }, e.prototype.load = function() { this.state == xn.IDLE && (this.setState(xn.LOADING), this.tileLoadFunction_(this, this.url_), this.loader_(this.extent, this.resolution, this.projection)) }, e.prototype.onLoad = function(t, e) { this.setFeatures(t) }, e.prototype.onError = function() { this.setState(xn.ERROR) }, e.prototype.setFeatures = function(t) { this.features_ = t, this.setState(xn.LOADED) }, e.prototype.setLoader = function(t) { this.loader_ = t }, e }(zu),
            Sc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            wc = function(t) {
                function e(e) { var r = this,
                        n = e.projection || "EPSG:3857",
                        i = e.extent || fs(n),
                        o = e.tileGrid || hs({ extent: i, maxZoom: e.maxZoom || 22, minZoom: e.minZoom, tileSize: e.tileSize || 512 }); return (r = t.call(this, { attributions: e.attributions, attributionsCollapsible: e.attributionsCollapsible, cacheSize: e.cacheSize, opaque: !1, projection: n, state: e.state, tileGrid: o, tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : xc, tileUrlFunction: e.tileUrlFunction, url: e.url, urls: e.urls, wrapX: void 0 === e.wrapX || e.wrapX, transition: e.transition, zDirection: void 0 === e.zDirection ? 1 : e.zDirection }) || this).format_ = e.format ? e.format : null, r.loadingTiles_ = {}, r.sourceTileByCoordKey_ = {}, r.sourceTilesByTileKey_ = {}, r.overlaps_ = null == e.overlaps || e.overlaps, r.tileClass = e.tileClass ? e.tileClass : Tc, r.tileGrids_ = {}, r } return Sc(e, t), e.prototype.getOverlaps = function() { return this.overlaps_ }, e.prototype.clear = function() { this.tileCache.clear(), this.sourceTileByCoordKey_ = {}, this.sourceTilesByTileKey_ = {} }, e.prototype.getSourceTiles = function(t, e, r) { var n = r.wrappedTileCoord,
                        i = this.getTileGridForProjection(e),
                        o = i.getTileCoordExtent(n),
                        a = n[0],
                        s = i.getResolution(a);
                    tt(o, -s, o); var u = this.tileGrid,
                        l = u.getExtent();
                    l && Rt(o, l, o); var h, c, p, f, d = u.getZForResolution(s, 1),
                        y = u.getMinZoom(),
                        m = this.sourceTilesByTileKey_[r.getKey()]; if (m && m.length > 0 && m[0].tileCoord[0] === d) h = m, c = !0, p = !1, f = d;
                    else { h = [], f = d + 1;
                        do {--f, c = !0, p = !0, u.forEachTileCoord(o, f, function(n) { var i, o = os(n); if (o in this.sourceTileByCoordKey_) { var a = (i = this.sourceTileByCoordKey_[o]).getState(); if (a === xn.LOADED || a === xn.ERROR || a === xn.EMPTY) return p = p && a === xn.EMPTY, void h.push(i) } else if (f === d) { var s = this.tileUrlFunction(n, t, e);
                                    void 0 !== s ? ((i = new this.tileClass(n, xn.IDLE, s, this.format_, this.tileLoadFunction)).extent = u.getTileCoordExtent(n), i.projection = e, i.resolution = u.getResolution(n[0]), this.sourceTileByCoordKey_[o] = i, p = !1, i.addEventListener(N.CHANGE, this.handleTileChange.bind(this)), i.load()) : i = null } else p = !1; if (c = !1, null != i && r.getState() === xn.IDLE) { r.loadingSourceTiles++; var l = g(i, N.CHANGE, function() { var t = i.getState(),
                                            e = i.getKey();
                                        t !== xn.LOADED && t !== xn.ERROR || (t === xn.LOADED ? (v(l), r.loadingSourceTiles--, delete r.errorSourceTileKeys[e]) : t === xn.ERROR && (r.errorSourceTileKeys[e] = !0), r.loadingSourceTiles - Object.keys(r.errorSourceTileKeys).length == 0 && (r.hifi = !0, r.sourceZ = d, r.setState(_(r.errorSourceTileKeys) ? xn.LOADED : xn.ERROR))) }) } }.bind(this)), c || (h.length = 0) } while (!c && f > y) } return p || r.getState() !== xn.IDLE || r.setState(xn.LOADING), (c || p) && (r.hifi = d === f, r.sourceZ = f, r.getState() < xn.LOADED ? r.setState(p ? xn.EMPTY : xn.LOADED) : m && R(h, m) || (this.removeSourceTiles(r), this.addSourceTiles(r, h))), h }, e.prototype.addSourceTiles = function(t, e) { this.sourceTilesByTileKey_[t.getKey()] = e; for (var r = 0, n = e.length; r < n; ++r) e[r].consumers++ }, e.prototype.removeSourceTiles = function(t) { var e = t.getKey(); if (e in this.sourceTilesByTileKey_)
                        for (var r = this.sourceTilesByTileKey_[e], n = 0, i = r.length; n < i; ++n) { var o = r[n];
                            o.consumers--, 0 === o.consumers && (o.dispose(), delete this.sourceTileByCoordKey_[os(o.tileCoord)]) }
                    delete this.sourceTilesByTileKey_[e] }, e.prototype.getTile = function(t, e, r, n, i) { var o, a = is(t, e, r),
                        s = this.getKey(); if (this.tileCache.containsKey(a) && (o = this.tileCache.get(a)).key === s) return o; var u = [t, e, r],
                        l = this.getTileCoordForTileUrlFunction(u, i),
                        h = this.getTileGrid().getExtent(); if (l && h) { var c = this.getTileGridForProjection(i),
                            p = c.getTileCoordExtent(l);
                        tt(p, -c.getResolution(t), p), bt(h, p) || (l = null) } var f = new mc(u, null !== l ? xn.IDLE : xn.EMPTY, l, this.tileGrid, this.getSourceTiles.bind(this, n, i), this.removeSourceTiles.bind(this)); return f.key = s, o ? (f.interimTile = o, f.refreshInterimChain(), this.tileCache.replace(a, f)) : this.tileCache.set(a, f), f }, e.prototype.getTileGridForProjection = function(t) { var e = t.getCode(),
                        r = this.tileGrids_[e]; if (!r) { var n = this.tileGrid;
                        r = this.tileGrids_[e] = ps(t, void 0, n ? n.getTileSize(n.getMinZoom()) : void 0) } return r }, e.prototype.getTilePixelRatio = function(t) { return t }, e.prototype.getTilePixelSize = function(t, e, r) { var n = Oi(this.getTileGridForProjection(r).getTileSize(t), this.tmpSize); return [Math.round(n[0] * e), Math.round(n[1] * e)] }, e }(fl);

        function xc(t, e) { var r = qa(e, t.getFormat(), t.onLoad.bind(t), t.onError.bind(t));
            t.setLoader(r) } var Oc = { KVP: "KVP", REST: "REST" },
            Rc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Cc = function(t) {
                function e(e) { var r = this,
                        n = void 0 !== e.requestEncoding ? e.requestEncoding : Oc.KVP,
                        i = e.tileGrid,
                        o = e.urls; return void 0 === o && void 0 !== e.url && (o = ku(e.url)), (r = t.call(this, { attributions: e.attributions, cacheSize: e.cacheSize, crossOrigin: e.crossOrigin, projection: e.projection, reprojectionErrorThreshold: e.reprojectionErrorThreshold, tileClass: e.tileClass, tileGrid: i, tileLoadFunction: e.tileLoadFunction, tilePixelRatio: e.tilePixelRatio, tileUrlFunction: ju, urls: o, wrapX: void 0 !== e.wrapX && e.wrapX, transition: e.transition }) || this).version_ = void 0 !== e.version ? e.version : "1.0.0", r.format_ = void 0 !== e.format ? e.format : "image/jpeg", r.dimensions_ = void 0 !== e.dimensions ? e.dimensions : {}, r.layer_ = e.layer, r.matrixSet_ = e.matrixSet, r.style_ = e.style, r.requestEncoding_ = n, r.setKey(r.getKeyForDimensions_()), o && o.length > 0 && (r.tileUrlFunction = Du(o.map(Pc.bind(r)))), r } return Rc(e, t), e.prototype.setUrls = function(t) { this.urls = t; var e = t.join("\n");
                    this.setTileUrlFunction(Du(t.map(Pc.bind(this))), e) }, e.prototype.getDimensions = function() { return this.dimensions_ }, e.prototype.getFormat = function() { return this.format_ }, e.prototype.getLayer = function() { return this.layer_ }, e.prototype.getMatrixSet = function() { return this.matrixSet_ }, e.prototype.getRequestEncoding = function() { return this.requestEncoding_ }, e.prototype.getStyle = function() { return this.style_ }, e.prototype.getVersion = function() { return this.version_ }, e.prototype.getKeyForDimensions_ = function() { var t = 0,
                        e = []; for (var r in this.dimensions_) e[t++] = r + "-" + this.dimensions_[r]; return e.join("/") }, e.prototype.updateDimensions = function(t) { p(this.dimensions_, t), this.setKey(this.getKeyForDimensions_()) }, e }(gl);

        function Pc(t) { var e = this.requestEncoding_,
                r = { layer: this.layer_, style: this.style_, tilematrixset: this.matrixSet_ };
            e == Oc.KVP && p(r, { Service: "WMTS", Request: "GetTile", Version: this.version_, Format: this.format_ }), t = e == Oc.KVP ? eh(t, r) : t.replace(/\{(\w+?)\}/g, function(t, e) { return e.toLowerCase() in r ? r[e.toLowerCase()] : t }); var n = this.tileGrid,
                i = this.dimensions_; return function(r, o, a) { if (r) { var s = { TileMatrix: n.getMatrixId(r[0]), TileCol: r[1], TileRow: r[2] };
                    p(s, i); var u = t; return u = e == Oc.KVP ? eh(u, s) : u.replace(/\{(\w+?)\}/g, function(t, e) { return s[e] }) } } } var Ic = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            bc = { GENERATE_BUFFERS: "GENERATE_BUFFERS" },
            Lc = function(t) {
                function e(e, r) { var n = t.call(this, e) || this,
                        i = r || {}; return n.helper = new tu({ postProcesses: i.postProcesses, uniforms: i.uniforms }), n } return Ic(e, t), e.prototype.disposeInternal = function() { this.helper.disposeInternal(), t.prototype.disposeInternal.call(this) }, e.prototype.getShaderCompileErrors = function() { return this.helper.getShaderCompileErrors() }, e }(Ch); var Mc = Lc,
            Fc = new Blob(['var e="function"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t};var n="GENERATE_BUFFERS",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,a){var u=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=a?a.vertexPosition:0,h=a?a.indexPosition:0,d=b/u;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=u,l,v,1),c.length&&i.set(c,b+3),o(i,b+=u,l,v,2),c.length&&i.set(c,b+3),o(i,b+=u,l,v,3),c.length&&i.set(c,b+3),b+=u,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o=r.customAttributesCount,s=2+o,a=new Float32Array(r.renderInstructions),u=a.length/s,l=4*u*(o+3),v=new Uint32Array(6*u),c=new Float32Array(l),g=null,b=0;b<a.length;b+=s)g=i(a,b,c,v,o,g);var h=e({vertexBuffer:c.buffer,indexBuffer:v.buffer,renderInstructions:a.buffer},r);f.postMessage(h,[c.buffer,v.buffer,a.buffer])}};'], { type: "application/javascript" }),
            Ac = URL.createObjectURL(Fc); var Nc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Gc = function(t) {
                function e(e, r) { var n = this,
                        i = r.uniforms || {},
                        o = [1, 0, 0, 1, 0, 0];
                    i[qs.PROJECTION_MATRIX] = o, (n = t.call(this, e, { uniforms: i, postProcesses: r.postProcesses }) || this).sourceRevision_ = -1, n.verticesBuffer_ = new zs(_s, ys), n.hitVerticesBuffer_ = new zs(_s, ys), n.indicesBuffer_ = new zs(gs, ys), n.program_ = n.helper.getProgram(r.fragmentShader, r.vertexShader), n.hitDetectionEnabled_ = !(!r.hitFragmentShader || !r.hitVertexShader), n.hitProgram_ = n.hitDetectionEnabled_ && n.helper.getProgram(r.hitFragmentShader, r.hitVertexShader); var a = r.attributes ? r.attributes.map(function(t) { return { name: "a_" + t.name, size: 1, type: Js.FLOAT } }) : []; return n.attributes = [{ name: "a_position", size: 2, type: Js.FLOAT }, { name: "a_index", size: 1, type: Js.FLOAT }].concat(a), n.hitDetectionAttributes = [{ name: "a_position", size: 2, type: Js.FLOAT }, { name: "a_index", size: 1, type: Js.FLOAT }, { name: "a_hitColor", size: 4, type: Js.FLOAT }, { name: "a_featureUid", size: 1, type: Js.FLOAT }].concat(a), n.customAttributes = r.attributes ? r.attributes : [], n.previousExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], n.currentTransform_ = o, n.renderTransform_ = [1, 0, 0, 1, 0, 0], n.invertRenderTransform_ = [1, 0, 0, 1, 0, 0], n.renderInstructions_ = new Float32Array(0), n.hitRenderInstructions_ = new Float32Array(0), n.hitRenderTarget_ = n.hitDetectionEnabled_ && new ru(n.helper), n.worker_ = new Worker(Ac), n.worker_.addEventListener("message", function(t) { var e = t.data; if (e.type === bc.GENERATE_BUFFERS) { var r = e.projectionTransform;
                            e.hitDetection ? (this.hitVerticesBuffer_.fromArrayBuffer(e.vertexBuffer), this.helper.flushBufferData(this.hitVerticesBuffer_)) : (this.verticesBuffer_.fromArrayBuffer(e.vertexBuffer), this.helper.flushBufferData(this.verticesBuffer_)), this.indicesBuffer_.fromArrayBuffer(e.indexBuffer), this.helper.flushBufferData(this.indicesBuffer_), this.renderTransform_ = r, Je(this.invertRenderTransform_, this.renderTransform_), e.hitDetection ? this.hitRenderInstructions_ = new Float32Array(t.data.renderInstructions) : this.renderInstructions_ = new Float32Array(t.data.renderInstructions), this.getLayer().changed() } }.bind(n)), n } return Nc(e, t), e.prototype.renderFrame = function(t) { var e = this.indicesBuffer_.getSize();
                    this.helper.drawElements(0, e), this.helper.finalizeDraw(t); var r = this.helper.getCanvas(),
                        n = t.layerStatesArray[t.layerIndex].opacity; return n !== parseFloat(r.style.opacity) && (r.style.opacity = n), this.hitDetectionEnabled_ && (this.renderHitDetection(t), this.hitRenderTarget_.clearCachedData()), r }, e.prototype.prepareFrame = function(t) { var e = this.getLayer().getSource(),
                        r = t.viewState,
                        n = this.sourceRevision_ < e.getRevision(); if (n) { this.sourceRevision_ = e.getRevision(); var i = r.projection,
                            o = r.resolution;
                        e.loadFeatures([-1 / 0, -1 / 0, 1 / 0, 1 / 0], o, i) } var a = !t.viewHints[Dn] && !t.viewHints[jn],
                        s = !pt(this.previousExtent_, t.extent); return (n || s) && a && (this.rebuildBuffers_(t), this.previousExtent_ = t.extent.slice()), this.helper.makeProjectionTransform(t, this.currentTransform_), Ve(this.currentTransform_, this.invertRenderTransform_), this.helper.useProgram(this.program_), this.helper.prepareDraw(t), this.helper.bindBuffer(this.verticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.attributes), !0 }, e.prototype.rebuildBuffers_ = function(t) { var e = this.getLayer().getSource(),
                        r = [1, 0, 0, 1, 0, 0];
                    this.helper.makeProjectionTransform(t, r); var n, i = e.getFeatures(),
                        a = (2 + this.customAttributes.length) * i.length; if (this.renderInstructions_ && this.renderInstructions_.length === a || (this.renderInstructions_ = new Float32Array(a)), this.hitDetectionEnabled_) { var s = (7 + this.customAttributes.length) * i.length;
                        this.hitRenderInstructions_ && this.hitRenderInstructions_.length === s || (this.hitRenderInstructions_ = new Float32Array(s)) } for (var u, l, h, c = [], p = [], f = 0, d = 0, _ = 0; _ < i.length; _++)
                        if ((n = i[_]).getGeometry() && n.getGeometry().getType() === Nt.POINT) { c[0] = n.getGeometry().getFlatCoordinates()[0], c[1] = n.getGeometry().getFlatCoordinates()[1], Ze(r, c), l = d + 6, h = void 0, (h = p || [])[0] = Math.floor(l / 256 / 256 / 256) / 255, h[1] = Math.floor(l / 256 / 256) % 256 / 255, h[2] = Math.floor(l / 256) % 256 / 255, h[3] = l % 256 / 255, u = h, this.renderInstructions_[f++] = c[0], this.renderInstructions_[f++] = c[1], this.hitDetectionEnabled_ && (this.hitRenderInstructions_[d++] = c[0], this.hitRenderInstructions_[d++] = c[1], this.hitRenderInstructions_[d++] = u[0], this.hitRenderInstructions_[d++] = u[1], this.hitRenderInstructions_[d++] = u[2], this.hitRenderInstructions_[d++] = u[3], this.hitRenderInstructions_[d++] = Number(o(n))); for (var g = void 0, y = 0; y < this.customAttributes.length; y++) g = this.customAttributes[y].callback(n), this.renderInstructions_[f++] = g, this.hitDetectionEnabled_ && (this.hitRenderInstructions_[d++] = g) }
                    var v = { type: bc.GENERATE_BUFFERS, renderInstructions: this.renderInstructions_.buffer, customAttributesCount: this.customAttributes.length }; if (v.projectionTransform = r, this.worker_.postMessage(v, [this.renderInstructions_.buffer]), this.renderInstructions_ = null, this.hitDetectionEnabled_) { var m = { type: bc.GENERATE_BUFFERS, renderInstructions: this.hitRenderInstructions_.buffer, customAttributesCount: 5 + this.customAttributes.length };
                        m.projectionTransform = r, m.hitDetection = !0, this.worker_.postMessage(m, [this.hitRenderInstructions_.buffer]), this.hitRenderInstructions_ = null } }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i) { if (K(this.hitDetectionEnabled_, 66), this.hitRenderInstructions_) { var o = Ze(e.coordinateToPixelTransform, t.slice()),
                            a = this.hitRenderTarget_.readPixel(o[0], o[1]),
                            s = function(t) { var e = 0; return e += Math.round(256 * t[0] * 256 * 256 * 255), e += Math.round(256 * t[1] * 256 * 255), e += Math.round(256 * t[2] * 255), e += Math.round(255 * t[3]) }([a[0] / 255, a[1] / 255, a[2] / 255, a[3] / 255]),
                            u = this.hitRenderInstructions_[s],
                            l = Math.floor(u).toString(),
                            h = this.getLayer().getSource().getFeatureByUid(l); return h ? n(h, this.getLayer()) : void 0 } }, e.prototype.renderHitDetection = function(t) { if (this.hitVerticesBuffer_.getSize()) { this.hitRenderTarget_.setSize(t.size), this.helper.useProgram(this.hitProgram_), this.helper.prepareDrawToRenderTarget(t, this.hitRenderTarget_, !0), this.helper.bindBuffer(this.hitVerticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.hitDetectionAttributes); var e = this.indicesBuffer_.getSize();
                        this.helper.drawElements(0, e) } }, e.prototype.disposeInternal = function() { this.worker_.terminate(), t.prototype.disposeInternal.call(this) }, e }(Mc),
            Dc = { BEGIN_GEOMETRY: 0, BEGIN_PATH: 1, CIRCLE: 2, CLOSE_PATH: 3, CUSTOM: 4, DRAW_CHARS: 5, DRAW_IMAGE: 6, END_GEOMETRY: 7, FILL: 8, MOVE_TO_LINE_TO: 9, SET_FILL_STYLE: 10, SET_STROKE_STYLE: 11, STROKE: 12 },
            jc = [Dc.FILL],
            kc = [Dc.STROKE],
            Uc = [Dc.BEGIN_PATH],
            Bc = [Dc.CLOSE_PATH],
            Yc = Dc,
            zc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Xc = function(t) {
                function e(e, r, n, i) { var o = t.call(this) || this; return o.tolerance = e, o.maxExtent = r, o.pixelRatio = i, o.maxLineWidth = 0, o.resolution = n, o.beginGeometryInstruction1_ = null, o.beginGeometryInstruction2_ = null, o.bufferedMaxExtent_ = null, o.instructions = [], o.coordinates = [], o.tmpCoordinate_ = [], o.hitDetectionInstructions = [], o.state = {}, o } return zc(e, t), e.prototype.applyPixelRatio = function(t) { var e = this.pixelRatio; return 1 == e ? t : t.map(function(t) { return t * e }) }, e.prototype.appendFlatCoordinates = function(t, e, r, n, i, o) { var a = this.coordinates.length,
                        s = this.getBufferedMaxExtent();
                    o && (e += n); var u, l, h, c = t[e],
                        p = t[e + 1],
                        f = this.tmpCoordinate_,
                        d = !0; for (u = e + n; u < r; u += n) f[0] = t[u], f[1] = t[u + 1], (h = at(s, f)) !== l ? (d && (this.coordinates[a++] = c, this.coordinates[a++] = p), this.coordinates[a++] = f[0], this.coordinates[a++] = f[1], d = !1) : h === Q.INTERSECTING ? (this.coordinates[a++] = f[0], this.coordinates[a++] = f[1], d = !1) : d = !0, c = f[0], p = f[1], l = h; return (i && d || u === e + n) && (this.coordinates[a++] = c, this.coordinates[a++] = p), a }, e.prototype.drawCustomCoordinates_ = function(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { var s = r[o],
                            u = this.appendFlatCoordinates(t, e, s, n, !1, !1);
                        i.push(u), e = s } return e }, e.prototype.drawCustom = function(t, e, r) { this.beginGeometry(t, e); var n, i, o, a, s, u = t.getType(),
                        l = t.getStride(),
                        h = this.coordinates.length; if (u == Nt.MULTI_POLYGON) { n = (t = t).getOrientedFlatCoordinates(), a = []; var c = t.getEndss();
                        s = 0; for (var p = 0, f = c.length; p < f; ++p) { var d = [];
                            s = this.drawCustomCoordinates_(n, s, c[p], l, d), a.push(d) }
                        this.instructions.push([Yc.CUSTOM, h, a, t, r, yr]) } else u == Nt.POLYGON || u == Nt.MULTI_LINE_STRING ? (o = [], n = u == Nt.POLYGON ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates(), s = this.drawCustomCoordinates_(n, 0, t.getEnds(), l, o), this.instructions.push([Yc.CUSTOM, h, o, t, r, gr])) : u == Nt.LINE_STRING || u == Nt.MULTI_POINT ? (n = t.getFlatCoordinates(), i = this.appendFlatCoordinates(n, 0, n.length, l, !1, !1), this.instructions.push([Yc.CUSTOM, h, i, t, r, _r])) : u == Nt.POINT && (n = t.getFlatCoordinates(), this.coordinates.push(n[0], n[1]), i = this.coordinates.length, this.instructions.push([Yc.CUSTOM, h, i, t, r]));
                    this.endGeometry(e) }, e.prototype.beginGeometry = function(t, e) { var r = t.getExtent();
                    this.beginGeometryInstruction1_ = [Yc.BEGIN_GEOMETRY, e, 0, r], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [Yc.BEGIN_GEOMETRY, e, 0, r], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_) }, e.prototype.finish = function() { return { instructions: this.instructions, hitDetectionInstructions: this.hitDetectionInstructions, coordinates: this.coordinates } }, e.prototype.reverseHitDetectionInstructions = function() { var t, e = this.hitDetectionInstructions;
                    e.reverse(); var r, n, i = e.length,
                        o = -1; for (t = 0; t < i; ++t)(n = (r = e[t])[0]) == Yc.END_GEOMETRY ? o = t : n == Yc.BEGIN_GEOMETRY && (r[2] = t, w(this.hitDetectionInstructions, o, t), o = -1) }, e.prototype.setFillStrokeStyle = function(t, e) { var r = this.state; if (t) { var n = t.getColor();
                        r.fillStyle = ca(n || "#000") } else r.fillStyle = void 0; if (e) { var i = e.getColor();
                        r.strokeStyle = ca(i || "#000"); var o = e.getLineCap();
                        r.lineCap = void 0 !== o ? o : "round"; var a = e.getLineDash();
                        r.lineDash = a ? a.slice() : va; var s = e.getLineDashOffset();
                        r.lineDashOffset = s || 0; var u = e.getLineJoin();
                        r.lineJoin = void 0 !== u ? u : "round"; var l = e.getWidth();
                        r.lineWidth = void 0 !== l ? l : 1; var h = e.getMiterLimit();
                        r.miterLimit = void 0 !== h ? h : 10, r.lineWidth > this.maxLineWidth && (this.maxLineWidth = r.lineWidth, this.bufferedMaxExtent_ = null) } else r.strokeStyle = void 0, r.lineCap = void 0, r.lineDash = null, r.lineDashOffset = void 0, r.lineJoin = void 0, r.lineWidth = void 0, r.miterLimit = void 0 }, e.prototype.createFill = function(t) { var e = t.fillStyle,
                        r = [Yc.SET_FILL_STYLE, e]; return "string" != typeof e && r.push(!0), r }, e.prototype.applyStroke = function(t) { this.instructions.push(this.createStroke(t)) }, e.prototype.createStroke = function(t) { return [Yc.SET_STROKE_STYLE, t.strokeStyle, t.lineWidth * this.pixelRatio, t.lineCap, t.lineJoin, t.miterLimit, this.applyPixelRatio(t.lineDash), t.lineDashOffset * this.pixelRatio] }, e.prototype.updateFillStyle = function(t, e) { var r = t.fillStyle; "string" == typeof r && t.currentFillStyle == r || (void 0 !== r && this.instructions.push(e.call(this, t)), t.currentFillStyle = r) }, e.prototype.updateStrokeStyle = function(t, e) { var r = t.strokeStyle,
                        n = t.lineCap,
                        i = t.lineDash,
                        o = t.lineDashOffset,
                        a = t.lineJoin,
                        s = t.lineWidth,
                        u = t.miterLimit;
                    (t.currentStrokeStyle != r || t.currentLineCap != n || i != t.currentLineDash && !R(t.currentLineDash, i) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != s || t.currentMiterLimit != u) && (void 0 !== r && e.call(this, t), t.currentStrokeStyle = r, t.currentLineCap = n, t.currentLineDash = i, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = s, t.currentMiterLimit = u) }, e.prototype.endGeometry = function(t) { this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null; var e = [Yc.END_GEOMETRY, t];
                    this.instructions.push(e), this.hitDetectionInstructions.push(e) }, e.prototype.getBufferedMaxExtent = function() { if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = et(this.maxExtent), this.maxLineWidth > 0)) { var t = this.resolution * (this.maxLineWidth + 1) / 2;
                        tt(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_) } return this.bufferedMaxExtent_ }, e }(fa),
            Vc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Wc = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e, r, n, i) || this; return o.declutterGroups_ = null, o.hitDetectionImage_ = null, o.image_ = null, o.anchorX_ = void 0, o.anchorY_ = void 0, o.height_ = void 0, o.opacity_ = void 0, o.originX_ = void 0, o.originY_ = void 0, o.rotateWithView_ = void 0, o.rotation_ = void 0, o.scale_ = void 0, o.width_ = void 0, o } return Vc(e, t), e.prototype.drawCoordinates_ = function(t, e, r, n) { return this.appendFlatCoordinates(t, e, r, n, !1, !1) }, e.prototype.drawPoint = function(t, e) { if (this.image_) { this.beginGeometry(t, e); var r = t.getFlatCoordinates(),
                            n = t.getStride(),
                            i = this.coordinates.length,
                            o = this.drawCoordinates_(r, 0, r.length, n);
                        this.instructions.push([Yc.DRAW_IMAGE, i, o, this.image_, this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_ * this.pixelRatio, this.width_]), this.hitDetectionInstructions.push([Yc.DRAW_IMAGE, i, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]), this.endGeometry(e) } }, e.prototype.drawMultiPoint = function(t, e) { if (this.image_) { this.beginGeometry(t, e); var r = t.getFlatCoordinates(),
                            n = t.getStride(),
                            i = this.coordinates.length,
                            o = this.drawCoordinates_(r, 0, r.length, n);
                        this.instructions.push([Yc.DRAW_IMAGE, i, o, this.image_, this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_ * this.pixelRatio, this.width_]), this.hitDetectionInstructions.push([Yc.DRAW_IMAGE, i, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]), this.endGeometry(e) } }, e.prototype.finish = function() { return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, t.prototype.finish.call(this) }, e.prototype.setImageStyle = function(t, e) { var r = t.getAnchor(),
                        n = t.getSize(),
                        i = t.getHitDetectionImage(1),
                        o = t.getImage(1),
                        a = t.getOrigin();
                    this.anchorX_ = r[0], this.anchorY_ = r[1], this.declutterGroups_ = e, this.hitDetectionImage_ = i, this.image_ = o, this.height_ = n[1], this.opacity_ = t.getOpacity(), this.originX_ = a[0], this.originY_ = a[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScale(), this.width_ = n[0] }, e }(Xc),
            Zc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Kc = function(t) {
                function e(e, r, n, i) { return t.call(this, e, r, n, i) || this } return Zc(e, t), e.prototype.drawFlatCoordinates_ = function(t, e, r, n) { var i = this.coordinates.length,
                        o = this.appendFlatCoordinates(t, e, r, n, !1, !1),
                        a = [Yc.MOVE_TO_LINE_TO, i, o]; return this.instructions.push(a), this.hitDetectionInstructions.push(a), r }, e.prototype.drawLineString = function(t, e) { var r = this.state,
                        n = r.strokeStyle,
                        i = r.lineWidth; if (void 0 !== n && void 0 !== i) { this.updateStrokeStyle(r, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([Yc.SET_STROKE_STYLE, r.strokeStyle, r.lineWidth, r.lineCap, r.lineJoin, r.miterLimit, r.lineDash, r.lineDashOffset], Uc); var o = t.getFlatCoordinates(),
                            a = t.getStride();
                        this.drawFlatCoordinates_(o, 0, o.length, a), this.hitDetectionInstructions.push(kc), this.endGeometry(e) } }, e.prototype.drawMultiLineString = function(t, e) { var r = this.state,
                        n = r.strokeStyle,
                        i = r.lineWidth; if (void 0 !== n && void 0 !== i) { this.updateStrokeStyle(r, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([Yc.SET_STROKE_STYLE, r.strokeStyle, r.lineWidth, r.lineCap, r.lineJoin, r.miterLimit, r.lineDash, r.lineDashOffset], Uc); for (var o = t.getEnds(), a = t.getFlatCoordinates(), s = t.getStride(), u = 0, l = 0, h = o.length; l < h; ++l) u = this.drawFlatCoordinates_(a, u, o[l], s);
                        this.hitDetectionInstructions.push(kc), this.endGeometry(e) } }, e.prototype.finish = function() { var e = this.state; return null != e.lastStroke && e.lastStroke != this.coordinates.length && this.instructions.push(kc), this.reverseHitDetectionInstructions(), this.state = null, t.prototype.finish.call(this) }, e.prototype.applyStroke = function(e) { null != e.lastStroke && e.lastStroke != this.coordinates.length && (this.instructions.push(kc), e.lastStroke = this.coordinates.length), e.lastStroke = 0, t.prototype.applyStroke.call(this, e), this.instructions.push(Uc) }, e }(Xc),
            Hc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            qc = function(t) {
                function e(e, r, n, i) { return t.call(this, e, r, n, i) || this } return Hc(e, t), e.prototype.drawFlatCoordinatess_ = function(t, e, r, n) { var i = this.state,
                        o = void 0 !== i.fillStyle,
                        a = void 0 !== i.strokeStyle,
                        s = r.length;
                    this.instructions.push(Uc), this.hitDetectionInstructions.push(Uc); for (var u = 0; u < s; ++u) { var l = r[u],
                            h = this.coordinates.length,
                            c = this.appendFlatCoordinates(t, e, l, n, !0, !a),
                            p = [Yc.MOVE_TO_LINE_TO, h, c];
                        this.instructions.push(p), this.hitDetectionInstructions.push(p), a && (this.instructions.push(Bc), this.hitDetectionInstructions.push(Bc)), e = l } return o && (this.instructions.push(jc), this.hitDetectionInstructions.push(jc)), a && (this.instructions.push(kc), this.hitDetectionInstructions.push(kc)), e }, e.prototype.drawCircle = function(t, e) { var r = this.state,
                        n = r.fillStyle,
                        i = r.strokeStyle; if (void 0 !== n || void 0 !== i) { this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== r.fillStyle && this.hitDetectionInstructions.push([Yc.SET_FILL_STYLE, "#000"]), void 0 !== r.strokeStyle && this.hitDetectionInstructions.push([Yc.SET_STROKE_STYLE, r.strokeStyle, r.lineWidth, r.lineCap, r.lineJoin, r.miterLimit, r.lineDash, r.lineDashOffset]); var o = t.getFlatCoordinates(),
                            a = t.getStride(),
                            s = this.coordinates.length;
                        this.appendFlatCoordinates(o, 0, o.length, a, !1, !1); var u = [Yc.CIRCLE, s];
                        this.instructions.push(Uc, u), this.hitDetectionInstructions.push(Uc, u), void 0 !== r.fillStyle && (this.instructions.push(jc), this.hitDetectionInstructions.push(jc)), void 0 !== r.strokeStyle && (this.instructions.push(kc), this.hitDetectionInstructions.push(kc)), this.endGeometry(e) } }, e.prototype.drawPolygon = function(t, e) { var r = this.state,
                        n = r.fillStyle,
                        i = r.strokeStyle; if (void 0 !== n || void 0 !== i) { this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== r.fillStyle && this.hitDetectionInstructions.push([Yc.SET_FILL_STYLE, "#000"]), void 0 !== r.strokeStyle && this.hitDetectionInstructions.push([Yc.SET_STROKE_STYLE, r.strokeStyle, r.lineWidth, r.lineCap, r.lineJoin, r.miterLimit, r.lineDash, r.lineDashOffset]); var o = t.getEnds(),
                            a = t.getOrientedFlatCoordinates(),
                            s = t.getStride();
                        this.drawFlatCoordinatess_(a, 0, o, s), this.endGeometry(e) } }, e.prototype.drawMultiPolygon = function(t, e) { var r = this.state,
                        n = r.fillStyle,
                        i = r.strokeStyle; if (void 0 !== n || void 0 !== i) { this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== r.fillStyle && this.hitDetectionInstructions.push([Yc.SET_FILL_STYLE, "#000"]), void 0 !== r.strokeStyle && this.hitDetectionInstructions.push([Yc.SET_STROKE_STYLE, r.strokeStyle, r.lineWidth, r.lineCap, r.lineJoin, r.miterLimit, r.lineDash, r.lineDashOffset]); for (var o = t.getEndss(), a = t.getOrientedFlatCoordinates(), s = t.getStride(), u = 0, l = 0, h = o.length; l < h; ++l) u = this.drawFlatCoordinatess_(a, u, o[l], s);
                        this.endGeometry(e) } }, e.prototype.finish = function() { this.reverseHitDetectionInstructions(), this.state = null; var e = this.tolerance; if (0 !== e)
                        for (var r = this.coordinates, n = 0, i = r.length; n < i; ++n) r[n] = Er(r[n], e); return t.prototype.finish.call(this) }, e.prototype.setFillStrokeStyles_ = function() { var t = this.state;
                    void 0 !== t.fillStyle && this.updateFillStyle(t, this.createFill), void 0 !== t.strokeStyle && this.updateStrokeStyle(t, this.applyStroke) }, e }(Xc);

        function Jc(t, e, r, n, i) { var o, a, s, u, l, h, c, p, f, d = r,
                _ = r,
                g = 0,
                y = 0,
                v = r; for (o = r; o < n; o += i) { var m = e[o],
                    E = e[o + 1];
                void 0 !== u && (p = m - u, f = E - l, s = Math.sqrt(p * p + f * f), void 0 !== h && (y += a, Math.acos((h * p + c * f) / (a * s)) > t && (y > g && (g = y, d = v, _ = o), y = 0, v = o - i)), a = s, h = p, c = f), u = m, l = E } return (y += s) > g ? [v, o] : [d, _] } var Qc = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            $c = { left: 0, end: 0, center: .5, right: 1, start: 1, top: 0, middle: .5, hanging: .2, alphabetic: .8, ideographic: .8, bottom: 1 },
            tp = { Circle: qc, Default: Xc, Image: Wc, LineString: Kc, Polygon: qc, Text: function(t) {
                    function e(e, r, n, i) { var o = t.call(this, e, r, n, i) || this; return o.declutterGroups_, o.labels_ = null, o.text_ = "", o.textOffsetX_ = 0, o.textOffsetY_ = 0, o.textRotateWithView_ = void 0, o.textRotation_ = 0, o.textFillState_ = null, o.fillStates = {}, o.textStrokeState_ = null, o.strokeStates = {}, o.textState_ = {}, o.textStates = {}, o.textKey_ = "", o.fillKey_ = "", o.strokeKey_ = "", Ea.prune(), o } return Qc(e, t), e.prototype.finish = function() { var e = t.prototype.finish.call(this); return e.textStates = this.textStates, e.fillStates = this.fillStates, e.strokeStates = this.strokeStates, e }, e.prototype.drawText = function(t, e) { var r = this.textFillState_,
                            n = this.textStrokeState_,
                            i = this.textState_; if ("" !== this.text_ && i && (r || n)) { var o, a, s = this.coordinates.length,
                                u = t.getType(),
                                l = null,
                                h = 2,
                                c = 2; if (i.placement === Mu.LINE) { if (!bt(this.getBufferedMaxExtent(), t.getExtent())) return; var p = void 0; if (l = t.getFlatCoordinates(), c = t.getStride(), u == Nt.LINE_STRING) p = [l.length];
                                else if (u == Nt.MULTI_LINE_STRING) p = t.getEnds();
                                else if (u == Nt.POLYGON) p = t.getEnds().slice(0, 1);
                                else if (u == Nt.MULTI_POLYGON) { var f = t.getEndss(); for (p = [], o = 0, a = f.length; o < a; ++o) p.push(f[o][0]) }
                                this.beginGeometry(t, e); for (var d = i.textAlign, _ = 0, g = void 0, y = 0, v = p.length; y < v; ++y) { if (null == d) { var m = Jc(i.maxAngle, l, _, p[y], c);
                                        _ = m[0], g = m[1] } else g = p[y]; for (o = _; o < g; o += c) this.coordinates.push(l[o], l[o + 1]);
                                    h = this.coordinates.length, _ = p[y]; var E = this.declutterGroups_ ? 0 === y ? this.declutterGroups_[0] : [].concat(this.declutterGroups_[0]) : null;
                                    this.drawChars_(s, h, E), s = h }
                                this.endGeometry(e) } else { var T = null; switch (i.overflow || (T = []), u) {
                                    case Nt.POINT:
                                    case Nt.MULTI_POINT:
                                        h = (l = t.getFlatCoordinates()).length; break;
                                    case Nt.LINE_STRING:
                                        l = t.getFlatMidpoint(); break;
                                    case Nt.CIRCLE:
                                        l = t.getCenter(); break;
                                    case Nt.MULTI_LINE_STRING:
                                        h = (l = t.getFlatMidpoints()).length; break;
                                    case Nt.POLYGON:
                                        l = t.getFlatInteriorPoint(), i.overflow || T.push(l[2] / this.resolution), c = 3; break;
                                    case Nt.MULTI_POLYGON:
                                        var S = t.getFlatInteriorPoints(); for (l = [], o = 0, a = S.length; o < a; o += 3) i.overflow || T.push(S[o + 2] / this.resolution), l.push(S[o], S[o + 1]); if (0 == (h = l.length)) return }
                                h = this.appendFlatCoordinates(l, 0, h, c, !1, !1), this.saveTextStates_(), (i.backgroundFill || i.backgroundStroke) && (this.setFillStrokeStyle(i.backgroundFill, i.backgroundStroke), i.backgroundFill && (this.updateFillStyle(this.state, this.createFill), this.hitDetectionInstructions.push(this.createFill(this.state))), i.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e); var w = this.pixelRatio;
                                this.instructions.push([Yc.DRAW_IMAGE, s, h, null, NaN, NaN, this.declutterGroups_, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, 1, NaN, i.padding == ma ? ma : i.padding.map(function(t) { return t * w }), !!i.backgroundFill, !!i.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, T]), this.hitDetectionInstructions.push([Yc.DRAW_IMAGE, s, h, null, NaN, NaN, this.declutterGroups_, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, 1 / this.pixelRatio, NaN, i.padding, !!i.backgroundFill, !!i.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, T]), this.endGeometry(e) } } }, e.prototype.saveTextStates_ = function() { var t = this.textStrokeState_,
                            e = this.textState_,
                            r = this.textFillState_,
                            n = this.strokeKey_;
                        t && (n in this.strokeStates || (this.strokeStates[n] = { strokeStyle: t.strokeStyle, lineCap: t.lineCap, lineDashOffset: t.lineDashOffset, lineWidth: t.lineWidth, lineJoin: t.lineJoin, miterLimit: t.miterLimit, lineDash: t.lineDash })); var i = this.textKey_;
                        i in this.textStates || (this.textStates[i] = { font: e.font, textAlign: e.textAlign || "center", textBaseline: e.textBaseline || "middle", scale: e.scale }); var o = this.fillKey_;
                        r && (o in this.fillStates || (this.fillStates[o] = { fillStyle: r.fillStyle })) }, e.prototype.drawChars_ = function(t, e, r) { var n = this.textStrokeState_,
                            i = this.textState_,
                            o = this.strokeKey_,
                            a = this.textKey_,
                            s = this.fillKey_;
                        this.saveTextStates_(); var u = this.pixelRatio,
                            l = $c[i.textBaseline],
                            h = this.textOffsetY_ * u,
                            c = this.text_,
                            p = i.scale,
                            f = n ? n.lineWidth * p / 2 : 0;
                        this.instructions.push([Yc.DRAW_CHARS, t, e, l, r, i.overflow, s, i.maxAngle, u, h, o, f * u, c, a, 1]), this.hitDetectionInstructions.push([Yc.DRAW_CHARS, t, e, l, r, i.overflow, s, i.maxAngle, 1, h, o, f, c, a, 1 / u]) }, e.prototype.setTextStyle = function(t, e) { var r, n, i; if (t) { this.declutterGroups_ = e; var a = t.getFill();
                            a ? ((n = this.textFillState_) || (n = this.textFillState_ = {}), n.fillStyle = ca(a.getColor() || "#000")) : n = this.textFillState_ = null; var s = t.getStroke(); if (s) {
                                (i = this.textStrokeState_) || (i = this.textStrokeState_ = {}); var u = s.getLineDash(),
                                    l = s.getLineDashOffset(),
                                    h = s.getWidth(),
                                    c = s.getMiterLimit();
                                i.lineCap = s.getLineCap() || "round", i.lineDash = u ? u.slice() : va, i.lineDashOffset = void 0 === l ? 0 : l, i.lineJoin = s.getLineJoin() || "round", i.lineWidth = void 0 === h ? 1 : h, i.miterLimit = void 0 === c ? 10 : c, i.strokeStyle = ca(s.getColor() || "#000") } else i = this.textStrokeState_ = null;
                            r = this.textState_; var p = t.getFont() || "10px sans-serif";
                            xa(p); var f = t.getScale();
                            r.overflow = t.getOverflow(), r.font = p, r.maxAngle = t.getMaxAngle(), r.placement = t.getPlacement(), r.textAlign = t.getTextAlign(), r.textBaseline = t.getTextBaseline() || "middle", r.backgroundFill = t.getBackgroundFill(), r.backgroundStroke = t.getBackgroundStroke(), r.padding = t.getPadding() || ma, r.scale = void 0 === f ? 1 : f; var d = t.getOffsetX(),
                                _ = t.getOffsetY(),
                                g = t.getRotateWithView(),
                                y = t.getRotation();
                            this.text_ = t.getText() || "", this.textOffsetX_ = void 0 === d ? 0 : d, this.textOffsetY_ = void 0 === _ ? 0 : _, this.textRotateWithView_ = void 0 !== g && g, this.textRotation_ = void 0 === y ? 0 : y, this.strokeKey_ = i ? ("string" == typeof i.strokeStyle ? i.strokeStyle : o(i.strokeStyle)) + i.lineCap + i.lineDashOffset + "|" + i.lineWidth + i.lineJoin + i.miterLimit + "[" + i.lineDash.join() + "]" : "", this.textKey_ = r.font + r.scale + (r.textAlign || "?"), this.fillKey_ = n ? "string" == typeof n.fillStyle ? n.fillStyle : "|" + o(n.fillStyle) : "" } else this.text_ = "" }, e }(Xc) },
            ep = function() {
                function t(t, e, r, n, i) { this.declutter_ = i, this.declutterGroups_ = null, this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = n, this.resolution_ = r, this.buildersByZIndex_ = {} } return t.prototype.addDeclutter = function(t) { var e = null; return this.declutter_ && (t ? (e = this.declutterGroups_)[0][4]++ : (e = this.declutterGroups_ = [
                        [1 / 0, 1 / 0, -1 / 0, -1 / 0]
                    ])[0].push(1)), e }, t.prototype.finish = function() { var t = {}; for (var e in this.buildersByZIndex_) { t[e] = t[e] || {}; var r = this.buildersByZIndex_[e]; for (var n in r) { var i = r[n].finish();
                            t[e][n] = i } } return t }, t.prototype.getBuilder = function(t, e) { var r = void 0 !== t ? t.toString() : "0",
                        n = this.buildersByZIndex_[r];
                    void 0 === n && (n = {}, this.buildersByZIndex_[r] = n); var i = n[e];
                    void 0 === i && (i = new(0, tp[e])(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_), n[e] = i); return i }, t }(),
            rp = { CIRCLE: "Circle", DEFAULT: "Default", IMAGE: "Image", LINE_STRING: "LineString", POLYGON: "Polygon", TEXT: "Text" };

        function np(t, e, r, n) { for (var i = t[e], o = t[e + 1], a = 0, s = e + n; s < r; s += n) { var u = t[s],
                    l = t[s + 1];
                a += Math.sqrt((u - i) * (u - i) + (l - o) * (l - o)), i = u, o = l } return a }

        function ip(t, e, r, n, i, o, a, s, u, l, h) { for (var c, p, f = [], d = t[e] > t[r - n], _ = i.length, g = t[e], y = t[e + 1], v = t[e += n], m = t[e + 1], E = 0, T = Math.sqrt(Math.pow(v - g, 2) + Math.pow(m - y, 2)), S = !1, w = 0; w < _; ++w) { for (var x = i[c = d ? _ - w - 1 : w], O = s * u(l, x, h), R = o + O / 2; e < r - n && E + T < R;) g = v, y = m, v = t[e += n], m = t[e + 1], E += T, T = Math.sqrt(Math.pow(v - g, 2) + Math.pow(m - y, 2)); var C = R - E,
                    P = Math.atan2(m - y, v - g); if (d && (P += P > 0 ? -Math.PI : Math.PI), void 0 !== p) { var I = P - p; if (S = S || 0 !== I, I += I > Math.PI ? -2 * Math.PI : I < -Math.PI ? 2 * Math.PI : 0, Math.abs(I) > a) return null }
                p = P; var b = C / T,
                    L = Wt(g, v, b),
                    M = Wt(y, m, b);
                f[c] = [L, M, O / 2, P, x], o += O } return S ? f : [
                [f[0][0], f[0][1], f[0][2], f[0][3], i]
            ] } var op = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ap = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
            sp = [1, 0, 0, 1, 0, 0],
            up = [],
            lp = [],
            hp = [],
            cp = [],
            pp = function(t) {
                function e(e, r, n, i) { var o = t.call(this) || this; return o.overlaps = n, o.pixelRatio = r, o.resolution = e, o.alignFill_, o.declutterItems = [], o.instructions = i.instructions, o.coordinates = i.coordinates, o.coordinateCache_ = {}, o.renderedTransform_ = [1, 0, 0, 1, 0, 0], o.hitDetectionInstructions = i.hitDetectionInstructions, o.pixelCoordinates_ = null, o.viewRotation_ = 0, o.fillStates = i.fillStates || {}, o.strokeStates = i.strokeStates || {}, o.textStates = i.textStates || {}, o.widths_ = {}, o } return op(e, t), e.prototype.disposeInternal = function() { Ea.release(this), t.prototype.disposeInternal.call(this) }, e.prototype.getTextImage = function(t, e, r, n) { var i, o = n + e + t + r + this.pixelRatio; if (!Ea.containsKey(o)) { var a = n ? this.strokeStates[n] : null,
                            s = r ? this.fillStates[r] : null,
                            u = this.textStates[e],
                            l = this.pixelRatio,
                            h = u.scale * l,
                            c = $c[u.textAlign || "center"],
                            p = n && a.lineWidth ? a.lineWidth : 0,
                            f = t.split("\n"),
                            d = f.length,
                            _ = [],
                            g = function(t, e, r) { for (var n = e.length, i = 0, o = 0; o < n; ++o) { var a = Ia(t, e[o]);
                                    i = Math.max(i, a), r.push(a) } return i }(u.font, f, _),
                            y = Pa(u.font),
                            v = y * d,
                            m = g + p,
                            E = hi(Math.ceil((m + 2) * h), Math.ceil((v + p) * h));
                        i = E.canvas, Ea.set(o, i), 1 != h && E.scale(h, h), E.font = u.font, n && (E.strokeStyle = a.strokeStyle, E.lineWidth = p, E.lineCap = a.lineCap, E.lineJoin = a.lineJoin, E.miterLimit = a.miterLimit, E.setLineDash && a.lineDash.length && (E.setLineDash(a.lineDash), E.lineDashOffset = a.lineDashOffset)), r && (E.fillStyle = s.fillStyle), E.textBaseline = "middle", E.textAlign = "center"; var T = .5 - c,
                            S = c * m + T * p,
                            w = void 0; if (n)
                            for (w = 0; w < d; ++w) E.strokeText(f[w], S + T * _[w], .5 * (p + y) + w * y); if (r)
                            for (w = 0; w < d; ++w) E.fillText(f[w], S + T * _[w], .5 * (p + y) + w * y) } return Ea.get(o, this) }, e.prototype.replayTextBackground_ = function(t, e, r, n, i, o, a) { t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, r), t.lineTo.apply(t, n), t.lineTo.apply(t, i), t.lineTo.apply(t, e), o && (this.alignFill_ = o[2], this.fill_(t)), a && (this.setStrokeStyle_(t, a), t.stroke()) }, e.prototype.replayImage_ = function(t, e, r, n, i, o, a, s, u, l, h, c, p, f, d, _, g, y) { var v = g || y;
                    e -= i *= p, r -= o *= p; var m = d + l > n.width ? n.width - l : d,
                        E = s + h > n.height ? n.height - h : s,
                        T = _[3] + m * p + _[1],
                        S = _[0] + E * p + _[2],
                        w = e - _[3],
                        x = r - _[0];
                    (v || 0 !== c) && (up[0] = cp[0] = w, up[1] = lp[1] = x, lp[0] = hp[0] = w + T, hp[1] = cp[1] = x + S); var O = null; if (0 !== c) { var R = e + i,
                            C = r + o;
                        O = qe(sp, R, C, 1, 1, c, -R, -C), Ze(sp, up), Ze(sp, lp), Ze(sp, hp), Ze(sp, cp), ut(Math.min(up[0], lp[0], hp[0], cp[0]), Math.min(up[1], lp[1], hp[1], cp[1]), Math.max(up[0], lp[0], hp[0], cp[0]), Math.max(up[1], lp[1], hp[1], cp[1]), ap) } else ut(w, x, w + T, x + S, ap); var P = t.canvas,
                        I = y ? y[2] * p / 2 : 0,
                        b = ap[0] - I <= P.width && ap[2] + I >= 0 && ap[1] - I <= P.height && ap[3] + I >= 0; if (f && (e = Math.round(e), r = Math.round(r)), a) { if (!b && 1 == a[4]) return;
                        ft(a, ap); var L = b ? [t, O ? O.slice(0) : null, u, n, l, h, m, E, e, r, p] : null;
                        L && (v && L.push(g, y, up, lp, hp, cp), a.push(L)) } else b && (v && this.replayTextBackground_(t, up, lp, hp, cp, g, y), Fa(t, O, u, n, l, h, m, E, e, r, p)) }, e.prototype.fill_ = function(t) { if (this.alignFill_) { var e = Ze(this.renderedTransform_, [0, 0]),
                            r = 512 * this.pixelRatio;
                        t.save(), t.translate(e[0] % r, e[1] % r), t.rotate(this.viewRotation_) }
                    t.fill(), this.alignFill_ && t.restore() }, e.prototype.setStrokeStyle_ = function(t, e) { t.strokeStyle = e[1], t.lineWidth = e[2], t.lineCap = e[3], t.lineJoin = e[4], t.miterLimit = e[5], t.setLineDash && (t.lineDashOffset = e[7], t.setLineDash(e[6])) }, e.prototype.renderDeclutter = function(t, e, r, n) { if (t && t.length > 5) { var i = t[4]; if (1 == i || i == t.length - 5) { var o = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e }; if (n || (n = new Ol.a(9)), !n.collides(o)) { n.insert(o); for (var a = 5, s = t.length; a < s; ++a) { var u = t[a],
                                        l = u[0],
                                        h = l.globalAlpha;
                                    h !== r && (l.globalAlpha = r), u.length > 11 && this.replayTextBackground_(u[0], u[13], u[14], u[15], u[16], u[11], u[12]), Fa.apply(void 0, u), h !== r && (l.globalAlpha = h) } }
                            t.length = 5, lt(t) } } return n }, e.prototype.drawTextImageWithPointPlacement_ = function(t, e, r, n) { var i = this.textStates[e],
                        o = this.getTextImage(t, e, n, r),
                        a = this.strokeStates[r],
                        s = this.pixelRatio,
                        u = $c[i.textAlign || "center"],
                        l = $c[i.textBaseline || "middle"],
                        h = a && a.lineWidth ? a.lineWidth : 0; return { label: o, anchorX: u * (o.width / s - 2 * i.scale) + 2 * (.5 - u) * h, anchorY: l * o.height / s + 2 * (.5 - l) * h } }, e.prototype.execute_ = function(t, e, r, n, i, o) { var a, s, u;
                    this.declutterItems.length = 0, this.pixelCoordinates_ && R(e, this.renderedTransform_) ? a = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), a = Gt(this.coordinates, 0, this.coordinates.length, 2, e, this.pixelCoordinates_), s = this.renderedTransform_, u = e, s[0] = u[0], s[1] = u[1], s[2] = u[2], s[3] = u[3], s[4] = u[4], s[5] = u[5]); for (var l, h, c, p, f, d, _, g, y, v, m, E, T, S, w, x, O, C = 0, P = r.length, I = 0, b = 0, L = 0, M = null, F = null, A = this.coordinateCache_, N = this.viewRotation_, G = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: N }, D = this.instructions != r || this.overlaps ? 0 : 200; C < P;) { var j = r[C]; switch (j[0]) {
                            case Yc.BEGIN_GEOMETRY:
                                (w = j[1]).getGeometry() ? void 0 === o || bt(o, j[3]) ? ++C : C = j[2] + 1 : C = j[2]; break;
                            case Yc.BEGIN_PATH:
                                b > D && (this.fill_(t), b = 0), L > D && (t.stroke(), L = 0), b || L || (t.beginPath(), p = f = NaN), ++C; break;
                            case Yc.CIRCLE:
                                var k = a[I = j[1]],
                                    U = a[I + 1],
                                    B = a[I + 2] - k,
                                    Y = a[I + 3] - U,
                                    z = Math.sqrt(B * B + Y * Y);
                                t.moveTo(k + z, U), t.arc(k, U, z, 0, 2 * Math.PI, !0), ++C; break;
                            case Yc.CLOSE_PATH:
                                t.closePath(), ++C; break;
                            case Yc.CUSTOM:
                                I = j[1], l = j[2]; var X = j[3],
                                    V = j[4],
                                    W = 6 == j.length ? j[5] : void 0;
                                G.geometry = X, G.feature = w, C in A || (A[C] = []); var Z = A[C];
                                W ? W(a, I, l, 2, Z) : (Z[0] = a[I], Z[1] = a[I + 1], Z.length = 2), V(Z, G), ++C; break;
                            case Yc.DRAW_IMAGE:
                                I = j[1], l = j[2], v = j[3], h = j[4], c = j[5], y = i ? null : j[6]; var K = j[7],
                                    H = j[8],
                                    q = j[9],
                                    J = j[10],
                                    Q = j[11],
                                    $ = j[12],
                                    tt = j[13],
                                    et = j[14]; if (!v && j.length >= 19) { m = j[18], E = j[19], T = j[20], S = j[21]; var rt = this.drawTextImageWithPointPlacement_(m, E, T, S);
                                    v = j[3] = rt.label; var nt = j[22];
                                    h = j[4] = (rt.anchorX - nt) * this.pixelRatio; var it = j[23];
                                    c = j[5] = (rt.anchorY - it) * this.pixelRatio, K = j[7] = v.height, et = j[14] = v.width } var ot = void 0;
                                j.length > 24 && (ot = j[24]); var at = void 0,
                                    st = void 0,
                                    ut = void 0;
                                j.length > 16 ? (at = j[15], st = j[16], ut = j[17]) : (at = ma, st = ut = !1), Q && ($ += N); for (var lt = 0, ht = 0; I < l; I += 2)
                                    if (!(ot && ot[lt++] < et / this.pixelRatio)) { if (y) { var ct = Math.floor(ht);
                                            y.length < ct + 1 && ((g = [1 / 0, 1 / 0, -1 / 0, -1 / 0]).push(y[0][4]), y.push(g)), g = y[ct] }
                                        this.replayImage_(t, a[I], a[I + 1], v, h, c, g, K, H, q, J, $, tt, n, et, at, st ? M : null, ut ? F : null), g && (ht === Math.floor(ht) && this.declutterItems.push(this, g, w), ht += 1 / g[4]) }++C; break;
                            case Yc.DRAW_CHARS:
                                var pt = j[1],
                                    ft = j[2],
                                    dt = j[3];
                                g = i ? null : j[4]; var _t = j[5];
                                S = j[6]; var gt = j[7],
                                    yt = j[8],
                                    vt = j[9];
                                T = j[10]; var mt = j[11];
                                m = j[12], E = j[13]; var Et = j[14],
                                    Tt = this.textStates[E],
                                    St = Tt.font,
                                    wt = Tt.scale * yt,
                                    xt = void 0;
                                xt = St in this.widths_ ? this.widths_[St] : this.widths_[St] = {}; var Ot = np(a, pt, ft, 2),
                                    Rt = wt * ba(St, m, xt); if (_t || Rt <= Ot) { var Ct = this.textStates[E].textAlign,
                                        Pt = ip(a, pt, ft, 2, m, (Ot - Rt) * $c[Ct], gt, wt, ba, St, xt); if (Pt) { var It = void 0,
                                            Lt = void 0,
                                            Mt = void 0,
                                            Ft = void 0,
                                            At = void 0; if (T)
                                            for (It = 0, Lt = Pt.length; It < Lt; ++It) Mt = (At = Pt[It])[4], Ft = this.getTextImage(Mt, E, "", T), h = At[2] + mt, c = dt * Ft.height + 2 * (.5 - dt) * mt - vt, this.replayImage_(t, At[0], At[1], Ft, h, c, g, Ft.height, 1, 0, 0, At[3], Et, !1, Ft.width, ma, null, null); if (S)
                                            for (It = 0, Lt = Pt.length; It < Lt; ++It) Mt = (At = Pt[It])[4], Ft = this.getTextImage(Mt, E, S, ""), h = At[2], c = dt * Ft.height - vt, this.replayImage_(t, At[0], At[1], Ft, h, c, g, Ft.height, 1, 0, 0, At[3], Et, !1, Ft.width, ma, null, null) } }
                                this.declutterItems.push(this, g, w), ++C; break;
                            case Yc.END_GEOMETRY:
                                if (void 0 !== i) { var Nt = i(w = j[1]); if (Nt) return Nt }++C; break;
                            case Yc.FILL:
                                D ? b++ : this.fill_(t), ++C; break;
                            case Yc.MOVE_TO_LINE_TO:
                                for (I = j[1], l = j[2], x = a[I], _ = (O = a[I + 1]) + .5 | 0, (d = x + .5 | 0) === p && _ === f || (t.moveTo(x, O), p = d, f = _), I += 2; I < l; I += 2) d = (x = a[I]) + .5 | 0, _ = (O = a[I + 1]) + .5 | 0, I != l - 2 && d === p && _ === f || (t.lineTo(x, O), p = d, f = _);++C; break;
                            case Yc.SET_FILL_STYLE:
                                M = j, this.alignFill_ = j[2], b && (this.fill_(t), b = 0, L && (t.stroke(), L = 0)), t.fillStyle = j[1], ++C; break;
                            case Yc.SET_STROKE_STYLE:
                                F = j, L && (t.stroke(), L = 0), this.setStrokeStyle_(t, j), ++C; break;
                            case Yc.STROKE:
                                D ? L++ : t.stroke(), ++C; break;
                            default:
                                ++C } }
                    b && this.fill_(t), L && t.stroke() }, e.prototype.execute = function(t, e, r, n) { this.viewRotation_ = r, this.execute_(t, e, this.instructions, n, void 0, void 0) }, e.prototype.executeHitDetection = function(t, e, r, n, i) { return this.viewRotation_ = r, this.execute_(t, e, this.hitDetectionInstructions, !0, n, i) }, e }(m),
            fp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            dp = [rp.POLYGON, rp.CIRCLE, rp.LINE_STRING, rp.IMAGE, rp.TEXT, rp.DEFAULT],
            _p = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this) || this; return s.maxExtent_ = e, s.overlaps_ = i, s.pixelRatio_ = n, s.resolution_ = r, s.renderBuffer_ = a, s.executorsByZIndex_ = {}, s.hitDetectionContext_ = null, s.hitDetectionTransform_ = [1, 0, 0, 1, 0, 0], s.createExecutors_(o), s } return fp(e, t), e.prototype.clip = function(t, e) { var r = this.getClipCoords(e);
                    t.beginPath(), t.moveTo(r[0], r[1]), t.lineTo(r[2], r[3]), t.lineTo(r[4], r[5]), t.lineTo(r[6], r[7]), t.clip() }, e.prototype.createExecutors_ = function(t) { for (var e in t) { var r = this.executorsByZIndex_[e];
                        void 0 === r && (this.executorsByZIndex_[e] = r = {}); var n = t[e]; for (var i in n) { var o = n[i];
                            r[i] = new pp(this.resolution_, this.pixelRatio_, this.overlaps_, o) } } }, e.prototype.disposeInternal = function() { for (var e in this.executorsByZIndex_) { var r = this.executorsByZIndex_[e]; for (var n in r) r[n].disposeInternal() } if (this.hitDetectionContext_) { var i = this.hitDetectionContext_.canvas;
                        i.width = i.height = 0 }
                    t.prototype.disposeInternal.call(this) }, e.prototype.hasExecutors = function(t) { for (var e in this.executorsByZIndex_)
                        for (var r = this.executorsByZIndex_[e], n = 0, i = t.length; n < i; ++n)
                            if (t[n] in r) return !0;
                    return !1 }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i, o) { var a = 2 * (n = Math.round(n)) + 1,
                        s = qe(this.hitDetectionTransform_, n + .5, n + .5, 1 / e, -1 / e, -r, -t[0], -t[1]);
                    this.hitDetectionContext_ || (this.hitDetectionContext_ = hi(a, a)); var u, l = this.hitDetectionContext_;
                    l.canvas.width !== a || l.canvas.height !== a ? (l.canvas.width = a, l.canvas.height = a) : l.clearRect(0, 0, a, a), void 0 !== this.renderBuffer_ && (dt(u = [1 / 0, 1 / 0, -1 / 0, -1 / 0], t), tt(u, e * (this.renderBuffer_ + n), u)); var h, c = function(t) { if (void 0 !== gp[t]) return gp[t]; for (var e = 2 * t + 1, r = new Array(e), n = 0; n < e; n++) r[n] = new Array(e); var i = t,
                            o = 0,
                            a = 0; for (; i >= o;) yp(r, t + i, t + o), yp(r, t + o, t + i), yp(r, t - o, t + i), yp(r, t - i, t + o), yp(r, t - i, t - o), yp(r, t - o, t - i), yp(r, t + o, t - i), yp(r, t + i, t - o), 2 * ((a += 1 + 2 * ++o) - i) + 1 > 0 && (a += 1 - 2 * (i -= 1)); return gp[t] = r, r }(n);

                    function p(t) { for (var e = l.getImageData(0, 0, a, a).data, r = 0; r < a; r++)
                            for (var n = 0; n < a; n++)
                                if (c[r][n] && e[4 * (n * a + r) + 3] > 0) { var s = void 0; return (!o || h != rp.IMAGE && h != rp.TEXT || -1 !== o.indexOf(t)) && (s = i(t)), s || void l.clearRect(0, 0, a, a) } } var f, d, _, g, y, v = Object.keys(this.executorsByZIndex_).map(Number); for (v.sort(E), f = v.length - 1; f >= 0; --f) { var m = v[f].toString(); for (_ = this.executorsByZIndex_[m], d = dp.length - 1; d >= 0; --d)
                            if (void 0 !== (g = _[h = dp[d]]) && (y = g.executeHitDetection(l, s, r, p, u))) return y } }, e.prototype.getClipCoords = function(t) { var e = this.maxExtent_; if (!e) return null; var r = e[0],
                        n = e[1],
                        i = e[2],
                        o = e[3],
                        a = [r, n, r, o, i, o, i, n]; return Gt(a, 0, 8, 2, t, a), a }, e.prototype.isEmpty = function() { return _(this.executorsByZIndex_) }, e.prototype.execute = function(t, e, r, n, i, o) { var a = Object.keys(this.executorsByZIndex_).map(Number);
                    a.sort(E), this.maxExtent_ && (t.save(), this.clip(t, e)); var s, u, l, h, c, p, f = i || dp; for (s = 0, u = a.length; s < u; ++s) { var d = a[s].toString(); for (c = this.executorsByZIndex_[d], l = 0, h = f.length; l < h; ++l) { var _ = f[l]; if (void 0 !== (p = c[_]))
                                if (!o || _ != rp.IMAGE && _ != rp.TEXT) p.execute(t, e, r, n);
                                else { var g = o[d];
                                    g ? g.push(p, e.slice(0)) : o[d] = [p, e.slice(0)] } } }
                    this.maxExtent_ && t.restore() }, e }(m),
            gp = { 0: [
                    [!0]
                ] };

        function yp(t, e, r) { var n, i = Math.floor(t.length / 2); if (e >= i)
                for (n = i; n < e; n++) t[n][r] = !0;
            else if (e < i)
                for (n = e + 1; n < i; n++) t[n][r] = !0 }

        function vp(t, e, r, n, i, o) { for (var a = Object.keys(t).map(Number).sort(E), s = 0, u = a.length; s < u; ++s)
                for (var l = t[a[s].toString()], h = void 0, c = 0, p = l.length; c < p;) { var f = l[c++];
                    f !== h && (h = f, o.push({ items: f.declutterItems, opacity: n })); var d = l[c++];
                    f.execute(e, d, r, i) } } var mp = _p,
            Ep = .5,
            Tp = { Point: function(t, e, r, n) { var i = r.getImage(); if (i) { if (i.getImageState() != su.LOADED) return; var o = t.getBuilder(r.getZIndex(), rp.IMAGE);
                        o.setImageStyle(i, t.addDeclutter(!1)), o.drawPoint(e, n) } var a = r.getText(); if (a) { var s = t.getBuilder(r.getZIndex(), rp.TEXT);
                        s.setTextStyle(a, t.addDeclutter(!!i)), s.drawText(e, n) } }, LineString: function(t, e, r, n) { var i = r.getStroke(); if (i) { var o = t.getBuilder(r.getZIndex(), rp.LINE_STRING);
                        o.setFillStrokeStyle(null, i), o.drawLineString(e, n) } var a = r.getText(); if (a) { var s = t.getBuilder(r.getZIndex(), rp.TEXT);
                        s.setTextStyle(a, t.addDeclutter(!1)), s.drawText(e, n) } }, Polygon: function(t, e, r, n) { var i = r.getFill(),
                        o = r.getStroke(); if (i || o) { var a = t.getBuilder(r.getZIndex(), rp.POLYGON);
                        a.setFillStrokeStyle(i, o), a.drawPolygon(e, n) } var s = r.getText(); if (s) { var u = t.getBuilder(r.getZIndex(), rp.TEXT);
                        u.setTextStyle(s, t.addDeclutter(!1)), u.drawText(e, n) } }, MultiPoint: function(t, e, r, n) { var i = r.getImage(); if (i) { if (i.getImageState() != su.LOADED) return; var o = t.getBuilder(r.getZIndex(), rp.IMAGE);
                        o.setImageStyle(i, t.addDeclutter(!1)), o.drawMultiPoint(e, n) } var a = r.getText(); if (a) { var s = t.getBuilder(r.getZIndex(), rp.TEXT);
                        s.setTextStyle(a, t.addDeclutter(!!i)), s.drawText(e, n) } }, MultiLineString: function(t, e, r, n) { var i = r.getStroke(); if (i) { var o = t.getBuilder(r.getZIndex(), rp.LINE_STRING);
                        o.setFillStrokeStyle(null, i), o.drawMultiLineString(e, n) } var a = r.getText(); if (a) { var s = t.getBuilder(r.getZIndex(), rp.TEXT);
                        s.setTextStyle(a, t.addDeclutter(!1)), s.drawText(e, n) } }, MultiPolygon: function(t, e, r, n) { var i = r.getFill(),
                        o = r.getStroke(); if (o || i) { var a = t.getBuilder(r.getZIndex(), rp.POLYGON);
                        a.setFillStrokeStyle(i, o), a.drawMultiPolygon(e, n) } var s = r.getText(); if (s) { var u = t.getBuilder(r.getZIndex(), rp.TEXT);
                        u.setTextStyle(s, t.addDeclutter(!1)), u.drawText(e, n) } }, GeometryCollection: function(t, e, r, n) { var i, o, a = e.getGeometriesArray(); for (i = 0, o = a.length; i < o; ++i) {
                        (0, Tp[a[i].getType()])(t, a[i], r, n) } }, Circle: function(t, e, r, n) { var i = r.getFill(),
                        o = r.getStroke(); if (i || o) { var a = t.getBuilder(r.getZIndex(), rp.CIRCLE);
                        a.setFillStrokeStyle(i, o), a.drawCircle(e, n) } var s = r.getText(); if (s) { var u = t.getBuilder(r.getZIndex(), rp.TEXT);
                        u.setTextStyle(s, t.addDeclutter(!1)), u.drawText(e, n) } } };

        function Sp(t, e) { return parseInt(o(t), 10) - parseInt(o(e), 10) }

        function wp(t, e) { var r = xp(t, e); return r * r }

        function xp(t, e) { return Ep * t / e }

        function Op(t, e, r, n, i, o) { var a = !1,
                s = r.getImage(); if (s) { var u = s.getImageState();
                u == su.LOADED || u == su.ERROR ? s.unlistenImageChange(i) : (u == su.IDLE && s.load(), u = s.getImageState(), s.listenImageChange(i), a = !0) } return function(t, e, r, n, i) { var o = r.getGeometryFunction()(e); if (!o) return; var a = o.simplifyTransformed(n, je(), i); if (r.getRenderer()) ! function t(e, r, n, i) { if (r.getType() == Nt.GEOMETRY_COLLECTION) { for (var o = r.getGeometries(), a = 0, s = o.length; a < s; ++a) t(e, o[a], n, i); return } var u = e.getBuilder(n.getZIndex(), rp.DEFAULT);
                    u.drawCustom(r, i, n.getRenderer()) }(t, a, r, e);
                else {
                    (0, Tp[a.getType()])(t, a, r, e) } }(t, e, r, n, o), a } var Rp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Cp = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.boundHandleStyleImageChange_ = r.handleStyleImageChange_.bind(r), r.dirty_ = !1, r.renderedRevision_ = -1, r.renderedResolution_ = NaN, r.renderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r.renderedRenderOrder_ = null, r.replayGroup_ = null, r.replayGroupChanged = !0, r } return Rp(e, t), e.prototype.useContainer = function(e, r, n) { n < 1 && (e = null), t.prototype.useContainer.call(this, e, r, n) }, e.prototype.renderFrame = function(t, e) { var r = t.pixelRatio,
                        n = t.layerStatesArray[t.layerIndex];
                    He(this.pixelTransform, 1 / r, 1 / r), Je(this.inversePixelTransform, this.pixelTransform), this.useContainer(e, this.pixelTransform, n.opacity); var i = this.context,
                        o = i.canvas,
                        a = this.replayGroup_; if (!a || a.isEmpty()) return !this.containerReused && o.width > 0 && (o.width = 0), this.container; var s = Math.round(t.size[0] * r),
                        u = Math.round(t.size[1] * r); if (o.width != s || o.height != u) { o.width = s, o.height = u; var l = Qe(this.pixelTransform);
                        o.style.transform !== l && (o.style.transform = l) } else this.containerReused || i.clearRect(0, 0, s, u);
                    this.preRender(i, t); var h = t.extent,
                        c = t.viewState,
                        p = c.projection,
                        f = c.rotation,
                        d = p.getExtent(),
                        _ = this.getLayer().getSource(),
                        g = !1; if (n.extent) { var y = Ye(n.extent, p);
                        (g = !it(y, t.extent) && bt(y, t.extent)) && this.clip(i, t, y) } var v = t.viewHints,
                        m = !(v[Dn] || v[jn]),
                        E = this.getRenderTransform(t, s, u, 0),
                        T = this.getLayer().getDeclutter() ? {} : null; if (a.execute(i, E, f, m, void 0, T), _.getWrapX() && p.canWrapX() && !it(d, h)) { for (var S = h[0], w = It(d), x = 0, O = void 0; S < d[0];) { O = w * --x; var R = this.getRenderTransform(t, s, u, O);
                            a.execute(i, R, f, m, void 0, T), S += w } for (x = 0, S = h[2]; S > d[2];) { O = w * ++x; var C = this.getRenderTransform(t, s, u, O);
                            a.execute(i, C, f, m, void 0, T), S -= w } } if (T) { var P = t.viewHints;
                        vp(T, i, f, 1, !(P[Dn] || P[jn]), t.declutterItems) }
                    g && i.restore(), this.postRender(i, t); var I = n.opacity,
                        b = this.container; return I !== parseFloat(b.style.opacity) && (b.style.opacity = 1 === I ? "" : I), this.container }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i) { if (this.replayGroup_) { var a = e.viewState.resolution,
                            s = e.viewState.rotation,
                            u = this.getLayer(),
                            l = {}; return this.replayGroup_.forEachFeatureAtCoordinate(t, a, s, r, function(t) { var e = o(t); if (!(e in l)) return l[e] = !0, n(t, u) }, u.getDeclutter() ? i : null) } }, e.prototype.handleFontsChanged = function() { var t = this.getLayer();
                    t.getVisible() && this.replayGroup_ && t.changed() }, e.prototype.handleStyleImageChange_ = function(t) { this.renderIfReadyAndVisible() }, e.prototype.prepareFrame = function(t) { var e = this.getLayer(),
                        r = e.getSource(),
                        n = t.viewHints[Dn],
                        i = t.viewHints[jn],
                        o = e.getUpdateWhileAnimating(),
                        a = e.getUpdateWhileInteracting(); if (!this.dirty_ && !o && n || !a && i) return !0; var s = t.extent,
                        u = t.viewState,
                        l = u.projection,
                        h = u.resolution,
                        c = t.pixelRatio,
                        p = e.getRevision(),
                        f = e.getRenderBuffer(),
                        d = e.getRenderOrder();
                    void 0 === d && (d = Sp); var _ = tt(s, f * h),
                        g = u.projection.getExtent(); if (r.getWrapX() && u.projection.canWrapX() && !it(g, t.extent)) { var y = It(g),
                            v = Math.max(It(_) / 2, y);
                        _[0] = g[0] - v, _[2] = g[2] + v } if (!this.dirty_ && this.renderedResolution_ == h && this.renderedRevision_ == p && this.renderedRenderOrder_ == d && it(this.renderedExtent_, _)) return this.replayGroupChanged = !1, !0;
                    this.replayGroup_ && this.replayGroup_.dispose(), this.replayGroup_ = null, this.dirty_ = !1; var m = new ep(xp(h, c), _, h, c, e.getDeclutter()),
                        E = je();
                    E ? r.loadFeatures(Be(_, l), h, E) : r.loadFeatures(_, h, l); var T = wp(h, c),
                        S = function(t) { var r, n = t.getStyleFunction() || e.getStyleFunction(); if (n && (r = n(t, h)), r) { var i = this.renderFeature(t, T, r, m, l);
                                this.dirty_ = this.dirty_ || i } }.bind(this),
                        w = Be(_, l); if (d) { var x = [];
                        r.forEachFeatureInExtent(w, function(t) { x.push(t) }), x.sort(d); for (var O = 0, R = x.length; O < R; ++O) S(x[O]) } else r.forEachFeatureInExtent(w, S); var C = m.finish(),
                        P = new mp(_, h, c, r.getOverlaps(), C, e.getRenderBuffer()); return this.renderedResolution_ = h, this.renderedRevision_ = p, this.renderedRenderOrder_ = d, this.renderedExtent_ = _, this.replayGroup_ = P, this.replayGroupChanged = !0, !0 }, e.prototype.renderFeature = function(t, e, r, n, i) { if (!r) return !1; var o = !1; if (Array.isArray(r))
                        for (var a = 0, s = r.length; a < s; ++a) o = Op(n, t, r[a], e, this.boundHandleStyleImageChange_, i) || o;
                    else o = Op(n, t, r, e, this.boundHandleStyleImageChange_, i); return o }, e }(Ih),
            Pp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Ip = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.vectorRenderer_ = new Cp(e), r.layerImageRatio_ = e.getImageRatio(), r } return Pp(e, t), e.prototype.disposeInternal = function() { this.vectorRenderer_.dispose(), t.prototype.disposeInternal.call(this) }, e.prototype.handleFontsChanged = function() { this.vectorRenderer_.handleFontsChanged() }, e.prototype.prepareFrame = function(t) { var e = t.pixelRatio,
                        r = t.viewState.resolution,
                        n = t.viewHints,
                        i = this.vectorRenderer_,
                        o = t.extent; if (1 !== this.layerImageRatio_ && Mt(o = o.slice(0), this.layerImageRatio_), !n[Dn] && !n[jn] && !Lt(o)) { i.useContainer(null, null, 1); var a = i.context,
                            s = p({}, t, { declutterItems: [], size: [It(o) / r, Ot(o) / r], viewState: p({}, t.viewState, { rotation: 0 }) }),
                            u = new oh(o, r, e, a.canvas, function(t) { i.prepareFrame(s) && i.replayGroupChanged && (i.renderFrame(s, null), Ga(s, null), t()) });
                        u.addEventListener(N.CHANGE, function() { u.getState() === su.LOADED && (this.image_ = u) }.bind(this)), u.load() } if (this.image_) { var l = this.image_,
                            h = l.getResolution(),
                            c = l.getPixelRatio();
                        this.renderedResolution = h * e / c } return !!this.image_ }, e.prototype.preRender = function() {}, e.prototype.postRender = function() {}, e.prototype.forEachFeatureAtCoordinate = function(e, r, n, i, o) { return this.vectorRenderer_ ? this.vectorRenderer_.forEachFeatureAtCoordinate(e, r, n, i, o) : t.prototype.forEachFeatureAtCoordinate.call(this, e, r, n, i, o) }, e }(Lh),
            bp = { IMAGE: "image", HYBRID: "hybrid" },
            Lp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Mp = { image: [rp.POLYGON, rp.CIRCLE, rp.LINE_STRING, rp.IMAGE, rp.TEXT], hybrid: [rp.POLYGON, rp.LINE_STRING] },
            Fp = { image: [rp.DEFAULT], hybrid: [rp.IMAGE, rp.TEXT, rp.DEFAULT] },
            Ap = function(t) {
                function e(e) { var r = t.call(this, e) || this; return r.boundHandleStyleImageChange_ = r.handleStyleImageChange_.bind(r), r.overlayContext_ = null, r.overlayContextUid_, r.overlayPixelTransform_ = [1, 0, 0, 1, 0, 0], r.inverseOverlayPixelTransform_ = [1, 0, 0, 1, 0, 0], r.dirty_ = !1, r.renderedLayerRevision_, r.renderTileImageQueue_ = {}, r.tileListenerKeys_ = {}, r.tmpTransform_ = [1, 0, 0, 1, 0, 0], r } return Lp(e, t), e.prototype.useContainer = function(e, r, n) { var i;
                    e && 2 === e.childElementCount && ((i = e.lastElementChild.getContext("2d")) || (e = null)); var a = this.containerReused; if (t.prototype.useContainer.call(this, e, r, n), a && (this.overlayContext_ = i || null, this.overlayContextUid_ = i ? o(i) : void 0), !this.overlayContext_) { var s = hi(),
                            u = s.canvas.style;
                        u.position = "absolute", u.transformOrigin = "top left", this.overlayContext_ = s, this.overlayContextUid_ = o(s) }
                    1 === this.container.childElementCount && this.container.appendChild(this.overlayContext_.canvas) }, e.prototype.prepareTile = function(t, e, r, n) { var i = !1,
                        a = o(t),
                        s = t.getState(); return (s === xn.LOADED && t.hifi || s === xn.ERROR || s === xn.ABORT) && a in this.tileListenerKeys_ && (v(this.tileListenerKeys_[a]), delete this.tileListenerKeys_[a]), s !== xn.LOADED && s !== xn.ERROR || (this.updateExecutorGroup_(t, e, r), this.tileImageNeedsRender_(t, e, r) && (i = !0, n && (this.renderTileImageQueue_[a] = t))), i }, e.prototype.getTile = function(e, r, n, i) { var a = t.prototype.getTile.call(this, e, r, n, i),
                        s = i.pixelRatio,
                        u = i.viewState,
                        l = u.resolution,
                        h = u.projection; if (a.getState() < xn.LOADED) { a.wantedResolution = l; var c = o(a); if (!(c in this.tileListenerKeys_)) { var p = g(a, N.CHANGE, this.prepareTile.bind(this, a, s, h, !0));
                            this.tileListenerKeys_[c] = p } } else { var f = i.viewHints;!!(f[Dn] || f[jn]) && a.wantedResolution || (a.wantedResolution = l), this.prepareTile(a, s, h, !1) && this.renderTileImage_(a, i) } return a }, e.prototype.isDrawableTile = function(e) { return t.prototype.isDrawableTile.call(this, e) && e.hasContext(this.getLayer()) }, e.prototype.getTileImage = function(t) { return t.getImage(this.getLayer()) }, e.prototype.prepareFrame = function(e) { e.layerStatesArray[e.layerIndex].hasOverlay = !0; var r = this.getLayer().getRevision(); return this.renderedLayerRevision_ != r && (this.renderedTiles.length = 0), this.renderedLayerRevision_ = r, t.prototype.prepareFrame.call(this, e) }, e.prototype.updateExecutorGroup_ = function(t, e, r) { var n = this.getLayer(),
                        i = n.getRevision(),
                        a = n.getRenderOrder() || null,
                        s = t.wantedResolution,
                        u = t.getReplayState(n); if (u.dirty || u.renderedResolution !== s || u.renderedRevision != i || u.renderedRenderOrder != a || u.renderedZ !== t.sourceZ) { var l = n.getSource(),
                            h = l.getTileGrid(),
                            c = l.getTileGridForProjection(r).getTileCoordExtent(t.wrappedTileCoord),
                            p = l.getSourceTiles(e, r, t),
                            f = o(n),
                            d = t.executorGroups[f]; if (d)
                            for (var _ = 0, g = d.length; _ < g; ++_) d[_].dispose();
                        t.executorGroups[f] = []; for (var y = function(r, i) { var o = p[r]; if (o.getState() != xn.LOADED) return "continue"; var d = o.tileCoord,
                                    _ = h.getTileCoordExtent(d),
                                    g = Rt(c, _),
                                    y = pt(_, g) ? null : tt(g, n.getRenderBuffer() * s, v.tmpExtent);
                                u.dirty = !1; var m = new ep(0, g, s, e, n.getDeclutter()),
                                    E = wp(s, e),
                                    T = function(t) { var e, r = t.getStyleFunction() || n.getStyleFunction(); if (r && (e = r(t, s)), e) { var i = this.renderFeature(t, E, e, m);
                                            this.dirty_ = this.dirty_ || i, u.dirty = u.dirty || i } },
                                    S = o.getFeatures();
                                a && a !== u.renderedRenderOrder && S.sort(a); for (var w = 0, x = S.length; w < x; ++w) { var O = S[w];
                                    y && !bt(y, O.getGeometry().getExtent()) || T.call(v, O) } var R = m.finish(),
                                    C = n.getDeclutter() && 1 === p.length ? null : g,
                                    P = new mp(C, s, e, l.getOverlaps(), R, n.getRenderBuffer());
                                t.executorGroups[f].push(P) }, v = this, m = 0, E = p.length; m < E; ++m) y(m);
                        u.renderedRevision = i, u.renderedZ = t.sourceZ, u.renderedRenderOrder = a, u.renderedResolution = s } }, e.prototype.forEachFeatureAtCoordinate = function(t, e, r, n, i) { var a = e.viewState.resolution,
                        s = e.viewState.rotation;
                    r = null == r ? 0 : r; var u, l, h, c = this.getLayer(),
                        p = c.getDeclutter(),
                        f = c.getSource().getTileGridForProjection(e.viewState.projection),
                        d = {},
                        _ = this.renderedTiles,
                        g = function() { var e = _[l],
                                h = nt(f.getTileCoordExtent(e.wrappedTileCoord), t); if (!p && !h) return "continue"; for (var g = e.executorGroups[o(c)], y = 0, v = g.length; y < v; ++y) { var m = g[y];
                                u = u || m.forEachFeatureAtCoordinate(t, a, s, r, function(t) { if (h || i && -1 !== i.indexOf(t)) { var e = t.getId(); if (void 0 === e && (e = o(t)), !(e in d)) return d[e] = !0, n(t, c) } }, c.getDeclutter() ? i : null) } }; for (l = 0, h = _.length; l < h; ++l) g(); return u }, e.prototype.handleFontsChanged = function() { f(this.renderTileImageQueue_); var t = this.getLayer();
                    t.getVisible() && void 0 !== this.renderedLayerRevision_ && t.changed() }, e.prototype.handleStyleImageChange_ = function(t) { this.renderIfReadyAndVisible() }, e.prototype.renderFrame = function(e, r) { var n = e.viewHints,
                        i = !(n[Dn] || n[jn]);
                    this.renderQueuedTileImages_(i, e), t.prototype.renderFrame.call(this, e, r); var a = this.getLayer(),
                        s = a.getRenderMode(); if (s === bp.IMAGE) return this.container; var u = a.getSource(),
                        l = e.usedTiles[o(u)]; for (var h in this.renderTileImageQueue_) l && h in l || delete this.renderTileImageQueue_[h]; var c = this.overlayContext_,
                        p = a.getDeclutter() ? {} : null,
                        f = Fp[s],
                        d = e.pixelRatio,
                        _ = e.viewState.rotation,
                        g = e.size;
                    He(this.overlayPixelTransform_, 1 / d, 1 / d), Je(this.inverseOverlayPixelTransform_, this.overlayPixelTransform_); var y = c.canvas,
                        v = Math.round(g[0] * d),
                        m = Math.round(g[1] * d); if (y.width != v || y.height != m) { y.width = v, y.height = m; var E = Qe(this.overlayPixelTransform_);
                        y.style.transform !== E && (y.style.transform = E) } else o(c) === this.overlayContextUid_ && c.clearRect(0, 0, v, m); for (var T = this.renderedTiles, S = u.getTileGridForProjection(e.viewState.projection), w = [], x = [], O = T.length - 1; O >= 0; --O) { var R = T[O]; if (R.getState() != xn.ABORT)
                            for (var C = R.tileCoord, P = S.getTileCoordExtent(R.wrappedTileCoord), I = S.getTileCoordExtent(C, this.tmpExtent)[0] - P[0], b = this.getRenderTransform(e, v, m, I), L = R.executorGroups[o(a)], M = !1, F = 0, A = L.length; F < A; ++F) { var N = L[F]; if (N.hasExecutors(f)) { var G = R.tileCoord[0],
                                        D = void 0; if (!p && !M) { D = N.getClipCoords(b), c.save(); for (var j = 0, k = w.length; j < k; ++j) { var U = w[j];
                                            G < x[j] && (c.beginPath(), c.moveTo(D[0], D[1]), c.lineTo(D[2], D[3]), c.lineTo(D[4], D[5]), c.lineTo(D[6], D[7]), c.moveTo(U[6], U[7]), c.lineTo(U[4], U[5]), c.lineTo(U[2], U[3]), c.lineTo(U[0], U[1]), c.clip()) } }
                                    N.execute(c, b, _, i, f, p), p || M || (c.restore(), w.push(D), x.push(G), M = !0) } } }
                    p && vp(p, c, _, e.layerStatesArray[e.layerIndex].opacity, i, e.declutterItems); return this.container }, e.prototype.renderQueuedTileImages_ = function(t, e) { for (var r in this.renderTileImageQueue_) { if (!t && Date.now() - e.time > 8) { e.animate = !0; break } var n = this.renderTileImageQueue_[r];
                        delete this.renderTileImageQueue_[r], this.renderTileImage_(n, e) } }, e.prototype.renderFeature = function(t, e, r, n) { if (!r) return !1; var i = !1; if (Array.isArray(r))
                        for (var o = 0, a = r.length; o < a; ++o) i = Op(n, t, r[o], e, this.boundHandleStyleImageChange_) || i;
                    else i = Op(n, t, r, e, this.boundHandleStyleImageChange_); return i }, e.prototype.tileImageNeedsRender_ = function(t, e, r) { var n = this.getLayer(),
                        i = t.getReplayState(n),
                        o = n.getRevision(),
                        a = t.sourceZ,
                        s = t.wantedResolution; return i.renderedTileResolution !== s || i.renderedTileRevision !== o || i.renderedTileZ !== a }, e.prototype.renderTileImage_ = function(t, e) { var r = this.getLayer(),
                        n = t.getReplayState(r),
                        i = r.getRevision(),
                        a = t.executorGroups[o(r)];
                    n.renderedTileRevision = i, n.renderedTileZ = t.sourceZ; var s = t.wrappedTileCoord,
                        u = s[0],
                        l = r.getSource(),
                        h = e.pixelRatio,
                        c = e.viewState.projection,
                        p = l.getTileGridForProjection(c),
                        f = p.getResolution(t.tileCoord[0]),
                        d = e.pixelRatio / t.wantedResolution * f,
                        _ = p.getResolution(u),
                        g = t.getContext(r);
                    h = Math.max(h, d / h); var y = l.getTilePixelSize(u, h, c);
                    g.canvas.width = y[0], g.canvas.height = y[1]; var v = h / d; if (1 !== v) { var m = Xe(this.tmpTransform_);
                        Ke(m, v, v), g.setTransform.apply(g, m) } var E = p.getTileCoordExtent(s, this.tmpExtent),
                        T = d / _,
                        S = Xe(this.tmpTransform_);
                    Ke(S, T, -T),
                        function(t, e, r) { Ve(t, We(ze, 1, 0, 0, 1, e, r)) }(S, -E[0], -E[3]); for (var w = 0, x = a.length; w < x; ++w) { a[w].execute(g, S, 0, !0, Mp[r.getRenderMode()]) }
                    n.renderedTileResolution = t.wantedResolution }, e.prototype.getDataAtPixel = function(e, r, n) { var i = t.prototype.getDataAtPixel.call(this, e, r, n); if (i) return i; var o = Ze(this.inverseOverlayPixelTransform_, e.slice()),
                        a = this.overlayContext_; try { i = a.getImageData(Math.round(o[0]), Math.round(o[1]), 1, 1).data } catch (t) { return "SecurityError" === t.name ? new Uint8Array : i } return 0 === i[3] ? null : i }, e }(Uh); var Np = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Gp = "renderOrder",
            Dp = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n); return delete i.style, delete i.renderBuffer, delete i.updateWhileAnimating, delete i.updateWhileInteracting, (r = t.call(this, i) || this).declutter_ = void 0 !== n.declutter && n.declutter, r.renderBuffer_ = void 0 !== n.renderBuffer ? n.renderBuffer : 100, r.style_ = null, r.styleFunction_ = void 0, r.setStyle(n.style), r.updateWhileAnimating_ = void 0 !== n.updateWhileAnimating && n.updateWhileAnimating, r.updateWhileInteracting_ = void 0 !== n.updateWhileInteracting && n.updateWhileInteracting, r } return Np(e, t), e.prototype.getDeclutter = function() { return this.declutter_ }, e.prototype.getRenderBuffer = function() { return this.renderBuffer_ }, e.prototype.getRenderOrder = function() { return this.get(Gp) }, e.prototype.getStyle = function() { return this.style_ }, e.prototype.getStyleFunction = function() { return this.styleFunction_ }, e.prototype.getUpdateWhileAnimating = function() { return this.updateWhileAnimating_ }, e.prototype.getUpdateWhileInteracting = function() { return this.updateWhileInteracting_ }, e.prototype.setRenderOrder = function(t) { this.set(Gp, t) }, e.prototype.setStyle = function(t) { this.style_ = void 0 !== t ? t : Pu, this.styleFunction_ = null === t ? void 0 : function(t) { var e; if ("function" == typeof t) e = t;
                        else { var r; if (Array.isArray(t)) r = t;
                            else K("function" == typeof t.getZIndex, 41), r = [t];
                            e = function() { return r } } return e }(this.style_), this.changed() }, e }(Bi),
            jp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            kp = function(t) {
                function e(e) { return t.call(this, e) || this } return jp(e, t), e.prototype.createRenderer = function() { return new Cp(this) }, e }(Dp);

        function Up(t, e, r, n, i, o) { var a = NaN,
                s = NaN,
                u = (r - e) / n; if (1 === u) a = t[e], s = t[e + 1];
            else if (2 == u) a = (1 - i) * t[e] + i * t[e + n], s = (1 - i) * t[e + 1] + i * t[e + n + 1];
            else if (0 !== u) { for (var l = t[e], h = t[e + 1], c = 0, p = [0], f = e + n; f < r; f += n) { var d = t[f],
                        _ = t[f + 1];
                    c += Math.sqrt((d - l) * (d - l) + (_ - h) * (_ - h)), p.push(c), l = d, h = _ } var g = i * c,
                    y = function(t, e, r) { for (var n, i, o = r || E, a = 0, s = t.length, u = !1; a < s;)(i = +o(t[n = a + (s - a >> 1)], e)) < 0 ? a = n + 1 : (s = n, u = !i); return u ? a : ~a }(p, g); if (y < 0) { var v = (g - p[-y - 2]) / (p[-y - 1] - p[-y - 2]),
                        m = e + (-y - 2) * n;
                    a = Wt(t[m], t[m + n], v), s = Wt(t[m + 1], t[m + n + 1], v) } else a = t[e + y * n], s = t[e + y * n + 1] } return o ? (o[0] = a, o[1] = s, o) : [a, s] }

        function Bp(t, e, r, n, i, o) { if (r == e) return null; var a; if (i < t[e + n - 1]) return o ? ((a = t.slice(e, e + n))[n - 1] = i, a) : null; if (t[r - 1] < i) return o ? ((a = t.slice(r - n, r))[n - 1] = i, a) : null; if (i == t[e + n - 1]) return t.slice(e, e + n); for (var s = e / n, u = r / n; s < u;) { var l = s + u >> 1;
                i < t[(l + 1) * n - 1] ? u = l : s = l + 1 } var h = t[s * n - 1]; if (i == h) return t.slice((s - 1) * n, (s - 1) * n + n); var c = (i - h) / (t[(s + 1) * n - 1] - h);
            a = []; for (var p = 0; p < n - 1; ++p) a.push(Wt(t[(s - 1) * n + p], t[s * n + p], c)); return a.push(i), a } var Yp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            zp = function(t) {
                function e(e, r) { var n = t.call(this) || this; return n.flatMidpoint_ = null, n.flatMidpointRevision_ = -1, n.maxDelta_ = -1, n.maxDeltaRevision_ = -1, void 0 === r || Array.isArray(e[0]) ? n.setCoordinates(e, r) : n.setFlatCoordinates(r, e), n } return Yp(e, t), e.prototype.appendCoordinate = function(t) { this.flatCoordinates ? x(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed() }, e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout) }, e.prototype.closestPointXY = function(t, e, r, n) { return n < rt(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(ur(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), hr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, r, n)) }, e.prototype.forEachSegment = function(t) { return Mr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t) }, e.prototype.getCoordinateAtM = function(t, e) { if (this.layout != At.XYM && this.layout != At.XYZM) return null; var r = void 0 !== e && e; return Bp(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, r) }, e.prototype.getCoordinates = function() { return _r(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride) }, e.prototype.getCoordinateAt = function(t, e) { return Up(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e) }, e.prototype.getLength = function() { return np(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride) }, e.prototype.getFlatMidpoint = function() { return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(.5, this.flatMidpoint_), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_ }, e.prototype.getSimplifiedGeometryInternal = function(t) { var r = []; return r.length = vr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, r, 0), new e(r, At.XY) }, e.prototype.getType = function() { return Nt.LINE_STRING }, e.prototype.intersectsExtent = function(t) { return Fr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t) }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = fr(this.flatCoordinates, 0, t, this.stride), this.changed() }, e }(ir);

        function Xp(t, e, r) { for (var n, i, o, a, s, u, l = [], h = t(0), c = t(1), p = e(h), f = e(c), d = [c, h], _ = [f, p], g = [1, 0], y = {}, v = 1e5; --v > 0 && g.length > 0;) o = g.pop(), h = d.pop(), p = _.pop(), (u = o.toString()) in y || (l.push(p[0], p[1]), y[u] = !0), a = g.pop(), c = d.pop(), f = _.pop(), Bt((i = e(n = t(s = (o + a) / 2)))[0], i[1], p[0], p[1], f[0], f[1]) < r ? (l.push(f[0], f[1]), y[u = a.toString()] = !0) : (g.push(a, s, s, o), _.push(f, i, i, p), d.push(c, n, n, h)); return l } var Vp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Wp = new Ou({ color: "rgba(0,0,0,0.2)" }),
            Zp = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001],
            Kp = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({ updateWhileAnimating: !0, updateWhileInteracting: !0, renderBuffer: 0 }, n); return delete i.maxLines, delete i.strokeStyle, delete i.targetSize, delete i.showLabels, delete i.lonLabelFormatter, delete i.latLabelFormatter, delete i.lonLabelPosition, delete i.latLabelPosition, delete i.lonLabelStyle, delete i.latLabelStyle, delete i.intervals, (r = t.call(this, i) || this).projection_ = null, r.maxLat_ = 1 / 0, r.maxLon_ = 1 / 0, r.minLat_ = -1 / 0, r.minLon_ = -1 / 0, r.maxLatP_ = 1 / 0, r.maxLonP_ = 1 / 0, r.minLatP_ = -1 / 0, r.minLonP_ = -1 / 0, r.targetSize_ = void 0 !== n.targetSize ? n.targetSize : 100, r.maxLines_ = void 0 !== n.maxLines ? n.maxLines : 100, r.meridians_ = [], r.parallels_ = [], r.strokeStyle_ = void 0 !== n.strokeStyle ? n.strokeStyle : Wp, r.fromLonLatTransform_ = void 0, r.toLonLatTransform_ = void 0, r.projectionCenterLonLat_ = null, r.meridiansLabels_ = null, r.parallelsLabels_ = null, n.showLabels && (r.lonLabelFormatter_ = null == n.lonLabelFormatter ? Wn.bind(r, "EW") : n.lonLabelFormatter, r.latLabelFormatter_ = null == n.latLabelFormatter ? Wn.bind(r, "NS") : n.latLabelFormatter, r.lonLabelPosition_ = null == n.lonLabelPosition ? 0 : n.lonLabelPosition, r.latLabelPosition_ = null == n.latLabelPosition ? 1 : n.latLabelPosition, r.lonLabelStyleCache_ = {}, r.lonLabelStyle_ = function(t) { var e = t.get("graticule_label"); return this.lonLabelStyleCache_[e] || (this.lonLabelStyleCache_[e] = new Lu({ text: void 0 !== n.lonLabelStyle ? n.lonLabelStyle : new Au({ text: e, font: "12px Calibri,sans-serif", textBaseline: "bottom", fill: new fu({ color: "rgba(0,0,0,1)" }), stroke: new Ou({ color: "rgba(255,255,255,1)", width: 3 }) }) })), this.lonLabelStyleCache_[e] }.bind(r), r.latLabelStyleCache_ = {}, r.latLabelStyle_ = function(t) { var e = t.get("graticule_label"); return this.latLabelStyleCache_[e] || (this.latLabelStyleCache_[e] = new Lu({ text: void 0 !== n.latLabelStyle ? n.latLabelStyle : new Au({ text: e, font: "12px Calibri,sans-serif", textAlign: "right", fill: new fu({ color: "rgba(0,0,0,1)" }), stroke: new Ou({ color: "rgba(255,255,255,1)", width: 3 }) }) })), this.latLabelStyleCache_[e] }.bind(r), r.meridiansLabels_ = [], r.parallelsLabels_ = []), r.intervals_ = void 0 !== n.intervals ? n.intervals : Zp, r.setSource(new Il({ loader: r.loaderFunction.bind(r), strategy: $a, features: new Z, overlaps: !1, useSpatialIndex: !1, wrapX: n.wrapX })), r.featurePool_ = [], r.lineStyle_ = new Lu({ stroke: r.strokeStyle_ }), r.renderedExtent_ = null, r.setRenderOrder(null), r.tmpExtent_ = null, r } return Vp(e, t), e.prototype.loaderFunction = function(t, e, r) { var n = this.getSource(),
                        i = Rt(this.getExtent() || [-1 / 0, -1 / 0, 1 / 0, 1 / 0], t, this.tmpExtent_); if (setTimeout(function() { n.removeLoadedExtent(t) }, 0), !(this.renderedExtent_ && pt(this.renderedExtent_, i) || (this.renderedExtent_ = i, Lt(i)))) { var o = St(i),
                            a = e * e / 4;
                        (!this.projection_ || !Ie(this.projection_, r)) && this.updateProjectionInfo_(r), this.createGraticule_(i, o, e, a); var s, u = this.meridians_.length + this.parallels_.length; for (this.meridiansLabels_ && (u += this.meridiansLabels_.length), this.parallelsLabels_ && (u += this.parallelsLabels_.length); u > this.featurePool_.length;) s = new q, this.featurePool_.push(s); var l = n.getFeaturesCollection();
                        l.clear(); var h, c, p, f = 0; for (h = 0, c = this.meridians_.length; h < c; ++h)(s = this.featurePool_[f++]).setGeometry(this.meridians_[h]), s.setStyle(this.lineStyle_), l.push(s); for (h = 0, c = this.parallels_.length; h < c; ++h)(s = this.featurePool_[f++]).setGeometry(this.parallels_[h]), s.setStyle(this.lineStyle_), l.push(s); if (this.meridiansLabels_)
                            for (h = 0, c = this.meridiansLabels_.length; h < c; ++h) p = this.meridiansLabels_[h], (s = this.featurePool_[f++]).setGeometry(p.geom), s.setStyle(this.lonLabelStyle_), s.set("graticule_label", p.text), l.push(s); if (this.parallelsLabels_)
                            for (h = 0, c = this.parallelsLabels_.length; h < c; ++h) p = this.parallelsLabels_[h], (s = this.featurePool_[f++]).setGeometry(p.geom), s.setStyle(this.latLabelStyle_), s.set("graticule_label", p.text), l.push(s) } }, e.prototype.addMeridian_ = function(t, e, r, n, i, o) { var a = this.getMeridian_(t, e, r, n, o); if (bt(a.getExtent(), i)) { if (this.meridiansLabels_) { var s = this.getMeridianPoint_(a, i, o);
                            this.meridiansLabels_[o] = { geom: s, text: this.lonLabelFormatter_(t) } }
                        this.meridians_[o++] = a } return o }, e.prototype.addParallel_ = function(t, e, r, n, i, o) { var a = this.getParallel_(t, e, r, n, o); if (bt(a.getExtent(), i)) { if (this.parallelsLabels_) { var s = this.getParallelPoint_(a, i, o);
                            this.parallelsLabels_[o] = { geom: s, text: this.latLabelFormatter_(t) } }
                        this.parallels_[o++] = a } return o }, e.prototype.createGraticule_ = function(t, e, r, n) { var i = this.getInterval_(r); if (-1 == i) return this.meridians_.length = this.parallels_.length = 0, this.meridiansLabels_ && (this.meridiansLabels_.length = 0), void(this.parallelsLabels_ && (this.parallelsLabels_.length = 0)); var o, a, s, u, l = this.toLonLatTransform_(e),
                        h = l[0],
                        c = l[1],
                        p = this.maxLines_,
                        f = [Math.max(t[0], this.minLonP_), Math.max(t[1], this.minLatP_), Math.min(t[2], this.maxLonP_), Math.min(t[3], this.maxLatP_)],
                        d = (f = Fe(f, this.projection_, "EPSG:4326"))[3],
                        _ = f[2],
                        g = f[1],
                        y = f[0]; for (u = kt(h = Math.floor(h / i) * i, this.minLon_, this.maxLon_), a = this.addMeridian_(u, g, d, n, t, 0), o = 0; u != this.minLon_ && o++ < p;) u = Math.max(u - i, this.minLon_), a = this.addMeridian_(u, g, d, n, t, a); for (u = kt(h, this.minLon_, this.maxLon_), o = 0; u != this.maxLon_ && o++ < p;) u = Math.min(u + i, this.maxLon_), a = this.addMeridian_(u, g, d, n, t, a); for (this.meridians_.length = a, this.meridiansLabels_ && (this.meridiansLabels_.length = a), s = kt(c = Math.floor(c / i) * i, this.minLat_, this.maxLat_), a = this.addParallel_(s, y, _, n, t, 0), o = 0; s != this.minLat_ && o++ < p;) s = Math.max(s - i, this.minLat_), a = this.addParallel_(s, y, _, n, t, a); for (s = kt(c, this.minLat_, this.maxLat_), o = 0; s != this.maxLat_ && o++ < p;) s = Math.min(s + i, this.maxLat_), a = this.addParallel_(s, y, _, n, t, a);
                    this.parallels_.length = a, this.parallelsLabels_ && (this.parallelsLabels_.length = a) }, e.prototype.getInterval_ = function(t) { for (var e = this.projectionCenterLonLat_[0], r = this.projectionCenterLonLat_[1], n = -1, i = Math.pow(this.targetSize_ * t, 2), o = [], a = [], s = 0, u = this.intervals_.length; s < u; ++s) { var l = this.intervals_[s] / 2; if (o[0] = e - l, o[1] = r - l, a[0] = e + l, a[1] = r + l, this.fromLonLatTransform_(o, o), this.fromLonLatTransform_(a, a), Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2) <= i) break;
                        n = this.intervals_[s] } return n }, e.prototype.getMeridian_ = function(t, e, r, n, i) { var o = function(t, e, r, n, i) { return Xp(function(n) { return [t, e + (r - e) * n] }, Le(we("EPSG:4326"), n), i) }(t, e, r, this.projection_, n),
                        a = this.meridians_[i]; return a ? (a.setFlatCoordinates(At.XY, o), a.changed()) : a = this.meridians_[i] = new zp(o, At.XY), a }, e.prototype.getMeridianPoint_ = function(t, e, r) { var n, i = t.getFlatCoordinates(),
                        o = Math.max(e[1], i[1]),
                        a = Math.min(e[3], i[i.length - 1]),
                        s = kt(e[1] + Math.abs(e[1] - e[3]) * this.lonLabelPosition_, o, a),
                        u = [i[0], s]; return r in this.meridiansLabels_ ? (n = this.meridiansLabels_[r].geom).setCoordinates(u) : n = new Rr(u), n }, e.prototype.getMeridians = function() { return this.meridians_ }, e.prototype.getParallel_ = function(t, e, r, n, i) { var o = function(t, e, r, n, i) { return Xp(function(n) { return [e + (r - e) * n, t] }, Le(we("EPSG:4326"), n), i) }(t, e, r, this.projection_, n),
                        a = this.parallels_[i]; return a ? (a.setFlatCoordinates(At.XY, o), a.changed()) : a = new zp(o, At.XY), a }, e.prototype.getParallelPoint_ = function(t, e, r) { var n, i = t.getFlatCoordinates(),
                        o = Math.max(e[0], i[0]),
                        a = Math.min(e[2], i[i.length - 2]),
                        s = [kt(e[0] + Math.abs(e[0] - e[2]) * this.latLabelPosition_, o, a), i[1]]; return r in this.parallelsLabels_ ? (n = this.parallelsLabels_[r].geom).setCoordinates(s) : n = new Rr(s), n }, e.prototype.getParallels = function() { return this.parallels_ }, e.prototype.updateProjectionInfo_ = function(t) { var e = we("EPSG:4326"),
                        r = t.getWorldExtent(),
                        n = Fe(r, e, t);
                    this.maxLat_ = r[3], this.maxLon_ = r[2], this.minLat_ = r[1], this.minLon_ = r[0], this.maxLatP_ = n[3], this.maxLonP_ = n[2], this.minLatP_ = n[1], this.minLonP_ = n[0], this.fromLonLatTransform_ = Le(e, t), this.toLonLatTransform_ = Le(t, e), this.projectionCenterLonLat_ = this.toLonLatTransform_(St(t.getExtent())), this.projection_ = t }, e }(kp),
            Hp = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            qp = { BLUR: "blur", GRADIENT: "gradient", RADIUS: "radius" },
            Jp = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"]; var Qp = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n);
                    delete i.gradient, delete i.radius, delete i.blur, delete i.weight, (r = t.call(this, i) || this).gradient_ = null, r.addEventListener(Y(qp.GRADIENT), r.handleGradientChanged_), r.setGradient(n.gradient ? n.gradient : Jp), r.setBlur(void 0 !== n.blur ? n.blur : 15), r.setRadius(void 0 !== n.radius ? n.radius : 8); var o = n.weight ? n.weight : "weight"; return r.weightFunction_ = "string" == typeof o ? function(t) { return t.get(o) } : o, r.setRenderOrder(null), r } return Hp(e, t), e.prototype.getBlur = function() { return this.get(qp.BLUR) }, e.prototype.getGradient = function() { return this.get(qp.GRADIENT) }, e.prototype.getRadius = function() { return this.get(qp.RADIUS) }, e.prototype.handleGradientChanged_ = function() { this.gradient_ = function(t) { for (var e = hi(1, 256), r = e.createLinearGradient(0, 0, 1, 256), n = 1 / (t.length - 1), i = 0, o = t.length; i < o; ++i) r.addColorStop(i * n, t[i]); return e.fillStyle = r, e.fillRect(0, 0, 1, 256), e.canvas }(this.getGradient()) }, e.prototype.setBlur = function(t) { this.set(qp.BLUR, t) }, e.prototype.setGradient = function(t) { this.set(qp.GRADIENT, t) }, e.prototype.setRadius = function(t) { this.set(qp.RADIUS, t) }, e.prototype.createRenderer = function() { return new Gc(this, { attributes: [{ name: "weight", callback: this.weightFunction_ }], vertexShader: "\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }", fragmentShader: "\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }", uniforms: { u_size: function() { return 2 * (this.get(qp.RADIUS) + this.get(qp.BLUR)) }.bind(this), u_blurSlope: function() { return this.get(qp.RADIUS) / Math.max(1, this.get(qp.BLUR)) }.bind(this) }, postProcesses: [{ fragmentShader: "\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }", uniforms: { u_gradientTexture: this.gradient_ } }] }) }, e }(kp),
            $p = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            tf = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n); return delete i.imageRatio, (r = t.call(this, i) || this).imageRatio_ = void 0 !== n.imageRatio ? n.imageRatio : 1, r } return $p(e, t), e.prototype.getImageRatio = function() { return this.imageRatio_ }, e.prototype.createRenderer = function() { return new Ip(this) }, e }(Dp),
            ef = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            rf = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = p({}, n);
                    delete i.preload, delete i.useInterimTilesOnError, r = t.call(this, i) || this; var o = n.renderMode || bp.HYBRID; return K(null == o || o == bp.IMAGE || o == bp.HYBRID, 28), r.renderMode_ = o, r.setPreload(n.preload ? n.preload : 0), r.setUseInterimTilesOnError(void 0 === n.useInterimTilesOnError || n.useInterimTilesOnError), r } return ef(e, t), e.prototype.createRenderer = function() { return new Ap(this) }, e.prototype.getRenderMode = function() { return this.renderMode_ }, e.prototype.getPreload = function() { return this.get(Ah) }, e.prototype.getUseInterimTilesOnError = function() { return this.get(Nh) }, e.prototype.setPreload = function(t) { this.set(Ah, t) }, e.prototype.setUseInterimTilesOnError = function(t) { this.set(Nh, t) }, e }(Dp),
            nf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            of = "addfeatures",
            af = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e) || this; return o.features = n, o.file = r, o.projection = i, o } return nf(e, t), e }(M);

        function sf(t) { for (var e = t.dataTransfer.files, r = 0, n = e.length; r < n; ++r) { var i = e.item(r),
                    o = new FileReader;
                o.addEventListener(N.LOAD, this.handleResult_.bind(this, i)), o.readAsText(i) } }

        function uf(t) { t.stopPropagation(), t.preventDefault(), t.dataTransfer.dropEffect = "copy" } var lf = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, { handleEvent: P }) || this).formatConstructors_ = n.formatConstructors ? n.formatConstructors : [], r.projection_ = n.projection ? we(n.projection) : null, r.dropListenKeys_ = null, r.source_ = n.source || null, r.target = n.target ? n.target : null, r } return nf(e, t), e.prototype.handleResult_ = function(t, e) { var r = e.target.result,
                        n = this.getMap(),
                        i = this.projection_;
                    i || (i = n.getView().getProjection()); for (var o = this.formatConstructors_, a = [], s = 0, u = o.length; s < u; ++s) { var l = new o[s]; if ((a = this.tryReadFeatures_(l, r, { featureProjection: i })) && a.length > 0) break }
                    this.source_ && (this.source_.clear(), this.source_.addFeatures(a)), this.dispatchEvent(new af(of, t, a, i)) }, e.prototype.registerListeners_ = function() { var t = this.getMap(); if (t) { var e = this.target ? this.target : t.getViewport();
                        this.dropListenKeys_ = [g(e, N.DROP, sf, this), g(e, N.DRAGENTER, uf, this), g(e, N.DRAGOVER, uf, this), g(e, N.DROP, uf, this)] } }, e.prototype.setActive = function(e) {!this.getActive() && e && this.registerListeners_(), this.getActive() && !e && this.unregisterListeners_(), t.prototype.setActive.call(this, e) }, e.prototype.setMap = function(e) { this.unregisterListeners_(), t.prototype.setMap.call(this, e), this.getActive() && this.registerListeners_() }, e.prototype.tryReadFeatures_ = function(t, e, r) { try { return t.readFeatures(e, r) } catch (t) { return null } }, e.prototype.unregisterListeners_ = function() { this.dropListenKeys_ && (this.dropListenKeys_.forEach(v), this.dropListenKeys_ = null) }, e }(to),
            hf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            cf = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).condition_ = n.condition ? n.condition : fo, r.lastAngle_ = void 0, r.lastMagnitude_ = void 0, r.lastScaleDelta_ = 0, r.duration_ = void 0 !== n.duration ? n.duration : 400, r } return hf(e, t), e.prototype.handleDragEvent = function(t) { if (go(t)) { var e = t.map,
                            r = e.getSize(),
                            n = t.pixel,
                            i = n[0] - r[0] / 2,
                            o = r[1] / 2 - n[1],
                            a = Math.atan2(o, i),
                            s = Math.sqrt(i * i + o * o),
                            u = e.getView(); if (void 0 !== this.lastAngle_) { var l = this.lastAngle_ - a;
                            u.adjustRotationInternal(l) }
                        this.lastAngle_ = a, void 0 !== this.lastMagnitude_ && u.adjustResolutionInternal(this.lastMagnitude_ / s), void 0 !== this.lastMagnitude_ && (this.lastScaleDelta_ = this.lastMagnitude_ / s), this.lastMagnitude_ = s } }, e.prototype.handleUpEvent = function(t) { if (!go(t)) return !0; var e = t.map.getView(),
                        r = this.lastScaleDelta_ > 1 ? 1 : -1; return e.endInteraction(this.duration_, r), this.lastScaleDelta_ = 0, !1 }, e.prototype.handleDownEvent = function(t) { return !!go(t) && (!!this.condition_(t) && (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, this.lastMagnitude_ = void 0, !0)) }, e }(Eo),
            pf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ff = function(t) {
                function e(e, r, n) { var i = t.call(this) || this; if (void 0 !== n && void 0 === r) i.setFlatCoordinates(n, e);
                    else { var o = r || 0;
                        i.setCenterAndRadius(e, o, n) } return i } return pf(e, t), e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), void 0, this.layout) }, e.prototype.closestPointXY = function(t, e, r, n) { var i = this.flatCoordinates,
                        o = t - i[0],
                        a = e - i[1],
                        s = o * o + a * a; if (s < n) { if (0 === s)
                            for (var u = 0; u < this.stride; ++u) r[u] = i[u];
                        else { var l = this.getRadius() / Math.sqrt(s);
                            r[0] = i[0] + l * o, r[1] = i[1] + l * a; for (u = 2; u < this.stride; ++u) r[u] = i[u] } return r.length = this.stride, s } return n }, e.prototype.containsXY = function(t, e) { var r = this.flatCoordinates,
                        n = t - r[0],
                        i = e - r[1]; return n * n + i * i <= this.getRadiusSquared_() }, e.prototype.getCenter = function() { return this.flatCoordinates.slice(0, this.stride) }, e.prototype.computeExtent = function(t) { var e = this.flatCoordinates,
                        r = e[this.stride] - e[0]; return ut(e[0] - r, e[1] - r, e[0] + r, e[1] + r, t) }, e.prototype.getRadius = function() { return Math.sqrt(this.getRadiusSquared_()) }, e.prototype.getRadiusSquared_ = function() { var t = this.flatCoordinates[this.stride] - this.flatCoordinates[0],
                        e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1]; return t * t + e * e }, e.prototype.getType = function() { return Nt.CIRCLE }, e.prototype.intersectsExtent = function(t) { if (bt(t, this.getExtent())) { var e = this.getCenter(); return t[0] <= e[0] && t[2] >= e[0] || (t[1] <= e[1] && t[3] >= e[1] || vt(t, this.intersectsCoordinate.bind(this))) } return !1 }, e.prototype.setCenter = function(t) { var e = this.stride,
                        r = this.flatCoordinates[e] - this.flatCoordinates[0],
                        n = t.slice();
                    n[e] = n[0] + r; for (var i = 1; i < e; ++i) n[e + i] = t[i];
                    this.setFlatCoordinates(this.layout, n), this.changed() }, e.prototype.setCenterAndRadius = function(t, e, r) { this.setLayout(r, t, 0), this.flatCoordinates || (this.flatCoordinates = []); var n = this.flatCoordinates,
                        i = pr(n, 0, t, this.stride);
                    n[i++] = n[0] + e; for (var o = 1, a = this.stride; o < a; ++o) n[i++] = n[o];
                    n.length = i, this.changed() }, e.prototype.getCoordinates = function() { return null }, e.prototype.setCoordinates = function(t, e) {}, e.prototype.setRadius = function(t) { this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t, this.changed() }, e.prototype.rotate = function(t, e) { var r = this.getCenter(),
                        n = this.getStride();
                    this.setCenter(Dt(r, 0, r.length, n, t, e, r)), this.changed() }, e.prototype.translate = function(t, e) { var r = this.getCenter(),
                        n = this.getStride();
                    this.setCenter(jt(r, 0, r.length, n, t, e, r)), this.changed() }, e }(ir);
        ff.prototype.transform; var df = ff,
            _f = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            gf = function(t) {
                function e(e, r, n) { var i = t.call(this) || this; if (i.ends_ = [], i.maxDelta_ = -1, i.maxDeltaRevision_ = -1, Array.isArray(e[0])) i.setCoordinates(e, r);
                    else if (void 0 !== r && n) i.setFlatCoordinates(r, e), i.ends_ = n;
                    else { for (var o = i.getLayout(), a = e, s = [], u = [], l = 0, h = a.length; l < h; ++l) { var c = a[l];
                            0 === l && (o = c.getLayout()), x(s, c.getFlatCoordinates()), u.push(s.length) }
                        i.setFlatCoordinates(o, s), i.ends_ = u } return i } return _f(e, t), e.prototype.appendLineString = function(t) { this.flatCoordinates ? x(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed() }, e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout, this.ends_.slice()) }, e.prototype.closestPointXY = function(t, e, r, n) { return n < rt(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(lr(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), cr(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, r, n)) }, e.prototype.getCoordinateAtM = function(t, e, r) { if (this.layout != At.XYM && this.layout != At.XYZM || 0 === this.flatCoordinates.length) return null; var n = void 0 !== e && e,
                        i = void 0 !== r && r; return function(t, e, r, n, i, o, a) { if (a) return Bp(t, e, r[r.length - 1], n, i, o); var s; if (i < t[n - 1]) return o ? ((s = t.slice(0, n))[n - 1] = i, s) : null; if (t[t.length - 1] < i) return o ? ((s = t.slice(t.length - n))[n - 1] = i, s) : null; for (var u = 0, l = r.length; u < l; ++u) { var h = r[u]; if (e != h) { if (i < t[e + n - 1]) return null; if (i <= t[h - 1]) return Bp(t, e, h, n, i, !1);
                                e = h } } return null }(this.flatCoordinates, 0, this.ends_, this.stride, t, n, i) }, e.prototype.getCoordinates = function() { return gr(this.flatCoordinates, 0, this.ends_, this.stride) }, e.prototype.getEnds = function() { return this.ends_ }, e.prototype.getLineString = function(t) { return t < 0 || this.ends_.length <= t ? null : new zp(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout) }, e.prototype.getLineStrings = function() { for (var t = this.flatCoordinates, e = this.ends_, r = this.layout, n = [], i = 0, o = 0, a = e.length; o < a; ++o) { var s = e[o],
                            u = new zp(t.slice(i, s), r);
                        n.push(u), i = s } return n }, e.prototype.getFlatMidpoints = function() { for (var t = [], e = this.flatCoordinates, r = 0, n = this.ends_, i = this.stride, o = 0, a = n.length; o < a; ++o) { var s = n[o];
                        x(t, Up(e, r, s, i, .5)), r = s } return t }, e.prototype.getSimplifiedGeometryInternal = function(t) { var r = [],
                        n = []; return r.length = mr(this.flatCoordinates, 0, this.ends_, this.stride, t, r, 0, n), new e(r, At.XY, n) }, e.prototype.getType = function() { return Nt.MULTI_LINE_STRING }, e.prototype.intersectsExtent = function(t) { return function(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { if (Fr(t, e, r[o], n, i)) return !0;
                            e = r[o] } return !1 }(this.flatCoordinates, 0, this.ends_, this.stride, t) }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []); var r = dr(this.flatCoordinates, 0, t, this.stride, this.ends_);
                    this.flatCoordinates.length = 0 === r.length ? 0 : r[r.length - 1], this.changed() }, e }(ir),
            yf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            vf = function(t) {
                function e(e, r) { var n = t.call(this) || this; return r && !Array.isArray(e[0]) ? n.setFlatCoordinates(r, e) : n.setCoordinates(e, r), n } return yf(e, t), e.prototype.appendPoint = function(t) { this.flatCoordinates ? x(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed() }, e.prototype.clone = function() { return new e(this.flatCoordinates.slice(), this.layout) }, e.prototype.closestPointXY = function(t, e, r, n) { if (n < rt(this.getExtent(), t, e)) return n; for (var i = this.flatCoordinates, o = this.stride, a = 0, s = i.length; a < s; a += o) { var u = Yt(t, e, i[a], i[a + 1]); if (u < n) { n = u; for (var l = 0; l < o; ++l) r[l] = i[a + l];
                            r.length = o } } return n }, e.prototype.getCoordinates = function() { return _r(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride) }, e.prototype.getPoint = function(t) { var e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0; return t < 0 || e <= t ? null : new Rr(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout) }, e.prototype.getPoints = function() { for (var t = this.flatCoordinates, e = this.layout, r = this.stride, n = [], i = 0, o = t.length; i < o; i += r) { var a = new Rr(t.slice(i, i + r), e);
                        n.push(a) } return n }, e.prototype.getType = function() { return Nt.MULTI_POINT }, e.prototype.intersectsExtent = function(t) { for (var e = this.flatCoordinates, r = this.stride, n = 0, i = e.length; n < i; n += r) { if (ot(t, e[n], e[n + 1])) return !0 } return !1 }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = fr(this.flatCoordinates, 0, t, this.stride), this.changed() }, e }(ir);

        function mf(t, e, r, n) { for (var i = [], o = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 0, s = r.length; a < s; ++a) { var u = r[a];
                o = ct(t, e, u[0], n), i.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2), e = u[u.length - 1] } return i } var Ef = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Tf = function(t) {
                function e(e, r, n) { var i = t.call(this) || this; if (i.endss_ = [], i.flatInteriorPointsRevision_ = -1, i.flatInteriorPoints_ = null, i.maxDelta_ = -1, i.maxDeltaRevision_ = -1, i.orientedRevision_ = -1, i.orientedFlatCoordinates_ = null, !n && !Array.isArray(e[0])) { for (var o = i.getLayout(), a = e, s = [], u = [], l = 0, h = a.length; l < h; ++l) { var c = a[l];
                            0 === l && (o = c.getLayout()); for (var p = s.length, f = c.getEnds(), d = 0, _ = f.length; d < _; ++d) f[d] += p;
                            x(s, c.getFlatCoordinates()), u.push(f) }
                        r = o, e = s, n = u } return void 0 !== r && n ? (i.setFlatCoordinates(r, e), i.endss_ = n) : i.setCoordinates(e, r), i } return Ef(e, t), e.prototype.appendPolygon = function(t) { var e; if (this.flatCoordinates) { var r = this.flatCoordinates.length;
                        x(this.flatCoordinates, t.getFlatCoordinates()); for (var n = 0, i = (e = t.getEnds().slice()).length; n < i; ++n) e[n] += r } else this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();
                    this.endss_.push(e), this.changed() }, e.prototype.clone = function() { for (var t = this.endss_.length, r = new Array(t), n = 0; n < t; ++n) r[n] = this.endss_[n].slice(); return new e(this.flatCoordinates.slice(), this.layout, r) }, e.prototype.closestPointXY = function(t, e, r, n) { return n < rt(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(function(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { var s = r[o];
                            i = lr(t, e, s, n, i), e = s[s.length - 1] } return i }(this.flatCoordinates, 0, this.endss_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), function(t, e, r, n, i, o, a, s, u, l, h) { for (var c = h || [NaN, NaN], p = 0, f = r.length; p < f; ++p) { var d = r[p];
                            l = cr(t, e, d, n, i, o, a, s, u, l, c), e = d[d.length - 1] } return l }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, r, n)) }, e.prototype.containsXY = function(t, e) { return function(t, e, r, n, i, o) { if (0 === r.length) return !1; for (var a = 0, s = r.length; a < s; ++a) { var u = r[a]; if (Ir(t, e, u, n, i, o)) return !0;
                            e = u[u.length - 1] } return !1 }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e) }, e.prototype.getArea = function() { return function(t, e, r, n) { for (var i = 0, o = 0, a = r.length; o < a; ++o) { var s = r[o];
                            i += ar(t, e, s, n), e = s[s.length - 1] } return i }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride) }, e.prototype.getCoordinates = function(t) { var e; return void 0 !== t ? kr(e = this.getOrientedFlatCoordinates().slice(), 0, this.endss_, this.stride, t) : e = this.flatCoordinates, yr(e, 0, this.endss_, this.stride) }, e.prototype.getEndss = function() { return this.endss_ }, e.prototype.getFlatInteriorPoints = function() { if (this.flatInteriorPointsRevision_ != this.getRevision()) { var t = mf(this.flatCoordinates, 0, this.endss_, this.stride);
                        this.flatInteriorPoints_ = Lr(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t), this.flatInteriorPointsRevision_ = this.getRevision() } return this.flatInteriorPoints_ }, e.prototype.getInteriorPoints = function() { return new vf(this.getFlatInteriorPoints().slice(), At.XYM) }, e.prototype.getOrientedFlatCoordinates = function() { if (this.orientedRevision_ != this.getRevision()) { var t = this.flatCoordinates;! function(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { var s = r[o]; if (!Dr(t, e, s, n, i)) return !1;
                                s.length && (e = s[s.length - 1]) } return !0 }(t, 0, this.endss_, this.stride) ? (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = kr(this.orientedFlatCoordinates_, 0, this.endss_, this.stride)) : this.orientedFlatCoordinates_ = t, this.orientedRevision_ = this.getRevision() } return this.orientedFlatCoordinates_ }, e.prototype.getSimplifiedGeometryInternal = function(t) { var r = [],
                        n = []; return r.length = function(t, e, r, n, i, o, a, s) { for (var u = 0, l = r.length; u < l; ++u) { var h = r[u],
                                c = [];
                            a = Sr(t, e, h, n, i, o, a, c), s.push(c), e = h[h.length - 1] } return a }(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), r, 0, n), new e(r, At.XY, n) }, e.prototype.getPolygon = function(t) { if (t < 0 || this.endss_.length <= t) return null; var e; if (0 === t) e = 0;
                    else { var r = this.endss_[t - 1];
                        e = r[r.length - 1] } var n = this.endss_[t].slice(),
                        i = n[n.length - 1]; if (0 !== e)
                        for (var o = 0, a = n.length; o < a; ++o) n[o] -= e; return new Yr(this.flatCoordinates.slice(e, i), this.layout, n) }, e.prototype.getPolygons = function() { for (var t = this.layout, e = this.flatCoordinates, r = this.endss_, n = [], i = 0, o = 0, a = r.length; o < a; ++o) { var s = r[o].slice(),
                            u = s[s.length - 1]; if (0 !== i)
                            for (var l = 0, h = s.length; l < h; ++l) s[l] -= i; var c = new Yr(e.slice(i, u), t, s);
                        n.push(c), i = u } return n }, e.prototype.getType = function() { return Nt.MULTI_POLYGON }, e.prototype.intersectsExtent = function(t) { return function(t, e, r, n, i) { for (var o = 0, a = r.length; o < a; ++o) { var s = r[o]; if (Ar(t, e, s, n, i)) return !0;
                            e = s[s.length - 1] } return !1 }(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t) }, e.prototype.setCoordinates = function(t, e) { this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []); var r = function(t, e, r, n, i) { for (var o = i || [], a = 0, s = 0, u = r.length; s < u; ++s) { var l = dr(t, e, r[s], n, o[a]);
                            o[a++] = l, e = l[l.length - 1] } return o.length = a, o }(this.flatCoordinates, 0, t, this.stride, this.endss_); if (0 === r.length) this.flatCoordinates.length = 0;
                    else { var n = r[r.length - 1];
                        this.flatCoordinates.length = 0 === n.length ? 0 : n[n.length - 1] }
                    this.changed() }, e }(ir),
            Sf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            wf = { POINT: "Point", LINE_STRING: "LineString", POLYGON: "Polygon", CIRCLE: "Circle" },
            xf = "drawstart",
            Of = "drawend",
            Rf = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.feature = r, n } return Sf(e, t), e }(M); var Cf = function(t) {
                function e(e) { var r = this,
                        n = e;
                    n.stopDown || (n.stopDown = I), (r = t.call(this, n) || this).shouldHandle_ = !1, r.downPx_ = null, r.downTimeout_, r.lastDragTime_, r.freehand_ = !1, r.source_ = e.source ? e.source : null, r.features_ = e.features ? e.features : null, r.snapTolerance_ = e.snapTolerance ? e.snapTolerance : 12, r.type_ = e.type, r.mode_ = function(t) { var e;
                        t === Nt.POINT || t === Nt.MULTI_POINT ? e = wf.POINT : t === Nt.LINE_STRING || t === Nt.MULTI_LINE_STRING ? e = wf.LINE_STRING : t === Nt.POLYGON || t === Nt.MULTI_POLYGON ? e = wf.POLYGON : t === Nt.CIRCLE && (e = wf.CIRCLE); return e }(r.type_), r.stopClick_ = !!e.stopClick, r.minPoints_ = e.minPoints ? e.minPoints : r.mode_ === wf.POLYGON ? 3 : 2, r.maxPoints_ = e.maxPoints ? e.maxPoints : 1 / 0, r.finishCondition_ = e.finishCondition ? e.finishCondition : P; var i, o = e.geometryFunction; if (!o)
                        if (r.type_ === Nt.CIRCLE) o = function(t, e) { var r = e || new df([NaN, NaN]),
                                n = Jn(t[0], t[1]); return r.setCenterAndRadius(t[0], Math.sqrt(n)), r };
                        else { var a, s = r.mode_;
                            s === wf.POINT ? a = Rr : s === wf.LINE_STRING ? a = zp : s === wf.POLYGON && (a = Yr), o = function(t, e) { var r = e; return r ? s === wf.POLYGON ? t[0].length ? r.setCoordinates([t[0].concat([t[0][0]])]) : r.setCoordinates([]) : r.setCoordinates(t) : r = new a(t), r } }
                    return r.geometryFunction_ = o, r.dragVertexDelay_ = void 0 !== e.dragVertexDelay ? e.dragVertexDelay : 500, r.finishCoordinate_ = null, r.sketchFeature_ = null, r.sketchPoint_ = null, r.sketchCoords_ = null, r.sketchLine_ = null, r.sketchLineCoords_ = null, r.squaredClickTolerance_ = e.clickTolerance ? e.clickTolerance * e.clickTolerance : 36, r.overlay_ = new kp({ source: new Il({ useSpatialIndex: !1, wrapX: !!e.wrapX && e.wrapX }), style: e.style ? e.style : (i = Iu(), function(t, e) { return i[t.getGeometry().getType()] }), updateWhileInteracting: !0 }), r.geometryName_ = e.geometryName, r.condition_ = e.condition ? e.condition : po, r.freehandCondition_, e.freehand ? r.freehandCondition_ = so : r.freehandCondition_ = e.freehandCondition ? e.freehandCondition : fo, r.addEventListener(Y(Ji.ACTIVE), r.updateState_), r } return Sf(e, t), e.prototype.setMap = function(e) { t.prototype.setMap.call(this, e), this.updateState_() }, e.prototype.getOverlay = function() { return this.overlay_ }, e.prototype.handleEvent = function(e) { e.originalEvent.type === N.CONTEXTMENU && e.preventDefault(), this.freehand_ = this.mode_ !== wf.POINT && this.freehandCondition_(e); var r = e.type === ln.POINTERMOVE,
                        n = !0;!this.freehand_ && this.lastDragTime_ && e.type === ln.POINTERDRAG && (Date.now() - this.lastDragTime_ >= this.dragVertexDelay_ ? (this.downPx_ = e.pixel, this.shouldHandle_ = !this.freehand_, r = !0) : this.lastDragTime_ = void 0, this.shouldHandle_ && void 0 !== this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0)); return this.freehand_ && e.type === ln.POINTERDRAG && null !== this.sketchFeature_ ? (this.addToDrawing_(e), n = !1) : this.freehand_ && e.type === ln.POINTERDOWN ? n = !1 : r ? (n = e.type === ln.POINTERMOVE) && this.freehand_ ? n = this.handlePointerMove_(e) : ("mouse" == e.pointerEvent.pointerType || e.type === ln.POINTERDRAG && void 0 === this.downTimeout_) && this.handlePointerMove_(e) : e.type === ln.DBLCLICK && (n = !1), t.prototype.handleEvent.call(this, e) && n }, e.prototype.handleDownEvent = function(t) { return this.shouldHandle_ = !this.freehand_, this.freehand_ ? (this.downPx_ = t.pixel, this.finishCoordinate_ || this.startDrawing_(t), !0) : this.condition_(t) ? (this.lastDragTime_ = Date.now(), this.downTimeout_ = setTimeout(function() { this.handlePointerMove_(new cn(ln.POINTERMOVE, t.map, t.pointerEvent, !1, t.frameState)) }.bind(this), this.dragVertexDelay_), this.downPx_ = t.pixel, !0) : (this.lastDragTime_ = void 0, !1) }, e.prototype.handleUpEvent = function(t) { var e = !0;
                    this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0), this.handlePointerMove_(t); var r = this.mode_ === wf.CIRCLE; return this.shouldHandle_ ? (this.finishCoordinate_ ? this.freehand_ || r ? this.finishDrawing() : this.atFinish_(t) ? this.finishCondition_(t) && this.finishDrawing() : this.addToDrawing_(t) : (this.startDrawing_(t), this.mode_ === wf.POINT && this.finishDrawing()), e = !1) : this.freehand_ && (this.finishCoordinate_ = null, this.abortDrawing_()), !e && this.stopClick_ && t.stopPropagation(), e }, e.prototype.handlePointerMove_ = function(t) { if (this.downPx_ && (!this.freehand_ && this.shouldHandle_ || this.freehand_ && !this.shouldHandle_)) { var e = this.downPx_,
                            r = t.pixel,
                            n = e[0] - r[0],
                            i = e[1] - r[1],
                            o = n * n + i * i; if (this.shouldHandle_ = this.freehand_ ? o > this.squaredClickTolerance_ : o <= this.squaredClickTolerance_, !this.shouldHandle_) return !0 } return this.finishCoordinate_ ? this.modifyDrawing_(t) : this.createOrUpdateSketchPoint_(t), !0 }, e.prototype.atFinish_ = function(t) { var e = !1; if (this.sketchFeature_) { var r = !1,
                            n = [this.finishCoordinate_]; if (this.mode_ === wf.LINE_STRING) r = this.sketchCoords_.length > this.minPoints_;
                        else if (this.mode_ === wf.POLYGON) { var i = this.sketchCoords_;
                            r = i[0].length > this.minPoints_, n = [i[0][0], i[0][i[0].length - 2]] } if (r)
                            for (var o = t.map, a = 0, s = n.length; a < s; a++) { var u = n[a],
                                    l = o.getPixelFromCoordinate(u),
                                    h = t.pixel,
                                    c = h[0] - l[0],
                                    p = h[1] - l[1],
                                    f = this.freehand_ ? 1 : this.snapTolerance_; if (e = Math.sqrt(c * c + p * p) <= f) { this.finishCoordinate_ = u; break } } } return e }, e.prototype.createOrUpdateSketchPoint_ = function(t) { var e = t.coordinate.slice();
                    this.sketchPoint_ ? this.sketchPoint_.getGeometry().setCoordinates(e) : (this.sketchPoint_ = new q(new Rr(e)), this.updateSketchFeatures_()) }, e.prototype.startDrawing_ = function(t) { var e = t.coordinate;
                    this.finishCoordinate_ = e, this.mode_ === wf.POINT ? this.sketchCoords_ = e.slice() : this.mode_ === wf.POLYGON ? (this.sketchCoords_ = [
                        [e.slice(), e.slice()]
                    ], this.sketchLineCoords_ = this.sketchCoords_[0]) : this.sketchCoords_ = [e.slice(), e.slice()], this.sketchLineCoords_ && (this.sketchLine_ = new q(new zp(this.sketchLineCoords_))); var r = this.geometryFunction_(this.sketchCoords_);
                    this.sketchFeature_ = new q, this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_), this.sketchFeature_.setGeometry(r), this.updateSketchFeatures_(), this.dispatchEvent(new Rf(xf, this.sketchFeature_)) }, e.prototype.modifyDrawing_ = function(t) { var e, r, n, i = t.coordinate,
                        o = this.sketchFeature_.getGeometry();
                    (this.mode_ === wf.POINT ? r = this.sketchCoords_ : this.mode_ === wf.POLYGON ? (r = (e = this.sketchCoords_[0])[e.length - 1], this.atFinish_(t) && (i = this.finishCoordinate_.slice())) : r = (e = this.sketchCoords_)[e.length - 1], r[0] = i[0], r[1] = i[1], this.geometryFunction_(this.sketchCoords_, o), this.sketchPoint_) && this.sketchPoint_.getGeometry().setCoordinates(i); if (o.getType() == Nt.POLYGON && this.mode_ !== wf.POLYGON) { this.sketchLine_ || (this.sketchLine_ = new q); var a = o.getLinearRing(0);
                        (n = this.sketchLine_.getGeometry()) ? (n.setFlatCoordinates(a.getLayout(), a.getFlatCoordinates()), n.changed()) : (n = new zp(a.getFlatCoordinates(), a.getLayout()), this.sketchLine_.setGeometry(n)) } else this.sketchLineCoords_ && (n = this.sketchLine_.getGeometry()).setCoordinates(this.sketchLineCoords_);
                    this.updateSketchFeatures_() }, e.prototype.addToDrawing_ = function(t) { var e, r, n = t.coordinate,
                        i = this.sketchFeature_.getGeometry();
                    this.mode_ === wf.LINE_STRING ? (this.finishCoordinate_ = n.slice(), (r = this.sketchCoords_).length >= this.maxPoints_ && (this.freehand_ ? r.pop() : e = !0), r.push(n.slice()), this.geometryFunction_(r, i)) : this.mode_ === wf.POLYGON && ((r = this.sketchCoords_[0]).length >= this.maxPoints_ && (this.freehand_ ? r.pop() : e = !0), r.push(n.slice()), e && (this.finishCoordinate_ = r[0]), this.geometryFunction_(this.sketchCoords_, i)), this.updateSketchFeatures_(), e && this.finishDrawing() }, e.prototype.removeLastPoint = function() { if (this.sketchFeature_) { var t, e = this.sketchFeature_.getGeometry();
                        this.mode_ === wf.LINE_STRING ? ((t = this.sketchCoords_).splice(-2, 1), this.geometryFunction_(t, e), t.length >= 2 && (this.finishCoordinate_ = t[t.length - 2].slice())) : this.mode_ === wf.POLYGON && ((t = this.sketchCoords_[0]).splice(-2, 1), this.sketchLine_.getGeometry().setCoordinates(t), this.geometryFunction_(this.sketchCoords_, e)), 0 === t.length && (this.finishCoordinate_ = null), this.updateSketchFeatures_() } }, e.prototype.finishDrawing = function() { var t = this.abortDrawing_(); if (t) { var e = this.sketchCoords_,
                            r = t.getGeometry();
                        this.mode_ === wf.LINE_STRING ? (e.pop(), this.geometryFunction_(e, r)) : this.mode_ === wf.POLYGON && (e[0].pop(), this.geometryFunction_(e, r), e = r.getCoordinates()), this.type_ === Nt.MULTI_POINT ? t.setGeometry(new vf([e])) : this.type_ === Nt.MULTI_LINE_STRING ? t.setGeometry(new gf([e])) : this.type_ === Nt.MULTI_POLYGON && t.setGeometry(new Tf([e])), this.dispatchEvent(new Rf(Of, t)), this.features_ && this.features_.push(t), this.source_ && this.source_.addFeature(t) } }, e.prototype.abortDrawing_ = function() { this.finishCoordinate_ = null; var t = this.sketchFeature_; return t && (this.sketchFeature_ = null, this.sketchPoint_ = null, this.sketchLine_ = null, this.overlay_.getSource().clear(!0)), t }, e.prototype.extend = function(t) { var e = t.getGeometry();
                    this.sketchFeature_ = t, this.sketchCoords_ = e.getCoordinates(); var r = this.sketchCoords_[this.sketchCoords_.length - 1];
                    this.finishCoordinate_ = r.slice(), this.sketchCoords_.push(r.slice()), this.updateSketchFeatures_(), this.dispatchEvent(new Rf(xf, this.sketchFeature_)) }, e.prototype.updateSketchFeatures_ = function() { var t = [];
                    this.sketchFeature_ && t.push(this.sketchFeature_), this.sketchLine_ && t.push(this.sketchLine_), this.sketchPoint_ && t.push(this.sketchPoint_); var e = this.overlay_.getSource();
                    e.clear(!0), e.addFeatures(t) }, e.prototype.updateState_ = function() { var t = this.getMap(),
                        e = this.getActive();
                    t && e || this.abortDrawing_(), this.overlay_.setMap(e ? t : null) }, e }(Eo),
            Pf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            If = { EXTENTCHANGED: "extentchanged" },
            bf = function(t) {
                function e(e) { var r = t.call(this, If.EXTENTCHANGED) || this; return r.extent = e, r } return Pf(e, t), e }(M);

        function Lf() { var t = Iu(); return function(e, r) { return t[Nt.POLYGON] } }

        function Mf() { var t = Iu(); return function(e, r) { return t[Nt.POINT] } }

        function Ff(t) { return function(e) { return $([t, e]) } }

        function Af(t, e) { return t[0] == e[0] ? function(r) { return $([t, [r[0], e[1]]]) } : t[1] == e[1] ? function(r) { return $([t, [e[0], r[1]]]) } : null } var Nf = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).extent_ = null, r.pointerHandler_ = null, r.pixelTolerance_ = void 0 !== n.pixelTolerance ? n.pixelTolerance : 10, r.snappedToVertex_ = !1, r.extentFeature_ = null, r.vertexFeature_ = null, e || (e = {}), r.extentOverlay_ = new kp({ source: new Il({ useSpatialIndex: !1, wrapX: !!e.wrapX }), style: e.boxStyle ? e.boxStyle : Lf(), updateWhileAnimating: !0, updateWhileInteracting: !0 }), r.vertexOverlay_ = new kp({ source: new Il({ useSpatialIndex: !1, wrapX: !!e.wrapX }), style: e.pointerStyle ? e.pointerStyle : Mf(), updateWhileAnimating: !0, updateWhileInteracting: !0 }), e.extent && r.setExtent(e.extent), r } return Pf(e, t), e.prototype.snapToVertex_ = function(t, e) { var r = e.getCoordinateFromPixelInternal(t),
                        n = this.getExtentInternal(); if (n) { var i = function(t) { return [
                                [
                                    [t[0], t[1]],
                                    [t[0], t[3]]
                                ],
                                [
                                    [t[0], t[3]],
                                    [t[2], t[3]]
                                ],
                                [
                                    [t[2], t[3]],
                                    [t[2], t[1]]
                                ],
                                [
                                    [t[2], t[1]],
                                    [t[0], t[1]]
                                ]
                            ] }(n);
                        i.sort(function(t, e) { return $n(r, t) - $n(r, e) }); var o = i[0],
                            a = Vn(r, o),
                            s = e.getPixelFromCoordinateInternal(a); if (Qn(t, s) <= this.pixelTolerance_) { var u = e.getPixelFromCoordinateInternal(o[0]),
                                l = e.getPixelFromCoordinateInternal(o[1]),
                                h = Jn(s, u),
                                c = Jn(s, l),
                                p = Math.sqrt(Math.min(h, c)); return this.snappedToVertex_ = p <= this.pixelTolerance_, this.snappedToVertex_ && (a = h > c ? o[1] : o[0]), a } } return null }, e.prototype.handlePointerMove_ = function(t) { var e = t.pixel,
                        r = t.map,
                        n = this.snapToVertex_(e, r);
                    n || (n = r.getCoordinateFromPixelInternal(e)), this.createOrUpdatePointerFeature_(n) }, e.prototype.createOrUpdateExtentFeature_ = function(t) { var e = this.extentFeature_; return e ? t ? e.setGeometry(Xr(t)) : e.setGeometry(void 0) : (e = new q(t ? Xr(t) : {}), this.extentFeature_ = e, this.extentOverlay_.getSource().addFeature(e)), e }, e.prototype.createOrUpdatePointerFeature_ = function(t) { var e = this.vertexFeature_;
                    e ? e.getGeometry().setCoordinates(t) : (e = new q(new Rr(t)), this.vertexFeature_ = e, this.vertexOverlay_.getSource().addFeature(e)); return e }, e.prototype.handleEvent = function(e) { return !e.pointerEvent || (e.type != ln.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(e), t.prototype.handleEvent.call(this, e), !1) }, e.prototype.handleDownEvent = function(t) { var e = t.pixel,
                        r = t.map,
                        n = this.getExtentInternal(),
                        i = this.snapToVertex_(e, r),
                        o = function(t) { var e = null,
                                r = null; return t[0] == n[0] ? e = n[2] : t[0] == n[2] && (e = n[0]), t[1] == n[1] ? r = n[3] : t[1] == n[3] && (r = n[1]), null !== e && null !== r ? [e, r] : null }; if (i && n) { var a = i[0] == n[0] || i[0] == n[2] ? i[0] : null,
                            s = i[1] == n[1] || i[1] == n[3] ? i[1] : null;
                        null !== a && null !== s ? this.pointerHandler_ = Ff(o(i)) : null !== a ? this.pointerHandler_ = Af(o([a, n[1]]), o([a, n[3]])) : null !== s && (this.pointerHandler_ = Af(o([n[0], s]), o([n[2], s]))) } else i = r.getCoordinateFromPixelInternal(e), this.setExtent([i[0], i[1], i[0], i[1]]), this.pointerHandler_ = Ff(i); return !0 }, e.prototype.handleDragEvent = function(t) { if (this.pointerHandler_) { var e = t.coordinate;
                        this.setExtent(this.pointerHandler_(e)), this.createOrUpdatePointerFeature_(e) } return !0 }, e.prototype.handleUpEvent = function(t) { this.pointerHandler_ = null; var e = this.getExtentInternal(); return e && 0 !== mt(e) || this.setExtent(null), !1 }, e.prototype.setMap = function(e) { this.extentOverlay_.setMap(e), this.vertexOverlay_.setMap(e), t.prototype.setMap.call(this, e) }, e.prototype.getExtent = function() { return Be(this.getExtentInternal(), this.getMap().getView().getProjection()) }, e.prototype.getExtentInternal = function() { return this.extent_ }, e.prototype.setExtent = function(t) { this.extent_ = t || null, this.createOrUpdateExtentFeature_(t), this.dispatchEvent(new bf(this.extent_)) }, e }(Eo),
            Gf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Df = 1,
            jf = [0, 0, 0, 0],
            kf = [],
            Uf = "modifystart",
            Bf = "modifyend",
            Yf = function(t) {
                function e(e, r, n) { var i = t.call(this, e) || this; return i.features = r, i.mapBrowserEvent = n, i } return Gf(e, t), e }(M);

        function zf(t, e) { return t.index - e.index }

        function Xf(t, e) { var r = e.geometry; if (r.getType() === Nt.CIRCLE) { var n = r; if (e.index === Df) { var i = Jn(n.getCenter(), t),
                        o = Math.sqrt(i) - n.getRadius(); return o * o } } return $n(t, e.segment) }

        function Vf(t, e, r) { var n = e.geometry; if (n.getType() === Nt.CIRCLE && e.index === Df) return n.getClosestPoint(t); var i = Ue(t, r); return kf[0] = Ue(e.segment[0], r), kf[1] = Ue(e.segment[1], r), ke(Vn(i, kf), r) }

        function Wf() { var t = Iu(); return function(e, r) { return t[Nt.POINT] } } var Zf = function(t) {
                function e(e) { var r, n = t.call(this, e) || this; if (n.boundHandleFeatureChange_ = n.handleFeatureChange_.bind(n), n.condition_ = e.condition ? e.condition : yo, n.defaultDeleteCondition_ = function(t) { return io(t) && co(t) }, n.deleteCondition_ = e.deleteCondition ? e.deleteCondition : n.defaultDeleteCondition_, n.insertVertexCondition_ = e.insertVertexCondition ? e.insertVertexCondition : so, n.vertexFeature_ = null, n.vertexSegments_ = null, n.lastPixel_ = [0, 0], n.ignoreNextSingleClick_ = !1, n.modified_ = !1, n.rBush_ = new Rl, n.pixelTolerance_ = void 0 !== e.pixelTolerance ? e.pixelTolerance : 10, n.snappedToVertex_ = !1, n.changingFeature_ = !1, n.dragSegments_ = [], n.overlay_ = new kp({ source: new Il({ useSpatialIndex: !1, wrapX: !!e.wrapX }), style: e.style ? e.style : Wf(), updateWhileAnimating: !0, updateWhileInteracting: !0 }), n.SEGMENT_WRITERS_ = { Point: n.writePointGeometry_.bind(n), LineString: n.writeLineStringGeometry_.bind(n), LinearRing: n.writeLineStringGeometry_.bind(n), Polygon: n.writePolygonGeometry_.bind(n), MultiPoint: n.writeMultiPointGeometry_.bind(n), MultiLineString: n.writeMultiLineStringGeometry_.bind(n), MultiPolygon: n.writeMultiPolygonGeometry_.bind(n), Circle: n.writeCircleGeometry_.bind(n), GeometryCollection: n.writeGeometryCollectionGeometry_.bind(n) }, n.source_ = null, e.source ? (n.source_ = e.source, r = new Z(n.source_.getFeatures()), n.source_.addEventListener(wl.ADDFEATURE, n.handleSourceAdd_.bind(n)), n.source_.addEventListener(wl.REMOVEFEATURE, n.handleSourceRemove_.bind(n))) : r = e.features, !r) throw new Error("The modify interaction requires features or a source"); return n.features_ = r, n.features_.forEach(n.addFeature_.bind(n)), n.features_.addEventListener(h.ADD, n.handleFeatureAdd_.bind(n)), n.features_.addEventListener(h.REMOVE, n.handleFeatureRemove_.bind(n)), n.lastPointerEvent_ = null, n } return Gf(e, t), e.prototype.addFeature_ = function(t) { var e = t.getGeometry(); if (e) { var r = this.SEGMENT_WRITERS_[e.getType()];
                        r && r(t, e) } var n = this.getMap();
                    n && n.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, n), t.addEventListener(N.CHANGE, this.boundHandleFeatureChange_) }, e.prototype.willModifyFeatures_ = function(t) { this.modified_ || (this.modified_ = !0, this.dispatchEvent(new Yf(Uf, this.features_, t))) }, e.prototype.removeFeature_ = function(t) { this.removeFeatureSegmentData_(t), this.vertexFeature_ && 0 === this.features_.getLength() && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), t.removeEventListener(N.CHANGE, this.boundHandleFeatureChange_) }, e.prototype.removeFeatureSegmentData_ = function(t) { var e = this.rBush_,
                        r = [];
                    e.forEach(function(e) { t === e.feature && r.push(e) }); for (var n = r.length - 1; n >= 0; --n) { for (var i = r[n], o = this.dragSegments_.length - 1; o >= 0; --o) this.dragSegments_[o][0] === i && this.dragSegments_.splice(o, 1);
                        e.remove(i) } }, e.prototype.setActive = function(e) { this.vertexFeature_ && !e && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), t.prototype.setActive.call(this, e) }, e.prototype.setMap = function(e) { this.overlay_.setMap(e), t.prototype.setMap.call(this, e) }, e.prototype.getOverlay = function() { return this.overlay_ }, e.prototype.handleSourceAdd_ = function(t) { t.feature && this.features_.push(t.feature) }, e.prototype.handleSourceRemove_ = function(t) { t.feature && this.features_.remove(t.feature) }, e.prototype.handleFeatureAdd_ = function(t) { this.addFeature_(t.element) }, e.prototype.handleFeatureChange_ = function(t) { if (!this.changingFeature_) { var e = t.target;
                        this.removeFeature_(e), this.addFeature_(e) } }, e.prototype.handleFeatureRemove_ = function(t) { var e = t.element;
                    this.removeFeature_(e) }, e.prototype.writePointGeometry_ = function(t, e) { var r = e.getCoordinates(),
                        n = { feature: t, geometry: e, segment: [r, r] };
                    this.rBush_.insert(e.getExtent(), n) }, e.prototype.writeMultiPointGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n) { var o = r[n],
                            a = { feature: t, geometry: e, depth: [n], index: n, segment: [o, o] };
                        this.rBush_.insert(e.getExtent(), a) } }, e.prototype.writeLineStringGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length - 1; n < i; ++n) { var o = r.slice(n, n + 2),
                            a = { feature: t, geometry: e, index: n, segment: o };
                        this.rBush_.insert($(o), a) } }, e.prototype.writeMultiLineStringGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length - 1; a < s; ++a) { var u = o.slice(a, a + 2),
                                l = { feature: t, geometry: e, depth: [n], index: a, segment: u };
                            this.rBush_.insert($(u), l) } }, e.prototype.writePolygonGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length - 1; a < s; ++a) { var u = o.slice(a, a + 2),
                                l = { feature: t, geometry: e, depth: [n], index: a, segment: u };
                            this.rBush_.insert($(u), l) } }, e.prototype.writeMultiPolygonGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length; a < s; ++a)
                            for (var u = o[a], l = 0, h = u.length - 1; l < h; ++l) { var c = u.slice(l, l + 2),
                                    p = { feature: t, geometry: e, depth: [a, n], index: l, segment: c };
                                this.rBush_.insert($(c), p) } }, e.prototype.writeCircleGeometry_ = function(t, e) { var r = e.getCenter(),
                        n = { feature: t, geometry: e, index: 0, segment: [r, r] },
                        i = { feature: t, geometry: e, index: Df, segment: [r, r] },
                        o = [n, i];
                    n.featureSegments = i.featureSegments = o, this.rBush_.insert(ht(r), n), this.rBush_.insert(e.getExtent(), i) }, e.prototype.writeGeometryCollectionGeometry_ = function(t, e) { for (var r = e.getGeometriesArray(), n = 0; n < r.length; ++n) { var i = r[n];
                        (0, this.SEGMENT_WRITERS_[i.getType()])(t, i) } }, e.prototype.createOrUpdateVertexFeature_ = function(t) { var e = this.vertexFeature_;
                    e ? e.getGeometry().setCoordinates(t) : (e = new q(new Rr(t)), this.vertexFeature_ = e, this.overlay_.getSource().addFeature(e)); return e }, e.prototype.handleEvent = function(e) { return !e.pointerEvent || (this.lastPointerEvent_ = e, e.map.getView().getInteracting() || e.type != ln.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(e), this.vertexFeature_ && this.deleteCondition_(e) && (r = !(e.type != ln.SINGLECLICK || !this.ignoreNextSingleClick_) || this.removePoint()), e.type == ln.SINGLECLICK && (this.ignoreNextSingleClick_ = !1), t.prototype.handleEvent.call(this, e) && !r); var r }, e.prototype.handleDragEvent = function(t) { this.ignoreNextSingleClick_ = !1, this.willModifyFeatures_(t); for (var e = t.coordinate, r = 0, n = this.dragSegments_.length; r < n; ++r) { for (var i = this.dragSegments_[r], o = i[0], a = o.depth, s = o.geometry, u = void 0, l = o.segment, h = i[1]; e.length < s.getStride();) e.push(l[h][e.length]); switch (s.getType()) {
                            case Nt.POINT:
                                u = e, l[0] = l[1] = e; break;
                            case Nt.MULTI_POINT:
                                (u = s.getCoordinates())[o.index] = e, l[0] = l[1] = e; break;
                            case Nt.LINE_STRING:
                                (u = s.getCoordinates())[o.index + h] = e, l[h] = e; break;
                            case Nt.MULTI_LINE_STRING:
                            case Nt.POLYGON:
                                (u = s.getCoordinates())[a[0]][o.index + h] = e, l[h] = e; break;
                            case Nt.MULTI_POLYGON:
                                (u = s.getCoordinates())[a[1]][a[0]][o.index + h] = e, l[h] = e; break;
                            case Nt.CIRCLE:
                                l[0] = l[1] = e, 0 === o.index ? (this.changingFeature_ = !0, s.setCenter(e), this.changingFeature_ = !1) : (this.changingFeature_ = !0, s.setRadius(Qn(s.getCenter(), e)), this.changingFeature_ = !1) }
                        u && this.setGeometryCoordinates_(s, u) }
                    this.createOrUpdateVertexFeature_(e) }, e.prototype.handleDownEvent = function(t) { if (!this.condition_(t)) return !1;
                    this.handlePointerAtPixel_(t.pixel, t.map); var e = t.coordinate;
                    this.dragSegments_.length = 0, this.modified_ = !1; var r = this.vertexFeature_; if (r) { var n = t.map.getView().getProjection(),
                            i = [],
                            a = r.getGeometry().getCoordinates(),
                            s = $([a]),
                            u = this.rBush_.getInExtent(s),
                            l = {};
                        u.sort(zf); for (var h = 0, c = u.length; h < c; ++h) { var p = u[h],
                                f = p.segment,
                                d = o(p.feature),
                                _ = p.depth; if (_ && (d += "-" + _.join("-")), l[d] || (l[d] = new Array(2)), p.geometry.getType() !== Nt.CIRCLE || p.index !== Df)
                                if (!Kn(f[0], a) || l[d][0])
                                    if (!Kn(f[1], a) || l[d][1]) o(f) in this.vertexSegments_ && !l[d][0] && !l[d][1] && this.insertVertexCondition_(t) && i.push([p, a]);
                                    else { if ((p.geometry.getType() === Nt.LINE_STRING || p.geometry.getType() === Nt.MULTI_LINE_STRING) && l[d][0] && 0 === l[d][0].index) continue;
                                        this.dragSegments_.push([p, 1]), l[d][1] = p }
                            else this.dragSegments_.push([p, 0]), l[d][0] = p;
                            else Kn(Vf(e, p, n), a) && !l[d][0] && (this.dragSegments_.push([p, 0]), l[d][0] = p) }
                        i.length && this.willModifyFeatures_(t); for (var g = i.length - 1; g >= 0; --g) this.insertVertex_.apply(this, i[g]) } return !!this.vertexFeature_ }, e.prototype.handleUpEvent = function(t) { for (var e = this.dragSegments_.length - 1; e >= 0; --e) { var r = this.dragSegments_[e][0],
                            n = r.geometry; if (n.getType() === Nt.CIRCLE) { var i = n.getCenter(),
                                o = r.featureSegments[0],
                                a = r.featureSegments[1];
                            o.segment[0] = o.segment[1] = i, a.segment[0] = a.segment[1] = i, this.rBush_.update(ht(i), o), this.rBush_.update(n.getExtent(), a) } else this.rBush_.update($(r.segment), r) } return this.modified_ && (this.dispatchEvent(new Yf(Bf, this.features_, t)), this.modified_ = !1), !1 }, e.prototype.handlePointerMove_ = function(t) { this.lastPixel_ = t.pixel, this.handlePointerAtPixel_(t.pixel, t.map) }, e.prototype.handlePointerAtPixel_ = function(t, e) { var r = e.getCoordinateFromPixel(t),
                        n = e.getView().getProjection(),
                        i = Be(tt(Ye(ht(r, jf), n), e.getView().getResolution() * this.pixelTolerance_, jf), n),
                        a = this.rBush_.getInExtent(i); if (a.length > 0) { a.sort(function(t, e) { return Xf(r, t) - Xf(r, e) }); var s = a[0],
                            u = s.segment,
                            l = Vf(r, s, n),
                            h = e.getPixelFromCoordinate(l),
                            c = Qn(t, h); if (c <= this.pixelTolerance_) { var p = {}; if (s.geometry.getType() === Nt.CIRCLE && s.index === Df) this.snappedToVertex_ = !0, this.createOrUpdateVertexFeature_(l);
                            else { var f = e.getPixelFromCoordinate(u[0]),
                                    d = e.getPixelFromCoordinate(u[1]),
                                    _ = Jn(h, f),
                                    g = Jn(h, d);
                                c = Math.sqrt(Math.min(_, g)), this.snappedToVertex_ = c <= this.pixelTolerance_, this.snappedToVertex_ && (l = _ > g ? u[1] : u[0]), this.createOrUpdateVertexFeature_(l); for (var y = 1, v = a.length; y < v; ++y) { var m = a[y].segment; if (!(Kn(u[0], m[0]) && Kn(u[1], m[1]) || Kn(u[0], m[1]) && Kn(u[1], m[0]))) break;
                                    p[o(m)] = !0 } } return p[o(u)] = !0, void(this.vertexSegments_ = p) } }
                    this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null) }, e.prototype.insertVertex_ = function(t, e) { for (var r, n = t.segment, i = t.feature, o = t.geometry, a = t.depth, s = t.index; e.length < o.getStride();) e.push(0); switch (o.getType()) {
                        case Nt.MULTI_LINE_STRING:
                        case Nt.POLYGON:
                            (r = o.getCoordinates())[a[0]].splice(s + 1, 0, e); break;
                        case Nt.MULTI_POLYGON:
                            (r = o.getCoordinates())[a[1]][a[0]].splice(s + 1, 0, e); break;
                        case Nt.LINE_STRING:
                            (r = o.getCoordinates()).splice(s + 1, 0, e); break;
                        default:
                            return }
                    this.setGeometryCoordinates_(o, r); var u = this.rBush_;
                    u.remove(t), this.updateSegmentIndices_(o, s, a, 1); var l = { segment: [n[0], e], feature: i, geometry: o, depth: a, index: s };
                    u.insert($(l.segment), l), this.dragSegments_.push([l, 1]); var h = { segment: [e, n[1]], feature: i, geometry: o, depth: a, index: s + 1 };
                    u.insert($(h.segment), h), this.dragSegments_.push([h, 0]), this.ignoreNextSingleClick_ = !0 }, e.prototype.removePoint = function() { if (this.lastPointerEvent_ && this.lastPointerEvent_.type != ln.POINTERDRAG) { var t = this.lastPointerEvent_;
                        this.willModifyFeatures_(t); var e = this.removeVertex_(); return this.dispatchEvent(new Yf(Bf, this.features_, t)), this.modified_ = !1, e } return !1 }, e.prototype.removeVertex_ = function() { var t, e, r, n, i, a, s, u, l, h, c, p = this.dragSegments_,
                        f = {},
                        d = !1; for (i = p.length - 1; i >= 0; --i) c = o((h = (r = p[i])[0]).feature), h.depth && (c += "-" + h.depth.join("-")), c in f || (f[c] = {}), 0 === r[1] ? (f[c].right = h, f[c].index = h.index) : 1 == r[1] && (f[c].left = h, f[c].index = h.index + 1); for (c in f) { switch (l = f[c].right, s = f[c].left, (u = (a = f[c].index) - 1) < 0 && (u = 0), t = e = (n = (h = void 0 !== s ? s : l).geometry).getCoordinates(), d = !1, n.getType()) {
                            case Nt.MULTI_LINE_STRING:
                                e[h.depth[0]].length > 2 && (e[h.depth[0]].splice(a, 1), d = !0); break;
                            case Nt.LINE_STRING:
                                e.length > 2 && (e.splice(a, 1), d = !0); break;
                            case Nt.MULTI_POLYGON:
                                t = t[h.depth[1]];
                            case Nt.POLYGON:
                                (t = t[h.depth[0]]).length > 4 && (a == t.length - 1 && (a = 0), t.splice(a, 1), d = !0, 0 === a && (t.pop(), t.push(t[0]), u = t.length - 1)) } if (d) { this.setGeometryCoordinates_(n, e); var _ = []; if (void 0 !== s && (this.rBush_.remove(s), _.push(s.segment[0])), void 0 !== l && (this.rBush_.remove(l), _.push(l.segment[1])), void 0 !== s && void 0 !== l) { var g = { depth: h.depth, feature: h.feature, geometry: h.geometry, index: u, segment: _ };
                                this.rBush_.insert($(g.segment), g) }
                            this.updateSegmentIndices_(n, a, h.depth, -1), this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), p.length = 0 } } return d }, e.prototype.setGeometryCoordinates_ = function(t, e) { this.changingFeature_ = !0, t.setCoordinates(e), this.changingFeature_ = !1 }, e.prototype.updateSegmentIndices_ = function(t, e, r, n) { this.rBush_.forEachInExtent(t.getExtent(), function(i) { i.geometry === t && (void 0 === r || void 0 === i.depth || R(i.depth, r)) && i.index > e && (i.index += n) }) }, e }(Eo),
            Kf = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Hf = { SELECT: "select" },
            qf = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e) || this; return o.selected = r, o.deselected = n, o.mapBrowserEvent = i, o } return Kf(e, t), e }(M);

        function Jf(t) { if (!this.condition_(t)) return !0; var e = this.addCondition_(t),
                r = this.removeCondition_(t),
                n = this.toggleCondition_(t),
                i = !e && !r && !n,
                o = t.map,
                a = this.getFeatures(),
                s = [],
                u = []; if (i) { f(this.featureLayerAssociation_), o.forEachFeatureAtPixel(t.pixel, function(t, e) { if (this.filter_(t, e)) return u.push(t), this.addFeatureLayerAssociation_(t, e), !this.multi_ }.bind(this), { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }); for (var l = a.getLength() - 1; l >= 0; --l) { var h = a.item(l),
                        c = u.indexOf(h);
                    c > -1 ? u.splice(c, 1) : (a.remove(h), s.push(h)) }
                0 !== u.length && a.extend(u) } else { o.forEachFeatureAtPixel(t.pixel, function(t, i) { if (this.filter_(t, i)) return !e && !n || T(a.getArray(), t) ? (r || n) && T(a.getArray(), t) && (s.push(t), this.removeFeatureLayerAssociation_(t)) : (u.push(t), this.addFeatureLayerAssociation_(t, i)), !this.multi_ }.bind(this), { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }); for (var p = s.length - 1; p >= 0; --p) a.remove(s[p]);
                a.extend(u) } return (u.length > 0 || s.length > 0) && this.dispatchEvent(new qf(Hf.SELECT, u, s, t)), ho(t) } var Qf = function(t) {
                function e(e) { var r, n, i = t.call(this, { handleEvent: Jf }) || this,
                        o = e || {}; if (i.condition_ = o.condition ? o.condition : co, i.addCondition_ = o.addCondition ? o.addCondition : lo, i.removeCondition_ = o.removeCondition ? o.removeCondition : lo, i.toggleCondition_ = o.toggleCondition ? o.toggleCondition : fo, i.multi_ = !!o.multi && o.multi, i.filter_ = o.filter ? o.filter : P, i.hitTolerance_ = o.hitTolerance ? o.hitTolerance : 0, i.style_ = o.style ? o.style : (x((r = Iu())[Nt.POLYGON], r[Nt.LINE_STRING]), x(r[Nt.GEOMETRY_COLLECTION], r[Nt.LINE_STRING]), function(t) { return t.getGeometry() ? r[t.getGeometry().getType()] : null }), i.featureStyleAssociation_ = {}, i.features_ = o.features || new Z, o.layers)
                        if ("function" == typeof o.layers) n = o.layers;
                        else { var a = o.layers;
                            n = function(t) { return T(a, t) } }
                    else n = P;
                    i.layerFilter_ = n, i.featureLayerAssociation_ = {}; var s = i.getFeatures(); return s.addEventListener(h.ADD, i.addFeature_.bind(i)), s.addEventListener(h.REMOVE, i.removeFeature_.bind(i)), i } return Kf(e, t), e.prototype.addFeatureLayerAssociation_ = function(t, e) { this.featureLayerAssociation_[o(t)] = e }, e.prototype.getFeatures = function() { return this.features_ }, e.prototype.getHitTolerance = function() { return this.hitTolerance_ }, e.prototype.getLayer = function(t) { return this.featureLayerAssociation_[o(t)] }, e.prototype.setHitTolerance = function(t) { this.hitTolerance_ = t }, e.prototype.setMap = function(e) { this.getMap() && this.style_ && this.features_.forEach(this.removeSelectedStyle_.bind(this)), t.prototype.setMap.call(this, e), e && this.style_ && this.features_.forEach(this.giveSelectedStyle_.bind(this)) }, e.prototype.addFeature_ = function(t) { var e = t.element;
                    this.style_ && this.giveSelectedStyle_(e) }, e.prototype.removeFeature_ = function(t) { var e = t.element;
                    this.style_ && this.removeSelectedStyle_(e) }, e.prototype.giveSelectedStyle_ = function(t) { var e = o(t);
                    this.featureStyleAssociation_[e] = t.getStyle(), t.setStyle(this.style_) }, e.prototype.removeSelectedStyle_ = function(t) { var e = o(t);
                    t.setStyle(this.featureStyleAssociation_[e]), delete this.featureStyleAssociation_[e] }, e.prototype.removeFeatureLayerAssociation_ = function(t) { delete this.featureLayerAssociation_[o(t)] }, e }(to),
            $f = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function td(t) { return t.feature ? t.feature : t.element ? t.element : void 0 }

        function ed(t, e) { return $n(this.pixelCoordinate_, t.segment) - $n(this.pixelCoordinate_, e.segment) } var rd = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = n; return i.handleDownEvent || (i.handleDownEvent = P), i.stopDown || (i.stopDown = I), (r = t.call(this, i) || this).source_ = n.source ? n.source : null, r.vertex_ = void 0 === n.vertex || n.vertex, r.edge_ = void 0 === n.edge || n.edge, r.features_ = n.features ? n.features : null, r.featuresListenerKeys_ = [], r.featureChangeListenerKeys_ = {}, r.indexedFeaturesExtents_ = {}, r.pendingFeatures_ = {}, r.pixelCoordinate_ = null, r.pixelTolerance_ = void 0 !== n.pixelTolerance ? n.pixelTolerance : 10, r.sortByDistance_ = ed.bind(r), r.rBush_ = new Rl, r.SEGMENT_WRITERS_ = { Point: r.writePointGeometry_, LineString: r.writeLineStringGeometry_, LinearRing: r.writeLineStringGeometry_, Polygon: r.writePolygonGeometry_, MultiPoint: r.writeMultiPointGeometry_, MultiLineString: r.writeMultiLineStringGeometry_, MultiPolygon: r.writeMultiPolygonGeometry_, GeometryCollection: r.writeGeometryCollectionGeometry_, Circle: r.writeCircleGeometry_ }, r } return $f(e, t), e.prototype.addFeature = function(t, e) { var r = void 0 === e || e,
                        n = o(t),
                        i = t.getGeometry(); if (i) { var a = this.SEGMENT_WRITERS_[i.getType()];
                        a && (this.indexedFeaturesExtents_[n] = i.getExtent([1 / 0, 1 / 0, -1 / 0, -1 / 0]), a.call(this, t, i)) }
                    r && (this.featureChangeListenerKeys_[n] = g(t, N.CHANGE, this.handleFeatureChange_, this)) }, e.prototype.forEachFeatureAdd_ = function(t) { this.addFeature(t) }, e.prototype.forEachFeatureRemove_ = function(t) { this.removeFeature(t) }, e.prototype.getFeatures_ = function() { var t; return this.features_ ? t = this.features_ : this.source_ && (t = this.source_.getFeatures()), t }, e.prototype.handleEvent = function(e) { var r = this.snapTo(e.pixel, e.coordinate, e.map); return r.snapped && (e.coordinate = r.vertex.slice(0, 2), e.pixel = r.vertexPixel), t.prototype.handleEvent.call(this, e) }, e.prototype.handleFeatureAdd_ = function(t) { var e = td(t);
                    this.addFeature(e) }, e.prototype.handleFeatureRemove_ = function(t) { var e = td(t);
                    this.removeFeature(e) }, e.prototype.handleFeatureChange_ = function(t) { var e = t.target; if (this.handlingDownUpSequence) { var r = o(e);
                        r in this.pendingFeatures_ || (this.pendingFeatures_[r] = e) } else this.updateFeature_(e) }, e.prototype.handleUpEvent = function(t) { var e = d(this.pendingFeatures_); return e.length && (e.forEach(this.updateFeature_.bind(this)), this.pendingFeatures_ = {}), !1 }, e.prototype.removeFeature = function(t, e) { var r = void 0 === e || e,
                        n = o(t),
                        i = this.indexedFeaturesExtents_[n]; if (i) { var a = this.rBush_,
                            s = [];
                        a.forEachInExtent(i, function(e) { t === e.feature && s.push(e) }); for (var u = s.length - 1; u >= 0; --u) a.remove(s[u]) }
                    r && (v(this.featureChangeListenerKeys_[n]), delete this.featureChangeListenerKeys_[n]) }, e.prototype.setMap = function(e) { var r = this.getMap(),
                        n = this.featuresListenerKeys_,
                        i = this.getFeatures_();
                    r && (n.forEach(v), n.length = 0, i.forEach(this.forEachFeatureRemove_.bind(this))), t.prototype.setMap.call(this, e), e && (this.features_ ? n.push(g(this.features_, h.ADD, this.handleFeatureAdd_, this), g(this.features_, h.REMOVE, this.handleFeatureRemove_, this)) : this.source_ && n.push(g(this.source_, wl.ADDFEATURE, this.handleFeatureAdd_, this), g(this.source_, wl.REMOVEFEATURE, this.handleFeatureRemove_, this)), i.forEach(this.forEachFeatureAdd_.bind(this))) }, e.prototype.snapTo = function(t, e, r) { var n = $([r.getCoordinateFromPixelInternal([t[0] - this.pixelTolerance_, t[1] + this.pixelTolerance_]), r.getCoordinateFromPixelInternal([t[0] + this.pixelTolerance_, t[1] - this.pixelTolerance_])]),
                        i = this.rBush_.getInExtent(n);
                    this.vertex_ && !this.edge_ && (i = i.filter(function(t) { return t.feature.getGeometry().getType() !== Nt.CIRCLE })); var o, a, s, u, l = !1,
                        h = null,
                        c = null; if (i.length > 0) { this.pixelCoordinate_ = e, i.sort(this.sortByDistance_); var p = i[0].segment,
                            f = i[0].feature.getGeometry().getType() === Nt.CIRCLE;
                        this.vertex_ && !this.edge_ ? (o = r.getPixelFromCoordinateInternal(p[0]), a = r.getPixelFromCoordinateInternal(p[1]), s = Jn(t, o), u = Jn(t, a), Math.sqrt(Math.min(s, u)) <= this.pixelTolerance_ && (l = !0, h = s > u ? p[1] : p[0], c = r.getPixelFromCoordinateInternal(h))) : this.edge_ && (h = f ? function(t, e) { var r = e.getRadius(),
                                n = e.getCenter(),
                                i = n[0],
                                o = n[1],
                                a = t[0] - i,
                                s = t[1] - o;
                            0 === a && 0 === s && (a = 1); var u = Math.sqrt(a * a + s * s); return [i + r * a / u, o + r * s / u] }(e, i[0].feature.getGeometry()) : Vn(e, p), Qn(t, c = r.getPixelFromCoordinateInternal(h)) <= this.pixelTolerance_ && (l = !0, this.vertex_ && !f && (o = r.getPixelFromCoordinateInternal(p[0]), a = r.getPixelFromCoordinateInternal(p[1]), s = Jn(c, o), u = Jn(c, a), Math.sqrt(Math.min(s, u)) <= this.pixelTolerance_ && (h = s > u ? p[1] : p[0], c = r.getPixelFromCoordinateInternal(h))))), l && (c = [Math.round(c[0]), Math.round(c[1])]) } return { snapped: l, vertex: h, vertexPixel: c } }, e.prototype.updateFeature_ = function(t) { this.removeFeature(t, !1), this.addFeature(t, !1) }, e.prototype.writeCircleGeometry_ = function(t, e) { for (var r = Vr(e).getCoordinates()[0], n = 0, i = r.length - 1; n < i; ++n) { var o = r.slice(n, n + 2),
                            a = { feature: t, segment: o };
                        this.rBush_.insert($(o), a) } }, e.prototype.writeGeometryCollectionGeometry_ = function(t, e) { for (var r = e.getGeometriesArray(), n = 0; n < r.length; ++n) { var i = this.SEGMENT_WRITERS_[r[n].getType()];
                        i && i.call(this, t, r[n]) } }, e.prototype.writeLineStringGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length - 1; n < i; ++n) { var o = r.slice(n, n + 2),
                            a = { feature: t, segment: o };
                        this.rBush_.insert($(o), a) } }, e.prototype.writeMultiLineStringGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length - 1; a < s; ++a) { var u = o.slice(a, a + 2),
                                l = { feature: t, segment: u };
                            this.rBush_.insert($(u), l) } }, e.prototype.writeMultiPointGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n) { var o = r[n],
                            a = { feature: t, segment: [o, o] };
                        this.rBush_.insert(e.getExtent(), a) } }, e.prototype.writeMultiPolygonGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length; a < s; ++a)
                            for (var u = o[a], l = 0, h = u.length - 1; l < h; ++l) { var c = u.slice(l, l + 2),
                                    p = { feature: t, segment: c };
                                this.rBush_.insert($(c), p) } }, e.prototype.writePointGeometry_ = function(t, e) { var r = e.getCoordinates(),
                        n = { feature: t, segment: [r, r] };
                    this.rBush_.insert(e.getExtent(), n) }, e.prototype.writePolygonGeometry_ = function(t, e) { for (var r = e.getCoordinates(), n = 0, i = r.length; n < i; ++n)
                        for (var o = r[n], a = 0, s = o.length - 1; a < s; ++a) { var u = o.slice(a, a + 2),
                                l = { feature: t, segment: u };
                            this.rBush_.insert($(u), l) } }, e }(Eo),
            nd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            id = "translatestart",
            od = "translating",
            ad = "translateend",
            sd = function(t) {
                function e(e, r, n, i, o) { var a = t.call(this, e) || this; return a.features = r, a.coordinate = n, a.startCoordinate = i, a.mapBrowserEvent = o, a } return nd(e, t), e }(M),
            ud = function(t) {
                function e(e) { var r, n = this,
                        i = e || {}; if ((n = t.call(this, i) || this).lastCoordinate_ = null, n.startCoordinate_ = null, n.features_ = void 0 !== i.features ? i.features : null, i.layers)
                        if ("function" == typeof i.layers) r = i.layers;
                        else { var o = i.layers;
                            r = function(t) { return T(o, t) } }
                    else r = P; return n.layerFilter_ = r, n.filter_ = i.filter ? i.filter : P, n.hitTolerance_ = i.hitTolerance ? i.hitTolerance : 0, n.lastFeature_ = null, n.addEventListener(Y(Ji.ACTIVE), n.handleActiveChanged_), n } return nd(e, t), e.prototype.handleDownEvent = function(t) { if (this.lastFeature_ = this.featuresAtPixel_(t.pixel, t.map), !this.lastCoordinate_ && this.lastFeature_) { this.startCoordinate_ = this.lastCoordinate_ = t.coordinate, this.handleMoveEvent(t); var e = this.features_ || new Z([this.lastFeature_]); return this.dispatchEvent(new sd(id, e, t.coordinate, this.startCoordinate_, t)), !0 } return !1 }, e.prototype.handleUpEvent = function(t) { if (this.lastCoordinate_) { this.lastCoordinate_ = null, this.handleMoveEvent(t); var e = this.features_ || new Z([this.lastFeature_]); return this.dispatchEvent(new sd(ad, e, t.coordinate, this.startCoordinate_, t)), this.startCoordinate_ = null, !0 } return !1 }, e.prototype.handleDragEvent = function(t) { if (this.lastCoordinate_) { var e = t.coordinate,
                            r = e[0] - this.lastCoordinate_[0],
                            n = e[1] - this.lastCoordinate_[1],
                            i = this.features_ || new Z([this.lastFeature_]);
                        i.forEach(function(t) { var e = t.getGeometry();
                            e.translate(r, n), t.setGeometry(e) }), this.lastCoordinate_ = e, this.dispatchEvent(new sd(od, i, e, this.startCoordinate_, t)) } }, e.prototype.handleMoveEvent = function(t) { var e = t.map.getViewport();
                    this.featuresAtPixel_(t.pixel, t.map) ? (e.classList.remove(this.lastCoordinate_ ? "ol-grab" : "ol-grabbing"), e.classList.add(this.lastCoordinate_ ? "ol-grabbing" : "ol-grab")) : e.classList.remove("ol-grab", "ol-grabbing") }, e.prototype.featuresAtPixel_ = function(t, e) { return e.forEachFeatureAtPixel(t, function(t, e) { if (this.filter_(t, e) && (!this.features_ || T(this.features_.getArray(), t))) return t }.bind(this), { layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }) }, e.prototype.getHitTolerance = function() { return this.hitTolerance_ }, e.prototype.setHitTolerance = function(t) { this.hitTolerance_ = t }, e.prototype.setMap = function(e) { var r = this.getMap();
                    t.prototype.setMap.call(this, e), this.updateState_(r) }, e.prototype.handleActiveChanged_ = function() { this.updateState_(null) }, e.prototype.updateState_ = function(t) { var e = this.getMap(),
                        r = this.getActive();
                    e && r || (e = e || t) && e.getViewport().classList.remove("ol-grab", "ol-grabbing") }, e }(Eo),
            ld = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function hd(t) { for (var e = [], r = 0, n = t.length; r < n; ++r) e.push(t[r].clone()); return e } var cd = function(t) {
                function e(e) { var r = t.call(this) || this; return r.geometries_ = e || null, r.changeEventsKeys_ = [], r.listenGeometriesChange_(), r } return ld(e, t), e.prototype.unlistenGeometriesChange_ = function() { this.changeEventsKeys_.forEach(v), this.changeEventsKeys_.length = 0 }, e.prototype.listenGeometriesChange_ = function() { if (this.geometries_)
                        for (var t = 0, e = this.geometries_.length; t < e; ++t) this.changeEventsKeys_.push(g(this.geometries_[t], N.CHANGE, this.changed, this)) }, e.prototype.clone = function() { var t = new e(null); return t.setGeometries(this.geometries_), t }, e.prototype.closestPointXY = function(t, e, r, n) { if (n < rt(this.getExtent(), t, e)) return n; for (var i = this.geometries_, o = 0, a = i.length; o < a; ++o) n = i[o].closestPointXY(t, e, r, n); return n }, e.prototype.containsXY = function(t, e) { for (var r = this.geometries_, n = 0, i = r.length; n < i; ++n)
                        if (r[n].containsXY(t, e)) return !0;
                    return !1 }, e.prototype.computeExtent = function(t) { lt(t); for (var e = this.geometries_, r = 0, n = e.length; r < n; ++r) ft(t, e[r].getExtent()); return t }, e.prototype.getGeometries = function() { return hd(this.geometries_) }, e.prototype.getGeometriesArray = function() { return this.geometries_ }, e.prototype.getSimplifiedGeometry = function(t) { if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t < this.simplifiedGeometryMaxMinSquaredTolerance) return this; for (var r = [], n = this.geometries_, i = !1, o = 0, a = n.length; o < a; ++o) { var s = n[o],
                            u = s.getSimplifiedGeometry(t);
                        r.push(u), u !== s && (i = !0) } if (i) { var l = new e(null); return l.setGeometriesArray(r), l } return this.simplifiedGeometryMaxMinSquaredTolerance = t, this }, e.prototype.getType = function() { return Nt.GEOMETRY_COLLECTION }, e.prototype.intersectsExtent = function(t) { for (var e = this.geometries_, r = 0, n = e.length; r < n; ++r)
                        if (e[r].intersectsExtent(t)) return !0;
                    return !1 }, e.prototype.isEmpty = function() { return 0 === this.geometries_.length }, e.prototype.rotate = function(t, e) { for (var r = this.geometries_, n = 0, i = r.length; n < i; ++n) r[n].rotate(t, e);
                    this.changed() }, e.prototype.scale = function(t, e, r) { var n = r;
                    n || (n = St(this.getExtent())); for (var i = this.geometries_, o = 0, a = i.length; o < a; ++o) i[o].scale(t, e, n);
                    this.changed() }, e.prototype.setGeometries = function(t) { this.setGeometriesArray(hd(t)) }, e.prototype.setGeometriesArray = function(t) { this.unlistenGeometriesChange_(), this.geometries_ = t, this.listenGeometriesChange_(), this.changed() }, e.prototype.applyTransform = function(t) { for (var e = this.geometries_, r = 0, n = e.length; r < n; ++r) e[r].applyTransform(t);
                    this.changed() }, e.prototype.translate = function(t, e) { for (var r = this.geometries_, n = 0, i = r.length; n < i; ++n) r[n].translate(t, e);
                    this.changed() }, e.prototype.disposeInternal = function() { this.unlistenGeometriesChange_(), t.prototype.disposeInternal.call(this) }, e }(er),
            pd = function() {
                function t() { this.dataProjection = null, this.defaultFeatureProjection = null } return t.prototype.getReadOptions = function(t, e) { var r; if (e) { var n = e.dataProjection ? we(e.dataProjection) : this.readProjection(t);
                        e.extent && n && n.getUnits() === te.TILE_PIXELS && (n = we(n)).setWorldExtent(e.extent), r = { dataProjection: n, featureProjection: e.featureProjection } } return this.adaptOptions(r) }, t.prototype.adaptOptions = function(t) { return p({ dataProjection: this.dataProjection, featureProjection: this.defaultFeatureProjection }, t) }, t.prototype.getType = function() { return n() }, t.prototype.readFeature = function(t, e) { return n() }, t.prototype.readFeatures = function(t, e) { return n() }, t.prototype.readGeometry = function(t, e) { return n() }, t.prototype.readProjection = function(t) { return n() }, t.prototype.writeFeature = function(t, e) { return n() }, t.prototype.writeFeatures = function(t, e) { return n() }, t.prototype.writeGeometry = function(t, e) { return n() }, t }();

        function fd(t, e, r) { var n, i = r ? we(r.featureProjection) : null,
                o = r ? we(r.dataProjection) : null; if (n = i && o && !Ie(i, o) ? (e ? t.clone() : t).transform(e ? i : o, e ? o : i) : t, e && r && void 0 !== r.decimals) { var a = Math.pow(10, r.decimals);
                n === t && (n = t.clone()), n.applyTransform(function(t) { for (var e = 0, r = t.length; e < r; ++e) t[e] = Math.round(t[e] * a) / a; return t }) } return n }

        function dd(t, e) { var r = e ? we(e.featureProjection) : null,
                n = e ? we(e.dataProjection) : null; return r && n && !Ie(r, n) ? Fe(t, n, r) : t } var _d = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function gd(t) { if ("string" == typeof t) { var e = JSON.parse(t); return e || null } return null !== t ? t : null } var yd = function(t) {
                function e() { return t.call(this) || this } return _d(e, t), e.prototype.getType = function() { return Ka.JSON }, e.prototype.readFeature = function(t, e) { return this.readFeatureFromObject(gd(t), this.getReadOptions(t, e)) }, e.prototype.readFeatures = function(t, e) { return this.readFeaturesFromObject(gd(t), this.getReadOptions(t, e)) }, e.prototype.readFeatureFromObject = function(t, e) { return n() }, e.prototype.readFeaturesFromObject = function(t, e) { return n() }, e.prototype.readGeometry = function(t, e) { return this.readGeometryFromObject(gd(t), this.getReadOptions(t, e)) }, e.prototype.readGeometryFromObject = function(t, e) { return n() }, e.prototype.readProjection = function(t) { return this.readProjectionFromObject(gd(t)) }, e.prototype.readProjectionFromObject = function(t) { return n() }, e.prototype.writeFeature = function(t, e) { return JSON.stringify(this.writeFeatureObject(t, e)) }, e.prototype.writeFeatureObject = function(t, e) { return n() }, e.prototype.writeFeatures = function(t, e) { return JSON.stringify(this.writeFeaturesObject(t, e)) }, e.prototype.writeFeaturesObject = function(t, e) { return n() }, e.prototype.writeGeometry = function(t, e) { return JSON.stringify(this.writeGeometryObject(t, e)) }, e.prototype.writeGeometryObject = function(t, e) { return n() }, e }(pd),
            vd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            md = {};
        md[Nt.POINT] = function(t) { var e;
            e = void 0 !== t.m && void 0 !== t.z ? new Rr([t.x, t.y, t.z, t.m], At.XYZM) : void 0 !== t.z ? new Rr([t.x, t.y, t.z], At.XYZ) : void 0 !== t.m ? new Rr([t.x, t.y, t.m], At.XYM) : new Rr([t.x, t.y]); return e }, md[Nt.LINE_STRING] = function(t) { var e = Sd(t); return new zp(t.paths[0], e) }, md[Nt.POLYGON] = function(t) { var e = Sd(t); return new Yr(t.rings, e) }, md[Nt.MULTI_POINT] = function(t) { var e = Sd(t); return new vf(t.points, e) }, md[Nt.MULTI_LINE_STRING] = function(t) { var e = Sd(t); return new gf(t.paths, e) }, md[Nt.MULTI_POLYGON] = function(t) { var e = Sd(t); return new Tf(t.rings, e) }; var Ed = {};

        function Td(t, e) { var r, n, i; if (!t) return null; if ("number" == typeof t.x && "number" == typeof t.y) i = Nt.POINT;
            else if (t.points) i = Nt.MULTI_POINT;
            else if (t.paths) { i = 1 === t.paths.length ? Nt.LINE_STRING : Nt.MULTI_LINE_STRING } else if (t.rings) { var o = t,
                    a = Sd(o),
                    s = function(t, e) { var r, n, i = [],
                            o = [],
                            a = []; for (r = 0, n = t.length; r < n; ++r) { i.length = 0, fr(i, 0, t[r], e.length), Gr(i, 0, i.length, e.length) ? o.push([t[r]]) : a.push(t[r]) } for (; a.length;) { var s = a.shift(),
                                u = !1; for (r = o.length - 1; r >= 0; r--) { var l = o[r][0]; if (it(new xr(l).getExtent(), new xr(s).getExtent())) { o[r].push(s), u = !0; break } }
                            u || o.push([s.reverse()]) } return o }(o.rings, a);
                1 === s.length ? (i = Nt.POLYGON, t = Object.assign({}, t, ((r = {}).rings = s[0], r))) : (i = Nt.MULTI_POLYGON, t = Object.assign({}, t, ((n = {}).rings = s, n))) } return fd((0, md[i])(t), !1, e) }

        function Sd(t) { var e = At.XY; return !0 === t.hasZ && !0 === t.hasM ? e = At.XYZM : !0 === t.hasZ ? e = At.XYZ : !0 === t.hasM && (e = At.XYM), e }

        function wd(t) { var e = t.getLayout(); return { hasZ: e === At.XYZ || e === At.XYZM, hasM: e === At.XYM || e === At.XYZM } }

        function xd(t, e) { return (0, Ed[t.getType()])(fd(t, !0, e), e) }
        Ed[Nt.POINT] = function(t, e) { var r, n = t.getCoordinates(),
                i = t.getLayout();
            i === At.XYZ ? r = { x: n[0], y: n[1], z: n[2] } : i === At.XYM ? r = { x: n[0], y: n[1], m: n[2] } : i === At.XYZM ? r = { x: n[0], y: n[1], z: n[2], m: n[3] } : i === At.XY ? r = { x: n[0], y: n[1] } : K(!1, 34); return r }, Ed[Nt.LINE_STRING] = function(t, e) { var r = wd(t); return { hasZ: r.hasZ, hasM: r.hasM, paths: [t.getCoordinates()] } }, Ed[Nt.POLYGON] = function(t, e) { var r = wd(t); return { hasZ: r.hasZ, hasM: r.hasM, rings: t.getCoordinates(!1) } }, Ed[Nt.MULTI_POINT] = function(t, e) { var r = wd(t); return { hasZ: r.hasZ, hasM: r.hasM, points: t.getCoordinates() } }, Ed[Nt.MULTI_LINE_STRING] = function(t, e) { var r = wd(t); return { hasZ: r.hasZ, hasM: r.hasM, paths: t.getCoordinates() } }, Ed[Nt.MULTI_POLYGON] = function(t, e) { for (var r = wd(t), n = t.getCoordinates(!1), i = [], o = 0; o < n.length; o++)
                for (var a = n[o].length - 1; a >= 0; a--) i.push(n[o][a]); return { hasZ: r.hasZ, hasM: r.hasM, rings: i } }; var Od = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this) || this).geometryName_ = n.geometryName, r } return vd(e, t), e.prototype.readFeatureFromObject = function(t, e) { var r = t,
                        n = Td(r.geometry, e),
                        i = new q; return this.geometryName_ && i.setGeometryName(this.geometryName_), i.setGeometry(n), e && e.idField && r.attributes[e.idField] && i.setId(r.attributes[e.idField]), r.attributes && i.setProperties(r.attributes, !0), i }, e.prototype.readFeaturesFromObject = function(t, e) { var r = e || {}; if (t.features) { var n = [],
                            i = t.features;
                        r.idField = t.objectIdFieldName; for (var o = 0, a = i.length; o < a; ++o) n.push(this.readFeatureFromObject(i[o], r)); return n } return [this.readFeatureFromObject(t, r)] }, e.prototype.readGeometryFromObject = function(t, e) { return Td(t, e) }, e.prototype.readProjectionFromObject = function(t) { return t.spatialReference && void 0 !== t.spatialReference.wkid ? we("EPSG:" + t.spatialReference.wkid) : null }, e.prototype.writeGeometryObject = function(t, e) { return xd(t, this.adaptOptions(e)) }, e.prototype.writeFeatureObject = function(t, e) { e = this.adaptOptions(e); var r = {},
                        n = t.getGeometry();
                    n && (r.geometry = xd(n, e), e && e.featureProjection && (r.geometry.spatialReference = { wkid: Number(we(e.featureProjection).getCode().split(":").pop()) })); var i = t.getProperties(); return delete i[t.getGeometryName()], _(i) ? r.attributes = {} : r.attributes = i, r }, e.prototype.writeFeaturesObject = function(t, e) { e = this.adaptOptions(e); for (var r = [], n = 0, i = t.length; n < i; ++n) r.push(this.writeFeatureObject(t[n], e)); return { features: r } }, e }(yd),
            Rd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Cd = function(t) {
                function e() { var e = t.call(this) || this; return e.xmlSerializer_ = new XMLSerializer, e } return Rd(e, t), e.prototype.getType = function() { return Ka.XML }, e.prototype.readFeature = function(t, e) { if (t) { if ("string" == typeof t) { var r = Os(t); return this.readFeatureFromDocument(r, e) } return xs(t) ? this.readFeatureFromDocument(t, e) : this.readFeatureFromNode(t, e) } return null }, e.prototype.readFeatureFromDocument = function(t, e) { var r = this.readFeaturesFromDocument(t, e); return r.length > 0 ? r[0] : null }, e.prototype.readFeatureFromNode = function(t, e) { return null }, e.prototype.readFeatures = function(t, e) { if (t) { if ("string" == typeof t) { var r = Os(t); return this.readFeaturesFromDocument(r, e) } return xs(t) ? this.readFeaturesFromDocument(t, e) : this.readFeaturesFromNode(t, e) } return [] }, e.prototype.readFeaturesFromDocument = function(t, e) { for (var r = [], n = t.firstChild; n; n = n.nextSibling) n.nodeType == Node.ELEMENT_NODE && x(r, this.readFeaturesFromNode(n, e)); return r }, e.prototype.readFeaturesFromNode = function(t, e) { return n() }, e.prototype.readGeometry = function(t, e) { if (t) { if ("string" == typeof t) { var r = Os(t); return this.readGeometryFromDocument(r, e) } return xs(t) ? this.readGeometryFromDocument(t, e) : this.readGeometryFromNode(t, e) } return null }, e.prototype.readGeometryFromDocument = function(t, e) { return null }, e.prototype.readGeometryFromNode = function(t, e) { return null }, e.prototype.readProjection = function(t) { if (t) { if ("string" == typeof t) { var e = Os(t); return this.readProjectionFromDocument(e) } return xs(t) ? this.readProjectionFromDocument(t) : this.readProjectionFromNode(t) } return null }, e.prototype.readProjectionFromDocument = function(t) { return this.dataProjection }, e.prototype.readProjectionFromNode = function(t) { return this.dataProjection }, e.prototype.writeFeature = function(t, e) { var r = this.writeFeatureNode(t, e); return this.xmlSerializer_.serializeToString(r) }, e.prototype.writeFeatureNode = function(t, e) { return null }, e.prototype.writeFeatures = function(t, e) { var r = this.writeFeaturesNode(t, e); return this.xmlSerializer_.serializeToString(r) }, e.prototype.writeFeaturesNode = function(t, e) { return null }, e.prototype.writeGeometry = function(t, e) { var r = this.writeGeometryNode(t, e); return this.xmlSerializer_.serializeToString(r) }, e.prototype.writeGeometryNode = function(t, e) { return null }, e }(pd),
            Pd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Id = "http://www.opengis.net/gml",
            bd = /^[\s\xa0]*$/,
            Ld = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.featureType = n.featureType, r.featureNS = n.featureNS, r.srsName = n.srsName, r.schemaLocation = "", r.FEATURE_COLLECTION_PARSERS = {}, r.FEATURE_COLLECTION_PARSERS[r.namespace] = { featureMember: Cs(r.readFeaturesInternal), featureMembers: Ps(r.readFeaturesInternal) }, r } return Pd(e, t), e.prototype.readFeaturesInternal = function(t, e) { var r = t.localName,
                        n = null; if ("FeatureCollection" == r) n = js([], this.FEATURE_COLLECTION_PARSERS, t, e, this);
                    else if ("featureMembers" == r || "featureMember" == r) { var i = e[0],
                            o = i.featureType,
                            a = i.featureNS; if (!o && t.childNodes) { o = [], a = {}; for (var s = 0, u = t.childNodes.length; s < u; ++s) { var l = t.childNodes[s]; if (1 === l.nodeType) { var h = l.nodeName.split(":").pop(); if (-1 === o.indexOf(h)) { var c = "",
                                            p = 0,
                                            f = l.namespaceURI; for (var d in a) { if (a[d] === f) { c = d; break }++p }
                                        c || (a[c = "p" + p] = f), o.push(c + ":" + h) } } } "featureMember" != r && (i.featureType = o, i.featureNS = a) } if ("string" == typeof a) { var _ = a;
                            (a = {}).p0 = _ } var g = {},
                            y = Array.isArray(o) ? o : [o]; for (var v in a) { var m = {}; for (s = 0, u = y.length; s < u; ++s) {
                                (-1 === y[s].indexOf(":") ? "p0" : y[s].split(":")[0]) === v && (m[y[s].split(":").pop()] = "featureMembers" == r ? Cs(this.readFeatureElement, this) : Ps(this.readFeatureElement, this)) }
                            g[a[v]] = m }
                        n = js("featureMember" == r ? void 0 : [], g, t, e) } return null === n && (n = []), n }, e.prototype.readGeometryElement = function(t, e) { var r = e[0];
                    r.srsName = t.firstElementChild.getAttribute("srsName"), r.srsDimension = t.firstElementChild.getAttribute("srsDimension"); var n = js(null, this.GEOMETRY_PARSERS, t, e, this); return n ? Array.isArray(n) ? dd(n, r) : fd(n, !1, r) : void 0 }, e.prototype.readFeatureElementInternal = function(t, e, r) { for (var n, i = {}, o = t.firstElementChild; o; o = o.nextElementSibling) { var a = void 0,
                            s = o.localName;
                        0 === o.childNodes.length || 1 === o.childNodes.length && (3 === o.firstChild.nodeType || 4 === o.firstChild.nodeType) ? (a = ws(o, !1), bd.test(a) && (a = void 0)) : (r && (a = this.readGeometryElement(o, e)), a ? "boundedBy" !== s && (n = s) : a = this.readFeatureElementInternal(o, e, !1)), i[s] ? (i[s] instanceof Array || (i[s] = [i[s]]), i[s].push(a)) : i[s] = a; var u = o.attributes.length; if (u > 0) { i[s] = { _content_: i[s] }; for (var l = 0; l < u; l++) { var h = o.attributes[l].name;
                                i[s][h] = o.attributes[l].value } } } if (r) { var c = new q(i);
                        n && c.setGeometryName(n); var p = t.getAttribute("fid") || function(t, e, r) { return t.getAttributeNS(e, r) || "" }(t, this.namespace, "id"); return p && c.setId(p), c } return i }, e.prototype.readFeatureElement = function(t, e) { return this.readFeatureElementInternal(t, e, !0) }, e.prototype.readPoint = function(t, e) { var r = this.readFlatCoordinatesFromNode_(t, e); if (r) return new Rr(r, At.XYZ) }, e.prototype.readMultiPoint = function(t, e) { var r = js([], this.MULTIPOINT_PARSERS_, t, e, this); return r ? new vf(r) : void 0 }, e.prototype.readMultiLineString = function(t, e) { var r = js([], this.MULTILINESTRING_PARSERS_, t, e, this); if (r) return new gf(r) }, e.prototype.readMultiPolygon = function(t, e) { var r = js([], this.MULTIPOLYGON_PARSERS_, t, e, this); if (r) return new Tf(r) }, e.prototype.pointMemberParser_ = function(t, e) { Ds(this.POINTMEMBER_PARSERS_, t, e, this) }, e.prototype.lineStringMemberParser_ = function(t, e) { Ds(this.LINESTRINGMEMBER_PARSERS_, t, e, this) }, e.prototype.polygonMemberParser_ = function(t, e) { Ds(this.POLYGONMEMBER_PARSERS_, t, e, this) }, e.prototype.readLineString = function(t, e) { var r = this.readFlatCoordinatesFromNode_(t, e); return r ? new zp(r, At.XYZ) : void 0 }, e.prototype.readFlatLinearRing_ = function(t, e) { var r = js(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this); return r || void 0 }, e.prototype.readLinearRing = function(t, e) { var r = this.readFlatCoordinatesFromNode_(t, e); if (r) return new xr(r, At.XYZ) }, e.prototype.readPolygon = function(t, e) { var r = js([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this); if (r && r[0]) { var n, i = r[0],
                            o = [i.length],
                            a = void 0; for (a = 1, n = r.length; a < n; ++a) x(i, r[a]), o.push(i.length); return new Yr(i, At.XYZ, o) } }, e.prototype.readFlatCoordinatesFromNode_ = function(t, e) { return js(null, this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this) }, e.prototype.readGeometryFromNode = function(t, e) { var r = this.readGeometryElement(t, [this.getReadOptions(t, e || {})]); return r || null }, e.prototype.readFeaturesFromNode = function(t, e) { var r = { featureType: this.featureType, featureNS: this.featureNS }; return e && p(r, this.getReadOptions(t, e)), this.readFeaturesInternal(t, [r]) || [] }, e.prototype.readProjectionFromNode = function(t) { return we(this.srsName ? this.srsName : t.firstElementChild.getAttribute("srsName")) }, e }(Cd);
        Ld.prototype.namespace = Id, Ld.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": {} }, Ld.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": {} }, Ld.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": {} }, Ld.prototype.MULTIPOINT_PARSERS_ = { "http://www.opengis.net/gml": { pointMember: Cs(Ld.prototype.pointMemberParser_), pointMembers: Cs(Ld.prototype.pointMemberParser_) } }, Ld.prototype.MULTILINESTRING_PARSERS_ = { "http://www.opengis.net/gml": { lineStringMember: Cs(Ld.prototype.lineStringMemberParser_), lineStringMembers: Cs(Ld.prototype.lineStringMemberParser_) } }, Ld.prototype.MULTIPOLYGON_PARSERS_ = { "http://www.opengis.net/gml": { polygonMember: Cs(Ld.prototype.polygonMemberParser_), polygonMembers: Cs(Ld.prototype.polygonMemberParser_) } }, Ld.prototype.POINTMEMBER_PARSERS_ = { "http://www.opengis.net/gml": { Point: Cs(Ld.prototype.readFlatCoordinatesFromNode_) } }, Ld.prototype.LINESTRINGMEMBER_PARSERS_ = { "http://www.opengis.net/gml": { LineString: Cs(Ld.prototype.readLineString) } }, Ld.prototype.POLYGONMEMBER_PARSERS_ = { "http://www.opengis.net/gml": { Polygon: Cs(Ld.prototype.readPolygon) } }, Ld.prototype.RING_PARSERS = { "http://www.opengis.net/gml": { LinearRing: Ps(Ld.prototype.readFlatLinearRing_) } }; var Md = Ld;

        function Fd(t) { return Ad(ws(t, !1)) }

        function Ad(t) { var e = /^\s*(true|1)|(false|0)\s*$/.exec(t); return e ? void 0 !== e[1] || !1 : void 0 }

        function Nd(t) { var e = ws(t, !1),
                r = Date.parse(e); return isNaN(r) ? void 0 : r / 1e3 }

        function Gd(t) { return Dd(ws(t, !1)) }

        function Dd(t) { var e = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t); return e ? parseFloat(e[1]) : void 0 }

        function jd(t) { return kd(ws(t, !1)) }

        function kd(t) { var e = /^\s*(\d+)\s*$/.exec(t); return e ? parseInt(e[1], 10) : void 0 }

        function Ud(t) { return ws(t, !1).trim() }

        function Bd(t, e) { Xd(t, e ? "1" : "0") }

        function Yd(t, e) { var r = e.toPrecision();
            t.appendChild(Es.createTextNode(r)) }

        function zd(t, e) { var r = e.toString();
            t.appendChild(Es.createTextNode(r)) }

        function Xd(t, e) { t.appendChild(Es.createTextNode(e)) } var Vd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Wd = Id + " http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",
            Zd = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" },
            Kd = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).surface_ = void 0 !== n.surface && n.surface, r.curve_ = void 0 !== n.curve && n.curve, r.multiCurve_ = void 0 === n.multiCurve || n.multiCurve, r.multiSurface_ = void 0 === n.multiSurface || n.multiSurface, r.schemaLocation = n.schemaLocation ? n.schemaLocation : Wd, r.hasZ = void 0 !== n.hasZ && n.hasZ, r } return Vd(e, t), e.prototype.readMultiCurve_ = function(t, e) { var r = js([], this.MULTICURVE_PARSERS_, t, e, this); return r ? new gf(r) : void 0 }, e.prototype.readMultiSurface_ = function(t, e) { var r = js([], this.MULTISURFACE_PARSERS_, t, e, this); if (r) return new Tf(r) }, e.prototype.curveMemberParser_ = function(t, e) { Ds(this.CURVEMEMBER_PARSERS_, t, e, this) }, e.prototype.surfaceMemberParser_ = function(t, e) { Ds(this.SURFACEMEMBER_PARSERS_, t, e, this) }, e.prototype.readPatch_ = function(t, e) { return js([null], this.PATCHES_PARSERS_, t, e, this) }, e.prototype.readSegment_ = function(t, e) { return js([null], this.SEGMENTS_PARSERS_, t, e, this) }, e.prototype.readPolygonPatch_ = function(t, e) { return js([null], this.FLAT_LINEAR_RINGS_PARSERS, t, e, this) }, e.prototype.readLineStringSegment_ = function(t, e) { return js([null], this.GEOMETRY_FLAT_COORDINATES_PARSERS, t, e, this) }, e.prototype.interiorParser_ = function(t, e) { var r = js(void 0, this.RING_PARSERS, t, e, this);
                    r && e[e.length - 1].push(r) }, e.prototype.exteriorParser_ = function(t, e) { var r = js(void 0, this.RING_PARSERS, t, e, this);
                    r && (e[e.length - 1][0] = r) }, e.prototype.readSurface_ = function(t, e) { var r = js([null], this.SURFACE_PARSERS_, t, e, this); if (r && r[0]) { var n, i = r[0],
                            o = [i.length],
                            a = void 0; for (a = 1, n = r.length; a < n; ++a) x(i, r[a]), o.push(i.length); return new Yr(i, At.XYZ, o) } }, e.prototype.readCurve_ = function(t, e) { var r = js([null], this.CURVE_PARSERS_, t, e, this); return r ? new zp(r, At.XYZ) : void 0 }, e.prototype.readEnvelope_ = function(t, e) { var r = js([null], this.ENVELOPE_PARSERS_, t, e, this); return ut(r[1][0], r[1][1], r[2][0], r[2][1]) }, e.prototype.readFlatPos_ = function(t, e) { for (var r, n = ws(t, !1), i = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, o = []; r = i.exec(n);) o.push(parseFloat(r[1])), n = n.substr(r[0].length); if ("" === n) { var a = e[0].srsName,
                            s = "enu"; if (a) s = we(a).getAxisOrientation(); if ("neu" === s) { var u, l = void 0; for (l = 0, u = o.length; l < u; l += 3) { var h = o[l],
                                    c = o[l + 1];
                                o[l] = c, o[l + 1] = h } } var p = o.length; if (2 == p && o.push(0), 0 !== p) return o } }, e.prototype.readFlatPosList_ = function(t, e) { var r = ws(t, !1).replace(/^\s*|\s*$/g, ""),
                        n = e[0],
                        i = n.srsName,
                        o = n.srsDimension,
                        a = "enu";
                    i && (a = we(i).getAxisOrientation()); var s, u, l, h = r.split(/\s+/),
                        c = 2;
                    t.getAttribute("srsDimension") ? c = kd(t.getAttribute("srsDimension")) : t.getAttribute("dimension") ? c = kd(t.getAttribute("dimension")) : t.parentNode.getAttribute("srsDimension") ? c = kd(t.parentNode.getAttribute("srsDimension")) : o && (c = kd(o)); for (var p = [], f = 0, d = h.length; f < d; f += c) s = parseFloat(h[f]), u = parseFloat(h[f + 1]), l = 3 === c ? parseFloat(h[f + 2]) : 0, "en" === a.substr(0, 2) ? p.push(s, u, l) : p.push(u, s, l); return p }, e.prototype.writePos_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = i ? "3" : "2";
                    t.setAttribute("srsDimension", o); var a = n.srsName,
                        s = "enu";
                    a && (s = we(a).getAxisOrientation()); var u, l = e.getCoordinates();
                    (u = "en" === s.substr(0, 2) ? l[0] + " " + l[1] : l[1] + " " + l[0], i) && (u += " " + (l[2] || 0));
                    Xd(t, u) }, e.prototype.getCoords_ = function(t, e, r) { var n = "enu";
                    e && (n = we(e).getAxisOrientation()); var i = "en" === n.substr(0, 2) ? t[0] + " " + t[1] : t[1] + " " + t[0];
                    r && (i += " " + (t[2] || 0)); return i }, e.prototype.writePosList_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = i ? "3" : "2";
                    t.setAttribute("srsDimension", o); for (var a, s = n.srsName, u = e.getCoordinates(), l = u.length, h = new Array(l), c = 0; c < l; ++c) a = u[c], h[c] = this.getCoords_(a, s, i);
                    Xd(t, h.join(" ")) }, e.prototype.writePoint_ = function(t, e, r) { var n = r[r.length - 1].srsName;
                    n && t.setAttribute("srsName", n); var i = Ss(t.namespaceURI, "pos");
                    t.appendChild(i), this.writePos_(i, e, r) }, e.prototype.writeEnvelope = function(t, e, r) { var n = r[r.length - 1].srsName;
                    n && t.setAttribute("srsName", n); var i = [e[0] + " " + e[1], e[2] + " " + e[3]];
                    Us({ node: t }, this.ENVELOPE_SERIALIZERS_, As, i, r, ["lowerCorner", "upperCorner"], this) }, e.prototype.writeLinearRing_ = function(t, e, r) { var n = r[r.length - 1].srsName;
                    n && t.setAttribute("srsName", n); var i = Ss(t.namespaceURI, "posList");
                    t.appendChild(i), this.writePosList_(i, e, r) }, e.prototype.RING_NODE_FACTORY_ = function(t, e, r) { var n = e[e.length - 1],
                        i = n.node,
                        o = n.exteriorWritten; return void 0 === o && (n.exteriorWritten = !0), Ss(i.namespaceURI, void 0 !== o ? "interior" : "exterior") }, e.prototype.writeSurfaceOrPolygon_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName; if ("PolygonPatch" !== t.nodeName && o && t.setAttribute("srsName", o), "Polygon" === t.nodeName || "PolygonPatch" === t.nodeName) { var a = e.getLinearRings();
                        Us({ node: t, hasZ: i, srsName: o }, this.RING_SERIALIZERS_, this.RING_NODE_FACTORY_, a, r, void 0, this) } else if ("Surface" === t.nodeName) { var s = Ss(t.namespaceURI, "patches");
                        t.appendChild(s), this.writeSurfacePatches_(s, e, r) } }, e.prototype.writeCurveOrLineString_ = function(t, e, r) { var n = r[r.length - 1].srsName; if ("LineStringSegment" !== t.nodeName && n && t.setAttribute("srsName", n), "LineString" === t.nodeName || "LineStringSegment" === t.nodeName) { var i = Ss(t.namespaceURI, "posList");
                        t.appendChild(i), this.writePosList_(i, e, r) } else if ("Curve" === t.nodeName) { var o = Ss(t.namespaceURI, "segments");
                        t.appendChild(o), this.writeCurveSegments_(o, e, r) } }, e.prototype.writeMultiSurfaceOrPolygon_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName,
                        a = n.surface;
                    o && t.setAttribute("srsName", o); var s = e.getPolygons();
                    Us({ node: t, hasZ: i, srsName: o, surface: a }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, s, r, void 0, this) }, e.prototype.writeMultiPoint_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.srsName,
                        o = n.hasZ;
                    i && t.setAttribute("srsName", i); var a = e.getPoints();
                    Us({ node: t, hasZ: o, srsName: i }, this.POINTMEMBER_SERIALIZERS_, Fs("pointMember"), a, r, void 0, this) }, e.prototype.writeMultiCurveOrLineString_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName,
                        a = n.curve;
                    o && t.setAttribute("srsName", o); var s = e.getLineStrings();
                    Us({ node: t, hasZ: i, srsName: o, curve: a }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, s, r, void 0, this) }, e.prototype.writeRing_ = function(t, e, r) { var n = Ss(t.namespaceURI, "LinearRing");
                    t.appendChild(n), this.writeLinearRing_(n, e, r) }, e.prototype.writeSurfaceOrPolygonMember_ = function(t, e, r) { var n = this.GEOMETRY_NODE_FACTORY_(e, r);
                    n && (t.appendChild(n), this.writeSurfaceOrPolygon_(n, e, r)) }, e.prototype.writePointMember_ = function(t, e, r) { var n = Ss(t.namespaceURI, "Point");
                    t.appendChild(n), this.writePoint_(n, e, r) }, e.prototype.writeLineStringOrCurveMember_ = function(t, e, r) { var n = this.GEOMETRY_NODE_FACTORY_(e, r);
                    n && (t.appendChild(n), this.writeCurveOrLineString_(n, e, r)) }, e.prototype.writeSurfacePatches_ = function(t, e, r) { var n = Ss(t.namespaceURI, "PolygonPatch");
                    t.appendChild(n), this.writeSurfaceOrPolygon_(n, e, r) }, e.prototype.writeCurveSegments_ = function(t, e, r) { var n = Ss(t.namespaceURI, "LineStringSegment");
                    t.appendChild(n), this.writeCurveOrLineString_(n, e, r) }, e.prototype.writeGeometryElement = function(t, e, r) { var n, i = r[r.length - 1],
                        o = p({}, i);
                    o.node = t, n = Array.isArray(e) ? dd(e, i) : fd(e, !0, i), Us(o, this.GEOMETRY_SERIALIZERS_, this.GEOMETRY_NODE_FACTORY_, [n], r, void 0, this) }, e.prototype.writeFeatureElement = function(t, e, r) { var n = e.getId();
                    n && t.setAttribute("fid", n); var i = r[r.length - 1],
                        o = i.featureNS,
                        a = e.getGeometryName();
                    i.serializers || (i.serializers = {}, i.serializers[o] = {}); var s = e.getProperties(),
                        u = [],
                        l = []; for (var h in s) { var c = s[h];
                        null !== c && (u.push(h), l.push(c), h == a || "function" == typeof c.getSimplifiedGeometry ? h in i.serializers[o] || (i.serializers[o][h] = Ls(this.writeGeometryElement, this)) : h in i.serializers[o] || (i.serializers[o][h] = Ls(Xd))) } var f = p({}, i);
                    f.node = t, Us(f, i.serializers, Fs(void 0, o), l, r, u) }, e.prototype.writeFeatureMembers_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.featureType,
                        o = n.featureNS,
                        a = {};
                    a[o] = {}, a[o][i] = Ls(this.writeFeatureElement, this); var s = p({}, n);
                    s.node = t, Us(s, a, Fs(i, o), e, r) }, e.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_ = function(t, e, r) { var n = e[e.length - 1].node; return Ss(this.namespace, Zd[n.nodeName]) }, e.prototype.GEOMETRY_NODE_FACTORY_ = function(t, e, r) { var n, i = e[e.length - 1],
                        o = i.multiSurface,
                        a = i.surface,
                        s = i.curve,
                        u = i.multiCurve; return Array.isArray(t) ? n = "Envelope" : "MultiPolygon" === (n = t.getType()) && !0 === o ? n = "MultiSurface" : "Polygon" === n && !0 === a ? n = "Surface" : "LineString" === n && !0 === s ? n = "Curve" : "MultiLineString" === n && !0 === u && (n = "MultiCurve"), Ss(this.namespace, n) }, e.prototype.writeGeometryNode = function(t, e) { e = this.adaptOptions(e); var r = Ss(this.namespace, "geom"),
                        n = { node: r, hasZ: this.hasZ, srsName: this.srsName, curve: this.curve_, surface: this.surface_, multiSurface: this.multiSurface_, multiCurve: this.multiCurve_ }; return e && p(n, e), this.writeGeometryElement(r, t, [n]), r }, e.prototype.writeFeaturesNode = function(t, e) { e = this.adaptOptions(e); var r = Ss(this.namespace, "featureMembers");
                    r.setAttributeNS(Ts, "xsi:schemaLocation", this.schemaLocation); var n = { srsName: this.srsName, hasZ: this.hasZ, curve: this.curve_, surface: this.surface_, multiSurface: this.multiSurface_, multiCurve: this.multiCurve_, featureNS: this.featureNS, featureType: this.featureType }; return e && p(n, e), this.writeFeatureMembers_(r, t, [n]), r }, e }(Md);
        Kd.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": { pos: Ps(Kd.prototype.readFlatPos_), posList: Ps(Kd.prototype.readFlatPosList_) } }, Kd.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": { interior: Kd.prototype.interiorParser_, exterior: Kd.prototype.exteriorParser_ } }, Kd.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": { Point: Ps(Md.prototype.readPoint), MultiPoint: Ps(Md.prototype.readMultiPoint), LineString: Ps(Md.prototype.readLineString), MultiLineString: Ps(Md.prototype.readMultiLineString), LinearRing: Ps(Md.prototype.readLinearRing), Polygon: Ps(Md.prototype.readPolygon), MultiPolygon: Ps(Md.prototype.readMultiPolygon), Surface: Ps(Kd.prototype.readSurface_), MultiSurface: Ps(Kd.prototype.readMultiSurface_), Curve: Ps(Kd.prototype.readCurve_), MultiCurve: Ps(Kd.prototype.readMultiCurve_), Envelope: Ps(Kd.prototype.readEnvelope_) } }, Kd.prototype.MULTICURVE_PARSERS_ = { "http://www.opengis.net/gml": { curveMember: Cs(Kd.prototype.curveMemberParser_), curveMembers: Cs(Kd.prototype.curveMemberParser_) } }, Kd.prototype.MULTISURFACE_PARSERS_ = { "http://www.opengis.net/gml": { surfaceMember: Cs(Kd.prototype.surfaceMemberParser_), surfaceMembers: Cs(Kd.prototype.surfaceMemberParser_) } }, Kd.prototype.CURVEMEMBER_PARSERS_ = { "http://www.opengis.net/gml": { LineString: Cs(Md.prototype.readLineString), Curve: Cs(Kd.prototype.readCurve_) } }, Kd.prototype.SURFACEMEMBER_PARSERS_ = { "http://www.opengis.net/gml": { Polygon: Cs(Md.prototype.readPolygon), Surface: Cs(Kd.prototype.readSurface_) } }, Kd.prototype.SURFACE_PARSERS_ = { "http://www.opengis.net/gml": { patches: Ps(Kd.prototype.readPatch_) } }, Kd.prototype.CURVE_PARSERS_ = { "http://www.opengis.net/gml": { segments: Ps(Kd.prototype.readSegment_) } }, Kd.prototype.ENVELOPE_PARSERS_ = { "http://www.opengis.net/gml": { lowerCorner: Cs(Kd.prototype.readFlatPosList_), upperCorner: Cs(Kd.prototype.readFlatPosList_) } }, Kd.prototype.PATCHES_PARSERS_ = { "http://www.opengis.net/gml": { PolygonPatch: Ps(Kd.prototype.readPolygonPatch_) } }, Kd.prototype.SEGMENTS_PARSERS_ = { "http://www.opengis.net/gml": { LineStringSegment: Ps(Kd.prototype.readLineStringSegment_) } }, Kd.prototype.writeFeatures, Kd.prototype.RING_SERIALIZERS_ = { "http://www.opengis.net/gml": { exterior: Ls(Kd.prototype.writeRing_), interior: Ls(Kd.prototype.writeRing_) } }, Kd.prototype.ENVELOPE_SERIALIZERS_ = { "http://www.opengis.net/gml": { lowerCorner: Ls(Xd), upperCorner: Ls(Xd) } }, Kd.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { surfaceMember: Ls(Kd.prototype.writeSurfaceOrPolygonMember_), polygonMember: Ls(Kd.prototype.writeSurfaceOrPolygonMember_) } }, Kd.prototype.POINTMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { pointMember: Ls(Kd.prototype.writePointMember_) } }, Kd.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { lineStringMember: Ls(Kd.prototype.writeLineStringOrCurveMember_), curveMember: Ls(Kd.prototype.writeLineStringOrCurveMember_) } }, Kd.prototype.GEOMETRY_SERIALIZERS_ = { "http://www.opengis.net/gml": { Curve: Ls(Kd.prototype.writeCurveOrLineString_), MultiCurve: Ls(Kd.prototype.writeMultiCurveOrLineString_), Point: Ls(Kd.prototype.writePoint_), MultiPoint: Ls(Kd.prototype.writeMultiPoint_), LineString: Ls(Kd.prototype.writeCurveOrLineString_), MultiLineString: Ls(Kd.prototype.writeMultiCurveOrLineString_), LinearRing: Ls(Kd.prototype.writeLinearRing_), Polygon: Ls(Kd.prototype.writeSurfaceOrPolygon_), MultiPolygon: Ls(Kd.prototype.writeMultiSurfaceOrPolygon_), Surface: Ls(Kd.prototype.writeSurfaceOrPolygon_), MultiSurface: Ls(Kd.prototype.writeMultiSurfaceOrPolygon_), Envelope: Ls(Kd.prototype.writeEnvelope) } }; var Hd = Kd,
            qd = Hd;
        qd.prototype.writeFeatures, qd.prototype.writeFeaturesNode; var Jd = qd,
            Qd = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            $d = Id + " http://schemas.opengis.net/gml/2.1.2/feature.xsd",
            t_ = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" },
            e_ = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).FEATURE_COLLECTION_PARSERS[Id].featureMember = Cs(r.readFeaturesInternal), r.schemaLocation = n.schemaLocation ? n.schemaLocation : $d, r } return Qd(e, t), e.prototype.readFlatCoordinates_ = function(t, e) { var r = ws(t, !1).replace(/^\s*|\s*$/g, ""),
                        n = e[0].srsName,
                        i = "enu"; if (n) { var o = we(n);
                        o && (i = o.getAxisOrientation()) } for (var a = r.trim().split(/\s+/), s = [], u = 0, l = a.length; u < l; u++) { var h = a[u].split(/,+/),
                            c = parseFloat(h[0]),
                            p = parseFloat(h[1]),
                            f = 3 === h.length ? parseFloat(h[2]) : 0; "en" === i.substr(0, 2) ? s.push(c, p, f) : s.push(p, c, f) } return s }, e.prototype.readBox_ = function(t, e) { var r = js([null], this.BOX_PARSERS_, t, e, this); return ut(r[1][0], r[1][1], r[1][3], r[1][4]) }, e.prototype.innerBoundaryIsParser_ = function(t, e) { var r = js(void 0, this.RING_PARSERS, t, e, this);
                    r && e[e.length - 1].push(r) }, e.prototype.outerBoundaryIsParser_ = function(t, e) { var r = js(void 0, this.RING_PARSERS, t, e, this);
                    r && (e[e.length - 1][0] = r) }, e.prototype.GEOMETRY_NODE_FACTORY_ = function(t, e, r) { var n, i = e[e.length - 1],
                        o = i.multiSurface,
                        a = i.surface,
                        s = i.multiCurve; return Array.isArray(t) ? n = "Envelope" : "MultiPolygon" === (n = t.getType()) && !0 === o ? n = "MultiSurface" : "Polygon" === n && !0 === a ? n = "Surface" : "MultiLineString" === n && !0 === s && (n = "MultiCurve"), Ss("http://www.opengis.net/gml", n) }, e.prototype.writeFeatureElement = function(t, e, r) { var n = e.getId();
                    n && t.setAttribute("fid", n); var i = r[r.length - 1],
                        o = i.featureNS,
                        a = e.getGeometryName();
                    i.serializers || (i.serializers = {}, i.serializers[o] = {}); var s = e.getProperties(),
                        u = [],
                        l = []; for (var h in s) { var c = s[h];
                        null !== c && (u.push(h), l.push(c), h == a || "function" == typeof c.getSimplifiedGeometry ? h in i.serializers[o] || (i.serializers[o][h] = Ls(this.writeGeometryElement, this)) : h in i.serializers[o] || (i.serializers[o][h] = Ls(Xd))) } var f = p({}, i);
                    f.node = t, Us(f, i.serializers, Fs(void 0, o), l, r, u) }, e.prototype.writeCurveOrLineString_ = function(t, e, r) { var n = r[r.length - 1].srsName; if ("LineStringSegment" !== t.nodeName && n && t.setAttribute("srsName", n), "LineString" === t.nodeName || "LineStringSegment" === t.nodeName) { var i = this.createCoordinatesNode_(t.namespaceURI);
                        t.appendChild(i), this.writeCoordinates_(i, e, r) } else if ("Curve" === t.nodeName) { var o = Ss(t.namespaceURI, "segments");
                        t.appendChild(o), this.writeCurveSegments_(o, e, r) } }, e.prototype.writeLineStringOrCurveMember_ = function(t, e, r) { var n = this.GEOMETRY_NODE_FACTORY_(e, r);
                    n && (t.appendChild(n), this.writeCurveOrLineString_(n, e, r)) }, e.prototype.writeMultiCurveOrLineString_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName,
                        a = n.curve;
                    o && t.setAttribute("srsName", o); var s = e.getLineStrings();
                    Us({ node: t, hasZ: i, srsName: o, curve: a }, this.LINESTRINGORCURVEMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, s, r, void 0, this) }, e.prototype.writeGeometryElement = function(t, e, r) { var n, i = r[r.length - 1],
                        o = p({}, i);
                    o.node = t, n = Array.isArray(e) ? dd(e, i) : fd(e, !0, i), Us(o, this.GEOMETRY_SERIALIZERS_, this.GEOMETRY_NODE_FACTORY_, [n], r, void 0, this) }, e.prototype.createCoordinatesNode_ = function(t) { var e = Ss(t, "coordinates"); return e.setAttribute("decimal", "."), e.setAttribute("cs", ","), e.setAttribute("ts", " "), e }, e.prototype.writeCoordinates_ = function(t, e, r) { for (var n = r[r.length - 1], i = n.hasZ, o = n.srsName, a = e.getCoordinates(), s = a.length, u = new Array(s), l = 0; l < s; ++l) { var h = a[l];
                        u[l] = this.getCoords_(h, o, i) }
                    Xd(t, u.join(" ")) }, e.prototype.writeCurveSegments_ = function(t, e, r) { var n = Ss(t.namespaceURI, "LineStringSegment");
                    t.appendChild(n), this.writeCurveOrLineString_(n, e, r) }, e.prototype.writeSurfaceOrPolygon_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName; if ("PolygonPatch" !== t.nodeName && o && t.setAttribute("srsName", o), "Polygon" === t.nodeName || "PolygonPatch" === t.nodeName) { var a = e.getLinearRings();
                        Us({ node: t, hasZ: i, srsName: o }, this.RING_SERIALIZERS_, this.RING_NODE_FACTORY_, a, r, void 0, this) } else if ("Surface" === t.nodeName) { var s = Ss(t.namespaceURI, "patches");
                        t.appendChild(s), this.writeSurfacePatches_(s, e, r) } }, e.prototype.RING_NODE_FACTORY_ = function(t, e, r) { var n = e[e.length - 1],
                        i = n.node,
                        o = n.exteriorWritten; return void 0 === o && (n.exteriorWritten = !0), Ss(i.namespaceURI, void 0 !== o ? "innerBoundaryIs" : "outerBoundaryIs") }, e.prototype.writeSurfacePatches_ = function(t, e, r) { var n = Ss(t.namespaceURI, "PolygonPatch");
                    t.appendChild(n), this.writeSurfaceOrPolygon_(n, e, r) }, e.prototype.writeRing_ = function(t, e, r) { var n = Ss(t.namespaceURI, "LinearRing");
                    t.appendChild(n), this.writeLinearRing_(n, e, r) }, e.prototype.getCoords_ = function(t, e, r) { var n = "enu";
                    e && (n = we(e).getAxisOrientation()); var i = "en" === n.substr(0, 2) ? t[0] + "," + t[1] : t[1] + "," + t[0];
                    r && (i += "," + (t[2] || 0)); return i }, e.prototype.writePoint_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName;
                    o && t.setAttribute("srsName", o); var a = this.createCoordinatesNode_(t.namespaceURI);
                    t.appendChild(a); var s = e.getCoordinates();
                    Xd(a, this.getCoords_(s, o, i)) }, e.prototype.writeMultiPoint_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName;
                    o && t.setAttribute("srsName", o); var a = e.getPoints();
                    Us({ node: t, hasZ: i, srsName: o }, this.POINTMEMBER_SERIALIZERS_, Fs("pointMember"), a, r, void 0, this) }, e.prototype.writePointMember_ = function(t, e, r) { var n = Ss(t.namespaceURI, "Point");
                    t.appendChild(n), this.writePoint_(n, e, r) }, e.prototype.writeLinearRing_ = function(t, e, r) { var n = r[r.length - 1].srsName;
                    n && t.setAttribute("srsName", n); var i = this.createCoordinatesNode_(t.namespaceURI);
                    t.appendChild(i), this.writeCoordinates_(i, e, r) }, e.prototype.writeMultiSurfaceOrPolygon_ = function(t, e, r) { var n = r[r.length - 1],
                        i = n.hasZ,
                        o = n.srsName,
                        a = n.surface;
                    o && t.setAttribute("srsName", o); var s = e.getPolygons();
                    Us({ node: t, hasZ: i, srsName: o, surface: a }, this.SURFACEORPOLYGONMEMBER_SERIALIZERS_, this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_, s, r, void 0, this) }, e.prototype.writeSurfaceOrPolygonMember_ = function(t, e, r) { var n = this.GEOMETRY_NODE_FACTORY_(e, r);
                    n && (t.appendChild(n), this.writeSurfaceOrPolygon_(n, e, r)) }, e.prototype.writeEnvelope = function(t, e, r) { var n = r[r.length - 1].srsName;
                    n && t.setAttribute("srsName", n); var i = [e[0] + " " + e[1], e[2] + " " + e[3]];
                    Us({ node: t }, this.ENVELOPE_SERIALIZERS_, As, i, r, ["lowerCorner", "upperCorner"], this) }, e.prototype.MULTIGEOMETRY_MEMBER_NODE_FACTORY_ = function(t, e, r) { var n = e[e.length - 1].node; return Ss("http://www.opengis.net/gml", t_[n.nodeName]) }, e }(Md);
        e_.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml": { coordinates: Ps(e_.prototype.readFlatCoordinates_) } }, e_.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml": { innerBoundaryIs: e_.prototype.innerBoundaryIsParser_, outerBoundaryIs: e_.prototype.outerBoundaryIsParser_ } }, e_.prototype.BOX_PARSERS_ = { "http://www.opengis.net/gml": { coordinates: Cs(e_.prototype.readFlatCoordinates_) } }, e_.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml": { Point: Ps(Md.prototype.readPoint), MultiPoint: Ps(Md.prototype.readMultiPoint), LineString: Ps(Md.prototype.readLineString), MultiLineString: Ps(Md.prototype.readMultiLineString), LinearRing: Ps(Md.prototype.readLinearRing), Polygon: Ps(Md.prototype.readPolygon), MultiPolygon: Ps(Md.prototype.readMultiPolygon), Box: Ps(e_.prototype.readBox_) } }, e_.prototype.GEOMETRY_SERIALIZERS_ = { "http://www.opengis.net/gml": { Curve: Ls(e_.prototype.writeCurveOrLineString_), MultiCurve: Ls(e_.prototype.writeMultiCurveOrLineString_), Point: Ls(e_.prototype.writePoint_), MultiPoint: Ls(e_.prototype.writeMultiPoint_), LineString: Ls(e_.prototype.writeCurveOrLineString_), MultiLineString: Ls(e_.prototype.writeMultiCurveOrLineString_), LinearRing: Ls(e_.prototype.writeLinearRing_), Polygon: Ls(e_.prototype.writeSurfaceOrPolygon_), MultiPolygon: Ls(e_.prototype.writeMultiSurfaceOrPolygon_), Surface: Ls(e_.prototype.writeSurfaceOrPolygon_), MultiSurface: Ls(e_.prototype.writeMultiSurfaceOrPolygon_), Envelope: Ls(e_.prototype.writeEnvelope) } }, e_.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { lineStringMember: Ls(e_.prototype.writeLineStringOrCurveMember_), curveMember: Ls(e_.prototype.writeLineStringOrCurveMember_) } }, e_.prototype.RING_SERIALIZERS_ = { "http://www.opengis.net/gml": { outerBoundaryIs: Ls(e_.prototype.writeRing_), innerBoundaryIs: Ls(e_.prototype.writeRing_) } }, e_.prototype.POINTMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { pointMember: Ls(e_.prototype.writePointMember_) } }, e_.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml": { surfaceMember: Ls(e_.prototype.writeSurfaceOrPolygonMember_), polygonMember: Ls(e_.prototype.writeSurfaceOrPolygonMember_) } }, e_.prototype.ENVELOPE_SERIALIZERS_ = { "http://www.opengis.net/gml": { lowerCorner: Ls(Xd), upperCorner: Ls(Xd) } }; var r_ = e_,
            n_ = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            i_ = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this, n) || this).schemaLocation = n.schemaLocation ? n.schemaLocation : r.namespace + " http://schemas.opengis.net/gml/3.2.1/gml.xsd", r } return n_(e, t), e }(Hd);
        i_.prototype.namespace = "http://www.opengis.net/gml/3.2", i_.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS = { "http://www.opengis.net/gml/3.2": { pos: Ps(Hd.prototype.readFlatPos_), posList: Ps(Hd.prototype.readFlatPosList_) } }, i_.prototype.FLAT_LINEAR_RINGS_PARSERS = { "http://www.opengis.net/gml/3.2": { interior: Hd.prototype.interiorParser_, exterior: Hd.prototype.exteriorParser_ } }, i_.prototype.GEOMETRY_PARSERS = { "http://www.opengis.net/gml/3.2": { Point: Ps(Md.prototype.readPoint), MultiPoint: Ps(Md.prototype.readMultiPoint), LineString: Ps(Md.prototype.readLineString), MultiLineString: Ps(Md.prototype.readMultiLineString), LinearRing: Ps(Md.prototype.readLinearRing), Polygon: Ps(Md.prototype.readPolygon), MultiPolygon: Ps(Md.prototype.readMultiPolygon), Surface: Ps(i_.prototype.readSurface_), MultiSurface: Ps(Hd.prototype.readMultiSurface_), Curve: Ps(i_.prototype.readCurve_), MultiCurve: Ps(Hd.prototype.readMultiCurve_), Envelope: Ps(i_.prototype.readEnvelope_) } }, i_.prototype.MULTICURVE_PARSERS_ = { "http://www.opengis.net/gml/3.2": { curveMember: Cs(Hd.prototype.curveMemberParser_), curveMembers: Cs(Hd.prototype.curveMemberParser_) } }, i_.prototype.MULTISURFACE_PARSERS_ = { "http://www.opengis.net/gml/3.2": { surfaceMember: Cs(Hd.prototype.surfaceMemberParser_), surfaceMembers: Cs(Hd.prototype.surfaceMemberParser_) } }, i_.prototype.CURVEMEMBER_PARSERS_ = { "http://www.opengis.net/gml/3.2": { LineString: Cs(Md.prototype.readLineString), Curve: Cs(Hd.prototype.readCurve_) } }, i_.prototype.SURFACEMEMBER_PARSERS_ = { "http://www.opengis.net/gml/3.2": { Polygon: Cs(Md.prototype.readPolygon), Surface: Cs(Hd.prototype.readSurface_) } }, i_.prototype.SURFACE_PARSERS_ = { "http://www.opengis.net/gml/3.2": { patches: Ps(Hd.prototype.readPatch_) } }, i_.prototype.CURVE_PARSERS_ = { "http://www.opengis.net/gml/3.2": { segments: Ps(Hd.prototype.readSegment_) } }, i_.prototype.ENVELOPE_PARSERS_ = { "http://www.opengis.net/gml/3.2": { lowerCorner: Cs(Hd.prototype.readFlatPosList_), upperCorner: Cs(Hd.prototype.readFlatPosList_) } }, i_.prototype.PATCHES_PARSERS_ = { "http://www.opengis.net/gml/3.2": { PolygonPatch: Ps(Hd.prototype.readPolygonPatch_) } }, i_.prototype.SEGMENTS_PARSERS_ = { "http://www.opengis.net/gml/3.2": { LineStringSegment: Ps(Hd.prototype.readLineStringSegment_) } }, i_.prototype.MULTIPOINT_PARSERS_ = { "http://www.opengis.net/gml/3.2": { pointMember: Cs(Md.prototype.pointMemberParser_), pointMembers: Cs(Md.prototype.pointMemberParser_) } }, i_.prototype.MULTILINESTRING_PARSERS_ = { "http://www.opengis.net/gml/3.2": { lineStringMember: Cs(Md.prototype.lineStringMemberParser_), lineStringMembers: Cs(Md.prototype.lineStringMemberParser_) } }, i_.prototype.MULTIPOLYGON_PARSERS_ = { "http://www.opengis.net/gml/3.2": { polygonMember: Cs(Md.prototype.polygonMemberParser_), polygonMembers: Cs(Md.prototype.polygonMemberParser_) } }, i_.prototype.POINTMEMBER_PARSERS_ = { "http://www.opengis.net/gml/3.2": { Point: Cs(Md.prototype.readFlatCoordinatesFromNode_) } }, i_.prototype.LINESTRINGMEMBER_PARSERS_ = { "http://www.opengis.net/gml/3.2": { LineString: Cs(Md.prototype.readLineString) } }, i_.prototype.POLYGONMEMBER_PARSERS_ = { "http://www.opengis.net/gml/3.2": { Polygon: Cs(Md.prototype.readPolygon) } }, i_.prototype.RING_PARSERS = { "http://www.opengis.net/gml/3.2": { LinearRing: Ps(Md.prototype.readFlatLinearRing_) } }, i_.prototype.RING_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { exterior: Ls(Hd.prototype.writeRing_), interior: Ls(Hd.prototype.writeRing_) } }, i_.prototype.ENVELOPE_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { lowerCorner: Ls(Xd), upperCorner: Ls(Xd) } }, i_.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { surfaceMember: Ls(Hd.prototype.writeSurfaceOrPolygonMember_), polygonMember: Ls(Hd.prototype.writeSurfaceOrPolygonMember_) } }, i_.prototype.POINTMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { pointMember: Ls(Hd.prototype.writePointMember_) } }, i_.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { lineStringMember: Ls(Hd.prototype.writeLineStringOrCurveMember_), curveMember: Ls(Hd.prototype.writeLineStringOrCurveMember_) } }, i_.prototype.GEOMETRY_SERIALIZERS_ = { "http://www.opengis.net/gml/3.2": { Curve: Ls(Hd.prototype.writeCurveOrLineString_), MultiCurve: Ls(Hd.prototype.writeMultiCurveOrLineString_), Point: Ls(i_.prototype.writePoint_), MultiPoint: Ls(Hd.prototype.writeMultiPoint_), LineString: Ls(Hd.prototype.writeCurveOrLineString_), MultiLineString: Ls(Hd.prototype.writeMultiCurveOrLineString_), LinearRing: Ls(Hd.prototype.writeLinearRing_), Polygon: Ls(Hd.prototype.writeSurfaceOrPolygon_), MultiPolygon: Ls(Hd.prototype.writeMultiSurfaceOrPolygon_), Surface: Ls(Hd.prototype.writeSurfaceOrPolygon_), MultiSurface: Ls(Hd.prototype.writeMultiSurfaceOrPolygon_), Envelope: Ls(Hd.prototype.writeEnvelope) } }; var o_ = i_,
            a_ = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            s_ = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"],
            u_ = { rte: G_, trk: D_, wpt: j_ },
            l_ = Gs(s_, { rte: Cs(G_), trk: Cs(D_), wpt: Cs(j_) }),
            h_ = Gs(s_, { text: bs(Ud, "linkText"), type: bs(Ud, "linkType") }),
            c_ = Gs(s_, { rte: Ls(function(t, e, r) { var n = r[0],
                        i = e.getProperties(),
                        o = { node: t };
                    o.properties = i; var a = e.getGeometry(); if (a.getType() == Nt.LINE_STRING) { var s = fd(a, !0, n);
                        o.geometryLayout = s.getLayout(), i.rtept = s.getCoordinates() } var u = r[r.length - 1].node,
                        l = T_[u.namespaceURI],
                        h = Ns(i, l);
                    Us(o, S_, As, h, r, l) }), trk: Ls(function(t, e, r) { var n = r[0],
                        i = e.getProperties(),
                        o = { node: t };
                    o.properties = i; var a = e.getGeometry(); if (a.getType() == Nt.MULTI_LINE_STRING) { var s = fd(a, !0, n);
                        i.trkseg = s.getLineStrings() } var u = r[r.length - 1].node,
                        l = x_[u.namespaceURI],
                        h = Ns(i, l);
                    Us(o, O_, As, h, r, l) }), wpt: Ls(function(t, e, r) { var n = r[0],
                        i = r[r.length - 1];
                    i.properties = e.getProperties(); var o = e.getGeometry(); if (o.getType() == Nt.POINT) { var a = fd(o, !0, n);
                        i.geometryLayout = a.getLayout(), U_(t, a.getCoordinates(), r) } }) }),
            p_ = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.dataProjection = we("EPSG:4326"), r.readExtensions_ = n.readExtensions, r } return a_(e, t), e.prototype.handleReadExtensions_ = function(t) { t || (t = []); for (var e = 0, r = t.length; e < r; ++e) { var n = t[e]; if (this.readExtensions_) { var i = n.get("extensionsNode_") || null;
                            this.readExtensions_(n, i) }
                        n.set("extensionsNode_", void 0) } }, e.prototype.readFeatureFromNode = function(t, e) { if (!T(s_, t.namespaceURI)) return null; var r = u_[t.localName]; if (!r) return null; var n = r(t, [this.getReadOptions(t, e)]); return n ? (this.handleReadExtensions_([n]), n) : null }, e.prototype.readFeaturesFromNode = function(t, e) { if (!T(s_, t.namespaceURI)) return []; if ("gpx" == t.localName) { var r = js([], l_, t, [this.getReadOptions(t, e)]); return r ? (this.handleReadExtensions_(r), r) : [] } return [] }, e.prototype.writeFeaturesNode = function(t, e) { e = this.adaptOptions(e); var r = Ss("http://www.topografix.com/GPX/1/1", "gpx"); return r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", Ts), r.setAttributeNS(Ts, "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"), r.setAttribute("version", "1.1"), r.setAttribute("creator", "OpenLayers"), Us({ node: r }, c_, L_, t, [e]), r }, e }(Cd),
            f_ = Gs(s_, { name: bs(Ud), cmt: bs(Ud), desc: bs(Ud), src: bs(Ud), link: A_, number: bs(jd), extensions: N_, type: bs(Ud), rtept: function(t, e) { var r = js({}, d_, t, e); if (r) { var n = e[e.length - 1],
                            i = n.flatCoordinates,
                            o = n.layoutOptions;
                        M_(i, o, t, r) } } }),
            d_ = Gs(s_, { ele: bs(Gd), time: bs(Nd) }),
            __ = Gs(s_, { name: bs(Ud), cmt: bs(Ud), desc: bs(Ud), src: bs(Ud), link: A_, number: bs(jd), type: bs(Ud), extensions: N_, trkseg: function(t, e) { var r = e[e.length - 1];
                    Ds(g_, t, e); var n = r.flatCoordinates;
                    r.ends.push(n.length) } }),
            g_ = Gs(s_, { trkpt: function(t, e) { var r = js({}, y_, t, e); if (r) { var n = e[e.length - 1],
                            i = n.flatCoordinates,
                            o = n.layoutOptions;
                        M_(i, o, t, r) } } }),
            y_ = Gs(s_, { ele: bs(Gd), time: bs(Nd) }),
            v_ = Gs(s_, { ele: bs(Gd), time: bs(Nd), magvar: bs(Gd), geoidheight: bs(Gd), name: bs(Ud), cmt: bs(Ud), desc: bs(Ud), src: bs(Ud), link: A_, sym: bs(Ud), type: bs(Ud), fix: bs(Ud), sat: bs(jd), hdop: bs(Gd), vdop: bs(Gd), pdop: bs(Gd), ageofdgpsdata: bs(Gd), dgpsid: bs(jd), extensions: N_ }),
            m_ = ["text", "type"],
            E_ = Gs(s_, { text: Ls(Xd), type: Ls(Xd) }),
            T_ = Gs(s_, ["name", "cmt", "desc", "src", "link", "number", "type", "rtept"]),
            S_ = Gs(s_, { name: Ls(Xd), cmt: Ls(Xd), desc: Ls(Xd), src: Ls(Xd), link: Ls(k_), number: Ls(zd), type: Ls(Xd), rtept: Ms(Ls(U_)) }),
            w_ = Gs(s_, ["ele", "time"]),
            x_ = Gs(s_, ["name", "cmt", "desc", "src", "link", "number", "type", "trkseg"]),
            O_ = Gs(s_, { name: Ls(Xd), cmt: Ls(Xd), desc: Ls(Xd), src: Ls(Xd), link: Ls(k_), number: Ls(zd), type: Ls(Xd), trkseg: Ms(Ls(function(t, e, r) { var n = { node: t };
                    n.geometryLayout = e.getLayout(), n.properties = {}, Us(n, C_, R_, e.getCoordinates(), r) })) }),
            R_ = Fs("trkpt"),
            C_ = Gs(s_, { trkpt: Ls(U_) }),
            P_ = Gs(s_, ["ele", "time", "magvar", "geoidheight", "name", "cmt", "desc", "src", "link", "sym", "type", "fix", "sat", "hdop", "vdop", "pdop", "ageofdgpsdata", "dgpsid"]),
            I_ = Gs(s_, { ele: Ls(Yd), time: Ls(function(t, e) { var r = new Date(1e3 * e),
                        n = r.getUTCFullYear() + "-" + Yn(r.getUTCMonth() + 1, 2) + "-" + Yn(r.getUTCDate(), 2) + "T" + Yn(r.getUTCHours(), 2) + ":" + Yn(r.getUTCMinutes(), 2) + ":" + Yn(r.getUTCSeconds(), 2) + "Z";
                    t.appendChild(Es.createTextNode(n)) }), magvar: Ls(Yd), geoidheight: Ls(Yd), name: Ls(Xd), cmt: Ls(Xd), desc: Ls(Xd), src: Ls(Xd), link: Ls(k_), sym: Ls(Xd), type: Ls(Xd), fix: Ls(Xd), sat: Ls(zd), hdop: Ls(Yd), vdop: Ls(Yd), pdop: Ls(Yd), ageofdgpsdata: Ls(Yd), dgpsid: Ls(zd) }),
            b_ = { Point: "wpt", LineString: "rte", MultiLineString: "trk" };

        function L_(t, e, r) { var n = t.getGeometry(); if (n) { var i = b_[n.getType()]; if (i) return Ss(e[e.length - 1].node.namespaceURI, i) } }

        function M_(t, e, r, n) { return t.push(parseFloat(r.getAttribute("lon")), parseFloat(r.getAttribute("lat"))), "ele" in n ? (t.push(n.ele), delete n.ele, e.hasZ = !0) : t.push(0), "time" in n ? (t.push(n.time), delete n.time, e.hasM = !0) : t.push(0), t }

        function F_(t, e, r) { var n = At.XY,
                i = 2; if (t.hasZ && t.hasM ? (n = At.XYZM, i = 4) : t.hasZ ? (n = At.XYZ, i = 3) : t.hasM && (n = At.XYM, i = 3), 4 !== i) { for (var o = 0, a = e.length / 4; o < a; o++) e[o * i] = e[4 * o], e[o * i + 1] = e[4 * o + 1], t.hasZ && (e[o * i + 2] = e[4 * o + 2]), t.hasM && (e[o * i + 2] = e[4 * o + 3]); if (e.length = e.length / 4 * i, r)
                    for (o = 0, a = r.length; o < a; o++) r[o] = r[o] / 4 * i } return n }

        function A_(t, e) { var r = e[e.length - 1],
                n = t.getAttribute("href");
            null !== n && (r.link = n), Ds(h_, t, e) }

        function N_(t, e) { e[e.length - 1].extensionsNode_ = t }

        function G_(t, e) { var r = e[0],
                n = js({ flatCoordinates: [], layoutOptions: {} }, f_, t, e); if (n) { var i = n.flatCoordinates;
                delete n.flatCoordinates; var o = n.layoutOptions;
                delete n.layoutOptions; var a = F_(o, i),
                    s = new zp(i, a);
                fd(s, !1, r); var u = new q(s); return u.setProperties(n, !0), u } }

        function D_(t, e) { var r = e[0],
                n = js({ flatCoordinates: [], ends: [], layoutOptions: {} }, __, t, e); if (n) { var i = n.flatCoordinates;
                delete n.flatCoordinates; var o = n.ends;
                delete n.ends; var a = n.layoutOptions;
                delete n.layoutOptions; var s = F_(a, i, o),
                    u = new gf(i, s, o);
                fd(u, !1, r); var l = new q(u); return l.setProperties(n, !0), l } }

        function j_(t, e) { var r = e[0],
                n = js({}, v_, t, e); if (n) { var i = {},
                    o = M_([], i, t, n),
                    a = F_(i, o),
                    s = new Rr(o, a);
                fd(s, !1, r); var u = new q(s); return u.setProperties(n, !0), u } }

        function k_(t, e, r) { t.setAttribute("href", e); var n = r[r.length - 1].properties,
                i = [n.linkText, n.linkType];
            Us({ node: t }, E_, As, i, r, m_) }

        function U_(t, e, r) { var n = r[r.length - 1],
                i = n.node.namespaceURI,
                o = n.properties; switch (t.setAttributeNS(null, "lat", String(e[1])), t.setAttributeNS(null, "lon", String(e[0])), n.geometryLayout) {
                case At.XYZM:
                    0 !== e[3] && (o.time = e[3]);
                case At.XYZ:
                    0 !== e[2] && (o.ele = e[2]); break;
                case At.XYM:
                    0 !== e[2] && (o.time = e[2]) } var a = "rtept" == t.nodeName ? w_[i] : P_[i],
                s = Ns(o, a);
            Us({ node: t, properties: o }, I_, As, s, r, a) } var B_ = p_,
            Y_ = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function z_(t, e) { if (!t) return null; var r; switch (t.type) {
                case Nt.POINT:
                    r = function(t) { return new Rr(t.coordinates) }(t); break;
                case Nt.LINE_STRING:
                    r = function(t) { return new zp(t.coordinates) }(t); break;
                case Nt.POLYGON:
                    r = function(t) { return new Yr(t.coordinates) }(t); break;
                case Nt.MULTI_POINT:
                    r = function(t) { return new vf(t.coordinates) }(t); break;
                case Nt.MULTI_LINE_STRING:
                    r = function(t) { return new gf(t.coordinates) }(t); break;
                case Nt.MULTI_POLYGON:
                    r = function(t) { return new Tf(t.coordinates) }(t); break;
                case Nt.GEOMETRY_COLLECTION:
                    r = function(t, e) { var r = t.geometries.map(function(t) { return z_(t, e) }); return new cd(r) }(t); break;
                default:
                    throw new Error("Unsupported GeoJSON type: " + t.type) } return fd(r, !1, e) }

        function X_(t, e) { var r, n = (t = fd(t, !0, e)).getType(); switch (n) {
                case Nt.POINT:
                    r = function(t, e) { return { type: "Point", coordinates: t.getCoordinates() } }(t); break;
                case Nt.LINE_STRING:
                    r = function(t, e) { return { type: "LineString", coordinates: t.getCoordinates() } }(t); break;
                case Nt.POLYGON:
                    r = function(t, e) { var r;
                        e && (r = e.rightHanded); return { type: "Polygon", coordinates: t.getCoordinates(r) } }(t, e); break;
                case Nt.MULTI_POINT:
                    r = function(t, e) { return { type: "MultiPoint", coordinates: t.getCoordinates() } }(t); break;
                case Nt.MULTI_LINE_STRING:
                    r = function(t, e) { return { type: "MultiLineString", coordinates: t.getCoordinates() } }(t); break;
                case Nt.MULTI_POLYGON:
                    r = function(t, e) { var r;
                        e && (r = e.rightHanded); return { type: "MultiPolygon", coordinates: t.getCoordinates(r) } }(t, e); break;
                case Nt.GEOMETRY_COLLECTION:
                    r = function(t, e) { return { type: "GeometryCollection", geometries: t.getGeometriesArray().map(function(t) { var r = p({}, e); return delete r.featureProjection, X_(t, r) }) } }(t, e); break;
                case Nt.CIRCLE:
                    r = { type: "GeometryCollection", geometries: [] }; break;
                default:
                    throw new Error("Unsupported geometry type: " + n) } return r } var V_ = function(t) {
                function e(e) { var r = this,
                        n = e || {}; return (r = t.call(this) || this).dataProjection = we(n.dataProjection ? n.dataProjection : "EPSG:4326"), n.featureProjection && (r.defaultFeatureProjection = we(n.featureProjection)), r.geometryName_ = n.geometryName, r.extractGeometryName_ = n.extractGeometryName, r } return Y_(e, t), e.prototype.readFeatureFromObject = function(t, e) { var r = null,
                        n = z_((r = "Feature" === t.type ? t : { type: "Feature", geometry: t, properties: null }).geometry, e),
                        i = new q; return this.geometryName_ ? i.setGeometryName(this.geometryName_) : this.extractGeometryName_ && "geometry_name" in r !== void 0 && i.setGeometryName(r.geometry_name), i.setGeometry(n), "id" in r && i.setId(r.id), r.properties && i.setProperties(r.properties, !0), i }, e.prototype.readFeaturesFromObject = function(t, e) { var r = null; if ("FeatureCollection" === t.type) { r = []; for (var n = t.features, i = 0, o = n.length; i < o; ++i) r.push(this.readFeatureFromObject(n[i], e)) } else r = [this.readFeatureFromObject(t, e)]; return r }, e.prototype.readGeometryFromObject = function(t, e) { return z_(t, e) }, e.prototype.readProjectionFromObject = function(t) { var e, r = t.crs; return r ? "name" == r.type ? e = we(r.properties.name) : K(!1, 36) : e = this.dataProjection, e }, e.prototype.writeFeatureObject = function(t, e) { e = this.adaptOptions(e); var r = { type: "Feature", geometry: null, properties: null },
                        n = t.getId();
                    void 0 !== n && (r.id = n); var i = t.getGeometry();
                    i && (r.geometry = X_(i, e)); var o = t.getProperties(); return delete o[t.getGeometryName()], _(o) || (r.properties = o), r }, e.prototype.writeFeaturesObject = function(t, e) { e = this.adaptOptions(e); for (var r = [], n = 0, i = t.length; n < i; ++n) r.push(this.writeFeatureObject(t[n], e)); return { type: "FeatureCollection", features: r } }, e.prototype.writeGeometryObject = function(t, e) { return X_(t, this.adaptOptions(e)) }, e }(yd),
            W_ = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Z_(t) { return "string" == typeof t ? t : "" } var K_, H_, q_, J_, Q_, $_, tg, eg = function(t) {
                function e() { return t.call(this) || this } return W_(e, t), e.prototype.getType = function() { return Ka.TEXT }, e.prototype.readFeature = function(t, e) { return this.readFeatureFromText(Z_(t), this.adaptOptions(e)) }, e.prototype.readFeatureFromText = function(t, e) { return n() }, e.prototype.readFeatures = function(t, e) { return this.readFeaturesFromText(Z_(t), this.adaptOptions(e)) }, e.prototype.readFeaturesFromText = function(t, e) { return n() }, e.prototype.readGeometry = function(t, e) { return this.readGeometryFromText(Z_(t), this.adaptOptions(e)) }, e.prototype.readGeometryFromText = function(t, e) { return n() }, e.prototype.readProjection = function(t) { return this.readProjectionFromText(Z_(t)) }, e.prototype.readProjectionFromText = function(t) { return this.dataProjection }, e.prototype.writeFeature = function(t, e) { return this.writeFeatureText(t, this.adaptOptions(e)) }, e.prototype.writeFeatureText = function(t, e) { return n() }, e.prototype.writeFeatures = function(t, e) { return this.writeFeaturesText(t, this.adaptOptions(e)) }, e.prototype.writeFeaturesText = function(t, e) { return n() }, e.prototype.writeGeometry = function(t, e) { return this.writeGeometryText(t, this.adaptOptions(e)) }, e.prototype.writeGeometryText = function(t, e) { return n() }, e }(pd),
            rg = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ng = { BAROMETRIC: "barometric", GPS: "gps", NONE: "none" },
            ig = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
            og = /^H.([A-Z]{3}).*?:(.*)/,
            ag = /^HFDTE(\d{2})(\d{2})(\d{2})/,
            sg = /\r\n|\r|\n/,
            ug = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.dataProjection = we("EPSG:4326"), r.altitudeMode_ = n.altitudeMode ? n.altitudeMode : ng.NONE, r } return rg(e, t), e.prototype.readFeatureFromText = function(t, e) { var r, n, i = this.altitudeMode_,
                        o = t.split(sg),
                        a = {},
                        s = [],
                        u = 2e3,
                        l = 0,
                        h = 1,
                        c = -1; for (r = 0, n = o.length; r < n; ++r) { var p = o[r],
                            f = void 0; if ("B" == p.charAt(0)) { if (f = ig.exec(p)) { var d = parseInt(f[1], 10),
                                    _ = parseInt(f[2], 10),
                                    g = parseInt(f[3], 10),
                                    y = parseInt(f[4], 10) + parseInt(f[5], 10) / 6e4; "S" == f[6] && (y = -y); var v = parseInt(f[7], 10) + parseInt(f[8], 10) / 6e4; if ("W" == f[9] && (v = -v), s.push(v, y), i != ng.NONE) { var m = void 0;
                                    m = i == ng.GPS ? parseInt(f[11], 10) : i == ng.BAROMETRIC ? parseInt(f[12], 10) : 0, s.push(m) } var E = Date.UTC(u, l, h, d, _, g);
                                E < c && (E = Date.UTC(u, l, h + 1, d, _, g)), s.push(E / 1e3), c = E } } else "H" == p.charAt(0) && ((f = ag.exec(p)) ? (h = parseInt(f[1], 10), l = parseInt(f[2], 10) - 1, u = 2e3 + parseInt(f[3], 10)) : (f = og.exec(p)) && (a[f[1]] = f[2].trim())) } if (0 === s.length) return null; var T = i == ng.NONE ? At.XYM : At.XYZM,
                        S = new zp(s, T),
                        w = new q(fd(S, !1, e)); return w.setProperties(a, !0), w }, e.prototype.readFeaturesFromText = function(t, e) { var r = this.readFeatureFromText(t, e); return r ? [r] : [] }, e }(eg),
            lg = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            hg = ["http://www.google.com/kml/ext/2.2"],
            cg = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
            pg = { fraction: du.FRACTION, pixels: du.PIXELS, insetPixels: du.PIXELS },
            fg = Gs(cg, { ExtendedData: ay, Region: sy, MultiGeometry: bs(Jg, "geometry"), LineString: bs(Kg, "geometry"), LinearRing: bs(Hg, "geometry"), Point: bs(Qg, "geometry"), Polygon: bs(ty, "geometry"), Style: bs(ry), StyleMap: function(t, e) { var r = Ag(t, e); if (!r) return; var n = e[e.length - 1];
                    Array.isArray(r) ? n.Style = r : "string" == typeof r ? n.styleUrl = r : K(!1, 38) }, address: bs(Ud), description: bs(Ud), name: bs(Ud), open: bs(Fd), phoneNumber: bs(Ud), styleUrl: bs(Lg), visibility: bs(Fd) }, Gs(hg, { MultiTrack: bs(function(t, e) { var r = js([], Bg, t, e); if (!r) return; return new gf(r) }, "geometry"), Track: bs(zg, "geometry") })),
            dg = Gs(cg, { ExtendedData: ay, Region: sy, Link: function(t, e) { Ds(_g, t, e) }, address: bs(Ud), description: bs(Ud), name: bs(Ud), open: bs(Fd), phoneNumber: bs(Ud), visibility: bs(Fd) }),
            _g = Gs(cg, { href: bs(Lg) }),
            gg = Gs(cg, { LatLonAltBox: function(t, e) { var r = js({}, hy, t, e); if (!r) return; var n = e[e.length - 1],
                        i = [parseFloat(r.west), parseFloat(r.south), parseFloat(r.east), parseFloat(r.north)];
                    n.extent = i, n.altitudeMode = r.altitudeMode, n.minAltitude = parseFloat(r.minAltitude), n.maxAltitude = parseFloat(r.maxAltitude) }, Lod: function(t, e) { var r = js({}, cy, t, e); if (!r) return; var n = e[e.length - 1];
                    n.minLodPixels = parseFloat(r.minLodPixels), n.maxLodPixels = parseFloat(r.maxLodPixels), n.minFadeExtent = parseFloat(r.minFadeExtent), n.maxFadeExtent = parseFloat(r.maxFadeExtent) } }),
            yg = Gs(cg, ["Document", "Placemark"]),
            vg = Gs(cg, { Document: Ls(function(t, e, r) { Us({ node: t }, gy, yy, e, r, void 0, this) }), Placemark: Ls(By) }),
            mg = null; var Eg, Tg = null; var Sg, wg = null; var xg = null; var Og = null; var Rg = null; var Cg = function(t) {
            function e(e) { var r = t.call(this) || this,
                    n = e || {}; return Rg || (mg = new fu({ color: K_ = [255, 255, 255, 1] }), H_ = [20, 2], q_ = du.PIXELS, J_ = du.PIXELS, Q_ = [64, 64], $_ = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", tg = .5, Tg = new xu({ anchor: H_, anchorOrigin: Su.BOTTOM_LEFT, anchorXUnits: q_, anchorYUnits: J_, crossOrigin: "anonymous", rotation: 0, scale: tg, size: Q_, src: $_ }), Eg = "NO_IMAGE", wg = new Ou({ color: K_, width: 1 }), Sg = new Ou({ color: [51, 51, 51, 1], width: 2 }), xg = new Au({ font: "bold 16px Helvetica", fill: mg, stroke: Sg, scale: .8 }), Og = new Lu({ fill: mg, image: Tg, text: xg, stroke: wg, zIndex: 0 }), Rg = [Og]), r.dataProjection = we("EPSG:4326"), r.defaultStyle_ = n.defaultStyle ? n.defaultStyle : Rg, r.extractStyles_ = void 0 === n.extractStyles || n.extractStyles, r.writeStyles_ = void 0 === n.writeStyles || n.writeStyles, r.sharedStyles_ = {}, r.showPointNames_ = void 0 === n.showPointNames || n.showPointNames, r } return lg(e, t), e.prototype.readDocumentOrFolder_ = function(t, e) { var r = js([], Gs(cg, { Document: Rs(this.readDocumentOrFolder_, this), Folder: Rs(this.readDocumentOrFolder_, this), Placemark: Cs(this.readPlacemark_, this), Style: this.readSharedStyle_.bind(this), StyleMap: this.readSharedStyleMap_.bind(this) }), t, e, this); return r || void 0 }, e.prototype.readPlacemark_ = function(t, e) { var r = js({ geometry: null }, fg, t, e); if (r) { var n = new q,
                        i = t.getAttribute("id");
                    null !== i && n.setId(i); var o = e[0],
                        a = r.geometry; if (a && fd(a, !1, o), n.setGeometry(a), delete r.geometry, this.extractStyles_) { var s = function(t, e, r, n, i) { return function(o, a) { var s, u = i,
                                    l = ""; if (u) { var h = o.getGeometry();
                                    h && (u = h.getType() === Nt.POINT) } if (u && (l = o.get("name"), u = u && !!l), t) return u ? (s = Pg(t[0], l), t.concat(s)) : t; if (e) { var c = function t(e, r, n) { return Array.isArray(e) ? e : "string" == typeof e ? (!(e in n) && "#" + e in n && (e = "#" + e), t(n[e], r, n)) : r }(e, r, n); return u ? (s = Pg(c[0], l), c.concat(s)) : c } return u ? (s = Pg(r[0], l), r.concat(s)) : r } }(r.Style, r.styleUrl, this.defaultStyle_, this.sharedStyles_, this.showPointNames_);
                        n.setStyle(s) } return delete r.Style, n.setProperties(r, !0), n } }, e.prototype.readSharedStyle_ = function(t, e) { var r = t.getAttribute("id"); if (null !== r) { var n = ry(t, e); if (n) { var i = void 0,
                            o = t.baseURI; if (o && "about:blank" != o || (o = window.location.href), o) i = new URL("#" + r, o).href;
                        else i = "#" + r;
                        this.sharedStyles_[i] = n } } }, e.prototype.readSharedStyleMap_ = function(t, e) { var r = t.getAttribute("id"); if (null !== r) { var n = Ag(t, e); if (n) { var i, o = t.baseURI; if (o && "about:blank" != o || (o = window.location.href), o) i = new URL("#" + r, o).href;
                        else i = "#" + r;
                        this.sharedStyles_[i] = n } } }, e.prototype.readFeatureFromNode = function(t, e) { if (!T(cg, t.namespaceURI)) return null; var r = this.readPlacemark_(t, [this.getReadOptions(t, e)]); return r || null }, e.prototype.readFeaturesFromNode = function(t, e) { if (!T(cg, t.namespaceURI)) return []; var r, n = t.localName; if ("Document" == n || "Folder" == n) return (r = this.readDocumentOrFolder_(t, [this.getReadOptions(t, e)])) || []; if ("Placemark" == n) { var i = this.readPlacemark_(t, [this.getReadOptions(t, e)]); return i ? [i] : [] } if ("kml" == n) { r = []; for (var o = t.firstElementChild; o; o = o.nextElementSibling) { var a = this.readFeaturesFromNode(o, e);
                        a && x(r, a) } return r } return [] }, e.prototype.readName = function(t) { if (t) { if ("string" == typeof t) { var e = Os(t); return this.readNameFromDocument(e) } return xs(t) ? this.readNameFromDocument(t) : this.readNameFromNode(t) } }, e.prototype.readNameFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                    if (e.nodeType == Node.ELEMENT_NODE) { var r = this.readNameFromNode(e); if (r) return r } }, e.prototype.readNameFromNode = function(t) { for (var e = t.firstElementChild; e; e = e.nextElementSibling)
                    if (T(cg, e.namespaceURI) && "name" == e.localName) return Ud(e);
                for (e = t.firstElementChild; e; e = e.nextElementSibling) { var r = e.localName; if (T(cg, e.namespaceURI) && ("Document" == r || "Folder" == r || "Placemark" == r || "kml" == r)) { var n = this.readNameFromNode(e); if (n) return n } } }, e.prototype.readNetworkLinks = function(t) { var e = []; if ("string" == typeof t) { var r = Os(t);
                    x(e, this.readNetworkLinksFromDocument(r)) } else xs(t) ? x(e, this.readNetworkLinksFromDocument(t)) : x(e, this.readNetworkLinksFromNode(t)); return e }, e.prototype.readNetworkLinksFromDocument = function(t) { for (var e = [], r = t.firstChild; r; r = r.nextSibling) r.nodeType == Node.ELEMENT_NODE && x(e, this.readNetworkLinksFromNode(r)); return e }, e.prototype.readNetworkLinksFromNode = function(t) { for (var e = [], r = t.firstElementChild; r; r = r.nextElementSibling)
                    if (T(cg, r.namespaceURI) && "NetworkLink" == r.localName) { var n = js({}, dg, r, []);
                        e.push(n) }
                for (r = t.firstElementChild; r; r = r.nextElementSibling) { var i = r.localName;!T(cg, r.namespaceURI) || "Document" != i && "Folder" != i && "kml" != i || x(e, this.readNetworkLinksFromNode(r)) } return e }, e.prototype.readRegion = function(t) { var e = []; if ("string" == typeof t) { var r = Os(t);
                    x(e, this.readRegionFromDocument(r)) } else xs(t) ? x(e, this.readRegionFromDocument(t)) : x(e, this.readRegionFromNode(t)); return e }, e.prototype.readRegionFromDocument = function(t) { for (var e = [], r = t.firstChild; r; r = r.nextSibling) r.nodeType == Node.ELEMENT_NODE && x(e, this.readRegionFromNode(r)); return e }, e.prototype.readRegionFromNode = function(t) { for (var e = [], r = t.firstElementChild; r; r = r.nextElementSibling)
                    if (T(cg, r.namespaceURI) && "Region" == r.localName) { var n = js({}, gg, r, []);
                        e.push(n) }
                for (r = t.firstElementChild; r; r = r.nextElementSibling) { var i = r.localName;!T(cg, r.namespaceURI) || "Document" != i && "Folder" != i && "kml" != i || x(e, this.readRegionFromNode(r)) } return e }, e.prototype.writeFeaturesNode = function(t, e) { e = this.adaptOptions(e); var r = Ss(cg[4], "kml"),
                    n = "http://www.w3.org/2000/xmlns/";
                r.setAttributeNS(n, "xmlns:gx", hg[0]), r.setAttributeNS(n, "xmlns:xsi", Ts), r.setAttributeNS(Ts, "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd"); var i = { node: r },
                    o = {};
                t.length > 1 ? o.Document = t : 1 == t.length && (o.Placemark = t[0]); var a = yg[r.namespaceURI],
                    s = Ns(o, a); return Us(i, vg, As, s, [e], a, this), r }, e }(Cd);

        function Pg(t, e) { var r = null,
                n = [0, 0],
                i = "start"; if (t.getImage()) { var o = t.getImage().getImageSize(); if (null === o && (o = Q_), 2 == o.length) { var a = t.getImage().getScale();
                    n[0] = a * o[0] / 2, n[1] = -a * o[1] / 2, i = "left" } } if (null !== t.getText()) { var s = t.getText();
                (r = s.clone()).setFont(s.getFont() || xg.getFont()), r.setScale(s.getScale() || xg.getScale()), r.setFill(s.getFill() || xg.getFill()), r.setStroke(s.getStroke() || Sg) } else r = xg.clone(); return r.setText(e), r.setOffsetX(n[0]), r.setOffsetY(n[1]), r.setTextAlign(i), new Lu({ text: r }) }

        function Ig(t) { var e = ws(t, !1),
                r = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(e); if (r) { var n = r[1]; return [parseInt(n.substr(6, 2), 16), parseInt(n.substr(4, 2), 16), parseInt(n.substr(2, 2), 16), parseInt(n.substr(0, 2), 16) / 255] } }

        function bg(t) { for (var e, r = ws(t, !1), n = [], i = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i; e = i.exec(r);) { var o = parseFloat(e[1]),
                    a = parseFloat(e[2]),
                    s = e[3] ? parseFloat(e[3]) : 0;
                n.push(o, a, s), r = r.substr(e[0].length) } if ("" === r) return n }

        function Lg(t) { var e = ws(t, !1).trim(),
                r = t.baseURI; return r && "about:blank" != r || (r = window.location.href), r ? new URL(e, r).href : e }

        function Mg(t) { return Gd(t) } var Fg = Gs(cg, { Pair: function(t, e) { var r = js({}, uy, t, e); if (!r) return; var n = r.key; if (n && "normal" == n) { var i = r.styleUrl;
                    i && (e[e.length - 1] = i); var o = r.Style;
                    o && (e[e.length - 1] = o) } } });

        function Ag(t, e) { return js(void 0, Fg, t, e) } var Ng = Gs(cg, { Icon: bs(function(t, e) { var r = js({}, Xg, t, e); return r || null }), heading: bs(Gd), hotSpot: bs(function(t) { var e, r = t.getAttribute("xunits"),
                    n = t.getAttribute("yunits"); return e = "insetPixels" !== r ? "insetPixels" !== n ? Su.BOTTOM_LEFT : Su.TOP_LEFT : "insetPixels" !== n ? Su.BOTTOM_RIGHT : Su.TOP_RIGHT, { x: parseFloat(t.getAttribute("x")), xunits: pg[r], y: parseFloat(t.getAttribute("y")), yunits: pg[n], origin: e } }), scale: bs(Mg) }); var Gg = Gs(cg, { color: bs(Ig), scale: bs(Mg) }); var Dg = Gs(cg, { color: bs(Ig), width: bs(Gd) }); var jg = Gs(cg, { color: bs(Ig), fill: bs(Fd), outline: bs(Fd) }); var kg = Gs(cg, { coordinates: Ps(bg) });

        function Ug(t, e) { return js(null, kg, t, e) } var Bg = Gs(hg, { Track: Cs(zg) }); var Yg = Gs(cg, { when: function(t, e) { var r = e[e.length - 1].whens,
                    n = ws(t, !1),
                    i = Date.parse(n);
                r.push(isNaN(i) ? 0 : i) } }, Gs(hg, { coord: function(t, e) { var r = e[e.length - 1].flatCoordinates,
                    n = ws(t, !1),
                    i = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(n); if (i) { var o = parseFloat(i[1]),
                        a = parseFloat(i[2]),
                        s = parseFloat(i[3]);
                    r.push(o, a, s, 0) } else r.push(0, 0, 0, 0) } }));

        function zg(t, e) { var r = js({ flatCoordinates: [], whens: [] }, Yg, t, e); if (r) { for (var n = r.flatCoordinates, i = r.whens, o = 0, a = Math.min(n.length, i.length); o < a; ++o) n[4 * o + 3] = i[o]; return new zp(n, At.XYZM) } } var Xg = Gs(cg, { href: bs(Lg) }, Gs(hg, { x: bs(Gd), y: bs(Gd), w: bs(Gd), h: bs(Gd) })); var Vg = Gs(cg, { coordinates: Ps(bg) });

        function Wg(t, e) { return js(null, Vg, t, e) } var Zg = Gs(cg, { extrude: bs(Fd), tessellate: bs(Fd), altitudeMode: bs(Ud) });

        function Kg(t, e) { var r = js({}, Zg, t, e),
                n = Wg(t, e); if (n) { var i = new zp(n, At.XYZ); return i.setProperties(r, !0), i } }

        function Hg(t, e) { var r = js({}, Zg, t, e),
                n = Wg(t, e); if (n) { var i = new Yr(n, At.XYZ, [n.length]); return i.setProperties(r, !0), i } } var qg = Gs(cg, { LineString: Cs(Kg), LinearRing: Cs(Hg), MultiGeometry: Cs(Jg), Point: Cs(Qg), Polygon: Cs(ty) });

        function Jg(t, e) { var r, n = js([], qg, t, e); if (!n) return null; if (0 === n.length) return new cd(n); for (var i = !0, o = n[0].getType(), a = 1, s = n.length; a < s; ++a)
                if (n[a].getType() != o) { i = !1; break }
            if (i) { var u = void 0,
                    l = void 0; if (o == Nt.POINT) { var h = n[0];
                    u = h.getLayout(), l = h.getFlatCoordinates(); for (a = 1, s = n.length; a < s; ++a) x(l, n[a].getFlatCoordinates());
                    ny(r = new vf(l, u), n) } else o == Nt.LINE_STRING ? ny(r = new gf(n), n) : o == Nt.POLYGON ? ny(r = new Tf(n), n) : o == Nt.GEOMETRY_COLLECTION ? r = new cd(n) : K(!1, 37) } else r = new cd(n); return r }

        function Qg(t, e) { var r = js({}, Zg, t, e),
                n = Wg(t, e); if (n) { var i = new Rr(n, At.XYZ); return i.setProperties(r, !0), i } } var $g = Gs(cg, { innerBoundaryIs: function(t, e) { var r = js(void 0, py, t, e); if (r) { e[e.length - 1].push(r) } }, outerBoundaryIs: function(t, e) { var r = js(void 0, fy, t, e); if (r) { e[e.length - 1][0] = r } } });

        function ty(t, e) { var r = js({}, Zg, t, e),
                n = js([null], $g, t, e); if (n && n[0]) { for (var i = n[0], o = [i.length], a = 1, s = n.length; a < s; ++a) x(i, n[a]), o.push(i.length); var u = new Yr(i, At.XYZ, o); return u.setProperties(r, !0), u } } var ey = Gs(cg, { IconStyle: function(t, e) { var r = js({}, Ng, t, e); if (r) { var n, i, o, a, s = e[e.length - 1],
                        u = "Icon" in r ? r.Icon : {},
                        l = !("Icon" in r) || Object.keys(u).length > 0,
                        h = u.href;
                    h ? n = h : l && (n = $_); var c, p = Su.BOTTOM_LEFT,
                        f = r.hotSpot;
                    f ? (i = [f.x, f.y], o = f.xunits, a = f.yunits, p = f.origin) : n === $_ ? (i = H_, o = q_, a = J_) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(n) && (i = [.5, 0], o = du.FRACTION, a = du.FRACTION); var d, _ = u.x,
                        g = u.y;
                    void 0 !== _ && void 0 !== g && (c = [_, g]); var y, v = u.w,
                        m = u.h;
                    void 0 !== v && void 0 !== m && (d = [v, m]); var E = r.heading;
                    void 0 !== E && (y = Xt(E)); var T = r.scale; if (l) { n == $_ && (d = Q_, void 0 === T && (T = tg)); var S = new xu({ anchor: i, anchorOrigin: p, anchorXUnits: o, anchorYUnits: a, crossOrigin: "anonymous", offset: c, offsetOrigin: Su.BOTTOM_LEFT, rotation: y, scale: T, size: d, src: n });
                        s.imageStyle = S } else s.imageStyle = Eg } }, LabelStyle: function(t, e) { var r = js({}, Gg, t, e); if (r) { var n = e[e.length - 1],
                        i = new Au({ fill: new fu({ color: "color" in r ? r.color : K_ }), scale: r.scale });
                    n.textStyle = i } }, LineStyle: function(t, e) { var r = js({}, Dg, t, e); if (r) { var n = e[e.length - 1],
                        i = new Ou({ color: "color" in r ? r.color : K_, width: "width" in r ? r.width : 1 });
                    n.strokeStyle = i } }, PolyStyle: function(t, e) { var r = js({}, jg, t, e); if (r) { var n = e[e.length - 1],
                        i = new fu({ color: "color" in r ? r.color : K_ });
                    n.fillStyle = i; var o = r.fill;
                    void 0 !== o && (n.fill = o); var a = r.outline;
                    void 0 !== a && (n.outline = a) } } });

        function ry(t, e) { var r = js({}, ey, t, e); if (!r) return null; var n, i = "fillStyle" in r ? r.fillStyle : mg,
                o = r.fill;
            void 0 === o || o || (i = null), "imageStyle" in r ? r.imageStyle != Eg && (n = r.imageStyle) : n = Tg; var a = "textStyle" in r ? r.textStyle : xg,
                s = "strokeStyle" in r ? r.strokeStyle : wg,
                u = r.outline; return void 0 === u || u || (s = null), [new Lu({ fill: i, image: n, stroke: s, text: a, zIndex: void 0 })] }

        function ny(t, e) { var r, n, i, o = e.length,
                a = new Array(e.length),
                s = new Array(e.length),
                u = new Array(e.length);
            r = n = i = !1; for (var l = 0; l < o; ++l) { var h = e[l];
                a[l] = h.get("extrude"), s[l] = h.get("tessellate"), u[l] = h.get("altitudeMode"), r = r || void 0 !== a[l], n = n || void 0 !== s[l], i = i || u[l] }
            r && t.set("extrude", a), n && t.set("tessellate", s), i && t.set("altitudeMode", u) } var iy = Gs(cg, { displayName: bs(Ud), value: bs(Ud) }); var oy = Gs(cg, { Data: function(t, e) { var r = t.getAttribute("name");
                Ds(iy, t, e); var n = e[e.length - 1];
                r && n.displayName ? n[r] = { value: n.value, displayName: n.displayName, toString: function() { return n.value } } : null !== r ? n[r] = n.value : null !== n.displayName && (n[n.displayName] = n.value), delete n.value }, SchemaData: function(t, e) { Ds(ly, t, e) } });

        function ay(t, e) { Ds(oy, t, e) }

        function sy(t, e) { Ds(gg, t, e) } var uy = Gs(cg, { Style: bs(ry), key: bs(Ud), styleUrl: bs(Lg) }); var ly = Gs(cg, { SimpleData: function(t, e) { var r = t.getAttribute("name"); if (null !== r) { var n = Ud(t);
                    e[e.length - 1][r] = n } } }); var hy = Gs(cg, { altitudeMode: bs(Ud), minAltitude: bs(Gd), maxAltitude: bs(Gd), north: bs(Gd), south: bs(Gd), east: bs(Gd), west: bs(Gd) }); var cy = Gs(cg, { minLodPixels: bs(Gd), maxLodPixels: bs(Gd), minFadeExtent: bs(Gd), maxFadeExtent: bs(Gd) }); var py = Gs(cg, { LinearRing: Ps(Ug) }); var fy = Gs(cg, { LinearRing: Ps(Ug) });

        function dy(t, e) { for (var r = oa(e), n = [255 * (4 == r.length ? r[3] : 1), r[2], r[1], r[0]], i = 0; i < 4; ++i) { var o = Math.floor(n[i]).toString(16);
                n[i] = 1 == o.length ? "0" + o : o }
            Xd(t, n.join("")) } var _y = Gs(cg, { Data: Ls(function(t, e, r) { t.setAttribute("name", e.name); var n = { node: t },
                    i = e.value; "object" == typeof i ? (null !== i && i.displayName && Us(n, _y, As, [i.displayName], r, ["displayName"]), null !== i && i.value && Us(n, _y, As, [i.value], r, ["value"])) : Us(n, _y, As, [i], r, ["value"]) }), value: Ls(function(t, e) { Xd(t, e) }), displayName: Ls(function(t, e) {! function(t, e) { t.appendChild(Es.createCDATASection(e)) }(t, e) }) }); var gy = Gs(cg, { Placemark: Ls(By) }),
            yy = function(t, e, r) { return Ss(e[e.length - 1].node.namespaceURI, "Placemark") }; var vy = Fs("Data"); var my = Gs(cg, ["href"], Gs(hg, ["x", "y", "w", "h"])),
            Ey = Gs(cg, { href: Ls(Xd) }, Gs(hg, { x: Ls(Yd), y: Ls(Yd), w: Ls(Yd), h: Ls(Yd) })),
            Ty = function(t, e, r) { return Ss(hg[0], "gx:" + r) }; var Sy = Gs(cg, ["scale", "heading", "Icon", "hotSpot"]),
            wy = Gs(cg, { Icon: Ls(function(t, e, r) { var n = { node: t },
                        i = r[r.length - 1].node,
                        o = my[i.namespaceURI],
                        a = Ns(e, o);
                    Us(n, Ey, As, a, r, o), a = Ns(e, o = my[hg[0]]), Us(n, Ey, Ty, a, r, o) }), heading: Ls(Yd), hotSpot: Ls(function(t, e) { t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("xunits", e.xunits), t.setAttribute("yunits", e.yunits) }), scale: Ls(Jy) }); var xy = Gs(cg, ["color", "scale"]),
            Oy = Gs(cg, { color: Ls(dy), scale: Ls(Jy) }); var Ry = Gs(cg, ["color", "width"]),
            Cy = Gs(cg, { color: Ls(dy), width: Ls(Yd) }); var Py = { Point: "Point", LineString: "LineString", LinearRing: "LinearRing", Polygon: "Polygon", MultiPoint: "MultiGeometry", MultiLineString: "MultiGeometry", MultiPolygon: "MultiGeometry", GeometryCollection: "MultiGeometry" },
            Iy = function(t, e, r) { if (t) return Ss(e[e.length - 1].node.namespaceURI, Py[t.getType()]) },
            by = Fs("Point"),
            Ly = Fs("LineString"),
            My = Fs("LinearRing"),
            Fy = Fs("Polygon"),
            Ay = Gs(cg, { LineString: Ls(Xy), Point: Ls(Xy), Polygon: Ls(Ky), GeometryCollection: Ls(Ny) });

        function Ny(t, e, r) { var n, i, o = { node: t },
                a = e.getType();
            a == Nt.GEOMETRY_COLLECTION ? (n = e.getGeometries(), i = Iy) : a == Nt.MULTI_POINT ? (n = e.getPoints(), i = by) : a == Nt.MULTI_LINE_STRING ? (n = e.getLineStrings(), i = Ly) : a == Nt.MULTI_POLYGON ? (n = e.getPolygons(), i = Fy) : K(!1, 39), Us(o, Ay, i, n, r) } var Gy = Gs(cg, { LinearRing: Ls(Xy) });

        function Dy(t, e, r) { Us({ node: t }, Gy, My, [e], r) } var jy = Gs(cg, { ExtendedData: Ls(function(t, e, r) { for (var n = { node: t }, i = e.names, o = e.values, a = i.length, s = 0; s < a; s++) Us(n, _y, vy, [{ name: i[s], value: o[s] }], r) }), MultiGeometry: Ls(Ny), LineString: Ls(Xy), LinearRing: Ls(Xy), Point: Ls(Xy), Polygon: Ls(Ky), Style: Ls(function(t, e, r) { var n = { node: t },
                        i = {},
                        o = e.getFill(),
                        a = e.getStroke(),
                        s = e.getImage(),
                        u = e.getText();
                    s && "function" == typeof s.getSrc && (i.IconStyle = s);
                    u && (i.LabelStyle = u);
                    a && (i.LineStyle = a);
                    o && (i.PolyStyle = o); var l = r[r.length - 1].node,
                        h = Qy[l.namespaceURI],
                        c = Ns(i, h);
                    Us(n, $y, As, c, r, h) }), address: Ls(Xd), description: Ls(Xd), name: Ls(Xd), open: Ls(Bd), phoneNumber: Ls(Xd), styleUrl: Ls(Xd), visibility: Ls(Bd) }),
            ky = Gs(cg, ["name", "open", "visibility", "address", "phoneNumber", "description", "styleUrl", "Style"]),
            Uy = Fs("ExtendedData");

        function By(t, e, r) { var n = { node: t };
            e.getId() && t.setAttribute("id", e.getId()); var i = e.getProperties(),
                o = { address: 1, description: 1, name: 1, open: 1, phoneNumber: 1, styleUrl: 1, visibility: 1 };
            o[e.getGeometryName()] = 1; var a = Object.keys(i || {}).sort().filter(function(t) { return !o[t] }),
                s = e.getStyleFunction(); if (s) { var u = s(e, 0); if (u) { var l = Array.isArray(u) ? u[0] : u;
                    this.writeStyles_ && (i.Style = l); var h = l.getText();
                    h && (i.name = h.getText()) } } var c = r[r.length - 1].node,
                p = ky[c.namespaceURI],
                f = Ns(i, p); if (Us(n, jy, As, f, r, p), a.length > 0) { var d = Ns(i, a);
                Us(n, jy, Uy, [{ names: a, values: d }], r) } var _ = r[0],
                g = e.getGeometry();
            g && (g = fd(g, !0, _)), Us(n, jy, Iy, [g], r) } var Yy = Gs(cg, ["extrude", "tessellate", "altitudeMode", "coordinates"]),
            zy = Gs(cg, { extrude: Ls(Bd), tessellate: Ls(Bd), altitudeMode: Ls(Xd), coordinates: Ls(function(t, e, r) { var n, i = r[r.length - 1],
                        o = i.layout,
                        a = i.stride;
                    o == At.XY || o == At.XYM ? n = 2 : o == At.XYZ || o == At.XYZM ? n = 3 : K(!1, 34); var s = e.length,
                        u = ""; if (s > 0) { u += e[0]; for (var l = 1; l < n; ++l) u += "," + e[l]; for (var h = a; h < s; h += a) { u += " " + e[h]; for (l = 1; l < n; ++l) u += "," + e[h + l] } }
                    Xd(t, u) }) });

        function Xy(t, e, r) { var n = e.getFlatCoordinates(),
                i = { node: t };
            i.layout = e.getLayout(), i.stride = e.getStride(); var o = e.getProperties();
            o.coordinates = n; var a = r[r.length - 1].node,
                s = Yy[a.namespaceURI],
                u = Ns(o, s);
            Us(i, zy, As, u, r, s) } var Vy = Gs(cg, { outerBoundaryIs: Ls(Dy), innerBoundaryIs: Ls(Dy) }),
            Wy = Fs("innerBoundaryIs"),
            Zy = Fs("outerBoundaryIs");

        function Ky(t, e, r) { var n = e.getLinearRings(),
                i = n.shift(),
                o = { node: t };
            Us(o, Vy, Wy, n, r), Us(o, Vy, Zy, [i], r) } var Hy = Gs(cg, { color: Ls(dy) }),
            qy = Fs("color");

        function Jy(t, e) { Yd(t, Math.round(1e6 * e) / 1e6) } var Qy = Gs(cg, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
            $y = Gs(cg, { IconStyle: Ls(function(t, e, r) { var n = { node: t },
                        i = {},
                        o = e.getSrc(),
                        a = e.getSize(),
                        s = e.getImageSize(),
                        u = { href: o }; if (a) { u.w = a[0], u.h = a[1]; var l = e.getAnchor(),
                            h = e.getOrigin(); if (h && s && 0 !== h[0] && h[1] !== a[1] && (u.x = h[0], u.y = s[1] - (h[1] + a[1])), l && (l[0] !== a[0] / 2 || l[1] !== a[1] / 2)) { var c = { x: l[0], xunits: du.PIXELS, y: a[1] - l[1], yunits: du.PIXELS };
                            i.hotSpot = c } }
                    i.Icon = u; var p = e.getScale();
                    1 !== p && (i.scale = p); var f = e.getRotation();
                    0 !== f && (i.heading = f); var d = r[r.length - 1].node,
                        _ = Sy[d.namespaceURI],
                        g = Ns(i, _);
                    Us(n, wy, As, g, r, _) }), LabelStyle: Ls(function(t, e, r) { var n = { node: t },
                        i = {},
                        o = e.getFill();
                    o && (i.color = o.getColor()); var a = e.getScale();
                    a && 1 !== a && (i.scale = a); var s = r[r.length - 1].node,
                        u = xy[s.namespaceURI],
                        l = Ns(i, u);
                    Us(n, Oy, As, l, r, u) }), LineStyle: Ls(function(t, e, r) { var n = { node: t },
                        i = { color: e.getColor(), width: e.getWidth() },
                        o = r[r.length - 1].node,
                        a = Ry[o.namespaceURI],
                        s = Ns(i, a);
                    Us(n, Cy, As, s, r, a) }), PolyStyle: Ls(function(t, e, r) { Us({ node: t }, Hy, qy, [e.getColor()], r) }) }); var tv = Cg,
            ev = r(2),
            rv = r.n(ev),
            nv = [1, 0, 0, 1, 0, 0],
            iv = function() {
                function t(t, e, r, n, i) { this.extent_, this.id_ = i, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = r, this.properties_ = n } return t.prototype.get = function(t) { return this.properties_[t] }, t.prototype.getExtent = function() { return this.extent_ || (this.extent_ = this.type_ === Nt.POINT ? ht(this.flatCoordinates_) : ct(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_ }, t.prototype.getFlatInteriorPoint = function() { if (!this.flatInteriorPoints_) { var t = St(this.getExtent());
                        this.flatInteriorPoints_ = br(this.flatCoordinates_, 0, this.ends_, 2, t, 0) } return this.flatInteriorPoints_ }, t.prototype.getFlatInteriorPoints = function() { if (!this.flatInteriorPoints_) { var t = mf(this.flatCoordinates_, 0, this.ends_, 2);
                        this.flatInteriorPoints_ = Lr(this.flatCoordinates_, 0, this.ends_, 2, t) } return this.flatInteriorPoints_ }, t.prototype.getFlatMidpoint = function() { return this.flatMidpoints_ || (this.flatMidpoints_ = Up(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, .5)), this.flatMidpoints_ }, t.prototype.getFlatMidpoints = function() { if (!this.flatMidpoints_) { this.flatMidpoints_ = []; for (var t = this.flatCoordinates_, e = 0, r = this.ends_, n = 0, i = r.length; n < i; ++n) { var o = r[n],
                                a = Up(t, e, o, 2, .5);
                            x(this.flatMidpoints_, a), e = o } } return this.flatMidpoints_ }, t.prototype.getId = function() { return this.id_ }, t.prototype.getOrientedFlatCoordinates = function() { return this.flatCoordinates_ }, t.prototype.getGeometry = function() { return this }, t.prototype.getSimplifiedGeometry = function(t) { return this }, t.prototype.simplifyTransformed = function(t, e, r) { return this }, t.prototype.getProperties = function() { return this.properties_ }, t.prototype.getStride = function() { return 2 }, t.prototype.getStyleFunction = function() {}, t.prototype.getType = function() { return this.type_ }, t.prototype.transform = function(t, e) { var r = (t = we(t)).getExtent(),
                        n = t.getWorldExtent(),
                        i = Ot(n) / Ot(r);
                    qe(nv, n[0], n[3], i, -i, 0, 0, 0), Gt(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, nv, this.flatCoordinates_) }, t }();
        iv.prototype.getEnds = iv.prototype.getEndss = function() { return this.ends_ }, iv.prototype.getFlatCoordinates = iv.prototype.getOrientedFlatCoordinates; var ov = iv,
            av = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function sv(t, e, r) { if (3 === t) { var n = { keys: [], values: [], features: [] },
                    i = r.readVarint() + r.pos;
                r.readFields(uv, n, i), n.length = n.features.length, n.length && (e[n.name] = n) } }

        function uv(t, e, r) { if (15 === t) e.version = r.readVarint();
            else if (1 === t) e.name = r.readString();
            else if (5 === t) e.extent = r.readVarint();
            else if (2 === t) e.features.push(r.pos);
            else if (3 === t) e.keys.push(r.readString());
            else if (4 === t) { for (var n = null, i = r.readVarint() + r.pos; r.pos < i;) n = 1 === (t = r.readVarint() >> 3) ? r.readString() : 2 === t ? r.readFloat() : 3 === t ? r.readDouble() : 4 === t ? r.readVarint64() : 5 === t ? r.readVarint() : 6 === t ? r.readSVarint() : 7 === t ? r.readBoolean() : null;
                e.values.push(n) } }

        function lv(t, e, r) { if (1 == t) e.id = r.readVarint();
            else if (2 == t)
                for (var n = r.readVarint() + r.pos; r.pos < n;) { var i = e.layer.keys[r.readVarint()],
                        o = e.layer.values[r.readVarint()];
                    e.properties[i] = o } else 3 == t ? e.type = r.readVarint() : 4 == t && (e.geometry = r.pos) }

        function hv(t, e, r) { t.pos = e.features[r]; var n = t.readVarint() + t.pos,
                i = { layer: e, type: 0, properties: {} }; return t.readFields(lv, i, n), i } var cv = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.dataProjection = new ee({ code: "", units: te.TILE_PIXELS }), r.featureClass_ = n.featureClass ? n.featureClass : ov, r.geometryName_ = n.geometryName, r.layerName_ = n.layerName ? n.layerName : "layer", r.layers_ = n.layers ? n.layers : null, r.idProperty_ = n.idProperty, r } return av(e, t), e.prototype.readRawGeometry_ = function(t, e, r, n) { t.pos = e.geometry; for (var i = t.readVarint() + t.pos, o = 1, a = 0, s = 0, u = 0, l = 0, h = 0; t.pos < i;) { if (!a) { var c = t.readVarint();
                            o = 7 & c, a = c >> 3 }
                        a--, 1 === o || 2 === o ? (s += t.readSVarint(), u += t.readSVarint(), 1 === o && l > h && (n.push(l), h = l), r.push(s, u), l += 2) : 7 === o ? l > h && (r.push(r[h], r[h + 1]), l += 2) : K(!1, 59) }
                    l > h && (n.push(l), h = l) }, e.prototype.createFeature_ = function(t, e, r) { var n, i = e.type; if (0 === i) return null; var o, a = e.properties;
                    this.idProperty_ ? (o = a[this.idProperty_], delete a[this.idProperty_]) : o = e.id, a[this.layerName_] = e.layer.name; var s = [],
                        u = [];
                    this.readRawGeometry_(t, e, s, u); var l = function(t, e) { var r;
                        1 === t ? r = 1 === e ? Nt.POINT : Nt.MULTI_POINT : 2 === t ? r = 1 === e ? Nt.LINE_STRING : Nt.MULTI_LINE_STRING : 3 === t && (r = Nt.POLYGON); return r }(i, u.length); if (this.featureClass_ === ov)(n = new this.featureClass_(l, s, u, a, o)).transform(r.dataProjection, r.featureProjection);
                    else { var h = void 0; if (l == Nt.POLYGON) { for (var c = [], p = 0, f = 0, d = 0, _ = u.length; d < _; ++d) { var g = u[d];
                                Gr(s, p, g, 2) || (c.push(u.slice(f, d)), f = d), p = g }
                            h = c.length > 1 ? new Tf(s, At.XY, c) : new Yr(s, At.XY, u) } else h = l === Nt.POINT ? new Rr(s, At.XY) : l === Nt.LINE_STRING ? new zp(s, At.XY) : l === Nt.POLYGON ? new Yr(s, At.XY, u) : l === Nt.MULTI_POINT ? new vf(s, At.XY) : l === Nt.MULTI_LINE_STRING ? new gf(s, At.XY, u) : null;
                        n = new(0, this.featureClass_), this.geometryName_ && n.setGeometryName(this.geometryName_); var y = fd(h, !1, r);
                        n.setGeometry(y), n.setId(o), n.setProperties(a, !0) } return n }, e.prototype.getType = function() { return Ka.ARRAY_BUFFER }, e.prototype.readFeatures = function(t, e) { var r = this.layers_,
                        n = this.adaptOptions(e),
                        i = we(n.dataProjection);
                    i.setWorldExtent(n.extent), n.dataProjection = i; var o = new rv.a(t),
                        a = o.readFields(sv, {}),
                        s = []; for (var u in a)
                        if (!r || -1 != r.indexOf(u)) { var l = a[u],
                                h = l ? [0, 0, l.extent, l.extent] : null;
                            i.setExtent(h); for (var c = 0, p = l.length; c < p; ++c) { var f = hv(o, l, c);
                                s.push(this.createFeature_(o, f, n)) } }
                    return s }, e.prototype.readProjection = function(t) { return this.dataProjection }, e.prototype.setLayers = function(t) { this.layers_ = t }, e }(pd),
            pv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            fv = [null],
            dv = Gs(fv, { nd: function(t, e) { e[e.length - 1].ndrefs.push(t.getAttribute("ref")) }, tag: vv }),
            _v = Gs(fv, { node: function(t, e) { var r = e[0],
                        n = e[e.length - 1],
                        i = t.getAttribute("id"),
                        o = [parseFloat(t.getAttribute("lon")), parseFloat(t.getAttribute("lat"))];
                    n.nodes[i] = o; var a = js({ tags: {} }, yv, t, e); if (!_(a.tags)) { var s = new Rr(o);
                        fd(s, !1, r); var u = new q(s);
                        u.setId(i), u.setProperties(a.tags, !0), n.features.push(u) } }, way: function(t, e) { var r = js({ id: t.getAttribute("id"), ndrefs: [], tags: {} }, dv, t, e);
                    e[e.length - 1].ways.push(r) } }),
            gv = function(t) {
                function e() { var e = t.call(this) || this; return e.dataProjection = we("EPSG:4326"), e } return pv(e, t), e.prototype.readFeaturesFromNode = function(t, e) { var r = this.getReadOptions(t, e); if ("osm" == t.localName) { for (var n = js({ nodes: {}, ways: [], features: [] }, _v, t, [r]), i = 0; i < n.ways.length; i++) { for (var o = n.ways[i], a = [], s = 0, u = o.ndrefs.length; s < u; s++) { x(a, n.nodes[o.ndrefs[s]]) } var l = void 0;
                            fd(l = o.ndrefs[0] == o.ndrefs[o.ndrefs.length - 1] ? new Yr(a, At.XY, [a.length]) : new zp(a, At.XY), !1, r); var h = new q(l);
                            h.setId(o.id), h.setProperties(o.tags, !0), n.features.push(h) } if (n.features) return n.features } return [] }, e }(Cd),
            yv = Gs(fv, { tag: vv });

        function vv(t, e) { e[e.length - 1].tags[t.getAttribute("k")] = t.getAttribute("v") } var mv = gv;

        function Ev(t, e, r, n, i, o) { var a, s;
            void 0 !== i ? (a = i, s = void 0 !== o ? o : 0) : (a = [], s = 0); for (var u = e; u < r;) { var l = t[u++];
                a[s++] = t[u++], a[s++] = l; for (var h = 2; h < n; ++h) a[s++] = t[u++] } return a.length = s, a } var Tv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                function n() { this.constructor = e }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();

        function Sv(t, e, r) { var n, i = r || 1e5,
                o = new Array(e); for (n = 0; n < e; ++n) o[n] = 0; for (var a = 0, s = t.length; a < s;)
                for (n = 0; n < e; ++n, ++a) { var u = t[a],
                        l = u - o[n];
                    o[n] = u, t[a] = l }
            return xv(t, i) }

        function wv(t, e, r) { var n, i = r || 1e5,
                o = new Array(e); for (n = 0; n < e; ++n) o[n] = 0; for (var a = Ov(t, i), s = 0, u = a.length; s < u;)
                for (n = 0; n < e; ++n, ++s) o[n] += a[s], a[s] = o[n]; return a }

        function xv(t, e) { for (var r = e || 1e5, n = 0, i = t.length; n < i; ++n) t[n] = Math.round(t[n] * r); return function(t) { for (var e = 0, r = t.length; e < r; ++e) { var n = t[e];
                    t[e] = n < 0 ? ~(n << 1) : n << 1 } return function(t) { for (var e = "", r = 0, n = t.length; r < n; ++r) e += Rv(t[r]); return e }(t) }(t) }

        function Ov(t, e) { for (var r = e || 1e5, n = function(t) { for (var e = function(t) { for (var e = [], r = 0, n = 0, i = 0, o = t.length; i < o; ++i) { var a = t.charCodeAt(i) - 63;
                                r |= (31 & a) << n, a < 32 ? (e.push(r), r = 0, n = 0) : n += 5 } return e }(t), r = 0, n = e.length; r < n; ++r) { var i = e[r];
                        e[r] = 1 & i ? ~(i >> 1) : i >> 1 } return e }(t), i = 0, o = n.length; i < o; ++i) n[i] /= r; return n }

        function Rv(t) { for (var e, r = ""; t >= 32;) e = 63 + (32 | 31 & t), r += String.fromCharCode(e), t >>= 5; return e = t + 63, r += String.fromCharCode(e) } var Cv = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.dataProjection = we("EPSG:4326"), r.factor_ = n.factor ? n.factor : 1e5, r.geometryLayout_ = n.geometryLayout ? n.geometryLayout : At.XY, r } return Tv(e, t), e.prototype.readFeatureFromText = function(t, e) { var r = this.readGeometryFromText(t, e); return new q(r) }, e.prototype.readFeaturesFromText = function(t, e) { return [this.readFeatureFromText(t, e)] }, e.prototype.readGeometryFromText = function(t, e) { var r = nr(this.geometryLayout_),
                        n = wv(t, r, this.factor_);
                    Ev(n, 0, n.length, r, n); var i = _r(n, 0, n.length, r); return fd(new zp(i, this.geometryLayout_), !1, this.adaptOptions(e)) }, e.prototype.writeFeatureText = function(t, e) { var r = t.getGeometry(); return r ? this.writeGeometryText(r, e) : (K(!1, 40), "") }, e.prototype.writeFeaturesText = function(t, e) { return this.writeFeatureText(t[0], e) }, e.prototype.writeGeometryText = function(t, e) { var r = (t = fd(t, !0, this.adaptOptions(e))).getFlatCoordinates(),
                        n = t.getStride(); return Ev(r, 0, r.length, n, r), Sv(r, n, this.factor_) }, e }(eg),
            Pv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Iv = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.layerName_ = n.layerName, r.layers_ = n.layers ? n.layers : null, r.dataProjection = we(n.dataProjection ? n.dataProjection : "EPSG:4326"), r } return Pv(e, t), e.prototype.readFeaturesFromObject = function(t, e) { if ("Topology" == t.type) { var r = t,
                            n = void 0,
                            i = null,
                            o = null;
                        r.transform && (i = (n = r.transform).scale, o = n.translate); var a = r.arcs;
                        n && function(t, e, r) { for (var n = 0, i = t.length; n < i; ++n) Av(t[n], e, r) }(a, i, o); var s = [],
                            u = r.objects,
                            l = this.layerName_,
                            h = void 0; for (var c in u) this.layers_ && -1 == this.layers_.indexOf(c) || ("GeometryCollection" === u[c].type ? (h = u[c], s.push.apply(s, Mv(h, a, i, o, l, c, e))) : (h = u[c], s.push(Fv(h, a, i, o, l, c, e)))); return s } return [] }, e.prototype.readProjectionFromObject = function(t) { return this.dataProjection }, e }(yd),
            bv = { Point: function(t, e, r) { var n = t.coordinates;
                    e && r && Nv(n, e, r); return new Rr(n) }, LineString: function(t, e) { var r = Lv(t.arcs, e); return new zp(r) }, Polygon: function(t, e) { for (var r = [], n = 0, i = t.arcs.length; n < i; ++n) r[n] = Lv(t.arcs[n], e); return new Yr(r) }, MultiPoint: function(t, e, r) { var n = t.coordinates; if (e && r)
                        for (var i = 0, o = n.length; i < o; ++i) Nv(n[i], e, r); return new vf(n) }, MultiLineString: function(t, e) { for (var r = [], n = 0, i = t.arcs.length; n < i; ++n) r[n] = Lv(t.arcs[n], e); return new gf(r) }, MultiPolygon: function(t, e) { for (var r = [], n = 0, i = t.arcs.length; n < i; ++n) { for (var o = t.arcs[n], a = [], s = 0, u = o.length; s < u; ++s) a[s] = Lv(o[s], e);
                        r[n] = a } return new Tf(r) } };

        function Lv(t, e) { for (var r, n, i = [], o = 0, a = t.length; o < a; ++o) r = t[o], o > 0 && i.pop(), n = r >= 0 ? e[r] : e[~r].slice().reverse(), i.push.apply(i, n); for (var s = 0, u = i.length; s < u; ++s) i[s] = i[s].slice(); return i }

        function Mv(t, e, r, n, i, o, a) { for (var s = t.geometries, u = [], l = 0, h = s.length; l < h; ++l) u[l] = Fv(s[l], e, r, n, i, o, a); return u }

        function Fv(t, e, r, n, i, o, a) { var s, u = t.type,
                l = bv[u];
            s = "Point" === u || "MultiPoint" === u ? l(t, r, n) : l(t, e); var h = new q;
            h.setGeometry(fd(s, !1, a)), void 0 !== t.id && h.setId(t.id); var c = t.properties; return i && (c || (c = {}), c[i] = o), c && h.setProperties(c, !0), h }

        function Av(t, e, r) { for (var n = 0, i = 0, o = 0, a = t.length; o < a; ++o) { var s = t[o];
                n += s[0], i += s[1], s[0] = n, s[1] = i, Nv(s, e, r) } }

        function Nv(t, e, r) { t[0] = t[0] * e[0] + r[0], t[1] = t[1] * e[1] + r[1] } var Gv = Iv,
            Dv = function() {
                function t(t) { this.tagName_ = t } return t.prototype.getTagName = function() { return this.tagName_ }, t }(),
            jv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            kv = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.conditions = r, K(n.conditions.length >= 2, 57), n } return jv(e, t), e }(Dv),
            Uv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Bv = function(t) {
                function e(e) { return t.call(this, "And", Array.prototype.slice.call(arguments)) || this } return Uv(e, t), e }(kv),
            Yv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            zv = function(t) {
                function e(e, r, n) { var i = t.call(this, "BBOX") || this; return i.geometryName = e, i.extent = r, i.srsName = n, i } return Yv(e, t), e }(Dv),
            Xv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Vv = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e) || this; return o.geometryName = r || "the_geom", o.geometry = n, o.srsName = i, o } return Xv(e, t), e }(Dv),
            Wv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Zv = function(t) {
                function e(e, r, n) { return t.call(this, "Contains", e, r, n) || this } return Wv(e, t), e }(Vv),
            Kv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Hv = function(t) {
                function e(e, r) { var n = t.call(this, e) || this; return n.propertyName = r, n } return Kv(e, t), e }(Dv),
            qv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Jv = function(t) {
                function e(e, r, n) { var i = t.call(this, "During", e) || this; return i.begin = r, i.end = n, i } return qv(e, t), e }(Hv),
            Qv = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            $v = function(t) {
                function e(e, r, n, i) { var o = t.call(this, e, r) || this; return o.expression = n, o.matchCase = i, o } return Qv(e, t), e }(Hv),
            tm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            em = function(t) {
                function e(e, r, n) { return t.call(this, "PropertyIsEqualTo", e, r, n) || this } return tm(e, t), e }($v),
            rm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            nm = function(t) {
                function e(e, r) { return t.call(this, "PropertyIsGreaterThan", e, r) || this } return rm(e, t), e }($v),
            im = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            om = function(t) {
                function e(e, r) { return t.call(this, "PropertyIsGreaterThanOrEqualTo", e, r) || this } return im(e, t), e }($v),
            am = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            sm = function(t) {
                function e(e, r, n) { return t.call(this, "Intersects", e, r, n) || this } return am(e, t), e }(Vv),
            um = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            lm = function(t) {
                function e(e, r, n) { var i = t.call(this, "PropertyIsBetween", e) || this; return i.lowerBoundary = r, i.upperBoundary = n, i } return um(e, t), e }(Hv),
            hm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            cm = function(t) {
                function e(e, r, n, i, o, a) { var s = t.call(this, "PropertyIsLike", e) || this; return s.pattern = r, s.wildCard = void 0 !== n ? n : "*", s.singleChar = void 0 !== i ? i : ".", s.escapeChar = void 0 !== o ? o : "!", s.matchCase = a, s } return hm(e, t), e }(Hv),
            pm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            fm = function(t) {
                function e(e) { return t.call(this, "PropertyIsNull", e) || this } return pm(e, t), e }(Hv),
            dm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            _m = function(t) {
                function e(e, r) { return t.call(this, "PropertyIsLessThan", e, r) || this } return dm(e, t), e }($v),
            gm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            ym = function(t) {
                function e(e, r) { return t.call(this, "PropertyIsLessThanOrEqualTo", e, r) || this } return gm(e, t), e }($v),
            vm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            mm = function(t) {
                function e(e) { var r = t.call(this, "Not") || this; return r.condition = e, r } return vm(e, t), e }(Dv),
            Em = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Tm = function(t) {
                function e(e, r, n) { return t.call(this, "PropertyIsNotEqualTo", e, r, n) || this } return Em(e, t), e }($v),
            Sm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            wm = function(t) {
                function e(e) { return t.call(this, "Or", Array.prototype.slice.call(arguments)) || this } return Sm(e, t), e }(kv),
            xm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Om = function(t) {
                function e(e, r, n) { return t.call(this, "Within", e, r, n) || this } return xm(e, t), e }(Vv);

        function Rm(t) { var e = [null].concat(Array.prototype.slice.call(arguments)); return new(Function.prototype.bind.apply(Bv, e)) }

        function Cm(t, e, r) { return new zv(t, e, r) } var Pm = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            Im = { "http://www.opengis.net/gml": { boundedBy: bs(Md.prototype.readGeometryElement, "bounds") } },
            bm = { "http://www.opengis.net/wfs": { totalInserted: bs(jd), totalUpdated: bs(jd), totalDeleted: bs(jd) } },
            Lm = { "http://www.opengis.net/wfs": { TransactionSummary: bs(function(t, e) { return js({}, bm, t, e) }, "transactionSummary"), InsertResults: bs(function(t, e) { return js([], zm, t, e) }, "insertIds") } },
            Mm = { "http://www.opengis.net/wfs": { PropertyName: Ls(Xd) } },
            Fm = { "http://www.opengis.net/wfs": { Insert: Ls(function(t, e, r) { var n = r[r.length - 1],
                            i = n.featureType,
                            o = n.featureNS,
                            a = n.gmlVersion,
                            s = Ss(o, i);
                        t.appendChild(s), 2 === a ? r_.prototype.writeFeatureElement(s, e, r) : Hd.prototype.writeFeatureElement(s, e, r) }), Update: Ls(function(t, e, r) { var n = r[r.length - 1];
                        K(void 0 !== e.getId(), 27); var i = n.featureType,
                            o = n.featurePrefix,
                            a = n.featureNS,
                            s = Vm(o, i),
                            u = e.getGeometryName();
                        t.setAttribute("typeName", s), t.setAttributeNS(Nm, "xmlns:" + o, a); var l = e.getId(); if (void 0 !== l) { for (var h = e.getKeys(), c = [], p = 0, f = h.length; p < f; p++) { var d = e.get(h[p]); if (void 0 !== d) { var _ = h[p];
                                    d && "function" == typeof d.getSimplifiedGeometry && (_ = u), c.push({ name: _, value: d }) } }
                            Us({ gmlVersion: n.gmlVersion, node: t, hasZ: n.hasZ, srsName: n.srsName }, Fm, Fs("Property"), c, r), Xm(t, l, r) } }), Delete: Ls(function(t, e, r) { var n = r[r.length - 1];
                        K(void 0 !== e.getId(), 26); var i = n.featureType,
                            o = n.featurePrefix,
                            a = n.featureNS,
                            s = Vm(o, i);
                        t.setAttribute("typeName", s), t.setAttributeNS(Nm, "xmlns:" + o, a); var u = e.getId();
                        void 0 !== u && Xm(t, u, r) }), Property: Ls(function(t, e, r) { var n = Ss(Dm, "Name"),
                            i = r[r.length - 1].gmlVersion; if (t.appendChild(n), Xd(n, e.name), void 0 !== e.value && null !== e.value) { var o = Ss(Dm, "Value");
                            t.appendChild(o), e.value && "function" == typeof e.value.getSimplifiedGeometry ? 2 === i ? r_.prototype.writeGeometryElement(o, e.value, r) : Hd.prototype.writeGeometryElement(o, e.value, r) : Xd(o, e.value) } }), Native: Ls(function(t, e, r) { e.vendorId && t.setAttribute("vendorId", e.vendorId);
                        void 0 !== e.safeToIgnore && t.setAttribute("safeToIgnore", String(e.safeToIgnore));
                        void 0 !== e.value && Xd(t, e.value) }) } },
            Am = "feature",
            Nm = "http://www.w3.org/2000/xmlns/",
            Gm = "http://www.opengis.net/ogc",
            Dm = "http://www.opengis.net/wfs",
            jm = "http://www.opengis.net/fes",
            km = { "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd", "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd" },
            Um = "1.1.0",
            Bm = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.featureType_ = n.featureType, r.featureNS_ = n.featureNS, r.gmlFormat_ = n.gmlFormat ? n.gmlFormat : new Hd, r.schemaLocation_ = n.schemaLocation ? n.schemaLocation : km[Um], r } return Pm(e, t), e.prototype.getFeatureType = function() { return this.featureType_ }, e.prototype.setFeatureType = function(t) { this.featureType_ = t }, e.prototype.readFeaturesFromNode = function(t, e) { var r = { node: t };
                    p(r, { featureType: this.featureType_, featureNS: this.featureNS_ }), p(r, this.getReadOptions(t, e || {})); var n = [r];
                    this.gmlFormat_.FEATURE_COLLECTION_PARSERS[Id].featureMember = Cs(Md.prototype.readFeaturesInternal); var i = js([], this.gmlFormat_.FEATURE_COLLECTION_PARSERS, t, n, this.gmlFormat_); return i || (i = []), i }, e.prototype.readTransactionResponse = function(t) { if (t) { if ("string" == typeof t) { var e = Os(t); return this.readTransactionResponseFromDocument(e) } return xs(t) ? this.readTransactionResponseFromDocument(t) : this.readTransactionResponseFromNode(t) } }, e.prototype.readFeatureCollectionMetadata = function(t) { if (t) { if ("string" == typeof t) { var e = Os(t); return this.readFeatureCollectionMetadataFromDocument(e) } return xs(t) ? this.readFeatureCollectionMetadataFromDocument(t) : this.readFeatureCollectionMetadataFromNode(t) } }, e.prototype.readFeatureCollectionMetadataFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readFeatureCollectionMetadataFromNode(e) }, e.prototype.readFeatureCollectionMetadataFromNode = function(t) { var e = {},
                        r = kd(t.getAttribute("numberOfFeatures")); return e.numberOfFeatures = r, js(e, Im, t, [], this.gmlFormat_) }, e.prototype.readTransactionResponseFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readTransactionResponseFromNode(e) }, e.prototype.readTransactionResponseFromNode = function(t) { return js({}, Lm, t, []) }, e.prototype.writeGetFeature = function(t) { var e, r = Ss(Dm, "GetFeature"); if (r.setAttribute("service", "WFS"), r.setAttribute("version", "1.1.0"), t && (t.handle && r.setAttribute("handle", t.handle), t.outputFormat && r.setAttribute("outputFormat", t.outputFormat), void 0 !== t.maxFeatures && r.setAttribute("maxFeatures", String(t.maxFeatures)), t.resultType && r.setAttribute("resultType", t.resultType), void 0 !== t.startIndex && r.setAttribute("startIndex", String(t.startIndex)), void 0 !== t.count && r.setAttribute("count", String(t.count)), void 0 !== t.viewParams && r.setAttribute("viewParams", t.viewParams), e = t.filter, t.bbox)) { K(t.geometryName, 12); var n = Cm(t.geometryName, t.bbox, t.srsName);
                        e = e ? Rm(e, n) : n }
                    r.setAttributeNS(Ts, "xsi:schemaLocation", this.schemaLocation_); var i = { node: r }; return p(i, { srsName: t.srsName, featureNS: t.featureNS ? t.featureNS : this.featureNS_, featurePrefix: t.featurePrefix, geometryName: t.geometryName, filter: e, propertyNames: t.propertyNames ? t.propertyNames : [] }), K(Array.isArray(t.featureTypes), 11),
                        function(t, e, r) { var n = r[r.length - 1],
                                i = p({}, n);
                            i.node = t, Us(i, Wm, Fs("Query"), e, r) }(r, t.featureTypes, [i]), r }, e.prototype.writeTransaction = function(t, e, r, n) { var i, o, a = [],
                        s = Ss(Dm, "Transaction"),
                        u = n.version ? n.version : Um,
                        l = "1.0.0" === u ? 2 : 3;
                    s.setAttribute("service", "WFS"), s.setAttribute("version", u), n && (i = n.gmlOptions ? n.gmlOptions : {}, n.handle && s.setAttribute("handle", n.handle)); var h = km[u];
                    s.setAttributeNS(Ts, "xsi:schemaLocation", h); var c = n.featurePrefix ? n.featurePrefix : Am; return t && (o = p({ node: s }, { featureNS: n.featureNS, featureType: n.featureType, featurePrefix: c, gmlVersion: l, hasZ: n.hasZ, srsName: n.srsName }), p(o, i), Us(o, Fm, Fs("Insert"), t, a)), e && (o = p({ node: s }, { featureNS: n.featureNS, featureType: n.featureType, featurePrefix: c, gmlVersion: l, hasZ: n.hasZ, srsName: n.srsName }), p(o, i), Us(o, Fm, Fs("Update"), e, a)), r && Us({ node: s, featureNS: n.featureNS, featureType: n.featureType, featurePrefix: c, gmlVersion: l, srsName: n.srsName }, Fm, Fs("Delete"), r, a), n.nativeElements && Us({ node: s, featureNS: n.featureNS, featureType: n.featureType, featurePrefix: c, gmlVersion: l, srsName: n.srsName }, Fm, Fs("Native"), n.nativeElements, a), s }, e.prototype.readProjectionFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readProjectionFromNode(e);
                    return null }, e.prototype.readProjectionFromNode = function(t) { if (t.firstElementChild && t.firstElementChild.firstElementChild)
                        for (var e = (t = t.firstElementChild.firstElementChild).firstElementChild; e; e = e.nextElementSibling)
                            if (0 !== e.childNodes.length && (1 !== e.childNodes.length || 3 !== e.firstChild.nodeType)) { var r = [{}]; return this.gmlFormat_.readGeometryElement(e, r), we(r.pop().srsName) }
                    return null }, e }(Cd); var Ym = { "http://www.opengis.net/ogc": { FeatureId: Cs(function(t, e) { return t.getAttribute("fid") }) } }; var zm = { "http://www.opengis.net/wfs": { Feature: function(t, e) { Ds(Ym, t, e) } } };

        function Xm(t, e, r) { var n = Ss(Gm, "Filter"),
                i = Ss(Gm, "FeatureId");
            n.appendChild(i), i.setAttribute("fid", e), t.appendChild(n) }

        function Vm(t, e) { var r = (t = t || Am) + ":"; return 0 === e.indexOf(r) ? e : r + e } var Wm = { "http://www.opengis.net/wfs": { Query: Ls(function(t, e, r) { var n, i = r[r.length - 1],
                        o = i.featurePrefix,
                        a = i.featureNS,
                        s = i.propertyNames,
                        u = i.srsName;
                    n = o ? Vm(o, e) : e;
                    t.setAttribute("typeName", n), u && t.setAttribute("srsName", u);
                    a && t.setAttributeNS(Nm, "xmlns:" + o, a); var l = p({}, i);
                    l.node = t, Us(l, Mm, Fs("PropertyName"), s, r); var h = i.filter; if (h) { var c = Ss(Gm, "Filter");
                        t.appendChild(c), Zm(c, h, r) } }) }, "http://www.opengis.net/ogc": { During: Ls(function(t, e, r) { var n = Ss(jm, "ValueReference");
                    Xd(n, e.propertyName), t.appendChild(n); var i = Ss(Id, "TimePeriod");
                    t.appendChild(i); var o = Ss(Id, "begin");
                    i.appendChild(o), $m(o, e.begin); var a = Ss(Id, "end");
                    i.appendChild(a), $m(a, e.end) }), And: Ls(Km), Or: Ls(Km), Not: Ls(function(t, e, r) { var n = { node: t },
                        i = e.condition;
                    Us(n, Wm, Fs(i.getTagName()), [i], r) }), BBOX: Ls(function(t, e, r) { r[r.length - 1].srsName = e.srsName, Jm(t, e.geometryName), Hd.prototype.writeGeometryElement(t, e.extent, r) }), Contains: Ls(function(t, e, r) { r[r.length - 1].srsName = e.srsName, Jm(t, e.geometryName), Hd.prototype.writeGeometryElement(t, e.geometry, r) }), Intersects: Ls(function(t, e, r) { r[r.length - 1].srsName = e.srsName, Jm(t, e.geometryName), Hd.prototype.writeGeometryElement(t, e.geometry, r) }), Within: Ls(function(t, e, r) { r[r.length - 1].srsName = e.srsName, Jm(t, e.geometryName), Hd.prototype.writeGeometryElement(t, e.geometry, r) }), PropertyIsEqualTo: Ls(Hm), PropertyIsNotEqualTo: Ls(Hm), PropertyIsLessThan: Ls(Hm), PropertyIsLessThanOrEqualTo: Ls(Hm), PropertyIsGreaterThan: Ls(Hm), PropertyIsGreaterThanOrEqualTo: Ls(Hm), PropertyIsNull: Ls(function(t, e, r) { Jm(t, e.propertyName) }), PropertyIsBetween: Ls(function(t, e, r) { Jm(t, e.propertyName); var n = Ss(Gm, "LowerBoundary");
                    t.appendChild(n), Qm(n, "" + e.lowerBoundary); var i = Ss(Gm, "UpperBoundary");
                    t.appendChild(i), Qm(i, "" + e.upperBoundary) }), PropertyIsLike: Ls(function(t, e, r) { t.setAttribute("wildCard", e.wildCard), t.setAttribute("singleChar", e.singleChar), t.setAttribute("escapeChar", e.escapeChar), void 0 !== e.matchCase && t.setAttribute("matchCase", e.matchCase.toString());
                    Jm(t, e.propertyName), Qm(t, "" + e.pattern) }) } };

        function Zm(t, e, r) { Us({ node: t }, Wm, Fs(e.getTagName()), [e], r) }

        function Km(t, e, r) { for (var n = { node: t }, i = e.conditions, o = 0, a = i.length; o < a; ++o) { var s = i[o];
                Us(n, Wm, Fs(s.getTagName()), [s], r) } }

        function Hm(t, e, r) { void 0 !== e.matchCase && t.setAttribute("matchCase", e.matchCase.toString()), Jm(t, e.propertyName), Qm(t, "" + e.expression) }

        function qm(t, e, r) { var n = Ss(Gm, t);
            Xd(n, r), e.appendChild(n) }

        function Jm(t, e) { qm("PropertyName", t, e) }

        function Qm(t, e) { qm("Literal", t, e) }

        function $m(t, e) { var r = Ss(Id, "TimeInstant");
            t.appendChild(r); var n = Ss(Id, "timePosition");
            r.appendChild(n), Xd(n, e) } var tE = Bm,
            eE = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            rE = { POINT: Rr, LINESTRING: zp, POLYGON: Yr, MULTIPOINT: vf, MULTILINESTRING: gf, MULTIPOLYGON: Tf },
            nE = "EMPTY",
            iE = "Z",
            oE = "M",
            aE = 1,
            sE = 2,
            uE = 3,
            lE = 4,
            hE = 5,
            cE = 6,
            pE = {}; for (var fE in Nt) pE[fE] = Nt[fE].toUpperCase(); var dE = function() {
                function t(t) { this.wkt = t, this.index_ = -1 } return t.prototype.isAlpha_ = function(t) { return t >= "a" && t <= "z" || t >= "A" && t <= "Z" }, t.prototype.isNumeric_ = function(t, e) { return t >= "0" && t <= "9" || "." == t && !(void 0 !== e && e) }, t.prototype.isWhiteSpace_ = function(t) { return " " == t || "\t" == t || "\r" == t || "\n" == t }, t.prototype.nextChar_ = function() { return this.wkt.charAt(++this.index_) }, t.prototype.nextToken = function() { var t, e = this.nextChar_(),
                        r = this.index_,
                        n = e; if ("(" == e) t = sE;
                    else if ("," == e) t = hE;
                    else if (")" == e) t = uE;
                    else if (this.isNumeric_(e) || "-" == e) t = lE, n = this.readNumber_();
                    else if (this.isAlpha_(e)) t = aE, n = this.readText_();
                    else { if (this.isWhiteSpace_(e)) return this.nextToken(); if ("" !== e) throw new Error("Unexpected character: " + e);
                        t = cE } return { position: r, value: n, type: t } }, t.prototype.readNumber_ = function() { var t, e = this.index_,
                        r = !1,
                        n = !1;
                    do { "." == t ? r = !0 : "e" != t && "E" != t || (n = !0), t = this.nextChar_() } while (this.isNumeric_(t, r) || !n && ("e" == t || "E" == t) || n && ("-" == t || "+" == t)); return parseFloat(this.wkt.substring(e, this.index_--)) }, t.prototype.readText_ = function() { var t, e = this.index_;
                    do { t = this.nextChar_() } while (this.isAlpha_(t)); return this.wkt.substring(e, this.index_--).toUpperCase() }, t }(),
            _E = function() {
                function t(t) { this.lexer_ = t, this.token_, this.layout_ = At.XY } return t.prototype.consume_ = function() { this.token_ = this.lexer_.nextToken() }, t.prototype.isTokenType = function(t) { return this.token_.type == t }, t.prototype.match = function(t) { var e = this.isTokenType(t); return e && this.consume_(), e }, t.prototype.parse = function() { return this.consume_(), this.parseGeometry_() }, t.prototype.parseGeometryLayout_ = function() { var t = At.XY,
                        e = this.token_; if (this.isTokenType(aE)) { var r = e.value;
                        r === iE ? t = At.XYZ : r === oE ? t = At.XYM : "ZM" === r && (t = At.XYZM), t !== At.XY && this.consume_() } return t }, t.prototype.parseGeometryCollectionText_ = function() { if (this.match(sE)) { var t = [];
                        do { t.push(this.parseGeometry_()) } while (this.match(hE)); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parsePointText_ = function() { if (this.match(sE)) { var t = this.parsePoint_(); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return null; throw new Error(this.formatErrorMessage_()) }, t.prototype.parseLineStringText_ = function() { if (this.match(sE)) { var t = this.parsePointList_(); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parsePolygonText_ = function() { if (this.match(sE)) { var t = this.parseLineStringTextList_(); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parseMultiPointText_ = function() { if (this.match(sE)) { var t = void 0; if (t = this.token_.type == sE ? this.parsePointTextList_() : this.parsePointList_(), this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parseMultiLineStringText_ = function() { if (this.match(sE)) { var t = this.parseLineStringTextList_(); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parseMultiPolygonText_ = function() { if (this.match(sE)) { var t = this.parsePolygonTextList_(); if (this.match(uE)) return t } else if (this.isEmptyGeometry_()) return []; throw new Error(this.formatErrorMessage_()) }, t.prototype.parsePoint_ = function() { for (var t = [], e = this.layout_.length, r = 0; r < e; ++r) { var n = this.token_; if (!this.match(lE)) break;
                        t.push(n.value) } if (t.length == e) return t; throw new Error(this.formatErrorMessage_()) }, t.prototype.parsePointList_ = function() { for (var t = [this.parsePoint_()]; this.match(hE);) t.push(this.parsePoint_()); return t }, t.prototype.parsePointTextList_ = function() { for (var t = [this.parsePointText_()]; this.match(hE);) t.push(this.parsePointText_()); return t }, t.prototype.parseLineStringTextList_ = function() { for (var t = [this.parseLineStringText_()]; this.match(hE);) t.push(this.parseLineStringText_()); return t }, t.prototype.parsePolygonTextList_ = function() { for (var t = [this.parsePolygonText_()]; this.match(hE);) t.push(this.parsePolygonText_()); return t }, t.prototype.isEmptyGeometry_ = function() { var t = this.isTokenType(aE) && this.token_.value == nE; return t && this.consume_(), t }, t.prototype.formatErrorMessage_ = function() { return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`" }, t.prototype.parseGeometry_ = function() { var t = this.token_; if (this.match(aE)) { var e = t.value; if (this.layout_ = this.parseGeometryLayout_(), "GEOMETRYCOLLECTION" == e) { var r = this.parseGeometryCollectionText_(); return new cd(r) } var n = rE[e]; if (!n) throw new Error("Invalid geometry type: " + e); var i = void 0; switch (e) {
                            case "POINT":
                                i = this.parsePointText_(); break;
                            case "LINESTRING":
                                i = this.parseLineStringText_(); break;
                            case "POLYGON":
                                i = this.parsePolygonText_(); break;
                            case "MULTIPOINT":
                                i = this.parseMultiPointText_(); break;
                            case "MULTILINESTRING":
                                i = this.parseMultiLineStringText_(); break;
                            case "MULTIPOLYGON":
                                i = this.parseMultiPolygonText_(); break;
                            default:
                                throw new Error("Invalid geometry type: " + e) } return i || (i = n === rE.POINT ? [NaN, NaN] : []), new n(i, this.layout_) } throw new Error(this.formatErrorMessage_()) }, t }(),
            gE = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.splitCollection_ = void 0 !== n.splitCollection && n.splitCollection, r } return eE(e, t), e.prototype.parse_ = function(t) { var e = new dE(t); return new _E(e).parse() }, e.prototype.readFeatureFromText = function(t, e) { var r = this.readGeometryFromText(t, e); if (r) { var n = new q; return n.setGeometry(r), n } return null }, e.prototype.readFeaturesFromText = function(t, e) { for (var r = [], n = this.readGeometryFromText(t, e), i = [], o = 0, a = (r = this.splitCollection_ && n.getType() == Nt.GEOMETRY_COLLECTION ? n.getGeometriesArray() : [n]).length; o < a; ++o) { var s = new q;
                        s.setGeometry(r[o]), i.push(s) } return i }, e.prototype.readGeometryFromText = function(t, e) { var r = this.parse_(t); return r ? fd(r, !1, e) : null }, e.prototype.writeFeatureText = function(t, e) { var r = t.getGeometry(); return r ? this.writeGeometryText(r, e) : "" }, e.prototype.writeFeaturesText = function(t, e) { if (1 == t.length) return this.writeFeatureText(t[0], e); for (var r = [], n = 0, i = t.length; n < i; ++n) r.push(t[n].getGeometry()); var o = new cd(r); return this.writeGeometryText(o, e) }, e.prototype.writeGeometryText = function(t, e) { return TE(fd(t, !0, e)) }, e }(eg);

        function yE(t) { var e = t.getCoordinates(); return 0 === e.length ? "" : e.join(" ") }

        function vE(t) { for (var e = t.getCoordinates(), r = [], n = 0, i = e.length; n < i; ++n) r.push(e[n].join(" ")); return r.join(",") }

        function mE(t) { for (var e = [], r = t.getLinearRings(), n = 0, i = r.length; n < i; ++n) e.push("(" + vE(r[n]) + ")"); return e.join(",") } var EE = { Point: yE, LineString: vE, Polygon: mE, MultiPoint: function(t) { for (var e = [], r = t.getPoints(), n = 0, i = r.length; n < i; ++n) e.push("(" + yE(r[n]) + ")"); return e.join(",") }, MultiLineString: function(t) { for (var e = [], r = t.getLineStrings(), n = 0, i = r.length; n < i; ++n) e.push("(" + vE(r[n]) + ")"); return e.join(",") }, MultiPolygon: function(t) { for (var e = [], r = t.getPolygons(), n = 0, i = r.length; n < i; ++n) e.push("(" + mE(r[n]) + ")"); return e.join(",") }, GeometryCollection: function(t) { for (var e = [], r = t.getGeometries(), n = 0, i = r.length; n < i; ++n) e.push(TE(r[n])); return e.join(",") } };

        function TE(t) { var e = t.getType(),
                r = (0, EE[e])(t); if (e = e.toUpperCase(), "function" == typeof t.getFlatCoordinates) { var n = function(t) { var e = t.getLayout(),
                        r = ""; return e !== At.XYZ && e !== At.XYZM || (r += iE), e !== At.XYM && e !== At.XYZM || (r += oE), r }(t);
                n.length > 0 && (e += " " + n) } return 0 === r.length ? e + " " + nE : e + "(" + r + ")" } var SE = gE,
            wE = "http://www.w3.org/1999/xlink";

        function xE(t) { return t.getAttributeNS(wE, "href") } var OE = function() {
                function t() {} return t.prototype.read = function(t) { if (t) { if ("string" == typeof t) { var e = Os(t); return this.readFromDocument(e) } return xs(t) ? this.readFromDocument(t) : this.readFromNode(t) } return null }, t.prototype.readFromDocument = function(t) {}, t.prototype.readFromNode = function(t) {}, t }(),
            RE = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            CE = [null, "http://www.opengis.net/wms"],
            PE = Gs(CE, { Service: bs(function(t, e) { return js({}, LE, t, e) }), Capability: bs(function(t, e) { return js({}, IE, t, e) }) }),
            IE = Gs(CE, { Request: bs(function(t, e) { return js({}, kE, t, e) }), Exception: bs(function(t, e) { return js([], NE, t, e) }), Layer: bs(function(t, e) { return js({}, GE, t, e) }) }),
            bE = function(t) {
                function e() { var e = t.call(this) || this; return e.version = void 0, e } return RE(e, t), e.prototype.readFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
                    return null }, e.prototype.readFromNode = function(t) { this.version = t.getAttribute("version").trim(); var e = js({ version: this.version }, PE, t, []); return e || null }, e }(OE),
            LE = Gs(CE, { Name: bs(Ud), Title: bs(Ud), Abstract: bs(Ud), KeywordList: bs(HE), OnlineResource: bs(xE), ContactInformation: bs(function(t, e) { return js({}, ME, t, e) }), Fees: bs(Ud), AccessConstraints: bs(Ud), LayerLimit: bs(jd), MaxWidth: bs(jd), MaxHeight: bs(jd) }),
            ME = Gs(CE, { ContactPersonPrimary: bs(function(t, e) { return js({}, FE, t, e) }), ContactPosition: bs(Ud), ContactAddress: bs(function(t, e) { return js({}, AE, t, e) }), ContactVoiceTelephone: bs(Ud), ContactFacsimileTelephone: bs(Ud), ContactElectronicMailAddress: bs(Ud) }),
            FE = Gs(CE, { ContactPerson: bs(Ud), ContactOrganization: bs(Ud) }),
            AE = Gs(CE, { AddressType: bs(Ud), Address: bs(Ud), City: bs(Ud), StateOrProvince: bs(Ud), PostCode: bs(Ud), Country: bs(Ud) }),
            NE = Gs(CE, { Format: Cs(Ud) }),
            GE = Gs(CE, { Name: bs(Ud), Title: bs(Ud), Abstract: bs(Ud), KeywordList: bs(HE), CRS: Is(Ud), EX_GeographicBoundingBox: bs(function(t, e) { var r = js({}, jE, t, e); if (!r) return; var n = r.westBoundLongitude,
                        i = r.southBoundLatitude,
                        o = r.eastBoundLongitude,
                        a = r.northBoundLatitude; if (void 0 === n || void 0 === i || void 0 === o || void 0 === a) return; return [n, i, o, a] }), BoundingBox: Is(function(t, e) { var r = [Dd(t.getAttribute("minx")), Dd(t.getAttribute("miny")), Dd(t.getAttribute("maxx")), Dd(t.getAttribute("maxy"))],
                        n = [Dd(t.getAttribute("resx")), Dd(t.getAttribute("resy"))]; return { crs: t.getAttribute("CRS"), extent: r, res: n } }), Dimension: Is(function(t, e) { return { name: t.getAttribute("name"), units: t.getAttribute("units"), unitSymbol: t.getAttribute("unitSymbol"), default: t.getAttribute("default"), multipleValues: Ad(t.getAttribute("multipleValues")), nearestValue: Ad(t.getAttribute("nearestValue")), current: Ad(t.getAttribute("current")), values: Ud(t) } }), Attribution: bs(function(t, e) { return js({}, DE, t, e) }), AuthorityURL: Is(function(t, e) { var r = WE(t, e); if (r) return r.name = t.getAttribute("name"), r; return }), Identifier: Is(Ud), MetadataURL: Is(function(t, e) { var r = WE(t, e); if (r) return r.type = t.getAttribute("type"), r; return }), DataURL: Is(WE), FeatureListURL: Is(WE), Style: Is(function(t, e) { return js({}, zE, t, e) }), MinScaleDenominator: bs(Gd), MaxScaleDenominator: bs(Gd), Layer: Is(function(t, e) { var r = e[e.length - 1],
                        n = js({}, GE, t, e); if (!n) return; var i = Ad(t.getAttribute("queryable"));
                    void 0 === i && (i = r.queryable);
                    n.queryable = void 0 !== i && i; var o = kd(t.getAttribute("cascaded"));
                    void 0 === o && (o = r.cascaded);
                    n.cascaded = o; var a = Ad(t.getAttribute("opaque"));
                    void 0 === a && (a = r.opaque);
                    n.opaque = void 0 !== a && a; var s = Ad(t.getAttribute("noSubsets"));
                    void 0 === s && (s = r.noSubsets);
                    n.noSubsets = void 0 !== s && s; var u = Dd(t.getAttribute("fixedWidth"));
                    u || (u = r.fixedWidth);
                    n.fixedWidth = u; var l = Dd(t.getAttribute("fixedHeight"));
                    l || (l = r.fixedHeight);
                    n.fixedHeight = l, ["Style", "CRS", "AuthorityURL"].forEach(function(t) { if (t in r) { var e = n[t] || [];
                            n[t] = e.concat(r[t]) } }); return ["EX_GeographicBoundingBox", "BoundingBox", "Dimension", "Attribution", "MinScaleDenominator", "MaxScaleDenominator"].forEach(function(t) { if (!(t in n)) { var e = r[t];
                            n[t] = e } }), n }) }),
            DE = Gs(CE, { Title: bs(Ud), OnlineResource: bs(xE), LogoURL: bs(KE) }),
            jE = Gs(CE, { westBoundLongitude: bs(Gd), eastBoundLongitude: bs(Gd), southBoundLatitude: bs(Gd), northBoundLatitude: bs(Gd) }),
            kE = Gs(CE, { GetCapabilities: bs(ZE), GetMap: bs(ZE), GetFeatureInfo: bs(ZE) }),
            UE = Gs(CE, { Format: Is(Ud), DCPType: Is(function(t, e) { return js({}, BE, t, e) }) }),
            BE = Gs(CE, { HTTP: bs(function(t, e) { return js({}, YE, t, e) }) }),
            YE = Gs(CE, { Get: bs(WE), Post: bs(WE) }),
            zE = Gs(CE, { Name: bs(Ud), Title: bs(Ud), Abstract: bs(Ud), LegendURL: Is(KE), StyleSheetURL: bs(WE), StyleURL: bs(WE) }),
            XE = Gs(CE, { Format: bs(Ud), OnlineResource: bs(xE) }),
            VE = Gs(CE, { Keyword: Cs(Ud) });

        function WE(t, e) { return js({}, XE, t, e) }

        function ZE(t, e) { return js({}, UE, t, e) }

        function KE(t, e) { var r = WE(t, e); if (r) { var n = [kd(t.getAttribute("width")), kd(t.getAttribute("height"))]; return r.size = n, r } }

        function HE(t, e) { return js([], VE, t, e) } var qE = bE,
            JE = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            QE = function(t) {
                function e(e) { var r = t.call(this) || this,
                        n = e || {}; return r.featureNS_ = "http://mapserver.gis.umn.edu/mapserver", r.gmlFormat_ = new r_, r.layers_ = n.layers ? n.layers : null, r } return JE(e, t), e.prototype.getLayers = function() { return this.layers_ }, e.prototype.setLayers = function(t) { this.layers_ = t }, e.prototype.readFeatures_ = function(t, e) { t.setAttribute("namespaceURI", this.featureNS_); var r = t.localName,
                        n = []; if (0 === t.childNodes.length) return n; if ("msGMLOutput" == r)
                        for (var i = 0, o = t.childNodes.length; i < o; i++) { var a = t.childNodes[i]; if (a.nodeType === Node.ELEMENT_NODE) { var s = a,
                                    u = e[0],
                                    l = s.localName.replace("_layer", ""); if (!this.layers_ || T(this.layers_, l)) { var h = l + "_feature";
                                    u.featureType = h, u.featureNS = this.featureNS_; var c = {};
                                    c[h] = Cs(this.gmlFormat_.readFeatureElement, this.gmlFormat_); var p = Gs([u.featureNS, null], c);
                                    s.setAttribute("namespaceURI", this.featureNS_); var f = js([], p, s, e, this.gmlFormat_);
                                    f && x(n, f) } } }
                    if ("FeatureCollection" == r) { var d = js([], this.gmlFormat_.FEATURE_COLLECTION_PARSERS, t, [{}], this.gmlFormat_);
                        d && (n = d) } return n }, e.prototype.readFeaturesFromNode = function(t, e) { var r = {}; return e && p(r, this.getReadOptions(t, e)), this.readFeatures_(t, [r]) }, e }(Cd),
            $E = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            tT = [null, "http://www.opengis.net/ows/1.1"],
            eT = Gs(tT, { ServiceIdentification: bs(function(t, e) { return js({}, dT, t, e) }), ServiceProvider: bs(function(t, e) { return js({}, _T, t, e) }), OperationsMetadata: bs(function(t, e) { return js({}, hT, t, e) }) }),
            rT = function(t) {
                function e() { return t.call(this) || this } return $E(e, t), e.prototype.readFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
                    return null }, e.prototype.readFromNode = function(t) { var e = js({}, eT, t, []); return e || null }, e }(OE),
            nT = Gs(tT, { DeliveryPoint: bs(Ud), City: bs(Ud), AdministrativeArea: bs(Ud), PostalCode: bs(Ud), Country: bs(Ud), ElectronicMailAddress: bs(Ud) }),
            iT = Gs(tT, { Value: Is(function(t, e) { return Ud(t) }) }),
            oT = Gs(tT, { AllowedValues: bs(function(t, e) { return js({}, iT, t, e) }) }),
            aT = Gs(tT, { Phone: bs(function(t, e) { return js({}, cT, t, e) }), Address: bs(function(t, e) { return js({}, nT, t, e) }) }),
            sT = Gs(tT, { HTTP: bs(function(t, e) { return js({}, uT, t, e) }) }),
            uT = Gs(tT, { Get: Is(function(t, e) { var r = xE(t); if (!r) return; return js({ href: r }, pT, t, e) }), Post: void 0 }),
            lT = Gs(tT, { DCP: bs(function(t, e) { return js({}, sT, t, e) }) }),
            hT = Gs(tT, { Operation: function(t, e) { var r = t.getAttribute("name"),
                        n = js({}, lT, t, e); if (!n) return;
                    e[e.length - 1][r] = n } }),
            cT = Gs(tT, { Voice: bs(Ud), Facsimile: bs(Ud) }),
            pT = Gs(tT, { Constraint: Is(function(t, e) { var r = t.getAttribute("name"); if (!r) return; return js({ name: r }, oT, t, e) }) }),
            fT = Gs(tT, { IndividualName: bs(Ud), PositionName: bs(Ud), ContactInfo: bs(function(t, e) { return js({}, aT, t, e) }) }),
            dT = Gs(tT, { Abstract: bs(Ud), AccessConstraints: bs(Ud), Fees: bs(Ud), Title: bs(Ud), ServiceTypeVersion: bs(Ud), ServiceType: bs(Ud) }),
            _T = Gs(tT, { ProviderName: bs(Ud), ProviderSite: bs(xE), ServiceContact: bs(function(t, e) { return js({}, fT, t, e) }) }); var gT = rT,
            yT = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            vT = [null, "http://www.opengis.net/wmts/1.0"],
            mT = [null, "http://www.opengis.net/ows/1.1"],
            ET = Gs(vT, { Contents: bs(function(t, e) { return js({}, ST, t, e) }) }),
            TT = function(t) {
                function e() { var e = t.call(this) || this; return e.owsParser_ = new gT, e } return yT(e, t), e.prototype.readFromDocument = function(t) { for (var e = t.firstChild; e; e = e.nextSibling)
                        if (e.nodeType == Node.ELEMENT_NODE) return this.readFromNode(e);
                    return null }, e.prototype.readFromNode = function(t) { var e = t.getAttribute("version").trim(),
                        r = this.owsParser_.readFromNode(t); return r ? (r.version = e, (r = js(r, ET, t, [])) || null) : null }, e }(OE),
            ST = Gs(vT, { Layer: Is(function(t, e) { return js({}, wT, t, e) }), TileMatrixSet: Is(function(t, e) { return js({}, bT, t, e) }) }),
            wT = Gs(vT, { Style: Is(function(t, e) { var r = js({}, xT, t, e); if (!r) return; var n = "true" === t.getAttribute("isDefault"); return r.isDefault = n, r }), Format: Is(Ud), TileMatrixSetLink: Is(function(t, e) { return js({}, OT, t, e) }), Dimension: Is(function(t, e) { return js({}, PT, t, e) }), ResourceURL: Is(function(t, e) { var r = t.getAttribute("format"),
                        n = t.getAttribute("template"),
                        i = t.getAttribute("resourceType"),
                        o = {};
                    r && (o.format = r);
                    n && (o.template = n);
                    i && (o.resourceType = i); return o }) }, Gs(mT, { Title: bs(Ud), Abstract: bs(Ud), WGS84BoundingBox: bs(function(t, e) { var r = js([], IT, t, e); if (2 != r.length) return; return $(r) }), Identifier: bs(Ud) })),
            xT = Gs(vT, { LegendURL: Is(function(t, e) { var r = {}; return r.format = t.getAttribute("format"), r.href = xE(t), r }) }, Gs(mT, { Title: bs(Ud), Identifier: bs(Ud) })),
            OT = Gs(vT, { TileMatrixSet: bs(Ud), TileMatrixSetLimits: bs(function(t, e) { return js([], RT, t, e) }) }),
            RT = Gs(vT, { TileMatrixLimits: Cs(function(t, e) { return js({}, CT, t, e) }) }),
            CT = Gs(vT, { TileMatrix: bs(Ud), MinTileRow: bs(jd), MaxTileRow: bs(jd), MinTileCol: bs(jd), MaxTileCol: bs(jd) }),
            PT = Gs(vT, { Default: bs(Ud), Value: Is(Ud) }, Gs(mT, { Identifier: bs(Ud) })),
            IT = Gs(mT, { LowerCorner: Cs(MT), UpperCorner: Cs(MT) }),
            bT = Gs(vT, { WellKnownScaleSet: bs(Ud), TileMatrix: Is(function(t, e) { return js({}, LT, t, e) }) }, Gs(mT, { SupportedCRS: bs(Ud), Identifier: bs(Ud) })),
            LT = Gs(vT, { TopLeftCorner: bs(MT), ScaleDenominator: bs(Gd), TileWidth: bs(jd), TileHeight: bs(jd), MatrixWidth: bs(jd), MatrixHeight: bs(jd) }, Gs(mT, { Identifier: bs(Ud) }));

        function MT(t, e) { var r = Ud(t).split(/\s+/); if (r && 2 == r.length) { var n = +r[0],
                    i = +r[1]; if (!isNaN(n) && !isNaN(i)) return [n, i] } } var FT = TT,
            AT = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            NT = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"];

        function GT() { var t = document.body; return !!(t.webkitRequestFullscreen || t.msRequestFullscreen && document.msFullscreenEnabled || t.requestFullscreen && document.fullscreenEnabled) }

        function DT() { return !!(document.webkitIsFullScreen || document.msFullscreenElement || document.fullscreenElement) }

        function jT(t) { t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen() } var kT = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { element: document.createElement("div"), target: n.target }) || this).cssClassName_ = void 0 !== n.className ? n.className : "ol-full-screen"; var i = void 0 !== n.label ? n.label : "⤢";
                    r.labelNode_ = "string" == typeof i ? document.createTextNode(i) : i; var o = void 0 !== n.labelActive ? n.labelActive : "×";
                    r.labelActiveNode_ = "string" == typeof o ? document.createTextNode(o) : o, r.button_ = document.createElement("button"); var a = n.tipLabel ? n.tipLabel : "Toggle full-screen";
                    r.setClassName_(r.button_, DT()), r.button_.setAttribute("type", "button"), r.button_.title = a, r.button_.appendChild(r.labelNode_), r.button_.addEventListener(N.CLICK, r.handleClick_.bind(r), !1); var s = r.cssClassName_ + " " + Ai + " " + Gi + " " + (GT() ? "" : Ni),
                        u = r.element; return u.className = s, u.appendChild(r.button_), r.keys_ = void 0 !== n.keys && n.keys, r.source_ = n.source, r } return AT(e, t), e.prototype.handleClick_ = function(t) { t.preventDefault(), this.handleFullScreen_() }, e.prototype.handleFullScreen_ = function() { if (GT()) { var t = this.getMap(); if (t)
                            if (DT()) document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                            else { var e = void 0;
                                e = this.source_ ? "string" == typeof this.source_ ? document.getElementById(this.source_) : this.source_ : t.getTargetElement(), this.keys_ ? function(t) { t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : jT(t) }(e) : jT(e) } } }, e.prototype.handleFullScreenChange_ = function() { var t = this.getMap();
                    DT() ? (this.setClassName_(this.button_, !0), fi(this.labelActiveNode_, this.labelNode_)) : (this.setClassName_(this.button_, !1), fi(this.labelNode_, this.labelActiveNode_)), t && t.updateSize() }, e.prototype.setClassName_ = function(t, e) { var r = this.cssClassName_ + "-true",
                        n = this.cssClassName_ + "-false",
                        i = e ? r : n;
                    t.classList.remove(r), t.classList.remove(n), t.classList.add(i) }, e.prototype.setMap = function(e) { if (t.prototype.setMap.call(this, e), e)
                        for (var r = 0, n = NT.length; r < n; ++r) this.listenerKeys.push(g(document, NT[r], this.handleFullScreenChange_, this)) }, e }(Li),
            UT = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            BT = "projection";

        function YT(t) { var e = t.frameState;
            e ? this.mapProjection_ != e.viewState.projection && (this.mapProjection_ = e.viewState.projection, this.transform_ = null) : this.mapProjection_ = null } var zT = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = document.createElement("div"); return i.className = void 0 !== n.className ? n.className : "ol-mouse-position", (r = t.call(this, { element: i, render: n.render || YT, target: n.target }) || this).addEventListener(Y(BT), r.handleProjectionChanged_), n.coordinateFormat && r.setCoordinateFormat(n.coordinateFormat), n.projection && r.setProjection(n.projection), r.undefinedHTML_ = void 0 !== n.undefinedHTML ? n.undefinedHTML : "&#160;", r.renderOnMouseOut_ = !!r.undefinedHTML_, r.renderedHTML_ = i.innerHTML, r.mapProjection_ = null, r.transform_ = null, r } return UT(e, t), e.prototype.handleProjectionChanged_ = function() { this.transform_ = null }, e.prototype.getCoordinateFormat = function() { return this.get("coordinateFormat") }, e.prototype.getProjection = function() { return this.get(BT) }, e.prototype.handleMouseMove = function(t) { var e = this.getMap();
                    this.updateHTML_(e.getEventPixel(t)) }, e.prototype.handleMouseOut = function(t) { this.updateHTML_(null) }, e.prototype.setMap = function(e) { if (t.prototype.setMap.call(this, e), e) { var r = e.getViewport();
                        this.listenerKeys.push(g(r, pn.POINTERMOVE, this.handleMouseMove, this)), this.renderOnMouseOut_ && this.listenerKeys.push(g(r, pn.POINTEROUT, this.handleMouseOut, this)) } }, e.prototype.setCoordinateFormat = function(t) { this.set("coordinateFormat", t) }, e.prototype.setProjection = function(t) { this.set(BT, we(t)) }, e.prototype.updateHTML_ = function(t) { var e = this.undefinedHTML_; if (t && this.mapProjection_) { if (!this.transform_) { var r = this.getProjection();
                            this.transform_ = r ? be(this.mapProjection_, r) : Te } var n = this.getMap().getCoordinateFromPixelInternal(t); if (n) { var i = je();
                            i && (this.transform_ = be(this.mapProjection_, i)), this.transform_(n, n); var o = this.getCoordinateFormat();
                            e = o ? o(n) : n.toString() } }
                    this.renderedHTML_ && e === this.renderedHTML_ || (this.element.innerHTML = e, this.renderedHTML_ = e) }, e }(Li),
            XT = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            VT = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this } return XT(e, t), e.prototype.createRenderer = function() { return new Ba(this) }, e }(Ii);

        function WT(t) { this.validateExtent_(), this.updateBox_() } var ZT = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { element: document.createElement("div"), render: n.render || WT, target: n.target }) || this).boundHandleRotationChanged_ = r.handleRotationChanged_.bind(r), r.collapsed_ = void 0 === n.collapsed || n.collapsed, r.collapsible_ = void 0 === n.collapsible || n.collapsible, r.collapsible_ || (r.collapsed_ = !1), r.rotateWithView_ = void 0 !== n.rotateWithView && n.rotateWithView, r.viewExtent_ = void 0; var i = void 0 !== n.className ? n.className : "ol-overviewmap",
                        o = void 0 !== n.tipLabel ? n.tipLabel : "Overview map",
                        a = void 0 !== n.collapseLabel ? n.collapseLabel : "«"; "string" == typeof a ? (r.collapseLabel_ = document.createElement("span"), r.collapseLabel_.textContent = a) : r.collapseLabel_ = a; var s = void 0 !== n.label ? n.label : "»"; "string" == typeof s ? (r.label_ = document.createElement("span"), r.label_.textContent = s) : r.label_ = s; var u = r.collapsible_ && !r.collapsed_ ? r.collapseLabel_ : r.label_,
                        l = document.createElement("button");
                    l.setAttribute("type", "button"), l.title = o, l.appendChild(u), l.addEventListener(N.CLICK, r.handleClick_.bind(r), !1), r.ovmapDiv_ = document.createElement("div"), r.ovmapDiv_.className = "ol-overviewmap-map", r.ovmap_ = new VT({ view: n.view }); var h = r.ovmap_;
                    n.layers && n.layers.forEach(function(t) { h.addLayer(t) }); var c = document.createElement("div");
                    c.className = "ol-overviewmap-box", c.style.boxSizing = "border-box", r.boxOverlay_ = new Za({ position: [0, 0], positioning: Xa.CENTER_CENTER, element: c }), r.ovmap_.addOverlay(r.boxOverlay_); var p = i + " " + Ai + " " + Gi + (r.collapsed_ && r.collapsible_ ? " " + Di : "") + (r.collapsible_ ? "" : " ol-uncollapsible"),
                        f = r.element;
                    f.className = p, f.appendChild(r.ovmapDiv_), f.appendChild(l); var d = r,
                        _ = r.boxOverlay_,
                        g = r.boxOverlay_.getElement(),
                        y = function(t) { var e, r = { clientX: (e = t).clientX - g.offsetWidth / 2, clientY: e.clientY + g.offsetHeight / 2 },
                                n = h.getEventCoordinateInternal(r);
                            _.setPosition(n) },
                        v = function(t) { var e = h.getEventCoordinateInternal(t);
                            d.getMap().getView().setCenterInternal(e), window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", v) }; return g.addEventListener("mousedown", function() { window.addEventListener("mousemove", y), window.addEventListener("mouseup", v) }), r } return XT(e, t), e.prototype.setMap = function(e) { var r = this.getMap(); if (e !== r) { if (r) { var n = r.getView();
                            n && this.unbindView_(n), this.ovmap_.setTarget(null) } if (t.prototype.setMap.call(this, e), e) { this.ovmap_.setTarget(this.ovmapDiv_), this.listenerKeys.push(g(e, c, this.handleMapPropertyChange_, this)); var i = e.getView();
                            i && (this.bindView_(i), i.isDef() && (this.ovmap_.updateSize(), this.resetExtent_())) } } }, e.prototype.handleMapPropertyChange_ = function(t) { if (t.key === vn.VIEW) { var e = t.oldValue;
                        e && this.unbindView_(e); var r = this.getMap().getView();
                        this.bindView_(r) } }, e.prototype.bindView_ = function(t) { t.addEventListener(Y(Bn), this.boundHandleRotationChanged_) }, e.prototype.unbindView_ = function(t) { t.removeEventListener(Y(Bn), this.boundHandleRotationChanged_) }, e.prototype.handleRotationChanged_ = function() { this.rotateWithView_ && this.ovmap_.getView().setRotation(this.getMap().getView().getRotation()) }, e.prototype.validateExtent_ = function() { var t = this.getMap(),
                        e = this.ovmap_; if (t.isRendered() && e.isRendered()) { var r = t.getSize(),
                            n = t.getView().calculateExtentInternal(r); if (!this.viewExtent_ || !pt(n, this.viewExtent_)) { this.viewExtent_ = n; var i = e.getSize(),
                                o = e.getView().calculateExtentInternal(i),
                                a = e.getPixelFromCoordinateInternal(Ct(n)),
                                s = e.getPixelFromCoordinateInternal(Tt(n)),
                                u = Math.abs(a[0] - s[0]),
                                l = Math.abs(a[1] - s[1]),
                                h = i[0],
                                c = i[1];
                            u < .1 * h || l < .1 * c || u > .75 * h || l > .75 * c ? this.resetExtent_() : it(o, n) || this.recenter_() } } }, e.prototype.resetExtent_ = function() { var t = this.getMap(),
                        e = this.ovmap_,
                        r = t.getSize(),
                        n = t.getView().calculateExtentInternal(r),
                        i = e.getView(),
                        o = Math.log(7.5) / Math.LN2;
                    Mt(n, 1 / (.1 * Math.pow(2, o / 2))), i.fitInternal(Xr(n)) }, e.prototype.recenter_ = function() { var t = this.getMap(),
                        e = this.ovmap_,
                        r = t.getView();
                    e.getView().setCenterInternal(r.getCenterInternal()) }, e.prototype.updateBox_ = function() { var t = this.getMap(),
                        e = this.ovmap_; if (t.isRendered() && e.isRendered()) { var r = t.getSize(),
                            n = t.getView(),
                            i = e.getView(),
                            o = this.rotateWithView_ ? 0 : -n.getRotation(),
                            a = this.boxOverlay_,
                            s = this.boxOverlay_.getElement(),
                            u = n.getCenterInternal(),
                            l = n.getResolution(),
                            h = i.getResolution(),
                            c = r[0] * l / h,
                            p = r[1] * l / h; if (a.setPosition(u), s) { s.style.width = c + "px", s.style.height = p + "px"; var f = "rotate(" + o + "rad)";
                            s.style.transform = f } } }, e.prototype.handleClick_ = function(t) { t.preventDefault(), this.handleToggle_() }, e.prototype.handleToggle_ = function() { this.element.classList.toggle(Di), this.collapsed_ ? fi(this.collapseLabel_, this.label_) : fi(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_; var t = this.ovmap_; if (!this.collapsed_) { if (t.isRendered()) return this.viewExtent_ = void 0, void t.render();
                        t.updateSize(), this.resetExtent_(), y(t, _n, function(t) { this.updateBox_() }, this) } }, e.prototype.getCollapsible = function() { return this.collapsible_ }, e.prototype.setCollapsible = function(t) { this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), !t && this.collapsed_ && this.handleToggle_()) }, e.prototype.setCollapsed = function(t) { this.collapsible_ && this.collapsed_ !== t && this.handleToggle_() }, e.prototype.getCollapsed = function() { return this.collapsed_ }, e.prototype.getRotateWithView = function() { return this.rotateWithView_ }, e.prototype.setRotateWithView = function(t) { this.rotateWithView_ !== t && (this.rotateWithView_ = t, 0 !== this.getMap().getView().getRotation() && (this.rotateWithView_ ? this.handleRotationChanged_() : this.ovmap_.getView().setRotation(0), this.viewExtent_ = void 0, this.validateExtent_(), this.updateBox_())) }, e.prototype.getOverviewMap = function() { return this.ovmap_ }, e }(Li),
            KT = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            HT = "units",
            qT = { DEGREES: "degrees", IMPERIAL: "imperial", NAUTICAL: "nautical", METRIC: "metric", US: "us" },
            JT = [1, 2, 5];

        function QT(t) { var e = t.frameState;
            this.viewState_ = e ? e.viewState : null, this.updateElement_() } var $T = function(t) {
                function e(e) { var r = this,
                        n = e || {},
                        i = void 0 !== n.className ? n.className : n.bar ? "ol-scale-bar" : "ol-scale-line"; return (r = t.call(this, { element: document.createElement("div"), render: n.render || QT, target: n.target }) || this).innerElement_ = document.createElement("div"), r.innerElement_.className = i + "-inner", r.element.className = i + " " + Ai, r.element.appendChild(r.innerElement_), r.viewState_ = null, r.minWidth_ = void 0 !== n.minWidth ? n.minWidth : 64, r.renderedVisible_ = !1, r.renderedWidth_ = void 0, r.renderedHTML_ = "", r.addEventListener(Y(HT), r.handleUnitsChanged_), r.setUnits(n.units || qT.METRIC), r.scaleBar_ = n.bar || !1, r.scaleBarSteps_ = n.steps || 4, r.scaleBarText_ = n.text || !1, r } return KT(e, t), e.prototype.getUnits = function() { return this.get(HT) }, e.prototype.handleUnitsChanged_ = function() { this.updateElement_() }, e.prototype.setUnits = function(t) { this.set(HT, t) }, e.prototype.updateElement_ = function() { var t = this.viewState_; if (t) { var e = t.center,
                            r = t.projection,
                            n = this.getUnits(),
                            i = n == qT.DEGREES ? te.DEGREES : te.METERS,
                            o = xe(r, t.resolution, e, i),
                            a = this.minWidth_ * o,
                            s = ""; if (n == qT.DEGREES) { var u = $t[te.DEGREES];
                            (a *= u) < u / 60 ? (s = "″", o *= 3600) : a < u ? (s = "′", o *= 60) : s = "°" } else n == qT.IMPERIAL ? a < .9144 ? (s = "in", o /= .0254) : a < 1609.344 ? (s = "ft", o /= .3048) : (s = "mi", o /= 1609.344) : n == qT.NAUTICAL ? (o /= 1852, s = "nm") : n == qT.METRIC ? a < .001 ? (s = "μm", o *= 1e6) : a < 1 ? (s = "mm", o *= 1e3) : a < 1e3 ? s = "m" : (s = "km", o /= 1e3) : n == qT.US ? a < .9144 ? (s = "in", o *= 39.37) : a < 1609.344 ? (s = "ft", o /= .30480061) : (s = "mi", o /= 1609.3472) : K(!1, 33); for (var l, h, c, p, f = 3 * Math.floor(Math.log(this.minWidth_ * o) / Math.log(10));;) { c = Math.floor(f / 3); var d = Math.pow(10, c); if (l = JT[(f % 3 + 3) % 3] * d, h = Math.round(l / o), isNaN(h)) return this.element.style.display = "none", void(this.renderedVisible_ = !1); if (h >= this.minWidth_) break;++f }
                        p = this.scaleBar_ ? this.createScaleBar(h, l, s) : l.toFixed(c < 0 ? -c : 0) + " " + s, this.renderedHTML_ != p && (this.innerElement_.innerHTML = p, this.renderedHTML_ = p), this.renderedWidth_ != h && (this.innerElement_.style.width = h + "px", this.renderedWidth_ = h), this.renderedVisible_ || (this.element.style.display = "", this.renderedVisible_ = !0) } else this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1) }, e.prototype.createScaleBar = function(t, e, r) { for (var n = "1 : " + Math.round(this.getScaleForResolution()).toLocaleString(), i = [], o = t / this.scaleBarSteps_, a = "#ffffff", s = 0; s < this.scaleBarSteps_; s++) 0 === s && i.push(this.createMarker("absolute", s)), i.push('<div><div class="ol-scale-singlebar" style="width: ' + o + "px;background-color: " + a + ';"></div>' + this.createMarker("relative", s) + (s % 2 == 0 || 2 === this.scaleBarSteps_ ? this.createStepText(s, t, !1, e, r) : "") + "</div>"), s === this.scaleBarSteps_ - 1 && i.push(this.createStepText(s + 1, t, !0, e, r)), a = "#ffffff" === a ? "#000000" : "#ffffff"; return '<div style="display: flex;">' + (this.scaleBarText_ ? '<div class="ol-scale-text" style="width: ' + t + 'px;">' + n + "</div>" : "") + i.join("") + "</div>" }, e.prototype.createMarker = function(t, e) { return '<div class="ol-scale-step-marker" style="position: ' + t + ";top: " + ("absolute" === t ? 3 : -10) + 'px;"></div>' }, e.prototype.createStepText = function(t, e, r, n, i) { var o = (0 === t ? 0 : Math.round(n / this.scaleBarSteps_ * t * 100) / 100) + (0 === t ? "" : " " + i); return '<div class="ol-scale-step-text" style="margin-left: ' + (0 === t ? -3 : e / this.scaleBarSteps_ * -1) + "px;text-align: " + (0 === t ? "left" : "center") + "; min-width: " + (0 === t ? 0 : e / this.scaleBarSteps_ * 2) + "px;left: " + (r ? e + "px" : "unset") + ';">' + o + "</div>" }, e.prototype.getScaleForResolution = function() { var t = this.getMap().getView().getResolution(),
                        e = this.viewState_.projection.getMetersPerUnit(); return parseFloat(t.toString()) * e * 39.37 * (25.4 / .28) }, e }(Li),
            tS = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            eS = { VERTICAL: 0, HORIZONTAL: 1 };

        function rS(t) { if (t.frameState) { this.sliderInitialized_ || this.initSlider_(); var e = t.frameState.viewState.resolution;
                this.currentResolution_ = e, this.setThumbPosition_(e) } } var nS = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { element: document.createElement("div"), render: n.render || rS }) || this).dragListenerKeys_ = [], r.currentResolution_ = void 0, r.direction_ = eS.VERTICAL, r.dragging_, r.heightLimit_ = 0, r.widthLimit_ = 0, r.startX_, r.startY_, r.thumbSize_ = null, r.sliderInitialized_ = !1, r.duration_ = void 0 !== n.duration ? n.duration : 200; var i = void 0 !== n.className ? n.className : "ol-zoomslider",
                        o = document.createElement("button");
                    o.setAttribute("type", "button"), o.className = i + "-thumb " + Ai; var a = r.element; return a.setAttribute("touch-action", "none"), a.className = i + " " + Ai + " " + Gi, a.appendChild(o), a.addEventListener(pn.POINTERDOWN, r.handleDraggerStart_.bind(r), !1), a.addEventListener(pn.POINTERMOVE, r.handleDraggerDrag_.bind(r), !1), a.addEventListener(pn.POINTERUP, r.handleDraggerEnd_.bind(r), !1), a.addEventListener(N.CLICK, r.handleContainerClick_.bind(r), !1), o.addEventListener(N.CLICK, L, !1), r } return tS(e, t), e.prototype.setMap = function(e) { t.prototype.setMap.call(this, e), e && e.render() }, e.prototype.initSlider_ = function() { var t = this.element,
                        e = t.offsetWidth,
                        r = t.offsetHeight,
                        n = t.firstElementChild,
                        i = getComputedStyle(n),
                        o = n.offsetWidth + parseFloat(i.marginRight) + parseFloat(i.marginLeft),
                        a = n.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom);
                    this.thumbSize_ = [o, a], e > r ? (this.direction_ = eS.HORIZONTAL, this.widthLimit_ = e - o) : (this.direction_ = eS.VERTICAL, this.heightLimit_ = r - a), this.sliderInitialized_ = !0 }, e.prototype.handleContainerClick_ = function(t) { var e = this.getMap().getView(),
                        r = this.getRelativePosition_(t.offsetX - this.thumbSize_[0] / 2, t.offsetY - this.thumbSize_[1] / 2),
                        n = this.getResolutionForPosition_(r),
                        i = e.getConstrainedZoom(e.getZoomForResolution(n));
                    e.animateInternal({ zoom: i, duration: this.duration_, easing: ri }) }, e.prototype.handleDraggerStart_ = function(t) { if (!this.dragging_ && t.target === this.element.firstElementChild) { var e = this.element.firstElementChild; if (this.getMap().getView().beginInteraction(), this.startX_ = t.clientX - parseFloat(e.style.left), this.startY_ = t.clientY - parseFloat(e.style.top), this.dragging_ = !0, 0 === this.dragListenerKeys_.length) { var r = this.handleDraggerDrag_,
                                n = this.handleDraggerEnd_;
                            this.dragListenerKeys_.push(g(document, pn.POINTERMOVE, r, this), g(document, pn.POINTERUP, n, this)) } } }, e.prototype.handleDraggerDrag_ = function(t) { if (this.dragging_) { var e = t.clientX - this.startX_,
                            r = t.clientY - this.startY_,
                            n = this.getRelativePosition_(e, r);
                        this.currentResolution_ = this.getResolutionForPosition_(n), this.getMap().getView().setResolution(this.currentResolution_) } }, e.prototype.handleDraggerEnd_ = function(t) { this.dragging_ && (this.getMap().getView().endInteraction(), this.dragging_ = !1, this.startX_ = void 0, this.startY_ = void 0, this.dragListenerKeys_.forEach(v), this.dragListenerKeys_.length = 0) }, e.prototype.setThumbPosition_ = function(t) { var e = this.getPositionForResolution_(t),
                        r = this.element.firstElementChild;
                    this.direction_ == eS.HORIZONTAL ? r.style.left = this.widthLimit_ * e + "px" : r.style.top = this.heightLimit_ * e + "px" }, e.prototype.getRelativePosition_ = function(t, e) { return kt(this.direction_ === eS.HORIZONTAL ? t / this.widthLimit_ : e / this.heightLimit_, 0, 1) }, e.prototype.getResolutionForPosition_ = function(t) { return this.getMap().getView().getResolutionForValueFunction()(1 - t) }, e.prototype.getPositionForResolution_ = function(t) { return kt(1 - this.getMap().getView().getValueForResolutionFunction()(t), 0, 1) }, e }(Li),
            iS = function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
            oS = function(t) {
                function e(e) { var r = this,
                        n = e || {};
                    (r = t.call(this, { element: document.createElement("div"), target: n.target }) || this).extent = n.extent ? n.extent : null; var i = void 0 !== n.className ? n.className : "ol-zoom-extent",
                        o = void 0 !== n.label ? n.label : "E",
                        a = void 0 !== n.tipLabel ? n.tipLabel : "Fit to extent",
                        s = document.createElement("button");
                    s.setAttribute("type", "button"), s.title = a, s.appendChild("string" == typeof o ? document.createTextNode(o) : o), s.addEventListener(N.CLICK, r.handleClick_.bind(r), !1); var u = i + " " + Ai + " " + Gi,
                        l = r.element; return l.className = u, l.appendChild(s), r } return iS(e, t), e.prototype.handleClick_ = function(t) { t.preventDefault(), this.handleZoomToExtent() }, e.prototype.handleZoomToExtent = function() { var t = this.getMap().getView(),
                        e = this.extent ? this.extent : t.getProjection().getExtent();
                    t.fitInternal(Xr(e)) }, e }(Li),
            aS = { array: {}, color: {}, colorlike: {}, control: {}, coordinate: {}, easing: {}, events: {} };
        aS.events.condition = {}, aS.extent = {}, aS.featureloader = {}, aS.format = {}, aS.format.filter = {}, aS.geom = {}, aS.has = {}, aS.interaction = {}, aS.layer = {}, aS.loadingstrategy = {}, aS.proj = {}, aS.proj.Units = {}, aS.proj.proj4 = {}, aS.render = {}, aS.render.canvas = {}, aS.renderer = {}, aS.renderer.canvas = {}, aS.renderer.webgl = {}, aS.size = {}, aS.source = {}, aS.sphere = {}, aS.style = {}, aS.style.IconImageCache = {}, aS.tilegrid = {}, aS.util = {}, aS.webgl = {}, aS.xml = {}, aS.Collection = Z, aS.Feature = q, aS.Geolocation = qr, aS.Kinetic = Jr, aS.Map = za, aS.Object = z, aS.Observable = D, aS.Observable.unByKey = function(t) { if (Array.isArray(t))
                for (var e = 0, r = t.length; e < r; ++e) v(t[e]);
            else v(t) }, aS.Overlay = Za, aS.PluggableMap = Ii, aS.View = li, aS.array.stableSort = function(t, e) { var r, n = t.length,
                i = Array(t.length); for (r = 0; r < n; r++) i[r] = { index: r, value: t[r] }; for (i.sort(function(t, r) { return e(t.value, r.value) || t.index - r.index }), r = 0; r < t.length; r++) t[r] = i[r].value }, aS.color.asArray = oa, aS.color.asString = na, aS.colorlike.asColorLike = ca, aS.control.Attribution = Xi, aS.control.Attribution.render = zi, aS.control.Control = Li, aS.control.FullScreen = kT, aS.control.MousePosition = zT, aS.control.MousePosition.render = YT, aS.control.OverviewMap = ZT, aS.control.OverviewMap.render = WT, aS.control.Rotate = Zi, aS.control.Rotate.render = Wi, aS.control.ScaleLine = $T, aS.control.ScaleLine.render = QT, aS.control.Zoom = Hi, aS.control.ZoomSlider = nS, aS.control.ZoomSlider.render = rS, aS.control.ZoomToExtent = oS, aS.control.defaults = qi, aS.coordinate.add = Xn, aS.coordinate.createStringXY = function(t) { return function(e) { return ti(e, t) } }, aS.coordinate.format = Zn, aS.coordinate.rotate = Hn, aS.coordinate.toStringHDMS = function(t, e) { return t ? Wn("NS", t[1], e) + " " + Wn("EW", t[0], e) : "" }, aS.coordinate.toStringXY = ti, aS.easing.easeIn = ei, aS.easing.easeOut = ri, aS.easing.inAndOut = ni, aS.easing.linear = ii, aS.easing.upAndDown = function(t) { return t < .5 ? ni(2 * t) : 1 - ni(2 * (t - .5)) }, aS.events.condition.altKeyOnly = io, aS.events.condition.altShiftKeysOnly = oo, aS.events.condition.always = so, aS.events.condition.click = function(t) { return t.type == ln.CLICK }, aS.events.condition.doubleClick = function(t) { return t.type == ln.DBLCLICK }, aS.events.condition.focus = ao, aS.events.condition.mouseOnly = go, aS.events.condition.never = lo, aS.events.condition.noModifierKeys = po, aS.events.condition.penOnly = function(t) { var e = t.pointerEvent; return K(void 0 !== e, 56), "pen" === e.pointerType }, aS.events.condition.platformModifierKeyOnly = function(t) { var e = t.originalEvent; return !e.altKey && (an ? e.metaKey : e.ctrlKey) && !e.shiftKey }, aS.events.condition.pointerMove = ho, aS.events.condition.primaryAction = yo, aS.events.condition.shiftKeyOnly = fo, aS.events.condition.singleClick = co, aS.events.condition.targetNotEditable = _o, aS.events.condition.touchOnly = function(t) { var e = t.pointerEvent; return K(void 0 !== e, 56), "touch" === e.pointerType }, aS.extent.applyTransform = Ft, aS.extent.boundingExtent = $, aS.extent.buffer = tt, aS.extent.containsCoordinate = nt, aS.extent.containsExtent = it, aS.extent.containsXY = ot, aS.extent.createEmpty = st, aS.extent.equals = pt, aS.extent.extend = ft, aS.extent.getArea = mt, aS.extent.getBottomLeft = Et, aS.extent.getBottomRight = Tt, aS.extent.getCenter = St, aS.extent.getHeight = Ot, aS.extent.getIntersection = Rt, aS.extent.getSize = function(t) { return [t[2] - t[0], t[3] - t[1]] }, aS.extent.getTopLeft = Ct, aS.extent.getTopRight = Pt, aS.extent.getWidth = It, aS.extent.intersects = bt, aS.extent.isEmpty = Lt, aS.featureloader.setWithCredentials = function(t) { Ha = t }, aS.featureloader.xhr = Ja, aS.format.EsriJSON = Od, aS.format.Feature = pd, aS.format.GML = Jd, aS.format.GML2 = r_, aS.format.GML3 = Hd, aS.format.GML32 = o_, aS.format.GPX = B_, aS.format.GeoJSON = V_, aS.format.IGC = ug, aS.format.IIIFInfo = Yl, aS.format.KML = tv, aS.format.MVT = cv, aS.format.OSMXML = mv, aS.format.Polyline = Cv, aS.format.Polyline.decodeDeltas = wv, aS.format.Polyline.decodeFloats = Ov, aS.format.Polyline.encodeDeltas = Sv, aS.format.Polyline.encodeFloats = xv, aS.format.TopoJSON = Gv, aS.format.WFS = tE, aS.format.WFS.writeFilter = function(t) { var e = Ss(Gm, "Filter"); return Zm(e, t, []), e }, aS.format.WKT = SE, aS.format.WMSCapabilities = qE, aS.format.WMSGetFeatureInfo = QE, aS.format.WMTSCapabilities = FT, aS.format.filter.Bbox = zv, aS.format.filter.Contains = Zv, aS.format.filter.During = Jv, aS.format.filter.EqualTo = em, aS.format.filter.GreaterThan = nm, aS.format.filter.GreaterThanOrEqualTo = om, aS.format.filter.Intersects = sm, aS.format.filter.IsBetween = lm, aS.format.filter.IsLike = cm, aS.format.filter.IsNull = fm, aS.format.filter.LessThan = _m, aS.format.filter.LessThanOrEqualTo = ym, aS.format.filter.Not = mm, aS.format.filter.NotEqualTo = Tm, aS.format.filter.Or = wm, aS.format.filter.Within = Om, aS.format.filter.and = Rm, aS.format.filter.bbox = Cm, aS.format.filter.between = function(t, e, r) { return new lm(t, e, r) }, aS.format.filter.contains = function(t, e, r) { return new Zv(t, e, r) }, aS.format.filter.during = function(t, e, r) { return new Jv(t, e, r) }, aS.format.filter.equalTo = function(t, e, r) { return new em(t, e, r) }, aS.format.filter.greaterThan = function(t, e) { return new nm(t, e) }, aS.format.filter.greaterThanOrEqualTo = function(t, e) { return new om(t, e) }, aS.format.filter.intersects = function(t, e, r) { return new sm(t, e, r) }, aS.format.filter.isNull = function(t) { return new fm(t) }, aS.format.filter.lessThan = function(t, e) { return new _m(t, e) }, aS.format.filter.lessThanOrEqualTo = function(t, e) { return new ym(t, e) }, aS.format.filter.like = function(t, e, r, n, i, o) { return new cm(t, e, r, n, i, o) }, aS.format.filter.not = function(t) { return new mm(t) }, aS.format.filter.notEqualTo = function(t, e, r) { return new Tm(t, e, r) }, aS.format.filter.or = function(t) { var e = [null].concat(Array.prototype.slice.call(arguments)); return new(Function.prototype.bind.apply(wm, e)) }, aS.format.filter.within = function(t, e, r) { return new Om(t, e, r) }, aS.geom.Circle = df, aS.geom.Geometry = er, aS.geom.GeometryCollection = cd, aS.geom.LineString = zp, aS.geom.LinearRing = xr, aS.geom.MultiLineString = gf, aS.geom.MultiPoint = vf, aS.geom.MultiPolygon = Tf, aS.geom.Point = Rr, aS.geom.Polygon = Yr, aS.geom.Polygon.circular = zr, aS.geom.Polygon.fromCircle = Vr, aS.geom.Polygon.fromExtent = Xr, aS.geom.SimpleGeometry = ir, aS.has.DEVICE_PIXEL_RATIO = sn, aS.interaction.DoubleClickZoom = no, aS.interaction.DragAndDrop = lf, aS.interaction.DragBox = Fo, aS.interaction.DragPan = wo, aS.interaction.DragRotate = Oo, aS.interaction.DragRotateAndZoom = cf, aS.interaction.DragZoom = Go, aS.interaction.Draw = Cf, aS.interaction.Draw.createBox = function() { return function(t, e) { var r = $(t),
                    n = [
                        [Et(r), Tt(r), Pt(r), Ct(r), Et(r)]
                    ],
                    i = e; return i ? i.setCoordinates(n) : i = new Yr(n), i } }, aS.interaction.Draw.createRegularPolygon = function(t, e) { return function(r, n) { var i = r[0],
                    o = r[1],
                    a = Math.sqrt(Jn(i, o)),
                    s = n || Vr(new df(i), t),
                    u = e; if (!e) { var l = o[0] - i[0],
                        h = o[1] - i[1];
                    u = Math.atan(h / l) - (l < 0 ? Math.PI : 0) } return Wr(s, i, a, u), s } }, aS.interaction.Extent = Nf, aS.interaction.Interaction = to, aS.interaction.KeyboardPan = Uo, aS.interaction.KeyboardZoom = zo, aS.interaction.Modify = Zf, aS.interaction.MouseWheelZoom = Zo, aS.interaction.PinchRotate = Ho, aS.interaction.PinchZoom = Jo, aS.interaction.Pointer = Eo, aS.interaction.Select = Qf, aS.interaction.Snap = rd, aS.interaction.Translate = ud, aS.interaction.defaults = Qo, aS.layer.Base = vi, aS.layer.BaseImage = Oh, aS.layer.BaseTile = Dh, aS.layer.BaseVector = Dp, aS.layer.Graticule = Kp, aS.layer.Group = Si, aS.layer.Heatmap = Qp, aS.layer.Image = Fh, aS.layer.Layer = Bi, aS.layer.Tile = Yh, aS.layer.Vector = kp, aS.layer.VectorImage = tf, aS.layer.VectorTile = rf, aS.loadingstrategy.all = Qa, aS.loadingstrategy.bbox = $a, aS.loadingstrategy.tile = function(t) { return function(e, r) { var n = t.getZForResolution(r),
                    i = t.getTileRangeForExtentAndZ(e, n),
                    o = [],
                    a = [n, 0, 0]; for (a[1] = i.minX; a[1] <= i.maxX; ++a[1])
                    for (a[2] = i.minY; a[2] <= i.maxY; ++a[2]) o.push(t.getTileCoordExtent(a)); return o } }, aS.proj.Projection = ee, aS.proj.Units.METERS_PER_UNIT = $t, aS.proj.addCoordinateTransforms = Pe, aS.proj.addEquivalentProjections = Oe, aS.proj.addProjection = Se, aS.proj.equivalent = Ie, aS.proj.fromLonLat = function(t, e) { return Me(t, "EPSG:4326", void 0 !== e ? e : "EPSG:3857") }, aS.proj.get = we, aS.proj.getPointResolution = xe, aS.proj.getTransform = Le, aS.proj.proj4.register = function(t) { var e, r, n = Object.keys(t.defs),
                i = n.length; for (e = 0; e < i; ++e) { var o = n[e]; if (!we(o)) { var a = t.defs(o);
                    Se(new ee({ code: o, axisOrientation: a.axis, metersPerUnit: a.to_meter, units: a.units })) } } for (e = 0; e < i; ++e) { var s = n[e],
                    u = we(s); for (r = 0; r < i; ++r) { var l = n[r],
                        h = we(l); if (!ve(s, l))
                        if (t.defs[s] === t.defs[l]) Oe([u, h]);
                        else { var c = t(s, l);
                            Pe(u, h, c.forward, c.inverse) } } } }, aS.proj.toLonLat = function(t, e) { var r = Me(t, void 0 !== e ? e : "EPSG:3857", "EPSG:4326"),
                n = r[0]; return (n < -180 || n > 180) && (r[0] = Vt(n + 180, 360) - 180), r }, aS.proj.transform = Me, aS.proj.transformExtent = Fe, aS.render.VectorContext = fa, aS.render.canvas.labelCache = Ea, aS.render.getRenderPixel = function(t, e) { var r = e.slice(0); return Ze(t.inversePixelTransform.slice(), r), r }, aS.render.getVectorContext = function(t) { var e = t.frameState,
                r = Ve(t.inversePixelTransform.slice(), e.coordinateToPixelTransform); return new Na(t.context, e.pixelRatio, e.extent, r, e.viewState.rotation) }, aS.render.toContext = function(t, e) { var r = t.canvas,
                n = e || {},
                i = n.pixelRatio || sn,
                o = n.size;
            o && (r.width = o[0] * i, r.height = o[1] * i, r.style.width = o[0] + "px", r.style.height = o[1] + "px"); var a = [0, 0, r.width, r.height],
                s = Ke([1, 0, 0, 1, 0, 0], i, i); return new Na(t, i, a, s, 0) }, aS.renderer.Composite = Ba, aS.renderer.canvas.ImageLayer = Lh, aS.renderer.canvas.TileLayer = Uh, aS.renderer.canvas.VectorImageLayer = Ip, aS.renderer.canvas.VectorLayer = Cp, aS.renderer.canvas.VectorTileLayer = Ap, aS.renderer.webgl.PointsLayer = Gc, aS.size.toSize = Oi, aS.source.BingMaps = vl, aS.source.CartoDB = Sl, aS.source.Cluster = Ll, aS.source.IIIF = Vl, aS.source.Image = th, aS.source.ImageArcGISRest = nh, aS.source.ImageCanvas = sh, aS.source.ImageMapGuide = lh, aS.source.ImageStatic = ch, aS.source.ImageWMS = mh, aS.source.OSM = Sh, aS.source.OSM.ATTRIBUTION = Th, aS.source.Raster = Qh, aS.source.Source = il, aS.source.Stamen = nc, aS.source.Tile = ul, aS.source.TileArcGISRest = ac, aS.source.TileDebug = lc, aS.source.TileImage = gl, aS.source.TileJSON = cc, aS.source.TileWMS = dc, aS.source.UTFGrid = yc, aS.source.Vector = Il, aS.source.VectorTile = wc, aS.source.WMTS = Cc, aS.source.WMTS.optionsFromCapabilities = function(t, e) { var r = O(t.Contents.Layer, function(t, r, n) { return t.Identifier == e.layer }); if (null === r) return null; var n, i = t.Contents.TileMatrixSet;
            (n = r.TileMatrixSetLink.length > 1 ? C(r.TileMatrixSetLink, "projection" in e ? function(t, r, n) { var o = O(i, function(e) { return e.Identifier == t.TileMatrixSet }).SupportedCRS,
                    a = we(o.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || we(o),
                    s = we(e.projection); return a && s ? Ie(a, s) : o == e.projection } : function(t, r, n) { return t.TileMatrixSet == e.matrixSet }) : 0) < 0 && (n = 0); var o = r.TileMatrixSetLink[n].TileMatrixSet,
                a = r.TileMatrixSetLink[n].TileMatrixSetLimits,
                s = r.Format[0]; "format" in e && (s = e.format), (n = C(r.Style, function(t, r, n) { return "style" in e ? t.Title == e.style : t.isDefault })) < 0 && (n = 0); var u = r.Style[n].Identifier,
                l = {}; "Dimension" in r && r.Dimension.forEach(function(t, e, r) { var n = t.Identifier,
                    i = t.Default;
                void 0 === i && (i = t.Value[0]), l[n] = i }); var h, c = O(t.Contents.TileMatrixSet, function(t, e, r) { return t.Identifier == o }),
                p = c.SupportedCRS; if (p && (h = we(p.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || we(p)), "projection" in e) { var f = we(e.projection);
                f && (h && !Ie(f, h) || (h = f)) } var d, _, g = r.WGS84BoundingBox; if (void 0 !== g) { var y = we("EPSG:4326").getExtent();
                _ = g[0] == y[0] && g[2] == y[2], d = Fe(g, "EPSG:4326", h); var v = h.getExtent();
                v && (it(v, d) || (d = void 0)) } var m = au(c, d, a),
                E = [],
                S = e.requestEncoding; if (S = void 0 !== S ? S : "", "OperationsMetadata" in t && "GetTile" in t.OperationsMetadata)
                for (var w = t.OperationsMetadata.GetTile.DCP.HTTP.Get, x = 0, R = w.length; x < R; ++x)
                    if (w[x].Constraint) { var P = O(w[x].Constraint, function(t) { return "GetEncoding" == t.name }).AllowedValues.Value; if ("" === S && (S = P[0]), S !== Oc.KVP) break;
                        T(P, Oc.KVP) && E.push(w[x].href) } else w[x].href && (S = Oc.KVP, E.push(w[x].href));
            return 0 === E.length && (S = Oc.REST, r.ResourceURL.forEach(function(t) { "tile" === t.resourceType && (s = t.format, E.push(t.template)) })), { urls: E, layer: e.layer, matrixSet: o, format: s, projection: h, requestEncoding: S, tileGrid: m, style: u, dimensions: l, wrapX: _, crossOrigin: e.crossOrigin } }, aS.source.XYZ = El, aS.source.Zoomify = Nl, aS.sphere.getArea = function t(e, r) { var n = r || {},
                i = n.radius || Zt,
                o = n.projection || "EPSG:3857",
                a = e.getType();
            a !== Nt.GEOMETRY_COLLECTION && (e = e.clone().transform(o, "EPSG:4326")); var s, u, l, h, c, p, f = 0; switch (a) {
                case Nt.POINT:
                case Nt.MULTI_POINT:
                case Nt.LINE_STRING:
                case Nt.MULTI_LINE_STRING:
                case Nt.LINEAR_RING:
                    break;
                case Nt.POLYGON:
                    for (s = e.getCoordinates(), f = Math.abs(qt(s[0], i)), l = 1, h = s.length; l < h; ++l) f -= Math.abs(qt(s[l], i)); break;
                case Nt.MULTI_POLYGON:
                    for (l = 0, h = (s = e.getCoordinates()).length; l < h; ++l)
                        for (u = s[l], f += Math.abs(qt(u[0], i)), c = 1, p = u.length; c < p; ++c) f -= Math.abs(qt(u[c], i)); break;
                case Nt.GEOMETRY_COLLECTION:
                    var d = e.getGeometries(); for (l = 0, h = d.length; l < h; ++l) f += t(d[l], r); break;
                default:
                    throw new Error("Unsupported geometry type: " + a) } return f }, aS.sphere.getDistance = Kt, aS.sphere.getLength = function t(e, r) { var n = r || {},
                i = n.radius || Zt,
                o = n.projection || "EPSG:3857",
                a = e.getType();
            a !== Nt.GEOMETRY_COLLECTION && (e = e.clone().transform(o, "EPSG:4326")); var s, u, l, h, c, p, f = 0; switch (a) {
                case Nt.POINT:
                case Nt.MULTI_POINT:
                    break;
                case Nt.LINE_STRING:
                case Nt.LINEAR_RING:
                    f = Ht(s = e.getCoordinates(), i); break;
                case Nt.MULTI_LINE_STRING:
                case Nt.POLYGON:
                    for (l = 0, h = (s = e.getCoordinates()).length; l < h; ++l) f += Ht(s[l], i); break;
                case Nt.MULTI_POLYGON:
                    for (l = 0, h = (s = e.getCoordinates()).length; l < h; ++l)
                        for (c = 0, p = (u = s[l]).length; c < p; ++c) f += Ht(u[c], i); break;
                case Nt.GEOMETRY_COLLECTION:
                    var d = e.getGeometries(); for (l = 0, h = d.length; l < h; ++l) f += t(d[l], r); break;
                default:
                    throw new Error("Unsupported geometry type: " + a) } return f }, aS.style.Circle = pu, aS.style.Fill = fu, aS.style.Icon = xu, aS.style.IconImageCache.shared = ha, aS.style.Image = uu, aS.style.RegularShape = hu, aS.style.Stroke = Ou, aS.style.Style = Lu, aS.style.Text = Au, aS.tilegrid.TileGrid = us, aS.tilegrid.WMTS = ou, aS.tilegrid.WMTS.createFromCapabilitiesMatrixSet = au, aS.tilegrid.createXYZ = hs, aS.util.getUid = o, aS.webgl.ARRAY_BUFFER = _s, aS.webgl.Buffer = zs, aS.webgl.DYNAMIC_DRAW = ys, aS.webgl.ELEMENT_ARRAY_BUFFER = gs, aS.webgl.Helper = tu, aS.webgl.Helper.computeAttributesStride = Qs, aS.webgl.PostProcessingPass = Ks, aS.webgl.RenderTarget = ru, aS.webgl.STATIC_DRAW = 35044, aS.webgl.STREAM_DRAW = 35040, aS.xml.getAllTextContent = ws, aS.xml.parse = Os;
        e.default = aS }]).default
});
//# sourceMappingURL=ol.js.map