import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizCreator from './pages/QuizCreator';
import SurveyCreator from './pages/SurveyCreator';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import './assets/css/styles.css'; // Import global styles

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/survey-creator" component={SurveyCreator} />
          <Route path="/user-profile" component={UserProfile} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
