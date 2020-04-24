// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Index from '~/pages/Index.vue';
import '~/assets/styles.scss';
import VueScrollTo from 'vue-scrollto';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueScrollTo);
  Vue.component('Layout', Index);
}
