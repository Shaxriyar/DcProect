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
  cursor: pointer;
`
export const Centerh1 = styled.h1`
  text-align: center;
  color: #ffff;
`
export const CenterImg = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen  and (max-width:1237px) {
    width: 50%;
  }
`
export const Mapp = styled.div`

`