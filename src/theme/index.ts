export const Colors = {
  darkModeElement: "#FFFFFF",
  darkModeBackground: "#202C37",
  LightModeText: "#111517",
  LightModeInput: "#858585",
  LightModeBackground: "#FAFAFA",
  LightModeElements: "#FFFFFF",
};

export const getDesignTokens = (mode: string) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: Colors.LightModeBackground,
          },
          text: {
            primary: Colors.LightModeText,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: Colors.darkModeBackground,
          },
          background: {
            default: Colors.darkModeBackground,
          },
          text: {
            primary: Colors.LightModeElements,
          },
        }),
  },
  typography: {
    fontSize: 18,
  },
});
