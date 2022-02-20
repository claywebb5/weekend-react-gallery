//==========<IMPORTS>=========================================
import {useState} from 'react';
import {Container, Row, Col, CardColumns} from 'react-bootstrap';

//--<End IMPORTS>-------------------------------------

// ==========<GalleryItem FUNCTION>=====================================================
    // * Using data and imgId as props
function GalleryItem({data, imgId}) {
    
 // ==========<STATE VARIABLES>======================================
     // * Initially declared showAnimal to be true
    const [showAnimal, setShowAnimal] = useState(true);

    //--<End STATE VARIABLES>------------------------------

 // ==========<CONDITIONAL RENDERING FUNCTIONS>=========================================
     // * Function to change the value of showAnimal when an image is clicked
    const handleClick = () => {
        console.log('The animal is:', data.altText);
        setShowAnimal(!showAnimal);
    }


 //--<End CONDITIONAL RENDERING FUNCTIONS>---------------------------------------------

     // * Console.log to see if showAnimal is switching between true/false
    console.log('The status of showAnimal is:', showAnimal);

 // ==========<RETURN>=====================================================
    return(
        <>
        {/* CONDITION RENDERING */}
            {showAnimal ?
                // * ANIMAL IS SHOWING
                <Col className='card'>
                    <div className='display' onClick={handleClick}>
                        <img className='animalImage' src={data.path} alt={data.altText}/>
                    </div>
                </Col>:
                // * DESCRIPTION IS SHOWING
                <Col className='card'>
                    <div className='display' onClick={handleClick}>
                        <p className='animalDescription'>{data.description}</p>
                    </div>
                </Col>
            }
        </>

    ); //--<End RETURN>-----------------------------------------------

} //--<End GalleryItem FUNCTION>--------------------------------------------------------------


export default GalleryItem