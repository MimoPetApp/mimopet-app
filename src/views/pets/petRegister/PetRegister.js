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
  data() {
    return {
      test: null,
      ageOptions: [
        {
          label: 'Filhote até 6 meses',
          selected: false
        },
        {
          label: 'Filhote até 1,5 anos',
          selected: false
        },
        {
          label: 'Adulto',
          selected: false
        },
        {
          label: 'Sênior',
          selected: false
        }
      ],
      detailOptions: [
        {
          label: 'Adotado',
          selected: false
        },
        {
          label: 'Castrado',
          selected: false
        },
        {
          label: 'Com deficiência',
          selected: false
        },
        {
          label: 'De serviço',
          selected: false
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
      listOptions: [
        {
          id: 1,
          name: 'Akita'
        },
        {
          id: 2,
          name: 'Yorkshire'
        },
        {
          id: 3,
          name: 'Yorkshire Terrier'
        },
        {
          id: 4,
          name: 'Vira-lata'
        },
        {
          id: 5,
          name: 'Splitz Alemão'
        },
        {
          id: 6,
          name: 'Dálmata'
        }
      ],
      step: 1,
      loading: false,
      formHasError: [false, false],
      btnDisabled: true,
      breedsList: []
    }
  },
  computed: {
    ...mapState('petRegister', { breedsData: 'breeds', registerPetData: 'registerPet' }),
    feedbackIcon() {
      return petIcon
    },
    petAgeFilled() {
      if (this.form.petAge) {
        return true
      } else {
        return false
      }
    },
    petBreedFilled() {
      if (this.form.petBreed.name || this.form.petBreed.isUnknown) {
        return true
      } else {
        return false
      }
    },
    petDetailsFilled() {
      if (this.form.petDetails) {
        return true
      } else {
        return false
      }
    }
  },
  beforeMount() {},
  mounted() {
    this.ActionSetHomeMenuVisibility(false)
  },
  beforeRouteLeave(to, from, next) {
    // eslint-disable-next-line no-unused-vars
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionSetHomeMenuVisibility', 'ActionCreatePet']),
    ...mapActions('petRegister', ['ActionGetBreeds', 'ActionRegisterPet']),
    searchBreed() {
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
    formatBreedList(breedList) {
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
    noBreedHandler() {
      if (this.form.petBreed.isUnknown) {
        this.form.petBreed.searchName = ''
        this.form.petBreed.name = 'Sem raça'
        this.breedsList = []
      } else {
        this.form.petBreed.name = ''
        this.formatBreedList(this.breedsData.data)
      }
    },
    goToHome() {
      this.$router.push({ name: 'home' })
    },
    async nextStep() {
      this.step++
    },
    async registerPet() {
      const form = this.formatForm()
      await this.ActionRegisterPet(form)
      if (this.registerPetData.error) {
        // notify
      } else {
        this.nextStep()
      }
    },
    formatForm() {
      let form = JSON.parse(JSON.stringify(this.form))
      form = {
        name: form.petName,
        breed: form.petBreed.name,
        age: this.mapAge(form.petAge.label),
        gender: 'male',
        type: 'canine',
        is_adopted: form.petDetails.includes('Adotado'),
        is_neutered: form.petDetails.includes('Castrado'),
        is_deficiency: form.petDetails.includes('Com deficiência'),
        is_service: form.petDetails.includes('De serviço')
      }
      return form
    },
    mapAge(age) {
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
    backStep() {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1;
        this.$router.push({ name: 'home' })
      }
    },
    async onSubmit() {
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
      if (res.id) {
        this.createdPet = res
        this.nextStep()
      }
      this.loading = false
    },
    finishRegister() {
      this.$router.push({
        name: 'petdetails',
        params: { id: `${this.createdPet.id}` }
      })
    },
    selectedHandler(field, eventData) {
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
    }
  },
  async created() {
    await this.ActionGetBreeds()
    this.formatBreedList(this.breedsData.data)
  }
}
