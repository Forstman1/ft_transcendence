import {FC, ReactNode} from 'react';

export interface ILayoutProps {
    children: ReactNode;
}

 const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Layout;