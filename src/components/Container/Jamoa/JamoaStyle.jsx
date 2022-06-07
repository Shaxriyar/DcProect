import styled from "styled-components";

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
export const Divleft = styled.div`

 @media screen  and (max-width:560px) {
    transform: scale(0.8);
  }
 @media screen  and (max-width:420px) {
    transform: scale(0.7);
  }
 @media screen  and (max-width:380px) {
    transform: scale(0.6);
  }
`
export const Divright = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
margin-left: 0rem;
cursor: pointer;

@media screen  and (max-width:820px) {
   justify-content: center;
  flex-direction: column;
}

@media screen  and (max-width:555px) {
 margin-top: 2rem;
}

@media screen  and (max-width:420px) {
    transform: scale(0.8);
  }

`
export const Divh1 = styled.h1`
text-align: center;
color: #ffff;
`
export const Divp = styled.p`
color: #ffff;
font-weight: 400;
font-size: 24px;

@media screen  and (max-width:555px) {
 margin-top: 16px;
}

`
export const Divimg = styled.img`
 width: 50%;
 border-radius: 10px;
 margin-left: 3rem;
 margin-right: 0rem;

 @media screen  and (max-width:1132px) {
  width: 40%;
  }
 @media screen  and (max-width:820px) {
  width: 75%;
  height: 70%;
  margin-top: 3rem;
  }
 @media screen  and (max-width:560px) {
  width: 50%;
  height: 70%;
  margin-top: 3rem;
  }
`
export const Leftp = styled.p`
  margin-left: 2rem;
  width: 410px;
  height: 170px;
  color: #ffff;
  line-height: 30px;
  word-break: break-all;

  @media screen  and (max-width:1132px) {
    width: 300px;
  }
  @media screen  and (max-width:820px) {
    width: 410px;
  }
  @media screen  and (max-width:560px) {
    text-align: center;
    width: 300px;
    transform: scale(0.9);
  }

  @media screen  and (max-width:340px) {
  transform: scale(0.8);
  }
`