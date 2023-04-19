import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/nav';
import { useState } from 'react';

function App() {

   const [characters, setcharacters] = useState([]);

   const onSearch = () => {
      // eslint-disable-next-line no-undef
      setcharacters([...characters, example])
   }

   // Cada vez que esta función sea ejecutada deberá agregar un nuevo personaje a tu estado local characters. Los tres putittos me van a permitir que se copie todo lo que ya estaba en array. 
   return (
      <div className='App'>
         <Cards characters={characters} />
         <Nav onSearch = {onSearch}/> 
      </div>
   );
}

export default App;
