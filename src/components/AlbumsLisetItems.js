import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
function AlbumsLisetItems({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleRemoveAlbum = ()=>{
    removeAlbum(album)
  }
  const header = (
    <div>
      <Button loading={results.isLoading} onClick={handleRemoveAlbum} >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsLisetItems;
