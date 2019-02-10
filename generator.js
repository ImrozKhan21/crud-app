module.exports =  function () {
  let faker = require("faker");
  let _ = require("lodash");
  return {
    people: _.times(10, (n)=> {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
     address: _.times(10, (n)=>{
      return {
        id: n,
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        state: faker.address.state()
      }
    })
  }
};
