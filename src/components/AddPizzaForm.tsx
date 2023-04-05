import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Pizza } from '../models/Pizza';
import './styles.css';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

type InitState = {
    title: string,
    price: string,
    img: string
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<InitState>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value,
        })

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewPizza(initState);
        }
    }

    // console.log(newPizza);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='title' 
                type="text"
                placeholder='Название'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name='price' 
                type="text"
                placeholder='Стоимость'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name='img' 
                type="text"
                placeholder='Изображение'
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type='submit'>
                + добавить в меню
            </button>
        </form>
  )
}

export default AddPizzaForm