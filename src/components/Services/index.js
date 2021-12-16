import React from 'react'
// import { FaCamera } from 'react-icons/fa'
import Icon1 from '../../images/camera.png'
import Icon2 from '../../images/products.png'
import Icon3 from '../../images/health.jpg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services2 = () => {
  return (
    <>
      <ServicesContainer id='services2'>
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Monitoring</ServicesH2>
            <ServicesP>
              You can login to our platform and see the status of your cattle at
              any time. You can ask for any clarifications and we will update
              you asap.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Products</ServicesH2>
            <ServicesP>
              You will have the high quality certified milk products delivered
              at your doorstep as per the agreement.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Vigilance</ServicesH2>
            <ServicesP>
              You will be updated with the feed inputs and the health reports at
              the tap of the button on your device.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services2
