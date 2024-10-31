import './App.css';
import { Routes, Route, BrowserRouter, Navigate  } from 'react-router-dom';
import Header from './Components/header/Header';
import FirstPage from './pages/First_page/FirstPage';
import SecPage from './pages/SecPage/SecPage';
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

const Profile = () => {
    const { logout } = useAuth();
    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/fir" element={<FirstPage />} />
                    <Route path="/sec" element={<SecPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
