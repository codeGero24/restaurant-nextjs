// -------------------------------------
// - type usersResp - GET - API_URL_DUMMY
// -------------------------------------
export type usersResp = {
  users: user[];
};

// --------------------------------------
// - type reviewesResp - GET - API_URL
// --------------------------------------
export type reviewesResp = {
  data: review[];
};

// -------------------------------------
// - type MenuResponse - GET - API_URL
// -------------------------------------
export type menuResp = {
  data: menu[];
};

// -------------------------------------
// - type settingsResp - GET - API_URL
// -------------------------------------
export type settingsResp = {
  appName?: string;
  bookingFormFields?: bookingFields[];
  headerItems?: headerItem[];
};

// --------------------------------------
// - type review
// --------------------------------------
export type review = {
  id: string | number;
  customer_name: string;
  customer_job: string;
  text: string;
};

// --------------------------------------
// - type menu
// --------------------------------------
export type menu = {
  id: string | number;
  category: string;
  name: string;
  topping: string | string[];
  price: number;
  rank: number;
};

// --------------------------------------
// - type bookingFields
// --------------------------------------
export type bookingFields = {
  type: string;
  name: string;
  placeholder?: string;
  options?: option[];
};

// --------------------------------------
// - type headerItem
// --------------------------------------
export type headerItem = {
  path: string; //   Es. "home"
  label: string; //  Es. "Home"
  title?: string;
  group?: string;
};

// --------------------------------------
// - type option - SelectField
// --------------------------------------
type option = {
  value: string;
  label: string;
};

// -------------------------------------
// - type user - GET - API_URL_DUMMY
// -------------------------------------
export type user = {
  id: number;
  firstName: string;
  lastName: string;
  image?: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  // ---  Aggiunti  ---
  name: string;
  review?: string;
  profession?: string;
  img?: {
    src: string;
    alt: string;
  };
  // ------------------
  maidenName?: string;
  age?: number;
  gender?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string; // - YYYY-MM-DD
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  ip?: string;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  macAddress?: string;
  university?: string;
  hair?: {
    color: string;
    type: string;
  };
  address?: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  bank?: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company?: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  crypto?: {
    coin: string;
    wallet: string;
    network: string;
  };
};
