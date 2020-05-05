import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Caroussel from "../components/Caroussel";
import CarousselItem from "../components/CarousselItem";
import Footer from "../components/Footer";

import "../assets/styles/app.scss";

const App = () => {
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'originals': [],
  });
  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch(err => console.error(err));
  }, []);

  console.log(videos);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 && 
        <Categories className="mylist">
          <Caroussel>
            <CarousselItem />
          </Caroussel>
        </Categories>
      }
      <Categories className='trends'>
          <Caroussel>
            {videos.trends.map(item =>(
              <CarousselItem key={item.id} {...item}/>
            ))}
          </Caroussel>
      </Categories>
      <Categories>
        <Caroussel>
          {videos.originals.map(item =>(
            <CarousselItem key={item.id} {...item}/>
          ))}
        </Caroussel>
      </Categories>
     <Footer />
    </div>
  );
};

export default App;
