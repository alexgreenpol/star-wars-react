import React from 'react';
import './error-indicator.css'

const ErrorIndicator = (props) => {
	return (
		<div className="error-indicator">
			<h3>BOOM!</h3>
			<p>something has gone terribly wrong</p>
			<p>(but we already sent droids to fix it)</p>
		</div>
	)
}

export default ErrorIndicator;