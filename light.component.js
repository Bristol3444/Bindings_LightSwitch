"use strict";
const light = {
    template: `
    <section
    ng-class="{lighton: $ctrl.isOn}"
    ng-class="{ 'lighton': (flip) }"">
        <p> Light </p>
        <light-switch flip="$ctrl.onFlip()"
        ></light-switch>

    </section>
    `,
    controller: [function() {
        const vm = this;
        vm.isOn = false;
        vm.onFlip = function() {
                vm.isOn = !vm.isOn;
                console.log(vm.isOn);
        }
    }]

}


angular.module("App").component("light", light);