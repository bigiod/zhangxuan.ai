import { b as yp, g as sn, l as qr, f as nn, H as Ca, J as mp, K as bp, L as Ep } from "./config-e567ef17.js";
import { s as wp } from "./setupGraphViewbox-a4603a92.js";
import { i as xp } from "./is_dark-151801f4.js";
var Ki = function() {
  var fe = function(ee, H, te, S) {
    for (te = te || {}, S = ee.length; S--; te[ee[S]] = H)
      ;
    return te;
  }, he = [1, 4], Q = [1, 13], ce = [1, 12], Y = [1, 15], A = [1, 16], T = [1, 20], w = [1, 19], L = [6, 7, 8], G = [1, 26], U = [1, 24], P = [1, 25], K = [6, 7, 11], D = [1, 6, 13, 15, 16, 19, 22], V = [1, 33], _ = [1, 34], J = [1, 6, 7, 11, 13, 15, 16, 19, 22], ne = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(H, te, S, $, k, q, ve) {
      var pe = q.length - 1;
      switch (k) {
        case 6:
        case 7:
          return $;
        case 8:
          $.getLogger().trace("Stop NL ");
          break;
        case 9:
          $.getLogger().trace("Stop EOF ");
          break;
        case 11:
          $.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          $.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          $.getLogger().info("Node: ", q[pe].id), $.addNode(q[pe - 1].length, q[pe].id, q[pe].descr, q[pe].type);
          break;
        case 16:
          $.getLogger().trace("Icon: ", q[pe]), $.decorateNode({ icon: q[pe] });
          break;
        case 17:
        case 21:
          $.decorateNode({ class: q[pe] });
          break;
        case 18:
          $.getLogger().trace("SPACELIST");
          break;
        case 19:
          $.getLogger().trace("Node: ", q[pe].id), $.addNode(0, q[pe].id, q[pe].descr, q[pe].type);
          break;
        case 20:
          $.decorateNode({ icon: q[pe] });
          break;
        case 25:
          $.getLogger().trace("node found ..", q[pe - 2]), this.$ = { id: q[pe - 1], descr: q[pe - 1], type: $.getType(q[pe - 2], q[pe]) };
          break;
        case 26:
          this.$ = { id: q[pe], descr: q[pe], type: $.nodeType.DEFAULT };
          break;
        case 27:
          $.getLogger().trace("node found ..", q[pe - 3]), this.$ = { id: q[pe - 3], descr: q[pe - 1], type: $.getType(q[pe - 2], q[pe]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: he }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: he }, { 6: Q, 7: [1, 10], 9: 9, 12: 11, 13: ce, 14: 14, 15: Y, 16: A, 17: 17, 18: 18, 19: T, 22: w }, fe(L, [2, 3]), { 1: [2, 2] }, fe(L, [2, 4]), fe(L, [2, 5]), { 1: [2, 6], 6: Q, 12: 21, 13: ce, 14: 14, 15: Y, 16: A, 17: 17, 18: 18, 19: T, 22: w }, { 6: Q, 9: 22, 12: 11, 13: ce, 14: 14, 15: Y, 16: A, 17: 17, 18: 18, 19: T, 22: w }, { 6: G, 7: U, 10: 23, 11: P }, fe(K, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: T, 22: w }), fe(K, [2, 18]), fe(K, [2, 19]), fe(K, [2, 20]), fe(K, [2, 21]), fe(K, [2, 23]), fe(K, [2, 24]), fe(K, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: G, 7: U, 10: 32, 11: P }, { 1: [2, 7], 6: Q, 12: 21, 13: ce, 14: 14, 15: Y, 16: A, 17: 17, 18: 18, 19: T, 22: w }, fe(D, [2, 14], { 7: V, 11: _ }), fe(J, [2, 8]), fe(J, [2, 9]), fe(J, [2, 10]), fe(K, [2, 15]), fe(K, [2, 16]), fe(K, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, fe(D, [2, 13], { 7: V, 11: _ }), fe(J, [2, 11]), fe(J, [2, 12]), { 21: [1, 37] }, fe(K, [2, 25]), fe(K, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(H, te) {
      if (te.recoverable)
        this.trace(H);
      else {
        var S = new Error(H);
        throw S.hash = te, S;
      }
    },
    parse: function(H) {
      var te = this, S = [0], $ = [], k = [null], q = [], ve = this.table, pe = "", Ae = 0, Ne = 0, _e = 2, tt = 1, ct = q.slice.call(arguments, 1), Pe = Object.create(this.lexer), $e = { yy: {} };
      for (var Xe in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Xe) && ($e.yy[Xe] = this.yy[Xe]);
      Pe.setInput(H, $e.yy), $e.yy.lexer = Pe, $e.yy.parser = this, typeof Pe.yylloc > "u" && (Pe.yylloc = {});
      var rt = Pe.yylloc;
      q.push(rt);
      var lt = Pe.options && Pe.options.ranges;
      typeof $e.yy.parseError == "function" ? this.parseError = $e.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function nt() {
        var jt;
        return jt = $.pop() || Pe.lex() || tt, typeof jt != "number" && (jt instanceof Array && ($ = jt, jt = $.pop()), jt = te.symbols_[jt] || jt), jt;
      }
      for (var je, pt, Et, kt, vt = {}, vr, qt, un, Kr; ; ) {
        if (pt = S[S.length - 1], this.defaultActions[pt] ? Et = this.defaultActions[pt] : ((je === null || typeof je > "u") && (je = nt()), Et = ve[pt] && ve[pt][je]), typeof Et > "u" || !Et.length || !Et[0]) {
          var Da = "";
          Kr = [];
          for (vr in ve[pt])
            this.terminals_[vr] && vr > _e && Kr.push("'" + this.terminals_[vr] + "'");
          Pe.showPosition ? Da = "Parse error on line " + (Ae + 1) + `:
` + Pe.showPosition() + `
Expecting ` + Kr.join(", ") + ", got '" + (this.terminals_[je] || je) + "'" : Da = "Parse error on line " + (Ae + 1) + ": Unexpected " + (je == tt ? "end of input" : "'" + (this.terminals_[je] || je) + "'"), this.parseError(Da, {
            text: Pe.match,
            token: this.terminals_[je] || je,
            line: Pe.yylineno,
            loc: rt,
            expected: Kr
          });
        }
        if (Et[0] instanceof Array && Et.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + pt + ", token: " + je);
        switch (Et[0]) {
          case 1:
            S.push(je), k.push(Pe.yytext), q.push(Pe.yylloc), S.push(Et[1]), je = null, Ne = Pe.yyleng, pe = Pe.yytext, Ae = Pe.yylineno, rt = Pe.yylloc;
            break;
          case 2:
            if (qt = this.productions_[Et[1]][1], vt.$ = k[k.length - qt], vt._$ = {
              first_line: q[q.length - (qt || 1)].first_line,
              last_line: q[q.length - 1].last_line,
              first_column: q[q.length - (qt || 1)].first_column,
              last_column: q[q.length - 1].last_column
            }, lt && (vt._$.range = [
              q[q.length - (qt || 1)].range[0],
              q[q.length - 1].range[1]
            ]), kt = this.performAction.apply(vt, [
              pe,
              Ne,
              Ae,
              $e.yy,
              Et[1],
              k,
              q
            ].concat(ct)), typeof kt < "u")
              return kt;
            qt && (S = S.slice(0, -1 * qt * 2), k = k.slice(0, -1 * qt), q = q.slice(0, -1 * qt)), S.push(this.productions_[Et[1]][0]), k.push(vt.$), q.push(vt._$), un = ve[S[S.length - 2]][S[S.length - 1]], S.push(un);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, ue = function() {
    var ee = {
      EOF: 1,
      parseError: function(te, S) {
        if (this.yy.parser)
          this.yy.parser.parseError(te, S);
        else
          throw new Error(te);
      },
      // resets the lexer, sets new input
      setInput: function(H, te) {
        return this.yy = te || this.yy || {}, this._input = H, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var H = this._input[0];
        this.yytext += H, this.yyleng++, this.offset++, this.match += H, this.matched += H;
        var te = H.match(/(?:\r\n?|\n).*/g);
        return te ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), H;
      },
      // unshifts one char (or a string) into the input
      unput: function(H) {
        var te = H.length, S = H.split(/(?:\r\n?|\n)/g);
        this._input = H + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - te), this.offset -= te;
        var $ = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), S.length - 1 && (this.yylineno -= S.length - 1);
        var k = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: S ? (S.length === $.length ? this.yylloc.first_column : 0) + $[$.length - S.length].length - S[0].length : this.yylloc.first_column - te
        }, this.options.ranges && (this.yylloc.range = [k[0], k[0] + this.yyleng - te]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(H) {
        this.unput(this.match.slice(H));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var H = this.matched.substr(0, this.matched.length - this.match.length);
        return (H.length > 20 ? "..." : "") + H.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var H = this.match;
        return H.length < 20 && (H += this._input.substr(0, 20 - H.length)), (H.substr(0, 20) + (H.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var H = this.pastInput(), te = new Array(H.length + 1).join("-");
        return H + this.upcomingInput() + `
` + te + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(H, te) {
        var S, $, k;
        if (this.options.backtrack_lexer && (k = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (k.yylloc.range = this.yylloc.range.slice(0))), $ = H[0].match(/(?:\r\n?|\n).*/g), $ && (this.yylineno += $.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: $ ? $[$.length - 1].length - $[$.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + H[0].length
        }, this.yytext += H[0], this.match += H[0], this.matches = H, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(H[0].length), this.matched += H[0], S = this.performAction.call(this, this.yy, this, te, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), S)
          return S;
        if (this._backtrack) {
          for (var q in k)
            this[q] = k[q];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var H, te, S, $;
        this._more || (this.yytext = "", this.match = "");
        for (var k = this._currentRules(), q = 0; q < k.length; q++)
          if (S = this._input.match(this.rules[k[q]]), S && (!te || S[0].length > te[0].length)) {
            if (te = S, $ = q, this.options.backtrack_lexer) {
              if (H = this.test_match(S, k[q]), H !== !1)
                return H;
              if (this._backtrack) {
                te = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return te ? (H = this.test_match(te, k[$]), H !== !1 ? H : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var te = this.next();
        return te || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(te) {
        this.conditionStack.push(te);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var te = this.conditionStack.length - 1;
        return te > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(te) {
        return te = this.conditionStack.length - 1 - Math.abs(te || 0), te >= 0 ? this.conditionStack[te] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(te) {
        this.begin(te);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(te, S, $, k) {
        switch ($) {
          case 0:
            te.getLogger().trace("Found comment", S.yytext);
            break;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            te.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return te.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            te.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return te.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return te.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return te.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return te.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            te.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 22:
            return te.getLogger().trace("description:", S.yytext), "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            return this.popState(), te.getLogger().trace("node end ))"), "NODE_DEND";
          case 25:
            return this.popState(), te.getLogger().trace("node end )"), "NODE_DEND";
          case 26:
            return this.popState(), te.getLogger().trace("node end ...", S.yytext), "NODE_DEND";
          case 27:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 28:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 29:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 30:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 32:
            return te.getLogger().trace("Long description:", S.yytext), 20;
          case 33:
            return te.getLogger().trace("Long description:", S.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\-\)\{\}]+)/i, /^(?:$)/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR: { rules: [22, 23], inclusive: !1 }, NODE: { rules: [21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return ee;
  }();
  ne.lexer = ue;
  function j() {
    this.yy = {};
  }
  return j.prototype = ne, ne.Parser = j, new j();
}();
Ki.parser = Ki;
const Tp = Ki, on = (fe) => yp(fe, sn());
let Jt = [], Uu = 0, Ji = {};
const Cp = () => {
  Jt = [], Uu = 0, Ji = {};
}, Dp = function(fe) {
  for (let he = Jt.length - 1; he >= 0; he--)
    if (Jt[he].level < fe)
      return Jt[he];
  return null;
}, Sp = () => Jt.length > 0 ? Jt[0] : null, Lp = (fe, he, Q, ce) => {
  qr.info("addNode", fe, he, Q, ce);
  const Y = sn(), A = {
    id: Uu++,
    nodeId: on(he),
    level: fe,
    descr: on(Q),
    type: ce,
    children: [],
    width: sn().mindmap.maxNodeWidth
  };
  switch (A.type) {
    case yt.ROUNDED_RECT:
      A.padding = 2 * Y.mindmap.padding;
      break;
    case yt.RECT:
      A.padding = 2 * Y.mindmap.padding;
      break;
    case yt.HEXAGON:
      A.padding = 2 * Y.mindmap.padding;
      break;
    default:
      A.padding = Y.mindmap.padding;
  }
  const T = Dp(fe);
  if (T)
    T.children.push(A), Jt.push(A);
  else if (Jt.length === 0)
    Jt.push(A);
  else {
    let w = new Error(
      'There can be only one root. No parent could be found for ("' + A.descr + '")'
    );
    throw w.hash = {
      text: "branch " + name,
      token: "branch " + name,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + name + '"']
    }, w;
  }
}, yt = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Ap = (fe, he) => {
  switch (qr.debug("In get type", fe, he), fe) {
    case "[":
      return yt.RECT;
    case "(":
      return he === ")" ? yt.ROUNDED_RECT : yt.CLOUD;
    case "((":
      return yt.CIRCLE;
    case ")":
      return yt.CLOUD;
    case "))":
      return yt.BANG;
    case "{{":
      return yt.HEXAGON;
    default:
      return yt.DEFAULT;
  }
}, Yu = (fe, he) => {
  Ji[fe] = he;
}, Op = (fe) => {
  const he = Jt[Jt.length - 1];
  fe && fe.icon && (he.icon = on(fe.icon)), fe && fe.class && (he.class = on(fe.class));
}, Wr = (fe) => {
  switch (fe) {
    case yt.DEFAULT:
      return "no-border";
    case yt.RECT:
      return "rect";
    case yt.ROUNDED_RECT:
      return "rounded-rect";
    case yt.CIRCLE:
      return "circle";
    case yt.CLOUD:
      return "cloud";
    case yt.BANG:
      return "bang";
    case yt.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
};
let Hu;
const Np = (fe) => {
  Hu = fe;
}, Mp = () => qr, Ip = (fe) => Jt[fe], ji = (fe) => Ji[fe], Rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addNode: Lp,
  clear: Cp,
  decorateNode: Op,
  getElementById: ji,
  getLogger: Mp,
  getMindmap: Sp,
  getNodeById: Ip,
  getType: Ap,
  nodeType: yt,
  get parseError() {
    return Hu;
  },
  sanitizeText: on,
  setElementForId: Yu,
  setErrorHandler: Np,
  type2Str: Wr
}, Symbol.toStringTag, { value: "Module" })), Xu = 12;
function kp(fe, he) {
  fe.each(function() {
    var Q = nn(this), ce = Q.text().split(/(\s+|<br>)/).reverse(), Y, A = [], T = 1.1, w = Q.attr("y"), L = parseFloat(Q.attr("dy")), G = Q.text(null).append("tspan").attr("x", 0).attr("y", w).attr("dy", L + "em");
    for (let U = 0; U < ce.length; U++)
      Y = ce[ce.length - 1 - U], A.push(Y), G.text(A.join(" ").trim()), (G.node().getComputedTextLength() > he || Y === "<br>") && (A.pop(), G.text(A.join(" ").trim()), Y === "<br>" ? A = [""] : A = [Y], G = Q.append("tspan").attr("x", 0).attr("y", w).attr("dy", T + "em").text(Y));
  });
}
const Pp = function(fe, he, Q) {
  fe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr(
    "d",
    `M0 ${he.height - 5} v${-he.height + 2 * 5} q0,-5 5,-5 h${he.width - 2 * 5} q5,0 5,5 v${he.height - 5} H0 Z`
  ), fe.append("line").attr("class", "node-line-" + Q).attr("x1", 0).attr("y1", he.height).attr("x2", he.width).attr("y2", he.height);
}, Bp = function(fe, he) {
  fe.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr("height", he.height).attr("width", he.width);
}, Fp = function(fe, he) {
  const Q = he.width, ce = he.height, Y = 0.15 * Q, A = 0.25 * Q, T = 0.35 * Q, w = 0.2 * Q;
  fe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr(
    "d",
    `M0 0 a${Y},${Y} 0 0,1 ${Q * 0.25},${-1 * Q * 0.1}
      a${T},${T} 1 0,1 ${Q * 0.4},${-1 * Q * 0.1}
      a${A},${A} 1 0,1 ${Q * 0.35},${1 * Q * 0.2}

      a${Y},${Y} 1 0,1 ${Q * 0.15},${1 * ce * 0.35}
      a${w},${w} 1 0,1 ${-1 * Q * 0.15},${1 * ce * 0.65}

      a${A},${Y} 1 0,1 ${-1 * Q * 0.25},${Q * 0.15}
      a${T},${T} 1 0,1 ${-1 * Q * 0.5},${0}
      a${Y},${Y} 1 0,1 ${-1 * Q * 0.25},${-1 * Q * 0.15}

      a${Y},${Y} 1 0,1 ${-1 * Q * 0.1},${-1 * ce * 0.35}
      a${w},${w} 1 0,1 ${Q * 0.1},${-1 * ce * 0.65}

    H0 V0 Z`
  );
}, zp = function(fe, he) {
  const Q = he.width, ce = he.height, Y = 0.15 * Q;
  fe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr(
    "d",
    `M0 0 a${Y},${Y} 1 0,0 ${Q * 0.25},${-1 * ce * 0.1}
      a${Y},${Y} 1 0,0 ${Q * 0.25},${0}
      a${Y},${Y} 1 0,0 ${Q * 0.25},${0}
      a${Y},${Y} 1 0,0 ${Q * 0.25},${1 * ce * 0.1}

      a${Y},${Y} 1 0,0 ${Q * 0.15},${1 * ce * 0.33}
      a${Y * 0.8},${Y * 0.8} 1 0,0 ${0},${1 * ce * 0.34}
      a${Y},${Y} 1 0,0 ${-1 * Q * 0.15},${1 * ce * 0.33}

      a${Y},${Y} 1 0,0 ${-1 * Q * 0.25},${ce * 0.15}
      a${Y},${Y} 1 0,0 ${-1 * Q * 0.25},${0}
      a${Y},${Y} 1 0,0 ${-1 * Q * 0.25},${0}
      a${Y},${Y} 1 0,0 ${-1 * Q * 0.25},${-1 * ce * 0.15}

      a${Y},${Y} 1 0,0 ${-1 * Q * 0.1},${-1 * ce * 0.33}
      a${Y * 0.8},${Y * 0.8} 1 0,0 ${0},${-1 * ce * 0.34}
      a${Y},${Y} 1 0,0 ${Q * 0.1},${-1 * ce * 0.33}

    H0 V0 Z`
  );
}, Gp = function(fe, he) {
  fe.append("circle").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr("r", he.width / 2);
};
function $p(fe, he, Q, ce, Y) {
  return fe.insert("polygon", ":first-child").attr(
    "points",
    ce.map(function(A) {
      return A.x + "," + A.y;
    }).join(" ")
  ).attr("transform", "translate(" + (Y.width - he) / 2 + ", " + Q + ")");
}
const Vp = function(fe, he) {
  const Q = he.height, Y = Q / 4, A = he.width - he.padding + 2 * Y, T = [
    { x: Y, y: 0 },
    { x: A - Y, y: 0 },
    { x: A, y: -Q / 2 },
    { x: A - Y, y: -Q },
    { x: Y, y: -Q },
    { x: 0, y: -Q / 2 }
  ];
  $p(fe, A, Q, T, he);
}, _p = function(fe, he) {
  fe.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Wr(he.type)).attr("height", he.height).attr("rx", he.padding).attr("ry", he.padding).attr("width", he.width);
}, Up = function(fe, he, Q, ce) {
  const Y = Q % (Xu - 1), A = fe.append("g");
  he.section = Y;
  let T = "section-" + Y;
  Y < 0 && (T += " section-root"), A.attr("class", (he.class ? he.class + " " : "") + "mindmap-node " + T);
  const w = A.append("g"), L = A.append("g"), U = L.append("text").text(he.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(kp, he.width).node().getBBox(), P = ce.fontSize.replace ? ce.fontSize.replace("px", "") : ce.fontSize;
  if (he.height = U.height + P * 1.1 * 0.5 + he.padding, he.width = U.width + 2 * he.padding, he.icon)
    if (he.type === yt.CIRCLE)
      he.height += 50, he.width += 50, A.append("foreignObject").attr("height", "50px").attr("width", he.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + Y + " " + he.icon), L.attr(
        "transform",
        "translate(" + he.width / 2 + ", " + (he.height / 2 - 1.5 * he.padding) + ")"
      );
    else {
      he.width += 50;
      const K = he.height;
      he.height = Math.max(K, 60);
      const D = Math.abs(he.height - K);
      A.append("foreignObject").attr("width", "60px").attr("height", he.height).attr("style", "text-align: center;margin-top:" + D / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + Y + " " + he.icon), L.attr(
        "transform",
        "translate(" + (25 + he.width / 2) + ", " + (D / 2 + he.padding / 2) + ")"
      );
    }
  else
    L.attr("transform", "translate(" + he.width / 2 + ", " + he.padding / 2 + ")");
  switch (he.type) {
    case yt.DEFAULT:
      Pp(w, he, Y);
      break;
    case yt.ROUNDED_RECT:
      _p(w, he);
      break;
    case yt.RECT:
      Bp(w, he);
      break;
    case yt.CIRCLE:
      w.attr("transform", "translate(" + he.width / 2 + ", " + +he.height / 2 + ")"), Gp(w, he);
      break;
    case yt.CLOUD:
      Fp(w, he);
      break;
    case yt.BANG:
      zp(w, he);
      break;
    case yt.HEXAGON:
      Vp(w, he);
      break;
  }
  return Yu(he.id, A), he.height;
}, Yp = function(he, Q, ce, Y, A) {
  const T = A % (Xu - 1), w = ce.x + ce.width / 2, L = ce.y + ce.height / 2, G = Q.x + Q.width / 2, U = Q.y + Q.height / 2, P = G > w ? w + Math.abs(w - G) / 2 : w - Math.abs(w - G) / 2, K = U > L ? L + Math.abs(L - U) / 2 : L - Math.abs(L - U) / 2, D = G > w ? Math.abs(w - P) / 2 + w : -Math.abs(w - P) / 2 + w, V = U > L ? Math.abs(L - K) / 2 + L : -Math.abs(L - K) / 2 + L;
  he.append("path").attr(
    "d",
    ce.direction === "TB" || ce.direction === "BT" ? `M${w},${L} Q${w},${V} ${P},${K} T${G},${U}` : `M${w},${L} Q${D},${L} ${P},${K} T${G},${U}`
  ).attr("class", "edge section-edge-" + T + " edge-depth-" + Y);
}, Hp = function(fe) {
  const he = ji(fe.id), Q = fe.x || 0, ce = fe.y || 0;
  he.attr("transform", "translate(" + Q + "," + ce + ")");
}, qu = { drawNode: Up, positionNode: Hp, drawEdge: Yp };
var Zi = {}, Xp = {
  get exports() {
    return Zi;
  },
  set exports(fe) {
    Zi = fe;
  }
};
(function(fe, he) {
  (function(Q, ce) {
    fe.exports = ce();
  })(Ca, function() {
    function Q(t) {
      return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, Q(t);
    }
    function ce(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Y(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }
    function A(t, e, r) {
      return e && Y(t.prototype, e), r && Y(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }
    function T(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }
    function w(t, e) {
      return L(t) || G(t, e) || U(t, e) || K();
    }
    function L(t) {
      if (Array.isArray(t))
        return t;
    }
    function G(t, e) {
      var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (r != null) {
        var a = [], n = !0, i = !1, s, o;
        try {
          for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
            ;
        } catch (l) {
          i = !0, o = l;
        } finally {
          try {
            !n && r.return != null && r.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return a;
      }
    }
    function U(t, e) {
      if (t) {
        if (typeof t == "string")
          return P(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
          return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return P(t, e);
      }
    }
    function P(t, e) {
      (e == null || e > t.length) && (e = t.length);
      for (var r = 0, a = new Array(e); r < e; r++)
        a[r] = t[r];
      return a;
    }
    function K() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var D = typeof window > "u" ? null : window, V = D ? D.navigator : null;
    D && D.document;
    var _ = Q(""), J = Q({}), ne = Q(function() {
    }), ue = typeof HTMLElement > "u" ? "undefined" : Q(HTMLElement), j = function(e) {
      return e && e.instanceString && H(e.instanceString) ? e.instanceString() : null;
    }, ee = function(e) {
      return e != null && Q(e) == _;
    }, H = function(e) {
      return e != null && Q(e) === ne;
    }, te = function(e) {
      return !pe(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
    }, S = function(e) {
      return e != null && Q(e) === J && !te(e) && e.constructor === Object;
    }, $ = function(e) {
      return e != null && Q(e) === J;
    }, k = function(e) {
      return e != null && Q(e) === Q(1) && !isNaN(e);
    }, q = function(e) {
      return k(e) && Math.floor(e) === e;
    }, ve = function(e) {
      if (ue !== "undefined")
        return e != null && e instanceof HTMLElement;
    }, pe = function(e) {
      return Ae(e) || Ne(e);
    }, Ae = function(e) {
      return j(e) === "collection" && e._private.single;
    }, Ne = function(e) {
      return j(e) === "collection" && !e._private.single;
    }, _e = function(e) {
      return j(e) === "core";
    }, tt = function(e) {
      return j(e) === "stylesheet";
    }, ct = function(e) {
      return j(e) === "event";
    }, Pe = function(e) {
      return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
    }, $e = function(e) {
      return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
    }, Xe = function(e) {
      return S(e) && k(e.x1) && k(e.x2) && k(e.y1) && k(e.y2);
    }, rt = function(e) {
      return $(e) && H(e.then);
    }, lt = function() {
      return V && V.userAgent.match(/msie|trident|edge/i);
    }, nt = function(e, r) {
      r || (r = function() {
        if (arguments.length === 1)
          return arguments[0];
        if (arguments.length === 0)
          return "undefined";
        for (var i = [], s = 0; s < arguments.length; s++)
          i.push(arguments[s]);
        return i.join("$");
      });
      var a = function n() {
        var i = this, s = arguments, o, l = r.apply(i, s), u = n.cache;
        return (o = u[l]) || (o = u[l] = e.apply(i, s)), o;
      };
      return a.cache = {}, a;
    }, je = nt(function(t) {
      return t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
      });
    }), pt = nt(function(t) {
      return t.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
      });
    }), Et = nt(function(t, e) {
      return t + e[0].toUpperCase() + e.substring(1);
    }, function(t, e) {
      return t + "$" + e;
    }), kt = function(e) {
      return Pe(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
    }, vt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", vr = "rgb[a]?\\((" + vt + "[%]?)\\s*,\\s*(" + vt + "[%]?)\\s*,\\s*(" + vt + "[%]?)(?:\\s*,\\s*(" + vt + "))?\\)", qt = "rgb[a]?\\((?:" + vt + "[%]?)\\s*,\\s*(?:" + vt + "[%]?)\\s*,\\s*(?:" + vt + "[%]?)(?:\\s*,\\s*(?:" + vt + "))?\\)", un = "hsl[a]?\\((" + vt + ")\\s*,\\s*(" + vt + "[%])\\s*,\\s*(" + vt + "[%])(?:\\s*,\\s*(" + vt + "))?\\)", Kr = "hsl[a]?\\((?:" + vt + ")\\s*,\\s*(?:" + vt + "[%])\\s*,\\s*(?:" + vt + "[%])(?:\\s*,\\s*(?:" + vt + "))?\\)", Da = "\\#[0-9a-fA-F]{3}", jt = "\\#[0-9a-fA-F]{6}", es = function(e, r) {
      return e < r ? -1 : e > r ? 1 : 0;
    }, Qu = function(e, r) {
      return -1 * es(e, r);
    }, Ue = Object.assign != null ? Object.assign.bind(Object) : function(t) {
      for (var e = arguments, r = 1; r < e.length; r++) {
        var a = e[r];
        if (a != null)
          for (var n = Object.keys(a), i = 0; i < n.length; i++) {
            var s = n[i];
            t[s] = a[s];
          }
      }
      return t;
    }, Ju = function(e) {
      if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var r = e.length === 4, a, n, i, s = 16;
        return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
      }
    }, ju = function(e) {
      var r, a, n, i, s, o, l, u;
      function f(d, g, y) {
        return y < 0 && (y += 1), y > 1 && (y -= 1), y < 1 / 6 ? d + (g - d) * 6 * y : y < 1 / 2 ? g : y < 2 / 3 ? d + (g - d) * (2 / 3 - y) * 6 : d;
      }
      var h = new RegExp("^" + un + "$").exec(e);
      if (h) {
        if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
          return;
        if (n === 0)
          o = l = u = Math.round(i * 255);
        else {
          var c = i < 0.5 ? i * (1 + n) : i + n - i * n, v = 2 * i - c;
          o = Math.round(255 * f(v, c, a + 1 / 3)), l = Math.round(255 * f(v, c, a)), u = Math.round(255 * f(v, c, a - 1 / 3));
        }
        r = [o, l, u, s];
      }
      return r;
    }, el = function(e) {
      var r, a = new RegExp("^" + vr + "$").exec(e);
      if (a) {
        r = [];
        for (var n = [], i = 1; i <= 3; i++) {
          var s = a[i];
          if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
            return;
          r.push(Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
        if (o && !l)
          return;
        var u = a[4];
        if (u !== void 0) {
          if (u = parseFloat(u), u < 0 || u > 1)
            return;
          r.push(u);
        }
      }
      return r;
    }, tl = function(e) {
      return al[e.toLowerCase()];
    }, rl = function(e) {
      return (te(e) ? e : null) || tl(e) || Ju(e) || el(e) || ju(e);
    }, al = {
      // special colour names
      transparent: [0, 0, 0, 0],
      // NB alpha === 0
      // regular colours
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      grey: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    }, ts = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (S(s))
          throw Error("Tried to set map with object key");
        i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
      }
    }, rs = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (S(s))
          throw Error("Tried to get map with object key");
        if (r = r[s], r == null)
          return r;
      }
      return r;
    };
    function nl(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    var Rr = nl, Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ca < "u" ? Ca : typeof self < "u" ? self : {};
    function il(t, e) {
      return e = { exports: {} }, t(e, e.exports), e.exports;
    }
    var sl = typeof Sa == "object" && Sa && Sa.Object === Object && Sa, ol = sl, ul = typeof self == "object" && self && self.Object === Object && self, ll = ol || ul || Function("return this")(), ln = ll, fl = function() {
      return ln.Date.now();
    }, ai = fl, hl = /\s/;
    function cl(t) {
      for (var e = t.length; e-- && hl.test(t.charAt(e)); )
        ;
      return e;
    }
    var vl = cl, dl = /^\s+/;
    function gl(t) {
      return t && t.slice(0, vl(t) + 1).replace(dl, "");
    }
    var pl = gl, yl = ln.Symbol, Zr = yl, as = Object.prototype, ml = as.hasOwnProperty, bl = as.toString, La = Zr ? Zr.toStringTag : void 0;
    function El(t) {
      var e = ml.call(t, La), r = t[La];
      try {
        t[La] = void 0;
        var a = !0;
      } catch {
      }
      var n = bl.call(t);
      return a && (e ? t[La] = r : delete t[La]), n;
    }
    var wl = El, xl = Object.prototype, Tl = xl.toString;
    function Cl(t) {
      return Tl.call(t);
    }
    var Dl = Cl, Sl = "[object Null]", Ll = "[object Undefined]", ns = Zr ? Zr.toStringTag : void 0;
    function Al(t) {
      return t == null ? t === void 0 ? Ll : Sl : ns && ns in Object(t) ? wl(t) : Dl(t);
    }
    var is = Al;
    function Ol(t) {
      return t != null && typeof t == "object";
    }
    var Nl = Ol, Ml = "[object Symbol]";
    function Il(t) {
      return typeof t == "symbol" || Nl(t) && is(t) == Ml;
    }
    var Aa = Il, ss = 0 / 0, Rl = /^[-+]0x[0-9a-f]+$/i, kl = /^0b[01]+$/i, Pl = /^0o[0-7]+$/i, Bl = parseInt;
    function Fl(t) {
      if (typeof t == "number")
        return t;
      if (Aa(t))
        return ss;
      if (Rr(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = Rr(e) ? e + "" : e;
      }
      if (typeof t != "string")
        return t === 0 ? t : +t;
      t = pl(t);
      var r = kl.test(t);
      return r || Pl.test(t) ? Bl(t.slice(2), r ? 2 : 8) : Rl.test(t) ? ss : +t;
    }
    var os = Fl, zl = "Expected a function", Gl = Math.max, $l = Math.min;
    function Vl(t, e, r) {
      var a, n, i, s, o, l, u = 0, f = !1, h = !1, c = !0;
      if (typeof t != "function")
        throw new TypeError(zl);
      e = os(e) || 0, Rr(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? Gl(os(r.maxWait) || 0, e) : i, c = "trailing" in r ? !!r.trailing : c);
      function v(O) {
        var x = a, I = n;
        return a = n = void 0, u = O, s = t.apply(I, x), s;
      }
      function d(O) {
        return u = O, o = setTimeout(p, e), f ? v(O) : s;
      }
      function g(O) {
        var x = O - l, I = O - u, C = e - x;
        return h ? $l(C, i - I) : C;
      }
      function y(O) {
        var x = O - l, I = O - u;
        return l === void 0 || x >= e || x < 0 || h && I >= i;
      }
      function p() {
        var O = ai();
        if (y(O))
          return m(O);
        o = setTimeout(p, g(O));
      }
      function m(O) {
        return o = void 0, c && a ? v(O) : (a = n = void 0, s);
      }
      function b() {
        o !== void 0 && clearTimeout(o), u = 0, a = l = n = o = void 0;
      }
      function E() {
        return o === void 0 ? s : m(ai());
      }
      function M() {
        var O = ai(), x = y(O);
        if (a = arguments, n = this, l = O, x) {
          if (o === void 0)
            return d(l);
          if (h)
            return clearTimeout(o), o = setTimeout(p, e), v(l);
        }
        return o === void 0 && (o = setTimeout(p, e)), s;
      }
      return M.cancel = b, M.flush = E, M;
    }
    var fn = Vl, ni = D ? D.performance : null, us = ni && ni.now ? function() {
      return ni.now();
    } : function() {
      return Date.now();
    }, _l = function() {
      if (D) {
        if (D.requestAnimationFrame)
          return function(t) {
            D.requestAnimationFrame(t);
          };
        if (D.mozRequestAnimationFrame)
          return function(t) {
            D.mozRequestAnimationFrame(t);
          };
        if (D.webkitRequestAnimationFrame)
          return function(t) {
            D.webkitRequestAnimationFrame(t);
          };
        if (D.msRequestAnimationFrame)
          return function(t) {
            D.msRequestAnimationFrame(t);
          };
      }
      return function(t) {
        t && setTimeout(function() {
          t(us());
        }, 1e3 / 60);
      };
    }(), hn = function(e) {
      return _l(e);
    }, dr = us, Qr = 9261, ls = 65599, Oa = 5381, fs = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr, a = r, n; n = e.next(), !n.done; )
        a = a * ls + n.value | 0;
      return a;
    }, Na = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr;
      return r * ls + e | 0;
    }, Ma = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oa;
      return (r << 5) + r + e | 0;
    }, Ul = function(e, r) {
      return e * 2097152 + r;
    }, Er = function(e) {
      return e[0] * 2097152 + e[1];
    }, cn = function(e, r) {
      return [Na(e[0], r[0]), Ma(e[1], r[1])];
    }, Yl = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e[n++] : a.done = !0, a;
        }
      };
      return fs(s, r);
    }, kr = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
        }
      };
      return fs(s, r);
    }, hs = function() {
      return Hl(arguments);
    }, Hl = function(e) {
      for (var r, a = 0; a < e.length; a++) {
        var n = e[a];
        a === 0 ? r = kr(n) : r = kr(n, r);
      }
      return r;
    }, cs = !0, Xl = console.warn != null, ql = console.trace != null, ii = Number.MAX_SAFE_INTEGER || 9007199254740991, vs = function() {
      return !0;
    }, vn = function() {
      return !1;
    }, ds = function() {
      return 0;
    }, si = function() {
    }, xt = function(e) {
      throw new Error(e);
    }, gs = function(e) {
      if (e !== void 0)
        cs = !!e;
      else
        return cs;
    }, ft = function(e) {
      gs() && (Xl ? console.warn(e) : (console.log(e), ql && console.trace()));
    }, Wl = function(e) {
      return Ue({}, e);
    }, or = function(e) {
      return e == null ? e : te(e) ? e.slice() : S(e) ? Wl(e) : e;
    }, Kl = function(e) {
      return e.slice();
    }, ps = function(e, r) {
      for (
        // loop :)
        r = e = "";
        // b - result , a - numeric letiable
        e++ < 36;
        //
        r += e * 51 & 52 ? (
          //  return a random number or 4
          (e ^ 15 ? (
            // generate a random number from 0 to 15
            8 ^ Math.random() * (e ^ 20 ? 16 : 4)
          ) : 4).toString(16)
        ) : "-"
      )
        ;
      return r;
    }, Zl = {}, ys = function() {
      return Zl;
    }, Lt = function(e) {
      var r = Object.keys(e);
      return function(a) {
        for (var n = {}, i = 0; i < r.length; i++) {
          var s = r[i], o = a == null ? void 0 : a[s];
          n[s] = o === void 0 ? e[s] : o;
        }
        return n;
      };
    }, wr = function(e, r, a) {
      for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
        ;
    }, oi = function(e) {
      e.splice(0, e.length);
    }, Ql = function(e, r) {
      for (var a = 0; a < r.length; a++) {
        var n = r[a];
        e.push(n);
      }
    }, er = function(e, r, a) {
      return a && (r = Et(a, r)), e[r];
    }, xr = function(e, r, a, n) {
      a && (r = Et(a, r)), e[r] = n;
    }, Jl = /* @__PURE__ */ function() {
      function t() {
        ce(this, t), this._obj = {};
      }
      return A(t, [{
        key: "set",
        value: function(r, a) {
          return this._obj[r] = a, this;
        }
      }, {
        key: "delete",
        value: function(r) {
          return this._obj[r] = void 0, this;
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = {};
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] !== void 0;
        }
      }, {
        key: "get",
        value: function(r) {
          return this._obj[r];
        }
      }]), t;
    }(), ur = typeof Map < "u" ? Map : Jl, jl = "undefined", ef = /* @__PURE__ */ function() {
      function t(e) {
        if (ce(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
          var r;
          e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
          for (var a = 0; a < r.length; a++)
            this.add(r[a]);
        }
      }
      return A(t, [{
        key: "instanceString",
        value: function() {
          return "set";
        }
      }, {
        key: "add",
        value: function(r) {
          var a = this._obj;
          a[r] !== 1 && (a[r] = 1, this.size++);
        }
      }, {
        key: "delete",
        value: function(r) {
          var a = this._obj;
          a[r] === 1 && (a[r] = 0, this.size--);
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = /* @__PURE__ */ Object.create(null);
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] === 1;
        }
      }, {
        key: "toArray",
        value: function() {
          var r = this;
          return Object.keys(this._obj).filter(function(a) {
            return r.has(a);
          });
        }
      }, {
        key: "forEach",
        value: function(r, a) {
          return this.toArray().forEach(r, a);
        }
      }]), t;
    }(), Jr = (typeof Set > "u" ? "undefined" : Q(Set)) !== jl ? Set : ef, dn = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0 || r === void 0 || !_e(e)) {
        xt("An element must have a core reference and parameters set");
        return;
      }
      var n = r.group;
      if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
        xt("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
        return;
      }
      this.length = 1, this[0] = this;
      var i = this._private = {
        cy: e,
        single: !0,
        // indicates this is an element
        data: r.data || {},
        // data object
        position: r.position || {
          x: 0,
          y: 0
        },
        // (x, y) position pair
        autoWidth: void 0,
        // width and height of nodes calculated by the renderer when set to special 'auto' value
        autoHeight: void 0,
        autoPadding: void 0,
        compoundBoundsClean: !1,
        // whether the compound dimensions need to be recalculated the next time dimensions are read
        listeners: [],
        // array of bound listeners
        group: n,
        // string; 'nodes' or 'edges'
        style: {},
        // properties as set by the style
        rstyle: {},
        // properties for style sent from the renderer to the core
        styleCxts: [],
        // applied style contexts from the styler
        styleKeys: {},
        // per-group keys of style property values
        removed: !0,
        // whether it's inside the vis; true if removed (set true here since we call restore)
        selected: !!r.selected,
        // whether it's selected
        selectable: r.selectable === void 0 ? !0 : !!r.selectable,
        // whether it's selectable
        locked: !!r.locked,
        // whether the element is locked (cannot be moved)
        grabbed: !1,
        // whether the element is grabbed by the mouse; renderer sets this privately
        grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
        // whether the element can be grabbed
        pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
        // whether the element has passthrough panning enabled
        active: !1,
        // whether the element is active from user interaction
        classes: new Jr(),
        // map ( className => true )
        animation: {
          // object for currently-running animations
          current: [],
          queue: []
        },
        rscratch: {},
        // object in which the renderer can store information
        scratch: r.scratch || {},
        // scratch objects
        edges: [],
        // array of connected edges
        children: [],
        // array of children
        parent: r.parent && r.parent.isNode() ? r.parent : null,
        // parent ref
        traversalCache: {},
        // cache of output of traversal functions
        backgrounding: !1,
        // whether background images are loading
        bbCache: null,
        // cache of the current bounding box
        bbCacheShift: {
          x: 0,
          y: 0
        },
        // shift applied to cached bb to be applied on next get
        bodyBounds: null,
        // bounds cache of element body, w/o overlay
        overlayBounds: null,
        // bounds cache of element body, including overlay
        labelBounds: {
          // bounds cache of labels
          all: null,
          source: null,
          target: null,
          main: null
        },
        arrowBounds: {
          // bounds cache of edge arrows
          source: null,
          target: null,
          "mid-source": null,
          "mid-target": null
        }
      };
      if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
        var s = r.renderedPosition, o = e.pan(), l = e.zoom();
        i.position = {
          x: (s.x - o.x) / l,
          y: (s.y - o.y) / l
        };
      }
      var u = [];
      te(r.classes) ? u = r.classes : ee(r.classes) && (u = r.classes.split(/\s+/));
      for (var f = 0, h = u.length; f < h; f++) {
        var c = u[f];
        !c || c === "" || i.classes.add(c);
      }
      this.createEmitter();
      var v = r.style || r.css;
      v && (ft("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(v)), (a === void 0 || a) && this.restore();
    }, ms = function(e) {
      return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
      }, function(a, n, i) {
        var s;
        S(a) && !pe(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !H(n) ? n : i, n = H(n) ? n : function() {
        };
        for (var o = this._private.cy, l = a = ee(a) ? this.filter(a) : a, u = [], f = [], h = {}, c = {}, v = {}, d = 0, g, y = this.byGroup(), p = y.nodes, m = y.edges, b = 0; b < l.length; b++) {
          var E = l[b], M = E.id();
          E.isNode() && (u.unshift(E), e.bfs && (v[M] = !0, f.push(E)), c[M] = 0);
        }
        for (var O = function() {
          var X = e.bfs ? u.shift() : u.pop(), z = X.id();
          if (e.dfs) {
            if (v[z])
              return "continue";
            v[z] = !0, f.push(X);
          }
          var re = c[z], W = h[z], Z = W != null ? W.source() : null, ie = W != null ? W.target() : null, oe = W == null ? void 0 : X.same(Z) ? ie[0] : Z[0], ge = void 0;
          if (ge = n(X, W, oe, d++, re), ge === !0)
            return g = X, "break";
          if (ge === !1)
            return "break";
          for (var se = X.connectedEdges().filter(function(ye) {
            return (!i || ye.source().same(X)) && m.has(ye);
          }), de = 0; de < se.length; de++) {
            var we = se[de], Te = we.connectedNodes().filter(function(ye) {
              return !ye.same(X) && p.has(ye);
            }), Ee = Te.id();
            Te.length !== 0 && !v[Ee] && (Te = Te[0], u.push(Te), e.bfs && (v[Ee] = !0, f.push(Te)), h[Ee] = we, c[Ee] = c[z] + 1);
          }
        }; u.length !== 0; ) {
          var x = O();
          if (x !== "continue" && x === "break")
            break;
        }
        for (var I = o.collection(), C = 0; C < f.length; C++) {
          var B = f[C], F = h[B.id()];
          F != null && I.push(F), I.push(B);
        }
        return {
          path: o.collection(I),
          found: o.collection(g)
        };
      };
    }, Ia = {
      breadthFirstSearch: ms({
        bfs: !0
      }),
      depthFirstSearch: ms({
        dfs: !0
      })
    };
    Ia.bfs = Ia.breadthFirstSearch, Ia.dfs = Ia.depthFirstSearch;
    var tf = il(function(t, e) {
      (function() {
        var r, a, n, i, s, o, l, u, f, h, c, v, d, g, y;
        n = Math.floor, h = Math.min, a = function(p, m) {
          return p < m ? -1 : p > m ? 1 : 0;
        }, f = function(p, m, b, E, M) {
          var O;
          if (b == null && (b = 0), M == null && (M = a), b < 0)
            throw new Error("lo must be non-negative");
          for (E == null && (E = p.length); b < E; )
            O = n((b + E) / 2), M(m, p[O]) < 0 ? E = O : b = O + 1;
          return [].splice.apply(p, [b, b - b].concat(m)), m;
        }, o = function(p, m, b) {
          return b == null && (b = a), p.push(m), g(p, 0, p.length - 1, b);
        }, s = function(p, m) {
          var b, E;
          return m == null && (m = a), b = p.pop(), p.length ? (E = p[0], p[0] = b, y(p, 0, m)) : E = b, E;
        }, u = function(p, m, b) {
          var E;
          return b == null && (b = a), E = p[0], p[0] = m, y(p, 0, b), E;
        }, l = function(p, m, b) {
          var E;
          return b == null && (b = a), p.length && b(p[0], m) < 0 && (E = [p[0], m], m = E[0], p[0] = E[1], y(p, 0, b)), m;
        }, i = function(p, m) {
          var b, E, M, O, x, I;
          for (m == null && (m = a), O = function() {
            I = [];
            for (var C = 0, B = n(p.length / 2); 0 <= B ? C < B : C > B; 0 <= B ? C++ : C--)
              I.push(C);
            return I;
          }.apply(this).reverse(), x = [], E = 0, M = O.length; E < M; E++)
            b = O[E], x.push(y(p, b, m));
          return x;
        }, d = function(p, m, b) {
          var E;
          if (b == null && (b = a), E = p.indexOf(m), E !== -1)
            return g(p, 0, E, b), y(p, E, b);
        }, c = function(p, m, b) {
          var E, M, O, x, I;
          if (b == null && (b = a), M = p.slice(0, m), !M.length)
            return M;
          for (i(M, b), I = p.slice(m), O = 0, x = I.length; O < x; O++)
            E = I[O], l(M, E, b);
          return M.sort(b).reverse();
        }, v = function(p, m, b) {
          var E, M, O, x, I, C, B, F, R;
          if (b == null && (b = a), m * 10 <= p.length) {
            if (O = p.slice(0, m).sort(b), !O.length)
              return O;
            for (M = O[O.length - 1], B = p.slice(m), x = 0, C = B.length; x < C; x++)
              E = B[x], b(E, M) < 0 && (f(O, E, 0, null, b), O.pop(), M = O[O.length - 1]);
            return O;
          }
          for (i(p, b), R = [], I = 0, F = h(m, p.length); 0 <= F ? I < F : I > F; 0 <= F ? ++I : --I)
            R.push(s(p, b));
          return R;
        }, g = function(p, m, b, E) {
          var M, O, x;
          for (E == null && (E = a), M = p[b]; b > m; ) {
            if (x = b - 1 >> 1, O = p[x], E(M, O) < 0) {
              p[b] = O, b = x;
              continue;
            }
            break;
          }
          return p[b] = M;
        }, y = function(p, m, b) {
          var E, M, O, x, I;
          for (b == null && (b = a), M = p.length, I = m, O = p[m], E = 2 * m + 1; E < M; )
            x = E + 1, x < M && !(b(p[E], p[x]) < 0) && (E = x), p[m] = p[E], m = E, E = 2 * m + 1;
          return p[m] = O, g(p, I, m, b);
        }, r = function() {
          p.push = o, p.pop = s, p.replace = u, p.pushpop = l, p.heapify = i, p.updateItem = d, p.nlargest = c, p.nsmallest = v;
          function p(m) {
            this.cmp = m ?? a, this.nodes = [];
          }
          return p.prototype.push = function(m) {
            return o(this.nodes, m, this.cmp);
          }, p.prototype.pop = function() {
            return s(this.nodes, this.cmp);
          }, p.prototype.peek = function() {
            return this.nodes[0];
          }, p.prototype.contains = function(m) {
            return this.nodes.indexOf(m) !== -1;
          }, p.prototype.replace = function(m) {
            return u(this.nodes, m, this.cmp);
          }, p.prototype.pushpop = function(m) {
            return l(this.nodes, m, this.cmp);
          }, p.prototype.heapify = function() {
            return i(this.nodes, this.cmp);
          }, p.prototype.updateItem = function(m) {
            return d(this.nodes, m, this.cmp);
          }, p.prototype.clear = function() {
            return this.nodes = [];
          }, p.prototype.empty = function() {
            return this.nodes.length === 0;
          }, p.prototype.size = function() {
            return this.nodes.length;
          }, p.prototype.clone = function() {
            var m;
            return m = new p(), m.nodes = this.nodes.slice(0), m;
          }, p.prototype.toArray = function() {
            return this.nodes.slice(0);
          }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
        }(), function(p, m) {
          return t.exports = m();
        }(this, function() {
          return r;
        });
      }).call(Sa);
    }), Ra = tf, rf = Lt({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), af = {
      dijkstra: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            weight: r[1],
            directed: r[2]
          };
        }
        var a = rf(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = ee(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, c = {}, v = this.byGroup(), d = v.nodes, g = v.edges;
        g.unmergeBy(function(re) {
          return re.isLoop();
        });
        for (var y = function(W) {
          return f[W.id()];
        }, p = function(W, Z) {
          f[W.id()] = Z, m.updateItem(W);
        }, m = new Ra(function(re, W) {
          return y(re) - y(W);
        }), b = 0; b < d.length; b++) {
          var E = d[b];
          f[E.id()] = E.same(u) ? 0 : 1 / 0, m.push(E);
        }
        for (var M = function(W, Z) {
          for (var ie = (s ? W.edgesTo(Z) : W.edgesWith(Z)).intersect(g), oe = 1 / 0, ge, se = 0; se < ie.length; se++) {
            var de = ie[se], we = l(de);
            (we < oe || !ge) && (oe = we, ge = de);
          }
          return {
            edge: ge,
            dist: oe
          };
        }; m.size() > 0; ) {
          var O = m.pop(), x = y(O), I = O.id();
          if (c[I] = x, x !== 1 / 0)
            for (var C = O.neighborhood().intersect(d), B = 0; B < C.length; B++) {
              var F = C[B], R = F.id(), X = M(O, F), z = x + X.dist;
              z < y(F) && (p(F, z), h[R] = {
                node: O,
                edge: X.edge
              });
            }
        }
        return {
          distanceTo: function(W) {
            var Z = ee(W) ? d.filter(W)[0] : W[0];
            return c[Z.id()];
          },
          pathTo: function(W) {
            var Z = ee(W) ? d.filter(W)[0] : W[0], ie = [], oe = Z, ge = oe.id();
            if (Z.length > 0)
              for (ie.unshift(Z); h[ge]; ) {
                var se = h[ge];
                ie.unshift(se.edge), ie.unshift(se.node), oe = se.node, ge = oe.id();
              }
            return o.spawn(ie);
          }
        };
      }
    }, nf = {
      // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
      // implemented from pseudocode from wikipedia
      kruskal: function(e) {
        e = e || function(b) {
          return 1;
        };
        for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, l = function(E) {
          for (var M = 0; M < s.length; M++) {
            var O = s[M];
            if (O.has(E))
              return M;
          }
        }, u = 0; u < i; u++)
          s[u] = this.spawn(a[u]);
        for (var f = n.sort(function(b, E) {
          return e(b) - e(E);
        }), h = 0; h < f.length; h++) {
          var c = f[h], v = c.source()[0], d = c.target()[0], g = l(v), y = l(d), p = s[g], m = s[y];
          g !== y && (o.merge(c), p.merge(m), s.splice(y, 1));
        }
        return o;
      }
    }, sf = Lt({
      root: null,
      goal: null,
      weight: function(e) {
        return 1;
      },
      heuristic: function(e) {
        return 0;
      },
      directed: !1
    }), of = {
      // Implemented from pseudocode from wikipedia
      aStar: function(e) {
        var r = this.cy(), a = sf(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
        n = r.collection(n)[0], i = r.collection(i)[0];
        var u = n.id(), f = i.id(), h = {}, c = {}, v = {}, d = new Ra(function(ge, se) {
          return c[ge.id()] - c[se.id()];
        }), g = new Jr(), y = {}, p = {}, m = function(se, de) {
          d.push(se), g.add(de);
        }, b, E, M = function() {
          b = d.pop(), E = b.id(), g.delete(E);
        }, O = function(se) {
          return g.has(se);
        };
        m(n, u), h[u] = 0, c[u] = s(n);
        for (var x = 0; d.size() > 0; ) {
          if (M(), x++, E === f) {
            for (var I = [], C = i, B = f, F = p[B]; I.unshift(C), F != null && I.unshift(F), C = y[B], C != null; )
              B = C.id(), F = p[B];
            return {
              found: !0,
              distance: h[E],
              path: this.spawn(I),
              steps: x
            };
          }
          v[E] = !0;
          for (var R = b._private.edges, X = 0; X < R.length; X++) {
            var z = R[X];
            if (this.hasElementWithId(z.id()) && !(o && z.data("source") !== E)) {
              var re = z.source(), W = z.target(), Z = re.id() !== E ? re : W, ie = Z.id();
              if (this.hasElementWithId(ie) && !v[ie]) {
                var oe = h[E] + l(z);
                if (!O(ie)) {
                  h[ie] = oe, c[ie] = oe + s(Z), m(Z, ie), y[ie] = b, p[ie] = z;
                  continue;
                }
                oe < h[ie] && (h[ie] = oe, c[ie] = oe + s(Z), y[ie] = b, p[ie] = z);
              }
            }
          }
        }
        return {
          found: !1,
          distance: void 0,
          path: void 0,
          steps: x
        };
      }
    }, uf = Lt({
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), lf = {
      // Implemented from pseudocode from wikipedia
      floydWarshall: function(e) {
        for (var r = this.cy(), a = uf(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), l = o.nodes, u = o.edges, f = l.length, h = f * f, c = function(we) {
          return l.indexOf(we);
        }, v = function(we) {
          return l[we];
        }, d = new Array(h), g = 0; g < h; g++) {
          var y = g % f, p = (g - y) / f;
          p === y ? d[g] = 0 : d[g] = 1 / 0;
        }
        for (var m = new Array(h), b = new Array(h), E = 0; E < u.length; E++) {
          var M = u[E], O = M.source()[0], x = M.target()[0];
          if (O !== x) {
            var I = c(O), C = c(x), B = I * f + C, F = s(M);
            if (d[B] > F && (d[B] = F, m[B] = C, b[B] = M), !i) {
              var R = C * f + I;
              !i && d[R] > F && (d[R] = F, m[R] = I, b[R] = M);
            }
          }
        }
        for (var X = 0; X < f; X++)
          for (var z = 0; z < f; z++)
            for (var re = z * f + X, W = 0; W < f; W++) {
              var Z = z * f + W, ie = X * f + W;
              d[re] + d[ie] < d[Z] && (d[Z] = d[re] + d[ie], m[Z] = m[re]);
            }
        var oe = function(we) {
          return (ee(we) ? r.filter(we) : we)[0];
        }, ge = function(we) {
          return c(oe(we));
        }, se = {
          distance: function(we, Te) {
            var Ee = ge(we), ye = ge(Te);
            return d[Ee * f + ye];
          },
          path: function(we, Te) {
            var Ee = ge(we), ye = ge(Te), ae = v(Ee);
            if (Ee === ye)
              return ae.collection();
            if (m[Ee * f + ye] == null)
              return r.collection();
            var xe = r.collection(), Ce = Ee, Oe;
            for (xe.merge(ae); Ee !== ye; )
              Ce = Ee, Ee = m[Ee * f + ye], Oe = b[Ce * f + Ee], xe.merge(Oe), xe.merge(v(Ee));
            return xe;
          }
        };
        return se;
      }
      // floydWarshall
    }, ff = Lt({
      weight: function(e) {
        return 1;
      },
      directed: !1,
      root: null
    }), hf = {
      // Implemented from pseudocode from wikipedia
      bellmanFord: function(e) {
        var r = this, a = ff(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = this.cy(), f = this.byGroup(), h = f.edges, c = f.nodes, v = c.length, d = new ur(), g = !1, y = [];
        s = u.collection(s)[0], h.unmergeBy(function(Fe) {
          return Fe.isLoop();
        });
        for (var p = h.length, m = function(ke) {
          var Ge = d.get(ke.id());
          return Ge || (Ge = {}, d.set(ke.id(), Ge)), Ge;
        }, b = function(ke) {
          return (ee(ke) ? u.$(ke) : ke)[0];
        }, E = function(ke) {
          return m(b(ke)).dist;
        }, M = function(ke) {
          for (var Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, et = b(ke), We = [], Ye = et; ; ) {
            if (Ye == null)
              return r.spawn();
            var Se = m(Ye), N = Se.edge, le = Se.pred;
            if (We.unshift(Ye[0]), Ye.same(Ge) && We.length > 0)
              break;
            N != null && We.unshift(N), Ye = le;
          }
          return l.spawn(We);
        }, O = 0; O < v; O++) {
          var x = c[O], I = m(x);
          x.same(s) ? I.dist = 0 : I.dist = 1 / 0, I.pred = null, I.edge = null;
        }
        for (var C = !1, B = function(ke, Ge, et, We, Ye, Se) {
          var N = We.dist + Se;
          N < Ye.dist && !et.same(We.edge) && (Ye.dist = N, Ye.pred = ke, Ye.edge = et, C = !0);
        }, F = 1; F < v; F++) {
          C = !1;
          for (var R = 0; R < p; R++) {
            var X = h[R], z = X.source(), re = X.target(), W = o(X), Z = m(z), ie = m(re);
            B(z, re, X, Z, ie, W), i || B(re, z, X, ie, Z, W);
          }
          if (!C)
            break;
        }
        if (C)
          for (var oe = [], ge = 0; ge < p; ge++) {
            var se = h[ge], de = se.source(), we = se.target(), Te = o(se), Ee = m(de).dist, ye = m(we).dist;
            if (Ee + Te < ye || !i && ye + Te < Ee)
              if (g || (ft("Graph contains a negative weight cycle for Bellman-Ford"), g = !0), e.findNegativeWeightCycles !== !1) {
                var ae = [];
                Ee + Te < ye && ae.push(de), !i && ye + Te < Ee && ae.push(we);
                for (var xe = ae.length, Ce = 0; Ce < xe; Ce++) {
                  var Oe = ae[Ce], Ie = [Oe];
                  Ie.push(m(Oe).edge);
                  for (var He = m(Oe).pred; Ie.indexOf(He) === -1; )
                    Ie.push(He), Ie.push(m(He).edge), He = m(He).pred;
                  Ie = Ie.slice(Ie.indexOf(He));
                  for (var qe = Ie[0].id(), Re = 0, Me = 2; Me < Ie.length; Me += 2)
                    Ie[Me].id() < qe && (qe = Ie[Me].id(), Re = Me);
                  Ie = Ie.slice(Re).concat(Ie.slice(0, Re)), Ie.push(Ie[0]);
                  var Ve = Ie.map(function(Fe) {
                    return Fe.id();
                  }).join(",");
                  oe.indexOf(Ve) === -1 && (y.push(l.spawn(Ie)), oe.push(Ve));
                }
              } else
                break;
          }
        return {
          distanceTo: E,
          pathTo: M,
          hasNegativeWeightCycle: g,
          negativeWeightCycles: y
        };
      }
      // bellmanFord
    }, cf = Math.sqrt(2), vf = function(e, r, a) {
      a.length === 0 && xt("Karger-Stein must be run on a connected (sub)graph");
      for (var n = a[e], i = n[1], s = n[2], o = r[i], l = r[s], u = a, f = u.length - 1; f >= 0; f--) {
        var h = u[f], c = h[1], v = h[2];
        (r[c] === o && r[v] === l || r[c] === l && r[v] === o) && u.splice(f, 1);
      }
      for (var d = 0; d < u.length; d++) {
        var g = u[d];
        g[1] === l ? (u[d] = g.slice(), u[d][1] = o) : g[2] === l && (u[d] = g.slice(), u[d][2] = o);
      }
      for (var y = 0; y < r.length; y++)
        r[y] === l && (r[y] = o);
      return u;
    }, ui = function(e, r, a, n) {
      for (; a > n; ) {
        var i = Math.floor(Math.random() * r.length);
        r = vf(i, e, r), a--;
      }
      return r;
    }, df = {
      // Computes the minimum cut of an undirected graph
      // Returns the correct answer with high probability
      kargerStein: function() {
        var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
        n.unmergeBy(function(ie) {
          return ie.isLoop();
        });
        var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / cf);
        if (i < 2) {
          xt("At least 2 nodes are required for Karger-Stein algorithm");
          return;
        }
        for (var u = [], f = 0; f < s; f++) {
          var h = n[f];
          u.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
        }
        for (var c = 1 / 0, v = [], d = new Array(i), g = new Array(i), y = new Array(i), p = function(oe, ge) {
          for (var se = 0; se < i; se++)
            ge[se] = oe[se];
        }, m = 0; m <= o; m++) {
          for (var b = 0; b < i; b++)
            g[b] = b;
          var E = ui(g, u.slice(), i, l), M = E.slice();
          p(g, y);
          var O = ui(g, E, l, 2), x = ui(y, M, l, 2);
          O.length <= x.length && O.length < c ? (c = O.length, v = O, p(g, d)) : x.length <= O.length && x.length < c && (c = x.length, v = x, p(y, d));
        }
        for (var I = this.spawn(v.map(function(ie) {
          return n[ie[0]];
        })), C = this.spawn(), B = this.spawn(), F = d[0], R = 0; R < d.length; R++) {
          var X = d[R], z = a[R];
          X === F ? C.merge(z) : B.merge(z);
        }
        var re = function(oe) {
          var ge = e.spawn();
          return oe.forEach(function(se) {
            ge.merge(se), se.connectedEdges().forEach(function(de) {
              e.contains(de) && !I.contains(de) && ge.merge(de);
            });
          }), ge;
        }, W = [re(C), re(B)], Z = {
          cut: I,
          components: W,
          // n.b. partitions are included to be compatible with the old api spec
          // (could be removed in a future major version)
          partition1: C,
          partition2: B
        };
        return Z;
      }
    }, gf = function(e) {
      return {
        x: e.x,
        y: e.y
      };
    }, gn = function(e, r, a) {
      return {
        x: e.x * r + a.x,
        y: e.y * r + a.y
      };
    }, bs = function(e, r, a) {
      return {
        x: (e.x - a.x) / r,
        y: (e.y - a.y) / r
      };
    }, jr = function(e) {
      return {
        x: e[0],
        y: e[1]
      };
    }, pf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.min(s, n));
      }
      return n;
    }, yf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.max(s, n));
      }
      return n;
    }, mf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
        var o = e[s];
        isFinite(o) && (n += o, i++);
      }
      return n / i;
    }, bf = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
      n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
      for (var o = 0, l = e.length - 1; l >= 0; l--) {
        var u = e[l];
        s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
      }
      i && e.sort(function(c, v) {
        return c - v;
      });
      var f = e.length, h = Math.floor(f / 2);
      return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
    }, Ef = function(e) {
      return Math.PI * e / 180;
    }, pn = function(e, r) {
      return Math.atan2(r, e) - Math.PI / 2;
    }, li = Math.log2 || function(t) {
      return Math.log(t) / Math.log(2);
    }, Es = function(e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0;
    }, Pr = function(e, r) {
      return Math.sqrt(Br(e, r));
    }, Br = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return a * a + n * n;
    }, wf = function(e) {
      for (var r = e.length, a = 0, n = 0; n < r; n++)
        a += e[n];
      for (var i = 0; i < r; i++)
        e[i] = e[i] / a;
      return e;
    }, St = function(e, r, a, n) {
      return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
    }, ea = function(e, r, a, n) {
      return {
        x: St(e.x, r.x, a.x, n),
        y: St(e.y, r.y, a.y, n)
      };
    }, xf = function(e, r, a, n) {
      var i = {
        x: r.x - e.x,
        y: r.y - e.y
      }, s = Pr(e, r), o = {
        x: i.x / s,
        y: i.y / s
      };
      return a = a ?? 0, n = n ?? a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
      };
    }, ka = function(e, r, a) {
      return Math.max(e, Math.min(a, r));
    }, Ut = function(e) {
      if (e == null)
        return {
          x1: 1 / 0,
          y1: 1 / 0,
          x2: -1 / 0,
          y2: -1 / 0,
          w: 0,
          h: 0
        };
      if (e.x1 != null && e.y1 != null) {
        if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            w: e.x2 - e.x1,
            h: e.y2 - e.y1
          };
        if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x1 + e.w,
            y2: e.y1 + e.h,
            w: e.w,
            h: e.h
          };
      }
    }, Tf = function(e) {
      return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
      };
    }, Cf = function(e) {
      e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
    }, Df = function(e, r) {
      e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
    }, Sf = function(e, r, a) {
      e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
    }, yn = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, fi = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
      if (r.length === 1)
        a = n = i = s = r[0];
      else if (r.length === 2)
        a = i = r[0], s = n = r[1];
      else if (r.length === 4) {
        var o = w(r, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
      }
      return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, ws = function(e, r) {
      e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
    }, hi = function(e, r) {
      return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
    }, ta = function(e, r, a) {
      return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
    }, Lf = function(e, r) {
      return ta(e, r.x, r.y);
    }, xs = function(e, r) {
      return ta(e, r.x1, r.y1) && ta(e, r.x2, r.y2);
    }, Ts = function(e, r, a, n, i, s, o) {
      var l = Fa(i, s), u = i / 2, f = s / 2, h;
      {
        var c = a - u + l - o, v = n - f - o, d = a + u - l + o, g = v;
        if (h = Tr(e, r, a, n, c, v, d, g, !1), h.length > 0)
          return h;
      }
      {
        var y = a + u + o, p = n - f + l - o, m = y, b = n + f - l + o;
        if (h = Tr(e, r, a, n, y, p, m, b, !1), h.length > 0)
          return h;
      }
      {
        var E = a - u + l - o, M = n + f + o, O = a + u - l + o, x = M;
        if (h = Tr(e, r, a, n, E, M, O, x, !1), h.length > 0)
          return h;
      }
      {
        var I = a - u - o, C = n - f + l - o, B = I, F = n + f - l + o;
        if (h = Tr(e, r, a, n, I, C, B, F, !1), h.length > 0)
          return h;
      }
      var R;
      {
        var X = a - u + l, z = n - f + l;
        if (R = Pa(e, r, a, n, X, z, l + o), R.length > 0 && R[0] <= X && R[1] <= z)
          return [R[0], R[1]];
      }
      {
        var re = a + u - l, W = n - f + l;
        if (R = Pa(e, r, a, n, re, W, l + o), R.length > 0 && R[0] >= re && R[1] <= W)
          return [R[0], R[1]];
      }
      {
        var Z = a + u - l, ie = n + f - l;
        if (R = Pa(e, r, a, n, Z, ie, l + o), R.length > 0 && R[0] >= Z && R[1] >= ie)
          return [R[0], R[1]];
      }
      {
        var oe = a - u + l, ge = n + f - l;
        if (R = Pa(e, r, a, n, oe, ge, l + o), R.length > 0 && R[0] <= oe && R[1] >= ge)
          return [R[0], R[1]];
      }
      return [];
    }, Af = function(e, r, a, n, i, s, o) {
      var l = o, u = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), c = Math.max(n, s);
      return u - l <= e && e <= f + l && h - l <= r && r <= c + l;
    }, Of = function(e, r, a, n, i, s, o, l, u) {
      var f = {
        x1: Math.min(a, o, i) - u,
        x2: Math.max(a, o, i) + u,
        y1: Math.min(n, l, s) - u,
        y2: Math.max(n, l, s) + u
      };
      return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
    }, Nf = function(e, r, a, n) {
      a -= n;
      var i = r * r - 4 * e * a;
      if (i < 0)
        return [];
      var s = Math.sqrt(i), o = 2 * e, l = (-r + s) / o, u = (-r - s) / o;
      return [l, u];
    }, Mf = function(e, r, a, n, i) {
      var s = 1e-5;
      e === 0 && (e = s), r /= e, a /= e, n /= e;
      var o, l, u, f, h, c, v, d;
      if (l = (3 * a - r * r) / 9, u = -(27 * n) + r * (9 * a - 2 * (r * r)), u /= 54, o = l * l * l + u * u, i[1] = 0, v = r / 3, o > 0) {
        h = u + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), c = u - Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -v + h + c, v += (h + c) / 2, i[4] = i[2] = -v, v = Math.sqrt(3) * (-c + h) / 2, i[3] = v, i[5] = -v;
        return;
      }
      if (i[5] = i[3] = 0, o === 0) {
        d = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -v + 2 * d, i[4] = i[2] = -(d + v);
        return;
      }
      l = -l, f = l * l * l, f = Math.acos(u / Math.sqrt(f)), d = 2 * Math.sqrt(l), i[0] = -v + d * Math.cos(f / 3), i[2] = -v + d * Math.cos((f + 2 * Math.PI) / 3), i[4] = -v + d * Math.cos((f + 4 * Math.PI) / 3);
    }, If = function(e, r, a, n, i, s, o, l) {
      var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * r + 2 * s * s + 2 * s * r - l * r, c = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, v = [];
      Mf(u, f, h, c, v);
      for (var d = 1e-7, g = [], y = 0; y < 6; y += 2)
        Math.abs(v[y + 1]) < d && v[y] >= 0 && v[y] <= 1 && g.push(v[y]);
      g.push(1), g.push(0);
      for (var p = -1, m, b, E, M = 0; M < g.length; M++)
        m = Math.pow(1 - g[M], 2) * a + 2 * (1 - g[M]) * g[M] * i + g[M] * g[M] * o, b = Math.pow(1 - g[M], 2) * n + 2 * (1 - g[M]) * g[M] * s + g[M] * g[M] * l, E = Math.pow(m - e, 2) + Math.pow(b - r, 2), p >= 0 ? E < p && (p = E) : p = E;
      return p;
    }, Rf = function(e, r, a, n, i, s) {
      var o = [e - a, r - n], l = [i - a, s - n], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * l[0] + o[1] * l[1], c = h * h / u;
      return h < 0 ? f : c > u ? (e - i) * (e - i) + (r - s) * (r - s) : f - c;
    }, Yt = function(e, r, a) {
      for (var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++)
        if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
          if (n >= e && e >= s || n <= e && e <= s)
            l = (e - n) / (s - n) * (o - i) + i, l > r && u++;
          else
            continue;
      return u % 2 !== 0;
    }, gr = function(e, r, a, n, i, s, o, l, u) {
      var f = new Array(a.length), h;
      l[0] != null ? (h = Math.atan(l[1] / l[0]), l[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = l;
      for (var c = Math.cos(-h), v = Math.sin(-h), d = 0; d < f.length / 2; d++)
        f[d * 2] = s / 2 * (a[d * 2] * c - a[d * 2 + 1] * v), f[d * 2 + 1] = o / 2 * (a[d * 2 + 1] * c + a[d * 2] * v), f[d * 2] += n, f[d * 2 + 1] += i;
      var g;
      if (u > 0) {
        var y = Ds(f, -u);
        g = Cs(y);
      } else
        g = f;
      return Yt(e, r, g);
    }, kf = function(e, r, a, n, i, s, o) {
      for (var l = new Array(a.length), u = s / 2, f = o / 2, h = di(s, o), c = h * h, v = 0; v < a.length / 4; v++) {
        var d = void 0, g = void 0;
        v === 0 ? d = a.length - 2 : d = v * 4 - 2, g = v * 4 + 2;
        var y = n + u * a[v * 4], p = i + f * a[v * 4 + 1], m = -a[d] * a[g] - a[d + 1] * a[g + 1], b = h / Math.tan(Math.acos(m) / 2), E = y - b * a[d], M = p - b * a[d + 1], O = y + b * a[g], x = p + b * a[g + 1];
        l[v * 4] = E, l[v * 4 + 1] = M, l[v * 4 + 2] = O, l[v * 4 + 3] = x;
        var I = a[d + 1], C = -a[d], B = I * a[g] + C * a[g + 1];
        B < 0 && (I *= -1, C *= -1);
        var F = E + I * h, R = M + C * h, X = Math.pow(F - e, 2) + Math.pow(R - r, 2);
        if (X <= c)
          return !0;
      }
      return Yt(e, r, l);
    }, Cs = function(e) {
      for (var r = new Array(e.length / 2), a, n, i, s, o, l, u, f, h = 0; h < e.length / 4; h++) {
        a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], l = e[(h + 1) * 4 + 1], u = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
        var c = Tr(a, n, i, s, o, l, u, f, !0);
        r[h * 2] = c[0], r[h * 2 + 1] = c[1];
      }
      return r;
    }, Ds = function(e, r) {
      for (var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++) {
        n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var u = o - i, f = -(s - n), h = Math.sqrt(u * u + f * f), c = u / h, v = f / h;
        a[l * 4] = n + c * r, a[l * 4 + 1] = i + v * r, a[l * 4 + 2] = s + c * r, a[l * 4 + 3] = o + v * r;
      }
      return a;
    }, Pf = function(e, r, a, n, i, s) {
      var o = a - e, l = n - r;
      o /= i, l /= s;
      var u = Math.sqrt(o * o + l * l), f = u - 1;
      if (f < 0)
        return [];
      var h = f / u;
      return [(a - e) * h + e, (n - r) * h + r];
    }, Fr = function(e, r, a, n, i, s, o) {
      return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
    }, Pa = function(e, r, a, n, i, s, o) {
      var l = [a - e, n - r], u = [e - i, r - s], f = l[0] * l[0] + l[1] * l[1], h = 2 * (u[0] * l[0] + u[1] * l[1]), c = u[0] * u[0] + u[1] * u[1] - o * o, v = h * h - 4 * f * c;
      if (v < 0)
        return [];
      var d = (-h + Math.sqrt(v)) / (2 * f), g = (-h - Math.sqrt(v)) / (2 * f), y = Math.min(d, g), p = Math.max(d, g), m = [];
      if (y >= 0 && y <= 1 && m.push(y), p >= 0 && p <= 1 && m.push(p), m.length === 0)
        return [];
      var b = m[0] * l[0] + e, E = m[0] * l[1] + r;
      if (m.length > 1) {
        if (m[0] == m[1])
          return [b, E];
        var M = m[1] * l[0] + e, O = m[1] * l[1] + r;
        return [b, E, M, O];
      } else
        return [b, E];
    }, ci = function(e, r, a) {
      return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
    }, Tr = function(e, r, a, n, i, s, o, l, u) {
      var f = e - i, h = a - e, c = o - i, v = r - s, d = n - r, g = l - s, y = c * v - g * f, p = h * v - d * f, m = g * h - c * d;
      if (m !== 0) {
        var b = y / m, E = p / m, M = 1e-3, O = 0 - M, x = 1 + M;
        return O <= b && b <= x && O <= E && E <= x ? [e + b * h, r + b * d] : u ? [e + b * h, r + b * d] : [];
      } else
        return y === 0 || p === 0 ? ci(e, a, o) === o ? [o, l] : ci(e, a, i) === i ? [i, s] : ci(i, o, a) === a ? [a, n] : [] : [];
    }, Ba = function(e, r, a, n, i, s, o, l) {
      var u = [], f, h = new Array(a.length), c = !0;
      s == null && (c = !1);
      var v;
      if (c) {
        for (var d = 0; d < h.length / 2; d++)
          h[d * 2] = a[d * 2] * s + n, h[d * 2 + 1] = a[d * 2 + 1] * o + i;
        if (l > 0) {
          var g = Ds(h, -l);
          v = Cs(g);
        } else
          v = h;
      } else
        v = a;
      for (var y, p, m, b, E = 0; E < v.length / 2; E++)
        y = v[E * 2], p = v[E * 2 + 1], E < v.length / 2 - 1 ? (m = v[(E + 1) * 2], b = v[(E + 1) * 2 + 1]) : (m = v[0], b = v[1]), f = Tr(e, r, n, i, y, p, m, b), f.length !== 0 && u.push(f[0], f[1]);
      return u;
    }, Bf = function(e, r, a, n, i, s, o, l) {
      for (var u = [], f, h = new Array(a.length), c = s / 2, v = o / 2, d = di(s, o), g = 0; g < a.length / 4; g++) {
        var y = void 0, p = void 0;
        g === 0 ? y = a.length - 2 : y = g * 4 - 2, p = g * 4 + 2;
        var m = n + c * a[g * 4], b = i + v * a[g * 4 + 1], E = -a[y] * a[p] - a[y + 1] * a[p + 1], M = d / Math.tan(Math.acos(E) / 2), O = m - M * a[y], x = b - M * a[y + 1], I = m + M * a[p], C = b + M * a[p + 1];
        g === 0 ? (h[a.length - 2] = O, h[a.length - 1] = x) : (h[g * 4 - 2] = O, h[g * 4 - 1] = x), h[g * 4] = I, h[g * 4 + 1] = C;
        var B = a[y + 1], F = -a[y], R = B * a[p] + F * a[p + 1];
        R < 0 && (B *= -1, F *= -1);
        var X = O + B * d, z = x + F * d;
        f = Pa(e, r, n, i, X, z, d), f.length !== 0 && u.push(f[0], f[1]);
      }
      for (var re = 0; re < h.length / 4; re++)
        f = Tr(e, r, n, i, h[re * 4], h[re * 4 + 1], h[re * 4 + 2], h[re * 4 + 3], !1), f.length !== 0 && u.push(f[0], f[1]);
      if (u.length > 2) {
        for (var W = [u[0], u[1]], Z = Math.pow(W[0] - e, 2) + Math.pow(W[1] - r, 2), ie = 1; ie < u.length / 2; ie++) {
          var oe = Math.pow(u[ie * 2] - e, 2) + Math.pow(u[ie * 2 + 1] - r, 2);
          oe <= Z && (W[0] = u[ie * 2], W[1] = u[ie * 2 + 1], Z = oe);
        }
        return W;
      }
      return u;
    }, mn = function(e, r, a) {
      var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
      return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
    }, $t = function(e, r) {
      var a = vi(e, r);
      return a = Ss(a), a;
    }, Ss = function(e) {
      for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++)
        r = e[2 * u], a = e[2 * u + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
      for (var f = 2 / (o - i), h = 2 / (l - s), c = 0; c < n; c++)
        r = e[2 * c] = e[2 * c] * f, a = e[2 * c + 1] = e[2 * c + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
      if (s < -1)
        for (var v = 0; v < n; v++)
          a = e[2 * v + 1] = e[2 * v + 1] + (-1 - s);
      return e;
    }, vi = function(e, r) {
      var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
      n += r;
      for (var i = new Array(e * 2), s, o = 0; o < e; o++)
        s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
      return i;
    }, Fa = function(e, r) {
      return Math.min(e / 4, r / 4, 8);
    }, di = function(e, r) {
      return Math.min(e / 10, r / 10, 8);
    }, Ls = function() {
      return 8;
    }, Ff = function(e, r, a) {
      return [e - 2 * r + a, 2 * (r - e), e];
    }, gi = function(e, r) {
      return {
        heightOffset: Math.min(15, 0.05 * r),
        widthOffset: Math.min(100, 0.25 * e),
        ctrlPtOffsetPct: 0.05
      };
    }, zf = Lt({
      dampingFactor: 0.8,
      precision: 1e-6,
      iterations: 200,
      weight: function(e) {
        return 1;
      }
    }), Gf = {
      pageRank: function(e) {
        for (var r = zf(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, l = this.byGroup(), u = l.nodes, f = l.edges, h = u.length, c = h * h, v = f.length, d = new Array(c), g = new Array(h), y = (1 - a) / h, p = 0; p < h; p++) {
          for (var m = 0; m < h; m++) {
            var b = p * h + m;
            d[b] = 0;
          }
          g[p] = 0;
        }
        for (var E = 0; E < v; E++) {
          var M = f[E], O = M.data("source"), x = M.data("target");
          if (O !== x) {
            var I = u.indexOfId(O), C = u.indexOfId(x), B = s(M), F = C * h + I;
            d[F] += B, g[I] += B;
          }
        }
        for (var R = 1 / h + y, X = 0; X < h; X++)
          if (g[X] === 0)
            for (var z = 0; z < h; z++) {
              var re = z * h + X;
              d[re] = R;
            }
          else
            for (var W = 0; W < h; W++) {
              var Z = W * h + X;
              d[Z] = d[Z] / g[X] + y;
            }
        for (var ie = new Array(h), oe = new Array(h), ge, se = 0; se < h; se++)
          ie[se] = 1;
        for (var de = 0; de < i; de++) {
          for (var we = 0; we < h; we++)
            oe[we] = 0;
          for (var Te = 0; Te < h; Te++)
            for (var Ee = 0; Ee < h; Ee++) {
              var ye = Te * h + Ee;
              oe[Te] += d[ye] * ie[Ee];
            }
          wf(oe), ge = ie, ie = oe, oe = ge;
          for (var ae = 0, xe = 0; xe < h; xe++) {
            var Ce = ge[xe] - ie[xe];
            ae += Ce * Ce;
          }
          if (ae < n)
            break;
        }
        var Oe = {
          rank: function(He) {
            return He = o.collection(He)[0], ie[u.indexOf(He)];
          }
        };
        return Oe;
      }
      // pageRank
    }, As = Lt({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1,
      alpha: 0
    }), ra = {
      degreeCentralityNormalized: function(e) {
        e = As(e);
        var r = this.cy(), a = this.nodes(), n = a.length;
        if (e.directed) {
          for (var f = {}, h = {}, c = 0, v = 0, d = 0; d < n; d++) {
            var g = a[d], y = g.id();
            e.root = g;
            var p = this.degreeCentrality(e);
            c < p.indegree && (c = p.indegree), v < p.outdegree && (v = p.outdegree), f[y] = p.indegree, h[y] = p.outdegree;
          }
          return {
            indegree: function(b) {
              return c == 0 ? 0 : (ee(b) && (b = r.filter(b)), f[b.id()] / c);
            },
            outdegree: function(b) {
              return v === 0 ? 0 : (ee(b) && (b = r.filter(b)), h[b.id()] / v);
            }
          };
        } else {
          for (var i = {}, s = 0, o = 0; o < n; o++) {
            var l = a[o];
            e.root = l;
            var u = this.degreeCentrality(e);
            s < u.degree && (s = u.degree), i[l.id()] = u.degree;
          }
          return {
            degree: function(b) {
              return s === 0 ? 0 : (ee(b) && (b = r.filter(b)), i[b.id()] / s);
            }
          };
        }
      },
      // degreeCentralityNormalized
      // Implemented from the algorithm in Opsahl's paper
      // "Node centrality in weighted networks: Generalizing degree and shortest paths"
      // check the heading 2 "Degree"
      degreeCentrality: function(e) {
        e = As(e);
        var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
        if (i = r.collection(i)[0], o) {
          for (var v = i.connectedEdges(), d = v.filter(function(O) {
            return O.target().same(i) && a.has(O);
          }), g = v.filter(function(O) {
            return O.source().same(i) && a.has(O);
          }), y = d.length, p = g.length, m = 0, b = 0, E = 0; E < d.length; E++)
            m += s(d[E]);
          for (var M = 0; M < g.length; M++)
            b += s(g[M]);
          return {
            indegree: Math.pow(y, 1 - l) * Math.pow(m, l),
            outdegree: Math.pow(p, 1 - l) * Math.pow(b, l)
          };
        } else {
          for (var u = i.connectedEdges().intersection(a), f = u.length, h = 0, c = 0; c < u.length; c++)
            h += s(u[c]);
          return {
            degree: Math.pow(f, 1 - l) * Math.pow(h, l)
          };
        }
      }
      // degreeCentrality
    };
    ra.dc = ra.degreeCentrality, ra.dcn = ra.degreeCentralityNormalised = ra.degreeCentralityNormalized;
    var Os = Lt({
      harmonic: !0,
      weight: function() {
        return 1;
      },
      directed: !1,
      root: null
    }), aa = {
      closenessCentralityNormalized: function(e) {
        for (var r = Os(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, l = 0, u = this.nodes(), f = this.floydWarshall({
          weight: n,
          directed: i
        }), h = 0; h < u.length; h++) {
          for (var c = 0, v = u[h], d = 0; d < u.length; d++)
            if (h !== d) {
              var g = f.distance(v, u[d]);
              a ? c += 1 / g : c += g;
            }
          a || (c = 1 / c), l < c && (l = c), o[v.id()] = c;
        }
        return {
          closeness: function(p) {
            return l == 0 ? 0 : (ee(p) ? p = s.filter(p)[0].id() : p = p.id(), o[p] / l);
          }
        };
      },
      // Implemented from pseudocode from wikipedia
      closenessCentrality: function(e) {
        var r = Os(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
        a = this.filter(a)[0];
        for (var o = this.dijkstra({
          root: a,
          weight: n,
          directed: i
        }), l = 0, u = this.nodes(), f = 0; f < u.length; f++) {
          var h = u[f];
          if (!h.same(a)) {
            var c = o.distanceTo(h);
            s ? l += 1 / c : l += c;
          }
        }
        return s ? l : 1 / l;
      }
      // closenessCentrality
    };
    aa.cc = aa.closenessCentrality, aa.ccn = aa.closenessCentralityNormalised = aa.closenessCentralityNormalized;
    var $f = Lt({
      weight: null,
      directed: !1
    }), pi = {
      // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
      betweennessCentrality: function(e) {
        for (var r = $f(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), l = {}, u = {}, f = 0, h = {
          set: function(b, E) {
            u[b] = E, E > f && (f = E);
          },
          get: function(b) {
            return u[b];
          }
        }, c = 0; c < o.length; c++) {
          var v = o[c], d = v.id();
          a ? l[d] = v.outgoers().nodes() : l[d] = v.openNeighborhood().nodes(), h.set(d, 0);
        }
        for (var g = function(b) {
          for (var E = o[b].id(), M = [], O = {}, x = {}, I = {}, C = new Ra(function(Ee, ye) {
            return I[Ee] - I[ye];
          }), B = 0; B < o.length; B++) {
            var F = o[B].id();
            O[F] = [], x[F] = 0, I[F] = 1 / 0;
          }
          for (x[E] = 1, I[E] = 0, C.push(E); !C.empty(); ) {
            var R = C.pop();
            if (M.push(R), i)
              for (var X = 0; X < l[R].length; X++) {
                var z = l[R][X], re = s.getElementById(R), W = void 0;
                re.edgesTo(z).length > 0 ? W = re.edgesTo(z)[0] : W = z.edgesTo(re)[0];
                var Z = n(W);
                z = z.id(), I[z] > I[R] + Z && (I[z] = I[R] + Z, C.nodes.indexOf(z) < 0 ? C.push(z) : C.updateItem(z), x[z] = 0, O[z] = []), I[z] == I[R] + Z && (x[z] = x[z] + x[R], O[z].push(R));
              }
            else
              for (var ie = 0; ie < l[R].length; ie++) {
                var oe = l[R][ie].id();
                I[oe] == 1 / 0 && (C.push(oe), I[oe] = I[R] + 1), I[oe] == I[R] + 1 && (x[oe] = x[oe] + x[R], O[oe].push(R));
              }
          }
          for (var ge = {}, se = 0; se < o.length; se++)
            ge[o[se].id()] = 0;
          for (; M.length > 0; ) {
            for (var de = M.pop(), we = 0; we < O[de].length; we++) {
              var Te = O[de][we];
              ge[Te] = ge[Te] + x[Te] / x[de] * (1 + ge[de]);
            }
            de != o[b].id() && h.set(de, h.get(de) + ge[de]);
          }
        }, y = 0; y < o.length; y++)
          g(y);
        var p = {
          betweenness: function(b) {
            var E = s.collection(b).id();
            return h.get(E);
          },
          betweennessNormalized: function(b) {
            if (f == 0)
              return 0;
            var E = s.collection(b).id();
            return h.get(E) / f;
          }
        };
        return p.betweennessNormalised = p.betweennessNormalized, p;
      }
      // betweennessCentrality
    };
    pi.bc = pi.betweennessCentrality;
    var Vf = Lt({
      expandFactor: 2,
      // affects time of computation and cluster granularity to some extent: M * M
      inflateFactor: 2,
      // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
      multFactor: 1,
      // optional self loops for each node. Use a neutral value to improve cluster computations.
      maxIterations: 20,
      // maximum number of iterations of the MCL algorithm in a single run
      attributes: [
        // attributes/features used to group nodes, ie. similarity values between nodes
        function(t) {
          return 1;
        }
      ]
    }), _f = function(e) {
      return Vf(e);
    }, Uf = function(e, r) {
      for (var a = 0, n = 0; n < r.length; n++)
        a += r[n](e);
      return a;
    }, Yf = function(e, r, a) {
      for (var n = 0; n < r; n++)
        e[n * r + n] = a;
    }, Ns = function(e, r) {
      for (var a, n = 0; n < r; n++) {
        a = 0;
        for (var i = 0; i < r; i++)
          a += e[i * r + n];
        for (var s = 0; s < r; s++)
          e[s * r + n] = e[s * r + n] / a;
      }
    }, Hf = function(e, r, a) {
      for (var n = new Array(a * a), i = 0; i < a; i++) {
        for (var s = 0; s < a; s++)
          n[i * a + s] = 0;
        for (var o = 0; o < a; o++)
          for (var l = 0; l < a; l++)
            n[i * a + l] += e[i * a + o] * r[o * a + l];
      }
      return n;
    }, Xf = function(e, r, a) {
      for (var n = e.slice(0), i = 1; i < a; i++)
        e = Hf(e, n, r);
      return e;
    }, qf = function(e, r, a) {
      for (var n = new Array(r * r), i = 0; i < r * r; i++)
        n[i] = Math.pow(e[i], a);
      return Ns(n, r), n;
    }, Wf = function(e, r, a, n) {
      for (var i = 0; i < a; i++) {
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o)
          return !1;
      }
      return !0;
    }, Kf = function(e, r, a, n) {
      for (var i = [], s = 0; s < r; s++) {
        for (var o = [], l = 0; l < r; l++)
          Math.round(e[s * r + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
        o.length !== 0 && i.push(n.collection(o));
      }
      return i;
    }, Zf = function(e, r) {
      for (var a = 0; a < e.length; a++)
        if (!r[a] || e[a].id() !== r[a].id())
          return !1;
      return !0;
    }, Qf = function(e) {
      for (var r = 0; r < e.length; r++)
        for (var a = 0; a < e.length; a++)
          r != a && Zf(e[r], e[a]) && e.splice(a, 1);
      return e;
    }, Ms = function(e) {
      for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = _f(e), s = {}, o = 0; o < r.length; o++)
        s[r[o].id()] = o;
      for (var l = r.length, u = l * l, f = new Array(u), h, c = 0; c < u; c++)
        f[c] = 0;
      for (var v = 0; v < a.length; v++) {
        var d = a[v], g = s[d.source().id()], y = s[d.target().id()], p = Uf(d, i.attributes);
        f[g * l + y] += p, f[y * l + g] += p;
      }
      Yf(f, l, i.multFactor), Ns(f, l);
      for (var m = !0, b = 0; m && b < i.maxIterations; )
        m = !1, h = Xf(f, l, i.expandFactor), f = qf(h, l, i.inflateFactor), Wf(f, h, u, 4) || (m = !0), b++;
      var E = Kf(f, l, r, n);
      return E = Qf(E), E;
    }, Jf = {
      markovClustering: Ms,
      mcl: Ms
    }, jf = function(e) {
      return e;
    }, Is = function(e, r) {
      return Math.abs(r - e);
    }, Rs = function(e, r, a) {
      return e + Is(r, a);
    }, ks = function(e, r, a) {
      return e + Math.pow(a - r, 2);
    }, eh = function(e) {
      return Math.sqrt(e);
    }, th = function(e, r, a) {
      return Math.max(e, Is(r, a));
    }, za = function(e, r, a, n, i) {
      for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : jf, o = n, l, u, f = 0; f < e; f++)
        l = r(f), u = a(f), o = i(o, l, u);
      return s(o);
    }, na = {
      euclidean: function(e, r, a) {
        return e >= 2 ? za(e, r, a, 0, ks, eh) : za(e, r, a, 0, Rs);
      },
      squaredEuclidean: function(e, r, a) {
        return za(e, r, a, 0, ks);
      },
      manhattan: function(e, r, a) {
        return za(e, r, a, 0, Rs);
      },
      max: function(e, r, a) {
        return za(e, r, a, -1 / 0, th);
      }
    };
    na["squared-euclidean"] = na.squaredEuclidean, na.squaredeuclidean = na.squaredEuclidean;
    function bn(t, e, r, a, n, i) {
      var s;
      return H(t) ? s = t : s = na[t] || na.euclidean, e === 0 && H(t) ? s(n, i) : s(e, r, a, n, i);
    }
    var rh = Lt({
      k: 2,
      m: 2,
      sensitivityThreshold: 1e-4,
      distance: "euclidean",
      maxIterations: 10,
      attributes: [],
      testMode: !1,
      testCentroids: null
    }), yi = function(e) {
      return rh(e);
    }, En = function(e, r, a, n, i) {
      var s = i !== "kMedoids", o = s ? function(h) {
        return a[h];
      } : function(h) {
        return n[h](a);
      }, l = function(c) {
        return n[c](r);
      }, u = a, f = r;
      return bn(e, n.length, o, l, u, f);
    }, mi = function(e, r, a) {
      for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), l = null, u = 0; u < n; u++)
        i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
      for (var f = 0; f < r; f++) {
        l = [];
        for (var h = 0; h < n; h++)
          l[h] = Math.random() * (s[h] - i[h]) + i[h];
        o[f] = l;
      }
      return o;
    }, Ps = function(e, r, a, n, i) {
      for (var s = 1 / 0, o = 0, l = 0; l < r.length; l++) {
        var u = En(a, e, r[l], n, i);
        u < s && (s = u, o = l);
      }
      return o;
    }, Bs = function(e, r, a) {
      for (var n = [], i = null, s = 0; s < r.length; s++)
        i = r[s], a[i.id()] === e && n.push(i);
      return n;
    }, ah = function(e, r, a) {
      return Math.abs(r - e) <= a;
    }, nh = function(e, r, a) {
      for (var n = 0; n < e.length; n++)
        for (var i = 0; i < e[n].length; i++) {
          var s = Math.abs(e[n][i] - r[n][i]);
          if (s > a)
            return !1;
        }
      return !0;
    }, ih = function(e, r, a) {
      for (var n = 0; n < a; n++)
        if (e === r[n])
          return !0;
      return !1;
    }, Fs = function(e, r) {
      var a = new Array(r);
      if (e.length < 50)
        for (var n = 0; n < r; n++) {
          for (var i = e[Math.floor(Math.random() * e.length)]; ih(i, a, n); )
            i = e[Math.floor(Math.random() * e.length)];
          a[n] = i;
        }
      else
        for (var s = 0; s < r; s++)
          a[s] = e[Math.floor(Math.random() * e.length)];
      return a;
    }, zs = function(e, r, a) {
      for (var n = 0, i = 0; i < r.length; i++)
        n += En("manhattan", r[i], e, a, "kMedoids");
      return n;
    }, sh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = yi(e), s = new Array(i.k), o = {}, l;
      i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = mi(a, i.k, i.attributes)) : Q(i.testCentroids) === "object" ? l = i.testCentroids : l = mi(a, i.k, i.attributes) : l = mi(a, i.k, i.attributes);
      for (var u = !0, f = 0; u && f < i.maxIterations; ) {
        for (var h = 0; h < a.length; h++)
          n = a[h], o[n.id()] = Ps(n, l, i.distance, i.attributes, "kMeans");
        u = !1;
        for (var c = 0; c < i.k; c++) {
          var v = Bs(c, a, o);
          if (v.length !== 0) {
            for (var d = i.attributes.length, g = l[c], y = new Array(d), p = new Array(d), m = 0; m < d; m++) {
              p[m] = 0;
              for (var b = 0; b < v.length; b++)
                n = v[b], p[m] += i.attributes[m](n);
              y[m] = p[m] / v.length, ah(y[m], g[m], i.sensitivityThreshold) || (u = !0);
            }
            l[c] = y, s[c] = r.collection(v);
          }
        }
        f++;
      }
      return s;
    }, oh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = yi(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
      i.testMode ? typeof i.testCentroids == "number" || (Q(i.testCentroids) === "object" ? o = i.testCentroids : o = Fs(a, i.k)) : o = Fs(a, i.k);
      for (var h = !0, c = 0; h && c < i.maxIterations; ) {
        for (var v = 0; v < a.length; v++)
          n = a[v], l[n.id()] = Ps(n, o, i.distance, i.attributes, "kMedoids");
        h = !1;
        for (var d = 0; d < o.length; d++) {
          var g = Bs(d, a, l);
          if (g.length !== 0) {
            f[d] = zs(o[d], g, i.attributes);
            for (var y = 0; y < g.length; y++)
              u = zs(g[y], g, i.attributes), u < f[d] && (f[d] = u, o[d] = g[y], h = !0);
            s[d] = r.collection(g);
          }
        }
        c++;
      }
      return s;
    }, uh = function(e, r, a, n, i) {
      for (var s, o, l = 0; l < r.length; l++)
        for (var u = 0; u < e.length; u++)
          n[l][u] = Math.pow(a[l][u], i.m);
      for (var f = 0; f < e.length; f++)
        for (var h = 0; h < i.attributes.length; h++) {
          s = 0, o = 0;
          for (var c = 0; c < r.length; c++)
            s += n[c][f] * i.attributes[h](r[c]), o += n[c][f];
          e[f][h] = s / o;
        }
    }, lh = function(e, r, a, n, i) {
      for (var s = 0; s < e.length; s++)
        r[s] = e[s].slice();
      for (var o, l, u, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
        for (var c = 0; c < n.length; c++) {
          o = 0;
          for (var v = 0; v < a.length; v++)
            l = En(i.distance, n[c], a[h], i.attributes, "cmeans"), u = En(i.distance, n[c], a[v], i.attributes, "cmeans"), o += Math.pow(l / u, f);
          e[c][h] = 1 / o;
        }
    }, fh = function(e, r, a, n) {
      for (var i = new Array(a.k), s = 0; s < i.length; s++)
        i[s] = [];
      for (var o, l, u = 0; u < r.length; u++) {
        o = -1 / 0, l = -1;
        for (var f = 0; f < r[0].length; f++)
          r[u][f] > o && (o = r[u][f], l = f);
        i[l].push(e[u]);
      }
      for (var h = 0; h < i.length; h++)
        i[h] = n.collection(i[h]);
      return i;
    }, Gs = function(e) {
      var r = this.cy(), a = this.nodes(), n = yi(e), i, s, o, l, u;
      l = new Array(a.length);
      for (var f = 0; f < a.length; f++)
        l[f] = new Array(n.k);
      o = new Array(a.length);
      for (var h = 0; h < a.length; h++)
        o[h] = new Array(n.k);
      for (var c = 0; c < a.length; c++) {
        for (var v = 0, d = 0; d < n.k; d++)
          o[c][d] = Math.random(), v += o[c][d];
        for (var g = 0; g < n.k; g++)
          o[c][g] = o[c][g] / v;
      }
      s = new Array(n.k);
      for (var y = 0; y < n.k; y++)
        s[y] = new Array(n.attributes.length);
      u = new Array(a.length);
      for (var p = 0; p < a.length; p++)
        u[p] = new Array(n.k);
      for (var m = !0, b = 0; m && b < n.maxIterations; )
        m = !1, uh(s, a, o, u, n), lh(o, l, s, a, n), nh(o, l, n.sensitivityThreshold) || (m = !0), b++;
      return i = fh(a, o, n, r), {
        clusters: i,
        degreeOfMembership: o
      };
    }, hh = {
      kMeans: sh,
      kMedoids: oh,
      fuzzyCMeans: Gs,
      fcm: Gs
    }, ch = Lt({
      distance: "euclidean",
      // distance metric to compare nodes
      linkage: "min",
      // linkage criterion : how to determine the distance between clusters of nodes
      mode: "threshold",
      // mode:'threshold' => clusters must be threshold distance apart
      threshold: 1 / 0,
      // the distance threshold
      // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
      addDendrogram: !1,
      // whether to add the dendrogram to the graph for viz
      dendrogramDepth: 0,
      // depth at which dendrogram branches are merged into the returned clusters
      attributes: []
      // array of attr functions
    }), vh = {
      single: "min",
      complete: "max"
    }, dh = function(e) {
      var r = ch(e), a = vh[r.linkage];
      return a != null && (r.linkage = a), r;
    }, $s = function(e, r, a, n, i) {
      for (var s = 0, o = 1 / 0, l, u = i.attributes, f = function(C, B) {
        return bn(i.distance, u.length, function(F) {
          return u[F](C);
        }, function(F) {
          return u[F](B);
        }, C, B);
      }, h = 0; h < e.length; h++) {
        var c = e[h].key, v = a[c][n[c]];
        v < o && (s = c, o = v);
      }
      if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
        return !1;
      var d = r[s], g = r[n[s]], y;
      i.mode === "dendrogram" ? y = {
        left: d,
        right: g,
        key: d.key
      } : y = {
        value: d.value.concat(g.value),
        key: d.key
      }, e[d.index] = y, e.splice(g.index, 1), r[d.key] = y;
      for (var p = 0; p < e.length; p++) {
        var m = e[p];
        d.key === m.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[d.key][m.key], a[d.key][m.key] > a[g.key][m.key] && (l = a[g.key][m.key])) : i.linkage === "max" ? (l = a[d.key][m.key], a[d.key][m.key] < a[g.key][m.key] && (l = a[g.key][m.key])) : i.linkage === "mean" ? l = (a[d.key][m.key] * d.size + a[g.key][m.key] * g.size) / (d.size + g.size) : i.mode === "dendrogram" ? l = f(m.value, d.value) : l = f(m.value[0], d.value[0]), a[d.key][m.key] = a[m.key][d.key] = l;
      }
      for (var b = 0; b < e.length; b++) {
        var E = e[b].key;
        if (n[E] === d.key || n[E] === g.key) {
          for (var M = E, O = 0; O < e.length; O++) {
            var x = e[O].key;
            a[E][x] < a[E][M] && (M = x);
          }
          n[E] = M;
        }
        e[b].index = b;
      }
      return d.key = g.key = d.index = g.index = null, !0;
    }, wn = function t(e, r, a) {
      e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
    }, gh = function t(e, r) {
      if (!e)
        return "";
      if (e.left && e.right) {
        var a = t(e.left, r), n = t(e.right, r), i = r.add({
          group: "nodes",
          data: {
            id: a + "," + n
          }
        });
        return r.add({
          group: "edges",
          data: {
            source: a,
            target: i.id()
          }
        }), r.add({
          group: "edges",
          data: {
            source: n,
            target: i.id()
          }
        }), i.id();
      } else if (e.value)
        return e.value.id();
    }, ph = function t(e, r, a) {
      if (!e)
        return [];
      var n = [], i = [], s = [];
      return r === 0 ? (e.left && wn(e.left, n), e.right && wn(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && wn(e.left, n), e.right && wn(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
    }, Vs = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = dh(e), i = n.attributes, s = function(b, E) {
        return bn(n.distance, i.length, function(M) {
          return i[M](b);
        }, function(M) {
          return i[M](E);
        }, b, E);
      }, o = [], l = [], u = [], f = [], h = 0; h < a.length; h++) {
        var c = {
          value: n.mode === "dendrogram" ? a[h] : [a[h]],
          key: h,
          index: h
        };
        o[h] = c, f[h] = c, l[h] = [], u[h] = 0;
      }
      for (var v = 0; v < o.length; v++)
        for (var d = 0; d <= v; d++) {
          var g = void 0;
          n.mode === "dendrogram" ? g = v === d ? 1 / 0 : s(o[v].value, o[d].value) : g = v === d ? 1 / 0 : s(o[v].value[0], o[d].value[0]), l[v][d] = g, l[d][v] = g, g < l[v][u[v]] && (u[v] = d);
        }
      for (var y = $s(o, f, l, u, n); y; )
        y = $s(o, f, l, u, n);
      var p;
      return n.mode === "dendrogram" ? (p = ph(o[0], n.dendrogramDepth, r), n.addDendrogram && gh(o[0], r)) : (p = new Array(o.length), o.forEach(function(m, b) {
        m.key = m.index = null, p[b] = r.collection(m.value);
      })), p;
    }, yh = {
      hierarchicalClustering: Vs,
      hca: Vs
    }, mh = Lt({
      distance: "euclidean",
      // distance metric to compare attributes between two nodes
      preference: "median",
      // suitability of a data point to serve as an exemplar
      damping: 0.8,
      // damping factor between [0.5, 1)
      maxIterations: 1e3,
      // max number of iterations to run
      minIterations: 100,
      // min number of iterations to run in order for clustering to stop
      attributes: [
        // functions to quantify the similarity between any two points
        // e.g. node => node.data('weight')
      ]
    }), bh = function(e) {
      var r = e.damping, a = e.preference;
      0.5 <= r && r < 1 || xt("Damping must range on [0.5, 1).  Got: ".concat(r));
      var n = ["median", "mean", "min", "max"];
      return n.some(function(i) {
        return i === a;
      }) || k(a) || xt("Preference must be one of [".concat(n.map(function(i) {
        return "'".concat(i, "'");
      }).join(", "), "] or a number.  Got: ").concat(a)), mh(e);
    }, Eh = function(e, r, a, n) {
      var i = function(o, l) {
        return n[l](o);
      };
      return -bn(e, n.length, function(s) {
        return i(r, s);
      }, function(s) {
        return i(a, s);
      }, r, a);
    }, wh = function(e, r) {
      var a = null;
      return r === "median" ? a = bf(e) : r === "mean" ? a = mf(e) : r === "min" ? a = pf(e) : r === "max" ? a = yf(e) : a = r, a;
    }, xh = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++)
        r[i * e + i] + a[i * e + i] > 0 && n.push(i);
      return n;
    }, _s = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++) {
        for (var s = -1, o = -1 / 0, l = 0; l < a.length; l++) {
          var u = a[l];
          r[i * e + u] > o && (s = u, o = r[i * e + u]);
        }
        s > 0 && n.push(s);
      }
      for (var f = 0; f < a.length; f++)
        n[a[f]] = a[f];
      return n;
    }, Th = function(e, r, a) {
      for (var n = _s(e, r, a), i = 0; i < a.length; i++) {
        for (var s = [], o = 0; o < n.length; o++)
          n[o] === a[i] && s.push(o);
        for (var l = -1, u = -1 / 0, f = 0; f < s.length; f++) {
          for (var h = 0, c = 0; c < s.length; c++)
            h += r[s[c] * e + s[f]];
          h > u && (l = f, u = h);
        }
        a[i] = s[l];
      }
      return n = _s(e, r, a), n;
    }, Us = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = bh(e), i = {}, s = 0; s < a.length; s++)
        i[a[s].id()] = s;
      var o, l, u, f, h, c;
      o = a.length, l = o * o, u = new Array(l);
      for (var v = 0; v < l; v++)
        u[v] = -1 / 0;
      for (var d = 0; d < o; d++)
        for (var g = 0; g < o; g++)
          d !== g && (u[d * o + g] = Eh(n.distance, a[d], a[g], n.attributes));
      f = wh(u, n.preference);
      for (var y = 0; y < o; y++)
        u[y * o + y] = f;
      h = new Array(l);
      for (var p = 0; p < l; p++)
        h[p] = 0;
      c = new Array(l);
      for (var m = 0; m < l; m++)
        c[m] = 0;
      for (var b = new Array(o), E = new Array(o), M = new Array(o), O = 0; O < o; O++)
        b[O] = 0, E[O] = 0, M[O] = 0;
      for (var x = new Array(o * n.minIterations), I = 0; I < x.length; I++)
        x[I] = 0;
      var C;
      for (C = 0; C < n.maxIterations; C++) {
        for (var B = 0; B < o; B++) {
          for (var F = -1 / 0, R = -1 / 0, X = -1, z = 0, re = 0; re < o; re++)
            b[re] = h[B * o + re], z = c[B * o + re] + u[B * o + re], z >= F ? (R = F, F = z, X = re) : z > R && (R = z);
          for (var W = 0; W < o; W++)
            h[B * o + W] = (1 - n.damping) * (u[B * o + W] - F) + n.damping * b[W];
          h[B * o + X] = (1 - n.damping) * (u[B * o + X] - R) + n.damping * b[X];
        }
        for (var Z = 0; Z < o; Z++) {
          for (var ie = 0, oe = 0; oe < o; oe++)
            b[oe] = c[oe * o + Z], E[oe] = Math.max(0, h[oe * o + Z]), ie += E[oe];
          ie -= E[Z], E[Z] = h[Z * o + Z], ie += E[Z];
          for (var ge = 0; ge < o; ge++)
            c[ge * o + Z] = (1 - n.damping) * Math.min(0, ie - E[ge]) + n.damping * b[ge];
          c[Z * o + Z] = (1 - n.damping) * (ie - E[Z]) + n.damping * b[Z];
        }
        for (var se = 0, de = 0; de < o; de++) {
          var we = c[de * o + de] + h[de * o + de] > 0 ? 1 : 0;
          x[C % n.minIterations * o + de] = we, se += we;
        }
        if (se > 0 && (C >= n.minIterations - 1 || C == n.maxIterations - 1)) {
          for (var Te = 0, Ee = 0; Ee < o; Ee++) {
            M[Ee] = 0;
            for (var ye = 0; ye < n.minIterations; ye++)
              M[Ee] += x[ye * o + Ee];
            (M[Ee] === 0 || M[Ee] === n.minIterations) && Te++;
          }
          if (Te === o)
            break;
        }
      }
      for (var ae = xh(o, h, c), xe = Th(o, u, ae), Ce = {}, Oe = 0; Oe < ae.length; Oe++)
        Ce[ae[Oe]] = [];
      for (var Ie = 0; Ie < a.length; Ie++) {
        var He = i[a[Ie].id()], qe = xe[He];
        qe != null && Ce[qe].push(a[Ie]);
      }
      for (var Re = new Array(ae.length), Me = 0; Me < ae.length; Me++)
        Re[Me] = r.collection(Ce[ae[Me]]);
      return Re;
    }, Ch = {
      affinityPropagation: Us,
      ap: Us
    }, Dh = Lt({
      root: void 0,
      directed: !1
    }), Sh = {
      hierholzer: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            directed: r[1]
          };
        }
        var a = Dh(e), n = a.root, i = a.directed, s = this, o = !1, l, u, f;
        n && (f = ee(n) ? this.filter(n)[0].id() : n[0].id());
        var h = {}, c = {};
        i ? s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.indegree(!0), M = m.outdegree(!0), O = E - M, x = M - E;
            O == 1 ? l ? o = !0 : l = b : x == 1 ? u ? o = !0 : u = b : (x > 1 || O > 1) && (o = !0), h[b] = [], m.outgoers().forEach(function(I) {
              I.isEdge() && h[b].push(I.id());
            });
          } else
            c[b] = [void 0, m.target().id()];
        }) : s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.degree(!0);
            E % 2 && (l ? u ? o = !0 : u = b : l = b), h[b] = [], m.connectedEdges().forEach(function(M) {
              return h[b].push(M.id());
            });
          } else
            c[b] = [m.source().id(), m.target().id()];
        });
        var v = {
          found: !1,
          trail: void 0
        };
        if (o)
          return v;
        if (u && l)
          if (i) {
            if (f && u != f)
              return v;
            f = u;
          } else {
            if (f && u != f && l != f)
              return v;
            f || (f = u);
          }
        else
          f || (f = s[0].id());
        var d = function(b) {
          for (var E = b, M = [b], O, x, I; h[E].length; )
            O = h[E].shift(), x = c[O][0], I = c[O][1], E != I ? (h[I] = h[I].filter(function(C) {
              return C != O;
            }), E = I) : !i && E != x && (h[x] = h[x].filter(function(C) {
              return C != O;
            }), E = x), M.unshift(O), M.unshift(E);
          return M;
        }, g = [], y = [];
        for (y = d(f); y.length != 1; )
          h[y[0]].length == 0 ? (g.unshift(s.getElementById(y.shift())), g.unshift(s.getElementById(y.shift()))) : y = d(y.shift()).concat(y);
        g.unshift(s.getElementById(y.shift()));
        for (var p in h)
          if (h[p].length)
            return v;
        return v.found = !0, v.trail = this.spawn(g, !0), v;
      }
    }, xn = function() {
      var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, l = function(c, v) {
        for (var d = s.length - 1, g = [], y = e.spawn(); s[d].x != c || s[d].y != v; )
          g.push(s.pop().edge), d--;
        g.push(s.pop().edge), g.forEach(function(p) {
          var m = p.connectedNodes().intersection(e);
          y.merge(p), m.forEach(function(b) {
            var E = b.id(), M = b.connectedEdges().intersection(e);
            y.merge(b), r[E].cutVertex ? y.merge(M.filter(function(O) {
              return O.isLoop();
            })) : y.merge(M);
          });
        }), i.push(y);
      }, u = function h(c, v, d) {
        c === d && (n += 1), r[v] = {
          id: a,
          low: a++,
          cutVertex: !1
        };
        var g = e.getElementById(v).connectedEdges().intersection(e);
        if (g.size() === 0)
          i.push(e.spawn(e.getElementById(v)));
        else {
          var y, p, m, b;
          g.forEach(function(E) {
            y = E.source().id(), p = E.target().id(), m = y === v ? p : y, m !== d && (b = E.id(), o[b] || (o[b] = !0, s.push({
              x: v,
              y: m,
              edge: E
            })), m in r ? r[v].low = Math.min(r[v].low, r[m].id) : (h(c, m, v), r[v].low = Math.min(r[v].low, r[m].low), r[v].id <= r[m].low && (r[v].cutVertex = !0, l(v, m))));
          });
        }
      };
      e.forEach(function(h) {
        if (h.isNode()) {
          var c = h.id();
          c in r || (n = 0, u(c, c), r[c].cutVertex = n > 1);
        }
      });
      var f = Object.keys(r).filter(function(h) {
        return r[h].cutVertex;
      }).map(function(h) {
        return e.getElementById(h);
      });
      return {
        cut: e.spawn(f),
        components: i
      };
    }, Lh = {
      hopcroftTarjanBiconnected: xn,
      htbc: xn,
      htb: xn,
      hopcroftTarjanBiconnectedComponents: xn
    }, Tn = function() {
      var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function l(u) {
        i.push(u), r[u] = {
          index: a,
          low: a++,
          explored: !1
        };
        var f = e.getElementById(u).connectedEdges().intersection(e);
        if (f.forEach(function(g) {
          var y = g.target().id();
          y !== u && (y in r || l(y), r[y].explored || (r[u].low = Math.min(r[u].low, r[y].low)));
        }), r[u].index === r[u].low) {
          for (var h = e.spawn(); ; ) {
            var c = i.pop();
            if (h.merge(e.getElementById(c)), r[c].low = r[u].index, r[c].explored = !0, c === u)
              break;
          }
          var v = h.edgesWith(h), d = h.merge(v);
          n.push(d), s = s.difference(d);
        }
      };
      return e.forEach(function(l) {
        if (l.isNode()) {
          var u = l.id();
          u in r || o(u);
        }
      }), {
        cut: s,
        components: n
      };
    }, Ah = {
      tarjanStronglyConnected: Tn,
      tsc: Tn,
      tscc: Tn,
      tarjanStronglyConnectedComponents: Tn
    }, Ys = {};
    [Ia, af, nf, of, lf, hf, df, Gf, ra, aa, pi, Jf, hh, yh, Ch, Sh, Lh, Ah].forEach(function(t) {
      Ue(Ys, t);
    });
    /*!
    Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
    Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
    Licensed under The MIT License (http://opensource.org/licenses/MIT)
    */
    var Hs = 0, Xs = 1, qs = 2, pr = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      this.id = "Thenable/1.0.7", this.state = Hs, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: this.then.bind(this)
      }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
    };
    pr.prototype = {
      /*  promise resolving methods  */
      fulfill: function(e) {
        return Ws(this, Xs, "fulfillValue", e);
      },
      reject: function(e) {
        return Ws(this, qs, "rejectReason", e);
      },
      /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
      then: function(e, r) {
        var a = this, n = new pr();
        return a.onFulfilled.push(Qs(e, n, "fulfill")), a.onRejected.push(Qs(r, n, "reject")), Ks(a), n.proxy;
      }
    };
    var Ws = function(e, r, a, n) {
      return e.state === Hs && (e.state = r, e[a] = n, Ks(e)), e;
    }, Ks = function(e) {
      e.state === Xs ? Zs(e, "onFulfilled", e.fulfillValue) : e.state === qs && Zs(e, "onRejected", e.rejectReason);
    }, Zs = function(e, r, a) {
      if (e[r].length !== 0) {
        var n = e[r];
        e[r] = [];
        var i = function() {
          for (var o = 0; o < n.length; o++)
            n[o](a);
        };
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
      }
    }, Qs = function(e, r, a) {
      return function(n) {
        if (typeof e != "function")
          r[a].call(r, n);
        else {
          var i;
          try {
            i = e(n);
          } catch (s) {
            r.reject(s);
            return;
          }
          Oh(r, i);
        }
      };
    }, Oh = function t(e, r) {
      if (e === r || e.proxy === r) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
      }
      var a;
      if (Q(r) === "object" && r !== null || typeof r == "function")
        try {
          a = r.then;
        } catch (i) {
          e.reject(i);
          return;
        }
      if (typeof a == "function") {
        var n = !1;
        try {
          a.call(
            r,
            /*  resolvePromise  */
            /*  [Promises/A+ 2.3.3.3.1]  */
            function(i) {
              n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
            },
            /*  rejectPromise  */
            /*  [Promises/A+ 2.3.3.3.2]  */
            function(i) {
              n || (n = !0, e.reject(i));
            }
          );
        } catch (i) {
          n || e.reject(i);
        }
        return;
      }
      e.fulfill(r);
    };
    pr.all = function(t) {
      return new pr(function(e, r) {
        for (var a = new Array(t.length), n = 0, i = function(l, u) {
          a[l] = u, n++, n === t.length && e(a);
        }, s = 0; s < t.length; s++)
          (function(o) {
            var l = t[o], u = l != null && l.then != null;
            if (u)
              l.then(function(h) {
                i(o, h);
              }, function(h) {
                r(h);
              });
            else {
              var f = l;
              i(o, f);
            }
          })(s);
      });
    }, pr.resolve = function(t) {
      return new pr(function(e, r) {
        e(t);
      });
    }, pr.reject = function(t) {
      return new pr(function(e, r) {
        r(t);
      });
    };
    var ia = typeof Promise < "u" ? Promise : pr, bi = function(e, r, a) {
      var n = _e(e), i = !n, s = this._private = Ue({
        duration: 1e3
      }, r, a);
      if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && H(s.complete) && s.completes.push(s.complete), i) {
        var o = e.position();
        s.startPosition = s.startPosition || {
          x: o.x,
          y: o.y
        }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
      }
      if (n) {
        var l = e.pan();
        s.startPan = {
          x: l.x,
          y: l.y
        }, s.startZoom = e.zoom();
      }
      this.length = 1, this[0] = this;
    }, zr = bi.prototype;
    Ue(zr, {
      instanceString: function() {
        return "animation";
      },
      hook: function() {
        var e = this._private;
        if (!e.hooked) {
          var r, a = e.target._private.animation;
          e.queue ? r = a.queue : r = a.current, r.push(this), pe(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
        }
        return this;
      },
      play: function() {
        var e = this._private;
        return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      playing: function() {
        return this._private.playing;
      },
      apply: function() {
        var e = this._private;
        return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      applying: function() {
        return this._private.applying;
      },
      pause: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, this;
      },
      stop: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, e.stopped = !0, this;
      },
      rewind: function() {
        return this.progress(0);
      },
      fastforward: function() {
        return this.progress(1);
      },
      time: function(e) {
        var r = this._private;
        return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
      },
      progress: function(e) {
        var r = this._private, a = r.playing;
        return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
      },
      completed: function() {
        return this._private.progress === 1;
      },
      reverse: function() {
        var e = this._private, r = e.playing;
        r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
        var a = function(u, f) {
          var h = e[u];
          h != null && (e[u] = e[f], e[f] = h);
        };
        if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
          for (var n = 0; n < e.style.length; n++) {
            var i = e.style[n], s = i.name, o = e.startStyle[s];
            e.startStyle[s] = i, e.style[n] = o;
          }
        return r && this.play(), this;
      },
      promise: function(e) {
        var r = this._private, a;
        switch (e) {
          case "frame":
            a = r.frames;
            break;
          default:
          case "complete":
          case "completed":
            a = r.completes;
        }
        return new ia(function(n, i) {
          a.push(function() {
            n();
          });
        });
      }
    }), zr.complete = zr.completed, zr.run = zr.play, zr.running = zr.playing;
    var Nh = {
      animated: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return !1;
          var s = n[0];
          if (s)
            return s._private.animation.current.length > 0;
        };
      },
      // animated
      clearQueue: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return this;
          for (var s = 0; s < n.length; s++) {
            var o = n[s];
            o._private.animation.queue = [];
          }
          return this;
        };
      },
      // clearQueue
      delay: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animate({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      // delay
      delayAnimation: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animation({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      // delay
      animation: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, l = !i, u = !l;
          if (!o.styleEnabled())
            return this;
          var f = o.style();
          r = Ue({}, r, a);
          var h = Object.keys(r).length === 0;
          if (h)
            return new bi(s[0], r);
          switch (r.duration === void 0 && (r.duration = 400), r.duration) {
            case "slow":
              r.duration = 600;
              break;
            case "fast":
              r.duration = 200;
              break;
          }
          if (u && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), u && r.renderedPosition != null) {
            var c = r.renderedPosition, v = o.pan(), d = o.zoom();
            r.position = bs(c, d, v);
          }
          if (l && r.panBy != null) {
            var g = r.panBy, y = o.pan();
            r.pan = {
              x: y.x + g.x,
              y: y.y + g.y
            };
          }
          var p = r.center || r.centre;
          if (l && p != null) {
            var m = o.getCenterPan(p.eles, r.zoom);
            m != null && (r.pan = m);
          }
          if (l && r.fit != null) {
            var b = r.fit, E = o.getFitViewport(b.eles || b.boundingBox, b.padding);
            E != null && (r.pan = E.pan, r.zoom = E.zoom);
          }
          if (l && S(r.zoom)) {
            var M = o.getZoomedViewport(r.zoom);
            M != null ? (M.zoomed && (r.zoom = M.zoom), M.panned && (r.pan = M.pan)) : r.zoom = null;
          }
          return new bi(s[0], r);
        };
      },
      // animate
      animate: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          a && (r = Ue({}, r, a));
          for (var l = 0; l < s.length; l++) {
            var u = s[l], f = u.animated() && (r.queue === void 0 || r.queue), h = u.animation(r, f ? {
              queue: !0
            } : void 0);
            h.play();
          }
          return this;
        };
      },
      // animate
      stop: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          for (var l = 0; l < s.length; l++) {
            for (var u = s[l], f = u._private, h = f.animation.current, c = 0; c < h.length; c++) {
              var v = h[c], d = v._private;
              a && (d.duration = 0);
            }
            r && (f.animation.queue = []), a || (f.animation.current = []);
          }
          return o.notify("draw"), this;
        };
      }
      // stop
    }, Mh = Array.isArray, Cn = Mh, Ih = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rh = /^\w*$/;
    function kh(t, e) {
      if (Cn(t))
        return !1;
      var r = typeof t;
      return r == "number" || r == "symbol" || r == "boolean" || t == null || Aa(t) ? !0 : Rh.test(t) || !Ih.test(t) || e != null && t in Object(e);
    }
    var Ph = kh, Bh = "[object AsyncFunction]", Fh = "[object Function]", zh = "[object GeneratorFunction]", Gh = "[object Proxy]";
    function $h(t) {
      if (!Rr(t))
        return !1;
      var e = is(t);
      return e == Fh || e == zh || e == Bh || e == Gh;
    }
    var Vh = $h, _h = ln["__core-js_shared__"], Ei = _h, Js = function() {
      var t = /[^.]+$/.exec(Ei && Ei.keys && Ei.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }();
    function Uh(t) {
      return !!Js && Js in t;
    }
    var Yh = Uh, Hh = Function.prototype, Xh = Hh.toString;
    function qh(t) {
      if (t != null) {
        try {
          return Xh.call(t);
        } catch {
        }
        try {
          return t + "";
        } catch {
        }
      }
      return "";
    }
    var Wh = qh, Kh = /[\\^$.*+?()[\]{}|]/g, Zh = /^\[object .+?Constructor\]$/, Qh = Function.prototype, Jh = Object.prototype, jh = Qh.toString, ec = Jh.hasOwnProperty, tc = RegExp(
      "^" + jh.call(ec).replace(Kh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function rc(t) {
      if (!Rr(t) || Yh(t))
        return !1;
      var e = Vh(t) ? tc : Zh;
      return e.test(Wh(t));
    }
    var ac = rc;
    function nc(t, e) {
      return t == null ? void 0 : t[e];
    }
    var ic = nc;
    function sc(t, e) {
      var r = ic(t, e);
      return ac(r) ? r : void 0;
    }
    var wi = sc, oc = wi(Object, "create"), Ga = oc;
    function uc() {
      this.__data__ = Ga ? Ga(null) : {}, this.size = 0;
    }
    var lc = uc;
    function fc(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }
    var hc = fc, cc = "__lodash_hash_undefined__", vc = Object.prototype, dc = vc.hasOwnProperty;
    function gc(t) {
      var e = this.__data__;
      if (Ga) {
        var r = e[t];
        return r === cc ? void 0 : r;
      }
      return dc.call(e, t) ? e[t] : void 0;
    }
    var pc = gc, yc = Object.prototype, mc = yc.hasOwnProperty;
    function bc(t) {
      var e = this.__data__;
      return Ga ? e[t] !== void 0 : mc.call(e, t);
    }
    var Ec = bc, wc = "__lodash_hash_undefined__";
    function xc(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = Ga && e === void 0 ? wc : e, this;
    }
    var Tc = xc;
    function sa(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    sa.prototype.clear = lc, sa.prototype.delete = hc, sa.prototype.get = pc, sa.prototype.has = Ec, sa.prototype.set = Tc;
    var js = sa;
    function Cc() {
      this.__data__ = [], this.size = 0;
    }
    var Dc = Cc;
    function Sc(t, e) {
      return t === e || t !== t && e !== e;
    }
    var eo = Sc;
    function Lc(t, e) {
      for (var r = t.length; r--; )
        if (eo(t[r][0], e))
          return r;
      return -1;
    }
    var Dn = Lc, Ac = Array.prototype, Oc = Ac.splice;
    function Nc(t) {
      var e = this.__data__, r = Dn(e, t);
      if (r < 0)
        return !1;
      var a = e.length - 1;
      return r == a ? e.pop() : Oc.call(e, r, 1), --this.size, !0;
    }
    var Mc = Nc;
    function Ic(t) {
      var e = this.__data__, r = Dn(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    var Rc = Ic;
    function kc(t) {
      return Dn(this.__data__, t) > -1;
    }
    var Pc = kc;
    function Bc(t, e) {
      var r = this.__data__, a = Dn(r, t);
      return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
    }
    var Fc = Bc;
    function oa(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    oa.prototype.clear = Dc, oa.prototype.delete = Mc, oa.prototype.get = Rc, oa.prototype.has = Pc, oa.prototype.set = Fc;
    var zc = oa, Gc = wi(ln, "Map"), $c = Gc;
    function Vc() {
      this.size = 0, this.__data__ = {
        hash: new js(),
        map: new ($c || zc)(),
        string: new js()
      };
    }
    var _c = Vc;
    function Uc(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
    }
    var Yc = Uc;
    function Hc(t, e) {
      var r = t.__data__;
      return Yc(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    var Sn = Hc;
    function Xc(t) {
      var e = Sn(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }
    var qc = Xc;
    function Wc(t) {
      return Sn(this, t).get(t);
    }
    var Kc = Wc;
    function Zc(t) {
      return Sn(this, t).has(t);
    }
    var Qc = Zc;
    function Jc(t, e) {
      var r = Sn(this, t), a = r.size;
      return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
    }
    var jc = Jc;
    function ua(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    ua.prototype.clear = _c, ua.prototype.delete = qc, ua.prototype.get = Kc, ua.prototype.has = Qc, ua.prototype.set = jc;
    var to = ua, ev = "Expected a function";
    function xi(t, e) {
      if (typeof t != "function" || e != null && typeof e != "function")
        throw new TypeError(ev);
      var r = function() {
        var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
        if (i.has(n))
          return i.get(n);
        var s = t.apply(this, a);
        return r.cache = i.set(n, s) || i, s;
      };
      return r.cache = new (xi.Cache || to)(), r;
    }
    xi.Cache = to;
    var tv = xi, rv = 500;
    function av(t) {
      var e = tv(t, function(a) {
        return r.size === rv && r.clear(), a;
      }), r = e.cache;
      return e;
    }
    var nv = av, iv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sv = /\\(\\)?/g, ov = nv(function(t) {
      var e = [];
      return t.charCodeAt(0) === 46 && e.push(""), t.replace(iv, function(r, a, n, i) {
        e.push(n ? i.replace(sv, "$1") : a || r);
      }), e;
    }), ro = ov;
    function uv(t, e) {
      for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
        n[r] = e(t[r], r, t);
      return n;
    }
    var ao = uv, lv = 1 / 0, no = Zr ? Zr.prototype : void 0, io = no ? no.toString : void 0;
    function so(t) {
      if (typeof t == "string")
        return t;
      if (Cn(t))
        return ao(t, so) + "";
      if (Aa(t))
        return io ? io.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -lv ? "-0" : e;
    }
    var fv = so;
    function hv(t) {
      return t == null ? "" : fv(t);
    }
    var oo = hv;
    function cv(t, e) {
      return Cn(t) ? t : Ph(t, e) ? [t] : ro(oo(t));
    }
    var uo = cv, vv = 1 / 0;
    function dv(t) {
      if (typeof t == "string" || Aa(t))
        return t;
      var e = t + "";
      return e == "0" && 1 / t == -vv ? "-0" : e;
    }
    var Ti = dv;
    function gv(t, e) {
      e = uo(e, t);
      for (var r = 0, a = e.length; t != null && r < a; )
        t = t[Ti(e[r++])];
      return r && r == a ? t : void 0;
    }
    var pv = gv;
    function yv(t, e, r) {
      var a = t == null ? void 0 : pv(t, e);
      return a === void 0 ? r : a;
    }
    var mv = yv, bv = function() {
      try {
        var t = wi(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {
      }
    }(), lo = bv;
    function Ev(t, e, r) {
      e == "__proto__" && lo ? lo(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : t[e] = r;
    }
    var wv = Ev, xv = Object.prototype, Tv = xv.hasOwnProperty;
    function Cv(t, e, r) {
      var a = t[e];
      (!(Tv.call(t, e) && eo(a, r)) || r === void 0 && !(e in t)) && wv(t, e, r);
    }
    var Dv = Cv, Sv = 9007199254740991, Lv = /^(?:0|[1-9]\d*)$/;
    function Av(t, e) {
      var r = typeof t;
      return e = e ?? Sv, !!e && (r == "number" || r != "symbol" && Lv.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    var Ov = Av;
    function Nv(t, e, r, a) {
      if (!Rr(t))
        return t;
      e = uo(e, t);
      for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
        var l = Ti(e[n]), u = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return t;
        if (n != s) {
          var f = o[l];
          u = a ? a(f, l, o) : void 0, u === void 0 && (u = Rr(f) ? f : Ov(e[n + 1]) ? [] : {});
        }
        Dv(o, l, u), o = o[l];
      }
      return t;
    }
    var Mv = Nv;
    function Iv(t, e, r) {
      return t == null ? t : Mv(t, e, r);
    }
    var Rv = Iv;
    function kv(t, e) {
      var r = -1, a = t.length;
      for (e || (e = Array(a)); ++r < a; )
        e[r] = t[r];
      return e;
    }
    var Pv = kv;
    function Bv(t) {
      return Cn(t) ? ao(t, Ti) : Aa(t) ? [t] : Pv(ro(oo(t)));
    }
    var Fv = Bv, zv = {
      // access data field
      data: function(e) {
        var r = {
          field: "data",
          bindingEvent: "data",
          allowBinding: !1,
          allowSetting: !1,
          allowGetting: !1,
          settingEvent: "data",
          settingTriggersEvent: !1,
          triggerFnName: "trigger",
          immutableKeys: {},
          // key => true if immutable
          updateStyle: !1,
          beforeGet: function(n) {
          },
          beforeSet: function(n, i) {
          },
          onSet: function(n) {
          },
          canSet: function(n) {
            return !0;
          }
        };
        return e = Ue({}, r, e), function(n, i) {
          var s = e, o = this, l = o.length !== void 0, u = l ? o : [o], f = l ? o[0] : o;
          if (ee(n)) {
            var h = n.indexOf(".") !== -1, c = h && Fv(n);
            if (s.allowGetting && i === void 0) {
              var v;
              return f && (s.beforeGet(f), c && f._private[s.field][n] === void 0 ? v = mv(f._private[s.field], c) : v = f._private[s.field][n]), v;
            } else if (s.allowSetting && i !== void 0) {
              var d = !s.immutableKeys[n];
              if (d) {
                var g = T({}, n, i);
                s.beforeSet(o, g);
                for (var y = 0, p = u.length; y < p; y++) {
                  var m = u[y];
                  s.canSet(m) && (c && f._private[s.field][n] === void 0 ? Rv(m._private[s.field], c, i) : m._private[s.field][n] = i);
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
              }
            }
          } else if (s.allowSetting && S(n)) {
            var b = n, E, M, O = Object.keys(b);
            s.beforeSet(o, b);
            for (var x = 0; x < O.length; x++) {
              E = O[x], M = b[E];
              var I = !s.immutableKeys[E];
              if (I)
                for (var C = 0; C < u.length; C++) {
                  var B = u[C];
                  s.canSet(B) && (B._private[s.field][E] = M);
                }
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          } else if (s.allowBinding && H(n)) {
            var F = n;
            o.on(s.bindingEvent, F);
          } else if (s.allowGetting && n === void 0) {
            var R;
            return f && (s.beforeGet(f), R = f._private[s.field]), R;
          }
          return o;
        };
      },
      // data
      // remove data field
      removeData: function(e) {
        var r = {
          field: "data",
          event: "data",
          triggerFnName: "trigger",
          triggerEvent: !1,
          immutableKeys: {}
          // key => true if immutable
        };
        return e = Ue({}, r, e), function(n) {
          var i = e, s = this, o = s.length !== void 0, l = o ? s : [s];
          if (ee(n)) {
            for (var u = n.split(/\s+/), f = u.length, h = 0; h < f; h++) {
              var c = u[h];
              if (!Pe(c)) {
                var v = !i.immutableKeys[c];
                if (v)
                  for (var d = 0, g = l.length; d < g; d++)
                    l[d]._private[i.field][c] = void 0;
              }
            }
            i.triggerEvent && s[i.triggerFnName](i.event);
          } else if (n === void 0) {
            for (var y = 0, p = l.length; y < p; y++)
              for (var m = l[y]._private[i.field], b = Object.keys(m), E = 0; E < b.length; E++) {
                var M = b[E], O = !i.immutableKeys[M];
                O && (m[M] = void 0);
              }
            i.triggerEvent && s[i.triggerFnName](i.event);
          }
          return s;
        };
      }
      // removeData
    }, Gv = {
      eventAliasesOn: function(e) {
        var r = e;
        r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
          var i = this, s = Array.prototype.slice.call(arguments, 0);
          return new ia(function(o, l) {
            var u = function(v) {
              i.off.apply(i, h), o(v);
            }, f = s.concat([u]), h = f.concat([]);
            i.on.apply(i, f);
          });
        };
      }
    }, ht = {};
    [Nh, zv, Gv].forEach(function(t) {
      Ue(ht, t);
    });
    var $v = {
      animate: ht.animate(),
      animation: ht.animation(),
      animated: ht.animated(),
      clearQueue: ht.clearQueue(),
      delay: ht.delay(),
      delayAnimation: ht.delayAnimation(),
      stop: ht.stop()
    }, Ln = {
      classes: function(e) {
        var r = this;
        if (e === void 0) {
          var a = [];
          return r[0]._private.classes.forEach(function(d) {
            return a.push(d);
          }), a;
        } else
          te(e) || (e = (e || "").match(/\S+/g) || []);
        for (var n = [], i = new Jr(e), s = 0; s < r.length; s++) {
          for (var o = r[s], l = o._private, u = l.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], v = u.has(c);
            if (!v) {
              f = !0;
              break;
            }
          }
          f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
        }
        return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
      },
      addClass: function(e) {
        return this.toggleClass(e, !0);
      },
      hasClass: function(e) {
        var r = this[0];
        return r != null && r._private.classes.has(e);
      },
      toggleClass: function(e, r) {
        te(e) || (e = e.match(/\S+/g) || []);
        for (var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)
          for (var l = a[s], u = l._private.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], v = u.has(c), d = !1;
            r || n && !v ? (u.add(c), d = !0) : (!r || n && v) && (u.delete(c), d = !0), !f && d && (i.push(l), f = !0);
          }
        return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
      },
      removeClass: function(e) {
        return this.toggleClass(e, !1);
      },
      flashClass: function(e, r) {
        var a = this;
        if (r == null)
          r = 250;
        else if (r === 0)
          return a;
        return a.addClass(e), setTimeout(function() {
          a.removeClass(e);
        }, r), a;
      }
    };
    Ln.className = Ln.classNames = Ln.classes;
    var it = {
      metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
      // chars we need to escape in let names, etc
      comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
      // binary comparison op (used in data selectors)
      boolOp: "\\?|\\!|\\^",
      // boolean (unary) operators (used in data selectors)
      string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
      // string literals (used in data selectors) -- doublequotes | singlequotes
      number: vt,
      // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
      meta: "degree|indegree|outdegree",
      // allowed metadata fields (i.e. allowed functions to use from Collection)
      separator: "\\s*,\\s*",
      // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
      descendant: "\\s+",
      child: "\\s+>\\s+",
      subject: "\\$",
      group: "node|edge|\\*",
      directedEdge: "\\s+->\\s+",
      undirectedEdge: "\\s+<->\\s+"
    };
    it.variable = "(?:[\\w-.]|(?:\\\\" + it.metaChar + "))+", it.className = "(?:[\\w-]|(?:\\\\" + it.metaChar + "))+", it.value = it.string + "|" + it.number, it.id = it.variable, function() {
      var t, e, r;
      for (t = it.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], it.comparatorOp += "|@" + e;
      for (t = it.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (it.comparatorOp += "|\\!" + e);
    }();
    var gt = function() {
      return {
        checks: []
      };
    }, Be = {
      /** E.g. node */
      GROUP: 0,
      /** A collection of elements */
      COLLECTION: 1,
      /** A filter(ele) function */
      FILTER: 2,
      /** E.g. [foo > 1] */
      DATA_COMPARE: 3,
      /** E.g. [foo] */
      DATA_EXIST: 4,
      /** E.g. [?foo] */
      DATA_BOOL: 5,
      /** E.g. [[degree > 2]] */
      META_COMPARE: 6,
      /** E.g. :selected */
      STATE: 7,
      /** E.g. #foo */
      ID: 8,
      /** E.g. .foo */
      CLASS: 9,
      /** E.g. #foo <-> #bar */
      UNDIRECTED_EDGE: 10,
      /** E.g. #foo -> #bar */
      DIRECTED_EDGE: 11,
      /** E.g. $#foo -> #bar */
      NODE_SOURCE: 12,
      /** E.g. #foo -> $#bar */
      NODE_TARGET: 13,
      /** E.g. $#foo <-> #bar */
      NODE_NEIGHBOR: 14,
      /** E.g. #foo > #bar */
      CHILD: 15,
      /** E.g. #foo #bar */
      DESCENDANT: 16,
      /** E.g. $#foo > #bar */
      PARENT: 17,
      /** E.g. $#foo #bar */
      ANCESTOR: 18,
      /** E.g. #foo > $bar > #baz */
      COMPOUND_SPLIT: 19,
      /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
      TRUE: 20
    }, Ci = [{
      selector: ":selected",
      matches: function(e) {
        return e.selected();
      }
    }, {
      selector: ":unselected",
      matches: function(e) {
        return !e.selected();
      }
    }, {
      selector: ":selectable",
      matches: function(e) {
        return e.selectable();
      }
    }, {
      selector: ":unselectable",
      matches: function(e) {
        return !e.selectable();
      }
    }, {
      selector: ":locked",
      matches: function(e) {
        return e.locked();
      }
    }, {
      selector: ":unlocked",
      matches: function(e) {
        return !e.locked();
      }
    }, {
      selector: ":visible",
      matches: function(e) {
        return e.visible();
      }
    }, {
      selector: ":hidden",
      matches: function(e) {
        return !e.visible();
      }
    }, {
      selector: ":transparent",
      matches: function(e) {
        return e.transparent();
      }
    }, {
      selector: ":grabbed",
      matches: function(e) {
        return e.grabbed();
      }
    }, {
      selector: ":free",
      matches: function(e) {
        return !e.grabbed();
      }
    }, {
      selector: ":removed",
      matches: function(e) {
        return e.removed();
      }
    }, {
      selector: ":inside",
      matches: function(e) {
        return !e.removed();
      }
    }, {
      selector: ":grabbable",
      matches: function(e) {
        return e.grabbable();
      }
    }, {
      selector: ":ungrabbable",
      matches: function(e) {
        return !e.grabbable();
      }
    }, {
      selector: ":animated",
      matches: function(e) {
        return e.animated();
      }
    }, {
      selector: ":unanimated",
      matches: function(e) {
        return !e.animated();
      }
    }, {
      selector: ":parent",
      matches: function(e) {
        return e.isParent();
      }
    }, {
      selector: ":childless",
      matches: function(e) {
        return e.isChildless();
      }
    }, {
      selector: ":child",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":orphan",
      matches: function(e) {
        return e.isOrphan();
      }
    }, {
      selector: ":nonorphan",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":compound",
      matches: function(e) {
        return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
      }
    }, {
      selector: ":loop",
      matches: function(e) {
        return e.isLoop();
      }
    }, {
      selector: ":simple",
      matches: function(e) {
        return e.isSimple();
      }
    }, {
      selector: ":active",
      matches: function(e) {
        return e.active();
      }
    }, {
      selector: ":inactive",
      matches: function(e) {
        return !e.active();
      }
    }, {
      selector: ":backgrounding",
      matches: function(e) {
        return e.backgrounding();
      }
    }, {
      selector: ":nonbackgrounding",
      matches: function(e) {
        return !e.backgrounding();
      }
    }].sort(function(t, e) {
      return Qu(t.selector, e.selector);
    }), Vv = function() {
      for (var t = {}, e, r = 0; r < Ci.length; r++)
        e = Ci[r], t[e.selector] = e.matches;
      return t;
    }(), _v = function(e, r) {
      return Vv[e](r);
    }, Uv = "(" + Ci.map(function(t) {
      return t.selector;
    }).join("|") + ")", la = function(e) {
      return e.replace(new RegExp("\\\\(" + it.metaChar + ")", "g"), function(r, a) {
        return a;
      });
    }, Cr = function(e, r, a) {
      e[e.length - 1] = a;
    }, Di = [{
      name: "group",
      // just used for identifying when debugging
      query: !0,
      regex: "(" + it.group + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Be.GROUP,
          value: i === "*" ? i : i + "s"
        });
      }
    }, {
      name: "state",
      query: !0,
      regex: Uv,
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Be.STATE,
          value: i
        });
      }
    }, {
      name: "id",
      query: !0,
      regex: "\\#(" + it.id + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Be.ID,
          value: la(i)
        });
      }
    }, {
      name: "className",
      query: !0,
      regex: "\\.(" + it.className + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Be.CLASS,
          value: la(i)
        });
      }
    }, {
      name: "dataExists",
      query: !0,
      regex: "\\[\\s*(" + it.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Be.DATA_EXIST,
          field: la(i)
        });
      }
    }, {
      name: "dataCompare",
      query: !0,
      regex: "\\[\\s*(" + it.variable + ")\\s*(" + it.comparatorOp + ")\\s*(" + it.value + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + it.string + "$").exec(o) != null;
        l ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
          type: Be.DATA_COMPARE,
          field: la(i),
          operator: s,
          value: o
        });
      }
    }, {
      name: "dataBool",
      query: !0,
      regex: "\\[\\s*(" + it.boolOp + ")\\s*(" + it.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 2), i = n[0], s = n[1];
        r.checks.push({
          type: Be.DATA_BOOL,
          field: la(s),
          operator: i
        });
      }
    }, {
      name: "metaCompare",
      query: !0,
      regex: "\\[\\[\\s*(" + it.meta + ")\\s*(" + it.comparatorOp + ")\\s*(" + it.number + ")\\s*\\]\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2];
        r.checks.push({
          type: Be.META_COMPARE,
          field: la(i),
          operator: s,
          value: parseFloat(o)
        });
      }
    }, {
      name: "nextQuery",
      separator: !0,
      regex: it.separator,
      populate: function(e, r) {
        var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
        a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
        var o = e[e.length++] = gt();
        return o;
      }
    }, {
      name: "directedEdge",
      separator: !0,
      regex: it.directedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = r, i = gt();
          return a.checks.push({
            type: Be.DIRECTED_EDGE,
            source: n,
            target: i
          }), Cr(e, r, a), e.edgeCount++, i;
        } else {
          var s = gt(), o = r, l = gt();
          return s.checks.push({
            type: Be.NODE_SOURCE,
            source: o,
            target: l
          }), Cr(e, r, s), e.edgeCount++, l;
        }
      }
    }, {
      name: "undirectedEdge",
      separator: !0,
      regex: it.undirectedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = r, i = gt();
          return a.checks.push({
            type: Be.UNDIRECTED_EDGE,
            nodes: [n, i]
          }), Cr(e, r, a), e.edgeCount++, i;
        } else {
          var s = gt(), o = r, l = gt();
          return s.checks.push({
            type: Be.NODE_NEIGHBOR,
            node: o,
            neighbor: l
          }), Cr(e, r, s), l;
        }
      }
    }, {
      name: "child",
      separator: !0,
      regex: it.child,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = gt(), i = e[e.length - 1];
          return a.checks.push({
            type: Be.CHILD,
            parent: i,
            child: n
          }), Cr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = gt(), o = e[e.length - 1], l = gt(), u = gt(), f = gt(), h = gt();
          return s.checks.push({
            type: Be.COMPOUND_SPLIT,
            left: o,
            right: l,
            subject: u
          }), u.checks = r.checks, r.checks = [{
            type: Be.TRUE
          }], h.checks.push({
            type: Be.TRUE
          }), l.checks.push({
            type: Be.PARENT,
            // type is swapped on right side queries
            parent: h,
            child: f
            // empty for now
          }), Cr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
        } else {
          var c = gt(), v = gt(), d = [{
            type: Be.PARENT,
            parent: c,
            child: v
          }];
          return c.checks = r.checks, r.checks = d, e.compoundCount++, v;
        }
      }
    }, {
      name: "descendant",
      separator: !0,
      regex: it.descendant,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = gt(), i = e[e.length - 1];
          return a.checks.push({
            type: Be.DESCENDANT,
            ancestor: i,
            descendant: n
          }), Cr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = gt(), o = e[e.length - 1], l = gt(), u = gt(), f = gt(), h = gt();
          return s.checks.push({
            type: Be.COMPOUND_SPLIT,
            left: o,
            right: l,
            subject: u
          }), u.checks = r.checks, r.checks = [{
            type: Be.TRUE
          }], h.checks.push({
            type: Be.TRUE
          }), l.checks.push({
            type: Be.ANCESTOR,
            // type is swapped on right side queries
            ancestor: h,
            descendant: f
            // empty for now
          }), Cr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
        } else {
          var c = gt(), v = gt(), d = [{
            type: Be.ANCESTOR,
            ancestor: c,
            descendant: v
          }];
          return c.checks = r.checks, r.checks = d, e.compoundCount++, v;
        }
      }
    }, {
      name: "subject",
      modifier: !0,
      regex: it.subject,
      populate: function(e, r) {
        if (e.currentSubject != null && e.currentSubject !== r)
          return ft("Redefinition of subject in selector `" + e.toString() + "`"), !1;
        e.currentSubject = r;
        var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
        i === Be.DIRECTED_EDGE ? n.type = Be.NODE_TARGET : i === Be.UNDIRECTED_EDGE && (n.type = Be.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
      }
    }];
    Di.forEach(function(t) {
      return t.regexObj = new RegExp("^" + t.regex);
    });
    var Yv = function(e) {
      for (var r, a, n, i = 0; i < Di.length; i++) {
        var s = Di[i], o = s.name, l = e.match(s.regexObj);
        if (l != null) {
          a = l, r = s, n = o;
          var u = l[0];
          e = e.substring(u.length);
          break;
        }
      }
      return {
        expr: r,
        match: a,
        name: n,
        remaining: e
      };
    }, Hv = function(e) {
      var r = e.match(/^\s+/);
      if (r) {
        var a = r[0];
        e = e.substring(a.length);
      }
      return e;
    }, Xv = function(e) {
      var r = this, a = r.inputText = e, n = r[0] = gt();
      for (r.length = 1, a = Hv(a); ; ) {
        var i = Yv(a);
        if (i.expr == null)
          return ft("The selector `" + e + "`is invalid"), !1;
        var s = i.match.slice(1), o = i.expr.populate(r, n, s);
        if (o === !1)
          return !1;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
          break;
      }
      var l = r[r.length - 1];
      r.currentSubject != null && (l.subject = r.currentSubject), l.edgeCount = r.edgeCount, l.compoundCount = r.compoundCount;
      for (var u = 0; u < r.length; u++) {
        var f = r[u];
        if (f.compoundCount > 0 && f.edgeCount > 0)
          return ft("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
        if (f.edgeCount > 1)
          return ft("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
        f.edgeCount === 1 && ft("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
      }
      return !0;
    }, qv = function() {
      if (this.toStringCache != null)
        return this.toStringCache;
      for (var e = function(f) {
        return f ?? "";
      }, r = function(f) {
        return ee(f) ? '"' + f + '"' : e(f);
      }, a = function(f) {
        return " " + f + " ";
      }, n = function(f, h) {
        var c = f.type, v = f.value;
        switch (c) {
          case Be.GROUP: {
            var d = e(v);
            return d.substring(0, d.length - 1);
          }
          case Be.DATA_COMPARE: {
            var g = f.field, y = f.operator;
            return "[" + g + a(e(y)) + r(v) + "]";
          }
          case Be.DATA_BOOL: {
            var p = f.operator, m = f.field;
            return "[" + e(p) + m + "]";
          }
          case Be.DATA_EXIST: {
            var b = f.field;
            return "[" + b + "]";
          }
          case Be.META_COMPARE: {
            var E = f.operator, M = f.field;
            return "[[" + M + a(e(E)) + r(v) + "]]";
          }
          case Be.STATE:
            return v;
          case Be.ID:
            return "#" + v;
          case Be.CLASS:
            return "." + v;
          case Be.PARENT:
          case Be.CHILD:
            return i(f.parent, h) + a(">") + i(f.child, h);
          case Be.ANCESTOR:
          case Be.DESCENDANT:
            return i(f.ancestor, h) + " " + i(f.descendant, h);
          case Be.COMPOUND_SPLIT: {
            var O = i(f.left, h), x = i(f.subject, h), I = i(f.right, h);
            return O + (O.length > 0 ? " " : "") + x + I;
          }
          case Be.TRUE:
            return "";
        }
      }, i = function(f, h) {
        return f.checks.reduce(function(c, v, d) {
          return c + (h === f && d === 0 ? "$" : "") + n(v, h);
        }, "");
      }, s = "", o = 0; o < this.length; o++) {
        var l = this[o];
        s += i(l, l.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
      }
      return this.toStringCache = s, s;
    }, Wv = {
      parse: Xv,
      toString: qv
    }, fo = function(e, r, a) {
      var n, i = ee(e), s = k(e), o = ee(a), l, u, f = !1, h = !1, c = !1;
      switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = l.toLowerCase(), a = u = u.toLowerCase()), r) {
        case "*=":
          n = l.indexOf(u) >= 0;
          break;
        case "$=":
          n = l.indexOf(u, l.length - u.length) >= 0;
          break;
        case "^=":
          n = l.indexOf(u) === 0;
          break;
        case "=":
          n = e === a;
          break;
        case ">":
          c = !0, n = e > a;
          break;
        case ">=":
          c = !0, n = e >= a;
          break;
        case "<":
          c = !0, n = e < a;
          break;
        case "<=":
          c = !0, n = e <= a;
          break;
        default:
          n = !1;
          break;
      }
      return h && (e != null || !c) && (n = !n), n;
    }, Kv = function(e, r) {
      switch (r) {
        case "?":
          return !!e;
        case "!":
          return !e;
        case "^":
          return e === void 0;
      }
    }, Zv = function(e) {
      return e !== void 0;
    }, Si = function(e, r) {
      return e.data(r);
    }, Qv = function(e, r) {
      return e[r]();
    }, Tt = [], wt = function(e, r) {
      return e.checks.every(function(a) {
        return Tt[a.type](a, r);
      });
    };
    Tt[Be.GROUP] = function(t, e) {
      var r = t.value;
      return r === "*" || r === e.group();
    }, Tt[Be.STATE] = function(t, e) {
      var r = t.value;
      return _v(r, e);
    }, Tt[Be.ID] = function(t, e) {
      var r = t.value;
      return e.id() === r;
    }, Tt[Be.CLASS] = function(t, e) {
      var r = t.value;
      return e.hasClass(r);
    }, Tt[Be.META_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return fo(Qv(e, r), a, n);
    }, Tt[Be.DATA_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return fo(Si(e, r), a, n);
    }, Tt[Be.DATA_BOOL] = function(t, e) {
      var r = t.field, a = t.operator;
      return Kv(Si(e, r), a);
    }, Tt[Be.DATA_EXIST] = function(t, e) {
      var r = t.field;
      return t.operator, Zv(Si(e, r));
    }, Tt[Be.UNDIRECTED_EDGE] = function(t, e) {
      var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
      return wt(r, n) && wt(a, i) || wt(a, n) && wt(r, i);
    }, Tt[Be.NODE_NEIGHBOR] = function(t, e) {
      return wt(t.node, e) && e.neighborhood().some(function(r) {
        return r.isNode() && wt(t.neighbor, r);
      });
    }, Tt[Be.DIRECTED_EDGE] = function(t, e) {
      return wt(t.source, e.source()) && wt(t.target, e.target());
    }, Tt[Be.NODE_SOURCE] = function(t, e) {
      return wt(t.source, e) && e.outgoers().some(function(r) {
        return r.isNode() && wt(t.target, r);
      });
    }, Tt[Be.NODE_TARGET] = function(t, e) {
      return wt(t.target, e) && e.incomers().some(function(r) {
        return r.isNode() && wt(t.source, r);
      });
    }, Tt[Be.CHILD] = function(t, e) {
      return wt(t.child, e) && wt(t.parent, e.parent());
    }, Tt[Be.PARENT] = function(t, e) {
      return wt(t.parent, e) && e.children().some(function(r) {
        return wt(t.child, r);
      });
    }, Tt[Be.DESCENDANT] = function(t, e) {
      return wt(t.descendant, e) && e.ancestors().some(function(r) {
        return wt(t.ancestor, r);
      });
    }, Tt[Be.ANCESTOR] = function(t, e) {
      return wt(t.ancestor, e) && e.descendants().some(function(r) {
        return wt(t.descendant, r);
      });
    }, Tt[Be.COMPOUND_SPLIT] = function(t, e) {
      return wt(t.subject, e) && wt(t.left, e) && wt(t.right, e);
    }, Tt[Be.TRUE] = function() {
      return !0;
    }, Tt[Be.COLLECTION] = function(t, e) {
      var r = t.value;
      return r.has(e);
    }, Tt[Be.FILTER] = function(t, e) {
      var r = t.value;
      return r(e);
    };
    var Jv = function(e) {
      var r = this;
      if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === Be.ID)
        return e.getElementById(r[0].checks[0].value).collection();
      var a = function(i) {
        for (var s = 0; s < r.length; s++) {
          var o = r[s];
          if (wt(o, i))
            return !0;
        }
        return !1;
      };
      return r.text() == null && (a = function() {
        return !0;
      }), e.filter(a);
    }, jv = function(e) {
      for (var r = this, a = 0; a < r.length; a++) {
        var n = r[a];
        if (wt(n, e))
          return !0;
      }
      return !1;
    }, ed = {
      matches: jv,
      filter: Jv
    }, Dr = function(e) {
      this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ee(e) && e.match(/^\s*$/) || (pe(e) ? this.addQuery({
        checks: [{
          type: Be.COLLECTION,
          value: e.collection()
        }]
      }) : H(e) ? this.addQuery({
        checks: [{
          type: Be.FILTER,
          value: e
        }]
      }) : ee(e) ? this.parse(e) || (this.invalid = !0) : xt("A selector must be created from a string; found "));
    }, Sr = Dr.prototype;
    [Wv, ed].forEach(function(t) {
      return Ue(Sr, t);
    }), Sr.text = function() {
      return this.inputText;
    }, Sr.size = function() {
      return this.length;
    }, Sr.eq = function(t) {
      return this[t];
    }, Sr.sameText = function(t) {
      return !this.invalid && !t.invalid && this.text() === t.text();
    }, Sr.addQuery = function(t) {
      this[this.length++] = t;
    }, Sr.selector = Sr.toString;
    var Lr = {
      allAre: function(e) {
        var r = new Dr(e);
        return this.every(function(a) {
          return r.matches(a);
        });
      },
      is: function(e) {
        var r = new Dr(e);
        return this.some(function(a) {
          return r.matches(a);
        });
      },
      some: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (n)
            return !0;
        }
        return !1;
      },
      every: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (!n)
            return !1;
        }
        return !0;
      },
      same: function(e) {
        if (this === e)
          return !0;
        e = this.cy().collection(e);
        var r = this.length, a = e.length;
        return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
          return e.hasElementWithId(n.id());
        });
      },
      anySame: function(e) {
        return e = this.cy().collection(e), this.some(function(r) {
          return e.hasElementWithId(r.id());
        });
      },
      allAreNeighbors: function(e) {
        e = this.cy().collection(e);
        var r = this.neighborhood();
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      },
      contains: function(e) {
        e = this.cy().collection(e);
        var r = this;
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      }
    };
    Lr.allAreNeighbours = Lr.allAreNeighbors, Lr.has = Lr.contains, Lr.equal = Lr.equals = Lr.same;
    var Kt = function(e, r) {
      return function(n, i, s, o) {
        var l = n, u = this, f;
        if (l == null ? f = "" : pe(l) && l.length === 1 && (f = l.id()), u.length === 1 && f) {
          var h = u[0]._private, c = h.traversalCache = h.traversalCache || {}, v = c[r] = c[r] || [], d = kr(f), g = v[d];
          return g || (v[d] = e.call(u, n, i, s, o));
        } else
          return e.call(u, n, i, s, o);
      };
    }, fa = {
      parent: function(e) {
        var r = [];
        if (this.length === 1) {
          var a = this[0]._private.parent;
          if (a)
            return a;
        }
        for (var n = 0; n < this.length; n++) {
          var i = this[n], s = i._private.parent;
          s && r.push(s);
        }
        return this.spawn(r, !0).filter(e);
      },
      parents: function(e) {
        for (var r = [], a = this.parent(); a.nonempty(); ) {
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            r.push(i);
          }
          a = a.parent();
        }
        return this.spawn(r, !0).filter(e);
      },
      commonAncestors: function(e) {
        for (var r, a = 0; a < this.length; a++) {
          var n = this[a], i = n.parents();
          r = r || i, r = r.intersect(i);
        }
        return r.filter(e);
      },
      orphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isOrphan();
        }).filter(e);
      },
      nonorphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isChild();
        }).filter(e);
      },
      children: Kt(function(t) {
        for (var e = [], r = 0; r < this.length; r++)
          for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
            e.push(n[i]);
        return this.spawn(e, !0).filter(t);
      }, "children"),
      siblings: function(e) {
        return this.parent().children().not(this).filter(e);
      },
      isParent: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length !== 0;
      },
      isChildless: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length === 0;
      },
      isChild: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent != null;
      },
      isOrphan: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent == null;
      },
      descendants: function(e) {
        var r = [];
        function a(n) {
          for (var i = 0; i < n.length; i++) {
            var s = n[i];
            r.push(s), s.children().nonempty() && a(s.children());
          }
        }
        return a(this.children()), this.spawn(r, !0).filter(e);
      }
    };
    function Li(t, e, r, a) {
      for (var n = [], i = new Jr(), s = t.cy(), o = s.hasCompoundNodes(), l = 0; l < t.length; l++) {
        var u = t[l];
        r ? n.push(u) : o && a(n, i, u);
      }
      for (; n.length > 0; ) {
        var f = n.shift();
        e(f), i.add(f.id()), o && a(n, i, f);
      }
      return t;
    }
    function ho(t, e, r) {
      if (r.isParent())
        for (var a = r._private.children, n = 0; n < a.length; n++) {
          var i = a[n];
          e.has(i.id()) || t.push(i);
        }
    }
    fa.forEachDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Li(this, t, e, ho);
    };
    function co(t, e, r) {
      if (r.isChild()) {
        var a = r._private.parent;
        e.has(a.id()) || t.push(a);
      }
    }
    fa.forEachUp = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Li(this, t, e, co);
    };
    function td(t, e, r) {
      co(t, e, r), ho(t, e, r);
    }
    fa.forEachUpAndDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Li(this, t, e, td);
    }, fa.ancestors = fa.parents;
    var $a, vo;
    $a = vo = {
      data: ht.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      removeData: ht.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      scratch: ht.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeScratch: ht.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      rscratch: ht.data({
        field: "rscratch",
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !0
      }),
      removeRscratch: ht.removeData({
        field: "rscratch",
        triggerEvent: !1
      }),
      id: function() {
        var e = this[0];
        if (e)
          return e._private.data.id;
      }
    }, $a.attr = $a.data, $a.removeAttr = $a.removeData;
    var rd = vo, An = {};
    function Ai(t) {
      return function(e) {
        var r = this;
        if (e === void 0 && (e = !0), r.length !== 0)
          if (r.isNode() && !r.removed()) {
            for (var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              !e && o.isLoop() || (a += t(n, o));
            }
            return a;
          } else
            return;
      };
    }
    Ue(An, {
      degree: Ai(function(t, e) {
        return e.source().same(e.target()) ? 2 : 1;
      }),
      indegree: Ai(function(t, e) {
        return e.target().same(t) ? 1 : 0;
      }),
      outdegree: Ai(function(t, e) {
        return e.source().same(t) ? 1 : 0;
      })
    });
    function ha(t, e) {
      return function(r) {
        for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
          var s = n[i], o = s[t](r);
          o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
        }
        return a;
      };
    }
    Ue(An, {
      minDegree: ha("degree", function(t, e) {
        return t < e;
      }),
      maxDegree: ha("degree", function(t, e) {
        return t > e;
      }),
      minIndegree: ha("indegree", function(t, e) {
        return t < e;
      }),
      maxIndegree: ha("indegree", function(t, e) {
        return t > e;
      }),
      minOutdegree: ha("outdegree", function(t, e) {
        return t < e;
      }),
      maxOutdegree: ha("outdegree", function(t, e) {
        return t > e;
      })
    }), Ue(An, {
      totalDegree: function(e) {
        for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
          r += a[n].degree(e);
        return r;
      }
    });
    var tr, go, po = function(e, r, a) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        if (!i.locked()) {
          var s = i._private.position, o = {
            x: r.x != null ? r.x - s.x : 0,
            y: r.y != null ? r.y - s.y : 0
          };
          i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
        }
      }
    }, yo = {
      field: "position",
      bindingEvent: "position",
      allowBinding: !0,
      allowSetting: !0,
      settingEvent: "position",
      settingTriggersEvent: !0,
      triggerFnName: "emitAndNotify",
      allowGetting: !0,
      validKeys: ["x", "y"],
      beforeGet: function(e) {
        e.updateCompoundBounds();
      },
      beforeSet: function(e, r) {
        po(e, r, !1);
      },
      onSet: function(e) {
        e.dirtyCompoundBoundsCache();
      },
      canSet: function(e) {
        return !e.locked();
      }
    };
    tr = go = {
      position: ht.data(yo),
      // position but no notification to renderer
      silentPosition: ht.data(Ue({}, yo, {
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !1,
        beforeSet: function(e, r) {
          po(e, r, !0);
        },
        onSet: function(e) {
          e.dirtyCompoundBoundsCache();
        }
      })),
      positions: function(e, r) {
        if (S(e))
          r ? this.silentPosition(e) : this.position(e);
        else if (H(e)) {
          var a = e, n = this.cy();
          n.startBatch();
          for (var i = 0; i < this.length; i++) {
            var s = this[i], o = void 0;
            (o = a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
          }
          n.endBatch();
        }
        return this;
      },
      silentPositions: function(e) {
        return this.positions(e, !0);
      },
      shift: function(e, r, a) {
        var n;
        if (S(e) ? (n = {
          x: k(e.x) ? e.x : 0,
          y: k(e.y) ? e.y : 0
        }, a = r) : ee(e) && k(r) && (n = {
          x: 0,
          y: 0
        }, n[e] = r), n != null) {
          var i = this.cy();
          i.startBatch();
          for (var s = 0; s < this.length; s++) {
            var o = this[s];
            if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
              var l = o.position(), u = {
                x: l.x + n.x,
                y: l.y + n.y
              };
              a ? o.silentPosition(u) : o.position(u);
            }
          }
          i.endBatch();
        }
        return this;
      },
      silentShift: function(e, r) {
        return S(e) ? this.shift(e, !0) : ee(e) && k(r) && this.shift(e, r, !0), this;
      },
      // get/set the rendered (i.e. on screen) positon of the element
      renderedPosition: function(e, r) {
        var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = S(e) ? e : void 0, l = o !== void 0 || r !== void 0 && ee(e);
        if (a && a.isNode())
          if (l)
            for (var u = 0; u < this.length; u++) {
              var f = this[u];
              r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(bs(o, i, s));
            }
          else {
            var h = a.position();
            return o = gn(h, i, s), e === void 0 ? o : o[e];
          }
        else if (!l)
          return;
        return this;
      },
      // get/set the position relative to the parent
      relativePosition: function(e, r) {
        var a = this[0], n = this.cy(), i = S(e) ? e : void 0, s = i !== void 0 || r !== void 0 && ee(e), o = n.hasCompoundNodes();
        if (a && a.isNode())
          if (s)
            for (var l = 0; l < this.length; l++) {
              var u = this[l], f = o ? u.parent() : null, h = f && f.length > 0, c = h;
              h && (f = f[0]);
              var v = c ? f.position() : {
                x: 0,
                y: 0
              };
              r !== void 0 ? u.position(e, r + v[e]) : i !== void 0 && u.position({
                x: i.x + v.x,
                y: i.y + v.y
              });
            }
          else {
            var d = a.position(), g = o ? a.parent() : null, y = g && g.length > 0, p = y;
            y && (g = g[0]);
            var m = p ? g.position() : {
              x: 0,
              y: 0
            };
            return i = {
              x: d.x - m.x,
              y: d.y - m.y
            }, e === void 0 ? i : i[e];
          }
        else if (!s)
          return;
        return this;
      }
    }, tr.modelPosition = tr.point = tr.position, tr.modelPositions = tr.points = tr.positions, tr.renderedPoint = tr.renderedPosition, tr.relativePoint = tr.relativePosition;
    var ad = go, ca, Ar;
    ca = Ar = {}, Ar.renderedBoundingBox = function(t) {
      var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
      return {
        x1: i,
        x2: s,
        y1: o,
        y2: l,
        w: s - i,
        h: l - o
      };
    }, Ar.dirtyCompoundBoundsCache = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
        if (r.isParent()) {
          var a = r._private;
          a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
        }
      }), this);
    }, Ar.updateCompoundBounds = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      if (!e.styleEnabled() || !e.hasCompoundNodes())
        return this;
      if (!t && e.batching())
        return this;
      function r(s) {
        if (!s.isParent())
          return;
        var o = s._private, l = s.children(), u = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
          width: {
            val: s.pstyle("min-width").pfValue,
            left: s.pstyle("min-width-bias-left"),
            right: s.pstyle("min-width-bias-right")
          },
          height: {
            val: s.pstyle("min-height").pfValue,
            top: s.pstyle("min-height-bias-top"),
            bottom: s.pstyle("min-height-bias-bottom")
          }
        }, h = l.boundingBox({
          includeLabels: u,
          includeOverlays: !1,
          // updating the compound bounds happens outside of the regular
          // cache cycle (i.e. before fired events)
          useCache: !1
        }), c = o.position;
        (h.w === 0 || h.h === 0) && (h = {
          w: s.pstyle("width").pfValue,
          h: s.pstyle("height").pfValue
        }, h.x1 = c.x - h.w / 2, h.x2 = c.x + h.w / 2, h.y1 = c.y - h.h / 2, h.y2 = c.y + h.h / 2);
        function v(C, B, F) {
          var R = 0, X = 0, z = B + F;
          return C > 0 && z > 0 && (R = B / z * C, X = F / z * C), {
            biasDiff: R,
            biasComplementDiff: X
          };
        }
        function d(C, B, F, R) {
          if (F.units === "%")
            switch (R) {
              case "width":
                return C > 0 ? F.pfValue * C : 0;
              case "height":
                return B > 0 ? F.pfValue * B : 0;
              case "average":
                return C > 0 && B > 0 ? F.pfValue * (C + B) / 2 : 0;
              case "min":
                return C > 0 && B > 0 ? C > B ? F.pfValue * B : F.pfValue * C : 0;
              case "max":
                return C > 0 && B > 0 ? C > B ? F.pfValue * C : F.pfValue * B : 0;
              default:
                return 0;
            }
          else
            return F.units === "px" ? F.pfValue : 0;
        }
        var g = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (g = g * 100 / f.width.val);
        var y = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (y = y * 100 / f.width.val);
        var p = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (p = p * 100 / f.height.val);
        var m = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (m = m * 100 / f.height.val);
        var b = v(f.width.val - h.w, g, y), E = b.biasDiff, M = b.biasComplementDiff, O = v(f.height.val - h.h, p, m), x = O.biasDiff, I = O.biasComplementDiff;
        o.autoPadding = d(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), c.x = (-E + h.x1 + h.x2 + M) / 2, o.autoHeight = Math.max(h.h, f.height.val), c.y = (-x + h.y1 + h.y2 + I) / 2;
      }
      for (var a = 0; a < this.length; a++) {
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
      }
      return this;
    };
    var Zt = function(e) {
      return e === 1 / 0 || e === -1 / 0 ? 0 : e;
    }, rr = function(e, r, a, n, i) {
      n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
    }, Gr = function(e, r) {
      return r == null ? e : rr(e, r.x1, r.y1, r.x2, r.y2);
    }, Va = function(e, r, a) {
      return er(e, r, a);
    }, On = function(e, r, a) {
      if (!r.cy().headless()) {
        var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, l, u;
        if (o !== "none") {
          a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
          var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
          h.x1 = l - s, h.y1 = u - s, h.x2 = l + s, h.y2 = u + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, yn(h, 1), rr(e, h.x1, h.y1, h.x2, h.y2);
        }
      }
    }, Oi = function(e, r, a) {
      if (!r.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
        if (o) {
          var l = r.pstyle("text-halign"), u = r.pstyle("text-valign"), f = Va(s, "labelWidth", a), h = Va(s, "labelHeight", a), c = Va(s, "labelX", a), v = Va(s, "labelY", a), d = r.pstyle(n + "text-margin-x").pfValue, g = r.pstyle(n + "text-margin-y").pfValue, y = r.isEdge(), p = r.pstyle(n + "text-rotation"), m = r.pstyle("text-outline-width").pfValue, b = r.pstyle("text-border-width").pfValue, E = b / 2, M = r.pstyle("text-background-padding").pfValue, O = 2, x = h, I = f, C = I / 2, B = x / 2, F, R, X, z;
          if (y)
            F = c - C, R = c + C, X = v - B, z = v + B;
          else {
            switch (l.value) {
              case "left":
                F = c - I, R = c;
                break;
              case "center":
                F = c - C, R = c + C;
                break;
              case "right":
                F = c, R = c + I;
                break;
            }
            switch (u.value) {
              case "top":
                X = v - x, z = v;
                break;
              case "center":
                X = v - B, z = v + B;
                break;
              case "bottom":
                X = v, z = v + x;
                break;
            }
          }
          F += d - Math.max(m, E) - M - O, R += d + Math.max(m, E) + M + O, X += g - Math.max(m, E) - M - O, z += g + Math.max(m, E) + M + O;
          var re = a || "main", W = i.labelBounds, Z = W[re] = W[re] || {};
          Z.x1 = F, Z.y1 = X, Z.x2 = R, Z.y2 = z, Z.w = R - F, Z.h = z - X;
          var ie = y && p.strValue === "autorotate", oe = p.pfValue != null && p.pfValue !== 0;
          if (ie || oe) {
            var ge = ie ? Va(i.rstyle, "labelAngle", a) : p.pfValue, se = Math.cos(ge), de = Math.sin(ge), we = (F + R) / 2, Te = (X + z) / 2;
            if (!y) {
              switch (l.value) {
                case "left":
                  we = R;
                  break;
                case "right":
                  we = F;
                  break;
              }
              switch (u.value) {
                case "top":
                  Te = z;
                  break;
                case "bottom":
                  Te = X;
                  break;
              }
            }
            var Ee = function(qe, Re) {
              return qe = qe - we, Re = Re - Te, {
                x: qe * se - Re * de + we,
                y: qe * de + Re * se + Te
              };
            }, ye = Ee(F, X), ae = Ee(F, z), xe = Ee(R, X), Ce = Ee(R, z);
            F = Math.min(ye.x, ae.x, xe.x, Ce.x), R = Math.max(ye.x, ae.x, xe.x, Ce.x), X = Math.min(ye.y, ae.y, xe.y, Ce.y), z = Math.max(ye.y, ae.y, xe.y, Ce.y);
          }
          var Oe = re + "Rot", Ie = W[Oe] = W[Oe] || {};
          Ie.x1 = F, Ie.y1 = X, Ie.x2 = R, Ie.y2 = z, Ie.w = R - F, Ie.h = z - X, rr(e, F, X, R, z), rr(i.labelBounds.all, F, X, R, z);
        }
        return e;
      }
    }, nd = function(e, r) {
      var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = Ut(), o = e._private, l = e.isNode(), u = e.isEdge(), f, h, c, v, d, g, y = o.rstyle, p = l && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function(Ve) {
        return Ve.pstyle("display").value !== "none";
      }, b = !n || m(e) && (!u || m(e.source()) && m(e.target()));
      if (b) {
        var E = 0, M = 0;
        n && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (M = e.pstyle("overlay-padding").value));
        var O = 0, x = 0;
        n && r.includeUnderlays && (O = e.pstyle("underlay-opacity").value, O !== 0 && (x = e.pstyle("underlay-padding").value));
        var I = Math.max(M, x), C = 0, B = 0;
        if (n && (C = e.pstyle("width").pfValue, B = C / 2), l && r.includeNodes) {
          var F = e.position();
          d = F.x, g = F.y;
          var R = e.outerWidth(), X = R / 2, z = e.outerHeight(), re = z / 2;
          f = d - X, h = d + X, c = g - re, v = g + re, rr(s, f, c, h, v);
        } else if (u && r.includeEdges)
          if (n && !i) {
            var W = e.pstyle("curve-style").strValue;
            if (f = Math.min(y.srcX, y.midX, y.tgtX), h = Math.max(y.srcX, y.midX, y.tgtX), c = Math.min(y.srcY, y.midY, y.tgtY), v = Math.max(y.srcY, y.midY, y.tgtY), f -= B, h += B, c -= B, v += B, rr(s, f, c, h, v), W === "haystack") {
              var Z = y.haystackPts;
              if (Z && Z.length === 2) {
                if (f = Z[0].x, c = Z[0].y, h = Z[1].x, v = Z[1].y, f > h) {
                  var ie = f;
                  f = h, h = ie;
                }
                if (c > v) {
                  var oe = c;
                  c = v, v = oe;
                }
                rr(s, f - B, c - B, h + B, v + B);
              }
            } else if (W === "bezier" || W === "unbundled-bezier" || W === "segments" || W === "taxi") {
              var ge;
              switch (W) {
                case "bezier":
                case "unbundled-bezier":
                  ge = y.bezierPts;
                  break;
                case "segments":
                case "taxi":
                  ge = y.linePts;
                  break;
              }
              if (ge != null)
                for (var se = 0; se < ge.length; se++) {
                  var de = ge[se];
                  f = de.x - B, h = de.x + B, c = de.y - B, v = de.y + B, rr(s, f, c, h, v);
                }
            }
          } else {
            var we = e.source(), Te = we.position(), Ee = e.target(), ye = Ee.position();
            if (f = Te.x, h = ye.x, c = Te.y, v = ye.y, f > h) {
              var ae = f;
              f = h, h = ae;
            }
            if (c > v) {
              var xe = c;
              c = v, v = xe;
            }
            f -= B, h += B, c -= B, v += B, rr(s, f, c, h, v);
          }
        if (n && r.includeEdges && u && (On(s, e, "mid-source"), On(s, e, "mid-target"), On(s, e, "source"), On(s, e, "target")), n) {
          var Ce = e.pstyle("ghost").value === "yes";
          if (Ce) {
            var Oe = e.pstyle("ghost-offset-x").pfValue, Ie = e.pstyle("ghost-offset-y").pfValue;
            rr(s, s.x1 + Oe, s.y1 + Ie, s.x2 + Oe, s.y2 + Ie);
          }
        }
        var He = o.bodyBounds = o.bodyBounds || {};
        ws(He, s), fi(He, p), yn(He, 1), n && (f = s.x1, h = s.x2, c = s.y1, v = s.y2, rr(s, f - I, c - I, h + I, v + I));
        var qe = o.overlayBounds = o.overlayBounds || {};
        ws(qe, s), fi(qe, p), yn(qe, 1);
        var Re = o.labelBounds = o.labelBounds || {};
        Re.all != null ? Cf(Re.all) : Re.all = Ut(), n && r.includeLabels && (r.includeMainLabels && Oi(s, e, null), u && (r.includeSourceLabels && Oi(s, e, "source"), r.includeTargetLabels && Oi(s, e, "target")));
      }
      return s.x1 = Zt(s.x1), s.y1 = Zt(s.y1), s.x2 = Zt(s.x2), s.y2 = Zt(s.y2), s.w = Zt(s.x2 - s.x1), s.h = Zt(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (fi(s, p), yn(s, 1)), s;
    }, mo = function(e) {
      var r = 0, a = function(s) {
        return (s ? 1 : 0) << r++;
      }, n = 0;
      return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n;
    }, bo = function(e) {
      if (e.isEdge()) {
        var r = e.source().position(), a = e.target().position(), n = function(s) {
          return Math.round(s);
        };
        return Yl([n(r.x), n(r.y), n(a.x), n(a.y)]);
      } else
        return 0;
    }, Eo = function(e, r) {
      var a = e._private, n, i = e.isEdge(), s = r == null ? wo : mo(r), o = s === wo, l = bo(e), u = a.bbCachePosKey === l, f = r.useCache && u, h = function(g) {
        return g._private.bbCache == null || g._private.styleDirty;
      }, c = !f || h(e) || i && h(e.source()) || h(e.target());
      if (c ? (u || e.recalculateRenderedStyle(f), n = nd(e, _a), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !o) {
        var v = e.isNode();
        n = Ut(), (r.includeNodes && v || r.includeEdges && !v) && (r.includeOverlays ? Gr(n, a.overlayBounds) : Gr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? Gr(n, a.labelBounds.all) : (r.includeMainLabels && Gr(n, a.labelBounds.mainRot), r.includeSourceLabels && Gr(n, a.labelBounds.sourceRot), r.includeTargetLabels && Gr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      }
      return n;
    }, _a = {
      includeNodes: !0,
      includeEdges: !0,
      includeLabels: !0,
      includeMainLabels: !0,
      includeSourceLabels: !0,
      includeTargetLabels: !0,
      includeOverlays: !0,
      includeUnderlays: !0,
      useCache: !0
    }, wo = mo(_a), xo = Lt(_a);
    Ar.boundingBox = function(t) {
      var e;
      if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
        t === void 0 ? t = _a : t = xo(t), e = Eo(this[0], t);
      else {
        e = Ut(), t = t || _a;
        var r = xo(t), a = this, n = a.cy(), i = n.styleEnabled();
        if (i)
          for (var s = 0; s < a.length; s++) {
            var o = a[s], l = o._private, u = bo(o), f = l.bbCachePosKey === u, h = r.useCache && f && !l.styleDirty;
            o.recalculateRenderedStyle(h);
          }
        this.updateCompoundBounds(!t.useCache);
        for (var c = 0; c < a.length; c++) {
          var v = a[c];
          Gr(e, Eo(v, r));
        }
      }
      return e.x1 = Zt(e.x1), e.y1 = Zt(e.y1), e.x2 = Zt(e.x2), e.y2 = Zt(e.y2), e.w = Zt(e.x2 - e.x1), e.h = Zt(e.y2 - e.y1), e;
    }, Ar.dirtyBoundingBoxCache = function() {
      for (var t = 0; t < this.length; t++) {
        var e = this[t]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
      }
      return this.emitAndNotify("bounds"), this;
    }, Ar.boundingBoxAt = function(t) {
      var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
      if (a && (n = e.filter(function(u) {
        return u.isParent();
      }), e = e.not(n)), S(t)) {
        var i = t;
        t = function() {
          return i;
        };
      }
      var s = function(f, h) {
        return f._private.bbAtOldPos = t(f, h);
      }, o = function(f) {
        return f._private.bbAtOldPos;
      };
      r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
      var l = Tf(this.boundingBox({
        useCache: !1
      }));
      return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), l;
    }, ca.boundingbox = ca.bb = ca.boundingBox, ca.renderedBoundingbox = ca.renderedBoundingBox;
    var id = Ar, Ua, Ya;
    Ua = Ya = {};
    var To = function(e) {
      e.uppercaseName = kt(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = kt(e.outerName), Ua[e.name] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            if (a.isParent())
              return a.updateCompoundBounds(), n[e.autoName] || 0;
            var o = a.pstyle(e.name);
            switch (o.strValue) {
              case "label":
                return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
              default:
                return o.pfValue;
            }
          } else
            return 1;
      }, Ua["outer" + e.uppercaseName] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            var o = a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
            return o + l + u;
          } else
            return 1;
      }, Ua["rendered" + e.uppercaseName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.name]();
          return n * this.cy().zoom();
        }
      }, Ua["rendered" + e.uppercaseOuterName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.outerName]();
          return n * this.cy().zoom();
        }
      };
    };
    To({
      name: "width"
    }), To({
      name: "height"
    }), Ya.padding = function() {
      var t = this[0], e = t._private;
      return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
    }, Ya.paddedHeight = function() {
      var t = this[0];
      return t.height() + 2 * t.padding();
    }, Ya.paddedWidth = function() {
      var t = this[0];
      return t.width() + 2 * t.padding();
    };
    var sd = Ya, od = function(e, r) {
      if (e.isEdge())
        return r(e);
    }, ud = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy();
        return gn(r(e), a.zoom(), a.pan());
      }
    }, ld = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy(), n = a.pan(), i = a.zoom();
        return r(e).map(function(s) {
          return gn(s, i, n);
        });
      }
    }, fd = function(e) {
      return e.renderer().getControlPoints(e);
    }, hd = function(e) {
      return e.renderer().getSegmentPoints(e);
    }, cd = function(e) {
      return e.renderer().getSourceEndpoint(e);
    }, vd = function(e) {
      return e.renderer().getTargetEndpoint(e);
    }, dd = function(e) {
      return e.renderer().getEdgeMidpoint(e);
    }, Co = {
      controlPoints: {
        get: fd,
        mult: !0
      },
      segmentPoints: {
        get: hd,
        mult: !0
      },
      sourceEndpoint: {
        get: cd
      },
      targetEndpoint: {
        get: vd
      },
      midpoint: {
        get: dd
      }
    }, gd = function(e) {
      return "rendered" + e[0].toUpperCase() + e.substr(1);
    }, pd = Object.keys(Co).reduce(function(t, e) {
      var r = Co[e], a = gd(e);
      return t[e] = function() {
        return od(this, r.get);
      }, r.mult ? t[a] = function() {
        return ld(this, r.get);
      } : t[a] = function() {
        return ud(this, r.get);
      }, t;
    }, {}), yd = Ue({}, ad, id, sd, pd);
    /*!
    	  Event object based on jQuery events, MIT license
    
    	  https://jquery.org/license/
    	  https://tldrlegal.com/license/mit-license
    	  https://github.com/jquery/jquery/blob/master/src/event.js
    	  */
    var Do = function(e, r) {
      this.recycle(e, r);
    };
    function Ha() {
      return !1;
    }
    function Nn() {
      return !0;
    }
    Do.prototype = {
      instanceString: function() {
        return "event";
      },
      recycle: function(e, r) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Ha, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Nn : Ha) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
          var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
          this.renderedPosition = {
            x: a.x * n + i.x,
            y: a.y * n + i.y
          };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
      },
      preventDefault: function() {
        this.isDefaultPrevented = Nn;
        var e = this.originalEvent;
        e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function() {
        this.isPropagationStopped = Nn;
        var e = this.originalEvent;
        e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = Nn, this.stopPropagation();
      },
      isDefaultPrevented: Ha,
      isPropagationStopped: Ha,
      isImmediatePropagationStopped: Ha
    };
    var So = /^([^.]+)(\.(?:[^.]+))?$/, md = ".*", Lo = {
      qualifierCompare: function(e, r) {
        return e === r;
      },
      eventMatches: function() {
        return !0;
      },
      addEventFields: function() {
      },
      callbackContext: function(e) {
        return e;
      },
      beforeEmit: function() {
      },
      afterEmit: function() {
      },
      bubble: function() {
        return !1;
      },
      parent: function() {
        return null;
      },
      context: null
    }, Ao = Object.keys(Lo), bd = {};
    function Mn() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bd, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Ao.length; r++) {
        var a = Ao[r];
        this[a] = t[a] || Lo[a];
      }
      this.context = e || this.context, this.listeners = [], this.emitting = 0;
    }
    var Or = Mn.prototype, Oo = function(e, r, a, n, i, s, o) {
      H(n) && (i = n, n = null), o && (s == null ? s = o : s = Ue({}, s, o));
      for (var l = te(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
        var f = l[u];
        if (!Pe(f)) {
          var h = f.match(So);
          if (h) {
            var c = h[1], v = h[2] ? h[2] : null, d = r(e, f, c, v, n, i, s);
            if (d === !1)
              break;
          }
        }
      }
    }, No = function(e, r) {
      return e.addEventFields(e.context, r), new Do(r.type, r);
    }, Ed = function(e, r, a) {
      if (ct(a)) {
        r(e, a);
        return;
      } else if (S(a)) {
        r(e, No(e, a));
        return;
      }
      for (var n = te(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
        var s = n[i];
        if (!Pe(s)) {
          var o = s.match(So);
          if (o) {
            var l = o[1], u = o[2] ? o[2] : null, f = No(e, {
              type: l,
              namespace: u,
              target: e.context
            });
            r(e, f);
          }
        }
      }
    };
    Or.on = Or.addListener = function(t, e, r, a, n) {
      return Oo(this, function(i, s, o, l, u, f, h) {
        H(f) && i.listeners.push({
          event: s,
          // full event string
          callback: f,
          // callback to run
          type: o,
          // the event type (e.g. 'click')
          namespace: l,
          // the event namespace (e.g. ".foo")
          qualifier: u,
          // a restriction on whether to match this emitter
          conf: h
          // additional configuration
        });
      }, t, e, r, a, n), this;
    }, Or.one = function(t, e, r, a) {
      return this.on(t, e, r, a, {
        one: !0
      });
    }, Or.removeListener = Or.off = function(t, e, r, a) {
      var n = this;
      this.emitting !== 0 && (this.listeners = Kl(this.listeners));
      for (var i = this.listeners, s = function(u) {
        var f = i[u];
        Oo(n, function(h, c, v, d, g, y) {
          if ((f.type === v || t === "*") && (!d && f.namespace !== ".*" || f.namespace === d) && (!g || h.qualifierCompare(f.qualifier, g)) && (!y || f.callback === y))
            return i.splice(u, 1), !1;
        }, t, e, r, a);
      }, o = i.length - 1; o >= 0; o--)
        s(o);
      return this;
    }, Or.removeAllListeners = function() {
      return this.removeListener("*");
    }, Or.emit = Or.trigger = function(t, e, r) {
      var a = this.listeners, n = a.length;
      return this.emitting++, te(e) || (e = [e]), Ed(this, function(i, s) {
        r != null && (a = [{
          event: s.event,
          type: s.type,
          namespace: s.namespace,
          callback: r
        }], n = a.length);
        for (var o = function(f) {
          var h = a[f];
          if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === md) && i.eventMatches(i.context, h, s)) {
            var c = [s];
            e != null && Ql(c, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(g) {
              return g !== h;
            }));
            var v = i.callbackContext(i.context, h, s), d = h.callback.apply(v, c);
            i.afterEmit(i.context, h, s), d === !1 && (s.stopPropagation(), s.preventDefault());
          }
        }, l = 0; l < n; l++)
          o(l);
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
      }, t), this.emitting--, this;
    };
    var wd = {
      qualifierCompare: function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
      },
      eventMatches: function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Ae(a.target) && n.matches(a.target) : !0;
      },
      addEventFields: function(e, r) {
        r.cy = e.cy(), r.target = e;
      },
      callbackContext: function(e, r, a) {
        return r.qualifier != null ? a.target : e;
      },
      beforeEmit: function(e, r) {
        r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
      },
      bubble: function() {
        return !0;
      },
      parent: function(e) {
        return e.isChild() ? e.parent() : e.cy();
      }
    }, In = function(e) {
      return ee(e) ? new Dr(e) : e;
    }, Mo = {
      createEmitter: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e], a = r._private;
          a.emitter || (a.emitter = new Mn(wd, r));
        }
        return this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        for (var n = In(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a);
        }
        return this;
      },
      removeListener: function(e, r, a) {
        for (var n = In(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().removeListener(e, n, a);
        }
        return this;
      },
      removeAllListeners: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e];
          r.emitter().removeAllListeners();
        }
        return this;
      },
      one: function(e, r, a) {
        for (var n = In(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().one(e, n, a);
        }
        return this;
      },
      once: function(e, r, a) {
        for (var n = In(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a, {
            once: !0,
            onceCollection: this
          });
        }
      },
      emit: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = this[a];
          n.emitter().emit(e, r);
        }
        return this;
      },
      emitAndNotify: function(e, r) {
        if (this.length !== 0)
          return this.cy().notify(e, this), this.emit(e, r), this;
      }
    };
    ht.eventAliasesOn(Mo);
    var Io = {
      nodes: function(e) {
        return this.filter(function(r) {
          return r.isNode();
        }).filter(e);
      },
      edges: function(e) {
        return this.filter(function(r) {
          return r.isEdge();
        }).filter(e);
      },
      // internal helper to get nodes and edges as separate collections with single iteration over elements
      byGroup: function() {
        for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
          var n = this[a];
          n.isNode() ? e.push(n) : r.push(n);
        }
        return {
          nodes: e,
          edges: r
        };
      },
      filter: function(e, r) {
        if (e === void 0)
          return this;
        if (ee(e) || pe(e))
          return new Dr(e).filter(this);
        if (H(e)) {
          for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
            var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
            o && a.push(s);
          }
          return a;
        }
        return this.spawn();
      },
      not: function(e) {
        if (e) {
          ee(e) && (e = this.filter(e));
          for (var r = this.spawn(), a = 0; a < this.length; a++) {
            var n = this[a], i = e.has(n);
            i || r.push(n);
          }
          return r;
        } else
          return this;
      },
      absoluteComplement: function() {
        var e = this.cy();
        return e.mutableElements().not(this);
      },
      intersect: function(e) {
        if (ee(e)) {
          var r = e;
          return this.filter(r);
        }
        for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++) {
          var f = o[u];
          l.has(f) && a.push(f);
        }
        return a;
      },
      xor: function(e) {
        var r = this._private.cy;
        ee(e) && (e = r.$(e));
        var a = this.spawn(), n = this, i = e, s = function(l, u) {
          for (var f = 0; f < l.length; f++) {
            var h = l[f], c = h._private.data.id, v = u.hasElementWithId(c);
            v || a.push(h);
          }
        };
        return s(n, i), s(i, n), a;
      },
      diff: function(e) {
        var r = this._private.cy;
        ee(e) && (e = r.$(e));
        var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, l = function(f, h, c) {
          for (var v = 0; v < f.length; v++) {
            var d = f[v], g = d._private.data.id, y = h.hasElementWithId(g);
            y ? i.merge(d) : c.push(d);
          }
        };
        return l(s, o, a), l(o, s, n), {
          left: a,
          right: n,
          both: i
        };
      },
      add: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (ee(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
          var s = e[i], o = !this.has(s);
          o && n.push(s);
        }
        return n;
      },
      // in place merge on calling collection
      merge: function(e) {
        var r = this._private, a = r.cy;
        if (!e)
          return this;
        if (e && ee(e)) {
          var n = e;
          e = a.mutableElements().filter(n);
        }
        for (var i = r.map, s = 0; s < e.length; s++) {
          var o = e[s], l = o._private.data.id, u = !i.has(l);
          if (u) {
            var f = this.length++;
            this[f] = o, i.set(l, {
              ele: o,
              index: f
            });
          }
        }
        return this;
      },
      unmergeAt: function(e) {
        var r = this[e], a = r.id(), n = this._private, i = n.map;
        this[e] = void 0, i.delete(a);
        var s = e === this.length - 1;
        if (this.length > 1 && !s) {
          var o = this.length - 1, l = this[o], u = l._private.data.id;
          this[o] = void 0, this[e] = l, i.set(u, {
            ele: l,
            index: e
          });
        }
        return this.length--, this;
      },
      // remove single ele in place in calling collection
      unmergeOne: function(e) {
        e = e[0];
        var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
        if (!i)
          return this;
        var s = i.index;
        return this.unmergeAt(s), this;
      },
      // remove eles in place on calling collection
      unmerge: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (e && ee(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = 0; n < e.length; n++)
          this.unmergeOne(e[n]);
        return this;
      },
      unmergeBy: function(e) {
        for (var r = this.length - 1; r >= 0; r--) {
          var a = this[r];
          e(a) && this.unmergeAt(r);
        }
        return this;
      },
      map: function(e, r) {
        for (var a = [], n = this, i = 0; i < n.length; i++) {
          var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
          a.push(o);
        }
        return a;
      },
      reduce: function(e, r) {
        for (var a = r, n = this, i = 0; i < n.length; i++)
          a = e(a, n[i], i, n);
        return a;
      },
      max: function(e, r) {
        for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          l > a && (a = l, n = o);
        }
        return {
          value: a,
          ele: n
        };
      },
      min: function(e, r) {
        for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          l < a && (a = l, n = o);
        }
        return {
          value: a,
          ele: n
        };
      }
    }, st = Io;
    st.u = st["|"] = st["+"] = st.union = st.or = st.add, st["\\"] = st["!"] = st["-"] = st.difference = st.relativeComplement = st.subtract = st.not, st.n = st["&"] = st["."] = st.and = st.intersection = st.intersect, st["^"] = st["(+)"] = st["(-)"] = st.symmetricDifference = st.symdiff = st.xor, st.fnFilter = st.filterFn = st.stdFilter = st.filter, st.complement = st.abscomp = st.absoluteComplement;
    var xd = {
      isNode: function() {
        return this.group() === "nodes";
      },
      isEdge: function() {
        return this.group() === "edges";
      },
      isLoop: function() {
        return this.isEdge() && this.source()[0] === this.target()[0];
      },
      isSimple: function() {
        return this.isEdge() && this.source()[0] !== this.target()[0];
      },
      group: function() {
        var e = this[0];
        if (e)
          return e._private.group;
      }
    }, Ro = function(e, r) {
      var a = e.cy(), n = a.hasCompoundNodes();
      function i(f) {
        var h = f.pstyle("z-compound-depth");
        return h.value === "auto" ? n ? f.zDepth() : 0 : h.value === "bottom" ? -1 : h.value === "top" ? ii : 0;
      }
      var s = i(e) - i(r);
      if (s !== 0)
        return s;
      function o(f) {
        var h = f.pstyle("z-index-compare");
        return h.value === "auto" && f.isNode() ? 1 : 0;
      }
      var l = o(e) - o(r);
      if (l !== 0)
        return l;
      var u = e.pstyle("z-index").value - r.pstyle("z-index").value;
      return u !== 0 ? u : e.poolIndex() - r.poolIndex();
    }, Rn = {
      forEach: function(e, r) {
        if (H(e))
          for (var a = this.length, n = 0; n < a; n++) {
            var i = this[n], s = r ? e.apply(r, [i, n, this]) : e(i, n, this);
            if (s === !1)
              break;
          }
        return this;
      },
      toArray: function() {
        for (var e = [], r = 0; r < this.length; r++)
          e.push(this[r]);
        return e;
      },
      slice: function(e, r) {
        var a = [], n = this.length;
        r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
        for (var i = e; i >= 0 && i < r && i < n; i++)
          a.push(this[i]);
        return this.spawn(a);
      },
      size: function() {
        return this.length;
      },
      eq: function(e) {
        return this[e] || this.spawn();
      },
      first: function() {
        return this[0] || this.spawn();
      },
      last: function() {
        return this[this.length - 1] || this.spawn();
      },
      empty: function() {
        return this.length === 0;
      },
      nonempty: function() {
        return !this.empty();
      },
      sort: function(e) {
        if (!H(e))
          return this;
        var r = this.toArray().sort(e);
        return this.spawn(r);
      },
      sortByZIndex: function() {
        return this.sort(Ro);
      },
      zDepth: function() {
        var e = this[0];
        if (e) {
          var r = e._private, a = r.group;
          if (a === "nodes") {
            var n = r.data.parent ? e.parents().size() : 0;
            return e.isParent() ? n : ii - 1;
          } else {
            var i = r.source, s = r.target, o = i.zDepth(), l = s.zDepth();
            return Math.max(o, l, 0);
          }
        }
      }
    };
    Rn.each = Rn.forEach;
    var Td = function() {
      var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : Q(Symbol)) != e && Q(Symbol.iterator) != e;
      r && (Rn[Symbol.iterator] = function() {
        var a = this, n = {
          value: void 0,
          done: !1
        }, i = 0, s = this.length;
        return T({
          next: function() {
            return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
          }
        }, Symbol.iterator, function() {
          return this;
        });
      });
    };
    Td();
    var Cd = Lt({
      nodeDimensionsIncludeLabels: !1
    }), kn = {
      // Calculates and returns node dimensions { x, y } based on options given
      layoutDimensions: function(e) {
        e = Cd(e);
        var r;
        if (!this.takesUpSpace())
          r = {
            w: 0,
            h: 0
          };
        else if (e.nodeDimensionsIncludeLabels) {
          var a = this.boundingBox();
          r = {
            w: a.w,
            h: a.h
          };
        } else
          r = {
            w: this.outerWidth(),
            h: this.outerHeight()
          };
        return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
      },
      // using standard layout options, apply position function (w/ or w/o animation)
      layoutPositions: function(e, r, a) {
        var n = this.nodes().filter(function(M) {
          return !M.isParent();
        }), i = this.cy(), s = r.eles, o = function(O) {
          return O.id();
        }, l = nt(a, o);
        e.emit({
          type: "layoutstart",
          layout: e
        }), e.animations = [];
        var u = function(O, x, I) {
          var C = {
            x: x.x1 + x.w / 2,
            y: x.y1 + x.h / 2
          }, B = {
            // scale from center of bounding box (not necessarily 0,0)
            x: (I.x - C.x) * O,
            y: (I.y - C.y) * O
          };
          return {
            x: C.x + B.x,
            y: C.y + B.y
          };
        }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
          if (!f)
            return null;
          for (var O = Ut(), x = 0; x < n.length; x++) {
            var I = n[x], C = l(I, x);
            Sf(O, C.x, C.y);
          }
          return O;
        }, c = h(), v = nt(function(M, O) {
          var x = l(M, O);
          if (f) {
            var I = Math.abs(r.spacingFactor);
            x = u(I, c, x);
          }
          return r.transform != null && (x = r.transform(M, x)), x;
        }, o);
        if (r.animate) {
          for (var d = 0; d < n.length; d++) {
            var g = n[d], y = v(g, d), p = r.animateFilter == null || r.animateFilter(g, d);
            if (p) {
              var m = g.animation({
                position: y,
                duration: r.animationDuration,
                easing: r.animationEasing
              });
              e.animations.push(m);
            } else
              g.position(y);
          }
          if (r.fit) {
            var b = i.animation({
              fit: {
                boundingBox: s.boundingBoxAt(v),
                padding: r.padding
              },
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(b);
          } else if (r.zoom !== void 0 && r.pan !== void 0) {
            var E = i.animation({
              zoom: r.zoom,
              pan: r.pan,
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(E);
          }
          e.animations.forEach(function(M) {
            return M.play();
          }), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), ia.all(e.animations.map(function(M) {
            return M.promise();
          })).then(function() {
            e.one("layoutstop", r.stop), e.emit({
              type: "layoutstop",
              layout: e
            });
          });
        } else
          n.positions(v), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), e.one("layoutstop", r.stop), e.emit({
            type: "layoutstop",
            layout: e
          });
        return this;
      },
      layout: function(e) {
        var r = this.cy();
        return r.makeLayout(Ue({}, e, {
          eles: this
        }));
      }
    };
    kn.createLayout = kn.makeLayout = kn.layout;
    function ko(t, e, r) {
      var a = r._private, n = a.styleCache = a.styleCache || [], i;
      return (i = n[t]) != null || (i = n[t] = e(r)), i;
    }
    function Pn(t, e) {
      return t = kr(t), function(a) {
        return ko(t, e, a);
      };
    }
    function Bn(t, e) {
      t = kr(t);
      var r = function(n) {
        return e.call(n);
      };
      return function() {
        var n = this[0];
        if (n)
          return ko(t, r, n);
      };
    }
    var At = {
      recalculateRenderedStyle: function(e) {
        var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
        return a && n && a.recalculateRenderedStyle(this, e), this;
      },
      dirtyStyleCache: function() {
        var e = this.cy(), r = function(i) {
          return i._private.styleCache = null;
        };
        if (e.hasCompoundNodes()) {
          var a;
          a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
        } else
          this.forEach(function(n) {
            r(n), n.connectedEdges().forEach(r);
          });
        return this;
      },
      // fully updates (recalculates) the style for the elements
      updateStyle: function(e) {
        var r = this._private.cy;
        if (!r.styleEnabled())
          return this;
        if (r.batching()) {
          var a = r._private.batchStyleEles;
          return a.merge(this), this;
        }
        var n = r.hasCompoundNodes(), i = this;
        e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
        var s = i;
        return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
          return o._private.styleDirty = !0;
        }), this;
      },
      // private: clears dirty flag and recalculates style
      cleanStyle: function() {
        var e = this.cy();
        if (e.styleEnabled())
          for (var r = 0; r < this.length; r++) {
            var a = this[r];
            a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
          }
      },
      // get the internal parsed style object for the specified property
      parsedStyle: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
        if (n.styleEnabled() && a) {
          this.cleanStyle();
          var i = a._private.style[e];
          return i ?? (r ? n.style().getDefaultProperty(e) : null);
        }
      },
      numericStyle: function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r) {
          var a = r.pstyle(e);
          return a.pfValue !== void 0 ? a.pfValue : a.value;
        }
      },
      numericStyleUnits: function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r)
          return r.pstyle(e).units;
      },
      // get the specified css property as a rendered value (i.e. on-screen value)
      // or get the whole rendered style if no property specified (NB doesn't allow setting)
      renderedStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = this[0];
        if (a)
          return r.style().getRenderedStyle(a, e);
      },
      // read the calculated css style of the element or override the style (via a bypass)
      style: function(e, r) {
        var a = this.cy();
        if (!a.styleEnabled())
          return this;
        var n = !1, i = a.style();
        if (S(e)) {
          var s = e;
          i.applyBypass(this, s, n), this.emitAndNotify("style");
        } else if (ee(e))
          if (r === void 0) {
            var o = this[0];
            return o ? i.getStylePropertyValue(o, e) : void 0;
          } else
            i.applyBypass(this, e, r, n), this.emitAndNotify("style");
        else if (e === void 0) {
          var l = this[0];
          return l ? i.getRawStyle(l) : void 0;
        }
        return this;
      },
      removeStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = !1, n = r.style(), i = this;
        if (e === void 0)
          for (var s = 0; s < i.length; s++) {
            var o = i[s];
            n.removeAllBypasses(o, a);
          }
        else {
          e = e.split(/\s+/);
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            n.removeBypasses(u, e, a);
          }
        }
        return this.emitAndNotify("style"), this;
      },
      show: function() {
        return this.css("display", "element"), this;
      },
      hide: function() {
        return this.css("display", "none"), this;
      },
      effectiveOpacity: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return 1;
        var r = e.hasCompoundNodes(), a = this[0];
        if (a) {
          var n = a._private, i = a.pstyle("opacity").value;
          if (!r)
            return i;
          var s = n.data.parent ? a.parents() : null;
          if (s)
            for (var o = 0; o < s.length; o++) {
              var l = s[o], u = l.pstyle("opacity").value;
              i = u * i;
            }
          return i;
        }
      },
      transparent: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0], a = r.cy().hasCompoundNodes();
        if (r)
          return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
      },
      backgrounding: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0];
        return !!r._private.backgrounding;
      }
    };
    function Ni(t, e) {
      var r = t._private, a = r.data.parent ? t.parents() : null;
      if (a)
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          if (!e(i))
            return !1;
        }
      return !0;
    }
    function Mi(t) {
      var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
      return function() {
        var n = this.cy();
        if (!n.styleEnabled())
          return !0;
        var i = this[0], s = n.hasCompoundNodes();
        if (i) {
          var o = i._private;
          if (!e(i))
            return !1;
          if (i.isNode())
            return !s || Ni(i, a);
          var l = o.source, u = o.target;
          return r(l) && (!s || Ni(l, r)) && (l === u || r(u) && (!s || Ni(u, r)));
        }
      };
    }
    var va = Pn("eleTakesUpSpace", function(t) {
      return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
    });
    At.takesUpSpace = Bn("takesUpSpace", Mi({
      ok: va
    }));
    var Dd = Pn("eleInteractive", function(t) {
      return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && va(t);
    }), Sd = Pn("parentInteractive", function(t) {
      return t.pstyle("visibility").value === "visible" && va(t);
    });
    At.interactive = Bn("interactive", Mi({
      ok: Dd,
      parentOk: Sd,
      edgeOkViaNode: va
    })), At.noninteractive = function() {
      var t = this[0];
      if (t)
        return !t.interactive();
    };
    var Ld = Pn("eleVisible", function(t) {
      return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && va(t);
    }), Ad = va;
    At.visible = Bn("visible", Mi({
      ok: Ld,
      edgeOkViaNode: Ad
    })), At.hidden = function() {
      var t = this[0];
      if (t)
        return !t.visible();
    }, At.isBundledBezier = Bn("isBundledBezier", function() {
      return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
    }), At.bypass = At.css = At.style, At.renderedCss = At.renderedStyle, At.removeBypass = At.removeCss = At.removeStyle, At.pstyle = At.parsedStyle;
    var Nr = {};
    function Po(t) {
      return function() {
        var e = arguments, r = [];
        if (e.length === 2) {
          var a = e[0], n = e[1];
          this.on(t.event, a, n);
        } else if (e.length === 1 && H(e[0])) {
          var i = e[0];
          this.on(t.event, i);
        } else if (e.length === 0 || e.length === 1 && te(e[0])) {
          for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
            var l = this[o], u = !t.ableField || l._private[t.ableField], f = l._private[t.field] != t.value;
            if (t.overrideAble) {
              var h = t.overrideAble(l);
              if (h !== void 0 && (u = h, !h))
                return this;
            }
            u && (l._private[t.field] = t.value, f && r.push(l));
          }
          var c = this.spawn(r);
          c.updateStyle(), c.emit(t.event), s && c.emit(s);
        }
        return this;
      };
    }
    function da(t) {
      Nr[t.field] = function() {
        var e = this[0];
        if (e) {
          if (t.overrideField) {
            var r = t.overrideField(e);
            if (r !== void 0)
              return r;
          }
          return e._private[t.field];
        }
      }, Nr[t.on] = Po({
        event: t.on,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !0
      }), Nr[t.off] = Po({
        event: t.off,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !1
      });
    }
    da({
      field: "locked",
      overrideField: function(e) {
        return e.cy().autolock() ? !0 : void 0;
      },
      on: "lock",
      off: "unlock"
    }), da({
      field: "grabbable",
      overrideField: function(e) {
        return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
      },
      on: "grabify",
      off: "ungrabify"
    }), da({
      field: "selected",
      ableField: "selectable",
      overrideAble: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "select",
      off: "unselect"
    }), da({
      field: "selectable",
      overrideField: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "selectify",
      off: "unselectify"
    }), Nr.deselect = Nr.unselect, Nr.grabbed = function() {
      var t = this[0];
      if (t)
        return t._private.grabbed;
    }, da({
      field: "active",
      on: "activate",
      off: "unactivate"
    }), da({
      field: "pannable",
      on: "panify",
      off: "unpanify"
    }), Nr.inactive = function() {
      var t = this[0];
      if (t)
        return !t._private.active;
    };
    var Pt = {}, Bo = function(e) {
      return function(a) {
        for (var n = this, i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          if (o.isNode()) {
            for (var l = !1, u = o.connectedEdges(), f = 0; f < u.length; f++) {
              var h = u[f], c = h.source(), v = h.target();
              if (e.noIncomingEdges && v === o && c !== o || e.noOutgoingEdges && c === o && v !== o) {
                l = !0;
                break;
              }
            }
            l || i.push(o);
          }
        }
        return this.spawn(i, !0).filter(a);
      };
    }, Fo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          if (s.isNode())
            for (var o = s.connectedEdges(), l = 0; l < o.length; l++) {
              var u = o[l], f = u.source(), h = u.target();
              e.outgoing && f === s ? (n.push(u), n.push(h)) : e.incoming && h === s && (n.push(u), n.push(f));
            }
        }
        return this.spawn(n, !0).filter(r);
      };
    }, zo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = {}; ; ) {
          var s = e.outgoing ? a.outgoers() : a.incomers();
          if (s.length === 0)
            break;
          for (var o = !1, l = 0; l < s.length; l++) {
            var u = s[l], f = u.id();
            i[f] || (i[f] = !0, n.push(u), o = !0);
          }
          if (!o)
            break;
          a = s;
        }
        return this.spawn(n, !0).filter(r);
      };
    };
    Pt.clearTraversalCache = function() {
      for (var t = 0; t < this.length; t++)
        this[t]._private.traversalCache = null;
    }, Ue(Pt, {
      // get the root nodes in the DAG
      roots: Bo({
        noIncomingEdges: !0
      }),
      // get the leaf nodes in the DAG
      leaves: Bo({
        noOutgoingEdges: !0
      }),
      // normally called children in graph theory
      // these nodes =edges=> outgoing nodes
      outgoers: Kt(Fo({
        outgoing: !0
      }), "outgoers"),
      // aka DAG descendants
      successors: zo({
        outgoing: !0
      }),
      // normally called parents in graph theory
      // these nodes <=edges= incoming nodes
      incomers: Kt(Fo({
        incoming: !0
      }), "incomers"),
      // aka DAG ancestors
      predecessors: zo({
        incoming: !0
      })
    }), Ue(Pt, {
      neighborhood: Kt(function(t) {
        for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
          for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
            var o = i[s], l = o.source(), u = o.target(), f = n === l ? u : l;
            f.length > 0 && e.push(f[0]), e.push(o[0]);
          }
        return this.spawn(e, !0).filter(t);
      }, "neighborhood"),
      closedNeighborhood: function(e) {
        return this.neighborhood().add(this).filter(e);
      },
      openNeighborhood: function(e) {
        return this.neighborhood(e);
      }
    }), Pt.neighbourhood = Pt.neighborhood, Pt.c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             