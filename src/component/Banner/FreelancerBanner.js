import React, {Component} from 'react';
import {Reveal} from 'react-reveal/';
import SectionTitleTwo from "./SectionTitleTwo";
import {Link} from "react-scroll";

class freelancerBanner extends Component {
    render(){
        return(
            <section className="frelencer_banner_area" id="home">
                <div className="home_bubble">
                    <div className="bubble b_one"></div>
                    <div className="bubble b_two"></div>
                    <div className="bubble b_three"></div>
                    <div className="bubble b_four"></div>
                    <div className="bubble b_five"></div>
                    <div className="bubble b_six"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                <Reveal effect="fadeInUp" duration={700}>
                                    <div className="skill_content_two">
                                        <SectionTitleTwo stitle="About me"
                                                         btitle="Some Interesting Facts About Me."/>
                                        <p>Horse play chinwag bog-standard loo cup of char fanny around tinkety tonk old
                                            fruit bog me old mucker is bits and bobs, mush cheeky bugger nancy boy.!</p>
                                    </div>
                                </Reveal>
                            </div>
                            <div className="frelencer_content">
                                <Reveal effect="fadeInUp" duration={900}>
                                    <Link className="fadeInUp theme_btn active" to="contacts" spy={true} smooth={true} offset={-86} duration={500}>
                                        Hire me
                                    </Link>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="frelencer_img">
                            <Reveal effect="fadeInLeft" duration={1400}>
                                <img className="f_img_one" src={require('../../image/f_man.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInRight" duration={1200}>
                                <img className="f_img_two" src={require('../../image/table.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={1600}>
                                <img className="f_img_three" src={require('../../image/cup.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={1600}>
                                <img className="f_img_four" src={require('../../image/shadow.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={2000}>
                                <div className="f_img_five">
                                    <img className="" src={require('../../image/js.png')} alt=""/>
                                </div>
                            </Reveal>
                                <div className="f_img_six">
                                    <img className="" src={require('../../image/css.png')} alt=""/>
                                </div>
                                <div className="f_img_seven">
                                    <img className="" src={require('../../image/react.png')} alt=""/>
                                </div>
                                <div className="f_img_eight">
                                    <img className="" src={require('../../image/hubspot.png')} alt=""/>
                                </div>
                                <div className="f_img_nine">
                                    <img className="" src={require('../../image/shopify.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default freelancerBanner;