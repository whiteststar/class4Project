import React, {Component} from 'react';
const baseUrl = 'http://localhost:8080';


addMessage(data){
    return fetch(
      “/messages”, {
        method: “POST”,
        headers: {
          “content-type”: “application/json”
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json());
  };

  
class MessageForm extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: “”,
          date: “”,
          status: “”
        };
      }
      
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked');
        addMessage({
            body: this.state.body,
            license_plate: this.state.license_plate

        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
            License: <input type="text" name="License"/><br/><br/>
            Message: <textarea type="text" name="Body"/><br/>
            <input type="submit" value="Submit"/>
            </form>
        )
    }
};


export default MessageForm;