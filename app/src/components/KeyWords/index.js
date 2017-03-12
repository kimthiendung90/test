import React from 'react';

class KeyWords extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        var that = this;

        $('.chips-initial').material_chip({
            placeholder: 'Enter keywords',
            secondaryPlaceholder: 'Enter keywords',
            data: this.props.default || [],
        });

        if(that.props.triggerData){
            $('.chips-initial').on('chip.add', function(e, chip){
                that.props.triggerData($(this).material_chip('data'));
            });
            $('.chips-initial').on('chip.delete', function(e, chip){
                that.props.triggerData($(this).material_chip('data'));
            });
        }
    }

    render() {
        return (
            <div className="chips chips-initial" ></div>
        );
    }
}

export default KeyWords;
