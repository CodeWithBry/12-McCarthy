import s from "./Sidebar.module.css"
import { context } from "../App"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
  const { router, setRouter, setPathTo, showSideBar, setShowSideBar } = useContext(context)

  const navigate = useNavigate()

  return (
    <div className={showSideBar ? `${s.sideBarWrapper} ${s.showSidebar}` : `${s.hideSidebar} ${s.sideBarWrapper}`}>
      <ul className={s.linkWrapper}>
        <div className={s.simplifySidebarWrapper}>
          <button 
            className={s.simplifySidebar}
            onClick={()=>{
              showSideBar ? setShowSideBar(false) : setShowSideBar(true)
            }}>
            <i className={showSideBar ? `fa fa-chevron-left` : `fa fa-chevron-right`}></i>
            <p>{showSideBar ? "Hide" : null}</p>
          </button>
        </div>
        {router?.map((tab) => {
          return (
            <li key={tab.keyId} className={tab.focus ? `${s.active} ${s.link}` : s.link} title={tab.pageName}
              onClick={()=>{
                setRouter(prev => prev.map((t)=>{
                  return tab.pageName == t.pageName ? {...t, focus: true} : {...t, focus: false}
                }))
                setPathTo(tab.path)
                navigate(tab.path)
              }}>
              <i className={tab.icon}></i>
              <p>{showSideBar ? tab.pageName : null}</p>
              <span className={tab.focus ? `${s.active} ${s.line}` : s.line}></span>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default Sidebar