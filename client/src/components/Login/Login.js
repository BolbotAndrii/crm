import React from 'react';

import s from './Login.module.css'
import bg from '../../images/login_bg.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';



const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (

    <div className={s.container} style={{ backgroundImage: `url(${bg})` }}>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
            ]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>


        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>

        </Form.Item>
    </Form>
    </div>

    )
};

export default Login;