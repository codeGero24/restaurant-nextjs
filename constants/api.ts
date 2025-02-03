const APIs = {
  API: {
    main: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    menu: '/menu',
    reviews: '/reviews',
    settings: '/settings',
  },
  API_DUMMY: {
    main: process.env.NEXT_PUBLIC_API_URL_DUMMY,
    users: '/users',
  },
};

export default APIs;
