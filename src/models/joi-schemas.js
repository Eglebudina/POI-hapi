import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").min(5), // min 5 characters
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  // begin with upper case letter and then 2+ lower case letters
  firstName: Joi.string().example("Homer").regex(/^[A-Z][a-z]{2,}$/),
  lastName: Joi.string().example("Simpson").regex(/^[A-Z][a-z]{2,}$/),
}).label("UserDetails");



export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PlaceSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Carrauntoohil"),
    description: Joi.string().required().example("Climbing route, Difficult"),
    lat: Joi.number().allow("").optional().example(51.9990),
    lng: Joi.number().allow("").optional().example(9.7432),
    categoryid: IdSpec,
  })
  .label("Place");

export const PlaceSpecPlus = PlaceSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacePlus");

export const PlaceArraySpec = Joi.array().items(PlaceSpecPlus).label("PlaceArray");

export const CategorySpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Kerry"),
    userid: IdSpec,
    places: PlaceArraySpec,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");
