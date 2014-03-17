

! function (a, b, c) {
    var d = a[c.k] = {
        w: a,
        d: b,
        a: c,
        s: {},
        f: function () {
            return {
                callback: [],
                get: function (a, b) {
                    var c = null;
                    return c = "string" === typeof a[b] ? a[b] : a.getAttribute(b)
                },
                getData: function (a, b) {
                    return b = d.a.dataAttributePrefix + b, d.f.get(a, b)
                },
                set: function (a, b, c) {
                    "string" === typeof a[b] ? a[b] = c : a.setAttribute(b, c)
                },
                make: function (a) {
                    var b, c, e = !1;
                    for (b in a)
                        if (a[b].hasOwnProperty) {
                            e = d.d.createElement(b);
                            for (c in a[b]) a[b][c].hasOwnProperty && "string" === typeof a[b][c] && d.f.set(e, c, a[b][c]);
                            break
                        }
                    return e
                },
                kill: function (a) {
                    "string" === typeof a && (a = d.d.getElementById(a)), a && a.parentNode && a.parentNode.removeChild(a)
                },
                call: function (a, b) {
                    var c, e, f = "?";
                    c = d.v.nextCallback, d.v.nextCallback = d.v.nextCallback + 1, e = d.a.k + ".f.callback[" + c + "]", d.f.callback[c] = function (a) {
                        b(a, c), d.f.kill(e)
                    }, a.match(/\?/) && (f = "&"), d.d.b.appendChild(d.f.make({
                        SCRIPT: {
                            id: e,
                            type: "text/javascript",
                            charset: "utf-8",
                            src: a + f + "callback=" + e
                        }
                    })), d.f.debug("Calling: " + a + f + "callback=" + e)
                },
                debug: function (a) {
                    d.w.console && d.w.console.log && d.v.config.debug && d.w.console.log(a)
                },
                getSelection: function () {
                    return ("" + (d.w.getSelection ? d.w.getSelection() : d.d.getSelection ? d.d.getSelection() : d.d.selection.createRange().text)).replace(/(^\s+|\s+$)/g, "")
                },
                getWindowHeight: function () {
                    var a = Math.max(Math.max(d.d.b.scrollHeight, d.d.d.scrollHeight), Math.max(d.d.b.offsetHeight, d.d.d.offsetHeight), Math.max(d.d.b.clientHeight, d.d.d.clientHeight));
                    return a
                },
                ping: {
                    log: function () {
                        d.v.callbacksHaveReturned = d.v.callbacksHaveReturned + 1
                    },
                    domain: function (a) {
                        d.v.callbacksHaveReturned = d.v.callbacksHaveReturned + 1;
                        var b, c;
                        if (a && a.disallowed_domains && a.disallowed_domains.length) {
                            for (b = 0, c = a.disallowed_domains.length; b < c; b += 1) a.disallowed_domains[b] === d.w.location.host && (d.v.data.blacklistedDomain = !0), d.v.checkDomainBlacklist[a.disallowed_domains[b]] = !0;
                            for (b = 0, c = d.v.data.thumb.length; b < c; b += 1) d.v.checkDomainBlacklist[d.v.data.thumb[b].domain] === !0 && (d.v.data.thumb[b].blacklistedImageSource = !0, d.f.log("image_from_blacklisted_domain", d.v.data.thumb[b].domain))
                        }
                    },
                    preferred: function (a) {
                        if (d.v.callbacksHaveReturned = d.v.callbacksHaveReturned + 1, a.data) {
                            d.f.debug("preferred data received"), d.v.data.preferred = a.data.reply;
                            var b;
                            b = {}, b.partner = a.data.src, "image" !== a.data.reply.media && (b.multimedia = !0), d.a.lookup[a.data.src] && d.a.lookup[a.data.src].page && d.a.lookup[a.data.src].page.multimedia && (b.multimedia = !0), d.v.data.preferred && d.v.data.preferred.img && d.v.data.preferred.img.src ? b.src = d.v.data.preferred.img.src : (d.f.debug("preferred data did not include image source"), b.src = d.v.pref.og.media || d.v.pref.pin.media), b.url = a.data.reply.page, b.description = d.v.data.preferred.title || d.d.title, b.override = !0, d.f.thumbPreferred(b)
                        }
                    },
                    thumb: function (a, b) {
                        var c, e;
                        if (d.v.callbacksHaveReturned = d.v.callbacksHaveReturned + 1, a.data)
                            for (c = 0, e = d.v.data.thumb.length; c < e; c += 1)
                                if (d.v.data.thumb[c].callback === b) {
                                    a.data.reply && (d.v.data.thumb[c].extended = a.data.reply, d.v.data.thumb[c].extended && d.v.data.thumb[c].extended.media && "image" !== d.v.data.thumb[c].extended.media && (d.v.data.thumb[c].multimedia = !0));
                                    break
                                }
                    },
                    media: function (a, b) {
                        var c, e;
                        if (d.v.callbacksHaveReturned = d.v.callbacksHaveReturned + 1, a.data)
                            for (c = 0, e = d.v.data.thumb.length; c < e; c += 1)
                                if (d.v.data.thumb[c].callback === b) {
                                    a.data.reply && (d.v.data.thumb[c].extended = a.data.reply);
                                    break
                                }
                    }
                },
                thumbPreferred: function (a) {
                    d.f.debug("thumbing preferred"), d.f.debug(a), a.preferred = !0;
                    var b = new Image;
                    b.onload = function () {
                        a.height = this.height, a.width = this.width, a.override === !0 ? (d.v.hazHadPreferred && d.v.data.thumb.shift(), d.v.hazOverridden = !0, d.v.data.thumb.unshift(a)) : d.v.hazOverridden || d.v.data.thumb.unshift(a)
                    }, b.src = a.src, d.v.hazHadPreferred = !0
                },
                checkDomains: function () {
                    var a, b = d.a.checkDomain.url + "?domains=",
                        c = 0;
                    for (a in d.v.checkDomain) d.v.checkDomain[a].hasOwnProperty && (d.v.checkDomainDone[a] || (d.v.checkDomainDone[a] = !0, c && (b += ","), c += 1, b += encodeURIComponent(a), c > d.a.maxCheckCount && (d.f.call(b, d.f.ping.domain), b = d.a.checkDomain.url + "?domains=", c = 0)));
                    c > 0 && d.f.call(b, d.f.ping.domain)
                },
                getArgs: function () {
                    var a = d.d.getElementsByTagName("SCRIPT"),
                        b = a.length,
                        c = 0,
                        e = 0,
                        f = d.a.validConfigParam.length,
                        g = null,
                        h = "",
                        i = function (a) {
                            d.w.setTimeout(function () {
                                d.f.kill(a)
                            }, 10)
                        };
                    for (c = 0; c < b; c += 1)
                        if (a[c].src.match(d.a.me)) {
                            for (e = 0; e < f; e += 1) h = d.a.validConfigParam[e], g = a[c].getAttribute(h), g && (d.v.config[h] = g);
                            i(a[c]);
                            break
                        }
                },
                hasValidSource: function (a) {
                    var b = !1;
                    return (a.src && a.src.match(/^http/i) || d.f.getData(a, "media")) && (b = !0), b === !1 && d.f.debug("Skipping an image with an unpinnable URL prefix: " + a.src.substr(0, 16)), b
                },
                pinOkayPerSite: function (a) {
                    var b = !1;
                    return d.f.get(a, "nopin") ? d.f.debug("image " + a.src + " has inline nopin set") : b = !0, b
                },
                lookupThumb: function (a, b) {
                    var c = a.src.split("#")[0].split("?")[0],
                        e = a.partner + ":" + c,
                        f = "source";
                    if (b && (f = "link"), d.v.hazCalledForInfo[e]) d.f.debug("duplicate lookup query " + e);
                    else {
                        d.v.hazCalledForInfo[e] = !0;
                        var g = d.a.embed + "?" + f + "=" + encodeURIComponent(c).replace(/^https/, "http");
                        d.f.call(g, d.f.ping.thumb)
                    }
                },
                lookupMedia: function (a, b) {
                    var c = d.a.embed;
                    "id" === b ? c = c + a.partner + "/" : b = "link", d.v.hazCalledForInfo[a.source] ? d.f.debug("duplicate lookup query " + a.source) : (d.v.hazCalledForInfo[a.source] = !0, d.f.call(c + "?" + b + "=" + encodeURIComponent(a.source).replace(/^https/, "http"), d.f.ping.media))
                },
                grovel: function (a, b) {
                    var c, e, f, g = null;
                    for (c in d.a.lookup)
                        if (d.a.lookup[c].hasOwnProperty && "object" === typeof d.a.lookup[c][b] && "object" === typeof d.a.lookup[c][b].seek)
                            for (e = 0, f = d.a.lookup[c][b].seek.length; e < f; e += 1)
                                if (a.match(d.a.lookup[c][b].seek[e])) {
                                    g = c;
                                    break
                                }
                    return g
                },
                getImageSize: function (a) {
                    a.loaded = !1;
                    var b = new Image;
                    if (b.onload = function () {
                        a.loaded = !0, a.height = this.height, a.width = this.width
                    }, b.src = a.src, a.patchedSource) {
                        var c = new Image;
                        c.onload = function () {
                            a.loaded = !0, a.height = this.height, a.width = this.width, a.src = this.src
                        }, c.src = a.patchedSource
                    }
                    d.v.data.thumb.push(a)
                },
                thumbImg: function (a, b) {
                    var c, e, f, g, h = {
                            src: a.src,
                            height: a.height,
                            width: a.width
                        };
                    for (b && (h.partner = b), h.domain = a.src.split("/")[2], d.v.checkDomain[h.domain] = !0, g = d.f.get(a, "alt") || d.f.get(a, "title"), g && (h.description = g), c = 0, e = d.a.validDataAtt.length; c < e; c += 1) f = d.f.getData(a, d.a.validDataAtt[c]), f && (h.suggested || (h.suggested = {}), h.suggested[d.a.validDataAtt[c]] = f);
                    d.f.pinOkayPerSite(a) ? b ? ("function" === typeof d.a.lookup[b].img.patch && (h.patchedSource = d.a.lookup[b].img.patch(a.src), d.f.getImageSize(h)), "lookup" === d.a.lookup[b].img.act && (h.callback = d.v.nextCallback, d.f.lookupThumb(h, d.a.lookup[b].img.link), d.v.data.thumb.push(h))) : (h.suggested && h.suggested.media && (h.src = h.suggested.media), d.f.getImageSize(h)) : (d.f.debug("nopin directive found locally for " + a.src), h.nopin = !0)
                },
                thumbMedia: function (a, b, c) {
                    var e = {
                        source: a,
                        partner: b,
                        callback: d.v.nextCallback,
                        multimedia: !0
                    };
                    d.f.lookupMedia(e, c), d.v.data.thumb.push(e)
                },
                getPinnableTags: function () {
                    var b, c, e, f, g, h, i, j, k, l, m = ["iframe", "embed", "video", "img"],
                        n = ["src", "src", "src", "src"],
                        o = (d.v.nextCallback, {});
                    for (c = 0, e = m.length; c < e; c += 1)
                        for (h = d.d.getElementsByTagName(m[c]), g = h.length, f = 0; f < g; f += 1)
                            if (i = h[f], "img" !== m[c] || d.f.hasValidSource(i)) {
                                for (j = i.parentNode, b = !1; j && "HTML" !== j.tagName;) {
                                    if (j.currentStyle && "none" === j.currentStyle.display || a.getComputedStyle && "none" === a.getComputedStyle(i).getPropertyValue("display")) {
                                        b = !0;
                                        break
                                    }
                                    j = j.parentNode
                                }
                                b || (l = d.f.get(i, n[c]), l && !o[l] && (o[l] = !0, k = d.f.grovel(l, m[c]), k && "img" !== m[c] && ("function" === typeof d.a.lookup[k][m[c]].patch && d.a.lookup[k][m[c]].att && d.f.get(i, d.a.lookup[k][m[c]].att) && (l = d.a.lookup[k][m[c]].patch(d.f.get(i, d.a.lookup[k][m[c]].att))), d.f.thumbMedia(l, k, d.a.lookup[k][m[c]].via)), "img" === m[c] && (d.f.get(i, "nopin") ? d.f.log("image_with_inline_nopin", i.src) : d.f.getData(i, "nopin") || d.f.thumbImg(i, k))))
                            }
                },
                checkPage: function () {
                    d.f.debug("checking page for nopins or preferences");
                    var a, b, c, e, f, g, h, i, j, k = d.f.grovel(d.d.URL, "page");
                    if (k) {
                        if (d.v.pagePartner = k, a = d.a.lookup[k].page, "close" === a.act && (i = d.v.msg[a.msg], "function" === typeof a.patch && (i = a.patch(i)), d.v.data.close = i), "bustFrame" === a.act)
                            for (d.v.data.confirm = d.v.msg[k].replace(/%s%/g, a.serviceName), b = 0, c = a.frameId.length; b < c; b += 1) h = d.d.getElementById(a.frameId[b]), h && "IFRAME" === h.tagName && h.src && (d.v.data.frameBust = h.src);
                        "lookup" === a.act && (d.f.debug("page lookup"), j = "id" === a.via ? d.a.embed + k + "/?id=" + encodeURIComponent(d.d.URL) : d.a.embed + "?" + a.via + "=" + encodeURIComponent(d.d.URL), d.f.call(j, d.f.ping.preferred)), a.doNotCrawl && (d.v.doNotCrawl = !0), d.v.data.close || "function" !== typeof a.patch || a.patch(d)
                    }
                    if (!d.v.data.close && !d.v.data.confirm)
                        for (b = 0, c = d.v.meta.length; b < c; b += 1) e = d.f.get(d.v.meta[b], "name"), f = d.f.get(d.v.meta[b], "property"), g = d.f.get(d.v.meta[b], "content"), i = d.f.get(d.v.meta[b], "description"), e && g && ("pinterest" === e.toLowerCase() && "nopin" === g.toLowerCase() && (d.v.data.close = i || d.v.msg.noPinMeta, d.f.log("found_nopin_meta")), "pinterest-rich-pin" === e.toLowerCase() && "false" === g.toLowerCase() && d.f.log("found_no_rich_pin_meta")), !d.v.data.close && f && g && ("og:image" === f && (d.v.pref.og.media = g, d.f.debug("found og:image meta")), "og:url" === f && (d.v.pref.og.url = g, d.f.debug("found og:url meta")), "og:title" === f && (d.v.pref.og.description = g, d.f.debug("found og:description meta")), "pin:media" === f && (d.v.pref.pin.media = g, d.f.debug("found pin:image meta")), "pin:url" === f && (d.v.pref.pin.url = g, d.f.debug("found pin:url meta")), "pin:description" === f && (d.v.pref.pin.description = g, d.f.debug("found pin:description meta")))
                },
                pinDefault: function (a) {
                    var b, c, e;
                    a.url && a.media && (d.v.data.preferred = a, d.f.debug("found preferred media"), b = d.f.grovel(a.url, "page"), b && d.a.lookup[b] && d.a.lookup[b].page && (d.f.debug("have partner page from OG"), a.media && d.a.lookup[b].page.patch && "function" === typeof d.a.lookup[b].page.patch.img && (a.media = d.a.lookup[b].page.patch.img(a.media))), e || (c = {}, b && (c.partner = b), c.src = a.media, c.description = a.description || d.d.title, d.f.thumbPreferred(c)))
                },
                checkSize: function (a) {
                    var b = a.height,
                        c = a.width,
                        e = !1;
                    return a.extended && a.extended.img && (c = a.extended.img.width, b = a.extended.img.height), b > d.a.imgSizeFloor && c > d.a.imgSizeFloor && (b > d.a.imgSizeMin || c > d.a.imgSizeMin) && (e = !0), e
                },
                noPinnablesFound: function () {
                    d.v.data.close = d.v.msg.noPinnablesFound
                },
                collate: function () {
                    var a, b;
                    if (d.v.data.blacklistedDomain) d.v.data.thumb = [], d.v.data.close = d.v.msg.noPinDomain, d.f.log("domain_blacklisted");
                    else if (!d.v.data.close && !d.v.data.confirm) {
                        for (a = d.v.data.thumb.length - 1; a > -1; a -= 1) b = d.v.data.thumb[a], b.extended && b.extended.nopin && d.f.log("api_nopin", b.src), !d.f.checkSize(b) || b.nopin || b.extended && b.extended.nopin || b.blacklistedImageSource ? d.v.data.thumb.splice(a, 1) : (b.url = d.d.URL, b.media = b.src, b.suggested && (b.suggested.url && (b.url = b.suggested.url), b.suggested.media && (b.src = b.suggested.media), b.suggested.description && (b.description = b.suggested.description)), b.extended && (b.extended.page && (b.url = b.extended.page), b.extended.media && (b.media = b.extended.media), b.extended.img && b.extended.img.src && (b.src = b.extended.img.src), b.extended.description && (b.description = b.extended.description)));
                        d.v.data.thumb.length || d.v.data.preferred || d.f.noPinnablesFound()
                    }
                    d.f.debug("done collating")
                },
                done: function () {
                    d.f.collate();
                    var a = !1;
                    d.v.config.render && "function" === typeof d.w[d.v.config.render] && (d.f.debug("firing custom render callback " + d.v.config.render), d.w[d.v.config.render](d.v.data), a = !0), d.v.data.close ? (d.v.config.quiet || alert(d.v.data.close), d.f.close()) : d.v.data.confirm ? d.v.config.quiet || d.v.data.frameBust && (d.w.confirm(d.v.data.confirm) ? d.w.location = d.v.data.frameBust : d.f.close()) : a || (d.f.debug("ready to render"), d.f.render())
                },
                ponder: function () {
                    var a, b, c;
                    d.v.nextCallback ? (a = (new Date).getTime(), (b = function () {
                        d.v.nextCallback > d.v.callbacksHaveReturned ? (c = (new Date).getTime(), c < a + d.a.maxWait ? d.w.setTimeout(function () {
                            b()
                        }, 100) : (d.v.data.timedOut = !0, d.f.debug("timed out - done looking for pinnables"), d.f.done())) : (d.f.debug("all callbacks received - done looking for pinnables"), d.f.done())
                    })()) : (d.f.debug("no callbacks to worry about - done looking for pinnables"), d.f.done())
                },
                scaleThumb: function (a, b) {
                    var c = Math.floor(d.a.thumbCellSize * (a / b)),
                        e = d.a.thumbCellSize;
                    return b < d.a.thumbCellSize && (e = b, c = a), {
                        height: c,
                        width: e
                    }
                },
                thumb: function (a) {
                    var b, c, e, f, g, h, i, j = d.f.make({
                            SPAN: {
                                className: d.a.k + "_thumb"
                            }
                        });
                    if (a.extended && a.extended.img && a.extended.img.src ? (b = a.extended.img.src, c = a.extended.img.height, e = a.extended.img.width) : (b = a.src, c = a.height, e = a.width), !d.v.renderedThumb[b]) {
                        d.v.renderedThumb[b] = !0, g = d.f.scaleThumb(c, e), f = d.f.make({
                            IMG: {
                                src: b,
                                "class": d.a.k + "_thumb",
                                nopin: !0,
                                height: "" + g.height,
                                width: "" + g.width,
                                style: "height:" + g.height + "px!important;width:" + g.width + "px!important;"
                            }
                        }), j.appendChild(f);
                        var k = d.f.getSelection() || a.description || d.d.title;
                        k = k.substring(0, 140), 140 === k.length && (k += "..."), h = d.f.make({
                            DIV: {
                                className: d.a.k + "_info"
                            }
                        });
                        var l = d.f.make({
                            SPAN: {
                                innerHTML: k
                            }
                        });
                        l.style.display = "block", l.contentEditable = !0, h.appendChild(l);
                        var m = e + " x " + c;
                        (e < d.a.thumbCellSize || c < d.a.thumbCellSize) && (m = m + " (" + d.v.msg.small + ")");
                        var n = d.f.make({
                            SMALL: {
                                innerHTML: m
                            }
                        });
                        if (j.appendChild(n), a.partner && d.a.lookup[a.partner].label) {
                            var o = d.f.make({
                                SPAN: {
                                    className: d.a.k + "_attrib"
                                }
                            });
                            o.innerHTML = d.v.msg.seeAttribTextAfterPartnerLabel ? '<img class="' + d.a.k + '_attrib" src="' + d.a.cdn[d.w.location.protocol] + "/images/attrib/" + a.partner + '.png"/> ' + d.a.lookup[a.partner].label + " " + d.v.msg.attrib : '<img class="' + d.a.k + '_attrib" src="' + d.a.cdn[d.w.location.protocol] + "/images/attrib/" + a.partner + '.png"/> ' + d.v.msg.attrib + " " + d.a.lookup[a.partner].label, h.appendChild(o), h.className = h.className + " " + d.a.k + "_hazAttrib"
                        }
                        return h.style.width = d.a.thumbCellSize - d.a.thumbCellMargin + "px", j.appendChild(h), g.height = g.height, i = d.f.make({
                            SPAN: {
                                className: d.a.k + "_pin",
                                "data-pin-url": a.url,
                                "data-pin-media": a.src
                            }
                        }), i.style.height = g.height + "px", a.multimedia === !0 && d.f.set(i, "data-pin-multimedia", !0), j.appendChild(i), j.scale = g, j
                    }
                },
                contents: function () {
                    var a, b;
                    d.f.debug("rendering " + d.v.data.thumb.length + " real thumbs");
                    var c = 0,
                        e = [],
                        f = Math.floor(d.s.bd.offsetWidth / (d.a.thumbCellSize + d.a.thumbCellMargin));
                    for (d.s.ct.style.width = f * (d.a.thumbCellSize + d.a.thumbCellMargin) + d.a.thumbCellMargin + "px", a = 0, b = d.v.data.thumb.length; a < b; a += 1) {
                        var g = d.f.thumb(d.v.data.thumb[a]);
                        if (g) {
                            e[c] || (e[c] = 0), g.style.top = e[c] + "px", g.style.left = c * (d.a.thumbCellSize + d.a.thumbCellMargin) + "px", g.style.width = d.a.thumbCellSize + "px", d.s.ct.appendChild(g);
                            var h = g.getElementsByTagName("DIV")[0],
                                i = 0;
                            h && (i = h.offsetHeight), i += d.a.thumbDimHeight, g.style.height = g.scale.height + i + "px";
                            var j = g.getElementsByTagName("SMALL")[0];
                            j.style.bottom = i - d.a.thumbDimHeight + "px", e[c] = e[c] + g.scale.height + d.a.thumbCellMargin + i, c = (c + 1) % f
                        }
                    }
                },
                presentation: function () {
                    var a, b, e;
                    a = d.f.make({
                        STYLE: {
                            type: "text/css"
                        }
                    }), b = d.a.cdn[d.w.location.protocol] || d.a.cdn["http:"], e = d.v.css, e = e.replace(/#_/g, "#" + c.k + "_"), e = e.replace(/\._/g, "." + c.k + "_"), e = e.replace(/;/g, "!important;"), e = e.replace(/_cdn/g, b), e = e.replace(/_pin_it_button/, d.v.msg.button), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(d.d.createTextNode(e)), d.d.h ? d.d.h.appendChild(a) : d.d.b.appendChild(a)
                },
                makeStyleFrom: function (a, b) {
                    var c, e, f, g, h = "",
                        i = b || "";
                    for (f in a) a[f].hasOwnProperty && "string" === typeof a[f] && (h = h + f + ": " + a[f] + "; ");
                    i && h && (d.v.css = d.v.css + i + " { " + h + "}\n");
                    for (f in a)
                        if (a[f].hasOwnProperty && "object" === typeof a[f])
                            for (c = f.split(", "), e = 0; e < c.length; e += 1) g = "", c[e].match(/^&/) ? c[e] = c[e].split("&")[1] : i && (g = " "), d.f.makeStyleFrom(a[f], i + g + c[e].replace(/^\s+|\s+$/g, ""))
                },
                log: function (a, b, c) {
                    var e = c || d.d.URL,
                        f = "?page=" + encodeURIComponent(e) + "&reason=" + encodeURIComponent(a);
                    b && (f = f + "&image=" + encodeURIComponent(b)), d.w.setTimeout(function () {
                        d.f.call(d.a.log + f, d.f.ping.log)
                    }, d.a.maxWait)
                },
                close: function () {
                    window.hazPinningNow = !1, d.s.bg && (d.f.listen(d.d, "keydown", d.f.keydown, "detach"), d.f.listen(d.d, "click", d.f.click, "detach"), d.f.kill(d.s.shim), d.f.kill(d.s.bg), d.f.kill(d.s.bd), d.w.scroll(0, d.v.saveScrollTop), d.v.restore && (d.v.restore.style.display = "block"))
                },
                pin: function (a) {
                    var b = d.a.pin + "/" + d.a.pinMethod + "/?",
                        c = d.f.getData(a, "multimedia"),
                        e = d.f.getData(a, "media"),
                        f = d.f.getData(a, "url") || d.d.URL,
                        g = a.parentNode.getElementsByTagName("DIV")[0].getElementsByTagName("SPAN")[0],
                        h = "";
                    g && (h = g.textContent || g.innerText || "", h = h.replace(/^\s+|\s+$/g, "")), b = b + "media=" + encodeURIComponent(e), b = b + "&url=" + encodeURIComponent(f), d.v.config.extensionVer && (b = b + "&xv=" + d.v.config.extensionVer + "&xm=g"), b = b + "&description=" + encodeURIComponent(h), c && (b = b + "&is_video=" + c), d.v.hazIOS ? d.w.location = "http://" + b : d.w.open("http://" + b, "pin" + (new Date).getTime(), d.a.pop), d.f.close()
                },
                click: function (a) {
                    var b, c;
                    b = a || d.w.event, c = d.f.getEl(b), c === d.s.x && (d.f.log("bookmarklet_cancel_click"), d.f.close());
                    var e = d.f.getData(c, "url"),
                        f = d.f.getData(c, "media");
                    f && e && (d.f.log("bookmarklet_pin", f), d.f.pin(c))
                },
                keydown: function (a) {
                    var b = a || d.w.event,
                        c = b.keyCode || null;
                    27 === c && (d.f.log("bookmarklet_cancel_esc"), d.f.close())
                },
                getEl: function (a) {
                    var b = null;
                    return b = a.target ? 3 === a.target.nodeType ? a.target.parentNode : a.target : a.srcElement
                },
                listen: function (a, b, c, e) {
                    e ? "undefined" !== typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : "undefined" !== typeof a.detachEvent && a.detachEvent("on" + b, c) : "undefined" !== typeof d.w.addEventListener ? a.addEventListener(b, c, !1) : "undefined" !== typeof d.w.attachEvent && a.attachEvent("on" + b, c)
                },
                structure: function () {
                    d.w.scroll(0, 0), d.s.shim = d.f.make({
                        IFRAME: {}
                    }), d.s.shim.style.position = "absolute", d.s.shim.style.zIndex = "2147483640", d.s.shim.style.top = "0", d.s.shim.style.left = "0", d.s.shim.style.height = "100%", d.s.shim.style.width = "100%", d.d.b.appendChild(d.s.shim), d.s.bg = d.f.make({
                        DIV: {
                            id: d.a.k + "_bg"
                        }
                    }), d.d.b.appendChild(d.s.bg), d.s.bd = d.f.make({
                        DIV: {
                            id: d.a.k + "_bd"
                        }
                    }), d.s.hd = d.f.make({
                        DIV: {
                            id: d.a.k + "_hd"
                        }
                    }), d.f.debug("config"), d.f.debug(d.v.config), d.v.config.noHeader ? d.s.hd.className = d.a.k + "_noHeader" : (d.s.bd.appendChild(d.f.make({
                        DIV: {
                            id: d.a.k + "_spacer"
                        }
                    })), d.s.hd.appendChild(d.f.make({
                        SPAN: {
                            id: d.a.k + "_logo"
                        }
                    })), d.v.config.noCancel !== !0 && (d.s.x = d.f.make({
                        A: {
                            id: d.a.k + "_x",
                            innerHTML: d.v.msg.cancelTitle
                        }
                    }), d.s.hd.appendChild(d.s.x))), d.s.bd.appendChild(d.s.hd), d.s.ct = d.f.make({
                        DIV: {
                            id: d.a.k + "_ct"
                        }
                    }), d.s.bd.appendChild(d.s.ct), d.d.b.appendChild(d.s.bd);
                    var a = d.f.getWindowHeight();
                    d.s.bd.offsetHeight < a && (d.s.bd.style.height = a + "px", d.s.bg.style.height = a + "px", d.s.shim.style.height = a + "px");
                    for (var b = 0; b < d.a.infiniteZ.length; b += 1) {
                        var c = d.d.getElementById(d.a.infiniteZ[b]);
                        c && (d.v.restore = c, c.style.display = "none")
                    }
                },
                render: function () {
                    d.f.contents(), d.f.listen(d.d, "keydown", d.f.keydown), d.f.listen(d.d, "click", d.f.click), d.f.log("bookmarklet_rendered")
                },
                getPreferred: function () {
                    var a = !1;
                    return d.v.pref.pin.media && d.v.pref.pin.url && d.v.pref.pin.description ? (d.f.pinDefault(d.v.pref.pin), a = !0) : d.v.pref.og.media && d.v.pref.og.url && d.v.pref.og.description && (d.f.pinDefault(d.v.pref.og), a = !0), a
                },
                getLang: function () {
                    var a, b, c, e, f;
                    if (f = d.d.getElementsByTagName("HTML")[0].getAttribute("lang") || "") f = f.toLowerCase();
                    else
                        for (a = 0, b = d.v.meta.length; a < b; a += 1) {
                            var c = d.f.get(d.v.meta[a], "http-equiv");
                            if (c && (c = c.toLowerCase(), "content-language" === c && (e = d.f.get(d.v.meta[a], "content")))) {
                                f = e;
                                break
                            }
                        }
                    f && ("object" === typeof d.a.msg[f] ? d.v.msg = d.a.msg[f] : (f = f.split("-")[0], "object" === typeof d.a.msg[f] && (d.v.msg = d.a.msg[f])))
                },
                hazPinIt: function () {
                    var a, b, c = d.d.getElementsByTagName("SCRIPT"),
                        e = "pinit_not_found";
                    for (a = 0, b = c.length; a < b; a += 1)
                        if (c[a].src && c[a].src.match(/^https?:\/\/log\.pinterest\.com/)) {
                            e = "pinit_found";
                            break
                        }
                    d.f.debug(e), d.f.log(e)
                },
                init: function () {
                    if (d.d.d = d.d.documentElement, d.d.b = d.d.getElementsByTagName("BODY")[0], d.v = {
                        callbacksHaveReturned: 0,
                        checkDomain: {},
                        checkDomainDone: {},
                        checkDomainBlacklist: {},
                        config: {},
                        css: "",
                        data: {
                            thumb: []
                        },
                        done: !1,
                        hazCalledForInfo: {},
                        hazIE: !1,
                        hazIOS: !1,
                        meta: d.d.getElementsByTagName("META"),
                        nextCallback: 0,
                        pref: {
                            pin: {},
                            og: {}
                        },
                        renderedThumb: {},
                        saveScrollTop: d.w.pageYOffset,
                        msg: d.a.msg.en
                    }, d.f.getLang(), d.v.msg.button || (d.v.msg.button = d.a.buttonImage), !d.d.b) return d.v.data.msg = d.v.msg.noPinIncompletePage, void d.f.done();
                    if (window.isMainPinterestSite === !0 && d.d.URL.match(/^https?:\/\/(.*?\.|)pinterest\.com\//)) return d.v.data.close = d.v.msg.installed, void d.f.done();
                    if (/msie/i.test(d.w.navigator.userAgent) && !/opera/i.test(d.w.navigator.userAgent) && (d.v.hazIE = !0), null !== d.w.navigator.userAgent.match(/iP/) && (d.v.hazIOS = !0), d.f.getArgs(), d.f.checkPage(), !d.v.config.render) {
                        if (window.hazPinningNow === !0) return;
                        window.hazPinningNow = !0, d.f.makeStyleFrom(d.a.presentation), d.f.structure(), d.f.presentation()
                    }
                    if (d.v.config.pinMethod && (d.a.pinMethod = d.v.config.pinMethod), !d.v.data.close && !d.v.data.confirm && !d.v.data.blacklistedDomain) {
                        var a = d.f.getPreferred();
                        d.f.debug("page partner: " + d.v.pagePartner), d.v.pagePartner && a && d.v.doNotCrawl ? d.f.debug("preferred media found on partner page " + d.v.pagePartner + ", doNotCrawl set. Not looking further") : (d.f.debug("getting pinnable tags"), d.f.getPinnableTags())
                    }
                    d.f.debug("checking for restricted domains"), d.f.checkDomains(), d.f.debug("checking for Snag It buttons on this page"), d.f.hazPinIt(), d.w.setTimeout(function () {
                        d.f.ponder()
                    }, 100)
                }
            }
        }()
    };
    d.f.init()
// }(window, document, {
//     maxWait: 4e3,
//     k: "PIN_" + (new Date).getTime(),
//     me: /pinmarklet/,
//     infiniteZ: ["tumblr_controls", "pt_toolbar_iframe", "rakutenLimitedId_header"],
//     log: "//api.pinterest.com/v3/callback/nopin/",
//     checkDomain: {
//         url: "//api.pinterest.com/v2/domains/filter_nopin/"
//     },
//     cdn: {
//         "https:": "https://s-passets.pinimg.com",
//         "http:": "http://passets.pinterest.com"
//     },
//     maxCheckCount: 10,
//     thumbCellSize: 236,
//     thumbCellMargin: 14,
//     thumbInfoHeight: 50,
//     thumbDimHeight: 30,
//     validConfigParam: ["debug", "noCancel", "noHeader", "pinMethod", "extensionVer", "render", "quiet"],
//     embed: "//api.pinterest.com/v3/embed/",
//     pin: "pinterest.com/pin/create",
//     pinMethod: "bookmarklet",
//     dataAttributePrefix: "data-pin-",
//     imgSizeMin: 119,
//     imgSizeFloor: 79,
//     validDataAtt: ["url", "media", "description"],
//     pop: "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=632,height=270,left=0,top=0",
//     buttonImage: "images/bm/button.png",
//     msg: {
//         en: {
//             cancelTitle: "Cancel",
//             noPinIncompletePage: "Sorry, can't pin from non-HTML pages. If you're trying to upload an image, please visit pinterest.com.",
//             stumbleuponFrame: "We need to hide the %s% toolbar to pin from this page.  After pinning, you can use the back button in your browser to return to %s%. Click OK to continue or Cancel to stay here.",
//             noPinDomain: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
//             noPinMeta: "Sorry, pinning is not allowed from this page. Please contact the site operator if you have any questions.",
//             privateDomain: "Sorry, can't pin directly from %privateDomain%.",
//             noPinnablesFound: "Sorry, couldn't find any pinnable things on this page.",
//             installed: "Sorry, no pinning from Pinterest.",
//             attrib: "from",
//             small: "small"
//         },
       
//     },
//     presentation: {
//         "div#_bg": {
//             position: "fixed",
//             top: "0px",
//             left: "0px",
//             right: "0px",
//             bottom: "0px",
//             height: "100%",
//             width: "100%",
//             background: "#eee",
//             "z-index": "2147483641"
//         },
//         "div#_bd": {
//             "z-index": "2147483642",
//             "text-align": "center",
//             position: "absolute",
//             width: "100%",
//             top: "0",
//             left: "0",
//             right: "0",
//             font: "16px helvetica neue,arial,san-serif",
//             "#_spacer": {
//                 display: "block",
//                 height: "60px"
//             },
//             "div#_hd": {
//                 "z-index": "2147483643",
//                 "-moz-box-shadow": "0 1px 2px #aaa",
//                 "-webkit-box-shadow": "0 1px 2px #aaa",
//                 "box-shadow": "0 1px 2px #aaa",
//                 position: "fixed",
//                 "*position": "absolute",
//                 width: "100%",
//                 top: "0",
//                 left: "0",
//                 right: "0",
//                 height: "45px",
//                 display: "block",
//                 margin: "0",
//                 background: "#fbf7f7",
//                 "border-bottom": "1px solid #aaa",
//                 "&._noHeader": {
//                     height: "1px",
//                     "background-color": "#f2f2f2",
//                     "-moz-box-shadow": "none",
//                     "-webkit-box-shadow": "none",
//                     "box-shadow": "none",
//                     border: "none"
//                 },
//                 "a#_x": {
//                     display: "inline-block",
//                     cursor: "pointer",
//                     color: "#524D4D",
//                     "text-shadow": "0 1px #fff",
//                     "float": "right",
//                     "line-height": "45px",
//                     "font-size": "14px",
//                     "font-weight": "bold",
//                     "text-align": "center",
//                     width: "100px",
//                     "border-left": "1px solid #aaa",
//                     "&:hover": {
//                         color: "#524D4D",
//                         background: "#e1dfdf",
//                         "text-decoration": "none"
//                     },
//                     "&:active": {
//                         color: "#fff",
//                         background: "#cb2027",
//                         "text-decoration": "none",
//                         "text-shadow": "none"
//                     }
//                 },
//                 "#_logo": {
//                     height: "43px",
//                     width: "100px",
//                     display: "inline-block",
//                     "margin-right": "-100px",
//                     background: "transparent url(_cdn/images/LogoRed.png) 50% 50% no-repeat",
//                     border: "none"
//                 }
//             },
//             "div#_ct": {
//                 margin: "0 auto 50px",
//                 position: "relative",
//                 "span._thumb": {
//                     background: "#bbb",
//                     position: "absolute",
//                     "border-radius": "3px",
//                     "-moz-box-shadow": "0 0 2px #555",
//                     "-webkit-box-shadow": "0 0 2px #555",
//                     "box-shadow": "0 0 2px #555",
//                     overflow: "hidden",
//                     "span._pin": {
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         cursor: "pointer",
//                         zoom: "1",
//                         "background-position": "50% 50%",
//                         "background-repeat": "no-repeat",
//                         "-moz-transition-property": "background-color",
//                         "-moz-transition-duration": ".25s",
//                         "-webkit-transition-property": "background-color",
//                         "-webkit-transition-duration": ".25s",
//                         "transition-property": "background-color",
//                         "transition-duration": ".25s",
//                         "img._thumb": {
//                             border: "none",
//                             margin: "0",
//                             padding: "0"
//                         }
//                     },
//                     "&:hover": {
//                         "span._pin": {
//                             "background-image": "url(assets/plus.png)",
//                             "background-color": "rgba(0, 0, 0, .25)"
//                         },
//                         "div._info": {
//                             "background-color": "#fff",
//                             "background-image": "url(_cdn/images/bm/pencil.png)"
//                         }
//                     },
//                     "span._play": {
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         background: "transparent url(_cdn/images/bm/play.png) 50% 50% no-repeat"
//                     },
//                     small: {
//                         position: "absolute",
//                         right: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "30px",
//                         "line-height": "30px",
//                         "text-align": "center",
//                         "font-size": "10px",
//                         background: "#fff",
//                         color: "#000",
//                         "border-top": "1px solid #eee"
//                     },
//                     "div._info": {
//                         position: "absolute",
//                         "border-top": "1px solid #eee",
//                         left: "0",
//                         right: "0",
//                         bottom: "0",
//                         width: "100%",
//                         color: "#333",
//                         padding: "14px 0 14px 0",
//                         "line-height": "17px",
//                         "font-size": "13px",
//                         "font-style": "normal",
//                         "font-weight": "normal",
//                         "text-align": "left",
//                         "text-shadow": "none",
//                         overflow: "hidden",
//                         "background-color": "#f6f6f6",
//                         "background-position": "215px 15px",
//                         "background-repeat": "no-repeat",
//                         "&._hazAttrib": {
//                             "padding-bottom": "45px"
//                         },
//                         span: {
//                             display: "block",
//                             margin: "0 18px 0 14px"
//                         },
//                         "span._attrib": {
//                             "border-top": "1px solid #eee",
//                             position: "absolute",
//                             bottom: "0",
//                             margin: "0",
//                             left: "0",
//                             right: "0",
//                             height: "30px",
//                             "line-height": "30px",
//                             "font-size": "11px",
//                             "text-indent": "14px",
//                             background: "#fff",
//                             "img._attrib": {
//                                 "vertical-align": "middle",
//                                 margin: "0",
//                                 padding: "0"
//                             }
//                         }
//                     }
//                 }
//             }
//         },
//         "@media only screen and (-webkit-min-device-pixel-ratio: 2)": {
//             "#_logo": {
//                 "background-size": "100px 26px",
//                 "background-image": "url(_cdn/images/LogoRed.2x.png)"
//             }
//         }
//     },
    lookup: {
        artsy: {
            label: "Artsy",
            page: {
                seek: [/^https?:\/\/(.*?\.|)artsy\.net\/artwork\//, /^https?:\/\/(.*?\.|)artsy\.net\/post\//]
            },
            img: {
                seek: [/^https?:\/\/(.*?\.|)artsy\.net\//],
                act: "lookup"
            }
        },
        behance: {
            label: "Behance",
            img: {
                seek: [/^http:\/\/behance\.vo\.llnwd\.net\//, /^https?:\/\/m?[0-9]\.behance\.net\//],
                act: "lookup"
            }
        },
        dasauge: {
            label: "Dasauge",
            img: {
                seek: [/^https?:\/\/cdn?[0-9]\.dasauge\.net\//],
                act: "lookup"
            }
        },
        dailymotion: {
            label: "DailyMotion",
            page: {
                seek: [/^https?:\/\/.*?\.dailymotion\.com\//],
                act: "lookup",
                via: "id",
                multimedia: !0,
                doNotCrawl: !0
            }
        },
        dreamstime: {
            label: "Dreamstime",
            img: {
                seek: [/(.*?)\.dreamstime\.com\//],
                act: "lookup"
            }
        },
        etsy: {
            label: "Etsy",
            page: {
                seek: [/^https?:\/\/.*?\.etsy\.com\/listing\//],
                patch: {
                    img: function (a) {
                        return a.replace(/il_(.*?)\./, "il_570xN.")
                    }
                }
            },
            img: {
                seek: [/^https?:\/\/.*?\.etsystatic\.com\//],
                patch: function (a) {
                    return a.replace(/il_(.*?)\./, "il_570xN.")
                },
                act: "lookup"
            }
        },
        fivehundredpx: {
            label: "500px",
            page: {
                seek: [/^https?:\/\/500px\.com\/photo\//],
                act: "lookup",
                via: "id",
                doNotCrawl: !0
            },
            img: {
                seek: [/pcdn\.500px\.net\//],
                act: "lookup"
            }
        },
        facebook: {
            page: {
                seek: [/^https?:\/\/(.*?\.|)facebook\.com\//],
                act: "close",
                msg: "privateDomain",
                patch: function (a) {
                    return a.replace(/%privateDomain%/, "Facebook")
                }
            }
        },
        flickr: {
            label: "Flickr",
            page: {
                seek: [/^https?:\/\/www\.flickr\.com\//],
                act: "lookup",
                via: "id",
                doNotCrawl: !0
            },
            img: {
                seek: [/staticflickr.com\//, /static.flickr.com\//],
                act: "lookup"
            }
        },
        foursquare: {
            page: {
                seek: [/^https?:\/\/(.*?\.|)foursquare\.com\//],
                patch: function () {
                    for (var a = document.getElementsByTagName("img"), b = /net\/img\/general/, c = 0, d = a.length; c < d; c += 1)
                        if (a[c].src && a[c].src.match(b)) {
                            var e = a[c].src.split("/");
                            if (e.length > 2) {
                                var f = e[0] + "//" + e[2] + "/img/general/width960/" + e.pop();
                                a[c].setAttribute("data-pin-media", f)
                            }
                            var g = a[c].parentNode;
                            "A" === g.tagName && g.href && a[c].setAttribute("data-pin-url", g.href)
                        } else a[c].setAttribute("nopin", !0)
                }
            }
        },
        geograph: {
            label: "Geograph",
            img: {
                seek: [/^https?:\/\/(.*?)\.geograph\.org\./],
                act: "lookup"
            }
        },
        googleReader: {
            page: {
                seek: [/^https?:\/\/.*?\.google\.com\/reader\//],
                act: "close",
                msg: "privateDomain",
                patch: function (a) {
                    return a.replace(/%privateDomain%/, "Google Reader")
                }
            }
        },
        googleList: {
            page: {
                seek: [/^https?:\/\/www\.google\.com\/search(.*&tbm=isch.*)/],
                patch: function (a) {
                    a.f.debug("patching Google Image Search results");
                    var b, c, d, e, f, g, h, i;
                    if (b = a.d.getElementById("ires"))
                        for (c = b.getElementsByTagName("A"), d = 0, e = c.length; d < e; d += 1) h = "", i = "", c[d].href && (g = c[d].href.split("imgrefurl="), g[1] && (h = g[1].split("&")[0]), g = c[d].href.split("imgurl="), g[1] && (i = g[1].split("&")[0])), h && i && (f = c[d].getElementsByTagName("IMG"), f[0] && (a.f.set(f[0], "data-pin-url", decodeURIComponent(h)), a.f.set(f[0], "data-pin-media", decodeURIComponent(i))))
                }
            }
        },
        imdb: {
            img: {
                seek: [/^https?:\/\/(.*?)\.media-imdb\.com\/images\//],
                patch: function (a) {
                    return a.replace(/@@(.*)/, "@@._V1_SX800.jpg")
                }
            }
        },
        kickstarter: {
            label: "Kickstarter",
            page: {
                seek: [/^https?:\/\/.*?\.kickstarter\.com\/projects\//],
                act: "lookup",
                via: "id",
                multimedia: !0
            }
        },
        polyvore: {
            label: "Polyvore",
            page: {
                seek: [/^https?:\/\/(.*?\.|)polyvore\.com\//],
                act: "lookup",
                via: "id",
                doNotCrawl: !0
            },
            img: {
                seek: [/^https?:\/\/(.*?)\.polyvoreimg\.com\//],
                act: "lookup"
            }
        },
        shutterstock: {
            label: "Shutterstock",
            img: {
                seek: [/^https?:\/\/image.shutterstock\.com\//, /^https?:\/\/thumb(.*?).shutterstock\.com\//],
                act: "lookup"
            }
        },
        slideshare: {
            label: "Slideshare",
            page: {
                seek: [/^https?:\/\/.*?\.slideshare\.net\//],
                act: "lookup",
                via: "id",
                multimedia: !0,
                doNotCrawl: !0
            }
        },
        soundcloud: {
            label: "SoundCloud",
            page: {
                seek: [/^https?:\/\/soundcloud\.com\//],
                act: "lookup",
                via: "id",
                multimedia: !0,
                doNotCrawl: !0
            }
        },
        stumbleuponFrame: {
            page: {
                seek: [/^https?:\/\/(.*?\.|)stumbleupon\.com\/su/],
                act: "bustFrame",
                serviceName: "StumbleUpon",
                frameId: ["tb-stumble-frame", "stumbleFrame"]
            }
        },
        ted: {
            label: "TED",
            page: {
                seek: [/^https?:\/\/(.*?)\.ted\.com\/talks\//],
                act: "lookup",
                via: "id",
                multimedia: !0,
                doNotCrawl: !0
            },
            img: {
                seek: [/^https?:\/\/(.*?)\.ted\.com\//],
                act: "lookup"
            },
            iframe: {
                seek: [/^https?:\/\/(.*?)\.ted\.com\//],
                act: "lookup",
                via: "id"
            }
        },
        tumblr: {
            img: {
                seek: [/^https?:\/\/.*?\.media\.tumblr\.com\//],
                patch: function (a) {
                    return a.replace(/_(\d+)\.jpg$/, "_1280.jpg")
                }
            }
        },
        tumblrList: {
            page: {
                seek: [/^https?:\/\/www\.tumblr\.com\/tagged/, /^https?:\/\/www\.tumblr\.com\/dashboard/],
                patch: function (a) {
                    a.f.debug("patching Tumblr search or index");
                    var b, c, d, e, f, g, h, i, j;
                    for (b = a.d.getElementsByTagName("LI"), c = 0, d = b.length; c < d; c += 1) {
                        for (j = a.f.get(b[c], "data-tumblelog-content-rating"), e = b[c].getElementsByTagName("A"), i = "", g = 0, h = e.length; g < h; g += 1)
                            if (e[g].id && e[g].id.split("permalink_")[1]) {
                                i = e[g].href;
                                break
                            }
                        if (i)
                            for (f = b[c].getElementsByTagName("IMG"), g = 0, h = f.length; g < h; g += 1) "adult" === j ? (a.f.set(f[g], "data-pin-nopin", !0), a.f.debug("do not pin per Tumblr content rating: " + f[g].src), a.f.log("nsfw_per_domain", f[g].src, i)) : a.f.set(f[g], "data-pin-url", i)
                    }
                }
            }
        },
        vimeo: {
            label: "Vimeo",
            page: {
                seek: [/^https?:\/\/vimeo\.com\//],
                act: "lookup",
                via: "link",
                patch: function (a) {
                    a.f.debug("patching Vimeo page");
                    var b, c, d, e, f, g, h, i, j, k, l;
                    for (k = a.d.getElementsByTagName("META"), c = 0, d = k.length; c < d; c += 1) l = k[c].getAttribute("itemprop"), "image" === l && k[c].content && (a.v.pref.pin.media = k[c].content), "playpageUrl" === l && k[c].content && (a.v.pref.pin.url = k[c].content);
                    for (b = a.d.getElementsByTagName("LI"), c = 0, d = b.length; c < d; c += 1)
                        for (b[c].id && b[c].id.match(/^clip/) ? (e = b[c].id.split("clip"), e[1] && (e[1] = e[1].replace(/_/, ""), a.f.thumbMedia("http://vimeo.com/" + e[1], "vimeo", "link"))) : (i = b[c].getElementsByTagName("A"), i[0] && (j = a.f.get(i[0], "data-id"), j && a.f.thumbMedia("http://vimeo.com/" + j, "vimeo", "link"))), f = b[c].getElementsByTagName("IMG"), g = 0, h = f.length; g < h; g += 1) a.f.set(f[g], "data-pin-nopin", !0)
                }
            },
            iframe: {
                seek: [/^http?s:\/\/vimeo\.com\/(\d+)/, /^http:\/\/player\.vimeo\.com\/video\/(\d+)/],
                act: "lookup",
                via: "link",
                patch: function (a) {
                    var b = null,
                        c = a.split("#")[0].split("?")[0].split("/").pop();
                    return c > 1e3 && (b = "http://vimeo.com/" + c), b
                },
                att: "src"
            }
        },
        yelp: {
            page: {
                seek: [/^https?:\/\/(.*?\.|)yelp\.com\//],
                patch: function () {
                    for (var a = document.getElementsByTagName("img"), b = /bphoto/, c = 0, d = a.length; c < d; c += 1)
                        if (a[c].src && a[c].src.match(b)) {
                            var e = a[c].src.split("/");
                            if (e.length > 2) {
                                e.pop();
                                var f = e.join("/") + "/o.jpg";
                                a[c].setAttribute("data-pin-media", f);
                                var g = a[c].parentNode;
                                "A" === g.tagName && g.href && a[c].setAttribute("data-pin-url", g.href)
                            }
                        } else a[c].setAttribute("nopin", !0)
                }
            }
        },
        
        }
    
});



// ;(function(){

// var init = function(){
//   if (location.href.length >= 21 && location.href.substring(0,21) == "http://localhost:3000")
//     return;
// var images = document.getElementsByTagName('img');
//   if (images.length == 0)
//     alert("No images here");
//   else
//     setupSnagger(images);
//   // location.href = "http://localhost:3000/?x=5"
// }
// var setupSnagger = function(images){
//   if ( !document.getElementById('imageSnagger') ) {
//     var newDiv = document.createElement('div');
//     newDiv.setAttribute('id', 'imageSnagger');
//     newDiv.style.position = 'fixed';
//     newDiv.style.bottom = '0';
//     newDiv.style.right = '0';
//     newDiv.style.top = '0';
//     newDiv.style.backgroundColor = "#eee";
//     newDiv.style.padding = '0.4em 1em';
//     newDiv.style.height = "100%";
//     newDiv.style.width = "100%";
//     newDiv.style.fontFamily = 'monospace';
//     newDiv.style.zIndex = '100000000';
//     newDiv.innerHTML = "hello world";
//     document.body.appendChild(newDiv);
//     //     numImages = images.length;
//         window.rachelIggyNewDiv = newDiv;
//     window.rachelIggyAllImages = [];
//     for (var i=0;i<images.length;i++){
//   // Capture just the images that are large enough
//       if(images[i].width > 80 && images[i].height > 40)
//       {
//         var imgButton = document.createElement('input');
//         imgButton.setAttribute('type', 'button');
//         imgButton.setAttribute('onclick', 'rachelIggyMigrateImage('+rachelIggyAllImages.length+');');
//         imgButton.style.position="absolute";
//         imgButton.style.zIndex=2147483640;
//         images[i].parentNode.insertBefore(imgButton, images[i].nextSibling)
//   rachelIggyAllImages.push(images[i]);
//       }
//     }

// window.rachelIggyMigrateImage = function(id){
//       var newImage = document.createElement('img');
//       newImage.setAttribute('src', rachelIggyAllImages[id].src);
//       newDiv.appendChild(document.createElement('br'));
//       newDiv.appendChild(newImage);
// }
  

//   }

// };


// init();

// })(window);


//   // for (var i=0;i<numImages;i++){
//     //   var newImage = document.createElement('img');
//     //   newImage.setAttribute('src', images[i].src);
//     //   newDiv.appendChild(newImage);
//     // }

//     //     for (var i=0;i<images.length;i++){
//     //     var newImage = document.createElement('img');
//     //     newImage.setAttribute('src', images[i].src);
//     //     newDiv.appendChild(newImage);
//     //   if(!confirm("Dude!!! " + images.length))
//     //      break;
//     // }
//     // newImage.setAttribute('src', images[0].src);
//     // for (var i=0;i<images.length;i++){
//     //   var newImage = document.createElement('img');
//     //   newImage.setAttribute('src', images[0].src);
//     //   newDiv.appendChild(newImage);
//     // }
