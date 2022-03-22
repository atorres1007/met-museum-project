import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Pages/Navbar';
import Home from './Pages/HomePage';
import AfricanArtPage from './Pages/AfricanArtPage';
import AmericanWingPage from './Pages/AmericanWingPage';
import AncientAmericanArtPage from './Pages/AncientAmericanArtPage';
import AncientNearEasterArtPage from './Pages/AncientNearEasternArtPage';
import ArmsAndArmorPage from './Pages/ArmsAndArmorPage';
import AsianArtPage from './Pages/AsianArtPage';
import TheCloistersPage from './Pages/TheCloistersPage';
import CostumeInstitutePage from './Pages/CostumeInstitutePage';
import DrawingsAndPrintsPage from './Pages/DrawingsAndPrintsPage';
import EgyptianArtPage from './Pages/EgyptianArtPage';
import EuropeanPaintingsPage from './Pages/EuropeanPaintingsPage';
import EuropeanSculptureAndDecorativeArtPage from './Pages/EuropeanSculptureAndDecorativeArtPage';
import GreekAndRomanArtPage from './Pages/GreekAndRomanArtPage';
import IslamicArtPage from './Pages/IslamicArtPage';
import RobertLehmanCollectionPage from './Pages/RobertLehmanCollectionPage';
import MedievalArtsPage from './Pages/MedievalArtPage';
import ModernAndContemporaryArtPage from './Pages/ModernAndContemporaryArtPage';
import MusicalInstrumentsPage from './Pages/MusicalInstrumentsPage';
import PhotographsPage from "./Pages/PhotographsPage";

export default function App () {
  return (
    <div>
      <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/AfricanArtPage" element={<AfricanArtPage />}/>
            <Route path="/AmericanWingPage" element={<AmericanWingPage />}/>
            <Route path="/AncientNearEasternArtPage" element={<AncientNearEasterArtPage />}/>
            <Route path="/ArmsAndArmorPage" element={<ArmsAndArmorPage />}/>
            <Route path="/AncientAmericanArtPage" element={<AncientAmericanArtPage/>}/>
            <Route path="/AsianArtPage" element={<AsianArtPage />}/>
            <Route path="/TheCloistersPage" element={<TheCloistersPage />}/>
            <Route path="/CostumeInstitutePage" element={<CostumeInstitutePage />}/>
            <Route path="/DrawingsAndPrintsPage" element={<DrawingsAndPrintsPage />}/>
            <Route path="/EgyptianArtPage" element={<EgyptianArtPage />}/>
            <Route path="/EuropeanPaintingsPage" element={<EuropeanPaintingsPage />}/>
            <Route path="/EuropeanSculptureAndDecorativeArtPage" element={<EuropeanSculptureAndDecorativeArtPage />}/>
            <Route path="/GreekAndRomanArtPage" element={<GreekAndRomanArtPage />}/>
            <Route path="/IslamicArtPage" element={<IslamicArtPage />}/>
            <Route path="/RobertLehmanCollectionPage" element={<RobertLehmanCollectionPage />}/>
            <Route path="/MedievalArtPage" element={<MedievalArtsPage />}/>
            <Route path="/ModernAndContemporaryArtPage" element={<ModernAndContemporaryArtPage />}/>
            <Route path="/MusicalInstrumentsPage" element={<MusicalInstrumentsPage />}/>
            <Route path="/PhotographsPage" element={<PhotographsPage />}/>

          </Routes>
        </div>
    </div>
  )
}