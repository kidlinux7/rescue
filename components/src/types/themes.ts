export type ThemeName = 'hills' | 'shule' | 'village' | 'zanzibar' | 'town'
export type AvatarName = 'oky' | 'asma' | 'nzela' | 'hamisa' | 'koku' | 'chiku' | 'nuru' | 'zawadi'
// export type AvatarName = 'oky' | 'julia' | 'nur' | 'ari'

export interface Theme {
  id: ThemeName
  primaryBackgroundColor: string
  periodColor: string
  periodNotVerifiedColor: string
  nonPeriodColor: string
  fertileColor: string
  fontSize: number
  lightGreen: string
  mediumGreen: string
}

export type Themes = { [key in ThemeName]: Theme }
