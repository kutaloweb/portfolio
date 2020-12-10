import React, {Component} from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

class TestimonialTwo extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <SectionTitleTwo stitle="Customer feedback" btitle="What our customers say about John.."/>
                            <Fade bottom cascade>
                                <div className="wow fadeInUp" data-wow-delay="0.3s">
                                    <p>Horse play chinwag bog-standard loo cup of char fanny around tinkety tonk old
                                    fruit bog me old mucker is bits and bobs, mush cheeky bugger nancy boy.!</p>
                                </div>
                                <div className="slider_nav">
                                    <i className="arrow_carrot-left_alt2 prev" onClick={this.previous}></i>
                                    <i className="arrow_carrot-right_alt2 next" onClick={this.next}></i>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info">
                                <div className="stratup_testimonial_info d-flex align-items-center">
                                    <Slider ref={c => (this.slider = c)} className="testimonial_slider_four" {...settings}>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../../image/testimonial_man.png')} alt=""/>
                                            </div>
                                            <p>Tidio has given our clients a quick and easy way to send over thoughts and questions
                                                without delay or wait time! No second guessing</p>
                                            <h5>Michael Bean</h5>
                                            <h6>Graphic Designer</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../../image/testimonial_man.png')} alt=""/>
                                            </div>
                                            <p>Tidio has given our clients a quick and easy way to send over thoughts and questions
                                                without delay or wait time! No second guessing – just asked and answered quickly in
                                                order to make their purchasing decisions easier!</p>
                                            <h5>Michael Bean</h5>
                                            <h6>Graphic Designer</h6>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialTwo;