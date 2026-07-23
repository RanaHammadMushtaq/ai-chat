import type { ReactNode } from 'react';
import Navigation from './components/navigation';

const Layout = ({ children }: { children: ReactNode }) => {
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
