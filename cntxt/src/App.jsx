import ChildA from "./ChildA"
import React,{createContext} from 'react'


const parser = createContext()
const parser2 = createContext()
const App = () => {
  const name="saurabh"
  const age=24
  return (
    <>
    <parser.Provider value={name} >
      <parser2.Provider value ={age}>

      <ChildA />
      </parser2.Provider>
    </parser.Provider>
    </>
  )
}

export default App
export {parser,parser2}