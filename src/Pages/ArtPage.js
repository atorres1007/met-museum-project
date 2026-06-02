import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtPage (props) {

//Variables
  const [artData, setArtData] = useState([]);
  const [allObjectIds, setAllObjectIds] = useState([]);
  const [randomObjectId, setRandomObjectId] = useState()
  const artworkPhoto = artData.primaryImageSmall;
  const artworkDateCreated = artData.objectDate;
  const artistWikiURL = artData.artistWikidata_URL;
  const artworkWikiURL = artData.objectWikidata_URL;
  const artworkMetURL = artData.objectURL;
  var artistName = artData.artistDisplayName
  var artworkTitle = artData.title;
  var artworkCulture = artData.culture;

  // department specific info based on URL parameters
  let departmentName = useParams();
  const departmentData = props.departmentData
  let matchingDepartment = departmentData.filter((department) => department.displayName === departmentName.departmentName)
  let matchingDepartmentData = matchingDepartment[0];

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

// //Asyncronous Fetch Statements

  //Fetch All Artwork IDs in Specific Department 
  const getObjectIds = async () => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${matchingDepartmentData.departmentId}`);
    const data = await response.json();
    const objectIds = data.objectIDs
    setAllObjectIds(objectIds)
  };

  //get random id from list of available objects
  const getRandomObjectId = () => {
    const randomId = allObjectIds[Math.floor(Math.random() * allObjectIds.length)];
    setRandomObjectId(randomId);
  }

  //Fetch Artwork Info from Random Artwork ID
  const getData = async () => {
    getRandomObjectId();
    const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`)
    const data = await response.json(); 
    setArtData(data)
  }

// //UseEffect Hooks to Allow Fetch Functions to Run Properly

  //Fetch All Artwork IDs Once on Render
  useEffect(() => {
    getObjectIds(); 
  },[departmentName]);

  //Fetch Artwork Data each time Random Artwork ID has been Fetched
  useEffect(() => {
    getData()
  }, [allObjectIds]);
  
    return(
        <div>
            <div className="department-title">
              <h1>{matchingDepartmentData.displayName}</h1>
            </div>

            <div className="artist">
              {artistWikiURL !== "" ? (<h2>Artist: <br/> 
              <a href={artistWikiURL} target="_blank" rel="noreferrer"><span>{artistName}</span></a></h2>)
              : (<h2>Artist: <br/> <span>{artistName}</span></h2>)}
            </div>
            <hr/>

            <div className="artwork-title">
              {artworkWikiURL !== "" & artworkMetURL !== "" ? 
                (<h3>Artwork Title: <a href={artworkWikiURL}
                target="_blank" rel="noreferrer"> WIKI</a> - <a href={artworkMetURL} 
                target="_blank" rel="noreferrer">MET</a><br/><span>{artworkTitle}</span></h3>)
              :artworkWikiURL !== "" & artworkMetURL === "" ? 
                (<h3>Artwork Title: <a href={artworkWikiURL}
                target="_blank" rel="noreferrer">WIKI</a><br/><span>{artworkTitle}</span></h3>)
              :artworkWikiURL === "" & artworkMetURL !== "" ?
                (<h3>Artwork Title: <a href={artworkMetURL} 
                target="_blank" rel="noreferrer">MET</a><br/><span>{artworkTitle}</span></h3>)            
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
              <button onClick={() => getData()}>Get New Image</button>
            </div>

            <div className="photo-container">
              <img className="photo" src={artworkPhoto} alt={artworkTitle}/>
            </div>
        </div>
    );

}