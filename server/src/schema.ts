import { setTimeout as setTimeout$ } from "node:timers/promises";
import { createSchema } from "graphql-yoga";

const typeDefinitions = /* GraphQL */ `
  type Balance {
    amount: Float!
    currency: String!
  }

  type User {
    id: ID!
    name: String!
    email: String
    balance: Balance!
  }

  type Query {
    user: User
  }
`;

const resolvers = {
	Query: {
		user: async () => {
			return {
				id: "1",
				name: "John Doe",
			};
		},
	},
	User: {
		balance: async () => {
			await setTimeout$(1500);
			return {
				amount: 100.0,
				currency: "USD",
			};
		},
	},
};

export const schema = createSchema({
	resolvers: [resolvers],
	typeDefs: [typeDefinitions],
});
