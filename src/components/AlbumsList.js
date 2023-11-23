import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
// import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsLisetItems from './AlbumsLisetItems';
function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  
  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsLisetItems key={album.id} album={album} />
    });
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-2 items-center'>
       <h3 className='text-lg font-bold '> Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
