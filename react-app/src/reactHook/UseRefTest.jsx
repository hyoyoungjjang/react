import React,{useState, useRef} from 'react'

const UseRefTest = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const nameInput = useRef();

    const handleChangeName = (ev) => {
        setName(ev.target.value)
    }

    const handleChangeGender = (ev) => {
        setGender(ev.target.value)
    }

    const handleSubmit = (event) =>{
        alert(`이름 : ${name}, 성별 : ${gender}`)
        event.preventDefault();
    }

    const handleReset = () => {
        setName("");
        setGender("남자");
        nameInput.current.focus();
    }

   
  return (
    <form onSubmit={handleSubmit}>
        <label>
            이름 : 
            <input 
            type="text" 
            value={name} 
            onChange={handleChangeName}
            ref={nameInput}
            />
        </label>
        <br />
        <label>
            성별 : 
            <select value={gender} onChange={handleChangeGender} >
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>
        </label>
        <button type='submit'>제출</button>
        <button type='button' onClick={handleReset}>초기화</button>
    </form>
  )
}

export default UseRefTest