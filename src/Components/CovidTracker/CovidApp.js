import './CovidApp.css';
// import { Card, CardContent, FormControl, MenuItem, Select } from '@mui/material';
import { Card, CardContent, FormControl, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import CovidMap from "./CovidMap";
import Table from "./Table";
import { sortData, prettyPrintStat } from './util';
import numeral from "numeral";

import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide");
  const [countryInfo, setCountryInfo] = useState({});
  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovers, setRecovers] = useState();
  const [todayCase, setTodayCase] = useState();
  const [todayDeath, setTodayDeaths] = useState();
  const [todayRecover, setTodayRecovers] = useState();

  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");


  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCases(data.cases);
        setDeaths(data.deaths);
        setRecovers(data.recovered);
        setTodayCase(data.todayCases);
        setTodayDeaths(data.todayDeaths);
        setTodayRecovers(data.todayRecovered);

      })
  }, [])


  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United states, united kingdom
            value: country.countryInfo.iso2 // UK, USA,FR
          }))

          const sortedData = sortData(data);
          setTableData(sortedData)
          setMapCountries(data);
          setCountries(countries)

        })
    }
    getCountriesData();
  }, [])


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode === "WorldWide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCases(data.cases);
        setDeaths(data.deaths);
        setRecovers(data.recovered);
        setTodayCase(data.todayCases);
        setTodayDeaths(data.todayDeaths);
        setTodayRecovers(data.todayRecovered);


        setCountry(countryCode);
        // setCountryInfo(countryInfo);
        // console.log("dataaaaaa", data);
        // console.log(countryInfo);
        // console.log(countryInfo);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        // console.log("centerrrrr ", mapCenter);
        // console.log(data.countryInfo.lat)
        // console.log(data.countryInfo.long)

        setMapZoom(4)
      })
  }



  return (
    <div className='app'>
      <div className='app_left'>
        <div className='app_header'>
          <h1 className='HeaderName'>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant='outlined' onChange={onCountryChange} value={country}>
              <MenuItem value="WorldWide">WorldWide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }

            </Select>
          </FormControl>
        </div>


        <div className='app_stats'>
          {/* <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}></InfoBox>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}></InfoBox>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}></InfoBox> */}

          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(todayCase)}
            total={numeral(cases).format("0.0a")}
          >
          </InfoBox>
          <InfoBox onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(todayRecover)}
            total={numeral(recovers).format("0.0a")}
          >
          </InfoBox>
          <InfoBox onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={todayDeath}
            total={numeral(deaths).format("0.0a")}

          >

          </InfoBox>


        </div>

        <CovidMap casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}></CovidMap>
      </div>

      <Card className='app_right'>
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData} />

          {/* <h3>Worldwide cases</h3>
          <LineGraph></LineGraph> */}
        </CardContent>

      </Card>

    </div >
  );
}

export default App;
