import './Modal.css';

function Modal({selected, handleCloseModal}) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h3>Chi tiết đơn hàng</h3>
                <p><strong>Customer name: </strong>{selected.name}</p>
                <p><strong>Company: </strong>{selected.company}</p>
                <p><strong>Order Value: </strong>{selected.orderValue}</p>
                <p><strong>Order Date: </strong>{selected.orderDate}</p>
                <p><strong>Status: </strong>{selected.status}</p>
                <div className='modal-button-group'>
                    <button>Lưu</button>
                    <button onClick={handleCloseModal}>Đóng</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;