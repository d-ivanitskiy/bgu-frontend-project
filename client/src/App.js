import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Header from './Components/header/Header';
import FirstPage from './pages/First_page/FirstPage';
import SecPage from './pages/SecPage/SecPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/fir" element={<FirstPage />} />
                <Route path="/sec" element={<SecPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
