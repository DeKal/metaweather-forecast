import { createMuiTheme } from '@material-ui/core'

const colors = {
  primary: [
    '#2F1068',
    '#44239F',
    '#6138B0',
    '#8F7ECE',
    '#B6B6E2',
    '#D1D1EE',
    '#EBEBF9',
    '#FAFAFF'
  ],
  orange: [
    '#F28708',
    '#F8B44E',
    '#FAC980',
    '#FCDEB2',
    '#FEF4E5',
    '#F39303',
    '#F85B03'
  ],
  teal: ['#00A5B0', '#6ED9E0', '#B9F0F4'],
  blue: ['#007ABF', '#70C0F9', '#A4D1FC', '#C6DDFF', '#EAF2FF'],
  volcano: ['#F25220', '#F9A084', '#FDD1C4'],
  black: '#000000',
  hardEmphasis: '#212121',
  medEmphasis: '#666666',
  disabledText: '#9E9E9E',
  disabledBg: '#EDEDED',
  white: '#FFFFFF',
  error: '#B00020',
  silver: '#C0C0C0',
  grayscale: '#999999',
  mediumGray: '#C4C4C4'
}
const bodyStyle = {
  fontWeight: 400
}
const headingStyle = {
  fontWeight: 500,
  fontStyle: 'normal'
}

const borders = {
  standard: [
    `1px solid ${colors.primary[4]}`,
    `1px solid ${colors.disabledText}`,
    `1px solid ${colors.black}`,
    `1px solid ${colors.primary[6]}`
  ]
}

const theme = createMuiTheme({
  typography: {
    h1: {
      ...headingStyle,
      fontSize: 76,
      lineHeight: '92px'
    },
    h2: {
      ...headingStyle,
      fontSize: 60,
      lineHeight: '72px'
    },
    h3: {
      ...headingStyle,
      fontSize: 48,
      lineHeight: '60px'
    },
    h4: {
      ...headingStyle,
      fontSize: 32,
      lineHeight: '40px'
    },
    h5: {
      ...headingStyle,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '0.2px'
    },
    h6: {
      ...headingStyle,
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '0.2px'
    },
    subtitle1: { ...headingStyle, fontSize: 16, lineHeight: '20px' },
    subtitle2: { ...headingStyle, fontSize: 14, lineHeight: '16px' },
    subtitle3: { ...headingStyle, fontSize: 12, lineHeight: '16px' },
    subtitleCaps: { ...headingStyle, fontSize: 12, lineHeight: '16px' },
    body1: { ...bodyStyle, fontSize: 16, lineHeight: '24px' },
    body2: { ...bodyStyle, fontSize: 14, lineHeight: '16px' },
    body3: { ...bodyStyle, fontSize: 12, lineHeight: '18px' }
  },
  colors,
  borders
})

export default theme
