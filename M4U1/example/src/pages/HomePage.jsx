import React from 'react'

const HomePage = () => {
  return (
    <main>
      <div className="holder">
        <img src="images/home/img01.jpg" alt="avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, corrupti?</p>
        </div>
      </div>

      <div className="testimonios rigth">
        <h2>Testimonios</h2>
        <div className="testimonio">
          <span className='cita'>Excelente</span>
          <span  className='autor'>Juan Perez</span>
        </div>
      </div>
    </main>
  )
}

export default HomePage
