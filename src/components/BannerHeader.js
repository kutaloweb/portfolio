import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';

class Banner extends Component {
    render() {
        return (
            <section id="home">
                <WaterWave interactive={false} strength={0} className="banner_area banner_shap_two"
                           style={{width: '100%', height: '100%', backgroundSize: 'cover'}}
                           imageUrl={require("../image/man.jpg")}>
                    {() => (
                        <div className="container">
                            <div className="banner_content text-left">
                                <Reveal effect="fadeInUp">
                                    <h5>HELLO</h5>
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={1500}>
                                    <h2 className="wow fadeInLeft animated">I am Alexey Kutalo</h2>
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={2200}>
                                    <h4 className="wow fadeInUp anoimated">Visual Designer & Front-end Developer</h4>
                                </Reveal>
                            </div>
                        </div>
                    )}
                </WaterWave>
            </section>
        );
    }
}

export default Banner;
