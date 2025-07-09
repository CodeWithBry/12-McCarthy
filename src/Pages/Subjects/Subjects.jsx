const Subjects = () => {
  let s ="sfas"
  let ss = "safasd"
  const k = [s,s,s,s,s,s,s,s,ss,s,s,s,s,]
  return (
    <div>
      <ul>
        {
          k.map(()=>{
            return <li key={Math.random() * 1}>sadasdsad</li>
          })
        }
      </ul>
    </div>
  )
}

export default Subjects