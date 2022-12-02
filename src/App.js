import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Insert from './components/Insert';


function App() {

  const [blog, setBlog] = useState((localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")) : []));

  useEffect(() => {
      localStorage.setItem("data",JSON.stringify(blog))
  }, [blog])
  return (
    <>
      <Header/>
      <div className='flex'>
        <Insert setBlog={setBlog} blog={blog}/>
        <Content data={blog}/>
      </div>
    </>
  );
}

export default App;
