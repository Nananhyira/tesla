import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
	const [BurgerStatus, setBurgerStatus] = useState(false);

	return (
		<Container>
			<a>
				<img src="/images/logo.svg" />
			</a>
			<Menu>
				<a>Model s</a>

				<a>Model 3</a>

				<a>Model y</a>

				<a>Model x</a>
			</Menu>
			<RightMenu>
				<a href="#">Shop Noow</a>
				<a href="#">Tesla Account </a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>

			<BurgerNav show={BurgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-In </a>
				</li>
				<li>
					<a href="#">Cyber Truck</a>
				</li>
				<li>
					<a href="#">Roadater</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Test Drive</a>
				</li>
				<li>
					<a href="#">Utilities</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
				<li>
					<a href="#">Model s</a>
				</li>
			</BurgerNav>
		</Container>
	);
}

export default Header;
const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;
const Menu = styled.div`
	display: flex;
	align-items: space-between;
	flex: 1;
	justify-content: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;
const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;
const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;
const BurgerNav = styled.div`
	background-color: white;
	width: 300px;
	top: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	z-index: 16;
	padding: 40px;
	display: flex;
	text-align: start;
	flex-direction: column;
	list-style-type: none;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s ease-in-out;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 2);

		a {
			font-weight: 600;
		}
	}
`;
const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;
const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
