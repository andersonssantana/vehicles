import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const AddVehicleForm = ({ onSave }) => {
  const [veiculo, setVeiculo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [local, setLocal] = useState('');
  const [caracteristicasEspeciais, setCaracteristicasEspeciais] = useState('');
  const [imaniTech, setImaniTech] = useState(false);
  const [hsw, setHsw] = useState(false);
  const [armado, setArmado] = useState(false);
  const [arena, setArena] = useState(false);

  const handleSubmit = () => {
    const vehicleData = {
      veiculo,
      categoria,
      local,
      caracteristicas_especiais: caracteristicasEspeciais,
      imani_tech: imaniTech,
      hsw,
      armado,
      arena,
    };

    Meteor.call('veiculos.insert', vehicleData, (error) => {
      if (error) {
        console.error('Erro ao adicionar veículo:', error);
      } else {
        onSave(); // Volta para a visualização dos cards
      }
    });
  };

  return (
    <div className="add-vehicle-form">
      <h2>Adicionar Novo Veículo</h2>
      <div>
        <label htmlFor="veiculo">Nome do Veículo:</label>
        <input
          type="text"
          id="veiculo"
          value={veiculo}
          onChange={(e) => setVeiculo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoria:</label>
        <input
          type="text"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="local">Local de Armazenamento:</label>
        <input
          type="text"
          id="local"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="caracteristicasEspeciais">Características Especiais:</label>
        <textarea
          id="caracteristicasEspeciais"
          value={caracteristicasEspeciais}
          onChange={(e) => setCaracteristicasEspeciais(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={imaniTech}
            onChange={(e) => setImaniTech(e.target.checked)}
          />
          Possui Imani Tech
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={hsw}
            onChange={(e) => setHsw(e.target.checked)}
          />
          Possui upgrades HSW
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={armado}
            onChange={(e) => setArmado(e.target.checked)}
          />
          Veículo armado
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={arena}
            onChange={(e) => setArena(e.target.checked)}
          />
          Possui upgrades da Arena
        </label>
      </div>
      <button type="button" onClick={handleSubmit}>Salvar</button>
      <button type="button" onClick={onSave}>Cancelar</button>
    </div>
  );
};
