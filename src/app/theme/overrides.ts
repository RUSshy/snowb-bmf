import { Overrides } from '@material-ui/core/styles/overrides'

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        fontSize: '14px',
      },
      'input::-webkit-inner-spin-button': {
        marginLeft: '10px',
      },
      'input:enabled:read-write:-webkit-any(:focus,:hover)::-webkit-inner-spin-button': {
        opacity: 0.3,
      },
      '::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.2)',
      },
      '::-webkit-scrollbar-track': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiInputBase: {
    input: {
      '&[type=number]': {
        textAlign: 'right',
      },
    },
  },
}

export default overrides
