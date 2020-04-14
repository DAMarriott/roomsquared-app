import React from "react";



export default class GroupIdInput extends React.Component {
  handleInputChange = function (e) {
    const { onIdChange = () => {} } = this.props;
    const groupIdInt = parseInt(e.target.value);
    onIdChange(groupIdInt);
  };


  componentDidMount() {
    const { onIdChange = () => {} } = this.props;
    onIdChange(Math.floor(100000 + Math.random() * 900000));
  }


  render() {
    const { groupStatus, groupId } = this.props;
    const renderGroupId = () => {
      if (groupStatus) {
        return <input onChange={(e) => this.handleInputChange(e)}></input>;
      } else {
        return (
          <p>Your Room ID is {groupId}. Please share it with your roommates.</p>
        );
      }
    };

    return <div>{renderGroupId()}</div>;
  }
}
