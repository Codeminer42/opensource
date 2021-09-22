const colors = {
  black: '#2c2d2d',
  white: '#ffffff',
  gray: {
    100: '#f7f8fc',
    600: '#515153',
  },
  blue: '#2e31a6',
  red: '#e95659',
  green: '#2ecc71',
}

// index:      0, 1, 2,  3,  4,  5,   6,   7,   8
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body: "'Barlow', sans-serif",
  logo: "'Dosis', sans-serif",
}

// index:          0, 1, 2, 3,  4,  5,  6,  7,  8,  9, 10, 11,  12,  13
const fontSizes = [0, 5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 300, 400, 500, 600, 700]

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
}

export default theme
