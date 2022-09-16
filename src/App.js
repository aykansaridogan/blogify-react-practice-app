import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import { fetchData } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      currentPage: 0,
      numberPerPage: 6, // It can be changed to any value..
      appState: "loading",
      errorMessage: "",
      searchQuery: ""
    };
  }

  changeSearchQuery = newSearhQuery =>
    this.setState({ searchQuery: newSearhQuery });

  changePage = newPage => this.setState({ currentPage: newPage });

  componentDidMount() {
    Promise.all([fetchData("posts"), fetchData("users")])
      .then(data =>
        this.setState({ posts: data[0], users: data[1], appState: "success" })
      )
      .catch(e =>
        this.setState({ appState: "error", errorMessage: String(e) })
      );
  }

  render() {
    return (
      <div className="App">
        <AppBar changeSearchQuery={this.changeSearchQuery}></AppBar>
        <Content
          posts={this.state.posts}
          currentPage={this.state.currentPage}
          changePage={this.changePage}
          numberPerPage={this.state.numberPerPage}
          appState={this.state.appState}
          errorMessage={this.state.errorMessage}
          users={this.state.users}
          searchQuery={this.state.searchQuery}
        ></Content>
      </div>
    );
  }
}

export default App;
