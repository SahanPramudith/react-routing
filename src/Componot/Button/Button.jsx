import "../Button/Button.css"
// export default function Button( {bgclor,clor,name,onClick}) {
//     function Button() {
//         alert("done")
//     }
//
//     return(
//         <div>
//             <button className="button" style={{backgroundColor:bgclor,color:clor}} onClick={()=>{onClick('hi')}}>
//                 {name}
//             </button>
//         </div>
//     )
//
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Button( {bgclor,clor,name,onClick,bc}) {
    function Button() {
        alert("done")
    }

    return(
        <div>
            <button className="button"  style={{backgroundColor:bgclor,color:clor, borderColor:bc}} onClick={()=>{onClick(name)}}>
                {name}
            </button>
        </div>
    )

}