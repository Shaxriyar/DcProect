import React from 'react';

import {Container, Divleft, Divright, Divh1, Divp, Divimg, Leftp} from './JamoaStyle'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Jamoa/Phone/1.png"


const Jamoa = () => {
  return (
    <Container bg={phone}>
      <Divleft>
        <Divh1>JAMOA</Divh1>
        <Divp>Bizning asosiy qadriyatimiz</Divp>
      </Divleft>
       <Divright>
         <Leftp>IT bozori darajasiga va ehtiyojlariga javob beradigan malakali IT kadrlarni yetishtirib chiqarish va mamlakatda amalga oshirilayotgan raqamlashtirish jarayonlariga xissa qo’sha oladigan har tomonlama rivojlangan va ijodiy salohiyatli mutaxassislar jamoasini shakllantirish</Leftp>
         <Divimg src={phone2} alt="" />
       </Divright>
    </Container>
  )
}

export default Jamoa
