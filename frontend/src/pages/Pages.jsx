import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Bio from './Bio';
import Header from '../components/Header';

const navigationLinks = [
    ['/home', 'Home'],
    ['/bio', 'Bio'],
]

export default function Bios() {

    return (
        <>
            <Header links={navigationLinks} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/pag" element={<Bio />} />
            </Routes>
        </>
    );
}