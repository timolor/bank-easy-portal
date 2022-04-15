import React from "react";
import { PagePadding } from "util/cssScaffolds/pagePadding";
import Box from "ui-box";
import { BusinessInfoForm, RadioGroup, Tips, InfoText } from "./businessInfo.styled";
import { Input } from "components/atoms/input";
import { Radio, Spacer } from "@nextui-org/react";
import { Button } from "components/atoms/button";
import Bag from "assets/images/bag.svg";
import { Icon } from "components/atoms/icon";

export const BusinessInfo = () => {
	const [selected, setSelected] = React.useState("SME/Sole proprietorship");
	return (
		<PagePadding>
			<Box display="flex">
				<BusinessInfoForm>
					<form>
						<Input placeholder="Name of organization" type="text" />
						<RadioGroup>
							<h1>Type of organization</h1>
							<Radio
								color="warning"
								checked={selected === "SME/Sole proprietorship"}
								onChange={() => setSelected("SME/Sole proprietorship")}
								size="lg">
								SME/Sole proprietorship
							</Radio>
							<Spacer />
							<Radio
								color="warning"
								checked={selected === "Corporate entity"}
								onChange={() => setSelected("Corporate entity")}
								size="lg">
								Corporate entity
							</Radio>
							<Spacer />
							<Radio
								color="warning"
								checked={selected === "Public institution"}
								onChange={() => setSelected("Public institution")}
								size="lg">
								Public institution
							</Radio>
							<Spacer />
							<Radio
								color="warning"
								checked={selected === "NGOs"}
								onChange={() => setSelected("NGOs")}
								size="lg">
								NGOs
							</Radio>
						</RadioGroup>
						<Input placeholder="Corporate address" type="text" />
						<Input placeholder="Website" type="text" />
						<Input placeholder="Email" type="text" />
						<Box marginTop="1rem">
							<Button fullWidth>Update</Button>
						</Box>
					</form>
				</BusinessInfoForm>
				<Tips>
					<img src={Bag} alt="bag" />
					<Box display="flex" alignItems="center">
						<Icon icon="info" fill="#C5C5C5" viewBox="0 0 20 20" size={25} />
						<InfoText>Insert useful tips for ‘Business Information’ here</InfoText>
					</Box>
				</Tips>
			</Box>
		</PagePadding>
	);
};
