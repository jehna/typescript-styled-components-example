import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export const MyStyledComponent = styled.div`
  color: red;
  border: 2px solid blue;
`

export const MyComponent = () => <div>Hello world</div>

export interface MyTheme {
  main: string
}
export interface MyThemeProps {
  theme?: MyTheme
}

// This injects the correct theme to props
// https://stackoverflow.com/a/55413440
declare module 'styled-components' {
  /* tslint:disable */
  export interface DefaultTheme extends MyTheme {}
}

export const ThemedComponent = styled.div<MyThemeProps>`
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`
ThemedComponent.defaultProps = { theme: { main: 'palevioletred' } }

export const CustomThemeProvider = ThemeProvider
