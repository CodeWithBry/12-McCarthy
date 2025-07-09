import { createContext, useEffect, useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import s from "./App.module.css"

import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import Subjects from './Pages/Subjects/Subjects'
import Completions from './Pages/Completions/Completions'
import Account from './Pages/Account/Account'

export const context = createContext()
function App() {
  
  // Booleans
  const [showSideBar, setShowSideBar] = useState(false)

  // Strings
  const [pathTo, setPathTo] = useState("/")


  //Objects and Arrays
  const [user, setUser] = useState({}) 
  const [notifs, setNotifs] = useState([])
  const [unseenNotifs, setUnseenNotifs] = useState(notifs.filter(tab => tab.seen == false))
  const [router, setRouter] = useState([
    { pageName: "Home", path: "/", element: <Home />, keyId: Math.random() * 1, icon: "fa fa-home", focus: true },
    { pageName: "Subjects", path: "/Subjects", element: <Subjects />, keyId: Math.random() * 1, icon: "fa fa-book", focus: false },
    { pageName: "Completions", path: "/Completions", element: <Completions />, keyId: Math.random() * 1, icon: "	fa fa-check-square-o", focus: false },
    { pageName: "Account", path: "/Account", element: <Account />, keyId: Math.random() * 1, icon: "	fa fa-user", focus: false },
  ])



  const variables = {
    // Boolean
    showSideBar, setShowSideBar,

    // Strings
    pathTo, setPathTo,

    // Numerical Values


    // Objects and Arrays
    router, setRouter,
    user, setUser,
    notifs, setNotifs,
    unseenNotifs, setUnseenNotifs,
  }

  

  return (
    <>
      <HashRouter>
        <context.Provider value={variables}>
          <Navigation />
          <div className={showSideBar ? `${s.resize} ${s.pageContent} ` : s.pageContent}>
            <Sidebar />
            <Routes>
              {
                router?.map((tab) => {
                  if (tab.path == pathTo) {
                    console.log(tab.path)
                    return <Route path={tab.path} element={tab.element} />
                  }
                })
              }
            </Routes>
          </div>
        </context.Provider>
      </HashRouter>

    </>
  )
}

export default App
