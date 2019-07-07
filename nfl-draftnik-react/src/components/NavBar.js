import React from "react";
import {useAuth0} from "../react-auth0-wrapper";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div>
            {isAuthenticated && (
                <span className="p-4">
                    <Link to="/" className="m-2">Home</Link>&nbsp;
                    <Link to="/profile" className="m-2">Profile</Link>
                    <Link to="/testUsersGraphQLQuery" className="m-2">Test Users GraphQL query</Link>
                </span>
            )}

            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})} className="m-2">
                    Log in
                </button>
            )}

            {isAuthenticated && <button onClick={() => logout()} className="m-2">Log out</button>}
        </div>
    );
};

export default NavBar;
