/* d.ts significa que nesse arquivo pode ter somente código ts*/

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

//Guardando dentro de uma variável o objeto defaultTheme

type ThemeType = typeof defaultTheme;



declare module 'styled-components'{ //criando definição de tipo do styled components
    export interface DefaultTheme extends ThemeType {}
}