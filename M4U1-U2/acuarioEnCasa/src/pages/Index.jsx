import React from 'react'
import "../styles/pages/index.css"

const Index = () => {
  return (
    <div className="main">
        <section className="main__offerts"></section>

        <section className="main__hot-products">
             <div className="hot-products-title">
                <h2>Productos en Promocion</h2>
            </div> 
           <div className="box-products">
                <div className="card-product">
                    <div className="card-product__image">
                        <img src="https://scontent.faep26-1.fna.fbcdn.net/v/t39.30808-6/296530616_137363538987038_3376808815360175108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SF5YdDsmvQIAX-RBmcf&_nc_ht=scontent.faep26-1.fna&oh=00_AfBM4lQG2qzjzD1ouNT3ybAX95gmfl-X0kKCyVhwgKAlEw&oe=6397E831" alt=""/>
                        
                    </div>
                    <div className="card-product__info">
                        <h5 className="title-product">Plantines</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$100</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div> 
                <div className="card-product">
                    <div className="card-product__image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyrtlZnBs6koWvtI9IQSj6ssHp2i7jshIFkTBpcm1uA&s" alt="" />
                      
                        </div> 
                    <div className="card-product__info">
                        <h5 className="title-product">Pez Dorado</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>

                <div className="card-product">
                    
                    <div className="card-product__image">
                    <img src="https://scontent.faep26-1.fna.fbcdn.net/v/t39.30808-6/281276688_101871059202953_959646456975002968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t8EHM8VBsTAAX8zH7P1&tn=LciVpSBMgKekSDyF&_nc_ht=scontent.faep26-1.fna&oh=00_AfCdvjb8j3nkiKsebSzAlptB3tQ2OAdJiNA_GRtESnC9mQ&oe=639874EC" alt="" />
                    
                    </div>  
                    <div className="card-product__info">
                        <h5 className="title-product">Alimento Microgranulado</h5>
                        <p>Tipo:<span>Agua Dulce</span></p>
                        <p>Precio:<span>$200</span></p>
                        <p>Stock:<span>10</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>

           </div>
        </section>



        <section className="main__bottom-fish">
        </section>
   </div>
  )
}

export default Index
