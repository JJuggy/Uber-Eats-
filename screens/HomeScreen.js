import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import React from "react";
import HeaderTab from "../components/Home/HeaderTab/HeaderTab";
import Categories from "../components/Home/Categories/Categories";
import { SearchBar } from '../components/Home/SearchField/SearchField';

function HomeScreen() {
	return (
		
			<SafeAreaView style={styles.container}>
				<View
					style={{
						backgroundColor: "white",
						padding: 15,
					}}
				>
					<HeaderTab />
					<SearchBar />
				</View>
				<Categories />
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
