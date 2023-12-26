import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 15vh;
    box-shadow: 0px 0px 1vh red;
    background-image: url("https://images.squarespace-cdn.com/content/v1/52e81a1ee4b047d1a5cc6e65/b2d4c840-d178-4ed8-acf2-30759159d4d5/Background-Narrow.jpg");
    background-position: 0% 80%;
    color: rgba(255,255,255,0.4);
    background-size: cover;
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    background-color: rgba(255,255,255,0.4);
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
  
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Nav = styled.span`
    position: relative;
    padding-top: 2vw;
    display: flex;
    text-decoration: underline;
    padding-left: 20vw;
    font-weight: 500;
    font-family: Copperplate;
    letter-spacing: 2px;
    font-size: 2vw;
  
`;

export const Logo = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  padding-left: 20vw;
  font-size: ${props => props.theme.textSizeTextM};
  font-weight: 500;
  font-family: Lucida Handwriting;
  letter-spacing: 1px;
  margin: 5px 0px 0px 0px;
  font-size: 5vw;
`;

