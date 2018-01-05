import React, { Component } from 'react';

class ViewPin extends Component {
  render() {
    return (
      <div className={`view-pin ${(this.props.show)?'show':''}`}>
        
      </div>
    )
  }
}

export default ViewPin;