// ==========<IMPORTS>=========================================
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import 'bootstrap/dist/css/bootstrap.min.css';


// ==========<FUNCTION APP>=================================================
function App() {

 // ==========<STATE VARIABLES>======================================
   // Declare a state variable to hold the galleryItems array
  const [galleryList, setGalleryList] = useState([])


 // ==========<GET>==================================================
  const fetchGallery = () => {
    // Use axios to GET
    axios.get('/gallery')
    .then((response) => {
      // console.log('This is the GET response data:', response.data);
      // set the response.date into state variable galleryItems
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('There was an error in the GET:', error);
    })
  } // End GET ---------------------------------------------

 // ==========<PUT>==================================================
  const updateLike = (newLike) => {
    axios.put(`/gallery/like/` + newLike.id, {likes: newLike.count + 1})
    .then(response => {
      console.log('PUT on App.jsx Works!!! response is:', response);
      fetchGallery();
    }).catch((error) => {
      console.log('PUT on App.jsx error:', error);
    })
  } // End PUT ---------------------------------------------

 // ==========<RUN FETCH ON PAGE LOAD>=========================================
  useEffect(() => {
    fetchGallery();
  }, []) // End useEffect -------------------------------------------

 // ==========<RETURN>=========================================================
    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of North American Animals</h1>
        </header>

        <GalleryList
          galleryList={galleryList}
          addLike={updateLike}
        />
      </div>

    ); // End return -----------------------------------------------
} // End App function -------------------------------------------------------------------

export default App;
