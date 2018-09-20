import React from 'react';
import Logo from './components/logo/logo';
import './style.scss';

class App extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = { 
			x: 412, 
			y: 258,
			width: 0,
			height: 0 
		};
	  }

	componentDidMount() {
		const rHeight = this.divElement.clientHeight;
		const rWidth = this.divElement.clientWidth;

		this.setState({ width: rWidth, height: rHeight });
	}

	_mouseMove(e) {
		this.setState({ x: e.screenX, y: e.screenY});
	}

	render() {
		const props = {
			x: this.state.x,
			y: this.state.y,
			width: this.state.width,
			height: this.state.height
		}

		return (
			<div 
				className="container" 
				onMouseMove={this._mouseMove.bind(this)} 
				ref={ (divElement) => this.divElement = divElement}>
				<a href="tel:+79139469608" className="mobile">+7 (913) 946 96 08</a>
					<Logo {...props}/>
				<ul  className="email">
					<li><a href="mailto:ipatieff@yandex.ru">ipatieff@yandex.ru</a></li>
					<li><a href="https://novosibirsk.hh.ru/resume_converter/Ipatieff%20Serge.pdf?hash=fa29ecf5ff037bd5ba0039ed1f79536e6c5248&type=pdf">Upload CV</a></li>
					<li><a href="https://github.com/ipatieff" target="_blank" rel="nofollow noopener">Repo</a></li>
				</ul>
			</div>
		);
	}
}

export default App
