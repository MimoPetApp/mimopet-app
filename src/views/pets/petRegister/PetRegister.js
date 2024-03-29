import { mapActions, mapState } from 'vuex'
import Title from '../../../common/components/title'
// import MainButton from '../../../common/components/mainButton'
import Button from '../../../common/components/Button/Button.vue'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import MainButton from '../../../common/components/mainButton'
import AuthContainer from '../../../common/components/AuthContainer'
import LoadingCircle from '../../../common/components/loadingCircle'
import Ask from '../../../common/components/Ask/Ask.vue'
import TextField from '../../../common/components/TextField/TextField.vue'
import SearchField from '../../../common/components/SearchField/SearchField.vue'
import Checkbox from '../../../common/components/Checkbox/Checkbox.vue'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal.vue'

const petIcon = require('../../../assets/images/feedback/pet.svg')

export default {
  name: 'PetRegister',
  components: {
    Title,
    Button,
    Ask,
    MainButton,
    AuthContainer,
    LoadingCircle,
    ButtonCheckboxGroup,
    TextField,
    SearchField,
    Checkbox,
    FeedbackModal
  },
  data () {
    return {
      ageOptions: [
        {
          label: 'Filhote até 6 meses',
          isCorrect: false
        },
        {
          label: 'Filhote até 1,5 anos',
          isCorrect: false
        },
        {
          label: 'Adulto',
          isCorrect: false
        },
        {
          label: 'Sênior',
          isCorrect: false
        }
      ],
      detailOptions: [
        {
          label: 'Adotado',
          isCorrect: false
        },
        {
          label: 'Castrado',
          isCorrect: false
        },
        {
          label: 'Com deficiência',
          isCorrect: false
        },
        {
          label: 'De serviço',
          isCorrect: false
        },
        {
          label: 'Nenhum',
          isCorrect: false
        }
      ],
      form: {
        petName: '',
        petAge: null,
        petBreed: {
          isUnknown: false,
          name: '',
          searchName: ''
        },
        petDetails: null
      },
      createdPet: null,
      step: 1,
      loading: false,
      formHasError: [false, false],
      btnDisabled: true,
      breedsList: [],
      feedbackModal: {
        status: false,
        icon: petIcon,
        title: 'Pet Adicionado',
        subtitle: 'Você pode adicionar inúmeros pets a sua conta cadastrada',
        buttonText: 'Voltar',
        action: () => {
          this.hideFeedbackModal()
          this.goToHome()
        }
      }
    }
  },
  computed: {
    ...mapState('petRegister', { breedsData: 'breeds', registerPetData: 'registerPet' }),
    ...mapState('auth', ['user']),
    feedbackIcon () {
      return petIcon
    },
    petAgeFilled () {
      if (this.form.petAge) {
        return true
      } else {
        return false
      }
    },
    petBreedFilled () {
      if (this.form.petBreed.name || this.form.petBreed.isUnknown) {
        return true
      } else {
        return false
      }
    },
    petDetailsFilled () {
      if (this.form.petDetails) {
        return true
      } else {
        return false
      }
    }
  },
  beforeMount () {},
  mounted () {
    this.ActionSetHomeMenuVisibility(false)
  },
  beforeRouteLeave (to, from, next) {
    // eslint-disable-next-line no-unused-vars
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', [
      'ActionSetHomeMenuVisibility',
      'ActionCreatePet',
      'ActionUpdateMainPet'
    ]),
    ...mapActions('petRegister', ['ActionGetBreeds', 'ActionRegisterPet']),
    searchBreed () {
      let aux = []
      const vue = this
      if (this.form.petBreed.searchName) {
        aux = this.breedsData.data.filter(function (option) {
          return option.breed.toUpperCase().includes(vue.form.petBreed.searchName.toUpperCase())
        })
        this.formatBreedList(aux)
      } else {
        this.breedsList = []
        this.formatBreedList(this.breedsData.data)
      }
    },
    formatBreedList (breedList) {
      let aux = []
      if (breedList.length > 0) {
        aux = breedList.map(function (breed) {
          return {
            label: breed.breed,
            selected: false
          }
        })
      }
      this.breedsList = aux
    },
    noBreedHandler () {
      if (this.form.petBreed.isUnknown) {
        this.form.petBreed.searchName = ''
        this.form.petBreed.name = 'Sem raça'
        this.breedsList = []
      } else {
        this.form.petBreed.name = ''
        this.formatBreedList(this.breedsData.data)
      }
    },
    goToHome () {
      this.$router.push({ name: 'home' })
    },
    async nextStep () {
      this.step++
    },
    async registerPet () {
      const form = this.formatForm()
      await this.ActionRegisterPet(form)
      if (this.registerPetData.error) {
        // notify
      } else {
        const res = await this.ActionUpdateMainPet(this.registerPetData.data.id)
        if (res) {
          this.showFeedbackModal()
        }
      }
    },
    formatForm () {
      let form = JSON.parse(JSON.stringify(this.form))
      form = {
        name: form.petName,
        breed: form.petBreed.name,
        age: this.mapAge(form.petAge.label),
        gender: 'male',
        type: 'canine',
        is_adopted: this.isDetailIncluded('Adotado'),
        is_neutered: this.isDetailIncluded('Castrado'),
        is_deficiency: this.isDetailIncluded('Com deficiência'),
        is_service: this.isDetailIncluded('De serviço'),
        is_none: this.isDetailIncluded('Nenhum')
      }
      return form
    },
    isDetailIncluded (string) {
      if (this.form.petDetails) {
        return this.form.petDetails.some(detail => detail.label.includes(string))
      }
    },
    mapAge (age) {
      switch (age) {
        case 'Filhote até 6 meses':
          return 'SIX_MONTS'
        case 'Filhote até 1,5 anos':
          return 'EIGHTEEN_MONTS'
        case 'Adulto':
          return 'ADULT'
        default:
          return 'SENIOR'
      }
    },
    backStep () {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1;
        this.$router.push({ name: 'home' })
      }
    },
    async onSubmit () {
      const body = {
        name: this.form.petName,
        gender: this.form.petGender,
        profilePet: this.parseProfilePet(this.form.petProfile),
        birthdate: `${this.form.year}-${this.form.month}-${this.form.day}`,
        breed: this.form.petBreed.isUnknown ? 'unknown' : this.form.petBreed.name,
        details: this.form.petDetails,
        togetherBy: Number(this.form.howLong)
      }
      this.loading = true
      const res = await this.ActionCreatePet(body)
      if (res) {
        this.createdPet = res
        this.nextStep()
      }
      this.loading = false
    },
    finishRegister () {
      this.$router.push({
        name: 'petdetails',
        params: { id: `${this.createdPet.id}` }
      })
    },
    selectedHandler (field, eventData) {
      if (eventData.length > 0) {
        if (field !== 'petBreed') {
          this.form[field] = []
        }
        if (field === 'petAge') {
          this.form[field] = eventData[0]
        } else if (field === 'petBreed') {
          this.form[field].name = eventData[0].label
        } else {
          this.form[field] = eventData
        }
      } else {
        this.form[field] = null
      }
    },
    hideFeedbackModal () {
      this.feedbackModal.status = false
    },
    showFeedbackModal () {
      this.feedbackModal.status = true
    },
    getSubTitle () {
      let subtitle
      if (this.isUserPremium()) {
        subtitle = 'Você pode adicionar inúmeros pets a sua conta cadastrada'
      } else {
        subtitle = 'Você pode adicionar apenas um pet a sua conta cadastrada'
      }
      this.feedbackModal.subtitle = subtitle
    },
    isUserPremium () {
      return this.user.is_premium
    }
  },
  async created () {
    await this.ActionGetBreeds()
    this.getSubTitle()
    this.formatBreedList(this.breedsData.data)
  }
}
