module.exports = function(rootSelector){
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
        linear-gradient(to bottom, #0FF 0, rgba(255, 255, 255, 0) 1px),
        linear-gradient(to right, #0FF 0, rgba(255, 255, 255, 0) 1px)
      ;
      background-repeat: repeat;
      background-size: 1.1rem 1rem;
      background-color: transparent;
      opacity: 0.825;
      z-index: 1000;
      pointer-events: none;
    }
  `;
}
