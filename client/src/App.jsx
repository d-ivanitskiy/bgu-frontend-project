import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import PageOne from './Components/PageOne';
import PageSec from './Components/PageSec';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<PageOne />} />
                    <Route exact path='/pagesec' element={<PageSec />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
