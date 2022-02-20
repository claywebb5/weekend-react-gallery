//==========<IMPORTS>=========================================
import GalleryItem from "../GalleryItem/GalleryItem";
import {Container, Row} from 'react-bootstrap';

//--<End IMPORTS>-------------------------------------


// ==========<GalleryList FUNCTION>=====================================================
function GalleryList ({galleryList}) {


 // ==========<RETURN>=====================================================
    return(
        <>
            <Container>
                <Row>
                    {galleryList.map(imgObject => (
                        <GalleryItem
                            key={imgObject.id}
                            imgId={imgObject.id}
                            data={imgObject}
                        />
                    ))}
                </Row>
            </Container>
        </>
    ) //--<End RETURN>---------------------------------------------

} //--<End  GalleryList FUNCTION>---------------------------------------------

export default GalleryList;