import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video' />
      </HeroBg>
      <HeroContent>
        <HeroH1>When consumption knows its genesis</HeroH1>
        <HeroP>
          <em>A magical experience of purity for a simpler life</em>
        </HeroP>
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
