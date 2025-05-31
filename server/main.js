import { Meteor } from 'meteor/meteor';
import { VeiculosCollection } from '../imports/api/veiculos';

Meteor.startup(async () => {
  Meteor.publish("veiculos", function () {
    return VeiculosCollection.find();
  });
});
