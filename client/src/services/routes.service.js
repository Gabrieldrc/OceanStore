const navRoutes = {
  publicRoutes: [
    {label: 'Sign Up', type: 'link', route: '/signup'},
    {label: 'Sign In', type: 'link', route: '/signin'},
    {label: 'Sell',    type: 'link', route: '/sell'},
  ],
  fixedRoutes: [
    {label: 'Categories', type: 'link', route: '/categories'},
    {label: 'Gift Cards', type: 'link', route: '/gift-cards'},
  ],
  verifiedRoutes: [
    {label: 'Wishlist', type: 'link', route: '/wishlist'},
    {label: 'Car',      type: 'link', route: '/car'},
    {label: 'Car',      type: 'menu', routes: [
      {label: 'Settings', type: 'link' ,route: '/settings'},
      {label: 'Sell',     type: 'link' ,route: '/sell'},
      {label: 'My Apps',  type: 'link' ,route: '/apps'},
      {label: 'Log Out',  type: 'link' ,route: '/logout'},
    ]},
  ]
};

const getRoutes = () => {
  return navRoutes;
};

export default {
  getRoutes,
};