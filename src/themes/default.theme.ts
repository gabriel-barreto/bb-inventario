import chroma from 'chroma-js';

export const colors = {
  primary: chroma('#F8D117'),
  secondary: chroma('#23569C'),

  light: chroma('#ededed'),
  lightest: chroma('#ffffff'),

  dark: chroma('#333333'),
  darkest: chroma('#212121'),

  success: chroma('#27AE60'),
  error: chroma('#C0392B'),
};

export default {
  colors,
  sizes: {
    normal: '16px',
    lg: '14px',
    strong: '18px',
  },
};
