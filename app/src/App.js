import './App.css';
import SearchPlayer from './components/searchForm';
import PlayerCard from './components/playerCard';


function App() {
  return (
    <div className="App">
      <h1>NBA Player Season Averages</h1> 
      <SearchPlayer />
      <PlayerCard />
    </div>
  );
}

export default App;
