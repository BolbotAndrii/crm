import React from 'react';
import s from './Sidebar.module.css'
import { NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";
import {DashboardOutlined,TeamOutlined, UserOutlined, UsergroupAddOutlined, ProjectOutlined} from "@ant-design/icons";
import { useSelector} from "react-redux";

const Sidebar = () => {


    const isOpen = useSelector((state) => state.MenuToggle.isOpen);

    return (
        <div className={ isOpen ? s.container + ' ' + s.close : s.container }>
            <Logo />
            <nav className={ s.list }>
                <li key='1'>
                    <NavLink to='/' className={(navData) => (navData.isActive ? s.active : 'none')}>
                        <DashboardOutlined />
                        <p>Dashboard</p>
                    </NavLink>
                </li>
                <li key='2'>
                    <NavLink to='/leads' className={(navData) => (navData.isActive ? s.active : 'none')}>
                        <UsergroupAddOutlined />
                        <p>Leads</p>
                    </NavLink>
                </li>
                <li key='3'>
                    <NavLink to='/groups' className={(navData) => (navData.isActive ? s.active : 'none')}>
                        <TeamOutlined />
                        <p>Groups</p>
                    </NavLink>
                </li>
                <li key='4'>
                    <NavLink to='/users' className={(navData) => (navData.isActive ? s.active : 'none')}>
                        <UserOutlined />
                        <p>Users</p>
                    </NavLink>
                </li>
                <li key='5'>
                    <NavLink to='/analytics' className={(navData) => (navData.isActive ? s.active : 'none')}>
                        <ProjectOutlined />
                        <p>Analytics</p>
                    </NavLink>
                </li>
            </nav>
        </div>
    );
};


export default Sidebar;