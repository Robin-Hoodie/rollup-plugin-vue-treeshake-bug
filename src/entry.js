// Import vue components
import * as components from '@/lib-components/index';

// install function executed by Vue.use()
const install = function installtestlib(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
export * from '@/lib-components/helpers';
