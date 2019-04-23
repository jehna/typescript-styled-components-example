import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export const MyStyledComponent = styled.div`
  color: red;
  border: 2px solid blue;
`

export const MyComponent = () => <div>Hello world</div>

export const ThemedComponent = styled.div`
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`
ThemedComponent.defaultProps = { theme: { main: 'palevioletred' } }

export const CustomThemeProvider = ThemeProvider
