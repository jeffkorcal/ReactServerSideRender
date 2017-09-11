import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../actions';

class Landing extends React.Component {
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>Videos</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

// TODO: Browse all reset search term

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => {
  return {
    handleSearchTermChange: event => {
      dispatch(setSearchTerm(event.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
