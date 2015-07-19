(function(){
  var gridifyStyleSheet = document.getElementById("gridifyStyleSheet");
  if (gridifyStyleSheet) {
    gridifyStyleSheet.parentNode.removeChild(gridifyStyleSheet);

    return false;
  }

  var gridifyStyle = "%rootEl% { background-image: linear-gradient(to bottom, #0FF 0, rgba(255, 255, 255, 0) 1px) !important; background-repeat: repeat-y !important; background-size: 100% 1rem !important; background-color: transparent !important; } %rootEl% * { opacity: 0.825 !important;}";

  gridifyStyleSheet=document.createElement('style');

  if (!window.gridifyRootSelector) {
    window.gridifyRootSelector=window.prompt("Enter Root Element", "body");
  }

  gridifyStyle = gridifyStyle.replace(/%rootEl%/gi, gridifyRootSelector);
  gridifyStyleSheet.appendChild(document.createTextNode(gridifyStyle));
  gridifyStyleSheet.id = "gridifyStyleSheet";

  document.head.appendChild(gridifyStyleSheet);
})();