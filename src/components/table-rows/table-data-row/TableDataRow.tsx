import { OrderPosition } from '../../interfaces/OrderPosition';
import '../TableRows.css';

interface TableDataRowProps {
    data: OrderPosition;
    renderIndex:number;
    decreaseHandler: (positionNumber: number) => void;
    increaseHandler: (positionNumber: number) => void;
    deleteHandler:(positionNumber: number)=>void;
}

let availability: string;

function TableDataRow(props: TableDataRowProps) {
    function decrease() {
        if (props.data.positionAmount > 1)
            props.decreaseHandler(props.data.positionNumber - 1);
    }
    function increase() {
        props.increaseHandler(props.data.positionNumber - 1);
    }
    function deletePosition(){
        props.deleteHandler(props.data.positionNumber-1);
    }
    props.data.positionAmount > 1 ? availability = "available" : availability = "blocked";
    return (
        <div className="table-row">
            <span>{props.renderIndex}</span>
            <span>{props.data.positionTitle}</span>
            <span className="amount-col">{props.data.positionAmount}</span>
            <span>{props.data.positionPricePerOne}</span>
            <span className="amount-buttons">
                <button className={"decrease " + (availability)} onClick={decrease}>-</button>
                <button className="increase" onClick={increase}>+</button>
            </span>
            <span>
                <button className="delete-button" onClick={deletePosition}>удалить</button>
            </span>
        </div>
    )
}

export default TableDataRow;