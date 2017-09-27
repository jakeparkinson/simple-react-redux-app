import { connect } from 'react-redux';
import { sendMessage, messageSent } from '../actions';
import Message from '../components/Message';

const mapStateToProps = state => {
  return {
    selectedContact: state.contacts.selectedContact,
    messageSent: state.contacts.messageSent
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (message, contactId) => {
      dispatch(sendMessage(message, contactId));
    },
    messageSentNotify: (didSend) => {
        dispatch(messageSent(didSend));
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default MessageContainer;