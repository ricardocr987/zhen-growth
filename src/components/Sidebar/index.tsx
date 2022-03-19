import {AiOutlineClose} from 'react-icons/ai'
import {Link} from "react-scroll";
require('./Sidebar.css');

interface NavProps{
    NavItems: any;
    sidebar: boolean;
    showSidebar: any;
}

export const Sidebar = ({NavItems, sidebar, showSidebar}: NavProps) => {
    return (
        <>
            <div onClick={showSidebar} className={sidebar ? 'sidebar-container active' : 'sidebar-container'}>
                <div className='close-icon'>
                    <AiOutlineClose/>
                </div>
                <div className='sidebar-wrapper'>
                    {NavItems.map((route: any) =>
                    <div className='sidebar-menu'>
                        <Link onClick={showSidebar} className='sidebar-links' to={route.ref} spy={true} smooth={true} offset={50}>
                            {route.label}
                        </Link>
                    </div>
                    )}
                    <div className='social-links'>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Sidebar;