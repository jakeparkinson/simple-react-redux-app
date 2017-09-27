import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ContactList extends Component {

    componentDidMount() {
        this.props.loadContacts();
    }

    render() {
      const {contacts, loading, selectContact, selectedContact} = this.props;
      if(loading) {
          return (
              <div>
                  Loading contacts...
              </div>
          )
      }
      return (
        <ListGroup>
            {contacts.map(contact => (
                <ListGroupItem active={selectedContact.id === contact.id} onClick={() => selectContact(contact)} key={contact.id}>
                    {contact.full_name} {contact.phone_mobile}
                </ListGroupItem>
            ))}
        </ListGroup>
      );
    }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  selectContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired
};

export default ContactList;