import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from '../StreamComponents/StreamList';
import StreamCreate from '../StreamComponents/StreamCreate';
import StreamEdit from '../StreamComponents/StreamEdit';
import StreamDelete from '../StreamComponents/StreamDelete';
import StreamShow from '../StreamComponents/StreamShow';
import Header from '../Header/Header';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="App__container max-w-6xl mx-6 lg:mx-auto py-5 ">
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
