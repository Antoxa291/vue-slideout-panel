import Vue from 'vue';

import VueSlideoutPanel from './components/SlideoutPanel';
import vueSlideoutPanelService from './service';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  console.log('HEREEE');

  Vue.component('slideout-panel', VueSlideoutPanel);
  Vue.use({
    install(RealVue) {
      RealVue.prototype.$showPanel = vueSlideoutPanelService.show;
    }
  });

  window.vueSlideoutPanelService = vueSlideoutPanelService;
}

export {
  VueSlideoutPanel,
  vueSlideoutPanelService
};
