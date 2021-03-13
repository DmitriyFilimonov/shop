import { OrderPosition } from '../../interfaces/OrderPosition';
import '../TableRows.css';

interface TableDataRowProps{
    data:OrderPosition;
    decreaseHandler:(positionNumber:number)=>void;
    increaseHandler:(positionNumber:number)=>void;
}


function TableDataRow(props:TableDataRowProps) {
    function decrease(){
        props.decreaseHandler(props.data.positionNumber-1);
    }
    function increase(){
        props.increaseHandler(props.data.positionNumber-1);
    }
    return (
        <div className="table-row">
            <span>{props.data.positionNumber}</span>
            <span>{props.data.positionTitle}</span>
            <span className="amount">{props.data.positionAmount}</span>
            <span>{props.data.positionPricePerOne}</span>
            <span className="amount-buttons">
                <button className="decrease" onClick={decrease}>-</button>
                <button className="increase" onClick={increase}>+</button>
            </span>
            <span>
                <button className="delete-button">удалить</button>
            </span>
        </div>
    )
}

export default TableDataRow;