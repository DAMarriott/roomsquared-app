import React, { Component } from "react";
import GroupIdInput from "./GroupIdInput.js";
import GroupFormContext from "../contexts/GroupFormContext.js";

export default class GroupForm extends React.Component {
  static contextType = GroupFormContext;

  constructor(props) {
    super(props);
    this.state = {
      groupStatus: true
    };
  }

  handleOptionChange = function(changeEvent) {
    this.setState({
      groupStatus: changeEvent.target.value === "true"
    });
  };

  render() {
    const { groupStatus } = this.state;
    return (
      <GroupFormContext.Consumer>
        {({ groupId, setGroupId }) => (
          <div className="form-group">
            <label htmlFor="groupId">Do you have a Room ID?</label>
            <input
              type="radio"
              className="registration__control"
              name="groupId"
              value="true"
              checked={groupStatus}
              onChange={e => this.handleOptionChange(e)}
            ></input>
            <input
              type="radio"
              className="registration__control"
              name="groupId"
              value="false"
              checked={!groupStatus}
              onChange={e => this.handleOptionChange(e)}
            ></input>

            <GroupIdInput
              groupId={groupId}
              onIdChange={id => setGroupId(id)}
              groupStatus={this.state.groupStatus}
            />
          </div>
        )}
      </GroupFormContext.Consumer>
    );
  }
}
