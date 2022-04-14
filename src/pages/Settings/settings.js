import React, { useState } from "react";
import { Navbar } from "components/organisms/Navbar";
import { SubNavTab, TabTitle, PageContainer } from "./settings.styled";
import { Profile } from "./Profile/profile";
import { Kyc } from "./Kyc/Kyc";

const Settings = () => {
	const [activeTab, setActiveTab] = useState("tab1");
	const [activeTab1, setActiveTab1] = useState(true);
	const [activeTab2, setActiveTab2] = useState(false);

	const handleTab1 = () => {
		setActiveTab("tab1");
		setActiveTab1(true);
		setActiveTab2(false);
	};
	const handleTab2 = () => {
		setActiveTab("tab2");
		setActiveTab1(false);
		setActiveTab2(true);
	};
	return (
		<div>
			<Navbar>
				<SubNavTab>
					<TabTitle onClick={handleTab1} activeTab1={activeTab1}>
						Profile
					</TabTitle>
					<TabTitle onClick={handleTab2} activeTab2={activeTab2}>
						KYC
					</TabTitle>
				</SubNavTab>
			</Navbar>
			<PageContainer>{activeTab === "tab1" ? <Profile /> : <Kyc />}</PageContainer>
		</div>
	);
};

export default Settings;
