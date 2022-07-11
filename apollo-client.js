import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl5g1kdtr39ir01t7b485c4jy/master",
  cache: new InMemoryCache(),
});

export default client;
