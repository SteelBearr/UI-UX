import styled from 'styled-components';

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
export const Header = styled.div`
  width: 100%;
  font-size: 3vh;
  font-weight: 600;
  padding-bottom: 1%;
`;

export const Subheader = styled.div`
  padding-top: 0.5%;
  width: 100%;
  margin-left: 3vw;
  font-size: 2.5vh;
  font-weight: 400;
`;

export const Username = styled.div`
  padding-top: 0.5%;
  width: 100%;
  margin-left: 3.5vw;
  font-size: 2vh;
  font-weight: 400;
`;

export const Text = styled.div`
  width: 100%;
  padding-top: 0.5%;
  margin-left: 3.5vw;
  font-size: 2vh;
  font-weight: 400;
`;

export const Buttton = styled.div`
  padding-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin-left: 3vw;
  font-size: 2vh;
  font-weight: 400;
`;


