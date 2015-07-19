(function(){
  var gridifyStyleSheet = document.getElementById("gridifyStyleSheet");
  if (gridifyStyleSheet) {
    gridifyStyleSheet.parentNode.removeChild(gridifyStyleSheet);

    return false;
  }

  gridifyStyleSheet=document.createElement('style');

  if (!window.gridifyRootSelector) {
    window.gridifyRootSelector=window.prompt("Enter Root Element", "html");
  }

  var gridifyStyle = require('./style')(gridifyRootSelector);

  gridifyStyleSheet.appendChild(document.createTextNode(gridifyStyle));
  gridifyStyleSheet.id = "gridifyStyleSheet";

  document.head.appendChild(gridifyStyleSheet);
})();
