import React, { useState } from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { VeiculosCollection } from '../api/veiculos';
import { VehicleCard } from './VehicleCard';
import { AddVehicleForm } from './AddVehicleForm';

export const Info = () => {
  const isLoading = useSubscribe('veiculos');
  const veiculos = useFind(() => VeiculosCollection.find({}, { sort: { veiculo: 1 } }));
  const [isAdding, setIsAdding] = useState(false);

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  if (isAdding) {
    return <AddVehicleForm onSave={() => setIsAdding(false)} />;
  }

  return (
    <div>
      <h2>Vehicles</h2>
      <button className="add-vehicle-btn" onClick={() => setIsAdding(true)}>
        Adicionar Veículo
      </button>
      <div className="vehicles-list">
        {veiculos.map((veiculo) => (
          <VehicleCard key={veiculo._id} veiculo={veiculo} />
        ))}
      </div>
    </div>
  );
};
