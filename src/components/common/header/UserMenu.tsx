import { Chip } from "@mui/material";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../app/common/useClickOutside";
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
	const isVip = useMemo(
		() =>
			userInfomation?.vip &&
			new Date(userInfomation.vip.expiredDate).getTime() >= Date.now(),
		[userInfomation]
	);
	// const isVip = false;
	const userMenuRef = useRef();
	const outsideClickHandler = useCallback(() => {
		setActive(false);
	}, []);
	useClickOutside(userMenuRef, outsideClickHandler);
	return (
		<UserMenuWrapper ref={userMenuRef as any}>
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
					<UserFullname>{`${userInfomation?.firstName} ${userInfomation?.lastName}`}</UserFullname>
					<UserFunctionsList>
						<UserFunctionItem
							onClick={() => {
								nav("/app/profile");
								setActive(false);
							}}
						>
							Profile
						</UserFunctionItem>
						{!isVip && (
							<UserFunctionItem
								onClick={() => {
									nav("/app/plans");
									setActive(false);
								}}
							>
								Upgrade to pro
							</UserFunctionItem>
						)}
						<UserFunctionItem
							onClick={() =>
								openModal({
									payload: null,
									closable: true,
									component: <SettingsForm />,
								})
							}
						>
							Setting
						</UserFunctionItem>
						<UserFunctionItem onClick={() => nav("/")}>Logout</UserFunctionItem>
					</UserFunctionsList>
				</UserMenuDropdown>
			)}
		</UserMenuWrapper>
	);
};

export default UserMenu;
