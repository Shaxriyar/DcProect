import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width:100%;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${props=>props.bg});
`

export const Center = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  margin-bottom: 20rem;

  @media screen  and (max-width:1101px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.9);
    margin-bottom: 0rem;
  }

  @media screen  and (max-width:1099px) {
    transform: scale(0.8);
  }
  @media screen  and (max-width:864px) {
    transform: scale(0.7);
  }
  @media screen  and (max-width:849px) {
    margin-bottom: 22rem;
    transform: scale(0.6);
  }
`
export const Onediv = styled.div`
  position: relative;
  width: 15rem;
  background: rgba(108, 99, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15.1339px;
  margin: 20px 20px;
  transition: all 1s;

  &:hover{
    transition: all 1s;
    }

    @media screen  and (max-width:1101px) {
    transform: scale(0.9);
  }
`
export const Divimg = styled.img`
 padding-left: 4rem;
 margin-top: -50px;

`
export const Divh2 = styled.h2`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;color: #FFFFFF;
  padding-top: 10px;
`
export const Divp = styled.p`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  padding-top: 10px;
`

export const Twodiv = styled.div`
  position: relative;
  width: 15rem;
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

  @media screen  and (max-width:1101px) {
    transform: scale(0.9);
  }

`
export const Div2img  = styled.img`
margin-top: -50px;
padding-left: 4rem;

`
export const Hh2 = styled.h2`
 text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;color: #FFFFFF;
  padding-top: 0px;
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
export const Threediv = styled.div`
  position: relative;
  width: 15rem;
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

  @media screen  and (max-width:1101px) {
    transform: scale(0.9);
  }

`
export const Centerend = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0rem;

  @media screen  and (max-width:1101px) {
    margin-bottom: 17rem;
    transform: scale(0.9);
  }
  @media screen  and (max-width:1101px) {
    transform: scale(0.7);
  }
  @media screen  and (max-width:850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48rem;
    transform: scale(0.7);
  }

`
export const Centerleft = styled.div`
  cursor: pointer;
  margin-right: 20rem;

  @media screen  and (max-width:1101px) {
    transform: scale(0.9);
  }
  @media screen  and (max-width:850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 0;
  }

`
export const Endh1 = styled.h1`
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 20px;
  position: absolute;

  @media screen  and (max-width:852px) {
    margin-top: 0;
    margin-bottom: 15rem;
  }
`
export const Endp = styled.p`
  font-size: 24px;
  color: #e0d8d8;
  position: absolute;
  width: 491px;
  height: 148px;
  margin-top: 5rem;

  @media screen  and (max-width:1101px) {
    width: 340px;
    height: 300px;
  }
  @media screen  and (max-width:852px) {
    margin-top: 10rem;

  }
`
export const Centerright = styled.div`
  margin-left: 20rem;

  @media screen  and (max-width:850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0;
  }

`
export const Rightimg  = styled.img`
margin-top: 15rem;
width: 100%;
height: 250px;
cursor: pointer;

@media screen  and (max-width:852px) {
    transform: scale(0.8);
    margin-top: 5rem;
  }
`
