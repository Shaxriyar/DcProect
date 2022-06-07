import React from 'react'

import {Container, Centertop, Centerend, Topimg, Topp, Endh1, Endp  } from './Infrat.Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Infratuzilma/Phone/1.png"


const Infratuzilma = () => {
  return (
    <Container bg={phone}>
        <Centertop>
            <Topimg src={phone1} alt="" />
            <Topp>Bizning Kovorking maydonlarimiz ochiq konsepsiyaga ega va rezident bo‘lgan har bir kishi uchun taqdim qilinadi. Hamkorlik va ijtimoiy muhitni qo‘llab-quvvatlash uchun  qulay mebellar, printerlar va Wi-Fi kabi umumiy texnologiyalar va hatto bepul choy, qahva/suv va gazaklar bilan to‘ldiriladi.</Topp>
        </Centertop>
      <Centerend>
          <Endh1>
              INFRATUZILMA
          </Endh1>
          <Endp>
            Bino 4 qavatdan iborat. Umumiy quvvati 200 dan ortiq ish o‘rinlari. 86 ta taqdimot xonalari. 24 soatlik xavfsizlik.
          </Endp>
      </Centerend>
    </Container>
  )
}

export default Infratuzilma
