import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { AvatarSelect } from './avatarAndTheme/AvatarSelect'
import { ThemeSelect } from './avatarAndTheme/ThemeSelect'
import { PageContainer } from '../components/layout/PageContainer'
import { BackgroundTheme } from '../components/layout/BackgroundTheme'
import { PrimaryButton } from '../components/common/buttons/PrimaryButton'
import * as actions from '../redux/actions/index'
import { ThemeName } from '../types/index'
import { Header } from '../components/common/Header'
import { useTheme } from '../components/context/ThemeContext'
import { BackOneScreen, navigate } from '../services/navigationService'
import { useSelector } from '../hooks/useSelector'
import * as selectors from '../redux/selectors'
import styled from 'styled-components/native'
import { Text } from '../components/common/Text'
const avatars = ['hamisa', 'oky', 'asma', 'nzela', 'koku', 'chiku', 'nuru', 'zawadi']
const themes: ThemeName[] = ['hills', 'village', 'shule', 'zanzibar', 'town']

export function AvatarAndThemeScreen({ navigation }) {
  const signingUp = navigation.getParam('signingUp')
  const [loading, setLoading] = React.useState(false)
  const selectedAvatar = useSelector(selectors.currentAvatarSelector)
  const dispatch = useDispatch()

  const { id } = useTheme()

  React.useEffect(() => {
    setLoading(false)
  }, [id])

  return (
    <BackgroundTheme>
      <ScrollView scrollEventThrottle={400} showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header
            screenTitle={signingUp ? 'empty' : 'avatar_amp_themes'}
            showGoBackButton={!signingUp}
          />
          {signingUp && (
            <Text
              style={{
                width: '80%',
                alignSelf: 'center',
                color: '#F49200',
                fontFamily: 'Roboto-Black',
                fontSize: 20,
                marginTop: 10,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              avatar_amp_themes_login
            </Text>
          )}
          <AvatarSelect
            avatars={avatars}
            value={selectedAvatar}
            onSelect={(avatar) => dispatch(actions.setAvatar(avatar))}
          />
          <ThemeSelect
            themes={themes}
            value={useTheme().id}
            onSelect={(theme) => {
              if (theme !== id) {
                setLoading(true)
                requestAnimationFrame(() => {
                  dispatch(actions.setTheme(theme))
                })
              }
            }}
          />
          <PrimaryButton
            onPress={() => (signingUp ? navigate('JourneyScreen', null) : BackOneScreen())}
          >
            confirm
          </PrimaryButton>
          {loading && (
            <Overlay>
              <ActivityIndicator size="large" color="#f49200" />
            </Overlay>
          )}
        </PageContainer>
      </ScrollView>
    </BackgroundTheme>
  )
}

const Overlay = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  elevation: 6;
`
