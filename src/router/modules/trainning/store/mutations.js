
import * as types from "./mutation-types";

export default {
  [types.SET_TREINAMENTO](state, treinamento) {
    state.treinamento = treinamento;
  },
  [types.SET_TREINOID](state, treinoid) {
    state.treinoid = treinoid;
  }
};
