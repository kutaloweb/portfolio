import React, {Component} from 'react';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
import Fade from 'react-reveal/Fade';

class Service extends Component{
    render(){
        let jhonData = this.props.jhonData;
        var {wClass} = this.props
        return(
            <section className={`${wClass} bg_color seo_service_info`} id="service">
                <div className="container seo_service_info">
                    <SectionTitleTwo tCenter="text-center" stitle="What I do ?" btitle="Innovative solutions to grow your creative projects"/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                jhonData.service && jhonData.service.map(item =>{
                                return(
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp seo_service_item" data-wow-delay="0.1s">
                                                <img className="work_img" src={require (`../image/service-${item.id}.png`)} alt=""/>
                                                <h2 className="t_color">{item.serviceTitle}</h2>
                                                <p>{item.sDetails}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;