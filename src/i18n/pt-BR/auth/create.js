export default {
  create: {
    terms: {
      title: 'Termos de uso',
      subtitle: 'Subtitulo 1',
      mainbutton: 'Aceitar e Continuar'
    },
    email: {
      title: 'Bem vindo tutor',
      subtitle: 'Precisamos de algumas informações sobre você 😉',
      mainbutton: 'Continuar',
      label: 'Insira seu email',
      error: 'E-mail inválido'
    },
    password: {
      title: 'Construa a senha secreta',
      subtitle: 'Você e seu pet vão entrar em uma jornada de aprendizagem juntos.',
      mainbutton: 'Continuar',
      label: 'Insira sua senha',
      error: {
        required: 'Senha é obrigatória',
        lowercase: 'A senha deve conter ao menos um caractere minúsculo',
        uppercase: 'A senha deve conter ao menos um caractere maiúsculo',
        number: 'A senha deve conter ao menos um número',
        specialCharacter: 'A senha deve conter ao menos um caractere especial',
        length: 'A senha deve conter ao menos oito caracteres'
      }
    },
    name: {
      title: 'Como gostaria de ser chamado?',
      subtitle: 'Precisamos de mais algumas informações sobre você 😉',
      mainbutton: 'Continuar',
      label: 'Insira o seu nome'
    },
    birthDate: {
      title: 'Informe o seu ano de nascimento?',
      subtitle: 'Só maiores de 18 anos podem usar o app',
      mainbutton: 'Continuar',
      label: 'Insira o ano',
      error: 'Data de nascimento é obrigatória'
    },
    identification: {
      title: 'Como você se identifica?',
      subtitle: 'Estamos acabando de construir o seu perfil de tutor treinador',
      mainbutton: 'Escolher',
      label: {
        mother: 'Mãe de pet',
        father: 'Pai de pet',
        nonBinary: 'Não binário'
      }
    }
  }
}
