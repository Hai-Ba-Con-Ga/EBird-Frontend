import { useEffect, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "react-toastify/scss/main.scss";
import { useRecoilState } from "recoil";
import "./App.css";
import React from "react";
import AuthApi from "./components/auth/auth.api";
import authAtom from "./components/auth/AuthAtom";
import useLoading from "./components/useLoading";
import AuthPage from "./page/auth/AuthPage";
import LandingPage from "./page/app/LandingPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotForm from "./components/auth/ForgotForm";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import useModal from "./components/common/modal/useModal";
import CommonModal from "./components/common/modal/CommonModal";

import Table from "./components/app/table/Table";
import AdminLayout from "./components/layout/AdminLayout";
import { ThemeProvider } from "@mui/material";
import ThemeComponent from "./components/admin/@core/theme/ThemeComponent";
import themeConfig from "./components/admin/configs/themeConfig";
import themeOptions from "./components/admin/@core/theme/ThemeOptions";
import { Settings } from "./components/admin/@core/context/settingsContext";
import GroupDetail from "./page/app/GroupDetail";
import RankingPage from "./page/app/RankingPage";
import GroupDetailPage from "./page/app/GroupDetail";
import { ToastContainer } from "react-toastify";
const initialSettings: Settings = {
	themeColor: "primary",
	mode: themeConfig.mode,
	contentWidth: themeConfig.contentWidth,
};
const HomePage = lazy(() => import("./page/app/Homepage"));
const Lobby = lazy(() => import("./page/app/Lobby"));
const MatchTable = lazy(() => import("./components/app/table/Table"));
const MatchPage = lazy(() => import("./page/app/MatchPage"));
const GroupPage = lazy(() => import("./page/app/GroupPage"));
const Dashboard = lazy(() => import("./page/admin/Dashboard"));
const AccountPage = lazy(() => import("./page/admin/AccountPage"));
const RulePage = lazy(() => import("./page/app/RulePage"));
import ProfilePage from "./page/app/profile";
import ProfileBird from "./page/app/profile/ProfileBird";
import BirdPage from "./page/admin/BirdPage";
import RequestPage from "./page/admin/RequestPage";
import MatchAdminPage from "./page/admin/MatchAdminPage";
import RoomPage from "./page/admin/RoomPage";
import PaidPlanPage from "./page/app/PaidPlanPage";
import PaymentResultPage from "./components/app/others/PaymentResultPage";
function App() {
	// const { auth } = useAuth(true);
	const { isLoading, loadingType, Loader } = useLoading();
	const { isModalShown, modalType, ModalComponent } = useModal();
	const [auth, setAuth] = useRecoilState(authAtom);
	const { closeLoading } = useLoading();
	useEffect(() => {
		AuthApi.getMe()
			.then((response) =>
				setAuth({
					userInfomation: response.data,
					firstLoading: false,
					isAuthenticated: true,
				})
			)
			.catch((err) => {
				setAuth({
					userInfomation: null,
					firstLoading: false,
					isAuthenticated: false,
				});
			})
			.finally(() => closeLoading());
	}, []);
	return (
		<div className="App" style={{ position: "relative" }}>
			{/* {!auth.firstLoading && ( */}
			<Routes>
				<Route path="/">
					<Route path="" element={<LandingPage />}></Route>
					<Route
						path="login"
						element={
							<AuthPage banner="https://i.pinimg.com/originals/3d/07/ef/3d07ef4db7ce8de5d07d6afe031c908a.jpg">
								<LoginForm />
							</AuthPage>
						}
					></Route>
					<Route
						path="signup"
						element={
							<AuthPage banner="https://webneel.com/daily/sites/default/files/images/daily/07-2015/1-bird-painting-by-monica-lee.jpg">
								<RegisterForm />
							</AuthPage>
						}
					></Route>
					<Route
						path="forgot"
						element={
							<AuthPage banner="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80">
								<ForgotForm />
							</AuthPage>
						}
					></Route>
					<Route path="rule" element={<RulePage />}></Route>
				</Route>
				<Route
					path="/app"
					element={<ProtectedRoute isAuthenticated={auth.isAuthenticated} />}
				>
					<Route
						path=""
						element={
							<AppLayout>
								<HomePage />
							</AppLayout>
						}
					></Route>
					<Route
						path="profile"
						element={
							<AppLayout>
								<Outlet />
							</AppLayout>
						}
					>
						<Route path="" element={<ProfilePage />} />
						<Route path="birds" element={<ProfileBird />} />
						<Route path=":id" element={<ProfilePage />} />
						<Route path=":id/birds" element={<ProfileBird />} />
						{/* <Route path=""/> */}
					</Route>
					<Route
						path="group"
						element={
							<AppLayout>
								<Outlet />
							</AppLayout>
						}
					>
						<Route path="" element={<GroupPage />}></Route>
						<Route path=":id" element={<GroupDetailPage />}></Route>
					</Route>
					<Route
						path="ranking"
						element={
							<AppLayout>
								<RankingPage />
							</AppLayout>
						}
					></Route>
					<Route
						path="lobby"
						element={
							<AppLayout>
								<Outlet />
							</AppLayout>
						}
					>
						<Route path="" element={<Lobby />}></Route>
						<Route path="table/:id" element={<MatchTable />}></Route>
					</Route>
					<Route
						path="match"
						element={
							<AppLayout>
								<MatchPage />
							</AppLayout>
						}
					></Route>
					<Route
						path="plans"
						element={
							<AppLayout>
								<PaidPlanPage />
							</AppLayout>
						}
					></Route>
					<Route path="payment/result" element={<PaymentResultPage />}></Route>
				</Route>
				<Route
					path="/admin"
					element={
						<ThemeComponent settings={initialSettings}>
							<AdminLayout>
								<Outlet />
							</AdminLayout>
						</ThemeComponent>
					}
				>
					<Route path="" element={<Dashboard />} />
					<Route path="account" element={<AccountPage />} />
					<Route path="bird" element={<BirdPage />} />
					<Route path="request" element={<RequestPage />} />
					<Route path="match" element={<MatchAdminPage />} />
					<Route path="room" element={<RoomPage />} />
				</Route>
				<Route path="/*" element="Not found"></Route>
				{/* TODO : Not found component */}
			</Routes>
			{/* )} */}
			{isLoading && Loader}
			{isModalShown && modalType == "common" && <CommonModal />}
			<ToastContainer
				bodyStyle={{ zIndex: 1500 }}
				toastStyle={{ zIndex: 10000 }}
				autoClose={2500}
				pauseOnHover={false}
			/>
		</div>
	);
}

export default App;
