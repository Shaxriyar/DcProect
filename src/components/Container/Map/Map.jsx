import React from 'react';

import {Container, Centerh1, CenterImg,  } from './MapStyle';

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Map/Photo/map.png"


const Map1 = () => {
  return (
    <Container bg={phone}>
         <Centerh1>Bizning Manzil</Centerh1>
        <CenterImg >
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48359.680424863436!2d72.374573!3d40.751465749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1654257065965!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </CenterImg>
    </Container>
  );
}

export default Map1;
