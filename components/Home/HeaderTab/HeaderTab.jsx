import React from "react";
import {Text, View} from "react-native";
import {HEADER_TAB_STYLES} from "./headerTabStyles";
import HeaderButton from "./HeaderButton";

function HeaderTab({setActiveTab,activeTab}) {
	return (
		<View style={HEADER_TAB_STYLES.container}>
			<HeaderButton text="Delivery" setActiveTab={setActiveTab} activeTab ={activeTab} />
			<HeaderButton text="PickUp"  setActiveTab={setActiveTab} activeTab ={activeTab}/>
		</View>
	);
}

export default HeaderTab;
