import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import BrowseScreen from "./screens/BrowseScreen";
import GroceryScreen from "./screens/GroceryScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AccountScreen from "./screens/AccountScreen";
import RestaurantDetail from "./screens/Home/RestuarantDetail/RestaurantDetail";
import HomeScreen from "./screens/Home/HomeScreen";

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeScreenStack = () => {
	return (
		<HomeStack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<HomeStack.Screen name="HomeScreen" component={HomeScreen} />
			<HomeStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetail}
			/>
		</HomeStack.Navigator>
	);
};
const RootNavigator = () => {
	return (
		<BottomTab.Navigator
			initialRouteName={HomeScreen}
			screenOptions={({route}) => ({
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "grey",
				showLabel: true,
			})}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeScreenStack}
				options={{
					tabBarIcon: ({color, focused}) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={24}
							color="black"
						/>
					),
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Browse"
				component={BrowseScreen}
				options={{
					tabBarIcon: ({color, focused}) => (
						<Ionicons
							name={focused ? "search" : "search-outline"}
							size={24}
							color="black"
						/>
					),
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Grocery"
				component={GroceryScreen}
				options={{
					tabBarIcon: ({color, focused}) => (
						<Ionicons
							name={focused ? "basket" : "basket-outline"}
							size={24}
						/>
					),
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Order"
				component={OrdersScreen}
				options={{
					tabBarIcon: ({color, focused}) => (
						<Ionicons
							name={focused ? "cart" : "cart-outline"}
							size={24}
						/>
					),
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Account"
				component={AccountScreen}
				options={{
					tabBarIcon: ({color, focused}) => (
						<Ionicons
							name={focused ? "person" : "person-outline"}
							size={24}
						/>
					),
					headerShown: false,
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default RootNavigator;

const styles = StyleSheet.create({});
