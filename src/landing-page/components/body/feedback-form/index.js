/**
 * Comments: The things is must do is...
 * 2. Fix the side margins
 * 3. Aling the text from the textarea to be at 
 * the top! If it could.
 */

import React from 'react'
import axios from 'axios'

import './styles.css'

import FormInput from './form-input'

class FeedbackForm extends React.Component {
    state = {
        name: '',
        email: '',
        observations: ''
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value })
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value })
    }
    handleChangeObservation = event => {
        this.setState({ observations: event.target.value })
    }
    
    handleSubmit = async event => {
        event.preventDefault();
    
        const form = {
          name: this.state.name,
          email: this.state.email,
          observations: this.state.observations
        };

        console.log(form)

        await axios.post(`https://online-class-api.herokuapp.com/api/landing-page-form`, { form })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(() => console.log("Can’t access response. Blocked by Axios?"))
    }
    
    render(){    
        return (
            <div className='container'>
                <p className='title'> Inscreva-se Abaixo! </p>
                <form className='form' onSubmit={this.handleSubmit} >
                    <FormInput 
                        labelName='Seu Nome' 
                        type='text' 
                        name='nome' 
                        placeholder='João Arruda'
                        value={this.state.name} 
                        onChange={this.handleChangeName}
                    />
                    <FormInput 
                        labelName='Seu Email' 
                        type='text' 
                        name='email' 
                        placeholder='joaoarruda@domain.com.br'
                        value={this.state.email} 
                        onChange={this.handleChangeEmail}
                    />
                    <FormInput 
                        labelName='Observações' 
                        type='textarea' 
                        name='observacoes' 
                        placeholder='Nos deixe seu feedback...'
                        value={this.state.observations} 
                        onChange={this.handleChangeObservation}
                    />
                    <br></br>
                    <div className="row">
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default FeedbackForm