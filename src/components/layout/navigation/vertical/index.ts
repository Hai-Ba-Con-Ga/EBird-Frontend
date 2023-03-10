// ** Icon imports
import Login from "mdi-material-ui/Login";
import Table from "mdi-material-ui/Table";
import CubeOutline from "mdi-material-ui/CubeOutline";
import HomeOutline from "mdi-material-ui/HomeOutline";
import FormatLetterCase from "mdi-material-ui/FormatLetterCase";
import AccountCogOutline from "mdi-material-ui/AccountCogOutline";
import CreditCardOutline from "mdi-material-ui/CreditCardOutline";
import AccountPlusOutline from "mdi-material-ui/AccountPlusOutline";
import AlertCircleOutline from "mdi-material-ui/AlertCircleOutline";
import GoogleCirclesExtended from "mdi-material-ui/GoogleCirclesExtended";
import Account from "mdi-material-ui/Account";
import Bird from "mdi-material-ui/Bird";
// import Profile from 'mdi-material-ui/profile'
import { IconClipboardList } from "@tabler/icons-react";
// import { IconBrandTwitter as Bird } from '@tabler/icons-react'

// ** Type import
import { VerticalNavItemsType } from "../../../admin/@core/layouts/types";

const navigation = (): any => {
	return [
		{
			title: "Dashboard",
			icon: HomeOutline,
			path: "/admin",
		},
		{
			title: "Account Management",
			icon: Account,
			path: "/admin/account",
		},
		{
			title: "Bird Management",
			icon: Bird,
			path: "/admin/bird",
		},
		{
			title: "Request Management",
			icon: IconClipboardList,
			path: "/admin/request",
		},
		{
			title: "Match Management",
			icon: IconClipboardList,
			path: "/admin/match",
		},
		{
			title: "Room Management",
			icon: IconClipboardList,
			path: "/admin/room",
		},
		{
			title: "Payment Management",
			icon: IconClipboardList,
			path: "/admin/payment",
		},
		{
			title: "Account Settings",
			icon: AccountCogOutline,
			path: "/admin/account-settings",
		},
		{
			sectionTitle: "Pages",
		},
		{
			title: "Login",
			icon: Login,
			path: "/pages/login",
			openInNewTab: true,
		},
		{
			title: "Register",
			icon: AccountPlusOutline,
			path: "/pages/register",
			openInNewTab: true,
		},
		{
			title: "Error",
			icon: AlertCircleOutline,
			path: "/pages/error",
			openInNewTab: true,
		},
		{
			sectionTitle: "User Interface",
		},
		{
			title: "Typography",
			icon: FormatLetterCase,
			path: "/typography",
		},
		{
			title: "Icons",
			path: "/icons",
			icon: GoogleCirclesExtended,
		},
		{
			title: "Cards",
			icon: CreditCardOutline,
			path: "/cards",
		},
		{
			title: "Tables",
			icon: Table,
			path: "/tables",
		},
		{
			icon: CubeOutline,
			title: "Form Layouts",
			path: "/form-layouts",
		},
	];
};

export default navigation;
