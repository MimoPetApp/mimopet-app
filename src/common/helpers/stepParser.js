export default {
  getStepRouter (step) {
    let name = ''
    let id = 0
    switch (step.type) {
      case 'slide':
        name = 'SlideStep'
        id = step.id
        break
      case 'video':
        name = 'VideoStep'
        id = step.id
        break
      case 'feedback':
        name = 'FeedbackStep'
        id = step.id
        break
      case 'exercise':
        name = 'ExerciseStep'
        id = step.id
        break
      case 'quiz':
        name = 'QuizStep'
        id = step.id
        break
      default:
        break
    }
    return { name, params: { idSessao: id } }
  }
}
