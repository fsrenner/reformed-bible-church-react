import React from 'react';
import RbcJumbotron from './sections/RbcJumbotron';
import Welcome from './sections/Welcome';
import SundayGatherings from './sections/SundayGatherings';
import WhatToExpect from './sections/WhatToExpect';
import { home } from '../../util/siteContent';

export default function Home() {
    return(
        <>
            <RbcJumbotron home={home} />
            <Welcome home={home} />
            <SundayGatherings home={home} />
            
            <WhatToExpect home={home} />
        </>
    );
}