import React from 'react';
import Navigation from './Navigation';

export default function Header({ onShow }) {
    return (
        <header>
            <Navigation onShow={onShow} />
        </header>
    );
}