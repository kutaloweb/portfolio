import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {
        return (
            <section className="work_area bg_color seo_service_info" id="service">
                <div className="container seo_service_info">
                    <Title tCenter="text-center" stitle="What services can I offer?"
                           btitle="Simple or complex, together we will find a creative answer that feels right and produces quality results"/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-1.png`)} alt=""/>
                                    <h2 className="t_color">Web development</h2>
                                    <p>I am experienced in many front-end and back-end frameworks and I provide a
                                        tailored approach to each project by gathering all the "must-have"s and
                                        "nice-to-have"s from you to move your business forward.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-2.png`)} alt=""/>
                                    <h2 className="t_color">Marketing & E-commerce</h2>
                                    <p>Expert in Hubspot and Shopify, I can build complicated designs to a very high
                                        standard, without any compromise on code quality. I can solve any issues with
                                        stores, build landing pages and email templates, and much more.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="work_item wow fadeInUp seo_service_item"
                                     data-wow-delay="0.1s">
                                    <img className="work_img"
                                         src={require(`../image/service-3.png`)} alt=""/>
                                    <h2 className="t_color">Maintenance support</h2>
                                    <p>Let me deal with all the day-to-day technicalities, debugging and new
                                        requirements so you can simply relax. I offer technical support when necessary,
                                        in an efficient manner. I will keep your projects secure and up-to-date.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Services;
