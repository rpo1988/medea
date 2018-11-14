const fontPathFile = '../fonts/nunito-v9-latin-regular.';
const fontUrl = {
  eot: fontPathFile + 'eot',
  svg: fontPathFile + 'svg',
  ttf: fontPathFile + 'ttf',
  woff: fontPathFile + 'woff',
  woff2: fontPathFile + 'woff2'
};

module.exports = {
  plugins: {
    'postcss-font-magician': {
      custom: {
        'Nunito': {
          variants: {
            normal: {
              600: { url: fontUrl }
            }
          }
        }
      }
    },
    'postcss-cssnext': {}
  }
};
