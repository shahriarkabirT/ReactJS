import PropTypes from 'prop-types'
function Student(props){
    
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" }</p>
        </div>
    );
}

//prop datatype simply propTypes

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent : PropTypes.bool,
}

Student.defaultProps = {
    name: "Ghost",
    age: 23,
    isStudent: false
}
export default Student