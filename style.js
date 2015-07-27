module.exports = function(rootSelector, horizontalInterval, verticalInterval){
  return `
    ${rootSelector} {
      position: relative;
      height: auto;
    }

    ${rootSelector}:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        ${(function(){
        if (horizontalInterval && verticalInterval) {
          return `
            linear-gradient(to bottom, #0FF 0, rgba(255, 255, 255, 0) 1px),
            linear-gradient(to right, #0FF 0, rgba(255, 255, 255, 0) 1px)
          `;
        }
        if (horizontalInterval) {
          return "linear-gradient(to right, #0FF 0, rgba(255, 255, 255, 0) 1px)";
        }
        if (verticalInterval) {
          return "linear-gradient(to bottom, #0FF 0, rgba(255, 255, 255, 0) 1px)";
        }
        else {
          none
        }
        })()}
      ;
      background-position: 0 0;
      background-repeat: repeat;
      background-size: ${horizontalInterval || 100%} ${verticalInterval || 100%};
      background-color: transparent;
      opacity: 0.825;
      z-index: 1000;
      pointer-events: none;
    }
  `;
}
