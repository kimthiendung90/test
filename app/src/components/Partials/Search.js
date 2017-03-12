import React from 'react';

class Search extends React.Component {
  render() {
    return (
        <form id="search-form">
            <div className="input-field">
            <input id="search" type="search" placeholder="Xem Gì Đây ? Nhập từ khoá để Iris giúp bạn :)" />
            <label><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
        </form>
    );
  }
}

export default Search;
