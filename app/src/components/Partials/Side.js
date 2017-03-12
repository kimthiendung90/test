import React from 'react';

class Side extends React.Component {
  render() {
    return (
      <ul className="collection">
        <li className="collapsible-header">
          <i className="material-icons">whatshot</i>
          Xu hướng từ Facebook
        </li>
        <li className="collapsible-header">
          <i className="material-icons">place</i>
          Sắp xếp theo địa điểm
        </li>
        <li className="collapsible-header">
          <i className="material-icons">face</i>
          Dành riêng cho bạn
        </li>
      </ul>
    );
  }
}

export default Side;
