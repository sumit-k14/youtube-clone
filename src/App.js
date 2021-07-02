import React from 'react'
import Header from './Header'
import HomeSidebar from './HomeSidebar'
import HomeRecommendedVideos from './HomeRecommendedVideos'
import HomeSearchPage from './HomeSearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
      
        <Switch>
          <Route path="/search/:searchTerm" >
          <div className="app_page">
              <HomeSidebar />
              <HomeSearchPage />
           </div>
          </Route>
        </Switch>

          <Route path="/" >
             <div className="app_page">
              <HomeSidebar />
              <HomeRecommendedVideos />
             </div>
          </Route>
      </Router>
      
    </div>
  );
}

export default App;