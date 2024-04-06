import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Utils/searchContext';

const Navbar = () => {
  const {search, setSearch, setSearchClicked} = useContext(SearchContext);
  const handleSubmit = (e)=> {
    e.preventDefault();
    setSearchClicked(true);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Link</Link>
          </li>
         
        </ul>
       <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
          <button className="btn btn-outline-success" onClick={(e)=>handleSubmit(e)}>Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar