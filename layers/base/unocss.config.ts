import {
    definePreset,
    presetUno,
    presetWebFonts,
  } from 'unocss'
  
  import type { Theme } from 'unocss/preset-uno'
  import presetTheme from 'unocss-preset-theme'
  
  export default definePreset({
    name: 'preset',
    presets: [
      presetUno(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          inter: 'Inter:300,600',
        },
      }),
      presetTheme<Theme>({
        theme: {
          dark: {
            colors: {
              primary: '#880808',
            },
          },
        },
      }),
    ],
    theme: {
      colors: {
        primary: '#ff8811',
      }
    },
  },
)
  