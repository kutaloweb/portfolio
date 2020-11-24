import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/*-----pages-----*/
import {Freelancer} from './Freelancer';

class App extends Component {
    componentDidMount() {
        this.props.hideLoader();
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Freelancer}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
