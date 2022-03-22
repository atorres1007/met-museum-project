import { useState, useEffect } from "react";

export default function MusicalInstrumentsPage () {
//Variables
  const [artData, setArtData] = useState([]);
  const [allObjectIDs, setAllObjectIDs] = useState([]);
  const [randomObjectID, setRandomObjectID] = useState();
  const artworkPhoto = artData.primaryImageSmall;
  const artworkDateCreated = artData.objectDate;
  const artistWikiURL = artData.artistWikidata_URL;
  const artworkWikiURL = artData.objectWikidata_URL;
  const artworkMetURL = artData.objectURL;
  var artistName = artData.artistDisplayName
  var artworkTitle = artData.title;
  var artworkCulture = artData.culture;

//Conditional Rendering for Variables
  if (artData.artistDisplayName === "" 
    || artData.artistDisplayName === "Unidentified artist") 
    {artistName = "N/A";};

  if (artData.artworkTitle === "") {
    artworkTitle = "N/A";
  };
  if (artData.culture === "") {
    artworkCulture = "N/A";
  };

//Asyncronous Fetch Statements

  //Fetch All Artwork IDs in Specific Department 
  const getObjectIDs = async () => {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=18&q=a");
    const data = await response.json();
    const objectIDs = data.objectIDs
    setAllObjectIDs(objectIDs)
  };

  //Select a Random Artwork ID from All Artwork IDs
  const getRandomObjectID = async () => { 
    const randomNumberGenerator = allObjectIDs[Math.floor(Math.random()*allObjectIDs.length)];
    setRandomObjectID(JSON.stringify(randomNumberGenerator))
  };

  //Fetch Artwork Info from Random Artwork ID and Skip Artwork that doesn't have Image URL
  const getData = async () => {
    const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`)
    const data = await response.json(); 
    if (data.primaryImageSmall === "") {
      getObjectIDs();
    } else {
    setArtData(data); }
   };

//UseEffect Hooks to Allow Fetch Functions to Run Properly

  //Fetch All Artwork IDs Once on Render
  useEffect(() => {
    getObjectIDs() 
  },[]);

  //Select Random Artwork ID after All Artwork IDS have been Fetched and each time User Requests a New Image
  useEffect(() => {
    getRandomObjectID()
  }, [allObjectIDs]);

  //Fetch Artwork Data each time Random Artwork ID has been Fetched
  useEffect(() => {
    getData()
  }, [randomObjectID]);
  
    return(
        <div>
            <div className="department-title">
              <h1><a href="https://www.metmuseum.org/about-the-met/collection-areas/musical-instruments" target="_blank">
              Musical Instruments</a></h1>
            </div>

            <div className="artist">
              {artistWikiURL != "" ? (<h2>Artist: <br/> 
              <a href={artistWikiURL} target="_blank"><span>{artistName}</span></a></h2>)
              : (<h2>Artist: <br/> <span>{artistName}</span></h2>)}
            </div>

            <hr/>

            <div className="artwork-title">
              {artworkWikiURL != "" & artworkMetURL != "" ? 
                (<h3>Artwork Title: <a href={artworkWikiURL}
                target="_blank"> WIKI</a> - <a href={artworkMetURL} 
                target="_blank">MET</a><br/><span>{artworkTitle}</span></h3>)
              :artworkWikiURL != "" & artworkMetURL === "" ? 
                (<h3>Artwork Title: <a href={artworkWikiURL}
                target="_blank">WIKI</a><br/><span>{artworkTitle}</span></h3>)
              :artworkWikiURL === "" & artworkMetURL != "" ?
                (<h3>Artwork Title: <a href={artworkMetURL} 
                target="_blank">MET</a><br/><span>{artworkTitle}</span></h3>)            
              :(<h3>Artwork Title: <br/><span>{artworkTitle}</span></h3>)}
            </div>
            <hr/>
            <div className="artwork-creation-and-culture">
            <div className="artwork-creation">
              <h3>Approximate Date Created: <br />
              <span>{artworkDateCreated}</span></h3>
            </div>
            <hr style={{transform: "rotate(90deg)", height: "2px", width: "2vw"}}/>
            <div className="artwork-culture">
              <h4>Culture: <br/>
              <span>{artworkCulture}</span></h4>
            </div>
            </div>

            <div className="new-image-button">
              <button onClick={() => getRandomObjectID()}>Get New Image</button>
            </div>

            <div className="photo-container">
              <img className="photo" src={artworkPhoto}/>
            </div>
        </div>
    );

}