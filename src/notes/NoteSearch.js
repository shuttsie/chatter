import React, { useContext } from 'react';

class NoteSearch extends React.Component {
    handleSearch = (event) => {
      this.props.onSearch(event.target.value.toLowerCase());
    };
    
    render () {
      return (
        <input type="search" className="search-input" placeholder="Search..."
          onChange={(event) => {this.handleSearch(event)}}/>
      );
    }
  }
export default NoteSearch