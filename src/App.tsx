import { ConfigProvider } from 'antd'
import './App.css'
import { theme } from './config/theme'
import AppButton from './components/ui/AppButton'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from './i18n/config'
import { RouterProvider } from 'react-router-dom'
import DashboardIcon from './assets/icons/sidebar/dashboard.svg?react'
import Doctors from './assets/icons/sidebar/doctors.svg?react'
import { router } from './router'


function App() {
  const { t } = useTranslation();
  
  return (
    <ConfigProvider theme={theme}>
      <I18nextProvider i18n={i18n}>

      <RouterProvider router={router} />
      <DashboardIcon stroke={'#64748b'} />
      <Doctors stroke={'#64748b'} />
      <h1 className="text-3xl font-bold underline">
        {t('navigation.dashboard')}
      </h1>
      <AppButton type='success' size='small'>New Account</AppButton>
      </I18nextProvider>

      </ConfigProvider>
  )
}

export default App
