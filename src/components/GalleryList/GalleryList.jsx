//==========<IMPORTS>=========================================
import GalleryItem from "../GalleryItem/GalleryItem";
import {Container, Row} from 'react-bootstrap';


// ==========<GalleryList FUNCTION>=====================================================
function GalleryList ({galleryList, addLike}) {


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
                            setLikeCount={addLike}
                        />
                    ))}
                </Row>
            </Container>
        </>
    ) //--<End RETURN>---------------------------------------------

} //--<End  GalleryList FUNCTION>---------------------------------------------

export default GalleryList;