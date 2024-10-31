import "./header.css"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <>
            <header>
                <h1>Hello form header</h1>
                <div className="head_container">
                    <Link to="/">
                        <span>Home</span> <br/>
                    </Link>
                    <Link to="/fir">
                        <span>First page</span> <br />
                    </Link>
                    <Link to="/sec">
                        <span>Second page</span> <br/>
                    </Link>
                    <Link to="/register">
                        <span>Register</span> <br/>
                    </Link>
                    <Link to="/login">
                        <span>Login</span> <br />
                    </Link>
                    <Link to="/profile">
                        <span>Profile</span> <br/>
                    </Link>
                </div>
            </header>
        </>
    )
}