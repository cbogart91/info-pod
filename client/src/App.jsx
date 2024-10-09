import { BrowserRouter as Router } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from '/pages/Header';
import Footer from '/pages/Footer';


function App() {

  return (
    <Router>
    <Header />
    <Outlet />
    <Footer />
    </Router>
  );
}

export default App;
