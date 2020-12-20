import React, {Component} from 'react';
import Title from './Title';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class Portfolio2 extends Component {
    state = {
        activeItem: 'web',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');

        imgLoad.on('progress', function (instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        });

        this.onFilterChange("web");
    }

    onFilterChange = (newFilter) => {

        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }

        if (newFilter === 'web') {
            this.iso.arrange({filter: `.web`});
        } else {
            this.iso.arrange({filter: `.${newFilter}`});
        }
    }

    onActive = v => v === this.state.activeItem ? 'pushed' : '';

    render() {
        return (
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <Title tCenter="text-center" stitle="My Portfolio" btitle="Some samples of my previous work"/>
                    <ul className="list_style portfolio_menu text-center">
                        <button className={`${this.onActive('web')} theme_btn active`} data-wow-delay="0.3s" data-filter="web"
                            onClick={() => {
                                this.onFilterChange("web")
                            }}>Web Design
                        </button>
                        <button className={`${this.onActive(`develop`)} theme_btn active`} data-wow-delay="0.6s" data-filter="develop"
                            onClick={() => {
                                this.onFilterChange("develop")
                            }}>Development
                        </button>
                        <button className={`${this.onActive(`market`)} theme_btn active`} data-wow-delay="0.8s" data-filter="market"
                            onClick={() => {
                                this.onFilterChange("market")
                            }}>Marketing
                        </button>
                    </ul>

                    <div className="grid row">
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/1.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/2.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/9.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/10.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/3.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/3.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">WEB DESIGN</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item market">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/3.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">Marketing</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">Development</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">Development</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                            <div className="portfolio hover-style">
                                <img src={require('../image/portfolio/4.jpg')} alt=""/>
                                <div className="item-img-overlay">
                                    <div className="overlay-info text-center">
                                        <h6 className="sm-titl">Development</h6>
                                        <div className="icons">
                                            <a href=".#"><i className="icon_heart_alt"></i></a>
                                            <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                        </div>
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

export default Portfolio2;
