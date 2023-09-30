// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
  },
  styles: {
    global: {
      body: {
        color: "teal.500", // Set default text color to teal
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        color: "white", // Text color for the button
        bg: "teal.500", // Background color for the button
      },
      defaultProps: {
        colorScheme: "teal", // Use the teal color scheme by default for buttons
      },
    },
    Input: {
      // Set the text color for the input to black
      baseStyle: {
        color: "black",
      },
      defaultProps: {
        color: "black", // Use black text color by default for inputs
      },
    },
  },
});

export default theme;
