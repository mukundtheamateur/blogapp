import React from 'react';
import SimpleBar from 'simplebar-react';

import Header from './Header'

export default function MainContainer(props) {
    return (
        <SimpleBar style={{minHeight:'100vh', backgroundColor: "#c2ff85"}} forceVisible='y' autoHide={false}>
            <Header  />
            <div style={{paddingBottom: '5rem'}}>
                {props.children}
            </div>
        </SimpleBar>
    )
}
