!(function(e, t) {
  typeof exports === "object" && typeof module === "object"
    ? (module.exports = t())
    : typeof define === "function" && define.amd
    ? define("pdfjs-dist/build/pdf", [], t)
    : typeof exports === "object"
    ? (exports["pdfjs-dist/build/pdf"] = t())
    : (e["pdfjs-dist/build/pdf"] = e.pdfjsLib = t());
})(this, () =>
  (function(e) {
    const t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      const i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        typeof Symbol !== "undefined" &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && typeof e === "object" && e && e.__esModule) return e;
        const n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && typeof e !== "string")
        ) {
          for (const i in e) {
            r.d(
              n,
              i,
              (t => {
                return e[t];
              }).bind(null, i)
            );
          }
        }
        return n;
      }),
      (r.n = function(e) {
        const t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function(e, t, r) {
      const n = r(1);
      const i = r(129);
      const a = r(145);
      const o = r(146);
      const s = r(130);
      const u = r(147);
      const l = r(135);
      const c = r(132);
      if (r(4)()) {
        const h = r(148).PDFNodeStream;
        i.setPDFNetworkStreamFactory(e => new h(e));
      } else if (
        typeof Response !== "undefined" &&
        "body" in Response.prototype &&
        typeof ReadableStream !== "undefined"
      ) {
        const d = r(151).PDFFetchStream;
        i.setPDFNetworkStreamFactory(e => new d(e));
      } else {
        const f = r(152).PDFNetworkStream;
        i.setPDFNetworkStreamFactory(e => new f(e));
      }
      (t.build = i.build),
        (t.version = i.version),
        (t.getDocument = i.getDocument),
        (t.LoopbackPort = i.LoopbackPort),
        (t.PDFDataRangeTransport = i.PDFDataRangeTransport),
        (t.PDFWorker = i.PDFWorker),
        (t.renderTextLayer = a.renderTextLayer),
        (t.AnnotationLayer = o.AnnotationLayer),
        (t.createPromiseCapability = n.createPromiseCapability),
        (t.PasswordResponses = n.PasswordResponses),
        (t.InvalidPDFException = n.InvalidPDFException),
        (t.MissingPDFException = n.MissingPDFException),
        (t.SVGGraphics = u.SVGGraphics),
        (t.NativeImageDecoding = n.NativeImageDecoding),
        (t.CMapCompressionType = n.CMapCompressionType),
        (t.PermissionFlag = n.PermissionFlag),
        (t.UnexpectedResponseException = n.UnexpectedResponseException),
        (t.OPS = n.OPS),
        (t.VerbosityLevel = n.VerbosityLevel),
        (t.UNSUPPORTED_FEATURES = n.UNSUPPORTED_FEATURES),
        (t.createValidAbsoluteUrl = n.createValidAbsoluteUrl),
        (t.createObjectURL = n.createObjectURL),
        (t.removeNullCharacters = n.removeNullCharacters),
        (t.shadow = n.shadow),
        (t.Util = n.Util),
        (t.ReadableStream = n.ReadableStream),
        (t.URL = n.URL),
        (t.RenderingCancelledException = s.RenderingCancelledException),
        (t.getFilenameFromUrl = s.getFilenameFromUrl),
        (t.LinkTarget = s.LinkTarget),
        (t.addLinkAttributes = s.addLinkAttributes),
        (t.loadScript = s.loadScript),
        (t.GlobalWorkerOptions = l.GlobalWorkerOptions),
        (t.apiCompatibilityParams = c.apiCompatibilityParams);
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unreachable = t.warn = t.utf8StringToString = t.stringToUTF8String = t.stringToPDFString = t.stringToBytes = t.string32 = t.shadow = t.setVerbosityLevel = t.URL = t.ReadableStream = t.removeNullCharacters = t.readUint32 = t.readUint16 = t.readInt8 = t.log2 = t.isEvalSupported = t.isLittleEndian = t.createValidAbsoluteUrl = t.isSameOrigin = t.isSpace = t.isString = t.isNum = t.isEmptyObj = t.isBool = t.isArrayBuffer = t.info = t.getVerbosityLevel = t.getLookupTableFactory = t.getInheritableProperty = t.deprecated = t.createObjectURL = t.createPromiseCapability = t.bytesToString = t.assert = t.arraysToBytes = t.arrayByteLength = t.FormatError = t.XRefParseException = t.toRomanNumerals = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.PermissionFlag = t.PasswordResponses = t.PasswordException = t.NativeImageDecoding = t.MissingPDFException = t.MissingDataException = t.InvalidPDFException = t.AbortException = t.CMapCompressionType = t.ImageKind = t.FontType = t.AnnotationType = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.UNSUPPORTED_FEATURES = t.VerbosityLevel = t.OPS = t.IDENTITY_MATRIX = t.FONT_IDENTITY_MATRIX = void 0);
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      r(2);
      const i = r(125);
      const a = r(127);
      const o = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      let s = o.WARNINGS;
      function u(e) {
        s >= o.WARNINGS && console.log(`Warning: ${e}`);
      }
      function l(e) {
        throw new Error(e);
      }
      function c(e, t) {
        e || l(t);
      }
      const h = (function() {
        function e(e, t) {
          (this.name = "PasswordException"),
            (this.message = e),
            (this.code = t);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const d = (function() {
        function e(e, t) {
          (this.name = "UnknownErrorException"),
            (this.message = e),
            (this.details = t);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const f = (function() {
        function e(e) {
          (this.name = "InvalidPDFException"), (this.message = e);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const p = (function() {
        function e(e) {
          (this.name = "MissingPDFException"), (this.message = e);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const v = (function() {
        function e(e, t) {
          (this.name = "UnexpectedResponseException"),
            (this.message = e),
            (this.status = t);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const m = (function() {
        function e(e, t) {
          (this.begin = e),
            (this.end = t),
            (this.message = `Missing data [${e}, ${t})`);
        }
        return (
          (e.prototype = new Error()),
          (e.prototype.name = "MissingDataException"),
          (e.constructor = e),
          e
        );
      })();
      const g = (function() {
        function e(e) {
          this.message = e;
        }
        return (
          (e.prototype = new Error()),
          (e.prototype.name = "XRefParseException"),
          (e.constructor = e),
          e
        );
      })();
      const y = (function() {
        function e(e) {
          this.message = e;
        }
        return (
          (e.prototype = new Error()),
          (e.prototype.name = "FormatError"),
          (e.constructor = e),
          e
        );
      })();
      const b = (function() {
        function e(e) {
          (this.name = "AbortException"), (this.message = e);
        }
        return (e.prototype = new Error()), (e.constructor = e), e;
      })();
      const _ = /\x00/g;
      function A(e) {
        c(typeof e === "string", "Invalid argument for stringToBytes");
        for (var t = e.length, r = new Uint8Array(t), n = 0; n < t; ++n)
          r[n] = 255 & e.charCodeAt(n);
        return r;
      }
      function S(e) {
        return void 0 !== e.length
          ? e.length
          : (c(void 0 !== e.byteLength), e.byteLength);
      }
      const w = (function() {
        function e() {}
        const t = ["rgb(", 0, ",", 0, ",", 0, ")"];
        return (
          (e.makeCssRgb = function(e, r, n) {
            return (t[1] = e), (t[3] = r), (t[5] = n), t.join("");
          }),
          (e.transform = function(e, t) {
            return [
              e[0] * t[0] + e[2] * t[1],
              e[1] * t[0] + e[3] * t[1],
              e[0] * t[2] + e[2] * t[3],
              e[1] * t[2] + e[3] * t[3],
              e[0] * t[4] + e[2] * t[5] + e[4],
              e[1] * t[4] + e[3] * t[5] + e[5]
            ];
          }),
          (e.applyTransform = function(e, t) {
            return [
              e[0] * t[0] + e[1] * t[2] + t[4],
              e[0] * t[1] + e[1] * t[3] + t[5]
            ];
          }),
          (e.applyInverseTransform = function(e, t) {
            const r = t[0] * t[3] - t[1] * t[2];
            return [
              (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r,
              (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r
            ];
          }),
          (e.getAxialAlignedBoundingBox = function(t, r) {
            const n = e.applyTransform(t, r);
            const i = e.applyTransform(t.slice(2, 4), r);
            const a = e.applyTransform([t[0], t[3]], r);
            const o = e.applyTransform([t[2], t[1]], r);
            return [
              Math.min(n[0], i[0], a[0], o[0]),
              Math.min(n[1], i[1], a[1], o[1]),
              Math.max(n[0], i[0], a[0], o[0]),
              Math.max(n[1], i[1], a[1], o[1])
            ];
          }),
          (e.inverseTransform = function(e) {
            const t = e[0] * e[3] - e[1] * e[2];
            return [
              e[3] / t,
              -e[1] / t,
              -e[2] / t,
              e[0] / t,
              (e[2] * e[5] - e[4] * e[3]) / t,
              (e[4] * e[1] - e[5] * e[0]) / t
            ];
          }),
          (e.apply3dTransform = function(e, t) {
            return [
              e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
              e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
              e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
            ];
          }),
          (e.singularValueDecompose2dScale = function(e) {
            const t = [e[0], e[2], e[1], e[3]];
            const r = e[0] * t[0] + e[1] * t[2];
            const n = e[0] * t[1] + e[1] * t[3];
            const i = e[2] * t[0] + e[3] * t[2];
            const a = e[2] * t[1] + e[3] * t[3];
            const o = (r + a) / 2;
            const s = Math.sqrt((r + a) * (r + a) - 4 * (r * a - i * n)) / 2;
            const u = o + s || 1;
            const l = o - s || 1;
            return [Math.sqrt(u), Math.sqrt(l)];
          }),
          (e.normalizeRect = function(e) {
            const t = e.slice(0);
            return (
              e[0] > e[2] && ((t[0] = e[2]), (t[2] = e[0])),
              e[1] > e[3] && ((t[1] = e[3]), (t[3] = e[1])),
              t
            );
          }),
          (e.intersect = function(t, r) {
            function n(e, t) {
              return e - t;
            }
            const i = [t[0], t[2], r[0], r[2]].sort(n);
            const a = [t[1], t[3], r[1], r[3]].sort(n);
            const o = [];
            return (
              (t = e.normalizeRect(t)),
              (r = e.normalizeRect(r)),
              ((i[0] === t[0] && i[1] === r[0]) ||
                (i[0] === r[0] && i[1] === t[0])) &&
                ((o[0] = i[1]),
                (o[2] = i[2]),
                ((a[0] === t[1] && a[1] === r[1]) ||
                  (a[0] === r[1] && a[1] === t[1])) &&
                  ((o[1] = a[1]), (o[3] = a[2]), o))
            );
          }),
          e
        );
      })();
      const k = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX"
      ];
      const P = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        728,
        711,
        710,
        729,
        733,
        731,
        730,
        732,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        8226,
        8224,
        8225,
        8230,
        8212,
        8211,
        402,
        8260,
        8249,
        8250,
        8722,
        8240,
        8222,
        8220,
        8221,
        8216,
        8217,
        8218,
        8482,
        64257,
        64258,
        321,
        338,
        352,
        376,
        381,
        305,
        322,
        339,
        353,
        382,
        0,
        8364
      ];
      let x;
      const C =
        ((x =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        function(e, t) {
          if (
            !(
              arguments.length > 2 &&
              void 0 !== arguments[2] &&
              arguments[2]
            ) &&
            a.URL.createObjectURL
          ) {
            const r = new Blob([e], { type: t });
            return a.URL.createObjectURL(r);
          }
          for (
            var n = `data:${t};base64,`, i = 0, o = e.length;
            i < o;
            i += 3
          ) {
            const s = 255 & e[i];
            const u = 255 & e[i + 1];
            const l = 255 & e[i + 2];
            n +=
              x[s >> 2] +
              x[((3 & s) << 4) | (u >> 4)] +
              x[i + 1 < o ? ((15 & u) << 2) | (l >> 6) : 64] +
              x[i + 2 < o ? 63 & l : 64];
          }
          return n;
        });
      (t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]),
        (t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]),
        (t.OPS = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotations: 78,
          endAnnotations: 79,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintJpegXObject: 82,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        }),
        (t.VerbosityLevel = o),
        (t.UNSUPPORTED_FEATURES = {
          unknown: "unknown",
          forms: "forms",
          javaScript: "javaScript",
          smask: "smask",
          shadingPattern: "shadingPattern",
          font: "font"
        }),
        (t.AnnotationBorderStyleType = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5
        }),
        (t.AnnotationFieldFlag = {
          READONLY: 1,
          REQUIRED: 2,
          NOEXPORT: 4,
          MULTILINE: 4096,
          PASSWORD: 8192,
          NOTOGGLETOOFF: 16384,
          RADIO: 32768,
          PUSHBUTTON: 65536,
          COMBO: 131072,
          EDIT: 262144,
          SORT: 524288,
          FILESELECT: 1048576,
          MULTISELECT: 2097152,
          DONOTSPELLCHECK: 4194304,
          DONOTSCROLL: 8388608,
          COMB: 16777216,
          RICHTEXT: 33554432,
          RADIOSINUNISON: 33554432,
          COMMITONSELCHANGE: 67108864
        }),
        (t.AnnotationFlag = {
          INVISIBLE: 1,
          HIDDEN: 2,
          PRINT: 4,
          NOZOOM: 8,
          NOROTATE: 16,
          NOVIEW: 32,
          READONLY: 64,
          LOCKED: 128,
          TOGGLENOVIEW: 256,
          LOCKEDCONTENTS: 512
        }),
        (t.AnnotationType = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        }),
        (t.FontType = {
          UNKNOWN: 0,
          TYPE1: 1,
          TYPE1C: 2,
          CIDFONTTYPE0: 3,
          CIDFONTTYPE0C: 4,
          TRUETYPE: 5,
          CIDFONTTYPE2: 6,
          TYPE3: 7,
          OPENTYPE: 8,
          TYPE0: 9,
          MMTYPE1: 10
        }),
        (t.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }),
        (t.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 }),
        (t.AbortException = b),
        (t.InvalidPDFException = f),
        (t.MissingDataException = m),
        (t.MissingPDFException = p),
        (t.NativeImageDecoding = {
          NONE: "none",
          DECODE: "decode",
          DISPLAY: "display"
        }),
        (t.PasswordException = h),
        (t.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 }),
        (t.PermissionFlag = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        }),
        (t.StreamType = {
          UNKNOWN: 0,
          FLATE: 1,
          LZW: 2,
          DCT: 3,
          JPX: 4,
          JBIG: 5,
          A85: 6,
          AHX: 7,
          CCF: 8,
          RL: 9
        }),
        (t.TextRenderingMode = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        }),
        (t.UnexpectedResponseException = v),
        (t.UnknownErrorException = d),
        (t.Util = w),
        (t.toRomanNumerals = function(e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          c(
            Number.isInteger(e) && e > 0,
            "The number should be a positive integer."
          );
          for (var r = void 0, n = []; e >= 1e3; ) (e -= 1e3), n.push("M");
          (r = (e / 100) | 0),
            (e %= 100),
            n.push(k[r]),
            (r = (e / 10) | 0),
            (e %= 10),
            n.push(k[10 + r]),
            n.push(k[20 + e]);
          const i = n.join("");
          return t ? i.toLowerCase() : i;
        }),
        (t.XRefParseException = g),
        (t.FormatError = y),
        (t.arrayByteLength = S),
        (t.arraysToBytes = function(e) {
          if (e.length === 1 && e[0] instanceof Uint8Array) return e[0];
          let t;
          let r;
          let n;
          let i = 0;
          const a = e.length;
          for (t = 0; t < a; t++) i += n = S((r = e[t]));
          let o = 0;
          const s = new Uint8Array(i);
          for (t = 0; t < a; t++) {
            (r = e[t]) instanceof Uint8Array ||
              (r = typeof r === "string" ? A(r) : new Uint8Array(r)),
              (n = r.byteLength),
              s.set(r, o),
              (o += n);
          }
          return s;
        }),
        (t.assert = c),
        (t.bytesToString = function(e) {
          c(
            e !== null &&
              (void 0 === e ? "undefined" : n(e)) === "object" &&
              void 0 !== e.length,
            "Invalid argument for bytesToString"
          );
          const t = e.length;
          if (t < 8192) return String.fromCharCode.apply(null, e);
          for (var r = [], i = 0; i < t; i += 8192) {
            const a = Math.min(i + 8192, t);
            const o = e.subarray(i, a);
            r.push(String.fromCharCode.apply(null, o));
          }
          return r.join("");
        }),
        (t.createPromiseCapability = function() {
          const e = {};
          return (
            (e.promise = new Promise((t, r) => {
              (e.resolve = t), (e.reject = r);
            })),
            e
          );
        }),
        (t.createObjectURL = C),
        (t.deprecated = function(e) {
          console.log(`Deprecated API usage: ${e}`);
        }),
        (t.getInheritableProperty = function(e) {
          for (
            var t = e.dict,
              r = e.key,
              n = e.getArray,
              i = void 0 !== n && n,
              a = e.stopWhenFound,
              o = void 0 === a || a,
              s = 0,
              l = void 0;
            t;

          ) {
            const c = i ? t.getArray(r) : t.get(r);
            if (void 0 !== c) {
              if (o) return c;
              l || (l = []), l.push(c);
            }
            if (++s > 100) {
              u(
                `getInheritableProperty: maximum loop count exceeded for "${r}"`
              );
              break;
            }
            t = t.get("Parent");
          }
          return l;
        }),
        (t.getLookupTableFactory = function(e) {
          let t;
          return function() {
            return e && ((t = Object.create(null)), e(t), (e = null)), t;
          };
        }),
        (t.getVerbosityLevel = function() {
          return s;
        }),
        (t.info = function(e) {
          s >= o.INFOS && console.log(`Info: ${e}`);
        }),
        (t.isArrayBuffer = function(e) {
          return (
            (void 0 === e ? "undefined" : n(e)) === "object" &&
            e !== null &&
            void 0 !== e.byteLength
          );
        }),
        (t.isBool = function(e) {
          return typeof e === "boolean";
        }),
        (t.isEmptyObj = function(e) {
          for (const t in e) return !1;
          return !0;
        }),
        (t.isNum = function(e) {
          return typeof e === "number";
        }),
        (t.isString = function(e) {
          return typeof e === "string";
        }),
        (t.isSpace = function(e) {
          return e === 32 || e === 9 || e === 13 || e === 10;
        }),
        (t.isSameOrigin = function(e, t) {
          try {
            var r = new a.URL(e);
            if (!r.origin || r.origin === "null") return !1;
          } catch (e) {
            return !1;
          }
          const n = new a.URL(t, r);
          return r.origin === n.origin;
        }),
        (t.createValidAbsoluteUrl = function(e, t) {
          if (!e) return null;
          try {
            const r = t ? new a.URL(e, t) : new a.URL(e);
            if (
              (function(e) {
                if (!e) return !1;
                switch (e.protocol) {
                  case "http:":
                  case "https:":
                  case "ftp:":
                  case "mailto:":
                  case "tel:":
                    return !0;
                  default:
                    return !1;
                }
              })(r)
            )
              return r;
          } catch (e) {}
          return null;
        }),
        (t.isLittleEndian = function() {
          const e = new Uint8Array(4);
          return (e[0] = 1), new Uint32Array(e.buffer, 0, 1)[0] === 1;
        }),
        (t.isEvalSupported = function() {
          try {
            return new Function(""), !0;
          } catch (e) {
            return !1;
          }
        }),
        (t.log2 = function(e) {
          return e <= 0 ? 0 : Math.ceil(Math.log2(e));
        }),
        (t.readInt8 = function(e, t) {
          return (e[t] << 24) >> 24;
        }),
        (t.readUint16 = function(e, t) {
          return (e[t] << 8) | e[t + 1];
        }),
        (t.readUint32 = function(e, t) {
          return (
            ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
          );
        }),
        (t.removeNullCharacters = function(e) {
          return typeof e !== "string"
            ? (u("The argument for removeNullCharacters must be a string."), e)
            : e.replace(_, "");
        }),
        (t.ReadableStream = i.ReadableStream),
        (t.URL = a.URL),
        (t.setVerbosityLevel = function(e) {
          Number.isInteger(e) && (s = e);
        }),
        (t.shadow = function(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !1
            }),
            r
          );
        }),
        (t.string32 = function(e) {
          return String.fromCharCode(
            (e >> 24) & 255,
            (e >> 16) & 255,
            (e >> 8) & 255,
            255 & e
          );
        }),
        (t.stringToBytes = A),
        (t.stringToPDFString = function(e) {
          let t;
          const r = e.length;
          const n = [];
          if (e[0] === "þ" && e[1] === "ÿ") {
            for (t = 2; t < r; t += 2) {
              n.push(
                String.fromCharCode(
                  (e.charCodeAt(t) << 8) | e.charCodeAt(t + 1)
                )
              );
            }
          } else {
            for (t = 0; t < r; ++t) {
              const i = P[e.charCodeAt(t)];
              n.push(i ? String.fromCharCode(i) : e.charAt(t));
            }
          }
          return n.join("");
        }),
        (t.stringToUTF8String = function(e) {
          return decodeURIComponent(escape(e));
        }),
        (t.utf8StringToString = function(e) {
          return unescape(encodeURIComponent(e));
        }),
        (t.warn = u),
        (t.unreachable = l);
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const i = r(3);
      if (!i._pdfjsCompatibilityChecked) {
        i._pdfjsCompatibilityChecked = !0;
        const a = r(4);
        const o =
          (typeof window === "undefined" ? "undefined" : n(window)) ===
            "object" &&
          (typeof document === "undefined" ? "undefined" : n(document)) ===
            "object";
        !i.btoa &&
          a() &&
          (i.btoa = function(e) {
            return Buffer.from(e, "binary").toString("base64");
          }),
          !i.atob &&
            a() &&
            (i.atob = function(e) {
              return Buffer.from(e, "base64").toString("binary");
            }),
          o &&
            ("currentScript" in document ||
              Object.defineProperty(document, "currentScript", {
                get() {
                  const e = document.getElementsByTagName("script");
                  return e[e.length - 1];
                },
                enumerable: !0,
                configurable: !0
              })),
          o &&
            void 0 === Element.prototype.remove &&
            (Element.prototype.remove = function() {
              this.parentNode && this.parentNode.removeChild(this);
            }),
          (function() {
            if (
              o &&
              !a() &&
              !1 !== document.createElement("div").classList.toggle("test", 0)
            ) {
              const e = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function(t) {
                if (arguments.length > 1) {
                  const r = !!arguments[1];
                  return this[r ? "add" : "remove"](t), r;
                }
                return e(t);
              };
            }
          })(),
          String.prototype.includes || r(5),
          Array.prototype.includes || r(33),
          Object.assign || r(42),
          Math.log2 || (Math.log2 = r(52)),
          Number.isNaN || (Number.isNaN = r(54)),
          Number.isInteger || (Number.isInteger = r(56)),
          i.Promise || (i.Promise = r(59)),
          i.WeakMap || (i.WeakMap = r(94)),
          String.codePointAt || (String.codePointAt = r(111)),
          String.fromCodePoint || (String.fromCodePoint = r(113)),
          i.Symbol || r(115),
          Object.values || (Object.values = r(122));
      }
    },
    function(e, t, r) {
      e.exports =
        typeof window !== "undefined" && window.Math === Math
          ? window
          : typeof global !== "undefined" && global.Math === Math
          ? global
          : typeof self !== "undefined" && self.Math === Math
          ? self
          : {};
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      e.exports = function() {
        return (
          (typeof process === "undefined" ? "undefined" : n(process)) ===
            "object" && `${process}` == "[object process]"
        );
      };
    },
    function(e, t, r) {
      r(6), (e.exports = r(9).String.includes);
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(25);
      n(n.P + n.F * r(32)("includes"), "String", {
        includes(e) {
          return !!~i(this, e, "includes").indexOf(
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        }
      });
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(9);
      const a = r(10);
      const o = r(20);
      const s = r(23);
      const u = function e(t, r, u) {
        let l;
        let c;
        let h;
        let d;
        const f = t & e.F;
        const p = t & e.G;
        const v = t & e.P;
        const m = t & e.B;
        const g = p
          ? n
          : t & e.S
          ? n[r] || (n[r] = {})
          : (n[r] || {}).prototype;
        const y = p ? i : i[r] || (i[r] = {});
        const b = y.prototype || (y.prototype = {});
        for (l in (p && (u = r), u)) {
          (h = ((c = !f && g && void 0 !== g[l]) ? g : u)[l]),
            (d =
              m && c
                ? s(h, n)
                : v && typeof h === "function"
                ? s(Function.call, h)
                : h),
            g && o(g, l, h, t & e.U),
            y[l] != h && a(y, l, d),
            v && b[l] != h && (b[l] = h);
        }
      };
      (n.core = i),
        (u.F = 1),
        (u.G = 2),
        (u.S = 4),
        (u.P = 8),
        (u.B = 16),
        (u.W = 32),
        (u.U = 64),
        (u.R = 128),
        (e.exports = u);
    },
    function(e, t, r) {
      const n = (e.exports =
        typeof window !== "undefined" && window.Math == Math
          ? window
          : typeof self !== "undefined" && self.Math == Math
          ? self
          : Function("return this")());
      typeof __g === "number" && (__g = n);
    },
    function(e, t, r) {
      const n = (e.exports = { version: "2.5.7" });
      typeof __e === "number" && (__e = n);
    },
    function(e, t, r) {
      const n = r(11);
      const i = r(19);
      e.exports = r(15)
        ? function(e, t, r) {
            return n.f(e, t, i(1, r));
          }
        : function(e, t, r) {
            return (e[t] = r), e;
          };
    },
    function(e, t, r) {
      const n = r(12);
      const i = r(14);
      const a = r(18);
      const o = Object.defineProperty;
      t.f = r(15)
        ? Object.defineProperty
        : function(e, t, r) {
            if ((n(e), (t = a(t, !0)), n(r), i)) {
              try {
                return o(e, t, r);
              } catch (e) {}
            }
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported!");
            return "value" in r && (e[t] = r.value), e;
          };
    },
    function(e, t, r) {
      const n = r(13);
      e.exports = function(e) {
        if (!n(e)) throw TypeError(`${e} is not an object!`);
        return e;
      };
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      e.exports = function(e) {
        return (void 0 === e ? "undefined" : n(e)) === "object"
          ? e !== null
          : typeof e === "function";
      };
    },
    function(e, t, r) {
      e.exports =
        !r(15) &&
        !r(16)(
          () =>
            Object.defineProperty(r(17)("div"), "a", {
              get() {
                return 7;
              }
            }).a != 7
        );
    },
    function(e, t, r) {
      e.exports = !r(16)(
        () =>
          Object.defineProperty({}, "a", {
            get() {
              return 7;
            }
          }).a != 7
      );
    },
    function(e, t, r) {
      e.exports = function(e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function(e, t, r) {
      const n = r(13);
      const i = r(8).document;
      const a = n(i) && n(i.createElement);
      e.exports = function(e) {
        return a ? i.createElement(e) : {};
      };
    },
    function(e, t, r) {
      const n = r(13);
      e.exports = function(e, t) {
        if (!n(e)) return e;
        let r;
        let i;
        if (t && typeof (r = e.toString) === "function" && !n((i = r.call(e))))
          return i;
        if (typeof (r = e.valueOf) === "function" && !n((i = r.call(e))))
          return i;
        if (!t && typeof (r = e.toString) === "function" && !n((i = r.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        };
      };
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(10);
      const a = r(21);
      const o = r(22)("src");
      const s = Function.toString;
      const u = `${s}`.split("toString");
      (r(9).inspectSource = function(e) {
        return s.call(e);
      }),
        (e.exports = function(e, t, r, s) {
          const l = typeof r === "function";
          l && (a(r, "name") || i(r, "name", t)),
            e[t] !== r &&
              (l && (a(r, o) || i(r, o, e[t] ? `${e[t]}` : u.join(String(t)))),
              e === n
                ? (e[t] = r)
                : s
                ? e[t]
                  ? (e[t] = r)
                  : i(e, t, r)
                : (delete e[t], i(e, t, r)));
        })(Function.prototype, "toString", function() {
          return (typeof this === "function" && this[o]) || s.call(this);
        });
    },
    function(e, t, r) {
      const n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t);
      };
    },
    function(e, t, r) {
      let n = 0;
      const i = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++n + i).toString(36)
        );
      };
    },
    function(e, t, r) {
      const n = r(24);
      e.exports = function(e, t, r) {
        if ((n(e), void 0 === t)) return e;
        switch (r) {
          case 1:
            return function(r) {
              return e.call(t, r);
            };
          case 2:
            return function(r, n) {
              return e.call(t, r, n);
            };
          case 3:
            return function(r, n, i) {
              return e.call(t, r, n, i);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, r) {
      e.exports = function(e) {
        if (typeof e !== "function") throw TypeError(`${e} is not a function!`);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(26);
      const i = r(31);
      e.exports = function(e, t, r) {
        if (n(t)) throw TypeError(`String#${r} doesn't accept regex!`);
        return String(i(e));
      };
    },
    function(e, t, r) {
      const n = r(13);
      const i = r(27);
      const a = r(28)("match");
      e.exports = function(e) {
        let t;
        return n(e) && (void 0 !== (t = e[a]) ? !!t : i(e) == "RegExp");
      };
    },
    function(e, t, r) {
      const n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1);
      };
    },
    function(e, t, r) {
      const n = r(29)("wks");
      const i = r(22);
      const a = r(8).Symbol;
      const o = typeof a === "function";
      (e.exports = function(e) {
        return n[e] || (n[e] = (o && a[e]) || (o ? a : i)(`Symbol.${e}`));
      }).store = n;
    },
    function(e, t, r) {
      const n = r(9);
      const i = r(8);
      const a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
      (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: n.version,
        mode: r(30) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
      });
    },
    function(e, t, r) {
      e.exports = !1;
    },
    function(e, t, r) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError(`Can't call method on  ${e}`);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(28)("match");
      e.exports = function(e) {
        const t = /./;
        try {
          "/./"[e](t);
        } catch (r) {
          try {
            return (t[n] = !1), !"/./"[e](t);
          } catch (e) {}
        }
        return !0;
      };
    },
    function(e, t, r) {
      r(34), (e.exports = r(9).Array.includes);
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(35)(!0);
      n(n.P, "Array", {
        includes(e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
        r(41)("includes");
    },
    function(e, t, r) {
      const n = r(36);
      const i = r(38);
      const a = r(40);
      e.exports = function(e) {
        return function(t, r, o) {
          let s;
          const u = n(t);
          const l = i(u.length);
          let c = a(o, l);
          if (e && r != r) {
            for (; l > c; ) if ((s = u[c++]) != s) return !0;
          } else
            for (; l > c; c++)
              if ((e || c in u) && u[c] === r) return e || c || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, r) {
      const n = r(37);
      const i = r(31);
      e.exports = function(e) {
        return n(i(e));
      };
    },
    function(e, t, r) {
      const n = r(27);
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return n(e) == "String" ? e.split("") : Object(e);
          };
    },
    function(e, t, r) {
      const n = r(39);
      const i = Math.min;
      e.exports = function(e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0;
      };
    },
    function(e, t, r) {
      const n = Math.ceil;
      const i = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
      };
    },
    function(e, t, r) {
      const n = r(39);
      const i = Math.max;
      const a = Math.min;
      e.exports = function(e, t) {
        return (e = n(e)) < 0 ? i(e + t, 0) : a(e, t);
      };
    },
    function(e, t, r) {
      const n = r(28)("unscopables");
      const i = Array.prototype;
      void 0 == i[n] && r(10)(i, n, {}),
        (e.exports = function(e) {
          i[n][e] = !0;
        });
    },
    function(e, t, r) {
      r(43), (e.exports = r(9).Object.assign);
    },
    function(e, t, r) {
      const n = r(7);
      n(n.S + n.F, "Object", { assign: r(44) });
    },
    function(e, t, r) {
      const n = r(45);
      const i = r(49);
      const a = r(50);
      const o = r(51);
      const s = r(37);
      const u = Object.assign;
      e.exports =
        !u ||
        r(16)(() => {
          const e = {};
          const t = {};
          const r = Symbol();
          const n = "abcdefghijklmnopqrst";
          return (
            (e[r] = 7),
            n.split("").forEach(e => {
              t[e] = e;
            }),
            u({}, e)[r] != 7 || Object.keys(u({}, t)).join("") != n
          );
        })
          ? function(e, t) {
              for (
                var r = o(e), u = arguments.length, l = 1, c = i.f, h = a.f;
                u > l;

              ) {
                for (
                  var d,
                    f = s(arguments[l++]),
                    p = c ? n(f).concat(c(f)) : n(f),
                    v = p.length,
                    m = 0;
                  v > m;

                )
                  h.call(f, (d = p[m++])) && (r[d] = f[d]);
              }
              return r;
            }
          : u;
    },
    function(e, t, r) {
      const n = r(46);
      const i = r(48);
      e.exports =
        Object.keys ||
        function(e) {
          return n(e, i);
        };
    },
    function(e, t, r) {
      const n = r(21);
      const i = r(36);
      const a = r(35)(!1);
      const o = r(47)("IE_PROTO");
      e.exports = function(e, t) {
        let r;
        const s = i(e);
        let u = 0;
        const l = [];
        for (r in s) r != o && n(s, r) && l.push(r);
        for (; t.length > u; ) n(s, (r = t[u++])) && (~a(l, r) || l.push(r));
        return l;
      };
    },
    function(e, t, r) {
      const n = r(29)("keys");
      const i = r(22);
      e.exports = function(e) {
        return n[e] || (n[e] = i(e));
      };
    },
    function(e, t, r) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function(e, t, r) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, r) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t, r) {
      const n = r(31);
      e.exports = function(e) {
        return Object(n(e));
      };
    },
    function(e, t, r) {
      r(53), (e.exports = r(9).Math.log2);
    },
    function(e, t, r) {
      const n = r(7);
      n(n.S, "Math", {
        log2(e) {
          return Math.log(e) / Math.LN2;
        }
      });
    },
    function(e, t, r) {
      r(55), (e.exports = r(9).Number.isNaN);
    },
    function(e, t, r) {
      const n = r(7);
      n(n.S, "Number", {
        isNaN(e) {
          return e != e;
        }
      });
    },
    function(e, t, r) {
      r(57), (e.exports = r(9).Number.isInteger);
    },
    function(e, t, r) {
      const n = r(7);
      n(n.S, "Number", { isInteger: r(58) });
    },
    function(e, t, r) {
      const n = r(13);
      const i = Math.floor;
      e.exports = function(e) {
        return !n(e) && isFinite(e) && i(e) === e;
      };
    },
    function(e, t, r) {
      r(60), r(62), r(72), r(75), r(92), r(93), (e.exports = r(9).Promise);
    },
    function(e, t, r) {
      const n = r(61);
      const i = {};
      (i[r(28)("toStringTag")] = "z"),
        `${i}` != "[object z]" &&
          r(20)(
            Object.prototype,
            "toString",
            function() {
              return `[object ${n(this)}]`;
            },
            !0
          );
    },
    function(e, t, r) {
      const n = r(27);
      const i = r(28)("toStringTag");
      const a =
        n(
          (function() {
            return arguments;
          })()
        ) == "Arguments";
      e.exports = function(e) {
        let t;
        let r;
        let o;
        return void 0 === e
          ? "Undefined"
          : e === null
          ? "Null"
          : typeof (r = (function(e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), i)) === "string"
          ? r
          : a
          ? n(t)
          : (o = n(t)) == "Object" && typeof t.callee === "function"
          ? "Arguments"
          : o;
      };
    },
    function(e, t, r) {
      const n = r(63)(!0);
      r(64)(
        String,
        "String",
        function(e) {
          (this._t = String(e)), (this._i = 0);
        },
        function() {
          let e;
          const t = this._t;
          const r = this._i;
          return r >= t.length
            ? { value: void 0, done: !0 }
            : ((e = n(t, r)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    function(e, t, r) {
      const n = r(39);
      const i = r(31);
      e.exports = function(e) {
        return function(t, r) {
          let a;
          let o;
          const s = String(i(t));
          const u = n(r);
          const l = s.length;
          return u < 0 || u >= l
            ? e
              ? ""
              : void 0
            : (a = s.charCodeAt(u)) < 55296 ||
              a > 56319 ||
              u + 1 === l ||
              (o = s.charCodeAt(u + 1)) < 56320 ||
              o > 57343
            ? e
              ? s.charAt(u)
              : a
            : e
            ? s.slice(u, u + 2)
            : o - 56320 + ((a - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, r) {
      const n = r(30);
      const i = r(7);
      const a = r(20);
      const o = r(10);
      const s = r(65);
      const u = r(66);
      const l = r(70);
      const c = r(71);
      const h = r(28)("iterator");
      const d = !([].keys && "next" in [].keys());
      const f = function() {
        return this;
      };
      e.exports = function(e, t, r, p, v, m, g) {
        u(r, t, p);
        let y;
        let b;
        let _;
        const A = function(e) {
          if (!d && e in P) return P[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new r(this, e);
              };
          }
          return function() {
            return new r(this, e);
          };
        };
        const S = `${t} Iterator`;
        const w = v == "values";
        let k = !1;
        var P = e.prototype;
        const x = P[h] || P["@@iterator"] || (v && P[v]);
        let C = x || A(v);
        const R = v ? (w ? A("entries") : C) : void 0;
        const E = (t == "Array" && P.entries) || x;
        if (
          (E &&
            (_ = c(E.call(new e()))) !== Object.prototype &&
            _.next &&
            (l(_, S, !0), n || typeof _[h] === "function" || o(_, h, f)),
          w &&
            x &&
            x.name !== "values" &&
            ((k = !0),
            (C = function() {
              return x.call(this);
            })),
          (n && !g) || (!d && !k && P[h]) || o(P, h, C),
          (s[t] = C),
          (s[S] = f),
          v)
        ) {
          if (
            ((y = {
              values: w ? C : A("values"),
              keys: m ? C : A("keys"),
              entries: R
            }),
            g)
          )
            for (b in y) b in P || a(P, b, y[b]);
          else i(i.P + i.F * (d || k), t, y);
        }
        return y;
      };
    },
    function(e, t, r) {
      e.exports = {};
    },
    function(e, t, r) {
      const n = r(67);
      const i = r(19);
      const a = r(70);
      const o = {};
      r(10)(o, r(28)("iterator"), function() {
        return this;
      }),
        (e.exports = function(e, t, r) {
          (e.prototype = n(o, { next: i(1, r) })), a(e, `${t} Iterator`);
        });
    },
    function(e, t, r) {
      const n = r(12);
      const i = r(68);
      const a = r(48);
      const o = r(47)("IE_PROTO");
      const s = function() {};
      var u = function() {
        let e;
        const t = r(17)("iframe");
        let n = a.length;
        for (
          t.style.display = "none",
            r(69).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            u = e.F;
          n--;

        )
          delete u.prototype[a[n]];
        return u();
      };
      e.exports =
        Object.create ||
        function(e, t) {
          let r;
          return (
            e !== null
              ? ((s.prototype = n(e)),
                (r = new s()),
                (s.prototype = null),
                (r[o] = e))
              : (r = u()),
            void 0 === t ? r : i(r, t)
          );
        };
    },
    function(e, t, r) {
      const n = r(11);
      const i = r(12);
      const a = r(45);
      e.exports = r(15)
        ? Object.defineProperties
        : function(e, t) {
            i(e);
            for (var r, o = a(t), s = o.length, u = 0; s > u; )
              n.f(e, (r = o[u++]), t[r]);
            return e;
          };
    },
    function(e, t, r) {
      const n = r(8).document;
      e.exports = n && n.documentElement;
    },
    function(e, t, r) {
      const n = r(11).f;
      const i = r(21);
      const a = r(28)("toStringTag");
      e.exports = function(e, t, r) {
        e &&
          !i((e = r ? e : e.prototype), a) &&
          n(e, a, { configurable: !0, value: t });
      };
    },
    function(e, t, r) {
      const n = r(21);
      const i = r(51);
      const a = r(47)("IE_PROTO");
      const o = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = i(e)),
            n(e, a)
              ? e[a]
              : typeof e.constructor === "function" &&
                e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? o
              : null
          );
        };
    },
    function(e, t, r) {
      for (
        let n = r(73),
          i = r(45),
          a = r(20),
          o = r(8),
          s = r(10),
          u = r(65),
          l = r(28),
          c = l("iterator"),
          h = l("toStringTag"),
          d = u.Array,
          f = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          p = i(f),
          v = 0;
        v < p.length;
        v++
      ) {
        var m;
        const g = p[v];
        const y = f[g];
        const b = o[g];
        const _ = b && b.prototype;
        if (_ && (_[c] || s(_, c, d), _[h] || s(_, h, g), (u[g] = d), y))
          for (m in n) _[m] || a(_, m, n[m], !0);
      }
    },
    function(e, t, r) {
      const n = r(41);
      const i = r(74);
      const a = r(65);
      const o = r(36);
      (e.exports = r(64)(
        Array,
        "Array",
        function(e, t) {
          (this._t = o(e)), (this._i = 0), (this._k = t);
        },
        function() {
          const e = this._t;
          const t = this._k;
          const r = this._i++;
          return !e || r >= e.length
            ? ((this._t = void 0), i(1))
            : i(0, t == "keys" ? r : t == "values" ? e[r] : [r, e[r]]);
        },
        "values"
      )),
        (a.Arguments = a.Array),
        n("keys"),
        n("values"),
        n("entries");
    },
    function(e, t, r) {
      e.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    },
    function(e, t, r) {
      let n;
      let i;
      let a;
      let o;
      const s = r(30);
      const u = r(8);
      const l = r(23);
      const c = r(61);
      const h = r(7);
      const d = r(13);
      const f = r(24);
      const p = r(76);
      const v = r(77);
      const m = r(81);
      const g = r(82).set;
      const y = r(84)();
      const b = r(85);
      const _ = r(86);
      const A = r(87);
      const S = r(88);
      const w = u.TypeError;
      const k = u.process;
      const P = k && k.versions;
      const x = (P && P.v8) || "";
      let C = u.Promise;
      const R = c(k) == "process";
      const E = function() {};
      let T = (i = b.f);
      const O = !!(function() {
        try {
          const e = C.resolve(1);
          const t = ((e.constructor = {})[r(28)("species")] = function(e) {
            e(E, E);
          });
          return (
            (R || typeof PromiseRejectionEvent === "function") &&
            e.then(E) instanceof t &&
            x.indexOf("6.6") !== 0 &&
            A.indexOf("Chrome/66") === -1
          );
        } catch (e) {}
      })();
      const I = function(e) {
        let t;
        return !(!d(e) || typeof (t = e.then) !== "function") && t;
      };
      const F = function(e, t) {
        if (!e._n) {
          e._n = !0;
          const r = e._c;
          y(() => {
            for (
              var n = e._v,
                i = e._s == 1,
                a = 0,
                o = function(t) {
                  let r;
                  let a;
                  let o;
                  const s = i ? t.ok : t.fail;
                  const u = t.resolve;
                  const l = t.reject;
                  const c = t.domain;
                  try {
                    s
                      ? (i || (e._h == 2 && M(e), (e._h = 1)),
                        !0 === s
                          ? (r = n)
                          : (c && c.enter(),
                            (r = s(n)),
                            c && (c.exit(), (o = !0))),
                        r === t.promise
                          ? l(w("Promise-chain cycle"))
                          : (a = I(r))
                          ? a.call(r, u, l)
                          : u(r))
                      : l(n);
                  } catch (e) {
                    c && !o && c.exit(), l(e);
                  }
                };
              r.length > a;

            )
              o(r[a++]);
            (e._c = []), (e._n = !1), t && !e._h && L(e);
          });
        }
      };
      var L = function(e) {
        g.call(u, () => {
          let t;
          let r;
          let n;
          const i = e._v;
          const a = j(e);
          if (
            (a &&
              ((t = _(() => {
                R
                  ? k.emit("unhandledRejection", i, e)
                  : (r = u.onunhandledrejection)
                  ? r({ promise: e, reason: i })
                  : (n = u.console) &&
                    n.error &&
                    n.error("Unhandled promise rejection", i);
              })),
              (e._h = R || j(e) ? 2 : 1)),
            (e._a = void 0),
            a && t.e)
          )
            throw t.v;
        });
      };
      var j = function(e) {
        return e._h !== 1 && (e._a || e._c).length === 0;
      };
      var M = function(e) {
        g.call(u, () => {
          let t;
          R
            ? k.emit("rejectionHandled", e)
            : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      };
      const D = function(e) {
        let t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          F(t, !0));
      };
      const N = function e(t) {
        let r;
        let n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === t) throw w("Promise can't be resolved itself");
            (r = I(t))
              ? y(() => {
                  const i = { _w: n, _d: !1 };
                  try {
                    r.call(t, l(e, i, 1), l(D, i, 1));
                  } catch (e) {
                    D.call(i, e);
                  }
                })
              : ((n._v = t), (n._s = 1), F(n, !1));
          } catch (e) {
            D.call({ _w: n, _d: !1 }, e);
          }
        }
      };
      O ||
        ((C = function(e) {
          p(this, C, "Promise", "_h"), f(e), n.call(this);
          try {
            e(l(N, this, 1), l(D, this, 1));
          } catch (e) {
            D.call(this, e);
          }
        }),
        ((n = function(e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = r(89)(C.prototype, {
          then(e, t) {
            const r = T(m(this, C));
            return (
              (r.ok = typeof e !== "function" || e),
              (r.fail = typeof t === "function" && t),
              (r.domain = R ? k.domain : void 0),
              this._c.push(r),
              this._a && this._a.push(r),
              this._s && F(this, !1),
              r.promise
            );
          },
          catch(e) {
            return this.then(void 0, e);
          }
        })),
        (a = function() {
          const e = new n();
          (this.promise = e),
            (this.resolve = l(N, e, 1)),
            (this.reject = l(D, e, 1));
        }),
        (b.f = T = function(e) {
          return e === C || e === o ? new a(e) : i(e);
        })),
        h(h.G + h.W + h.F * !O, { Promise: C }),
        r(70)(C, "Promise"),
        r(90)("Promise"),
        (o = r(9).Promise),
        h(h.S + h.F * !O, "Promise", {
          reject(e) {
            const t = T(this);
            return (0, t.reject)(e), t.promise;
          }
        }),
        h(h.S + h.F * (s || !O), "Promise", {
          resolve(e) {
            return S(s && this === o ? C : this, e);
          }
        }),
        h(
          h.S +
            h.F *
              !(
                O &&
                r(91)(e => {
                  C.all(e).catch(E);
                })
              ),
          "Promise",
          {
            all(e) {
              const t = this;
              const r = T(t);
              const n = r.resolve;
              const i = r.reject;
              const a = _(() => {
                const r = [];
                let a = 0;
                let o = 1;
                v(e, !1, e => {
                  const s = a++;
                  let u = !1;
                  r.push(void 0),
                    o++,
                    t.resolve(e).then(e => {
                      u || ((u = !0), (r[s] = e), --o || n(r));
                    }, i);
                }),
                  --o || n(r);
              });
              return a.e && i(a.v), r.promise;
            },
            race(e) {
              const t = this;
              const r = T(t);
              const n = r.reject;
              const i = _(() => {
                v(e, !1, e => {
                  t.resolve(e).then(r.resolve, n);
                });
              });
              return i.e && n(i.v), r.promise;
            }
          }
        );
    },
    function(e, t, r) {
      e.exports = function(e, t, r, n) {
        if (!(e instanceof t) || (void 0 !== n && n in e))
          throw TypeError(`${r}: incorrect invocation!`);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(23);
      const i = r(78);
      const a = r(79);
      const o = r(12);
      const s = r(38);
      const u = r(80);
      const l = {};
      const c = {};
      const h = (e.exports = function(e, t, r, h, d) {
        let f;
        let p;
        let v;
        let m;
        const g = d
          ? function() {
              return e;
            }
          : u(e);
        const y = n(r, h, t ? 2 : 1);
        let b = 0;
        if (typeof g !== "function") throw TypeError(`${e} is not iterable!`);
        if (a(g)) {
          for (f = s(e.length); f > b; b++) {
            if ((m = t ? y(o((p = e[b]))[0], p[1]) : y(e[b])) === l || m === c)
              return m;
          }
        } else
          for (v = g.call(e); !(p = v.next()).done; )
            if ((m = i(v, y, p.value, t)) === l || m === c) return m;
      });
      (h.BREAK = l), (h.RETURN = c);
    },
    function(e, t, r) {
      const n = r(12);
      e.exports = function(e, t, r, i) {
        try {
          return i ? t(n(r)[0], r[1]) : t(r);
        } catch (t) {
          const a = e.return;
          throw (void 0 !== a && n(a.call(e)), t);
        }
      };
    },
    function(e, t, r) {
      const n = r(65);
      const i = r(28)("iterator");
      const a = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (n.Array === e || a[i] === e);
      };
    },
    function(e, t, r) {
      const n = r(61);
      const i = r(28)("iterator");
      const a = r(65);
      e.exports = r(9).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e["@@iterator"] || a[n(e)];
      };
    },
    function(e, t, r) {
      const n = r(12);
      const i = r(24);
      const a = r(28)("species");
      e.exports = function(e, t) {
        let r;
        const o = n(e).constructor;
        return void 0 === o || void 0 == (r = n(o)[a]) ? t : i(r);
      };
    },
    function(e, t, r) {
      let n;
      let i;
      let a;
      const o = r(23);
      const s = r(83);
      const u = r(69);
      const l = r(17);
      const c = r(8);
      const h = c.process;
      let d = c.setImmediate;
      let f = c.clearImmediate;
      const p = c.MessageChannel;
      const v = c.Dispatch;
      let m = 0;
      const g = {};
      const y = function() {
        const e = +this;
        if (g.hasOwnProperty(e)) {
          const t = g[e];
          delete g[e], t();
        }
      };
      const b = function(e) {
        y.call(e.data);
      };
      (d && f) ||
        ((d = function(e) {
          for (var t = [], r = 1; arguments.length > r; )
            t.push(arguments[r++]);
          return (
            (g[++m] = function() {
              s(typeof e === "function" ? e : Function(e), t);
            }),
            n(m),
            m
          );
        }),
        (f = function(e) {
          delete g[e];
        }),
        r(27)(h) == "process"
          ? (n = function(e) {
              h.nextTick(o(y, e, 1));
            })
          : v && v.now
          ? (n = function(e) {
              v.now(o(y, e, 1));
            })
          : p
          ? ((a = (i = new p()).port2),
            (i.port1.onmessage = b),
            (n = o(a.postMessage, a, 1)))
          : c.addEventListener &&
            typeof postMessage === "function" &&
            !c.importScripts
          ? ((n = function(e) {
              c.postMessage(`${e}`, "*");
            }),
            c.addEventListener("message", b, !1))
          : (n =
              "onreadystatechange" in l("script")
                ? function(e) {
                    u.appendChild(l("script")).onreadystatechange = function() {
                      u.removeChild(this), y.call(e);
                    };
                  }
                : function(e) {
                    setTimeout(o(y, e, 1), 0);
                  })),
        (e.exports = { set: d, clear: f });
    },
    function(e, t, r) {
      e.exports = function(e, t, r) {
        const n = void 0 === r;
        switch (t.length) {
          case 0:
            return n ? e() : e.call(r);
          case 1:
            return n ? e(t[0]) : e.call(r, t[0]);
          case 2:
            return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
          case 3:
            return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
          case 4:
            return n
              ? e(t[0], t[1], t[2], t[3])
              : e.call(r, t[0], t[1], t[2], t[3]);
        }
        return e.apply(r, t);
      };
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(82).set;
      const a = n.MutationObserver || n.WebKitMutationObserver;
      const o = n.process;
      const s = n.Promise;
      const u = r(27)(o) == "process";
      e.exports = function() {
        let e;
        let t;
        let r;
        const l = function() {
          let n;
          let i;
          for (u && (n = o.domain) && n.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (n) {
              throw (e ? r() : (t = void 0), n);
            }
          }
          (t = void 0), n && n.enter();
        };
        if (u) {
          r = function() {
            o.nextTick(l);
          };
        } else if (!a || (n.navigator && n.navigator.standalone)) {
          if (s && s.resolve) {
            const c = s.resolve(void 0);
            r = function() {
              c.then(l);
            };
          } else {
            r = function() {
              i.call(n, l);
            };
          }
        } else {
          let h = !0;
          const d = document.createTextNode("");
          new a(l).observe(d, { characterData: !0 }),
            (r = function() {
              d.data = h = !h;
            });
        }
        return function(n) {
          const i = { fn: n, next: void 0 };
          t && (t.next = i), e || ((e = i), r()), (t = i);
        };
      };
    },
    function(e, t, r) {
      const n = r(24);
      e.exports.f = function(e) {
        return new (function(e) {
          let t;
          let r;
          (this.promise = new e((e, n) => {
            if (void 0 !== t || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (t = e), (r = n);
          })),
            (this.resolve = n(t)),
            (this.reject = n(r));
        })(e);
      };
    },
    function(e, t, r) {
      e.exports = function(e) {
        try {
          return { e: !1, v: e() };
        } catch (e) {
          return { e: !0, v: e };
        }
      };
    },
    function(e, t, r) {
      const n = r(8).navigator;
      e.exports = (n && n.userAgent) || "";
    },
    function(e, t, r) {
      const n = r(12);
      const i = r(13);
      const a = r(85);
      e.exports = function(e, t) {
        if ((n(e), i(t) && t.constructor === e)) return t;
        const r = a.f(e);
        return (0, r.resolve)(t), r.promise;
      };
    },
    function(e, t, r) {
      const n = r(20);
      e.exports = function(e, t, r) {
        for (const i in t) n(e, i, t[i], r);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(11);
      const a = r(15);
      const o = r(28)("species");
      e.exports = function(e) {
        const t = n[e];
        a &&
          t &&
          !t[o] &&
          i.f(t, o, {
            configurable: !0,
            get() {
              return this;
            }
          });
      };
    },
    function(e, t, r) {
      const n = r(28)("iterator");
      let i = !1;
      try {
        const a = [7][n]();
        (a.return = function() {
          i = !0;
        }),
          Array.from(a, () => {
            throw 2;
          });
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !i) return !1;
        let r = !1;
        try {
          const a = [7];
          const o = a[n]();
          (o.next = function() {
            return { done: (r = !0) };
          }),
            (a[n] = function() {
              return o;
            }),
            e(a);
        } catch (e) {}
        return r;
      };
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(9);
      const a = r(8);
      const o = r(81);
      const s = r(88);
      n(n.P + n.R, "Promise", {
        finally(e) {
          const t = o(this, i.Promise || a.Promise);
          const r = typeof e === "function";
          return this.then(
            r ? r => s(t, e()).then(() => r) : e,
            r
              ? r =>
                  s(t, e()).then(() => {
                    throw r;
                  })
              : e
          );
        }
      });
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(85);
      const a = r(86);
      n(n.S, "Promise", {
        try(e) {
          const t = i.f(this);
          const r = a(e);
          return (r.e ? t.reject : t.resolve)(r.v), t.promise;
        }
      });
    },
    function(e, t, r) {
      r(60), r(72), r(95), r(107), r(109), (e.exports = r(9).WeakMap);
    },
    function(e, t, r) {
      let n;
      const i = r(96)(0);
      const a = r(20);
      const o = r(100);
      const s = r(44);
      const u = r(101);
      const l = r(13);
      const c = r(16);
      const h = r(102);
      const d = o.getWeak;
      const f = Object.isExtensible;
      const p = u.ufstore;
      const v = {};
      const m = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      };
      const g = {
        get(e) {
          if (l(e)) {
            const t = d(e);
            return !0 === t
              ? p(h(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set(e, t) {
          return u.def(h(this, "WeakMap"), e, t);
        }
      };
      const y = (e.exports = r(103)("WeakMap", m, g, u, !0, !0));
      c(() => new y().set((Object.freeze || Object)(v), 7).get(v) != 7) &&
        (s((n = u.getConstructor(m, "WeakMap")).prototype, g),
        (o.NEED = !0),
        i(["delete", "has", "get", "set"], e => {
          const t = y.prototype;
          const r = t[e];
          a(t, e, function(t, i) {
            if (l(t) && !f(t)) {
              this._f || (this._f = new n());
              const a = this._f[e](t, i);
              return e == "set" ? this : a;
            }
            return r.call(this, t, i);
          });
        }));
    },
    function(e, t, r) {
      const n = r(23);
      const i = r(37);
      const a = r(51);
      const o = r(38);
      const s = r(97);
      e.exports = function(e, t) {
        const r = e == 1;
        const u = e == 2;
        const l = e == 3;
        const c = e == 4;
        const h = e == 6;
        const d = e == 5 || h;
        const f = t || s;
        return function(t, s, p) {
          for (
            var v,
              m,
              g = a(t),
              y = i(g),
              b = n(s, p, 3),
              _ = o(y.length),
              A = 0,
              S = r ? f(t, _) : u ? f(t, 0) : void 0;
            _ > A;
            A++
          ) {
            if ((d || A in y) && ((m = b((v = y[A]), A, g)), e)) {
              if (r) S[A] = m;
              else if (m) {
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return A;
                  case 2:
                    S.push(v);
                }
              } else if (c) return !1;
            }
          }
          return h ? -1 : l || c ? c : S;
        };
      };
    },
    function(e, t, r) {
      const n = r(98);
      e.exports = function(e, t) {
        return new (n(e))(t);
      };
    },
    function(e, t, r) {
      const n = r(13);
      const i = r(99);
      const a = r(28)("species");
      e.exports = function(e) {
        let t;
        return (
          i(e) &&
            (typeof (t = e.constructor) !== "function" ||
              (t !== Array && !i(t.prototype)) ||
              (t = void 0),
            n(t) && (t = t[a]) === null && (t = void 0)),
          void 0 === t ? Array : t
        );
      };
    },
    function(e, t, r) {
      const n = r(27);
      e.exports =
        Array.isArray ||
        function(e) {
          return n(e) == "Array";
        };
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const i = r(22)("meta");
      const a = r(13);
      const o = r(21);
      const s = r(11).f;
      let u = 0;
      const l =
        Object.isExtensible ||
        function() {
          return !0;
        };
      const c = !r(16)(() => l(Object.preventExtensions({})));
      const h = function(e) {
        s(e, i, { value: { i: `O${++u}`, w: {} } });
      };
      var d = (e.exports = {
        KEY: i,
        NEED: !1,
        fastKey(e, t) {
          if (!a(e)) {
            return (void 0 === e ? "undefined" : n(e)) == "symbol"
              ? e
              : (typeof e === "string" ? "S" : "P") + e;
          }
          if (!o(e, i)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            h(e);
          }
          return e[i].i;
        },
        getWeak(e, t) {
          if (!o(e, i)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            h(e);
          }
          return e[i].w;
        },
        onFreeze(e) {
          return c && d.NEED && l(e) && !o(e, i) && h(e), e;
        }
      });
    },
    function(e, t, r) {
      const n = r(89);
      const i = r(100).getWeak;
      const a = r(12);
      const o = r(13);
      const s = r(76);
      const u = r(77);
      const l = r(96);
      const c = r(21);
      const h = r(102);
      const d = l(5);
      const f = l(6);
      let p = 0;
      const v = function(e) {
        return e._l || (e._l = new m());
      };
      var m = function() {
        this.a = [];
      };
      const g = function(e, t) {
        return d(e.a, e => e[0] === t);
      };
      (m.prototype = {
        get(e) {
          const t = g(this, e);
          if (t) return t[1];
        },
        has(e) {
          return !!g(this, e);
        },
        set(e, t) {
          const r = g(this, e);
          r ? (r[1] = t) : this.a.push([e, t]);
        },
        delete(e) {
          const t = f(this.a, t => t[0] === e);
          return ~t && this.a.splice(t, 1), !!~t;
        }
      }),
        (e.exports = {
          getConstructor(e, t, r, a) {
            var l = e((e, n) => {
              s(e, l, t, "_i"),
                (e._t = t),
                (e._i = p++),
                (e._l = void 0),
                void 0 != n && u(n, r, e[a], e);
            });
            return (
              n(l.prototype, {
                delete(e) {
                  if (!o(e)) return !1;
                  const r = i(e);
                  return !0 === r
                    ? v(h(this, t)).delete(e)
                    : r && c(r, this._i) && delete r[this._i];
                },
                has(e) {
                  if (!o(e)) return !1;
                  const r = i(e);
                  return !0 === r ? v(h(this, t)).has(e) : r && c(r, this._i);
                }
              }),
              l
            );
          },
          def(e, t, r) {
            const n = i(a(t), !0);
            return !0 === n ? v(e).set(t, r) : (n[e._i] = r), e;
          },
          ufstore: v
        });
    },
    function(e, t, r) {
      const n = r(13);
      e.exports = function(e, t) {
        if (!n(e) || e._t !== t)
          throw TypeError(`Incompatible receiver, ${t} required!`);
        return e;
      };
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(7);
      const a = r(20);
      const o = r(89);
      const s = r(100);
      const u = r(77);
      const l = r(76);
      const c = r(13);
      const h = r(16);
      const d = r(91);
      const f = r(70);
      const p = r(104);
      e.exports = function(e, t, r, v, m, g) {
        const y = n[e];
        let b = y;
        const _ = m ? "set" : "add";
        const A = b && b.prototype;
        const S = {};
        const w = function(e) {
          const t = A[e];
          a(
            A,
            e,
            e == "delete"
              ? function(e) {
                  return !(g && !c(e)) && t.call(this, e === 0 ? 0 : e);
                }
              : e == "has"
              ? function(e) {
                  return !(g && !c(e)) && t.call(this, e === 0 ? 0 : e);
                }
              : e == "get"
              ? function(e) {
                  return g && !c(e) ? void 0 : t.call(this, e === 0 ? 0 : e);
                }
              : e == "add"
              ? function(e) {
                  return t.call(this, e === 0 ? 0 : e), this;
                }
              : function(e, r) {
                  return t.call(this, e === 0 ? 0 : e, r), this;
                }
          );
        };
        if (
          typeof b === "function" &&
          (g ||
            (A.forEach &&
              !h(() => {
                new b().entries().next();
              })))
        ) {
          const k = new b();
          const P = k[_](g ? {} : -0, 1) != k;
          const x = h(() => {
            k.has(1);
          });
          const C = d(e => {
            new b(e);
          });
          const R =
            !g &&
            h(() => {
              for (var e = new b(), t = 5; t--; ) e[_](t, t);
              return !e.has(-0);
            });
          C ||
            (((b = t((t, r) => {
              l(t, b, e);
              const n = p(new y(), t, b);
              return void 0 != r && u(r, m, n[_], n), n;
            })).prototype = A),
            (A.constructor = b)),
            (x || R) && (w("delete"), w("has"), m && w("get")),
            (R || P) && w(_),
            g && A.clear && delete A.clear;
        } else
          (b = v.getConstructor(t, e, m, _)), o(b.prototype, r), (s.NEED = !0);
        return (
          f(b, e),
          (S[e] = b),
          i(i.G + i.W + i.F * (b != y), S),
          g || v.setStrong(b, e, m),
          b
        );
      };
    },
    function(e, t, r) {
      const n = r(13);
      const i = r(105).set;
      e.exports = function(e, t, r) {
        let a;
        const o = t.constructor;
        return (
          o !== r &&
            typeof o === "function" &&
            (a = o.prototype) !== r.prototype &&
            n(a) &&
            i &&
            i(e, a),
          e
        );
      };
    },
    function(e, t, r) {
      const n = r(13);
      const i = r(12);
      const a = function(e, t) {
        if ((i(e), !n(t) && t !== null))
          throw TypeError(`${t}: can't set as prototype!`);
      };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(e, t, n) {
                try {
                  (n = r(23)(
                    Function.call,
                    r(106).f(Object.prototype, "__proto__").set,
                    2
                  ))(e, []),
                    (t = !(e instanceof Array));
                } catch (e) {
                  t = !0;
                }
                return function(e, r) {
                  return a(e, r), t ? (e.__proto__ = r) : n(e, r), e;
                };
              })({}, !1)
            : void 0),
        check: a
      };
    },
    function(e, t, r) {
      const n = r(50);
      const i = r(19);
      const a = r(36);
      const o = r(18);
      const s = r(21);
      const u = r(14);
      const l = Object.getOwnPropertyDescriptor;
      t.f = r(15)
        ? l
        : function(e, t) {
            if (((e = a(e)), (t = o(t, !0)), u)) {
              try {
                return l(e, t);
              } catch (e) {}
            }
            if (s(e, t)) return i(!n.f.call(e, t), e[t]);
          };
    },
    function(e, t, r) {
      r(108)("WeakMap");
    },
    function(e, t, r) {
      const n = r(7);
      e.exports = function(e) {
        n(n.S, e, {
          of() {
            for (var e = arguments.length, t = new Array(e); e--; )
              t[e] = arguments[e];
            return new this(t);
          }
        });
      };
    },
    function(e, t, r) {
      r(110)("WeakMap");
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(24);
      const a = r(23);
      const o = r(77);
      e.exports = function(e) {
        n(n.S, e, {
          from(e) {
            let t;
            let r;
            let n;
            let s;
            const u = arguments[1];
            return (
              i(this),
              (t = void 0 !== u) && i(u),
              void 0 == e
                ? new this()
                : ((r = []),
                  t
                    ? ((n = 0),
                      (s = a(u, arguments[2], 2)),
                      o(e, !1, e => {
                        r.push(s(e, n++));
                      }))
                    : o(e, !1, r.push, r),
                  new this(r))
            );
          }
        });
      };
    },
    function(e, t, r) {
      r(112), (e.exports = r(9).String.codePointAt);
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(63)(!1);
      n(n.P, "String", {
        codePointAt(e) {
          return i(this, e);
        }
      });
    },
    function(e, t, r) {
      r(114), (e.exports = r(9).String.fromCodePoint);
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(40);
      const a = String.fromCharCode;
      const o = String.fromCodePoint;
      n(n.S + n.F * (!!o && o.length != 1), "String", {
        fromCodePoint(e) {
          for (var t, r = [], n = arguments.length, o = 0; n > o; ) {
            if (((t = +arguments[o++]), i(t, 1114111) !== t))
              throw RangeError(`${t} is not a valid code point`);
            r.push(
              t < 65536
                ? a(t)
                : a(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
            );
          }
          return r.join("");
        }
      });
    },
    function(e, t, r) {
      r(116), r(60), (e.exports = r(9).Symbol);
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const i = r(8);
      const a = r(21);
      const o = r(15);
      const s = r(7);
      const u = r(20);
      const l = r(100).KEY;
      const c = r(16);
      const h = r(29);
      const d = r(70);
      const f = r(22);
      const p = r(28);
      const v = r(117);
      const m = r(118);
      const g = r(119);
      const y = r(99);
      const b = r(12);
      const _ = r(13);
      const A = r(36);
      const S = r(18);
      const w = r(19);
      const k = r(67);
      const P = r(120);
      const x = r(106);
      const C = r(11);
      const R = r(45);
      const E = x.f;
      const T = C.f;
      const O = P.f;
      let I = i.Symbol;
      const F = i.JSON;
      const L = F && F.stringify;
      const j = p("_hidden");
      const M = p("toPrimitive");
      const D = {}.propertyIsEnumerable;
      const N = h("symbol-registry");
      const q = h("symbols");
      const W = h("op-symbols");
      const U = Object.prototype;
      const B = typeof I === "function";
      const z = i.QObject;
      let G = !z || !z.prototype || !z.prototype.findChild;
      const H =
        o &&
        c(
          () =>
            k(
              T({}, "a", {
                get() {
                  return T(this, "a", { value: 7 }).a;
                }
              })
            ).a != 7
        )
          ? function(e, t, r) {
              const n = E(U, t);
              n && delete U[t], T(e, t, r), n && e !== U && T(U, t, n);
            }
          : T;
      const X = function(e) {
        const t = (q[e] = k(I.prototype));
        return (t._k = e), t;
      };
      const Y =
        B && n(I.iterator) == "symbol"
          ? function(e) {
              return (void 0 === e ? "undefined" : n(e)) == "symbol";
            }
          : function(e) {
              return e instanceof I;
            };
      var V = function(e, t, r) {
        return (
          e === U && V(W, t, r),
          b(e),
          (t = S(t, !0)),
          b(r),
          a(q, t)
            ? (r.enumerable
                ? (a(e, j) && e[j][t] && (e[j][t] = !1),
                  (r = k(r, { enumerable: w(0, !1) })))
                : (a(e, j) || T(e, j, w(1, {})), (e[j][t] = !0)),
              H(e, t, r))
            : T(e, t, r)
        );
      };
      const Q = function(e, t) {
        b(e);
        for (var r, n = g((t = A(t))), i = 0, a = n.length; a > i; )
          V(e, (r = n[i++]), t[r]);
        return e;
      };
      const K = function(e) {
        const t = D.call(this, (e = S(e, !0)));
        return (
          !(this === U && a(q, e) && !a(W, e)) &&
          (!(t || !a(this, e) || !a(q, e) || (a(this, j) && this[j][e])) || t)
        );
      };
      const J = function(e, t) {
        if (((e = A(e)), (t = S(t, !0)), e !== U || !a(q, t) || a(W, t))) {
          const r = E(e, t);
          return (
            !r || !a(q, t) || (a(e, j) && e[j][t]) || (r.enumerable = !0), r
          );
        }
      };
      const Z = function(e) {
        for (var t, r = O(A(e)), n = [], i = 0; r.length > i; )
          a(q, (t = r[i++])) || t == j || t == l || n.push(t);
        return n;
      };
      const $ = function(e) {
        for (
          var t, r = e === U, n = O(r ? W : A(e)), i = [], o = 0;
          n.length > o;

        )
          !a(q, (t = n[o++])) || (r && !a(U, t)) || i.push(q[t]);
        return i;
      };
      B ||
        (u(
          (I = function() {
            if (this instanceof I)
              throw TypeError("Symbol is not a constructor!");
            const e = f(arguments.length > 0 ? arguments[0] : void 0);
            return (
              o &&
                G &&
                H(U, e, {
                  configurable: !0,
                  set: function t(r) {
                    this === U && t.call(W, r),
                      a(this, j) && a(this[j], e) && (this[j][e] = !1),
                      H(this, e, w(1, r));
                  }
                }),
              X(e)
            );
          }).prototype,
          "toString",
          function() {
            return this._k;
          }
        ),
        (x.f = J),
        (C.f = V),
        (r(121).f = P.f = Z),
        (r(50).f = K),
        (r(49).f = $),
        o && !r(30) && u(U, "propertyIsEnumerable", K, !0),
        (v.f = function(e) {
          return X(p(e));
        })),
        s(s.G + s.W + s.F * !B, { Symbol: I });
      for (
        let ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
          te = 0;
        ee.length > te;

      )
        p(ee[te++]);
      for (let re = R(p.store), ne = 0; re.length > ne; ) m(re[ne++]);
      s(s.S + s.F * !B, "Symbol", {
        for(e) {
          return a(N, (e += "")) ? N[e] : (N[e] = I(e));
        },
        keyFor(e) {
          if (!Y(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in N) if (N[t] === e) return t;
        },
        useSetter() {
          G = !0;
        },
        useSimple() {
          G = !1;
        }
      }),
        s(s.S + s.F * !B, "Object", {
          create(e, t) {
            return void 0 === t ? k(e) : Q(k(e), t);
          },
          defineProperty: V,
          defineProperties: Q,
          getOwnPropertyDescriptor: J,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: $
        }),
        F &&
          s(
            s.S +
              s.F *
                (!B ||
                  c(() => {
                    const e = I();
                    return (
                      L([e]) != "[null]" ||
                      L({ a: e }) != "{}" ||
                      L(Object(e)) != "{}"
                    );
                  })),
            "JSON",
            {
              stringify(e) {
                for (var t, r, n = [e], i = 1; arguments.length > i; )
                  n.push(arguments[i++]);
                if (((r = t = n[1]), (_(t) || void 0 !== e) && !Y(e))) {
                  return (
                    y(t) ||
                      (t = function(e, t) {
                        if (
                          (typeof r === "function" && (t = r.call(this, e, t)),
                          !Y(t))
                        )
                          return t;
                      }),
                    (n[1] = t),
                    L.apply(F, n)
                  );
                }
              }
            }
          ),
        I.prototype[M] || r(10)(I.prototype, M, I.prototype.valueOf),
        d(I, "Symbol"),
        d(Math, "Math", !0),
        d(i.JSON, "JSON", !0);
    },
    function(e, t, r) {
      t.f = r(28);
    },
    function(e, t, r) {
      const n = r(8);
      const i = r(9);
      const a = r(30);
      const o = r(117);
      const s = r(11).f;
      e.exports = function(e) {
        const t = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
        e.charAt(0) == "_" || e in t || s(t, e, { value: o.f(e) });
      };
    },
    function(e, t, r) {
      const n = r(45);
      const i = r(49);
      const a = r(50);
      e.exports = function(e) {
        const t = n(e);
        const r = i.f;
        if (r)
          for (var o, s = r(e), u = a.f, l = 0; s.length > l; )
            u.call(e, (o = s[l++])) && t.push(o);
        return t;
      };
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const i = r(36);
      const a = r(121).f;
      const o = {}.toString;
      const s =
        (typeof window === "undefined" ? "undefined" : n(window)) == "object" &&
        window &&
        Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
      e.exports.f = function(e) {
        return s && o.call(e) == "[object Window]"
          ? (function(e) {
              try {
                return a(e);
              } catch (e) {
                return s.slice();
              }
            })(e)
          : a(i(e));
      };
    },
    function(e, t, r) {
      const n = r(46);
      const i = r(48).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return n(e, i);
        };
    },
    function(e, t, r) {
      r(123), (e.exports = r(9).Object.values);
    },
    function(e, t, r) {
      const n = r(7);
      const i = r(124)(!1);
      n(n.S, "Object", {
        values(e) {
          return i(e);
        }
      });
    },
    function(e, t, r) {
      const n = r(45);
      const i = r(36);
      const a = r(50).f;
      e.exports = function(e) {
        return function(t) {
          for (var r, o = i(t), s = n(o), u = s.length, l = 0, c = []; u > l; )
            a.call(o, (r = s[l++])) && c.push(e ? [r, o[r]] : o[r]);
          return c;
        };
      };
    },
    function(e, t, r) {
      let n = !1;
      if (typeof ReadableStream !== "undefined") {
        try {
          new ReadableStream({
            start(e) {
              e.close();
            }
          }),
            (n = !0);
        } catch (e) {}
      }
      t.ReadableStream = n ? ReadableStream : r(126).ReadableStream;
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      !(function(e, t) {
        for (const r in t) e[r] = t[r];
      })(
        t,
        (function(e) {
          const t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            const i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.i = function(e) {
              return e;
            }),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: n
                });
            }),
            (r.n = function(e) {
              const t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 7))
          );
        })([
          function(e, t, r) {
            const i =
              typeof Symbol === "function" && n(Symbol.iterator) === "symbol"
                ? function(e) {
                    return void 0 === e ? "undefined" : n(e);
                  }
                : function(e) {
                    return e &&
                      typeof Symbol === "function" &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : void 0 === e
                      ? "undefined"
                      : n(e);
                  };
            const a = r(1).assert;
            function o(e) {
              return (
                typeof e === "string" ||
                (void 0 === e ? "undefined" : i(e)) === "symbol"
              );
            }
            function s(e, t, r) {
              if (typeof e !== "function")
                throw new TypeError("Argument is not a function");
              return Function.prototype.apply.call(e, t, r);
            }
            (t.typeIsObject = function(e) {
              return (
                ((void 0 === e ? "undefined" : i(e)) === "object" &&
                  e !== null) ||
                typeof e === "function"
              );
            }),
              (t.createDataProperty = function(e, r, n) {
                a(t.typeIsObject(e)),
                  Object.defineProperty(e, r, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                  });
              }),
              (t.createArrayFromList = function(e) {
                return e.slice();
              }),
              (t.ArrayBufferCopy = function(e, t, r, n, i) {
                new Uint8Array(e).set(new Uint8Array(r, n, i), t);
              }),
              (t.CreateIterResultObject = function(e, t) {
                a(typeof t === "boolean");
                const r = {};
                return (
                  Object.defineProperty(r, "value", {
                    value: e,
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(r, "done", {
                    value: t,
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                  }),
                  r
                );
              }),
              (t.IsFiniteNonNegativeNumber = function(e) {
                return !Number.isNaN(e) && (e !== 1 / 0 && !(e < 0));
              }),
              (t.InvokeOrNoop = function(e, t, r) {
                a(void 0 !== e), a(o(t)), a(Array.isArray(r));
                const n = e[t];
                if (void 0 !== n) return s(n, e, r);
              }),
              (t.PromiseInvokeOrNoop = function(e, r, n) {
                a(void 0 !== e), a(o(r)), a(Array.isArray(n));
                try {
                  return Promise.resolve(t.InvokeOrNoop(e, r, n));
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.PromiseInvokeOrPerformFallback = function(e, t, r, n, i) {
                a(void 0 !== e),
                  a(o(t)),
                  a(Array.isArray(r)),
                  a(Array.isArray(i));
                let u = void 0;
                try {
                  u = e[t];
                } catch (e) {
                  return Promise.reject(e);
                }
                if (void 0 === u) return n.apply(null, i);
                try {
                  return Promise.resolve(s(u, e, r));
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.TransferArrayBuffer = function(e) {
                return e.slice();
              }),
              (t.ValidateAndNormalizeHighWaterMark = function(e) {
                if (((e = Number(e)), Number.isNaN(e) || e < 0)) {
                  throw new RangeError(
                    "highWaterMark property of a queuing strategy must be non-negative and non-NaN"
                  );
                }
                return e;
              }),
              (t.ValidateAndNormalizeQueuingStrategy = function(e, r) {
                if (void 0 !== e && typeof e !== "function") {
                  throw new TypeError(
                    "size property of a queuing strategy must be a function"
                  );
                }
                return {
                  size: e,
                  highWaterMark: (r = t.ValidateAndNormalizeHighWaterMark(r))
                };
              });
          },
          function(e, t, r) {
            function n(e) {
              (this.name = "AssertionError"),
                (this.message = e || ""),
                (this.stack = new Error().stack);
            }
            (n.prototype = Object.create(Error.prototype)),
              (n.prototype.constructor = n),
              (e.exports = {
                rethrowAssertionErrorRejection(e) {
                  e &&
                    e.constructor === n &&
                    setTimeout(() => {
                      throw e;
                    }, 0);
                },
                AssertionError: n,
                assert(e, t) {
                  if (!e) throw new n(t);
                }
              });
          },
          function(e, t, r) {
            const n = (function() {
              function e(e, t) {
                for (let r = 0; r < t.length; r++) {
                  const n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
              };
            })();
            function i(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            const a = r(0);
            const o = a.InvokeOrNoop;
            const s = a.PromiseInvokeOrNoop;
            const u = a.ValidateAndNormalizeQueuingStrategy;
            const l = a.typeIsObject;
            const c = r(1);
            const h = c.assert;
            const d = c.rethrowAssertionErrorRejection;
            const f = r(3);
            const p = f.DequeueValue;
            const v = f.EnqueueValueWithSize;
            const m = f.PeekQueueValue;
            const g = f.ResetQueue;
            const y = (function() {
              function e() {
                const t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                const n = r.size;
                const a = r.highWaterMark;
                const o = void 0 === a ? 1 : a;
                if (
                  (i(this, e),
                  (this._state = "writable"),
                  (this._storedError = void 0),
                  (this._writer = void 0),
                  (this._writableStreamController = void 0),
                  (this._writeRequests = []),
                  (this._inFlightWriteRequest = void 0),
                  (this._closeRequest = void 0),
                  (this._inFlightCloseRequest = void 0),
                  (this._pendingAbortRequest = void 0),
                  (this._backpressure = !1),
                  void 0 !== t.type)
                )
                  throw new RangeError("Invalid type is specified");
                (this._writableStreamController = new N(this, t, n, o)),
                  this._writableStreamController.__startSteps();
              }
              return (
                n(e, [
                  {
                    key: "abort",
                    value(e) {
                      return !1 === _(this)
                        ? Promise.reject(G("abort"))
                        : !0 === A(this)
                        ? Promise.reject(
                            new TypeError(
                              "Cannot abort a stream that already has a writer"
                            )
                          )
                        : S(this, e);
                    }
                  },
                  {
                    key: "getWriter",
                    value() {
                      if (!1 === _(this)) throw G("getWriter");
                      return b(this);
                    }
                  },
                  {
                    key: "locked",
                    get() {
                      if (!1 === _(this)) throw G("locked");
                      return A(this);
                    }
                  }
                ]),
                e
              );
            })();
            function b(e) {
              return new O(e);
            }
            function _(e) {
              return (
                !!l(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_writableStreamController"
                )
              );
            }
            function A(e) {
              return (
                h(
                  !0 === _(e),
                  "IsWritableStreamLocked should only be used on known writable streams"
                ),
                void 0 !== e._writer
              );
            }
            function S(e, t) {
              const r = e._state;
              if (r === "closed") return Promise.resolve(void 0);
              if (r === "errored") return Promise.reject(e._storedError);
              const n = new TypeError("Requested to abort");
              if (void 0 !== e._pendingAbortRequest) return Promise.reject(n);
              h(
                r === "writable" || r === "erroring",
                "state must be writable or erroring"
              );
              let i = !1;
              r === "erroring" && ((i = !0), (t = void 0));
              const a = new Promise((r, n) => {
                e._pendingAbortRequest = {
                  _resolve: r,
                  _reject: n,
                  _reason: t,
                  _wasAlreadyErroring: i
                };
              });
              return !1 === i && k(e, n), a;
            }
            function w(e, t) {
              const r = e._state;
              r !== "writable" ? (h(r === "erroring"), P(e)) : k(e, t);
            }
            function k(e, t) {
              h(void 0 === e._storedError, "stream._storedError === undefined"),
                h(e._state === "writable", "state must be writable");
              const r = e._writableStreamController;
              h(void 0 !== r, "controller must not be undefined"),
                (e._state = "erroring"),
                (e._storedError = t);
              const n = e._writer;
              void 0 !== n && j(n, t), !1 === R(e) && !0 === r._started && P(e);
            }
            function P(e) {
              h(e._state === "erroring", "stream._state === erroring"),
                h(
                  !1 === R(e),
                  "WritableStreamHasOperationMarkedInFlight(stream) === false"
                ),
                (e._state = "errored"),
                e._writableStreamController.__errorSteps();
              for (
                var t = e._storedError, r = 0;
                r < e._writeRequests.length;
                r++
              ) {
                e._writeRequests[r]._reject(t);
              }
              if (
                ((e._writeRequests = []), void 0 !== e._pendingAbortRequest)
              ) {
                const n = e._pendingAbortRequest;
                if (
                  ((e._pendingAbortRequest = void 0),
                  !0 === n._wasAlreadyErroring)
                )
                  return n._reject(t), void E(e);
                e._writableStreamController.__abortSteps(n._reason).then(
                  () => {
                    n._resolve(), E(e);
                  },
                  t => {
                    n._reject(t), E(e);
                  }
                );
              } else E(e);
            }
            function x(e) {
              h(void 0 !== e._inFlightCloseRequest),
                e._inFlightCloseRequest._resolve(void 0),
                (e._inFlightCloseRequest = void 0);
              const t = e._state;
              h(t === "writable" || t === "erroring"),
                t === "erroring" &&
                  ((e._storedError = void 0),
                  void 0 !== e._pendingAbortRequest &&
                    (e._pendingAbortRequest._resolve(),
                    (e._pendingAbortRequest = void 0))),
                (e._state = "closed");
              const r = e._writer;
              void 0 !== r &&
                (function(e) {
                  h(
                    void 0 !== e._closedPromise_resolve,
                    "writer._closedPromise_resolve !== undefined"
                  ),
                    h(
                      void 0 !== e._closedPromise_reject,
                      "writer._closedPromise_reject !== undefined"
                    ),
                    h(
                      e._closedPromiseState === "pending",
                      "writer._closedPromiseState is pending"
                    ),
                    e._closedPromise_resolve(void 0),
                    (e._closedPromise_resolve = void 0),
                    (e._closedPromise_reject = void 0),
                    (e._closedPromiseState = "resolved");
                })(r),
                h(
                  void 0 === e._pendingAbortRequest,
                  "stream._pendingAbortRequest === undefined"
                ),
                h(
                  void 0 === e._storedError,
                  "stream._storedError === undefined"
                );
            }
            function C(e) {
              return (
                void 0 !== e._closeRequest || void 0 !== e._inFlightCloseRequest
              );
            }
            function R(e) {
              return (
                void 0 !== e._inFlightWriteRequest ||
                void 0 !== e._inFlightCloseRequest
              );
            }
            function E(e) {
              h(e._state === "errored", '_stream_.[[state]] is `"errored"`'),
                void 0 !== e._closeRequest &&
                  (h(void 0 === e._inFlightCloseRequest),
                  e._closeRequest._reject(e._storedError),
                  (e._closeRequest = void 0));
              const t = e._writer;
              void 0 !== t &&
                (V(t, e._storedError), t._closedPromise.catch(() => {}));
            }
            function T(e, t) {
              h(e._state === "writable"), h(!1 === C(e));
              const r = e._writer;
              void 0 !== r &&
                t !== e._backpressure &&
                (!0 === t
                  ? (function(e) {
                      h(
                        void 0 === e._readyPromise_resolve,
                        "writer._readyPromise_resolve === undefined"
                      ),
                        h(
                          void 0 === e._readyPromise_reject,
                          "writer._readyPromise_reject === undefined"
                        ),
                        (e._readyPromise = new Promise((t, r) => {
                          (e._readyPromise_resolve = t),
                            (e._readyPromise_reject = r);
                        })),
                        (e._readyPromiseState = "pending");
                    })(r)
                  : (h(!1 === t), J(r))),
                (e._backpressure = t);
            }
            e.exports = {
              AcquireWritableStreamDefaultWriter: b,
              IsWritableStream: _,
              IsWritableStreamLocked: A,
              WritableStream: y,
              WritableStreamAbort: S,
              WritableStreamDefaultControllerError: z,
              WritableStreamDefaultWriterCloseWithErrorPropagation(e) {
                const t = e._ownerWritableStream;
                h(void 0 !== t);
                const r = t._state;
                if (!0 === C(t) || r === "closed") return Promise.resolve();
                if (r === "errored") return Promise.reject(t._storedError);
                return h(r === "writable" || r === "erroring"), F(e);
              },
              WritableStreamDefaultWriterRelease: M,
              WritableStreamDefaultWriterWrite: D,
              WritableStreamCloseQueuedOrInFlight: C
            };
            var O = (function() {
              function e(t) {
                if ((i(this, e), !1 === _(t))) {
                  throw new TypeError(
                    "WritableStreamDefaultWriter can only be constructed with a WritableStream instance"
                  );
                }
                if (!0 === A(t)) {
                  throw new TypeError(
                    "This stream has already been locked for exclusive writing by another writer"
                  );
                }
                (this._ownerWritableStream = t), (t._writer = this);
                let r;
                const n = t._state;
                if (n === "writable") {
                  !1 === C(t) && !0 === t._backpressure
                    ? (((r = this)._readyPromise = new Promise((e, t) => {
                        (r._readyPromise_resolve = e),
                          (r._readyPromise_reject = t);
                      })),
                      (r._readyPromiseState = "pending"))
                    : K(this),
                    Y(this);
                } else if (n === "erroring") {
                  Q(this, t._storedError),
                    this._readyPromise.catch(() => {}),
                    Y(this);
                } else if (n === "closed") {
                  K(this),
                    (function(e) {
                      (e._closedPromise = Promise.resolve(void 0)),
                        (e._closedPromise_resolve = void 0),
                        (e._closedPromise_reject = void 0),
                        (e._closedPromiseState = "resolved");
                    })(this);
                } else {
                  h(n === "errored", "state must be errored");
                  const a = t._storedError;
                  Q(this, a),
                    this._readyPromise.catch(() => {}),
                    (function(e, t) {
                      (e._closedPromise = Promise.reject(t)),
                        (e._closedPromise_resolve = void 0),
                        (e._closedPromise_reject = void 0),
                        (e._closedPromiseState = "rejected");
                    })(this, a),
                    this._closedPromise.catch(() => {});
                }
              }
              return (
                n(e, [
                  {
                    key: "abort",
                    value(e) {
                      return !1 === I(this)
                        ? Promise.reject(H("abort"))
                        : void 0 === this._ownerWritableStream
                        ? Promise.reject(X("abort"))
                        : (function(e, t) {
                            const r = e._ownerWritableStream;
                            return h(void 0 !== r), S(r, t);
                          })(this, e);
                    }
                  },
                  {
                    key: "close",
                    value() {
                      if (!1 === I(this)) return Promise.reject(H("close"));
                      const e = this._ownerWritableStream;
                      return void 0 === e
                        ? Promise.reject(X("close"))
                        : !0 === C(e)
                        ? Promise.reject(
                            new TypeError(
                              "cannot close an already-closing stream"
                            )
                          )
                        : F(this);
                    }
                  },
                  {
                    key: "releaseLock",
                    value() {
                      if (!1 === I(this)) throw H("releaseLock");
                      const e = this._ownerWritableStream;
                      void 0 !== e && (h(void 0 !== e._writer), M(this));
                    }
                  },
                  {
                    key: "write",
                    value(e) {
                      return !1 === I(this)
                        ? Promise.reject(H("write"))
                        : void 0 === this._ownerWritableStream
                        ? Promise.reject(X("write to"))
                        : D(this, e);
                    }
                  },
                  {
                    key: "closed",
                    get() {
                      return !1 === I(this)
                        ? Promise.reject(H("closed"))
                        : this._closedPromise;
                    }
                  },
                  {
                    key: "desiredSize",
                    get() {
                      if (!1 === I(this)) throw H("desiredSize");
                      if (void 0 === this._ownerWritableStream)
                        throw X("desiredSize");
                      return (function(e) {
                        const t = e._ownerWritableStream;
                        let r = t._state;
                        if (r === "errored" || r === "erroring") return null;
                        if (r === "closed") return 0;
                        return q(t._writableStreamController);
                      })(this);
                    }
                  },
                  {
                    key: "ready",
                    get() {
                      return !1 === I(this)
                        ? Promise.reject(H("ready"))
                        : this._readyPromise;
                    }
                  }
                ]),
                e
              );
            })();
            function I(e) {
              return (
                !!l(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_ownerWritableStream"
                )
              );
            }
            function F(e) {
              const t = e._ownerWritableStream;
              h(void 0 !== t);
              const r = t._state;
              if (r === "closed" || r === "errored") {
                return Promise.reject(
                  new TypeError(
                    "The stream (in " +
                      r +
                      " state) is not in the writable state and cannot be closed"
                  )
                );
              }
              h(r === "writable" || r === "erroring"), h(!1 === C(t));
              let n;
              const i = new Promise((e, r) => {
                const n = { _resolve: e, _reject: r };
                t._closeRequest = n;
              });
              return (
                !0 === t._backpressure && r === "writable" && J(e),
                (n = t._writableStreamController),
                v(n, "close", 0),
                W(n),
                i
              );
            }
            function L(e, t) {
              e._closedPromiseState === "pending"
                ? V(e, t)
                : (function(e, t) {
                    h(
                      void 0 === e._closedPromise_resolve,
                      "writer._closedPromise_resolve === undefined"
                    ),
                      h(
                        void 0 === e._closedPromise_reject,
                        "writer._closedPromise_reject === undefined"
                      ),
                      h(
                        e._closedPromiseState !== "pending",
                        "writer._closedPromiseState is not pending"
                      ),
                      (e._closedPromise = Promise.reject(t)),
                      (e._closedPromiseState = "rejected");
                  })(e, t),
                e._closedPromise.catch(() => {});
            }
            function j(e, t) {
              e._readyPromiseState === "pending"
                ? (function(e, t) {
                    h(
                      void 0 !== e._readyPromise_resolve,
                      "writer._readyPromise_resolve !== undefined"
                    ),
                      h(
                        void 0 !== e._readyPromise_reject,
                        "writer._readyPromise_reject !== undefined"
                      ),
                      e._readyPromise_reject(t),
                      (e._readyPromise_resolve = void 0),
                      (e._readyPromise_reject = void 0),
                      (e._readyPromiseState = "rejected");
                  })(e, t)
                : (function(e, t) {
                    h(
                      void 0 === e._readyPromise_resolve,
                      "writer._readyPromise_resolve === undefined"
                    ),
                      h(
                        void 0 === e._readyPromise_reject,
                        "writer._readyPromise_reject === undefined"
                      ),
                      (e._readyPromise = Promise.reject(t)),
                      (e._readyPromiseState = "rejected");
                  })(e, t),
                e._readyPromise.catch(() => {});
            }
            function M(e) {
              const t = e._ownerWritableStream;
              h(void 0 !== t), h(t._writer === e);
              const r = new TypeError(
                "Writer was released and can no longer be used to monitor the stream's closedness"
              );
              j(e, r),
                L(e, r),
                (t._writer = void 0),
                (e._ownerWritableStream = void 0);
            }
            function D(e, t) {
              const r = e._ownerWritableStream;
              h(void 0 !== r);
              const n = r._writableStreamController;
              const i = (function(e, t) {
                const r = e._strategySize;
                if (void 0 === r) return 1;
                try {
                  return r(t);
                } catch (t) {
                  return U(e, t), 1;
                }
              })(n, t);
              if (r !== e._ownerWritableStream)
                return Promise.reject(X("write to"));
              const a = r._state;
              if (a === "errored") return Promise.reject(r._storedError);
              if (!0 === C(r) || a === "closed") {
                return Promise.reject(
                  new TypeError(
                    "The stream is closing or closed and cannot be written to"
                  )
                );
              }
              if (a === "erroring") return Promise.reject(r._storedError);
              h(a === "writable");
              const o = (function(e) {
                return (
                  h(!0 === A(e)),
                  h(e._state === "writable"),
                  new Promise((t, r) => {
                    const n = { _resolve: t, _reject: r };
                    e._writeRequests.push(n);
                  })
                );
              })(r);
              return (
                (function(e, t, r) {
                  const n = { chunk: t };
                  try {
                    v(e, n, r);
                  } catch (t) {
                    return void U(e, t);
                  }
                  const i = e._controlledWritableStream;
                  if (!1 === C(i) && i._state === "writable") {
                    const a = B(e);
                    T(i, a);
                  }
                  W(e);
                })(n, t, i),
                o
              );
            }
            var N = (function() {
              function e(t, r, n, a) {
                if ((i(this, e), !1 === _(t))) {
                  throw new TypeError(
                    "WritableStreamDefaultController can only be constructed with a WritableStream instance"
                  );
                }
                if (void 0 !== t._writableStreamController) {
                  throw new TypeError(
                    "WritableStreamDefaultController instances can only be created by the WritableStream constructor"
                  );
                }
                (this._controlledWritableStream = t),
                  (this._underlyingSink = r),
                  (this._queue = void 0),
                  (this._queueTotalSize = void 0),
                  g(this),
                  (this._started = !1);
                const o = u(n, a);
                (this._strategySize = o.size),
                  (this._strategyHWM = o.highWaterMark),
                  T(t, B(this));
              }
              return (
                n(e, [
                  {
                    key: "error",
                    value(e) {
                      if (
                        !1 ===
                        (function(e) {
                          if (!l(e)) return !1;
                          if (
                            !Object.prototype.hasOwnProperty.call(
                              e,
                              "_underlyingSink"
                            )
                          )
                            return !1;
                          return !0;
                        })(this)
                      ) {
                        throw new TypeError(
                          "WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController"
                        );
                      }
                      this._controlledWritableStream._state === "writable" &&
                        z(this, e);
                    }
                  },
                  {
                    key: "__abortSteps",
                    value(e) {
                      return s(this._underlyingSink, "abort", [e]);
                    }
                  },
                  {
                    key: "__errorSteps",
                    value() {
                      g(this);
                    }
                  },
                  {
                    key: "__startSteps",
                    value() {
                      const e = this;
                      let t = o(this._underlyingSink, "start", [this]);
                      let r = this._controlledWritableStream;
                      Promise.resolve(t)
                        .then(
                          () => {
                            h(
                              "writable" === r._state || r._state === "erroring"
                            ),
                              (e._started = !0),
                              W(e);
                          },
                          t => {
                            h(
                              "writable" === r._state || r._state === "erroring"
                            ),
                              (e._started = !0),
                              w(r, t);
                          }
                        )
                        .catch(d);
                    }
                  }
                ]),
                e
              );
            })();
            function q(e) {
              return e._strategyHWM - e._queueTotalSize;
            }
            function W(e) {
              const t = e._controlledWritableStream;
              if (!1 !== e._started && void 0 === t._inFlightWriteRequest) {
                const r = t._state;
                if (r !== "closed" && r !== "errored") {
                  if (r !== "erroring") {
                    if (e._queue.length !== 0) {
                      let n = m(e);
                      "close" === n
                        ? (function(e) {
                            let t = e._controlledWritableStream;
                            (function(e) {
                              h(void 0 === e._inFlightCloseRequest),
                                h(void 0 !== e._closeRequest),
                                (e._inFlightCloseRequest = e._closeRequest),
                                (e._closeRequest = void 0);
                            })(t),
                              p(e),
                              h(
                                e._queue.length === 0,
                                "queue must be empty once the final write record is dequeued"
                              ),
                              s(e._underlyingSink, "close", [])
                                .then(
                                  () => {
                                    x(t);
                                  },
                                  e => {
                                    !(function(e, t) {
                                      h(void 0 !== e._inFlightCloseRequest),
                                        e._inFlightCloseRequest._reject(t),
                                        (e._inFlightCloseRequest = void 0),
                                        h(
                                          "writable" === e._state ||
                                            "erroring" === e._state
                                        ),
                                        void 0 !== e._pendingAbortRequest &&
                                          (e._pendingAbortRequest._reject(t),
                                          (e._pendingAbortRequest = void 0)),
                                        w(e, t);
                                    })(t, e);
                                  }
                                )
                                .catch(d);
                          })(e)
                        : (function(e, t) {
                            let r = e._controlledWritableStream;
                            (function(e) {
                              h(
                                void 0 === e._inFlightWriteRequest,
                                "there must be no pending write request"
                              ),
                                h(
                                  e._writeRequests.length !== 0,
                                  "writeRequests must not be empty"
                                ),
                                (e._inFlightWriteRequest = e._writeRequests.shift());
                            })(r),
                              s(e._underlyingSink, "write", [t, e])
                                .then(
                                  () => {
                                    !(function(e) {
                                      h(void 0 !== e._inFlightWriteRequest),
                                        e._inFlightWriteRequest._resolve(
                                          void 0
                                        ),
                                        (e._inFlightWriteRequest = void 0);
                                    })(r);
                                    var t = r._state;
                                    if (
                                      (h(t === "writable" || t === "erroring"),
                                      p(e),
                                      !1 === C(r) && t === "writable")
                                    ) {
                                      var n = B(e);
                                      T(r, n);
                                    }
                                    W(e);
                                  },
                                  e => {
                                    !(function(e, t) {
                                      h(void 0 !== e._inFlightWriteRequest),
                                        e._inFlightWriteRequest._reject(t),
                                        (e._inFlightWriteRequest = void 0),
                                        h(
                                          "writable" === e._state ||
                                            "erroring" === e._state
                                        ),
                                        w(e, t);
                                    })(r, e);
                                  }
                                )
                                .catch(d);
                          })(e, n.chunk);
                    }
                  } else P(t);
                }
              }
            }
            function U(e, t) {
              e._controlledWritableStream._state === "writable" && z(e, t);
            }
            function B(e) {
              return q(e) <= 0;
            }
            function z(e, t) {
              const r = e._controlledWritableStream;
              h(r._state === "writable"), k(r, t);
            }
            function G(e) {
              return new TypeError(
                `WritableStream.prototype.${e} can only be used on a WritableStream`
              );
            }
            function H(e) {
              return new TypeError(
                `WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`
              );
            }
            function X(e) {
              return new TypeError(
                `Cannot ${e} a stream using a released writer`
              );
            }
            function Y(e) {
              e._closedPromise = new Promise((t, r) => {
                (e._closedPromise_resolve = t),
                  (e._closedPromise_reject = r),
                  (e._closedPromiseState = "pending");
              });
            }
            function V(e, t) {
              h(
                void 0 !== e._closedPromise_resolve,
                "writer._closedPromise_resolve !== undefined"
              ),
                h(
                  void 0 !== e._closedPromise_reject,
                  "writer._closedPromise_reject !== undefined"
                ),
                h(
                  e._closedPromiseState === "pending",
                  "writer._closedPromiseState is pending"
                ),
                e._closedPromise_reject(t),
                (e._closedPromise_resolve = void 0),
                (e._closedPromise_reject = void 0),
                (e._closedPromiseState = "rejected");
            }
            function Q(e, t) {
              (e._readyPromise = Promise.reject(t)),
                (e._readyPromise_resolve = void 0),
                (e._readyPromise_reject = void 0),
                (e._readyPromiseState = "rejected");
            }
            function K(e) {
              (e._readyPromise = Promise.resolve(void 0)),
                (e._readyPromise_resolve = void 0),
                (e._readyPromise_reject = void 0),
                (e._readyPromiseState = "fulfilled");
            }
            function J(e) {
              h(
                void 0 !== e._readyPromise_resolve,
                "writer._readyPromise_resolve !== undefined"
              ),
                h(
                  void 0 !== e._readyPromise_reject,
                  "writer._readyPromise_reject !== undefined"
                ),
                e._readyPromise_resolve(void 0),
                (e._readyPromise_resolve = void 0),
                (e._readyPromise_reject = void 0),
                (e._readyPromiseState = "fulfilled");
            }
          },
          function(e, t, r) {
            const n = r(0).IsFiniteNonNegativeNumber;
            const i = r(1).assert;
            (t.DequeueValue = function(e) {
              i(
                "_queue" in e && "_queueTotalSize" in e,
                "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
              ),
                i(
                  e._queue.length > 0,
                  "Spec-level failure: should never dequeue from an empty queue."
                );
              const t = e._queue.shift();
              return (
                (e._queueTotalSize -= t.size),
                e._queueTotalSize < 0 && (e._queueTotalSize = 0),
                t.value
              );
            }),
              (t.EnqueueValueWithSize = function(e, t, r) {
                if (
                  (i(
                    "_queue" in e && "_queueTotalSize" in e,
                    "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."
                  ),
                  (r = Number(r)),
                  !n(r))
                ) {
                  throw new RangeError(
                    "Size must be a finite, non-NaN, non-negative number."
                  );
                }
                e._queue.push({ value: t, size: r }), (e._queueTotalSize += r);
              }),
              (t.PeekQueueValue = function(e) {
                return (
                  i(
                    "_queue" in e && "_queueTotalSize" in e,
                    "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
                  ),
                  i(
                    e._queue.length > 0,
                    "Spec-level failure: should never peek at an empty queue."
                  ),
                  e._queue[0].value
                );
              }),
              (t.ResetQueue = function(e) {
                i(
                  "_queue" in e && "_queueTotalSize" in e,
                  "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."
                ),
                  (e._queue = []),
                  (e._queueTotalSize = 0);
              });
          },
          function(e, t, r) {
            const n = (function() {
              function e(e, t) {
                for (let r = 0; r < t.length; r++) {
                  const n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
              };
            })();
            function i(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            const a = r(0);
            const o = a.ArrayBufferCopy;
            const s = a.CreateIterResultObject;
            const u = a.IsFiniteNonNegativeNumber;
            const l = a.InvokeOrNoop;
            const c = a.PromiseInvokeOrNoop;
            const h = a.TransferArrayBuffer;
            const d = a.ValidateAndNormalizeQueuingStrategy;
            const f = a.ValidateAndNormalizeHighWaterMark;
            const p = r(0);
            const v = p.createArrayFromList;
            const m = p.createDataProperty;
            const g = p.typeIsObject;
            const y = r(1);
            const b = y.assert;
            const _ = y.rethrowAssertionErrorRejection;
            const A = r(3);
            const S = A.DequeueValue;
            const w = A.EnqueueValueWithSize;
            const k = A.ResetQueue;
            const P = r(2);
            const x = P.AcquireWritableStreamDefaultWriter;
            const C = P.IsWritableStream;
            const R = P.IsWritableStreamLocked;
            const E = P.WritableStreamAbort;
            const T = P.WritableStreamDefaultWriterCloseWithErrorPropagation;
            const O = P.WritableStreamDefaultWriterRelease;
            const I = P.WritableStreamDefaultWriterWrite;
            const F = P.WritableStreamCloseQueuedOrInFlight;
            const L = (function() {
              function e() {
                const t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                const n = r.size;
                let a = r.highWaterMark;
                i(this, e),
                  (this._state = "readable"),
                  (this._reader = void 0),
                  (this._storedError = void 0),
                  (this._disturbed = !1),
                  (this._readableStreamController = void 0);
                const o = t.type;
                if (String(o) === "bytes") {
                  void 0 === a && (a = 0),
                    (this._readableStreamController = new de(this, t, a));
                } else {
                  if (void 0 !== o)
                    throw new RangeError("Invalid type is specified");
                  void 0 === a && (a = 1),
                    (this._readableStreamController = new ne(this, t, n, a));
                }
              }
              return (
                n(e, [
                  {
                    key: "cancel",
                    value(e) {
                      return !1 === M(this)
                        ? Promise.reject(Ee("cancel"))
                        : !0 === D(this)
                        ? Promise.reject(
                            new TypeError(
                              "Cannot cancel a stream that already has a reader"
                            )
                          )
                        : U(this, e);
                    }
                  },
                  {
                    key: "getReader",
                    value() {
                      let e = (arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                      ).mode;
                      if (!1 === M(this)) throw Ee("getReader");
                      if (void 0 === e) return j(this);
                      if ((e = String(e)) === "byob") return new K(this);
                      throw new RangeError("Invalid mode is specified");
                    }
                  },
                  {
                    key: "pipeThrough",
                    value(e, t) {
                      let r = e.writable;
                      let n = e.readable;
                      return (
                        (function(e) {
                          try {
                            Promise.prototype.then.call(e, void 0, () => {});
                          } catch (e) {}
                        })(this.pipeTo(r, t)),
                        n
                      );
                    }
                  },
                  {
                    key: "pipeTo",
                    value(e) {
                      let t = this;
                      let r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      let n = r.preventClose;
                      let i = r.preventAbort;
                      let a = r.preventCancel;
                      if (!1 === M(this)) return Promise.reject(Ee("pipeTo"));
                      if (!1 === C(e)) {
                        return Promise.reject(
                          new TypeError(
                            "ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
                          )
                        );
                      }
                      if (
                        ((n = Boolean(n)),
                        (i = Boolean(i)),
                        (a = Boolean(a)),
                        !0 === D(this))
                      ) {
                        return Promise.reject(
                          new TypeError(
                            "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
                          )
                        );
                      }
                      if (!0 === R(e)) {
                        return Promise.reject(
                          new TypeError(
                            "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
                          )
                        );
                      }
                      let o = j(this);
                      let s = x(e);
                      let u = !1;
                      let l = Promise.resolve();
                      return new Promise((r, c) => {
                        let h;
                        let d;
                        let f;
                        if (
                          (m(t, o._closedPromise, t => {
                            !1 === i
                              ? g(
                                  function() {
                                    return E(e, t);
                                  },
                                  !0,
                                  t
                                )
                              : y(!0, t);
                          }),
                          m(e, s._closedPromise, e => {
                            !1 === a
                              ? g(
                                  function() {
                                    return U(t, e);
                                  },
                                  !0,
                                  e
                                )
                              : y(!0, e);
                          }),
                          (h = t),
                          (d = o._closedPromise),
                          (f = function() {
                            !1 === n ? g(() => T(s)) : y();
                          }),
                          "closed" === h._state ? f() : d.then(f).catch(_),
                          !0 === F(e) || e._state === "closed")
                        ) {
                          let p = new TypeError(
                            "the destination writable stream closed before all data could be piped to it"
                          );
                          !1 === a
                            ? g(
                                () => {
                                  return U(t, p);
                                },
                                !0,
                                p
                              )
                            : y(!0, p);
                        }
                        function v() {
                          let e = l;
                          return l.then(() => (e !== l ? v() : void 0));
                        }
                        function m(e, t, r) {
                          "errored" === e._state
                            ? r(e._storedError)
                            : t.catch(r).catch(_);
                        }
                        function g(t, r, n) {
                          function i() {
                            t()
                              .then(
                                () => {
                                  return b(r, n);
                                },
                                e => {
                                  return b(!0, e);
                                }
                              )
                              .catch(_);
                          }
                          !0 !== u &&
                            ((u = !0),
                            e._state === "writable" && !1 === F(e)
                              ? v().then(i)
                              : i());
                        }
                        function y(t, r) {
                          !0 !== u &&
                            ((u = !0),
                            e._state === "writable" && !1 === F(e)
                              ? v()
                                  .then(() => b(t, r))
                                  .catch(_)
                              : b(t, r));
                        }
                        function b(e, t) {
                          O(s), te(o), e ? c(t) : r(void 0);
                        }
                        (function e() {
                          return (
                            (l = Promise.resolve()),
                            !0 === u
                              ? Promise.resolve()
                              : s._readyPromise
                                  .then(() =>
                                    re(o).then(function(e) {
                                      var t = e.value;
                                      !0 !== e.done &&
                                        (l = I(s, t).catch(function() {}));
                                    })
                                  )
                                  .then(e)
                          );
                        })().catch(e => {
                          (l = Promise.resolve()), _(e);
                        });
                      });
                    }
                  },
                  {
                    key: "tee",
                    value() {
                      if (!1 === M(this)) throw Ee("tee");
                      let e = N(this, !1);
                      return v(e);
                    }
                  },
                  {
                    key: "locked",
                    get() {
                      if (!1 === M(this)) throw Ee("locked");
                      return D(this);
                    }
                  }
                ]),
                e
              );
            })();
            function j(e) {
              return new Q(e);
            }
            function M(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_readableStreamController"
                )
              );
            }
            function D(e) {
              return (
                b(
                  !0 === M(e),
                  "IsReadableStreamLocked should only be used on known readable streams"
                ),
                void 0 !== e._reader
              );
            }
            function N(e, t) {
              b(!0 === M(e)), b(typeof t === "boolean");
              const r = j(e);
              const n = {
                closedOrErrored: !1,
                canceled1: !1,
                canceled2: !1,
                reason1: void 0,
                reason2: void 0
              };
              n.promise = new Promise(e => {
                n._resolve = e;
              });
              const i = (function() {
                return function e() {
                  const t = e._reader;
                  const r = e._branch1;
                  const n = e._branch2;
                  const i = e._teeState;
                  return re(t).then(e => {
                    b(g(e));
                    const t = e.value;
                    let a = e.done;
                    if (
                      (b(typeof a === "boolean"),
                      !0 === a &&
                        !1 === i.closedOrErrored &&
                        (!1 === i.canceled1 && oe(r),
                        !1 === i.canceled2 && oe(n),
                        (i.closedOrErrored = !0)),
                      !0 !== i.closedOrErrored)
                    ) {
                      const o = t;
                      let s = t;
                      !1 === i.canceled1 && se(r, o),
                        !1 === i.canceled2 && se(n, s);
                    }
                  });
                };
              })();
              (i._reader = r), (i._teeState = n), (i._cloneForBranch2 = t);
              const a = (function() {
                return function e(t) {
                  const r = e._stream;
                  const n = e._teeState;
                  n.canceled1 = !0;
                  n.reason1 = t;
                  if (!0 === n.canceled2) {
                    const i = v([n.reason1, n.reason2]);
                    const a = U(r, i);
                    n._resolve(a);
                  }
                  return n.promise;
                };
              })();
              (a._stream = e), (a._teeState = n);
              const o = (function() {
                return function e(t) {
                  const r = e._stream;
                  const n = e._teeState;
                  n.canceled2 = !0;
                  n.reason2 = t;
                  if (!0 === n.canceled1) {
                    const i = v([n.reason1, n.reason2]);
                    const a = U(r, i);
                    n._resolve(a);
                  }
                  return n.promise;
                };
              })();
              (o._stream = e), (o._teeState = n);
              const s = Object.create(Object.prototype);
              m(s, "pull", i), m(s, "cancel", a);
              const u = new L(s);
              const l = Object.create(Object.prototype);
              m(l, "pull", i), m(l, "cancel", o);
              const c = new L(l);
              return (
                (i._branch1 = u._readableStreamController),
                (i._branch2 = c._readableStreamController),
                r._closedPromise.catch(e => {
                  !0 !== n.closedOrErrored &&
                    (ue(i._branch1, e),
                    ue(i._branch2, e),
                    (n.closedOrErrored = !0));
                }),
                [u, c]
              );
            }
            function q(e) {
              return (
                b(!0 === J(e._reader)),
                b(e._state === "readable" || e._state === "closed"),
                new Promise((t, r) => {
                  const n = { _resolve: t, _reject: r };
                  e._reader._readIntoRequests.push(n);
                })
              );
            }
            function W(e) {
              return (
                b(!0 === Z(e._reader)),
                b(e._state === "readable"),
                new Promise((t, r) => {
                  const n = { _resolve: t, _reject: r };
                  e._reader._readRequests.push(n);
                })
              );
            }
            function U(e, t) {
              return (
                (e._disturbed = !0),
                e._state === "closed"
                  ? Promise.resolve(void 0)
                  : e._state === "errored"
                  ? Promise.reject(e._storedError)
                  : (B(e),
                    e._readableStreamController.__cancelSteps(t).then(() => {}))
              );
            }
            function B(e) {
              b(e._state === "readable"), (e._state = "closed");
              const t = e._reader;
              if (void 0 !== t) {
                if (!0 === Z(t)) {
                  for (let r = 0; r < t._readRequests.length; r++) {
                    (0, t._readRequests[r]._resolve)(s(void 0, !0));
                  }
                  t._readRequests = [];
                }
                !(function(e) {
                  b(void 0 !== e._closedPromise_resolve),
                    b(void 0 !== e._closedPromise_reject),
                    e._closedPromise_resolve(void 0),
                    (e._closedPromise_resolve = void 0),
                    (e._closedPromise_reject = void 0);
                })(t);
              }
            }
            function z(e, t) {
              b(!0 === M(e), "stream must be ReadableStream"),
                b(e._state === "readable", "state must be readable"),
                (e._state = "errored"),
                (e._storedError = t);
              const r = e._reader;
              if (void 0 !== r) {
                if (!0 === Z(r)) {
                  for (let n = 0; n < r._readRequests.length; n++) {
                    r._readRequests[n]._reject(t);
                  }
                  r._readRequests = [];
                } else {
                  b(J(r), "reader must be ReadableStreamBYOBReader");
                  for (let i = 0; i < r._readIntoRequests.length; i++) {
                    r._readIntoRequests[i]._reject(t);
                  }
                  r._readIntoRequests = [];
                }
                Ie(r, t), r._closedPromise.catch(() => {});
              }
            }
            function G(e, t, r) {
              const n = e._reader;
              b(n._readRequests.length > 0),
                n._readRequests.shift()._resolve(s(t, r));
            }
            function H(e) {
              return e._reader._readIntoRequests.length;
            }
            function X(e) {
              return e._reader._readRequests.length;
            }
            function Y(e) {
              const t = e._reader;
              return void 0 !== t && !1 !== J(t);
            }
            function V(e) {
              const t = e._reader;
              return void 0 !== t && !1 !== Z(t);
            }
            e.exports = {
              ReadableStream: L,
              IsReadableStreamDisturbed(e) {
                return (
                  b(
                    !0 === M(e),
                    "IsReadableStreamDisturbed should only be used on known readable streams"
                  ),
                  e._disturbed
                );
              },
              ReadableStreamDefaultControllerClose: oe,
              ReadableStreamDefaultControllerEnqueue: se,
              ReadableStreamDefaultControllerError: ue,
              ReadableStreamDefaultControllerGetDesiredSize: ce
            };
            var Q = (function() {
              function e(t) {
                if ((i(this, e), !1 === M(t))) {
                  throw new TypeError(
                    "ReadableStreamDefaultReader can only be constructed with a ReadableStream instance"
                  );
                }
                if (!0 === D(t)) {
                  throw new TypeError(
                    "This stream has already been locked for exclusive reading by another reader"
                  );
                }
                $(this, t), (this._readRequests = []);
              }
              return (
                n(e, [
                  {
                    key: "cancel",
                    value(e) {
                      return !1 === Z(this)
                        ? Promise.reject(Oe("cancel"))
                        : void 0 === this._ownerReadableStream
                        ? Promise.reject(Te("cancel"))
                        : ee(this, e);
                    }
                  },
                  {
                    key: "read",
                    value() {
                      return !1 === Z(this)
                        ? Promise.reject(Oe("read"))
                        : void 0 === this._ownerReadableStream
                        ? Promise.reject(Te("read from"))
                        : re(this);
                    }
                  },
                  {
                    key: "releaseLock",
                    value() {
                      if (!1 === Z(this)) throw Oe("releaseLock");
                      if (void 0 !== this._ownerReadableStream) {
                        if (this._readRequests.length > 0) {
                          throw new TypeError(
                            "Tried to release a reader lock when that reader has pending read() calls un-settled"
                          );
                        }
                        te(this);
                      }
                    }
                  },
                  {
                    key: "closed",
                    get() {
                      return !1 === Z(this)
                        ? Promise.reject(Oe("closed"))
                        : this._closedPromise;
                    }
                  }
                ]),
                e
              );
            })();
            var K = (function() {
              function e(t) {
                if ((i(this, e), !M(t))) {
                  throw new TypeError(
                    "ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source"
                  );
                }
                if (!1 === fe(t._readableStreamController)) {
                  throw new TypeError(
                    "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
                  );
                }
                if (D(t)) {
                  throw new TypeError(
                    "This stream has already been locked for exclusive reading by another reader"
                  );
                }
                $(this, t), (this._readIntoRequests = []);
              }
              return (
                n(e, [
                  {
                    key: "cancel",
                    value(e) {
                      return J(this)
                        ? void 0 === this._ownerReadableStream
                          ? Promise.reject(Te("cancel"))
                          : ee(this, e)
                        : Promise.reject(Fe("cancel"));
                    }
                  },
                  {
                    key: "read",
                    value(e) {
                      return J(this)
                        ? void 0 === this._ownerReadableStream
                          ? Promise.reject(Te("read from"))
                          : ArrayBuffer.isView(e)
                          ? e.byteLength === 0
                            ? Promise.reject(
                                new TypeError(
                                  "view must have non-zero byteLength"
                                )
                              )
                            : (function(e, t) {
                                let r = e._ownerReadableStream;
                                if (
                                  (b(void 0 !== r),
                                  (r._disturbed = !0),
                                  "errored" === r._state)
                                )
                                  return Promise.reject(r._storedError);
                                return (function(e, t) {
                                  let r = e._controlledReadableStream;
                                  let n = 1;
                                  t.constructor !== DataView &&
                                    (n = t.constructor.BYTES_PER_ELEMENT);
                                  let i = t.constructor;
                                  let a = {
                                    buffer: t.buffer,
                                    byteOffset: t.byteOffset,
                                    byteLength: t.byteLength,
                                    bytesFilled: 0,
                                    elementSize: n,
                                    ctor: i,
                                    readerType: "byob"
                                  };
                                  if (e._pendingPullIntos.length > 0) {
                                    return (
                                      (a.buffer = h(a.buffer)),
                                      e._pendingPullIntos.push(a),
                                      q(r)
                                    );
                                  }
                                  if (r._state === "closed") {
                                    let o = new t.constructor(
                                      a.buffer,
                                      a.byteOffset,
                                      0
                                    );
                                    return Promise.resolve(s(o, !0));
                                  }
                                  if (e._queueTotalSize > 0) {
                                    if (!0 === _e(e, a)) {
                                      let u = ye(a);
                                      return Se(e), Promise.resolve(s(u, !1));
                                    }
                                    if (!0 === e._closeRequested) {
                                      let l = new TypeError(
                                        "Insufficient bytes to fill elements in the given buffer"
                                      );
                                      return Ce(e, l), Promise.reject(l);
                                    }
                                  }
                                  (a.buffer = h(a.buffer)),
                                    e._pendingPullIntos.push(a);
                                  let c = q(r);
                                  return ve(e), c;
                                })(r._readableStreamController, t);
                              })(this, e)
                          : Promise.reject(
                              new TypeError("view must be an array buffer view")
                            )
                        : Promise.reject(Fe("read"));
                    }
                  },
                  {
                    key: "releaseLock",
                    value() {
                      if (!J(this)) throw Fe("releaseLock");
                      if (void 0 !== this._ownerReadableStream) {
                        if (this._readIntoRequests.length > 0) {
                          throw new TypeError(
                            "Tried to release a reader lock when that reader has pending read() calls un-settled"
                          );
                        }
                        te(this);
                      }
                    }
                  },
                  {
                    key: "closed",
                    get() {
                      return J(this)
                        ? this._closedPromise
                        : Promise.reject(Fe("closed"));
                    }
                  }
                ]),
                e
              );
            })();
            function J(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests")
              );
            }
            function Z(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(e, "_readRequests")
              );
            }
            function $(e, t) {
              (e._ownerReadableStream = t),
                (t._reader = e),
                t._state === "readable"
                  ? (function(e) {
                      e._closedPromise = new Promise((t, r) => {
                        (e._closedPromise_resolve = t),
                          (e._closedPromise_reject = r);
                      });
                    })(e)
                  : t._state === "closed"
                  ? (function(e) {
                      (e._closedPromise = Promise.resolve(void 0)),
                        (e._closedPromise_resolve = void 0),
                        (e._closedPromise_reject = void 0);
                    })(e)
                  : (b(t._state === "errored", "state must be errored"),
                    (function(e, t) {
                      (e._closedPromise = Promise.reject(t)),
                        (e._closedPromise_resolve = void 0),
                        (e._closedPromise_reject = void 0);
                    })(e, t._storedError),
                    e._closedPromise.catch(() => {}));
            }
            function ee(e, t) {
              const r = e._ownerReadableStream;
              return b(void 0 !== r), U(r, t);
            }
            function te(e) {
              b(void 0 !== e._ownerReadableStream),
                b(e._ownerReadableStream._reader === e),
                e._ownerReadableStream._state === "readable"
                  ? Ie(
                      e,
                      new TypeError(
                        "Reader was released and can no longer be used to monitor the stream's closedness"
                      )
                    )
                  : (function(e, t) {
                      b(void 0 === e._closedPromise_resolve),
                        b(void 0 === e._closedPromise_reject),
                        (e._closedPromise = Promise.reject(t));
                    })(
                      e,
                      new TypeError(
                        "Reader was released and can no longer be used to monitor the stream's closedness"
                      )
                    ),
                e._closedPromise.catch(() => {}),
                (e._ownerReadableStream._reader = void 0),
                (e._ownerReadableStream = void 0);
            }
            function re(e) {
              const t = e._ownerReadableStream;
              return (
                b(void 0 !== t),
                (t._disturbed = !0),
                t._state === "closed"
                  ? Promise.resolve(s(void 0, !0))
                  : t._state === "errored"
                  ? Promise.reject(t._storedError)
                  : (b(t._state === "readable"),
                    t._readableStreamController.__pullSteps())
              );
            }
            var ne = (function() {
              function e(t, r, n, a) {
                if ((i(this, e), !1 === M(t))) {
                  throw new TypeError(
                    "ReadableStreamDefaultController can only be constructed with a ReadableStream instance"
                  );
                }
                if (void 0 !== t._readableStreamController) {
                  throw new TypeError(
                    "ReadableStreamDefaultController instances can only be created by the ReadableStream constructor"
                  );
                }
                (this._controlledReadableStream = t),
                  (this._underlyingSource = r),
                  (this._queue = void 0),
                  (this._queueTotalSize = void 0),
                  k(this),
                  (this._started = !1),
                  (this._closeRequested = !1),
                  (this._pullAgain = !1),
                  (this._pulling = !1);
                const o = d(n, a);
                (this._strategySize = o.size),
                  (this._strategyHWM = o.highWaterMark);
                const s = this;
                const u = l(r, "start", [this]);
                Promise.resolve(u)
                  .then(
                    () => {
                      (s._started = !0),
                        b(!1 === s._pulling),
                        b(!1 === s._pullAgain),
                        ae(s);
                    },
                    e => {
                      le(s, e);
                    }
                  )
                  .catch(_);
              }
              return (
                n(e, [
                  {
                    key: "close",
                    value() {
                      if (!1 === ie(this)) throw Le("close");
                      if (!0 === this._closeRequested) {
                        throw new TypeError(
                          "The stream has already been closed; do not close it again!"
                        );
                      }
                      const e = this._controlledReadableStream._state;
                      if (e !== "readable") {
                        throw new TypeError(
                          "The stream (in " +
                            e +
                            " state) is not in the readable state and cannot be closed"
                        );
                      }
                      oe(this);
                    }
                  },
                  {
                    key: "enqueue",
                    value(e) {
                      if (!1 === ie(this)) throw Le("enqueue");
                      if (!0 === this._closeRequested)
                        throw new TypeError("stream is closed or draining");
                      const t = this._controlledReadableStream._state;
                      if (t !== "readable") {
                        throw new TypeError(
                          "The stream (in " +
                            t +
                            " state) is not in the readable state and cannot be enqueued to"
                        );
                      }
                      return se(this, e);
                    }
                  },
                  {
                    key: "error",
                    value(e) {
                      if (!1 === ie(this)) throw Le("error");
                      const t = this._controlledReadableStream;
                      if (t._state !== "readable") {
                        throw new TypeError(
                          "The stream is " +
                            t._state +
                            " and so cannot be errored"
                        );
                      }
                      ue(this, e);
                    }
                  },
                  {
                    key: "__cancelSteps",
                    value(e) {
                      return k(this), c(this._underlyingSource, "cancel", [e]);
                    }
                  },
                  {
                    key: "__pullSteps",
                    value() {
                      const e = this._controlledReadableStream;
                      if (this._queue.length > 0) {
                        const t = S(this);
                        return (
                          !0 === this._closeRequested &&
                          this._queue.length === 0
                            ? B(e)
                            : ae(this),
                          Promise.resolve(s(t, !1))
                        );
                      }
                      const r = W(e);
                      return ae(this), r;
                    }
                  },
                  {
                    key: "desiredSize",
                    get() {
                      if (!1 === ie(this)) throw Le("desiredSize");
                      return ce(this);
                    }
                  }
                ]),
                e
              );
            })();
            function ie(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(e, "_underlyingSource")
              );
            }
            function ae(e) {
              !1 !==
                (function(e) {
                  const t = e._controlledReadableStream;
                  if (t._state === "closed" || t._state === "errored")
                    return !1;
                  if (!0 === e._closeRequested) return !1;
                  if (!1 === e._started) return !1;
                  if (!0 === D(t) && X(t) > 0) return !0;
                  if (ce(e) > 0) return !0;
                  return !1;
                })(e) &&
                (!0 !== e._pulling
                  ? (b(!1 === e._pullAgain),
                    (e._pulling = !0),
                    c(e._underlyingSource, "pull", [e])
                      .then(
                        () => {
                          if (((e._pulling = !1), !0 === e._pullAgain))
                            return (e._pullAgain = !1), ae(e);
                        },
                        t => {
                          le(e, t);
                        }
                      )
                      .catch(_))
                  : (e._pullAgain = !0));
            }
            function oe(e) {
              const t = e._controlledReadableStream;
              b(!1 === e._closeRequested),
                b(t._state === "readable"),
                (e._closeRequested = !0),
                e._queue.length === 0 && B(t);
            }
            function se(e, t) {
              const r = e._controlledReadableStream;
              if (
                (b(!1 === e._closeRequested),
                b(r._state === "readable"),
                !0 === D(r) && X(r) > 0)
              )
                G(r, t, !1);
              else {
                let n = 1;
                if (void 0 !== e._strategySize) {
                  const i = e._strategySize;
                  try {
                    n = i(t);
                  } catch (t) {
                    throw (le(e, t), t);
                  }
                }
                try {
                  w(e, t, n);
                } catch (t) {
                  throw (le(e, t), t);
                }
              }
              ae(e);
            }
            function ue(e, t) {
              const r = e._controlledReadableStream;
              b(r._state === "readable"), k(e), z(r, t);
            }
            function le(e, t) {
              e._controlledReadableStream._state === "readable" && ue(e, t);
            }
            function ce(e) {
              const t = e._controlledReadableStream._state;
              return t === "errored"
                ? null
                : t === "closed"
                ? 0
                : e._strategyHWM - e._queueTotalSize;
            }
            const he = (function() {
              function e(t, r) {
                i(this, e),
                  (this._associatedReadableByteStreamController = t),
                  (this._view = r);
              }
              return (
                n(e, [
                  {
                    key: "respond",
                    value(e) {
                      if (!1 === pe(this)) throw je("respond");
                      if (
                        void 0 === this._associatedReadableByteStreamController
                      ) {
                        throw new TypeError(
                          "This BYOB request has been invalidated"
                        );
                      }
                      !(function(e, t) {
                        if (((t = Number(t)), !1 === u(t))) {
                          throw new RangeError("bytesWritten must be a finite");
                        }
                        b(e._pendingPullIntos.length > 0), Pe(e, t);
                      })(this._associatedReadableByteStreamController, e);
                    }
                  },
                  {
                    key: "respondWithNewView",
                    value(e) {
                      if (!1 === pe(this)) throw je("respond");
                      if (
                        void 0 === this._associatedReadableByteStreamController
                      ) {
                        throw new TypeError(
                          "This BYOB request has been invalidated"
                        );
                      }
                      if (!ArrayBuffer.isView(e)) {
                        throw new TypeError(
                          "You can only respond with array buffer views"
                        );
                      }
                      !(function(e, t) {
                        b(e._pendingPullIntos.length > 0);
                        let r = e._pendingPullIntos[0];
                        if (r.byteOffset + r.bytesFilled !== t.byteOffset) {
                          throw new RangeError(
                            "The region specified by view does not match byobRequest"
                          );
                        }
                        if (r.byteLength !== t.byteLength) {
                          throw new RangeError(
                            "The buffer of view has different capacity than byobRequest"
                          );
                        }
                        (r.buffer = t.buffer), Pe(e, t.byteLength);
                      })(this._associatedReadableByteStreamController, e);
                    }
                  },
                  {
                    key: "view",
                    get() {
                      return this._view;
                    }
                  }
                ]),
                e
              );
            })();
            var de = (function() {
              function e(t, r, n) {
                if ((i(this, e), !1 === M(t))) {
                  throw new TypeError(
                    "ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source"
                  );
                }
                if (void 0 !== t._readableStreamController) {
                  throw new TypeError(
                    "ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source"
                  );
                }
                (this._controlledReadableStream = t),
                  (this._underlyingByteSource = r),
                  (this._pullAgain = !1),
                  (this._pulling = !1),
                  me(this),
                  (this._queue = this._queueTotalSize = void 0),
                  k(this),
                  (this._closeRequested = !1),
                  (this._started = !1),
                  (this._strategyHWM = f(n));
                const a = r.autoAllocateChunkSize;
                if (void 0 !== a && (!1 === Number.isInteger(a) || a <= 0)) {
                  throw new RangeError(
                    "autoAllocateChunkSize must be a positive integer"
                  );
                }
                (this._autoAllocateChunkSize = a),
                  (this._pendingPullIntos = []);
                const o = this;
                let s = l(r, "start", [this]);
                Promise.resolve(s)
                  .then(
                    () => {
                      (o._started = !0),
                        b(!1 === o._pulling),
                        b(!1 === o._pullAgain),
                        ve(o);
                    },
                    e => {
                      "readable" === t._state && Ce(o, e);
                    }
                  )
                  .catch(_);
              }
              return (
                n(e, [
                  {
                    key: "close",
                    value() {
                      if (!1 === fe(this)) throw Me("close");
                      if (!0 === this._closeRequested) {
                        throw new TypeError(
                          "The stream has already been closed; do not close it again!"
                        );
                      }
                      let e = this._controlledReadableStream._state;
                      if (e !== "readable") {
                        throw new TypeError(
                          "The stream (in " +
                            e +
                            " state) is not in the readable state and cannot be closed"
                        );
                      }
                      !(function(e) {
                        let t = e._controlledReadableStream;
                        if (
                          (b(!1 === e._closeRequested),
                          b(t._state === "readable"),
                          e._queueTotalSize > 0)
                        )
                          return void (e._closeRequested = !0);
                        if (e._pendingPullIntos.length > 0) {
                          let r = e._pendingPullIntos[0];
                          if (r.bytesFilled > 0) {
                            let n = new TypeError(
                              "Insufficient bytes to fill elements in the given buffer"
                            );
                            throw (Ce(e, n), n);
                          }
                        }
                        B(t);
                      })(this);
                    }
                  },
                  {
                    key: "enqueue",
                    value(e) {
                      if (!1 === fe(this)) throw Me("enqueue");
                      if (!0 === this._closeRequested)
                        throw new TypeError("stream is closed or draining");
                      let t = this._controlledReadableStream._state;
                      if (t !== "readable") {
                        throw new TypeError(
                          "The stream (in " +
                            t +
                            " state) is not in the readable state and cannot be enqueued to"
                        );
                      }
                      if (!ArrayBuffer.isView(e)) {
                        throw new TypeError(
                          "You can only enqueue array buffer views when using a ReadableByteStreamController"
                        );
                      }
                      !(function(e, t) {
                        let r = e._controlledReadableStream;
                        b(!1 === e._closeRequested), b(r._state === "readable");
                        let n = t.buffer;
                        let i = t.byteOffset;
                        let a = t.byteLength;
                        let o = h(n);
                        if (!0 === V(r)) {
                          if (X(r) === 0) be(e, o, i, a);
                          else {
                            b(e._queue.length === 0);
                            var s = new Uint8Array(o, i, a);
                            G(r, s, !1);
                          }
                        } else {
                          !0 === Y(r)
                            ? (be(e, o, i, a), ke(e))
                            : (b(!1 === D(r), "stream must not be locked"),
                              be(e, o, i, a));
                        }
                      })(this, e);
                    }
                  },
                  {
                    key: "error",
                    value(e) {
                      if (!1 === fe(this)) throw Me("error");
                      let t = this._controlledReadableStream;
                      if (t._state !== "readable") {
                        throw new TypeError(
                          "The stream is " +
                            t._state +
                            " and so cannot be errored"
                        );
                      }
                      Ce(this, e);
                    }
                  },
                  {
                    key: "__cancelSteps",
                    value(e) {
                      this._pendingPullIntos.length > 0 &&
                        (this._pendingPullIntos[0].bytesFilled = 0);
                      return (
                        k(this), c(this._underlyingByteSource, "cancel", [e])
                      );
                    }
                  },
                  {
                    key: "__pullSteps",
                    value() {
                      let e = this._controlledReadableStream;
                      if ((b(!0 === V(e)), this._queueTotalSize > 0)) {
                        b(X(e) === 0);
                        let t = this._queue.shift();
                        (this._queueTotalSize -= t.byteLength), Se(this);
                        let r = void 0;
                        try {
                          r = new Uint8Array(
                            t.buffer,
                            t.byteOffset,
                            t.byteLength
                          );
                        } catch (e) {
                          return Promise.reject(e);
                        }
                        return Promise.resolve(s(r, !1));
                      }
                      let n = this._autoAllocateChunkSize;
                      if (void 0 !== n) {
                        let i = void 0;
                        try {
                          i = new ArrayBuffer(n);
                        } catch (e) {
                          return Promise.reject(e);
                        }
                        let a = {
                          buffer: i,
                          byteOffset: 0,
                          byteLength: n,
                          bytesFilled: 0,
                          elementSize: 1,
                          ctor: Uint8Array,
                          readerType: "default"
                        };
                        this._pendingPullIntos.push(a);
                      }
                      let o = W(e);
                      return ve(this), o;
                    }
                  },
                  {
                    key: "byobRequest",
                    get() {
                      if (!1 === fe(this)) throw Me("byobRequest");
                      if (
                        void 0 === this._byobRequest &&
                        this._pendingPullIntos.length > 0
                      ) {
                        let e = this._pendingPullIntos[0];
                        let t = new Uint8Array(
                          e.buffer,
                          e.byteOffset + e.bytesFilled,
                          e.byteLength - e.bytesFilled
                        );
                        this._byobRequest = new he(this, t);
                      }
                      return this._byobRequest;
                    }
                  },
                  {
                    key: "desiredSize",
                    get() {
                      if (!1 === fe(this)) throw Me("desiredSize");
                      return Re(this);
                    }
                  }
                ]),
                e
              );
            })();
            function fe(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_underlyingByteSource"
                )
              );
            }
            function pe(e) {
              return (
                !!g(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_associatedReadableByteStreamController"
                )
              );
            }
            function ve(e) {
              !1 !==
                (function(e) {
                  const t = e._controlledReadableStream;
                  if (t._state !== "readable") return !1;
                  if (!0 === e._closeRequested) return !1;
                  if (!1 === e._started) return !1;
                  if (!0 === V(t) && X(t) > 0) return !0;
                  if (!0 === Y(t) && H(t) > 0) return !0;
                  if (Re(e) > 0) return !0;
                  return !1;
                })(e) &&
                (!0 !== e._pulling
                  ? (b(!1 === e._pullAgain),
                    (e._pulling = !0),
                    c(e._underlyingByteSource, "pull", [e])
                      .then(
                        () => {
                          (e._pulling = !1),
                            !0 === e._pullAgain && ((e._pullAgain = !1), ve(e));
                        },
                        t => {
                          e._controlledReadableStream._state === "readable" &&
                            Ce(e, t);
                        }
                      )
                      .catch(_))
                  : (e._pullAgain = !0));
            }
            function me(e) {
              we(e), (e._pendingPullIntos = []);
            }
            function ge(e, t) {
              b(e._state !== "errored", "state must not be errored");
              let r = !1;
              e._state === "closed" && (b(t.bytesFilled === 0), (r = !0));
              const n = ye(t);
              t.readerType === "default"
                ? G(e, n, r)
                : (b(t.readerType === "byob"),
                  (function(e, t, r) {
                    const n = e._reader;
                    b(n._readIntoRequests.length > 0),
                      n._readIntoRequests.shift()._resolve(s(t, r));
                  })(e, n, r));
            }
            function ye(e) {
              const t = e.bytesFilled;
              const r = e.elementSize;
              return (
                b(t <= e.byteLength),
                b(t % r == 0),
                new e.ctor(e.buffer, e.byteOffset, t / r)
              );
            }
            function be(e, t, r, n) {
              e._queue.push({ buffer: t, byteOffset: r, byteLength: n }),
                (e._queueTotalSize += n);
            }
            function _e(e, t) {
              const r = t.elementSize;
              const n = t.bytesFilled - (t.bytesFilled % r);
              const i = Math.min(
                e._queueTotalSize,
                t.byteLength - t.bytesFilled
              );
              const a = t.bytesFilled + i;
              const s = a - (a % r);
              let u = i;
              let l = !1;
              s > n && ((u = s - t.bytesFilled), (l = !0));
              for (let c = e._queue; u > 0; ) {
                const h = c[0];
                const d = Math.min(u, h.byteLength);
                const f = t.byteOffset + t.bytesFilled;
                o(t.buffer, f, h.buffer, h.byteOffset, d),
                  h.byteLength === d
                    ? c.shift()
                    : ((h.byteOffset += d), (h.byteLength -= d)),
                  (e._queueTotalSize -= d),
                  Ae(e, d, t),
                  (u -= d);
              }
              return (
                !1 === l &&
                  (b(e._queueTotalSize === 0, "queue must be empty"),
                  b(t.bytesFilled > 0),
                  b(t.bytesFilled < t.elementSize)),
                l
              );
            }
            function Ae(e, t, r) {
              b(
                e._pendingPullIntos.length === 0 || e._pendingPullIntos[0] === r
              ),
                we(e),
                (r.bytesFilled += t);
            }
            function Se(e) {
              b(e._controlledReadableStream._state === "readable"),
                e._queueTotalSize === 0 && !0 === e._closeRequested
                  ? B(e._controlledReadableStream)
                  : ve(e);
            }
            function we(e) {
              void 0 !== e._byobRequest &&
                ((e._byobRequest._associatedReadableByteStreamController = void 0),
                (e._byobRequest._view = void 0),
                (e._byobRequest = void 0));
            }
            function ke(e) {
              for (
                b(!1 === e._closeRequested);
                e._pendingPullIntos.length > 0;

              ) {
                if (e._queueTotalSize === 0) return;
                const t = e._pendingPullIntos[0];
                !0 === _e(e, t) && (xe(e), ge(e._controlledReadableStream, t));
              }
            }
            function Pe(e, t) {
              const r = e._pendingPullIntos[0];
              const n = e._controlledReadableStream;
              if (n._state === "closed") {
                if (t !== 0) {
                  throw new TypeError(
                    "bytesWritten must be 0 when calling respond() on a closed stream"
                  );
                }
                !(function(e, t) {
                  (t.buffer = h(t.buffer)),
                    b(t.bytesFilled === 0, "bytesFilled must be 0");
                  const r = e._controlledReadableStream;
                  if (!0 === Y(r)) for (; H(r) > 0; ) ge(r, xe(e));
                })(e, r);
              } else {
                b(n._state === "readable"),
                  (function(e, t, r) {
                    if (r.bytesFilled + t > r.byteLength)
                      throw new RangeError("bytesWritten out of range");
                    if ((Ae(e, t, r), !(r.bytesFilled < r.elementSize))) {
                      xe(e);
                      let n = r.bytesFilled % r.elementSize;
                      if (n > 0) {
                        let i = r.byteOffset + r.bytesFilled;
                        let a = r.buffer.slice(i - n, i);
                        be(e, a, 0, a.byteLength);
                      }
                      (r.buffer = h(r.buffer)),
                        (r.bytesFilled -= n),
                        ge(e._controlledReadableStream, r),
                        ke(e);
                    }
                  })(e, t, r);
              }
            }
            function xe(e) {
              const t = e._pendingPullIntos.shift();
              return we(e), t;
            }
            function Ce(e, t) {
              const r = e._controlledReadableStream;
              b(r._state === "readable"), me(e), k(e), z(r, t);
            }
            function Re(e) {
              const t = e._controlledReadableStream._state;
              return t === "errored"
                ? null
                : t === "closed"
                ? 0
                : e._strategyHWM - e._queueTotalSize;
            }
            function Ee(e) {
              return new TypeError(
                `ReadableStream.prototype.${e} can only be used on a ReadableStream`
              );
            }
            function Te(e) {
              return new TypeError(
                `Cannot ${e} a stream using a released reader`
              );
            }
            function Oe(e) {
              return new TypeError(
                `ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`
              );
            }
            function Ie(e, t) {
              b(void 0 !== e._closedPromise_resolve),
                b(void 0 !== e._closedPromise_reject),
                e._closedPromise_reject(t),
                (e._closedPromise_resolve = void 0),
                (e._closedPromise_reject = void 0);
            }
            function Fe(e) {
              return new TypeError(
                `ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`
              );
            }
            function Le(e) {
              return new TypeError(
                `ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`
              );
            }
            function je(e) {
              return new TypeError(
                `ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`
              );
            }
            function Me(e) {
              return new TypeError(
                `ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`
              );
            }
          },
          function(e, t, r) {
            const n = r(6);
            const i = r(4);
            const a = r(2);
            (t.TransformStream = n.TransformStream),
              (t.ReadableStream = i.ReadableStream),
              (t.IsReadableStreamDisturbed = i.IsReadableStreamDisturbed),
              (t.ReadableStreamDefaultControllerClose =
                i.ReadableStreamDefaultControllerClose),
              (t.ReadableStreamDefaultControllerEnqueue =
                i.ReadableStreamDefaultControllerEnqueue),
              (t.ReadableStreamDefaultControllerError =
                i.ReadableStreamDefaultControllerError),
              (t.ReadableStreamDefaultControllerGetDesiredSize =
                i.ReadableStreamDefaultControllerGetDesiredSize),
              (t.AcquireWritableStreamDefaultWriter =
                a.AcquireWritableStreamDefaultWriter),
              (t.IsWritableStream = a.IsWritableStream),
              (t.IsWritableStreamLocked = a.IsWritableStreamLocked),
              (t.WritableStream = a.WritableStream),
              (t.WritableStreamAbort = a.WritableStreamAbort),
              (t.WritableStreamDefaultControllerError =
                a.WritableStreamDefaultControllerError),
              (t.WritableStreamDefaultWriterCloseWithErrorPropagation =
                a.WritableStreamDefaultWriterCloseWithErrorPropagation),
              (t.WritableStreamDefaultWriterRelease =
                a.WritableStreamDefaultWriterRelease),
              (t.WritableStreamDefaultWriterWrite =
                a.WritableStreamDefaultWriterWrite);
          },
          function(e, t, r) {
            const n = (function() {
              function e(e, t) {
                for (let r = 0; r < t.length; r++) {
                  const n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
              };
            })();
            function i(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            const a = r(1).assert;
            const o = r(0);
            const s = o.InvokeOrNoop;
            const u = o.PromiseInvokeOrPerformFallback;
            const l = o.PromiseInvokeOrNoop;
            const c = o.typeIsObject;
            const h = r(4);
            const d = h.ReadableStream;
            const f = h.ReadableStreamDefaultControllerClose;
            const p = h.ReadableStreamDefaultControllerEnqueue;
            const v = h.ReadableStreamDefaultControllerError;
            const m = h.ReadableStreamDefaultControllerGetDesiredSize;
            const g = r(2);
            const y = g.WritableStream;
            const b = g.WritableStreamDefaultControllerError;
            function _(e, t) {
              if (!0 === e._errored)
                throw new TypeError("TransformStream is already errored");
              if (!0 === e._readableClosed)
                throw new TypeError("Readable side is already closed");
              const r = e._readableController;
              try {
                p(r, t);
              } catch (t) {
                throw ((e._readableClosed = !0), S(e, t), e._storedError);
              }
              !0 === m(r) <= 0 && !1 === e._backpressure && P(e, !0);
            }
            function A(e) {
              a(!1 === e._errored), a(!1 === e._readableClosed);
              try {
                f(e._readableController);
              } catch (e) {
                a(!1);
              }
              e._readableClosed = !0;
            }
            function S(e, t) {
              !1 === e._errored && w(e, t);
            }
            function w(e, t) {
              a(!1 === e._errored),
                (e._errored = !0),
                (e._storedError = t),
                !1 === e._writableDone && b(e._writableController, t),
                !1 === e._readableClosed && v(e._readableController, t);
            }
            function k(e) {
              return (
                a(
                  void 0 !== e._backpressureChangePromise,
                  "_backpressureChangePromise should have been initialized"
                ),
                !1 === e._backpressure
                  ? Promise.resolve()
                  : (a(
                      !0 === e._backpressure,
                      "_backpressure should have been initialized"
                    ),
                    e._backpressureChangePromise)
              );
            }
            function P(e, t) {
              a(
                e._backpressure !== t,
                "TransformStreamSetBackpressure() should be called only when backpressure is changed"
              ),
                void 0 !== e._backpressureChangePromise &&
                  e._backpressureChangePromise_resolve(t),
                (e._backpressureChangePromise = new Promise(t => {
                  e._backpressureChangePromise_resolve = t;
                })),
                e._backpressureChangePromise.then(e => {
                  a(
                    e !== t,
                    "_backpressureChangePromise should be fulfilled only when backpressure is changed"
                  );
                }),
                (e._backpressure = t);
            }
            function x(e, t) {
              return _(t._controlledTransformStream, e), Promise.resolve();
            }
            function C(e) {
              return (
                !!c(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_controlledTransformStream"
                )
              );
            }
            function R(e) {
              return (
                !!c(e) &&
                !!Object.prototype.hasOwnProperty.call(
                  e,
                  "_transformStreamController"
                )
              );
            }
            const E = (function() {
              function e(t, r) {
                i(this, e),
                  (this._transformStream = t),
                  (this._startPromise = r);
              }
              return (
                n(e, [
                  {
                    key: "start",
                    value(e) {
                      let t = this._transformStream;
                      return (
                        (t._writableController = e),
                        this._startPromise.then(() => k(t))
                      );
                    }
                  },
                  {
                    key: "write",
                    value(e) {
                      return (function(e, t) {
                        a(!1 === e._errored),
                          a(!1 === e._transforming),
                          a(!1 === e._backpressure),
                          (e._transforming = !0);
                        let r = e._transformer;
                        let n = e._transformStreamController;
                        return u(r, "transform", [t, n], x, [t, n]).then(
                          () => {
                            return (e._transforming = !1), k(e);
                          },
                          t => {
                            return S(e, t), Promise.reject(t);
                          }
                        );
                      })(this._transformStream, e);
                    }
                  },
                  {
                    key: "abort",
                    value() {
                      let e = this._transformStream;
                      (e._writableDone = !0),
                        w(e, new TypeError("Writable side aborted"));
                    }
                  },
                  {
                    key: "close",
                    value() {
                      let e = this._transformStream;
                      return (
                        a(!1 === e._transforming),
                        (e._writableDone = !0),
                        l(e._transformer, "flush", [
                          e._transformStreamController
                        ])
                          .then(() =>
                            !0 === e._errored
                              ? Promise.reject(e._storedError)
                              : (!1 === e._readableClosed && A(e),
                                Promise.resolve())
                          )
                          .catch(t => S(e, t), Promise.reject(e._storedError))
                      );
                    }
                  }
                ]),
                e
              );
            })();
            let T = (function() {
              function e(t, r) {
                i(this, e),
                  (this._transformStream = t),
                  (this._startPromise = r);
              }
              return (
                n(e, [
                  {
                    key: "start",
                    value(e) {
                      var t = this._transformStream;
                      return (
                        (t._readableController = e),
                        this._startPromise.then(
                          () => (
                            a(
                              void 0 !== t._backpressureChangePromise,
                              "_backpressureChangePromise should have been initialized"
                            ),
                            !0 === t._backpressure
                              ? Promise.resolve()
                              : (a(
                                  !1 === t._backpressure,
                                  "_backpressure should have been initialized"
                                ),
                                t._backpressureChangePromise)
                          )
                        )
                      );
                    }
                  },
                  {
                    key: "pull",
                    value() {
                      var e = this._transformStream;
                      return (
                        a(
                          !0 === e._backpressure,
                          "pull() should be never called while _backpressure is false"
                        ),
                        a(
                          void 0 !== e._backpressureChangePromise,
                          "_backpressureChangePromise should have been initialized"
                        ),
                        P(e, !1),
                        e._backpressureChangePromise
                      );
                    }
                  },
                  {
                    key: "cancel",
                    value() {
                      var e = this._transformStream;
                      (e._readableClosed = !0),
                        w(e, new TypeError("Readable side canceled"));
                    }
                  }
                ]),
                e
              );
            })();
            let O = (function() {
              function e(t) {
                if ((i(this, e), !1 === R(t))) {
                  throw new TypeError(
                    "TransformStreamDefaultController can only be constructed with a TransformStream instance"
                  );
                }
                if (void 0 !== t._transformStreamController) {
                  throw new TypeError(
                    "TransformStreamDefaultController instances can only be created by the TransformStream constructor"
                  );
                }
                this._controlledTransformStream = t;
              }
              return (
                n(e, [
                  {
                    key: "enqueue",
                    value(e) {
                      if (!1 === C(this)) throw F("enqueue");
                      _(this._controlledTransformStream, e);
                    }
                  },
                  {
                    key: "close",
                    value() {
                      if (!1 === C(this)) throw F("close");
                      !(function(e) {
                        if (!0 === e._errored) {
                          throw new TypeError(
                            "TransformStream is already errored"
                          );
                        }
                        if (!0 === e._readableClosed) {
                          throw new TypeError(
                            "Readable side is already closed"
                          );
                        }
                        A(e);
                      })(this._controlledTransformStream);
                    }
                  },
                  {
                    key: "error",
                    value(e) {
                      if (!1 === C(this)) throw F("error");
                      !(function(e, t) {
                        if (!0 === e._errored) {
                          throw new TypeError(
                            "TransformStream is already errored"
                          );
                        }
                        w(e, t);
                      })(this._controlledTransformStream, e);
                    }
                  },
                  {
                    key: "desiredSize",
                    get() {
                      if (!1 === C(this)) throw F("desiredSize");
                      var e = this._controlledTransformStream
                        ._readableController;
                      return m(e);
                    }
                  }
                ]),
                e
              );
            })();
            let I = (function() {
              function e() {
                const t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                i(this, e), (this._transformer = t);
                const r = t.readableStrategy;
                let n = t.writableStrategy;
                (this._transforming = !1),
                  (this._errored = !1),
                  (this._storedError = void 0),
                  (this._writableController = void 0),
                  (this._readableController = void 0),
                  (this._transformStreamController = void 0),
                  (this._writableDone = !1),
                  (this._readableClosed = !1),
                  (this._backpressure = void 0),
                  (this._backpressureChangePromise = void 0),
                  (this._backpressureChangePromise_resolve = void 0),
                  (this._transformStreamController = new O(this));
                let o = void 0;
                let u = new Promise(e => {
                  o = e;
                });
                let l = new T(this, u);
                this._readable = new d(l, r);
                const c = new E(this, u);
                (this._writable = new y(c, n)),
                  a(void 0 !== this._writableController),
                  a(void 0 !== this._readableController),
                  P(this, m(this._readableController) <= 0);
                const h = this;
                let f = s(t, "start", [h._transformStreamController]);
                o(f),
                  u.catch(e => {
                    !1 === h._errored &&
                      ((h._errored = !0), (h._storedError = e));
                  });
              }
              return (
                n(e, [
                  {
                    key: "readable",
                    get() {
                      if (!1 === R(this)) throw L("readable");
                      return this._readable;
                    }
                  },
                  {
                    key: "writable",
                    get() {
                      if (!1 === R(this)) throw L("writable");
                      return this._writable;
                    }
                  }
                ]),
                e
              );
            })();
            function F(e) {
              return new TypeError(
                `TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`
              );
            }
            function L(e) {
              return new TypeError(
                `TransformStream.prototype.${e} can only be used on a TransformStream`
              );
            }
            e.exports = { TransformStream: I };
          },
          function(e, t, r) {
            e.exports = r(5);
          }
        ])
      );
    },
    function(e, t, r) {
      const n =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      let i = !1;
      try {
        if (
          typeof URL === "function" &&
          n(URL.prototype) === "object" &&
          "origin" in URL.prototype
        ) {
          const a = new URL("b", "http://a");
          (a.pathname = "c%20d"), (i = a.href === "http://a/c%20d");
        }
      } catch (e) {}
      if (i) t.URL = URL;
      else {
        const o = r(128).URL;
        const s = r(3).URL;
        s &&
          ((o.createObjectURL = function(e) {
            return s.createObjectURL.apply(s, arguments);
          }),
          (o.revokeObjectURL = function(e) {
            s.revokeObjectURL(e);
          })),
          (t.URL = o);
      }
    },
    function(e, t, r) {
      !(function() {
        const e = Object.create(null);
        (e.ftp = 21),
          (e.file = 0),
          (e.gopher = 70),
          (e.http = 80),
          (e.https = 443),
          (e.ws = 80),
          (e.wss = 443);
        const r = Object.create(null);
        function n(t) {
          return void 0 !== e[t];
        }
        function i() {
          d.call(this), (this._isInvalid = !0);
        }
        function a(e) {
          return e === "" && i.call(this), e.toLowerCase();
        }
        function o(e) {
          const t = e.charCodeAt(0);
          return t > 32 && t < 127 && [34, 35, 60, 62, 63, 96].indexOf(t) === -1
            ? e
            : encodeURIComponent(e);
        }
        function s(e) {
          const t = e.charCodeAt(0);
          return t > 32 && t < 127 && [34, 35, 60, 62, 96].indexOf(t) === -1
            ? e
            : encodeURIComponent(e);
        }
        (r["%2e"] = "."),
          (r[".%2e"] = ".."),
          (r["%2e."] = ".."),
          (r["%2e%2e"] = "..");
        let u;
        const l = /[a-zA-Z]/;
        const c = /[a-zA-Z0-9\+\-\.]/;
        function h(t, h, d) {
          function f(e) {
            b.push(e);
          }
          let p = h || "scheme start";
          let v = 0;
          let m = "";
          let g = !1;
          let y = !1;
          var b = [];
          e: for (; (t[v - 1] !== u || v === 0) && !this._isInvalid; ) {
            const _ = t[v];
            switch (p) {
              case "scheme start":
                if (!_ || !l.test(_)) {
                  if (h) {
                    f("Invalid scheme.");
                    break e;
                  }
                  (m = ""), (p = "no scheme");
                  continue;
                }
                (m += _.toLowerCase()), (p = "scheme");
                break;
              case "scheme":
                if (_ && c.test(_)) m += _.toLowerCase();
                else {
                  if (_ !== ":") {
                    if (h) {
                      if (_ === u) break e;
                      f(`Code point not allowed in scheme: ${_}`);
                      break e;
                    }
                    (m = ""), (v = 0), (p = "no scheme");
                    continue;
                  }
                  if (((this._scheme = m), (m = ""), h)) break e;
                  n(this._scheme) && (this._isRelative = !0),
                    (p =
                      this._scheme === "file"
                        ? "relative"
                        : this._isRelative && d && d._scheme === this._scheme
                        ? "relative or authority"
                        : this._isRelative
                        ? "authority first slash"
                        : "scheme data");
                }
                break;
              case "scheme data":
                _ === "?"
                  ? ((this._query = "?"), (p = "query"))
                  : _ === "#"
                  ? ((this._fragment = "#"), (p = "fragment"))
                  : _ !== u &&
                    _ !== "\t" &&
                    _ !== "\n" &&
                    _ !== "\r" &&
                    (this._schemeData += o(_));
                break;
              case "no scheme":
                if (d && n(d._scheme)) {
                  p = "relative";
                  continue;
                }
                f("Missing scheme."), i.call(this);
                break;
              case "relative or authority":
                if (_ !== "/" || t[v + 1] !== "/") {
                  f(`Expected /, got: ${_}`), (p = "relative");
                  continue;
                }
                p = "authority ignore slashes";
                break;
              case "relative":
                if (
                  ((this._isRelative = !0),
                  this._scheme !== "file" && (this._scheme = d._scheme),
                  _ === u)
                ) {
                  (this._host = d._host),
                    (this._port = d._port),
                    (this._path = d._path.slice()),
                    (this._query = d._query),
                    (this._username = d._username),
                    (this._password = d._password);
                  break e;
                }
                if (_ === "/" || _ === "\\") {
                  _ === "\\" && f("\\ is an invalid code point."),
                    (p = "relative slash");
                } else if (_ === "?") {
                  (this._host = d._host),
                    (this._port = d._port),
                    (this._path = d._path.slice()),
                    (this._query = "?"),
                    (this._username = d._username),
                    (this._password = d._password),
                    (p = "query");
                } else {
                  if (_ !== "#") {
                    const A = t[v + 1];
                    const S = t[v + 2];
                    (this._scheme !== "file" ||
                      !l.test(_) ||
                      (A !== ":" && A !== "|") ||
                      (S !== u &&
                        S !== "/" &&
                        S !== "\\" &&
                        S !== "?" &&
                        S !== "#")) &&
                      ((this._host = d._host),
                      (this._port = d._port),
                      (this._username = d._username),
                      (this._password = d._password),
                      (this._path = d._path.slice()),
                      this._path.pop()),
                      (p = "relative path");
                    continue;
                  }
                  (this._host = d._host),
                    (this._port = d._port),
                    (this._path = d._path.slice()),
                    (this._query = d._query),
                    (this._fragment = "#"),
                    (this._username = d._username),
                    (this._password = d._password),
                    (p = "fragment");
                }
                break;
              case "relative slash":
                if (_ !== "/" && _ !== "\\") {
                  this._scheme !== "file" &&
                    ((this._host = d._host),
                    (this._port = d._port),
                    (this._username = d._username),
                    (this._password = d._password)),
                    (p = "relative path");
                  continue;
                }
                _ === "\\" && f("\\ is an invalid code point."),
                  (p =
                    this._scheme === "file"
                      ? "file host"
                      : "authority ignore slashes");
                break;
              case "authority first slash":
                if (_ !== "/") {
                  f(`Expected '/', got: ${_}`),
                    (p = "authority ignore slashes");
                  continue;
                }
                p = "authority second slash";
                break;
              case "authority second slash":
                if (((p = "authority ignore slashes"), _ !== "/")) {
                  f(`Expected '/', got: ${_}`);
                  continue;
                }
                break;
              case "authority ignore slashes":
                if (_ !== "/" && _ !== "\\") {
                  p = "authority";
                  continue;
                }
                f(`Expected authority, got: ${_}`);
                break;
              case "authority":
                if (_ === "@") {
                  g && (f("@ already seen."), (m += "%40")), (g = !0);
                  for (let w = 0; w < m.length; w++) {
                    const k = m[w];
                    if (k !== "\t" && k !== "\n" && k !== "\r") {
                      if (k !== ":" || this._password !== null) {
                        const P = o(k);
                        this._password !== null
                          ? (this._password += P)
                          : (this._username += P);
                      } else this._password = "";
                    } else f("Invalid whitespace in authority.");
                  }
                  m = "";
                } else {
                  if (
                    _ === u ||
                    _ === "/" ||
                    _ === "\\" ||
                    _ === "?" ||
                    _ === "#"
                  ) {
                    (v -= m.length), (m = ""), (p = "host");
                    continue;
                  }
                  m += _;
                }
                break;
              case "file host":
                if (
                  _ === u ||
                  _ === "/" ||
                  _ === "\\" ||
                  _ === "?" ||
                  _ === "#"
                ) {
                  m.length !== 2 ||
                  !l.test(m[0]) ||
                  (m[1] !== ":" && m[1] !== "|")
                    ? m.length === 0
                      ? (p = "relative path start")
                      : ((this._host = a.call(this, m)),
                        (m = ""),
                        (p = "relative path start"))
                    : (p = "relative path");
                  continue;
                }
                _ === "\t" || _ === "\n" || _ === "\r"
                  ? f("Invalid whitespace in file host.")
                  : (m += _);
                break;
              case "host":
              case "hostname":
                if (_ !== ":" || y) {
                  if (
                    _ === u ||
                    _ === "/" ||
                    _ === "\\" ||
                    _ === "?" ||
                    _ === "#"
                  ) {
                    if (
                      ((this._host = a.call(this, m)),
                      (m = ""),
                      (p = "relative path start"),
                      h)
                    )
                      break e;
                    continue;
                  }
                  _ !== "\t" && _ !== "\n" && _ !== "\r"
                    ? (_ === "[" ? (y = !0) : _ === "]" && (y = !1), (m += _))
                    : f(`Invalid code point in host/hostname: ${_}`);
                } else if (
                  ((this._host = a.call(this, m)),
                  (m = ""),
                  (p = "port"),
                  h === "hostname")
                )
                  break e;
                break;
              case "port":
                if (/[0-9]/.test(_)) m += _;
                else {
                  if (
                    _ === u ||
                    _ === "/" ||
                    _ === "\\" ||
                    _ === "?" ||
                    _ === "#" ||
                    h
                  ) {
                    if (m !== "") {
                      const x = parseInt(m, 10);
                      x !== e[this._scheme] && (this._port = `${x}`), (m = "");
                    }
                    if (h) break e;
                    p = "relative path start";
                    continue;
                  }
                  _ === "\t" || _ === "\n" || _ === "\r"
                    ? f(`Invalid code point in port: ${_}`)
                    : i.call(this);
                }
                break;
              case "relative path start":
                if (
                  (_ === "\\" && f("'\\' not allowed in path."),
                  (p = "relative path"),
                  _ !== "/" && _ !== "\\")
                )
                  continue;
                break;
              case "relative path":
                var C;
                if (
                  _ !== u &&
                  _ !== "/" &&
                  _ !== "\\" &&
                  (h || (_ !== "?" && _ !== "#"))
                )
                  _ !== "\t" && _ !== "\n" && _ !== "\r" && (m += o(_));
                else {
                  _ === "\\" && f("\\ not allowed in relative path."),
                    (C = r[m.toLowerCase()]) && (m = C),
                    m === ".."
                      ? (this._path.pop(),
                        _ !== "/" && _ !== "\\" && this._path.push(""))
                      : m === "." && _ !== "/" && _ !== "\\"
                      ? this._path.push("")
                      : m !== "." &&
                        (this._scheme === "file" &&
                          this._path.length === 0 &&
                          m.length === 2 &&
                          l.test(m[0]) &&
                          m[1] === "|" &&
                          (m = `${m[0]}:`),
                        this._path.push(m)),
                    (m = ""),
                    _ === "?"
                      ? ((this._query = "?"), (p = "query"))
                      : _ === "#" && ((this._fragment = "#"), (p = "fragment"));
                }
                break;
              case "query":
                h || _ !== "#"
                  ? _ !== u &&
                    _ !== "\t" &&
                    _ !== "\n" &&
                    _ !== "\r" &&
                    (this._query += s(_))
                  : ((this._fragment = "#"), (p = "fragment"));
                break;
              case "fragment":
                _ !== u &&
                  _ !== "\t" &&
                  _ !== "\n" &&
                  _ !== "\r" &&
                  (this._fragment += _);
            }
            v++;
          }
        }
        function d() {
          (this._scheme = ""),
            (this._schemeData = ""),
            (this._username = ""),
            (this._password = null),
            (this._host = ""),
            (this._port = ""),
            (this._path = []),
            (this._query = ""),
            (this._fragment = ""),
            (this._isInvalid = !1),
            (this._isRelative = !1);
        }
        function f(e, t) {
          void 0 === t || t instanceof f || (t = new f(String(t))),
            (this._url = e),
            d.call(this);
          const r = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
          h.call(this, r, null, t);
        }
        (f.prototype = {
          toString() {
            return this.href;
          },
          get href() {
            if (this._isInvalid) return this._url;
            let e = "";
            return (
              (this._username === "" && this._password === null) ||
                (e = `${this._username +
                  (this._password !== null ? `:${this._password}` : "")}@`),
              this.protocol +
                (this._isRelative ? `//${e}${this.host}` : "") +
                this.pathname +
                this._query +
                this._fragment
            );
          },
          set href(e) {
            d.call(this), h.call(this, e);
          },
          get protocol() {
            return `${this._scheme}:`;
          },
          set protocol(e) {
            this._isInvalid || h.call(this, `${e}:`, "scheme start");
          },
          get host() {
            return this._isInvalid
              ? ""
              : this._port
              ? `${this._host}:${this._port}`
              : this._host;
          },
          set host(e) {
            !this._isInvalid && this._isRelative && h.call(this, e, "host");
          },
          get hostname() {
            return this._host;
          },
          set hostname(e) {
            !this._isInvalid && this._isRelative && h.call(this, e, "hostname");
          },
          get port() {
            return this._port;
          },
          set port(e) {
            !this._isInvalid && this._isRelative && h.call(this, e, "port");
          },
          get pathname() {
            return this._isInvalid
              ? ""
              : this._isRelative
              ? `/${this._path.join("/")}`
              : this._schemeData;
          },
          set pathname(e) {
            !this._isInvalid &&
              this._isRelative &&
              ((this._path = []), h.call(this, e, "relative path start"));
          },
          get search() {
            return this._isInvalid || !this._query || this._query === "?"
              ? ""
              : this._query;
          },
          set search(e) {
            !this._isInvalid &&
              this._isRelative &&
              ((this._query = "?"),
              e[0] === "?" && (e = e.slice(1)),
              h.call(this, e, "query"));
          },
          get hash() {
            return this._isInvalid || !this._fragment || this._fragment === "#"
              ? ""
              : this._fragment;
          },
          set hash(e) {
            this._isInvalid ||
              ((this._fragment = "#"),
              e[0] === "#" && (e = e.slice(1)),
              h.call(this, e, "fragment"));
          },
          get origin() {
            let e;
            if (this._isInvalid || !this._scheme) return "";
            switch (this._scheme) {
              case "data":
              case "file":
              case "javascript":
              case "mailto":
                return "null";
              case "blob":
                try {
                  return new f(this._schemeData).origin || "null";
                } catch (e) {}
                return "null";
            }
            return (e = this.host) ? `${this._scheme}://${e}` : "";
          }
        }),
          (t.URL = f);
      })();
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.build = t.version = t.setPDFNetworkStreamFactory = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.LoopbackPort = t.getDocument = void 0);
      let n;
      const i = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) {
            return (function(e, t) {
              let r = [];
              let n = !0;
              let i = !1;
              let a = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return r;
            })(e, t);
          }
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      const a = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const o =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const s = r(1);
      const u = r(130);
      const l = r(131);
      const c = r(132);
      const h = r(133);
      const d = r(3);
      const f = (n = d) && n.__esModule ? n : { default: n };
      const p = r(135);
      const v = r(136);
      const m = r(141);
      const g = r(143);
      const y = r(144);
      function b(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      const _ = 65536;
      let A = !1;
      let S = void 0;
      let w = null;
      let k = !1;
      typeof window === "undefined"
        ? ((A = !0),
          void 0 === require.ensure &&
            (require.ensure = require("node-ensure")),
          (k = !0))
        : typeof require !== "undefined" &&
          typeof require.ensure === "function" &&
          (k = !0),
        typeof requirejs !== "undefined" &&
          requirejs.toUrl &&
          (S = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
      let P;
      const x = typeof requirejs !== "undefined" && requirejs.load;
      if (
        ((w = k
          ? function() {
              return new Promise((e, t) => {
                require.ensure(
                  [],
                  () => {
                    try {
                      let r;
                      (r = require("./pdf.worker.js")),
                        e(r.WorkerMessageHandler);
                    } catch (e) {
                      t(e);
                    }
                  },
                  t,
                  "pdfjsWorker"
                );
              });
            }
          : x
          ? function() {
              return new Promise((e, t) => {
                requirejs(
                  ["pdfjs-dist/build/pdf.worker"],
                  r => {
                    try {
                      e(r.WorkerMessageHandler);
                    } catch (e) {
                      t(e);
                    }
                  },
                  t
                );
              });
            }
          : null),
        !S && typeof document !== "undefined")
      ) {
        const C = document.currentScript && document.currentScript.src;
        C && (S = C.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
      }
      const R = (function() {
        let e = 0;
        function t() {
          (this._capability = (0, s.createPromiseCapability)()),
            (this._transport = null),
            (this._worker = null),
            (this.docId = `d${e++}`),
            (this.destroyed = !1),
            (this.onPassword = null),
            (this.onProgress = null),
            (this.onUnsupportedFeature = null);
        }
        return (
          (t.prototype = {
            get promise() {
              return this._capability.promise;
            },
            destroy() {
              const e = this;
              return (
                (this.destroyed = !0),
                (this._transport
                  ? this._transport.destroy()
                  : Promise.resolve()
                ).then(() => {
                  (e._transport = null),
                    e._worker && (e._worker.destroy(), (e._worker = null));
                })
              );
            },
            then(e, t) {
              return this.promise.then.apply(this.promise, arguments);
            }
          }),
          t
        );
      })();
      const E = (function() {
        function e(t, r) {
          b(this, e),
            (this.length = t),
            (this.initialData = r),
            (this._rangeListeners = []),
            (this._progressListeners = []),
            (this._progressiveReadListeners = []),
            (this._readyCapability = (0, s.createPromiseCapability)());
        }
        return (
          a(e, [
            {
              key: "addRangeListener",
              value(e) {
                this._rangeListeners.push(e);
              }
            },
            {
              key: "addProgressListener",
              value(e) {
                this._progressListeners.push(e);
              }
            },
            {
              key: "addProgressiveReadListener",
              value(e) {
                this._progressiveReadListeners.push(e);
              }
            },
            {
              key: "onDataRange",
              value(e, t) {
                let r = !0;
                let n = !1;
                let i = void 0;
                try {
                  for (
                    var a, o = this._rangeListeners[Symbol.iterator]();
                    !(r = (a = o.next()).done);
                    r = !0
                  ) {
                    (0, a.value)(e, t);
                  }
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    !r && o.return && o.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
            },
            {
              key: "onDataProgress",
              value(e) {
                const t = this;
                this._readyCapability.promise.then(() => {
                  let r = !0;
                  let n = !1;
                  let i = void 0;
                  try {
                    for (
                      var a, o = t._progressListeners[Symbol.iterator]();
                      !(r = (a = o.next()).done);
                      r = !0
                    ) {
                      (0, a.value)(e);
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !r && o.return && o.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                });
              }
            },
            {
              key: "onDataProgressiveRead",
              value(e) {
                const t = this;
                this._readyCapability.promise.then(() => {
                  let r = !0;
                  let n = !1;
                  let i = void 0;
                  try {
                    for (
                      var a, o = t._progressiveReadListeners[Symbol.iterator]();
                      !(r = (a = o.next()).done);
                      r = !0
                    ) {
                      (0, a.value)(e);
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !r && o.return && o.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                });
              }
            },
            {
              key: "transportReady",
              value() {
                this._readyCapability.resolve();
              }
            },
            {
              key: "requestDataRange",
              value(e, t) {
                (0, s.unreachable)(
                  "Abstract method PDFDataRangeTransport.requestDataRange"
                );
              }
            },
            { key: "abort", value() {} }
          ]),
          e
        );
      })();
      const T = (function() {
        function e(t, r, n) {
          b(this, e),
            (this.loadingTask = n),
            (this._pdfInfo = t),
            (this._transport = r);
        }
        return (
          a(e, [
            {
              key: "getPage",
              value(e) {
                return this._transport.getPage(e);
              }
            },
            {
              key: "getPageIndex",
              value(e) {
                return this._transport.getPageIndex(e);
              }
            },
            {
              key: "getDestinations",
              value() {
                return this._transport.getDestinations();
              }
            },
            {
              key: "getDestination",
              value(e) {
                return this._transport.getDestination(e);
              }
            },
            {
              key: "getPageLabels",
              value() {
                return this._transport.getPageLabels();
              }
            },
            {
              key: "getPageMode",
              value() {
                return this._transport.getPageMode();
              }
            },
            {
              key: "getAttachments",
              value() {
                return this._transport.getAttachments();
              }
            },
            {
              key: "getJavaScript",
              value() {
                return this._transport.getJavaScript();
              }
            },
            {
              key: "getOutline",
              value() {
                return this._transport.getOutline();
              }
            },
            {
              key: "getPermissions",
              value() {
                return this._transport.getPermissions();
              }
            },
            {
              key: "getMetadata",
              value() {
                return this._transport.getMetadata();
              }
            },
            {
              key: "getData",
              value() {
                return this._transport.getData();
              }
            },
            {
              key: "getDownloadInfo",
              value() {
                return this._transport.downloadInfoCapability.promise;
              }
            },
            {
              key: "getStats",
              value() {
                return this._transport.getStats();
              }
            },
            {
              key: "cleanup",
              value() {
                this._transport.startCleanup();
              }
            },
            {
              key: "destroy",
              value() {
                return this.loadingTask.destroy();
              }
            },
            {
              key: "numPages",
              get() {
                return this._pdfInfo.numPages;
              }
            },
            {
              key: "fingerprint",
              get() {
                return this._pdfInfo.fingerprint;
              }
            },
            {
              key: "loadingParams",
              get() {
                return this._transport.loadingParams;
              }
            }
          ]),
          e
        );
      })();
      const O = (function() {
        function e(e, t, r) {
          const n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (this.pageIndex = e),
            (this._pageInfo = t),
            (this.transport = r),
            (this._stats = n ? new u.StatTimer() : u.DummyStatTimer),
            (this._pdfBug = n),
            (this.commonObjs = r.commonObjs),
            (this.objs = new j()),
            (this.cleanupAfterRender = !1),
            (this.pendingCleanup = !1),
            (this.intentStates = Object.create(null)),
            (this.destroyed = !1);
        }
        return (
          (e.prototype = {
            get pageNumber() {
              return this.pageIndex + 1;
            },
            get rotate() {
              return this._pageInfo.rotate;
            },
            get ref() {
              return this._pageInfo.ref;
            },
            get userUnit() {
              return this._pageInfo.userUnit;
            },
            get view() {
              return this._pageInfo.view;
            },
            getViewport(e) {
              const t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.rotate;
              const r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return new u.PageViewport({
                viewBox: this.view,
                scale: e,
                rotation: t,
                dontFlip: r
              });
            },
            getAnnotations(e) {
              const t = (e && e.intent) || null;
              return (
                (this.annotationsPromise && this.annotationsIntent === t) ||
                  ((this.annotationsPromise = this.transport.getAnnotations(
                    this.pageIndex,
                    t
                  )),
                  (this.annotationsIntent = t)),
                this.annotationsPromise
              );
            },
            render(e) {
              const t = this;
              const r = this._stats;
              r.time("Overall"), (this.pendingCleanup = !1);
              const n = e.intent === "print" ? "print" : "display";
              let i = e.canvasFactory || new u.DOMCanvasFactory();
              let a = new y.WebGLContext({ enable: e.enableWebGL });
              this.intentStates[n] ||
                (this.intentStates[n] = Object.create(null));
              const o = this.intentStates[n];
              o.displayReadyCapability ||
                ((o.receivingOperatorList = !0),
                (o.displayReadyCapability = (0, s.createPromiseCapability)()),
                (o.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1
                }),
                r.time("Page Request"),
                this.transport.messageHandler.send("RenderPageRequest", {
                  pageIndex: this.pageNumber - 1,
                  intent: n,
                  renderInteractiveForms: !0 === e.renderInteractiveForms
                }));
              const l = function(e) {
                const n = o.renderTasks.indexOf(c);
                n >= 0 && o.renderTasks.splice(n, 1),
                  t.cleanupAfterRender && (t.pendingCleanup = !0),
                  t._tryCleanup(),
                  e ? c.capability.reject(e) : c.capability.resolve(),
                  r.timeEnd("Rendering"),
                  r.timeEnd("Overall");
              };
              var c = new D(
                l,
                e,
                this.objs,
                this.commonObjs,
                o.operatorList,
                this.pageNumber,
                i,
                a,
                this._pdfBug
              );
              (c.useRequestAnimationFrame = n !== "print"),
                o.renderTasks || (o.renderTasks = []),
                o.renderTasks.push(c);
              const h = c.task;
              return (
                o.displayReadyCapability.promise
                  .then(e => {
                    t.pendingCleanup
                      ? l()
                      : (r.time("Rendering"),
                        c.initializeGraphics(e),
                        c.operatorListChanged());
                  })
                  .catch(l),
                h
              );
            },
            getOperatorList() {
              this.intentStates.oplist ||
                (this.intentStates.oplist = Object.create(null));
              let e;
              const t = this.intentStates.oplist;
              return (
                t.opListReadCapability ||
                  (((e = {}).operatorListChanged = function() {
                    if (t.operatorList.lastChunk) {
                      t.opListReadCapability.resolve(t.operatorList);
                      const r = t.renderTasks.indexOf(e);
                      r >= 0 && t.renderTasks.splice(r, 1);
                    }
                  }),
                  (t.receivingOperatorList = !0),
                  (t.opListReadCapability = (0, s.createPromiseCapability)()),
                  (t.renderTasks = []),
                  t.renderTasks.push(e),
                  (t.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1
                  }),
                  this._stats.time("Page Request"),
                  this.transport.messageHandler.send("RenderPageRequest", {
                    pageIndex: this.pageIndex,
                    intent: "oplist"
                  })),
                t.opListReadCapability.promise
              );
            },
            streamTextContent() {
              const e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return this.transport.messageHandler.sendWithStream(
                "GetTextContent",
                {
                  pageIndex: this.pageNumber - 1,
                  normalizeWhitespace: !0 === e.normalizeWhitespace,
                  combineTextItems: !0 !== e.disableCombineTextItems
                },
                {
                  highWaterMark: 100,
                  size(e) {
                    return e.items.length;
                  }
                }
              );
            },
            getTextContent(e) {
              e = e || {};
              const t = this.streamTextContent(e);
              return new Promise((e, r) => {
                const n = t.getReader();
                let i = { items: [], styles: Object.create(null) };
                !(function t() {
                  n.read().then(r => {
                    let n;
                    var a = r.value;
                    r.done
                      ? e(i)
                      : (Object.assign(i.styles, a.styles),
                        (n = i.items).push.apply(
                          n,
                          (function(e) {
                            if (Array.isArray(e)) {
                              for (
                                var t = 0, r = Array(e.length);
                                t < e.length;
                                t++
                              )
                                r[t] = e[t];
                              return r;
                            }
                            return Array.from(e);
                          })(a.items)
                        ),
                        t());
                  }, r);
                })();
              });
            },
            _destroy() {
              (this.destroyed = !0),
                (this.transport.pageCache[this.pageIndex] = null);
              const e = [];
              return (
                Object.keys(this.intentStates).forEach(function(t) {
                  t !== "oplist" &&
                    this.intentStates[t].renderTasks.forEach(t => {
                      const r = t.capability.promise.catch(() => {});
                      e.push(r), t.cancel();
                    });
                }, this),
                this.objs.clear(),
                (this.annotationsPromise = null),
                (this.pendingCleanup = !1),
                Promise.all(e)
              );
            },
            cleanup() {
              const e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              (this.pendingCleanup = !0), this._tryCleanup(e);
            },
            _tryCleanup() {
              const e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.pendingCleanup &&
                !Object.keys(this.intentStates).some(function(e) {
                  const t = this.intentStates[e];
                  return t.renderTasks.length !== 0 || t.receivingOperatorList;
                }, this) &&
                (Object.keys(this.intentStates).forEach(function(e) {
                  delete this.intentStates[e];
                }, this),
                this.objs.clear(),
                (this.annotationsPromise = null),
                e &&
                  this._stats instanceof u.StatTimer &&
                  (this._stats = new u.StatTimer()),
                (this.pendingCleanup = !1));
            },
            _startRenderPage(e, t) {
              const r = this.intentStates[t];
              r.displayReadyCapability && r.displayReadyCapability.resolve(e);
            },
            _renderPageChunk(e, t) {
              let r;
              let n;
              const i = this.intentStates[t];
              for (r = 0, n = e.length; r < n; r++) {
                i.operatorList.fnArray.push(e.fnArray[r]),
                  i.operatorList.argsArray.push(e.argsArray[r]);
              }
              for (
                i.operatorList.lastChunk = e.lastChunk, r = 0;
                r < i.renderTasks.length;
                r++
              )
                i.renderTasks[r].operatorListChanged();
              e.lastChunk &&
                ((i.receivingOperatorList = !1), this._tryCleanup());
            },
            get stats() {
              return this._stats instanceof u.StatTimer ? this._stats : null;
            }
          }),
          e
        );
      })();
      const I = (function() {
        function e() {
          const t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          b(this, e),
            (this._listeners = []),
            (this._defer = t),
            (this._deferred = Promise.resolve(void 0));
        }
        return (
          a(e, [
            {
              key: "postMessage",
              value(e, t) {
                const r = this;
                if (this._defer) {
                  const n = new WeakMap();
                  const i = {
                    data: (function e(r) {
                      if (
                        (void 0 === r ? "undefined" : o(r)) !== "object" ||
                        r === null
                      )
                        return r;
                      if (n.has(r)) return n.get(r);
                      let i;
                      let a;
                      if ((a = r.buffer) && (0, s.isArrayBuffer)(a)) {
                        const u = t && t.includes(a);
                        return (
                          (i =
                            r === a
                              ? r
                              : u
                              ? new r.constructor(a, r.byteOffset, r.byteLength)
                              : new r.constructor(r)),
                          n.set(r, i),
                          i
                        );
                      }
                      for (const l in ((i = Array.isArray(r) ? [] : {}),
                      n.set(r, i),
                      r)) {
                        for (
                          var c, h = r;
                          !(c = Object.getOwnPropertyDescriptor(h, l));

                        )
                          h = Object.getPrototypeOf(h);
                        void 0 !== c.value &&
                          typeof c.value !== "function" &&
                          (i[l] = e(c.value));
                      }
                      return i;
                    })(e)
                  };
                  this._deferred.then(() => {
                    r._listeners.forEach(function(e) {
                      e.call(this, i);
                    }, r);
                  });
                } else {
                  this._listeners.forEach(function(t) {
                    t.call(this, { data: e });
                  }, this);
                }
              }
            },
            {
              key: "addEventListener",
              value(e, t) {
                this._listeners.push(t);
              }
            },
            {
              key: "removeEventListener",
              value(e, t) {
                const r = this._listeners.indexOf(t);
                this._listeners.splice(r, 1);
              }
            },
            {
              key: "terminate",
              value() {
                this._listeners = [];
              }
            }
          ]),
          e
        );
      })();
      const F = (function() {
        let e = 0;
        function t() {
          if (p.GlobalWorkerOptions.workerSrc)
            return p.GlobalWorkerOptions.workerSrc;
          if (void 0 !== S) return S;
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        function r() {
          try {
            if (typeof window !== "undefined") {
              return (
                window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler
              );
            }
          } catch (e) {}
          return null;
        }
        let n = void 0;
        const i = new WeakMap();
        function a() {
          const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.name;
          const r = void 0 === t ? null : t;
          const n = e.port;
          const a = void 0 === n ? null : n;
          const o = e.postMessageTransfers;
          const u = void 0 === o || o;
          const l = e.verbosity;
          const c = void 0 === l ? (0, s.getVerbosityLevel)() : l;
          if (a && i.has(a))
            throw new Error("Cannot use more than one PDFWorker per port");
          if (
            ((this.name = r),
            (this.destroyed = !1),
            (this.postMessageTransfers = !1 !== u),
            (this.verbosity = c),
            (this._readyCapability = (0, s.createPromiseCapability)()),
            (this._port = null),
            (this._webWorker = null),
            (this._messageHandler = null),
            a)
          )
            return i.set(a, this), void this._initializeFromPort(a);
          this._initialize();
        }
        return (
          (a.prototype = {
            get promise() {
              return this._readyCapability.promise;
            },
            get port() {
              return this._port;
            },
            get messageHandler() {
              return this._messageHandler;
            },
            _initializeFromPort(e) {
              (this._port = e),
                (this._messageHandler = new v.MessageHandler(
                  "main",
                  "worker",
                  e
                )),
                this._messageHandler.on("ready", () => {}),
                this._readyCapability.resolve();
            },
            _initialize() {
              let e;
              let n;
              const i = this;
              if (typeof Worker !== "undefined" && !A && !r()) {
                let a = t();
                try {
                  (0, s.isSameOrigin)(window.location.href, a) ||
                    ((e = new s.URL(a, window.location).href),
                    (n = `importScripts('${e}');`),
                    (a = s.URL.createObjectURL(new Blob([n]))));
                  const o = new Worker(a);
                  const u = new v.MessageHandler("main", "worker", o);
                  const l = function() {
                    o.removeEventListener("error", c),
                      u.destroy(),
                      o.terminate(),
                      i.destroyed
                        ? i._readyCapability.reject(
                            new Error("Worker was destroyed")
                          )
                        : i._setupFakeWorker();
                  };
                  var c = function() {
                    i._webWorker || l();
                  };
                  o.addEventListener("error", c),
                    u.on("test", e => {
                      o.removeEventListener("error", c),
                        i.destroyed
                          ? l()
                          : e && e.supportTypedArray
                          ? ((i._messageHandler = u),
                            (i._port = o),
                            (i._webWorker = o),
                            e.supportTransfers || (i.postMessageTransfers = !1),
                            i._readyCapability.resolve(),
                            u.send("configure", { verbosity: i.verbosity }))
                          : (i._setupFakeWorker(), u.destroy(), o.terminate());
                    }),
                    u.on("ready", e => {
                      if ((o.removeEventListener("error", c), i.destroyed)) l();
                      else {
                        try {
                          h();
                        } catch (e) {
                          i._setupFakeWorker();
                        }
                      }
                    });
                  var h = function() {
                    const e = new Uint8Array([
                      i.postMessageTransfers ? 255 : 0
                    ]);
                    try {
                      u.send("test", e, [e.buffer]);
                    } catch (t) {
                      (0, s.info)("Cannot use postMessage transfers"),
                        (e[0] = 0),
                        u.send("test", e);
                    }
                  };
                  return void h();
                } catch (e) {
                  (0, s.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            },
            _setupFakeWorker() {
              const i = this;
              A || ((0, s.warn)("Setting up fake worker."), (A = !0)),
                (function() {
                  if (n) return n.promise;
                  n = (0, s.createPromiseCapability)();
                  const e = r();
                  return e
                    ? (n.resolve(e), n.promise)
                    : ((w ||
                        function() {
                          return (0, u.loadScript)(t()).then(
                            () => window.pdfjsWorker.WorkerMessageHandler
                          );
                        })().then(n.resolve, n.reject),
                      n.promise);
                })()
                  .then(t => {
                    if (i.destroyed) {
                      i._readyCapability.reject(
                        new Error("Worker was destroyed")
                      );
                    } else {
                      const r = new I();
                      i._port = r;
                      const n = `fake${e++}`;
                      let a = new v.MessageHandler(`${n}_worker`, n, r);
                      t.setup(a, r);
                      const o = new v.MessageHandler(n, `${n}_worker`, r);
                      (i._messageHandler = o), i._readyCapability.resolve();
                    }
                  })
                  .catch(e => {
                    i._readyCapability.reject(
                      new Error(
                        `Setting up fake worker failed: "${e.message}".`
                      )
                    );
                  });
            },
            destroy() {
              (this.destroyed = !0),
                this._webWorker &&
                  (this._webWorker.terminate(), (this._webWorker = null)),
                i.delete(this._port),
                (this._port = null),
                this._messageHandler &&
                  (this._messageHandler.destroy(),
                  (this._messageHandler = null));
            }
          }),
          (a.fromPort = function(e) {
            if (!e || !e.port) {
              throw new Error("PDFWorker.fromPort - invalid method signature.");
            }
            return i.has(e.port) ? i.get(e.port) : new a(e);
          }),
          (a.getWorkerSrc = function() {
            return t();
          }),
          a
        );
      })();
      const L = (function() {
        function e(t, r, n, i) {
          b(this, e),
            (this.messageHandler = t),
            (this.loadingTask = r),
            (this.commonObjs = new j()),
            (this.fontLoader = new l.FontLoader(r.docId)),
            (this._params = i),
            (this.CMapReaderFactory = new i.CMapReaderFactory({
              baseUrl: i.cMapUrl,
              isCompressed: i.cMapPacked
            })),
            (this.destroyed = !1),
            (this.destroyCapability = null),
            (this._passwordCapability = null),
            (this._networkStream = n),
            (this._fullReader = null),
            (this._lastProgress = null),
            (this.pageCache = []),
            (this.pagePromises = []),
            (this.downloadInfoCapability = (0, s.createPromiseCapability)()),
            this.setupMessageHandler();
        }
        return (
          a(e, [
            {
              key: "destroy",
              value() {
                const e = this;
                if (this.destroyCapability)
                  return this.destroyCapability.promise;
                (this.destroyed = !0),
                  (this.destroyCapability = (0, s.createPromiseCapability)()),
                  this._passwordCapability &&
                    this._passwordCapability.reject(
                      new Error(
                        "Worker was destroyed during onPassword callback"
                      )
                    );
                const t = [];
                this.pageCache.forEach(e => {
                  e && t.push(e._destroy());
                }),
                  (this.pageCache = []),
                  (this.pagePromises = []);
                const r = this.messageHandler.sendWithPromise(
                  "Terminate",
                  null
                );
                return (
                  t.push(r),
                  Promise.all(t).then(() => {
                    e.fontLoader.clear(),
                      e._networkStream && e._networkStream.cancelAllRequests(),
                      e.messageHandler &&
                        (e.messageHandler.destroy(), (e.messageHandler = null)),
                      e.destroyCapability.resolve();
                  }, this.destroyCapability.reject),
                  this.destroyCapability.promise
                );
              }
            },
            {
              key: "setupMessageHandler",
              value() {
                const e = this.messageHandler;
                const t = this.loadingTask;
                e.on(
                  "GetReader",
                  function(e, t) {
                    const r = this;
                    (0, s.assert)(this._networkStream),
                      (this._fullReader = this._networkStream.getFullReader()),
                      (this._fullReader.onProgress = function(e) {
                        r._lastProgress = {
                          loaded: e.loaded,
                          total: e.total
                        };
                      }),
                      (t.onPull = function() {
                        r._fullReader
                          .read()
                          .then(e => {
                            const r = e.value;
                            e.done
                              ? t.close()
                              : ((0, s.assert)((0, s.isArrayBuffer)(r)),
                                t.enqueue(new Uint8Array(r), 1, [r]));
                          })
                          .catch(e => {
                            t.error(e);
                          });
                      }),
                      (t.onCancel = function(e) {
                        r._fullReader.cancel(e);
                      });
                  },
                  this
                ),
                  e.on(
                    "ReaderHeadersReady",
                    function(e) {
                      const r = this;
                      const n = (0, s.createPromiseCapability)();
                      const i = this._fullReader;
                      return (
                        i.headersReady.then(() => {
                          (i.isStreamingSupported && i.isRangeSupported) ||
                            (r._lastProgress &&
                              t.onProgress &&
                              t.onProgress(r._lastProgress),
                            (i.onProgress = function(e) {
                              t.onProgress &&
                                t.onProgress({
                                  loaded: e.loaded,
                                  total: e.total
                                });
                            })),
                            n.resolve({
                              isStreamingSupported: i.isStreamingSupported,
                              isRangeSupported: i.isRangeSupported,
                              contentLength: i.contentLength
                            });
                        }, n.reject),
                        n.promise
                      );
                    },
                    this
                  ),
                  e.on(
                    "GetRangeReader",
                    function(e, t) {
                      (0, s.assert)(this._networkStream);
                      const r = this._networkStream.getRangeReader(
                        e.begin,
                        e.end
                      );
                      (t.onPull = function() {
                        r.read()
                          .then(e => {
                            const r = e.value;
                            e.done
                              ? t.close()
                              : ((0, s.assert)((0, s.isArrayBuffer)(r)),
                                t.enqueue(new Uint8Array(r), 1, [r]));
                          })
                          .catch(e => {
                            t.error(e);
                          });
                      }),
                        (t.onCancel = function(e) {
                          r.cancel(e);
                        });
                    },
                    this
                  ),
                  e.on(
                    "GetDoc",
                    function(e) {
                      const r = e.pdfInfo;
                      (this.numPages = r.numPages),
                        (this.pdfDocument = new T(r, this, t)),
                        t._capability.resolve(this.pdfDocument);
                    },
                    this
                  ),
                  e.on(
                    "PasswordRequest",
                    function(e) {
                      const r = this;
                      if (
                        ((this._passwordCapability = (0,
                        s.createPromiseCapability)()),
                        t.onPassword)
                      ) {
                        try {
                          t.onPassword(e => {
                            r._passwordCapability.resolve({ password: e });
                          }, e.code);
                        } catch (e) {
                          this._passwordCapability.reject(e);
                        }
                      } else {
                        this._passwordCapability.reject(
                          new s.PasswordException(e.message, e.code)
                        );
                      }
                      return this._passwordCapability.promise;
                    },
                    this
                  ),
                  e.on(
                    "PasswordException",
                    e => {
                      t._capability.reject(
                        new s.PasswordException(e.message, e.code)
                      );
                    },
                    this
                  ),
                  e.on(
                    "InvalidPDF",
                    e => {
                      t._capability.reject(
                        new s.InvalidPDFException(e.message)
                      );
                    },
                    this
                  ),
                  e.on(
                    "MissingPDF",
                    e => {
                      t._capability.reject(
                        new s.MissingPDFException(e.message)
                      );
                    },
                    this
                  ),
                  e.on(
                    "UnexpectedResponse",
                    e => {
                      t._capability.reject(
                        new s.UnexpectedResponseException(e.message, e.status)
                      );
                    },
                    this
                  ),
                  e.on(
                    "UnknownError",
                    e => {
                      t._capability.reject(
                        new s.UnknownErrorException(e.message, e.details)
                      );
                    },
                    this
                  ),
                  e.on(
                    "DataLoaded",
                    function(e) {
                      t.onProgress &&
                        t.onProgress({ loaded: e.length, total: e.length }),
                        this.downloadInfoCapability.resolve(e);
                    },
                    this
                  ),
                  e.on(
                    "StartRenderPage",
                    function(e) {
                      if (!this.destroyed) {
                        const t = this.pageCache[e.pageIndex];
                        t._stats.timeEnd("Page Request"),
                          t._startRenderPage(e.transparency, e.intent);
                      }
                    },
                    this
                  ),
                  e.on(
                    "RenderPageChunk",
                    function(e) {
                      this.destroyed ||
                        this.pageCache[e.pageIndex]._renderPageChunk(
                          e.operatorList,
                          e.intent
                        );
                    },
                    this
                  ),
                  e.on(
                    "commonobj",
                    function(e) {
                      const t = this;
                      if (!this.destroyed) {
                        const r = i(e, 3);
                        const n = r[0];
                        const a = r[1];
                        const o = r[2];
                        if (!this.commonObjs.hasData(n)) {
                          switch (a) {
                            case "Font":
                              var u = this._params;
                              if ("error" in o) {
                                let c = o.error;
                                (0, s.warn)("Error during font loading: " + c),
                                  this.commonObjs.resolve(n, c);
                                break;
                              }
                              var h = null;
                              u.pdfBug &&
                                f.default.FontInspector &&
                                f.default.FontInspector.enabled &&
                                (h = {
                                  registerFont(e, t) {
                                    f.default.FontInspector.fontAdded(e, t);
                                  }
                                });
                              var d = new l.FontFaceObject(o, {
                                isEvalSupported: u.isEvalSupported,
                                disableFontFace: u.disableFontFace,
                                ignoreErrors: u.ignoreErrors,
                                onUnsupportedFeature: this._onUnsupportedFeature.bind(
                                  this
                                ),
                                fontRegistry: h
                              });
                              this.fontLoader.bind([d], e => {
                                t.commonObjs.resolve(n, d);
                              });
                              break;
                            case "FontPath":
                              this.commonObjs.resolve(n, o);
                              break;
                            default:
                              throw new Error(
                                "Got unknown common object type " + a
                              );
                          }
                        }
                      }
                    },
                    this
                  ),
                  e.on(
                    "obj",
                    function(e) {
                      if (!this.destroyed) {
                        const t = i(e, 4);
                        const r = t[0];
                        const n = t[1];
                        const a = t[2];
                        const o = t[3];
                        const s = this.pageCache[n];
                        if (!s.objs.hasData(r)) {
                          switch (a) {
                            case "JpegStream":
                              return new Promise((e, t) => {
                                let r = new Image();
                                (r.onload = function() {
                                  e(r);
                                }),
                                  (r.onerror = function() {
                                    t(
                                      new Error(
                                        "Error during JPEG image loading"
                                      )
                                    );
                                  }),
                                  (r.src = o);
                              }).then(e => {
                                s.objs.resolve(r, e);
                              });
                            case "Image":
                              s.objs.resolve(r, o);
                              o &&
                                "data" in o &&
                                o.data.length > 8e6 &&
                                (s.cleanupAfterRender = !0);
                              break;
                            default:
                              throw new Error(`Got unknown object type ${a}`);
                          }
                        }
                      }
                    },
                    this
                  ),
                  e.on(
                    "DocProgress",
                    function(e) {
                      this.destroyed ||
                        (t.onProgress &&
                          t.onProgress({ loaded: e.loaded, total: e.total }));
                    },
                    this
                  ),
                  e.on(
                    "PageError",
                    function(e) {
                      if (!this.destroyed) {
                        const t = this.pageCache[e.pageNum - 1].intentStates[
                          e.intent
                        ];
                        if (!t.displayReadyCapability) throw new Error(e.error);
                        if (
                          (t.displayReadyCapability.reject(e.error),
                          t.operatorList)
                        ) {
                          t.operatorList.lastChunk = !0;
                          for (let r = 0; r < t.renderTasks.length; r++)
                            t.renderTasks[r].operatorListChanged();
                        }
                      }
                    },
                    this
                  ),
                  e.on("UnsupportedFeature", this._onUnsupportedFeature, this),
                  e.on(
                    "JpegDecode",
                    function(e) {
                      if (this.destroyed) {
                        return Promise.reject(
                          new Error("Worker was destroyed")
                        );
                      }
                      if (typeof document === "undefined") {
                        return Promise.reject(
                          new Error('"document" is not defined.')
                        );
                      }
                      const t = i(e, 2);
                      const r = t[0];
                      const n = t[1];
                      return n !== 3 && n !== 1
                        ? Promise.reject(
                            new Error(
                              "Only 3 components or 1 component can be returned"
                            )
                          )
                        : new Promise((e, t) => {
                            const i = new Image();
                            (i.onload = function() {
                              const t = i.width;
                              let r = i.height;
                              let a = t * r;
                              let o = 4 * a;
                              let s = new Uint8ClampedArray(a * n);
                              let u = document.createElement("canvas");
                              (u.width = t), (u.height = r);
                              const l = u.getContext("2d");
                              l.drawImage(i, 0, 0);
                              const c = l.getImageData(0, 0, t, r).data;
                              if (n === 3) {
                                for (let h = 0, d = 0; h < o; h += 4, d += 3) {
                                  (s[d] = c[h]),
                                    (s[d + 1] = c[h + 1]),
                                    (s[d + 2] = c[h + 2]);
                                }
                              } else if (n === 1)
                                for (let f = 0, p = 0; f < o; f += 4, p++)
                                  s[p] = c[f];
                              e({ data: s, width: t, height: r });
                            }),
                              (i.onerror = function() {
                                t(new Error("JpegDecode failed to load image"));
                              }),
                              (i.src = r);
                          });
                    },
                    this
                  ),
                  e.on(
                    "FetchBuiltInCMap",
                    function(e) {
                      return this.destroyed
                        ? Promise.reject(new Error("Worker was destroyed"))
                        : this.CMapReaderFactory.fetch({ name: e.name });
                    },
                    this
                  );
              }
            },
            {
              key: "_onUnsupportedFeature",
              value(e) {
                const t = e.featureId;
                this.destroyed ||
                  (this.loadingTask.onUnsupportedFeature &&
                    this.loadingTask.onUnsupportedFeature(t));
              }
            },
            {
              key: "getData",
              value() {
                return this.messageHandler.sendWithPromise("GetData", null);
              }
            },
            {
              key: "getPage",
              value(e) {
                const t = this;
                if (!Number.isInteger(e) || e <= 0 || e > this.numPages)
                  return Promise.reject(new Error("Invalid page request"));
                const r = e - 1;
                if (r in this.pagePromises) return this.pagePromises[r];
                const n = this.messageHandler
                  .sendWithPromise("GetPage", { pageIndex: r })
                  .then(e => {
                    if (t.destroyed) throw new Error("Transport destroyed");
                    const n = new O(r, e, t, t._params.pdfBug);
                    return (t.pageCache[r] = n), n;
                  });
                return (this.pagePromises[r] = n), n;
              }
            },
            {
              key: "getPageIndex",
              value(e) {
                return this.messageHandler
                  .sendWithPromise("GetPageIndex", { ref: e })
                  .catch(e => Promise.reject(new Error(e)));
              }
            },
            {
              key: "getAnnotations",
              value(e, t) {
                return this.messageHandler.sendWithPromise("GetAnnotations", {
                  pageIndex: e,
                  intent: t
                });
              }
            },
            {
              key: "getDestinations",
              value() {
                return this.messageHandler.sendWithPromise(
                  "GetDestinations",
                  null
                );
              }
            },
            {
              key: "getDestination",
              value(e) {
                return typeof e !== "string"
                  ? Promise.reject(new Error("Invalid destination request."))
                  : this.messageHandler.sendWithPromise("GetDestination", {
                      id: e
                    });
              }
            },
            {
              key: "getPageLabels",
              value() {
                return this.messageHandler.sendWithPromise(
                  "GetPageLabels",
                  null
                );
              }
            },
            {
              key: "getPageMode",
              value() {
                return this.messageHandler.sendWithPromise("GetPageMode", null);
              }
            },
            {
              key: "getAttachments",
              value() {
                return this.messageHandler.sendWithPromise(
                  "GetAttachments",
                  null
                );
              }
            },
            {
              key: "getJavaScript",
              value() {
                return this.messageHandler.sendWithPromise(
                  "GetJavaScript",
                  null
                );
              }
            },
            {
              key: "getOutline",
              value() {
                return this.messageHandler.sendWithPromise("GetOutline", null);
              }
            },
            {
              key: "getPermissions",
              value() {
                return this.messageHandler.sendWithPromise(
                  "GetPermissions",
                  null
                );
              }
            },
            {
              key: "getMetadata",
              value() {
                const e = this;
                return this.messageHandler
                  .sendWithPromise("GetMetadata", null)
                  .then(t => ({
                    info: t[0],
                    metadata: t[1] ? new m.Metadata(t[1]) : null,
                    contentDispositionFilename: e._fullReader
                      ? e._fullReader.filename
                      : null
                  }));
              }
            },
            {
              key: "getStats",
              value() {
                return this.messageHandler.sendWithPromise("GetStats", null);
              }
            },
            {
              key: "startCleanup",
              value() {
                const e = this;
                this.messageHandler
                  .sendWithPromise("Cleanup", null)
                  .then(() => {
                    for (let t = 0, r = e.pageCache.length; t < r; t++) {
                      const n = e.pageCache[t];
                      n && n.cleanup();
                    }
                    e.commonObjs.clear(), e.fontLoader.clear();
                  });
              }
            },
            {
              key: "loadingParams",
              get() {
                const e = this._params;
                return (0, s.shadow)(this, "loadingParams", {
                  disableAutoFetch: e.disableAutoFetch,
                  disableCreateObjectURL: e.disableCreateObjectURL,
                  disableFontFace: e.disableFontFace,
                  nativeImageDecoderSupport: e.nativeImageDecoderSupport
                });
              }
            }
          ]),
          e
        );
      })();
      var j = (function() {
        function e() {
          this.objs = Object.create(null);
        }
        return (
          (e.prototype = {
            ensureObj(e) {
              if (this.objs[e]) return this.objs[e];
              const t = {
                capability: (0, s.createPromiseCapability)(),
                data: null,
                resolved: !1
              };
              return (this.objs[e] = t), t;
            },
            get(e, t) {
              if (t) return this.ensureObj(e).capability.promise.then(t), null;
              const r = this.objs[e];
              if (!r || !r.resolved) {
                throw new Error(
                  "Requesting object that isn't resolved yet " + e
                );
              }
              return r.data;
            },
            resolve(e, t) {
              const r = this.ensureObj(e);
              (r.resolved = !0), (r.data = t), r.capability.resolve(t);
            },
            isResolved(e) {
              const t = this.objs;
              return !!t[e] && t[e].resolved;
            },
            hasData(e) {
              return this.isResolved(e);
            },
            getData(e) {
              const t = this.objs;
              return t[e] && t[e].resolved ? t[e].data : null;
            },
            clear() {
              this.objs = Object.create(null);
            }
          }),
          e
        );
      })();
      const M = (function() {
        function e(e) {
          (this._internalRenderTask = e), (this.onContinue = null);
        }
        return (
          (e.prototype = {
            get promise() {
              return this._internalRenderTask.capability.promise;
            },
            cancel() {
              this._internalRenderTask.cancel();
            },
            then(e, t) {
              return this.promise.then.apply(this.promise, arguments);
            }
          }),
          e
        );
      })();
      var D = (function() {
        const e = new WeakMap();
        function t(e, t, r, n, i, a, o, u) {
          const l =
            arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
          (this.callback = e),
            (this.params = t),
            (this.objs = r),
            (this.commonObjs = n),
            (this.operatorListIdx = null),
            (this.operatorList = i),
            (this.pageNumber = a),
            (this.canvasFactory = o),
            (this.webGLContext = u),
            (this._pdfBug = l),
            (this.running = !1),
            (this.graphicsReadyCallback = null),
            (this.graphicsReady = !1),
            (this.useRequestAnimationFrame = !1),
            (this.cancelled = !1),
            (this.capability = (0, s.createPromiseCapability)()),
            (this.task = new M(this)),
            (this._continueBound = this._continue.bind(this)),
            (this._scheduleNextBound = this._scheduleNext.bind(this)),
            (this._nextBound = this._next.bind(this)),
            (this._canvas = t.canvasContext.canvas);
        }
        return (
          (t.prototype = {
            initializeGraphics(t) {
              if (!this.cancelled) {
                if (this._canvas) {
                  if (e.has(this._canvas)) {
                    throw new Error(
                      "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                    );
                  }
                  e.set(this._canvas, this);
                }
                this._pdfBug &&
                  f.default.StepperManager &&
                  f.default.StepperManager.enabled &&
                  ((this.stepper = f.default.StepperManager.create(
                    this.pageNumber - 1
                  )),
                  this.stepper.init(this.operatorList),
                  (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
                const r = this.params;
                (this.gfx = new h.CanvasGraphics(
                  r.canvasContext,
                  this.commonObjs,
                  this.objs,
                  this.canvasFactory,
                  this.webGLContext,
                  r.imageLayer
                )),
                  this.gfx.beginDrawing({
                    transform: r.transform,
                    viewport: r.viewport,
                    transparency: t,
                    background: r.background
                  }),
                  (this.operatorListIdx = 0),
                  (this.graphicsReady = !0),
                  this.graphicsReadyCallback && this.graphicsReadyCallback();
              }
            },
            cancel() {
              (this.running = !1),
                (this.cancelled = !0),
                this._canvas && e.delete(this._canvas),
                this.callback(
                  new u.RenderingCancelledException(
                    `Rendering cancelled, page ${this.pageNumber}`,
                    "canvas"
                  )
                );
            },
            operatorListChanged() {
              this.graphicsReady
                ? (this.stepper &&
                    this.stepper.updateOperatorList(this.operatorList),
                  this.running || this._continue())
                : this.graphicsReadyCallback ||
                  (this.graphicsReadyCallback = this._continueBound);
            },
            _continue() {
              (this.running = !0),
                this.cancelled ||
                  (this.task.onContinue
                    ? this.task.onContinue(this._scheduleNextBound)
                    : this._scheduleNext());
            },
            _scheduleNext() {
              const e = this;
              this.useRequestAnimationFrame && typeof window !== "undefined"
                ? window.requestAnimationFrame(() => {
                    e._nextBound().catch(e.callback);
                  })
                : Promise.resolve()
                    .then(this._nextBound)
                    .catch(this.callback);
            },
            _next() {
              const t = this;
              return new Promise(() => {
                t.cancelled ||
                  ((t.operatorListIdx = t.gfx.executeOperatorList(
                    t.operatorList,
                    t.operatorListIdx,
                    t._continueBound,
                    t.stepper
                  )),
                  t.operatorListIdx === t.operatorList.argsArray.length &&
                    ((t.running = !1),
                    t.operatorList.lastChunk &&
                      (t.gfx.endDrawing(),
                      t._canvas && e.delete(t._canvas),
                      t.callback())));
              });
            }
          }),
          t
        );
      })();
      (t.version = "2.0.943"),
        (t.build = "dc98bf76"),
        (t.getDocument = function(e) {
          let t;
          const r = new R();
          if (typeof e === "string") t = { url: e };
          else if ((0, s.isArrayBuffer)(e)) t = { data: e };
          else if (e instanceof E) t = { range: e };
          else {
            if ((void 0 === e ? "undefined" : o(e)) !== "object") {
              throw new Error(
                "Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"
              );
            }
            if (!e.url && !e.data && !e.range) {
              throw new Error(
                "Invalid parameter object: need either .data, .range or .url"
              );
            }
            t = e;
          }
          const n = Object.create(null);
          let i = null;
          let a = null;
          for (const l in t) {
            if (l !== "url" || typeof window === "undefined") {
              if (l !== "range") {
                if (l !== "worker") {
                  if (l !== "data" || t[l] instanceof Uint8Array) n[l] = t[l];
                  else {
                    var h = t[l];
                    if (typeof h === "string") n[l] = (0, s.stringToBytes)(h);
                    else if (
                      "object" !== (void 0 === h ? "undefined" : o(h)) ||
                      h === null ||
                      isNaN(h.length)
                    ) {
                      if (!(0, s.isArrayBuffer)(h)) {
                        throw new Error(
                          "Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."
                        );
                      }
                      n[l] = new Uint8Array(h);
                    } else n[l] = new Uint8Array(h);
                  }
                } else a = t[l];
              } else i = t[l];
            } else n[l] = new s.URL(t[l], window.location).href;
          }
          (n.rangeChunkSize = n.rangeChunkSize || _),
            (n.CMapReaderFactory =
              n.CMapReaderFactory || u.DOMCMapReaderFactory),
            (n.ignoreErrors = !0 !== n.stopAtErrors),
            (n.pdfBug = !0 === n.pdfBug);
          const d = Object.values(s.NativeImageDecoding);
          if (
            ((void 0 !== n.nativeImageDecoderSupport &&
              d.includes(n.nativeImageDecoderSupport)) ||
              (n.nativeImageDecoderSupport =
                c.apiCompatibilityParams.nativeImageDecoderSupport ||
                s.NativeImageDecoding.DECODE),
            Number.isInteger(n.maxImageSize) || (n.maxImageSize = -1),
            typeof n.isEvalSupported !== "boolean" && (n.isEvalSupported = !0),
            typeof n.disableFontFace !== "boolean" &&
              (n.disableFontFace =
                c.apiCompatibilityParams.disableFontFace || !1),
            typeof n.disableRange !== "boolean" && (n.disableRange = !1),
            typeof n.disableStream !== "boolean" && (n.disableStream = !1),
            typeof n.disableAutoFetch !== "boolean" &&
              (n.disableAutoFetch = !1),
            typeof n.disableCreateObjectURL !== "boolean" &&
              (n.disableCreateObjectURL =
                c.apiCompatibilityParams.disableCreateObjectURL || !1),
            (0, s.setVerbosityLevel)(n.verbosity),
            !a)
          ) {
            const f = {
              postMessageTransfers: n.postMessageTransfers,
              verbosity: n.verbosity
            };
            const m = p.GlobalWorkerOptions.workerPort;
            m ? ((f.port = m), (a = F.fromPort(f))) : (a = new F(f)),
              (r._worker = a);
          }
          const y = r.docId;
          return (
            a.promise
              .then(() => {
                if (r.destroyed) throw new Error("Loading aborted");
                return (function(e, t, r, n) {
                  return e.destroyed
                    ? Promise.reject(new Error("Worker was destroyed"))
                    : (r &&
                        ((t.length = r.length),
                        (t.initialData = r.initialData)),
                      e.messageHandler
                        .sendWithPromise("GetDocRequest", {
                          docId: n,
                          apiVersion: "2.0.943",
                          source: {
                            data: t.data,
                            url: t.url,
                            password: t.password,
                            disableAutoFetch: t.disableAutoFetch,
                            rangeChunkSize: t.rangeChunkSize,
                            length: t.length
                          },
                          maxImageSize: t.maxImageSize,
                          disableFontFace: t.disableFontFace,
                          disableCreateObjectURL: t.disableCreateObjectURL,
                          postMessageTransfers: e.postMessageTransfers,
                          docBaseUrl: t.docBaseUrl,
                          nativeImageDecoderSupport:
                            t.nativeImageDecoderSupport,
                          ignoreErrors: t.ignoreErrors,
                          isEvalSupported: t.isEvalSupported
                        })
                        .then(t => {
                          if (e.destroyed)
                            throw new Error("Worker was destroyed");
                          return t;
                        }));
                })(a, n, i, y).then(e => {
                  if (r.destroyed) throw new Error("Loading aborted");
                  let t = void 0;
                  i
                    ? (t = new g.PDFDataTransportStream(
                        {
                          length: n.length,
                          initialData: n.initialData,
                          disableRange: n.disableRange,
                          disableStream: n.disableStream
                        },
                        i
                      ))
                    : n.data ||
                      (t = P({
                        url: n.url,
                        length: n.length,
                        httpHeaders: n.httpHeaders,
                        withCredentials: n.withCredentials,
                        rangeChunkSize: n.rangeChunkSize,
                        disableRange: n.disableRange,
                        disableStream: n.disableStream
                      }));
                  const o = new v.MessageHandler(y, e, a.port);
                  o.postMessageTransfers = a.postMessageTransfers;
                  const s = new L(o, r, t, n);
                  (r._transport = s), o.send("Ready", null);
                });
              })
              .catch(r._capability.reject),
            r
          );
        }),
        (t.LoopbackPort = I),
        (t.PDFDataRangeTransport = E),
        (t.PDFWorker = F),
        (t.PDFDocumentProxy = T),
        (t.PDFPageProxy = O),
        (t.setPDFNetworkStreamFactory = function(e) {
          P = e;
        }),
        (t.version = "2.0.943"),
        (t.build = "dc98bf76");
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadScript = t.DummyStatTimer = t.StatTimer = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.LinkTarget = t.getFilenameFromUrl = t.addLinkAttributes = t.RenderingCancelledException = t.PageViewport = void 0);
      const n = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const i = r(1);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      const o = "noopener noreferrer nofollow";
      const s = "http://www.w3.org/2000/svg";
      const u = (function() {
        function e() {
          a(this, e);
        }
        return (
          n(e, [
            {
              key: "create",
              value(e, t) {
                if (e <= 0 || t <= 0) throw new Error("invalid canvas size");
                const r = document.createElement("canvas");
                const n = r.getContext("2d");
                return (r.width = e), (r.height = t), { canvas: r, context: n };
              }
            },
            {
              key: "reset",
              value(e, t, r) {
                if (!e.canvas) throw new Error("canvas is not specified");
                if (t <= 0 || r <= 0) throw new Error("invalid canvas size");
                (e.canvas.width = t), (e.canvas.height = r);
              }
            },
            {
              key: "destroy",
              value(e) {
                if (!e.canvas) throw new Error("canvas is not specified");
                (e.canvas.width = 0),
                  (e.canvas.height = 0),
                  (e.canvas = null),
                  (e.context = null);
              }
            }
          ]),
          e
        );
      })();
      const l = (function() {
        function e(t) {
          const r = t.baseUrl;
          const n = void 0 === r ? null : r;
          const i = t.isCompressed;
          const o = void 0 !== i && i;
          a(this, e), (this.baseUrl = n), (this.isCompressed = o);
        }
        return (
          n(e, [
            {
              key: "fetch",
              value(e) {
                const t = this;
                const r = e.name;
                return this.baseUrl
                  ? r
                    ? new Promise((e, n) => {
                        const a =
                          t.baseUrl + r + (t.isCompressed ? ".bcmap" : "");
                        let o = new XMLHttpRequest();
                        o.open("GET", a, !0),
                          t.isCompressed && (o.responseType = "arraybuffer"),
                          (o.onreadystatechange = function() {
                            if (o.readyState === XMLHttpRequest.DONE) {
                              if (o.status === 200 || o.status === 0) {
                                let r = void 0;
                                if (
                                  (t.isCompressed && o.response
                                    ? (r = new Uint8Array(o.response))
                                    : !t.isCompressed &&
                                      o.responseText &&
                                      (r = (0, i.stringToBytes)(
                                        o.responseText
                                      )),
                                  r)
                                ) {
                                  return void e({
                                    cMapData: r,
                                    compressionType: t.isCompressed
                                      ? i.CMapCompressionType.BINARY
                                      : i.CMapCompressionType.NONE
                                  });
                                }
                              }
                              n(
                                new Error(
                                  `Unable to load ${
                                    t.isCompressed ? "binary " : ""
                                  }CMap at: ${a}`
                                )
                              );
                            }
                          }),
                          o.send(null);
                      })
                    : Promise.reject(new Error("CMap name must be specified."))
                  : Promise.reject(
                      new Error(
                        'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                      )
                    );
              }
            }
          ]),
          e
        );
      })();
      const c = (function() {
        function e() {
          a(this, e);
        }
        return (
          n(e, [
            {
              key: "create",
              value(e, t) {
                (0, i.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
                const r = document.createElementNS(s, "svg:svg");
                return (
                  r.setAttribute("version", "1.1"),
                  r.setAttribute("width", `${e}px`),
                  r.setAttribute("height", `${t}px`),
                  r.setAttribute("preserveAspectRatio", "none"),
                  r.setAttribute("viewBox", `0 0 ${e} ${t}`),
                  r
                );
              }
            },
            {
              key: "createElement",
              value(e) {
                return (
                  (0, i.assert)(
                    typeof e === "string",
                    "Invalid SVG element type"
                  ),
                  document.createElementNS(s, e)
                );
              }
            }
          ]),
          e
        );
      })();
      const h = (function() {
        function e(t) {
          const r = t.viewBox;
          const n = t.scale;
          let i = t.rotation;
          const o = t.offsetX;
          const s = void 0 === o ? 0 : o;
          const u = t.offsetY;
          const l = void 0 === u ? 0 : u;
          const c = t.dontFlip;
          const h = void 0 !== c && c;
          a(this, e),
            (this.viewBox = r),
            (this.scale = n),
            (this.rotation = i),
            (this.offsetX = s),
            (this.offsetY = l);
          const d = (r[2] + r[0]) / 2;
          const f = (r[3] + r[1]) / 2;
          let p = void 0;
          let v = void 0;
          let m = void 0;
          let g = void 0;
          switch ((i = (i %= 360) < 0 ? i + 360 : i)) {
            case 180:
              (p = -1), (v = 0), (m = 0), (g = 1);
              break;
            case 90:
              (p = 0), (v = 1), (m = 1), (g = 0);
              break;
            case 270:
              (p = 0), (v = -1), (m = -1), (g = 0);
              break;
            default:
              (p = 1), (v = 0), (m = 0), (g = -1);
          }
          h && ((m = -m), (g = -g));
          let y = void 0;
          let b = void 0;
          let _ = void 0;
          let A = void 0;
          p === 0
            ? ((y = Math.abs(f - r[1]) * n + s),
              (b = Math.abs(d - r[0]) * n + l),
              (_ = Math.abs(r[3] - r[1]) * n),
              (A = Math.abs(r[2] - r[0]) * n))
            : ((y = Math.abs(d - r[0]) * n + s),
              (b = Math.abs(f - r[1]) * n + l),
              (_ = Math.abs(r[2] - r[0]) * n),
              (A = Math.abs(r[3] - r[1]) * n)),
            (this.transform = [
              p * n,
              v * n,
              m * n,
              g * n,
              y - p * n * d - m * n * f,
              b - v * n * d - g * n * f
            ]),
            (this.width = _),
            (this.height = A);
        }
        return (
          n(e, [
            {
              key: "clone",
              value() {
                const t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const r = t.scale;
                const n = void 0 === r ? this.scale : r;
                const i = t.rotation;
                const a = void 0 === i ? this.rotation : i;
                const o = t.dontFlip;
                const s = void 0 !== o && o;
                return new e({
                  viewBox: this.viewBox.slice(),
                  scale: n,
                  rotation: a,
                  offsetX: this.offsetX,
                  offsetY: this.offsetY,
                  dontFlip: s
                });
              }
            },
            {
              key: "convertToViewportPoint",
              value(e, t) {
                return i.Util.applyTransform([e, t], this.transform);
              }
            },
            {
              key: "convertToViewportRectangle",
              value(e) {
                const t = i.Util.applyTransform([e[0], e[1]], this.transform);
                const r = i.Util.applyTransform([e[2], e[3]], this.transform);
                return [t[0], t[1], r[0], r[1]];
              }
            },
            {
              key: "convertToPdfPoint",
              value(e, t) {
                return i.Util.applyInverseTransform([e, t], this.transform);
              }
            }
          ]),
          e
        );
      })();
      const d = (function() {
        function e(e, t) {
          (this.message = e), (this.type = t);
        }
        return (
          (e.prototype = new Error()),
          (e.prototype.name = "RenderingCancelledException"),
          (e.constructor = e),
          e
        );
      })();
      const f = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4
      };
      const p = ["", "_self", "_blank", "_parent", "_top"];
      const v = (function() {
        function e() {
          const t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          a(this, e),
            (this.enabled = !!t),
            (this.started = Object.create(null)),
            (this.times = []);
        }
        return (
          n(e, [
            {
              key: "time",
              value(e) {
                this.enabled &&
                  (e in this.started &&
                    (0, i.warn)(`Timer is already running for ${e}`),
                  (this.started[e] = Date.now()));
              }
            },
            {
              key: "timeEnd",
              value(e) {
                this.enabled &&
                  (e in this.started ||
                    (0, i.warn)(`Timer has not been started for ${e}`),
                  this.times.push({
                    name: e,
                    start: this.started[e],
                    end: Date.now()
                  }),
                  delete this.started[e]);
              }
            },
            {
              key: "toString",
              value() {
                for (
                  var e = this.times, t = "", r = 0, n = 0, i = e.length;
                  n < i;
                  ++n
                ) {
                  const a = e[n].name;
                  a.length > r && (r = a.length);
                }
                for (let o = 0, s = e.length; o < s; ++o) {
                  const u = e[o];
                  const l = u.end - u.start;
                  t += `${u.name.padEnd(r)} ${l}ms\n`;
                }
                return t;
              }
            }
          ]),
          e
        );
      })();
      const m = (function() {
        function e() {
          a(this, e), (0, i.unreachable)("Cannot initialize DummyStatTimer.");
        }
        return (
          n(e, null, [
            { key: "time", value(e) {} },
            { key: "timeEnd", value(e) {} },
            {
              key: "toString",
              value() {
                return "";
              }
            }
          ]),
          e
        );
      })();
      (t.PageViewport = h),
        (t.RenderingCancelledException = d),
        (t.addLinkAttributes = function(e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = t.url;
          const n = t.target;
          const a = t.rel;
          if (
            ((e.href = e.title = r ? (0, i.removeNullCharacters)(r) : ""), r)
          ) {
            const s = Object.values(f).includes(n) ? n : f.NONE;
            (e.target = p[s]), (e.rel = typeof a === "string" ? a : o);
          }
        }),
        (t.getFilenameFromUrl = function(e) {
          const t = e.indexOf("#");
          const r = e.indexOf("?");
          const n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
          return e.substring(e.lastIndexOf("/", n) + 1, n);
        }),
        (t.LinkTarget = f),
        (t.DEFAULT_LINK_REL = o),
        (t.DOMCanvasFactory = u),
        (t.DOMCMapReaderFactory = l),
        (t.DOMSVGFactory = c),
        (t.StatTimer = v),
        (t.DummyStatTimer = m),
        (t.loadScript = function(e) {
          return new Promise((t, r) => {
            const n = document.createElement("script");
            (n.src = e),
              (n.onload = t),
              (n.onerror = function() {
                r(new Error(`Cannot load script at: ${n.src}`));
              }),
              (document.head || document.documentElement).appendChild(n);
          });
        });
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FontLoader = t.FontFaceObject = void 0);
      const n = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const i = r(1);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      let o;
      const s = (function() {
        function e(t) {
          a(this, e),
            this.constructor === e &&
              (0, i.unreachable)("Cannot initialize BaseFontLoader."),
            (this.docId = t),
            (this.nativeFontFaces = []),
            (this.styleElement = null),
            (this.loadingContext = { requests: [], nextRequestId: 0 });
        }
        return (
          n(e, [
            {
              key: "addNativeFontFace",
              value(e) {
                this.nativeFontFaces.push(e), document.fonts.add(e);
              }
            },
            {
              key: "insertRule",
              value(e) {
                let t = this.styleElement;
                t ||
                  (((t = this.styleElement = document.createElement(
                    "style"
                  )).id = `PDFJS_FONT_STYLE_TAG_${this.docId}`),
                  document.documentElement
                    .getElementsByTagName("head")[0]
                    .appendChild(t));
                const r = t.sheet;
                r.insertRule(e, r.cssRules.length);
              }
            },
            {
              key: "clear",
              value() {
                this.nativeFontFaces.forEach(e => {
                  document.fonts.delete(e);
                }),
                  (this.nativeFontFaces.length = 0),
                  this.styleElement &&
                    (this.styleElement.remove(), (this.styleElement = null));
              }
            },
            {
              key: "bind",
              value(e, t) {
                const r = [];
                const n = [];
                const a = [];
                const o = function(e) {
                  return e.loaded.catch(t => {
                    (0, i.warn)(`Failed to load font "${e.family}": ${t}`);
                  });
                };
                let s = !0;
                let u = !1;
                let l = void 0;
                try {
                  for (
                    var c, h = e[Symbol.iterator]();
                    !(s = (c = h.next()).done);
                    s = !0
                  ) {
                    const d = c.value;
                    if (!d.attached && !d.missingFile) {
                      if (((d.attached = !0), this.isFontLoadingAPISupported)) {
                        let f = d.createNativeFontFace();
                        f && (this.addNativeFontFace(f), a.push(o(f)));
                      } else {
                        let p = d.createFontFaceRule();
                        p && (this.insertRule(p), r.push(p), n.push(d));
                      }
                    }
                  }
                } catch (e) {
                  (u = !0), (l = e);
                } finally {
                  try {
                    !s && h.return && h.return();
                  } finally {
                    if (u) throw l;
                  }
                }
                const v = this._queueLoadingCallback(t);
                this.isFontLoadingAPISupported
                  ? Promise.all(a).then(v.complete)
                  : r.length > 0 && !this.isSyncFontLoadingSupported
                  ? this._prepareFontLoadEvent(r, n, v)
                  : v.complete();
              }
            },
            {
              key: "_queueLoadingCallback",
              value(e) {
                const t = this.loadingContext;
                var r = {
                  id: `pdfjs-font-loading-${t.nextRequestId++}`,
                  done: !1,
                  complete() {
                    for (
                      (0, i.assert)(
                        !r.done,
                        "completeRequest() cannot be called twice."
                      ),
                        r.done = !0;
                      t.requests.length > 0 && t.requests[0].done;

                    ) {
                      const e = t.requests.shift();
                      setTimeout(e.callback, 0);
                    }
                  },
                  callback: e
                };
                return t.requests.push(r), r;
              }
            },
            {
              key: "_prepareFontLoadEvent",
              value(e, t, r) {
                (0, i.unreachable)("Abstract method `_prepareFontLoadEvent`.");
              }
            },
            {
              key: "isFontLoadingAPISupported",
              get() {
                (0, i.unreachable)(
                  "Abstract method `isFontLoadingAPISupported`."
                );
              }
            },
            {
              key: "isSyncFontLoadingSupported",
              get() {
                (0, i.unreachable)(
                  "Abstract method `isSyncFontLoadingSupported`."
                );
              }
            },
            {
              key: "_loadTestFont",
              get() {
                (0, i.unreachable)("Abstract method `_loadTestFont`.");
              }
            }
          ]),
          e
        );
      })();
      t.FontLoader = o = (function(e) {
        function t(e) {
          a(this, t);
          const r = (function(e, t) {
            if (!e) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return !t || (typeof t !== "object" && typeof t !== "function")
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (r.loadTestFontId = 0), r;
        }
        return (
          (function(e, t) {
            if (typeof t !== "function" && t !== null) {
              throw new TypeError(
                `Super expression must either be null or a function, not ${typeof t}`
              );
            }
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, s),
          n(t, [
            {
              key: "_prepareFontLoadEvent",
              value(e, t, r) {
                function n(e, t) {
                  return (
                    (e.charCodeAt(t) << 24) |
                    (e.charCodeAt(t + 1) << 16) |
                    (e.charCodeAt(t + 2) << 8) |
                    (255 & e.charCodeAt(t + 3))
                  );
                }
                function a(e, t, r, n) {
                  return e.substring(0, t) + n + e.substring(t + r);
                }
                let o = void 0;
                let s = void 0;
                const u = document.createElement("canvas");
                (u.width = 1), (u.height = 1);
                const l = u.getContext("2d");
                let c = 0;
                const h = `lt${Date.now()}${this.loadTestFontId++}`;
                let d = this._loadTestFont;
                let f = n((d = a(d, 976, h.length, h)), 16);
                for (o = 0, s = h.length - 3; o < s; o += 4)
                  f = (f - 1482184792 + n(h, o)) | 0;
                o < h.length && (f = (f - 1482184792 + n(`${h}XXX`, o)) | 0),
                  (d = a(d, 16, 4, (0, i.string32)(f)));
                const p =
                  `@font-face {font-family:"${h}";src:` +
                  `url(data:font/opentype;base64,${btoa(d)});` +
                  "}";
                this.insertRule(p);
                const v = [];
                for (o = 0, s = t.length; o < s; o++) v.push(t[o].loadedName);
                v.push(h);
                const m = document.createElement("div");
                for (
                  m.setAttribute(
                    "style",
                    "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"
                  ),
                    o = 0,
                    s = v.length;
                  o < s;
                  ++o
                ) {
                  const g = document.createElement("span");
                  (g.textContent = "Hi"),
                    (g.style.fontFamily = v[o]),
                    m.appendChild(g);
                }
                document.body.appendChild(m),
                  (function e(t, r) {
                    if (++c > 30) {
                      return (
                        (0, i.warn)("Load test font never loaded."), void r()
                      );
                    }
                    (l.font = `30px ${t}`),
                      l.fillText(".", 0, 20),
                      l.getImageData(0, 0, 1, 1).data[3] > 0
                        ? r()
                        : setTimeout(e.bind(null, t, r));
                  })(h, () => {
                    document.body.removeChild(m), r.complete();
                  });
              }
            },
            {
              key: "isFontLoadingAPISupported",
              get() {
                let e = typeof document !== "undefined" && !!document.fonts;
                if (e && typeof navigator !== "undefined") {
                  const t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                    navigator.userAgent
                  );
                  t && t[1] < 63 && (e = !1);
                }
                return (0, i.shadow)(this, "isFontLoadingAPISupported", e);
              }
            },
            {
              key: "isSyncFontLoadingSupported",
              get() {
                let e = !1;
                if (typeof navigator === "undefined") e = !0;
                else {
                  const t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                    navigator.userAgent
                  );
                  t && t[1] >= 14 && (e = !0);
                }
                return (0, i.shadow)(this, "isSyncFontLoadingSupported", e);
              }
            },
            {
              key: "_loadTestFont",
              get() {
                return (0, i.shadow)(
                  this,
                  "_loadTestFont",
                  atob(
                    "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                  )
                );
              }
            }
          ]),
          t
        );
      })();
      const u = {
        get value() {
          return (0, i.shadow)(this, "value", (0, i.isEvalSupported)());
        }
      };
      const l = (function() {
        function e(t, r) {
          const n = r.isEvalSupported;
          const i = void 0 === n || n;
          const o = r.disableFontFace;
          const s = void 0 !== o && o;
          const u = r.ignoreErrors;
          const l = void 0 !== u && u;
          const c = r.onUnsupportedFeature;
          const h = void 0 === c ? null : c;
          const d = r.fontRegistry;
          const f = void 0 === d ? null : d;
          for (const p in (a(this, e),
          (this.compiledGlyphs = Object.create(null)),
          t))
            this[p] = t[p];
          (this.isEvalSupported = !1 !== i),
            (this.disableFontFace = !0 === s),
            (this.ignoreErrors = !0 === l),
            (this._onUnsupportedFeature = h),
            (this.fontRegistry = f);
        }
        return (
          n(e, [
            {
              key: "createNativeFontFace",
              value() {
                if (!this.data || this.disableFontFace) return null;
                const e = new FontFace(this.loadedName, this.data, {});
                return (
                  this.fontRegistry && this.fontRegistry.registerFont(this), e
                );
              }
            },
            {
              key: "createFontFaceRule",
              value() {
                if (!this.data || this.disableFontFace) return null;
                const e = (0, i.bytesToString)(new Uint8Array(this.data));
                const t = `url(data:${this.mimetype};base64,${btoa(e)});`;
                const r = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
                return (
                  this.fontRegistry && this.fontRegistry.registerFont(this, t),
                  r
                );
              }
            },
            {
              key: "getPathGenerator",
              value(e, t) {
                if (void 0 !== this.compiledGlyphs[t])
                  return this.compiledGlyphs[t];
                let r = void 0;
                let n = void 0;
                try {
                  r = e.get(`${this.loadedName}_path_${t}`);
                } catch (e) {
                  if (!this.ignoreErrors) throw e;
                  return (
                    this._onUnsupportedFeature &&
                      this._onUnsupportedFeature({
                        featureId: i.UNSUPPORTED_FEATURES.font
                      }),
                    (0, i.warn)(
                      `getPathGenerator - ignoring character: "${e}".`
                    ),
                    (this.compiledGlyphs[t] = function(e, t) {})
                  );
                }
                if (this.isEvalSupported && u.value) {
                  for (
                    var a = void 0, o = "", s = 0, l = r.length;
                    s < l;
                    s++
                  ) {
                    (a = void 0 !== (n = r[s]).args ? n.args.join(",") : ""),
                      (o += `c.${n.cmd}(${a});\n`);
                  }
                  return (this.compiledGlyphs[t] = new Function(
                    "c",
                    "size",
                    o
                  ));
                }
                return (this.compiledGlyphs[t] = function(e, t) {
                  for (let i = 0, a = r.length; i < a; i++) {
                    (n = r[i]).cmd === "scale" && (n.args = [t, -t]),
                      e[n.cmd].apply(e, n.args);
                  }
                });
              }
            }
          ]),
          e
        );
      })();
      (t.FontFaceObject = l), (t.FontLoader = o);
    },
    function(e, t, r) {
      const n = Object.create(null);
      const i = r(4);
      const a = (typeof navigator !== "undefined" && navigator.userAgent) || "";
      const o = /Trident/.test(a);
      const s = /CriOS/.test(a);
      (o || s) && (n.disableCreateObjectURL = !0),
        i() &&
          ((n.disableFontFace = !0), (n.nativeImageDecoderSupport = "none")),
        (t.apiCompatibilityParams = Object.freeze(n));
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CanvasGraphics = void 0);
      const n = r(1);
      const i = r(134);
      const a = 16;
      var o = {
        get value() {
          return (0, n.shadow)(o, "value", (0, n.isLittleEndian)());
        }
      };
      function s(e) {
        e.mozCurrentTransform ||
          ((e._originalSave = e.save),
          (e._originalRestore = e.restore),
          (e._originalRotate = e.rotate),
          (e._originalScale = e.scale),
          (e._originalTranslate = e.translate),
          (e._originalTransform = e.transform),
          (e._originalSetTransform = e.setTransform),
          (e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0]),
          (e._transformStack = []),
          Object.defineProperty(e, "mozCurrentTransform", {
            get() {
              return this._transformMatrix;
            }
          }),
          Object.defineProperty(e, "mozCurrentTransformInverse", {
            get() {
              const e = this._transformMatrix;
              const t = e[0];
              const r = e[1];
              const n = e[2];
              const i = e[3];
              const a = e[4];
              const o = e[5];
              const s = t * i - r * n;
              const u = r * n - t * i;
              return [
                i / s,
                r / u,
                n / u,
                t / s,
                (i * a - n * o) / u,
                (r * a - t * o) / s
              ];
            }
          }),
          (e.save = function() {
            const e = this._transformMatrix;
            this._transformStack.push(e),
              (this._transformMatrix = e.slice(0, 6)),
              this._originalSave();
          }),
          (e.restore = function() {
            const e = this._transformStack.pop();
            e && ((this._transformMatrix = e), this._originalRestore());
          }),
          (e.translate = function(e, t) {
            const r = this._transformMatrix;
            (r[4] = r[0] * e + r[2] * t + r[4]),
              (r[5] = r[1] * e + r[3] * t + r[5]),
              this._originalTranslate(e, t);
          }),
          (e.scale = function(e, t) {
            const r = this._transformMatrix;
            (r[0] *= e),
              (r[1] *= e),
              (r[2] *= t),
              (r[3] *= t),
              this._originalScale(e, t);
          }),
          (e.transform = function(t, r, n, i, a, o) {
            const s = this._transformMatrix;
            (this._transformMatrix = [
              s[0] * t + s[2] * r,
              s[1] * t + s[3] * r,
              s[0] * n + s[2] * i,
              s[1] * n + s[3] * i,
              s[0] * a + s[2] * o + s[4],
              s[1] * a + s[3] * o + s[5]
            ]),
              e._originalTransform(t, r, n, i, a, o);
          }),
          (e.setTransform = function(t, r, n, i, a, o) {
            (this._transformMatrix = [t, r, n, i, a, o]),
              e._originalSetTransform(t, r, n, i, a, o);
          }),
          (e.rotate = function(e) {
            const t = Math.cos(e);
            const r = Math.sin(e);
            const n = this._transformMatrix;
            (this._transformMatrix = [
              n[0] * t + n[2] * r,
              n[1] * t + n[3] * r,
              n[0] * -r + n[2] * t,
              n[1] * -r + n[3] * t,
              n[4],
              n[5]
            ]),
              this._originalRotate(e);
          }));
      }
      const u = (function() {
        function e(e) {
          (this.canvasFactory = e), (this.cache = Object.create(null));
        }
        return (
          (e.prototype = {
            getCanvas(e, t, r, n) {
              let i;
              return (
                void 0 !== this.cache[e]
                  ? ((i = this.cache[e]),
                    this.canvasFactory.reset(i, t, r),
                    i.context.setTransform(1, 0, 0, 1, 0, 0))
                  : ((i = this.canvasFactory.create(t, r)),
                    (this.cache[e] = i)),
                n && s(i.context),
                i
              );
            },
            clear() {
              for (const e in this.cache) {
                const t = this.cache[e];
                this.canvasFactory.destroy(t), delete this.cache[e];
              }
            }
          }),
          e
        );
      })();
      const l = (function() {
        function e() {
          (this.alphaIsShape = !1),
            (this.fontSize = 0),
            (this.fontSizeScale = 1),
            (this.textMatrix = n.IDENTITY_MATRIX),
            (this.textMatrixScale = 1),
            (this.fontMatrix = n.FONT_IDENTITY_MATRIX),
            (this.leading = 0),
            (this.x = 0),
            (this.y = 0),
            (this.lineX = 0),
            (this.lineY = 0),
            (this.charSpacing = 0),
            (this.wordSpacing = 0),
            (this.textHScale = 1),
            (this.textRenderingMode = n.TextRenderingMode.FILL),
            (this.textRise = 0),
            (this.fillColor = "#000000"),
            (this.strokeColor = "#000000"),
            (this.patternFill = !1),
            (this.fillAlpha = 1),
            (this.strokeAlpha = 1),
            (this.lineWidth = 1),
            (this.activeSMask = null),
            (this.resumeSMaskCtx = null);
        }
        return (
          (e.prototype = {
            clone() {
              return Object.create(this);
            },
            setCurrentPoint(e, t) {
              (this.x = e), (this.y = t);
            }
          }),
          e
        );
      })();
      const c = (function() {
        function e(e, t, r, n, i, a) {
          (this.ctx = e),
            (this.current = new l()),
            (this.stateStack = []),
            (this.pendingClip = null),
            (this.pendingEOFill = !1),
            (this.res = null),
            (this.xobjs = null),
            (this.commonObjs = t),
            (this.objs = r),
            (this.canvasFactory = n),
            (this.webGLContext = i),
            (this.imageLayer = a),
            (this.groupStack = []),
            (this.processingType3 = null),
            (this.baseTransform = null),
            (this.baseTransformStack = []),
            (this.groupLevel = 0),
            (this.smaskStack = []),
            (this.smaskCounter = 0),
            (this.tempSMask = null),
            (this.cachedCanvases = new u(this.canvasFactory)),
            e && s(e),
            (this._cachedGetSinglePixelWidth = null);
        }
        function t(e, t) {
          if (typeof ImageData !== "undefined" && t instanceof ImageData)
            e.putImageData(t, 0, 0);
          else {
            let r;
            let i;
            let s;
            let u;
            let l;
            const c = t.height;
            const h = t.width;
            const d = c % a;
            const f = (c - d) / a;
            const p = d === 0 ? f : f + 1;
            const v = e.createImageData(h, a);
            let m = 0;
            const g = t.data;
            const y = v.data;
            if (t.kind === n.ImageKind.GRAYSCALE_1BPP) {
              const b = g.byteLength;
              const _ = new Uint32Array(y.buffer, 0, y.byteLength >> 2);
              const A = _.length;
              const S = (h + 7) >> 3;
              const w = 4294967295;
              const k = o.value ? 4278190080 : 255;
              for (i = 0; i < p; i++) {
                for (u = i < f ? a : d, r = 0, s = 0; s < u; s++) {
                  for (
                    var P = b - m,
                      x = 0,
                      C = P > S ? h : 8 * P - 7,
                      R = -8 & C,
                      E = 0,
                      T = 0;
                    x < R;
                    x += 8
                  ) {
                    (T = g[m++]),
                      (_[r++] = 128 & T ? w : k),
                      (_[r++] = 64 & T ? w : k),
                      (_[r++] = 32 & T ? w : k),
                      (_[r++] = 16 & T ? w : k),
                      (_[r++] = 8 & T ? w : k),
                      (_[r++] = 4 & T ? w : k),
                      (_[r++] = 2 & T ? w : k),
                      (_[r++] = 1 & T ? w : k);
                  }
                  for (; x < C; x++) {
                    E === 0 && ((T = g[m++]), (E = 128)),
                      (_[r++] = T & E ? w : k),
                      (E >>= 1);
                  }
                }
                for (; r < A; ) _[r++] = 0;
                e.putImageData(v, 0, i * a);
              }
            } else if (t.kind === n.ImageKind.RGBA_32BPP) {
              for (s = 0, l = h * a * 4, i = 0; i < f; i++) {
                y.set(g.subarray(m, m + l)),
                  (m += l),
                  e.putImageData(v, 0, s),
                  (s += a);
              }
              i < p &&
                ((l = h * d * 4),
                y.set(g.subarray(m, m + l)),
                e.putImageData(v, 0, s));
            } else {
              if (t.kind !== n.ImageKind.RGB_24BPP)
                throw new Error(`bad image kind: ${t.kind}`);
              for (l = h * (u = a), i = 0; i < p; i++) {
                for (i >= f && (l = h * (u = d)), r = 0, s = l; s--; ) {
                  (y[r++] = g[m++]),
                    (y[r++] = g[m++]),
                    (y[r++] = g[m++]),
                    (y[r++] = 255);
                }
                e.putImageData(v, 0, i * a);
              }
            }
          }
        }
        function r(e, t) {
          for (
            let r = t.height,
              n = t.width,
              i = r % a,
              o = (r - i) / a,
              s = i === 0 ? o : o + 1,
              u = e.createImageData(n, a),
              l = 0,
              c = t.data,
              h = u.data,
              d = 0;
            d < s;
            d++
          ) {
            for (let f = d < o ? a : i, p = 3, v = 0; v < f; v++) {
              for (let m = 0, g = 0; g < n; g++) {
                if (!m) {
                  var y = c[l++];
                  m = 128;
                }
                (h[p] = y & m ? 0 : 255), (p += 4), (m >>= 1);
              }
            }
            e.putImageData(u, 0, d * a);
          }
        }
        function c(e, t) {
          for (
            let r = [
                "strokeStyle",
                "fillStyle",
                "fillRule",
                "globalAlpha",
                "lineWidth",
                "lineCap",
                "lineJoin",
                "miterLimit",
                "globalCompositeOperation",
                "font"
              ],
              n = 0,
              i = r.length;
            n < i;
            n++
          ) {
            const a = r[n];
            void 0 !== e[a] && (t[a] = e[a]);
          }
          void 0 !== e.setLineDash &&
            (t.setLineDash(e.getLineDash()),
            (t.lineDashOffset = e.lineDashOffset));
        }
        function h(e) {
          (e.strokeStyle = "#000000"),
            (e.fillStyle = "#000000"),
            (e.fillRule = "nonzero"),
            (e.globalAlpha = 1),
            (e.lineWidth = 1),
            (e.lineCap = "butt"),
            (e.lineJoin = "miter"),
            (e.miterLimit = 10),
            (e.globalCompositeOperation = "source-over"),
            (e.font = "10px sans-serif"),
            void 0 !== e.setLineDash &&
              (e.setLineDash([]), (e.lineDashOffset = 0));
        }
        function d(e, t, r, n) {
          for (let i = e.length, a = 3; a < i; a += 4) {
            const o = e[a];
            if (o === 0) (e[a - 3] = t), (e[a - 2] = r), (e[a - 1] = n);
            else if (o < 255) {
              const s = 255 - o;
              (e[a - 3] = (e[a - 3] * o + t * s) >> 8),
                (e[a - 2] = (e[a - 2] * o + r * s) >> 8),
                (e[a - 1] = (e[a - 1] * o + n * s) >> 8);
            }
          }
        }
        function f(e, t, r) {
          for (let n = e.length, i = 3; i < n; i += 4) {
            const a = r ? r[e[i]] : e[i];
            t[i] = (t[i] * a * (1 / 255)) | 0;
          }
        }
        function p(e, t, r) {
          for (let n = e.length, i = 3; i < n; i += 4) {
            const a = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
            t[i] = r ? (t[i] * r[a >> 8]) >> 8 : (t[i] * a) >> 16;
          }
        }
        function v(e, t, r, n) {
          const i = t.canvas;
          const a = t.context;
          e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
          const o = t.backdrop || null;
          if (!t.transferMap && n.isEnabled) {
            const s = n.composeSMask({
              layer: r.canvas,
              mask: i,
              properties: { subtype: t.subtype, backdrop: o }
            });
            return (
              e.setTransform(1, 0, 0, 1, 0, 0),
              void e.drawImage(s, t.offsetX, t.offsetY)
            );
          }
          !(function(e, t, r, n, i, a, o) {
            let s;
            const u = !!a;
            const l = u ? a[0] : 0;
            const c = u ? a[1] : 0;
            const h = u ? a[2] : 0;
            s = i === "Luminosity" ? p : f;
            for (
              let v = Math.min(n, Math.ceil(1048576 / r)), m = 0;
              m < n;
              m += v
            ) {
              const g = Math.min(v, n - m);
              const y = e.getImageData(0, m, r, g);
              const b = t.getImageData(0, m, r, g);
              u && d(y.data, l, c, h),
                s(y.data, b.data, o),
                e.putImageData(b, 0, m);
            }
          })(a, r, i.width, i.height, t.subtype, o, t.transferMap),
            e.drawImage(i, 0, 0);
        }
        const m = ["butt", "round", "square"];
        const g = ["miter", "round", "bevel"];
        const y = {};
        const b = {};
        for (const _ in ((e.prototype = {
          beginDrawing(e) {
            const t = e.transform;
            const r = e.viewport;
            const n = e.transparency;
            const i = e.background;
            const a = void 0 === i ? null : i;
            const o = this.ctx.canvas.width;
            const s = this.ctx.canvas.height;
            if (
              (this.ctx.save(),
              (this.ctx.fillStyle = a || "rgb(255, 255, 255)"),
              this.ctx.fillRect(0, 0, o, s),
              this.ctx.restore(),
              n)
            ) {
              const u = this.cachedCanvases.getCanvas("transparent", o, s, !0);
              (this.compositeCtx = this.ctx),
                (this.transparentCanvas = u.canvas),
                (this.ctx = u.context),
                this.ctx.save(),
                this.ctx.transform.apply(
                  this.ctx,
                  this.compositeCtx.mozCurrentTransform
                );
            }
            this.ctx.save(),
              h(this.ctx),
              t && this.ctx.transform.apply(this.ctx, t),
              this.ctx.transform.apply(this.ctx, r.transform),
              (this.baseTransform = this.ctx.mozCurrentTransform.slice()),
              this.imageLayer && this.imageLayer.beginLayout();
          },
          executeOperatorList(e, t, r, i) {
            const a = e.argsArray;
            const o = e.fnArray;
            let s = t || 0;
            const u = a.length;
            if (u === s) return s;
            for (
              var l,
                c = u - s > 10 && typeof r === "function",
                h = c ? Date.now() + 15 : 0,
                d = 0,
                f = this.commonObjs,
                p = this.objs;
              ;

            ) {
              if (void 0 !== i && s === i.nextBreakPoint)
                return i.breakIt(s, r), s;
              if ((l = o[s]) !== n.OPS.dependency) this[l].apply(this, a[s]);
              else {
                for (let v = a[s], m = 0, g = v.length; m < g; m++) {
                  let y = v[m];
                  let b = y[0] === "g" && y[1] === "_" ? f : p;
                  if (!b.isResolved(y)) return b.get(y, r), s;
                }
              }
              if (++s === u) return s;
              if (c && ++d > 10) {
                if (Date.now() > h) return r(), s;
                d = 0;
              }
            }
          },
          endDrawing() {
            this.current.activeSMask !== null && this.endSMaskGroup(),
              this.ctx.restore(),
              this.transparentCanvas &&
                ((this.ctx = this.compositeCtx),
                this.ctx.save(),
                this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                this.ctx.drawImage(this.transparentCanvas, 0, 0),
                this.ctx.restore(),
                (this.transparentCanvas = null)),
              this.cachedCanvases.clear(),
              this.webGLContext.clear(),
              this.imageLayer && this.imageLayer.endLayout();
          },
          setLineWidth(e) {
            (this.current.lineWidth = e), (this.ctx.lineWidth = e);
          },
          setLineCap(e) {
            this.ctx.lineCap = m[e];
          },
          setLineJoin(e) {
            this.ctx.lineJoin = g[e];
          },
          setMiterLimit(e) {
            this.ctx.miterLimit = e;
          },
          setDash(e, t) {
            const r = this.ctx;
            void 0 !== r.setLineDash &&
              (r.setLineDash(e), (r.lineDashOffset = t));
          },
          setRenderingIntent(e) {},
          setFlatness(e) {},
          setGState(e) {
            for (let t = 0, r = e.length; t < r; t++) {
              const n = e[t];
              const i = n[0];
              const a = n[1];
              switch (i) {
                case "LW":
                  this.setLineWidth(a);
                  break;
                case "LC":
                  this.setLineCap(a);
                  break;
                case "LJ":
                  this.setLineJoin(a);
                  break;
                case "ML":
                  this.setMiterLimit(a);
                  break;
                case "D":
                  this.setDash(a[0], a[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(a);
                  break;
                case "FL":
                  this.setFlatness(a);
                  break;
                case "Font":
                  this.setFont(a[0], a[1]);
                  break;
                case "CA":
                  this.current.strokeAlpha = n[1];
                  break;
                case "ca":
                  (this.current.fillAlpha = n[1]),
                    (this.ctx.globalAlpha = n[1]);
                  break;
                case "BM":
                  this.ctx.globalCompositeOperation = a;
                  break;
                case "SMask":
                  this.current.activeSMask &&
                    (this.stateStack.length > 0 &&
                    this.stateStack[this.stateStack.length - 1].activeSMask ===
                      this.current.activeSMask
                      ? this.suspendSMaskGroup()
                      : this.endSMaskGroup()),
                    (this.current.activeSMask = a ? this.tempSMask : null),
                    this.current.activeSMask && this.beginSMaskGroup(),
                    (this.tempSMask = null);
              }
            }
          },
          beginSMaskGroup() {
            const e = this.current.activeSMask;
            const t = e.canvas.width;
            const r = e.canvas.height;
            const n = `smaskGroupAt${this.groupLevel}`;
            const i = this.cachedCanvases.getCanvas(n, t, r, !0);
            const a = this.ctx;
            const o = a.mozCurrentTransform;
            this.ctx.save();
            const s = i.context;
            s.scale(1 / e.scaleX, 1 / e.scaleY),
              s.translate(-e.offsetX, -e.offsetY),
              s.transform.apply(s, o),
              (e.startTransformInverse = s.mozCurrentTransformInverse),
              c(a, s),
              (this.ctx = s),
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
              this.groupStack.push(a),
              this.groupLevel++;
          },
          suspendSMaskGroup() {
            const e = this.ctx;
            this.groupLevel--,
              (this.ctx = this.groupStack.pop()),
              v(this.ctx, this.current.activeSMask, e, this.webGLContext),
              this.ctx.restore(),
              this.ctx.save(),
              c(e, this.ctx),
              (this.current.resumeSMaskCtx = e);
            const t = n.Util.transform(
              this.current.activeSMask.startTransformInverse,
              e.mozCurrentTransform
            );
            this.ctx.transform.apply(this.ctx, t),
              e.save(),
              e.setTransform(1, 0, 0, 1, 0, 0),
              e.clearRect(0, 0, e.canvas.width, e.canvas.height),
              e.restore();
          },
          resumeSMaskGroup() {
            const e = this.current.resumeSMaskCtx;
            const t = this.ctx;
            (this.ctx = e), this.groupStack.push(t), this.groupLevel++;
          },
          endSMaskGroup() {
            const e = this.ctx;
            this.groupLevel--,
              (this.ctx = this.groupStack.pop()),
              v(this.ctx, this.current.activeSMask, e, this.webGLContext),
              this.ctx.restore(),
              c(e, this.ctx);
            const t = n.Util.transform(
              this.current.activeSMask.startTransformInverse,
              e.mozCurrentTransform
            );
            this.ctx.transform.apply(this.ctx, t);
          },
          save() {
            this.ctx.save();
            const e = this.current;
            this.stateStack.push(e),
              (this.current = e.clone()),
              (this.current.resumeSMaskCtx = null);
          },
          restore() {
            this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
              this.current.activeSMask === null ||
                (this.stateStack.length !== 0 &&
                  this.stateStack[this.stateStack.length - 1].activeSMask ===
                    this.current.activeSMask) ||
                this.endSMaskGroup(),
              this.stateStack.length !== 0 &&
                ((this.current = this.stateStack.pop()),
                this.ctx.restore(),
                (this.pendingClip = null),
                (this._cachedGetSinglePixelWidth = null));
          },
          transform(e, t, r, n, i, a) {
            this.ctx.transform(e, t, r, n, i, a),
              (this._cachedGetSinglePixelWidth = null);
          },
          constructPath(e, t) {
            for (
              var r = this.ctx,
                i = this.current,
                a = i.x,
                o = i.y,
                s = 0,
                u = 0,
                l = e.length;
              s < l;
              s++
            ) {
              switch (0 | e[s]) {
                case n.OPS.rectangle:
                  (a = t[u++]), (o = t[u++]);
                  var c = t[u++];
                  var h = t[u++];
                  c === 0 && (c = this.getSinglePixelWidth()),
                    h === 0 && (h = this.getSinglePixelWidth());
                  var d = a + c;
                  var f = o + h;
                  this.ctx.moveTo(a, o),
                    this.ctx.lineTo(d, o),
                    this.ctx.lineTo(d, f),
                    this.ctx.lineTo(a, f),
                    this.ctx.lineTo(a, o),
                    this.ctx.closePath();
                  break;
                case n.OPS.moveTo:
                  (a = t[u++]), (o = t[u++]), r.moveTo(a, o);
                  break;
                case n.OPS.lineTo:
                  (a = t[u++]), (o = t[u++]), r.lineTo(a, o);
                  break;
                case n.OPS.curveTo:
                  (a = t[u + 4]),
                    (o = t[u + 5]),
                    r.bezierCurveTo(t[u], t[u + 1], t[u + 2], t[u + 3], a, o),
                    (u += 6);
                  break;
                case n.OPS.curveTo2:
                  r.bezierCurveTo(a, o, t[u], t[u + 1], t[u + 2], t[u + 3]),
                    (a = t[u + 2]),
                    (o = t[u + 3]),
                    (u += 4);
                  break;
                case n.OPS.curveTo3:
                  (a = t[u + 2]),
                    (o = t[u + 3]),
                    r.bezierCurveTo(t[u], t[u + 1], a, o, a, o),
                    (u += 4);
                  break;
                case n.OPS.closePath:
                  r.closePath();
              }
            }
            i.setCurrentPoint(a, o);
          },
          closePath() {
            this.ctx.closePath();
          },
          stroke(e) {
            e = void 0 === e || e;
            const t = this.ctx;
            const r = this.current.strokeColor;
            (t.lineWidth = Math.max(
              0.65 * this.getSinglePixelWidth(),
              this.current.lineWidth
            )),
              (t.globalAlpha = this.current.strokeAlpha),
              r && r.hasOwnProperty("type") && r.type === "Pattern"
                ? (t.save(),
                  (t.strokeStyle = r.getPattern(t, this)),
                  t.stroke(),
                  t.restore())
                : t.stroke(),
              e && this.consumePath(),
              (t.globalAlpha = this.current.fillAlpha);
          },
          closeStroke() {
            this.closePath(), this.stroke();
          },
          fill(e) {
            e = void 0 === e || e;
            const t = this.ctx;
            const r = this.current.fillColor;
            let n = !1;
            this.current.patternFill &&
              (t.save(),
              this.baseTransform && t.setTransform.apply(t, this.baseTransform),
              (t.fillStyle = r.getPattern(t, this)),
              (n = !0)),
              this.pendingEOFill
                ? (t.fill("evenodd"), (this.pendingEOFill = !1))
                : t.fill(),
              n && t.restore(),
              e && this.consumePath();
          },
          eoFill() {
            (this.pendingEOFill = !0), this.fill();
          },
          fillStroke() {
            this.fill(!1), this.stroke(!1), this.consumePath();
          },
          eoFillStroke() {
            (this.pendingEOFill = !0), this.fillStroke();
          },
          closeFillStroke() {
            this.closePath(), this.fillStroke();
          },
          closeEOFillStroke() {
            (this.pendingEOFill = !0), this.closePath(), this.fillStroke();
          },
          endPath() {
            this.consumePath();
          },
          clip() {
            this.pendingClip = y;
          },
          eoClip() {
            this.pendingClip = b;
          },
          beginText() {
            (this.current.textMatrix = n.IDENTITY_MATRIX),
              (this.current.textMatrixScale = 1),
              (this.current.x = this.current.lineX = 0),
              (this.current.y = this.current.lineY = 0);
          },
          endText() {
            const e = this.pendingTextPaths;
            const t = this.ctx;
            if (void 0 !== e) {
              t.save(), t.beginPath();
              for (let r = 0; r < e.length; r++) {
                const n = e[r];
                t.setTransform.apply(t, n.transform),
                  t.translate(n.x, n.y),
                  n.addToPath(t, n.fontSize);
              }
              t.restore(),
                t.clip(),
                t.beginPath(),
                delete this.pendingTextPaths;
            } else t.beginPath();
          },
          setCharSpacing(e) {
            this.current.charSpacing = e;
          },
          setWordSpacing(e) {
            this.current.wordSpacing = e;
          },
          setHScale(e) {
            this.current.textHScale = e / 100;
          },
          setLeading(e) {
            this.current.leading = -e;
          },
          setFont(e, t) {
            const r = this.commonObjs.get(e);
            const i = this.current;
            if (!r) throw new Error(`Can't find font for ${e}`);
            if (
              ((i.fontMatrix = r.fontMatrix
                ? r.fontMatrix
                : n.FONT_IDENTITY_MATRIX),
              (i.fontMatrix[0] !== 0 && i.fontMatrix[3] !== 0) ||
                (0, n.warn)(`Invalid font matrix for font ${e}`),
              t < 0
                ? ((t = -t), (i.fontDirection = -1))
                : (i.fontDirection = 1),
              (this.current.font = r),
              (this.current.fontSize = t),
              !r.isType3Font)
            ) {
              const a = r.loadedName || "sans-serif";
              const o = r.black ? "900" : r.bold ? "bold" : "normal";
              const s = r.italic ? "italic" : "normal";
              const u = `"${a}", ${r.fallbackName}`;
              const l = t < 16 ? 16 : t > 100 ? 100 : t;
              this.current.fontSizeScale = t / l;
              const c = `${s} ${o} ${l}px ${u}`;
              this.ctx.font = c;
            }
          },
          setTextRenderingMode(e) {
            this.current.textRenderingMode = e;
          },
          setTextRise(e) {
            this.current.textRise = e;
          },
          moveText(e, t) {
            (this.current.x = this.current.lineX += e),
              (this.current.y = this.current.lineY += t);
          },
          setLeadingMoveText(e, t) {
            this.setLeading(-t), this.moveText(e, t);
          },
          setTextMatrix(e, t, r, n, i, a) {
            (this.current.textMatrix = [e, t, r, n, i, a]),
              (this.current.textMatrixScale = Math.sqrt(e * e + t * t)),
              (this.current.x = this.current.lineX = 0),
              (this.current.y = this.current.lineY = 0);
          },
          nextLine() {
            this.moveText(0, this.current.leading);
          },
          paintChar(e, t, r, i) {
            let a;
            const o = this.ctx;
            const s = this.current;
            const u = s.font;
            const l = s.textRenderingMode;
            const c = s.fontSize / s.fontSizeScale;
            const h = l & n.TextRenderingMode.FILL_STROKE_MASK;
            const d = !!(l & n.TextRenderingMode.ADD_TO_PATH_FLAG);
            const f = s.patternFill && u.data;
            ((u.disableFontFace || d || f) &&
              (a = u.getPathGenerator(this.commonObjs, e)),
            u.disableFontFace || f
              ? (o.save(),
                o.translate(t, r),
                o.beginPath(),
                a(o, c),
                i && o.setTransform.apply(o, i),
                (h !== n.TextRenderingMode.FILL &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  o.fill(),
                (h !== n.TextRenderingMode.STROKE &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  o.stroke(),
                o.restore())
              : ((h !== n.TextRenderingMode.FILL &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  o.fillText(e, t, r),
                (h !== n.TextRenderingMode.STROKE &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  o.strokeText(e, t, r)),
            d) &&
              (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: o.mozCurrentTransform,
                x: t,
                y: r,
                fontSize: c,
                addToPath: a
              });
          },
          get isFontSubpixelAAEnabled() {
            const e = this.canvasFactory.create(10, 10).context;
            e.scale(1.5, 1), e.fillText("I", 0, 10);
            for (
              var t = e.getImageData(0, 0, 10, 10).data, r = !1, i = 3;
              i < t.length;
              i += 4
            ) {
              if (t[i] > 0 && t[i] < 255) {
                r = !0;
                break;
              }
            }
            return (0, n.shadow)(this, "isFontSubpixelAAEnabled", r);
          },
          showText(e) {
            const t = this.current;
            const r = t.font;
            if (r.isType3Font) return this.showType3Text(e);
            const i = t.fontSize;
            if (i !== 0) {
              const a = this.ctx;
              const o = t.fontSizeScale;
              const s = t.charSpacing;
              const u = t.wordSpacing;
              const l = t.fontDirection;
              const c = t.textHScale * l;
              const h = e.length;
              const d = r.vertical;
              const f = d ? 1 : -1;
              const p = r.defaultVMetrics;
              const v = i * t.fontMatrix[0];
              const m =
                t.textRenderingMode === n.TextRenderingMode.FILL &&
                !r.disableFontFace &&
                !t.patternFill;
              a.save();
              let g = void 0;
              if (t.patternFill) {
                a.save();
                const y = t.fillColor.getPattern(a, this);
                (g = a.mozCurrentTransform), a.restore(), (a.fillStyle = y);
              }
              a.transform.apply(a, t.textMatrix),
                a.translate(t.x, t.y + t.textRise),
                l > 0 ? a.scale(c, -1) : a.scale(c, 1);
              let b = t.lineWidth;
              const _ = t.textMatrixScale;
              if (_ === 0 || b === 0) {
                const A =
                  t.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                (A !== n.TextRenderingMode.STROKE &&
                  A !== n.TextRenderingMode.FILL_STROKE) ||
                  ((this._cachedGetSinglePixelWidth = null),
                  (b = 0.65 * this.getSinglePixelWidth()));
              } else b /= _;
              o !== 1 && (a.scale(o, o), (b /= o)), (a.lineWidth = b);
              let S;
              let w = 0;
              for (S = 0; S < h; ++S) {
                const k = e[S];
                if ((0, n.isNum)(k)) w += (f * k * i) / 1e3;
                else {
                  var P;
                  var x;
                  var C;
                  var R;
                  var E;
                  var T;
                  var O;
                  let I = !1;
                  const F = (k.isSpace ? u : 0) + s;
                  const L = k.fontChar;
                  const j = k.accent;
                  let M = k.width;
                  if (d) {
                    (E = k.vmetric || p),
                      (T = -(T = k.vmetric ? E[1] : 0.5 * M) * v),
                      (O = E[2] * v),
                      (M = E ? -E[0] : M),
                      (P = T / o),
                      (x = (w + O) / o);
                  } else (P = w / o), (x = 0);
                  if (r.remeasure && M > 0) {
                    const D = ((1e3 * a.measureText(L).width) / i) * o;
                    if (M < D && this.isFontSubpixelAAEnabled) {
                      const N = M / D;
                      (I = !0), a.save(), a.scale(N, 1), (P /= N);
                    } else M !== D && (P += (((M - D) / 2e3) * i) / o);
                  }
                  (k.isInFont || r.missingFile) &&
                    (m && !j
                      ? a.fillText(L, P, x)
                      : (this.paintChar(L, P, x, g),
                        j &&
                          ((C = P + j.offset.x / o),
                          (R = x - j.offset.y / o),
                          this.paintChar(j.fontChar, C, R, g)))),
                    (w += M * v + F * l),
                    I && a.restore();
                }
              }
              d ? (t.y -= w * c) : (t.x += w * c), a.restore();
            }
          },
          showType3Text(e) {
            let t;
            let r;
            let i;
            let a;
            const o = this.ctx;
            const s = this.current;
            const u = s.font;
            const l = s.fontSize;
            const c = s.fontDirection;
            const h = u.vertical ? 1 : -1;
            const d = s.charSpacing;
            const f = s.wordSpacing;
            const p = s.textHScale * c;
            const v = s.fontMatrix || n.FONT_IDENTITY_MATRIX;
            const m = e.length;
            if (
              !(s.textRenderingMode === n.TextRenderingMode.INVISIBLE) &&
              l !== 0
            ) {
              for (
                this._cachedGetSinglePixelWidth = null,
                  o.save(),
                  o.transform.apply(o, s.textMatrix),
                  o.translate(s.x, s.y),
                  o.scale(p, c),
                  t = 0;
                t < m;
                ++t
              ) {
                if (((r = e[t]), (0, n.isNum)(r))) {
                  (a = (h * r * l) / 1e3),
                    this.ctx.translate(a, 0),
                    (s.x += a * p);
                } else {
                  let g = (r.isSpace ? f : 0) + d;
                  let y = u.charProcOperatorList[r.operatorListId];
                  if (y) {
                    (this.processingType3 = r),
                      this.save(),
                      o.scale(l, l),
                      o.transform.apply(o, v),
                      this.executeOperatorList(y),
                      this.restore(),
                      (i = n.Util.applyTransform([r.width, 0], v)[0] * l + g),
                      o.translate(i, 0),
                      (s.x += i * p);
                  } else {
                    (0, n.warn)(
                      'Type3 character "' +
                        r.operatorListId +
                        '" is not available.'
                    );
                  }
                }
              }
              o.restore(), (this.processingType3 = null);
            }
          },
          setCharWidth(e, t) {},
          setCharWidthAndBounds(e, t, r, n, i, a) {
            this.ctx.rect(r, n, i - r, a - n), this.clip(), this.endPath();
          },
          getColorN_Pattern(t) {
            let r;
            const n = this;
            if (t[0] === "TilingPattern") {
              const a = t[1];
              const o =
                this.baseTransform || this.ctx.mozCurrentTransform.slice();
              const s = {
                createCanvasGraphics(t) {
                  return new e(
                    t,
                    n.commonObjs,
                    n.objs,
                    n.canvasFactory,
                    n.webGLContext
                  );
                }
              };
              r = new i.TilingPattern(t, a, this.ctx, s, o);
            } else r = (0, i.getShadingPatternFromIR)(t);
            return r;
          },
          setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          },
          setFillColorN() {
            (this.current.fillColor = this.getColorN_Pattern(arguments)),
              (this.current.patternFill = !0);
          },
          setStrokeRGBColor(e, t, r) {
            const i = n.Util.makeCssRgb(e, t, r);
            (this.ctx.strokeStyle = i), (this.current.strokeColor = i);
          },
          setFillRGBColor(e, t, r) {
            const i = n.Util.makeCssRgb(e, t, r);
            (this.ctx.fillStyle = i),
              (this.current.fillColor = i),
              (this.current.patternFill = !1);
          },
          shadingFill(e) {
            const t = this.ctx;
            this.save();
            const r = (0, i.getShadingPatternFromIR)(e);
            t.fillStyle = r.getPattern(t, this, !0);
            const a = t.mozCurrentTransformInverse;
            if (a) {
              const o = t.canvas;
              const s = o.width;
              const u = o.height;
              const l = n.Util.applyTransform([0, 0], a);
              const c = n.Util.applyTransform([0, u], a);
              const h = n.Util.applyTransform([s, 0], a);
              const d = n.Util.applyTransform([s, u], a);
              const f = Math.min(l[0], c[0], h[0], d[0]);
              const p = Math.min(l[1], c[1], h[1], d[1]);
              const v = Math.max(l[0], c[0], h[0], d[0]);
              const m = Math.max(l[1], c[1], h[1], d[1]);
              this.ctx.fillRect(f, p, v - f, m - p);
            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            this.restore();
          },
          beginInlineImage() {
            (0, n.unreachable)("Should not call beginInlineImage");
          },
          beginImageData() {
            (0, n.unreachable)("Should not call beginImageData");
          },
          paintFormXObjectBegin(e, t) {
            if (
              (this.save(),
              this.baseTransformStack.push(this.baseTransform),
              Array.isArray(e) &&
                e.length === 6 &&
                this.transform.apply(this, e),
              (this.baseTransform = this.ctx.mozCurrentTransform),
              Array.isArray(t) && t.length === 4)
            ) {
              const r = t[2] - t[0];
              const n = t[3] - t[1];
              this.ctx.rect(t[0], t[1], r, n), this.clip(), this.endPath();
            }
          },
          paintFormXObjectEnd() {
            this.restore(),
              (this.baseTransform = this.baseTransformStack.pop());
          },
          beginGroup(e) {
            this.save();
            const t = this.ctx;
            e.isolated || (0, n.info)("TODO: Support non-isolated groups."),
              e.knockout && (0, n.warn)("Knockout groups not supported.");
            const r = t.mozCurrentTransform;
            if ((e.matrix && t.transform.apply(t, e.matrix), !e.bbox))
              throw new Error("Bounding box is required.");
            let i = n.Util.getAxialAlignedBoundingBox(
              e.bbox,
              t.mozCurrentTransform
            );
            const a = [0, 0, t.canvas.width, t.canvas.height];
            i = n.Util.intersect(i, a) || [0, 0, 0, 0];
            const o = Math.floor(i[0]);
            const s = Math.floor(i[1]);
            let u = Math.max(Math.ceil(i[2]) - o, 1);
            let l = Math.max(Math.ceil(i[3]) - s, 1);
            let h = 1;
            let d = 1;
            u > 4096 && ((h = u / 4096), (u = 4096)),
              l > 4096 && ((d = l / 4096), (l = 4096));
            let f = `groupAt${this.groupLevel}`;
            e.smask && (f += `_smask_${this.smaskCounter++ % 2}`);
            const p = this.cachedCanvases.getCanvas(f, u, l, !0);
            const v = p.context;
            v.scale(1 / h, 1 / d),
              v.translate(-o, -s),
              v.transform.apply(v, r),
              e.smask
                ? this.smaskStack.push({
                    canvas: p.canvas,
                    context: v,
                    offsetX: o,
                    offsetY: s,
                    scaleX: h,
                    scaleY: d,
                    subtype: e.smask.subtype,
                    backdrop: e.smask.backdrop,
                    transferMap: e.smask.transferMap || null,
                    startTransformInverse: null
                  })
                : (t.setTransform(1, 0, 0, 1, 0, 0),
                  t.translate(o, s),
                  t.scale(h, d)),
              c(t, v),
              (this.ctx = v),
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
              this.groupStack.push(t),
              this.groupLevel++,
              (this.current.activeSMask = null);
          },
          endGroup(e) {
            this.groupLevel--;
            const t = this.ctx;
            (this.ctx = this.groupStack.pop()),
              void 0 !== this.ctx.imageSmoothingEnabled
                ? (this.ctx.imageSmoothingEnabled = !1)
                : (this.ctx.mozImageSmoothingEnabled = !1),
              e.smask
                ? (this.tempSMask = this.smaskStack.pop())
                : this.ctx.drawImage(t.canvas, 0, 0),
              this.restore();
          },
          beginAnnotations() {
            this.save(),
              this.baseTransform &&
                this.ctx.setTransform.apply(this.ctx, this.baseTransform);
          },
          endAnnotations() {
            this.restore();
          },
          beginAnnotation(e, t, r) {
            if (
              (this.save(),
              h(this.ctx),
              (this.current = new l()),
              Array.isArray(e) && e.length === 4)
            ) {
              const n = e[2] - e[0];
              const i = e[3] - e[1];
              this.ctx.rect(e[0], e[1], n, i), this.clip(), this.endPath();
            }
            this.transform.apply(this, t), this.transform.apply(this, r);
          },
          endAnnotation() {
            this.restore();
          },
          paintJpegXObject(e, t, r) {
            const i = this.objs.get(e);
            if (i) {
              this.save();
              const a = this.ctx;
              if (
                (a.scale(1 / t, -1 / r),
                a.drawImage(i, 0, 0, i.width, i.height, 0, -r, t, r),
                this.imageLayer)
              ) {
                const o = a.mozCurrentTransformInverse;
                const s = this.getCanvasPosition(0, 0);
                this.imageLayer.appendImage({
                  objId: e,
                  left: s[0],
                  top: s[1],
                  width: t / o[0],
                  height: r / o[3]
                });
              }
              this.restore();
            } else (0, n.warn)("Dependent image isn't ready yet");
          },
          paintImageMaskXObject(e) {
            const t = this.ctx;
            const n = e.width;
            const i = e.height;
            const a = this.current.fillColor;
            const o = this.current.patternFill;
            const s = this.processingType3;
            if (
              (s &&
                void 0 === s.compiled &&
                (s.compiled =
                  n <= 1e3 && i <= 1e3
                    ? (function(e) {
                        let t;
                        let r;
                        let n;
                        let i;
                        const a = e.width;
                        const o = e.height;
                        const s = a + 1;
                        const u = new Uint8Array(s * (o + 1));
                        const l = new Uint8Array([
                          0,
                          2,
                          4,
                          0,
                          1,
                          0,
                          5,
                          4,
                          8,
                          10,
                          0,
                          8,
                          0,
                          2,
                          1,
                          0
                        ]);
                        const c = (a + 7) & -8;
                        const h = e.data;
                        const d = new Uint8Array(c * o);
                        let f = 0;
                        for (t = 0, i = h.length; t < i; t++)
                          for (let p = 128, v = h[t]; p > 0; )
                            (d[f++] = v & p ? 0 : 255), (p >>= 1);
                        let m = 0;
                        for (
                          d[(f = 0)] !== 0 && ((u[0] = 1), ++m), r = 1;
                          r < a;
                          r++
                        ) {
                          d[f] !== d[f + 1] && ((u[r] = d[f] ? 2 : 1), ++m),
                            f++;
                        }
                        for (
                          d[f] !== 0 && ((u[r] = 2), ++m), t = 1;
                          t < o;
                          t++
                        ) {
                          (n = t * s),
                            d[(f = t * c) - c] !== d[f] &&
                              ((u[n] = d[f] ? 1 : 8), ++m);
                          let g = (d[f] ? 4 : 0) + (d[f - c] ? 8 : 0);
                          for (r = 1; r < a; r++) {
                            l[
                              (g =
                                (g >> 2) +
                                (d[f + 1] ? 4 : 0) +
                                (d[f - c + 1] ? 8 : 0))
                            ] && ((u[n + r] = l[g]), ++m),
                              f++;
                          }
                          if (
                            (d[f - c] !== d[f] &&
                              ((u[n + r] = d[f] ? 2 : 4), ++m),
                            m > 1e3)
                          )
                            return null;
                        }
                        for (
                          n = t * s,
                            d[(f = c * (o - 1))] !== 0 && ((u[n] = 8), ++m),
                            r = 1;
                          r < a;
                          r++
                        ) {
                          d[f] !== d[f + 1] && ((u[n + r] = d[f] ? 4 : 8), ++m),
                            f++;
                        }
                        if ((d[f] !== 0 && ((u[n + r] = 4), ++m), m > 1e3))
                          return null;
                        const y = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]);
                        const b = [];
                        for (t = 0; m && t <= o; t++) {
                          for (var _ = t * s, A = _ + a; _ < A && !u[_]; ) _++;
                          if (_ !== A) {
                            var S;
                            const w = [_ % s, t];
                            let k = u[_];
                            const P = _;
                            do {
                              const x = y[k];
                              do {
                                _ += x;
                              } while (!u[_]);
                              (S = u[_]) !== 5 && S !== 10
                                ? ((k = S), (u[_] = 0))
                                : ((k = S & ((51 * k) >> 4)),
                                  (u[_] &= (k >> 2) | (k << 2))),
                                w.push(_ % s),
                                w.push((_ / s) | 0),
                                --m;
                            } while (P !== _);
                            b.push(w), --t;
                          }
                        }
                        return function(e) {
                          e.save(),
                            e.scale(1 / a, -1 / o),
                            e.translate(0, -o),
                            e.beginPath();
                          for (let t = 0, r = b.length; t < r; t++) {
                            const n = b[t];
                            e.moveTo(n[0], n[1]);
                            for (let i = 2, s = n.length; i < s; i += 2)
                              e.lineTo(n[i], n[i + 1]);
                          }
                          e.fill(), e.beginPath(), e.restore();
                        };
                      })({ data: e.data, width: n, height: i })
                    : null),
              s && s.compiled)
            )
              s.compiled(t);
            else {
              const u = this.cachedCanvases.getCanvas("maskCanvas", n, i);
              const l = u.context;
              l.save(),
                r(l, e),
                (l.globalCompositeOperation = "source-in"),
                (l.fillStyle = o ? a.getPattern(l, this) : a),
                l.fillRect(0, 0, n, i),
                l.restore(),
                this.paintInlineImageXObject(u.canvas);
            }
          },
          paintImageMaskXObjectRepeat(e, t, n, i) {
            const a = e.width;
            const o = e.height;
            const s = this.current.fillColor;
            const u = this.current.patternFill;
            const l = this.cachedCanvases.getCanvas("maskCanvas", a, o);
            const c = l.context;
            c.save(),
              r(c, e),
              (c.globalCompositeOperation = "source-in"),
              (c.fillStyle = u ? s.getPattern(c, this) : s),
              c.fillRect(0, 0, a, o),
              c.restore();
            for (let h = this.ctx, d = 0, f = i.length; d < f; d += 2) {
              h.save(),
                h.transform(t, 0, 0, n, i[d], i[d + 1]),
                h.scale(1, -1),
                h.drawImage(l.canvas, 0, 0, a, o, 0, -1, 1, 1),
                h.restore();
            }
          },
          paintImageMaskXObjectGroup(e) {
            for (
              let t = this.ctx,
                n = this.current.fillColor,
                i = this.current.patternFill,
                a = 0,
                o = e.length;
              a < o;
              a++
            ) {
              const s = e[a];
              const u = s.width;
              const l = s.height;
              const c = this.cachedCanvases.getCanvas("maskCanvas", u, l);
              const h = c.context;
              h.save(),
                r(h, s),
                (h.globalCompositeOperation = "source-in"),
                (h.fillStyle = i ? n.getPattern(h, this) : n),
                h.fillRect(0, 0, u, l),
                h.restore(),
                t.save(),
                t.transform.apply(t, s.transform),
                t.scale(1, -1),
                t.drawImage(c.canvas, 0, 0, u, l, 0, -1, 1, 1),
                t.restore();
            }
          },
          paintImageXObject(e) {
            const t = this.objs.get(e);
            t
              ? this.paintInlineImageXObject(t)
              : (0, n.warn)("Dependent image isn't ready yet");
          },
          paintImageXObjectRepeat(e, t, r, i) {
            const a = this.objs.get(e);
            if (a) {
              for (
                var o = a.width, s = a.height, u = [], l = 0, c = i.length;
                l < c;
                l += 2
              ) {
                u.push({
                  transform: [t, 0, 0, r, i[l], i[l + 1]],
                  x: 0,
                  y: 0,
                  w: o,
                  h: s
                });
              }
              this.paintInlineImageXObjectGroup(a, u);
            } else (0, n.warn)("Dependent image isn't ready yet");
          },
          paintInlineImageXObject(e) {
            const r = e.width;
            const n = e.height;
            const i = this.ctx;
            this.save(), i.scale(1 / r, -1 / n);
            let a;
            let o;
            const s = i.mozCurrentTransformInverse;
            const u = s[0];
            const l = s[1];
            let c = Math.max(Math.sqrt(u * u + l * l), 1);
            const h = s[2];
            const d = s[3];
            let f = Math.max(Math.sqrt(h * h + d * d), 1);
            if (
              (typeof HTMLElement === "function" && e instanceof HTMLElement) ||
              !e.data
            )
              a = e;
            else {
              var p = (o = this.cachedCanvases.getCanvas("inlineImage", r, n))
                .context;
              t(p, e), (a = o.canvas);
            }
            for (
              var v = r, m = n, g = "prescale1";
              (c > 2 && v > 1) || (f > 2 && m > 1);

            ) {
              let y = v;
              let b = m;
              c > 2 && v > 1 && (c /= v / (y = Math.ceil(v / 2))),
                f > 2 && m > 1 && (f /= m / (b = Math.ceil(m / 2))),
                (p = (o = this.cachedCanvases.getCanvas(g, y, b))
                  .context).clearRect(0, 0, y, b),
                p.drawImage(a, 0, 0, v, m, 0, 0, y, b),
                (a = o.canvas),
                (v = y),
                (m = b),
                (g = g === "prescale1" ? "prescale2" : "prescale1");
            }
            if ((i.drawImage(a, 0, 0, v, m, 0, -n, r, n), this.imageLayer)) {
              const _ = this.getCanvasPosition(0, -n);
              this.imageLayer.appendImage({
                imgData: e,
                left: _[0],
                top: _[1],
                width: r / s[0],
                height: n / s[3]
              });
            }
            this.restore();
          },
          paintInlineImageXObjectGroup(e, r) {
            const n = this.ctx;
            const i = e.width;
            const a = e.height;
            const o = this.cachedCanvases.getCanvas("inlineImage", i, a);
            t(o.context, e);
            for (let s = 0, u = r.length; s < u; s++) {
              const l = r[s];
              if (
                (n.save(),
                n.transform.apply(n, l.transform),
                n.scale(1, -1),
                n.drawImage(o.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1),
                this.imageLayer)
              ) {
                const c = this.getCanvasPosition(l.x, l.y);
                this.imageLayer.appendImage({
                  imgData: e,
                  left: c[0],
                  top: c[1],
                  width: i,
                  height: a
                });
              }
              n.restore();
            }
          },
          paintSolidColorImageMask() {
            this.ctx.fillRect(0, 0, 1, 1);
          },
          paintXObject() {
            (0, n.warn)("Unsupported 'paintXObject' command.");
          },
          markPoint(e) {},
          markPointProps(e, t) {},
          beginMarkedContent(e) {},
          beginMarkedContentProps(e, t) {},
          endMarkedContent() {},
          beginCompat() {},
          endCompat() {},
          consumePath() {
            const e = this.ctx;
            this.pendingClip &&
              (this.pendingClip === b ? e.clip("evenodd") : e.clip(),
              (this.pendingClip = null)),
              e.beginPath();
          },
          getSinglePixelWidth(e) {
            if (this._cachedGetSinglePixelWidth === null) {
              const t = this.ctx.mozCurrentTransformInverse;
              this._cachedGetSinglePixelWidth = Math.sqrt(
                Math.max(t[0] * t[0] + t[1] * t[1], t[2] * t[2] + t[3] * t[3])
              );
            }
            return this._cachedGetSinglePixelWidth;
          },
          getCanvasPosition(e, t) {
            const r = this.ctx.mozCurrentTransform;
            return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]];
          }
        }),
        n.OPS))
          e.prototype[n.OPS[_]] = e.prototype[_];
        return e;
      })();
      t.CanvasGraphics = c;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TilingPattern = t.getShadingPatternFromIR = void 0);
      const n = r(1);
      const i = {
        RadialAxial: {
          fromIR(e) {
            const t = e[1];
            const r = e[2];
            const n = e[3];
            const i = e[4];
            const a = e[5];
            const o = e[6];
            return {
              type: "Pattern",
              getPattern(e) {
                let s;
                t === "axial"
                  ? (s = e.createLinearGradient(n[0], n[1], i[0], i[1]))
                  : t === "radial" &&
                    (s = e.createRadialGradient(n[0], n[1], a, i[0], i[1], o));
                for (let u = 0, l = r.length; u < l; ++u) {
                  const c = r[u];
                  s.addColorStop(c[0], c[1]);
                }
                return s;
              }
            };
          }
        }
      };
      const a = (function() {
        function e(e, t, r, n, i, a, o, s) {
          let u;
          const l = t.coords;
          const c = t.colors;
          const h = e.data;
          const d = 4 * e.width;
          l[r + 1] > l[n + 1] &&
            ((u = r), (r = n), (n = u), (u = a), (a = o), (o = u)),
            l[n + 1] > l[i + 1] &&
              ((u = n), (n = i), (i = u), (u = o), (o = s), (s = u)),
            l[r + 1] > l[n + 1] &&
              ((u = r), (r = n), (n = u), (u = a), (a = o), (o = u));
          const f = (l[r] + t.offsetX) * t.scaleX;
          const p = (l[r + 1] + t.offsetY) * t.scaleY;
          const v = (l[n] + t.offsetX) * t.scaleX;
          const m = (l[n + 1] + t.offsetY) * t.scaleY;
          const g = (l[i] + t.offsetX) * t.scaleX;
          const y = (l[i + 1] + t.offsetY) * t.scaleY;
          if (!(p >= y)) {
            for (
              var b,
                _,
                A,
                S,
                w,
                k,
                P,
                x,
                C,
                R = c[a],
                E = c[a + 1],
                T = c[a + 2],
                O = c[o],
                I = c[o + 1],
                F = c[o + 2],
                L = c[s],
                j = c[s + 1],
                M = c[s + 2],
                D = Math.round(p),
                N = Math.round(y),
                q = D;
              q <= N;
              q++
            ) {
              q < m
                ? ((b =
                    f -
                    (f - v) *
                      (C = q < p ? 0 : p === m ? 1 : (p - q) / (p - m))),
                  (_ = R - (R - O) * C),
                  (A = E - (E - I) * C),
                  (S = T - (T - F) * C))
                : ((b =
                    v -
                    (v - g) *
                      (C = q > y ? 1 : m === y ? 0 : (m - q) / (m - y))),
                  (_ = O - (O - L) * C),
                  (A = I - (I - j) * C),
                  (S = F - (F - M) * C)),
                (w =
                  f -
                  (f - g) * (C = q < p ? 0 : q > y ? 1 : (p - q) / (p - y))),
                (k = R - (R - L) * C),
                (P = E - (E - j) * C),
                (x = T - (T - M) * C);
              for (
                let W = Math.round(Math.min(b, w)),
                  U = Math.round(Math.max(b, w)),
                  B = d * q + 4 * W,
                  z = W;
                z <= U;
                z++
              ) {
                (C = (C = (b - z) / (b - w)) < 0 ? 0 : C > 1 ? 1 : C),
                  (h[B++] = (_ - (_ - k) * C) | 0),
                  (h[B++] = (A - (A - P) * C) | 0),
                  (h[B++] = (S - (S - x) * C) | 0),
                  (h[B++] = 255);
              }
            }
          }
        }
        function t(t, r, n) {
          let i;
          let a;
          const o = r.coords;
          const s = r.colors;
          switch (r.type) {
            case "lattice":
              var u = r.verticesPerRow;
              var l = Math.floor(o.length / u) - 1;
              var c = u - 1;
              for (i = 0; i < l; i++) {
                for (let h = i * u, d = 0; d < c; d++, h++) {
                  e(t, n, o[h], o[h + 1], o[h + u], s[h], s[h + 1], s[h + u]),
                    e(
                      t,
                      n,
                      o[h + u + 1],
                      o[h + 1],
                      o[h + u],
                      s[h + u + 1],
                      s[h + 1],
                      s[h + u]
                    );
                }
              }
              break;
            case "triangles":
              for (i = 0, a = o.length; i < a; i += 3)
                e(t, n, o[i], o[i + 1], o[i + 2], s[i], s[i + 1], s[i + 2]);
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        return function(e, r, n, i, a, o, s, u) {
          let l;
          let c;
          let h;
          let d;
          const f = Math.floor(e[0]);
          const p = Math.floor(e[1]);
          const v = Math.ceil(e[2]) - f;
          const m = Math.ceil(e[3]) - p;
          const g = Math.min(Math.ceil(Math.abs(v * r[0] * 1.1)), 3e3);
          const y = Math.min(Math.ceil(Math.abs(m * r[1] * 1.1)), 3e3);
          const b = v / g;
          const _ = m / y;
          const A = {
            coords: n,
            colors: i,
            offsetX: -f,
            offsetY: -p,
            scaleX: 1 / b,
            scaleY: 1 / _
          };
          const S = g + 4;
          const w = y + 4;
          if (u.isEnabled) {
            (l = u.drawFigures({
              width: g,
              height: y,
              backgroundColor: o,
              figures: a,
              context: A
            })),
              (c = s.getCanvas("mesh", S, w, !1)).context.drawImage(l, 2, 2),
              (l = c.canvas);
          } else {
            const k = (c = s.getCanvas("mesh", S, w, !1)).context;
            const P = k.createImageData(g, y);
            if (o) {
              const x = P.data;
              for (h = 0, d = x.length; h < d; h += 4) {
                (x[h] = o[0]),
                  (x[h + 1] = o[1]),
                  (x[h + 2] = o[2]),
                  (x[h + 3] = 255);
              }
            }
            for (h = 0; h < a.length; h++) t(P, a[h], A);
            k.putImageData(P, 2, 2), (l = c.canvas);
          }
          return {
            canvas: l,
            offsetX: f - 2 * b,
            offsetY: p - 2 * _,
            scaleX: b,
            scaleY: _
          };
        };
      })();
      (i.Mesh = {
        fromIR(e) {
          const t = e[2];
          const r = e[3];
          const i = e[4];
          const o = e[5];
          const s = e[6];
          const u = e[8];
          return {
            type: "Pattern",
            getPattern(e, l, c) {
              let h;
              if (c)
                h = n.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
              else if (
                ((h = n.Util.singularValueDecompose2dScale(l.baseTransform)), s)
              ) {
                const d = n.Util.singularValueDecompose2dScale(s);
                h = [h[0] * d[0], h[1] * d[1]];
              }
              const f = a(
                o,
                h,
                t,
                r,
                i,
                c ? null : u,
                l.cachedCanvases,
                l.webGLContext
              );
              return (
                c ||
                  (e.setTransform.apply(e, l.baseTransform),
                  s && e.transform.apply(e, s)),
                e.translate(f.offsetX, f.offsetY),
                e.scale(f.scaleX, f.scaleY),
                e.createPattern(f.canvas, "no-repeat")
              );
            }
          };
        }
      }),
        (i.Dummy = {
          fromIR() {
            return {
              type: "Pattern",
              getPattern() {
                return "hotpink";
              }
            };
          }
        });
      const o = (function() {
        const e = 1;
        const t = 2;
        function r(e, t, r, n, i) {
          (this.operatorList = e[2]),
            (this.matrix = e[3] || [1, 0, 0, 1, 0, 0]),
            (this.bbox = e[4]),
            (this.xstep = e[5]),
            (this.ystep = e[6]),
            (this.paintType = e[7]),
            (this.tilingType = e[8]),
            (this.color = t),
            (this.canvasGraphicsFactory = n),
            (this.baseTransform = i),
            (this.type = "Pattern"),
            (this.ctx = r);
        }
        return (
          (r.prototype = {
            createPatternCanvas(e) {
              const t = this.operatorList;
              const r = this.bbox;
              const i = this.xstep;
              const a = this.ystep;
              const o = this.paintType;
              const s = this.tilingType;
              const u = this.color;
              const l = this.canvasGraphicsFactory;
              (0, n.info)(`TilingType: ${s}`);
              const c = r[0];
              const h = r[1];
              const d = r[2];
              const f = r[3];
              const p = [c, h];
              const v = [c + i, h + a];
              let m = v[0] - p[0];
              let g = v[1] - p[1];
              const y = n.Util.singularValueDecompose2dScale(this.matrix);
              const b = n.Util.singularValueDecompose2dScale(
                this.baseTransform
              );
              const _ = [y[0] * b[0], y[1] * b[1]];
              (m = Math.min(Math.ceil(Math.abs(m * _[0])), 3e3)),
                (g = Math.min(Math.ceil(Math.abs(g * _[1])), 3e3));
              const A = e.cachedCanvases.getCanvas("pattern", m, g, !0);
              const S = A.context;
              const w = l.createCanvasGraphics(S);
              (w.groupLevel = e.groupLevel),
                this.setFillAndStrokeStyleToContext(w, o, u),
                this.setScale(m, g, i, a),
                this.transformToScale(w);
              const k = [1, 0, 0, 1, -p[0], -p[1]];
              return (
                w.transform.apply(w, k),
                this.clipBbox(w, r, c, h, d, f),
                w.executeOperatorList(t),
                A.canvas
              );
            },
            setScale(e, t, r, n) {
              this.scale = [e / r, t / n];
            },
            transformToScale(e) {
              const t = this.scale;
              const r = [t[0], 0, 0, t[1], 0, 0];
              e.transform.apply(e, r);
            },
            scaleToContext() {
              const e = this.scale;
              this.ctx.scale(1 / e[0], 1 / e[1]);
            },
            clipBbox(e, t, r, n, i, a) {
              if (Array.isArray(t) && t.length === 4) {
                const o = i - r;
                const s = a - n;
                e.ctx.rect(r, n, o, s), e.clip(), e.endPath();
              }
            },
            setFillAndStrokeStyleToContext(r, i, a) {
              const o = r.ctx;
              const s = r.current;
              switch (i) {
                case e:
                  var u = this.ctx;
                  (o.fillStyle = u.fillStyle),
                    (o.strokeStyle = u.strokeStyle),
                    (s.fillColor = u.fillStyle),
                    (s.strokeColor = u.strokeStyle);
                  break;
                case t:
                  var l = n.Util.makeCssRgb(a[0], a[1], a[2]);
                  (o.fillStyle = l),
                    (o.strokeStyle = l),
                    (s.fillColor = l),
                    (s.strokeColor = l);
                  break;
                default:
                  throw new n.FormatError(`Unsupported paint type: ${i}`);
              }
            },
            getPattern(e, t) {
              const r = this.createPatternCanvas(t);
              return (
                (e = this.ctx).setTransform.apply(e, this.baseTransform),
                e.transform.apply(e, this.matrix),
                this.scaleToContext(),
                e.createPattern(r, "repeat")
              );
            }
          }),
          r
        );
      })();
      (t.getShadingPatternFromIR = function(e) {
        const t = i[e[0]];
        if (!t) throw new Error(`Unknown IR type: ${e[0]}`);
        return t.fromIR(e);
      }),
        (t.TilingPattern = o);
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = Object.create(null);
      (n.workerPort = void 0 === n.workerPort ? null : n.workerPort),
        (n.workerSrc = void 0 === n.workerSrc ? "" : n.workerSrc),
        (t.GlobalWorkerOptions = n);
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MessageHandler = void 0);
      let n;
      let i;
      let a;
      const o = r(137);
      const s = (n = o) && n.__esModule ? n : { default: n };
      const u =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof Symbol === "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      const l =
        ((i = s.default.mark(function e(t, r) {
          const n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          return s.default.wrap(
            e => {
              for (;;) {
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return e.abrupt("return", t.apply(n, r));
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            },
            e,
            this
          );
        })),
        (a = function() {
          const e = i.apply(this, arguments);
          return new Promise((t, r) =>
            (function n(i, a) {
              try {
                var o = e[i](a);
                var s = o.value;
              } catch (e) {
                return void r(e);
              }
              if (!o.done) {
                return Promise.resolve(s).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
              }
              t(s);
            })("next")
          );
        }),
        function(e, t) {
          return a.apply(this, arguments);
        });
      const c = r(1);
      function h(e) {
        if ((void 0 === e ? "undefined" : u(e)) !== "object") return e;
        switch (e.name) {
          case "AbortException":
            return new c.AbortException(e.message);
          case "MissingPDFException":
            return new c.MissingPDFException(e.message);
          case "UnexpectedResponseException":
            return new c.UnexpectedResponseException(e.message, e.status);
          default:
            return new c.UnknownErrorException(e.message, e.details);
        }
      }
      function d(e, t, r) {
        t ? e.resolve() : e.reject(r);
      }
      function f(e, t, r) {
        const n = this;
        (this.sourceName = e),
          (this.targetName = t),
          (this.comObj = r),
          (this.callbackId = 1),
          (this.streamId = 1),
          (this.postMessageTransfers = !0),
          (this.streamSinks = Object.create(null)),
          (this.streamControllers = Object.create(null));
        const i = (this.callbacksCapabilities = Object.create(null));
        const a = (this.actionHandler = Object.create(null));
        (this._onComObjOnMessage = function(e) {
          const t = e.data;
          if (t.targetName === n.sourceName) {
            if (t.stream) n._processStreamMessage(t);
            else if (t.isReply) {
              const o = t.callbackId;
              if (!(t.callbackId in i))
                throw new Error(`Cannot resolve callback ${o}`);
              const s = i[o];
              delete i[o],
                "error" in t ? s.reject(h(t.error)) : s.resolve(t.data);
            } else {
              if (!(t.action in a))
                throw new Error(`Unknown action from worker: ${t.action}`);
              const u = a[t.action];
              if (t.callbackId) {
                const l = n.sourceName;
                const d = t.sourceName;
                Promise.resolve()
                  .then(() => u[0].call(u[1], t.data))
                  .then(
                    e => {
                      r.postMessage({
                        sourceName: l,
                        targetName: d,
                        isReply: !0,
                        callbackId: t.callbackId,
                        data: e
                      });
                    },
                    e => {
                      r.postMessage({
                        sourceName: l,
                        targetName: d,
                        isReply: !0,
                        callbackId: t.callbackId,
                        error: (function(e) {
                          return !(e instanceof Error) ||
                            e instanceof c.AbortException ||
                            e instanceof c.MissingPDFException ||
                            e instanceof c.UnexpectedResponseException ||
                            e instanceof c.UnknownErrorException
                            ? e
                            : new c.UnknownErrorException(
                                e.message,
                                e.toString()
                              );
                        })(e)
                      });
                    }
                  );
              } else
                t.streamId ? n._createStreamSink(t) : u[0].call(u[1], t.data);
            }
          }
        }),
          r.addEventListener("message", this._onComObjOnMessage);
      }
      (f.prototype = {
        on(e, t, r) {
          const n = this.actionHandler;
          if (n[e]) {
            throw new Error(`There is already an actionName called "${e}"`);
          }
          n[e] = [t, r];
        },
        send(e, t, r) {
          const n = {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: e,
            data: t
          };
          this.postMessage(n, r);
        },
        sendWithPromise(e, t, r) {
          const n = this.callbackId++;
          const i = {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: e,
            data: t,
            callbackId: n
          };
          const a = (0, c.createPromiseCapability)();
          this.callbacksCapabilities[n] = a;
          try {
            this.postMessage(i, r);
          } catch (e) {
            a.reject(e);
          }
          return a.promise;
        },
        sendWithStream(e, t, r, n) {
          const i = this;
          const a = this.streamId++;
          const o = this.sourceName;
          const s = this.targetName;
          return new c.ReadableStream(
            {
              start(r) {
                const n = (0, c.createPromiseCapability)();
                return (
                  (i.streamControllers[a] = {
                    controller: r,
                    startCall: n,
                    isClosed: !1
                  }),
                  i.postMessage({
                    sourceName: o,
                    targetName: s,
                    action: e,
                    streamId: a,
                    data: t,
                    desiredSize: r.desiredSize
                  }),
                  n.promise
                );
              },
              pull(e) {
                const t = (0, c.createPromiseCapability)();
                return (
                  (i.streamControllers[a].pullCall = t),
                  i.postMessage({
                    sourceName: o,
                    targetName: s,
                    stream: "pull",
                    streamId: a,
                    desiredSize: e.desiredSize
                  }),
                  t.promise
                );
              },
              cancel(e) {
                const t = (0, c.createPromiseCapability)();
                return (
                  (i.streamControllers[a].cancelCall = t),
                  (i.streamControllers[a].isClosed = !0),
                  i.postMessage({
                    sourceName: o,
                    targetName: s,
                    stream: "cancel",
                    reason: e,
                    streamId: a
                  }),
                  t.promise
                );
              }
            },
            r
          );
        },
        _createStreamSink(e) {
          const t = this;
          const r = this;
          const n = this.actionHandler[e.action];
          const i = e.streamId;
          const a = e.desiredSize;
          const o = this.sourceName;
          const s = e.sourceName;
          const u = function(e) {
            const r = e.stream;
            const n = e.chunk;
            const a = e.transfers;
            const u = e.success;
            const l = e.reason;
            t.postMessage(
              {
                sourceName: o,
                targetName: s,
                stream: r,
                streamId: i,
                chunk: n,
                success: u,
                reason: l
              },
              a
            );
          };
          const h = {
            enqueue(e) {
              const t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              const r = arguments[2];
              if (!this.isCancelled) {
                const n = this.desiredSize;
                (this.desiredSize -= t),
                  n > 0 &&
                    this.desiredSize <= 0 &&
                    ((this.sinkCapability = (0, c.createPromiseCapability)()),
                    (this.ready = this.sinkCapability.promise)),
                  u({ stream: "enqueue", chunk: e, transfers: r });
              }
            },
            close() {
              this.isCancelled ||
                ((this.isCancelled = !0),
                u({ stream: "close" }),
                delete r.streamSinks[i]);
            },
            error(e) {
              this.isCancelled ||
                ((this.isCancelled = !0), u({ stream: "error", reason: e }));
            },
            sinkCapability: (0, c.createPromiseCapability)(),
            onPull: null,
            onCancel: null,
            isCancelled: !1,
            desiredSize: a,
            ready: null
          };
          h.sinkCapability.resolve(),
            (h.ready = h.sinkCapability.promise),
            (this.streamSinks[i] = h),
            l(n[0], [e.data, h], n[1]).then(
              () => {
                u({ stream: "start_complete", success: !0 });
              },
              e => {
                u({ stream: "start_complete", success: !1, reason: e });
              }
            );
        },
        _processStreamMessage(e) {
          const t = this;
          const r = this.sourceName;
          const n = e.sourceName;
          const i = e.streamId;
          const a = function(e) {
            const a = e.stream;
            const o = e.success;
            const s = e.reason;
            t.comObj.postMessage({
              sourceName: r,
              targetName: n,
              stream: a,
              success: o,
              streamId: i,
              reason: s
            });
          };
          const o = function() {
            Promise.all(
              [
                t.streamControllers[e.streamId].startCall,
                t.streamControllers[e.streamId].pullCall,
                t.streamControllers[e.streamId].cancelCall
              ].map(e => {
                return (
                  e && ((t = e.promise), Promise.resolve(t).catch(() => {}))
                );
                let t;
              })
            ).then(() => {
              delete t.streamControllers[e.streamId];
            });
          };
          switch (e.stream) {
            case "start_complete":
              d(
                this.streamControllers[e.streamId].startCall,
                e.success,
                h(e.reason)
              );
              break;
            case "pull_complete":
              d(
                this.streamControllers[e.streamId].pullCall,
                e.success,
                h(e.reason)
              );
              break;
            case "pull":
              if (!this.streamSinks[e.streamId]) {
                a({ stream: "pull_complete", success: !0 });
                break;
              }
              this.streamSinks[e.streamId].desiredSize <= 0 &&
                e.desiredSize > 0 &&
                this.streamSinks[e.streamId].sinkCapability.resolve(),
                (this.streamSinks[e.streamId].desiredSize = e.desiredSize),
                l(this.streamSinks[e.streamId].onPull).then(
                  () => {
                    a({ stream: "pull_complete", success: !0 });
                  },
                  e => {
                    a({ stream: "pull_complete", success: !1, reason: e });
                  }
                );
              break;
            case "enqueue":
              (0, c.assert)(
                this.streamControllers[e.streamId],
                "enqueue should have stream controller"
              ),
                this.streamControllers[e.streamId].isClosed ||
                  this.streamControllers[e.streamId].controller.enqueue(
                    e.chunk
                  );
              break;
            case "close":
              if (
                ((0, c.assert)(
                  this.streamControllers[e.streamId],
                  "close should have stream controller"
                ),
                this.streamControllers[e.streamId].isClosed)
              )
                break;
              (this.streamControllers[e.streamId].isClosed = !0),
                this.streamControllers[e.streamId].controller.close(),
                o();
              break;
            case "error":
              (0, c.assert)(
                this.streamControllers[e.streamId],
                "error should have stream controller"
              ),
                this.streamControllers[e.streamId].controller.error(
                  h(e.reason)
                ),
                o();
              break;
            case "cancel_complete":
              d(
                this.streamControllers[e.streamId].cancelCall,
                e.success,
                h(e.reason)
              ),
                o();
              break;
            case "cancel":
              if (!this.streamSinks[e.streamId]) break;
              l(this.streamSinks[e.streamId].onCancel, [h(e.reason)]).then(
                () => {
                  a({ stream: "cancel_complete", success: !0 });
                },
                e => {
                  a({ stream: "cancel_complete", success: !1, reason: e });
                }
              ),
                this.streamSinks[e.streamId].sinkCapability.reject(h(e.reason)),
                (this.streamSinks[e.streamId].isCancelled = !0),
                delete this.streamSinks[e.streamId];
              break;
            default:
              throw new Error("Unexpected stream case");
          }
        },
        postMessage(e, t) {
          t && this.postMessageTransfers
            ? this.comObj.postMessage(e, t)
            : this.comObj.postMessage(e);
        },
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }),
        (t.MessageHandler = f);
    },
    function(e, t, r) {
      e.exports = r(138);
    },
    function(e, t, r) {
      const n =
        (function() {
          return this;
        })() || Function("return this")();
      const i =
        n.regeneratorRuntime &&
        Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0;
      const a = i && n.regeneratorRuntime;
      if (((n.regeneratorRuntime = void 0), (e.exports = r(139)), i))
        n.regeneratorRuntime = a;
      else {
        try {
          delete n.regeneratorRuntime;
        } catch (e) {
          n.regeneratorRuntime = void 0;
        }
      }
    },
    function(e, t, r) {
      (function(e) {
        const t =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  typeof Symbol === "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        !(function(r) {
          let n;
          const i = Object.prototype;
          const a = i.hasOwnProperty;
          const o = typeof Symbol === "function" ? Symbol : {};
          const s = o.iterator || "@@iterator";
          const u = o.asyncIterator || "@@asyncIterator";
          const l = o.toStringTag || "@@toStringTag";
          const c = t(e) === "object";
          let h = r.regeneratorRuntime;
          if (h) c && (e.exports = h);
          else {
            (h = r.regeneratorRuntime = c ? e.exports : {}).wrap = A;
            var d = "suspendedStart";
            var f = "suspendedYield";
            var p = "executing";
            var v = "completed";
            var m = {};
            let g = {};
            g[s] = function() {
              return this;
            };
            const y = Object.getPrototypeOf;
            const b = y && y(y(I([])));
            b && b !== i && a.call(b, s) && (g = b);
            const _ = (P.prototype = w.prototype = Object.create(g));
            (k.prototype = _.constructor = P),
              (P.constructor = k),
              (P[l] = k.displayName = "GeneratorFunction"),
              (h.isGeneratorFunction = function(e) {
                const t = typeof e === "function" && e.constructor;
                return (
                  !!t &&
                  (t === k || (t.displayName || t.name) === "GeneratorFunction")
                );
              }),
              (h.mark = function(e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, P)
                    : ((e.__proto__ = P),
                      l in e || (e[l] = "GeneratorFunction")),
                  (e.prototype = Object.create(_)),
                  e
                );
              }),
              (h.awrap = function(e) {
                return { __await: e };
              }),
              x(C.prototype),
              (C.prototype[u] = function() {
                return this;
              }),
              (h.AsyncIterator = C),
              (h.async = function(e, t, r, n) {
                const i = new C(A(e, t, r, n));
                return h.isGeneratorFunction(t)
                  ? i
                  : i.next().then(e => (e.done ? e.value : i.next()));
              }),
              x(_),
              (_[l] = "Generator"),
              (_[s] = function() {
                return this;
              }),
              (_.toString = function() {
                return "[object Generator]";
              }),
              (h.keys = function(e) {
                const t = [];
                for (const r in e) t.push(r);
                return (
                  t.reverse(),
                  function r() {
                    for (; t.length; ) {
                      const n = t.pop();
                      if (n in e) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (h.values = I),
              (O.prototype = {
                constructor: O,
                reset(e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(T),
                    !e)
                  ) {
                    for (const t in this) {
                      t.charAt(0) === "t" &&
                        a.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = n);
                    }
                  }
                },
                stop() {
                  this.done = !0;
                  const e = this.tryEntries[0].completion;
                  if (e.type === "throw") throw e.arg;
                  return this.rval;
                },
                dispatchException(e) {
                  if (this.done) throw e;
                  const t = this;
                  function r(r, i) {
                    return (
                      (s.type = "throw"),
                      (s.arg = e),
                      (t.next = r),
                      i && ((t.method = "next"), (t.arg = n)),
                      !!i
                    );
                  }
                  for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                    const o = this.tryEntries[i];
                    var s = o.completion;
                    if (o.tryLoc === "root") return r("end");
                    if (o.tryLoc <= this.prev) {
                      const u = a.call(o, "catchLoc");
                      const l = a.call(o, "finallyLoc");
                      if (u && l) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                      } else if (u) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      } else {
                        if (!l) {
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        }
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt(e, t) {
                  for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                    const n = this.tryEntries[r];
                    if (
                      n.tryLoc <= this.prev &&
                      a.call(n, "finallyLoc") &&
                      this.prev < n.finallyLoc
                    ) {
                      var i = n;
                      break;
                    }
                  }
                  i &&
                    (e === "break" || e === "continue") &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  const o = i ? i.completion : {};
                  return (
                    (o.type = e),
                    (o.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                      : this.complete(o)
                  );
                },
                complete(e, t) {
                  if (e.type === "throw") throw e.arg;
                  return (
                    e.type === "break" || e.type === "continue"
                      ? (this.next = e.arg)
                      : e.type === "return"
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : e.type === "normal" && t && (this.next = t),
                    m
                  );
                },
                finish(e) {
                  for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                    const r = this.tryEntries[t];
                    if (r.finallyLoc === e)
                      return this.complete(r.completion, r.afterLoc), T(r), m;
                  }
                },
                catch(e) {
                  for (let t = this.tryEntries.length - 1; t >= 0; --t) {
                    const r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                      const n = r.completion;
                      if (n.type === "throw") {
                        var i = n.arg;
                        T(r);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield(e, t, r) {
                  return (
                    (this.delegate = {
                      iterator: I(e),
                      resultName: t,
                      nextLoc: r
                    }),
                    this.method === "next" && (this.arg = n),
                    m
                  );
                }
              });
          }
          function A(e, t, r, n) {
            const i = t && t.prototype instanceof w ? t : w;
            const a = Object.create(i.prototype);
            const o = new O(n || []);
            return (
              (a._invoke = (function(e, t, r) {
                let n = d;
                return function(i, a) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === v) {
                    if (i === "throw") throw a;
                    return F();
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    const o = r.delegate;
                    if (o) {
                      const s = R(o, r);
                      if (s) {
                        if (s === m) continue;
                        return s;
                      }
                    }
                    if (r.method === "next") r.sent = r._sent = r.arg;
                    else if (r.method === "throw") {
                      if (n === d) throw ((n = v), r.arg);
                      r.dispatchException(r.arg);
                    } else r.method === "return" && r.abrupt("return", r.arg);
                    n = p;
                    const u = S(e, t, r);
                    if (u.type === "normal") {
                      if (((n = r.done ? v : f), u.arg === m)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    u.type === "throw" &&
                      ((n = v), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(e, r, o)),
              a
            );
          }
          function S(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          function w() {}
          function k() {}
          function P() {}
          function x(e) {
            ["next", "throw", "return"].forEach(t => {
              e[t] = function(e) {
                return this._invoke(t, e);
              };
            });
          }
          function C(e) {
            let r;
            this._invoke = function(n, i) {
              function o() {
                return new Promise((r, o) => {
                  !(function r(n, i, o, s) {
                    const u = S(e[n], e, i);
                    if (u.type !== "throw") {
                      const l = u.arg;
                      const c = l.value;
                      return c &&
                        (void 0 === c ? "undefined" : t(c)) === "object" &&
                        a.call(c, "__await")
                        ? Promise.resolve(c.__await).then(
                            e => {
                              r("next", e, o, s);
                            },
                            e => {
                              r("throw", e, o, s);
                            }
                          )
                        : Promise.resolve(c).then(e => {
                            (l.value = e), o(l);
                          }, s);
                    }
                    s(u.arg);
                  })(n, i, r, o);
                });
              }
              return (r = r ? r.then(o, o) : o());
            };
          }
          function R(e, t) {
            const r = e.iterator[t.method];
            if (r === n) {
              if (((t.delegate = null), t.method === "throw")) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = n),
                  R(e, t),
                  t.method === "throw")
                )
                  return m;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return m;
            }
            const i = S(r, e.iterator, t.arg);
            if (i.type === "throw") {
              return (
                (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), m
              );
            }
            const a = i.arg;
            return a
              ? a.done
                ? ((t[e.resultName] = a.value),
                  (t.next = e.nextLoc),
                  t.method !== "return" && ((t.method = "next"), (t.arg = n)),
                  (t.delegate = null),
                  m)
                : a
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                m);
          }
          function E(e) {
            const t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function T(e) {
            const t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(E, this),
              this.reset(!0);
          }
          function I(e) {
            if (e) {
              const t = e[s];
              if (t) return t.call(e);
              if (typeof e.next === "function") return e;
              if (!isNaN(e.length)) {
                let r = -1;
                const i = function t() {
                  for (; ++r < e.length; )
                    if (a.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = n), (t.done = !0), t;
                };
                return (i.next = i);
              }
            }
            return { next: F };
          }
          function F() {
            return { value: n, done: !0 };
          }
        })(
          (function() {
            return this;
          })() || Function("return this")()
        );
      }.call(this, r(140)(e)));
    },
    function(e, t, r) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Metadata = void 0);
      const n = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const i = r(1);
      const a = r(142);
      const o = (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (0, i.assert)(
              typeof t === "string",
              "Metadata: input is not a string"
            ),
            (t = this._repair(t));
          const r = new a.SimpleXMLParser().parseFromString(t);
          (this._metadata = Object.create(null)), r && this._parse(r);
        }
        return (
          n(e, [
            {
              key: "_repair",
              value(e) {
                return e.replace(/>\\376\\377([^<]+)/g, (e, t) => {
                  for (
                    var r = t
                        .replace(/\\([0-3])([0-7])([0-7])/g, (e, t, r, n) =>
                          String.fromCharCode(64 * t + 8 * r + 1 * n)
                        )
                        .replace(/&(amp|apos|gt|lt|quot);/g, (e, t) => {
                          switch (t) {
                            case "amp":
                              return "&";
                            case "apos":
                              return "'";
                            case "gt":
                              return ">";
                            case "lt":
                              return "<";
                            case "quot":
                              return '"';
                          }
                          throw new Error(`_repair: ${t} isn't defined.`);
                        }),
                      n = "",
                      i = 0,
                      a = r.length;
                    i < a;
                    i += 2
                  ) {
                    const o = 256 * r.charCodeAt(i) + r.charCodeAt(i + 1);
                    n +=
                      o >= 32 && o < 127 && o !== 60 && o !== 62 && o !== 38
                        ? String.fromCharCode(o)
                        : `&#x${(65536 + o).toString(16).substring(1)};`;
                  }
                  return `>${n}`;
                });
              }
            },
            {
              key: "_parse",
              value(e) {
                let t = e.documentElement;
                if (t.nodeName.toLowerCase() !== "rdf:rdf") {
                  for (
                    t = t.firstChild;
                    t && t.nodeName.toLowerCase() !== "rdf:rdf";

                  )
                    t = t.nextSibling;
                }
                const r = t ? t.nodeName.toLowerCase() : null;
                if (t && r === "rdf:rdf" && t.hasChildNodes()) {
                  for (let n = t.childNodes, i = 0, a = n.length; i < a; i++) {
                    let o = n[i];
                    if (o.nodeName.toLowerCase() === "rdf:description") {
                      for (let s = 0, u = o.childNodes.length; s < u; s++) {
                        if (
                          "#text" !== o.childNodes[s].nodeName.toLowerCase()
                        ) {
                          var l = o.childNodes[s];
                          var c = l.nodeName.toLowerCase();
                          this._metadata[c] = l.textContent.trim();
                        }
                      }
                    }
                  }
                }
              }
            },
            {
              key: "get",
              value(e) {
                return this._metadata[e] || null;
              }
            },
            {
              key: "getAll",
              value() {
                return this._metadata;
              }
            },
            {
              key: "has",
              value(e) {
                return void 0 !== this._metadata[e];
              }
            }
          ]),
          e
        );
      })();
      t.Metadata = o;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) {
            return (function(e, t) {
              const r = [];
              let n = !0;
              let i = !1;
              let a = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return r;
            })(e, t);
          }
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      const i = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      const o = {
        NoError: 0,
        EndOfDocument: -1,
        UnterminatedCdat: -2,
        UnterminatedXmlDeclaration: -3,
        UnterminatedDoctypeDeclaration: -4,
        UnterminatedComment: -5,
        MalformedElement: -6,
        OutOfMemory: -7,
        UnterminatedAttributeValue: -8,
        UnterminatedElement: -9,
        ElementNeverBegun: -10
      };
      function s(e, t) {
        const r = e[t];
        return r === " " || r === "\n" || r === "\r" || r === "\t";
      }
      const u = (function() {
        function e() {
          a(this, e);
        }
        return (
          i(e, [
            {
              key: "_resolveEntities",
              value(e) {
                return e.replace(/&([^;]+);/g, function(e, t) {
                  if (t.substring(0, 2) === "#x")
                    return String.fromCharCode(parseInt(t.substring(2), 16));
                  if (t.substring(0, 1) === "#")
                    return String.fromCharCode(parseInt(t.substring(1), 10));
                  switch (t) {
                    case "lt":
                      return "<";
                    case "gt":
                      return ">";
                    case "amp":
                      return "&";
                    case "quot":
                      return '"';
                  }
                  return this.onResolveEntity(t);
                });
              }
            },
            {
              key: "_parseContent",
              value(e, t) {
                let r;
                let n = t;
                const i = [];
                function a() {
                  for (; n < e.length && s(e, n); ) ++n;
                }
                for (
                  ;
                  n < e.length && !s(e, n) && e[n] !== ">" && e[n] !== "/";

                )
                  ++n;
                for (
                  r = e.substring(t, n), a();
                  n < e.length && e[n] !== ">" && e[n] !== "/" && e[n] !== "?";

                ) {
                  a();
                  for (
                    var o, u = "";
                    n < e.length && !s(e, n) && e[n] !== "=";

                  )
                    (u += e[n]), ++n;
                  if ((a(), e[n] !== "=")) return null;
                  ++n, a();
                  const l = e[n];
                  if (l !== '"' && l !== "'") return null;
                  const c = e.indexOf(l, ++n);
                  if (c < 0) return null;
                  (o = e.substring(n, c)),
                    i.push({ name: u, value: this._resolveEntities(o) }),
                    (n = c + 1),
                    a();
                }
                return { name: r, attributes: i, parsed: n - t };
              }
            },
            {
              key: "_parseProcessingInstruction",
              value(e, t) {
                let r;
                let n = t;
                for (
                  ;
                  n < e.length && !s(e, n) && e[n] !== ">" && e[n] !== "/";

                )
                  ++n;
                (r = e.substring(t, n)),
                  (function() {
                    for (; n < e.length && s(e, n); ) ++n;
                  })();
                for (
                  var i = n;
                  n < e.length && (e[n] !== "?" || e[n + 1] !== ">");

                )
                  ++n;
                return { name: r, value: e.substring(i, n), parsed: n - t };
              }
            },
            {
              key: "parseXml",
              value(e) {
                for (let t = 0; t < e.length; ) {
                  let r = t;
                  if (e[t] === "<") {
                    let n = void 0;
                    switch (e[++r]) {
                      case "/":
                        if ((++r, (n = e.indexOf(">", r)) < 0))
                          return void this.onError(o.UnterminatedElement);
                        this.onEndElement(e.substring(r, n)), (r = n + 1);
                        break;
                      case "?":
                        ++r;
                        var i = this._parseProcessingInstruction(e, r);
                        if (
                          e.substring(r + i.parsed, r + i.parsed + 2) !== "?>"
                        ) {
                          return void this.onError(
                            o.UnterminatedXmlDeclaration
                          );
                        }
                        this.onPi(i.name, i.value), (r += i.parsed + 2);
                        break;
                      case "!":
                        if (e.substring(r + 1, r + 3) === "--") {
                          if ((n = e.indexOf("--\x3e", r + 3)) < 0)
                            return void this.onError(o.UnterminatedComment);
                          this.onComment(e.substring(r + 3, n)), (r = n + 3);
                        } else if (e.substring(r + 1, r + 8) === "[CDATA[") {
                          if ((n = e.indexOf("]]>", r + 8)) < 0)
                            return void this.onError(o.UnterminatedCdat);
                          this.onCdata(e.substring(r + 8, n)), (r = n + 3);
                        } else {
                          if (e.substring(r + 1, r + 8) !== "DOCTYPE")
                            return void this.onError(o.MalformedElement);
                          const a = e.indexOf("[", r + 8);
                          let s = !1;
                          if ((n = e.indexOf(">", r + 8)) < 0) {
                            return void this.onError(
                              o.UnterminatedDoctypeDeclaration
                            );
                          }
                          if (a > 0 && n > a) {
                            if ((n = e.indexOf("]>", r + 8)) < 0) {
                              return void this.onError(
                                o.UnterminatedDoctypeDeclaration
                              );
                            }
                            s = !0;
                          }
                          const u = e.substring(r + 8, n + (s ? 1 : 0));
                          this.onDoctype(u), (r = n + (s ? 2 : 1));
                        }
                        break;
                      default:
                        var l = this._parseContent(e, r);
                        if (l === null)
                          return void this.onError(o.MalformedElement);
                        var c = !1;
                        if (
                          e.substring(r + l.parsed, r + l.parsed + 2) === "/>"
                        )
                          c = !0;
                        else if (
                          e.substring(r + l.parsed, r + l.parsed + 1) !== ">"
                        )
                          return void this.onError(o.UnterminatedElement);
                        this.onBeginElement(l.name, l.attributes, c),
                          (r += l.parsed + (c ? 2 : 1));
                    }
                  } else {
                    for (; r < e.length && e[r] !== "<"; ) r++;
                    const h = e.substring(t, r);
                    this.onText(this._resolveEntities(h));
                  }
                  t = r;
                }
              }
            },
            {
              key: "onResolveEntity",
              value(e) {
                return `&${e};`;
              }
            },
            { key: "onPi", value(e, t) {} },
            { key: "onComment", value(e) {} },
            { key: "onCdata", value(e) {} },
            { key: "onDoctype", value(e) {} },
            { key: "onText", value(e) {} },
            { key: "onBeginElement", value(e, t, r) {} },
            { key: "onEndElement", value(e) {} },
            { key: "onError", value(e) {} }
          ]),
          e
        );
      })();
      const l = (function() {
        function e(t, r) {
          a(this, e),
            (this.nodeName = t),
            (this.nodeValue = r),
            Object.defineProperty(this, "parentNode", {
              value: null,
              writable: !0
            });
        }
        return (
          i(e, [
            {
              key: "hasChildNodes",
              value() {
                return this.childNodes && this.childNodes.length > 0;
              }
            },
            {
              key: "firstChild",
              get() {
                return this.childNodes[0];
              }
            },
            {
              key: "nextSibling",
              get() {
                const e = this.parentNode.childNodes.indexOf(this);
                return this.parentNode.childNodes[e + 1];
              }
            },
            {
              key: "textContent",
              get() {
                return this.childNodes
                  ? this.childNodes.map(e => e.textContent).join("")
                  : this.nodeValue || "";
              }
            }
          ]),
          e
        );
      })();
      const c = (function(e) {
        function t() {
          a(this, t);
          const e = (function(e, t) {
            if (!e) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return !t || (typeof t !== "object" && typeof t !== "function")
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e._currentFragment = null),
            (e._stack = null),
            (e._errorCode = o.NoError),
            e
          );
        }
        return (
          (function(e, t) {
            if (typeof t !== "function" && t !== null) {
              throw new TypeError(
                `Super expression must either be null or a function, not ${typeof t}`
              );
            }
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, u),
          i(t, [
            {
              key: "parseFromString",
              value(e) {
                if (
                  ((this._currentFragment = []),
                  (this._stack = []),
                  (this._errorCode = o.NoError),
                  this.parseXml(e),
                  this._errorCode === o.NoError)
                ) {
                  const t = n(this._currentFragment, 1)[0];
                  if (t) return { documentElement: t };
                }
              }
            },
            {
              key: "onResolveEntity",
              value(e) {
                switch (e) {
                  case "apos":
                    return "'";
                }
                return (function e(t, r, n) {
                  t === null && (t = Function.prototype);
                  const i = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === i) {
                    const a = Object.getPrototypeOf(t);
                    return a === null ? void 0 : e(a, r, n);
                  }
                  if ("value" in i) return i.value;
                  const o = i.get;
                  return void 0 !== o ? o.call(n) : void 0;
                })(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "onResolveEntity",
                  this
                ).call(this, e);
              }
            },
            {
              key: "onText",
              value(e) {
                if (
                  !(function(e) {
                    for (let t = 0, r = e.length; t < r; t++)
                      if (!s(e, t)) return !1;
                    return !0;
                  })(e)
                ) {
                  const t = new l("#text", e);
                  this._currentFragment.push(t);
                }
              }
            },
            {
              key: "onCdata",
              value(e) {
                const t = new l("#text", e);
                this._currentFragment.push(t);
              }
            },
            {
              key: "onBeginElement",
              value(e, t, r) {
                const n = new l(e);
                (n.childNodes = []),
                  this._currentFragment.push(n),
                  r ||
                    (this._stack.push(this._currentFragment),
                    (this._currentFragment = n.childNodes));
              }
            },
            {
              key: "onEndElement",
              value(e) {
                this._currentFragment = this._stack.pop();
                for (
                  let t = this._currentFragment[
                      this._currentFragment.length - 1
                    ],
                    r = 0,
                    n = t.childNodes.length;
                  r < n;
                  r++
                )
                  t.childNodes[r].parentNode = t;
              }
            },
            {
              key: "onError",
              value(e) {
                this._errorCode = e;
              }
            }
          ]),
          t
        );
      })();
      t.SimpleXMLParser = c;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFDataTransportStream = void 0);
      let n;
      const i = r(137);
      const a = (n = i) && n.__esModule ? n : { default: n };
      const o = r(1);
      function s(e) {
        return function() {
          const t = e.apply(this, arguments);
          return new Promise((e, r) =>
            (function n(i, a) {
              try {
                var o = t[i](a);
                var s = o.value;
              } catch (e) {
                return void r(e);
              }
              if (!o.done) {
                return Promise.resolve(s).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
              }
              e(s);
            })("next")
          );
        };
      }
      const u = (function() {
        function e(e, t) {
          const r = this;
          (0, o.assert)(t), (this._queuedChunks = []);
          const n = e.initialData;
          if (n && n.length > 0) {
            const i = new Uint8Array(n).buffer;
            this._queuedChunks.push(i);
          }
          (this._pdfDataRangeTransport = t),
            (this._isStreamingSupported = !e.disableStream),
            (this._isRangeSupported = !e.disableRange),
            (this._contentLength = e.length),
            (this._fullRequestReader = null),
            (this._rangeReaders = []),
            this._pdfDataRangeTransport.addRangeListener((e, t) => {
              r._onReceiveData({ begin: e, chunk: t });
            }),
            this._pdfDataRangeTransport.addProgressListener(e => {
              r._onProgress({ loaded: e });
            }),
            this._pdfDataRangeTransport.addProgressiveReadListener(e => {
              r._onReceiveData({ chunk: e });
            }),
            this._pdfDataRangeTransport.transportReady();
        }
        function t(e, t) {
          (this._stream = e),
            (this._done = !1),
            (this._filename = null),
            (this._queuedChunks = t || []),
            (this._requests = []),
            (this._headersReady = Promise.resolve()),
            (e._fullRequestReader = this),
            (this.onProgress = null);
        }
        function r(e, t, r) {
          (this._stream = e),
            (this._begin = t),
            (this._end = r),
            (this._queuedChunk = null),
            (this._requests = []),
            (this._done = !1),
            (this.onProgress = null);
        }
        return (
          (e.prototype = {
            _onReceiveData(e) {
              const t = new Uint8Array(e.chunk).buffer;
              if (void 0 === e.begin) {
                this._fullRequestReader
                  ? this._fullRequestReader._enqueue(t)
                  : this._queuedChunks.push(t);
              } else {
                const r = this._rangeReaders.some(
                  r => r._begin === e.begin && (r._enqueue(t), !0)
                );
                (0, o.assert)(r);
              }
            },
            _onProgress(e) {
              if (this._rangeReaders.length > 0) {
                const t = this._rangeReaders[0];
                t.onProgress && t.onProgress({ loaded: e.loaded });
              }
            },
            _removeRangeReader(e) {
              const t = this._rangeReaders.indexOf(e);
              t >= 0 && this._rangeReaders.splice(t, 1);
            },
            getFullReader() {
              (0, o.assert)(!this._fullRequestReader);
              const e = this._queuedChunks;
              return (this._queuedChunks = null), new t(this, e);
            },
            getRangeReader(e, t) {
              const n = new r(this, e, t);
              return (
                this._pdfDataRangeTransport.requestDataRange(e, t),
                this._rangeReaders.push(n),
                n
              );
            },
            cancelAllRequests(e) {
              this._fullRequestReader && this._fullRequestReader.cancel(e),
                this._rangeReaders.slice(0).forEach(t => {
                  t.cancel(e);
                }),
                this._pdfDataRangeTransport.abort();
            }
          }),
          (t.prototype = {
            _enqueue(e) {
              this._done ||
                (this._requests.length > 0
                  ? this._requests.shift().resolve({ value: e, done: !1 })
                  : this._queuedChunks.push(e));
            },
            get headersReady() {
              return this._headersReady;
            },
            get filename() {
              return this._filename;
            },
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            },
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            },
            get contentLength() {
              return this._stream._contentLength;
            },
            read: (function() {
              const e = s(
                a.default.mark(function e() {
                  let t;
                  let r;
                  return a.default.wrap(
                    function(e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(this._queuedChunks.length > 0)) {
                              e.next = 3;
                              break;
                            }
                            return (
                              (t = this._queuedChunks.shift()),
                              e.abrupt("return", { value: t, done: !1 })
                            );
                          case 3:
                            if (!this._done) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return", {
                              value: void 0,
                              done: !0
                            });
                          case 5:
                            return (
                              (r = (0, o.createPromiseCapability)()),
                              this._requests.push(r),
                              e.abrupt("return", r.promise)
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                      }
                    },
                    e,
                    this
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            cancel(e) {
              (this._done = !0),
                this._requests.forEach(e => {
                  e.resolve({ value: void 0, done: !0 });
                }),
                (this._requests = []);
            }
          }),
          (r.prototype = {
            _enqueue(e) {
              if (!this._done) {
                if (this._requests.length === 0) this._queuedChunk = e;
                else {
                  this._requests.shift().resolve({ value: e, done: !1 }),
                    this._requests.forEach(e => {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []);
                }
                (this._done = !0), this._stream._removeRangeReader(this);
              }
            },
            get isStreamingSupported() {
              return !1;
            },
            read: (function() {
              const e = s(
                a.default.mark(function e() {
                  let t;
                  let r;
                  return a.default.wrap(
                    function(e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this._queuedChunk) {
                              e.next = 4;
                              break;
                            }
                            return (
                              (t = this._queuedChunk),
                              (this._queuedChunk = null),
                              e.abrupt("return", { value: t, done: !1 })
                            );
                          case 4:
                            if (!this._done) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return", {
                              value: void 0,
                              done: !0
                            });
                          case 6:
                            return (
                              (r = (0, o.createPromiseCapability)()),
                              this._requests.push(r),
                              e.abrupt("return", r.promise)
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                      }
                    },
                    e,
                    this
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            cancel(e) {
              (this._done = !0),
                this._requests.forEach(e => {
                  e.resolve({ value: void 0, done: !0 });
                }),
                (this._requests = []),
                this._stream._removeRangeReader(this);
            }
          }),
          e
        );
      })();
      t.PDFDataTransportStream = u;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebGLContext = void 0);
      const n = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const i = r(1);
      const a = (function() {
        function e(t) {
          const r = t.enable;
          const n = void 0 !== r && r;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._enabled = !0 === n);
        }
        return (
          n(e, [
            {
              key: "composeSMask",
              value(e) {
                const t = e.layer;
                const r = e.mask;
                const n = e.properties;
                return o.composeSMask(t, r, n);
              }
            },
            {
              key: "drawFigures",
              value(e) {
                const t = e.width;
                const r = e.height;
                const n = e.backgroundColor;
                const i = e.figures;
                const a = e.context;
                return o.drawFigures(t, r, n, i, a);
              }
            },
            {
              key: "clear",
              value() {
                o.cleanup();
              }
            },
            {
              key: "isEnabled",
              get() {
                let e = this._enabled;
                return (
                  e && (e = o.tryInitGL()), (0, i.shadow)(this, "isEnabled", e)
                );
              }
            }
          ]),
          e
        );
      })();
      var o = (function() {
        function e(e, t, r) {
          const n = e.createShader(r);
          if (
            (e.shaderSource(n, t),
            e.compileShader(n),
            !e.getShaderParameter(n, e.COMPILE_STATUS))
          ) {
            const i = e.getShaderInfoLog(n);
            throw new Error(`Error during shader compilation: ${i}`);
          }
          return n;
        }
        function t(t, r) {
          return e(t, r, t.VERTEX_SHADER);
        }
        function r(t, r) {
          return e(t, r, t.FRAGMENT_SHADER);
        }
        function n(e, t) {
          for (var r = e.createProgram(), n = 0, i = t.length; n < i; ++n)
            e.attachShader(r, t[n]);
          if ((e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS))) {
            const a = e.getProgramInfoLog(r);
            throw new Error(`Error during program linking: ${a}`);
          }
          return r;
        }
        function i(e, t, r) {
          e.activeTexture(r);
          const n = e.createTexture();
          return (
            e.bindTexture(e.TEXTURE_2D, n),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            n
          );
        }
        let a;
        let o;
        function s() {
          a ||
            ((o = document.createElement("canvas")),
            (a = o.getContext("webgl", { premultipliedalpha: !1 })));
        }
        const u =
          "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ";
        const l =
          "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ";
        let c = null;
        const h =
          "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ";
        const d =
          "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ";
        let f = null;
        return {
          tryInitGL() {
            try {
              return s(), !!a;
            } catch (e) {}
            return !1;
          },
          composeSMask(e, h, d) {
            const f = e.width;
            const p = e.height;
            c ||
              (function() {
                let e;
                let i;
                s(), (e = o), (o = null), (i = a), (a = null);
                const h = n(i, [t(i, u), r(i, l)]);
                i.useProgram(h);
                const d = {};
                (d.gl = i),
                  (d.canvas = e),
                  (d.resolutionLocation = i.getUniformLocation(
                    h,
                    "u_resolution"
                  )),
                  (d.positionLocation = i.getAttribLocation(h, "a_position")),
                  (d.backdropLocation = i.getUniformLocation(h, "u_backdrop")),
                  (d.subtypeLocation = i.getUniformLocation(h, "u_subtype"));
                const f = i.getAttribLocation(h, "a_texCoord");
                const p = i.getUniformLocation(h, "u_image");
                const v = i.getUniformLocation(h, "u_mask");
                const m = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, m),
                  i.bufferData(
                    i.ARRAY_BUFFER,
                    new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
                    i.STATIC_DRAW
                  ),
                  i.enableVertexAttribArray(f),
                  i.vertexAttribPointer(f, 2, i.FLOAT, !1, 0, 0),
                  i.uniform1i(p, 0),
                  i.uniform1i(v, 1),
                  (c = d);
              })();
            const v = c;
            const m = v.canvas;
            const g = v.gl;
            (m.width = f),
              (m.height = p),
              g.viewport(0, 0, g.drawingBufferWidth, g.drawingBufferHeight),
              g.uniform2f(v.resolutionLocation, f, p),
              d.backdrop
                ? g.uniform4f(
                    v.resolutionLocation,
                    d.backdrop[0],
                    d.backdrop[1],
                    d.backdrop[2],
                    1
                  )
                : g.uniform4f(v.resolutionLocation, 0, 0, 0, 0),
              g.uniform1i(
                v.subtypeLocation,
                d.subtype === "Luminosity" ? 1 : 0
              );
            const y = i(g, e, g.TEXTURE0);
            const b = i(g, h, g.TEXTURE1);
            const _ = g.createBuffer();
            return (
              g.bindBuffer(g.ARRAY_BUFFER, _),
              g.bufferData(
                g.ARRAY_BUFFER,
                new Float32Array([0, 0, f, 0, 0, p, 0, p, f, 0, f, p]),
                g.STATIC_DRAW
              ),
              g.enableVertexAttribArray(v.positionLocation),
              g.vertexAttribPointer(v.positionLocation, 2, g.FLOAT, !1, 0, 0),
              g.clearColor(0, 0, 0, 0),
              g.enable(g.BLEND),
              g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA),
              g.clear(g.COLOR_BUFFER_BIT),
              g.drawArrays(g.TRIANGLES, 0, 6),
              g.flush(),
              g.deleteTexture(y),
              g.deleteTexture(b),
              g.deleteBuffer(_),
              m
            );
          },
          drawFigures(e, i, u, l, c) {
            f ||
              (function() {
                let e;
                let i;
                s(), (e = o), (o = null), (i = a), (a = null);
                const u = n(i, [t(i, h), r(i, d)]);
                i.useProgram(u);
                const l = {};
                (l.gl = i),
                  (l.canvas = e),
                  (l.resolutionLocation = i.getUniformLocation(
                    u,
                    "u_resolution"
                  )),
                  (l.scaleLocation = i.getUniformLocation(u, "u_scale")),
                  (l.offsetLocation = i.getUniformLocation(u, "u_offset")),
                  (l.positionLocation = i.getAttribLocation(u, "a_position")),
                  (l.colorLocation = i.getAttribLocation(u, "a_color")),
                  (f = l);
              })();
            const p = f;
            const v = p.canvas;
            const m = p.gl;
            (v.width = e),
              (v.height = i),
              m.viewport(0, 0, m.drawingBufferWidth, m.drawingBufferHeight),
              m.uniform2f(p.resolutionLocation, e, i);
            let g;
            let y;
            let b;
            let _ = 0;
            for (g = 0, y = l.length; g < y; g++) {
              switch (l[g].type) {
                case "lattice":
                  _ +=
                    ((b = (l[g].coords.length / l[g].verticesPerRow) | 0) - 1) *
                    (l[g].verticesPerRow - 1) *
                    6;
                  break;
                case "triangles":
                  _ += l[g].coords.length;
              }
            }
            const A = new Float32Array(2 * _);
            const S = new Uint8Array(3 * _);
            const w = c.coords;
            const k = c.colors;
            let P = 0;
            let x = 0;
            for (g = 0, y = l.length; g < y; g++) {
              const C = l[g];
              const R = C.coords;
              const E = C.colors;
              switch (C.type) {
                case "lattice":
                  var T = C.verticesPerRow;
                  b = (R.length / T) | 0;
                  for (let O = 1; O < b; O++) {
                    for (let I = O * T + 1, F = 1; F < T; F++, I++) {
                      (A[P] = w[R[I - T - 1]]),
                        (A[P + 1] = w[R[I - T - 1] + 1]),
                        (A[P + 2] = w[R[I - T]]),
                        (A[P + 3] = w[R[I - T] + 1]),
                        (A[P + 4] = w[R[I - 1]]),
                        (A[P + 5] = w[R[I - 1] + 1]),
                        (S[x] = k[E[I - T - 1]]),
                        (S[x + 1] = k[E[I - T - 1] + 1]),
                        (S[x + 2] = k[E[I - T - 1] + 2]),
                        (S[x + 3] = k[E[I - T]]),
                        (S[x + 4] = k[E[I - T] + 1]),
                        (S[x + 5] = k[E[I - T] + 2]),
                        (S[x + 6] = k[E[I - 1]]),
                        (S[x + 7] = k[E[I - 1] + 1]),
                        (S[x + 8] = k[E[I - 1] + 2]),
                        (A[P + 6] = A[P + 2]),
                        (A[P + 7] = A[P + 3]),
                        (A[P + 8] = A[P + 4]),
                        (A[P + 9] = A[P + 5]),
                        (A[P + 10] = w[R[I]]),
                        (A[P + 11] = w[R[I] + 1]),
                        (S[x + 9] = S[x + 3]),
                        (S[x + 10] = S[x + 4]),
                        (S[x + 11] = S[x + 5]),
                        (S[x + 12] = S[x + 6]),
                        (S[x + 13] = S[x + 7]),
                        (S[x + 14] = S[x + 8]),
                        (S[x + 15] = k[E[I]]),
                        (S[x + 16] = k[E[I] + 1]),
                        (S[x + 17] = k[E[I] + 2]),
                        (P += 12),
                        (x += 18);
                    }
                  }
                  break;
                case "triangles":
                  for (let L = 0, j = R.length; L < j; L++) {
                    (A[P] = w[R[L]]),
                      (A[P + 1] = w[R[L] + 1]),
                      (S[x] = k[E[L]]),
                      (S[x + 1] = k[E[L] + 1]),
                      (S[x + 2] = k[E[L] + 2]),
                      (P += 2),
                      (x += 3);
                  }
              }
            }
            u
              ? m.clearColor(u[0] / 255, u[1] / 255, u[2] / 255, 1)
              : m.clearColor(0, 0, 0, 0),
              m.clear(m.COLOR_BUFFER_BIT);
            const M = m.createBuffer();
            m.bindBuffer(m.ARRAY_BUFFER, M),
              m.bufferData(m.ARRAY_BUFFER, A, m.STATIC_DRAW),
              m.enableVertexAttribArray(p.positionLocation),
              m.vertexAttribPointer(p.positionLocation, 2, m.FLOAT, !1, 0, 0);
            const D = m.createBuffer();
            return (
              m.bindBuffer(m.ARRAY_BUFFER, D),
              m.bufferData(m.ARRAY_BUFFER, S, m.STATIC_DRAW),
              m.enableVertexAttribArray(p.colorLocation),
              m.vertexAttribPointer(
                p.colorLocation,
                3,
                m.UNSIGNED_BYTE,
                !1,
                0,
                0
              ),
              m.uniform2f(p.scaleLocation, c.scaleX, c.scaleY),
              m.uniform2f(p.offsetLocation, c.offsetX, c.offsetY),
              m.drawArrays(m.TRIANGLES, 0, _),
              m.flush(),
              m.deleteBuffer(M),
              m.deleteBuffer(D),
              v
            );
          },
          cleanup() {
            c && c.canvas && ((c.canvas.width = 0), (c.canvas.height = 0)),
              f && f.canvas && ((f.canvas.width = 0), (f.canvas.height = 0)),
              (c = null),
              (f = null);
          }
        };
      })();
      t.WebGLContext = a;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.renderTextLayer = void 0);
      let n;
      const i = r(1);
      const a = r(3);
      const o = (n = a) && n.__esModule ? n : { default: n };
      const s = (function() {
        const e = 1e5;
        const t = /\S/;
        const r = [
          "left: ",
          0,
          "px; top: ",
          0,
          "px; font-size: ",
          0,
          "px; font-family: ",
          "",
          ";"
        ];
        function n(e, n, a) {
          let o;
          const s = document.createElement("div");
          const u = {
            style: null,
            angle: 0,
            canvasWidth: 0,
            isWhitespace: !1,
            originalTransform: null,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            scale: 1
          };
          if ((e._textDivs.push(s), (o = n.str), !t.test(o)))
            return (u.isWhitespace = !0), void e._textDivProperties.set(s, u);
          const l = i.Util.transform(e._viewport.transform, n.transform);
          let c = Math.atan2(l[1], l[0]);
          const h = a[n.fontName];
          h.vertical && (c += Math.PI / 2);
          let d;
          let f;
          const p = Math.sqrt(l[2] * l[2] + l[3] * l[3]);
          let v = p;
          if (
            (h.ascent
              ? (v = h.ascent * v)
              : h.descent && (v = (1 + h.descent) * v),
            c === 0
              ? ((d = l[4]), (f = l[5] - v))
              : ((d = l[4] + v * Math.sin(c)), (f = l[5] - v * Math.cos(c))),
            (r[1] = d),
            (r[3] = f),
            (r[5] = p),
            (r[7] = h.fontFamily),
            (u.style = r.join("")),
            s.setAttribute("style", u.style),
            (s.textContent = n.str),
            e._fontInspectorEnabled && (s.dataset.fontName = n.fontName),
            c !== 0 && (u.angle = c * (180 / Math.PI)),
            n.str.length > 1 &&
              (h.vertical
                ? (u.canvasWidth = n.height * e._viewport.scale)
                : (u.canvasWidth = n.width * e._viewport.scale)),
            e._textDivProperties.set(s, u),
            e._textContentStream && e._layoutText(s),
            e._enhanceTextSelection)
          ) {
            let m = 1;
            let g = 0;
            c !== 0 && ((m = Math.cos(c)), (g = Math.sin(c)));
            let y;
            let b;
            const _ = (h.vertical ? n.height : n.width) * e._viewport.scale;
            const A = p;
            c !== 0
              ? ((y = [m, g, -g, m, d, f]),
                (b = i.Util.getAxialAlignedBoundingBox([0, 0, _, A], y)))
              : (b = [d, f, d + _, f + A]),
              e._bounds.push({
                left: b[0],
                top: b[1],
                right: b[2],
                bottom: b[3],
                div: s,
                size: [_, A],
                m: y
              });
          }
        }
        function a(t) {
          if (!t._canceled) {
            const r = t._textDivs;
            const n = t._capability;
            const i = r.length;
            if (i > e) return (t._renderingDone = !0), void n.resolve();
            if (!t._textContentStream)
              for (let a = 0; a < i; a++) t._layoutText(r[a]);
            (t._renderingDone = !0), n.resolve();
          }
        }
        function s(e) {
          for (
            let t = e._bounds,
              r = e._viewport,
              n = (function(e, t, r) {
                const n = r.map((e, t) => ({
                  x1: e.left,
                  y1: e.top,
                  x2: e.right,
                  y2: e.bottom,
                  index: t,
                  x1New: void 0,
                  x2New: void 0
                }));
                u(e, n);
                const i = new Array(r.length);
                return (
                  n.forEach(e => {
                    const t = e.index;
                    i[t] = {
                      left: e.x1New,
                      top: 0,
                      right: e.x2New,
                      bottom: 0
                    };
                  }),
                  r.map((t, r) => {
                    const a = i[r];
                    const o = n[r];
                    (o.x1 = t.top),
                      (o.y1 = e - a.right),
                      (o.x2 = t.bottom),
                      (o.y2 = e - a.left),
                      (o.index = r),
                      (o.x1New = void 0),
                      (o.x2New = void 0);
                  }),
                  u(t, n),
                  n.forEach(e => {
                    const t = e.index;
                    (i[t].top = e.x1New), (i[t].bottom = e.x2New);
                  }),
                  i
                );
              })(r.width, r.height, t),
              a = 0;
            a < n.length;
            a++
          ) {
            const o = t[a].div;
            const s = e._textDivProperties.get(o);
            if (s.angle !== 0) {
              var l = n[a];
              const c = t[a];
              var h = c.m;
              var d = h[0];
              var f = h[1];
              const p = [[0, 0], [0, c.size[1]], [c.size[0], 0], c.size];
              var v = new Float64Array(64);
              p.forEach((e, t) => {
                const r = i.Util.applyTransform(e, h);
                (v[t + 0] = d && (l.left - r[0]) / d),
                  (v[t + 4] = f && (l.top - r[1]) / f),
                  (v[t + 8] = d && (l.right - r[0]) / d),
                  (v[t + 12] = f && (l.bottom - r[1]) / f),
                  (v[t + 16] = f && (l.left - r[0]) / -f),
                  (v[t + 20] = d && (l.top - r[1]) / d),
                  (v[t + 24] = f && (l.right - r[0]) / -f),
                  (v[t + 28] = d && (l.bottom - r[1]) / d),
                  (v[t + 32] = d && (l.left - r[0]) / -d),
                  (v[t + 36] = f && (l.top - r[1]) / -f),
                  (v[t + 40] = d && (l.right - r[0]) / -d),
                  (v[t + 44] = f && (l.bottom - r[1]) / -f),
                  (v[t + 48] = f && (l.left - r[0]) / f),
                  (v[t + 52] = d && (l.top - r[1]) / -d),
                  (v[t + 56] = f && (l.right - r[0]) / f),
                  (v[t + 60] = d && (l.bottom - r[1]) / -d);
              });
              const m = function(e, t, r) {
                for (var n = 0, i = 0; i < r; i++) {
                  const a = e[t++];
                  a > 0 && (n = n ? Math.min(a, n) : a);
                }
                return n;
              };
              const g = 1 + Math.min(Math.abs(d), Math.abs(f));
              (s.paddingLeft = m(v, 32, 16) / g),
                (s.paddingTop = m(v, 48, 16) / g),
                (s.paddingRight = m(v, 0, 16) / g),
                (s.paddingBottom = m(v, 16, 16) / g),
                e._textDivProperties.set(o, s);
            } else {
              (s.paddingLeft = t[a].left - n[a].left),
                (s.paddingTop = t[a].top - n[a].top),
                (s.paddingRight = n[a].right - t[a].right),
                (s.paddingBottom = n[a].bottom - t[a].bottom),
                e._textDivProperties.set(o, s);
            }
          }
        }
        function u(e, t) {
          t.sort((e, t) => e.x1 - t.x1 || e.index - t.index);
          const r = [
            {
              start: -1 / 0,
              end: 1 / 0,
              boundary: {
                x1: -1 / 0,
                y1: -1 / 0,
                x2: 0,
                y2: 1 / 0,
                index: -1,
                x1New: 0,
                x2New: 0
              }
            }
          ];
          t.forEach(e => {
            for (var t = 0; t < r.length && r[t].end <= e.y1; ) t++;
            for (var n, i, a = r.length - 1; a >= 0 && r[a].start >= e.y2; )
              a--;
            let o;
            let s;
            let u = -1 / 0;
            for (o = t; o <= a; o++) {
              var l;
              (l =
                (i = (n = r[o]).boundary).x2 > e.x1
                  ? i.index > e.index
                    ? i.x1New
                    : e.x1
                  : void 0 === i.x2New
                  ? (i.x2 + e.x1) / 2
                  : i.x2New) > u && (u = l);
            }
            for (e.x1New = u, o = t; o <= a; o++) {
              void 0 === (i = (n = r[o]).boundary).x2New
                ? i.x2 > e.x1
                  ? i.index > e.index && (i.x2New = i.x2)
                  : (i.x2New = u)
                : i.x2New > u && (i.x2New = Math.max(u, i.x2));
            }
            const c = [];
            let h = null;
            for (o = t; o <= a; o++) {
              const d = (i = (n = r[o]).boundary).x2 > e.x2 ? i : e;
              h === d
                ? (c[c.length - 1].end = n.end)
                : (c.push({ start: n.start, end: n.end, boundary: d }),
                  (h = d));
            }
            for (
              r[t].start < e.y1 &&
                ((c[0].start = e.y1),
                c.unshift({
                  start: r[t].start,
                  end: e.y1,
                  boundary: r[t].boundary
                })),
                e.y2 < r[a].end &&
                  ((c[c.length - 1].end = e.y2),
                  c.push({
                    start: e.y2,
                    end: r[a].end,
                    boundary: r[a].boundary
                  })),
                o = t;
              o <= a;
              o++
            ) {
              if (void 0 === (i = (n = r[o]).boundary).x2New) {
                let f = !1;
                for (s = t - 1; !f && s >= 0 && r[s].start >= i.y1; s--)
                  f = r[s].boundary === i;
                for (s = a + 1; !f && s < r.length && r[s].end <= i.y2; s++)
                  f = r[s].boundary === i;
                for (s = 0; !f && s < c.length; s++) f = c[s].boundary === i;
                f || (i.x2New = u);
              }
            }
            Array.prototype.splice.apply(r, [t, a - t + 1].concat(c));
          }),
            r.forEach(t => {
              const r = t.boundary;
              void 0 === r.x2New && (r.x2New = Math.max(e, r.x2));
            });
        }
        function l(e) {
          const t = e.textContent;
          const r = e.textContentStream;
          const n = e.container;
          const a = e.viewport;
          const s = e.textDivs;
          const u = e.textContentItemsStr;
          const l = e.enhanceTextSelection;
          (this._textContent = t),
            (this._textContentStream = r),
            (this._container = n),
            (this._viewport = a),
            (this._textDivs = s || []),
            (this._textContentItemsStr = u || []),
            (this._enhanceTextSelection = !!l),
            (this._fontInspectorEnabled = !(
              !o.default.FontInspector || !o.default.FontInspector.enabled
            )),
            (this._reader = null),
            (this._layoutTextLastFontSize = null),
            (this._layoutTextLastFontFamily = null),
            (this._layoutTextCtx = null),
            (this._textDivProperties = new WeakMap()),
            (this._renderingDone = !1),
            (this._canceled = !1),
            (this._capability = (0, i.createPromiseCapability)()),
            (this._renderTimer = null),
            (this._bounds = []);
        }
        return (
          (l.prototype = {
            get promise() {
              return this._capability.promise;
            },
            cancel() {
              this._reader &&
                (this._reader.cancel(
                  new i.AbortException("text layer task cancelled")
                ),
                (this._reader = null)),
                (this._canceled = !0),
                this._renderTimer !== null &&
                  (clearTimeout(this._renderTimer), (this._renderTimer = null)),
                this._capability.reject("canceled");
            },
            _processItems(e, t) {
              for (let r = 0, i = e.length; r < i; r++)
                this._textContentItemsStr.push(e[r].str), n(this, e[r], t);
            },
            _layoutText(e) {
              const t = this._container;
              const r = this._textDivProperties.get(e);
              if (!r.isWhitespace) {
                const n = e.style.fontSize;
                const i = e.style.fontFamily;
                (n === this._layoutTextLastFontSize &&
                  i === this._layoutTextLastFontFamily) ||
                  ((this._layoutTextCtx.font = `${n} ${i}`),
                  (this._layoutTextLastFontSize = n),
                  (this._layoutTextLastFontFamily = i));
                const a = this._layoutTextCtx.measureText(e.textContent).width;
                let o = "";
                r.canvasWidth !== 0 &&
                  a > 0 &&
                  ((r.scale = r.canvasWidth / a), (o = `scaleX(${r.scale})`)),
                  r.angle !== 0 && (o = `rotate(${r.angle}deg) ${o}`),
                  o !== "" &&
                    ((r.originalTransform = o), (e.style.transform = o)),
                  this._textDivProperties.set(e, r),
                  t.appendChild(e);
              }
            },
            _render(e) {
              const t = this;
              const r = (0, i.createPromiseCapability)();
              let n = Object.create(null);
              const o = document.createElement("canvas");
              if (
                ((o.mozOpaque = !0),
                (this._layoutTextCtx = o.getContext("2d", { alpha: !1 })),
                this._textContent)
              ) {
                const s = this._textContent.items;
                const u = this._textContent.styles;
                this._processItems(s, u), r.resolve();
              } else {
                if (!this._textContentStream) {
                  throw new Error(
                    'Neither "textContent" nor "textContentStream" parameters specified.'
                  );
                }
                (this._reader = this._textContentStream.getReader()),
                  (function e() {
                    t._reader.read().then(i => {
                      const a = i.value;
                      i.done
                        ? r.resolve()
                        : (Object.assign(n, a.styles),
                          t._processItems(a.items, n),
                          e());
                    }, r.reject);
                  })();
              }
              r.promise.then(() => {
                (n = null),
                  e
                    ? (t._renderTimer = setTimeout(() => {
                        a(t), (t._renderTimer = null);
                      }, e))
                    : a(t);
              }, this._capability.reject);
            },
            expandTextDivs(e) {
              if (this._enhanceTextSelection && this._renderingDone) {
                this._bounds !== null && (s(this), (this._bounds = null));
                for (let t = 0, r = this._textDivs.length; t < r; t++) {
                  const n = this._textDivs[t];
                  const i = this._textDivProperties.get(n);
                  if (!i.isWhitespace) {
                    if (e) {
                      let a = "";
                      let o = "";
                      i.scale !== 1 && (a = `scaleX(${i.scale})`),
                        i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`),
                        i.paddingLeft !== 0 &&
                          ((o += ` padding-left: ${i.paddingLeft /
                            i.scale}px;`),
                          (a += ` translateX(${-i.paddingLeft / i.scale}px)`)),
                        i.paddingTop !== 0 &&
                          ((o += ` padding-top: ${i.paddingTop}px;`),
                          (a += ` translateY(${-i.paddingTop}px)`)),
                        i.paddingRight !== 0 &&
                          (o += ` padding-right: ${i.paddingRight /
                            i.scale}px;`),
                        i.paddingBottom !== 0 &&
                          (o += ` padding-bottom: ${i.paddingBottom}px;`),
                        "" !== o && n.setAttribute("style", i.style + o),
                        "" !== a && (n.style.transform = a);
                    } else {
                      (n.style.padding = 0),
                        (n.style.transform = i.originalTransform || "");
                    }
                  }
                }
              }
            }
          }),
          function(e) {
            const t = new l({
              textContent: e.textContent,
              textContentStream: e.textContentStream,
              container: e.container,
              viewport: e.viewport,
              textDivs: e.textDivs,
              textContentItemsStr: e.textContentItemsStr,
              enhanceTextSelection: e.enhanceTextSelection
            });
            return t._render(e.timeout), t;
          }
        );
      })();
      t.renderTextLayer = s;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnnotationLayer = void 0);
      const n = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const i = r(130);
      const a = r(1);
      function o(e, t) {
        if (!e) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return !t || (typeof t !== "object" && typeof t !== "function") ? e : t;
      }
      function s(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError(
            `Super expression must either be null or a function, not ${typeof t}`
          );
        }
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      const l = (function() {
        function e() {
          u(this, e);
        }
        return (
          n(e, null, [
            {
              key: "create",
              value(e) {
                switch (e.data.annotationType) {
                  case a.AnnotationType.LINK:
                    return new h(e);
                  case a.AnnotationType.TEXT:
                    return new d(e);
                  case a.AnnotationType.WIDGET:
                    switch (e.data.fieldType) {
                      case "Tx":
                        return new p(e);
                      case "Btn":
                        return e.data.radioButton
                          ? new m(e)
                          : e.data.checkBox
                          ? new v(e)
                          : new g(e);
                      case "Ch":
                        return new y(e);
                    }
                    return new f(e);
                  case a.AnnotationType.POPUP:
                    return new b(e);
                  case a.AnnotationType.LINE:
                    return new A(e);
                  case a.AnnotationType.SQUARE:
                    return new S(e);
                  case a.AnnotationType.CIRCLE:
                    return new w(e);
                  case a.AnnotationType.POLYLINE:
                    return new k(e);
                  case a.AnnotationType.INK:
                    return new x(e);
                  case a.AnnotationType.POLYGON:
                    return new P(e);
                  case a.AnnotationType.HIGHLIGHT:
                    return new C(e);
                  case a.AnnotationType.UNDERLINE:
                    return new R(e);
                  case a.AnnotationType.SQUIGGLY:
                    return new E(e);
                  case a.AnnotationType.STRIKEOUT:
                    return new T(e);
                  case a.AnnotationType.STAMP:
                    return new O(e);
                  case a.AnnotationType.FILEATTACHMENT:
                    return new I(e);
                  default:
                    return new c(e);
                }
              }
            }
          ]),
          e
        );
      })();
      var c = (function() {
        function e(t) {
          const r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          u(this, e),
            (this.isRenderable = r),
            (this.data = t.data),
            (this.layer = t.layer),
            (this.page = t.page),
            (this.viewport = t.viewport),
            (this.linkService = t.linkService),
            (this.downloadManager = t.downloadManager),
            (this.imageResourcesPath = t.imageResourcesPath),
            (this.renderInteractiveForms = t.renderInteractiveForms),
            (this.svgFactory = t.svgFactory),
            r && (this.container = this._createContainer(n));
        }
        return (
          n(e, [
            {
              key: "_createContainer",
              value() {
                const e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                const t = this.data;
                const r = this.page;
                const n = this.viewport;
                const i = document.createElement("section");
                let o = t.rect[2] - t.rect[0];
                let s = t.rect[3] - t.rect[1];
                i.setAttribute("data-annotation-id", t.id);
                const u = a.Util.normalizeRect([
                  t.rect[0],
                  r.view[3] - t.rect[1] + r.view[1],
                  t.rect[2],
                  r.view[3] - t.rect[3] + r.view[1]
                ]);
                if (
                  ((i.style.transform = `matrix(${n.transform.join(",")})`),
                  (i.style.transformOrigin = `${-u[0]}px ${-u[1]}px`),
                  !e && t.borderStyle.width > 0)
                ) {
                  (i.style.borderWidth = `${t.borderStyle.width}px`),
                    t.borderStyle.style !==
                      a.AnnotationBorderStyleType.UNDERLINE &&
                      ((o -= 2 * t.borderStyle.width),
                      (s -= 2 * t.borderStyle.width));
                  const l = t.borderStyle.horizontalCornerRadius;
                  const c = t.borderStyle.verticalCornerRadius;
                  if (l > 0 || c > 0) {
                    const h = `${l}px / ${c}px`;
                    i.style.borderRadius = h;
                  }
                  switch (t.borderStyle.style) {
                    case a.AnnotationBorderStyleType.SOLID:
                      i.style.borderStyle = "solid";
                      break;
                    case a.AnnotationBorderStyleType.DASHED:
                      i.style.borderStyle = "dashed";
                      break;
                    case a.AnnotationBorderStyleType.BEVELED:
                      (0, a.warn)("Unimplemented border style: beveled");
                      break;
                    case a.AnnotationBorderStyleType.INSET:
                      (0, a.warn)("Unimplemented border style: inset");
                      break;
                    case a.AnnotationBorderStyleType.UNDERLINE:
                      i.style.borderBottomStyle = "solid";
                  }
                  t.color
                    ? (i.style.borderColor = a.Util.makeCssRgb(
                        0 | t.color[0],
                        0 | t.color[1],
                        0 | t.color[2]
                      ))
                    : (i.style.borderWidth = 0);
                }
                return (
                  (i.style.left = `${u[0]}px`),
                  (i.style.top = `${u[1]}px`),
                  (i.style.width = `${o}px`),
                  (i.style.height = `${s}px`),
                  i
                );
              }
            },
            {
              key: "_createPopup",
              value(e, t, r) {
                t ||
                  (((t = document.createElement("div")).style.height =
                    e.style.height),
                  (t.style.width = e.style.width),
                  e.appendChild(t));
                const n = new _({
                  container: e,
                  trigger: t,
                  color: r.color,
                  title: r.title,
                  contents: r.contents,
                  hideWrapper: !0
                }).render();
                (n.style.left = e.style.width), e.appendChild(n);
              }
            },
            {
              key: "render",
              value() {
                (0, a.unreachable)(
                  "Abstract method `AnnotationElement.render` called"
                );
              }
            }
          ]),
          e
        );
      })();
      var h = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.url || e.data.dest || e.data.action);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "linkAnnotation";
                const e = this.data;
                const t = this.linkService;
                const r = document.createElement("a");
                return (
                  (0, i.addLinkAttributes)(r, {
                    url: e.url,
                    target: e.newWindow
                      ? i.LinkTarget.BLANK
                      : t.externalLinkTarget,
                    rel: t.externalLinkRel
                  }),
                  e.url ||
                    (e.action
                      ? this._bindNamedAction(r, e.action)
                      : this._bindLink(r, e.dest)),
                  this.container.appendChild(r),
                  this.container
                );
              }
            },
            {
              key: "_bindLink",
              value(e, t) {
                const r = this;
                (e.href = this.linkService.getDestinationHash(t)),
                  (e.onclick = function() {
                    return t && r.linkService.navigateTo(t), !1;
                  }),
                  t && (e.className = "internalLink");
              }
            },
            {
              key: "_bindNamedAction",
              value(e, t) {
                const r = this;
                (e.href = this.linkService.getAnchorUrl("")),
                  (e.onclick = function() {
                    return r.linkService.executeNamedAction(t), !1;
                  }),
                  (e.className = "internalLink");
              }
            }
          ]),
          t
        );
      })();
      var d = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "textAnnotation";
                const e = document.createElement("img");
                return (
                  (e.style.height = this.container.style.height),
                  (e.style.width = this.container.style.width),
                  (e.src = `${
                    this.imageResourcesPath
                  }annotation-${this.data.name.toLowerCase()}.svg`),
                  (e.alt = "[{{type}} Annotation]"),
                  (e.dataset.l10nId = "text_annotation_type"),
                  (e.dataset.l10nArgs = JSON.stringify({
                    type: this.data.name
                  })),
                  this.data.hasPopup ||
                    this._createPopup(this.container, e, this.data),
                  this.container.appendChild(e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var f = (function(e) {
        function t() {
          return (
            u(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return this.container;
              }
            }
          ]),
          t
        );
      })();
      var p = (function(e) {
        function t(e) {
          u(this, t);
          const r =
            e.renderInteractiveForms ||
            (!e.data.hasAppearance && !!e.data.fieldValue);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
          );
        }
        return (
          s(t, f),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "textWidgetAnnotation";
                let e = null;
                if (this.renderInteractiveForms) {
                  if (
                    (this.data.multiLine
                      ? ((e = document.createElement(
                          "textarea"
                        )).textContent = this.data.fieldValue)
                      : (((e = document.createElement("input")).type = "text"),
                        e.setAttribute("value", this.data.fieldValue)),
                    (e.disabled = this.data.readOnly),
                    this.data.maxLen !== null &&
                      (e.maxLength = this.data.maxLen),
                    this.data.comb)
                  ) {
                    const t =
                      (this.data.rect[2] - this.data.rect[0]) /
                      this.data.maxLen;
                    e.classList.add("comb"),
                      (e.style.letterSpacing = `calc(${t}px - 1ch)`);
                  }
                } else {
                  ((e = document.createElement(
                    "div"
                  )).textContent = this.data.fieldValue),
                    (e.style.verticalAlign = "middle"),
                    (e.style.display = "table-cell");
                  let r = null;
                  this.data.fontRefName &&
                    (r = this.page.commonObjs.getData(this.data.fontRefName)),
                    this._setTextStyle(e, r);
                }
                return (
                  this.data.textAlignment !== null &&
                    (e.style.textAlign = ["left", "center", "right"][
                      this.data.textAlignment
                    ]),
                  this.container.appendChild(e),
                  this.container
                );
              }
            },
            {
              key: "_setTextStyle",
              value(e, t) {
                const r = e.style;
                if (
                  ((r.fontSize = `${this.data.fontSize}px`),
                  (r.direction = this.data.fontDirection < 0 ? "rtl" : "ltr"),
                  t)
                ) {
                  (r.fontWeight = t.black
                    ? t.bold
                      ? "900"
                      : "bold"
                    : t.bold
                    ? "bold"
                    : "normal"),
                    (r.fontStyle = t.italic ? "italic" : "normal");
                  const n = t.loadedName ? `"${t.loadedName}", ` : "";
                  let i = t.fallbackName || "Helvetica, sans-serif";
                  r.fontFamily = n + i;
                }
              }
            }
          ]),
          t
        );
      })();
      var v = (function(e) {
        function t(e) {
          return (
            u(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                e.renderInteractiveForms
              )
            )
          );
        }
        return (
          s(t, f),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "buttonWidgetAnnotation checkBox";
                const e = document.createElement("input");
                return (
                  (e.disabled = this.data.readOnly),
                  (e.type = "checkbox"),
                  this.data.fieldValue &&
                    this.data.fieldValue !== "Off" &&
                    e.setAttribute("checked", !0),
                  this.container.appendChild(e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var m = (function(e) {
        function t(e) {
          return (
            u(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                e.renderInteractiveForms
              )
            )
          );
        }
        return (
          s(t, f),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "buttonWidgetAnnotation radioButton";
                const e = document.createElement("input");
                return (
                  (e.disabled = this.data.readOnly),
                  (e.type = "radio"),
                  (e.name = this.data.fieldName),
                  this.data.fieldValue === this.data.buttonValue &&
                    e.setAttribute("checked", !0),
                  this.container.appendChild(e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var g = (function(e) {
        function t() {
          return (
            u(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          s(t, h),
          n(t, [
            {
              key: "render",
              value() {
                const e = (function e(t, r, n) {
                  t === null && (t = Function.prototype);
                  const i = Object.getOwnPropertyDescriptor(t, r);
                  if (void 0 === i) {
                    const a = Object.getPrototypeOf(t);
                    return a === null ? void 0 : e(a, r, n);
                  }
                  if ("value" in i) return i.value;
                  const o = i.get;
                  return void 0 !== o ? o.call(n) : void 0;
                })(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "render",
                  this
                ).call(this);
                return (e.className = "buttonWidgetAnnotation pushButton"), e;
              }
            }
          ]),
          t
        );
      })();
      var y = (function(e) {
        function t(e) {
          return (
            u(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                e.renderInteractiveForms
              )
            )
          );
        }
        return (
          s(t, f),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "choiceWidgetAnnotation";
                const e = document.createElement("select");
                (e.disabled = this.data.readOnly),
                  this.data.combo ||
                    ((e.size = this.data.options.length),
                    this.data.multiSelect && (e.multiple = !0));
                for (let t = 0, r = this.data.options.length; t < r; t++) {
                  const n = this.data.options[t];
                  const i = document.createElement("option");
                  (i.textContent = n.displayValue),
                    (i.value = n.exportValue),
                    this.data.fieldValue.includes(n.displayValue) &&
                      i.setAttribute("selected", !0),
                    e.appendChild(i);
                }
                return this.container.appendChild(e), this.container;
              }
            }
          ]),
          t
        );
      })();
      var b = (function(e) {
        function t(e) {
          u(this, t);
          const r = !(!e.data.title && !e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                if (
                  ((this.container.className = "popupAnnotation"),
                  [
                    "Line",
                    "Square",
                    "Circle",
                    "PolyLine",
                    "Polygon",
                    "Ink"
                  ].includes(this.data.parentType))
                )
                  return this.container;
                const e = `[data-annotation-id="${this.data.parentId}"]`;
                let t = this.layer.querySelector(e);
                if (!t) return this.container;
                const r = new _({
                  container: this.container,
                  trigger: t,
                  color: this.data.color,
                  title: this.data.title,
                  contents: this.data.contents
                });
                const n = parseFloat(t.style.left);
                const i = parseFloat(t.style.width);
                return (
                  (this.container.style.transformOrigin = `${-(n + i)}px -${
                    t.style.top
                  }`),
                  (this.container.style.left = `${n + i}px`),
                  this.container.appendChild(r.render()),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var _ = (function() {
        function e(t) {
          u(this, e),
            (this.container = t.container),
            (this.trigger = t.trigger),
            (this.color = t.color),
            (this.title = t.title),
            (this.contents = t.contents),
            (this.hideWrapper = t.hideWrapper || !1),
            (this.pinned = !1);
        }
        return (
          n(e, [
            {
              key: "render",
              value() {
                const e = document.createElement("div");
                (e.className = "popupWrapper"),
                  (this.hideElement = this.hideWrapper ? e : this.container),
                  this.hideElement.setAttribute("hidden", !0);
                const t = document.createElement("div");
                t.className = "popup";
                const r = this.color;
                if (r) {
                  const n = 0.7 * (255 - r[0]) + r[0];
                  const i = 0.7 * (255 - r[1]) + r[1];
                  const o = 0.7 * (255 - r[2]) + r[2];
                  t.style.backgroundColor = a.Util.makeCssRgb(
                    0 | n,
                    0 | i,
                    0 | o
                  );
                }
                const s = this._formatContents(this.contents);
                const u = document.createElement("h1");
                return (
                  (u.textContent = this.title),
                  this.trigger.addEventListener(
                    "click",
                    this._toggle.bind(this)
                  ),
                  this.trigger.addEventListener(
                    "mouseover",
                    this._show.bind(this, !1)
                  ),
                  this.trigger.addEventListener(
                    "mouseout",
                    this._hide.bind(this, !1)
                  ),
                  t.addEventListener("click", this._hide.bind(this, !0)),
                  t.appendChild(u),
                  t.appendChild(s),
                  e.appendChild(t),
                  e
                );
              }
            },
            {
              key: "_formatContents",
              value(e) {
                for (
                  var t = document.createElement("p"),
                    r = e.split(/(?:\r\n?|\n)/),
                    n = 0,
                    i = r.length;
                  n < i;
                  ++n
                ) {
                  const a = r[n];
                  t.appendChild(document.createTextNode(a)),
                    n < i - 1 && t.appendChild(document.createElement("br"));
                }
                return t;
              }
            },
            {
              key: "_toggle",
              value() {
                this.pinned ? this._hide(!0) : this._show(!0);
              }
            },
            {
              key: "_show",
              value() {
                arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  (this.pinned = !0),
                  this.hideElement.hasAttribute("hidden") &&
                    (this.hideElement.removeAttribute("hidden"),
                    (this.container.style.zIndex += 1));
              }
            },
            {
              key: "_hide",
              value() {
                (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0]) &&
                  (this.pinned = !1),
                  this.hideElement.hasAttribute("hidden") ||
                    this.pinned ||
                    (this.hideElement.setAttribute("hidden", !0),
                    (this.container.style.zIndex -= 1));
              }
            }
          ]),
          e
        );
      })();
      var A = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "lineAnnotation";
                const e = this.data;
                const t = e.rect[2] - e.rect[0];
                const r = e.rect[3] - e.rect[1];
                const n = this.svgFactory.create(t, r);
                const i = this.svgFactory.createElement("svg:line");
                return (
                  i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                  i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                  i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                  i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                  i.setAttribute("stroke-width", e.borderStyle.width),
                  i.setAttribute("stroke", "transparent"),
                  n.appendChild(i),
                  this.container.append(n),
                  this._createPopup(this.container, i, e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var S = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "squareAnnotation";
                const e = this.data;
                const t = e.rect[2] - e.rect[0];
                const r = e.rect[3] - e.rect[1];
                const n = this.svgFactory.create(t, r);
                const i = e.borderStyle.width;
                const a = this.svgFactory.createElement("svg:rect");
                return (
                  a.setAttribute("x", i / 2),
                  a.setAttribute("y", i / 2),
                  a.setAttribute("width", t - i),
                  a.setAttribute("height", r - i),
                  a.setAttribute("stroke-width", i),
                  a.setAttribute("stroke", "transparent"),
                  a.setAttribute("fill", "none"),
                  n.appendChild(a),
                  this.container.append(n),
                  this._createPopup(this.container, a, e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var w = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "circleAnnotation";
                const e = this.data;
                const t = e.rect[2] - e.rect[0];
                const r = e.rect[3] - e.rect[1];
                const n = this.svgFactory.create(t, r);
                const i = e.borderStyle.width;
                const a = this.svgFactory.createElement("svg:ellipse");
                return (
                  a.setAttribute("cx", t / 2),
                  a.setAttribute("cy", r / 2),
                  a.setAttribute("rx", t / 2 - i / 2),
                  a.setAttribute("ry", r / 2 - i / 2),
                  a.setAttribute("stroke-width", i),
                  a.setAttribute("stroke", "transparent"),
                  a.setAttribute("fill", "none"),
                  n.appendChild(a),
                  this.container.append(n),
                  this._createPopup(this.container, a, e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var k = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          const n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
          return (
            (n.containerClassName = "polylineAnnotation"),
            (n.svgElementName = "svg:polyline"),
            n
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = this.containerClassName;
                for (
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = e.vertices,
                    a = [],
                    o = 0,
                    s = i.length;
                  o < s;
                  o++
                ) {
                  const u = i[o].x - e.rect[0];
                  const l = e.rect[3] - i[o].y;
                  a.push(`${u},${l}`);
                }
                a = a.join(" ");
                const c = e.borderStyle.width;
                const h = this.svgFactory.createElement(this.svgElementName);
                return (
                  h.setAttribute("points", a),
                  h.setAttribute("stroke-width", c),
                  h.setAttribute("stroke", "transparent"),
                  h.setAttribute("fill", "none"),
                  n.appendChild(h),
                  this.container.append(n),
                  this._createPopup(this.container, h, e),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var P = (function(e) {
        function t(e) {
          u(this, t);
          const r = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            (r.containerClassName = "polygonAnnotation"),
            (r.svgElementName = "svg:polygon"),
            r
          );
        }
        return s(t, k), t;
      })();
      var x = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          const n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
          return (
            (n.containerClassName = "inkAnnotation"),
            (n.svgElementName = "svg:polyline"),
            n
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = this.containerClassName;
                for (
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = e.inkLists,
                    a = 0,
                    o = i.length;
                  a < o;
                  a++
                ) {
                  for (var s = i[a], u = [], l = 0, c = s.length; l < c; l++) {
                    const h = s[l].x - e.rect[0];
                    const d = e.rect[3] - s[l].y;
                    u.push(`${h},${d}`);
                  }
                  u = u.join(" ");
                  const f = e.borderStyle.width;
                  const p = this.svgFactory.createElement(this.svgElementName);
                  p.setAttribute("points", u),
                    p.setAttribute("stroke-width", f),
                    p.setAttribute("stroke", "transparent"),
                    p.setAttribute("fill", "none"),
                    this._createPopup(this.container, p, e),
                    n.appendChild(p);
                }
                return this.container.append(n), this.container;
              }
            }
          ]),
          t
        );
      })();
      var C = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return (
                  (this.container.className = "highlightAnnotation"),
                  this.data.hasPopup ||
                    this._createPopup(this.container, null, this.data),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var R = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return (
                  (this.container.className = "underlineAnnotation"),
                  this.data.hasPopup ||
                    this._createPopup(this.container, null, this.data),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var E = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return (
                  (this.container.className = "squigglyAnnotation"),
                  this.data.hasPopup ||
                    this._createPopup(this.container, null, this.data),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var T = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return (
                  (this.container.className = "strikeoutAnnotation"),
                  this.data.hasPopup ||
                    this._createPopup(this.container, null, this.data),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var O = (function(e) {
        function t(e) {
          u(this, t);
          const r = !!(e.data.hasPopup || e.data.title || e.data.contents);
          return o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0)
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                return (
                  (this.container.className = "stampAnnotation"),
                  this.data.hasPopup ||
                    this._createPopup(this.container, null, this.data),
                  this.container
                );
              }
            }
          ]),
          t
        );
      })();
      var I = (function(e) {
        function t(e) {
          u(this, t);
          const r = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, !0)
          );
          const n = r.data.file;
          const s = n.filename;
          const l = n.content;
          return (
            (r.filename = (0, i.getFilenameFromUrl)(s)),
            (r.content = l),
            r.linkService.eventBus &&
              r.linkService.eventBus.dispatch("fileattachmentannotation", {
                source: r,
                id: (0, a.stringToPDFString)(s),
                filename: s,
                content: l
              }),
            r
          );
        }
        return (
          s(t, c),
          n(t, [
            {
              key: "render",
              value() {
                this.container.className = "fileAttachmentAnnotation";
                const e = document.createElement("div");
                return (
                  (e.style.height = this.container.style.height),
                  (e.style.width = this.container.style.width),
                  e.addEventListener("dblclick", this._download.bind(this)),
                  this.data.hasPopup ||
                    (!this.data.title && !this.data.contents) ||
                    this._createPopup(this.container, e, this.data),
                  this.container.appendChild(e),
                  this.container
                );
              }
            },
            {
              key: "_download",
              value() {
                this.downloadManager
                  ? this.downloadManager.downloadData(
                      this.content,
                      this.filename,
                      ""
                    )
                  : (0, a.warn)(
                      "Download cannot be started due to unavailable download manager"
                    );
              }
            }
          ]),
          t
        );
      })();
      const F = (function() {
        function e() {
          u(this, e);
        }
        return (
          n(e, null, [
            {
              key: "render",
              value(e) {
                for (let t = 0, r = e.annotations.length; t < r; t++) {
                  const n = e.annotations[t];
                  if (n) {
                    const a = l.create({
                      data: n,
                      layer: e.div,
                      page: e.page,
                      viewport: e.viewport,
                      linkService: e.linkService,
                      downloadManager: e.downloadManager,
                      imageResourcesPath: e.imageResourcesPath || "",
                      renderInteractiveForms: e.renderInteractiveForms || !1,
                      svgFactory: new i.DOMSVGFactory()
                    });
                    a.isRenderable && e.div.appendChild(a.render());
                  }
                }
              }
            },
            {
              key: "update",
              value(e) {
                for (let t = 0, r = e.annotations.length; t < r; t++) {
                  const n = e.annotations[t];
                  const i = e.div.querySelector(
                    `[data-annotation-id="${n.id}"]`
                  );
                  i &&
                    (i.style.transform = `matrix(${e.viewport.transform.join(
                      ","
                    )})`);
                }
                e.div.removeAttribute("hidden");
              }
            }
          ]),
          e
        );
      })();
      t.AnnotationLayer = F;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SVGGraphics = void 0);
      let n;
      const i = r(1);
      const a = r(130);
      const o = r(4);
      const s = (n = o) && n.__esModule ? n : { default: n };
      let u;
      const l = {
        fontStyle: "normal",
        fontWeight: "normal",
        fillColor: "#000000"
      };
      const c = (function() {
        for (
          var e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
            t = 12,
            r = new Int32Array(256),
            n = 0;
          n < 256;
          n++
        ) {
          for (var a = n, o = 0; o < 8; o++) {
            a =
              1 & a
                ? 3988292384 ^ ((a >> 1) & 2147483647)
                : (a >> 1) & 2147483647;
          }
          r[n] = a;
        }
        function u(e, t, n, i) {
          let a = i;
          const o = t.length;
          (n[a] = (o >> 24) & 255),
            (n[a + 1] = (o >> 16) & 255),
            (n[a + 2] = (o >> 8) & 255),
            (n[a + 3] = 255 & o),
            (n[(a += 4)] = 255 & e.charCodeAt(0)),
            (n[a + 1] = 255 & e.charCodeAt(1)),
            (n[a + 2] = 255 & e.charCodeAt(2)),
            (n[a + 3] = 255 & e.charCodeAt(3)),
            (a += 4),
            n.set(t, a);
          const s = (function(e, t, n) {
            for (var i = -1, a = t; a < n; a++) {
              const o = 255 & (i ^ e[a]);
              i = (i >>> 8) ^ r[o];
            }
            return -1 ^ i;
          })(n, i + 4, (a += t.length));
          (n[a] = (s >> 24) & 255),
            (n[a + 1] = (s >> 16) & 255),
            (n[a + 2] = (s >> 8) & 255),
            (n[a + 3] = 255 & s);
        }
        function l(e) {
          let t = e.length;
          const r = Math.ceil(t / 65535);
          const n = new Uint8Array(2 + t + 5 * r + 4);
          let i = 0;
          (n[i++] = 120), (n[i++] = 156);
          for (var a = 0; t > 65535; ) {
            (n[i++] = 0),
              (n[i++] = 255),
              (n[i++] = 255),
              (n[i++] = 0),
              (n[i++] = 0),
              n.set(e.subarray(a, a + 65535), i),
              (i += 65535),
              (a += 65535),
              (t -= 65535);
          }
          (n[i++] = 1),
            (n[i++] = 255 & t),
            (n[i++] = (t >> 8) & 255),
            (n[i++] = 255 & ~t),
            (n[i++] = ((65535 & ~t) >> 8) & 255),
            n.set(e.subarray(a), i),
            (i += e.length - a);
          const o = (function(e, t, r) {
            for (var n = 1, i = 0, a = t; a < r; ++a)
              i = (i + (n = (n + (255 & e[a])) % 65521)) % 65521;
            return (i << 16) | n;
          })(e, 0, e.length);
          return (
            (n[i++] = (o >> 24) & 255),
            (n[i++] = (o >> 16) & 255),
            (n[i++] = (o >> 8) & 255),
            (n[i++] = 255 & o),
            n
          );
        }
        function c(r, n, a, o) {
          let c;
          let h;
          let d;
          const f = r.width;
          const p = r.height;
          const v = r.data;
          switch (n) {
            case i.ImageKind.GRAYSCALE_1BPP:
              (h = 0), (c = 1), (d = (f + 7) >> 3);
              break;
            case i.ImageKind.RGB_24BPP:
              (h = 2), (c = 8), (d = 3 * f);
              break;
            case i.ImageKind.RGBA_32BPP:
              (h = 6), (c = 8), (d = 4 * f);
              break;
            default:
              throw new Error("invalid format");
          }
          let m;
          let g;
          const y = new Uint8Array((1 + d) * p);
          let b = 0;
          let _ = 0;
          for (m = 0; m < p; ++m)
            (y[b++] = 0), y.set(v.subarray(_, _ + d), b), (_ += d), (b += d);
          if (n === i.ImageKind.GRAYSCALE_1BPP && o)
            for (b = 0, m = 0; m < p; m++)
              for (b++, g = 0; g < d; g++) y[b++] ^= 255;
          const A = new Uint8Array([
            (f >> 24) & 255,
            (f >> 16) & 255,
            (f >> 8) & 255,
            255 & f,
            (p >> 24) & 255,
            (p >> 16) & 255,
            (p >> 8) & 255,
            255 & p,
            c,
            h,
            0,
            0,
            0
          ]);
          const S = (function(e) {
            if (!(0, s.default)()) return l(e);
            try {
              let t;
              t = parseInt(process.versions.node) >= 8 ? e : new Buffer(e);
              const r = require("zlib").deflateSync(t, { level: 9 });
              return r instanceof Uint8Array ? r : new Uint8Array(r);
            } catch (e) {
              (0, i.warn)(
                `Not compressing PNG because zlib.deflateSync is unavailable: ${e}`
              );
            }
            return l(e);
          })(y);
          const w = e.length + 3 * t + A.length + S.length;
          const k = new Uint8Array(w);
          let P = 0;
          return (
            k.set(e, P),
            u("IHDR", A, k, (P += e.length)),
            u("IDATA", S, k, (P += t + A.length)),
            (P += t + S.length),
            u("IEND", new Uint8Array(0), k, P),
            (0, i.createObjectURL)(k, "image/png", a)
          );
        }
        return function(e, t, r) {
          return c(
            e,
            void 0 === e.kind ? i.ImageKind.GRAYSCALE_1BPP : e.kind,
            t,
            r
          );
        };
      })();
      const h = (function() {
        function e() {
          (this.fontSizeScale = 1),
            (this.fontWeight = l.fontWeight),
            (this.fontSize = 0),
            (this.textMatrix = i.IDENTITY_MATRIX),
            (this.fontMatrix = i.FONT_IDENTITY_MATRIX),
            (this.leading = 0),
            (this.textRenderingMode = i.TextRenderingMode.FILL),
            (this.x = 0),
            (this.y = 0),
            (this.lineX = 0),
            (this.lineY = 0),
            (this.charSpacing = 0),
            (this.wordSpacing = 0),
            (this.textHScale = 1),
            (this.textRise = 0),
            (this.fillColor = l.fillColor),
            (this.strokeColor = "#000000"),
            (this.fillAlpha = 1),
            (this.strokeAlpha = 1),
            (this.lineWidth = 1),
            (this.lineJoin = ""),
            (this.lineCap = ""),
            (this.miterLimit = 0),
            (this.dashArray = []),
            (this.dashPhase = 0),
            (this.dependencies = []),
            (this.activeClipUrl = null),
            (this.clipGroup = null),
            (this.maskId = "");
        }
        return (
          (e.prototype = {
            clone() {
              return Object.create(this);
            },
            setCurrentPoint(e, t) {
              (this.x = e), (this.y = t);
            }
          }),
          e
        );
      })();
      (t.SVGGraphics = u = (function() {
        function e(e) {
          if (Number.isInteger(e)) return e.toString();
          const t = e.toFixed(10);
          let r = t.length - 1;
          if (t[r] !== "0") return t;
          do {
            r--;
          } while (t[r] === "0");
          return t.substring(0, t[r] === "." ? r : r + 1);
        }
        function t(t) {
          if (t[4] === 0 && t[5] === 0) {
            if (t[1] === 0 && t[2] === 0) {
              return t[0] === 1 && t[3] === 1
                ? ""
                : `scale(${e(t[0])} ${e(t[3])})`;
            }
            if (t[0] === t[3] && t[1] === -t[2])
              return `rotate(${e((180 * Math.acos(t[0])) / Math.PI)})`;
          } else if (t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 1)
            return `translate(${e(t[4])} ${e(t[5])})`;
          return `matrix(${e(t[0])} ${e(t[1])} ${e(t[2])} ${e(t[3])} ${e(
            t[4]
          )} ${e(t[5])})`;
        }
        function r(e, t, r) {
          (this.svgFactory = new a.DOMSVGFactory()),
            (this.current = new h()),
            (this.transformMatrix = i.IDENTITY_MATRIX),
            (this.transformStack = []),
            (this.extraStack = []),
            (this.commonObjs = e),
            (this.objs = t),
            (this.pendingClip = null),
            (this.pendingEOFill = !1),
            (this.embedFonts = !1),
            (this.embeddedFonts = Object.create(null)),
            (this.cssStyle = null),
            (this.forceDataSchema = !!r);
        }
        const n = "http://www.w3.org/1999/xlink";
        const o = ["butt", "round", "square"];
        const s = ["miter", "round", "bevel"];
        let u = 0;
        let d = 0;
        return (
          (r.prototype = {
            save() {
              this.transformStack.push(this.transformMatrix);
              const e = this.current;
              this.extraStack.push(e), (this.current = e.clone());
            },
            restore() {
              (this.transformMatrix = this.transformStack.pop()),
                (this.current = this.extraStack.pop()),
                (this.pendingClip = null),
                (this.tgrp = null);
            },
            group(e) {
              this.save(), this.executeOpTree(e), this.restore();
            },
            loadDependencies(e) {
              for (
                var t = this,
                  r = e.fnArray,
                  n = r.length,
                  a = e.argsArray,
                  o = 0;
                o < n;
                o++
              ) {
                if (i.OPS.dependency === r[o]) {
                  for (let s = a[o], u = 0, l = s.length; u < l; u++) {
                    var c;
                    var h = s[u];
                    (c =
                      "g_" === h.substring(0, 2)
                        ? new Promise(e => {
                            t.commonObjs.get(h, e);
                          })
                        : new Promise(e => {
                            t.objs.get(h, e);
                          })),
                      this.current.dependencies.push(c);
                  }
                }
              }
              return Promise.all(this.current.dependencies);
            },
            transform(e, t, r, n, a, o) {
              const s = [e, t, r, n, a, o];
              (this.transformMatrix = i.Util.transform(
                this.transformMatrix,
                s
              )),
                (this.tgrp = null);
            },
            getSVG(e, t) {
              const r = this;
              this.viewport = t;
              const n = this._initialize(t);
              return this.loadDependencies(e).then(() => {
                r.transformMatrix = i.IDENTITY_MATRIX;
                const t = r.convertOpList(e);
                return r.executeOpTree(t), n;
              });
            },
            convertOpList(e) {
              const t = e.argsArray;
              const r = e.fnArray;
              const n = r.length;
              const a = [];
              const o = [];
              for (const s in i.OPS) a[i.OPS[s]] = s;
              for (let u = 0; u < n; u++) {
                const l = r[u];
                o.push({ fnId: l, fn: a[l], args: t[u] });
              }
              return (function(e) {
                for (var t = [], r = [], n = e.length, i = 0; i < n; i++) {
                  e[i].fn !== "save"
                    ? e[i].fn === "restore"
                      ? (t = r.pop())
                      : t.push(e[i])
                    : (t.push({ fnId: 92, fn: "group", items: [] }),
                      r.push(t),
                      (t = t[t.length - 1].items));
                }
                return t;
              })(o);
            },
            executeOpTree(e) {
              for (let t = e.length, r = 0; r < t; r++) {
                const n = e[r].fn;
                const a = e[r].fnId;
                const o = e[r].args;
                switch (0 | a) {
                  case i.OPS.beginText:
                    this.beginText();
                    break;
                  case i.OPS.dependency:
                    break;
                  case i.OPS.setLeading:
                    this.setLeading(o);
                    break;
                  case i.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(o[0], o[1]);
                    break;
                  case i.OPS.setFont:
                    this.setFont(o);
                    break;
                  case i.OPS.showText:
                  case i.OPS.showSpacedText:
                    this.showText(o[0]);
                    break;
                  case i.OPS.endText:
                    this.endText();
                    break;
                  case i.OPS.moveText:
                    this.moveText(o[0], o[1]);
                    break;
                  case i.OPS.setCharSpacing:
                    this.setCharSpacing(o[0]);
                    break;
                  case i.OPS.setWordSpacing:
                    this.setWordSpacing(o[0]);
                    break;
                  case i.OPS.setHScale:
                    this.setHScale(o[0]);
                    break;
                  case i.OPS.setTextMatrix:
                    this.setTextMatrix(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case i.OPS.setTextRise:
                    this.setTextRise(o[0]);
                    break;
                  case i.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(o[0]);
                    break;
                  case i.OPS.setLineWidth:
                    this.setLineWidth(o[0]);
                    break;
                  case i.OPS.setLineJoin:
                    this.setLineJoin(o[0]);
                    break;
                  case i.OPS.setLineCap:
                    this.setLineCap(o[0]);
                    break;
                  case i.OPS.setMiterLimit:
                    this.setMiterLimit(o[0]);
                    break;
                  case i.OPS.setFillRGBColor:
                    this.setFillRGBColor(o[0], o[1], o[2]);
                    break;
                  case i.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(o[0], o[1], o[2]);
                    break;
                  case i.OPS.setDash:
                    this.setDash(o[0], o[1]);
                    break;
                  case i.OPS.setGState:
                    this.setGState(o[0]);
                    break;
                  case i.OPS.fill:
                    this.fill();
                    break;
                  case i.OPS.eoFill:
                    this.eoFill();
                    break;
                  case i.OPS.stroke:
                    this.stroke();
                    break;
                  case i.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case i.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case i.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case i.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case i.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case i.OPS.paintJpegXObject:
                    this.paintJpegXObject(o[0], o[1], o[2]);
                    break;
                  case i.OPS.paintImageXObject:
                    this.paintImageXObject(o[0]);
                    break;
                  case i.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(o[0]);
                    break;
                  case i.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(o[0]);
                    break;
                  case i.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(o[0], o[1]);
                    break;
                  case i.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case i.OPS.closePath:
                    this.closePath();
                    break;
                  case i.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case i.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case i.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case i.OPS.nextLine:
                    this.nextLine();
                    break;
                  case i.OPS.transform:
                    this.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case i.OPS.constructPath:
                    this.constructPath(o[0], o[1]);
                    break;
                  case i.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(e[r].items);
                    break;
                  default:
                    (0, i.warn)(`Unimplemented operator ${n}`);
                }
              }
            },
            setWordSpacing(e) {
              this.current.wordSpacing = e;
            },
            setCharSpacing(e) {
              this.current.charSpacing = e;
            },
            nextLine() {
              this.moveText(0, this.current.leading);
            },
            setTextMatrix(t, r, n, i, a, o) {
              const s = this.current;
              (this.current.textMatrix = this.current.lineMatrix = [
                t,
                r,
                n,
                i,
                a,
                o
              ]),
                (this.current.x = this.current.lineX = 0),
                (this.current.y = this.current.lineY = 0),
                (s.xcoords = []),
                (s.tspan = this.svgFactory.createElement("svg:tspan")),
                s.tspan.setAttributeNS(null, "font-family", s.fontFamily),
                s.tspan.setAttributeNS(null, "font-size", `${e(s.fontSize)}px`),
                s.tspan.setAttributeNS(null, "y", e(-s.y)),
                (s.txtElement = this.svgFactory.createElement("svg:text")),
                s.txtElement.appendChild(s.tspan);
            },
            beginText() {
              (this.current.x = this.current.lineX = 0),
                (this.current.y = this.current.lineY = 0),
                (this.current.textMatrix = i.IDENTITY_MATRIX),
                (this.current.lineMatrix = i.IDENTITY_MATRIX),
                (this.current.tspan = this.svgFactory.createElement(
                  "svg:tspan"
                )),
                (this.current.txtElement = this.svgFactory.createElement(
                  "svg:text"
                )),
                (this.current.txtgrp = this.svgFactory.createElement("svg:g")),
                (this.current.xcoords = []);
            },
            moveText(t, r) {
              const n = this.current;
              (this.current.x = this.current.lineX += t),
                (this.current.y = this.current.lineY += r),
                (n.xcoords = []),
                (n.tspan = this.svgFactory.createElement("svg:tspan")),
                n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                n.tspan.setAttributeNS(null, "font-size", `${e(n.fontSize)}px`),
                n.tspan.setAttributeNS(null, "y", e(-n.y));
            },
            showText(r) {
              const n = this.current;
              const a = n.font;
              const o = n.fontSize;
              if (o !== 0) {
                let s;
                const u = n.charSpacing;
                const c = n.wordSpacing;
                const h = n.fontDirection;
                const d = n.textHScale * h;
                const f = r.length;
                const p = a.vertical;
                const v = o * n.fontMatrix[0];
                let m = 0;
                for (s = 0; s < f; ++s) {
                  const g = r[s];
                  if (g !== null) {
                    if ((0, i.isNum)(g)) m += -g * o * 0.001;
                    else {
                      let y = g.width;
                      let b = g.fontChar;
                      let _ = y * v + ((g.isSpace ? c : 0) + u) * h;
                      g.isInFont || a.missingFile
                        ? (n.xcoords.push(n.x + m * d),
                          (n.tspan.textContent += b),
                          (m += _))
                        : (m += _);
                    }
                  } else m += h * c;
                }
                p ? (n.y -= m * d) : (n.x += m * d),
                  n.tspan.setAttributeNS(null, "x", n.xcoords.map(e).join(" ")),
                  n.tspan.setAttributeNS(null, "y", e(-n.y)),
                  n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                  n.tspan.setAttributeNS(
                    null,
                    "font-size",
                    `${e(n.fontSize)}px`
                  ),
                  n.fontStyle !== l.fontStyle &&
                    n.tspan.setAttributeNS(null, "font-style", n.fontStyle),
                  n.fontWeight !== l.fontWeight &&
                    n.tspan.setAttributeNS(null, "font-weight", n.fontWeight);
                const A =
                  n.textRenderingMode & i.TextRenderingMode.FILL_STROKE_MASK;
                A === i.TextRenderingMode.FILL ||
                A === i.TextRenderingMode.FILL_STROKE
                  ? (n.fillColor !== l.fillColor &&
                      n.tspan.setAttributeNS(null, "fill", n.fillColor),
                    n.fillAlpha < 1 &&
                      n.tspan.setAttributeNS(null, "fill-opacity", n.fillAlpha))
                  : n.textRenderingMode === i.TextRenderingMode.ADD_TO_PATH
                  ? n.tspan.setAttributeNS(null, "fill", "transparent")
                  : n.tspan.setAttributeNS(null, "fill", "none"),
                  (A !== i.TextRenderingMode.STROKE &&
                    A !== i.TextRenderingMode.FILL_STROKE) ||
                    this._setStrokeAttributes(n.tspan);
                let S = n.textMatrix;
                n.textRise !== 0 && ((S = S.slice())[5] += n.textRise),
                  n.txtElement.setAttributeNS(
                    null,
                    "transform",
                    `${t(S)} scale(1, -1)`
                  ),
                  n.txtElement.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  ),
                  n.txtElement.appendChild(n.tspan),
                  n.txtgrp.appendChild(n.txtElement),
                  this._ensureTransformGroup().appendChild(n.txtElement);
              }
            },
            setLeadingMoveText(e, t) {
              this.setLeading(-t), this.moveText(e, t);
            },
            addFontStyle(e) {
              this.cssStyle ||
                ((this.cssStyle = this.svgFactory.createElement("svg:style")),
                this.cssStyle.setAttributeNS(null, "type", "text/css"),
                this.defs.appendChild(this.cssStyle));
              const t = (0, i.createObjectURL)(
                e.data,
                e.mimetype,
                this.forceDataSchema
              );
              this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`;
            },
            setFont(t) {
              const r = this.current;
              const n = this.commonObjs.get(t[0]);
              let a = t[1];
              (this.current.font = n),
                this.embedFonts &&
                  n.data &&
                  !this.embeddedFonts[n.loadedName] &&
                  (this.addFontStyle(n),
                  (this.embeddedFonts[n.loadedName] = n)),
                (r.fontMatrix = n.fontMatrix
                  ? n.fontMatrix
                  : i.FONT_IDENTITY_MATRIX);
              const o = n.black
                ? n.bold
                  ? "bolder"
                  : "bold"
                : n.bold
                ? "bold"
                : "normal";
              const s = n.italic ? "italic" : "normal";
              a < 0
                ? ((a = -a), (r.fontDirection = -1))
                : (r.fontDirection = 1),
                (r.fontSize = a),
                (r.fontFamily = n.loadedName),
                (r.fontWeight = o),
                (r.fontStyle = s),
                (r.tspan = this.svgFactory.createElement("svg:tspan")),
                r.tspan.setAttributeNS(null, "y", e(-r.y)),
                (r.xcoords = []);
            },
            endText() {
              const e = this.current;
              e.textRenderingMode & i.TextRenderingMode.ADD_TO_PATH_FLAG &&
                e.txtElement &&
                e.txtElement.hasChildNodes() &&
                ((e.element = e.txtElement),
                this.clip("nonzero"),
                this.endPath());
            },
            setLineWidth(e) {
              this.current.lineWidth = e;
            },
            setLineCap(e) {
              this.current.lineCap = o[e];
            },
            setLineJoin(e) {
              this.current.lineJoin = s[e];
            },
            setMiterLimit(e) {
              this.current.miterLimit = e;
            },
            setStrokeAlpha(e) {
              this.current.strokeAlpha = e;
            },
            setStrokeRGBColor(e, t, r) {
              const n = i.Util.makeCssRgb(e, t, r);
              this.current.strokeColor = n;
            },
            setFillAlpha(e) {
              this.current.fillAlpha = e;
            },
            setFillRGBColor(e, t, r) {
              const n = i.Util.makeCssRgb(e, t, r);
              (this.current.fillColor = n),
                (this.current.tspan = this.svgFactory.createElement(
                  "svg:tspan"
                )),
                (this.current.xcoords = []);
            },
            setDash(e, t) {
              (this.current.dashArray = e), (this.current.dashPhase = t);
            },
            constructPath(t, r) {
              const n = this.current;
              let a = n.x;
              let o = n.y;
              n.path = this.svgFactory.createElement("svg:path");
              for (var s = [], u = t.length, l = 0, c = 0; l < u; l++) {
                switch (0 | t[l]) {
                  case i.OPS.rectangle:
                    (a = r[c++]), (o = r[c++]);
                    var h = a + r[c++];
                    var d = o + r[c++];
                    s.push(
                      "M",
                      e(a),
                      e(o),
                      "L",
                      e(h),
                      e(o),
                      "L",
                      e(h),
                      e(d),
                      "L",
                      e(a),
                      e(d),
                      "Z"
                    );
                    break;
                  case i.OPS.moveTo:
                    (a = r[c++]), (o = r[c++]), s.push("M", e(a), e(o));
                    break;
                  case i.OPS.lineTo:
                    (a = r[c++]), (o = r[c++]), s.push("L", e(a), e(o));
                    break;
                  case i.OPS.curveTo:
                    (a = r[c + 4]),
                      (o = r[c + 5]),
                      s.push(
                        "C",
                        e(r[c]),
                        e(r[c + 1]),
                        e(r[c + 2]),
                        e(r[c + 3]),
                        e(a),
                        e(o)
                      ),
                      (c += 6);
                    break;
                  case i.OPS.curveTo2:
                    (a = r[c + 2]),
                      (o = r[c + 3]),
                      s.push(
                        "C",
                        e(a),
                        e(o),
                        e(r[c]),
                        e(r[c + 1]),
                        e(r[c + 2]),
                        e(r[c + 3])
                      ),
                      (c += 4);
                    break;
                  case i.OPS.curveTo3:
                    (a = r[c + 2]),
                      (o = r[c + 3]),
                      s.push("C", e(r[c]), e(r[c + 1]), e(a), e(o), e(a), e(o)),
                      (c += 4);
                    break;
                  case i.OPS.closePath:
                    s.push("Z");
                }
              }
              n.path.setAttributeNS(null, "d", s.join(" ")),
                n.path.setAttributeNS(null, "fill", "none"),
                this._ensureTransformGroup().appendChild(n.path),
                (n.element = n.path),
                n.setCurrentPoint(a, o);
            },
            endPath() {
              if (this.pendingClip) {
                const e = this.current;
                const r = `clippath${u}`;
                u++;
                const n = this.svgFactory.createElement("svg:clipPath");
                n.setAttributeNS(null, "id", r),
                  n.setAttributeNS(null, "transform", t(this.transformMatrix));
                const i = e.element.cloneNode(!0);
                this.pendingClip === "evenodd"
                  ? i.setAttributeNS(null, "clip-rule", "evenodd")
                  : i.setAttributeNS(null, "clip-rule", "nonzero"),
                  (this.pendingClip = null),
                  n.appendChild(i),
                  this.defs.appendChild(n),
                  e.activeClipUrl &&
                    ((e.clipGroup = null),
                    this.extraStack.forEach(e => {
                      e.clipGroup = null;
                    }),
                    n.setAttributeNS(null, "clip-path", e.activeClipUrl)),
                  (e.activeClipUrl = `url(#${r})`),
                  (this.tgrp = null);
              }
            },
            clip(e) {
              this.pendingClip = e;
            },
            closePath() {
              const e = this.current;
              if (e.path) {
                let t = e.path.getAttributeNS(null, "d");
                (t += "Z"), e.path.setAttributeNS(null, "d", t);
              }
            },
            setLeading(e) {
              this.current.leading = -e;
            },
            setTextRise(e) {
              this.current.textRise = e;
            },
            setTextRenderingMode(e) {
              this.current.textRenderingMode = e;
            },
            setHScale(e) {
              this.current.textHScale = e / 100;
            },
            setGState(e) {
              for (let t = 0, r = e.length; t < r; t++) {
                const n = e[t];
                const a = n[0];
                const o = n[1];
                switch (a) {
                  case "LW":
                    this.setLineWidth(o);
                    break;
                  case "LC":
                    this.setLineCap(o);
                    break;
                  case "LJ":
                    this.setLineJoin(o);
                    break;
                  case "ML":
                    this.setMiterLimit(o);
                    break;
                  case "D":
                    this.setDash(o[0], o[1]);
                    break;
                  case "Font":
                    this.setFont(o);
                    break;
                  case "CA":
                    this.setStrokeAlpha(o);
                    break;
                  case "ca":
                    this.setFillAlpha(o);
                    break;
                  default:
                    (0, i.warn)(`Unimplemented graphic state ${a}`);
                }
              }
            },
            fill() {
              const e = this.current;
              e.element &&
                (e.element.setAttributeNS(null, "fill", e.fillColor),
                e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha),
                this.endPath());
            },
            stroke() {
              const e = this.current;
              e.element &&
                (this._setStrokeAttributes(e.element),
                e.element.setAttributeNS(null, "fill", "none"),
                this.endPath());
            },
            _setStrokeAttributes(t) {
              const r = this.current;
              t.setAttributeNS(null, "stroke", r.strokeColor),
                t.setAttributeNS(null, "stroke-opacity", r.strokeAlpha),
                t.setAttributeNS(null, "stroke-miterlimit", e(r.miterLimit)),
                t.setAttributeNS(null, "stroke-linecap", r.lineCap),
                t.setAttributeNS(null, "stroke-linejoin", r.lineJoin),
                t.setAttributeNS(null, "stroke-width", `${e(r.lineWidth)}px`),
                t.setAttributeNS(
                  null,
                  "stroke-dasharray",
                  r.dashArray.map(e).join(" ")
                ),
                t.setAttributeNS(
                  null,
                  "stroke-dashoffset",
                  `${e(r.dashPhase)}px`
                );
            },
            eoFill() {
              this.current.element &&
                this.current.element.setAttributeNS(
                  null,
                  "fill-rule",
                  "evenodd"
                ),
                this.fill();
            },
            fillStroke() {
              this.stroke(), this.fill();
            },
            eoFillStroke() {
              this.current.element &&
                this.current.element.setAttributeNS(
                  null,
                  "fill-rule",
                  "evenodd"
                ),
                this.fillStroke();
            },
            closeStroke() {
              this.closePath(), this.stroke();
            },
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            },
            closeEOFillStroke() {
              this.closePath(), this.eoFillStroke();
            },
            paintSolidColorImageMask() {
              const e = this.current;
              const t = this.svgFactory.createElement("svg:rect");
              t.setAttributeNS(null, "x", "0"),
                t.setAttributeNS(null, "y", "0"),
                t.setAttributeNS(null, "width", "1px"),
                t.setAttributeNS(null, "height", "1px"),
                t.setAttributeNS(null, "fill", e.fillColor),
                this._ensureTransformGroup().appendChild(t);
            },
            paintJpegXObject(t, r, i) {
              const a = this.objs.get(t);
              const o = this.svgFactory.createElement("svg:image");
              o.setAttributeNS(n, "xlink:href", a.src),
                o.setAttributeNS(null, "width", e(r)),
                o.setAttributeNS(null, "height", e(i)),
                o.setAttributeNS(null, "x", "0"),
                o.setAttributeNS(null, "y", e(-i)),
                o.setAttributeNS(
                  null,
                  "transform",
                  `scale(${e(1 / r)} ${e(-1 / i)})`
                ),
                this._ensureTransformGroup().appendChild(o);
            },
            paintImageXObject(e) {
              const t = this.objs.get(e);
              t
                ? this.paintInlineImageXObject(t)
                : (0, i.warn)("Dependent image isn't ready yet");
            },
            paintInlineImageXObject(t, r) {
              const i = t.width;
              const a = t.height;
              const o = c(t, this.forceDataSchema, !!r);
              const s = this.svgFactory.createElement("svg:rect");
              s.setAttributeNS(null, "x", "0"),
                s.setAttributeNS(null, "y", "0"),
                s.setAttributeNS(null, "width", e(i)),
                s.setAttributeNS(null, "height", e(a)),
                (this.current.element = s),
                this.clip("nonzero");
              const u = this.svgFactory.createElement("svg:image");
              u.setAttributeNS(n, "xlink:href", o),
                u.setAttributeNS(null, "x", "0"),
                u.setAttributeNS(null, "y", e(-a)),
                u.setAttributeNS(null, "width", `${e(i)}px`),
                u.setAttributeNS(null, "height", `${e(a)}px`),
                u.setAttributeNS(
                  null,
                  "transform",
                  `scale(${e(1 / i)} ${e(-1 / a)})`
                ),
                r
                  ? r.appendChild(u)
                  : this._ensureTransformGroup().appendChild(u);
            },
            paintImageMaskXObject(t) {
              const r = this.current;
              const n = t.width;
              const i = t.height;
              const a = r.fillColor;
              r.maskId = `mask${d++}`;
              const o = this.svgFactory.createElement("svg:mask");
              o.setAttributeNS(null, "id", r.maskId);
              const s = this.svgFactory.createElement("svg:rect");
              s.setAttributeNS(null, "x", "0"),
                s.setAttributeNS(null, "y", "0"),
                s.setAttributeNS(null, "width", e(n)),
                s.setAttributeNS(null, "height", e(i)),
                s.setAttributeNS(null, "fill", a),
                s.setAttributeNS(null, "mask", `url(#${r.maskId})`),
                this.defs.appendChild(o),
                this._ensureTransformGroup().appendChild(s),
                this.paintInlineImageXObject(t, o);
            },
            paintFormXObjectBegin(t, r) {
              if (
                (Array.isArray(t) &&
                  t.length === 6 &&
                  this.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                Array.isArray(r) && r.length === 4)
              ) {
                const n = r[2] - r[0];
                const i = r[3] - r[1];
                const a = this.svgFactory.createElement("svg:rect");
                a.setAttributeNS(null, "x", r[0]),
                  a.setAttributeNS(null, "y", r[1]),
                  a.setAttributeNS(null, "width", e(n)),
                  a.setAttributeNS(null, "height", e(i)),
                  (this.current.element = a),
                  this.clip("nonzero"),
                  this.endPath();
              }
            },
            paintFormXObjectEnd() {},
            _initialize(e) {
              const r = this.svgFactory.create(e.width, e.height);
              const n = this.svgFactory.createElement("svg:defs");
              r.appendChild(n), (this.defs = n);
              const i = this.svgFactory.createElement("svg:g");
              return (
                i.setAttributeNS(null, "transform", t(e.transform)),
                r.appendChild(i),
                (this.svg = i),
                r
              );
            },
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const e = this.svgFactory.createElement("svg:g");
                e.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
                  this.svg.appendChild(e),
                  (this.current.clipGroup = e);
              }
              return this.current.clipGroup;
            },
            _ensureTransformGroup() {
              return (
                this.tgrp ||
                  ((this.tgrp = this.svgFactory.createElement("svg:g")),
                  this.tgrp.setAttributeNS(
                    null,
                    "transform",
                    t(this.transformMatrix)
                  ),
                  this.current.activeClipUrl
                    ? this._ensureClipGroup().appendChild(this.tgrp)
                    : this.svg.appendChild(this.tgrp)),
                this.tgrp
              );
            }
          }),
          r
        );
      })()),
        (t.SVGGraphics = u);
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFNodeStream = void 0);
      let n;
      const i = r(137);
      const a = (n = i) && n.__esModule ? n : { default: n };
      const o = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const s = r(1);
      const u = r(149);
      function l(e, t) {
        if (!e) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return !t || (typeof t !== "object" && typeof t !== "function") ? e : t;
      }
      function c(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError(
            `Super expression must either be null or a function, not ${typeof t}`
          );
        }
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function h(e) {
        return function() {
          const t = e.apply(this, arguments);
          return new Promise((e, r) =>
            (function n(i, a) {
              try {
                var o = t[i](a);
                var s = o.value;
              } catch (e) {
                return void r(e);
              }
              if (!o.done) {
                return Promise.resolve(s).then(
                  e => {
                    n("next", e);
                  },
                  e => {
                    n("throw", e);
                  }
                );
              }
              e(s);
            })("next")
          );
        };
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      const f = require("fs");
      const p = require("http");
      const v = require("https");
      const m = require("url");
      const g = /^file:\/\/\/[a-zA-Z]:\//;
      const y = (function() {
        function e(t) {
          let r;
          let n;
          d(this, e),
            (this.source = t),
            (this.url =
              ((r = t.url),
              (n = m.parse(r)).protocol === "file:" || n.host
                ? n
                : /^[a-z]:[/\\]/i.test(r)
                ? m.parse(`file:///${r}`)
                : (n.host || (n.protocol = "file:"), n))),
            (this.isHttp =
              this.url.protocol === "http:" || this.url.protocol === "https:"),
            (this.isFsUrl = this.url.protocol === "file:"),
            (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
            (this._fullRequest = null),
            (this._rangeRequestReaders = []);
        }
        return (
          o(e, [
            {
              key: "getFullReader",
              value() {
                return (
                  (0, s.assert)(!this._fullRequest),
                  (this._fullRequest = this.isFsUrl
                    ? new k(this)
                    : new S(this)),
                  this._fullRequest
                );
              }
            },
            {
              key: "getRangeReader",
              value(e, t) {
                const r = this.isFsUrl ? new P(this, e, t) : new w(this, e, t);
                return this._rangeRequestReaders.push(r), r;
              }
            },
            {
              key: "cancelAllRequests",
              value(e) {
                this._fullRequest && this._fullRequest.cancel(e),
                  this._rangeRequestReaders.slice(0).forEach(t => {
                    t.cancel(e);
                  });
              }
            }
          ]),
          e
        );
      })();
      const b = (function() {
        function e(t) {
          d(this, e),
            (this._url = t.url),
            (this._done = !1),
            (this._storedError = null),
            (this.onProgress = null);
          const r = t.source;
          (this._contentLength = r.length),
            (this._loaded = 0),
            (this._filename = null),
            (this._disableRange = r.disableRange || !1),
            (this._rangeChunkSize = r.rangeChunkSize),
            this._rangeChunkSize ||
              this._disableRange ||
              (this._disableRange = !0),
            (this._isStreamingSupported = !r.disableStream),
            (this._isRangeSupported = !r.disableRange),
            (this._readableStream = null),
            (this._readCapability = (0, s.createPromiseCapability)()),
            (this._headersCapability = (0, s.createPromiseCapability)());
        }
        return (
          o(e, [
            {
              key: "read",
              value: (function() {
                const e = h(
                  a.default.mark(function e() {
                    let t;
                    let r;
                    return a.default.wrap(
                      function(e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._readCapability.promise;
                            case 2:
                              if (!this._done) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", {
                                value: void 0,
                                done: !0
                              });
                            case 4:
                              if (!this._storedError) {
                                e.next = 6;
                                break;
                              }
                              throw this._storedError;
                            case 6:
                              if ((t = this._readableStream.read()) !== null) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (this._readCapability = (0,
                                s.createPromiseCapability)()),
                                e.abrupt("return", this.read())
                              );
                            case 10:
                              return (
                                (this._loaded += t.length),
                                this.onProgress &&
                                  this.onProgress({
                                    loaded: this._loaded,
                                    total: this._contentLength
                                  }),
                                (r = new Uint8Array(t).buffer),
                                e.abrupt("return", { value: r, done: !1 })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "cancel",
              value(e) {
                this._readableStream
                  ? this._readableStream.destroy(e)
                  : this._error(e);
              }
            },
            {
              key: "_error",
              value(e) {
                (this._storedError = e), this._readCapability.resolve();
              }
            },
            {
              key: "_setReadableStream",
              value(e) {
                const t = this;
                (this._readableStream = e),
                  e.on("readable", () => {
                    t._readCapability.resolve();
                  }),
                  e.on("end", () => {
                    e.destroy(), (t._done = !0), t._readCapability.resolve();
                  }),
                  e.on("error", e => {
                    t._error(e);
                  }),
                  !this._isStreamingSupported &&
                    this._isRangeSupported &&
                    this._error(new s.AbortException("streaming is disabled")),
                  this._storedError &&
                    this._readableStream.destroy(this._storedError);
              }
            },
            {
              key: "headersReady",
              get() {
                return this._headersCapability.promise;
              }
            },
            {
              key: "filename",
              get() {
                return this._filename;
              }
            },
            {
              key: "contentLength",
              get() {
                return this._contentLength;
              }
            },
            {
              key: "isRangeSupported",
              get() {
                return this._isRangeSupported;
              }
            },
            {
              key: "isStreamingSupported",
              get() {
                return this._isStreamingSupported;
              }
            }
          ]),
          e
        );
      })();
      const _ = (function() {
        function e(t) {
          d(this, e),
            (this._url = t.url),
            (this._done = !1),
            (this._storedError = null),
            (this.onProgress = null),
            (this._loaded = 0),
            (this._readableStream = null),
            (this._readCapability = (0, s.createPromiseCapability)());
          const r = t.source;
          this._isStreamingSupported = !r.disableStream;
        }
        return (
          o(e, [
            {
              key: "read",
              value: (function() {
                const e = h(
                  a.default.mark(function e() {
                    let t;
                    let r;
                    return a.default.wrap(
                      function(e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._readCapability.promise;
                            case 2:
                              if (!this._done) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", {
                                value: void 0,
                                done: !0
                              });
                            case 4:
                              if (!this._storedError) {
                                e.next = 6;
                                break;
                              }
                              throw this._storedError;
                            case 6:
                              if ((t = this._readableStream.read()) !== null) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (this._readCapability = (0,
                                s.createPromiseCapability)()),
                                e.abrupt("return", this.read())
                              );
                            case 10:
                              return (
                                (this._loaded += t.length),
                                this.onProgress &&
                                  this.onProgress({ loaded: this._loaded }),
                                (r = new Uint8Array(t).buffer),
                                e.abrupt("return", { value: r, done: !1 })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "cancel",
              value(e) {
                this._readableStream
                  ? this._readableStream.destroy(e)
                  : this._error(e);
              }
            },
            {
              key: "_error",
              value(e) {
                (this._storedError = e), this._readCapability.resolve();
              }
            },
            {
              key: "_setReadableStream",
              value(e) {
                const t = this;
                (this._readableStream = e),
                  e.on("readable", () => {
                    t._readCapability.resolve();
                  }),
                  e.on("end", () => {
                    e.destroy(), (t._done = !0), t._readCapability.resolve();
                  }),
                  e.on("error", e => {
                    t._error(e);
                  }),
                  this._storedError &&
                    this._readableStream.destroy(this._storedError);
              }
            },
            {
              key: "isStreamingSupported",
              get() {
                return this._isStreamingSupported;
              }
            }
          ]),
          e
        );
      })();
      function A(e, t) {
        return {
          protocol: e.protocol,
          auth: e.auth,
          host: e.hostname,
          port: e.port,
          path: e.path,
          method: "GET",
          headers: t
        };
      }
      var S = (function(e) {
        function t(e) {
          d(this, t);
          const r = l(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          const n = function(t) {
            if (t.statusCode === 404) {
              const n = new s.MissingPDFException(`Missing PDF "${r._url}".`);
              return (r._storedError = n), void r._headersCapability.reject(n);
            }
            r._headersCapability.resolve(), r._setReadableStream(t);
            const i = function(e) {
              return r._readableStream.headers[e.toLowerCase()];
            };
            const a = (0, u.validateRangeRequestCapabilities)({
              getResponseHeader: i,
              isHttp: e.isHttp,
              rangeChunkSize: r._rangeChunkSize,
              disableRange: r._disableRange
            });
            const o = a.allowRangeRequests;
            const l = a.suggestedLength;
            (r._isRangeSupported = o),
              (r._contentLength = l || r._contentLength),
              (r._filename = (0, u.extractFilenameFromHeader)(i));
          };
          return (
            (r._request = null),
            r._url.protocol === "http:"
              ? (r._request = p.request(A(r._url, e.httpHeaders), n))
              : (r._request = v.request(A(r._url, e.httpHeaders), n)),
            r._request.on("error", e => {
              (r._storedError = e), r._headersCapability.reject(e);
            }),
            r._request.end(),
            r
          );
        }
        return c(t, b), t;
      })();
      var w = (function(e) {
        function t(e, r, n) {
          d(this, t);
          const i = l(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          for (const a in ((i._httpHeaders = {}), e.httpHeaders)) {
            const o = e.httpHeaders[a];
            void 0 !== o && (i._httpHeaders[a] = o);
          }
          i._httpHeaders.Range = `bytes=${r}-${n - 1}`;
          const u = function(e) {
            if (e.statusCode !== 404) i._setReadableStream(e);
            else {
              const t = new s.MissingPDFException(`Missing PDF "${i._url}".`);
              i._storedError = t;
            }
          };
          return (
            (i._request = null),
            i._url.protocol === "http:"
              ? (i._request = p.request(A(i._url, i._httpHeaders), u))
              : (i._request = v.request(A(i._url, i._httpHeaders), u)),
            i._request.on("error", e => {
              i._storedError = e;
            }),
            i._request.end(),
            i
          );
        }
        return c(t, _), t;
      })();
      var k = (function(e) {
        function t(e) {
          d(this, t);
          const r = l(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          let n = decodeURIComponent(r._url.path);
          return (
            g.test(r._url.href) && (n = n.replace(/^\//, "")),
            f.lstat(n, (e, t) => {
              if (e) {
                return (
                  "ENOENT" === e.code &&
                    (e = new s.MissingPDFException(`Missing PDF "${n}".`)),
                  (r._storedError = e),
                  void r._headersCapability.reject(e)
                );
              }
              (r._contentLength = t.size),
                r._setReadableStream(f.createReadStream(n)),
                r._headersCapability.resolve();
            }),
            r
          );
        }
        return c(t, b), t;
      })();
      var P = (function(e) {
        function t(e, r, n) {
          d(this, t);
          const i = l(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          let a = decodeURIComponent(i._url.path);
          return (
            g.test(i._url.href) && (a = a.replace(/^\//, "")),
            i._setReadableStream(
              f.createReadStream(a, { start: r, end: n - 1 })
            ),
            i
          );
        }
        return c(t, _), t;
      })();
      t.PDFNodeStream = y;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateResponseStatus = t.validateRangeRequestCapabilities = t.extractFilenameFromHeader = t.createResponseStatusError = void 0);
      const n = r(1);
      const i = r(150);
      (t.createResponseStatusError = function(e, t) {
        return e === 404 || (e === 0 && /^file:/.test(t))
          ? new n.MissingPDFException(`Missing PDF "${t}".`)
          : new n.UnexpectedResponseException(
              `Unexpected server response (${e}) while retrieving PDF "${t}".`,
              e
            );
      }),
        (t.extractFilenameFromHeader = function(e) {
          const t = e("Content-Disposition");
          if (t) {
            const r = (0, i.getFilenameFromContentDispositionHeader)(t);
            if (/\.pdf$/i.test(r)) return r;
          }
          return null;
        }),
        (t.validateRangeRequestCapabilities = function(e) {
          const t = e.getResponseHeader;
          const r = e.isHttp;
          const i = e.rangeChunkSize;
          const a = e.disableRange;
          (0, n.assert)(i > 0, "Range chunk size must be larger than zero");
          const o = { allowRangeRequests: !1, suggestedLength: void 0 };
          const s = parseInt(t("Content-Length"), 10);
          return Number.isInteger(s)
            ? ((o.suggestedLength = s),
              s <= 2 * i
                ? o
                : a || !r
                ? o
                : t("Accept-Ranges") !== "bytes"
                ? o
                : (t("Content-Encoding") || "identity") !== "identity"
                ? o
                : ((o.allowRangeRequests = !0), o))
            : o;
        }),
        (t.validateResponseStatus = function(e) {
          return e === 200 || e === 206;
        });
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) {
            return (function(e, t) {
              const r = [];
              let n = !0;
              let i = !1;
              let a = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return r;
            })(e, t);
          }
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      t.getFilenameFromContentDispositionHeader = function(e) {
        let t = !0;
        let r = o("filename\\*", "i").exec(e);
        if (r) {
          let i = l((r = r[1]));
          return u((i = h((i = c((i = unescape(i)))))));
        }
        if (
          (r = (function(e) {
            for (
              var t = [],
                r = void 0,
                i = o("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              (r = i.exec(e)) !== null;

            ) {
              const a = r;
              const s = n(a, 4);
              let u = s[1];
              const h = s[2];
              const d = s[3];
              if ((u = parseInt(u, 10)) in t) {
                if (u === 0) break;
              } else t[u] = [h, d];
            }
            for (var f = [], p = 0; p < t.length && p in t; ++p) {
              const v = n(t[p], 2);
              const m = v[0];
              let g = v[1];
              (g = l(g)),
                m && ((g = unescape(g)), p === 0 && (g = c(g))),
                f.push(g);
            }
            return f.join("");
          })(e))
        )
          return u(h(r));
        if ((r = o("filename", "i").exec(e))) {
          let a = l((r = r[1]));
          return u((a = h(a)));
        }
        function o(e, t) {
          return new RegExp(
            `(?:^|;)\\s*${e}\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`,
            t
          );
        }
        function s(e, r) {
          if (e) {
            if (!/^[\x00-\xFF]+$/.test(r)) return r;
            try {
              for (
                var n = new TextDecoder(e, { fatal: !0 }),
                  i = new Array(r.length),
                  a = 0;
                a < r.length;
                ++a
              )
                i[a] = r.charCodeAt(a);
              (r = n.decode(new Uint8Array(i))), (t = !1);
            } catch (n) {
              if (/^utf-?8$/i.test(e)) {
                try {
                  (r = decodeURIComponent(escape(r))), (t = !1);
                } catch (e) {}
              }
            }
          }
          return r;
        }
        function u(e) {
          return (
            t &&
              /[\x80-\xff]/.test(e) &&
              ((e = s("utf-8", e)), t && (e = s("iso-8859-1", e))),
            e
          );
        }
        function l(e) {
          if (e.charAt(0) === '"') {
            for (var t = e.slice(1).split('\\"'), r = 0; r < t.length; ++r) {
              const n = t[r].indexOf('"');
              n !== -1 && ((t[r] = t[r].slice(0, n)), (t.length = r + 1)),
                (t[r] = t[r].replace(/\\(.)/g, "$1"));
            }
            e = t.join('"');
          }
          return e;
        }
        function c(e) {
          const t = e.indexOf("'");
          return t === -1
            ? e
            : s(e.slice(0, t), e.slice(t + 1).replace(/^[^']*'/, ""));
        }
        function h(e) {
          return e.slice(0, 2) !== "=?" || /[\x00-\x19\x80-\xff]/.test(e)
            ? e
            : e.replace(
                /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                (e, t, r, n) => {
                  if (r === "q" || r === "Q") {
                    return s(
                      t,
                      (n = (n = n.replace(/_/g, " ")).replace(
                        /=([0-9a-fA-F]{2})/g,
                        (e, t) => String.fromCharCode(parseInt(t, 16))
                      ))
                    );
                  }
                  try {
                    n = atob(n);
                  } catch (e) {}
                  return s(t, n);
                }
              );
        }
        return "";
      };
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFFetchStream = void 0);
      let n;
      const i = r(137);
      const a = (n = i) && n.__esModule ? n : { default: n };
      const o = (function() {
        function e(e, t) {
          for (let r = 0; r < t.length; r++) {
            const n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      const s = r(1);
      const u = r(149);
      function l(e) {
        return function() {
          const t = e.apply(this, arguments);
          return new Promise((e, r) =>
            (function n(i, a) {
              try {
                var o = t[i](a);
                var s = o.value;
              } catch (e) {
                return void r(e);
              }
              if (!o.done) {
                return Promise.resolve(s).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
              }
              e(s);
            })("next")
          );
        };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(e, t, r) {
        return {
          method: "GET",
          headers: e,
          signal: r && r.signal,
          mode: "cors",
          credentials: t ? "include" : "same-origin",
          redirect: "follow"
        };
      }
      const d = (function() {
        function e(t) {
          c(this, e),
            (this.source = t),
            (this.isHttp = /^https?:/i.test(t.url)),
            (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
            (this._fullRequestReader = null),
            (this._rangeRequestReaders = []);
        }
        return (
          o(e, [
            {
              key: "getFullReader",
              value() {
                return (
                  (0, s.assert)(!this._fullRequestReader),
                  (this._fullRequestReader = new f(this)),
                  this._fullRequestReader
                );
              }
            },
            {
              key: "getRangeReader",
              value(e, t) {
                const r = new p(this, e, t);
                return this._rangeRequestReaders.push(r), r;
              }
            },
            {
              key: "cancelAllRequests",
              value(e) {
                this._fullRequestReader && this._fullRequestReader.cancel(e),
                  this._rangeRequestReaders.slice(0).forEach(t => {
                    t.cancel(e);
                  });
              }
            }
          ]),
          e
        );
      })();
      var f = (function() {
        function e(t) {
          const r = this;
          c(this, e),
            (this._stream = t),
            (this._reader = null),
            (this._loaded = 0),
            (this._filename = null);
          const n = t.source;
          for (const i in ((this._withCredentials = n.withCredentials),
          (this._contentLength = n.length),
          (this._headersCapability = (0, s.createPromiseCapability)()),
          (this._disableRange = n.disableRange || !1),
          (this._rangeChunkSize = n.rangeChunkSize),
          this._rangeChunkSize ||
            this._disableRange ||
            (this._disableRange = !0),
          typeof AbortController !== "undefined" &&
            (this._abortController = new AbortController()),
          (this._isStreamingSupported = !n.disableStream),
          (this._isRangeSupported = !n.disableRange),
          (this._headers = new Headers()),
          this._stream.httpHeaders)) {
            const a = this._stream.httpHeaders[i];
            void 0 !== a && this._headers.append(i, a);
          }
          const o = n.url;
          fetch(
            o,
            h(this._headers, this._withCredentials, this._abortController)
          )
            .then(e => {
              if (!(0, u.validateResponseStatus)(e.status))
                throw (0, u.createResponseStatusError)(e.status, o);
              (r._reader = e.body.getReader()), r._headersCapability.resolve();
              const t = function(t) {
                return e.headers.get(t);
              };
              const n = (0, u.validateRangeRequestCapabilities)({
                getResponseHeader: t,
                isHttp: r._stream.isHttp,
                rangeChunkSize: r._rangeChunkSize,
                disableRange: r._disableRange
              });
              const i = n.allowRangeRequests;
              const a = n.suggestedLength;
              (r._isRangeSupported = i),
                (r._contentLength = a || r._contentLength),
                (r._filename = (0, u.extractFilenameFromHeader)(t)),
                !r._isStreamingSupported &&
                  r._isRangeSupported &&
                  r.cancel(new s.AbortException("streaming is disabled"));
            })
            .catch(this._headersCapability.reject),
            (this.onProgress = null);
        }
        return (
          o(e, [
            {
              key: "read",
              value: (function() {
                const e = l(
                  a.default.mark(function e() {
                    let t;
                    let r;
                    let n;
                    let i;
                    return a.default.wrap(
                      function(e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this._headersCapability.promise
                              );
                            case 2:
                              return (e.next = 4), this._reader.read();
                            case 4:
                              if (
                                ((t = e.sent), (r = t.value), !(n = t.done))
                              ) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return", {
                                value: r,
                                done: n
                              });
                            case 9:
                              return (
                                (this._loaded += r.byteLength),
                                this.onProgress &&
                                  this.onProgress({
                                    loaded: this._loaded,
                                    total: this._contentLength
                                  }),
                                (i = new Uint8Array(r).buffer),
                                e.abrupt("return", { value: i, done: !1 })
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "cancel",
              value(e) {
                this._reader && this._reader.cancel(e),
                  this._abortController && this._abortController.abort();
              }
            },
            {
              key: "headersReady",
              get() {
                return this._headersCapability.promise;
              }
            },
            {
              key: "filename",
              get() {
                return this._filename;
              }
            },
            {
              key: "contentLength",
              get() {
                return this._contentLength;
              }
            },
            {
              key: "isRangeSupported",
              get() {
                return this._isRangeSupported;
              }
            },
            {
              key: "isStreamingSupported",
              get() {
                return this._isStreamingSupported;
              }
            }
          ]),
          e
        );
      })();
      var p = (function() {
        function e(t, r, n) {
          const i = this;
          c(this, e),
            (this._stream = t),
            (this._reader = null),
            (this._loaded = 0);
          const a = t.source;
          for (const o in ((this._withCredentials = a.withCredentials),
          (this._readCapability = (0, s.createPromiseCapability)()),
          (this._isStreamingSupported = !a.disableStream),
          typeof AbortController !== "undefined" &&
            (this._abortController = new AbortController()),
          (this._headers = new Headers()),
          this._stream.httpHeaders)) {
            const l = this._stream.httpHeaders[o];
            void 0 !== l && this._headers.append(o, l);
          }
          const d = `${r}-${n - 1}`;
          this._headers.append("Range", `bytes=${d}`);
          const f = a.url;
          fetch(
            f,
            h(this._headers, this._withCredentials, this._abortController)
          ).then(e => {
            if (!(0, u.validateResponseStatus)(e.status))
              throw (0, u.createResponseStatusError)(e.status, f);
            i._readCapability.resolve(), (i._reader = e.body.getReader());
          }),
            (this.onProgress = null);
        }
        return (
          o(e, [
            {
              key: "read",
              value: (function() {
                const e = l(
                  a.default.mark(function e() {
                    let t;
                    let r;
                    let n;
                    let i;
                    return a.default.wrap(
                      function(e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this._readCapability.promise;
                            case 2:
                              return (e.next = 4), this._reader.read();
                            case 4:
                              if (
                                ((t = e.sent), (r = t.value), !(n = t.done))
                              ) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return", {
                                value: r,
                                done: n
                              });
                            case 9:
                              return (
                                (this._loaded += r.byteLength),
                                this.onProgress &&
                                  this.onProgress({ loaded: this._loaded }),
                                (i = new Uint8Array(r).buffer),
                                e.abrupt("return", { value: i, done: !1 })
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "cancel",
              value(e) {
                this._reader && this._reader.cancel(e),
                  this._abortController && this._abortController.abort();
              }
            },
            {
              key: "isStreamingSupported",
              get() {
                return this._isStreamingSupported;
              }
            }
          ]),
          e
        );
      })();
      t.PDFFetchStream = d;
    },
    function(e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NetworkManager = t.PDFNetworkStream = void 0);
      const n = s(r(137));
      const i = r(1);
      const a = r(149);
      const o = s(r(3));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        return function() {
          const t = e.apply(this, arguments);
          return new Promise((e, r) =>
            (function n(i, a) {
              try {
                var o = t[i](a);
                var s = o.value;
              } catch (e) {
                return void r(e);
              }
              if (!o.done) {
                return Promise.resolve(s).then(
                  e => {
                    n("next", e);
                  },
                  e => {
                    n("throw", e);
                  }
                );
              }
              e(s);
            })("next")
          );
        };
      }
      function l(e, t) {
        (this.url = e),
          (t = t || {}),
          (this.isHttp = /^https?:/i.test(e)),
          (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
          (this.withCredentials = t.withCredentials || !1),
          (this.getXhr =
            t.getXhr ||
            function() {
              return new XMLHttpRequest();
            }),
          (this.currXhrId = 0),
          (this.pendingRequests = Object.create(null)),
          (this.loadedRequests = Object.create(null));
      }
      function c(e) {
        const t = e.response;
        return typeof t !== "string" ? t : (0, i.stringToBytes)(t).buffer;
      }
      const h = (function() {
        try {
          const e = new XMLHttpRequest();
          return (
            e.open("GET", o.default.location.href),
            (e.responseType = "moz-chunked-arraybuffer"),
            e.responseType === "moz-chunked-arraybuffer"
          );
        } catch (e) {
          return !1;
        }
      })();
      function d(e) {
        (this._source = e),
          (this._manager = new l(e.url, {
            httpHeaders: e.httpHeaders,
            withCredentials: e.withCredentials
          })),
          (this._rangeChunkSize = e.rangeChunkSize),
          (this._fullRequestReader = null),
          (this._rangeRequestReaders = []);
      }
      function f(e, t) {
        this._manager = e;
        const r = {
          onHeadersReceived: this._onHeadersReceived.bind(this),
          onProgressiveData: t.disableStream
            ? null
            : this._onProgressiveData.bind(this),
          onDone: this._onDone.bind(this),
          onError: this._onError.bind(this),
          onProgress: this._onProgress.bind(this)
        };
        (this._url = t.url),
          (this._fullRequestId = e.requestFull(r)),
          (this._headersReceivedCapability = (0, i.createPromiseCapability)()),
          (this._disableRange = t.disableRange || !1),
          (this._contentLength = t.length),
          (this._rangeChunkSize = t.rangeChunkSize),
          this._rangeChunkSize ||
            this._disableRange ||
            (this._disableRange = !0),
          (this._isStreamingSupported = !1),
          (this._isRangeSupported = !1),
          (this._cachedChunks = []),
          (this._requests = []),
          (this._done = !1),
          (this._storedError = void 0),
          (this._filename = null),
          (this.onProgress = null);
      }
      function p(e, t, r) {
        this._manager = e;
        const n = {
          onDone: this._onDone.bind(this),
          onProgress: this._onProgress.bind(this)
        };
        (this._requestId = e.requestRange(t, r, n)),
          (this._requests = []),
          (this._queuedChunk = null),
          (this._done = !1),
          (this.onProgress = null),
          (this.onClosed = null);
      }
      (l.prototype = {
        requestRange(e, t, r) {
          const n = { begin: e, end: t };
          for (const i in r) n[i] = r[i];
          return this.request(n);
        },
        requestFull(e) {
          return this.request(e);
        },
        request(e) {
          const t = this.getXhr();
          const r = this.currXhrId++;
          const n = (this.pendingRequests[r] = { xhr: t });
          for (const i in (t.open("GET", this.url),
          (t.withCredentials = this.withCredentials),
          this.httpHeaders)) {
            const a = this.httpHeaders[i];
            void 0 !== a && t.setRequestHeader(i, a);
          }
          if (this.isHttp && "begin" in e && "end" in e) {
            const o = `${e.begin}-${e.end - 1}`;
            t.setRequestHeader("Range", `bytes=${o}`), (n.expectedStatus = 206);
          } else n.expectedStatus = 200;
          return (
            h && !!e.onProgressiveData
              ? ((t.responseType = "moz-chunked-arraybuffer"),
                (n.onProgressiveData = e.onProgressiveData),
                (n.mozChunked = !0))
              : (t.responseType = "arraybuffer"),
            e.onError &&
              (t.onerror = function(r) {
                e.onError(t.status);
              }),
            (t.onreadystatechange = this.onStateChange.bind(this, r)),
            (t.onprogress = this.onProgress.bind(this, r)),
            (n.onHeadersReceived = e.onHeadersReceived),
            (n.onDone = e.onDone),
            (n.onError = e.onError),
            (n.onProgress = e.onProgress),
            t.send(null),
            r
          );
        },
        onProgress(e, t) {
          const r = this.pendingRequests[e];
          if (r) {
            if (r.mozChunked) {
              const n = c(r.xhr);
              r.onProgressiveData(n);
            }
            const i = r.onProgress;
            i && i(t);
          }
        },
        onStateChange(e, t) {
          const r = this.pendingRequests[e];
          if (r) {
            const n = r.xhr;
            if (
              (n.readyState >= 2 &&
                r.onHeadersReceived &&
                (r.onHeadersReceived(), delete r.onHeadersReceived),
              n.readyState === 4 && e in this.pendingRequests)
            ) {
              if (
                (delete this.pendingRequests[e], n.status === 0 && this.isHttp)
              )
                r.onError && r.onError(n.status);
              else {
                let i = n.status || 200;
                if (
                  (i === 200 && r.expectedStatus === 206) ||
                  i === r.expectedStatus
                ) {
                  this.loadedRequests[e] = !0;
                  let a = c(n);
                  if (i === 206) {
                    let o = n.getResponseHeader("Content-Range");
                    let s = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
                    let u = parseInt(s[1], 10);
                    r.onDone({ begin: u, chunk: a });
                  } else {
                    r.onProgressiveData
                      ? r.onDone(null)
                      : a
                      ? r.onDone({ begin: 0, chunk: a })
                      : r.onError && r.onError(n.status);
                  }
                } else r.onError && r.onError(n.status);
              }
            }
          }
        },
        hasPendingRequests() {
          for (const e in this.pendingRequests) return !0;
          return !1;
        },
        getRequestXhr(e) {
          return this.pendingRequests[e].xhr;
        },
        isStreamingRequest(e) {
          return !!this.pendingRequests[e].onProgressiveData;
        },
        isPendingRequest(e) {
          return e in this.pendingRequests;
        },
        isLoadedRequest(e) {
          return e in this.loadedRequests;
        },
        abortAllRequests() {
          for (const e in this.pendingRequests) this.abortRequest(0 | e);
        },
        abortRequest(e) {
          const t = this.pendingRequests[e].xhr;
          delete this.pendingRequests[e], t.abort();
        }
      }),
        (d.prototype = {
          _onRangeRequestReaderClosed(e) {
            const t = this._rangeRequestReaders.indexOf(e);
            t >= 0 && this._rangeRequestReaders.splice(t, 1);
          },
          getFullReader() {
            return (
              (0, i.assert)(!this._fullRequestReader),
              (this._fullRequestReader = new f(this._manager, this._source)),
              this._fullRequestReader
            );
          },
          getRangeReader(e, t) {
            const r = new p(this._manager, e, t);
            return (
              (r.onClosed = this._onRangeRequestReaderClosed.bind(this)),
              this._rangeRequestReaders.push(r),
              r
            );
          },
          cancelAllRequests(e) {
            this._fullRequestReader && this._fullRequestReader.cancel(e),
              this._rangeRequestReaders.slice(0).forEach(t => {
                t.cancel(e);
              });
          }
        }),
        (f.prototype = {
          _onHeadersReceived() {
            const e = this._fullRequestId;
            const t = this._manager.getRequestXhr(e);
            const r = function(e) {
              return t.getResponseHeader(e);
            };
            const n = (0, a.validateRangeRequestCapabilities)({
              getResponseHeader: r,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            const i = n.allowRangeRequests;
            const o = n.suggestedLength;
            i && (this._isRangeSupported = !0),
              (this._contentLength = o || this._contentLength),
              (this._filename = (0, a.extractFilenameFromHeader)(r));
            const s = this._manager;
            s.isStreamingRequest(e)
              ? (this._isStreamingSupported = !0)
              : this._isRangeSupported && s.abortRequest(e),
              this._headersReceivedCapability.resolve();
          },
          _onProgressiveData(e) {
            this._requests.length > 0
              ? this._requests.shift().resolve({ value: e, done: !1 })
              : this._cachedChunks.push(e);
          },
          _onDone(e) {
            e && this._onProgressiveData(e.chunk),
              (this._done = !0),
              this._cachedChunks.length > 0 ||
                (this._requests.forEach(e => {
                  e.resolve({ value: void 0, done: !0 });
                }),
                (this._requests = []));
          },
          _onError(e) {
            const t = this._url;
            const r = (0, a.createResponseStatusError)(e, t);
            (this._storedError = r),
              this._headersReceivedCapability.reject(r),
              this._requests.forEach(e => {
                e.reject(r);
              }),
              (this._requests = []),
              (this._cachedChunks = []);
          },
          _onProgress(e) {
            this.onProgress &&
              this.onProgress({
                loaded: e.loaded,
                total: e.lengthComputable ? e.total : this._contentLength
              });
          },
          get filename() {
            return this._filename;
          },
          get isRangeSupported() {
            return this._isRangeSupported;
          },
          get isStreamingSupported() {
            return this._isStreamingSupported;
          },
          get contentLength() {
            return this._contentLength;
          },
          get headersReady() {
            return this._headersReceivedCapability.promise;
          },
          read: (function() {
            const e = u(
              n.default.mark(function e() {
                let t;
                let r;
                return n.default.wrap(
                  function(e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!this._storedError) {
                            e.next = 2;
                            break;
                          }
                          throw this._storedError;
                        case 2:
                          if (!(this._cachedChunks.length > 0)) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (t = this._cachedChunks.shift()),
                            e.abrupt("return", { value: t, done: !1 })
                          );
                        case 5:
                          if (!this._done) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 7:
                          return (
                            (r = (0, i.createPromiseCapability)()),
                            this._requests.push(r),
                            e.abrupt("return", r.promise)
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                    }
                  },
                  e,
                  this
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          cancel(e) {
            (this._done = !0),
              this._headersReceivedCapability.reject(e),
              this._requests.forEach(e => {
                e.resolve({ value: void 0, done: !0 });
              }),
              (this._requests = []),
              this._manager.isPendingRequest(this._fullRequestId) &&
                this._manager.abortRequest(this._fullRequestId),
              (this._fullRequestReader = null);
          }
        }),
        (p.prototype = {
          _close() {
            this.onClosed && this.onClosed(this);
          },
          _onDone(e) {
            const t = e.chunk;
            this._requests.length > 0
              ? this._requests.shift().resolve({ value: t, done: !1 })
              : (this._queuedChunk = t);
            (this._done = !0),
              this._requests.forEach(e => {
                e.resolve({ value: void 0, done: !0 });
              }),
              (this._requests = []),
              this._close();
          },
          _onProgress(e) {
            !this.isStreamingSupported &&
              this.onProgress &&
              this.onProgress({ loaded: e.loaded });
          },
          get isStreamingSupported() {
            return !1;
          },
          read: (function() {
            const e = u(
              n.default.mark(function e() {
                let t;
                let r;
                return n.default.wrap(
                  function(e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (this._queuedChunk === null) {
                            e.next = 4;
                            break;
                          }
                          return (
                            (t = this._queuedChunk),
                            (this._queuedChunk = null),
                            e.abrupt("return", { value: t, done: !1 })
                          );
                        case 4:
                          if (!this._done) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 6:
                          return (
                            (r = (0, i.createPromiseCapability)()),
                            this._requests.push(r),
                            e.abrupt("return", r.promise)
                          );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                    }
                  },
                  e,
                  this
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          cancel(e) {
            (this._done = !0),
              this._requests.forEach(e => {
                e.resolve({ value: void 0, done: !0 });
              }),
              (this._requests = []),
              this._manager.isPendingRequest(this._requestId) &&
                this._manager.abortRequest(this._requestId),
              this._close();
          }
        }),
        (t.PDFNetworkStream = d),
        (t.NetworkManager = l);
    }
  ])
);
