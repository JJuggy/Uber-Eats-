import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Heart} from "phosphor-react-native";
const RestaurantItem = ({restaurantsData}) => {
	return (
		restaurantsData.length != 0 &&
		restaurantsData.map(restaurant => {
			return <TouchableOpacity
				style={{
					padding: 15,
					marginTop: 10,
					backgroundColor: "white",
					borderRadius: 12,
					marginHorizontal: 12,
				}}
			>
				<RestaurantImage image={restaurant.image_url} />
				<RestaurantInfo
					name={restaurant.name}
					rating={restaurant.rating}
				/>
			</TouchableOpacity>;
		})
	);
};
const RestaurantInfo = ({name, rating}) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginTop: 10,
			}}
		>
			<View>
				<Text style={{fontWeight: "bold", fontSize: 15}}>{name}</Text>
				<Text style={{fontSize: 13, color: "gray"}}>30-40 min</Text>
			</View>
			<View
				style={{
					alignItems: "center",
					borderRadius: 15,
					height: 30,
					width: 30,
					borderRadius: 15,
					backgroundColor: "#eee",
					alignitems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={{fontWeight: "500"}}>{rating}</Text>
			</View>
		</View>
	);
};
const RestaurantImage = ({image}) => {
	return (
		<View>
			<Image
				source={{
					uri: image,
				}}
				style={{width: "100%", height: 180}}
			/>
			<TouchableOpacity
				style={{position: "absolute", right: 20, top: -160}}
			>
				<Heart size={25} weight="bold" color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default RestaurantItem;

const styles = StyleSheet.create({});
