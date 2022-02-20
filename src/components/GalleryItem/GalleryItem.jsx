//==========<IMPORTS>=========================================
import {useState} from 'react';
import {Card, Col, Button} from 'react-bootstrap';


// ==========<GalleryItem FUNCTION>=====================================================
function GalleryItem({data, imgId, setLikeCount}) {
    
 // ==========<STATE VARIABLES>======================================
     // * Initially declared showAnimal to be true
    const [showAnimal, setShowAnimal] = useState(true);
     // * Initially declared numOfLikes to be 0
    const [numOfLikes, setNumOfLikes] = useState(0);
    //--<End STATE VARIABLES>------------------------------

 // ==========<CONDITIONAL RENDERING FUNCTIONS>=========================================
     // * Function to change the value of showAnimal when an image is clicked
    const handleClick = () => {
        console.log('The animal is:', data.altText);
        setShowAnimal(!showAnimal);
    } // End

    const likeClickHandler = (event) => {
        // * Log to check that the correct image is being targeted
        console.log(event.target.id);
        let newLike = {
            id: event.target.id,
            count: numOfLikes + 1
        } // End
        // Update the count when the button is clicked
        setNumOfLikes(numOfLikes + 1);
        setLikeCount(newLike);
    } // End

 //--<End CONDITIONAL RENDERING FUNCTIONS>---------------------------------------------

 // ==========<RETURN>=====================================================
    return(
        <>
        {/* CONDITION RENDERING */}
            {showAnimal ?
                // * ANIMAL IS SHOWING
                <Card className="img-card">
                    <Col className='card'>
                        <div className='displaysImg' onClick={handleClick}>
                            <img className='animalImage' src={data.path} className="img-fluid" alt={data.altText}/>
                        </div>
                        
                        
                        {/* BUTTON */}
                        <Button id={imgId} onClick={likeClickHandler}>Like</Button>
                        
                        <div className="title-likes">
                            {/* IMAGE NAME */}
                            <p className="card-title">{data.altText}</p>

                            {/* LIKE COUNT */}
                            <p className="likeCount">Liked by {numOfLikes}</p>
                        </div>
                    </Col>
                </Card> :
                // * DESCRIPTION IS SHOWING
                <Card className="desc-card">
                    <Col className='card'>
                        <div className="displaysDesc" onClick={handleClick}>
                            {/* <p className='animalName'>{data.altText}</p> */}
                            <p className='animalDescription'>{data.description}</p>
                        </div>

                        
                        {/* BUTTON */}
                        <Button id={imgId} onClick={likeClickHandler}>Like</Button>
                       

                        <div className="title-likes">
                            {/* IMAGE NAME */}
                            <p className="card-title">{data.altText}</p>

                            {/* LIKE COUNT */}
                            <p className='likeCount'>Liked by {numOfLikes}</p>
                        </div>
                    </Col>
                </Card>
            }
        </>

    ); //--<End RETURN>-----------------------------------------------

} //--<End GalleryItem FUNCTION>--------------------------------------------------------------


export default GalleryItem