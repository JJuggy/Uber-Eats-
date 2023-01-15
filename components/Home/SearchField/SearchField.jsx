import React, {useRef, useState} from "react";
import {View, Text} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Ionicons} from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export function SearchBar({cityHandler}) {
	const ref = useRef();
	return (
		<View style={{marginTop: 15, flexDirection: "row"}}>
			<GooglePlacesAutocomplete
				ref={ref}
				query={{key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4"}}
				onPress={(data, details = null) => {
					console.log(data.description);
					const city = data.description.split(",")[0];
					cityHandler(city);
				}}
				getAddressText={value => setInputValue(value)}
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#dedede",
						borderRadius: 20,
						fontWeight: "700",
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#dedede",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{marginLeft: 10}}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<Pressable
						onPress={() => cityHandler(ref.current.getAddressText())}
						style={{
							flexDirection: "row",
							marginRight: 8,
							backgroundColor: "white",
							padding: 9,
							borderRadius: 30,
							alignItems: "center",
						}}
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{marginRight: 6}}
						/>
						<Text>Search</Text>
					</Pressable>
				)}
			/>
		</View>
	);
}
