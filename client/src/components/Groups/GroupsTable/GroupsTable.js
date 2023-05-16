import React, {useEffect, useState} from 'react';
import {Table, message, Dropdown, Modal} from 'antd';
import {deleteGroup, getGroups} from "../../../utils/api";
import s from './GroupsTable.module.css'
import {UnorderedListOutlined, FormOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import features from "../../../utils/features";
import {useDispatch} from "react-redux";
import {viewGroup} from '../../../store/groups/groups.slice'


const GroupsTable = () => {
    const [groups, setGroups] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        getGroups({})
            .then(({data}) => {
                setGroups(data)
            })
            .catch(() => {
                message.error('An error occurred while loading data')
            })
    }, [])

console.log(groups)
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
                RemoveElement(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const ShowModal = () => {
        dispatch(viewGroup())
    }


    const columns = [
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
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text) => features.normalizeDateTime(text)
        },
        {
            title: 'View',
            dataIndex: '',
            key: 'x',
            render: (text) => <p onClick={() => ShowModal(text._id)}>
                <EyeOutlined/>
            </p>

        },

    ];


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


    return (
        <div>
            <Table
                dataSource={groups}
                columns={columns}
                rowKey={groups => groups._id}
                style={tableStyle}
                rowClassName={rowStyle}
                className={s.headerHeight}
            />
        </div>

    );
};

export default GroupsTable;