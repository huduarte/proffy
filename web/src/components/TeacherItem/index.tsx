import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>     
            <img src="https://avatars0.githubusercontent.com/u/50152238?s=460&u=77ba2377c37ac15b706c018ba2d3f59ccde47ab3&v=4" alt=""/>
            <div>
                <strong>Hudson Duarte</strong>
                <span>Matemática</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de matemática avançada
            <br/> <br/>
            Apaixonado por calcular em sala de aula e por mudar a vida das pessoas através de cálculos enormes.
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            
        </footer>
    </article>
    )
}


export default TeacherItem