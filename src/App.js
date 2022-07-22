import React, {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/global';
import CountryStats from './components/countryStats';
import Search from './components/search';

function App() {

  const [globalStats,setglobalStats] = useState('');
  const [countrySt,setcountrySt] = useState("");

  useEffect(()=>{

    let url = "https://api.covid19api.com/summary";

    fetch (url).then((response) =>response.json().then((data)=>{
    console.log(data);
      setglobalStats(data.Global);

      setcountrySt(data.Countries);
    }))
  },[])

  const searchCountry = ((text)=>{

    let value = text.toLowerCase();

    let result = [];

    result = countrySt.filter((countries)=>{
      return countries.Country.toLowerCase().indexOf(value) !==-1
    });
    setcountrySt(result);
  })
  return (
    <div className="App">
      <GlobalStats global ={globalStats}/>
      <Search search={searchCountry}/>
      <CountryStats countries={countrySt}/>
    </div>
  );
}

export default App;
