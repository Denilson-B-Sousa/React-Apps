import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: 100%;
    height: 100%;
    margin: 5rem;
    padding: 2.5rem;

    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`

