import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights

} from "./FooterElements";


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
   
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="#">How it works </FooterLink>
              <FooterLink to="#">Testimonials </FooterLink>
              <FooterLink to="#">Investors </FooterLink>
              <FooterLink to="#">Terms of Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to="#">How it works </FooterLink>
              <FooterLink to="#">Testimonials </FooterLink>
              <FooterLink to="#">Investors </FooterLink>
              <FooterLink to="#">Terms of Service </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Videos</FooterLinkTitle>
              <FooterLink to="#">How it works </FooterLink>
              <FooterLink to="#">Testimonials </FooterLink>
              <FooterLink to="#">Investors </FooterLink>
              <FooterLink to="#">Terms of Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="#">Facebook </FooterLink>
              <FooterLink to="#">LinkedIn </FooterLink>
              <FooterLink to="#">Twitter </FooterLink>
              <FooterLink to="#">Instagram </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Heels Factory</SocialLogo>
            <WebsiteRights>
              Heels Factory, 2023 All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="#"   aria-label="facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="#"   aria-label="youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="#"   aria-label="twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="#"  aria-label="instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  ); 
};

export default Footer;
