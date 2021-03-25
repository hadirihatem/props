
import PropTypes, { string } from "prop-types" ;
import {defaultProps} from "default-props"
const Propc = ({name,age,profession,bio,children}) => {
    return (
        <div>
            <h2>Hi .... My name is {name} I'm {age} years old , I'm an {profession} in {bio} </h2>

            
            <div>{children}</div>            
        </div>
    )
}
Propc.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    profession:PropTypes.string ,
    bio:PropTypes.string,


};  
Propc.defaultProps={
name:"Frank" ,
}
export default Propc
