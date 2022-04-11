import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year} Nurun Nabi</small></p>
        </footer>
    );
};

export default Footer;