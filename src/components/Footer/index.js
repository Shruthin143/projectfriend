import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
} from './FooterElements'
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              {/* <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>How it Works</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Careers</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Be a Partner</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink>Ph No: 7829000399</FooterLink>
              <FooterLink>Email: deshpande.1@iitj.ac.in</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Buff-A-Love
            </SocialLogo>
            <WebsiteRights>
              Buff-A-Love @ {new Date().getFullYear()} All Rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/profile.php?id=100073444400137'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/e.buffalob/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
