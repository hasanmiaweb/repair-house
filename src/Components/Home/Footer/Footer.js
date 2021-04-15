import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <span>Copyright &copy; {(new Date().getFullYear())} All Rights Reserved By <Link to="/">Repair House</Link></span>
        </div>
    );
};

export default Footer;