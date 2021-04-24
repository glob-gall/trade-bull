type InputProps = {
    label?:string
    name:string
    placeholder?:string
}

function Input({name,label,placeholder}:InputProps) {
  return (
      <div className="InputContainer">
        {label &&(<label htmlFor={label} className="inputLabel">{label}</label>)}
        <input className="Input" name={name} id={label||name} placeholder={placeholder}/>
      </div>
    )
}
export default Input
