import React, { useState } from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { VeiculosCollection } from '../api/veiculos';
import { VehicleRow } from './VehicleRow';
import { AddVehicleForm } from './AddVehicleForm';
import { EditVehicleForm } from './EditVehicleForm';

export const Info = () => {
  const isLoading = useSubscribe('veiculos');
  
  const [sortKey, setSortKey] = useState('veiculo');
  const [sortOrder, setSortOrder] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);

  // Busca os veículos ordenados e filtrados
  const veiculos = useFind(
    () => {
      const query = {};
      
      // Adiciona filtro de busca se houver termo
      if (searchTerm.trim() !== '') {
        query.veiculo = { 
          $regex: searchTerm, 
          $options: 'i'
        };
      }
      
      return VeiculosCollection.find(query, { 
        sort: { [sortKey]: sortOrder } 
      });
    },
    [sortKey, sortOrder, searchTerm]
  );

  // Exibe loading enquanto os dados são carregados
  if (isLoading()) {
    return <div className="loading">Carregando veículos...</div>;
  }

  // Exibe o formulário de adição se isAdding for true
  if (isAdding) {
    return <AddVehicleForm onSave={() => setIsAdding(false)} />;
  }

  // Exibe o formulário de edição se editingVehicle não for null
  if (editingVehicle) {
    return <EditVehicleForm veiculo={editingVehicle} onSave={() => setEditingVehicle(null)} />;
  }

  // Função para lidar com a mudança da chave de ordenação
  const handleSortChange = (newSortKey) => {
    if (newSortKey === sortKey) {
      // Se clicar na mesma coluna, inverte a ordem
      setSortOrder((prev) => prev * -1);
    } else {
      // Se clicar em outra coluna, define a nova chave e ordem ascendente
      setSortKey(newSortKey);
      setSortOrder(1);
    }
  };

  // Função para limpar a pesquisa
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Renderiza a tabela principal
  return (
    <div className="table-container">
      <div className="table-controls">
        <div className="search-container">
          <input 
            type="search" 
            placeholder="Pesquisar veículos..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="control-buttons">
          <button className="control-btn add-btn" onClick={() => setIsAdding(true)}>
            + Adicionar Veículo
          </button>
        </div>
      </div>

      {/* Tabela de Veículos */}
      <table className="vehicles-table">
        <thead>
          <tr>
            <th />
            {/* Colunas clicáveis para ordenação */}
            <th onClick={() => handleSortChange('veiculo')} className="sortable-header">
              Veículo {sortKey === 'veiculo' ? (sortOrder === 1 ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSortChange('categoria')} className="sortable-header">
              Categoria {sortKey === 'categoria' ? (sortOrder === 1 ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSortChange('local')} className="sortable-header">
              Local {sortKey === 'local' ? (sortOrder === 1 ? '↑' : '↓') : ''}
            </th>
            <th>Tags</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.length > 0 ? (
            veiculos.map((veiculo) => (
              <VehicleRow
                key={veiculo._id}
                veiculo={veiculo}
                onEdit={setEditingVehicle}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-results">
                Nenhum veículo encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination-controls">
        <span>Mostrando 1-{veiculos.length} de {veiculos.length}</span>
      </div>
    </div>
  );
};
