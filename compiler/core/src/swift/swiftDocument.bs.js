// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                       = require("bs-platform/lib/js/list.js");
var Block                      = require("bs-platform/lib/js/block.js");
var Pervasives                 = require("bs-platform/lib/js/pervasives.js");
var Json_decode                = require("bs-json/src/Json_decode.js");
var Color$LonaCompilerCore     = require("../core/color.bs.js");
var TextStyle$LonaCompilerCore = require("../core/textStyle.bs.js");

function join(sep, nodes) {
  if (nodes) {
    return List.fold_left((function (acc, node) {
                  return Pervasives.$at(acc, /* :: */[
                              sep,
                              /* :: */[
                                node,
                                /* [] */0
                              ]
                            ]);
                }), /* [] */0, nodes);
  } else {
    return /* [] */0;
  }
}

function joinGroups(sep, groups) {
  var nonEmpty = List.filter((function (x) {
            return +(List.length(x) > 0);
          }))(groups);
  if (nonEmpty) {
    return List.fold_left((function (acc, nodes) {
                  return Pervasives.$at(acc, Pervasives.$at(/* :: */[
                                  sep,
                                  /* [] */0
                                ], nodes));
                }), nonEmpty[0], nonEmpty[1]);
  } else {
    return /* [] */0;
  }
}

function lonaValue(colors, textStyles, value) {
  var match = value[/* ltype */0];
  if (match.tag) {
    var alias = match[0];
    switch (alias) {
      case "Color" : 
          var rawValue = Json_decode.string(value[/* data */1]);
          var match$1 = Color$LonaCompilerCore.find(colors, rawValue);
          if (match$1) {
            return /* MemberExpression */Block.__(1, [/* :: */[
                        /* SwiftIdentifier */Block.__(6, ["Colors"]),
                        /* :: */[
                          /* SwiftIdentifier */Block.__(6, [match$1[0][/* id */0]]),
                          /* [] */0
                        ]
                      ]]);
          } else {
            return /* LiteralExpression */Block.__(0, [/* Color */Block.__(4, [rawValue])]);
          }
      case "TextStyle" : 
          var rawValue$1 = Json_decode.string(value[/* data */1]);
          var match$2 = TextStyle$LonaCompilerCore.find(textStyles[/* styles */0], rawValue$1);
          if (match$2) {
            return /* MemberExpression */Block.__(1, [/* :: */[
                        /* SwiftIdentifier */Block.__(6, ["TextStyles"]),
                        /* :: */[
                          /* SwiftIdentifier */Block.__(6, [match$2[0][/* id */0]]),
                          /* [] */0
                        ]
                      ]]);
          } else {
            return /* MemberExpression */Block.__(1, [/* :: */[
                        /* SwiftIdentifier */Block.__(6, ["TextStyles"]),
                        /* :: */[
                          /* SwiftIdentifier */Block.__(6, [textStyles[/* defaultStyle */1][/* id */0]]),
                          /* [] */0
                        ]
                      ]]);
          }
      default:
        return /* SwiftIdentifier */Block.__(6, ["UnknownNamedTypeAlias" + alias]);
    }
  } else {
    var typeName = match[0];
    switch (typeName) {
      case "Boolean" : 
          return /* LiteralExpression */Block.__(0, [/* Boolean */Block.__(0, [Json_decode.bool(value[/* data */1])])]);
      case "Number" : 
          return /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [Json_decode.$$float(value[/* data */1])])]);
      case "String" : 
          return /* LiteralExpression */Block.__(0, [/* String */Block.__(3, [Json_decode.string(value[/* data */1])])]);
      default:
        return /* SwiftIdentifier */Block.__(6, ["UnknownReferenceType: " + typeName]);
    }
  }
}

function importFramework(framework) {
  if (framework !== 0) {
    return /* ImportDeclaration */Block.__(11, ["AppKit"]);
  } else {
    return /* ImportDeclaration */Block.__(11, ["UIKit"]);
  }
}

function colorTypeName(framework) {
  if (framework !== 0) {
    return "NSColor";
  } else {
    return "UIColor";
  }
}

function fontTypeName(framework) {
  if (framework !== 0) {
    return "NSFont";
  } else {
    return "UIFont";
  }
}

function layoutPriorityTypeDoc(framework) {
  if (framework !== 0) {
    return /* MemberExpression */Block.__(1, [/* :: */[
                /* SwiftIdentifier */Block.__(6, ["NSLayoutConstraint"]),
                /* :: */[
                  /* SwiftIdentifier */Block.__(6, ["Priority"]),
                  /* [] */0
                ]
              ]]);
  } else {
    return /* SwiftIdentifier */Block.__(6, ["UILayoutPriority"]);
  }
}

function labelAttributedTextName(framework) {
  if (framework !== 0) {
    return "attributedStringValue";
  } else {
    return "attributedText";
  }
}

function labelTextName(framework) {
  if (framework !== 0) {
    return "stringValue";
  } else {
    return "text";
  }
}

exports.join                    = join;
exports.joinGroups              = joinGroups;
exports.lonaValue               = lonaValue;
exports.importFramework         = importFramework;
exports.colorTypeName           = colorTypeName;
exports.fontTypeName            = fontTypeName;
exports.layoutPriorityTypeDoc   = layoutPriorityTypeDoc;
exports.labelAttributedTextName = labelAttributedTextName;
exports.labelTextName           = labelTextName;
/* No side effect */
