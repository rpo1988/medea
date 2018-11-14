const fontPathFile = 'fonts/nunito-v9-latin-regular.';

module.exports = {
  plugins: {
    'postcss-font-magician': {
      custom: {
        'Nunito': {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: fontPathFile + 'woff2',
                  woff: fontPathFile + 'woff',
                }
              },
              700: {
                url: {
                  woff2: fontPathFile + 'woff2',
                }
              }
            },
            italic: {
              400: {
                url: {
                  woff2: fontPathFile + 'woff2',
                }
              }
            }
          }
        }
      }
    },
    'postcss-cssnext': {}
  }
};
