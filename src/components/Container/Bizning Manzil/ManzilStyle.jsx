import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});

`
export const Centertop = styled.div`
  width: 50%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 0rem;
 width: 70%;

`
export const Topimg = styled.img`
  width: 50%;
  border-radius: 10px;

  @media screen  and (max-width:1037px) {

  }

  `
export const Topp = styled.p`

  width: 540px;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  margin-top: 5rem;
  color: #FFFFFF;
  padding-top: 2.9rem;

    @media screen  and (max-width:1037px) {

}
  `
  export const Topbutton = styled.div`
    background: rgba(108, 99, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    width: 100%;
    height:100%;

    `
    export const Centerend = styled.div`
      width: 50%;
      display: flex;
      justify-content: center;
      align-items:center;
      margin-top: 3rem;

    `

    export const Centdiv3 = styled.div`
      margin-left: 0rem;
      padding-left: 0px;
    `
    export const Centdiv4 = styled.div`
       margin-left: -3.50rem;
    `
    export const Centdiv5 = styled.div`
      margin-left: -3.50rem;
    `
    export const Centdiv6 = styled.div`
      margin-left: -3.50rem;
    `
    export const Centdiv7 = styled.div`
     margin-left: -3.50rem;

    `
