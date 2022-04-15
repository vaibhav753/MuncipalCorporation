import React, { useState } from 'react'
import './Modal.css'

function Modal(props) {
    // const [page, setPage] = useState(false);

    const closePopUpHandler = () => {
        console.log(props)
        window.location.reload();
        // props.pageRefresh(true);
        // props.closePopUp(false);

    }

    return (
        // <div>
        //     <button onClick={closePopUpHandler}>X</button>
        //     <h3>Hello{props.complaintId}</h3>
        // </div>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={closePopUpHandler}>
                        X
                    </button>
                </div>
                <div className="title">
                    <h2>Your Complaint is registered with Token Id : {props.complaintId}</h2>
                </div>
                {/* <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div> */}
                <div className="footer">
                    <button
                        onClick={closePopUpHandler}
                        id="okBtn"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Modal
