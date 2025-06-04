import React from 'react';
import { Meteor } from 'meteor/meteor';

// Componente para renderizar uma linha da tabela de veículos
export const VehicleRow = ({ veiculo, onEdit }) => {
  // Função para lidar com a remoção do veículo
  const handleRemoveVehicle = (veiculoId) => {
    // Confirmação antes de remover
    if (window.confirm('Tem certeza que deseja remover este veículo?')) {
      Meteor.call('veiculos.remove', { _id: veiculoId }, (error) => {
        if (error) {
          alert(`Erro ao remover veículo: ${error.reason}`);
          console.error('Erro ao remover veículo:', error);
        } else {
          // Poderia adicionar um feedback visual aqui, se necessário
        }
      });
    }
  };

  return (
    <tr className="vehicle-row">
      <td />
      
      {/* Nome do Veículo */}
      <td data-label="Veículo">{veiculo.veiculo}</td>
      
      {/* Categoria */}
      <td data-label="Categoria">
        <span className="category-badge">{veiculo.categoria}</span>
      </td>
      
      {/* Local de Armazenamento */}
      <td data-label="Local">{veiculo.local}</td>
      
      {/* Tags (Imani, HSW, Armado, Arena) */}
      <td data-label="Tags">
        {veiculo.imani_tech && <span className="tag tag-imani">Imani</span>}
        {veiculo.hsw && <span className="tag tag-hsw">HSW</span>}
        {veiculo.armado && <span className="tag tag-armed">Armado</span>}
        {veiculo.arena && <span className="tag tag-arena">Arena</span>}
        {!veiculo.imani_tech && !veiculo.hsw && !veiculo.armado && !veiculo.arena && <span>-</span>}
      </td>

      {/* Ações (Editar, Remover) */}
      <td data-label="Ações">
        <button 
          type="button" 
          className="action-btn edit-btn"
          onClick={() => onEdit(veiculo)} // Passa o objeto veiculo completo para edição
          aria-label={`Editar veículo ${veiculo.veiculo}`}
        >
          Editar
        </button>
        <button 
          type="button" 
          className="action-btn delete-btn"
          onClick={() => handleRemoveVehicle(veiculo._id)} // Passa apenas o ID para remoção
          aria-label={`Remover veículo ${veiculo.veiculo}`}
        >
          Remover
        </button>
      </td>
    </tr>
  );
};
