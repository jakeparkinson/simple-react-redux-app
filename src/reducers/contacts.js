let contactsInitialState = {
    all: [],
    loading: false,
    selectedContact: {},
    messageSent: false
};

const contacts = (state = contactsInitialState, action) => {
    switch (action.type) {
      case 'SET_CONTACTS':
        return {
          ...state,
          all: action.contacts
        };
      case 'SET_SELECTED_CONTACT':
        return {
          ...state,
          selectedContact: action.contact
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.loading
        };
      case 'MESSAGE_SENT':
        return {
          ...state,
          messageSent: action.messageSent
        }
      default:
        return state;
    }
  };
  
  export default contacts;