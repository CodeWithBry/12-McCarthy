import { useEffect, useRef, useState } from "react"
import s from "./SubjectsShortcut.module.css"

const SubjectsShortcut = ({ subjects }) => {
  const subjectsRef = useRef()

  function slideElement(bool) {
    const e = subjectsRef.current
    const scrollAmount = 256


    bool == 1 ?  e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  return (
    <div className={s.subjectsWrapper}  >
      <h2>
        <span><i className="fa fa-book"></i>Subject Shortcuts</span>
        <div className={s.buttonWrapper}>
          <button onClick={() => { slideElement(0) }}>
            <i className="	fa fa-angle-left"></i>
          </button>
          <button onClick={() => { slideElement(1) }}>
            <i className="	fa fa-angle-right"></i>
          </button>
        </div>
      </h2>
      <div className={s.subjects} ref={subjectsRef}>
        {
          subjects?.map((sub) => {
            return (
              <div className={`${s.subjectBox}`} id={sub.subjectNameAbbreviation} key={sub.subjectName} style={{ borderLeft: `${sub.color} .5rem solid` }}>
                <div className={s.subPicBox}>
                  <img src={sub.imgPath} title={sub.subjectName} />
                </div>

                <div className={s.contentBox}>
                  <span>{sub.subjectTeacher} </span>
                  <span>Semester {sub.subjectSemester}</span>
                </div>
                <button>
                  Go To {sub.subjectNameAbbreviation}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SubjectsShortcut