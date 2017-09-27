import React, { Component } from 'react';
import ContactListContainer from './containers/ContactListContainer';
import MessageContainer from './containers/MessageContainer.js';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={4}>
            <ContactListContainer />
          </Col>
          <Col md={8}>
            <MessageContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
