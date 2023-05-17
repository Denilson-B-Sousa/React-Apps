import styled from 'styled-components'

export const HistoryContainer = styled.main`

    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto; /* Irá gerar uma barra de rolagem para o container da tabela */
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse; /**/
        min-width: 600px;
        

        th{
            background-color: ${(props) => props.theme['gray-600']};
            padding: 1rem;
            text-align: left;
            font-size: 0.875rem;
            color: ${(props) => props.theme['gray-100']};
            line-height: 1.6;
        }

        &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }

        &:first-child{
            border-top-left-radius: 8px;
            padding-right: 1.5rem;
        }
    }

    td {
        background-color: ${(props) => props.theme['gray-700']};
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.6;
        border-top: 4px solid ${(props) => props.theme['gray-800']};
        
    }

    &:first-child{
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
    }

    &:first-child{
        border-top-left-radius: 8px;
        padding-right: 1.5rem;
    }
`

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const 

// as const é utilizado para dizer ao typescript que a string não pode mudar é exclusivamente definida

interface StatusProps{
    statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 1rem;


    &::before{
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;