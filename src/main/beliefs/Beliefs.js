import React, { useEffect } from 'react';
import WwbJumbotron from './sections/WwbJumbotron';
import Mission from './sections/Mission';
import WhoWeAre from './sections/WhoWeAre';
import WhatWeBelieve from './sections/WhatWeBelieve';
import RecommendedResources from './sections/RecommendedResources';
import { beliefs } from '../../util/siteContent';

export default function Beliefs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return(
        <>
            <WwbJumbotron beliefs={beliefs} />
            <Mission beliefs={beliefs} />
            <WhoWeAre beliefs={beliefs} />
            <WhatWeBelieve beliefs={beliefs} />
            <RecommendedResources beliefs={beliefs} />
        </>
        
    );
}