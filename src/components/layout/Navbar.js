import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

export default class AppBar extends Component {
  handleonChange = e => this.props.changeSearchQuery(e.target.value);

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blogify</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Ana sayfa</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={this.handleonChange}
              className="mr-sm-2"
            />
            <Button variant="outline-light">Arama</Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}
