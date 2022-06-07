import styled from "styled-components";


import phone12 from "../Ofis/Phone/12.png"

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
`

export const Contcenter = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0 20%;
  margin-bottom: 0rem;


  @media screen  and (max-width:900px) {
   display: none;
  }

 `
 export const Contdiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 30%;

  /* @media screen  and (max-width:1244px) {
    transform: rotate(271deg);
  } */
 `

export const Centerh1 = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: #FFFFFF;

  @media screen  and (max-width:1869px) {
    font-size: 45px;
  }
  @media screen  and (max-width:1120px) {

    font-size: 30px;
  }
  @media screen  and (max-width:1240px) {
    font-size: 30px;
  }

  @media screen  and (max-width:957px) {
    font-size: 24px;
  }

`
export const Centerh11 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;

`
export const Centerh3 = styled.h2`
  font-family: 'Play';
  margin-top: 5px;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;

   @media screen  and (max-width:1037px) {
   transform: scale(0.9);
  }
`

export const Centerdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  background: url(${phone12});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen  and (max-width:892px) {
    margin-bottom: 0rem;
    left: 0rem;
  }
`
export const Centerimg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70%;

  @media screen  and (max-width:2488px) {
    margin-bottom: 0rem;
    transform: scale(0.9);
    left: 0rem;
  }

`

export const ContcenterApp = styled.div`
width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8rem;
  /* padding: 0 5%; */

  @media screen  and (max-width:1223px) {
    margin-bottom: 0rem;
    /* transform: scale(0.7); */
    left: 0rem;
    margin-bottom: 6rem;
  }

  @media screen  and (max-width:1120px) {
    margin-bottom: 0rem;
    left: 0rem;
    margin-top: 6rem;
  }
  @media screen  and (max-width:1114px) {
    margin-bottom: 0rem;
    left: 0rem;
    margin-top: 0rem;
  }

`

export const Centerimg4 = styled.img`
  position: absolute;
  width: 70%;
`
export const Contend = styled.div`
  position: relative;
  width: 30%;
  height: 120px;
  background: rgba(108, 99, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  /* margin-left: 2rem; */

  @media screen  and (max-width:1120px) {
     margin-top: 20px;
  }
  @media screen  and (max-width:900px) {
     margin-top: 20px;
     width: 50%;
  }
`
export const Contend1 = styled.div`
  position: relative;
  width: 250px;
  height: 120px;
  background: rgba(108, 99, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  border: none;

  @media screen  and (max-width:1120px) {
     /* left: 1rem; */
  }
  @media screen  and (max-width:1121px) {
     margin-top: 1.20rem;
  }

  @media screen  and (max-width:900px) {
    width: 50%;
    flex-direction: column;
  }
`

export const Enddiv = styled.div`
display: flex;
justify-content: center;
padding-top: 10px;
`
export const Endimg = styled.img`
position: absolute;
padding-top: 10px;
padding-right: 17px;
padding-left: 5px;
width: 60px;
`
export const Endp = styled.p`
margin-top: 5rem;
color: #ffff;
font-size: 14px;
padding-right: 20px;
position: absolute;
`
export const End = styled.div`
  display: flex;
  background: rgba(108, 99, 255, 0.5);
  border-radius: 5px;
  width: 50px;
  height: 55px;
`
export const Centerend = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0rem;

  @media screen  and (max-width:1237px) {
    margin-bottom: 3rem;
  }
  @media screen  and (max-width:900px) {
    width: 100%;
    flex-direction: column;
  }
  @media screen  and (max-width:900px) {
    margin-top: 7rem;
   margin-bottom: 0;
  }

`
export const Centerleftright = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 2rem;
   cursor: pointer;

   @media screen  and (max-width:1243px) {
    left: 0rem;
    margin-top: 0rem;
    margin-bottom:0;
  }

  @media screen  and (max-width:1120px) {
    margin-bottom: 10rem;
  }

  @media screen  and (max-width:1231px) {

  }
  @media screen  and (max-width:900px) {
    flex-direction: column;
  }
`
