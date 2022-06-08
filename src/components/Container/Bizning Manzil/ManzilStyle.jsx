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
  /* width: 50%; */
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 0rem;

 @media screen  and (max-width:1150px) {
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

`
export const Topimg = styled.img`
  /* width: 50%; */
  width: 657px;
  height: 439px;
  border-radius: 10px;


  `
export const Topp = styled.p`
   /* width: 320px; */
   font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-top: 0rem;
  color: #FFFFFF;
  padding-top: 0rem;
  /* overflow: scroll; */


  `


  export const Topbutton = styled.div`
    background: rgba(108, 99, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 644px;
    height: 439px;
    /* height: 100% */
    position: relative;

    /* @media screen  and (max-width:1143px) {
      width: 400px;
    } */

    `
    export const Centerend = styled.div`
      width: 55%;
      display: flex;
      justify-content: center;
      align-items:center;
      margin-top: 3rem;

    `

    // export const Centdiv3 = styled.div`
    //   margin-left: 0rem;
    //   padding-left: 0px;
    // `
    // export const Centdiv4 = styled.div`
    //    margin-left: -3.50rem;
    // `
    // export const Centdiv5 = styled.div`
    //   margin-left: -3.50rem;
    // `
    // export const Centdiv6 = styled.div`
    //   margin-left: -3.50rem;
    // `
    // export const Centdiv7 = styled.div`
    //  margin-left: -3.50rem;

    // `
