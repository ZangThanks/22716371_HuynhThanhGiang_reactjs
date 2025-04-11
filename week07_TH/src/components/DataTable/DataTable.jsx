import "./DataTable.css";
import edit from "../../assets/images/edit.png";
import report from "../../assets/images/report.png";
import imported from "../../assets/images/import.png";
import exported from "../../assets/images/export.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

function DataTable({ items, fetchData }) {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (item) => {
    setSelected(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelected(null);
  };

  return (
    <div className="table-container">
      <div className="table-title">
        <div className="title-detail">
          <img src={report}></img>
          <span>Detailed report</span>
        </div>
        <div className="button-group">
          <button className="button-bg">
            <img src={imported}></img>
          </button>
          <button className="button-bg">
            <img src={exported}></img>
          </button>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr className="align-left">
            <th>
              <input type="checkbox" style={{ marginRight: "20px" }} />
            </th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.orderValue}</td>
              <td>{item.orderDate}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button
                  className="white-bg"
                  onClick={() => handleEditClick(item)}
                >
                  <img src={edit}></img>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selected && (
        <Modal
          selected={selected}
          fetchData={fetchData}
          handleCloseModal={handleCloseModal}
        ></Modal>
      )}
    </div>
  );
}

export default DataTable;
