module.exports.decorateConfig = (config) => {
  const nushuLightColors = {
    foregroundColor: "#2b2822",
    backgroundColor: "#f8f6f1",
    selectionColor: "#e8dac0",
    cursorColor: "#3c7d3f",
    borderColor: "#d6d4cfe6",
    colors: {
      black: "#24292f",
      red: "#cf222e",
      green: "#116329",
      yellow: "#4d2d00",
      blue: "#0969da",
      magenta: "#6639ba",
      cyan: "#1b7c83",
      white: "#6e7781",
      lightBlack: "#57606a",
      lightRed: "#a40e26",
      lightGreen: "#1a7f37",
      lightYellow: "#633c01",
      lightBlue: "#218bff",
      lightMagenta: "#8250df",
      lightCyan: "#3192aa",
      lightWhite: "#8c959f",
    },
    css: `
      * {
        text-rendering: optimizeLegibility;
      }
      .tab_tab {
        color: #656d76;
        border-left: 1px solid #d6d4cfe6;
        background-color: #efedea;
      }
      .tab_tab.tab_active {
        color: #2b2822;
        border-left: 1px solid #d6d4cfe6;
        background-color: #f8f6f2;
      },
      .header_header {
        background-color: #efedea;
      }
      .header_header .tabs_title {
        color: #2b2822; 
      }
    `,
  };

  return Object.assign({}, config, nushuLightColors);
};
