import { useEffect, useRef, useState } from "react"
import s from "./Home.module.css"
import CurrentTasks from "./CurrentTasks/CurrentTasks"
import SubjectsShortcut from "./SubjectsShortcut/SubjectsShortcut"
import subjectsJson from "../../../public/Subjects/subjects.json"


const Home = () => {
  // Objects

  // Arrays
  const [subjects, setSubjects] = useState(subjectsJson.subjects)

  const [activities, setActivities] = useState([
    {
      desc: "CSS: Pseudocode - 1: Circle's Perimeter"
    },
    {
      desc: "CSS: Flowchart - 1: Create flowchart of Circle's Perimeter(Canva)"
    },
    {
      desc: "CSS: Simple Activity: C++ Coding"
    }
  ])
  const [assignments, setAssignments] = useState([
    {
      desc: "21ST CENTURY LITERATURE: Venn Diagram"
    },
    {
      desc: "CSS: Pseudocode - 1: Circle's Area"
    },
    {
      desc: "CSS: Flowchart - 1: Create flowchart of Circle's Area(Canva)"
    },
    {
      desc: "CSS: Simple Activity: C++ Coding"
    },
    {
      desc: "CSS: DLA 3: C++ Lessons"
    }
  ])
  const [exams, setExams] = useState([
    {
      desc: "UCSP: SOCIETAL ISSUES"
    }
  ])


  return (
    <>
      <>
        <div className={s.homeWrapper}>
          <CurrentTasks
            activities={activities}
            assignments={assignments}
            exams={exams} />

          <SubjectsShortcut
            subjects={subjects} />
        </div>
      </>
    </>
  )
}

export default Home