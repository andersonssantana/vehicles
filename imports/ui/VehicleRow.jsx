import React from 'react';
import { Meteor } from 'meteor/meteor';

export const VehicleRow = ({ veiculo, onEdit }) => {
  const handleRemoveVehicle = (veiculoId) => {
    if (window.confirm('Tem certeza que deseja remover este veículo?')) {
      Meteor.call('veiculos.remove', { _id: veiculoId }, (error) => {
        if (error) {
          alert(`Erro ao remover veículo: ${error.reason}`);
          console.error('Erro ao remover veículo:', error);
        }
      });
    }
  };

  return (
    <tr className="vehicle-row">
      <td />
      <td data-label="Veículo">{veiculo.veiculo}</td>
      <td data-label="Categoria">
        <span className="category-badge">{veiculo.categoria}</span>
      </td>
      <td data-label="Local">{veiculo.local}</td>
      <td data-label="Tags">
        {veiculo.imani_tech && <span className="tag tag-imani">Imani</span>}
        {veiculo.hsw && <span className="tag tag-hsw">HSW</span>}
        {veiculo.armado && <span className="tag tag-armed">Armado</span>}
        {veiculo.arena && <span className="tag tag-arena">Arena</span>}
        {!veiculo.imani_tech && !veiculo.hsw && !veiculo.armado && !veiculo.arena && <span>-</span>}
      </td>
      <td data-label="Ações">
        <button 
          type="button" 
          className="action-btn edit-btn"
          onClick={() => onEdit(veiculo)}
          aria-label={`Editar veículo ${veiculo.veiculo}`}
        >
          Editar
        </button>
        <button 
          type="button" 
          className="action-btn delete-btn"
          onClick={() => handleRemoveVehicle(veiculo._id)}
          aria-label={`Remover veículo ${veiculo.veiculo}`}
        >
          Remover
        </button>
      </td>
    </tr>
  );
};
