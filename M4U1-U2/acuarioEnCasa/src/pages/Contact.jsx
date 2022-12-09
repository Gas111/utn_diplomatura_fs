import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import '../styles/pages/contact.css'

const Contact = () => {
  return (
    <div>
      <main className="main">
        <form action="">
          <div>
            <label htmlFor="firstname">Nombre</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>

            <input type="text" id="lastname" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>

          <div>
            <label htmlFor="textarea">Consulta</label>
          </div>
          <textarea
            className="textarea"
            name=""
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Agregue aqui su consulta"
          ></textarea>

          <div>
            <button type="submit">Enviar Consulta</button>
          </div>
        </form>

        <section className="main__bottom-fish"></section>
      </main>
    </div>
  )
}

export default Contact
