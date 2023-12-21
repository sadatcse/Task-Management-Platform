
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Root = () => {

    return (
        <div >
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;