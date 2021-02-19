import React from 'react';
import { useAuth0 } from '../react-auth0-spa'

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
        </div>
    )
}

export default Navbar