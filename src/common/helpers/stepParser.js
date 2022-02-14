export default {
  getStepRouter (step) {
    let name = ''
    let id = 0
    switch (step.type) {
      case 'slide':
        name = 'SlideStep'
        id = step.slide.id
        break
      case 'video':
        name = 'VideoStep'
        id = step.video.id
        break
      case 'exercise':
        name = 'ExerciseStep'
        id = step.exercise.id
        break
      case 'question':
        name = 'QuestionStep'
        id = step.question.id
        break
      default:
        break
    }
    return { name, params: { idSessao: id } }
  }
}
