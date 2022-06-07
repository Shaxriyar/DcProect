import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
  cursor: pointer;
`
export const Righttop = styled.div`
 display: flex;
 align-items: center;

 @media screen  and (max-width:1320px) {
    width: 80%;
  }
 @media screen  and (max-width:1172px) {
    transform: scale(0.9);
  }
  @media screen  and (max-width:1010px) {
    transform: scale(0.8);
  }
  @media screen  and (max-width:915px) {
    flex-direction: column;
  }
  @media screen  and (max-width:537px) {
    transform: scale(0.7);
  }
  @media screen  and (max-width:431px) {
    transform: scale(0.6);
  }

`

export const Topleftdiv = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;

`
export const Topimg = styled.img`
 width: 40%;
 border-radius: 10px;
 margin-top: 0rem;
 left: 0;

`
export const Divbutton = styled.div`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  border: none;
  background-color: color;
  border: 1px solid #FFFFFF;
  border-radius: 23.4043px;
  color: white;
  padding-left: 20px;
  padding-top: 10px;
  margin-left: 30rem;

  @media screen  and (max-width:915px) {
    margin-left: 0;
  }
`
export const Toph1 = styled.h1`
text-align: center;
width: 450px;
height: 170px;
color: #ffff;
margin-left: 2rem;
`
export const Topp = styled.p`
margin-left: 4rem;
width: 475px;
height: 170px;
color: #ffff;
line-height: 30px;
margin-left: 2rem;
margin-top: -7rem;
word-break: break-all;
text-align: center;

@media screen  and (max-width:495px) {
    width: 390px;
  }
`

export const Rightend = styled.div`

@media screen  and (max-width:1172px) {
    transform: scale(0.9);
  }
@media screen  and (max-width:1010px) {
    transform: scale(0.8);
  }
  @media screen  and (max-width:915px) {
    flex-direction: column;
  }
  @media screen  and (max-width:537px) {
    transform: scale(0.7);
  }
  @media screen  and (max-width:431px) {
    transform: scale(0.6);
  }
`
export const Enddiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
 margin-bottom: 0px;
`
export const Hh1 = styled.h1`
text-align: center;
color: #ffff;
`
export const Pp = styled.p`
  width: 265px;
  color: #ffff;
  line-height: 20px;
  word-break: break-all;
  text-align: center;
  margin-top: 15px;
`
export const Enddiv2 = styled.div`
 display: flex;
 margin-top: 30px;

 @media screen  and (max-width:915px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
 `
 export const Div = styled.div`
 `
export const Endimg = styled.img`
 width: 90%;
 height: 275px;
 border-radius: 10px;
 margin-left: 4rem;

 @media screen  and (max-width:1190px) {
    transform: scale(0.9);
  }
`
export const P2p = styled.p`
 width: 435px;
 font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
word-break: break-all;
margin-top: 20px;

@media screen  and (max-width:1190px) {
    width: 345px;
  }
@media screen  and (max-width:790px) {
    text-align: center;
  }
@media screen  and (max-width:437px) {
    transform: scale(0.9);
`