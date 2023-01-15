import {View, Text, ScrollView} from "react-native";
import React from "react";
import {useRoute} from "@react-navigation/native";
import About from "./About";
import MenuItem from "./MenuItem";

const RestaurantDetail = () => {
	const route = useRoute();
	const {restaurantDetail} = route.params;
	return (
		<View>
			<About restaurantDetail={restaurantDetail} />
			<ScrollView style={{height: "100%"}}>
				<MenuItem />
			</ScrollView>
		</View>
	);
};

export default RestaurantDetail;
