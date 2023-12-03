"use client";
import {FC, ReactNode} from 'react';
import RestrictedRoute from "@/components/RestrictedRoute";

export interface ILayoutProps {
    children: ReactNode;
}

 const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <div>
            <RestrictedRoute>
                {children}
            </RestrictedRoute>
        </div>
    );
}

export default Layout;