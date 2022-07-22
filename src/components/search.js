
function Search(props){

    const textField = {
        width:'1200px',
        height: '30px',
        marginTop: '3%',
        marginLeft: '10%'
    }

    const searchCountry= ((e)=>{
        props.search(e.target.value);
    })
    return(
        <div>
            <input type="text" placeholder="Search a country" style={textField} onChange={(e)=>searchCountry(e)}/>
        </div>
    )
}

export default Search;