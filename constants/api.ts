const { API_URL, API_URL_DUMMY } = process.env;

const APIs = {
  API: {
    main: `${API_URL}/api`,
    menu: '/menu',
    reviews: '/reviews',
    settings: '/settings',
  },
  API_DUMMY: {
    main: API_URL_DUMMY,
    users: '/users',
  },
};

export default APIs;
