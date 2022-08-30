import { useEffect, useState} from 'react';

const url ="https://www.boredapi.com/api/activity/"

function App() {
  const [boringData, setBoringData] = useState([])
  const [num, setNum] = useState(0)


  const fetchData= async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setBoringData(data)
    

  }
  useEffect(()=>{
    document.title ="The Bored Website"
  }, [])

  useEffect(()=>{
    fetchData();
  }, [num])

  const increaseNum =()=>{
    let newNum = num +1
    setNum(newNum)
  }

  return (
    <div className='container '>
      <h1>bored? do this</h1>
      <p>"{boringData.activity}"</p>
      <p>it's a {boringData.type} activity</p>

      <div className="participant-num">Requires {boringData.participants} {boringData.participants===1?'participant': 'participants'}, {boringData.participants ===1 ?"no need to anyone :)":'yeah need some people with you, it may suck if you are an introvert...'}</div>
      <button onClick={increaseNum} >Get another activity</button>
    </div>
  );
}

export default App;
