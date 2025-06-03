import React, { useState } from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { VeiculosCollection } from '../api/veiculos';
import { VehicleCard } from './VehicleCard';
import { AddVehicleForm } from './AddVehicleForm';
import { EditVehicleForm } from './EditVehicleForm';

export const Info = () => {
  const isLoading = useSubscribe('veiculos');
  
  const [sortKey, setSortKey] = useState('veiculo');
  const [sortOrder, setSortOrder] = useState(1);

  const [isAdding, setIsAdding] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);

  const veiculos = useFind(
    () => VeiculosCollection.find({}, { sort: { [sortKey]: sortOrder } }),
    [sortKey, sortOrder]
  );

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  if (isAdding) {
    return <AddVehicleForm onSave={() => setIsAdding(false)} />;
  }

  if (editingVehicle) {
    return <EditVehicleForm veiculo={editingVehicle} onSave={() => setEditingVehicle(null)} />;
  }

  return (
    <div>
      <div className="sort-options">
        <label>Ordenar por: </label>
        <select className="sort-select" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="veiculo">Nome do Veículo</option>
          <option value="local">Local de Armazenamento</option>
        </select>
        <button className="sort-toggle-btn" onClick={() => setSortOrder((prev) => prev * -1)}>
          {sortOrder === 1 ? 'Ascendente ↑' : 'Descendente ↓'}
        </button>
      </div>
      
      <button className="add-vehicle-btn" onClick={() => setIsAdding(true)}>
        Adicionar Veículo
      </button>
      
      <div className="vehicles-list">
        {veiculos.map((veiculo) => (
          <VehicleCard
            key={veiculo._id}
            veiculo={veiculo}
            onEdit={() => setEditingVehicle(veiculo)}
          />
        ))}
      </div>
    </div>
  );
};
