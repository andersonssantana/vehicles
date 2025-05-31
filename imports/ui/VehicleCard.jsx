import React from 'react';
import { Meteor } from 'meteor/meteor';

export const VehicleCard = ({ veiculo }) => {

  const handleRemoveVehicle = (veiculo) => {
    Meteor.call('veiculos.remove', veiculo)
  }

  return (
    <div className="vehicle-card">
      <div className="vehicle-header">
        <h3 className="vehicle-name">{veiculo.veiculo}</h3>
        <span className="vehicle-category">{veiculo.categoria}</span>
      </div>
      
      <div className="vehicle-info">
        <div className="info-item">
          <strong>Local de armazenamento:</strong> {veiculo.local}
        </div>
        
        <div className="info-item">
          <strong>Características principais:</strong> {veiculo.caracteristicas_principais}
        </div>
      </div>

      <div className="vehicle-tags">
        {veiculo.imani_tech && (
          <span className="tag tag-imani">Possui Imani Tech</span>
        )}
        
        {veiculo.hsw && (
          <span className="tag tag-hsw">Possui upgrades HSW</span>
        )}
        
        {veiculo.armado && (
          <span className="tag tag-armed">Veículo armado</span>
        )}
        
        {veiculo.arena && (
          <span className="tag tag-arena">Possui upgrades da Arena</span>
        )}
      </div>
      <button type='button' onClick={ () => handleRemoveVehicle(veiculo) }>
        Delete
      </button>
    </div>
  );
};
