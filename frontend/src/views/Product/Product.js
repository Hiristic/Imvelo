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
{/* <h1 className="navbar-logo"> ImVelo <i className="fab fa-imvelo"></i></h1> */ }

{/* <div className="menu-icon" onClick={this.handleClick}>


                </div> */}
{/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul> */}

