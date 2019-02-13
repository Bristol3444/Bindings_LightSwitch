"use strict";
const lightSwitch = {
  bindings: {
      flip: "&"
  },
  template: `
  <button ng-click="$ctrl.flip()">Switch</button>
  `,
}


angular.module("App").component("lightSwitch", lightSwitch);