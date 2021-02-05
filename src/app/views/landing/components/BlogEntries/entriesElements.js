import styled from 'styled-components'

export const EntriesContainer = styled.div`
    height:700px;
    display:flex;
    flex-direction:column;
    background:white;
    justify-content:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;

    @media screen and (max-width:768px) {
        display:inherit;
        height:2000px;

    }

    @media screen and (max-width: 480px) {
        height: 2000px;
        display:inherit;

    }
    

`

export const EntriesWrapper = styled.div`
 max-width: 1000px;
 margin:auto;
 display:flex;
 align-items:center;
 padding:0 50px;

 @media screen and (max-width: 768px ) {
    margin-left:auto;
    margin-right:auto;
}

@media screen and (max-width: 960px ) {
    margin-left:auto;
    margin-right:auto;

}

 @media screen and (max-width: 480px) {
     /* grid-template-columns:1fr; */
     padding:0 20px;

 }

`

export const EntriesCard = styled.div`
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content:flex-start;
 align-items:center;
 border-radius: 10px;
 min-height:340px;
 max-height:340px;
 padding: 30px;
 box-shadow:0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover {
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;

 }

`

export const EntriesIcon = styled.img`
 height: 160px;
 width: 160px;
 margin-bottom: 10px;


`


export const EntriesH1 = styled.h1`
 font-size: 2.5rem;
 margin-left:30px;
 margin-right:30px;
 color: black;
 margin-top: 40px;

 @media screen and (max-width: 480px) {
    font-size:2rem;

 }
`
export const EntriesH2 = styled.h2`
 font-size: 1rem;
 margin-bottom:10px;

`
export const EntriesP = styled.p`
font-size:1rem;
text-align:center;
`


