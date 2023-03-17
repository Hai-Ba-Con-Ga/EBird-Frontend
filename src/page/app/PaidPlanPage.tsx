import { Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {
	IconBrandStripe,
	IconChevronLeft,
	IconBrandVisa,
} from "@tabler/icons-react";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import useAuth from "../../components/auth/useAuth";
import axiosClient from "../../api/axiosClient";
import StripePayment from "../../components/app/payment/StripePayment";
import { PaymentIntent } from "@stripe/stripe-js";
const plans = [
	{
		type: "1 Month",
		duration: 1,
		provillages: [
			"No advertising",
			"Create a request with higher priority",
			"Chat in a room with special effects",
			"Join groups without Elo limitations",
			"Unlimited initialization of birds in the list",
		],
		price_format: "20.000",
		price: 20000,
	},
	{
		type: "3 Month",
		duration: 3,
		provillages: [
			"No advertising",
			"Create a request with higher priority",
			"Chat in a room with special effects",
			"Join groups without Elo limitations",
			"Unlimited initialization of birds in the list",
		],
		price_format: "50.000",
		price: 50000,
	},
	{
		type: "1 Year",
		duration: 12,
		provillages: [
			"No advertising",
			"Create a request with higher priority",
			"Chat in a room with special effects",
			"Join groups without Elo limitations",
			"Unlimited initialization of birds in the list",
		],
		price_format: "180.000",
		price: 180000,
	},
];
const steps = {
	choose: true,
	paymentMethod: false,
};
const PageFunc = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const PaidPlanPage = () => {
	const [choosenPlan, setPlan] = useState<any>();
	const [step, setStep] = useState<number>(1);
	const {
		auth: { userInfomation },
	} = useAuth();
	const [stripePaymentIntentSK, setIntentSK] = useState<string>();

	const handlerPayVnpay = useCallback(() => {
		console.log(choosenPlan);
		const paymentParams = {
			limitMonth: choosenPlan.duration,
			amount: choosenPlan.price,
			accountId: userInfomation?.id,
			createdDate: "2023-03-08T00:56:23.562Z",
		};
		const url = "/payment/create-payment";
		axiosClient
			.post(url, paymentParams)
			.then((res: any) => (window.location.href = res.data.data));
	}, [choosenPlan, userInfomation]);
	const handleStripCreateIntent = useCallback(async () => {
		const url = "/stripe/payment_intent";
		const pi = (await axiosClient.post(url)).data;
		console.log(pi);
		setIntentSK(pi.clientSecret);
	}, []);
	useEffect(() => {
		console.log("StripCreate");

		console.log(stripePaymentIntentSK);
	}, [stripePaymentIntentSK]);
	const stripePromise = loadStripe(
		// "sk_test_51MjOMSDIlCFDWwtMJJyh0nNTdevlH2GcAV3E9T7m9b8UZeuq5q2zOIr38gs1OTENNChcjA9Nc7O2c7T1CUxrXrIh00H52ywIlA"
		"pk_test_51MjOMSDIlCFDWwtMxMw7nXREWQqbNxvnzIN0wull4MIRN7STr4jgkpSWuxQNuVZDktfPy595CAgsaocskXaKeDmQ00Yyf8Ox2O"
	);
	return (
		<PageWrapper>
			<PageTitle>Account Upgrade Plans</PageTitle>
			<PageFunc>
				{step != 1 && (
					<IconChevronLeft
						onClick={() => setStep(step - 1)}
						style={{ cursor: "pointer" }}
						color={"var(--dark-blue)"}
					/>
				)}
			</PageFunc>
			{step == 1 && (
				<PlanList>
					{plans.map((plan, i) => (
						<PlanCard
							handleClick={() => {
								setPlan(plan);
								setStep(2);
							}}
							plan={plan}
							key={i}
						></PlanCard>
					))}
				</PlanList>
			)}
			{step == 2 && (
				<PaymentList>
					{/* <IconBrandStripe color="var(--dark-blue)" /> */}
					<PaymentMethodItem onClick={handlerPayVnpay}>
						{/* <IconBrandVisa /> */}
						<img
							src="https://www.ppro.com/wp-content/uploads/2021/06/VNPAYQR-logo.png"
							alt=""
						/>
					</PaymentMethodItem>
					<PaymentMethodItem onClick={handleStripCreateIntent}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png"
							alt=""
						/>
						{/* <IconBrandStripe /> */}
					</PaymentMethodItem>
				</PaymentList>
			)}
			<Elements
				stripe={stripePromise}
				options={{ clientSecret: stripePaymentIntentSK }}
			>
				{stripePaymentIntentSK && (
					<StripePayment clientSecret={stripePaymentIntentSK} />
				)}
			</Elements>
		</PageWrapper>
	);
};
const PaymentMethodItem = styled.div`
	/* background-color: var(--dark-blue); */
	padding: 1rem 3rem;
	color: var(--color-coffee);
	border: 2px solid var(--dark-blue);
	border-radius: var(--roundedSmall);
	cursor: pointer;
	margin: 1rem 0;
	width: 20rem;
	height: 7rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	display: grid;
	place-items: center;
`;
const PaymentList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
const PageTitle = styled.h1`
	font-size: var(--text-11xl);
	color: var(--dark-blue);
	font-weight: 600;
`;
const PlanList = styled.div`
	width: 100%;
	display: flex;
	gap: 3%;
	justify-content: center;
`;
export default PaidPlanPage;

const PlanCard = ({
	plan,
	handleClick,
}: {
	plan: any;
	handleClick: () => void;
}) => {
	return (
		<PlanCardWrapper onClick={() => handleClick()}>
			<h1>{plan?.type}</h1>
			{plan?.provillages?.map((temp: any, i: number) => (
				<span style={{ fontSize: "var(--text-3xl)" }} key={i}>
					{temp}
				</span>
			))}
			<Button
				variant="contained"
				color="primary"
				style={{ fontSize: "var(--text-2xl)" }}
			>
				{plan?.price_format}
				{"₫"}/{plan?.type}
			</Button>
		</PlanCardWrapper>
	);
};
const PlanCardWrapper = styled.div`
	width: 22%;
	aspect-ratio: 3/4;
	border-radius: var(--roundedMedium);
	border: 2px solid var(--dark-blue);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem 1.5rem;
	align-items: center;
	color: var(--dark-blue);
	h1 {
		font-size: var(--text-7xl);
		font-weight: 600;
	}
	span {
		font-size: var(--text-xl);
	}
`;
