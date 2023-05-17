import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {LeadsTable} from "../../features/leads/tables/LeadsTable";
import ControlPanel from "../../components/ControlPanel/ControlPanel";


const HomePage = () => {
    return (
        <MainLayout>
            <ControlPanel>

            </ControlPanel>
            <LeadsTable />
        </MainLayout>
    );
};

export default HomePage;