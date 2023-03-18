import React from "react";

import styled from "styled-components";
const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2000;
`;
const Loader = styled.div`
	display: inline-flex;
	animation: loading2 1s infinite;

	div {
		width: 30px;
		height: 30px;
		border: 2px solid #fcb564;
		border-radius: 50%;
		margin: 0 5px;
	}

	@keyframes loading2 {
		50% {
			transform: rotate(200deg);
		}

		75% {
			transform: rotate(160deg);
		}

		100% {
			transform: rotate(180deg);
		}
	}
`;

const FullLoading = () => {
	return (
		<Wrapper>
			<Loader className="circle-loading2">
				<div></div>
				<div></div>
			</Loader>
		</Wrapper>
	);
};

export default FullLoading;
