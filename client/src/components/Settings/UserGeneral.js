import React from "react";

const UserGeneral = () => (
    <div id="account-general">
        <div className="card-body media align-items-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                 className="d-block ui-w-80" />
            <div className="media-body ml-4">
                <label className="btn btn-outline-secondary">
                    Upload new photo
                    <input onChange={() => console.log('yo')} type="file" className="account-settings-fileinput" />
                </label> &nbsp;
                <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of
                    800K
                </div>
            </div>
        </div>
        <hr className="border-light m-0"/>

        <div className="card-body">
            <div className="form-group">
                <label className="form-label">Username</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control mb-1" value="nmaxwell"/>
            </div>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control" value="Nelle Maxwell"/>
            </div>
            <div className="form-group">
                <label className="form-label">E-mail</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control mb-1" value="nmaxwell@mail.com"/>
                <div className="alert alert-warning mt-3">
                    Your email is not confirmed. Please check your inbox.<br/>
                    <a href="#">Resend confirmation</a>
                </div>
            </div>
            <div className="form-group">
                <label className="form-label">Company</label>
                <input onChange={() => console.log('yo')} type="text" className="form-control" value="Company Ltd."/>
            </div>
        </div>
    </div>
)

export default UserGeneral;