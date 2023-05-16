import React from 'react';
import {UserOutlined, LogoutOutlined} from "@ant-design/icons";
import s from './LoggedUser.module.css'
import { Dropdown, Space, Avatar } from 'antd';

const LoggedUser = () => {

    const items = [
        {
            label: <a href="/logout"> <LogoutOutlined /> Logout </a>,
            key: '0',
        }
    ];

    return (
        <div className={s.container}>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
            <a onClick={(e) => e.preventDefault()} href="#/">
                <Space>
                    <Avatar icon={<UserOutlined />} />
                </Space>
            </a>
        </Dropdown>
        </div>
    );
};

export default LoggedUser;