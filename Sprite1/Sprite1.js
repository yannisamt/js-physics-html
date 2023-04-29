/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 24.125,
        y: 26
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 51.23786354607756,
        y: 67.25
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.stage.vars.element;
      if (this.mouse.down) {
        this.createClone();
      }
      yield;
    }
  }

  *startAsClone() {
    this.effects.color = this.random(
      this.toNumber(this.stage.vars.couleur) + 5,
      this.toNumber(this.stage.vars.couleur) + -5
    );
    this.goto(this.mouse.x, this.mouse.y);
    this.direction =
      this.random(190, 165) + this.toNumber(this.stage.vars.customOri);
    for (let i = 0; i < 40; i++) {
      this.move(5);
      yield;
    }
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }
}
