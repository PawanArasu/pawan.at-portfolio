import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/FullBlog';
import Home from './pages/Home/Home';
import BlogList from './pages/Blog/BlogList';
import data from './pages/Blog/data.json'
import ErrorPage from './pages/ErrorPage'
import {useState , useEffect} from 'react'
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    } , 2000)

  },[])

  const override = css`
  display: block;
  margin: 20% auto;
  
 
`;

  return (

    

    <div className="App">

      { loading ?  

   <HashLoader
 css={override} size={150} color={"#FF6B6B"} loading={loading} className="loader"  speedMultiplier={1.5} />


      :

      <Router>


        <Navbar />  

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<BlogList data={data}/>} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />

  </Router>   

      }
 
    </div>
  
  );
}

export default App;
