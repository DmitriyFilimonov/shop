import { MouseEventHandler } from 'react';
import './ModalProofDelete.css';

interface ModalProofDeleteProps {
    modalVisibility: string;
    deleteHandler:()=>void;
    cancelDeleteHandler:()=>void;
}

function ModalProofDelete(props: ModalProofDeleteProps) {

    function deletePosition(){
        props.deleteHandler();
    }
    function cancel(){
        props.cancelDeleteHandler();
    }
    const stopPropagation:MouseEventHandler = (e) =>{
        e.stopPropagation();
    }
    return (
        <div className={"modal-bg " + (props.modalVisibility)} onClick={cancel}>
            <div className={"modal-window " + (props.modalVisibility)} onClick={stopPropagation}>
                Вы действительно хотите отказаться от этого товара?
                <div className="modal-window-footer">
                    <button className="modal-btn proof-btn" onClick={deletePosition}>Да</button>
                    <button className="modal-btn cancel-btn" onClick={cancel}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default ModalProofDelete;