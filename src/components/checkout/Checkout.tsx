import React, { useState } from 'react';
import { Order } from '../interfaces/Order';
import ModalProofDelete from '../modal-proof-delete/ModalProofDelete';
import TableDataRow from '../table-rows/table-data-row/TableDataRow';
import TableTitleRow from '../table-rows/table-title-row/TableTitleRow';
import './Checkout.css';



const orderSource: Order = {
    orderNumber: 132,
    address: "СПб, пр. Ленина, д. 3, кв. 8",
    orderDate: new Date().toLocaleDateString("en-GB"),
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
            positionTitle: "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих",
            positionAmount: 1,
            positionPricePerOne: 799
        },
        {
            positionNumber: 4,
            positionTitle: "Набор маркеров Berlingo 4 цвета",
            positionAmount: 5,
            positionPricePerOne: 400
        }
    ],
    getTotal: function (this: Order): number {
        let result: number = 0;
        this.positions.map(p => {
            result += p.positionPricePerOne * p.positionAmount;
            return result;
        });
        return result;
    }
};

let positionForDelete: number;

function Checkout() {

    const [order, setOrder] = useState(Object.assign({}, orderSource));
    const [modalVisibility, setModalVisibility] = useState("");
    const [logicConst, setLogicConst] = useState(true);

    const decreaseHandler = (positionNumber: number) => {
        orderSource.positions[positionNumber].positionAmount--;
        console.log(orderSource);
        setLogicConst(!logicConst);
    }

    const increaseHandler = (positionNumber: number) => {
        orderSource.positions[positionNumber].positionAmount++;
        setOrder(Object.assign({}, orderSource));
    }

    const deleteHandler = (positionNumber: number) => {
        positionForDelete = positionNumber;
        setModalVisibility("visible");
    }

    const proofedDeleteHandler = () => {
        setModalVisibility("");
        orderSource.positions.splice(positionForDelete, 1);
        for (let i = positionForDelete; i < orderSource.positions.length; i++) {
            orderSource.positions[i].positionNumber--;
        }
        setOrder(Object.assign({}, orderSource));
    }

    const canceledDeleteHandler = () => {
        setModalVisibility("");
    }

    return (
        <div className="table">
            <div className="table-header">
                <label>Заказ# {order.orderNumber}</label>
                <div className="order-general-info">
                    <span><b>Адрес:</b> {order.address}</span>
                    <span><b>Дата заказа:</b> {order.orderDate}</span>
                </div>
                <label>Детали заказа:</label>
            </div>
            <div className="table-body">
                <TableTitleRow></TableTitleRow>
                {
                    order.positions.map((position, index) =>
                        <TableDataRow
                            key={position.positionNumber}
                            renderIndex={index+1}
                            data={position}
                            decreaseHandler={decreaseHandler}
                            increaseHandler={increaseHandler}
                            deleteHandler={deleteHandler}></TableDataRow>)
                }
            </div>
            <div className="table-footer">
                <span>
                    <b>Сумма: </b>
                    {order.getTotal()} руб.
                </span>
            </div>
            <ModalProofDelete
                modalVisibility={modalVisibility}
                deleteHandler={proofedDeleteHandler}
                cancelDeleteHandler={canceledDeleteHandler}></ModalProofDelete>
        </div>
    )
}

export default Checkout;