import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page1
            <Link to="/pagetwo">Go to page 2</Link>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            Page2
            <Link to="/">Go to page 1</Link>
        </div>
    );
};

const App = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 to bg-green-200 h-screen w-screen text-main-dark">
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;
