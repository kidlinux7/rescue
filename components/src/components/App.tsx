import React from 'react'
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { AppProvider } from './AppProvider'
import AppNavigator from '../navigators/AppNavigator'
import { configureStore } from '../redux/store'
import { setTopLevelNavigator } from '../services/navigationService'
import { notificationListener } from '../services/notifications'
import { SafeAreaView } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'

const { persistor, store } = configureStore()

export default function App() {
  React.useEffect(() => {
    notificationListener()
    if (Platform.OS === 'ios') {
      SplashScreen.hide()
    }
  }, [])

  return (
    <AppProvider store={store} persistor={persistor}>
      <SafeAreaView
        forceInset={{ bottom: 'never' }}
        style={{ flex: 1, backgroundColor: '#757575' }}
      >
        <AppNavigator
          ref={navigatorRef => {
            setTopLevelNavigator(navigatorRef)
          }}
          key="app-navigator"
        />
      </SafeAreaView>
    </AppProvider>
  )
}
