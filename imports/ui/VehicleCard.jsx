import React from 'react';
import { Meteor } from 'meteor/meteor';

export const VehicleCard = ({ veiculo, onEdit }) => {
  const handleRemoveVehicle = (veiculo) => {
    if (window.confirm('Tem certeza que deseja remover este veículo?')) {
      Meteor.call('veiculos.remove', veiculo);
    }
  };

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
          <strong>Características especiais:</strong> {veiculo.caracteristicas_especiais == "" ? "Nenhuma" : veiculo.caracteristicas_especiais}
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

      <div className="vehicle-card__actions">
        <button 
          type="button" 
          className="vehicle-card__edit-btn"
          onClick={() => onEdit(veiculo)}
          aria-label={`Editar veículo ${veiculo.veiculo}`}
        >
          Editar
        </button>
        
        <button 
          type="button" 
          className="vehicle-card__delete-btn"
          onClick={() => handleRemoveVehicle(veiculo)}
          aria-label={`Remover veículo ${veiculo.veiculo}`}
        >
          Remover
        </button>
      </div>
    </div>
  );
};
