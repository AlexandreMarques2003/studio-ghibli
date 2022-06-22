import './styles.scss'

export function Search({search, total}){
    return(
        <div className="search">
            <div className="search-results">
                {total} Found
            </div>

            <div className="search-from">
                <input
                    placeholder="Search"
                    type="text"
                    onChange={search}
                />
            </div>

        </div>
    )
} 