
import './App.css';
import Row from './Row';
import request from './Request';
import Banner from './Banner'
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
     <Nav/>
      <Banner/>

      <h1>Netflix</h1>
      <Row title="TopRated" 
      fetchUrl={request.fetchTopRated}
      isLargeRow={true}
      />
      <Row title="ActionMovies" fetchUrl={request. fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={request. fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={request. fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={request. fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request. fetchDocumentaries}/>

    </div>
  );
} 

export default App;
