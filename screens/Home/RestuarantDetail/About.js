import {View, Text, Image} from "react-native";
import React from "react";
import RestaurantDetail from "./RestaurantDetail";

const {name, reviews, price, image, ratings, categories} = yelpRestaurant;
const formattedCategories = categories.map((cat) => cat.title.join('.') )
const description = `${formattedCategories} ${price ? '.'  + price :''} . 🎫 . ${rating} ⭐ (${reviews})`
const About = ({restaurantDetail}) => {
	return (
		<View
			style={{
				borderBottomWidth: 0.6,
				borderBottomColor: "gray",
				paddingBottom: 20,
			}}
		>
			<Image
				source={{
					uri: restaurantDetail?.image_url,
				}}
				style={{width: "100%", height: 180}}
			/>
			<Text
				style={{
					fontWeight: "600",
					fontSize: 29,
					marginHorizontal: 15,
					marginTop: 10,
				}}
			>
				{restaurantDetail.name}
			</Text>
			<Text
				style={{
					fontSize: 15.5,
					fontWeight: "400",
					marginHorizontal: 15,
					marginTop: 10,
				}}
			>
				American(New). BreakFast& Brunch . Wine Bars.{" "}
				{restaurantDetail.price} . 🎫 4 ({restaurantDetail.review_count}
				+)
			</Text>
		</View>
	);
};

export default About;
