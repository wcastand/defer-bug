import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Client, Provider, fetchExchange } from "urql";
import { fetch, type FetchRequestInit } from "expo/fetch";
import { offlineExchange } from "@urql/exchange-graphcache";
import { makeAsyncStorage } from "@urql/storage-rn";

import schema from "@/src/schema.json";

const storage = makeAsyncStorage({
	dataKey: "graphcache-data", // The AsyncStorage key used for the data (defaults to graphcache-data)
	metadataKey: "graphcache-metadata", // The AsyncStorage key used for the metadata (defaults to graphcache-metadata)
	maxAge: 7, // How long to persist the data in storage (defaults to 7 days)
});

const cache = offlineExchange({
	schema,
	storage,
	keys: {
		Balance: () => null,
	},
});

const client = new Client({
	url: "http://localhost:4000/graphql",
	exchanges: [cache, fetchExchange],
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
