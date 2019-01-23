import React, { Component } from 'react';
import EquipmentTable from './equipmentdata';


class Equipment extends Component {
    render() {
        return(
            <div>
                <h1>Equipment page</h1>
                <p>This page shows the equipment on the system.</p>
                <EquipmentTable></EquipmentTable>
            </div>
        )
    }
}

export default Equipment;