import React, {Component} from 'react';
import Clientsliders from 'react-slick';
import Title from './Title';

class Clients extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="clients_logo_area_two bg_color" id="clients">
                <div className="container">
                    <Title tCenter="text-center" stitle="Some of the clients I had the privilege to work with"
                           btitle="Trusted by small and medium-sized enterprises in the US and across the globe"/>
                    <Clientsliders {...settings} className="clients_slider">
                        <div className="item">
                            <img src={require('../image/clients/aet.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/airthings.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/bestbox.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/blink.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/brightr.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/client-chat.png')} alt=""/>
                        </div>
                        <div className="more_opacity item">
                            <img src={require('../image/clients/imprint.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/kajabi.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/mabl.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/screaming-garlic.png')} alt=""/>
                        </div>
                        <div className="more_opacity item">
                            <img src={require('../image/clients/silverback-strategies.png')} alt=""/>
                        </div>
                        <div className="item">
                            <img src={require('../image/clients/xpathmedia.png')} alt=""/>
                        </div>
                    </Clientsliders>
                </div>
            </section>
        );
    }

}

export default Clients;
