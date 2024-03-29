import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` //Criando css global da aplicação
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']}
    }

    body{
        background: ${props => props.theme['gray-800']};
        color: #fff;
        width: 100%;
        height: 100vh;
    }

    border-style, input-security, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;