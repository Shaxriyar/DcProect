import React from 'react';
import { Container, Center, Onediv, Divimg, Divh2, Divp, Twodiv, Div2img, Hh2, Pp, Threediv, Centerleft, Centerend, Endh1, Endp, Centerright, Rightimg   } from './RezidStyle';

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Rezidentlar/Phone/image 1.png"
import phone2 from "../Rezidentlar/Phone/image 2.png"
import phone3 from "../Rezidentlar/Phone/image 3.png"
import phone4 from "../Rezidentlar/Phone/image 4.png"

const Rezident = () => {
  return (
    <Container bg={phone}>

        <Center>
            <Onediv>
              <Divimg src={phone1} alt="" />
              <Divh2>IT mutaxassislari, murabbiylar va trekerlar uchun</Divh2>
              <Divp>Tajriba almashish va IT tadbirkorlarning yosh avlodini shakllantirish</Divp>
            </Onediv>
            <Twodiv>
              <Div2img src={phone2} alt="" />
              <Hh2>Mahalliy va xorijiy IT kompaniyalari uchun </Hh2>
              <Pp>Laboratoriyalarni, ilmiy-tadqiqot markazlarini joylashtirish, korporativ innovatsiyalarni rivojlantirish va yosh IT kompaniyalar bilan hamkorlik qilish</Pp>
            </Twodiv>
            <Threediv>
              <Div2img src={phone3} alt="" />
              <Hh2>barcha uchun</Hh2>
              <Pp>innovatsion texnologiyalar va raqamli loyihalar sohasidagi yetakchi mutaxassislarning ma'ruzalari va mahorat darslarida qatnashish hamda Qozog‘istonning innovatsion hamjamiyatiga a'zo bo‘lish</Pp>
            </Threediv>
        </Center>

         <Centerend>
            <Centerleft>
                  <Endh1 data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">Rezidentlari</Endh1>
                  <Endp>IT Parkning rezidentlari IT-kompaniyalar va IT oʻquv markazlar bo'lib, ular bir qator muhim afzalliklarga ega boʻlishlari mumkin. Bularga quyidagilar kiradi:</Endp>
              </Centerleft>

              <Centerright>
                  <Rightimg src={phone4} alt="" />
              </Centerright>
         </Centerend>

    </Container>
  );
}

export default Rezident;
