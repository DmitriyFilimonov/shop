import React from 'react';
import TableRow from '../table-row/TableRow';
import './Checkout.css';

function Checkout() {
    return (
        <div className="table">
            <div className="table-header">
                <label>Заказ №132</label>
                <div className="order-general-info">
                    <span><b>Адрес:</b> СПб, пр. Ленина, д. 3, кв. 8</span>
                    <span><b>Дата:</b> 12/03/2021</span>
                </div>
                <label>Детали заказа:</label> </div>
            <div className="table-body">
                <div className="table-body-first-row">
                    <span>#</span>
                    <span>наименование</span>
                    <span>кол-во</span>
                    <span>цена за шт.</span>
                    <span></span>
                    <span></span>
                </div>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
            </div>
            <div className="table-footer">
                <span>
                    <b>Сумма:</b>
                    11198 руб.
                </span>
            </div>
        </div>
    )
}

export default Checkout;