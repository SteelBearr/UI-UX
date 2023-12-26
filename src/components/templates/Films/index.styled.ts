import styled from 'styled-components';

export const Films = styled.section`
    display: flex;
    
    width: 100%;
    height: 100%;
    background-image: url("https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/slideshow/002.jpg?1490369108");
    flex: 0 0 auto;
    background-size: cover;
    background-position: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
   
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;


export const Title = styled.span`
    font-family: Copperplate !important;
    letter-spacing: 2vw;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    font-size: 7vh !important;
    width: 100%;
    margin: 1vh 0px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: black;
    text-shadow: 0 5px 5px rgba(255, 0, 0, 0.7);
`;


export const List = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    border: 1px solid #700;
    background-image: url("https://addons-media.operacdn.com/media/CACHE/images/themes/74/230074/1.0-rev1/images/47bd9945c0570a1254700f7509d33cf8/9ac579d7b9d25bfeca811ce59133e2d3.jpg");
    padding: 20px 20px;
    background-size: cover;
    border-radius: 25px;
    background-position: center;
    box-sizing: border-box; 
    @media (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr ;
    }
`;