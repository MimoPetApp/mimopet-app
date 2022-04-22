export default {
  login: {
    title: 'Acesse sua conta',
    subtitle: 'Bem-vindo tutor(a) de pet',
    mainbutton: 'Entrar',
    email: {
      label: 'E-mail',
      error: 'E-mail é obrigatório',
      fail: 'E-mail não está cadastrado'
    },
    password: {
      label: 'Sua senha',
      error: {
        required: 'Senha é obrigatória',
        min: 'Mínimo oito caracteres',
        lowercase: 'Ter ao menos um caractere minúsculo',
        uppercase: 'Ter ao menos um caractere maiúsculo',
        number: 'Ter ao menos um número',
        specialCharacter: 'Ter ao menos um caractere especial',
        length: 'Ter oito caracteres'
      },
      fail: 'Senha não confere com e-mail'
    }
  }
}
