/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FormattedHTMLMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';

import axios from 'axios';

import Form from 'components/Form';
import Field from 'components/Form/Field';
import Commands from 'components/Form/Commands';

export default class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      error: false,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState({
        [target.name]: value
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(0<this.state.firstname.trim().length 
      /*&&
       0<this.state.lastname.trim().length &&
       this.isValidEmail(this.state.email.trim()) &&
       0<this.state.phone.trim().length &&
       0<this.state.subject.trim().length &&
       0<this.state.message.trim().length
       */
    ) {

      axios.post('https://louvet.pro/apitest.php', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      })
      .then(function (response) {
        this.setState({submitted: true});
      }.bind(this))
      .catch(function (error) {
        this.setState({submitted: false});
      }.bind(this));
    } else {
      this.setState({error: true});
    }
  }

  isValidEmail(value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  render() {

    const isFormSubmitted = this.state.submitted;
    const isFormError = this.state.error;

    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Contacter un développeur Web à Toulouse' },
          ]}
        />

        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <p><FormattedHTMLMessage {...messages.introduction} /></p>

        {isFormError ? (<p>Certaines saisies manquent ou sont incorrectes.<br/>Veuillez vérifier les champs du formulaire</p>) : ('')}

        {isFormSubmitted ? (
          <p>Merci, votre message a été envoyé. Je vous contacterai rapidement.</p>
        ) : (      
          <Form onSubmit={this.handleSubmit}>
            <fieldset>
              <Field>
                <label htmlFor="firstname">Votre prénom :</label>
                <input type="text" id="firstname" name="firstname" onChange={this.handleChange}/>
              </Field>
              <Field>
                <label htmlFor="lastname">Votre nom :</label>
                <input type="text" id="lastname" name="lastname" onChange={this.handleChange}/>
              </Field>
              <Field>
                <label htmlFor="email">Votre email :</label>
                <input type="text" id="email" name="email" onChange={this.handleChange}/>
              </Field>
              <Field>
                <label htmlFor="phone">Votre téléphone :</label>
                <input type="text" id="phone" name="phone" onChange={this.handleChange}/>
              </Field>
              <Field>
                <label htmlFor="subject">Objet de votre message :</label>
                <input type="text" id="subject" name="subject" onChange={this.handleChange}/>
              </Field>
              <Field>
                <label htmlFor="message">Votre message :</label>
                <textarea id="message" name="message" onChange={this.handleChange}></textarea>
              </Field>
              <Commands>
                  <button>Envoyer votre message</button>
              </Commands>  
            </fieldset>
          </Form>
        )}

      </div>
    );
  }
}
