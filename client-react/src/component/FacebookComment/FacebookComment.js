import React, { Component } from "react";
import { FacebookProvider, Comments } from "react-facebook";

export default class FacebookComment extends Component {
	
	render() {
		// console.log(this.props.id);

		return (
			<FacebookProvider appId="331882481767430">
				<Comments
					href={`https://localhost:3000/post/${this.props.id}`}
					width="100%"
				/>
			</FacebookProvider>
		);
	}
}
