import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-4">This is the Contact page. Please reach out to us through the following methods:</p>
            <ul className="mt-2">
                <li>Email: contact@example.com</li>
                <li>Phone: (123) 456-7890</li>
            </ul>
        </div>
    );
};

export default ContactPage;