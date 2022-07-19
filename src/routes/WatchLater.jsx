import WatchlaterCard from "../components/Cards/WatchlaterCard";
import { useWatchLater } from "../context/watchlater-context";

const WatchLater = () => {
  const { watchlater, removeFromWatchlater } = useWatchLater();

  return (
    <>
      <div className='videos'>
        <div className='h3 list-title'>WatchLater</div>
        <div className='listing-grid'>
          {watchlater.map((vid) => (
            <WatchlaterCard
              key={vid._id}
              video={vid}
              removeFromWatchlater={removeFromWatchlater}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchLater;
