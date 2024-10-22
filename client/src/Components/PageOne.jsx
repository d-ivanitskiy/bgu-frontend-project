import React from "react";
import { Link } from "react-router-dom";

function PageOne () {
    return(
        <>
            <h1>Hello from page 1</h1>
            <div className="main_container">
                <Link to="/pagesec">
                    <span>Second Page</span>
                </Link>
            </div>  
        </>
    )
}

export default PageOne;