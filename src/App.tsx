import { ConfigProvider } from 'antd'
import './App.css'
import { theme } from './config/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'


function App() {  
  return (
    <ConfigProvider theme={theme}>
      <I18nextProvider i18n={i18n}>

      <RouterProvider router={router} />

      </I18nextProvider>

      </ConfigProvider>
  )
}

export default App
