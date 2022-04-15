import React, { useState } from "react";
import { Navbar } from "components/organisms/Navbar";
import { SubNavTab, TabTitle, PageContainer } from "./settings.styled";
import { Profile } from "./Profile/profile";
import { Kyc } from "./Kyc/Kyc";

const Settings = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	const [tabStates, setTabStates] = useState({ activeTab1: true, activeTab2: false });

	const handleTab1 = () => {
		setActiveTab("tab1");
		setTabStates({ ...tabStates, activeTab1: true, activeTab2: false });
	};
	const handleTab2 = () => {
		setActiveTab("tab2");
		setTabStates({ ...tabStates, activeTab1: false, activeTab2: true });
	};
	return (
		<div>
			<Navbar>
				<SubNavTab>
					<TabTitle onClick={handleTab1} activeTab1={tabStates.activeTab1}>
						Profile
					</TabTitle>
					<TabTitle onClick={handleTab2} activeTab2={tabStates.activeTab2}>
						KYC
					</TabTitle>
				</SubNavTab>
			</Navbar>
			<PageContainer>{activeTab === "tab1" ? <Profile /> : <Kyc />}</PageContainer>
		</div>
	);
};

export default Settings;
