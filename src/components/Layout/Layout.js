import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useLocation } from 'react-router-dom';


export const Layout = () => {
    const { pathname } = useLocation()
    
    return (
        <>
            {["/", "/model-s", "/model-x", "/solarpanels"].includes(pathname)
                ? <Header color="black" bgdefault={true} />
                : <Header color="white" bgdefault={false} />
            }
            <Outlet />
        </>
    )
}
