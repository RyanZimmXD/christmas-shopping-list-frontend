import './App.css';
import { BrowserRouter as Router, Routes ,   Route} from 'react-router-dom';

import PersonalList from './pages/personal-list';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/list/:id" element={<PersonalList />}/>
      </Routes>
    </Router>
  );
};

export default App;
