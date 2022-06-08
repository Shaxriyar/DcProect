import styled from "styled-components";

 // MUI ICONSLARNI CHAQIRIB OLINYAPTI
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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

export const Centerright = styled.div`
  display: flex;
  color: white;
  margin-top: 40rem;
  cursor: pointer;
  transition: 1.3s;
  position: fixed;
  right: 10px;
  z-index: 1000;

  &:hover{
    transform: rotateY(360deg);
    cursor: pointer;
    color: aquamarine;
  }

`
export const Centphone = styled(LocalPhoneIcon)`
font-weight: 700;
 color: white;
 margin-right: 0px;
 margin-top: 10px;

`
export const Numberh1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 30px;
  color: #d4d0d0 !important;
  margin: 0px 10px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10rem;

  @media screen  and (max-width:695px) {
    margin-bottom: 20rem;
  }
  @media screen  and (max-width:610px) {
    transform:scale(0.9);
  }
  @media screen  and (max-width:460px) {
    transform:scale(0.8);
  }
  @media screen  and (max-width:383px) {
    transform:scale(0.7);
  }
  @media screen  and (max-width:347px) {
    transform:scale(0.6);
  }
`
export const Texdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0rem;
  word-break: break-all;
  width: 100%;

  /* @media screen  and (max-width:1370px) {
    transform: scale(0.9);
  }
  @media screen  and (max-width:1250px) {
    transform: scale(0.8);
     margin-top: -8.0rem;
  } */
`
export const Texnoparkdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 174px;
  left: 0rem;
  top: 7rem;
  font-weight: 700;
  font-size: 141.724px;
  color: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;

  @media screen  and (max-width:1503px) {
    text-align: center;
    font-size: 100.724px;
  }
  @media screen  and (max-width:553px) {
    top: 6.50rem;
    font-size: 80.724px;
  }
  /* @media screen  and (max-width:434px) {
    font-size: 40px;
  } */

`

export const H3 = styled.h3`
 position: relative;
 font-weight: 700;
 font-size: 45px;
 color: #ffffff;
 word-break: break-all;

 &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }

  @media screen  and (max-width:780px) {
    font-size: 40px;
  }
  @media screen  and (max-width:560px) {
    font-size: 35px;
  }
  @media screen  and (max-width:553px) {
    font-size: 30px;
  }

`
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 70px;
  color: #ffffff;
  margin-top: 20px;
  word-break: break-all;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }

    @media screen  and (max-width:533px) {
     font-size: 60px;
  }
`
export const Hp = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  color: #ffffff;
  margin-top: 20px;
  word-break: break-all;

   &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
  }

  @media screen  and (max-width:1390px) {
     width: 800px;
  }
  @media screen  and (max-width:987px) {
     width: 600px;
  }
  @media screen  and (max-width:533px) {
     width: 500px;
     font-size: 50px;
  }
`

export const Centerleft = styled.div`
position: fixed;
z-index: 1000;
left: 20px;

@media screen  and (max-width:1440px) {
    left: 2rem;
}
@media screen  and (max-width:800px) {
    display: none;
}

`

//Div ICon start
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding-left: 2px;
  padding-top: 0px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
   }
    @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }
`

export const Div2 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 10px;
  padding-top: 5px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }
`
export const Div3 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 6px;
  padding-top: 7px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }

`
export const Div4 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 7px;
  padding-top: 7px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }

`
export const MenuIcon = styled(DashboardCustomizeIcon)`
  color: #ffffff;
  width: 45px !important;
  font-size: 35px !important;
  transition: all 0.5s;

  &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
    @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }
`
export const MenuIcon2 = styled(CleanHandsIcon)`
 color: white;
 width: 35px !important;
 font-size: 35px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
  @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }

`
export const MenuIcon3 = styled(RocketLaunchIcon)`
 color: white;
 font-size: 35px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
  @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }
`
export const MenuIcon4 = styled(LocalPhoneIcon)`
 color: white;
 font-size: 35px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;

    }
  @media screen  and (max-width:636px) {
  height: 28px !important;
   width: 30px !important;
}
@media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }

`
 //Div ICon end
