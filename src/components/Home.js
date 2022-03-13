import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section
				title="Model s"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Order Online"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Order Online"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Order Online"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Order Online"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels In America"
				description="Money-Back Guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Solar For New Roof"
				description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Order now"
				rightBtnText="learn more"
			/>
			<Section
				title="Accessories"
				description=" "
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
				rightBtnText=""
			/>
		</Container>
	);
}

export default Home;
const Container = styled.div`
	height: 100vh;
`;
