import React from 'react';
import s from './ControlPanel.module.css'

const ControlPanel = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

export default ControlPanel;