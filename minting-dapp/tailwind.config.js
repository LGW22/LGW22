const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.neutral[50],
          to_bg: colors.neutral[50],
        },
        titles: colors.neutral[900],
        links: {
          txt: colors.neutral[900],
          hover_txt: colors.neutral[900],
        },
        loading_spinner: colors.indigo[500],
        popups: {
          bg: colors.neutral[50],
          txt: colors.neutral[900],
          internal_border: colors.neutral[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.neutral[900],
          bg: colors.blue[500],
          border: colors.blue[500],
          hover_txt: colors.neutral[900],
          hover_bg: colors.blue[600],
          hover_border: colors.blue[600],
        },
        btn_error: {
          txt: colors.neutral[900],
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.neutral[900],
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.blue[900],
        txt_input: {
          txt: colors.neutral[900],
          bg: colors.neutral[50],
          border: colors.neutral[50],
          focus_txt: colors.neutral[900],
          focus_bg: colors.neutral[50],
          focus_border: colors.indigo[300],
          placeholder_txt: colors.indigo[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.neutral[900],
          bg: colors.neutral[50],
        },

        // Mint widget
        token_preview: colors.amber[400],
      },
    },
  },
  variants: {},
  plugins: [],
};
