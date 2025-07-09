import s from "./CurrentTasks.module.css"


const CurrentTasks = ({activities, assignments, exams}) => {
    return (
        <div className={s.currentWrapper} >
            <h2> <i className="	fa fa-pencil"></i> Current Tasks</h2>
            <div className={s.currentBox}>
                {
                    activities.length != 0 ?
                        <div className={s.curActBox}>
                            <h3>
                                Current Activities
                            </h3>
                            <ul className={s.wrapper}>
                                {activities.map((act) => {
                                    return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                                })}
                            </ul>
                        </div> :
                        null
                }


                {
                    assignments.length != 0 ?
                        <div className={s.curAssBox}>
                            <h3>
                                Current Assignments
                            </h3>
                            <ul className={s.wrapper}>
                                {assignments.map((act) => {
                                    return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                                })}
                            </ul>
                        </div> :
                        null
                }

                {
                    exams.length != 0 ?
                        <div className={s.curExamsBox}>
                            <h3>
                                Current Projects
                            </h3>
                            <ul className={s.wrapper}>
                                {exams.map((act) => {
                                    return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                                })}
                            </ul>
                        </div> :
                        null
                }
            </div>
        </div>
    )
}

export default CurrentTasks