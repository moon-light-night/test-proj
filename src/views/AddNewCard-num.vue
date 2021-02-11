<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <img
      class="card-position"
      src="@/profile/AddNewCard/images/Rectangle14.png"
    />
    <img class="card-wifi" src="@/profile/AddNewCard/images/wifi.svg" />
    <img class="card-chip" src="@/profile/AddNewCard/images/chip.svg" />
    <p class="card-stars card-stars__num">{{ cardNum }}</p>
    <p class="mmyy">мм / yy</p>
    <fieldset class="field">
      <legend>Номер карты</legend>
      <input
        type="text"
        id="cardNum"
        v-model="cardNum"
        placeholder="Например 1234 1234 1234 1234"
      />
    </fieldset>
    <button
      :disabled="!$v.cardNum.required"
      :class="{ invalid: !$v.cardNum.required }"
      class="btn-continue"
      @click="passCardNum(), $router.push('/new-card-mmyy')"
    >
      Продолжить
    </button>
    <img
      class="footer__newcard"
      src="@/profile/PersonalAccount/images/footer.png"
    />
    <img
      src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
      alt="img"
      class="logo"
    />
    <img src="@/profile/AddNewCard/images/CB.svg" alt="img" class="logo-cb" />
    <img
      src="@/profile/AddNewCard/images/UniversalBank.svg"
      alt="img"
      class="logo-bank"
    />
    <img
      src="@/profile/AddNewCard/images/Line2.svg"
      alt="img"
      class="logo-line"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    cardNum: '',
  }),
  validations: {
    cardNum: { required },
  },
  methods: {
    passCardNum() {
      this.$store.dispatch('actionCardNum', this.cardNum)
    },
  },
}
</script>
