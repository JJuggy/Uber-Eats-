import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import RootNavigator from "./RootNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
