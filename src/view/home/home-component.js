import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import style from './home.less'
import { Button } from 'antd-mobile';

@CSSModules(style, {handleNotFoundStyleName: 'ignore'})
class HomeComponent extends Component {
	constructor(props) {
        super(props)
    }
	componentDidMount() {
		this.props.initData()
	}
	render() {
		// const {} = this.props
		
		return (
			<div styleName="wrap">
				<p styleName="title">GT</p>
				<div styleName="login">
				<Button>Start</Button>
				</div>
			</div>
		)
	}
}

HomeComponent.propTypes = {
	initData: PropTypes.func,
	goListPage: PropTypes.func
}

export default HomeComponent