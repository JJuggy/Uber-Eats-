import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import React, {useEffect, useState} from "react";
import HeaderTab from "../components/Home/HeaderTab/HeaderTab";
import Categories from "../components/Home/Categories/Categories";
import {SearchBar} from "../components/Home/SearchField/SearchField";
import RestaurantItem from "../components/Home/RestaurantItem";
import {ScrollView} from "react-native-gesture-handler";

function HomeScreen() {
	const [restaurants, setRestaurants] = useState([]);
	const [activeTab, setActiveTab] = useState("Delivery");
	const [city, setCity] = useState("hollywood");
	const YELP_API_KEY =
		"Q-cdyd-GkkfegO-546BSOIAPh88ABCS-X1DzZQCh3y4f9ZpoDUr5t_Rv70MYxLsHJn0U93dYPfAm6PpnBoE_v729H2Qn3Z9X6LGDuf5Sczgk0Fsfb73_wi8IDAlPYnYx";
	const getRestaurantFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
		const apiOptions = {
			headers: {
				authorization: `Bearer ${YELP_API_KEY}`,
			},
		};
		return fetch(yelpUrl, apiOptions)
			.then(response => response.json())
			.then(json => {
				// console.warn(json.businesses)
				setRestaurants(
					json.businesses.filter(business =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				);
			});
	};
	useEffect(() => {
		getRestaurantFromYelp();
	}, [activeTab, city]);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: "white",
					padding: 15,
				}}
			>
				<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView>
				<Categories />
				<RestaurantItem restaurantsData={restaurants} />
			</ScrollView>
		</SafeAreaView>
	);
}

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e3e1e1",
	},
});
