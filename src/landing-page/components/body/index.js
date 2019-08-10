import React from 'react'

import FeedbackForm from './feedback-form'

import './styles.css'
import Image from '../../img/learn-english.png'

class Body extends React.Component {
    state = {
        showForm: false
    }
    render(){
        return (
            <main className='main-body'>
                <p className='title'> Qual a nossa proposta? </p>
                <p className='text'>
                    Após alguns estudos, percebemos uma grande necessclassNameade na população brasileira, tendo em
                    vista essa necessclassNameade, propomos uma solução que vai dar muito certo para você.
                </p>
                <p className='quote'> What is your biggest dream? </p>
                <p className='text'>
                    Foi difícil ler essa frase? Então, se você teve dificuldade não fique triste, apenas 5% da
                    população brasileira é capaz de ler essa frase e responde-la apropriadamente, temos mais
                    de 200 milhões de pessoas que não falam a lingua dos negócios, isso é um dado que nos assuta,
                    na verdade estamos trabalhando para sanar essa dificuldade.
                </p>
                <p className='text'>
                    Queremos lançar uma aplicação online onde você pode conversar com professores de 
                    inglês muito bem qualificados e treinados, nestas aulas o nosso foco é conversação
                    você vai poder tirar suas dúvclassNameas e ainda ter uma boa conversa com quem entender do
                    assunto.
                </p>
                <img className='image' src={Image} alt='Learn English' />
                <p className='comments'>
                    Não estude sozinho, estude conosco!
                </p>
                <p className='text'>
                    Se você quiser apoiar o projeto, pode fazer clicando no butão abaixo.
                </p>
                <button className='button' onClick={() => {
                    this.setState({ showForm: true })
                }}><span> Apoiar </span></button>
                { this.state.showForm ? <FeedbackForm /> : null }
            </main>
        )
    }
}

export default Body