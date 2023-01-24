import React from 'react';
import logo from '../../../assets/images/photodrop-logo.svg';
import { LayoutContainer } from './Layout.styles';

interface ILayoutProps {
    children: React.ReactNode;
    leftButton?: React.ReactNode;
    rightButton?: React.ReactNode;
}

function Layout({ children, leftButton, rightButton }: ILayoutProps) {
    return (
        <LayoutContainer>
            <header>
                {
                    leftButton &&
                    <span className="left">
                        {leftButton}
                    </span>
                }
                <img src={logo} alt="PhotoDrop"/>
                {
                    rightButton &&
                    <span className="right">
                        {rightButton}
                    </span>
                }
            </header>
            <section className="main">
                {children}
            </section>
        </LayoutContainer>
    );
}



export default Layout;
