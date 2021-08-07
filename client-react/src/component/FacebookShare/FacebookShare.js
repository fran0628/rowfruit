import React, { Component } from "react";
import { FacebookProvider, Share } from "react-facebook";

export default class FacebookShare extends Component {
	render() {
		return (
			<FacebookProvider appId="331882481767430">
				<Share href={`https://127.0.0.1:3000/post/${this.props.id}`}>
					{({ handleClick, loading }) => (
						<button type="button" disabled={loading} onClick={handleClick}>
							分享至Facebook
						</button>
					)}
				</Share>
			</FacebookProvider>
		);
	}
}
