import SearchBar from '/SearchBar';


const Nav = ({onSearch}) => {

    return (
        <div>
            <SearchBar onSearch = {onSearch}/>
            <h1></h1>
        </div>
    )
}
export default Nav;