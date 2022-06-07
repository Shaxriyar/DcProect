import React from 'react'

import {Container, Righttop, Rightend, Topdiv,Topimg, Toph1, Topp, Topleftdiv, Divbutton, Enddiv, Hh1, Pp, Enddiv2, P2p,Endimg, Div } from './Kovork.Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Kovorking/Phone/2.png"
import phone3 from "../Kovorking/Phone/3.png"


const Kovorking = () => {
  return (
    <Container bg={phone}>

     <Righttop>
                <Topimg src={phone2} alt="" />
           <Topleftdiv>
              <Toph1>KIBERSPORT</Toph1>
               <Topp>Kibersport yo‘nalishida professional jamoalar tuzishda xizmat ko’rsatish uchun va musoboqalar o’tkazish uchun eng zamonaviy kompyuterlar va qulayliklarga egamiz va kibersport rivojlanishida xizmat ko’rsatamiz.</Topp>

               <Divbutton>Batafsil</Divbutton>
               
           </Topleftdiv>
     </Righttop>

     <Rightend>
            <Enddiv>
              <Hh1>KOVORKING </Hh1>
              <Pp>IT tadbirkorlarga qulay va arzon ijara ofis o‘rinlarini taqdim etamiz.</Pp>
            </Enddiv>
        <Enddiv2>
              <P2p>Texnopark 50 dan ortiq yangi axborot texnologiyalari sohasida xizmat ko‘rsatadigan korxonalarni joylashtirish uchun mo‘ljallangan. Mazkur texnoparkda korxonalarga o‘z faoliyatini amalga oshirish uchun zarur infratuzilma, hamda ofis maydonlari taqdim etilib, ularga moliyaviy, marketing, yuridik va boshqa konsalting xizmatlari ko‘rsatiladi.</P2p>
          <Div>
              <Endimg src={phone3} alt="" />
          </Div>
        </Enddiv2>
     </Rightend>

    </Container>
  )
}

export default Kovorking
