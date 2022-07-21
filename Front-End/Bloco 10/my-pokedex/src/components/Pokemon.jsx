import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { id, name, type, image, value, measurementUnit } = this.props;
    return (
<div className="div-pokemon" key={id}>
  <img src={image} alt={name} />
  <p>{name}</p>
  <p>{type}</p>
  <p>Average weight: {value} {measurementUnit}</p>
</div>
        )
  }
}

export default Pokemon;
