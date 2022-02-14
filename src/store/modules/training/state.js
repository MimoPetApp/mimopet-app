export default {
  trainings: [],
  modules: [],
  behavior: {},
  train: {},
  module: {},
  slide: {},
  video: {},
  feedback: {},
  quiz: {},
  question: {
    loading: false,
    success: true,
    error: false,
    data: {}
  },
  exercise: {},
  myTrainings: [],
  loadingTrainings: false,
  hasHeader: true,
  unsubscribeTraining: {
    loading: false,
    success: true,
    error: false,
    data: {}
  },
  modalResponse: {
    model: false,
    data: {}
  },
  modalEvaluateTraining: {
    model: false,
    data: {
      title: 'Avalie o treinamento',
      btnLabel: 'Enviar'
    }
  },
  modalTrainingLimitExceeded: {
    model: false,
    data: {
      title: 'Limite de treinamentos!',
      message:
        'Assine o Mimo Pet Premium,para adicionar treinamentos ilimitados a lista do seu pet, e outros benefícios.',
      btnLabel: 'Continuar',
      backLabel: 'Voltar'
    }
  },
  modalCancelTraining: {
    model: false,
    data: {
      title: 'Deseja cancelar inscrição do pet neste programa de treino?',
      message:
        'Você perderá seu histórico de progresso, mas poderá se inscrever novamente quando desejar.',
      btnLabel: 'Continuar',
      backLabel: 'Voltar'
    }
  }
}
