import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#FFF',
    background: '#363537',
}

export const darkTheme = {
    body: '#363537',
    text: '#ffffff',
    background: '#999',
}

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }
`