javascript:(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){!function(){var e=document.getElementById("gridifyStyleSheet");if(e)return e.parentNode.removeChild(e),!1;e=document.createElement("style"),window.gridifyRootSelector||(window.gridifyRootSelector=window.prompt("Enter Root Element","html"));var t=require("./style")(gridifyRootSelector);e.appendChild(document.createTextNode(t)),e.id="gridifyStyleSheet",document.head.appendChild(e)}();},{"./style":2}],2:[function(require,module,exports){module.exports=function(n){return"\n    "+n+" {\n      position: relative;\n    }\n\n    "+n+":after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(to bottom, #0FF 0, rgba(255, 255, 255, 0) 1px);\n      background-repeat: repeat-y;\n      background-size: 100% 1rem;\n      background-color: transparent;\n      opacity: 0.825;\n      z-index: 1000;\n      pointer-events: none;\n    }\n  "};},{}]},{},[1]);