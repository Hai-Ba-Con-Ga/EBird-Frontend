import React from "react";
import "./funnybutton.scss";

const FunnyLobbyButton = () => {
	return (
		<span className="button button--piyo">
			<div className="button__wrapper">
				<span className="button__text">Lobby</span>
			</div>
			<div className="characterBox">
				<div className="character wakeup">
					<div className="character__face"></div>
				</div>
				<div className="character wakeup">
					<div className="character__face"></div>
				</div>
				<div className="character">
					<div className="character__face"></div>
				</div>
			</div>
		</span>
		// <a href="#" className="button button--pen">
		// 	<div className="button__wrapper">
		// 		<span className="button__text">ENTRY</span>
		// 	</div>
		// 	<div className="characterBox">
		// 		<div className="character wakeup">
		// 			<div className="character__face"></div>
		// 			<div className="charactor__face2"></div>
		// 		</div>
		// 		<div className="character wakeup">
		// 			<div className="character__face"></div>
		// 			<div className="charactor__face2"></div>
		// 		</div>
		// 		<div className="character">
		// 			<div className="character__face"></div>
		// 			<div className="charactor__face2"></div>
		// 		</div>
		// 	</div>
		// </a>
	);
};

export default FunnyLobbyButton;
