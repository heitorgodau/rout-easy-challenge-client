import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import Button from '../button';
import './form';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: 0,
      address: '',
      lat: '',
      long: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {
      name,
      weight,
      address,
      lat,
      long,
    } = this.state;
    return (
      <section className="section-transactions">
        <form className="insert-transacion" onSubmit={e => this.handleSubmit(e)}>
          <Input
            type="text"
            name="name"
            placeholder="Nome Cliente"
            value={name}
            onChange={this.handleChange}
          />
          <Input
            type="number"
            name="weight"
            placeholder="Peso da Entrega (Kg)"
            value={weight}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Endereço Cliente"
            value={address}
            onChange={this.handleChange}
          />
          <Button type="button" className="btn btn-min text-uppercase">Buscar</Button>
          <Input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={lat}
            onChange={this.handleChange}
            isDisabled
          />
          <Input
            type="text"
            name="long"
            placeholder="Longetude"
            value={long}
            onChange={this.handleChange}
            isDisabled
          />
          <Button type="submit" className="btn btn-success text-uppercase">Cadastrar cliente</Button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  getNewDelivery: PropTypes.func.isRequired,
};

export default Form;
