//==========<IMPORTS>=========================================
import GalleryItem from "../GalleryItem/GalleryItem";

//--<End IMPORTS>-------------------------------------


// ==========<GalleryList FUNCTION>=====================================================
function GalleryList ({galleryList}) {


 // ==========<RETURN>=====================================================
    return(
        <>
            <div>
                <ul>
                    {galleryList.map(imgObject => (
                        <GalleryItem
                            key={imgObject.id}
                            imgId={imgObject.id}
                            data={imgObject}
                        />
                    ))}
                </ul>
            </div>
        </>
    ) //--<End RETURN>---------------------------------------------

} //--<End  GalleryList FUNCTION>---------------------------------------------

export default GalleryList;