import React from 'react';
import LeadershipJumbotron from './sections/LeadershipJumbotron';
import Government from './sections/Government';
import ChurchLeaders from './sections/ChurchLeaders';
import { leadership } from '../../util/siteContent';

export default function Leadership() {
    return(
        <>
            <LeadershipJumbotron />
            <Government leadership={leadership} />
            <ChurchLeaders leadership={leadership} />
        </>
    );
}