// It is a common button can  be used anywhere needed
import React from "react";

//children is just a fancy word , doesn't mean anything it can also be named as text , or anything else 
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '', // empty because , what if user have to pass any className then from here we can take it 
    ...props

    // this is props , if user have passed any other properties like style , value , id or anything  else then it will be here 
    // and then using spread operator all those properties will be here 

}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
    )
}

export default Button