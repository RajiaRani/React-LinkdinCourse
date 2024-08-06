
import './App.css';
import HomePage from "./pages/HomePage.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListpage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
       <NavBar/>
    
       <div>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/articles' element={ <ArticlesListPage/>}/>
        <Route path='/articles/:articleId' element={<ArticlePage/>} />
        <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
       </div>
       
      

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
