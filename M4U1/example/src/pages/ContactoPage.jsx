import React from 'react'

const ContactoPage = () => {
  return (
    <main className="holder">
      <div className="columnacontacto">
        <h2>Complete el siguiente formulario</h2>
        <form action="">
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre'/>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input type="number" id='telefono'/>
          </p>
          <p>
            <label htmlFor="mensaje">Comentario</label>
            <input type="text" id='mensaje'/>
          </p>
          <p className='centrar'>
            <input type="submit" value='Enviar'/>
          </p>


        </form>
      </div>
    <div className="columnadatos">
<h2>Otras vias de contacto</h2>
<p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
<ul>
    <li>Telefono:2143421344</li>
    <li>Email: </li>
    <li>Facebook</li>
    <li>twitter</li>
    <li>skype</li>
    <li>instagram</li>
</ul>



    </div>




    </main>
  )
}

export default ContactoPage
