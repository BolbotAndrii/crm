import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'
import {
    Form,
    Input, message
} from 'antd';
import {getGroupById} from "../../../utils/api";
import features from "../../../utils/features";

const GroupDetail = ( ) => {
    const params = useParams();
    const [group, setGroup] = useState({})

    useEffect(() => {
        getGroupById(params.id).then( ( {data} ) => {
            setGroup(data)
        }).catch(() => {
            message.error('An error occurred while loading data')
        })
    }, [group, params.id])


    return (
        <div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                size='small'
                style={{
                    maxWidth: 600,
                }}
            >

                <Form.Item label="Name" >
                    <Input value={group.title_en}/>
                </Form.Item>

                <Form.Item label="Code" >
                    <Input value={group.code}/>
                </Form.Item>
                <Form.Item label="Date" >
                    {/*<DatePicker*/}
                    {/*    showTime*/}
                    {/*    format="YYYY-MM-DD HH:mm:ss"*/}
                    {/*    placeholder="Select Date and Time"*/}

                    {/*    defaultValue={group.date}*/}
                    {/*/>*/}
                    <Input value={features.normalizeDateTime(group.date)}/>
                </Form.Item>

            </Form>
        </div>
    );
};

export default GroupDetail;