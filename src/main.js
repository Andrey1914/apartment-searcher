import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/scss/index.scss";

import VueApollo from "vue-apollo";

const httpLink = new createHttpLink({
  uri: "http://localhost:3005/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

createApp(App).use(apolloProvider).use(router).mount("#app");
