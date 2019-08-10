import React from 'react'

import './styles.css'

const FeedbackForm = () => (
    <div className='container'>
        <p className='title'> Inscreva-se Abaixo! </p>
        <form className='form'>
            <div className="row">
                <div className="col-25">
                    <label for="fname"> Seu nome </label>
                </div>
                <div className="col-75">
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="João Arruda"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="email"> Seu Email </label>
                </div>
                <div className="col-75">
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="joaoarruda@domain.com.br"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="subject"> Observações </label>
                </div>
                <div className="col-75">
                    <textarea 
                        name="observacoes" 
                        placeholder="Nos deixe seu feedback..." 
                    />
                </div>
            </div>
            <div className="row">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    </div>
)

export default FeedbackForm