export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>Close</button>
         <h2>{name}</h2>
         <h3> Origin:</h3> 
         <h4>{origin}</h4> 
         <h3> Species:</h3> 
         <h4>{species}</h4>
         <h3> Gender:</h3>
         <h4>{gender}</h4>
         <h3> Status:</h3> 
         <h4>{status}</h4>
         <img src={image} alt='' />
      </div>
   );
}
