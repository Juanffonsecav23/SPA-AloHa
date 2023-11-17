import Loader from '../Loader/Loader'
import ItemEspacios from '../ItemEspacios/ItemEspacios'
import Flex from '../Flex/Flex'

function ItemListEspacios({isLoading , espacios}) {

    if (isLoading) return <Loader/>


    if(espacios.length === 0){
        return(
            <h2 style={{color:'white'}}>No se encontraron los espacios</h2>
        )
    }
    else return (
            <Flex title={"Espacios"} color="white" >
                {espacios.map((itemInArray)=>(
                    <ItemEspacios key={itemInArray.id}{...itemInArray}/>
                ))}
            </Flex>
  )
}

export default ItemListEspacios