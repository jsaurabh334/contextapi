import { parser,parser2 } from "./App"

const ChildC = () => {
  return (
    <div> 
        <parser.Consumer>
            {
                (name)=>{
                    return(
                        <parser2.Consumer>
                            {
                                (age)=>{
                                    return(

                                        <h1> {name} is {age} yrs old</h1>
                                    )
                                }
                            }

                        </parser2.Consumer>
                      
                    )
                }
            }
        </parser.Consumer>

    </div>
  )
}

export default ChildC