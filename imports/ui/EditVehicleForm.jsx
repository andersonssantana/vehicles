import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const EditVehicleForm = ({ veiculo, onSave }) => {
  const [formData, setFormData] = useState({ ...veiculo });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    Meteor.call('veiculos.update', formData, (error) => {
      if (error) {
        console.error('Erro ao editar veículo:', error);
      } else {
        onSave();
      }
    });
  };

  return (
    <div className="edit-vehicle-form">
      <h2>Editar Veículo</h2>
      <div>
        <label htmlFor="veiculo">Nome do Veículo:</label>
        <input
          type="text"
          id="veiculo"
          name="veiculo"
          value={formData.veiculo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoria:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="local">Local de Armazenamento:</label>
        <input
          type="text"
          id="local"
          name="local"
          value={formData.local}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="caracteristicasEspeciais">Características Especiais:</label>
        <textarea
          id="caracteristicasEspeciais"
          name="caracteristicas_especiais"
          value={formData.caracteristicas_especiais || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="imani_tech"
            checked={formData.imani_tech || false}
            onChange={handleChange}
          />
          Possui Imani Tech
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="hsw"
            checked={formData.hsw || false}
            onChange={handleChange}
          />
          Possui upgrades HSW
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="armado"
            checked={formData.armado || false}
            onChange={handleChange}
          />
          Veículo armado
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="arena"
            checked={formData.arena || false}
            onChange={handleChange}
          />
          Possui upgrades da Arena
        </label>
      </div>
      <button type="button" onClick={handleSubmit}>Salvar</button>
      <button type="button" onClick={onSave}>Cancelar</button>
    </div>
  );
};
