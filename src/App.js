import { HashRouter as Router, Route } from "react-router-dom";
import React from "react";
import ComponentTest from "./components/ComponentTest";
import ComponentTestTwo from "./components/ComponentTestTwo";
import axios from "axios";

class App extends React.Component {
  state = {
    routeChange: false,
    movies: [1, 2, 3],
  };

  getMovies = async () => {
    const json = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    if (json) {
      const {
        data: {
          data: { movies },
        },
      } = json;

      this.setState(current => ({
        movies: movies,
        routeChange: !current.routeChange,
      }));
    }
  };

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { routeChange, movies } = this.state;

    return (
      <Router>
        {routeChange ? (
          <div>
            <ul>
              {movies.map((e, index) => (
                <li key={index}>{e.id}</li>
              ))}
            </ul>
          </div>
        ) : (
          <Route exact path="/" component={ComponentTest} />
        )}
      </Router>
    );
  }
}

export default App;
