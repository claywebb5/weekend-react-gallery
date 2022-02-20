// ==========<IMPORTS>=========================================
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


// ==========<FUNCTION APP>=================================================
function App() {

// ==========<STATE VARIABLES>======================================
// Declare a state variable to hold the galleryItems array
const [galleryList, setGalleryList] = useState([])


// ==========<GET>==================================================
// create a function to GET the galleryItems
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

// ==========<RUN FETCH ON PAGE LOAD>=========================================
// useEffect will run fetchGallery on page load
useEffect(() => {
  fetchGallery();
// Empty array will prevent infinite loops
}, []) 
// End useEffect -------------------------------------------


// ==========<RETURN>=========================================================
    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of Animals</h1>
        </header>

        <p>Gallery goes here</p>
        <GalleryList
          galleryList={galleryList}
        />
        
        
      </div>



    ); // End return -----------------------------------------------



} // End App function -------------------------------------------------------------------

export default App;
