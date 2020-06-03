import { createMuiTheme } from '@material-ui/core'

const colors = createMuiTheme({
    palette: {
        primary: {
            light: '#6dabe4',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})

export default colors