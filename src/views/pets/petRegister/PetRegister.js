import { mapActions } from 'vuex'
import Title from '../../../common/components/title'
// import MainButton from '../../../common/components/mainButton'
import Button from '../../../common/components/Button/Button.vue'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import MainButton from '../../../common/components/mainButton'
import AuthContainer from '../../../common/components/AuthContainer'
import LoadingCircle from '../../../common/components/loadingCircle'
import Ask from '../../../common/components/Ask.vue'

export default {
  name: 'PetRegister',
  components: {
    Title,
    Button,
    Ask,
    MainButton,
    AuthContainer,
    LoadingCircle,
    ButtonCheckboxGroup
  },
  data () {
    return {
      options: [
        {
          label: 'Adotado',
          selected: false
        },
        {
          label: 'Castrado',
          selected: false
        },
        {
          label: 'AB',
          selected: false
        },
        {
          label: 'AB',
          selected: false
        },
        {
          label: 'AB',
          selected: false
        },
        {
          label: 'AB',
          selected: false
        }
      ],
      answer: 'AB',
      form: {
        petName: '',
        petProfile: this.$t('petCreation.profileOptions.dog'),
        petBreed: {
          isUnknown: false,
          name: ''
        },
        petGender: '',
        petDetails: null,
        passwordUser: '',
        day: '',
        month: '',
        year: '',
        howLong: ''
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
      listOptionsFiltered: [],
      confirmPassword: null,
      showPassword: false,
      step: 1,
      loading: false,
      formHasError: [false, false]
    }
  },
  computed: {
    disableDateBtn () {
      if (
        this.form.day.length === 2 &&
        this.form.month.length === 2 &&
        this.form.year.length === 4
      ) {
        if (this.dayIsValid() && this.monthIsValid() && this.yearIsValid()) {
          return false
        } else {
          return true
        }
      } else {
        return true
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
    ...mapActions('pets', ['ActionSetHomeMenuVisibility', 'ActionCreatePet']),
    searchBreed () {
      const aux = []
      if (this.form.petBreed.name) {
        this.listOptions.forEach(option => {
          if (option.name.toUpperCase().includes(this.form.petBreed.name.toUpperCase())) {
            aux.push(option)
          }
        })
        this.listOptionsFiltered = aux
      } else {
        this.listOptionsFiltered = []
      }
    },
    selectBreed (index) {
      this.form.petBreed.name = this.listOptionsFiltered[index].name
    },
    minusOperation () {
      if (this.form.howLong) {
        if (parseInt(this.form.howLong) !== 0) {
          this.form.howLong = parseInt(this.form.howLong) - 1
        }
      }
    },
    plusOperation () {
      if (!this.form.howLong) {
        this.form.howLong = 1
      } else {
        if (parseInt(this.form.howLong) >= 0 && parseInt(this.form.howLong) < 99) {
          this.form.howLong = parseInt(this.form.howLong) + 1
        }
      }
    },
    dayIsValid () {
      if (
        this.form.day &&
        this.form.day.length === 2 &&
        this.form.day !== '00' &&
        parseInt(this.form.day) > 0 &&
        parseInt(this.form.day) <= 31
      ) {
        return true
      } else {
        return false
      }
    },
    monthIsValid () {
      if (
        this.form.month &&
        this.form.month.length === 2 &&
        this.form.month !== '00' &&
        parseInt(this.form.month) > 0 &&
        parseInt(this.form.month) <= 12
      ) {
        return true
      } else {
        return false
      }
    },
    yearIsValid () {
      if (
        this.form.year &&
        this.form.year.length === 4 &&
        this.form.year !== '0000' &&
        parseInt(this.form.year) > 0 &&
        parseInt(this.form.year) <= new Date().getFullYear()
      ) {
        return true
      } else {
        return false
      }
    },
    nextStep () {
      this.step++
    },
    selectPetGender (gender) {
      this.form.petGender = gender === 'Macho' ? 'male' : 'female'
      this.nextStep()
    },
    backStep () {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1;
        this.$router.push({ name: 'home' })
      }
    },
    parseProfilePet (profile) {
      switch (profile.toUpperCase()) {
        case 'FELINO':
          return 'feline'
        case 'CANINO':
          return 'canine'
        default:
          return ''
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
      if (res.id) {
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
    }
  }
}
