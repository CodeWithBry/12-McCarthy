import { useContext, useEffect, useRef, useState } from "react"
import s from "./Navigation.module.css"
import { context } from "../App"

const Navigation = () => {
  const { user, unseenNotifs, setUnseenNotifs, setNotifs, notifs } = useContext(context)

  const searchBarRef = useRef()
  const [searchValue, setSearchValue] = useState("")

  function handleSearching() {

  }

  const handleBellClick = () => {
    const newNotif = { desc: "new police", seen: false };
    let arr = notifs
    for (let i = 0; i < 10; i++) {
      arr.push(newNotif)
    }
    setNotifs([...arr]);
  };

  useEffect(() => {
    const unseen = notifs.filter(tab => !tab.seen).length;
    console.log(unseen)
    setUnseenNotifs(unseen);
  }, [notifs]);

  return (
    <>
      <div className={s.nav}>
        <div className={s.left}>
          <img src="./icon.jpg" alt="" />
          <h1>12 - MCCARTHY</h1>
        </div>
        <div className={s.right}>
          <div className={s.searchWrapper}>
            <i className="fa fa-search"></i>
            <input type="text" id={s.searchBar} ref={searchBarRef} onKeyDown={(e) => {
              e.key == "Enter" ? handleSearching() : null
            }} placeholder="Search..." />
            <button
              onClick={() => {
                handleSearching()
              }}
              className={s.searchButton}>
              Search
            </button>
          </div>
          {
            user?.uid ?
              <>
                <button id={s.bell}
                  onClick={() => handleBellClick()}>
                  <i className="fa fa-bell-o"></i>
                  {
                    unseenNotifs.length != 0 ?
                      <span id={s.notifIcon}>{unseenNotifs <= 99 ? unseenNotifs : "99+"}</span> :
                      null
                  }
                </button>
                <button>
                  Sign Out
                </button>
              </> :
              <>
                <button>
                  Sign Up
                </button>
                <button>
                  Log In
                </button>

              </>
          }
        </div>
      </div>
    </>
  )
}

export default Navigation