import React from 'react';

import "swiper/css/bundle";

import {Container, Centertop, Topimg, Topp, Topbutton, Centerend, Endimg3, Endimg4, Endimg5, Endimg6, Endimg7, Centdiv3, Centdiv4, Centdiv5, Centdiv6, Centdiv7 } from './ManzilStyle'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Bizning Manzil/Photo/2.png"

 import Hard from "../../Container/Hard/Hard"

const Manzil = () => {
  return (
    <Container bg={phone}>
      <Centertop>
        <Topimg src={phone2 } alt="" />
            <Topbutton>
                <Topp>Ta’kidlash lozimki, axborot texnologiyalari va innovatsion loyihalarni qo‘llab-quvvatlash, dasturiy mahsulotlar eksportini yo‘lga qo‘yish maqsadida ishlab chiqilgan Digital City loyihasi mohiyatiga ko‘ra, Toshkentdagi IT-parkdan so‘ng tashkil etilgan ikkinchi, viloyatlar miqyosida esa birinchidir.</Topp>
            </Topbutton>
      </Centertop>
      <Centerend>
         <Hard />
      </Centerend>
    </Container>
  )
}

export default Manzil
