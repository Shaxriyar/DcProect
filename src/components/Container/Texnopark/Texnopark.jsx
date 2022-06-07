import React from 'react';
import { Container, Centerleft, Div, Div2, Div3, Div4,  Centerright, Centphone, Numberh1, Center, Texnoparkdiv, Texdiv, H3, H1, Hp, MenuIcon, MenuIcon2, MenuIcon3, MenuIcon4} from './TexnopStyle';
import phone from "../Texnopark/phone/photo2.png"
// import WidgetsIcon from '@mui/icons-material/Widgets';

const Texnopark = () => {
  return (
      <Container bg={phone}>

          <Centerleft>
            <Div>
              <MenuIcon />
            </Div>
            <Div2>
              <MenuIcon2 />
            </Div2>
            <Div3>
              <MenuIcon3 />
            </Div3>
            <Div4>
              <MenuIcon4 />
            </Div4>
          </Centerleft>

            <Center>
              <Texnoparkdiv data-aos="fade-up">
                TEXNOPARK
              </Texnoparkdiv >
                <Texdiv>
                  <H3>TEXNOPARK</H3>
                  <H1>Digital city</H1>
                  <Hp>innovatsiyalarga bir qadam yaqinlashing</Hp>
                </Texdiv>
            </Center>

            <Centerright>
                <Centphone>
                  <MenuIcon4 />
                </Centphone>
                <Numberh1>
                  1227
                </Numberh1>
            </Centerright>

      </Container>

  );
}

export default Texnopark;
