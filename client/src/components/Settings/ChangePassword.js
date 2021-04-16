import React from "react";

const ChangePassword = () => (
    <div id="account-change-password">
        <div className="card-body pb-2">
            <div className="form-group">
                <label className="form-label">Current password</label>
                <input onChange={() => console.log('yo')} type="password" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="form-label">New password</label>
                <input onChange={() => console.log('yo')} type="password" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="form-label">Repeat new password</label>
                <input onChange={() => console.log('yo')} type="password" className="form-control"/>
            </div>
        </div>
    </div>
)

export default ChangePassword;