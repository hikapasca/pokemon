import "./App.css";
import { PokemonList, PokemonDetail, MyPokemonList } from "./pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./component/Navbar";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            {/* <Route exact path="/detail/:pokemon" component={PokemonDetail} /> */}
            {/* <Route exact path="/pokemonlist" component={MyPokemonList} /> */}
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
