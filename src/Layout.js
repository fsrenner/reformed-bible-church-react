import React, { useState } from 'react';
import Header from './Header';
import HeadAdjustment from './HeadAdjustment';
import Footer from './Footer';
import ContactModal from './modals/ContactModal';


export default function Layout({ children }) {
    const [show, setShow] = useState(false);
    const onHide = () => setShow(false);
    const onShow = () => setShow(true);

    return (
        <div>
            <Header onShow={onShow} />
            <HeadAdjustment />
            {children}
            <Footer onShow={onShow} />
            <ContactModal show={show} onHide={onHide} />
        </div>
    );
}