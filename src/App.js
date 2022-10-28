import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />

        
      </Routes>

      <Navbar />
      <Showcase />
      



      <div style={{"height": "5000px"}}></div>
    </BrowserRouter>
  );
}

export default App;
