
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './Navbar/Navbar';

const Root = () => {

    return (
        <div >
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>

        </div>
    );
};

export default Root;