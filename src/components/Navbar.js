import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../auth/react-auth0-spa'

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log In</button>
            )}

            {isAuthenticated && (
                <button onClick={() => logout()}>Log Out</button>
            )}

            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </span>
            )}
        </div>
    )
}

export default Navbar