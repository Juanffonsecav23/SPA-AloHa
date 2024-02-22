/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader";



function ItemList({ room ,isLoading, category }) {

  function tituloCategoria() {
    var verificacion; 
    if (category) {
      verificacion = category
    }else{
      verificacion = 'Habitaciones';
    }
    return verificacion
  }

  if (isLoading) return <Loader />; 

  if (room.length === 0){
    return <h2>No se encontraron la(s) Habitacione(s)</h2>
  }else return (
    <div className="roomTitle">
      <Flex title={tituloCategoria()} color="white" backgroundColor="black">
        {room.map((roomInArray) => (
          <Item key={room.id} {...roomInArray} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;