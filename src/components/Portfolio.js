import React, {Component} from 'react';
import Title from './Title';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class Portfolio extends Component {
    state = {
        activeItem: '',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');

        imgLoad.on('progress', function (instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
            this.iso.arrange({filter: `.hubspot`});
        });

        this.onFilterChange("hubspot");
        this.setState({activeItem: "hubspot"});
    }

    onFilterChange = (newFilter) => {

        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }

        this.iso.arrange({filter: `.${newFilter}`});
    }

    onActive = v => v === this.state.activeItem ? 'pushed' : '';

    render() {
        return (
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <Title tCenter="text-center" stitle="My Portfolio" btitle="Some samples of my previous work"/>
                    <ul className="list_style portfolio_menu text-center">
                        <button className={`${this.onActive('hubspot')} theme_btn active`} data-wow-delay="0.3s"
                                data-filter="hubspot"
                                onClick={() => {
                                    this.onFilterChange("hubspot")
                                }}>HubSpot
                        </button>
                        <button className={`${this.onActive(`shopify`)} theme_btn active`} data-wow-delay="0.6s"
                                data-filter="shopify"
                                onClick={() => {
                                    this.onFilterChange("shopify")
                                }}>Shopify
                        </button>
                        <button className={`${this.onActive(`web`)} theme_btn active`} data-wow-delay="0.8s"
                                data-filter="web"
                                onClick={() => {
                                    this.onFilterChange("web")
                                }}>JS, React, PHP
                        </button>
                    </ul>

                    <div className="grid row">
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://www.inoc.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/inoc450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>INOC</h4>
                                            <h6>INOC is a US-based Network Operations Center providing 24×7 network
                                                monitoring support and NOC Lifecycle Solutions®.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://www.capdesk.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/capdesk450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Capdesk</h4>
                                            <h6>Fast-growing startups use Capdesk to digitise their cap table and
                                                shareholder register, effortlessly manage company equity and incentivise
                                                employees through share schemes.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://rockerbox.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/rockerbox900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Rockerbox</h4>
                                            <h6>Enterprise multi-touch attribution made simple and affordable. Know the
                                                true
                                                impact and ROI of every marketing activity.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://pesolar.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/pesolar900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>PE Solar</h4>
                                            <h6>Save money on your energy costs while helping the environment with solar
                                                panels, serving FL, AZ and NC PE Solar is your solar company.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://bestbox.co" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/bestbox450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>BestBox Fitness</h4>
                                            <h6>A fitness company helping gym owners and coaches Rx the business side of
                                                running a "box".</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://mabl.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/mabl450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>mabl</h4>
                                            <h6>Quality begins where the first line of code is written. Integrate
                                                intelligent test automation into the entire software development
                                                workflow
                                                with mabl.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/3.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        Coming soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        Coming soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        Coming soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        Coming soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;
