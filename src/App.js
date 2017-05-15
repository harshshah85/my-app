import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Results from './components/Results'
import Search from './components/Search';


class App extends Component {
  constructor(){
    super();
    this.searchMovie = this.searchMovie.bind(this);
    this.state = {
      searchResults:[],
      isError:false
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="Movie Data"/>
        <Search onSubmit={this.searchMovie}/>
        {!this.state.isError && this.state.searchResults.length > 0 && <Results data={this.state.searchResults}/>}
      </div>
    );
  }

  searchMovie(searchText){
    fetch(`http://omdbapi.com?s=${searchText}`)
    .then((response)=>{
      return response.json()
    })
    .then((jsonData) => {
      console.log(JSON.stringify(jsonData));
      this.setState({
        searchResults:jsonData.Search,
        isError:false
      })
    })
    .catch((error) => {
      this.setState({
        isError:true
      })
    })
  }
}

export default App;
