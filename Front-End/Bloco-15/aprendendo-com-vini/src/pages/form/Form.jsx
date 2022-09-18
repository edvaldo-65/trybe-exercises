import React, { Component } from 'react';
import { connect } from 'react-redux';

import { nameSaved as nameSavedAction } from '../../actions';

import './form.css';

class Form extends Component {
  state = {
    name: '',
    email: '',
    area: 'front-end',
    profileIsSaved: false,
    profile: {},
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  saveButton = (event, nameSaved) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        profile: {
          name: prevState.name,
          email: prevState.email,
          area: prevState.area,
          profileIsSaved: true,
        }
      }
    }, () => this.setState(() => {
      const { profile } = this.state;
      nameSaved(profile);
      return {
        name: '',
        email: '',
        area: 'front-end',
        profileIsSaved: false,
      }
    }))
  };

  render() {
    const { name, email } = this.state;
    const { nameSaved } = this.props

    return (
      <main id="main-form">
        <h1 id="form-title">Formulário</h1>
        <form id="form" >
          <label className="input-labels" htmlFor="input-name">
            Nome:
            <input
              id="input-name"
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label className="input-labels" htmlFor="input-email">
            E-mail:
            <input
              id="input-email"
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </label>

          <label className="input-labels" htmlFor="area">
            Área de Estudos:
            <select id="area" name="area" onChange={this.handleChange} >
              <option value="front-end">Front-end</option>
              <option value="back-end">Back-end</option>
            </select>
          </label>

          <button
            id="save-button"
            ype="button"
            onClick={(event) => this.saveButton(event, nameSaved)}
          >
            Enviar
          </button>
        </form>
      </main>
    )
  }
}

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  nameSaved: (profile) => dispatch(nameSavedAction(profile))
});

export default connect(null, mapDispatchToProps)(Form);
