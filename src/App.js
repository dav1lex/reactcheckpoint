import {useState} from "react";
import {nanoid} from "nanoid";

function App() {
    const [student, setstudent] = useState({
        id: nanoid(),
        name: '',
        classCount: 0,
        inClass: false,
    })

    const [val, setval] = useState('')

    function inputlistener(e) {
        e.preventDefault()
        setval(e.target.value)

    }

    function joinclass() {
        setstudent((prevState) => ({
            ...prevState,
            inClass: !student.inClass,
            classCount: prevState.inClass ? prevState.classCount++:
                prevState.classCount

        }))

    }

    function changename() {
      setstudent((prevState)=>({
          ...prevState,
          name:val
      }))
    }

    console.log(student)
    return (
        <>
            <div>
                {`${student.name} ---- ${student.classCount}---- ${student.inClass}`}
                <form>
                    <input onChange={inputlistener} value={val}/>
                    <button type='button' onClick={changename}>chane student name</button>

                </form>
                <button onClick={joinclass}>{student.inClass ? 'Leave the class' : 'Join the class'}</button>
            </div>
        </>
    );
}

export default App;
