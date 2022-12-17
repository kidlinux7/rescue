import { ThemeName, Themes, AvatarName } from '../types'

import { zanzibar } from './zanzibar'
import { hills } from './hills'
import { shule } from './shule'
import { village } from './village'
import { town } from './town'

export const themes: Themes = {
  zanzibar,
  hills,
  shule,
  village,
  town,
}

export const defaultTheme: ThemeName = 'village'
export const defaultAvatar: AvatarName = 'oky'
