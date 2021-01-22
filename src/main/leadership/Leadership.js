import React, { useEffect } from 'react';
import LeadershipJumbotron from './sections/LeadershipJumbotron';
import Government from './sections/Government';
import ChurchLeaders from './sections/ChurchLeaders';
import { leadership } from '../../util/siteContent';

export default function Leadership() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <>
            <LeadershipJumbotron />
            <Government leadership={leadership} />
            <ChurchLeaders leadership={leadership} />
        </>
    );
}