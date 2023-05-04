import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav"
import { useState } from 'react';

function App() {
   
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== +id)
      setCharacters(characterFiltered)
   }
   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
