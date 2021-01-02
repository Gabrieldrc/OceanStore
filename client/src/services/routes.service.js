const navRoutes = {
  publicRoutes: [
    {label: 'Sign Up', type: 'link', route: '/signup'},
    {label: 'Sign In', type: 'link', route: '/signin'},
    {label: 'Sell',    type: 'link', route: '/sell'},
  ],
  fixedRoutes: [
    {label: 'Store', type: 'link', route: '/store'},
    {label: 'Categories', type: 'link', route: '/categories'},
    {label: 'Gift Cards', type: 'link', route: '/gift-cards'},
  ],
  verifiedRoutes: [
    {label: 'Wishlist', type: 'link', route: '/wishlist'},
    {label: 'Car',      type: 'link', route: '/car'},
    {label: 'User',      type: 'menu', routes: [
      {label: 'Settings', type: 'link' ,route: '/settings'},
      {label: 'My Apps',  type: 'link' ,route: '/me/apps'},
      {label: 'Log Out',  type: 'link' ,route: '/logout'},
    ]},
  ],
  verifiedDevRoutes: [
    {label: 'Dashboard', type: 'link', route: '/dev/dashboard'},
    {label: 'My Apps',      type: 'link', route: '/dev/apps'},
    {label: 'User',      type: 'menu', routes: [
      {label: 'Settings', type: 'link' ,route: '/settings'},
      {label: 'Publish App',     type: 'link' ,route: '/dev/apps/new_app'},
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