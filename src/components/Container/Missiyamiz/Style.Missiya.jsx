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
    margin-bottom: 25rem;
`
export const Centerh1 = styled.h1`
  font-family: 'Play';
  font-weight: 700;
  font-size: 24px;
  width: 242px;
  height: 36px;
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

`

export const Centeright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

`

export const Righth1  = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
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
  align-items: center;
  margin-top: 25rem;
  cursor: pointer;
  position: absolute;
`
export const Twodiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 291.33px;
  height: 252.74px;
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

  /* @media screen  and (max-width:1193px) {
    width: 20rem;
    height: 11rem;
  } */
`
export const Twodiv2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 291.33px;
  height: 252.74px;
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
`
export const Div2img  = styled.img`
 margin-top: -50px;
`
export const Hh2 = styled.h2`
 text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;color: #FFFFFF;
  padding-top: 20px;

`
export const Pp = styled.p`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  padding-top: 20px;

`
