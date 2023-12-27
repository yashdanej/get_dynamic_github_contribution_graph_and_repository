import './App.css';
import { retrieveContributionData } from './components/api';
import { useEffect, useState } from 'react';
import RechartGithub from './components/RechartGithub';
import Repository from './components/Repository';

function App() {
  const [searchName, setSearchName] = useState("");
  const [repositoryData, setRepositoryData] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const handleSearch = (searchName) => {
    if(searchName === ""){
      alert('Enter text to search');
      return;
    }
    const searchArray = searchName.split("/");
    console.log(searchArray);
    if(searchArray.length===1){
      retrieveContributionData(searchArray[0], setApiResponse, setRepositoryData)
    }else{
      retrieveContributionData(searchArray[0], setApiResponse, setRepositoryData, searchArray[1])
    }
  }
  
  return (
    <div className='app'>
      <div className='SearchArea'>
        <p style={{textAlign: 'center'}}>Write in this format: <b>username/repository</b></p>
        <input type="text" name='search' value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='username/repository' />
        <button onClick={() => handleSearch(searchName)}>Search</button>
      </div>
      {
        apiResponse!=null &&
        <>
          <h1>Total contribution: {apiResponse?.contributionsCollection?.contributionCalendar?.totalContributions}</h1>
          <RechartGithub apiResponse={apiResponse?.contributionsCollection?.contributionCalendar} />
        </>
      }
      {
        repositoryData!=null &&
        <>
          <h1>Repository</h1>
          <Repository repositoryData={repositoryData} />
        </>
      }
    </div>
  );
}

export default App;
