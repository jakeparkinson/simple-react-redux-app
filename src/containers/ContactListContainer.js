import { connect } from 'react-redux';
import { loadContacts, setContact } from '../actions';
import ContactList from '../components/ContactList';

const mapStateToProps = state => {
  return {
    contacts: state.contacts.all,
    loading: state.contacts.loading,
    selectedContact: state.contacts.selectedContact
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadContacts: () => {
      dispatch(loadContacts());
    },
    selectContact: (contact) => {
        dispatch(setContact(contact));
    }
  }
}

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;