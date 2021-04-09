import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from '../home-page';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={HomePage} />
            </Router>
        );
    }
}

export { App };
