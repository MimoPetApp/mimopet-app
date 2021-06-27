/* eslint-disable no-useless-escape */
import { mapActions } from "vuex";
import Title from "../../../common/components/title";
import MainButton from "../../../common/components/mainButton";
import Container from "../../../common/components/container";
import SingleLineForm from "../../../common/components/singleLineForm";
import LoadingCircle from "../../../common/components/loadingCircle";

export default {
  name: "CreateAccount",
  components: {
    Title,
    Container,
    MainButton,
    LoadingCircle,
    SingleLineForm
  },
  data() {
    return {
      showError: {
        email: false,
        password: false
      },
      form: {
        email: "",
        password: "",
        nickname: "",
        identificationTutor: "mother",
        birthdate: ""
      },
      pattern: {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        name: /^(?=.{3,})/
      },
      step: 1,
      maxStep: 5,
      loading: false
    };
  },
  computed: {
    emailIsValid() {
      return this.validateField(this.form.email, this.pattern.email);
    },
    passwordIsValid() {
      return this.validateField(this.form.password, this.pattern.password);
    },
    nameIsValid() {
      return this.validateField(this.form.nickname, this.pattern.name);
    },
    extraIsValid() {
      return (
        this.form.identificationTutor != "" && this.form.birthdate.length == 10
      );
    }
  },
  beforeMount() {},
  mounted() {},
  methods: {
    ...mapActions("auth", ["ActionCreateAccount"]),
    nextStep() {
      if (this.step < this.maxStep) this.step += 1;
    },
    previousStep() {
      if (this.step > 1) this.step -= 1;
    },
    validateField(field, rule) {
      if (field && rule) return rule.test(field);
      else false;
    },
    onSubmitEmail() {
      if (!this.emailIsValid) return;
      this.nextStep();
    },
    onSubmitPassword() {
      if (this.$refs.password.validate()) {
        this.nextStep();
      }
    },
    onSubmitName() {
      if (!this.nameIsValid) return;
      this.nextStep();
    },
    async onSubmitExtra() {
      if (!this.extraIsValid) return;
      this.nextStep();
      await this.submitNewUser();
    },
    async submitNewUser() {
      this.loading = true;
      await this.ActionCreateAccount(this.form);
      this.loading = false;
    }
  }
};
