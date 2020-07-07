import React from 'react';

const Summary = (props) => {
    const add = props.add;
    console.log(props);

    let totalSalary= 0;
    for (let i = 0; i < add.length; i++) {
        const yearlySalary = add[i];
        totalSalary = yearlySalary.income +  totalSalary;
    }
   

    return (
        <div className="summary-section">
            <h2>Item Order:{add.length}</h2>
             <p>Total yearly salary:{totalSalary}</p>
        </div>
    );
};

export default Summary;