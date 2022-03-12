import React from 'react';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import RightColumn from '../RightColumn';
import * as C from './styles';

export const Layout: React.FC = () => {
    return (
        <C.Container>   
            <MobileHeader/>
            <DesktopHeader/>
            <main>
                <LeftColumn/>
                <MiddleColumn/>
                <RightColumn/>
            </main>
        </C.Container>
    );
}