import React, { useState, useEffect } from 'react';
import './Clock.scss';

const Clock = () => {
	const [now, setNow] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setNow(new Date());
		}, 1000);
	});
	return (
		<div className='clock'>
			<p>{now.toLocaleTimeString()}</p>
		</div>
	);
}

export default Clock;