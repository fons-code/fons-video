import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Caroussel from '../components/Caroussel'
import CarousselItem from '../components/CarousselItem'
import Footer from '../components/Footer'

import '../assets/styles/app.scss'

const App = () =>(
    <div className="App">
        <Header/>
        <Search/>
        <Categories>
            <Caroussel>
                <CarousselItem/>
                <CarousselItem/>
                <CarousselItem/>
                <CarousselItem/>
            </Caroussel>
        </Categories>
        <Footer/>
    </div>
)

export default App;