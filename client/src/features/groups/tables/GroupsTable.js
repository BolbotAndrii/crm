import React, {useEffect, useState, useMemo} from 'react';
import {Table, message, Dropdown, Modal} from 'antd';
import {deleteGroup, getGroups} from "../../../utils/api";
import s from './GroupsTable.module.css'
import {UnorderedListOutlined, FormOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import features from "../../../utils/features";

import {GroupsInfoModal} from "../modals/GroupsInfoModal";


const GroupsTable = () => {
    const [groups, setGroups] = useState([])
    const [visible, setVisible] = useState(false)
    const [activeGroup, setActiveGroup] = useState({})



    useEffect(() => {
        getGroups({})
            .then(({data}) => {
                setGroups(data)
            })
            .catch(() => {
                message.error('An error occurred while loading data')
            })
    }, [])


    const RemoveElement = (id) => {
        deleteGroup(id).then(({data}) => {
            message.success(data.message)
        }).catch(() => {
            message.error('An error occurred while loading data')
        })
    }

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this item?',
            onOk() {
                setGroups(prev => prev.filter( item => item._id !== id ))
                RemoveElement(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };


    const columns = useMemo( () => [
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text) =>
                <Dropdown
                    menu={{
                        items: [
                            {
                                key: '1',
                                icon: <FormOutlined/>,
                                label: (
                                    <Link to={'/groups/' + text._id}>
                                        Change
                                    </Link>
                                ),
                            },
                            {
                                key: '2',
                                icon: <DeleteOutlined/>,
                                label: (
                                    <p onClick={() => handleDelete(text._id)}>
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
        },
        {
            title: 'Name',
            dataIndex: 'title_en',
            key: 'title_en'
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
        },
        {
            title: 'Crated at',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => features.normalizeDateTime(text)
        },
        {
            title: 'Updated at',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            render: (text) => features.normalizeDateTime(text)
        },
        {
            title: 'View',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <p onClick={() => handleVisible(record)}>
                <EyeOutlined/>
            </p>

        },

    ], [])


    const tableStyle = {
        backgroundColor: '#1f1f1f'
    }

    const rowStyle = (record, index) => {
        if (index % 2 === 0) {
            return s.light;
        } else {
            return s.dark;
        }
    };

    const handleVisible = (record) => {
        setVisible(true)
        setActiveGroup(record)
    }

    const handleClose = () => {
        setVisible(false)
        setActiveGroup(null)
    }


    return (
        <div>
            <Table
                dataSource      = { groups }
                columns         = { columns }
                rowKey          = { groups => groups._id }
                style           = { tableStyle }
                rowClassName    = { rowStyle }
                className       = { s.headerHeight }
            />

            <GroupsInfoModal visible={visible} handlerClose={handleClose} id={activeGroup?._id}  />
        </div>

    );
};

export default GroupsTable;