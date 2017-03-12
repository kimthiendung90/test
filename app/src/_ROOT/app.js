import React from 'react';
import Header from '../components/Partials/Header';

class App extends React.Component {
    constructor(props){
        super(props);
        // Hàm này Thực hiện việc thiết lập state cho component
        // Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này
    }
    
    render() {
        return (
            <div id="wrapper">
                <Header />
                
                <div id="main" class="container-fluid">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default App;
