import React, { useState, useEffect } from "react";
import AccountConnections from "./Settings/AccountConnections";
import AccountInfo from "./Settings/AccountInfo";
import AccountNotifications from "./Settings/AccountNotifications";
import ChangePassword from "./Settings/ChangePassword";
import SocialLinks from "./Settings/SocialLinks";
import UserGeneral from "./Settings/UserGeneral";
// import UserService from "../services/user.service";

const BoardUser = () => {

    const [content, setContent] = useState(UserGeneral);

    // useEffect(() => {
    //   UserService.getUserSetting().then(
    //     (response) => {
    //       setContent(response.data);
    //     },
    //     (error) => {
    //       const _content =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();
    //
    //       setContent(_content);
    //     }
    //   );
    // }, []);

    return (
        <div className="container light-style flex-grow-1 container-p-y" id={"settings"}>
          <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light">
                  <div className="col-md-3 pt-0">
                      <div className="list-group list-group-flush account-settings-links">
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => {setContent(UserGeneral)}}>General</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => {setContent(ChangePassword)}}>Change password</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => setContent(AccountInfo)}>Info</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => setContent(SocialLinks)}>Social links</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => setContent(AccountConnections)}>Connections</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => setContent(AccountNotifications)}>Notifications</li>
                      </div>
                  </div>
                  <div className="col-md-9">
                      <div className="tab-content">
                          {content}
                      </div>
                  </div>
              </div>
          </div>

          <div className="text-right mt-3">
              <button type="button" className="btn btn-secondary">Save changes</button>
              &nbsp;
              <button type="button" className="btn btn-default">Cancel</button>
          </div>

        </div>
    );
};

export default BoardUser;