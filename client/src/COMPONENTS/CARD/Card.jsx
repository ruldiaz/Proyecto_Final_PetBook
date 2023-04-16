import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';

const Card = (pet) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const pets = useSelector((state) => state.pets);
  console.log(pets);
  // console.log(pets);

// la data viene en un atributo rows viene asi por la paginacion hecha con sequelize tip siempre hacer console.log de lo que te traiga la action 
  // useEffect(() => {
  //   dispatch(getPets()).then(() => {
  //     setLoading(false);
  //   });
  // }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      
        
          <h3>{pet.name}</h3>
          <div>
          <Link key={pet.id} to={`/detail/${pet.id}`}>
            <img src={pet.image} alt={pet.name} />
            </Link>
          </div>
          <div>
            <p>Specie: {pet.specie}</p>
            <p>Gender: {pet.gender}</p>
            <p>Size: {pet.size}</p>
            <p>Weight: {pet.weight}</p>
            <p>Age: {pet.age}</p>
            <p>Adopted: {pet.adopted}</p>
          </div>
        
    
      <br>
      </br>
      
    </>
  );
};

export default Card;