import { IconSelector } from "@tabler/icons-react";
import React, {
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";
import {
	OptionsList,
	SelectOption,
	SelectValue,
	SelectWrapper,
} from "./Select.style";

type Props = {
	placeholder?: string;
	width?: string;
	onSelectChange?: (value: string) => void;
	value?: string;
};

const Select: React.FC<PropsWithChildren<Props>> = ({
	placeholder,
	width,
	value,
	children,
}) => {
	const [active, setActive] = useState(false);
	return (
		<SelectWrapper
			className={`${active ? "select-active" : ""}`}
			width={width || "17rem"}
			onClick={(event) => {
				event.stopPropagation();
				setActive(!active);
			}}
		>
			<SelectValue>{value || placeholder}</SelectValue>
			<OptionsList>{children}</OptionsList>
			<IconSelector />
		</SelectWrapper>
	);
};

export default Select;
