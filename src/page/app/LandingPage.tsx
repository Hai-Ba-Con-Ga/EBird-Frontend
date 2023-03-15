import React from "react";

import styled from "styled-components";
import LandingHeader from "../../components/common/header/LandingHeader";
import LandingFooter from "../../components/common/footer/LandingFooter";
import IntroSection from "../../components/landing/intro/IntroSection";
import RankSection from "../../components/landing/rank/RankSection";
import RuleSection from "../../components/landing/rule/RuleSection";
import ggOneTap from "google-one-tap";
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	scroll-behavior: smooth;
	scroll-snap-type: y proximity;
	overflow-y: scroll;
	/* scroll-padding: 50px 0 0 0; */
`;
const LandingPage = () => {
	const options = {
		client_id:
			"589640365693-7p2e9n7o5t55abl30itolav861h4c3kv.apps.googleusercontent.com", // required
		auto_select: false, // optional
		cancel_on_tap_outside: false, // optional
		context: "signin", // optional
		login_uri: "https://mistrium.azurewebsites.net",
		ux_mode: "popup",
	};
	const ggOneTap2 = ggOneTap as any;
	ggOneTap2(options, (response: any) => {
		// Send response to server
		console.log("SEND TO SV");

		console.log(response);
	});
	return (
		<Wrapper style={{ scrollSnapType: "y mandatory" }}>
			<LandingHeader></LandingHeader>
			<IntroSection />
			<RankSection />
			<RuleSection />
			<LandingFooter></LandingFooter>
		</Wrapper>
	);
};

export default LandingPage;
