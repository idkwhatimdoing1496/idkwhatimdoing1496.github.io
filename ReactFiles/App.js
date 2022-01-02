import { BrowserRouter } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import {Route, Routes} from "react-router";
import MainPage from "./Component/MainPage";
import SeasonsPage from "./Component/SeasonsPage";
import PhotosPage from "./Component/PhotosPage";
import Season2223 from "./Component/Sections/SeasonsItems/Seasons/Season 21/Season2223";
import preloader from './Component/Preloader/image/preload.gif'
import React from "react";

const App = () => {
    return (
        <BrowserRouter>
            <div id='preloader'>
                <img src={preloader} alt="preloader"/>
            </div>
            <Header/>
            <Routes>
                <Route path="/HomePage" element={<MainPage/> }/>
                <Route path="/SeasonPage" element={<SeasonsPage/> }/>
                <Route path="/PhotosPage" element={<PhotosPage/> }/>
                <Route path="/*" element={<MainPage/> }/>
                <Route path="/SeasonPage/Season21-22" element={<Season2223/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;