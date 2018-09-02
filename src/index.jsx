import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello Sereja</h1>,
                <h1>test test lol</h1>
            </React.Fragment>
            );
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));