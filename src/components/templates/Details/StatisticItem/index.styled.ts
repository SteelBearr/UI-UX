import styled from 'styled-components';

export const StatisticItem = styled.div`
    aspect-ratio: 1/1;
    border: 0.5px solid black;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;
    box-shadow: 0px 0px 5px rgba(255, 0, 0, 0.7);
    border-radius: 10px;
`;

export const Icon = styled.div`
    color: #700;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;