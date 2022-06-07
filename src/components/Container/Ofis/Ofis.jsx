import React from 'react'
import { Container, Contcenter, Contdiv1, Contdiv, Contdiv2, Contdiv3, Contdiv4, Contcend, Centerh1, Centerh3, Centerdiv, Centerimg, Contend, Contend1, Enddiv, Endimg, Endp, End, Centerend, Centerimg4, Centerimg5, Centerimg6, Centerleftright, Centerh33, Centerh11, Div, ContcenterApp  } from './Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone12 from "../Ofis/Phone/12.png"
import phone5 from "../Ofis/Phone/5.png"
import phone6 from "../Ofis/Phone/6.png"
import Mask from "../Ofis/Phone/Mask group (0).png"


const Ofis = () => {
  return (
    <Container bg={phone}>

        <Contcenter>
            <Centerdiv>
                <Contdiv>
                    <Centerh1>7.5%</Centerh1>
                    <Centerh3>Daromad soligʻi</Centerh3>
                </Contdiv>
                <Contdiv>
                  <Centerh1>0%</Centerh1>
                  <Centerh3>Korporativ soliqlar</Centerh3>
                </Contdiv>
                <Contdiv>
                  <Centerh1>0%</Centerh1>
                  <Centerh3>Yagona ijtimoiy toʻlov</Centerh3>
              </Contdiv>
                <Contdiv>
                  <Centerh1>Yoq</Centerh1>
                  <Centerh3>Oʻz ehtiyojlari uchun <br/> tovarlarni olib kirishda <br/>  bojxonatoʻlovlari</Centerh3>
                </Contdiv>
           </Centerdiv>
        </Contcenter>

           <ContcenterApp>
                <Centerend>
                    <Contend1>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend1>
                      <Contend1>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend1>
                </Centerend>

                <Centerleftright>
                    <Contend>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend>
                    <Contend>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend>
                    <Contend>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend>
                </Centerleftright>
           </ContcenterApp>

    </Container>
  )
}

export default Ofis
