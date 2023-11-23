import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
    const [removePhoto] = useRemovePhotoMutation()
    const hanldeClick = ()=>{
        removePhoto(photo)
    }
  return (
    <div onClick={hanldeClick} className="m-2 relative cursor-pointer">
      <img src={photo.url} alt="random photos" className="w-20 h-20" />
      <div className="flex absolute inset-0 justify-center items-center opacity-0 hover:bg-gray-200 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
