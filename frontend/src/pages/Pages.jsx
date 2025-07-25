import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Bio from './Bio';
import Header from '../components/Header';

import Logo from '../assets/react.svg';

const navigationLinks = [
    ['/home', 'Home'],
    ['/bio', 'Bio'],
]

export default function Pages() {

    return (
        <>
            <Header title={Logo} links={navigationLinks} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/bio" element={<Bio />} />
            </Routes>
        </>
    );
}