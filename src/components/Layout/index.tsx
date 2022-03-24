import React, { useState, useEffect } from 'react';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import RightColumn from '../RightColumn';
import * as C from './styles';
import AdBanner from '../AdBanner';

export const Layout: React.FC = () => {

    const [isLoading, serIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            serIsLoading(false);
        }, 1000)
    }, [])

    return (
        <C.Container>   
            <MobileHeader/>
            <DesktopHeader/>
            <span>
                {!isLoading && <AdBanner/>}
            </span>
            <main>
                <LeftColumn isLoading={isLoading}/>
                <MiddleColumn isLoading={isLoading}/>
                <RightColumn isLoading={isLoading}/>
            </main>
        </C.Container>
    );
}