import { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import { Pizza } from './models/Pizza';
import './App.css';



const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => 
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizza = (id: number) => {
    setPizzasList(pizzasList.filter((pizza) => pizza.id !== id))
  }

  console.log('pizzasList >>>', pizzasList);


  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas 
          pizzasList={pizzasList} 
          updatePizza={updatePizza}
          deletePizza={deletePizza}
          />
      </div>
    </div>
  );
}

export default App;
