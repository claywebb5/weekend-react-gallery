// ==========<IMPORTS>=========================================
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';



// ==========<FUNCTION APP>==============================================================================================================================================================
function App() {

// ==========<STATE VARIABLES>======================================
// Declare a state variable to hold the galleryItems array
const [galleryItems, setGalleryItems] = useState([])


// ==========<GET>==================================================
// create a function to GET the galleryItems
const fetchGallery = () => {
  console.log('In fetchGallery (GET)');
  // Use axios to GET
  axios.get('/gallery')
  .then((response) => {
    console.log('This is the GET response data:', response.data);
    // set the response.date into state variable galleryItems
    setGalleryItems(response.data);
  }).catch((error) => {
    console.log('There was an error in the GET:', error);
  })
} // End GET ------------------------------------------------------------

// ==========<RUN FETCH ON PAGE LOAD>=========================================
// useEffect will run fetchGallery on page load
useEffect(() => {
  fetchGallery();
// Empty array will prevent infinite loops
}, [])




// ==========<RETURN>=========================================
    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        
      </div>



    ); // End return ------------------------------------------------------------



} // End App function ------------------------------------------------------------

export default App;
