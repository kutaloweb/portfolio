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
                                }}>JS & PHP
                        </button>
                    </ul>

                    <div className="grid row">
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://www.inoc.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/hubspot/inoc450.png')} alt=""/>
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
                                <a href="https://blog.tophatter.com/sellerblog" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/hubspot/tophatter450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Tophatter Seller Blog</h4>
                                            <h6>Read practical tips to grow your sales on ecommerce
                                                marketplaces &amp; retailers. Sellers &amp; merchants learn how to get
                                                more sales &amp; diversify on multiple channels.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://rockerbox.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/hubspot/rockerbox900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Rockerbox</h4>
                                            <h6>Enterprise multi-touch attribution made simple and affordable. Know the
                                                true impact and ROI of every marketing activity.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item hubspot">
                            <div className="portfolio hover-style">
                                <a href="https://pesolar.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/hubspot/pesolar900.png')} alt=""/>
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
                                    <img src={require('../image/portfolio/hubspot/bestbox450.png')} alt=""/>
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
                                    <img src={require('../image/portfolio/hubspot/mabl450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>mabl</h4>
                                            <h6>Quality begins where the first line of code is written. Integrate
                                                intelligent test automation into the entire software development
                                                workflow with mabl.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://www.bedinabox.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/bedinabox450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>BedInABox®</h4>
                                            <h6>Welcome to BedInABox® - The Original Mattress in a Box! Free
                                                shipping &amp; super-simple returns.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://www.trekell.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/trekell450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Trekell Art Supplies</h4>
                                            <h6>Shop Trekell Art Supplies for professional-quality artist products. Free
                                                shipping on orders $59+!</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://hydropeptide.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/hypdropeptide900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>HydroPeptide</h4>
                                            <h6>Anti-aging, epigenetic skincare that&#39;s clinically proven and a
                                                pleasure to use.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://builtusa.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/builtusa900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Built USA</h4>
                                            <h6>Win Cool Prizes and purchase American Made Gear!</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://us.got-bag.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/gotbag450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>GOT BAG</h4>
                                            <h6>GOT BAG is a sustainable, social-first fashion brand dedicated to
                                                raising awareness and cleaning our oceans from plastic pollution!</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item shopify">
                            <div className="portfolio hover-style">
                                <a href="https://store.ravalmd.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/shopify/raval450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Raval Facial Aesthetics</h4>
                                            <h6>Browse through a selection of top-of-the-line skincare products
                                                available for purchase with Raval Facial Aesthetics. Get exclusive
                                                access to our own prescription line, RavalRX.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://www.ssi-net.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/ssi450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Systems Solution, Inc.</h4>
                                            <h6>SSI is the leading provider of IT support services including cyber
                                                security, disaster recovery, virtual CIO and more.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://nu.nuorder.com/index.html" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/nuorder450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>NuORDER B2B eCommerce</h4>
                                            <h6>B2B Wholesale eCommerce solution for buyers &amp; brands. NuORDER's
                                                2-way ordering system takes your business digital 24/7, taking selling
                                                to the next level.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://github.com/kutaloweb/spala" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/spala900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Spala</h4>
                                            <h6>Spala (SPA LARAVEL): a modern lightweight CMS for Laravel and Vue
                                                developers (open source project with 80+ stars on GitHub).</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://go.mapsentry.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/mapsentry900.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>MapSentry</h4>
                                            <h6>Instantly Identify, Monitor and Contact Your MAP Policy Violators In One
                                                Place.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://clientchatlive.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/clientchatlive450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>Client Chat Live</h4>
                                            <h6>Client Chat Live™ was made by lawyers for lawyers. Get More Clients With Full Service Live Chat.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <a href="https://madisonmilesmedia.com" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../image/portfolio/web/madison450.png')} alt=""/>
                                    <div className="item-img-overlay">
                                        <div className="overlay-info text-center">
                                            <h4>madison/miles media</h4>
                                            <h6>madison/miles media a digital marketing agency based in Dallas-Fort Worth, helps improve your brand positioning, generate leads and win customers.</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;
