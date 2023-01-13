export const sizesMap = [
  ["s", [150, 160]],
  ["m", [161, 170]],
  ["l", [171, 180]],
  ["xl", [181, 190]],
  ["xxl", [191, 200]],
];

export const typesMap = [
  ["mountain", "montaña"],
  ["city", "paseo"],
  ["electric", "eléctrica"],
  ["road", "carretera"],
];

export const rangesMap = [
  ["premium", "premium"],
  ["highEnd", "alta"],
  ["midRange", "media"],
];

export const BIKE_SIZES_MAP = {
  s: [150, 160],
  m: [161, 170],
  l: [171, 180],
  xl: [181, 190],
  xxl: [191, 200],
};
export const BIKE_TYPES_MAP = {
  mountain: "montaña",
  city: "paseo",
  electric: "eléctrica",
  road: "carretera",
};

export const BIKE_RANGES_MAP = {
  premium: "premium",
  highEnd: "alta",
  midRange: "media",
};

export const BOOKING_STATES_MAP = {
  pending: "pendiente",
  active: "activa",
  finished: "finalizada",
  cancelled: "cancelada",
};

export const BIKE_STATES_MAP = {
  inUse: "en uso",
  inRepair: "en reparación",
  avaiable: "disponible",
};

export const EVENTS_MAP = {
  start_booking: "Empiezan",
};

export const varNameToString = (variable) => Object.keys({variable}[0]);
