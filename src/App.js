import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'; 

export default class App extends Component {
  pageSize = 8;
  apiKey = process.env.REACT_APP_NEWS_API; // Fixed API key

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div className="container my-3">
            <Routes>
              <Route
                exact
                element={
                  <News
                    key="general"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="general"
                  />
                }
                path="/"
              />
              <Route
                exact
                element={
                  <News
                    key="business"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="business"
                  />
                }
                path="/business"
              />
              <Route
                exact
                element={
                  <News
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="entertainment"
                  />
                }
                path="/entertainment"
              />
              <Route
                exact
                element={
                  <News
                    key="general"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="general"
                  />
                }
                path="/general"
              />
              <Route
                exact
                element={
                  <News
                    key="health"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="health"
                  />
                }
                path="/health"
              />
              <Route
                exact
                element={
                  <News
                    key="science"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="science"
                  />
                }
                path="/science"
              />
              <Route
                exact
                element={
                  <News
                    key="sports"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="sports"
                  />
                }
                path="/sports"
              />
              <Route
                exact
                element={
                  <News
                    key="technology"
                    pageSize={this.pageSize}
                    country="us"
                    apiKey={this.apiKey}
                    category="technology"
                  />
                }
                path="/technology"
              />
            </Routes>
          </div>
          <Footer /> {/* Add footer for better layout */}
        </Router>
      </div>
    );
  }
}
