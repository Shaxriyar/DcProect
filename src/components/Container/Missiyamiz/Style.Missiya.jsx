import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg}) /*fixed center*/ ;
  position: relative;
  cursor: pointer;
`
export const ContainCent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

   /* @media screen  and (max-width:1053px) {
    transform: scale(0.9);

  } */
`
export const Centerleft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0rem;

    @media screen  and (max-width:1054px) {
      transform: scale(0.9);
      margin-bottom: 5rem;
  }
    @media screen  and (max-width:769px) {
      transform: scale(0.8);
      margin-bottom: 5rem;
  }
    @media screen  and (max-width:523px) {
      transform: scale(0.7);
      margin-bottom: 5rem;
  }
    @media screen  and (max-width:406px) {
      transform: scale(0.6);
  }
`
export const Centerh1 = styled.h1`
  font-family: 'Play';
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }
`
export const Centerp = styled.p`
  font-family: 'Play';
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 15px;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }

    @media screen  and (max-width:1195px) {
      transform: scale(0.9);
  }

    @media screen  and (max-width:1075px) {
      text-align: center;
      transform: scale(0.9);
      width: 80%;
  }
`

export const Centeright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28rem;

   @media screen  and (max-width:1054px) {
   margin-top: 50px;
  }

`

export const Righth1  = styled.h1`
  text-align: center;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }
`

export const Center = styled.div`
  display: flex;
  margin-top: 20rem;
  cursor: pointer;
  position: absolute;

  @media screen  and (max-width:1195px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen  and (max-width:1053px) {
    transform: scale(0.9);
  }
  @media screen  and (max-width:769px) {
    transform: scale(0.8);
  }
  @media screen  and (max-width:523px) {
      transform: scale(0.7);
      margin-bottom: 5rem;
  }
  @media screen  and (max-width:406px) {
      transform: scale(0.5);
  }
`
export const Twodiv = styled.div`
  position: relative;
  width: 16rem;
  height: 14rem;
  background: rgba(108, 99, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15.1339px;
  margin: 20px 20px;
  justify-content: start;
  transition: all 1s;

&:hover{
  transform: scale(1.1);
  transition: all 1s;
  }

  @media screen  and (max-width:1193px) {
    width: 20rem;
    height: 11rem;
  }
`
export const Twodiv2 = styled.div`
  position: relative;
  width: 16rem;
  height: 14rem;
  background: rgba(108, 99, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15.1339px;
  margin: 20px 20px;
  transition: all 1s;

&:hover{
  transform: scale(1.1);
  transition: all 1s;
  }
  @media screen  and (max-width:1193px) {
    /* transform: scale(0.9); */
    width: 20rem;
    height: 11rem;
  }
`
export const Div2img  = styled.img`
margin-top: -20px;
padding-left: 1rem;
margin-left: 50px;

@media screen  and (max-width:1193px) {
  padding-left: 3rem;
  }

`
export const Hh2 = styled.h2`
 text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;color: #FFFFFF;
  padding-top: 10px;

  @media screen  and (max-width:1197px) {
    transform: scale(0.9);
  }

`
export const Pp = styled.p`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  padding-top: 10px;

`
