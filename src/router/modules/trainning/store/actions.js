import Treino from "../../../Apis/Training";

export const ActionAllTrainning = ({ commit }) => {
    Treino.all()
        .then(response => {
            commit('SET_TREINAMENTO',response.data);
        })
}


export const ActionGetTrainningID = ({ commit, id }) => {
    Treino.show(id)
        .then(response => {
            commit('SET_TREINOID',response.data)
        })
}