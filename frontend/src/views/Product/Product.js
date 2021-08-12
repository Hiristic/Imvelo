import React, { useState } from 'react';
import './Product.css'
import ReactDOM from 'react-dom';
import MaterialTable from "material-table";

function Product() {

    const [tableData, setTableData] = useState([])
    const colums = [
        { title: "Produktnamn", field: "produktnamn" },
        { title: "Leverantör", field: "leverantor" },
        { title: "Piktogram", field: "piktogram" },
        { title: "Utfärdande datum", field: "utfardandeDatum" }
    ]
    return (
        <div className="container">
            <p> Produktlista</p>

            <MaterialTable colums={colums} data={tableData} />
        </div>
    );
};

export default Product;