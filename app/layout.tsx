import React from 'react';
import Navigation from './components/navigation';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Your App Title</title>
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;