// export default function Home()
// {
//     return(
//         <>
//         <h1>divya how are you</h1>
//         </>
//     )
// }
/*function Home(props)
{3
    return(
        <>
        <h1> sha is{props.name}and she is{props.age}</h1>

        
        </>
    )
}*/
function Home( {name="user" ,age="no age"}){
    return (
        <>
        <h1> she is{name}and she is{age}</h1>
        </>
    )
}
export default Home