import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const buttonStyle = {
    margin: "1rem 0",
    color: "white",
    backgroundColor : "green"
}

const Button = ({ label, handleClick }) => {
    return (
        <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
    )
}

// const STYLES = ['btn--primary', 'btn--outline'];

// const SIZES = ['btn--medium', 'btn--large'];

// const Button = ((
//     children, 
//     type, 
//     onClick, 
//     buttonStyle, 
//     buttonSize
//     ) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

//     return (
//         <Link to='/login' className='btn--mobile'>
//             <button
//             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}>
//                 {children}
//             </button>
//         </Link>
//     )
// });

export default Button;