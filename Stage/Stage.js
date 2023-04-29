/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière-plan1", "./Stage/costumes/arrière-plan1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière-plan2", "./Stage/costumes/arrière-plan2.svg", {
        x: 311,
        y: 239.89391152667704
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.element = 9;
    this.vars.customOri = -360;
    this.vars.couleur = 382;

    this.watchers.element = new Watcher({
      label: "Element",
      style: "slider",
      visible: true,
      value: () => this.vars.element,
      setValue: value => {
        this.vars.element = value;
      },
      step: 1,
      min: 0,
      max: 20,
      x: 245,
      y: 175
    });
    this.watchers.customOri = new Watcher({
      label: "Custom : Ori",
      style: "slider",
      visible: true,
      value: () => this.vars.customOri,
      setValue: value => {
        this.vars.customOri = value;
      },
      step: 1,
      min: -360,
      max: 360,
      x: 245,
      y: 132
    });
    this.watchers.couleur = new Watcher({
      label: "Couleur",
      style: "slider",
      visible: true,
      value: () => this.vars.couleur,
      setValue: value => {
        this.vars.couleur = value;
      },
      step: 1,
      min: 0,
      max: 500,
      x: 245,
      y: 89
    });
  }
}
