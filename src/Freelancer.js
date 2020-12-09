import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/FreelancerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import TestimonialTwo from './component/Testimonial/TestimonialTwo';
import Clientslogo from './component/Clientslogo';
import ContactTwo from './component/ContactTwo';
import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import Service from "./component/Service";
import RBanner from "./component/Banner/RippleBanner";
import jhonData from './component/jhonData';

export const Freelancer = () => (
  <div className="body_wrapper">
    <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png"/>
    <RBanner jhonData={jhonData} bClass="banner_shap_two" imag="man.jpg" textLeft="text-left"/>
    <FBanner jhonData={jhonData}/>
    <Service wClass="work_area" jhonData={jhonData}/>
    <PortfolioSlider/>
    <SkillTwo wClass="work_area"/>
    <TestimonialTwo/>
    <Clientslogo/>
    <ContactTwo jhonData={jhonData}/>
    <FooterTwo jhonData={jhonData}/>
  </div>
)
