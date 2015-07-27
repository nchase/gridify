(function(){
  var gridifyStyleSheet = document.getElementById("gridifyStyleSheet");
  if (gridifyStyleSheet) {
    gridifyStyleSheet.parentNode.removeChild(gridifyStyleSheet);

    return false;
  }

  gridifyStyleSheet=document.createElement('style');

  window.gridifyRootSelector = window.prompt("Enter Root Element", "html");
  window.gridifyHorizontalInterval = window.prompt("Enter Horizontal Interval", "1em");
  window.gridifyVerticalInterval = window.prompt("Enter Vertical Interval", "1em");

  var gridifyStyle = require('./style')(
    window.gridifyRootSelector,
    window.gridifyHorizontalInterval,
    window.gridifyVerticalInterval
  );

  gridifyStyleSheet.appendChild(document.createTextNode(gridifyStyle));
  gridifyStyleSheet.id = "gridifyStyleSheet";

  document.head.appendChild(gridifyStyleSheet);
})();
