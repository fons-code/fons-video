import React from 'react'
import '../assets/styles/components/caroussel.scss'

const Caroussel = ({children}) => (
    <section className="carousel">
    <div className="carousel__container">
        {children}
    </div>
    </section>
)

export default Caroussel;