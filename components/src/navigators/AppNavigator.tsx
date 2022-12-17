// import * as React from 'react';
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AuthScreen } from '../screens/AuthScreen'
import { InfoScreen } from '../screens/InfoScreen'
import { EncyclopediaScreen } from '../screens/EncyclopediaScreen'
import { TermsScreen } from '../screens/settings/TermsScreen'
import { AboutScreen } from '../screens/settings/AboutScreen'
import { SplashScreen } from '../screens/SplashScreen'
import { OnboardingScreen } from '../screens/OnboardingScreen'
import { MainScreen } from '../screens/MainScreen'
import { TutorialFirstScreen } from '../screens/TutorialFirstScreen'
import { TutorialSecondScreen } from '../screens/TutorialSecondScreen'
import { SettingsScreen } from '../screens/SettingsScreen'
import { PrivacyScreen } from '../screens/settings/PrivacyScreen'
import { AccessScreen } from '../screens/settings/AccessScreen'
import { ContactUsScreen } from '../screens/ContactUsScreen'
import { DayScreen } from '../screens/DayScreen'
import { Calendar } from '../screens/mainScreen/Calendar'
import { ProfileScreen } from '../screens/ProfileScreen'
import { NavigationBar } from '../components/common/NavigationBar'
import { EditProfileScreen } from '../screens/EditProfileScreen'
import { ArticlesScreen } from '../screens/ArticlesScreen'
import { AvatarAndThemeScreen } from '../screens/AvatarAndThemeScreen'
import { JourneyScreen } from '../screens/JourneyScreen'
import { FindHelpScreen } from '../screens/FindHelpScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { PasswordRequestScreen } from '../screens/PasswordRequestScreen'

const TutorialFirstStack = createStackNavigator(
  { TutorialFirstScreen },
  { headerMode: 'none', initialRouteName: 'TutorialFirstScreen' },
)

const TutorialSecondStack = createStackNavigator(
  { TutorialSecondScreen },
  { headerMode: 'none', initialRouteName: 'TutorialSecondScreen' },
)

const Nyumbani = createStackNavigator(
  {
    MainScreen,
    DayScreen,
    Calendar,
  },
  { headerMode: 'none', initialRouteName: 'MainScreen' },
)

Nyumbani.navigationOptions = {
  lazy: false,
  tabBarIcon: ({ focused }) => <NavigationBar focused={focused} name="main" />,
}

// ---------------------------------------

const Wasifu = createStackNavigator(
  { ProfileScreen, EditProfileScreen, AvatarAndThemeScreen },
  { headerMode: 'none' },
)
Wasifu.navigationOptions = {
  tabBarIcon: ({ focused }) => <NavigationBar focused={focused} name="profile" />,
}

// ---------------------------------------

const Maktaba = createStackNavigator(
  {
    Encyclopedia: EncyclopediaScreen,
    Articles: ArticlesScreen,
    FindHelp: FindHelpScreen,
    Chat: ChatScreen,
  },
  { headerMode: 'none', initialRouteName: 'Encyclopedia' },
)

Maktaba.navigationOptions = {
  tabBarIcon: ({ focused }) => <NavigationBar focused={focused} name="encyclopedia" />,
}

const Mipangilio = createStackNavigator(
  {
    SettingsScreen,
    AccessScreen,
    TermsScreen,
    AboutScreen,
    PrivacyScreen,
    ContactUsScreen,
  },
  { headerMode: 'none', initialRouteName: 'SettingsScreen' },
)

const LoginStack = createStackNavigator(
  {
    AuthScreen,
    JourneyScreen,
    AvatarAndThemeScreen,
    InfoScreen,
    TermsScreen,
    AboutScreen,
    PrivacyScreen,
    Maktaba,
  },
  { headerMode: 'none', initialRouteName: 'AuthScreen' },
)

Mipangilio.navigationOptions = {
  tabBarIcon: ({ focused }) => <NavigationBar focused={focused} name="settings" />,
}

const MainStack = createBottomTabNavigator(
  {
    Wasifu,
    Nyumbani,
    Maktaba,
    Mipangilio,
  },
  {
    tabBarOptions: {
      showLabel: true,
    },
    initialRouteName: 'Nyumbani',
  },
)

const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    OnboardingScreen,
    PasswordRequestScreen,
    LoginStack,
    MainStack,
    TutorialFirstStack,
    TutorialSecondStack,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
)

export default createAppContainer(AppNavigator)
