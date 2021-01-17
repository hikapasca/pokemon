import "./App.css";
import { PokemonList, PokemonDetail, MyPokemonList } from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./store";
const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/detail/:pokemon" component={PokemonDetail} />
              <Route exact path="/mypokemon" component={MyPokemonList} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
