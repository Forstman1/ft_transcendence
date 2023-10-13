import { FC, ReactNode} from "react";


export interface LayoutProps{

    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default Layout;