import React from 'react'

import './styles.css'
import Image from '../../img/learn-english.png'

const Body = () => (
    <main id='main-body'>
        <p id='title'> Como? </p>
        <p id='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
        </p>
        <img id='image' src={Image} alt='Learn English' />
        <p id='comments'>
            Aulas de Inglês online!! Só aqui!!
        </p>
    </main>
)

export default Body