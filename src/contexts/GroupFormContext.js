import React, { Component } from "react";
import { render } from "@testing-library/react";

const GroupFormContext = React.createContext({
  groupId: null,
  setGroupId: () => {}
});

export default GroupFormContext;

export class GroupFormProvider extends Component {
  setGroupId = groupId => {
    this.setState({ groupId });
    console.log(groupId);
  };

  state = {
    groupId: this.groupId,
    setGroupId: this.setGroupId
  };

  render() {
    return (
      <GroupFormContext.Provider value={this.state}>
        {this.props.children}
      </GroupFormContext.Provider>
    );
  }
}
