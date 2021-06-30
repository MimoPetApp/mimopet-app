export default {
  login: {
    title: 'Acesse sua conta',
    subtitle: 'Insira suas informações',
    mainbutton: 'Entrar',
    email: {
      label: 'Seu email',
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
