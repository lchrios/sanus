import styled from 'styled-components'

export const InfoContainer = styled.div `
    color:#fff;
    background: ${ ( {lightBg} ) => (lightBg ? '#AEDBF0' : '#6C63FF') } ;
    align-items:center;

    @media screen and (max-width: 768px) {
        justify-content:center;
        padding-top:10px;
        padding-bottom:10px;


    }
    @media screen and (max-width: 960px) {
        justify-content:center;
        padding-top:0px;
        padding-bottom:0px;
    }
`

export const InfoWrapper = styled.div`
 display: grid;
 z-index:1;
 height:860px;
 width: 100%;
 max-width: 1100px;
 margin-right:auto;
 margin-left:auto;
 align-items:center;
 justify-content: center;

 @media screen and (max-width:768px) {
    height:500px;
 }

`

export const InfoRow =  styled.div`
 display:grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items:center;
 grid-template-areas: ${ ( {imgStart} ) => (imgStart ? `'col2 col1'` :
 `'col1 col2'`) };

 @media screen and (max-width: 960px) {
     grid-template-areas: ${ ( {imgStart} ) => (imgStart ? `'col2''col1'`
     : `'col2 col1' 'col1 col2'` ) };
     justify-content:center;
     display:grid;
     align-items:center;
 }


@media screen and (max-width: 768px) {
     grid-template-areas: ${ ( {imgStart} ) => (imgStart ? `'col2''col1'`
     : `'col1 col1' 'col2 col2'` ) };
     justify-content:center;
     align-items:center;
 }

`
export const Column1 = styled.div`
 margin-bottom:15px;
 padding:0 15px;
 grid-area:col1;

 @media screen and (max-width: 960px) {
     justify-content:center;
     align-items:center;
 };

 @media screen and (max-width: 768px) {
     justify-content:center;
     align-items:center;
 }

`

export const Column2 = styled.div`
 margin-bottom:30px;
 padding:0 15px 0;
 grid-area:col2;

 @media screen and (max-width: 768px) {
     display:none;
 }

 @media screen and (max-width: 960px) {
     padding:15px;
 }

`

export const TextWrapper = styled.div`
 max-width:960px;
 padding-top:0;
 padding-bottom: 60px;

 @media screen and (max-width: 768px) {
     padding-bottom: 0px;
 }

`

export const TopLine = styled.p`
 color:#6C63FF;
 font-size:16px;
 line-height:16px;
 font-weight:700;
 letter-spacing:1.4px;
 text-transform:uppercase;
 margin-bottom:16px;

`

export const Heading = styled.h1`
 margin-bottom:24px;
 font-size:48px;
 line-height:1.1;
 font-weight:600;
 color: ${ ( {lightText} ) => (lightText ? '#f7f8fa' : 'black')
};

 @media screen and (max-width: 768px) {
     justify-content:center;
    font-size:42px;
 };
`

export const Subtitle = styled.p`
 max-width:440px;
 margin-bottom:35px;
 font-size: 18px;
 line-height: 24px;
  color: ${ ( {darkText} ) => (darkText ? '#010606' : 'black') };
`

export const BtnWrapper = styled.div`
 display:flex;
 justify-content:flex-start;

 @media screen and (max-width: 768px) {
    justify-content:center;
 }

`

export const ImgWrap = styled.div`
 max-width: 960px;
 height:100%;

`
export const Img = styled.img`
 width:400px;
 margin: 0 0 10px 0;
 padding-right: 0;
`