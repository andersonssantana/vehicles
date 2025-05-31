import { Meteor } from 'meteor/meteor';
import { VeiculosCollection } from '../imports/api/veiculos';

async function insertVehicle({
  veiculo,
  nome_abreviado_ptbr,
  categoria,
  local,
  imani_tech,
  hsw,
  arena,
  armado,
  caracteristicas_especiais,
}) {
  await VeiculosCollection.insertAsync({
    veiculo,
    nome_abreviado_ptbr,
    categoria,
    local,
    imani_tech,
    hsw,
    arena,
    armado,
    caracteristicas_especiais,
    createdAt: new Date()
  });
}

Meteor.startup(async () => {
  if (await VeiculosCollection.find().countAsync() === 0) {
    await insertVehicle({
      veiculo: "Blista",
      nome_abreviado_ptbr: "Blista",
      categoria: "Compactos",
      local: "Los Santos",
      imani_tech: false,
      hsw: false,
      arena: false,
      armado: false,
      caracteristicas_especiais: "Nenhuma"
    });

    await insertVehicle({
      veiculo: "Blista Compact",
      nome_abreviado_ptbr: "Blista Compact",
      categoria: "Compactos",
      local: "Los Santos",
      imani_tech: false,
      hsw: true,
      arena: false,
      armado: false,
      caracteristicas_especiais: "Nenhuma"
    });
  }

  Meteor.publish("veiculos", function () {
    return VeiculosCollection.find();
  });
});
