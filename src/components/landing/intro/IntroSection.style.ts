import styled from "styled-components";

export const IntroSectionWrapper = styled.section`
	width: 100%;
	height: 100vh;
	background-color: black;
	/* background: url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"); */
	background: url("https://ik.imagekit.io/flamefoxeswyvernp/image_aj59UPSmS.png?updatedAt=1679580369795");
	background-attachment: fixed;
	background-color: transparent;
	background-position: center;
	background-size: cover;
	display: flex;
	position: relative;
	padding: 1rem 3rem;
	padding-top: 10rem;
	align-items: center;
	scroll-snap-align: start;
`;

export const IntroBlock = styled.div`
	width: 50%;
	position: relative;
	z-index: 4;
	h1 {
		color: var(--white);
		text-transform: uppercase;
		font-size: var(--text-15xl);
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		color: #f5f5f5;
		text-transform: uppercase;
		/* text-align: center; */
	}
	h4 {
		color: var(--white);
		font-size: var(--text-5xl);
	}
	h2 {
		color: var(--white);
		font-size: var(--text-5xl);
	}
	button {
		font-size: var(--text-2xl);
		padding: 1.5rem 4rem;
		margin: 0;
	}
`;
