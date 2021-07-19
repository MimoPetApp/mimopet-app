export default {
  login: {
    title: 'Insira seus dados',
    subtitle: 'Gestão de atividades e serviços do seus animais',
    mainbutton: 'Entrar',
    email: {
      label: 'Insira o seu e-mail',
      error: 'E-mail é obrigatório',
      fail: 'E-mail não está cadastrado'
    },
    password: {
      label: 'Sua senha',
      error: {
        required: 'Senha é obrigatória',
        min: 'A senha deve conter ao menos oito caracteres'
      },
      fail: 'Senha não confere com e-mail'
    }
  }
}
