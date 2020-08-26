import React from 'react';
import './App.css';
var searchInput = 'search_item';
const google = window.google

document.addEventListener("DOMContentLoaded", function(){ 
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
    });
});
function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="top-container">
            <div className="top-flex">
                <div className="logo flex-child">
                    <img className="image" src={require('./assets/img/logo.png')} alt="logo"/>
                    <span className="text"> Remote Roofing</span>
                </div>
                <div className="phone flex-child">
                    <img className="image-1" src={require('./assets/img/telephone.png')} alt="phone"/>
                    <a href="tel:8004017716"><span className ="text"> +1 (800) 401-7716</span> </a>
                </div>
            </div>
            <div className="nav">
                <a href="#home" className="active">Home</a>
                <a href="#news">FAQ </a>
                <a href="#contact">Services</a>
              </div>
            <div className="middle-content">
                <div>
                    <h1 className="subheading">
                        Roof inspections made remote and easy
                    </h1>
                    <h2 className="subtitle">
                        Get your roof inspected remotely and connect with our trusted roofers
                    </h2>
                    <form className="search-form" id ="address">
                        <div className="searchContainer">
                            <i className="searchIcon"></i>
                            <input id ="search_item" className="searchBox" type="text" name="field" placeholder="Enter Your Address" ></input>
                            <input type="submit" value="Get Inspection" className="searchButton"></input>
                        </div>
                    </form> 
                    
        </div>
    </div>
</div>
    </div>
    <div className="bottom-container">
        <div className="features-container">
            <div className="feature-flex">
                <div>
                    <img className ="image" src={require('./assets/img/inspection.png')} alt="magnify-glass"/>
                    <span className="text-1"> Free Inspection</span>
                </div>
            </div>
            <div className="feature-flex">
                <div>
                    <img className ="image" src={require('./assets/img/claim.png')} alt="claim"/>
                    <span className="text-1"> File a claim</span>
                </div>
            </div>
            <div className="feature-flex">
                <div>
                    <img className ="image" src={require('./assets/img/tool.png')} alt="tools"/>
                    <span className="text-1"> Replace or Repair a roof</span>
                </div>
            </div>
        </div>
    </div>
    </div>

  );
}

export default App;
