import React from 'react';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded border-solid border-t-4 border-slate-300">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Article</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="https://twitter.com/example" target="_blank"><FiTwitter size={24} color="#000" /></a>
  <a href="https://facebook.com/example" target="_blank"><FiFacebook size={24} color="#000" /></a>
  <a href="https://instagram.com/example" target="_blank"><FiInstagram size={24} color="#000" /></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by SCC TASKMAN</p>
  </aside>
</footer>
    );
};

export default Footer;
