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
        veiculo: "Bravado Buffalo EVX",
        nome_abreviado_ptbr: "Buffalo EVX",
        categoria: "Muscle",
        local: "Agency: Hawick",
        imani_tech: true,
        hsw: true,
        arena: false,
        armado: false,
        características_especiais: ""
    });

    await insertVehicle({
        veiculo: "Bravado Buffalo STX",
        nome_abreviado_ptbr: "Buffalo STX",
        categoria: "Muscle",
        local: "Agency: Hawick",
        imani_tech: true,
        hsw: false,
        arena: false,
        armado: false,
        características_especiais: "Metralhadoras"
    });
  }

  Meteor.publish("veiculos", function () {
    return VeiculosCollection.find();
  });
});
