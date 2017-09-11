import React from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header';
import ShowCard from './ShowCard';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

export default connect(mapStateToProps)(Search);
