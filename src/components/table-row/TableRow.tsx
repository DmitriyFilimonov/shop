import './TableRow.css';

function TableRow() {
    return (
        <div className="table-row">
            <span>1</span>
            <span>"Head First HTML with CSS & XHTML"</span>
            <span className="amount">1</span>
            <span>1917 руб.</span>
            <span className="amount-buttons">
                <button className="decrease">-</button>
                <button className="increase">+</button>
            </span>
            <span>
                <button className="delete-button">удалить</button>
            </span>
        </div>
    )
}

export default TableRow;