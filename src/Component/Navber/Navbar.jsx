import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {


    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Blog', path: '/blog' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'Contact', path: '/contact' },
    ]



    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ?
                    <Bars3Icon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className="h-6 w-6 text-blue-500" />
                }</span>


            </div>
            <ul className={`md:flex md:sticky duration-500 bg-purple-400 pl-8 pb-2 pt-2 absolute ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;