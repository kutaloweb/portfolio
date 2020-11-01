import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/*-----pages-----*/
import {Homefrelencer} from './Home-frelencer';

class App extends Component{

  render(){
    return(
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Homefrelencer}/>
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
}
export default App;
