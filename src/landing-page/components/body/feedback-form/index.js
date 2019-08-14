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
        observations: '',
        sended: false
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

        await axios.post(
            `https://online-class-api.herokuapp.com/api/landing-page-form`, 
            // `http://localhost:3001/api/landing-page-form`, // Teste
            {
                name: this.state.name,
                email: this.state.email,
                observations: this.state.observations
            },
        ).then(res => {
            console.log("Sucessfully submitted!")
            this.setState({ sended:true })
        }).catch(() => console.log("Something went wrong and the post was blocked"))
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
                    <div className="row">
                        <div className="col-25">
                            <label> Observações </label>
                        </div>
                        <div className="col-75">
                            <textarea 
                                name='observacoes'
                                placeholder='Nos deixe seu feedback...'
                                value={this.state.observations}
                                onChange={this.handleChangeObservation}
                            />
                        </div>
                    </div>
                    <br></br>
                    { this.state.sended ? <p> Obrigado! </p> :
                    <div className="row">
                        <input type="submit" value="Enviar"/>
                    </div>}
                </form>
            </div>
        )
    }
}

export default FeedbackForm