import { Button } from "@mui/material";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {
	IconBrandStripe,
	IconChevronLeft,
	IconBrandVisa,
} from "@tabler/icons-react";
import useAuth from "../../components/auth/useAuth";
import axiosClient from "../../api/axiosClient";
const plans = [
	{
		type: "1 Month",
		duration: 1,
		provillages: ["Blah blah", " OOKK OK KO adw adajn sq", "adaw", "adwdw"],
		price: 20000,
	},
	{
		type: "3 Month",
		duration: 3,
		provillages: ["Blah blah", " OOKK OK KO adw adajn sq", "adaw", "adwdw"],
		price: 50000,
	},
	{
		type: "1 Year",
		duration: 12,
		provillages: ["Blah blah", " OOKK OK KO adw adajn sq", "adaw", "adwdw"],
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
					<IconBrandStripe color="var(--dark-blue)" />
					<PaymentMethodItem onClick={handlerPayVnpay}>
						<IconBrandVisa />
					</PaymentMethodItem>
				</PaymentList>
			)}
		</PageWrapper>
	);
};
const PaymentMethodItem = styled.div`
	background-color: var(--dark-blue);
	padding: 1rem 3rem;
	color: var(--color-coffee);
	border-radius: var(--roundedSmall);
	cursor: pointer;
	margin: 1rem 0;
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
				<span key={i}>{temp}</span>
			))}
			<Button
				variant="contained"
				color="primary"
				style={{ fontSize: "var(--text-2xl)" }}
			>
				{plan?.price}
				{"vnd"}/{plan?.type}
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
