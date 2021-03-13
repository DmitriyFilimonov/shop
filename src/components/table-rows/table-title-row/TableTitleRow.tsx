import '../TableRows.css'

function TableTitleRow() {
    return (
        <div className="table-row title">
            <span>#</span>
            <span>наименование</span>
            <span>кол-во</span>
            <span>цена за шт.</span>
        </div>
    )
}

export default TableTitleRow;