import VideoCard from "../components/Cards/VideoCard";
import { useHistory } from "../context/history-context";

const HistoryPage = () => {
  const { history } = useHistory();
  return (
    <>
      <div className='videos'>
        <div className='h3 list-title'>History</div>
        <div className='listing-grid'>
          {history.map((vid) => (
            <VideoCard key={vid._id} video={vid} />
          ))}
        </div>
      </div>
    </>
  );
};
export default HistoryPage;
