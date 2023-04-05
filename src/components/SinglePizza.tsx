import { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaForm from './EditPizzeForm';
import { Pizza } from '../models/Pizza';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggle = (): void => {
    setEdit(!edit);
  }

  const handleDelete = (): void => {
    deletePizza(pizza.id)
  };

  return (
    <div className="pizza">
        <img src={`/images/${pizza.img}`} alt={pizza.title} />
        <h2>{pizza.title}</h2>
        <span>{pizza.price} ₽</span>
        <div className="pizza-controls">
            <AiFillEdit onClick={handleToggle} />
            <AiFillDelete onClick={handleDelete} />
        </div>
        {edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggle={handleToggle} /> : null}
    </div>
  )
}

export default SinglePizza;