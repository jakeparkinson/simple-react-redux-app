import { config } from '../config/index';

export function loadContacts() {
    return (dispatch) => {
        dispatch(setLoading(true));

        fetch(`${config.skipioBaseUrl}/contacts?token=${config.skipioToken}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(setContacts(json.data));
            dispatch(setLoading(false));
        }).catch(() => {
            dispatch(setLoading(false));
        });
    };
}


export function sendMessage(messageValue, contactId) {
    return (dispatch) => {

        fetch(`${config.skipioBaseUrl}messages?token=${config.skipioToken}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    recipients: [
                        `contact-${contactId}`
                    ],
                    message: {
                        body: messageValue
                    }
                })
        }).then((response) => {
            dispatch(messageSent(true))
        }).catch(() => {
            dispatch(messageSent(false));
        });
    };
}

 export const setContact = contact => {
    return {
      type: 'SET_SELECTED_CONTACT',
      contact
    };
  };

 const setLoading = loading => {
    return {
      type: 'SET_LOADING',
      loading
    };
  };

  export const messageSent = messageSent => {
    return {
      type: 'MESSAGE_SENT',
      messageSent
    };
  };

const setContacts = contacts => {
    return {
      type: 'SET_CONTACTS',
      contacts
    };
  };
  