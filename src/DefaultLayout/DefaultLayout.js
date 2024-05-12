import React, { useState } from 'react'
import Navbar from './Navbar';
import Main from './Main';
import { SearchContext } from '../Utils/searchContext';
import Footer from './Footer/Footer';


const DefaultLayout = () => {
  const [search, setSearch] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <>
        <SearchContext.Provider
        value={{ search, setSearch, searchClicked, setSearchClicked }}
      >
        <Navbar />
        <Main />
        <Footer />
      </SearchContext.Provider>
    </>
  )
}

export default DefaultLayout