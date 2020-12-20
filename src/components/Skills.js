import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Title from './Title';

class Skills extends Component {
    componentDidMount() {
        function countup(el, target) {
            let data = {count: 0};
            anime({
                targets: data,
                count: [0, target],
                duration: 2000,
                round: 1,
                delay: 200,
                easing: 'easeOutCubic',
                update() {
                    el.innerText = data.count.toLocaleString();
                }
            });

        }

        function makeCountup(el) {
            const text = el.textContent;
            const target = parseInt(text, 10);

            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        countup(el, target);
                        io.unobserve(entry.target);
                    }
                });
            });

            io.observe(el);
        }

        const els = document.querySelectorAll('[data-countup]');

        els.forEach(makeCountup);
    }

    render() {
        return (
            <section className="work_area bg_color seo_service_info" id="skill">
                <div className="container seo_service_info">
                    <Title tCenter="text-center" stitle="My Skills and Upwork Stats"
                           btitle="Over hundreds of satisfied clients and still counting"/>
                    <p>Helping business owners build solutions that are fulfilling their needs and delight
                        their customers with a better user experience. Work using PHP, Laravel, Wordpress,
                        Node.js, Express, RESTful APIs, JavaScript (ES6), React.js, Redux, Vue.js, MySQL, MongoDB,
                        Bootstrap, HTML, CSS, SASS, Webpack, Git, Shopify, HubSpot.
                    </p>
                    <div className="seo_fact_info">
                        <div className="seo_fact_item wow fadeIn" data-wow-delay="0.1s">
                            <div className="text">
                                <div className="counter one" data-countup>693</div>
                                <p className="counter_desc">Happy Clients</p>
                            </div>
                        </div>
                        <div className="seo_fact_item wow fadeIn" data-wow-delay="0.1s">
                            <div className="text">
                                <div className="counter two" data-countup>276</div>
                                <p className="counter_desc">Projects</p>
                            </div>
                        </div>
                        <div className="seo_fact_item wow fadeIn" data-wow-delay="0.1s">
                            <div className="text">
                                <div className="t_color counter three" data-countup>102</div>
                                <p className="counter_desc">5-star Ratings</p>
                            </div>
                        </div>
                        <div className="seo_fact_item seo_fact_item_last wow fadeIn" data-wow-delay="0.1s">
                            <div className="text">
                                <div className="counter four" data-countup>93</div>
                                <p className="counter_desc">Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;
