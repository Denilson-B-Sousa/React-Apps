import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;


    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props => props.theme['gray-100'])};
    font-family: 'Roboto Mono', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;

`;

export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: inherit; /*Herda estilo do container */
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme["gray-100"]};

    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['gray-600']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }

`;

export const Separator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};
    width: 4rem;
    overflow: hidden;
    
`;

export const StartCountdownButton = styled.button `
    width: 72.5%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${(props) => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${(props) => props.theme['green-700']};
    }
`;