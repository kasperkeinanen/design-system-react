import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    /* //@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap'); */
    font-family: 'Raleway', sans-serif;
  }
  h1 {
    font-weight: ${props => props.theme.typography.semiBold};
    font-size: 2.3em;
    line-height: 1.1em;
  }
  h2 {
    font-weight: ${props => props.theme.typography.semiBold};
    font-size: 1.8em;
    line-height: 1.2em;
  }
  h3 {
    font-weight: ${props => props.theme.typography.bold};
    font-size: 1.1em;
    line-height: 1.2em;
  }
  p {
    font-weight: ${props => props.theme.typography.regular};
    font-size: 1.2em;
    line-height: 1.4em;
  }
  a {
    font-weight: ${props => props.theme.typography.semiBold};
    font-size: 1.2em;
    line-height: 1.4em;
  }
`

const theme = {
  pallet: {
    white: '#FFFFFF',
    black: '#000000',
    primary100: '#006778',
    primary90: '#1A7685',
    primary80: '#338293',
    primary70: '#4D95A1',
    primary60: '#66A4AE',
    primary50: '#80B3BB',
    primary40: '#99C2C9',
    primary30: '#B3D1D7',
    primary20: '#CCE1E4',
    primary10: '#E5F0F1',
    primaryDark100: '#006778',
    primaryDark90: '#005D6C',
    primaryDark80: '#005260',
    primaryDark70: '#004854',
    primaryDark60: '#003E48',
    primaryDark50: '#00343C',
    primaryDark40: '#002930',
    primaryDark30: '#001F24',
    primaryDark20: '#001518',
    primaryDark10: '#000A0C',
    secondary100: '#830051',
    secondary90: '#8F1A62',
    secondary80: '#9C3374',
    secondary70: '#A84D85',
    secondary60: '#B56697',
    secondary50: '#C180A8',
    secondary40: '#CD99B9',
    secondary30: '#DAB3CB',
    secondary20: '#E6CCDC',
    secondary10: '#F3E5EE',
    secondaryDark100: '#830051',
    secondaryDark90: '#760049',
    secondaryDark80: '#690041',
    secondaryDark70: '#5C0039',
    secondaryDark60: '#4F0031',
    secondaryDark50: '#420029',
    secondaryDark40: '#340020',
    secondaryDark30: '#270018',
    secondaryDark20: '#1A0010',
    secondaryDark10: '#0D0008',
    gray100: '#5E6A71',
    gray90: '#6B7780',
    gray80: '#7B868E',
    gray70: '#8B959C',
    gray60: '#9CA4AA',
    gray50: '#ACB3B8',
    gray40: '#BDC3C7',
    gray30: '#CED2D5',
    gray20: '#DEE1E3',
    gray10: '#EFF0F1',
    grayDark100: '#5E6A71',
    grayDark90: '#555F66',
    grayDark80: '#4B555A',
    grayDark70: '#424A4F',
    grayDark60: '#384044',
    grayDark50: '#2F3539',
    grayDark40: '#262A2D',
    grayDark30: '#1C2022',
    grayDark20: '#131517',
    grayDark10: '#090B0B',
    lightGreen: '#C9E2AE',
    lightGreen2: '#7DC242',
    green: '#008675',
    blue: '#025B96',
    darkBlue: '#002F5F',
    lightBlue: '#D0DCED',
    disabled1: '#E8E8E8',
    disabled2: '#8C8C8C',
    disabled3: '#93979D',
  },
  typography: {
    light: '100',
    regular: '300',
    semiBold: '500',
    bold: '700',
    extraBold: '900'
  }
}

export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {this.props.children}
        </>
      </ThemeProvider>
    )
  }
}
