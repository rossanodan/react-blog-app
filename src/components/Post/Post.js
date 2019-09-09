import React from 'react';

import Button from '../Button/Button';

import './Post.scss';

const Post = props => {
	const { title, children } = props;
	if (!title || !children) return <p className='post'>Something went wrong loading this post.</p>;
	return (
		<div className='post'>
			<div className='header'>
				<h1>{title}</h1>
			</div>
			<div className='body'>
				<p>{children}</p>
			</div>
			<div className='footer'>
				<div className='button-group'>
					<Button>Like</Button>
					<Button>Comment</Button>
					<Button>Share</Button>
					<Button>Delete</Button>
				</div>
			</div>
		</div>
	);
}

export default Post;