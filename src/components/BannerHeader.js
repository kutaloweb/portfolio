import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
import useTypewriter from "react-typewriter-hook"
import {useState, useEffect, useRef} from "react";

const MagicOcean = [
    "Visual Designer & Front-end Developer",
    "Git/Github flow",
    "React, Redux, React-router",
];
let index = 0;

function BannerHeader() {
    const [magicName, setMagicName] = useState("Visual Designer & Front-end Developer");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 2 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
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
                                <h4 className="wow fadeInUp anoimated cursor">{name} &zwnj;</h4>
                            </Reveal>
                        </div>
                    </div>
                )}
            </WaterWave>
        </section>
    );
}

export default BannerHeader;
