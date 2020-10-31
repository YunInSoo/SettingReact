import { HashRouter as Router, Route } from "react-router-dom";
import React from "react";
import Movie from "./components/Movie";
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
              {movies.map((e, index) => {
                console.log(e);
                return (
                  <Movie
                    key={index}
                    image={e.background_image}
                    title={e.title}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <Route exact path="/" component={ComponentTestTwo} />
        )}
      </Router>
    );
  }
}

export default App;
