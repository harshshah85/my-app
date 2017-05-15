import React, {Component} from 'react';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchText:'',
      isError:false
    };
  }

  onTextChanged(event){
    this.setState({
      searchText:event.currentTarget.value
    });
  }

  searchState

  render(){
      return(
        <div>
          <input type='text'
          name='search'
          placeholder='Search for Movies'
          value={this.state.searchText}
          onChange={(event) => this.onTextChanged(event)} />
          <button type="Submit" onClick={() => this.props.onSubmit(this.state.searchText)}>Search Movie, Go</button>
        </div>
      )
  }
}

export default Search;
