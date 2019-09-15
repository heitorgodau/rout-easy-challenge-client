import React, { Component } from 'react';
import Form from '../form';
import './app';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
    };
    this.getNewDelivery = this.getNewDelivery.bind(this);
    this.getAllDeliveries = this.getAllDeliveries.bind(this);
  }

  componentDidMount() {
    this.getAllDeliveries();
  }

  getAllDeliveries() {
    const { deliveries } = this.state;
    console.log(deliveries);
  }

  getNewDelivery() {
    const { deliveries } = this.state;
    const deliveriesCopy = [...deliveries];
    deliveriesCopy.push('new delivery');
    this.setState({
      deliveries: deliveriesCopy,
    });
  }

  render() {
    return (
      <>
        <main className="deliveries-control">
          <Form />
        </main>
      </>
    );
  }
}

export default App;
