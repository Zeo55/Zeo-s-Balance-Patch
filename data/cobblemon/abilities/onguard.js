{
  onModifyMovePriority: -5,
  onModifyMove(move) {
    if (!move.ignoreImmunity) move.ignoreImmunity = {};
    if (move.ignoreImmunity !== true) {
      move.ignoreImmunity["Fighting"] = true;
      move.ignoreImmunity["Normal"] = true;
    }
  },

  onTryBoost(boost, target, source, effect) {
    if (effect.name === "Intimidate" && boost.atk) {
      delete boost.atk;
      this.add("-fail", target, "unboost", "Attack", "[from] ability: Scrappy", "[of] " + target);
    }
  },

  onResidualOrder: 5,
  onResidualSubOrder: 3,
  onResidual(pokemon) {
    if (pokemon.hp && pokemon.status && this.randomChance(80, 100)) {
      this.debug("shed skin");
      this.add("-activate", pokemon, "ability: Shed Skin");
      pokemon.cureStatus();
    }
  },
  flags:{},
  name: "On-Guard",
  rating: 4,
  num: -13005
}