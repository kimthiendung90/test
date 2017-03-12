import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPages } from './_Action';
import { Link } from 'react-router';

class PagesList extends Component {
  componentWillMount() {
    this.props.fetchPages();
  }

  renderItem(data, color) {

    if (data.length <= 0) {
      return (
        <p>No data</p>
      )
    }

    return data.map((page, key) => {
      const image = page.picture || "public/img/page-logo.png";

      return (
        <div className="col s12" key={key}>
          <div className="card horizontal">
            <div className="card-color" style={{ "backgroundColor": color[key] }}></div>
            <div className="card-image">
              <Link to={"page/" + page.pageName}>
                <img src={image} />
              </Link>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <Link to={"page/" + page.pageName}>
                  <h3 className="card-title">{page.pageName}</h3>
                </Link>
                <b>Crawled Feed: {page.feedCount}</b>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderWrap(body) {
    return (
      <div className="row">
        {body}
      </div>
    )
  }

  render() {
    const { pages } = this.props;

    if (pages) {
      var color = randomColor({ luminosity: 'light', count: pages.length });
      return this.renderWrap(this.renderItem(pages, color));
    }

    return this.renderWrap();
  }
}

function mapStateToProps(state) {
  return { pages: state.pages.all };
}

export default connect(mapStateToProps, { fetchPages })(PagesList);
