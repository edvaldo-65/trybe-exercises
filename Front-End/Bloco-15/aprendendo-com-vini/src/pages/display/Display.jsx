import React, { Component } from 'react'
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    const { profile } = this.props;
  
    return (
      <div>
        <p>Nome: { profile.name }</p>
        <p>Email: { profile.email }</p>
        <p>Área de estudo: { profile.area }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, null)(Display);
