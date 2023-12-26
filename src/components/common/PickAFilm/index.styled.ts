import styled from 'styled-components';

export const Block = styled.div`
    height: 85vh;
    width: 100vw;
    background-position-x: -35px;
    background-image: url("https://img.goodfon.ru/wallpaper/big/a/dc/kino-ochki-plenka.jpg");
  background-position-y: center;
    background-size: cover;
`;
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10%;
  margin: 40px 0px;
  height: 40px;
  flex: 0 0 auto;
  background-color:  grey;
  color: black;
  border: 0.5px solid #000;
  border-radius: 50px;
  font-weight: 300;
  font-size: 2vw;
  &:hover{
    letter-spacing: 0.5vw;
    color: white;
    background-color: #700;
  }
`;

export const Header = styled.div`
    font-size: 3vw;
    max-width: 25%;
    background: -webkit-linear-gradient(#aaa, #22f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Copperplate;
    letter-spacing: 0.5px;
    text-align: center;
`;

export const Img = styled.div`
    
`;

export const Description = styled.div`
`;



export const pad = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255,255,255,0.15);
`;