import React, {useEffect, useState} from 'react';
import {message, Spin, Table, Popover, Tag, Dropdown} from "antd";
import s from "./style.module.css";
import {getLeads} from "../../../api/leads";
import {EyeOutlined, FormOutlined, UnorderedListOutlined, UsergroupDeleteOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


// interface DataType {
//     key: string;
//     name: string;
//     age: number;
//     address: string;
//     tags: string[];
// }

export const LeadsTable = () => {
    const [leads, setLeads] = useState()
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        const fetchLeads = async () => {
           try {
               const response = await getLeads()
               setLeads(response.data)
               console.log(response.data)
           } catch {
               message.error('An error occurred while loading data')
           } finally {
               setLoading(false)
           }
        }
        fetchLeads()
    }, [])

    const columns = [
        {
            title: '#',
            dataIndex: '',
            key: 'x',
            width: 30,
            render: (text:any) =>
                (
                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: '1',
                                    icon: <FormOutlined />,
                                    label: (
                                        <Link to={ '/lead/' + text.id }>
                                            Change
                                        </Link>
                                    ),
                                },
                                {
                                    key: '2',
                                    icon: <UsergroupDeleteOutlined />,
                                    label: (
                                        <p >
                                            Delete
                                        </p>
                                    ),
                                }]
                        }}
                        trigger={["click"]}
                        placement="bottomRight"
                    >
                        <UnorderedListOutlined/>
                    </Dropdown>
                )
        },
        {
            title: 'Id',
            dataIndex: 'uid',
            key: 'uid',

        },
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name'
        },
        {
            title: 'Last name',
            dataIndex: 'last_name',
            key: 'last_name'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Affiliate',
            dataIndex: 'affiliate',
            key: 'affiliate'
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source'
        },
        {
            title: 'Manager',
            dataIndex: 'manager',
            key: 'manager',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            render: (text:any, tag: any) => (
                <Tag color={text.toUpperCase()  === 'NEW' ? 'green' : 'red'}  key={text.status}>
                    {tag.status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        },
        {
            title: 'View',
            dataIndex: '',
            key: 'x',
            render: (text:any) => <Popover content={text.comment}>
                <EyeOutlined/>
            </Popover>
        },
    ]



    const rowStyle = (record:any, index:number) => {
        if (index % 2 === 0) {
            return s.light;
        } else {
            return s.dark;
        }
    };


    return (
        <>
            <Spin spinning={loading}>
                <Table
                    dataSource      = { leads }
                    columns         = { columns }
                    rowKey          = { groups => groups.id }
                    rowClassName    = { rowStyle }
                    className       = { s.headerHeight }
                    scroll={{ x: 1600, y: 'calc(100vh - 300px)' }}
                />
            </Spin>
        </>
    )
}

