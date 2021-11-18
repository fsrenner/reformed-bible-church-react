import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';


export default function Layout({ children }) {
    const [show, setShow] = useState(false);
    const onHide = () => setShow(false);
    const onShow = () => setShow(true);

    return (
        <div>
            <Header onShow={onShow} />
            {children}
            <Footer onShow={onShow} />
            <ContactModal show={show} onHide={onHide} />
        </div>
    );
}