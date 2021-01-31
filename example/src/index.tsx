import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//@ts-ignore
import heyTheme from 'hey-ui/dist/init.ts'
import theme from './styles/themes/defaultTheme'

heyTheme.setTheme(theme)

ReactDOM.render(<App />, document.getElementById('root'))
