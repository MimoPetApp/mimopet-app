export default {
  getStepRouter(step) {
    let name = ''
    let id = 0
    switch (step.type) {
      case 'slide':
        name = 'SlideStep'
        id = step.slides.id
        break
      case 'video':
        name = 'VideoStep'
        id = step.video.id
        break
      case 'feedback':
        name = 'FeedbackStep'
        id = step.feedback.id
        break
      case 'exercise':
        name = 'ExerciseStep'
        id = step.exercise.id
        break
      case 'quiz':
        name = 'QuizStep'
        id = step.quizzes.id
        break
      default:
        break
    }
    return { name, params: { idSessao: id } }
  }
}
