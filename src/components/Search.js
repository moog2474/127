import { data } from "./data"
import React, { useState } from "react";


function search() {
    const term = document.getElementsByName("input").value;

    const searchResult = data.filter(function (item) {
        return item.productName.toLowerCase().includes(term.toLowerCase())
    });

}
export default function Search() {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}