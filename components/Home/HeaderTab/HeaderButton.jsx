import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";

const HeaderButton = ({text, setActiveTab, activeTab}) => {
	return (
		<TouchableOpacity
			onPress={() => setActiveTab(text)}
			style={[
				styles.container,
				{backgroundColor: activeTab === text ? "black" : "white"},
			]}
		>
			<Text
				style={[
					styles.buttonText,
					{color: activeTab === text ? "white" : "black"},
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		borderRadius: 25,
		width: 100,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		margin: 4,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
	},
});
export default HeaderButton;
