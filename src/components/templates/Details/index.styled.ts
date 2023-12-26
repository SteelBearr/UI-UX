import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        margin: 0px 0px;
        width: 100%;
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    padding: 26px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px rgba(255, 0, 0, 0.7);
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4vh;
  width: 8vw;
  flex: 0 0 auto;
  background-color:  grey;
  color: black;
  border: 0.5px solid #000;
  border-radius: 50px;
  font-size: 1vw;
  &:hover{
    color: white;
    background-color: #700;
  }
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    font-family: Lucida Handwriting;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};


`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;

`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: black;
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

export const Comments = styled.div`
  width: 100%;
`;

export const Header = styled.div`
    width: 100%;
    font-size: 3vh;
    font-weight: 600;
    padding-bottom: 1%;
`;

export const AddComment = styled.div`
    width: 100%;
    font-size: 3vh;
    font-weight: 600;
    padding-bottom: 1%;
`;




