import React, { Component, Fragment } from 'react'

/** Images */
import { logo } from 'images'

export default class NotFound extends Component {
	render() {
		return (
			<Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							<code>Error 404 </code> Page not found
						</p>
					</header>
				</div>
			</Fragment>
		)
	}
}
