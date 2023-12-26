import styled from 'styled-components';

export const GenreItem = styled.div`
    width:80%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #700;
    box-shadow: 0px 0px 5px rgba(255, 0, 0, 0.7);
    font-size: ${props => props.theme.textSizeTextL};
    border-radius: 25px;
`;



export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    color: black;
    font-weight: 500;
    padding: 0px 10px;
    line-height: 5px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;