import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { VeiculosCollection } from '../api/veiculos';

export const Info = () => {
  const isLoading = useSubscribe('veiculos');
  const veiculos = useFind(() => VeiculosCollection.find());

  if(isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Vehicles</h2>
      <ul>{veiculos.map(
        veiculo => <li key={veiculo._id}>
          <div>{veiculo.veiculo}</div>
        </li>
      )}</ul>
      <div>
        
      </div>
    </div>
  );
};
