import { PlaceSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placeController = {
  index: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const viewData = {
        name: "Edit Place",
        category: category,
        place: place,
      };
      return h.view("place-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PlaceSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("place-view", { name: "Edit place error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const newPlace = {
        name: request.payload.name,
        description: request.payload.description,
        lat: Number(request.payload.lat),
        lng: Number(request.payload.lng),
      };
      await db.placeStore.updatePlace(place, newPlace);
      return h.redirect(`/category/${request.params.id}`);
    },
  },

  report: {
    handler: async function (request, h) {
      const places = await db.placeStore.getAllPlaces();
      return h.view("Report", {
        title: "Places to Date",
        places: places,
      });
    },
  },
};
