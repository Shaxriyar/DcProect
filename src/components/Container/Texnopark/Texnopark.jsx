import React,{useEffect} from 'react';
import { Container, Centerleft, Div, Div2, Div3, Div4,  Centerright, Centphone, Numberh1, Center, Texnoparkdiv, Texdiv, H3, H1, Hp, MenuIcon, MenuIcon2, MenuIcon3, MenuIcon4} from './TexnopStyle';
import phone from "../Texnopark/phone/photo2.png"
import axios from 'axios';
// import WidgetsIcon from '@mui/icons-material/Widgets';

const Texnopark = () => {

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/infrastructure/').then(res=>{
      console.log(res);
    })
  }, []);
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

            <Center data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1900">
              <Texnoparkdiv data-aos="fade-up">
                TEXNOPARK
              </Texnoparkdiv >
                <Texdiv>
                  <H3>TEXNOPARhgjhghghjhKewfwefef</H3>
                  <H1>Digital city</H1>
                  <Hp>innovatsiyalarga bir525285254825482582 qadam yaqinlashing</Hp>
                </Texdiv>
            </Center>

            <Centerright>
                <Centphone>
                  <MenuIcon4 />
                </Centphone>
                <Numberh1 data-aos='flip-right'>
                  1227
                </Numberh1>
            </Centerright>

      </Container>

  );
}

export default Texnopark;
