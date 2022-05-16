import { BrowserRouter as Router , Route, Routes , Link } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/FullBlog';
import Home from './pages/Home/Home';
import BlogList from './pages/Blog/BlogList';
import data from './pages/Blog/data.json'

function App() {
  return (
<Router>
    <div className="App">

    <div className='navbar'>

    <h2 className='port-nav-logo'><Link to='/' className='port-nav-logo'>Pawan Arasu .T 😎</Link></h2>    



    <div className='port-links'>

      <Link to="/" className='port-nav-items home' >🏡</Link>
      <Link to="/blog" className='port-nav-items blogs' >📃</Link>
      <Link to="/about" className='port-nav-items about' >☎️</Link>
           

    </div>

      </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<BlogList data={data}/>} />
        <Route path='/blogs/:id' element={<Blog />} />
      </Routes>
    </div>
  </Router>   
  );
}

export default App;
