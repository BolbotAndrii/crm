import React from 'react';
import GroupsTable from "./GroupsTable/GroupsTable";
import ControlPanel from "../ControlPanel/ControlPanel";
import {Button} from "antd";
import control from '../ControlPanel/ControlPanel.module.css'
import {UsergroupAddOutlined} from '@ant-design/icons'

const Groups = () => {
    return (
        <div>
            <ControlPanel>
                <Button className={control.add}><UsergroupAddOutlined /> Add group</Button>
            </ControlPanel>
            <GroupsTable />
        </div>
    );
};

export default Groups;