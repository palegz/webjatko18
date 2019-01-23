import React, { Component } from 'react';
import SimpleTable from './data';

class Loans extends Component {
    render() {
        return(
            <div>
                <h1>Loans page</h1>
                <p>This page is for managing loans. Use the table below to see all loans on this system.</p>
                <SimpleTable></SimpleTable>
                
                <loansdata></loansdata>
            </div>
        )
    }
}

export default Loans;