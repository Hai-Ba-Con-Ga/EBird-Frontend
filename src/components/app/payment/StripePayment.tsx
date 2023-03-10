import React, { useCallback, useMemo } from "react";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ButtonCommon } from "../../common/button/Button.style";
import { StripeCardElement } from "@stripe/stripe-js";
type Props = {
	clientSecret: string;
};

const StripePayment = ({ clientSecret }: Props) => {
	const pk_key = useMemo(
		() =>
			"pk_test_51MjOMSDIlCFDWwtMxMw7nXREWQqbNxvnzIN0wull4MIRN7STr4jgkpSWuxQNuVZDktfPy595CAgsaocskXaKeDmQ00Yyf8Ox2O",
		[]
	);

	const stripe = useStripe();
	const elements = useElements();
	const handleMakePayment = useCallback(async () => {
		console.log(clientSecret);

		if (stripe && elements) {
			const { paymentIntent, error } = await stripe.confirmCardPayment(
				clientSecret,
				{
					payment_method: {
						card: elements.getElement(CardElement) as StripeCardElement,
					},
				}
			);
			if (error) {
				console.log("PAYMENT ERROR: ", error);
			} else {
				console.log("PAYMENT SUCCESS", paymentIntent);
			}
		}
	}, [stripe, elements, clientSecret]);
	// const creditCardPayment = useCallback(async () => {}, [clientSecret]);
	return (
		<div style={{ width: "30rem", height: "40rem" }}>
			<CardElement />
			<ButtonCommon
				style={{
					backgroundColor: "var(--dark-blue)",
					color: "var(--color-coffee)",
				}}
				onClick={() => handleMakePayment()}
			>
				Make payment
			</ButtonCommon>
		</div>
	);
};

export default StripePayment;
