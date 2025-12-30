import { l as qr, c as Ji, W as ti, d as ri, P as Ca, Q as $l, Y as pp, U as yp, t as mp, j as bp, at as Ep, au as wp, av as xp } from "./mermaid-9f2aa176.js";
import { a as Tp } from "./createText-03b82060.js";
var Qi = function() {
  var de = function(ee, H, te, S) {
    for (te = te || {}, S = ee.length; S--; te[ee[S]] = H)
      ;
    return te;
  }, Pe = [1, 4], _ = [1, 13], fe = [1, 12], Q = [1, 15], C = [1, 16], T = [1, 20], x = [1, 19], I = [6, 7, 8], z = [1, 26], Y = [1, 24], P = [1, 25], Z = [6, 7, 11], A = [1, 6, 13, 15, 16, 19, 22], $ = [1, 33], U = [1, 34], J = [1, 6, 7, 11, 13, 15, 16, 19, 22], ne = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(H, te, S, V, R, q, ve) {
      var pe = q.length - 1;
      switch (R) {
        case 6:
        case 7:
          return V;
        case 8:
          V.getLogger().trace("Stop NL ");
          break;
        case 9:
          V.getLogger().trace("Stop EOF ");
          break;
        case 11:
          V.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          V.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          V.getLogger().info("Node: ", q[pe].id), V.addNode(q[pe - 1].length, q[pe].id, q[pe].descr, q[pe].type);
          break;
        case 16:
          V.getLogger().trace("Icon: ", q[pe]), V.decorateNode({ icon: q[pe] });
          break;
        case 17:
        case 21:
          V.decorateNode({ class: q[pe] });
          break;
        case 18:
          V.getLogger().trace("SPACELIST");
          break;
        case 19:
          V.getLogger().trace("Node: ", q[pe].id), V.addNode(0, q[pe].id, q[pe].descr, q[pe].type);
          break;
        case 20:
          V.decorateNode({ icon: q[pe] });
          break;
        case 25:
          V.getLogger().trace("node found ..", q[pe - 2]), this.$ = { id: q[pe - 1], descr: q[pe - 1], type: V.getType(q[pe - 2], q[pe]) };
          break;
        case 26:
          this.$ = { id: q[pe], descr: q[pe], type: V.nodeType.DEFAULT };
          break;
        case 27:
          V.getLogger().trace("node found ..", q[pe - 3]), this.$ = { id: q[pe - 3], descr: q[pe - 1], type: V.getType(q[pe - 2], q[pe]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: Pe }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: Pe }, { 6: _, 7: [1, 10], 9: 9, 12: 11, 13: fe, 14: 14, 15: Q, 16: C, 17: 17, 18: 18, 19: T, 22: x }, de(I, [2, 3]), { 1: [2, 2] }, de(I, [2, 4]), de(I, [2, 5]), { 1: [2, 6], 6: _, 12: 21, 13: fe, 14: 14, 15: Q, 16: C, 17: 17, 18: 18, 19: T, 22: x }, { 6: _, 9: 22, 12: 11, 13: fe, 14: 14, 15: Q, 16: C, 17: 17, 18: 18, 19: T, 22: x }, { 6: z, 7: Y, 10: 23, 11: P }, de(Z, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: T, 22: x }), de(Z, [2, 18]), de(Z, [2, 19]), de(Z, [2, 20]), de(Z, [2, 21]), de(Z, [2, 23]), de(Z, [2, 24]), de(Z, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: z, 7: Y, 10: 32, 11: P }, { 1: [2, 7], 6: _, 12: 21, 13: fe, 14: 14, 15: Q, 16: C, 17: 17, 18: 18, 19: T, 22: x }, de(A, [2, 14], { 7: $, 11: U }), de(J, [2, 8]), de(J, [2, 9]), de(J, [2, 10]), de(Z, [2, 15]), de(Z, [2, 16]), de(Z, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, de(A, [2, 13], { 7: $, 11: U }), de(J, [2, 11]), de(J, [2, 12]), { 21: [1, 37] }, de(Z, [2, 25]), de(Z, [2, 27])],
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
      var te = this, S = [0], V = [], R = [null], q = [], ve = this.table, pe = "", Ae = 0, Ne = 0, Ye = 2, at = 1, dt = q.slice.call(arguments, 1), Re = Object.create(this.lexer), Ve = { yy: {} };
      for (var Ze in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Ze) && (Ve.yy[Ze] = this.yy[Ze]);
      Re.setInput(H, Ve.yy), Ve.yy.lexer = Re, Ve.yy.parser = this, typeof Re.yylloc > "u" && (Re.yylloc = {});
      var nt = Re.yylloc;
      q.push(nt);
      var ht = Re.options && Re.options.ranges;
      typeof Ve.yy.parseError == "function" ? this.parseError = Ve.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function it() {
        var jt;
        return jt = V.pop() || Re.lex() || at, typeof jt != "number" && (jt instanceof Array && (V = jt, jt = V.pop()), jt = te.symbols_[jt] || jt), jt;
      }
      for (var tt, yt, Et, Pt, gt = {}, dr, qt, nn, Kr; ; ) {
        if (yt = S[S.length - 1], this.defaultActions[yt] ? Et = this.defaultActions[yt] : ((tt === null || typeof tt > "u") && (tt = it()), Et = ve[yt] && ve[yt][tt]), typeof Et > "u" || !Et.length || !Et[0]) {
          var Da = "";
          Kr = [];
          for (dr in ve[yt])
            this.terminals_[dr] && dr > Ye && Kr.push("'" + this.terminals_[dr] + "'");
          Re.showPosition ? Da = "Parse error on line " + (Ae + 1) + `:
` + Re.showPosition() + `
Expecting ` + Kr.join(", ") + ", got '" + (this.terminals_[tt] || tt) + "'" : Da = "Parse error on line " + (Ae + 1) + ": Unexpected " + (tt == at ? "end of input" : "'" + (this.terminals_[tt] || tt) + "'"), this.parseError(Da, {
            text: Re.match,
            token: this.terminals_[tt] || tt,
            line: Re.yylineno,
            loc: nt,
            expected: Kr
          });
        }
        if (Et[0] instanceof Array && Et.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + yt + ", token: " + tt);
        switch (Et[0]) {
          case 1:
            S.push(tt), R.push(Re.yytext), q.push(Re.yylloc), S.push(Et[1]), tt = null, Ne = Re.yyleng, pe = Re.yytext, Ae = Re.yylineno, nt = Re.yylloc;
            break;
          case 2:
            if (qt = this.productions_[Et[1]][1], gt.$ = R[R.length - qt], gt._$ = {
              first_line: q[q.length - (qt || 1)].first_line,
              last_line: q[q.length - 1].last_line,
              first_column: q[q.length - (qt || 1)].first_column,
              last_column: q[q.length - 1].last_column
            }, ht && (gt._$.range = [
              q[q.length - (qt || 1)].range[0],
              q[q.length - 1].range[1]
            ]), Pt = this.performAction.apply(gt, [
              pe,
              Ne,
              Ae,
              Ve.yy,
              Et[1],
              R,
              q
            ].concat(dt)), typeof Pt < "u")
              return Pt;
            qt && (S = S.slice(0, -1 * qt * 2), R = R.slice(0, -1 * qt), q = q.slice(0, -1 * qt)), S.push(this.productions_[Et[1]][0]), R.push(gt.$), q.push(gt._$), nn = ve[S[S.length - 2]][S[S.length - 1]], S.push(nn);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, le = function() {
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
        var V = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), S.length - 1 && (this.yylineno -= S.length - 1);
        var R = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: S ? (S.length === V.length ? this.yylloc.first_column : 0) + V[V.length - S.length].length - S[0].length : this.yylloc.first_column - te
        }, this.options.ranges && (this.yylloc.range = [R[0], R[0] + this.yyleng - te]), this.yyleng = this.yytext.length, this;
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
        var S, V, R;
        if (this.options.backtrack_lexer && (R = {
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
        }, this.options.ranges && (R.yylloc.range = this.yylloc.range.slice(0))), V = H[0].match(/(?:\r\n?|\n).*/g), V && (this.yylineno += V.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: V ? V[V.length - 1].length - V[V.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + H[0].length
        }, this.yytext += H[0], this.match += H[0], this.matches = H, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(H[0].length), this.matched += H[0], S = this.performAction.call(this, this.yy, this, te, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), S)
          return S;
        if (this._backtrack) {
          for (var q in R)
            this[q] = R[q];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var H, te, S, V;
        this._more || (this.yytext = "", this.match = "");
        for (var R = this._currentRules(), q = 0; q < R.length; q++)
          if (S = this._input.match(this.rules[R[q]]), S && (!te || S[0].length > te[0].length)) {
            if (te = S, V = q, this.options.backtrack_lexer) {
              if (H = this.test_match(S, R[q]), H !== !1)
                return H;
              if (this._backtrack) {
                te = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return te ? (H = this.test_match(te, R[V]), H !== !1 ? H : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: function(te, S, V, R) {
        switch (V) {
          case 0:
            return te.getLogger().trace("Found comment", S.yytext), 6;
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
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            te.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return te.getLogger().trace("description:", S.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), te.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), te.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), te.getLogger().trace("node end ...", S.yytext), "NODE_DEND";
          case 30:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return te.getLogger().trace("Long description:", S.yytext), 20;
          case 36:
            return te.getLogger().trace("Long description:", S.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR2: { rules: [22, 23], inclusive: !1 }, NSTR: { rules: [25, 26], inclusive: !1 }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return ee;
  }();
  ne.lexer = le;
  function j() {
    this.yy = {};
  }
  return j.prototype = ne, ne.Parser = j, new j();
}();
Qi.parser = Qi;
const Cp = Qi;
let or = [], _l = 0, ji = {};
const Dp = () => {
  or = [], _l = 0, ji = {};
}, Sp = function(de) {
  for (let Pe = or.length - 1; Pe >= 0; Pe--)
    if (or[Pe].level < de)
      return or[Pe];
  return null;
}, Lp = () => or.length > 0 ? or[0] : null, Ap = (de, Pe, _, fe) => {
  var I, z;
  qr.info("addNode", de, Pe, _, fe);
  const Q = Ji();
  let C = ((I = Q.mindmap) == null ? void 0 : I.padding) ?? ti.mindmap.padding;
  switch (fe) {
    case St.ROUNDED_RECT:
    case St.RECT:
    case St.HEXAGON:
      C *= 2;
  }
  const T = {
    id: _l++,
    nodeId: ri(Pe, Q),
    level: de,
    descr: ri(_, Q),
    type: fe,
    children: [],
    width: ((z = Q.mindmap) == null ? void 0 : z.maxNodeWidth) ?? ti.mindmap.maxNodeWidth,
    padding: C
  }, x = Sp(de);
  if (x)
    x.children.push(T), or.push(T);
  else if (or.length === 0)
    or.push(T);
  else
    throw new Error(
      'There can be only one root. No parent could be found for ("' + T.descr + '")'
    );
}, St = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Op = (de, Pe) => {
  switch (qr.debug("In get type", de, Pe), de) {
    case "[":
      return St.RECT;
    case "(":
      return Pe === ")" ? St.ROUNDED_RECT : St.CLOUD;
    case "((":
      return St.CIRCLE;
    case ")":
      return St.CLOUD;
    case "))":
      return St.BANG;
    case "{{":
      return St.HEXAGON;
    default:
      return St.DEFAULT;
  }
}, Np = (de, Pe) => {
  ji[de] = Pe;
}, Ip = (de) => {
  if (!de)
    return;
  const Pe = Ji(), _ = or[or.length - 1];
  de.icon && (_.icon = ri(de.icon, Pe)), de.class && (_.class = ri(de.class, Pe));
}, Mp = (de) => {
  switch (de) {
    case St.DEFAULT:
      return "no-border";
    case St.RECT:
      return "rect";
    case St.ROUNDED_RECT:
      return "rounded-rect";
    case St.CIRCLE:
      return "circle";
    case St.CLOUD:
      return "cloud";
    case St.BANG:
      return "bang";
    case St.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, Rp = () => qr, kp = (de) => ji[de], Pp = {
  clear: Dp,
  addNode: Ap,
  getMindmap: Lp,
  nodeType: St,
  getType: Op,
  setElementForId: Np,
  decorateNode: Ip,
  type2Str: Mp,
  getLogger: Rp,
  getElementById: kp
}, Bp = Pp;
var Yl = { exports: {} };
(function(de, Pe) {
  (function(_, fe) {
    de.exports = fe();
  })(Ca, function() {
    function _(t) {
      "@babel/helpers - typeof";
      return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, _(t);
    }
    function fe(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Q(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }
    function C(t, e, r) {
      return e && Q(t.prototype, e), r && Q(t, r), Object.defineProperty(t, "prototype", {
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
    function x(t, e) {
      return I(t) || z(t, e) || Y(t, e) || Z();
    }
    function I(t) {
      if (Array.isArray(t))
        return t;
    }
    function z(t, e) {
      var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (r != null) {
        var a = [], n = !0, i = !1, s, o;
        try {
          for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
            ;
        } catch (u) {
          i = !0, o = u;
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
    function Y(t, e) {
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
    function Z() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var A = typeof window > "u" ? null : window, $ = A ? A.navigator : null;
    A && A.document;
    var U = _(""), J = _({}), ne = _(function() {
    }), le = typeof HTMLElement > "u" ? "undefined" : _(HTMLElement), j = function(e) {
      return e && e.instanceString && H(e.instanceString) ? e.instanceString() : null;
    }, ee = function(e) {
      return e != null && _(e) == U;
    }, H = function(e) {
      return e != null && _(e) === ne;
    }, te = function(e) {
      return !pe(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
    }, S = function(e) {
      return e != null && _(e) === J && !te(e) && e.constructor === Object;
    }, V = function(e) {
      return e != null && _(e) === J;
    }, R = function(e) {
      return e != null && _(e) === _(1) && !isNaN(e);
    }, q = function(e) {
      return R(e) && Math.floor(e) === e;
    }, ve = function(e) {
      if (le !== "undefined")
        return e != null && e instanceof HTMLElement;
    }, pe = function(e) {
      return Ae(e) || Ne(e);
    }, Ae = function(e) {
      return j(e) === "collection" && e._private.single;
    }, Ne = function(e) {
      return j(e) === "collection" && !e._private.single;
    }, Ye = function(e) {
      return j(e) === "core";
    }, at = function(e) {
      return j(e) === "stylesheet";
    }, dt = function(e) {
      return j(e) === "event";
    }, Re = function(e) {
      return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
    }, Ve = function(e) {
      return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
    }, Ze = function(e) {
      return S(e) && R(e.x1) && R(e.x2) && R(e.y1) && R(e.y2);
    }, nt = function(e) {
      return V(e) && H(e.then);
    }, ht = function() {
      return $ && $.userAgent.match(/msie|trident|edge/i);
    }, it = function(e, r) {
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
        var i = this, s = arguments, o, u = r.apply(i, s), l = n.cache;
        return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
      };
      return a.cache = {}, a;
    }, tt = it(function(t) {
      return t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
      });
    }), yt = it(function(t) {
      return t.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
      });
    }), Et = it(function(t, e) {
      return t + e[0].toUpperCase() + e.substring(1);
    }, function(t, e) {
      return t + "$" + e;
    }), Pt = function(e) {
      return Re(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
    }, gt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", dr = "rgb[a]?\\((" + gt + "[%]?)\\s*,\\s*(" + gt + "[%]?)\\s*,\\s*(" + gt + "[%]?)(?:\\s*,\\s*(" + gt + "))?\\)", qt = "rgb[a]?\\((?:" + gt + "[%]?)\\s*,\\s*(?:" + gt + "[%]?)\\s*,\\s*(?:" + gt + "[%]?)(?:\\s*,\\s*(?:" + gt + "))?\\)", nn = "hsl[a]?\\((" + gt + ")\\s*,\\s*(" + gt + "[%])\\s*,\\s*(" + gt + "[%])(?:\\s*,\\s*(" + gt + "))?\\)", Kr = "hsl[a]?\\((?:" + gt + ")\\s*,\\s*(?:" + gt + "[%])\\s*,\\s*(?:" + gt + "[%])(?:\\s*,\\s*(?:" + gt + "))?\\)", Da = "\\#[0-9a-fA-F]{3}", jt = "\\#[0-9a-fA-F]{6}", es = function(e, r) {
      return e < r ? -1 : e > r ? 1 : 0;
    }, Kl = function(e, r) {
      return -1 * es(e, r);
    }, He = Object.assign != null ? Object.assign.bind(Object) : function(t) {
      for (var e = arguments, r = 1; r < e.length; r++) {
        var a = e[r];
        if (a != null)
          for (var n = Object.keys(a), i = 0; i < n.length; i++) {
            var s = n[i];
            t[s] = a[s];
          }
      }
      return t;
    }, Zl = function(e) {
      if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var r = e.length === 4, a, n, i, s = 16;
        return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
      }
    }, Ql = function(e) {
      var r, a, n, i, s, o, u, l;
      function f(c, y, p) {
        return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? c + (y - c) * 6 * p : p < 1 / 2 ? y : p < 2 / 3 ? c + (y - c) * (2 / 3 - p) * 6 : c;
      }
      var h = new RegExp("^" + nn + "$").exec(e);
      if (h) {
        if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
          return;
        if (n === 0)
          o = u = l = Math.round(i * 255);
        else {
          var v = i < 0.5 ? i * (1 + n) : i + n - i * n, d = 2 * i - v;
          o = Math.round(255 * f(d, v, a + 1 / 3)), u = Math.round(255 * f(d, v, a)), l = Math.round(255 * f(d, v, a - 1 / 3));
        }
        r = [o, u, l, s];
      }
      return r;
    }, Jl = function(e) {
      var r, a = new RegExp("^" + dr + "$").exec(e);
      if (a) {
        r = [];
        for (var n = [], i = 1; i <= 3; i++) {
          var s = a[i];
          if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
            return;
          r.push(Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], u = n[1] && n[2] && n[3];
        if (o && !u)
          return;
        var l = a[4];
        if (l !== void 0) {
          if (l = parseFloat(l), l < 0 || l > 1)
            return;
          r.push(l);
        }
      }
      return r;
    }, jl = function(e) {
      return tu[e.toLowerCase()];
    }, eu = function(e) {
      return (te(e) ? e : null) || jl(e) || Zl(e) || Jl(e) || Ql(e);
    }, tu = {
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
    function ru(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    var kr = ru, Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ca < "u" ? Ca : typeof self < "u" ? self : {};
    function au(t, e) {
      return e = { exports: {} }, t(e, e.exports), e.exports;
    }
    var nu = typeof Sa == "object" && Sa && Sa.Object === Object && Sa, iu = nu, su = typeof self == "object" && self && self.Object === Object && self, ou = iu || su || Function("return this")(), sn = ou, lu = function() {
      return sn.Date.now();
    }, ai = lu, uu = /\s/;
    function fu(t) {
      for (var e = t.length; e-- && uu.test(t.charAt(e)); )
        ;
      return e;
    }
    var hu = fu, vu = /^\s+/;
    function cu(t) {
      return t && t.slice(0, hu(t) + 1).replace(vu, "");
    }
    var du = cu, gu = sn.Symbol, Zr = gu, as = Object.prototype, pu = as.hasOwnProperty, yu = as.toString, La = Zr ? Zr.toStringTag : void 0;
    function mu(t) {
      var e = pu.call(t, La), r = t[La];
      try {
        t[La] = void 0;
        var a = !0;
      } catch {
      }
      var n = yu.call(t);
      return a && (e ? t[La] = r : delete t[La]), n;
    }
    var bu = mu, Eu = Object.prototype, wu = Eu.toString;
    function xu(t) {
      return wu.call(t);
    }
    var Tu = xu, Cu = "[object Null]", Du = "[object Undefined]", ns = Zr ? Zr.toStringTag : void 0;
    function Su(t) {
      return t == null ? t === void 0 ? Du : Cu : ns && ns in Object(t) ? bu(t) : Tu(t);
    }
    var is = Su;
    function Lu(t) {
      return t != null && typeof t == "object";
    }
    var Au = Lu, Ou = "[object Symbol]";
    function Nu(t) {
      return typeof t == "symbol" || Au(t) && is(t) == Ou;
    }
    var Aa = Nu, ss = 0 / 0, Iu = /^[-+]0x[0-9a-f]+$/i, Mu = /^0b[01]+$/i, Ru = /^0o[0-7]+$/i, ku = parseInt;
    function Pu(t) {
      if (typeof t == "number")
        return t;
      if (Aa(t))
        return ss;
      if (kr(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = kr(e) ? e + "" : e;
      }
      if (typeof t != "string")
        return t === 0 ? t : +t;
      t = du(t);
      var r = Mu.test(t);
      return r || Ru.test(t) ? ku(t.slice(2), r ? 2 : 8) : Iu.test(t) ? ss : +t;
    }
    var os = Pu, Bu = "Expected a function", Fu = Math.max, Gu = Math.min;
    function zu(t, e, r) {
      var a, n, i, s, o, u, l = 0, f = !1, h = !1, v = !0;
      if (typeof t != "function")
        throw new TypeError(Bu);
      e = os(e) || 0, kr(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? Fu(os(r.maxWait) || 0, e) : i, v = "trailing" in r ? !!r.trailing : v);
      function d(L) {
        var w = a, k = n;
        return a = n = void 0, l = L, s = t.apply(k, w), s;
      }
      function c(L) {
        return l = L, o = setTimeout(g, e), f ? d(L) : s;
      }
      function y(L) {
        var w = L - u, k = L - l, D = e - w;
        return h ? Gu(D, i - k) : D;
      }
      function p(L) {
        var w = L - u, k = L - l;
        return u === void 0 || w >= e || w < 0 || h && k >= i;
      }
      function g() {
        var L = ai();
        if (p(L))
          return m(L);
        o = setTimeout(g, y(L));
      }
      function m(L) {
        return o = void 0, v && a ? d(L) : (a = n = void 0, s);
      }
      function b() {
        o !== void 0 && clearTimeout(o), l = 0, a = u = n = o = void 0;
      }
      function E() {
        return o === void 0 ? s : m(ai());
      }
      function M() {
        var L = ai(), w = p(L);
        if (a = arguments, n = this, u = L, w) {
          if (o === void 0)
            return c(u);
          if (h)
            return clearTimeout(o), o = setTimeout(g, e), d(u);
        }
        return o === void 0 && (o = setTimeout(g, e)), s;
      }
      return M.cancel = b, M.flush = E, M;
    }
    var on = zu, ni = A ? A.performance : null, ls = ni && ni.now ? function() {
      return ni.now();
    } : function() {
      return Date.now();
    }, Vu = function() {
      if (A) {
        if (A.requestAnimationFrame)
          return function(t) {
            A.requestAnimationFrame(t);
          };
        if (A.mozRequestAnimationFrame)
          return function(t) {
            A.mozRequestAnimationFrame(t);
          };
        if (A.webkitRequestAnimationFrame)
          return function(t) {
            A.webkitRequestAnimationFrame(t);
          };
        if (A.msRequestAnimationFrame)
          return function(t) {
            A.msRequestAnimationFrame(t);
          };
      }
      return function(t) {
        t && setTimeout(function() {
          t(ls());
        }, 1e3 / 60);
      };
    }(), ln = function(e) {
      return Vu(e);
    }, gr = ls, Qr = 9261, us = 65599, Oa = 5381, fs = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr, a = r, n; n = e.next(), !n.done; )
        a = a * us + n.value | 0;
      return a;
    }, Na = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr;
      return r * us + e | 0;
    }, Ia = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oa;
      return (r << 5) + r + e | 0;
    }, Uu = function(e, r) {
      return e * 2097152 + r;
    }, wr = function(e) {
      return e[0] * 2097152 + e[1];
    }, un = function(e, r) {
      return [Na(e[0], r[0]), Ia(e[1], r[1])];
    }, $u = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e[n++] : a.done = !0, a;
        }
      };
      return fs(s, r);
    }, Pr = function(e, r) {
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
      return _u(arguments);
    }, _u = function(e) {
      for (var r, a = 0; a < e.length; a++) {
        var n = e[a];
        a === 0 ? r = Pr(n) : r = Pr(n, r);
      }
      return r;
    }, vs = !0, Yu = console.warn != null, Hu = console.trace != null, ii = Number.MAX_SAFE_INTEGER || 9007199254740991, cs = function() {
      return !0;
    }, fn = function() {
      return !1;
    }, ds = function() {
      return 0;
    }, si = function() {
    }, xt = function(e) {
      throw new Error(e);
    }, gs = function(e) {
      if (e !== void 0)
        vs = !!e;
      else
        return vs;
    }, vt = function(e) {
      gs() && (Yu ? console.warn(e) : (console.log(e), Hu && console.trace()));
    }, Xu = function(e) {
      return He({}, e);
    }, lr = function(e) {
      return e == null ? e : te(e) ? e.slice() : S(e) ? Xu(e) : e;
    }, Wu = function(e) {
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
    }, qu = {}, ys = function() {
      return qu;
    }, At = function(e) {
      var r = Object.keys(e);
      return function(a) {
        for (var n = {}, i = 0; i < r.length; i++) {
          var s = r[i], o = a == null ? void 0 : a[s];
          n[s] = o === void 0 ? e[s] : o;
        }
        return n;
      };
    }, xr = function(e, r, a) {
      for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
        ;
    }, oi = function(e) {
      e.splice(0, e.length);
    }, Ku = function(e, r) {
      for (var a = 0; a < r.length; a++) {
        var n = r[a];
        e.push(n);
      }
    }, er = function(e, r, a) {
      return a && (r = Et(a, r)), e[r];
    }, Tr = function(e, r, a, n) {
      a && (r = Et(a, r)), e[r] = n;
    }, Zu = /* @__PURE__ */ function() {
      function t() {
        fe(this, t), this._obj = {};
      }
      return C(t, [{
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
    }(), ur = typeof Map < "u" ? Map : Zu, Qu = "undefined", Ju = /* @__PURE__ */ function() {
      function t(e) {
        if (fe(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
          var r;
          e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
          for (var a = 0; a < r.length; a++)
            this.add(r[a]);
        }
      }
      return C(t, [{
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
    }(), Jr = (typeof Set > "u" ? "undefined" : _(Set)) !== Qu ? Set : Ju, hn = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0 || r === void 0 || !Ye(e)) {
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
        var s = r.renderedPosition, o = e.pan(), u = e.zoom();
        i.position = {
          x: (s.x - o.x) / u,
          y: (s.y - o.y) / u
        };
      }
      var l = [];
      te(r.classes) ? l = r.classes : ee(r.classes) && (l = r.classes.split(/\s+/));
      for (var f = 0, h = l.length; f < h; f++) {
        var v = l[f];
        !v || v === "" || i.classes.add(v);
      }
      this.createEmitter();
      var d = r.style || r.css;
      d && (vt("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(d)), (a === void 0 || a) && this.restore();
    }, ms = function(e) {
      return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
      }, function(a, n, i) {
        var s;
        S(a) && !pe(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !H(n) ? n : i, n = H(n) ? n : function() {
        };
        for (var o = this._private.cy, u = a = ee(a) ? this.filter(a) : a, l = [], f = [], h = {}, v = {}, d = {}, c = 0, y, p = this.byGroup(), g = p.nodes, m = p.edges, b = 0; b < u.length; b++) {
          var E = u[b], M = E.id();
          E.isNode() && (l.unshift(E), e.bfs && (d[M] = !0, f.push(E)), v[M] = 0);
        }
        for (var L = function() {
          var X = e.bfs ? l.shift() : l.pop(), B = X.id();
          if (e.dfs) {
            if (d[B])
              return "continue";
            d[B] = !0, f.push(X);
          }
          var re = v[B], K = h[B], W = K != null ? K.source() : null, ae = K != null ? K.target() : null, ue = K == null ? void 0 : X.same(W) ? ae[0] : W[0], me = void 0;
          if (me = n(X, K, ue, c++, re), me === !0)
            return y = X, "break";
          if (me === !1)
            return "break";
          for (var ie = X.connectedEdges().filter(function(De) {
            return (!i || De.source().same(X)) && m.has(De);
          }), ge = 0; ge < ie.length; ge++) {
            var Ee = ie[ge], Ce = Ee.connectedNodes().filter(function(De) {
              return !De.same(X) && g.has(De);
            }), we = Ce.id();
            Ce.length !== 0 && !d[we] && (Ce = Ce[0], l.push(Ce), e.bfs && (d[we] = !0, f.push(Ce)), h[we] = Ee, v[we] = v[B] + 1);
          }
        }; l.length !== 0; ) {
          var w = L();
          if (w !== "continue" && w === "break")
            break;
        }
        for (var k = o.collection(), D = 0; D < f.length; D++) {
          var F = f[D], G = h[F.id()];
          G != null && k.push(G), k.push(F);
        }
        return {
          path: o.collection(k),
          found: o.collection(y)
        };
      };
    }, Ma = {
      breadthFirstSearch: ms({
        bfs: !0
      }),
      depthFirstSearch: ms({
        dfs: !0
      })
    };
    Ma.bfs = Ma.breadthFirstSearch, Ma.dfs = Ma.depthFirstSearch;
    var ju = au(function(t, e) {
      (function() {
        var r, a, n, i, s, o, u, l, f, h, v, d, c, y, p;
        n = Math.floor, h = Math.min, a = function(g, m) {
          return g < m ? -1 : g > m ? 1 : 0;
        }, f = function(g, m, b, E, M) {
          var L;
          if (b == null && (b = 0), M == null && (M = a), b < 0)
            throw new Error("lo must be non-negative");
          for (E == null && (E = g.length); b < E; )
            L = n((b + E) / 2), M(m, g[L]) < 0 ? E = L : b = L + 1;
          return [].splice.apply(g, [b, b - b].concat(m)), m;
        }, o = function(g, m, b) {
          return b == null && (b = a), g.push(m), y(g, 0, g.length - 1, b);
        }, s = function(g, m) {
          var b, E;
          return m == null && (m = a), b = g.pop(), g.length ? (E = g[0], g[0] = b, p(g, 0, m)) : E = b, E;
        }, l = function(g, m, b) {
          var E;
          return b == null && (b = a), E = g[0], g[0] = m, p(g, 0, b), E;
        }, u = function(g, m, b) {
          var E;
          return b == null && (b = a), g.length && b(g[0], m) < 0 && (E = [g[0], m], m = E[0], g[0] = E[1], p(g, 0, b)), m;
        }, i = function(g, m) {
          var b, E, M, L, w, k;
          for (m == null && (m = a), L = (function() {
            k = [];
            for (var D = 0, F = n(g.length / 2); 0 <= F ? D < F : D > F; 0 <= F ? D++ : D--)
              k.push(D);
            return k;
          }).apply(this).reverse(), w = [], E = 0, M = L.length; E < M; E++)
            b = L[E], w.push(p(g, b, m));
          return w;
        }, c = function(g, m, b) {
          var E;
          if (b == null && (b = a), E = g.indexOf(m), E !== -1)
            return y(g, 0, E, b), p(g, E, b);
        }, v = function(g, m, b) {
          var E, M, L, w, k;
          if (b == null && (b = a), M = g.slice(0, m), !M.length)
            return M;
          for (i(M, b), k = g.slice(m), L = 0, w = k.length; L < w; L++)
            E = k[L], u(M, E, b);
          return M.sort(b).reverse();
        }, d = function(g, m, b) {
          var E, M, L, w, k, D, F, G, N;
          if (b == null && (b = a), m * 10 <= g.length) {
            if (L = g.slice(0, m).sort(b), !L.length)
              return L;
            for (M = L[L.length - 1], F = g.slice(m), w = 0, D = F.length; w < D; w++)
              E = F[w], b(E, M) < 0 && (f(L, E, 0, null, b), L.pop(), M = L[L.length - 1]);
            return L;
          }
          for (i(g, b), N = [], k = 0, G = h(m, g.length); 0 <= G ? k < G : k > G; 0 <= G ? ++k : --k)
            N.push(s(g, b));
          return N;
        }, y = function(g, m, b, E) {
          var M, L, w;
          for (E == null && (E = a), M = g[b]; b > m; ) {
            if (w = b - 1 >> 1, L = g[w], E(M, L) < 0) {
              g[b] = L, b = w;
              continue;
            }
            break;
          }
          return g[b] = M;
        }, p = function(g, m, b) {
          var E, M, L, w, k;
          for (b == null && (b = a), M = g.length, k = m, L = g[m], E = 2 * m + 1; E < M; )
            w = E + 1, w < M && !(b(g[E], g[w]) < 0) && (E = w), g[m] = g[E], m = E, E = 2 * m + 1;
          return g[m] = L, y(g, k, m, b);
        }, r = function() {
          g.push = o, g.pop = s, g.replace = l, g.pushpop = u, g.heapify = i, g.updateItem = c, g.nlargest = v, g.nsmallest = d;
          function g(m) {
            this.cmp = m ?? a, this.nodes = [];
          }
          return g.prototype.push = function(m) {
            return o(this.nodes, m, this.cmp);
          }, g.prototype.pop = function() {
            return s(this.nodes, this.cmp);
          }, g.prototype.peek = function() {
            return this.nodes[0];
          }, g.prototype.contains = function(m) {
            return this.nodes.indexOf(m) !== -1;
          }, g.prototype.replace = function(m) {
            return l(this.nodes, m, this.cmp);
          }, g.prototype.pushpop = function(m) {
            return u(this.nodes, m, this.cmp);
          }, g.prototype.heapify = function() {
            return i(this.nodes, this.cmp);
          }, g.prototype.updateItem = function(m) {
            return c(this.nodes, m, this.cmp);
          }, g.prototype.clear = function() {
            return this.nodes = [];
          }, g.prototype.empty = function() {
            return this.nodes.length === 0;
          }, g.prototype.size = function() {
            return this.nodes.length;
          }, g.prototype.clone = function() {
            var m;
            return m = new g(), m.nodes = this.nodes.slice(0), m;
          }, g.prototype.toArray = function() {
            return this.nodes.slice(0);
          }, g.prototype.insert = g.prototype.push, g.prototype.top = g.prototype.peek, g.prototype.front = g.prototype.peek, g.prototype.has = g.prototype.contains, g.prototype.copy = g.prototype.clone, g;
        }(), function(g, m) {
          return t.exports = m();
        }(this, function() {
          return r;
        });
      }).call(Sa);
    }), Ra = ju, ef = At({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), tf = {
      dijkstra: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            weight: r[1],
            directed: r[2]
          };
        }
        var a = ef(e), n = a.root, i = a.weight, s = a.directed, o = this, u = i, l = ee(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, v = {}, d = this.byGroup(), c = d.nodes, y = d.edges;
        y.unmergeBy(function(re) {
          return re.isLoop();
        });
        for (var p = function(K) {
          return f[K.id()];
        }, g = function(K, W) {
          f[K.id()] = W, m.updateItem(K);
        }, m = new Ra(function(re, K) {
          return p(re) - p(K);
        }), b = 0; b < c.length; b++) {
          var E = c[b];
          f[E.id()] = E.same(l) ? 0 : 1 / 0, m.push(E);
        }
        for (var M = function(K, W) {
          for (var ae = (s ? K.edgesTo(W) : K.edgesWith(W)).intersect(y), ue = 1 / 0, me, ie = 0; ie < ae.length; ie++) {
            var ge = ae[ie], Ee = u(ge);
            (Ee < ue || !me) && (ue = Ee, me = ge);
          }
          return {
            edge: me,
            dist: ue
          };
        }; m.size() > 0; ) {
          var L = m.pop(), w = p(L), k = L.id();
          if (v[k] = w, w !== 1 / 0)
            for (var D = L.neighborhood().intersect(c), F = 0; F < D.length; F++) {
              var G = D[F], N = G.id(), X = M(L, G), B = w + X.dist;
              B < p(G) && (g(G, B), h[N] = {
                node: L,
                edge: X.edge
              });
            }
        }
        return {
          distanceTo: function(K) {
            var W = ee(K) ? c.filter(K)[0] : K[0];
            return v[W.id()];
          },
          pathTo: function(K) {
            var W = ee(K) ? c.filter(K)[0] : K[0], ae = [], ue = W, me = ue.id();
            if (W.length > 0)
              for (ae.unshift(W); h[me]; ) {
                var ie = h[me];
                ae.unshift(ie.edge), ae.unshift(ie.node), ue = ie.node, me = ue.id();
              }
            return o.spawn(ae);
          }
        };
      }
    }, rf = {
      // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
      // implemented from pseudocode from wikipedia
      kruskal: function(e) {
        e = e || function(b) {
          return 1;
        };
        for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, u = function(E) {
          for (var M = 0; M < s.length; M++) {
            var L = s[M];
            if (L.has(E))
              return M;
          }
        }, l = 0; l < i; l++)
          s[l] = this.spawn(a[l]);
        for (var f = n.sort(function(b, E) {
          return e(b) - e(E);
        }), h = 0; h < f.length; h++) {
          var v = f[h], d = v.source()[0], c = v.target()[0], y = u(d), p = u(c), g = s[y], m = s[p];
          y !== p && (o.merge(v), g.merge(m), s.splice(p, 1));
        }
        return o;
      }
    }, af = At({
      root: null,
      goal: null,
      weight: function(e) {
        return 1;
      },
      heuristic: function(e) {
        return 0;
      },
      directed: !1
    }), nf = {
      // Implemented from pseudocode from wikipedia
      aStar: function(e) {
        var r = this.cy(), a = af(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, u = a.weight;
        n = r.collection(n)[0], i = r.collection(i)[0];
        var l = n.id(), f = i.id(), h = {}, v = {}, d = {}, c = new Ra(function(me, ie) {
          return v[me.id()] - v[ie.id()];
        }), y = new Jr(), p = {}, g = {}, m = function(ie, ge) {
          c.push(ie), y.add(ge);
        }, b, E, M = function() {
          b = c.pop(), E = b.id(), y.delete(E);
        }, L = function(ie) {
          return y.has(ie);
        };
        m(n, l), h[l] = 0, v[l] = s(n);
        for (var w = 0; c.size() > 0; ) {
          if (M(), w++, E === f) {
            for (var k = [], D = i, F = f, G = g[F]; k.unshift(D), G != null && k.unshift(G), D = p[F], D != null; )
              F = D.id(), G = g[F];
            return {
              found: !0,
              distance: h[E],
              path: this.spawn(k),
              steps: w
            };
          }
          d[E] = !0;
          for (var N = b._private.edges, X = 0; X < N.length; X++) {
            var B = N[X];
            if (this.hasElementWithId(B.id()) && !(o && B.data("source") !== E)) {
              var re = B.source(), K = B.target(), W = re.id() !== E ? re : K, ae = W.id();
              if (this.hasElementWithId(ae) && !d[ae]) {
                var ue = h[E] + u(B);
                if (!L(ae)) {
                  h[ae] = ue, v[ae] = ue + s(W), m(W, ae), p[ae] = b, g[ae] = B;
                  continue;
                }
                ue < h[ae] && (h[ae] = ue, v[ae] = ue + s(W), p[ae] = b, g[ae] = B);
              }
            }
          }
        }
        return {
          found: !1,
          distance: void 0,
          path: void 0,
          steps: w
        };
      }
    }, sf = At({
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), of = {
      // Implemented from pseudocode from wikipedia
      floydWarshall: function(e) {
        for (var r = this.cy(), a = sf(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), u = o.nodes, l = o.edges, f = u.length, h = f * f, v = function(Ee) {
          return u.indexOf(Ee);
        }, d = function(Ee) {
          return u[Ee];
        }, c = new Array(h), y = 0; y < h; y++) {
          var p = y % f, g = (y - p) / f;
          g === p ? c[y] = 0 : c[y] = 1 / 0;
        }
        for (var m = new Array(h), b = new Array(h), E = 0; E < l.length; E++) {
          var M = l[E], L = M.source()[0], w = M.target()[0];
          if (L !== w) {
            var k = v(L), D = v(w), F = k * f + D, G = s(M);
            if (c[F] > G && (c[F] = G, m[F] = D, b[F] = M), !i) {
              var N = D * f + k;
              !i && c[N] > G && (c[N] = G, m[N] = k, b[N] = M);
            }
          }
        }
        for (var X = 0; X < f; X++)
          for (var B = 0; B < f; B++)
            for (var re = B * f + X, K = 0; K < f; K++) {
              var W = B * f + K, ae = X * f + K;
              c[re] + c[ae] < c[W] && (c[W] = c[re] + c[ae], m[W] = m[re]);
            }
        var ue = function(Ee) {
          return (ee(Ee) ? r.filter(Ee) : Ee)[0];
        }, me = function(Ee) {
          return v(ue(Ee));
        }, ie = {
          distance: function(Ee, Ce) {
            var we = me(Ee), De = me(Ce);
            return c[we * f + De];
          },
          path: function(Ee, Ce) {
            var we = me(Ee), De = me(Ce), se = d(we);
            if (we === De)
              return se.collection();
            if (m[we * f + De] == null)
              return r.collection();
            var xe = r.collection(), Le = we, Se;
            for (xe.merge(se); we !== De; )
              Le = we, we = m[we * f + De], Se = b[Le * f + we], xe.merge(Se), xe.merge(d(we));
            return xe;
          }
        };
        return ie;
      }
      // floydWarshall
    }, lf = At({
      weight: function(e) {
        return 1;
      },
      directed: !1,
      root: null
    }), uf = {
      // Implemented from pseudocode from wikipedia
      bellmanFord: function(e) {
        var r = this, a = lf(e), n = a.weight, i = a.directed, s = a.root, o = n, u = this, l = this.cy(), f = this.byGroup(), h = f.edges, v = f.nodes, d = v.length, c = new ur(), y = !1, p = [];
        s = l.collection(s)[0], h.unmergeBy(function(ze) {
          return ze.isLoop();
        });
        for (var g = h.length, m = function(Be) {
          var $e = c.get(Be.id());
          return $e || ($e = {}, c.set(Be.id(), $e)), $e;
        }, b = function(Be) {
          return (ee(Be) ? l.$(Be) : Be)[0];
        }, E = function(Be) {
          return m(b(Be)).dist;
        }, M = function(Be) {
          for (var $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, rt = b(Be), je = [], We = rt; ; ) {
            if (We == null)
              return r.spawn();
            var et = m(We), he = et.edge, O = et.pred;
            if (je.unshift(We[0]), We.same($e) && je.length > 0)
              break;
            he != null && je.unshift(he), We = O;
          }
          return u.spawn(je);
        }, L = 0; L < d; L++) {
          var w = v[L], k = m(w);
          w.same(s) ? k.dist = 0 : k.dist = 1 / 0, k.pred = null, k.edge = null;
        }
        for (var D = !1, F = function(Be, $e, rt, je, We, et) {
          var he = je.dist + et;
          he < We.dist && !rt.same(je.edge) && (We.dist = he, We.pred = Be, We.edge = rt, D = !0);
        }, G = 1; G < d; G++) {
          D = !1;
          for (var N = 0; N < g; N++) {
            var X = h[N], B = X.source(), re = X.target(), K = o(X), W = m(B), ae = m(re);
            F(B, re, X, W, ae, K), i || F(re, B, X, ae, W, K);
          }
          if (!D)
            break;
        }
        if (D)
          for (var ue = [], me = 0; me < g; me++) {
            var ie = h[me], ge = ie.source(), Ee = ie.target(), Ce = o(ie), we = m(ge).dist, De = m(Ee).dist;
            if (we + Ce < De || !i && De + Ce < we)
              if (y || (vt("Graph contains a negative weight cycle for Bellman-Ford"), y = !0), e.findNegativeWeightCycles !== !1) {
                var se = [];
                we + Ce < De && se.push(ge), !i && De + Ce < we && se.push(Ee);
                for (var xe = se.length, Le = 0; Le < xe; Le++) {
                  var Se = se[Le], Oe = [Se];
                  Oe.push(m(Se).edge);
                  for (var Fe = m(Se).pred; Oe.indexOf(Fe) === -1; )
                    Oe.push(Fe), Oe.push(m(Fe).edge), Fe = m(Fe).pred;
                  Oe = Oe.slice(Oe.indexOf(Fe));
                  for (var Xe = Oe[0].id(), Ie = 0, Me = 2; Me < Oe.length; Me += 2)
                    Oe[Me].id() < Xe && (Xe = Oe[Me].id(), Ie = Me);
                  Oe = Oe.slice(Ie).concat(Oe.slice(0, Ie)), Oe.push(Oe[0]);
                  var Ue = Oe.map(function(ze) {
                    return ze.id();
                  }).join(",");
                  ue.indexOf(Ue) === -1 && (p.push(u.spawn(Oe)), ue.push(Ue));
                }
              } else
                break;
          }
        return {
          distanceTo: E,
          pathTo: M,
          hasNegativeWeightCycle: y,
          negativeWeightCycles: p
        };
      }
      // bellmanFord
    }, ff = Math.sqrt(2), hf = function(e, r, a) {
      a.length === 0 && xt("Karger-Stein must be run on a connected (sub)graph");
      for (var n = a[e], i = n[1], s = n[2], o = r[i], u = r[s], l = a, f = l.length - 1; f >= 0; f--) {
        var h = l[f], v = h[1], d = h[2];
        (r[v] === o && r[d] === u || r[v] === u && r[d] === o) && l.splice(f, 1);
      }
      for (var c = 0; c < l.length; c++) {
        var y = l[c];
        y[1] === u ? (l[c] = y.slice(), l[c][1] = o) : y[2] === u && (l[c] = y.slice(), l[c][2] = o);
      }
      for (var p = 0; p < r.length; p++)
        r[p] === u && (r[p] = o);
      return l;
    }, li = function(e, r, a, n) {
      for (; a > n; ) {
        var i = Math.floor(Math.random() * r.length);
        r = hf(i, e, r), a--;
      }
      return r;
    }, vf = {
      // Computes the minimum cut of an undirected graph
      // Returns the correct answer with high probability
      kargerStein: function() {
        var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
        n.unmergeBy(function(ae) {
          return ae.isLoop();
        });
        var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / ff);
        if (i < 2) {
          xt("At least 2 nodes are required for Karger-Stein algorithm");
          return;
        }
        for (var l = [], f = 0; f < s; f++) {
          var h = n[f];
          l.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
        }
        for (var v = 1 / 0, d = [], c = new Array(i), y = new Array(i), p = new Array(i), g = function(ue, me) {
          for (var ie = 0; ie < i; ie++)
            me[ie] = ue[ie];
        }, m = 0; m <= o; m++) {
          for (var b = 0; b < i; b++)
            y[b] = b;
          var E = li(y, l.slice(), i, u), M = E.slice();
          g(y, p);
          var L = li(y, E, u, 2), w = li(p, M, u, 2);
          L.length <= w.length && L.length < v ? (v = L.length, d = L, g(y, c)) : w.length <= L.length && w.length < v && (v = w.length, d = w, g(p, c));
        }
        for (var k = this.spawn(d.map(function(ae) {
          return n[ae[0]];
        })), D = this.spawn(), F = this.spawn(), G = c[0], N = 0; N < c.length; N++) {
          var X = c[N], B = a[N];
          X === G ? D.merge(B) : F.merge(B);
        }
        var re = function(ue) {
          var me = e.spawn();
          return ue.forEach(function(ie) {
            me.merge(ie), ie.connectedEdges().forEach(function(ge) {
              e.contains(ge) && !k.contains(ge) && me.merge(ge);
            });
          }), me;
        }, K = [re(D), re(F)], W = {
          cut: k,
          components: K,
          // n.b. partitions are included to be compatible with the old api spec
          // (could be removed in a future major version)
          partition1: D,
          partition2: F
        };
        return W;
      }
    }, cf = function(e) {
      return {
        x: e.x,
        y: e.y
      };
    }, vn = function(e, r, a) {
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
    }, df = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.min(s, n));
      }
      return n;
    }, gf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.max(s, n));
      }
      return n;
    }, pf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
        var o = e[s];
        isFinite(o) && (n += o, i++);
      }
      return n / i;
    }, yf = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
      n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
      for (var o = 0, u = e.length - 1; u >= 0; u--) {
        var l = e[u];
        s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
      }
      i && e.sort(function(v, d) {
        return v - d;
      });
      var f = e.length, h = Math.floor(f / 2);
      return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
    }, mf = function(e) {
      return Math.PI * e / 180;
    }, cn = function(e, r) {
      return Math.atan2(r, e) - Math.PI / 2;
    }, ui = Math.log2 || function(t) {
      return Math.log(t) / Math.log(2);
    }, Es = function(e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0;
    }, Br = function(e, r) {
      return Math.sqrt(Fr(e, r));
    }, Fr = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return a * a + n * n;
    }, bf = function(e) {
      for (var r = e.length, a = 0, n = 0; n < r; n++)
        a += e[n];
      for (var i = 0; i < r; i++)
        e[i] = e[i] / a;
      return e;
    }, Lt = function(e, r, a, n) {
      return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
    }, ea = function(e, r, a, n) {
      return {
        x: Lt(e.x, r.x, a.x, n),
        y: Lt(e.y, r.y, a.y, n)
      };
    }, Ef = function(e, r, a, n) {
      var i = {
        x: r.x - e.x,
        y: r.y - e.y
      }, s = Br(e, r), o = {
        x: i.x / s,
        y: i.y / s
      };
      return a = a ?? 0, n = n ?? a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
      };
    }, ka = function(e, r, a) {
      return Math.max(e, Math.min(a, r));
    }, Yt = function(e) {
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
    }, wf = function(e) {
      return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
      };
    }, xf = function(e) {
      e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
    }, Tf = function(e, r, a) {
      return {
        x1: e.x1 + r,
        x2: e.x2 + r,
        y1: e.y1 + a,
        y2: e.y2 + a,
        w: e.w,
        h: e.h
      };
    }, ws = function(e, r) {
      e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
    }, Cf = function(e, r, a) {
      e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
    }, dn = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, gn = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
      if (r.length === 1)
        a = n = i = s = r[0];
      else if (r.length === 2)
        a = i = r[0], s = n = r[1];
      else if (r.length === 4) {
        var o = x(r, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
      }
      return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, xs = function(e, r) {
      e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
    }, fi = function(e, r) {
      return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
    }, ta = function(e, r, a) {
      return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
    }, Df = function(e, r) {
      return ta(e, r.x, r.y);
    }, Ts = function(e, r) {
      return ta(e, r.x1, r.y1) && ta(e, r.x2, r.y2);
    }, Cs = function(e, r, a, n, i, s, o) {
      var u = Fa(i, s), l = i / 2, f = s / 2, h;
      {
        var v = a - l + u - o, d = n - f - o, c = a + l - u + o, y = d;
        if (h = Cr(e, r, a, n, v, d, c, y, !1), h.length > 0)
          return h;
      }
      {
        var p = a + l + o, g = n - f + u - o, m = p, b = n + f - u + o;
        if (h = Cr(e, r, a, n, p, g, m, b, !1), h.length > 0)
          return h;
      }
      {
        var E = a - l + u - o, M = n + f + o, L = a + l - u + o, w = M;
        if (h = Cr(e, r, a, n, E, M, L, w, !1), h.length > 0)
          return h;
      }
      {
        var k = a - l - o, D = n - f + u - o, F = k, G = n + f - u + o;
        if (h = Cr(e, r, a, n, k, D, F, G, !1), h.length > 0)
          return h;
      }
      var N;
      {
        var X = a - l + u, B = n - f + u;
        if (N = Pa(e, r, a, n, X, B, u + o), N.length > 0 && N[0] <= X && N[1] <= B)
          return [N[0], N[1]];
      }
      {
        var re = a + l - u, K = n - f + u;
        if (N = Pa(e, r, a, n, re, K, u + o), N.length > 0 && N[0] >= re && N[1] <= K)
          return [N[0], N[1]];
      }
      {
        var W = a + l - u, ae = n + f - u;
        if (N = Pa(e, r, a, n, W, ae, u + o), N.length > 0 && N[0] >= W && N[1] >= ae)
          return [N[0], N[1]];
      }
      {
        var ue = a - l + u, me = n + f - u;
        if (N = Pa(e, r, a, n, ue, me, u + o), N.length > 0 && N[0] <= ue && N[1] >= me)
          return [N[0], N[1]];
      }
      return [];
    }, Sf = function(e, r, a, n, i, s, o) {
      var u = o, l = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), v = Math.max(n, s);
      return l - u <= e && e <= f + u && h - u <= r && r <= v + u;
    }, Lf = function(e, r, a, n, i, s, o, u, l) {
      var f = {
        x1: Math.min(a, o, i) - l,
        x2: Math.max(a, o, i) + l,
        y1: Math.min(n, u, s) - l,
        y2: Math.max(n, u, s) + l
      };
      return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
    }, Af = function(e, r, a, n) {
      a -= n;
      var i = r * r - 4 * e * a;
      if (i < 0)
        return [];
      var s = Math.sqrt(i), o = 2 * e, u = (-r + s) / o, l = (-r - s) / o;
      return [u, l];
    }, Of = function(e, r, a, n, i) {
      var s = 1e-5;
      e === 0 && (e = s), r /= e, a /= e, n /= e;
      var o, u, l, f, h, v, d, c;
      if (u = (3 * a - r * r) / 9, l = -(27 * n) + r * (9 * a - 2 * (r * r)), l /= 54, o = u * u * u + l * l, i[1] = 0, d = r / 3, o > 0) {
        h = l + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), v = l - Math.sqrt(o), v = v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3), i[0] = -d + h + v, d += (h + v) / 2, i[4] = i[2] = -d, d = Math.sqrt(3) * (-v + h) / 2, i[3] = d, i[5] = -d;
        return;
      }
      if (i[5] = i[3] = 0, o === 0) {
        c = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -d + 2 * c, i[4] = i[2] = -(c + d);
        return;
      }
      u = -u, f = u * u * u, f = Math.acos(l / Math.sqrt(f)), c = 2 * Math.sqrt(u), i[0] = -d + c * Math.cos(f / 3), i[2] = -d + c * Math.cos((f + 2 * Math.PI) / 3), i[4] = -d + c * Math.cos((f + 4 * Math.PI) / 3);
    }, Nf = function(e, r, a, n, i, s, o, u) {
      var l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * r + 2 * s * s + 2 * s * r - u * r, v = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, d = [];
      Of(l, f, h, v, d);
      for (var c = 1e-7, y = [], p = 0; p < 6; p += 2)
        Math.abs(d[p + 1]) < c && d[p] >= 0 && d[p] <= 1 && y.push(d[p]);
      y.push(1), y.push(0);
      for (var g = -1, m, b, E, M = 0; M < y.length; M++)
        m = Math.pow(1 - y[M], 2) * a + 2 * (1 - y[M]) * y[M] * i + y[M] * y[M] * o, b = Math.pow(1 - y[M], 2) * n + 2 * (1 - y[M]) * y[M] * s + y[M] * y[M] * u, E = Math.pow(m - e, 2) + Math.pow(b - r, 2), g >= 0 ? E < g && (g = E) : g = E;
      return g;
    }, If = function(e, r, a, n, i, s) {
      var o = [e - a, r - n], u = [i - a, s - n], l = u[0] * u[0] + u[1] * u[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * u[0] + o[1] * u[1], v = h * h / l;
      return h < 0 ? f : v > l ? (e - i) * (e - i) + (r - s) * (r - s) : f - v;
    }, Ht = function(e, r, a) {
      for (var n, i, s, o, u, l = 0, f = 0; f < a.length / 2; f++)
        if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
          if (n >= e && e >= s || n <= e && e <= s)
            u = (e - n) / (s - n) * (o - i) + i, u > r && l++;
          else
            continue;
      return l % 2 !== 0;
    }, pr = function(e, r, a, n, i, s, o, u, l) {
      var f = new Array(a.length), h;
      u[0] != null ? (h = Math.atan(u[1] / u[0]), u[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = u;
      for (var v = Math.cos(-h), d = Math.sin(-h), c = 0; c < f.length / 2; c++)
        f[c * 2] = s / 2 * (a[c * 2] * v - a[c * 2 + 1] * d), f[c * 2 + 1] = o / 2 * (a[c * 2 + 1] * v + a[c * 2] * d), f[c * 2] += n, f[c * 2 + 1] += i;
      var y;
      if (l > 0) {
        var p = yn(f, -l);
        y = pn(p);
      } else
        y = f;
      return Ht(e, r, y);
    }, Mf = function(e, r, a, n, i, s, o) {
      for (var u = new Array(a.length), l = s / 2, f = o / 2, h = ci(s, o), v = h * h, d = 0; d < a.length / 4; d++) {
        var c = void 0, y = void 0;
        d === 0 ? c = a.length - 2 : c = d * 4 - 2, y = d * 4 + 2;
        var p = n + l * a[d * 4], g = i + f * a[d * 4 + 1], m = -a[c] * a[y] - a[c + 1] * a[y + 1], b = h / Math.tan(Math.acos(m) / 2), E = p - b * a[c], M = g - b * a[c + 1], L = p + b * a[y], w = g + b * a[y + 1];
        u[d * 4] = E, u[d * 4 + 1] = M, u[d * 4 + 2] = L, u[d * 4 + 3] = w;
        var k = a[c + 1], D = -a[c], F = k * a[y] + D * a[y + 1];
        F < 0 && (k *= -1, D *= -1);
        var G = E + k * h, N = M + D * h, X = Math.pow(G - e, 2) + Math.pow(N - r, 2);
        if (X <= v)
          return !0;
      }
      return Ht(e, r, u);
    }, pn = function(e) {
      for (var r = new Array(e.length / 2), a, n, i, s, o, u, l, f, h = 0; h < e.length / 4; h++) {
        a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], u = e[(h + 1) * 4 + 1], l = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], f = e[3]);
        var v = Cr(a, n, i, s, o, u, l, f, !0);
        r[h * 2] = v[0], r[h * 2 + 1] = v[1];
      }
      return r;
    }, yn = function(e, r) {
      for (var a = new Array(e.length * 2), n, i, s, o, u = 0; u < e.length / 2; u++) {
        n = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var l = o - i, f = -(s - n), h = Math.sqrt(l * l + f * f), v = l / h, d = f / h;
        a[u * 4] = n + v * r, a[u * 4 + 1] = i + d * r, a[u * 4 + 2] = s + v * r, a[u * 4 + 3] = o + d * r;
      }
      return a;
    }, Rf = function(e, r, a, n, i, s) {
      var o = a - e, u = n - r;
      o /= i, u /= s;
      var l = Math.sqrt(o * o + u * u), f = l - 1;
      if (f < 0)
        return [];
      var h = f / l;
      return [(a - e) * h + e, (n - r) * h + r];
    }, Gr = function(e, r, a, n, i, s, o) {
      return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
    }, Pa = function(e, r, a, n, i, s, o) {
      var u = [a - e, n - r], l = [e - i, r - s], f = u[0] * u[0] + u[1] * u[1], h = 2 * (l[0] * u[0] + l[1] * u[1]), v = l[0] * l[0] + l[1] * l[1] - o * o, d = h * h - 4 * f * v;
      if (d < 0)
        return [];
      var c = (-h + Math.sqrt(d)) / (2 * f), y = (-h - Math.sqrt(d)) / (2 * f), p = Math.min(c, y), g = Math.max(c, y), m = [];
      if (p >= 0 && p <= 1 && m.push(p), g >= 0 && g <= 1 && m.push(g), m.length === 0)
        return [];
      var b = m[0] * u[0] + e, E = m[0] * u[1] + r;
      if (m.length > 1) {
        if (m[0] == m[1])
          return [b, E];
        var M = m[1] * u[0] + e, L = m[1] * u[1] + r;
        return [b, E, M, L];
      } else
        return [b, E];
    }, hi = function(e, r, a) {
      return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
    }, Cr = function(e, r, a, n, i, s, o, u, l) {
      var f = e - i, h = a - e, v = o - i, d = r - s, c = n - r, y = u - s, p = v * d - y * f, g = h * d - c * f, m = y * h - v * c;
      if (m !== 0) {
        var b = p / m, E = g / m, M = 1e-3, L = 0 - M, w = 1 + M;
        return L <= b && b <= w && L <= E && E <= w ? [e + b * h, r + b * c] : l ? [e + b * h, r + b * c] : [];
      } else
        return p === 0 || g === 0 ? hi(e, a, o) === o ? [o, u] : hi(e, a, i) === i ? [i, s] : hi(i, o, a) === a ? [a, n] : [] : [];
    }, Ba = function(e, r, a, n, i, s, o, u) {
      var l = [], f, h = new Array(a.length), v = !0;
      s == null && (v = !1);
      var d;
      if (v) {
        for (var c = 0; c < h.length / 2; c++)
          h[c * 2] = a[c * 2] * s + n, h[c * 2 + 1] = a[c * 2 + 1] * o + i;
        if (u > 0) {
          var y = yn(h, -u);
          d = pn(y);
        } else
          d = h;
      } else
        d = a;
      for (var p, g, m, b, E = 0; E < d.length / 2; E++)
        p = d[E * 2], g = d[E * 2 + 1], E < d.length / 2 - 1 ? (m = d[(E + 1) * 2], b = d[(E + 1) * 2 + 1]) : (m = d[0], b = d[1]), f = Cr(e, r, n, i, p, g, m, b), f.length !== 0 && l.push(f[0], f[1]);
      return l;
    }, kf = function(e, r, a, n, i, s, o, u) {
      for (var l = [], f, h = new Array(a.length), v = s / 2, d = o / 2, c = ci(s, o), y = 0; y < a.length / 4; y++) {
        var p = void 0, g = void 0;
        y === 0 ? p = a.length - 2 : p = y * 4 - 2, g = y * 4 + 2;
        var m = n + v * a[y * 4], b = i + d * a[y * 4 + 1], E = -a[p] * a[g] - a[p + 1] * a[g + 1], M = c / Math.tan(Math.acos(E) / 2), L = m - M * a[p], w = b - M * a[p + 1], k = m + M * a[g], D = b + M * a[g + 1];
        y === 0 ? (h[a.length - 2] = L, h[a.length - 1] = w) : (h[y * 4 - 2] = L, h[y * 4 - 1] = w), h[y * 4] = k, h[y * 4 + 1] = D;
        var F = a[p + 1], G = -a[p], N = F * a[g] + G * a[g + 1];
        N < 0 && (F *= -1, G *= -1);
        var X = L + F * c, B = w + G * c;
        f = Pa(e, r, n, i, X, B, c), f.length !== 0 && l.push(f[0], f[1]);
      }
      for (var re = 0; re < h.length / 4; re++)
        f = Cr(e, r, n, i, h[re * 4], h[re * 4 + 1], h[re * 4 + 2], h[re * 4 + 3], !1), f.length !== 0 && l.push(f[0], f[1]);
      if (l.length > 2) {
        for (var K = [l[0], l[1]], W = Math.pow(K[0] - e, 2) + Math.pow(K[1] - r, 2), ae = 1; ae < l.length / 2; ae++) {
          var ue = Math.pow(l[ae * 2] - e, 2) + Math.pow(l[ae * 2 + 1] - r, 2);
          ue <= W && (K[0] = l[ae * 2], K[1] = l[ae * 2 + 1], W = ue);
        }
        return K;
      }
      return l;
    }, mn = function(e, r, a) {
      var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
      return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
    }, $t = function(e, r) {
      var a = vi(e, r);
      return a = Ds(a), a;
    }, Ds = function(e) {
      for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < n; l++)
        r = e[2 * l], a = e[2 * l + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
      for (var f = 2 / (o - i), h = 2 / (u - s), v = 0; v < n; v++)
        r = e[2 * v] = e[2 * v] * f, a = e[2 * v + 1] = e[2 * v + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
      if (s < -1)
        for (var d = 0; d < n; d++)
          a = e[2 * d + 1] = e[2 * d + 1] + (-1 - s);
      return e;
    }, vi = function(e, r) {
      var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
      n += r;
      for (var i = new Array(e * 2), s, o = 0; o < e; o++)
        s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
      return i;
    }, Fa = function(e, r) {
      return Math.min(e / 4, r / 4, 8);
    }, ci = function(e, r) {
      return Math.min(e / 10, r / 10, 8);
    }, Ss = function() {
      return 8;
    }, Pf = function(e, r, a) {
      return [e - 2 * r + a, 2 * (r - e), e];
    }, di = function(e, r) {
      return {
        heightOffset: Math.min(15, 0.05 * r),
        widthOffset: Math.min(100, 0.25 * e),
        ctrlPtOffsetPct: 0.05
      };
    }, Bf = At({
      dampingFactor: 0.8,
      precision: 1e-6,
      iterations: 200,
      weight: function(e) {
        return 1;
      }
    }), Ff = {
      pageRank: function(e) {
        for (var r = Bf(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, f = u.edges, h = l.length, v = h * h, d = f.length, c = new Array(v), y = new Array(h), p = (1 - a) / h, g = 0; g < h; g++) {
          for (var m = 0; m < h; m++) {
            var b = g * h + m;
            c[b] = 0;
          }
          y[g] = 0;
        }
        for (var E = 0; E < d; E++) {
          var M = f[E], L = M.data("source"), w = M.data("target");
          if (L !== w) {
            var k = l.indexOfId(L), D = l.indexOfId(w), F = s(M), G = D * h + k;
            c[G] += F, y[k] += F;
          }
        }
        for (var N = 1 / h + p, X = 0; X < h; X++)
          if (y[X] === 0)
            for (var B = 0; B < h; B++) {
              var re = B * h + X;
              c[re] = N;
            }
          else
            for (var K = 0; K < h; K++) {
              var W = K * h + X;
              c[W] = c[W] / y[X] + p;
            }
        for (var ae = new Array(h), ue = new Array(h), me, ie = 0; ie < h; ie++)
          ae[ie] = 1;
        for (var ge = 0; ge < i; ge++) {
          for (var Ee = 0; Ee < h; Ee++)
            ue[Ee] = 0;
          for (var Ce = 0; Ce < h; Ce++)
            for (var we = 0; we < h; we++) {
              var De = Ce * h + we;
              ue[Ce] += c[De] * ae[we];
            }
          bf(ue), me = ae, ae = ue, ue = me;
          for (var se = 0, xe = 0; xe < h; xe++) {
            var Le = me[xe] - ae[xe];
            se += Le * Le;
          }
          if (se < n)
            break;
        }
        var Se = {
          rank: function(Fe) {
            return Fe = o.collection(Fe)[0], ae[l.indexOf(Fe)];
          }
        };
        return Se;
      }
      // pageRank
    }, Ls = At({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1,
      alpha: 0
    }), ra = {
      degreeCentralityNormalized: function(e) {
        e = Ls(e);
        var r = this.cy(), a = this.nodes(), n = a.length;
        if (e.directed) {
          for (var f = {}, h = {}, v = 0, d = 0, c = 0; c < n; c++) {
            var y = a[c], p = y.id();
            e.root = y;
            var g = this.degreeCentrality(e);
            v < g.indegree && (v = g.indegree), d < g.outdegree && (d = g.outdegree), f[p] = g.indegree, h[p] = g.outdegree;
          }
          return {
            indegree: function(b) {
              return v == 0 ? 0 : (ee(b) && (b = r.filter(b)), f[b.id()] / v);
            },
            outdegree: function(b) {
              return d === 0 ? 0 : (ee(b) && (b = r.filter(b)), h[b.id()] / d);
            }
          };
        } else {
          for (var i = {}, s = 0, o = 0; o < n; o++) {
            var u = a[o];
            e.root = u;
            var l = this.degreeCentrality(e);
            s < l.degree && (s = l.degree), i[u.id()] = l.degree;
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
        e = Ls(e);
        var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, u = n.alpha;
        if (i = r.collection(i)[0], o) {
          for (var d = i.connectedEdges(), c = d.filter(function(L) {
            return L.target().same(i) && a.has(L);
          }), y = d.filter(function(L) {
            return L.source().same(i) && a.has(L);
          }), p = c.length, g = y.length, m = 0, b = 0, E = 0; E < c.length; E++)
            m += s(c[E]);
          for (var M = 0; M < y.length; M++)
            b += s(y[M]);
          return {
            indegree: Math.pow(p, 1 - u) * Math.pow(m, u),
            outdegree: Math.pow(g, 1 - u) * Math.pow(b, u)
          };
        } else {
          for (var l = i.connectedEdges().intersection(a), f = l.length, h = 0, v = 0; v < l.length; v++)
            h += s(l[v]);
          return {
            degree: Math.pow(f, 1 - u) * Math.pow(h, u)
          };
        }
      }
      // degreeCentrality
    };
    ra.dc = ra.degreeCentrality, ra.dcn = ra.degreeCentralityNormalised = ra.degreeCentralityNormalized;
    var As = At({
      harmonic: !0,
      weight: function() {
        return 1;
      },
      directed: !1,
      root: null
    }), aa = {
      closenessCentralityNormalized: function(e) {
        for (var r = As(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), f = this.floydWarshall({
          weight: n,
          directed: i
        }), h = 0; h < l.length; h++) {
          for (var v = 0, d = l[h], c = 0; c < l.length; c++)
            if (h !== c) {
              var y = f.distance(d, l[c]);
              a ? v += 1 / y : v += y;
            }
          a || (v = 1 / v), u < v && (u = v), o[d.id()] = v;
        }
        return {
          closeness: function(g) {
            return u == 0 ? 0 : (ee(g) ? g = s.filter(g)[0].id() : g = g.id(), o[g] / u);
          }
        };
      },
      // Implemented from pseudocode from wikipedia
      closenessCentrality: function(e) {
        var r = As(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
        a = this.filter(a)[0];
        for (var o = this.dijkstra({
          root: a,
          weight: n,
          directed: i
        }), u = 0, l = this.nodes(), f = 0; f < l.length; f++) {
          var h = l[f];
          if (!h.same(a)) {
            var v = o.distanceTo(h);
            s ? u += 1 / v : u += v;
          }
        }
        return s ? u : 1 / u;
      }
      // closenessCentrality
    };
    aa.cc = aa.closenessCentrality, aa.ccn = aa.closenessCentralityNormalised = aa.closenessCentralityNormalized;
    var Gf = At({
      weight: null,
      directed: !1
    }), gi = {
      // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
      betweennessCentrality: function(e) {
        for (var r = Gf(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, f = 0, h = {
          set: function(b, E) {
            l[b] = E, E > f && (f = E);
          },
          get: function(b) {
            return l[b];
          }
        }, v = 0; v < o.length; v++) {
          var d = o[v], c = d.id();
          a ? u[c] = d.outgoers().nodes() : u[c] = d.openNeighborhood().nodes(), h.set(c, 0);
        }
        for (var y = function(b) {
          for (var E = o[b].id(), M = [], L = {}, w = {}, k = {}, D = new Ra(function(we, De) {
            return k[we] - k[De];
          }), F = 0; F < o.length; F++) {
            var G = o[F].id();
            L[G] = [], w[G] = 0, k[G] = 1 / 0;
          }
          for (w[E] = 1, k[E] = 0, D.push(E); !D.empty(); ) {
            var N = D.pop();
            if (M.push(N), i)
              for (var X = 0; X < u[N].length; X++) {
                var B = u[N][X], re = s.getElementById(N), K = void 0;
                re.edgesTo(B).length > 0 ? K = re.edgesTo(B)[0] : K = B.edgesTo(re)[0];
                var W = n(K);
                B = B.id(), k[B] > k[N] + W && (k[B] = k[N] + W, D.nodes.indexOf(B) < 0 ? D.push(B) : D.updateItem(B), w[B] = 0, L[B] = []), k[B] == k[N] + W && (w[B] = w[B] + w[N], L[B].push(N));
              }
            else
              for (var ae = 0; ae < u[N].length; ae++) {
                var ue = u[N][ae].id();
                k[ue] == 1 / 0 && (D.push(ue), k[ue] = k[N] + 1), k[ue] == k[N] + 1 && (w[ue] = w[ue] + w[N], L[ue].push(N));
              }
          }
          for (var me = {}, ie = 0; ie < o.length; ie++)
            me[o[ie].id()] = 0;
          for (; M.length > 0; ) {
            for (var ge = M.pop(), Ee = 0; Ee < L[ge].length; Ee++) {
              var Ce = L[ge][Ee];
              me[Ce] = me[Ce] + w[Ce] / w[ge] * (1 + me[ge]);
            }
            ge != o[b].id() && h.set(ge, h.get(ge) + me[ge]);
          }
        }, p = 0; p < o.length; p++)
          y(p);
        var g = {
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
        return g.betweennessNormalised = g.betweennessNormalized, g;
      }
      // betweennessCentrality
    };
    gi.bc = gi.betweennessCentrality;
    var zf = At({
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
    }), Vf = function(e) {
      return zf(e);
    }, Uf = function(e, r) {
      for (var a = 0, n = 0; n < r.length; n++)
        a += r[n](e);
      return a;
    }, $f = function(e, r, a) {
      for (var n = 0; n < r; n++)
        e[n * r + n] = a;
    }, Os = function(e, r) {
      for (var a, n = 0; n < r; n++) {
        a = 0;
        for (var i = 0; i < r; i++)
          a += e[i * r + n];
        for (var s = 0; s < r; s++)
          e[s * r + n] = e[s * r + n] / a;
      }
    }, _f = function(e, r, a) {
      for (var n = new Array(a * a), i = 0; i < a; i++) {
        for (var s = 0; s < a; s++)
          n[i * a + s] = 0;
        for (var o = 0; o < a; o++)
          for (var u = 0; u < a; u++)
            n[i * a + u] += e[i * a + o] * r[o * a + u];
      }
      return n;
    }, Yf = function(e, r, a) {
      for (var n = e.slice(0), i = 1; i < a; i++)
        e = _f(e, n, r);
      return e;
    }, Hf = function(e, r, a) {
      for (var n = new Array(r * r), i = 0; i < r * r; i++)
        n[i] = Math.pow(e[i], a);
      return Os(n, r), n;
    }, Xf = function(e, r, a, n) {
      for (var i = 0; i < a; i++) {
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o)
          return !1;
      }
      return !0;
    }, Wf = function(e, r, a, n) {
      for (var i = [], s = 0; s < r; s++) {
        for (var o = [], u = 0; u < r; u++)
          Math.round(e[s * r + u] * 1e3) / 1e3 > 0 && o.push(a[u]);
        o.length !== 0 && i.push(n.collection(o));
      }
      return i;
    }, qf = function(e, r) {
      for (var a = 0; a < e.length; a++)
        if (!r[a] || e[a].id() !== r[a].id())
          return !1;
      return !0;
    }, Kf = function(e) {
      for (var r = 0; r < e.length; r++)
        for (var a = 0; a < e.length; a++)
          r != a && qf(e[r], e[a]) && e.splice(a, 1);
      return e;
    }, Ns = function(e) {
      for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = Vf(e), s = {}, o = 0; o < r.length; o++)
        s[r[o].id()] = o;
      for (var u = r.length, l = u * u, f = new Array(l), h, v = 0; v < l; v++)
        f[v] = 0;
      for (var d = 0; d < a.length; d++) {
        var c = a[d], y = s[c.source().id()], p = s[c.target().id()], g = Uf(c, i.attributes);
        f[y * u + p] += g, f[p * u + y] += g;
      }
      $f(f, u, i.multFactor), Os(f, u);
      for (var m = !0, b = 0; m && b < i.maxIterations; )
        m = !1, h = Yf(f, u, i.expandFactor), f = Hf(h, u, i.inflateFactor), Xf(f, h, l, 4) || (m = !0), b++;
      var E = Wf(f, u, r, n);
      return E = Kf(E), E;
    }, Zf = {
      markovClustering: Ns,
      mcl: Ns
    }, Qf = function(e) {
      return e;
    }, Is = function(e, r) {
      return Math.abs(r - e);
    }, Ms = function(e, r, a) {
      return e + Is(r, a);
    }, Rs = function(e, r, a) {
      return e + Math.pow(a - r, 2);
    }, Jf = function(e) {
      return Math.sqrt(e);
    }, jf = function(e, r, a) {
      return Math.max(e, Is(r, a));
    }, Ga = function(e, r, a, n, i) {
      for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Qf, o = n, u, l, f = 0; f < e; f++)
        u = r(f), l = a(f), o = i(o, u, l);
      return s(o);
    }, na = {
      euclidean: function(e, r, a) {
        return e >= 2 ? Ga(e, r, a, 0, Rs, Jf) : Ga(e, r, a, 0, Ms);
      },
      squaredEuclidean: function(e, r, a) {
        return Ga(e, r, a, 0, Rs);
      },
      manhattan: function(e, r, a) {
        return Ga(e, r, a, 0, Ms);
      },
      max: function(e, r, a) {
        return Ga(e, r, a, -1 / 0, jf);
      }
    };
    na["squared-euclidean"] = na.squaredEuclidean, na.squaredeuclidean = na.squaredEuclidean;
    function bn(t, e, r, a, n, i) {
      var s;
      return H(t) ? s = t : s = na[t] || na.euclidean, e === 0 && H(t) ? s(n, i) : s(e, r, a, n, i);
    }
    var eh = At({
      k: 2,
      m: 2,
      sensitivityThreshold: 1e-4,
      distance: "euclidean",
      maxIterations: 10,
      attributes: [],
      testMode: !1,
      testCentroids: null
    }), pi = function(e) {
      return eh(e);
    }, En = function(e, r, a, n, i) {
      var s = i !== "kMedoids", o = s ? function(h) {
        return a[h];
      } : function(h) {
        return n[h](a);
      }, u = function(v) {
        return n[v](r);
      }, l = a, f = r;
      return bn(e, n.length, o, u, l, f);
    }, yi = function(e, r, a) {
      for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), u = null, l = 0; l < n; l++)
        i[l] = e.min(a[l]).value, s[l] = e.max(a[l]).value;
      for (var f = 0; f < r; f++) {
        u = [];
        for (var h = 0; h < n; h++)
          u[h] = Math.random() * (s[h] - i[h]) + i[h];
        o[f] = u;
      }
      return o;
    }, ks = function(e, r, a, n, i) {
      for (var s = 1 / 0, o = 0, u = 0; u < r.length; u++) {
        var l = En(a, e, r[u], n, i);
        l < s && (s = l, o = u);
      }
      return o;
    }, Ps = function(e, r, a) {
      for (var n = [], i = null, s = 0; s < r.length; s++)
        i = r[s], a[i.id()] === e && n.push(i);
      return n;
    }, th = function(e, r, a) {
      return Math.abs(r - e) <= a;
    }, rh = function(e, r, a) {
      for (var n = 0; n < e.length; n++)
        for (var i = 0; i < e[n].length; i++) {
          var s = Math.abs(e[n][i] - r[n][i]);
          if (s > a)
            return !1;
        }
      return !0;
    }, ah = function(e, r, a) {
      for (var n = 0; n < a; n++)
        if (e === r[n])
          return !0;
      return !1;
    }, Bs = function(e, r) {
      var a = new Array(r);
      if (e.length < 50)
        for (var n = 0; n < r; n++) {
          for (var i = e[Math.floor(Math.random() * e.length)]; ah(i, a, n); )
            i = e[Math.floor(Math.random() * e.length)];
          a[n] = i;
        }
      else
        for (var s = 0; s < r; s++)
          a[s] = e[Math.floor(Math.random() * e.length)];
      return a;
    }, Fs = function(e, r, a) {
      for (var n = 0, i = 0; i < r.length; i++)
        n += En("manhattan", r[i], e, a, "kMedoids");
      return n;
    }, nh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = pi(e), s = new Array(i.k), o = {}, u;
      i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = yi(a, i.k, i.attributes)) : _(i.testCentroids) === "object" ? u = i.testCentroids : u = yi(a, i.k, i.attributes) : u = yi(a, i.k, i.attributes);
      for (var l = !0, f = 0; l && f < i.maxIterations; ) {
        for (var h = 0; h < a.length; h++)
          n = a[h], o[n.id()] = ks(n, u, i.distance, i.attributes, "kMeans");
        l = !1;
        for (var v = 0; v < i.k; v++) {
          var d = Ps(v, a, o);
          if (d.length !== 0) {
            for (var c = i.attributes.length, y = u[v], p = new Array(c), g = new Array(c), m = 0; m < c; m++) {
              g[m] = 0;
              for (var b = 0; b < d.length; b++)
                n = d[b], g[m] += i.attributes[m](n);
              p[m] = g[m] / d.length, th(p[m], y[m], i.sensitivityThreshold) || (l = !0);
            }
            u[v] = p, s[v] = r.collection(d);
          }
        }
        f++;
      }
      return s;
    }, ih = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = pi(e), s = new Array(i.k), o, u = {}, l, f = new Array(i.k);
      i.testMode ? typeof i.testCentroids == "number" || (_(i.testCentroids) === "object" ? o = i.testCentroids : o = Bs(a, i.k)) : o = Bs(a, i.k);
      for (var h = !0, v = 0; h && v < i.maxIterations; ) {
        for (var d = 0; d < a.length; d++)
          n = a[d], u[n.id()] = ks(n, o, i.distance, i.attributes, "kMedoids");
        h = !1;
        for (var c = 0; c < o.length; c++) {
          var y = Ps(c, a, u);
          if (y.length !== 0) {
            f[c] = Fs(o[c], y, i.attributes);
            for (var p = 0; p < y.length; p++)
              l = Fs(y[p], y, i.attributes), l < f[c] && (f[c] = l, o[c] = y[p], h = !0);
            s[c] = r.collection(y);
          }
        }
        v++;
      }
      return s;
    }, sh = function(e, r, a, n, i) {
      for (var s, o, u = 0; u < r.length; u++)
        for (var l = 0; l < e.length; l++)
          n[u][l] = Math.pow(a[u][l], i.m);
      for (var f = 0; f < e.length; f++)
        for (var h = 0; h < i.attributes.length; h++) {
          s = 0, o = 0;
          for (var v = 0; v < r.length; v++)
            s += n[v][f] * i.attributes[h](r[v]), o += n[v][f];
          e[f][h] = s / o;
        }
    }, oh = function(e, r, a, n, i) {
      for (var s = 0; s < e.length; s++)
        r[s] = e[s].slice();
      for (var o, u, l, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
        for (var v = 0; v < n.length; v++) {
          o = 0;
          for (var d = 0; d < a.length; d++)
            u = En(i.distance, n[v], a[h], i.attributes, "cmeans"), l = En(i.distance, n[v], a[d], i.attributes, "cmeans"), o += Math.pow(u / l, f);
          e[v][h] = 1 / o;
        }
    }, lh = function(e, r, a, n) {
      for (var i = new Array(a.k), s = 0; s < i.length; s++)
        i[s] = [];
      for (var o, u, l = 0; l < r.length; l++) {
        o = -1 / 0, u = -1;
        for (var f = 0; f < r[0].length; f++)
          r[l][f] > o && (o = r[l][f], u = f);
        i[u].push(e[l]);
      }
      for (var h = 0; h < i.length; h++)
        i[h] = n.collection(i[h]);
      return i;
    }, Gs = function(e) {
      var r = this.cy(), a = this.nodes(), n = pi(e), i, s, o, u, l;
      u = new Array(a.length);
      for (var f = 0; f < a.length; f++)
        u[f] = new Array(n.k);
      o = new Array(a.length);
      for (var h = 0; h < a.length; h++)
        o[h] = new Array(n.k);
      for (var v = 0; v < a.length; v++) {
        for (var d = 0, c = 0; c < n.k; c++)
          o[v][c] = Math.random(), d += o[v][c];
        for (var y = 0; y < n.k; y++)
          o[v][y] = o[v][y] / d;
      }
      s = new Array(n.k);
      for (var p = 0; p < n.k; p++)
        s[p] = new Array(n.attributes.length);
      l = new Array(a.length);
      for (var g = 0; g < a.length; g++)
        l[g] = new Array(n.k);
      for (var m = !0, b = 0; m && b < n.maxIterations; )
        m = !1, sh(s, a, o, l, n), oh(o, u, s, a, n), rh(o, u, n.sensitivityThreshold) || (m = !0), b++;
      return i = lh(a, o, n, r), {
        clusters: i,
        degreeOfMembership: o
      };
    }, uh = {
      kMeans: nh,
      kMedoids: ih,
      fuzzyCMeans: Gs,
      fcm: Gs
    }, fh = At({
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
    }), hh = {
      single: "min",
      complete: "max"
    }, vh = function(e) {
      var r = fh(e), a = hh[r.linkage];
      return a != null && (r.linkage = a), r;
    }, zs = function(e, r, a, n, i) {
      for (var s = 0, o = 1 / 0, u, l = i.attributes, f = function(D, F) {
        return bn(i.distance, l.length, function(G) {
          return l[G](D);
        }, function(G) {
          return l[G](F);
        }, D, F);
      }, h = 0; h < e.length; h++) {
        var v = e[h].key, d = a[v][n[v]];
        d < o && (s = v, o = d);
      }
      if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
        return !1;
      var c = r[s], y = r[n[s]], p;
      i.mode === "dendrogram" ? p = {
        left: c,
        right: y,
        key: c.key
      } : p = {
        value: c.value.concat(y.value),
        key: c.key
      }, e[c.index] = p, e.splice(y.index, 1), r[c.key] = p;
      for (var g = 0; g < e.length; g++) {
        var m = e[g];
        c.key === m.key ? u = 1 / 0 : i.linkage === "min" ? (u = a[c.key][m.key], a[c.key][m.key] > a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "max" ? (u = a[c.key][m.key], a[c.key][m.key] < a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "mean" ? u = (a[c.key][m.key] * c.size + a[y.key][m.key] * y.size) / (c.size + y.size) : i.mode === "dendrogram" ? u = f(m.value, c.value) : u = f(m.value[0], c.value[0]), a[c.key][m.key] = a[m.key][c.key] = u;
      }
      for (var b = 0; b < e.length; b++) {
        var E = e[b].key;
        if (n[E] === c.key || n[E] === y.key) {
          for (var M = E, L = 0; L < e.length; L++) {
            var w = e[L].key;
            a[E][w] < a[E][M] && (M = w);
          }
          n[E] = M;
        }
        e[b].index = b;
      }
      return c.key = y.key = c.index = y.index = null, !0;
    }, wn = function t(e, r, a) {
      e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
    }, ch = function t(e, r) {
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
    }, dh = function t(e, r, a) {
      if (!e)
        return [];
      var n = [], i = [], s = [];
      return r === 0 ? (e.left && wn(e.left, n), e.right && wn(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && wn(e.left, n), e.right && wn(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
    }, Vs = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = vh(e), i = n.attributes, s = function(b, E) {
        return bn(n.distance, i.length, function(M) {
          return i[M](b);
        }, function(M) {
          return i[M](E);
        }, b, E);
      }, o = [], u = [], l = [], f = [], h = 0; h < a.length; h++) {
        var v = {
          value: n.mode === "dendrogram" ? a[h] : [a[h]],
          key: h,
          index: h
        };
        o[h] = v, f[h] = v, u[h] = [], l[h] = 0;
      }
      for (var d = 0; d < o.length; d++)
        for (var c = 0; c <= d; c++) {
          var y = void 0;
          n.mode === "dendrogram" ? y = d === c ? 1 / 0 : s(o[d].value, o[c].value) : y = d === c ? 1 / 0 : s(o[d].value[0], o[c].value[0]), u[d][c] = y, u[c][d] = y, y < u[d][l[d]] && (l[d] = c);
        }
      for (var p = zs(o, f, u, l, n); p; )
        p = zs(o, f, u, l, n);
      var g;
      return n.mode === "dendrogram" ? (g = dh(o[0], n.dendrogramDepth, r), n.addDendrogram && ch(o[0], r)) : (g = new Array(o.length), o.forEach(function(m, b) {
        m.key = m.index = null, g[b] = r.collection(m.value);
      })), g;
    }, gh = {
      hierarchicalClustering: Vs,
      hca: Vs
    }, ph = At({
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
    }), yh = function(e) {
      var r = e.damping, a = e.preference;
      0.5 <= r && r < 1 || xt("Damping must range on [0.5, 1).  Got: ".concat(r));
      var n = ["median", "mean", "min", "max"];
      return n.some(function(i) {
        return i === a;
      }) || R(a) || xt("Preference must be one of [".concat(n.map(function(i) {
        return "'".concat(i, "'");
      }).join(", "), "] or a number.  Got: ").concat(a)), ph(e);
    }, mh = function(e, r, a, n) {
      var i = function(o, u) {
        return n[u](o);
      };
      return -bn(e, n.length, function(s) {
        return i(r, s);
      }, function(s) {
        return i(a, s);
      }, r, a);
    }, bh = function(e, r) {
      var a = null;
      return r === "median" ? a = yf(e) : r === "mean" ? a = pf(e) : r === "min" ? a = df(e) : r === "max" ? a = gf(e) : a = r, a;
    }, Eh = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++)
        r[i * e + i] + a[i * e + i] > 0 && n.push(i);
      return n;
    }, Us = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++) {
        for (var s = -1, o = -1 / 0, u = 0; u < a.length; u++) {
          var l = a[u];
          r[i * e + l] > o && (s = l, o = r[i * e + l]);
        }
        s > 0 && n.push(s);
      }
      for (var f = 0; f < a.length; f++)
        n[a[f]] = a[f];
      return n;
    }, wh = function(e, r, a) {
      for (var n = Us(e, r, a), i = 0; i < a.length; i++) {
        for (var s = [], o = 0; o < n.length; o++)
          n[o] === a[i] && s.push(o);
        for (var u = -1, l = -1 / 0, f = 0; f < s.length; f++) {
          for (var h = 0, v = 0; v < s.length; v++)
            h += r[s[v] * e + s[f]];
          h > l && (u = f, l = h);
        }
        a[i] = s[u];
      }
      return n = Us(e, r, a), n;
    }, $s = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = yh(e), i = {}, s = 0; s < a.length; s++)
        i[a[s].id()] = s;
      var o, u, l, f, h, v;
      o = a.length, u = o * o, l = new Array(u);
      for (var d = 0; d < u; d++)
        l[d] = -1 / 0;
      for (var c = 0; c < o; c++)
        for (var y = 0; y < o; y++)
          c !== y && (l[c * o + y] = mh(n.distance, a[c], a[y], n.attributes));
      f = bh(l, n.preference);
      for (var p = 0; p < o; p++)
        l[p * o + p] = f;
      h = new Array(u);
      for (var g = 0; g < u; g++)
        h[g] = 0;
      v = new Array(u);
      for (var m = 0; m < u; m++)
        v[m] = 0;
      for (var b = new Array(o), E = new Array(o), M = new Array(o), L = 0; L < o; L++)
        b[L] = 0, E[L] = 0, M[L] = 0;
      for (var w = new Array(o * n.minIterations), k = 0; k < w.length; k++)
        w[k] = 0;
      var D;
      for (D = 0; D < n.maxIterations; D++) {
        for (var F = 0; F < o; F++) {
          for (var G = -1 / 0, N = -1 / 0, X = -1, B = 0, re = 0; re < o; re++)
            b[re] = h[F * o + re], B = v[F * o + re] + l[F * o + re], B >= G ? (N = G, G = B, X = re) : B > N && (N = B);
          for (var K = 0; K < o; K++)
            h[F * o + K] = (1 - n.damping) * (l[F * o + K] - G) + n.damping * b[K];
          h[F * o + X] = (1 - n.damping) * (l[F * o + X] - N) + n.damping * b[X];
        }
        for (var W = 0; W < o; W++) {
          for (var ae = 0, ue = 0; ue < o; ue++)
            b[ue] = v[ue * o + W], E[ue] = Math.max(0, h[ue * o + W]), ae += E[ue];
          ae -= E[W], E[W] = h[W * o + W], ae += E[W];
          for (var me = 0; me < o; me++)
            v[me * o + W] = (1 - n.damping) * Math.min(0, ae - E[me]) + n.damping * b[me];
          v[W * o + W] = (1 - n.damping) * (ae - E[W]) + n.damping * b[W];
        }
        for (var ie = 0, ge = 0; ge < o; ge++) {
          var Ee = v[ge * o + ge] + h[ge * o + ge] > 0 ? 1 : 0;
          w[D % n.minIterations * o + ge] = Ee, ie += Ee;
        }
        if (ie > 0 && (D >= n.minIterations - 1 || D == n.maxIterations - 1)) {
          for (var Ce = 0, we = 0; we < o; we++) {
            M[we] = 0;
            for (var De = 0; De < n.minIterations; De++)
              M[we] += w[De * o + we];
            (M[we] === 0 || M[we] === n.minIterations) && Ce++;
          }
          if (Ce === o)
            break;
        }
      }
      for (var se = Eh(o, h, v), xe = wh(o, l, se), Le = {}, Se = 0; Se < se.length; Se++)
        Le[se[Se]] = [];
      for (var Oe = 0; Oe < a.length; Oe++) {
        var Fe = i[a[Oe].id()], Xe = xe[Fe];
        Xe != null && Le[Xe].push(a[Oe]);
      }
      for (var Ie = new Array(se.length), Me = 0; Me < se.length; Me++)
        Ie[Me] = r.collection(Le[se[Me]]);
      return Ie;
    }, xh = {
      affinityPropagation: $s,
      ap: $s
    }, Th = At({
      root: void 0,
      directed: !1
    }), Ch = {
      hierholzer: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            directed: r[1]
          };
        }
        var a = Th(e), n = a.root, i = a.directed, s = this, o = !1, u, l, f;
        n && (f = ee(n) ? this.filter(n)[0].id() : n[0].id());
        var h = {}, v = {};
        i ? s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.indegree(!0), M = m.outdegree(!0), L = E - M, w = M - E;
            L == 1 ? u ? o = !0 : u = b : w == 1 ? l ? o = !0 : l = b : (w > 1 || L > 1) && (o = !0), h[b] = [], m.outgoers().forEach(function(k) {
              k.isEdge() && h[b].push(k.id());
            });
          } else
            v[b] = [void 0, m.target().id()];
        }) : s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.degree(!0);
            E % 2 && (u ? l ? o = !0 : l = b : u = b), h[b] = [], m.connectedEdges().forEach(function(M) {
              return h[b].push(M.id());
            });
          } else
            v[b] = [m.source().id(), m.target().id()];
        });
        var d = {
          found: !1,
          trail: void 0
        };
        if (o)
          return d;
        if (l && u)
          if (i) {
            if (f && l != f)
              return d;
            f = l;
          } else {
            if (f && l != f && u != f)
              return d;
            f || (f = l);
          }
        else
          f || (f = s[0].id());
        var c = function(b) {
          for (var E = b, M = [b], L, w, k; h[E].length; )
            L = h[E].shift(), w = v[L][0], k = v[L][1], E != k ? (h[k] = h[k].filter(function(D) {
              return D != L;
            }), E = k) : !i && E != w && (h[w] = h[w].filter(function(D) {
              return D != L;
            }), E = w), M.unshift(L), M.unshift(E);
          return M;
        }, y = [], p = [];
        for (p = c(f); p.length != 1; )
          h[p[0]].length == 0 ? (y.unshift(s.getElementById(p.shift())), y.unshift(s.getElementById(p.shift()))) : p = c(p.shift()).concat(p);
        y.unshift(s.getElementById(p.shift()));
        for (var g in h)
          if (h[g].length)
            return d;
        return d.found = !0, d.trail = this.spawn(y, !0), d;
      }
    }, xn = function() {
      var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, u = function(v, d) {
        for (var c = s.length - 1, y = [], p = e.spawn(); s[c].x != v || s[c].y != d; )
          y.push(s.pop().edge), c--;
        y.push(s.pop().edge), y.forEach(function(g) {
          var m = g.connectedNodes().intersection(e);
          p.merge(g), m.forEach(function(b) {
            var E = b.id(), M = b.connectedEdges().intersection(e);
            p.merge(b), r[E].cutVertex ? p.merge(M.filter(function(L) {
              return L.isLoop();
            })) : p.merge(M);
          });
        }), i.push(p);
      }, l = function h(v, d, c) {
        v === c && (n += 1), r[d] = {
          id: a,
          low: a++,
          cutVertex: !1
        };
        var y = e.getElementById(d).connectedEdges().intersection(e);
        if (y.size() === 0)
          i.push(e.spawn(e.getElementById(d)));
        else {
          var p, g, m, b;
          y.forEach(function(E) {
            p = E.source().id(), g = E.target().id(), m = p === d ? g : p, m !== c && (b = E.id(), o[b] || (o[b] = !0, s.push({
              x: d,
              y: m,
              edge: E
            })), m in r ? r[d].low = Math.min(r[d].low, r[m].id) : (h(v, m, d), r[d].low = Math.min(r[d].low, r[m].low), r[d].id <= r[m].low && (r[d].cutVertex = !0, u(d, m))));
          });
        }
      };
      e.forEach(function(h) {
        if (h.isNode()) {
          var v = h.id();
          v in r || (n = 0, l(v, v), r[v].cutVertex = n > 1);
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
    }, Dh = {
      hopcroftTarjanBiconnected: xn,
      htbc: xn,
      htb: xn,
      hopcroftTarjanBiconnectedComponents: xn
    }, Tn = function() {
      var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function u(l) {
        i.push(l), r[l] = {
          index: a,
          low: a++,
          explored: !1
        };
        var f = e.getElementById(l).connectedEdges().intersection(e);
        if (f.forEach(function(y) {
          var p = y.target().id();
          p !== l && (p in r || u(p), r[p].explored || (r[l].low = Math.min(r[l].low, r[p].low)));
        }), r[l].index === r[l].low) {
          for (var h = e.spawn(); ; ) {
            var v = i.pop();
            if (h.merge(e.getElementById(v)), r[v].low = r[l].index, r[v].explored = !0, v === l)
              break;
          }
          var d = h.edgesWith(h), c = h.merge(d);
          n.push(c), s = s.difference(c);
        }
      };
      return e.forEach(function(u) {
        if (u.isNode()) {
          var l = u.id();
          l in r || o(l);
        }
      }), {
        cut: s,
        components: n
      };
    }, Sh = {
      tarjanStronglyConnected: Tn,
      tsc: Tn,
      tscc: Tn,
      tarjanStronglyConnectedComponents: Tn
    }, _s = {};
    [Ma, tf, rf, nf, of, uf, vf, Ff, ra, aa, gi, Zf, uh, gh, xh, Ch, Dh, Sh].forEach(function(t) {
      He(_s, t);
    });
    /*!
    Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
    Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
    Licensed under The MIT License (http://opensource.org/licenses/MIT)
    */
    var Ys = 0, Hs = 1, Xs = 2, yr = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      this.id = "Thenable/1.0.7", this.state = Ys, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: this.then.bind(this)
      }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
    };
    yr.prototype = {
      /*  promise resolving methods  */
      fulfill: function(e) {
        return Ws(this, Hs, "fulfillValue", e);
      },
      reject: function(e) {
        return Ws(this, Xs, "rejectReason", e);
      },
      /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
      then: function(e, r) {
        var a = this, n = new yr();
        return a.onFulfilled.push(Zs(e, n, "fulfill")), a.onRejected.push(Zs(r, n, "reject")), qs(a), n.proxy;
      }
    };
    var Ws = function(e, r, a, n) {
      return e.state === Ys && (e.state = r, e[a] = n, qs(e)), e;
    }, qs = function(e) {
      e.state === Hs ? Ks(e, "onFulfilled", e.fulfillValue) : e.state === Xs && Ks(e, "onRejected", e.rejectReason);
    }, Ks = function(e, r, a) {
      if (e[r].length !== 0) {
        var n = e[r];
        e[r] = [];
        var i = function() {
          for (var o = 0; o < n.length; o++)
            n[o](a);
        };
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
      }
    }, Zs = function(e, r, a) {
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
          Lh(r, i);
        }
      };
    }, Lh = function t(e, r) {
      if (e === r || e.proxy === r) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
      }
      var a;
      if (_(r) === "object" && r !== null || typeof r == "function")
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
    yr.all = function(t) {
      return new yr(function(e, r) {
        for (var a = new Array(t.length), n = 0, i = function(u, l) {
          a[u] = l, n++, n === t.length && e(a);
        }, s = 0; s < t.length; s++)
          (function(o) {
            var u = t[o], l = u != null && u.then != null;
            if (l)
              u.then(function(h) {
                i(o, h);
              }, function(h) {
                r(h);
              });
            else {
              var f = u;
              i(o, f);
            }
          })(s);
      });
    }, yr.resolve = function(t) {
      return new yr(function(e, r) {
        e(t);
      });
    }, yr.reject = function(t) {
      return new yr(function(e, r) {
        r(t);
      });
    };
    var ia = typeof Promise < "u" ? Promise : yr, mi = function(e, r, a) {
      var n = Ye(e), i = !n, s = this._private = He({
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
        var u = e.pan();
        s.startPan = {
          x: u.x,
          y: u.y
        }, s.startZoom = e.zoom();
      }
      this.length = 1, this[0] = this;
    }, zr = mi.prototype;
    He(zr, {
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
        var a = function(l, f) {
          var h = e[l];
          h != null && (e[l] = e[f], e[f] = h);
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
    var Ah = {
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
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, u = !i, l = !u;
          if (!o.styleEnabled())
            return this;
          var f = o.style();
          r = He({}, r, a);
          var h = Object.keys(r).length === 0;
          if (h)
            return new mi(s[0], r);
          switch (r.duration === void 0 && (r.duration = 400), r.duration) {
            case "slow":
              r.duration = 600;
              break;
            case "fast":
              r.duration = 200;
              break;
          }
          if (l && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), l && r.renderedPosition != null) {
            var v = r.renderedPosition, d = o.pan(), c = o.zoom();
            r.position = bs(v, c, d);
          }
          if (u && r.panBy != null) {
            var y = r.panBy, p = o.pan();
            r.pan = {
              x: p.x + y.x,
              y: p.y + y.y
            };
          }
          var g = r.center || r.centre;
          if (u && g != null) {
            var m = o.getCenterPan(g.eles, r.zoom);
            m != null && (r.pan = m);
          }
          if (u && r.fit != null) {
            var b = r.fit, E = o.getFitViewport(b.eles || b.boundingBox, b.padding);
            E != null && (r.pan = E.pan, r.zoom = E.zoom);
          }
          if (u && S(r.zoom)) {
            var M = o.getZoomedViewport(r.zoom);
            M != null ? (M.zoomed && (r.zoom = M.zoom), M.panned && (r.pan = M.pan)) : r.zoom = null;
          }
          return new mi(s[0], r);
        };
      },
      // animate
      animate: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          a && (r = He({}, r, a));
          for (var u = 0; u < s.length; u++) {
            var l = s[u], f = l.animated() && (r.queue === void 0 || r.queue), h = l.animation(r, f ? {
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
          for (var u = 0; u < s.length; u++) {
            for (var l = s[u], f = l._private, h = f.animation.current, v = 0; v < h.length; v++) {
              var d = h[v], c = d._private;
              a && (c.duration = 0);
            }
            r && (f.animation.queue = []), a || (f.animation.current = []);
          }
          return o.notify("draw"), this;
        };
      }
      // stop
    }, Oh = Array.isArray, Cn = Oh, Nh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ih = /^\w*$/;
    function Mh(t, e) {
      if (Cn(t))
        return !1;
      var r = typeof t;
      return r == "number" || r == "symbol" || r == "boolean" || t == null || Aa(t) ? !0 : Ih.test(t) || !Nh.test(t) || e != null && t in Object(e);
    }
    var Rh = Mh, kh = "[object AsyncFunction]", Ph = "[object Function]", Bh = "[object GeneratorFunction]", Fh = "[object Proxy]";
    function Gh(t) {
      if (!kr(t))
        return !1;
      var e = is(t);
      return e == Ph || e == Bh || e == kh || e == Fh;
    }
    var zh = Gh, Vh = sn["__core-js_shared__"], bi = Vh, Qs = function() {
      var t = /[^.]+$/.exec(bi && bi.keys && bi.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }();
    function Uh(t) {
      return !!Qs && Qs in t;
    }
    var $h = Uh, _h = Function.prototype, Yh = _h.toString;
    function Hh(t) {
      if (t != null) {
        try {
          return Yh.call(t);
        } catch {
        }
        try {
          return t + "";
        } catch {
        }
      }
      return "";
    }
    var Xh = Hh, Wh = /[\\^$.*+?()[\]{}|]/g, qh = /^\[object .+?Constructor\]$/, Kh = Function.prototype, Zh = Object.prototype, Qh = Kh.toString, Jh = Zh.hasOwnProperty, jh = RegExp(
      "^" + Qh.call(Jh).replace(Wh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function ev(t) {
      if (!kr(t) || $h(t))
        return !1;
      var e = zh(t) ? jh : qh;
      return e.test(Xh(t));
    }
    var tv = ev;
    function rv(t, e) {
      return t == null ? void 0 : t[e];
    }
    var av = rv;
    function nv(t, e) {
      var r = av(t, e);
      return tv(r) ? r : void 0;
    }
    var Ei = nv, iv = Ei(Object, "create"), za = iv;
    function sv() {
      this.__data__ = za ? za(null) : {}, this.size = 0;
    }
    var ov = sv;
    function lv(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }
    var uv = lv, fv = "__lodash_hash_undefined__", hv = Object.prototype, vv = hv.hasOwnProperty;
    function cv(t) {
      var e = this.__data__;
      if (za) {
        var r = e[t];
        return r === fv ? void 0 : r;
      }
      return vv.call(e, t) ? e[t] : void 0;
    }
    var dv = cv, gv = Object.prototype, pv = gv.hasOwnProperty;
    function yv(t) {
      var e = this.__data__;
      return za ? e[t] !== void 0 : pv.call(e, t);
    }
    var mv = yv, bv = "__lodash_hash_undefined__";
    function Ev(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = za && e === void 0 ? bv : e, this;
    }
    var wv = Ev;
    function sa(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    sa.prototype.clear = ov, sa.prototype.delete = uv, sa.prototype.get = dv, sa.prototype.has = mv, sa.prototype.set = wv;
    var Js = sa;
    function xv() {
      this.__data__ = [], this.size = 0;
    }
    var Tv = xv;
    function Cv(t, e) {
      return t === e || t !== t && e !== e;
    }
    var js = Cv;
    function Dv(t, e) {
      for (var r = t.length; r--; )
        if (js(t[r][0], e))
          return r;
      return -1;
    }
    var Dn = Dv, Sv = Array.prototype, Lv = Sv.splice;
    function Av(t) {
      var e = this.__data__, r = Dn(e, t);
      if (r < 0)
        return !1;
      var a = e.length - 1;
      return r == a ? e.pop() : Lv.call(e, r, 1), --this.size, !0;
    }
    var Ov = Av;
    function Nv(t) {
      var e = this.__data__, r = Dn(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    var Iv = Nv;
    function Mv(t) {
      return Dn(this.__data__, t) > -1;
    }
    var Rv = Mv;
    function kv(t, e) {
      var r = this.__data__, a = Dn(r, t);
      return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
    }
    var Pv = kv;
    function oa(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    oa.prototype.clear = Tv, oa.prototype.delete = Ov, oa.prototype.get = Iv, oa.prototype.has = Rv, oa.prototype.set = Pv;
    var Bv = oa, Fv = Ei(sn, "Map"), Gv = Fv;
    function zv() {
      this.size = 0, this.__data__ = {
        hash: new Js(),
        map: new (Gv || Bv)(),
        string: new Js()
      };
    }
    var Vv = zv;
    function Uv(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
    }
    var $v = Uv;
    function _v(t, e) {
      var r = t.__data__;
      return $v(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    var Sn = _v;
    function Yv(t) {
      var e = Sn(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }
    var Hv = Yv;
    function Xv(t) {
      return Sn(this, t).get(t);
    }
    var Wv = Xv;
    function qv(t) {
      return Sn(this, t).has(t);
    }
    var Kv = qv;
    function Zv(t, e) {
      var r = Sn(this, t), a = r.size;
      return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
    }
    var Qv = Zv;
    function la(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    la.prototype.clear = Vv, la.prototype.delete = Hv, la.prototype.get = Wv, la.prototype.has = Kv, la.prototype.set = Qv;
    var eo = la, Jv = "Expected a function";
    function wi(t, e) {
      if (typeof t != "function" || e != null && typeof e != "function")
        throw new TypeError(Jv);
      var r = function() {
        var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
        if (i.has(n))
          return i.get(n);
        var s = t.apply(this, a);
        return r.cache = i.set(n, s) || i, s;
      };
      return r.cache = new (wi.Cache || eo)(), r;
    }
    wi.Cache = eo;
    var jv = wi, ec = 500;
    function tc(t) {
      var e = jv(t, function(a) {
        return r.size === ec && r.clear(), a;
      }), r = e.cache;
      return e;
    }
    var rc = tc, ac = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nc = /\\(\\)?/g, ic = rc(function(t) {
      var e = [];
      return t.charCodeAt(0) === 46 && e.push(""), t.replace(ac, function(r, a, n, i) {
        e.push(n ? i.replace(nc, "$1") : a || r);
      }), e;
    }), to = ic;
    function sc(t, e) {
      for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
        n[r] = e(t[r], r, t);
      return n;
    }
    var ro = sc, oc = 1 / 0, ao = Zr ? Zr.prototype : void 0, no = ao ? ao.toString : void 0;
    function io(t) {
      if (typeof t == "string")
        return t;
      if (Cn(t))
        return ro(t, io) + "";
      if (Aa(t))
        return no ? no.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -oc ? "-0" : e;
    }
    var lc = io;
    function uc(t) {
      return t == null ? "" : lc(t);
    }
    var so = uc;
    function fc(t, e) {
      return Cn(t) ? t : Rh(t, e) ? [t] : to(so(t));
    }
    var oo = fc, hc = 1 / 0;
    function vc(t) {
      if (typeof t == "string" || Aa(t))
        return t;
      var e = t + "";
      return e == "0" && 1 / t == -hc ? "-0" : e;
    }
    var xi = vc;
    function cc(t, e) {
      e = oo(e, t);
      for (var r = 0, a = e.length; t != null && r < a; )
        t = t[xi(e[r++])];
      return r && r == a ? t : void 0;
    }
    var dc = cc;
    function gc(t, e, r) {
      var a = t == null ? void 0 : dc(t, e);
      return a === void 0 ? r : a;
    }
    var pc = gc, yc = function() {
      try {
        var t = Ei(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {
      }
    }(), lo = yc;
    function mc(t, e, r) {
      e == "__proto__" && lo ? lo(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : t[e] = r;
    }
    var bc = mc, Ec = Object.prototype, wc = Ec.hasOwnProperty;
    function xc(t, e, r) {
      var a = t[e];
      (!(wc.call(t, e) && js(a, r)) || r === void 0 && !(e in t)) && bc(t, e, r);
    }
    var Tc = xc, Cc = 9007199254740991, Dc = /^(?:0|[1-9]\d*)$/;
    function Sc(t, e) {
      var r = typeof t;
      return e = e ?? Cc, !!e && (r == "number" || r != "symbol" && Dc.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    var Lc = Sc;
    function Ac(t, e, r, a) {
      if (!kr(t))
        return t;
      e = oo(e, t);
      for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
        var u = xi(e[n]), l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return t;
        if (n != s) {
          var f = o[u];
          l = a ? a(f, u, o) : void 0, l === void 0 && (l = kr(f) ? f : Lc(e[n + 1]) ? [] : {});
        }
        Tc(o, u, l), o = o[u];
      }
      return t;
    }
    var Oc = Ac;
    function Nc(t, e, r) {
      return t == null ? t : Oc(t, e, r);
    }
    var Ic = Nc;
    function Mc(t, e) {
      var r = -1, a = t.length;
      for (e || (e = Array(a)); ++r < a; )
        e[r] = t[r];
      return e;
    }
    var Rc = Mc;
    function kc(t) {
      return Cn(t) ? ro(t, xi) : Aa(t) ? [t] : Rc(to(so(t)));
    }
    var Pc = kc, Bc = {
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
        return e = He({}, r, e), function(n, i) {
          var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], f = u ? o[0] : o;
          if (ee(n)) {
            var h = n.indexOf(".") !== -1, v = h && Pc(n);
            if (s.allowGetting && i === void 0) {
              var d;
              return f && (s.beforeGet(f), v && f._private[s.field][n] === void 0 ? d = pc(f._private[s.field], v) : d = f._private[s.field][n]), d;
            } else if (s.allowSetting && i !== void 0) {
              var c = !s.immutableKeys[n];
              if (c) {
                var y = T({}, n, i);
                s.beforeSet(o, y);
                for (var p = 0, g = l.length; p < g; p++) {
                  var m = l[p];
                  s.canSet(m) && (v && f._private[s.field][n] === void 0 ? Ic(m._private[s.field], v, i) : m._private[s.field][n] = i);
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
              }
            }
          } else if (s.allowSetting && S(n)) {
            var b = n, E, M, L = Object.keys(b);
            s.beforeSet(o, b);
            for (var w = 0; w < L.length; w++) {
              E = L[w], M = b[E];
              var k = !s.immutableKeys[E];
              if (k)
                for (var D = 0; D < l.length; D++) {
                  var F = l[D];
                  s.canSet(F) && (F._private[s.field][E] = M);
                }
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          } else if (s.allowBinding && H(n)) {
            var G = n;
            o.on(s.bindingEvent, G);
          } else if (s.allowGetting && n === void 0) {
            var N;
            return f && (s.beforeGet(f), N = f._private[s.field]), N;
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
        return e = He({}, r, e), function(n) {
          var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
          if (ee(n)) {
            for (var l = n.split(/\s+/), f = l.length, h = 0; h < f; h++) {
              var v = l[h];
              if (!Re(v)) {
                var d = !i.immutableKeys[v];
                if (d)
                  for (var c = 0, y = u.length; c < y; c++)
                    u[c]._private[i.field][v] = void 0;
              }
            }
            i.triggerEvent && s[i.triggerFnName](i.event);
          } else if (n === void 0) {
            for (var p = 0, g = u.length; p < g; p++)
              for (var m = u[p]._private[i.field], b = Object.keys(m), E = 0; E < b.length; E++) {
                var M = b[E], L = !i.immutableKeys[M];
                L && (m[M] = void 0);
              }
            i.triggerEvent && s[i.triggerFnName](i.event);
          }
          return s;
        };
      }
      // removeData
    }, Fc = {
      eventAliasesOn: function(e) {
        var r = e;
        r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
          var i = this, s = Array.prototype.slice.call(arguments, 0);
          return new ia(function(o, u) {
            var l = function(d) {
              i.off.apply(i, h), o(d);
            }, f = s.concat([l]), h = f.concat([]);
            i.on.apply(i, f);
          });
        };
      }
    }, ct = {};
    [Ah, Bc, Fc].forEach(function(t) {
      He(ct, t);
    });
    var Gc = {
      animate: ct.animate(),
      animation: ct.animation(),
      animated: ct.animated(),
      clearQueue: ct.clearQueue(),
      delay: ct.delay(),
      delayAnimation: ct.delayAnimation(),
      stop: ct.stop()
    }, Ln = {
      classes: function(e) {
        var r = this;
        if (e === void 0) {
          var a = [];
          return r[0]._private.classes.forEach(function(c) {
            return a.push(c);
          }), a;
        } else
          te(e) || (e = (e || "").match(/\S+/g) || []);
        for (var n = [], i = new Jr(e), s = 0; s < r.length; s++) {
          for (var o = r[s], u = o._private, l = u.classes, f = !1, h = 0; h < e.length; h++) {
            var v = e[h], d = l.has(v);
            if (!d) {
              f = !0;
              break;
            }
          }
          f || (f = l.size !== e.length), f && (u.classes = i, n.push(o));
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
          for (var u = a[s], l = u._private.classes, f = !1, h = 0; h < e.length; h++) {
            var v = e[h], d = l.has(v), c = !1;
            r || n && !d ? (l.add(v), c = !0) : (!r || n && d) && (l.delete(v), c = !0), !f && c && (i.push(u), f = !0);
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
    var st = {
      metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
      // chars we need to escape in let names, etc
      comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
      // binary comparison op (used in data selectors)
      boolOp: "\\?|\\!|\\^",
      // boolean (unary) operators (used in data selectors)
      string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
      // string literals (used in data selectors) -- doublequotes | singlequotes
      number: gt,
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
    st.variable = "(?:[\\w-.]|(?:\\\\" + st.metaChar + "))+", st.className = "(?:[\\w-]|(?:\\\\" + st.metaChar + "))+", st.value = st.string + "|" + st.number, st.id = st.variable, function() {
      var t, e, r;
      for (t = st.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], st.comparatorOp += "|@" + e;
      for (t = st.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (st.comparatorOp += "|\\!" + e);
    }();
    var pt = function() {
      return {
        checks: []
      };
    }, ke = {
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
    }, Ti = [{
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
      return Kl(t.selector, e.selector);
    }), zc = function() {
      for (var t = {}, e, r = 0; r < Ti.length; r++)
        e = Ti[r], t[e.selector] = e.matches;
      return t;
    }(), Vc = function(e, r) {
      return zc[e](r);
    }, Uc = "(" + Ti.map(function(t) {
      return t.selector;
    }).join("|") + ")", ua = function(e) {
      return e.replace(new RegExp("\\\\(" + st.metaChar + ")", "g"), function(r, a) {
        return a;
      });
    }, Dr = function(e, r, a) {
      e[e.length - 1] = a;
    }, Ci = [{
      name: "group",
      // just used for identifying when debugging
      query: !0,
      regex: "(" + st.group + ")",
      populate: function(e, r, a) {
        var n = x(a, 1), i = n[0];
        r.checks.push({
          type: ke.GROUP,
          value: i === "*" ? i : i + "s"
        });
      }
    }, {
      name: "state",
      query: !0,
      regex: Uc,
      populate: function(e, r, a) {
        var n = x(a, 1), i = n[0];
        r.checks.push({
          type: ke.STATE,
          value: i
        });
      }
    }, {
      name: "id",
      query: !0,
      regex: "\\#(" + st.id + ")",
      populate: function(e, r, a) {
        var n = x(a, 1), i = n[0];
        r.checks.push({
          type: ke.ID,
          value: ua(i)
        });
      }
    }, {
      name: "className",
      query: !0,
      regex: "\\.(" + st.className + ")",
      populate: function(e, r, a) {
        var n = x(a, 1), i = n[0];
        r.checks.push({
          type: ke.CLASS,
          value: ua(i)
        });
      }
    }, {
      name: "dataExists",
      query: !0,
      regex: "\\[\\s*(" + st.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = x(a, 1), i = n[0];
        r.checks.push({
          type: ke.DATA_EXIST,
          field: ua(i)
        });
      }
    }, {
      name: "dataCompare",
      query: !0,
      regex: "\\[\\s*(" + st.variable + ")\\s*(" + st.comparatorOp + ")\\s*(" + st.value + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = x(a, 3), i = n[0], s = n[1], o = n[2], u = new RegExp("^" + st.string + "$").exec(o) != null;
        u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
          type: ke.DATA_COMPARE,
          field: ua(i),
          operator: s,
          value: o
        });
      }
    }, {
      name: "dataBool",
      query: !0,
      regex: "\\[\\s*(" + st.boolOp + ")\\s*(" + st.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = x(a, 2), i = n[0], s = n[1];
        r.checks.push({
          type: ke.DATA_BOOL,
          field: ua(s),
          operator: i
        });
      }
    }, {
      name: "metaCompare",
      query: !0,
      regex: "\\[\\[\\s*(" + st.meta + ")\\s*(" + st.comparatorOp + ")\\s*(" + st.number + ")\\s*\\]\\]",
      populate: function(e, r, a) {
        var n = x(a, 3), i = n[0], s = n[1], o = n[2];
        r.checks.push({
          type: ke.META_COMPARE,
          field: ua(i),
          operator: s,
          value: parseFloat(o)
        });
      }
    }, {
      name: "nextQuery",
      separator: !0,
      regex: st.separator,
      populate: function(e, r) {
        var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
        a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
        var o = e[e.length++] = pt();
        return o;
      }
    }, {
      name: "directedEdge",
      separator: !0,
      regex: st.directedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = r, i = pt();
          return a.checks.push({
            type: ke.DIRECTED_EDGE,
            source: n,
            target: i
          }), Dr(e, r, a), e.edgeCount++, i;
        } else {
          var s = pt(), o = r, u = pt();
          return s.checks.push({
            type: ke.NODE_SOURCE,
            source: o,
            target: u
          }), Dr(e, r, s), e.edgeCount++, u;
        }
      }
    }, {
      name: "undirectedEdge",
      separator: !0,
      regex: st.undirectedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = r, i = pt();
          return a.checks.push({
            type: ke.UNDIRECTED_EDGE,
            nodes: [n, i]
          }), Dr(e, r, a), e.edgeCount++, i;
        } else {
          var s = pt(), o = r, u = pt();
          return s.checks.push({
            type: ke.NODE_NEIGHBOR,
            node: o,
            neighbor: u
          }), Dr(e, r, s), u;
        }
      }
    }, {
      name: "child",
      separator: !0,
      regex: st.child,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = pt(), i = e[e.length - 1];
          return a.checks.push({
            type: ke.CHILD,
            parent: i,
            child: n
          }), Dr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = pt(), o = e[e.length - 1], u = pt(), l = pt(), f = pt(), h = pt();
          return s.checks.push({
            type: ke.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [{
            type: ke.TRUE
          }], h.checks.push({
            type: ke.TRUE
          }), u.checks.push({
            type: ke.PARENT,
            // type is swapped on right side queries
            parent: h,
            child: f
            // empty for now
          }), Dr(e, o, s), e.currentSubject = l, e.compoundCount++, f;
        } else {
          var v = pt(), d = pt(), c = [{
            type: ke.PARENT,
            parent: v,
            child: d
          }];
          return v.checks = r.checks, r.checks = c, e.compoundCount++, d;
        }
      }
    }, {
      name: "descendant",
      separator: !0,
      regex: st.descendant,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = pt(), i = e[e.length - 1];
          return a.checks.push({
            type: ke.DESCENDANT,
            ancestor: i,
            descendant: n
          }), Dr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = pt(), o = e[e.length - 1], u = pt(), l = pt(), f = pt(), h = pt();
          return s.checks.push({
            type: ke.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [{
            type: ke.TRUE
          }], h.checks.push({
            type: ke.TRUE
          }), u.checks.push({
            type: ke.ANCESTOR,
            // type is swapped on right side queries
            ancestor: h,
            descendant: f
            // empty for now
          }), Dr(e, o, s), e.currentSubject = l, e.compoundCount++, f;
        } else {
          var v = pt(), d = pt(), c = [{
            type: ke.ANCESTOR,
            ancestor: v,
            descendant: d
          }];
          return v.checks = r.checks, r.checks = c, e.compoundCount++, d;
        }
      }
    }, {
      name: "subject",
      modifier: !0,
      regex: st.subject,
      populate: function(e, r) {
        if (e.currentSubject != null && e.currentSubject !== r)
          return vt("Redefinition of subject in selector `" + e.toString() + "`"), !1;
        e.currentSubject = r;
        var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
        i === ke.DIRECTED_EDGE ? n.type = ke.NODE_TARGET : i === ke.UNDIRECTED_EDGE && (n.type = ke.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
      }
    }];
    Ci.forEach(function(t) {
      return t.regexObj = new RegExp("^" + t.regex);
    });
    var $c = function(e) {
      for (var r, a, n, i = 0; i < Ci.length; i++) {
        var s = Ci[i], o = s.name, u = e.match(s.regexObj);
        if (u != null) {
          a = u, r = s, n = o;
          var l = u[0];
          e = e.substring(l.length);
          break;
        }
      }
      return {
        expr: r,
        match: a,
        name: n,
        remaining: e
      };
    }, _c = function(e) {
      var r = e.match(/^\s+/);
      if (r) {
        var a = r[0];
        e = e.substring(a.length);
      }
      return e;
    }, Yc = function(e) {
      var r = this, a = r.inputText = e, n = r[0] = pt();
      for (r.length = 1, a = _c(a); ; ) {
        var i = $c(a);
        if (i.expr == null)
          return vt("The selector `" + e + "`is invalid"), !1;
        var s = i.match.slice(1), o = i.expr.populate(r, n, s);
        if (o === !1)
          return !1;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
          break;
      }
      var u = r[r.length - 1];
      r.currentSubject != null && (u.subject = r.currentSubject), u.edgeCount = r.edgeCount, u.compoundCount = r.compoundCount;
      for (var l = 0; l < r.length; l++) {
        var f = r[l];
        if (f.compoundCount > 0 && f.edgeCount > 0)
          return vt("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
        if (f.edgeCount > 1)
          return vt("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
        f.edgeCount === 1 && vt("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
      }
      return !0;
    }, Hc = function() {
      if (this.toStringCache != null)
        return this.toStringCache;
      for (var e = function(f) {
        return f ?? "";
      }, r = function(f) {
        return ee(f) ? '"' + f + '"' : e(f);
      }, a = function(f) {
        return " " + f + " ";
      }, n = function(f, h) {
        var v = f.type, d = f.value;
        switch (v) {
          case ke.GROUP: {
            var c = e(d);
            return c.substring(0, c.length - 1);
          }
          case ke.DATA_COMPARE: {
            var y = f.field, p = f.operator;
            return "[" + y + a(e(p)) + r(d) + "]";
          }
          case ke.DATA_BOOL: {
            var g = f.operator, m = f.field;
            return "[" + e(g) + m + "]";
          }
          case ke.DATA_EXIST: {
            var b = f.field;
            return "[" + b + "]";
          }
          case ke.META_COMPARE: {
            var E = f.operator, M = f.field;
            return "[[" + M + a(e(E)) + r(d) + "]]";
          }
          case ke.STATE:
            return d;
          case ke.ID:
            return "#" + d;
          case ke.CLASS:
            return "." + d;
          case ke.PARENT:
          case ke.CHILD:
            return i(f.parent, h) + a(">") + i(f.child, h);
          case ke.ANCESTOR:
          case ke.DESCENDANT:
            return i(f.ancestor, h) + " " + i(f.descendant, h);
          case ke.COMPOUND_SPLIT: {
            var L = i(f.left, h), w = i(f.subject, h), k = i(f.right, h);
            return L + (L.length > 0 ? " " : "") + w + k;
          }
          case ke.TRUE:
            return "";
        }
      }, i = function(f, h) {
        return f.checks.reduce(function(v, d, c) {
          return v + (h === f && c === 0 ? "$" : "") + n(d, h);
        }, "");
      }, s = "", o = 0; o < this.length; o++) {
        var u = this[o];
        s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
      }
      return this.toStringCache = s, s;
    }, Xc = {
      parse: Yc,
      toString: Hc
    }, uo = function(e, r, a) {
      var n, i = ee(e), s = R(e), o = ee(a), u, l, f = !1, h = !1, v = !1;
      switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (u = !i && !s ? "" : "" + e, l = "" + a), f && (e = u = u.toLowerCase(), a = l = l.toLowerCase()), r) {
        case "*=":
          n = u.indexOf(l) >= 0;
          break;
        case "$=":
          n = u.indexOf(l, u.length - l.length) >= 0;
          break;
        case "^=":
          n = u.indexOf(l) === 0;
          break;
        case "=":
          n = e === a;
          break;
        case ">":
          v = !0, n = e > a;
          break;
        case ">=":
          v = !0, n = e >= a;
          break;
        case "<":
          v = !0, n = e < a;
          break;
        case "<=":
          v = !0, n = e <= a;
          break;
        default:
          n = !1;
          break;
      }
      return h && (e != null || !v) && (n = !n), n;
    }, Wc = function(e, r) {
      switch (r) {
        case "?":
          return !!e;
        case "!":
          return !e;
        case "^":
          return e === void 0;
      }
    }, qc = function(e) {
      return e !== void 0;
    }, Di = function(e, r) {
      return e.data(r);
    }, Kc = function(e, r) {
      return e[r]();
    }, Tt = [], wt = function(e, r) {
      return e.checks.every(function(a) {
        return Tt[a.type](a, r);
      });
    };
    Tt[ke.GROUP] = function(t, e) {
      var r = t.value;
      return r === "*" || r === e.group();
    }, Tt[ke.STATE] = function(t, e) {
      var r = t.value;
      return Vc(r, e);
    }, Tt[ke.ID] = function(t, e) {
      var r = t.value;
      return e.id() === r;
    }, Tt[ke.CLASS] = function(t, e) {
      var r = t.value;
      return e.hasClass(r);
    }, Tt[ke.META_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return uo(Kc(e, r), a, n);
    }, Tt[ke.DATA_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return uo(Di(e, r), a, n);
    }, Tt[ke.DATA_BOOL] = function(t, e) {
      var r = t.field, a = t.operator;
      return Wc(Di(e, r), a);
    }, Tt[ke.DATA_EXIST] = function(t, e) {
      var r = t.field;
      return t.operator, qc(Di(e, r));
    }, Tt[ke.UNDIRECTED_EDGE] = function(t, e) {
      var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
      return wt(r, n) && wt(a, i) || wt(a, n) && wt(r, i);
    }, Tt[ke.NODE_NEIGHBOR] = function(t, e) {
      return wt(t.node, e) && e.neighborhood().some(function(r) {
        return r.isNode() && wt(t.neighbor, r);
      });
    }, Tt[ke.DIRECTED_EDGE] = function(t, e) {
      return wt(t.source, e.source()) && wt(t.target, e.target());
    }, Tt[ke.NODE_SOURCE] = function(t, e) {
      return wt(t.source, e) && e.outgoers().some(function(r) {
        return r.isNode() && wt(t.target, r);
      });
    }, Tt[ke.NODE_TARGET] = function(t, e) {
      return wt(t.target, e) && e.incomers().some(function(r) {
        return r.isNode() && wt(t.source, r);
      });
    }, Tt[ke.CHILD] = function(t, e) {
      return wt(t.child, e) && wt(t.parent, e.parent());
    }, Tt[ke.PARENT] = function(t, e) {
      return wt(t.parent, e) && e.children().some(function(r) {
        return wt(t.child, r);
      });
    }, Tt[ke.DESCENDANT] = function(t, e) {
      return wt(t.descendant, e) && e.ancestors().some(function(r) {
        return wt(t.ancestor, r);
      });
    }, Tt[ke.ANCESTOR] = function(t, e) {
      return wt(t.ancestor, e) && e.descendants().some(function(r) {
        return wt(t.descendant, r);
      });
    }, Tt[ke.COMPOUND_SPLIT] = function(t, e) {
      return wt(t.subject, e) && wt(t.left, e) && wt(t.right, e);
    }, Tt[ke.TRUE] = function() {
      return !0;
    }, Tt[ke.COLLECTION] = function(t, e) {
      var r = t.value;
      return r.has(e);
    }, Tt[ke.FILTER] = function(t, e) {
      var r = t.value;
      return r(e);
    };
    var Zc = function(e) {
      var r = this;
      if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === ke.ID)
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
    }, Qc = function(e) {
      for (var r = this, a = 0; a < r.length; a++) {
        var n = r[a];
        if (wt(n, e))
          return !0;
      }
      return !1;
    }, Jc = {
      matches: Qc,
      filter: Zc
    }, Sr = function(e) {
      this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ee(e) && e.match(/^\s*$/) || (pe(e) ? this.addQuery({
        checks: [{
          type: ke.COLLECTION,
          value: e.collection()
        }]
      }) : H(e) ? this.addQuery({
        checks: [{
          type: ke.FILTER,
          value: e
        }]
      }) : ee(e) ? this.parse(e) || (this.invalid = !0) : xt("A selector must be created from a string; found "));
    }, Lr = Sr.prototype;
    [Xc, Jc].forEach(function(t) {
      return He(Lr, t);
    }), Lr.text = function() {
      return this.inputText;
    }, Lr.size = function() {
      return this.length;
    }, Lr.eq = function(t) {
      return this[t];
    }, Lr.sameText = function(t) {
      return !this.invalid && !t.invalid && this.text() === t.text();
    }, Lr.addQuery = function(t) {
      this[this.length++] = t;
    }, Lr.selector = Lr.toString;
    var Ar = {
      allAre: function(e) {
        var r = new Sr(e);
        return this.every(function(a) {
          return r.matches(a);
        });
      },
      is: function(e) {
        var r = new Sr(e);
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
    Ar.allAreNeighbours = Ar.allAreNeighbors, Ar.has = Ar.contains, Ar.equal = Ar.equals = Ar.same;
    var Zt = function(e, r) {
      return function(n, i, s, o) {
        var u = n, l = this, f;
        if (u == null ? f = "" : pe(u) && u.length === 1 && (f = u.id()), l.length === 1 && f) {
          var h = l[0]._private, v = h.traversalCache = h.traversalCache || {}, d = v[r] = v[r] || [], c = Pr(f), y = d[c];
          return y || (d[c] = e.call(l, n, i, s, o));
        } else
          return e.call(l, n, i, s, o);
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
      children: Zt(function(t) {
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
    function Si(t, e, r, a) {
      for (var n = [], i = new Jr(), s = t.cy(), o = s.hasCompoundNodes(), u = 0; u < t.length; u++) {
        var l = t[u];
        r ? n.push(l) : o && a(n, i, l);
      }
      for (; n.length > 0; ) {
        var f = n.shift();
        e(f), i.add(f.id()), o && a(n, i, f);
      }
      return t;
    }
    function fo(t, e, r) {
      if (r.isParent())
        for (var a = r._private.children, n = 0; n < a.length; n++) {
          var i = a[n];
          e.has(i.id()) || t.push(i);
        }
    }
    fa.forEachDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Si(this, t, e, fo);
    };
    function ho(t, e, r) {
      if (r.isChild()) {
        var a = r._private.parent;
        e.has(a.id()) || t.push(a);
      }
    }
    fa.forEachUp = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Si(this, t, e, ho);
    };
    function jc(t, e, r) {
      ho(t, e, r), fo(t, e, r);
    }
    fa.forEachUpAndDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Si(this, t, e, jc);
    }, fa.ancestors = fa.parents;
    var Va, vo;
    Va = vo = {
      data: ct.data({
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
      removeData: ct.removeData({
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
      scratch: ct.data({
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
      removeScratch: ct.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      rscratch: ct.data({
        field: "rscratch",
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !0
      }),
      removeRscratch: ct.removeData({
        field: "rscratch",
        triggerEvent: !1
      }),
      id: function() {
        var e = this[0];
        if (e)
          return e._private.data.id;
      }
    }, Va.attr = Va.data, Va.removeAttr = Va.removeData;
    var ed = vo, An = {};
    function Li(t) {
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
    He(An, {
      degree: Li(function(t, e) {
        return e.source().same(e.target()) ? 2 : 1;
      }),
      indegree: Li(function(t, e) {
        return e.target().same(t) ? 1 : 0;
      }),
      outdegree: Li(function(t, e) {
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
    He(An, {
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
    }), He(An, {
      totalDegree: function(e) {
        for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
          r += a[n].degree(e);
        return r;
      }
    });
    var tr, co, go = function(e, r, a) {
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
    }, po = {
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
        go(e, r, !1);
      },
      onSet: function(e) {
        e.dirtyCompoundBoundsCache();
      },
      canSet: function(e) {
        return !e.locked();
      }
    };
    tr = co = {
      position: ct.data(po),
      // position but no notification to renderer
      silentPosition: ct.data(He({}, po, {
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !1,
        beforeSet: function(e, r) {
          go(e, r, !0);
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
          x: R(e.x) ? e.x : 0,
          y: R(e.y) ? e.y : 0
        }, a = r) : ee(e) && R(r) && (n = {
          x: 0,
          y: 0
        }, n[e] = r), n != null) {
          var i = this.cy();
          i.startBatch();
          for (var s = 0; s < this.length; s++) {
            var o = this[s];
            if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
              var u = o.position(), l = {
                x: u.x + n.x,
                y: u.y + n.y
              };
              a ? o.silentPosition(l) : o.position(l);
            }
          }
          i.endBatch();
        }
        return this;
      },
      silentShift: function(e, r) {
        return S(e) ? this.shift(e, !0) : ee(e) && R(r) && this.shift(e, r, !0), this;
      },
      // get/set the rendered (i.e. on screen) positon of the element
      renderedPosition: function(e, r) {
        var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = S(e) ? e : void 0, u = o !== void 0 || r !== void 0 && ee(e);
        if (a && a.isNode())
          if (u)
            for (var l = 0; l < this.length; l++) {
              var f = this[l];
              r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(bs(o, i, s));
            }
          else {
            var h = a.position();
            return o = vn(h, i, s), e === void 0 ? o : o[e];
          }
        else if (!u)
          return;
        return this;
      },
      // get/set the position relative to the parent
      relativePosition: function(e, r) {
        var a = this[0], n = this.cy(), i = S(e) ? e : void 0, s = i !== void 0 || r !== void 0 && ee(e), o = n.hasCompoundNodes();
        if (a && a.isNode())
          if (s)
            for (var u = 0; u < this.length; u++) {
              var l = this[u], f = o ? l.parent() : null, h = f && f.length > 0, v = h;
              h && (f = f[0]);
              var d = v ? f.position() : {
                x: 0,
                y: 0
              };
              r !== void 0 ? l.position(e, r + d[e]) : i !== void 0 && l.position({
                x: i.x + d.x,
                y: i.y + d.y
              });
            }
          else {
            var c = a.position(), y = o ? a.parent() : null, p = y && y.length > 0, g = p;
            p && (y = y[0]);
            var m = g ? y.position() : {
              x: 0,
              y: 0
            };
            return i = {
              x: c.x - m.x,
              y: c.y - m.y
            }, e === void 0 ? i : i[e];
          }
        else if (!s)
          return;
        return this;
      }
    }, tr.modelPosition = tr.point = tr.position, tr.modelPositions = tr.points = tr.positions, tr.renderedPoint = tr.renderedPosition, tr.relativePoint = tr.relativePosition;
    var td = co, va, Or;
    va = Or = {}, Or.renderedBoundingBox = function(t) {
      var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, u = e.y2 * a + n.y;
      return {
        x1: i,
        x2: s,
        y1: o,
        y2: u,
        w: s - i,
        h: u - o
      };
    }, Or.dirtyCompoundBoundsCache = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
        if (r.isParent()) {
          var a = r._private;
          a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
        }
      }), this);
    }, Or.updateCompoundBounds = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      if (!e.styleEnabled() || !e.hasCompoundNodes())
        return this;
      if (!t && e.batching())
        return this;
      function r(s) {
        if (!s.isParent())
          return;
        var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
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
        }, h = u.boundingBox({
          includeLabels: l,
          includeOverlays: !1,
          // updating the compound bounds happens outside of the regular
          // cache cycle (i.e. before fired events)
          useCache: !1
        }), v = o.position;
        (h.w === 0 || h.h === 0) && (h = {
          w: s.pstyle("width").pfValue,
          h: s.pstyle("height").pfValue
        }, h.x1 = v.x - h.w / 2, h.x2 = v.x + h.w / 2, h.y1 = v.y - h.h / 2, h.y2 = v.y + h.h / 2);
        function d(D, F, G) {
          var N = 0, X = 0, B = F + G;
          return D > 0 && B > 0 && (N = F / B * D, X = G / B * D), {
            biasDiff: N,
            biasComplementDiff: X
          };
        }
        function c(D, F, G, N) {
          if (G.units === "%")
            switch (N) {
              case "width":
                return D > 0 ? G.pfValue * D : 0;
              case "height":
                return F > 0 ? G.pfValue * F : 0;
              case "average":
                return D > 0 && F > 0 ? G.pfValue * (D + F) / 2 : 0;
              case "min":
                return D > 0 && F > 0 ? D > F ? G.pfValue * F : G.pfValue * D : 0;
              case "max":
                return D > 0 && F > 0 ? D > F ? G.pfValue * D : G.pfValue * F : 0;
              default:
                return 0;
            }
          else
            return G.units === "px" ? G.pfValue : 0;
        }
        var y = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (y = y * 100 / f.width.val);
        var p = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
        var g = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (g = g * 100 / f.height.val);
        var m = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (m = m * 100 / f.height.val);
        var b = d(f.width.val - h.w, y, p), E = b.biasDiff, M = b.biasComplementDiff, L = d(f.height.val - h.h, g, m), w = L.biasDiff, k = L.biasComplementDiff;
        o.autoPadding = c(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), v.x = (-E + h.x1 + h.x2 + M) / 2, o.autoHeight = Math.max(h.h, f.height.val), v.y = (-w + h.y1 + h.y2 + k) / 2;
      }
      for (var a = 0; a < this.length; a++) {
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
      }
      return this;
    };
    var Qt = function(e) {
      return e === 1 / 0 || e === -1 / 0 ? 0 : e;
    }, rr = function(e, r, a, n, i) {
      n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
    }, Vr = function(e, r) {
      return r == null ? e : rr(e, r.x1, r.y1, r.x2, r.y2);
    }, Ua = function(e, r, a) {
      return er(e, r, a);
    }, On = function(e, r, a) {
      if (!r.cy().headless()) {
        var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, u, l;
        if (o !== "none") {
          a === "source" ? (u = i.srcX, l = i.srcY) : a === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
          var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
          h.x1 = u - s, h.y1 = l - s, h.x2 = u + s, h.y2 = l + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, dn(h, 1), rr(e, h.x1, h.y1, h.x2, h.y2);
        }
      }
    }, Ai = function(e, r, a) {
      if (!r.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
        if (o) {
          var u = r.pstyle("text-halign"), l = r.pstyle("text-valign"), f = Ua(s, "labelWidth", a), h = Ua(s, "labelHeight", a), v = Ua(s, "labelX", a), d = Ua(s, "labelY", a), c = r.pstyle(n + "text-margin-x").pfValue, y = r.pstyle(n + "text-margin-y").pfValue, p = r.isEdge(), g = r.pstyle(n + "text-rotation"), m = r.pstyle("text-outline-width").pfValue, b = r.pstyle("text-border-width").pfValue, E = b / 2, M = r.pstyle("text-background-padding").pfValue, L = 2, w = h, k = f, D = k / 2, F = w / 2, G, N, X, B;
          if (p)
            G = v - D, N = v + D, X = d - F, B = d + F;
          else {
            switch (u.value) {
              case "left":
                G = v - k, N = v;
                break;
              case "center":
                G = v - D, N = v + D;
                break;
              case "right":
                G = v, N = v + k;
                break;
            }
            switch (l.value) {
              case "top":
                X = d - w, B = d;
                break;
              case "center":
                X = d - F, B = d + F;
                break;
              case "bottom":
                X = d, B = d + w;
                break;
            }
          }
          G += c - Math.max(m, E) - M - L, N += c + Math.max(m, E) + M + L, X += y - Math.max(m, E) - M - L, B += y + Math.max(m, E) + M + L;
          var re = a || "main", K = i.labelBounds, W = K[re] = K[re] || {};
          W.x1 = G, W.y1 = X, W.x2 = N, W.y2 = B, W.w = N - G, W.h = B - X;
          var ae = p && g.strValue === "autorotate", ue = g.pfValue != null && g.pfValue !== 0;
          if (ae || ue) {
            var me = ae ? Ua(i.rstyle, "labelAngle", a) : g.pfValue, ie = Math.cos(me), ge = Math.sin(me), Ee = (G + N) / 2, Ce = (X + B) / 2;
            if (!p) {
              switch (u.value) {
                case "left":
                  Ee = N;
                  break;
                case "right":
                  Ee = G;
                  break;
              }
              switch (l.value) {
                case "top":
                  Ce = B;
                  break;
                case "bottom":
                  Ce = X;
                  break;
              }
            }
            var we = function(Xe, Ie) {
              return Xe = Xe - Ee, Ie = Ie - Ce, {
                x: Xe * ie - Ie * ge + Ee,
                y: Xe * ge + Ie * ie + Ce
              };
            }, De = we(G, X), se = we(G, B), xe = we(N, X), Le = we(N, B);
            G = Math.min(De.x, se.x, xe.x, Le.x), N = Math.max(De.x, se.x, xe.x, Le.x), X = Math.min(De.y, se.y, xe.y, Le.y), B = Math.max(De.y, se.y, xe.y, Le.y);
          }
          var Se = re + "Rot", Oe = K[Se] = K[Se] || {};
          Oe.x1 = G, Oe.y1 = X, Oe.x2 = N, Oe.y2 = B, Oe.w = N - G, Oe.h = B - X, rr(e, G, X, N, B), rr(i.labelBounds.all, G, X, N, B);
        }
        return e;
      }
    }, rd = function(e, r) {
      if (!r.cy().headless()) {
        var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
        if (a > 0 && n > 0) {
          var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, u = (e.w + o * 2) / e.w, l = (e.h + o * 2) / e.h, f = 0, h = 0;
          ["diamond", "pentagon", "round-triangle"].includes(s) ? (u = (e.w + o * 2.4) / e.w, h = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? u = (e.w + o * 2.4) / e.w : s === "star" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.6) / e.h, h = -o / 3.8) : s === "triangle" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.4) / e.h, h = -o / 1.4) : s === "vee" && (u = (e.w + o * 4.4) / e.w, l = (e.h + o * 3.8) / e.h, h = -o * 0.5);
          var v = e.h * l - e.h, d = e.w * u - e.w;
          if (gn(e, [Math.ceil(v / 2), Math.ceil(d / 2)]), f != 0 || h !== 0) {
            var c = Tf(e, f, h);
            ws(e, c);
          }
        }
      }
    }, ad = function(e, r) {
      var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = Yt(), o = e._private, u = e.isNode(), l = e.isEdge(), f, h, v, d, c, y, p = o.rstyle, g = u && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function(Ue) {
        return Ue.pstyle("display").value !== "none";
      }, b = !n || m(e) && (!l || m(e.source()) && m(e.target()));
      if (b) {
        var E = 0, M = 0;
        n && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (M = e.pstyle("overlay-padding").value));
        var L = 0, w = 0;
        n && r.includeUnderlays && (L = e.pstyle("underlay-opacity").value, L !== 0 && (w = e.pstyle("underlay-padding").value));
        var k = Math.max(M, w), D = 0, F = 0;
        if (n && (D = e.pstyle("width").pfValue, F = D / 2), u && r.includeNodes) {
          var G = e.position();
          c = G.x, y = G.y;
          var N = e.outerWidth(), X = N / 2, B = e.outerHeight(), re = B / 2;
          f = c - X, h = c + X, v = y - re, d = y + re, rr(s, f, v, h, d), n && r.includeOutlines && rd(s, e);
        } else if (l && r.includeEdges)
          if (n && !i) {
            var K = e.pstyle("curve-style").strValue;
            if (f = Math.min(p.srcX, p.midX, p.tgtX), h = Math.max(p.srcX, p.midX, p.tgtX), v = Math.min(p.srcY, p.midY, p.tgtY), d = Math.max(p.srcY, p.midY, p.tgtY), f -= F, h += F, v -= F, d += F, rr(s, f, v, h, d), K === "haystack") {
              var W = p.haystackPts;
              if (W && W.length === 2) {
                if (f = W[0].x, v = W[0].y, h = W[1].x, d = W[1].y, f > h) {
                  var ae = f;
                  f = h, h = ae;
                }
                if (v > d) {
                  var ue = v;
                  v = d, d = ue;
                }
                rr(s, f - F, v - F, h + F, d + F);
              }
            } else if (K === "bezier" || K === "unbundled-bezier" || K === "segments" || K === "taxi") {
              var me;
              switch (K) {
                case "bezier":
                case "unbundled-bezier":
                  me = p.bezierPts;
                  break;
                case "segments":
                case "taxi":
                  me = p.linePts;
                  break;
              }
              if (me != null)
                for (var ie = 0; ie < me.length; ie++) {
                  var ge = me[ie];
                  f = ge.x - F, h = ge.x + F, v = ge.y - F, d = ge.y + F, rr(s, f, v, h, d);
                }
            }
          } else {
            var Ee = e.source(), Ce = Ee.position(), we = e.target(), De = we.position();
            if (f = Ce.x, h = De.x, v = Ce.y, d = De.y, f > h) {
              var se = f;
              f = h, h = se;
            }
            if (v > d) {
              var xe = v;
              v = d, d = xe;
            }
            f -= F, h += F, v -= F, d += F, rr(s, f, v, h, d);
          }
        if (n && r.includeEdges && l && (On(s, e, "mid-source"), On(s, e, "mid-target"), On(s, e, "source"), On(s, e, "target")), n) {
          var Le = e.pstyle("ghost").value === "yes";
          if (Le) {
            var Se = e.pstyle("ghost-offset-x").pfValue, Oe = e.pstyle("ghost-offset-y").pfValue;
            rr(s, s.x1 + Se, s.y1 + Oe, s.x2 + Se, s.y2 + Oe);
          }
        }
        var Fe = o.bodyBounds = o.bodyBounds || {};
        xs(Fe, s), gn(Fe, g), dn(Fe, 1), n && (f = s.x1, h = s.x2, v = s.y1, d = s.y2, rr(s, f - k, v - k, h + k, d + k));
        var Xe = o.overlayBounds = o.overlayBounds || {};
        xs(Xe, s), gn(Xe, g), dn(Xe, 1);
        var Ie = o.labelBounds = o.labelBounds || {};
        Ie.all != null ? xf(Ie.all) : Ie.all = Yt(), n && r.includeLabels && (r.includeMainLabels && Ai(s, e, null), l && (r.includeSourceLabels && Ai(s, e, "source"), r.includeTargetLabels && Ai(s, e, "target")));
      }
      return s.x1 = Qt(s.x1), s.y1 = Qt(s.y1), s.x2 = Qt(s.x2), s.y2 = Qt(s.y2), s.w = Qt(s.x2 - s.x1), s.h = Qt(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (gn(s, g), dn(s, 1)), s;
    }, yo = function(e) {
      var r = 0, a = function(s) {
        return (s ? 1 : 0) << r++;
      }, n = 0;
      return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
    }, mo = function(e) {
      if (e.isEdge()) {
        var r = e.source().position(), a = e.target().position(), n = function(s) {
          return Math.round(s);
        };
        return $u([n(r.x), n(r.y), n(a.x), n(a.y)]);
      } else
        return 0;
    }, bo = function(e, r) {
      var a = e._private, n, i = e.isEdge(), s = r == null ? Eo : yo(r), o = s === Eo, u = mo(e), l = a.bbCachePosKey === u, f = r.useCache && l, h = function(y) {
        return y._private.bbCache == null || y._private.styleDirty;
      }, v = !f || h(e) || i && h(e.source()) || h(e.target());
      if (v ? (l || e.recalculateRenderedStyle(f), n = ad(e, $a), a.bbCache = n, a.bbCachePosKey = u) : n = a.bbCache, !o) {
        var d = e.isNode();
        n = Yt(), (r.includeNodes && d || r.includeEdges && !d) && (r.includeOverlays ? Vr(n, a.overlayBounds) : Vr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? Vr(n, a.labelBounds.all) : (r.includeMainLabels && Vr(n, a.labelBounds.mainRot), r.includeSourceLabels && Vr(n, a.labelBounds.sourceRot), r.includeTargetLabels && Vr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      }
      return n;
    }, $a = {
      includeNodes: !0,
      includeEdges: !0,
      includeLabels: !0,
      includeMainLabels: !0,
      includeSourceLabels: !0,
      includeTargetLabels: !0,
      includeOverlays: !0,
      includeUnderlays: !0,
      includeOutlines: !0,
      useCache: !0
    }, Eo = yo($a), wo = At($a);
    Or.boundingBox = function(t) {
      var e;
      if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
        t === void 0 ? t = $a : t = wo(t), e = bo(this[0], t);
      else {
        e = Yt(), t = t || $a;
        var r = wo(t), a = this, n = a.cy(), i = n.styleEnabled();
        if (i)
          for (var s = 0; s < a.length; s++) {
            var o = a[s], u = o._private, l = mo(o), f = u.bbCachePosKey === l, h = r.useCache && f && !u.styleDirty;
            o.recalculateRenderedStyle(h);
          }
        this.updateCompoundBounds(!t.useCache);
        for (var v = 0; v < a.length; v++) {
          var d = a[v];
          Vr(e, bo(d, r));
        }
      }
      return e.x1 = Qt(e.x1), e.y1 = Qt(e.y1), e.x2 = Qt(e.x2), e.y2 = Qt(e.y2), e.w = Qt(e.x2 - e.x1), e.h = Qt(e.y2 - e.y1), e;
    }, Or.dirtyBoundingBoxCache = function() {
      for (var t = 0; t < this.length; t++) {
        var e = this[t]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
      }
      return this.emitAndNotify("bounds"), this;
    }, Or.boundingBoxAt = function(t) {
      var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
      if (a && (n = e.filter(function(l) {
        return l.isParent();
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
      var u = wf(this.boundingBox({
        useCache: !1
      }));
      return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), u;
    }, va.boundingbox = va.bb = va.boundingBox, va.renderedBoundingbox = va.renderedBoundingBox;
    var nd = Or, _a, Ya;
    _a = Ya = {};
    var xo = function(e) {
      e.uppercaseName = Pt(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Pt(e.outerName), _a[e.name] = function() {
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
      }, _a["outer" + e.uppercaseName] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            var o = a[e.name](), u = a.pstyle("border-width").pfValue, l = 2 * a.padding();
            return o + u + l;
          } else
            return 1;
      }, _a["rendered" + e.uppercaseName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.name]();
          return n * this.cy().zoom();
        }
      }, _a["rendered" + e.uppercaseOuterName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.outerName]();
          return n * this.cy().zoom();
        }
      };
    };
    xo({
      name: "width"
    }), xo({
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
    var id = Ya, sd = function(e, r) {
      if (e.isEdge())
        return r(e);
    }, od = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy();
        return vn(r(e), a.zoom(), a.pan());
      }
    }, ld = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy(), n = a.pan(), i = a.zoom();
        return r(e).map(function(s) {
          return vn(s, i, n);
        });
      }
    }, ud = function(e) {
      return e.renderer().getControlPoints(e);
    }, fd = function(e) {
      return e.renderer().getSegmentPoints(e);
    }, hd = function(e) {
      return e.renderer().getSourceEndpoint(e);
    }, vd = function(e) {
      return e.renderer().getTargetEndpoint(e);
    }, cd = function(e) {
      return e.renderer().getEdgeMidpoint(e);
    }, To = {
      controlPoints: {
        get: ud,
        mult: !0
      },
      segmentPoints: {
        get: fd,
        mult: !0
      },
      sourceEndpoint: {
        get: hd
      },
      targetEndpoint: {
        get: vd
      },
      midpoint: {
        get: cd
      }
    }, dd = function(e) {
      return "rendered" + e[0].toUpperCase() + e.substr(1);
    }, gd = Object.keys(To).reduce(function(t, e) {
      var r = To[e], a = dd(e);
      return t[e] = function() {
        return sd(this, r.get);
      }, r.mult ? t[a] = function() {
        return ld(this, r.get);
      } : t[a] = function() {
        return od(this, r.get);
      }, t;
    }, {}), pd = He({}, td, nd, id, gd);
    /*!
    	  Event object based on jQuery events, MIT license
    
    	  https://jquery.org/license/
    	  https://tldrlegal.com/license/mit-license
    	  https://github.com/jquery/jquery/blob/master/src/event.js
    	  */
    var Co = function(e, r) {
      this.recycle(e, r);
    };
    function Ha() {
      return !1;
    }
    function Nn() {
      return !0;
    }
    Co.prototype = {
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
    var Do = /^([^.]+)(\.(?:[^.]+))?$/, yd = ".*", So = {
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
    }, Lo = Object.keys(So), md = {};
    function In() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : md, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Lo.length; r++) {
        var a = Lo[r];
        this[a] = t[a] || So[a];
      }
      this.context = e || this.context, this.listeners = [], this.emitting = 0;
    }
    var Nr = In.prototype, Ao = function(e, r, a, n, i, s, o) {
      H(n) && (i = n, n = null), o && (s == null ? s = o : s = He({}, s, o));
      for (var u = te(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++) {
        var f = u[l];
        if (!Re(f)) {
          var h = f.match(Do);
          if (h) {
            var v = h[1], d = h[2] ? h[2] : null, c = r(e, f, v, d, n, i, s);
            if (c === !1)
              break;
          }
        }
      }
    }, Oo = function(e, r) {
      return e.addEventFields(e.context, r), new Co(r.type, r);
    }, bd = function(e, r, a) {
      if (dt(a)) {
        r(e, a);
        return;
      } else if (S(a)) {
        r(e, Oo(e, a));
        return;
      }
      for (var n = te(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
        var s = n[i];
        if (!Re(s)) {
          var o = s.match(Do);
          if (o) {
            var u = o[1], l = o[2] ? o[2] : null, f = Oo(e, {
              type: u,
              namespace: l,
              target: e.context
            });
            r(e, f);
          }
        }
      }
    };
    Nr.on = Nr.addListener = function(t, e, r, a, n) {
      return Ao(this, function(i, s, o, u, l, f, h) {
        H(f) && i.listeners.push({
          event: s,
          // full event string
          callback: f,
          // callback to run
          type: o,
          // the event type (e.g. 'click')
          namespace: u,
          // the event namespace (e.g. ".foo")
          qualifier: l,
          // a restriction on whether to match this emitter
          conf: h
          // additional configuration
        });
      }, t, e, r, a, n), this;
    }, Nr.one = function(t, e, r, a) {
      return this.on(t, e, r, a, {
        one: !0
      });
    }, Nr.removeListener = Nr.off = function(t, e, r, a) {
      var n = this;
      this.emitting !== 0 && (this.listeners = Wu(this.listeners));
      for (var i = this.listeners, s = function(l) {
        var f = i[l];
        Ao(n, function(h, v, d, c, y, p) {
          if ((f.type === d || t === "*") && (!c && f.namespace !== ".*" || f.namespace === c) && (!y || h.qualifierCompare(f.qualifier, y)) && (!p || f.callback === p))
            return i.splice(l, 1), !1;
        }, t, e, r, a);
      }, o = i.length - 1; o >= 0; o--)
        s(o);
      return this;
    }, Nr.removeAllListeners = function() {
      return this.removeListener("*");
    }, Nr.emit = Nr.trigger = function(t, e, r) {
      var a = this.listeners, n = a.length;
      return this.emitting++, te(e) || (e = [e]), bd(this, function(i, s) {
        r != null && (a = [{
          event: s.event,
          type: s.type,
          namespace: s.namespace,
          callback: r
        }], n = a.length);
        for (var o = function(f) {
          var h = a[f];
          if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === yd) && i.eventMatches(i.context, h, s)) {
            var v = [s];
            e != null && Ku(v, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(y) {
              return y !== h;
            }));
            var d = i.callbackContext(i.context, h, s), c = h.callback.apply(d, v);
            i.afterEmit(i.context, h, s), c === !1 && (s.stopPropagation(), s.preventDefault());
          }
        }, u = 0; u < n; u++)
          o(u);
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
      }, t), this.emitting--, this;
    };
    var Ed = {
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
    }, Mn = function(e) {
      return ee(e) ? new Sr(e) : e;
    }, No = {
      createEmitter: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e], a = r._private;
          a.emitter || (a.emitter = new In(Ed, r));
        }
        return this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        for (var n = Mn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a);
        }
        return this;
      },
      removeListener: function(e, r, a) {
        for (var n = Mn(r), i = 0; i < this.length; i++) {
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
        for (var n = Mn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().one(e, n, a);
        }
        return this;
      },
      once: function(e, r, a) {
        for (var n = Mn(r), i = 0; i < this.length; i++) {
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
    ct.eventAliasesOn(No);
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
          return new Sr(e).filter(this);
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
        for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, u = s ? i : n, l = 0; l < o.length; l++) {
          var f = o[l];
          u.has(f) && a.push(f);
        }
        return a;
      },
      xor: function(e) {
        var r = this._private.cy;
        ee(e) && (e = r.$(e));
        var a = this.spawn(), n = this, i = e, s = function(u, l) {
          for (var f = 0; f < u.length; f++) {
            var h = u[f], v = h._private.data.id, d = l.hasElementWithId(v);
            d || a.push(h);
          }
        };
        return s(n, i), s(i, n), a;
      },
      diff: function(e) {
        var r = this._private.cy;
        ee(e) && (e = r.$(e));
        var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, u = function(f, h, v) {
          for (var d = 0; d < f.length; d++) {
            var c = f[d], y = c._private.data.id, p = h.hasElementWithId(y);
            p ? i.merge(c) : v.push(c);
          }
        };
        return u(s, o, a), u(o, s, n), {
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
          var o = e[s], u = o._private.data.id, l = !i.has(u);
          if (l) {
            var f = this.length++;
            this[f] = o, i.set(u, {
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
          var o = this.length - 1, u = this[o], l = u._private.data.id;
          this[o] = void 0, this[e] = u, i.set(l, {
            ele: u,
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
          var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          u > a && (a = u, n = o);
        }
        return {
          value: a,
          ele: n
        };
      },
      min: function(e, r) {
        for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          u < a && (a = u, n = o);
        }
        return {
          value: a,
          ele: n
        };
      }
    }, lt = Io;
    lt.u = lt["|"] = lt["+"] = lt.union = lt.or = lt.add, lt["\\"] = lt["!"] = lt["-"] = lt.difference = lt.relativeComplement = lt.subtract = lt.not, lt.n = lt["&"] = lt["."] = lt.and = lt.intersection = lt.intersect, lt["^"] = lt["(+)"] = lt["(-)"] = lt.symmetricDifference = lt.symdiff = lt.xor, lt.fnFilter = lt.filterFn = lt.stdFilter = lt.filter, lt.complement = lt.abscomp = lt.absoluteComplement;
    var wd = {
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
    }, Mo = function(e, r) {
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
      var u = o(e) - o(r);
      if (u !== 0)
        return u;
      var l = e.pstyle("z-index").value - r.pstyle("z-index").value;
      return l !== 0 ? l : e.poolIndex() - r.poolIndex();
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
        return this.sort(Mo);
      },
      zDepth: function() {
        var e = this[0];
        if (e) {
          var r = e._private, a = r.group;
          if (a === "nodes") {
            var n = r.data.parent ? e.parents().size() : 0;
            return e.isParent() ? n : ii - 1;
          } else {
            var i = r.source, s = r.target, o = i.zDepth(), u = s.zDepth();
            return Math.max(o, u, 0);
          }
        }
      }
    };
    Rn.each = Rn.forEach;
    var xd = function() {
      var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : _(Symbol)) != e && _(Symbol.iterator) != e;
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
    xd();
    var Td = At({
      nodeDimensionsIncludeLabels: !1
    }), kn = {
      // Calculates and returns node dimensions { x, y } based on options given
      layoutDimensions: function(e) {
        e = Td(e);
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
        }), i = this.cy(), s = r.eles, o = function(L) {
          return L.id();
        }, u = it(a, o);
        e.emit({
          type: "layoutstart",
          layout: e
        }), e.animations = [];
        var l = function(L, w, k) {
          var D = {
            x: w.x1 + w.w / 2,
            y: w.y1 + w.h / 2
          }, F = {
            // scale from center of bounding box (not necessarily 0,0)
            x: (k.x - D.x) * L,
            y: (k.y - D.y) * L
          };
          return {
            x: D.x + F.x,
            y: D.y + F.y
          };
        }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
          if (!f)
            return null;
          for (var L = Yt(), w = 0; w < n.length; w++) {
            var k = n[w], D = u(k, w);
            Cf(L, D.x, D.y);
          }
          return L;
        }, v = h(), d = it(function(M, L) {
          var w = u(M, L);
          if (f) {
            var k = Math.abs(r.spacingFactor);
            w = l(k, v, w);
          }
          return r.transform != null && (w = r.transform(M, w)), w;
        }, o);
        if (r.animate) {
          for (var c = 0; c < n.length; c++) {
            var y = n[c], p = d(y, c), g = r.animateFilter == null || r.animateFilter(y, c);
            if (g) {
              var m = y.animation({
                position: p,
                duration: r.animationDuration,
                easing: r.animationEasing
              });
              e.animations.push(m);
            } else
              y.position(p);
          }
          if (r.fit) {
            var b = i.animation({
              fit: {
                boundingBox: s.boundingBoxAt(d),
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
          n.positions(d), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
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
        return r.makeLayout(He({}, e, {
          eles: this
        }));
      }
    };
    kn.createLayout = kn.makeLayout = kn.layout;
    function Ro(t, e, r) {
      var a = r._private, n = a.styleCache = a.styleCache || [], i;
      return (i = n[t]) != null || (i = n[t] = e(r)), i;
    }
    function Pn(t, e) {
      return t = Pr(t), function(a) {
        return Ro(t, e, a);
      };
    }
    function Bn(t, e) {
      t = Pr(t);
      var r = function(n) {
        return e.call(n);
      };
      return function() {
        var n = this[0];
        if (n)
          return Ro(t, r, n);
      };
    }
    var Ot = {
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
          var u = this[0];
          return u ? i.getRawStyle(u) : void 0;
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
          for (var u = 0; u < i.length; u++) {
            var l = i[u];
            n.removeBypasses(l, e, a);
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
              var u = s[o], l = u.pstyle("opacity").value;
              i = l * i;
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
    function Oi(t, e) {
      var r = t._private, a = r.data.parent ? t.parents() : null;
      if (a)
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          if (!e(i))
            return !1;
        }
      return !0;
    }
    function Ni(t) {
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
            return !s || Oi(i, a);
          var u = o.source, l = o.target;
          return r(u) && (!s || Oi(u, r)) && (u === l || r(l) && (!s || Oi(l, r)));
        }
      };
    }
    var ca = Pn("eleTakesUpSpace", function(t) {
      return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
    });
    Ot.takesUpSpace = Bn("takesUpSpace", Ni({
      ok: ca
    }));
    var Cd = Pn("eleInteractive", function(t) {
      return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && ca(t);
    }), Dd = Pn("parentInteractive", function(t) {
      return t.pstyle("visibility").value === "visible" && ca(t);
    });
    Ot.interactive = Bn("interactive", Ni({
      ok: Cd,
      parentOk: Dd,
      edgeOkViaNode: ca
    })), Ot.noninteractive = function() {
      var t = this[0];
      if (t)
        return !t.interactive();
    };
    var Sd = Pn("eleVisible", function(t) {
      return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && ca(t);
    }), Ld = ca;
    Ot.visible = Bn("visible", Ni({
      ok: Sd,
      edgeOkViaNode: Ld
    })), Ot.hidden = function() {
      var t = this[0];
      if (t)
        return !t.visible();
    }, Ot.isBundledBezier = Bn("isBundledBezier", function() {
      return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
    }), Ot.bypass = Ot.css = Ot.style, Ot.renderedCss = Ot.renderedStyle, Ot.removeBypass = Ot.removeCss = Ot.removeStyle, Ot.pstyle = Ot.parsedStyle;
    var Ir = {};
    function ko(t) {
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
            var u = this[o], l = !t.ableField || u._private[t.ableField], f = u._private[t.field] != t.value;
            if (t.overrideAble) {
              var h = t.overrideAble(u);
              if (h !== void 0 && (l = h, !h))
                return this;
            }
            l && (u._private[t.field] = t.value, f && r.push(u));
          }
          var v = this.spawn(r);
          v.updateStyle(), v.emit(t.event), s && v.emit(s);
        }
        return this;
      };
    }
    function da(t) {
      Ir[t.field] = function() {
        var e = this[0];
        if (e) {
          if (t.overrideField) {
            var r = t.overrideField(e);
            if (r !== void 0)
              return r;
          }
          return e._private[t.field];
        }
      }, Ir[t.on] = ko({
        event: t.on,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !0
      }), Ir[t.off] = ko({
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
    }), Ir.deselect = Ir.unselect, Ir.grabbed = function() {
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
    }), Ir.inactive = function() {
      var t = this[0];
      if (t)
        return !t._private.active;
    };
    var Bt = {}, Po = function(e) {
      return function(a) {
        for (var n = this, i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          if (o.isNode()) {
            for (var u = !1, l = o.connectedEdges(), f = 0; f < l.length; f++) {
              var h = l[f], v = h.source(), d = h.target();
              if (e.noIncomingEdges && d === o && v !== o || e.noOutgoingEdges && v === o && d !== o) {
                u = !0;
                break;
              }
            }
            u || i.push(o);
          }
        }
        return this.spawn(i, !0).filter(a);
      };
    }, Bo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          if (s.isNode())
            for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
              var l = o[u], f = l.source(), h = l.target();
              e.outgoing && f === s ? (n.push(l), n.push(h)) : e.incoming && h === s && (n.push(l), n.push(f));
            }
        }
        return this.spawn(n, !0).filter(r);
      };
    }, Fo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = {}; ; ) {
          var s = e.outgoing ? a.outgoers() : a.incomers();
          if (s.length === 0)
            break;
          for (var o = !1, u = 0; u < s.length; u++) {
            var l = s[u], f = l.id();
            i[f] || (i[f] = !0, n.push(l), o = !0);
          }
          if (!o)
            break;
          a = s;
        }
        return this.spawn(n, !0).filter(r);
      };
    };
    Bt.clearTraversalCache = function() {
      for (var t = 0; t < this.length; t++)
        this[t]._private.traversalCache = null;
    }, He(Bt, {
      // get the root nodes in the DAG
      roots: Po({
        noIncomingEdges: !0
      }),
      // get the leaf nodes in the DAG
      leaves: Po({
        noOutgoingEdges: !0
      }),
      // normally called children in graph theory
      // these nodes =edges=> outgoing nodes
      outgoers: Zt(Bo({
        outgoing: !0
      }), "outgoers"),
      // aka DAG descendants
      successors: Fo({
        outgoing: !0
      }),
      // normally called parents in graph theory
      // these nodes <=edges= incoming nodes
      incomers: Zt(Bo({
        incoming: !0
      }), "incomers"),
      // aka DAG ancestors
      predecessors: Fo({
        incoming: !0
      })
    }), He(Bt, {
      neighborhood: Zt(function(t) {
        for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
          for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
            var o = i[s], u = o.source(), l = o.target(), f = n === u ? l : u;
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
    }), Bt.neighbourhood = Bt.neighborhood, Bt.closedNeighbourhood = Bt.closedNeighborhood, Bt.openNeighbourhood = Bt.openNeighborhood, He(Bt, {
      source: Zt(function(e) {
        var r = this[0], a;
        return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "source"),
      target: Zt(function(e) {
        var r = this[0], a;
        return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "target"),
      sources: Go({
        attr: "source"
      }),
      targets: Go({
        attr: "target"
      })
    });
    function Go(t) {
      return function(r) {
        for (var a = [], n = 0; n < this.length; n++) {
          var i = this[n], s = i._private[t.attr];
          s && a.push(s);
        }
        return this.spawn(a, !0).filter(r);
      };
    }
    He(Bt, {
      edgesWith: Zt(zo(), "edgesWith"),
      edgesTo: Zt(zo({
        thisIsSrc: !0
      }), "edgesTo")
    });
    function zo(t) {
      return function(r) {
        var a = [], n = this._private.cy, i = t || {};
        ee(r) && (r = n.$(r));
        for (var s = 0; s < r.length; s++)
          for (var o = r[s]._private.edges, u = 0; u < o.length; u++) {
            var l = o[u], f = l._private.data, h = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), v = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), d = h || v;
            d && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !h || i.thisIsTgt && !v) || a.push(l));
          }
        return this.spawn(a, !0);
      };
    }
    He(Bt, {
      connectedEdges: Zt(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          if (n.isNode())
            for (var i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              e.push(o);
            }
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedEdges"),
      connectedNodes: Zt(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedNodes"),
      parallelEdges: Zt(Vo(), "parallelEdges"),
      codirectedEdges: Zt(Vo({
        codirected: !0
      }), "codirectedEdges")
    });
    function Vo(t) {
      var e = {
        codirected: !1
      };
      return t = He({}, e, t), function(a) {
        for (var n = [], i = this.edges(), s = t, o = 0; o < i.length; o++)
          for (var u = i[o], l = u._private, f = l.source, h = f._private.data.id, v = l.data.target, d = f._private.edges, c = 0; c < d.length; c++) {
            var y = d[c], p = y._private.data, g = p.target, m = p.source, b = g === v && m === h, E = h === g && v === m;
            (s.codirected && b || !s.codirected && (b || E)) && n.push(y);
          }
        return this.spawn(n, !0).filter(a);
      };
    }
    He(Bt, {
      components: function(e) {
        var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
        e != null && i.empty() && (i = e.sources());
        var o = function(f, h) {
          n.merge(f), i.unmerge(f), h.merge(f);
        };
        if (i.empty())
          return r.spawn();
        var u = function() {
          var f = a.collection();
          s.push(f);
          var h = i[0];
          o(h, f), r.bfs({
            directed: !1,
            roots: h,
            visit: function(d) {
              return o(d, f);
            }
          }), f.forEach(function(v) {
            v.connectedEdges().forEach(function(d) {
              r.has(d) && f.has(d.source()) && f.has(d.target()) && f.merge(d);
            });
          });
        };
        do
          u();
        while (i.length > 0);
        return s;
      },
      component: function() {
        var e = this[0];
        return e.cy().mutableElements().components(e)[0];
      }
    }), Bt.componentsOf = Bt.components;
    var Nt = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (e === void 0) {
        xt("A collection must have a reference to the core");
        return;
      }
      var i = new ur(), s = !1;
      if (!r)
        r = [];
      else if (r.length > 0 && S(r[0]) && !Ae(r[0])) {
        s = !0;
        for (var o = [], u = new Jr(), l = 0, f = r.length; l < f; l++) {
          var h = r[l];
          h.data == null && (h.data = {});
          var v = h.data;
          if (v.id == null)
            v.id = ps();
          else if (e.hasElementWithId(v.id) || u.has(v.id))
            continue;
          var d = new hn(e, h, !1);
          o.push(d), u.add(v.id);
        }
        r = o;
      }
      this.length = 0;
      for (var c = 0, y = r.length; c < y; c++) {
        var p = r[c][0];
        if (p != null) {
          var g = p._private.data.id;
          (!a || !i.has(g)) && (a && i.set(g, {
            index: this.length,
            ele: p
          }), this[this.length] = p, this.length++);
        }
      }
      this._private = {
        eles: this,
        cy: e,
        get map() {
          return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
        },
        set map(m) {
          this.lazyMap = m;
        },
        rebuildMap: function() {
          for (var b = this.lazyMap = new ur(), E = this.eles, M = 0; M < E.length; M++) {
            var L = E[M];
            b.set(L.id(), {
              index: M,
              ele: L
            });
          }
        }
      }, a && (this._private.map = i), s && !n && this.restore();
    }, mt = hn.prototype = Nt.prototype = Objec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        