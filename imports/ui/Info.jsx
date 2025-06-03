import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { VeiculosCollection } from '../api/veiculos';
import { VehicleCard } from './VehicleCard';

export const Info = () => {
  const isLoading = useSubscribe('veiculos');
  const veiculos = useFind(() => VeiculosCollection.find({}, {sort: {veiculo: 1}}));

  if(isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Vehicles</h2>
      <div className="vehicles-list">
        {veiculos.map(veiculo => (
          <VehicleCard
            key={veiculo._id}
            veiculo={veiculo}
          />
        ))}
      </div>
    </div>
  );
};
