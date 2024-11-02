import React, { useState, useRef } from 'react';
import axios from 'axios';

import "./AddTaskModal.css"

function AddTaskModal() {


    return (
        <div className="AddTaskModal modal fade addTaskModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add a task</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {/* Form fields */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddTaskModal;