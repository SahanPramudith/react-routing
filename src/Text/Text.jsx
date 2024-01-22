export default function Text({type,placeholder,onChange} ) {


    return(
        <div>
            <input type={type}  placeholder={placeholder }onChange={(val)=>{onChange(val.target.value)}}/>
        </div>
    )

}