export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$HnapEWWKQQ0.0Ft33nXxtuJ0fsmd9ywYswEzT4C.6Ul5y6cOU.UEa"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO"
    },
    admin: {
      email: "admin@simpson.com",
      password: "$2a$10$MX9H0l0oEfASXnJnmt3UnOt7tZ0IieyBk3bsAhCO.qmyTyyyPPPlS"
    }
  },
  categorys: {
    _model: "Category",
    kerry: {
      name: "Kerry",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648490779/hng454i1y3cszcltslbx.jpg"
      
    },
    wicklow: {
      name: "Wicklow",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648377258/wicklow-category_x31nw1.jpg"
    },
    donegal: {
      name: "Donegal",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648377369/donegal-category_tikrik.jpg"
    }
  },
  places: {
    _model : "Place",
    place_1 : {
      name: "Carrauntoohil",
      description: "Climbing route, Difficult",
      lat: 51.9990,
      lng: -9.7432,
      categoryid: "->categorys.kerry"
    },
    place_2 : {
      name: "The_Glen_of_Aherlow",
      description: "Trek to Lough Curra, Medium",
      lat: 52.4169,
      lng: -8.1444,
      categoryid: "->categorys.kerry"
    },
    place_3 : {
      name: "Errigal_Mountain",
      description: "Trek to Donegal skyline, Medium",
      lat: 55.0343,
      lng: -8.1130,
      categoryid: "->categorys.donegal"
    },
    place_4 : {
      name: "Djouce",
      description: "Hike in Wicklow Mountain National Park, Medium",
      lat: 53.1305,
      lng: -6.2393,
      categoryid: "->categorys.wicklow"
    }
  }
};
