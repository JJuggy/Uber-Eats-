import {View, Text, TextInput} from "react-native";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {SEARCH_FIELD_STYLES} from "./searchFieldStyle";
function SearchInput() {
	const [searchValue, setSearchValue] = useState(null);
	React.useEffect(() => {
		setSearchValue(searchValue);
	}, [searchValue]);
	const handleSearchValueChange = e => {
		setSearchValue(e.nativeEvent.text);
	};

	return (
		<View style={SEARCH_FIELD_STYLES.container}>
			<Ionicons name="location" size={20} color="black" />
			<TextInput
				placeholder="Search"
				onChange={handleSearchValueChange}
				value={searchValue}
				selectionColor="black"
				style={SEARCH_FIELD_STYLES.textInput}
			/>

			<View
				style={{
					width: 70,
					height: 30,
					borderRadius: 25,
					backgroundColor: "#e6e3e3",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Ionicons
					name="time"
					size={12}
					color="black"
					style={{marginRight: 2}}
				/>
				<Text>Search</Text>
			</View>
		</View>
	);
}

export default SearchInput;
