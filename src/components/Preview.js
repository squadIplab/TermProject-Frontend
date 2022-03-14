import React from 'react';
import './Preview.css';

const Preview = ({ imageLink, type }) => {
	return (
		<div className="preview-root">
			<h1 className="preview-title">{type}</h1>
			{imageLink ? (
				<img className="preview-img" src={imageLink} alt="broken" />
			) : (
				<div className="blank-div">
					<span>No Images Here</span>
				</div>
			)}
		</div>
	);
};

export default Preview;
