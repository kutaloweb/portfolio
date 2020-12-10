import React , {Component} from 'react';

class FooterTwo extends Component {
    render(){
        const today = new Date();
        return(
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg"></div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© {today.getFullYear()} AlexKutalo.com. All rights reserved. </p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i className="icon_heart"></i> by Alexey Kutalo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterTwo;