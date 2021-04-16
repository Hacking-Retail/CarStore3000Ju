import React, { useState } from "react";
import UserGeneral from "./Settings/UserGeneral";
import TinderPrefs from "./Settings/TinderPrefs";

const BoardUser = () => {

    const [content, setContent] = useState(UserGeneral);

    return (
        <div className="container light-style flex-grow-1 container-p-y" id={"settings"}>
          <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light">
                  <div className="col-md-3 pt-0">
                      <div className="list-group list-group-flush account-settings-links">
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => {setContent(UserGeneral)}}>General</li>
                          <li className="list-group-item list-group-item-action" data-toggle="list"
                             onClick={() => setContent(TinderPrefs)}>Matcher Preferences</li>
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