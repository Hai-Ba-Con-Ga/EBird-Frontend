import { Chip } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import SettingsForm from "../form/SettingsForm";
import useModal from "../modal/useModal";
import {
	UserFullname,
	UserFunctionItem,
	UserFunctionsList,
	UserMenuAvatar,
	UserMenuDropdown,
	UserMenuWrapper,
} from "./Header.style";

const UserMenu = () => {
	const { openModal } = useModal();
	const [active, setActive] = useState<boolean>(false);
	const nav = useNavigate();
	const {
		auth: { userInfomation },
	} = useAuth();
	//TODO VIP include
	// const isVip = useMemo(() => userInfomation?.role == 1, [userInfomation]);
	const isVip = false;
	return (
		<UserMenuWrapper>
			<Chip
				style={{
					position: "absolute",
					bottom: "0",
					left: "50%",
					transform: "translate(-50%,50%)",
					zIndex: "1",
					height: "fit-content",
					fontWeight: "600",
					padding: "0.5rem 0",
				}}
				label={isVip ? "VIP" : "Member"}
				color={isVip ? "warning" : "info"}
			/>
			<UserMenuAvatar onClick={() => setActive(!active)}>
				<img src="https://source.unsplash.com/random" alt="" />
			</UserMenuAvatar>
			{active && (
				<UserMenuDropdown>
					<UserFullname>Thanh Phong</UserFullname>
					<UserFunctionsList>
						<UserFunctionItem>Profile</UserFunctionItem>
						<UserFunctionItem onClick={() => nav("/app/plans")}>
							Upgrade to pro
						</UserFunctionItem>
						<UserFunctionItem
							onClick={() =>
								openModal({
									payload: null,
									closable: false,
									component: <SettingsForm />,
								})
							}
						>
							Setting
						</UserFunctionItem>
						<UserFunctionItem>Logout</UserFunctionItem>
					</UserFunctionsList>
				</UserMenuDropdown>
			)}
		</UserMenuWrapper>
	);
};

export default UserMenu;
