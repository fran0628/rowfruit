import React from "react";
import {
	TwitterShareButton,
	TwitterIcon,
	FacebookShareButton,
	FacebookIcon,
	LineShareButton,
	LineIcon,
} from "react-share";

const ShareButtons = (props) => {
	const {id,title}=props
	return (
		<>
			<FacebookShareButton
				url={`https://127.0.0.1:3000/post/${id}`}
				title={title}
				className="share-btn"
			>
				<FacebookIcon size={40} round={true} />
			</FacebookShareButton>
			<TwitterShareButton
				url={`https://127.0.0.1:3000/post/${id}`}
				title={title}
				className="share-btn"
			>
				<TwitterIcon size={40} round={true} />
			</TwitterShareButton>
			<LineShareButton
				url={`https://127.0.0.1:3000/post/${id}`}
				title={title}
				className="share-btn"
			>
				<LineIcon size={40} round={true} />
			</LineShareButton>
		</>
	);
};
export default ShareButtons;
