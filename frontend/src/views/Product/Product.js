import React, { useState } from 'react';
import './Product.css'
import MaterialTable from "material-table";

function Product() {

    const [tableData, setTableDate] = useState([
        { produktnamn: "Loctite 221", leverantor: "Henkel Ltd", piktogram: "", utfardandeDatum: "16-03-2020" }
    ])

    const colums = [
        { title: "Produktnamn", accessor: "produktnamn" },
        { title: "Leverantör", accessor: "leverantor" },
        { title: "Piktogram", fiaccessoreld: "piktogram" },
        { title: "Utfärdande datum", accessor: "utfardandeDatum" }
    ]
    return (
        <div className="container">
            <p> Produktlista</p>

            <MaterialTable colums={colums} data={tableData} />
        </div>
    );
};
export default Product;