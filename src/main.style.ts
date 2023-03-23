import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const CustomToast = styled(ToastContainer)`
	.toast-main {
		padding: 1.5rem 2rem;
		background-color: var(--color-coffee);
		border: 2px solid var(--dark-green);
		border-radius: var(--roundedSmall);
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--dark-blue);
		box-shadow: 2px 2px 10px -2px var(--dark-blue);
	}
	.Toastify__toast--success svg {
		fill: var(--toastify-color-progress-success);
	}
`;
