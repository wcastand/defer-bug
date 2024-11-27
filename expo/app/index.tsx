import { type FragmentType, graphql, useFragment } from "@/src/gql";
import { Text, View } from "react-native";
import { useQuery } from "urql";

const BalanceFragment = graphql(`
	fragment BalanceFragment on User {
		... on User @defer {
			balance {
				amount
				currency
			}
		}
	}
`);

const HomeQuery = graphql(
	`
  query HomeQuery {
    user {
      id
      name
			...BalanceFragment
    }
  }
`,
);

function Balance({
	fragment,
}: { fragment?: FragmentType<typeof BalanceFragment> | null }) {
	const d = useFragment(BalanceFragment, fragment);
	return <Text>{d?.balance?.amount ?? "-"}</Text>;
}

function Index() {
	const [result] = useQuery({ query: HomeQuery });
	console.log(result.data);
	if (result.fetching) return <Text>Loading...</Text>;
	if (result.error)
		return (
			<View>
				<Text>Error...</Text>
				<Text>{result.error.message}</Text>
			</View>
		);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>{result.data?.user?.name}</Text>
			<Balance fragment={result.data?.user} />
		</View>
	);
}

export default Index;
