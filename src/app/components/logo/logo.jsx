import React from 'react';
import './logo.scss';

class Logo extends React.Component {

    render () {
        const styles = {
            textShadow: `${((~~((this.props.x / this.props.width) * 100) / 100) - 0.5) * -10}px ${((~~((this.props.y / this.props.height) * 100) / 100) - 0.5) * -10}px 5px #1F2124`
        }

        return <h1 className="logo" style={styles}>Ipatieff Serge</h1>
    }
}

export default Logo