import React from 'react'
import { Container, ContainCent, Centerleft, Centerh1, Centerp, Centeright, Righth1, Center, Twodiv, Twodiv2, Div2img, Hh2, Pp, Div  } from './Style.Missiya'

//RASMLAR IMPORT BOLYAPTI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Missiyamiz/Phone/image 177.png"
import phone3 from "../Missiyamiz/Phone/image 178.png"

const Missiya = () => {
  return (
    <Container bg={phone}>

      <Div data-aos="fade-up"
     data-aos-duration="3000">
        <ContainCent >
            <Centerleft>
              <Centerh1> BIZNING MISSIYAMIZ </Centerh1>
              <Centerp> Digital city - missiyasi innovatsion loyihalarni ishlab chiqaruvchi yetakchi markazlardan biriga <br/> aylanish, ilg‘or IT kompaniyalarni ishga tushirish va butun dunyodan yosh va iqtidorli <br/> IT mutaxassislarning ahamiyatli massasini jalb qilish o‘chog‘iga aylanishdir. </Centerp>
            </Centerleft>
        </ContainCent>

        <Centeright>
          <Righth1>Bizning Auditoriyamiz</Righth1>
        </Centeright>
    </Div>

        <Center>
          <Twodiv data-aos="fade-right"
     data-aos-offset="700"
     data-aos-easing="ease-in-sine">
            <Div2img src={phone2} alt="" />
            <Hh2>IT Startaplari Uchun</Hh2>
            <Pp>MO‘z biznesingizni samarali va erkin muhitda rivojlantirish imkoniyatiga ega bo‘lish</Pp>
          </Twodiv>
          <Twodiv2 data-aos="fade-left"
     data-aos-offset="700"
     data-aos-easing="ease-in-sine">
            <Div2img src={phone3} alt="" />
            <Hh2>Investorlar uchun </Hh2>
            <Pp>Muvofiq investitsiya <br/> yechimlarini topish</Pp>
          </Twodiv2>
        </Center>
    </Container>
  )
}

export default Missiya
