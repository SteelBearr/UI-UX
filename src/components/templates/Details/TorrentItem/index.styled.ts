import styled from 'styled-components';

export const Torrent = styled.a`
    border-radius: 10px;
    border: 0.5px solid black;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: grey;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    transition: 0.3s;
    &:hover{
        color: white;
        transition: 0.3s;
        background-color:  #700;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-between;   
    padding: 10px;
    
`;
export const Icon = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.textSizeTitle};
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextTitle500};
    }

`;
export const Text = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 30px;
  font-size: ${props => props.theme.textSizeTextM};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;
