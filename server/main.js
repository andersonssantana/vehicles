import { Meteor } from 'meteor/meteor';
import { VeiculosCollection } from '../imports/api/veiculos';

async function insertVehicle(vehicleData) {
  await VeiculosCollection.insertAsync({
    ...vehicleData,
    createdAt: new Date()
  });
}

Meteor.startup(async () => {
  if (await VeiculosCollection.find().countAsync() === 0) {
    Assets.getTextAsync('veiculos_gta.json', async (error, data) => {
    if (error) {
        console.error("Error loading veiculos_gta.json:", error);
        return;
      }
      const vehiclesData = JSON.parse(data);
      for (const vehicle of vehiclesData) {
        await insertVehicle(vehicle);
      }
    });    
  }

  Meteor.publish("veiculos", function () {
    return VeiculosCollection.find();
  });
});

Meteor.methods({
  'veiculos.remove': function({ _id }) {
    return VeiculosCollection.removeAsync({ _id })
  }
})
