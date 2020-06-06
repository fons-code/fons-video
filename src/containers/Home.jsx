import React from "react";
import {connect} from 'react-redux'
import Search from "../components/Search";
import Categories from "../components/Categories";
import Caroussel from "../components/Caroussel";
import CarousselItem from "../components/CarousselItem";


import "../assets/styles/app.scss";

const Home = ({myList,trends,originals}) => {
  return (
    <div className="home">
      <Search />
      {myList.length > 0 && 
        <Categories className="mylist">
          <Caroussel>
            <CarousselItem />
          </Caroussel>
        </Categories>
      }
      <Categories className='trends'>
          <Caroussel>
            {trends.map(item =>(
              <CarousselItem key={item.id} {...item}/>
            ))}
          </Caroussel>
      </Categories>
      <Categories>
        <Caroussel>
          {originals.map(item =>(
            <CarousselItem key={item.id} {...item}/>
          ))}
        </Caroussel>
      </Categories>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps,null)(Home);