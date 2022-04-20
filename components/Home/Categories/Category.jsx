import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";

const Category = ({item}) => {
	return (
		<View
			style={{
				// backgroundColor: "green",
				height: 70,
				width: 90,
				alignItems: "center",
			}}
		>
			<Image source={item.image} style={{width: 40, height: 40}} />
			<Text>{item.text}</Text>
		</View>
	);
};

export default Category;

const styles = StyleSheet.create({});
