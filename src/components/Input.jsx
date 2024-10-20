import React, { useId } from 'react'
// useId is  a hook that generates a unique id for a component
// works seamlessly with server site rendering , ensuring the  id's are consistent between  server and client renders

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 ' htmlFor={id} >
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black 
                    outline-none focus:bg-gray-50 duration-200 border
                    border-gray-200 w-full ${className}`}
                    ref={ref} // will give the refrence to the parent  component
                    {...props}
                    id = {id}
            />


            
        </div>
    )
})

export default Input