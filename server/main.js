import { Meteor } from 'meteor/meteor';
import { VeiculosCollection } from '../imports/api/veiculos';

function insertVehicle(vehicleData) {
  VeiculosCollection.insert({
    ...vehicleData,
    createdAt: new Date()
  });
}

Meteor.startup(() => {
  if (VeiculosCollection.find().count() === 0) {
    const data = Assets.getText('veiculos_gta.json');
    if (!data) {
      console.error("Error loading veiculos_gta.json");
      return;
    }
    const vehiclesData = JSON.parse(data);
    for (const vehicle of vehiclesData) {
      insertVehicle(vehicle);
    }
  }

  Meteor.publish("veiculos", function () {
    return VeiculosCollection.find();
  });
});

Meteor.methods({
  'veiculos.insert': function (vehicleData) {
    return VeiculosCollection.insert({
      ...vehicleData,
      createdAt: new Date(),
    });
  },
  'veiculos.remove': function ({ _id }) {
    return VeiculosCollection.remove({ _id });
  },
  'veiculos.update': function (vehicleData) {
    const { _id, ...updateData } = vehicleData;
    return VeiculosCollection.update(_id, { $set: updateData });
  },
});
