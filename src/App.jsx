import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import { Provider } from './theme/theme'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import MenuBar from './components/menubar';
import menuLogo from "/menu.svg"
import closeLogo from "/cross.svg"
import { set } from 'react-hook-form';


function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return "light";
  });
  const darkTheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
    if (theme == "dark")
      document.body.style.backgroundColor = "black"
    else
      document.body.style.backgroundColor = "white"
  }, [theme])
  const [isMenuBar, setIsMenuBar] = useState(false);

  const showMenuBar = () => {
    if (isMenuBar === false) {
      document.querySelector("#blurback").classList.remove("flex", "hidden");
      document.querySelector("#phonemenubar").classList.remove("flex", "hidden");
      document.querySelector("#phonemenubar").classList.add("flex");
      document.querySelector("#blurback").classList.add("flex");
      document.querySelector("#menubtn").src = closeLogo
      setIsMenuBar(true)
    }
    else {
      document.querySelector("#blurback").classList.remove("flex", "hidden");
      document.querySelector("#phonemenubar").classList.remove("flex", "hidden");
      document.querySelector("#phonemenubar").classList.add("hidden");
      document.querySelector("#blurback").classList.add("hidden");
      document.querySelector("#menubtn").src = menuLogo
      setIsMenuBar(false)
    }
  }

  // localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Provider value={{ isMenuBar, showMenuBar, theme, darkTheme, lightTheme }}>
      <Header />
      <MenuBar />
      <Outlet />
      <Footer />

    </Provider>
  )
}

export default App
