

function ItemListContainer(props){
    const { greating } = props;
    return(
        <div>
            <h1 className="title has-text-centered">{greating}</h1>
        </div>
    )
}

export default ItemListContainer;