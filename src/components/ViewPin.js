import React, { Component } from 'react';

class ViewPin extends Component {

  onCloseHandler() {
    this.props.onClick();
  }

  renderImage() {
    const {pinData} = this.props;
    if(pinData.image){
      return <div className="view-pin__card"><img className="view-pin__card--image" src={pinData.image.original.url} alt="pins"/></div>
    }else {
      return <div>Fetching...</div>
    }
  }

  render() {
    return (
      <div className={`view-pin ${(this.props.show)?'show':''}`} onClick={()=> this.onCloseHandler()}>
        {this.renderImage()}
      </div>
    )
  }
}

export default ViewPin;