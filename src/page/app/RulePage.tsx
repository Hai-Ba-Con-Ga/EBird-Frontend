import React from "react";

import styled from "styled-components";
import LandingHeader from "../../components/common/header/LandingHeader";
import LandingFooter from "../../components/common/footer/LandingFooter";
import IntroSection from "../../components/landing/intro/IntroSection";
import RankSection from "../../components/landing/rank/RankSection";
import RuleSection from "../../components/landing/rule/RuleSection";
import ggOneTap from "google-one-tap";

const LandingPage = () => {
	const options = {
		client_id:
			"589640365693-7p2e9n7o5t55abl30itolav861h4c3kv.apps.googleusercontent.com", // required
		auto_select: false, // optional
		cancel_on_tap_outside: false, // optional
		context: "signin", // optional
	};
	const ggOneTap2 = ggOneTap as any;
	ggOneTap2(options, (response: any) => {
		// Send response to server
		console.log("SEND TO SV");

		console.log(response);
	});
	return (
		<Wrapper>
			<LandingHeader/>
			<HinhAnh/>


			<Text>

			    <TextArea>
					<br />
					<h1>RULE PAGE</h1>
					
					<h2>ELO SCORING RULES</h2>
					<h3>Notation</h3>
					<p><strong>K:</strong> hệ số điểm - có sự thay đổi nếu có sự kiện đặc biệt hoặc giao lưu giữa các hội nhóm. </p>
					<p><strong>Ra:</strong> Điểm Elo của người chơi A</p>
					<p><strong>Sa:</strong> Kết quả trận đấu của người chơi A, (miền giá trị là 0 nếu A thua, 1 nếu A thắng) </p>
					<p><strong>Ea:</strong> Tỉ lệ thắng của người chơi A</p>
					<p><strong>V:</strong> Hệ số VIP </p>
					<p><strong>Kg = </strong>Hệ số K trong Group = 64 </p>
					<p><strong>Kr = </strong>Hệ số K trong Group = 128 </p>



					
					<h3>Công thức tính tỉ lệ thắng</h3>
					
						<img style={{ 
						border: '3px solid black',
						padding: '10px',
						borderRadius: '10px',marginBottom: '40px',marginTop: '20px'
						}}
						src="https://latex.codecogs.com/svg.image?\inline&space;\tiny&space;Ea&space;=&space;\frac{1}{1&plus;10\times&space;(\frac{(Rb&space;-&space;Ra)}{400})}">

					</img>
					<img style={{ 
						border: '3px solid black',
						padding: '10px',
						borderRadius: '10px',marginBottom: '40px'
						}}
						src="https://latex.codecogs.com/svg.image?\inline&space;\tiny&space;Eb&space;=&space;\frac{1}{1&plus;10\times&space;(\frac{(Ra&space;-&space;Rb)}{400})}">

					</img>
					
					<h3>Cách thức cập nhật điểm Elo</h3>
					
					<p><strong>R'a:</strong> Điểm Elo sau khi cập nhật của người chơi A</p>
					<p><strong>Hệ số Vip</strong> đối với người thường có V = 1</p>
					<p><strong>Hệ số Vip</strong> đối với VIP member có V = 1.5</p>
						
					<img style={{ 
						border: '3px solid black',
						padding: '10px',
						borderRadius: '10px',marginTop: '20px',marginBottom: '40px'
						}}
						src="https://latex.codecogs.com/svg.image?R'a&space;=&space;Ra\;&plus;&space;K\times&space;(Sa-Ea)\times&space;V">

					</img>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					<img 
					style={{ border: '3px solid black', borderRadius: '10px',marginBottom: '40px' }} 
					src="https://i.imgur.com/0rlS2Bh.png" ></img>
				</TextArea>
				<TextArea>
					<hr />
					<h2>PAYMENT AND VIP BENEFITS</h2>
					<p><em>
					Register for a paid membership to become a VIP member with exclusive services on this website, governed by the following terms and agreements
					</em></p>
					{/* <hr /> */}
					<h3>Đặc quyền</h3>
					<ul>
						<li>Có Huy hiệu VIP</li>
						<li>Không quảng cáo</li>
						<li>Tạo Request với độ ưu tiên cao hơn</li>
						<li>Chat trong Room có hiệu ứng đặc biệt.</li>
						<li>Tham gia các Group mà không bị giới hạn Elo</li>
						<li>Khởi tạo không giới hạn Chim trong danh sách.</li>
						<li>Cộng thêm elo khi thắng</li>
						<li>Tạo bird được tặng thêm 100 elo</li>
					</ul>
					<img 
					style={{ border: '3px solid black', borderRadius: '10px',marginBottom: '40px' }} 
					src="https://i.imgur.com/A6CRcWz.png" ></img>
					
					<h3>Payment</h3>
					<p>Thanh toán cho đăng ký có thể được thực hiện qua Momo, ZaloPay. Tất cả các đăng ký được xử lý bằng Việt Nam Đồng. </p>
					<div style={{textAlign:'center'}} >

						<img 
							style={{width:'200px',marginBottom: '40px' }}
							src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png">
						</img>
						<img 
							style={{width:'195px',marginBottom: '40px' }}
							src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png">
						</img>
					</div>
					{/* <hr /> */}
					<h3>Refund</h3>
					<p>If you have any dissatisfaction, please submit a complaint form, and we will compensate in case of system errors </p>
					<p>No refunds will be issued for registered users who are banned from accessing the website due to violation of the Terms and Conditions of website usage (such as abuse, fraud, etc.).</p>
					<img 
							style={{borderRadius:'10px',marginBottom: '40px',marginTop: '40px' }}
							src="https://i.imgur.com/UTcbNxn.png">
					</img>
					
				</TextArea>



			</Text>

			<LandingFooter/>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	scroll-behavior: smooth;
	scroll-snap-type: y proximity;
	overflow-y: scroll;
`;

const Text = styled.div`
	width: 100%;
	background-color: #f7f5f2;
	/* background-color: red; */
	/* display: flex; */
	align-items: center;
	justify-content: space-between;
	
	h1{
		padding: 4rem;
		text-align: center;
		font-size: 200px;
		color: var(--black);
		/* margin: 0; */
		border: solid black 3px;
		margin: 40px
	}
`;
const TextArea = styled.div`
	/* width: 50%; */
	max-width:800px;
	margin-left: auto;
	margin-right: auto;

	
	h2{
		text-align: center;
		font-size:50px;
		color: orange;
		margin: 20px;
	}
	h3{
		background-color: black;
		border-radius: 10px;
		padding: 2rem;
		text-align: center;
		font-size: 40px;
		color: var(--black);
		margin-bottom: px;
		margin-top: 40px;
		color: white;
	}
	p{
		
		font-size: 25px;
		margin:10px;
	}
	hr{
		height: 4px;
		border: none;
		background-color: black;
		margin-top: 20px;
	}
	
	li{
		font-size: 25px;
		list-style: none;
		padding-left: 50px;
		padding-bottom: 20px;
		position: relative;
		&:before{
			content: "";
			position: absolute;
			/* top:2px; */
			left: 5px;
			display: inline-block;
			height: 27px;
			width: 30px;
			background-size: contain;
			background-repeat: none;
			background-image: url(https://static.vecteezy.com/system/resources/thumbnails/001/203/701/small/bird.png);
		}
	}
	

	
	
	/* scroll-padding: 50px 0 0 0; */
`;


export const HinhAnh = styled.div`
	width: 100%;
	height: 70%;
	background: url("https://i.imgur.com/icBspbi.png");
	background-color: transparent;
	background-position: center;
	background-size: cover;
	display: flex;
`;

export default LandingPage;
