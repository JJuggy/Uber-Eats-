import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

const foods = [
	{
		title: "thai foods",
		description: "this is the food for chinese",
		price: "$25",
		image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
	},
];
const MenuItem = ({}) => {
	return foods.map(food => {
		return (
			<View style={styles.menuItemsStyle}>
				<FoodInfo food={food} />
				<FoodImage food={food} />
			</View>
		);
	});
};
const FoodInfo = ({food}) => {
	return (
		<View style={{justifyContent: "space-evenly", width: 240}}>
			<Text style={styles.titleStyle}>{food.title}</Text>
			<Text>{food.description}</Text>
			<Text>{food.price}</Text>
		</View>
	);
};
const FoodImage = ({food}) => {
	return (
		<Image
			source={{uri: food.image}}
			style={{width: "30%", height: 100, borderRadius: 8}}
		/>
	);
};
const styles = StyleSheet.create({
	menuItemsStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
		marginRight: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},
});
export default MenuItem;
