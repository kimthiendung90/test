import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { fetchPage, searchKeyword } from './_Action';
import { Link } from 'react-router';
import KeyWords from '../KeyWords/index';

class PagesDetail extends Component {

    constructor() {
        super();
        this.getDataKeyWords = this.getDataKeyWords.bind(this);
    }

    componentWillMount() {
        this.props.fetchPage(this.props.params.id);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.page !== this.props.page){
    //         var that = this;
    //         var $this = $(ReactDOM.findDOMNode(this));
    //         setTimeout(function(){
    //             $this.find("#dynamic").dylay({
    //                 easing: 'easeInOutExpo',
    //                 speed: 1000,
    //                 selector: '>*'
    //             });
    //         }, 50)
            
    //     }
        
    // }

    getDataKeyWords(value){
        if (value.length > 0) {
            this.props.searchKeyword(this.props.params.id, value);
        }
        else{
            this.props.fetchPage(this.props.params.id);
        }
    }

    renderItem(data, color) {
        if(data.length <= 0){
            return (
                <p>No data</p>
            )
        }

        return data.map((page, key) => {
            const image = page.picture || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
            return (
                <div className="card-col col s12 m6 l3" key={key}>
                    <div className="card card-fix">
                        <div className="card-color" style={{ "backgroundColor": color[key]}}></div>
                        <a className="image-fix" href={page.link} target="_blank" style={{ "backgroundImage": `url(${image})` }} />
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{page.name}</span>
                            <p className="text-overflow">{page.message}</p>
                            <br/>
                            <p title="updated Time" className="green-text"><i className="ti-time"></i> {page.updatedTime}</p>
                            <p title="Like" className="red-text text-darken-1"><i className="ti-heart"></i> {page.likeCount}</p>
                            <p title="Share" className="blue-text"><i className="ti-share"></i> {page.shareCount}</p>
                        </div>
                        <div className="card-action">
                            <a href={page.link} target="_blank">Details</a>
                            <a href={page.permalinkUrl} target="_blank">Facebook URL</a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderWrap(body){
        return (
            <div className="row">
                <h4 className="center"> Hot feeds page {this.props.params.id} </h4>
                <div className="col s12">
                    <KeyWords triggerData={this.getDataKeyWords} />
                </div>
                <div id="dynamic">
                    {body}
                </div>
            </div>
        )
    }

    render() {
        const { page, search } = this.props;

        if(search && search != null){
            var color = randomColor({luminosity: 'light', count: search.length});
            return this.renderWrap(this.renderItem(search, color));
        }

        if (page) {
            var color = randomColor({luminosity: 'light', count: page.length});
            return this.renderWrap(this.renderItem(page, color));
        }

        return this.renderWrap();
        
    }
}

function mapStateToProps(state) {
    return { page: state.pages.item , search: state.pages.search };
}

export default connect(mapStateToProps, { fetchPage, searchKeyword })(PagesDetail);
