import HistoryCard from "../components/Cards/HistoryCard";
import { useHistory } from "../context/history-context";
import "../styles/history.css";

const HistoryPage = () => {
  const { history, clearHistory, removeVideoFromHistory } = useHistory();
  return (
    <>
      <div className='history videos'>
        <div className='history-head'>
          <h3 className='h3 list-title'>History</h3>
          <button
            className='btn'
            onClick={() => {
              clearHistory();
            }}>
            Clear
          </button>
        </div>
        <div className='listing-grid'>
          {history
            .slice(0)
            .reverse()
            .map((vid) => (
              <HistoryCard
                key={vid._id}
                video={vid}
                removeVideoFromHistory={removeVideoFromHistory}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default HistoryPage;
