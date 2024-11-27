import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { fetch, type FetchRequestInit } from "expo/fetch";

const client = new Client({
	url: "http://localhost:4000/graphql",
	exchanges: [cacheExchange, fetchExchange],
	fetchSubscriptions: true,
	requestPolicy: "cache-and-network",
	fetch: (input, init) =>
		fetch(input as string, init as FetchRequestInit).then(
			(res) => res as Response,
		),
});

function RootLayout() {
	return (
		<Provider value={client}>
			<SafeAreaView style={{ flex: 1 }}>
				<Slot />
			</SafeAreaView>
		</Provider>
	);
}

export default RootLayout;
