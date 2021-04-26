import {InputHTMLAttributes} from 'react'

type InputProps = {
    label?:string
    name:string
    placeholder?:string
} & InputHTMLAttributes<HTMLInputElement>

function Input({name,label,placeholder, ...props}:InputProps) {
  return (
      <div className="InputContainer">
        {label &&(<label htmlFor={label} className="inputLabel">{label}</label>)}
        <input className="Input" name={name} id={label||name} placeholder={placeholder} {...props}/>
      </div>
    )
}
export default Input
