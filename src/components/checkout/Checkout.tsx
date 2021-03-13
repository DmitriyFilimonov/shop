import React, { useState } from 'react';
import { Order } from '../interfaces/Order';
import TableDataRow from '../table-rows/table-data-row/TableDataRow';
import TableTitleRow from '../table-rows/table-title-row/TableTitleRow';
import './Checkout.css';



const orderSource: Order = (function (): Order {
    return {
        orderNumber: 132,
        address: "СПб, пр. Ленина, д. 3, кв. 8",
        deliveryDate: "12/03/2021",
        positions: [
            {
                positionNumber: 1,
                positionTitle: "Head First HTML with CSS & XHTML",
                positionAmount: 1,
                positionPricePerOne: 1917
            },
            {
                positionNumber: 2,
                positionTitle: "Доска магнитно-маркерная Cactus CS-MBD-60X90 магнитно-маркерная лак белый 60x90см алюминиевая рама",
                positionAmount: 1,
                positionPricePerOne: 1499
            },
            {
                positionNumber: 3,
                positionTitle: "Набор маркеров Berlingo 4 цвета",
                positionAmount: 5,
                positionPricePerOne: 400
            }
        ],
        getTotal: function(this:Order):number {
            let result: number = 0;
            this.positions.map(p => {
                result += p.positionPricePerOne * p.positionAmount;
            });
            return result;
        }
    }
})();
function Checkout() {

    const [order, setOrder] = useState(Object.assign({}, orderSource));
    
    const decreaseHandler = (positionNumber:number) =>{
        orderSource.positions[positionNumber].positionAmount--;
        setOrder(Object.assign({}, orderSource));
    }

    const increaseHandler = (positionNumber:number) =>{
        orderSource.positions[positionNumber].positionAmount++;
        setOrder(Object.assign({}, orderSource));
    }

    return (
        <div className="table">
            <div className="table-header">
                <label>Заказ {order.orderNumber}</label>
                <div className="order-general-info">
                    <span><b>Адрес:</b> {order.address}</span>
                    <span><b>Дата:</b> {order.deliveryDate}</span>
                </div>
                <label>Детали заказа:</label>
            </div>
            <div className="table-body">
                <TableTitleRow></TableTitleRow>
                {
                    order.positions.map(position =>
                    <TableDataRow
                    data={position}
                    decreaseHandler={decreaseHandler}
                    increaseHandler={increaseHandler}></TableDataRow>)
                }
            </div>
            <div className="table-footer">
                <span>
                    <b>Сумма: </b>
                    {order.getTotal()} руб.
                </span>
            </div>
        </div>
    )
}

export default Checkout;