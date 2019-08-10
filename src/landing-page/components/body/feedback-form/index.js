/**
 * Comments: The things is must do is...
 * 1. To set correctly the margin between the
 * button and the Observações.
 * 2. Fix the side margins
 * 3. Aling the text from the textarea to be at 
 * the top! If it could.
 */

import React from 'react'

import './styles.css'

import FormInput from './form-input'

const FeedbackForm = () => (
    <div className='container'>
        <p className='title'> Inscreva-se Abaixo! </p>
        <form className='form'>
            <FormInput 
                labelName='Seu Nome' 
                type='text' 
                name='nome' 
                placeholder='João Arruda'
            />
            <FormInput 
                labelName='Seu Email' 
                type='text' 
                name='email' 
                placeholder='joaoarruda@domain.com.br'
            />
            <FormInput 
                labelName='Observações' 
                type='textarea' 
                name='observacoes' 
                placeholder='Nos deixe seu feedback...'
            />
            <div className="row">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    </div>
)

export default FeedbackForm