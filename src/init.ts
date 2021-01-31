import type { DefaultTheme } from 'styled-components'

// export const theme: DefaultTheme = require('../example/src/styles/themes/defaultTheme')

// // Maybe use this to theme?
// // https://www.npmjs.com/package/config

// // let currentTheme: DefaultTheme
// // let isLoading = true

// // export const theme = new Promise((resolve) => {
// //   // for (;;) {
// //   //   if (!isLoading) {
// //   //     resolve(currentTheme)
// //   //     break
// //   //   }
// //   // }
// //   resolve('hello')
// // })

// // export const init = (newTheme: DefaultTheme) => {
// //   console.log('🚀 ~ file: init.ts ~ line 6 ~ init ~ newTheme', newTheme)
// //   currentTheme = newTheme
// //   isLoading = false
// // }

class Theme {
  theme: DefaultTheme | null
  constructor(theme: DefaultTheme | null) {
    this.theme = theme
  }

  getTheme() {
    return this.theme
  }

  setTheme(theme: DefaultTheme) {
    this.theme = theme
  }
}

export default new Theme({})
