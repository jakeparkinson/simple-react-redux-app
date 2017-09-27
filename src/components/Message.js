import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {isEmpty} from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {messageValue: ''};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.messageSent !== this.props.messageSent) {
            if(nextProps.messageSent) {
                toast.success("Message sent!");
                this.props.messageSentNotify(false);
            }
        }
    }

    handleChange = (event) => {
        this.setState({messageValue: event.target.value});
    }

    handleSubmit= (event) => {
        event.preventDefault();
        if(this.state.messageValue) {
            this.props.sendMessage(this.state.messageValue, this.props.selectedContact.id);
            this.setState({messageValue: ''});
        }
        else {
            toast.error('Message text is required');
        }
    }
    
    render() {
      const {selectedContact} = this.props;
      return (
        <div>
            <ToastContainer 
            position="top-right"
            type="default"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            />
            {!isEmpty(selectedContact) ? <form>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Enter your message for {selectedContact.full_name}</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Your message" value={this.state.messageValue} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>
                        Send
                    </Button>
                </FormGroup>
            </form> :
            <p>
                Select a contact to send them a text message.
            </p>}
        </div>
      );
    }
}

Message.propTypes = {
  selectedContact: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  messageSent: PropTypes.bool.isRequired,
  messageSentNotify: PropTypes.func.isRequired
};

export default Message;