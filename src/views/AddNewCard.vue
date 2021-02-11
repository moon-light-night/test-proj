<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <p class="nameCard" v-if="this.cardField !== 'Master card'">
      Название карты
    </p>
    <img
      class="card-position"
      src="@/profile/AddNewCard/images/Rectangle14.png"
    />
    <img class="card-wifi" src="@/profile/AddNewCard/images/wifi.svg" />
    <img class="card-chip" src="@/profile/AddNewCard/images/chip.svg" />
    <img class="card-stars" src="@/profile/AddNewCard/images/stars.svg" />
    <p class="mmyy">мм / yy</p>
    <fieldset class="field">
      <legend>Название карты</legend>
      <input
        type="text"
        id="cardField"
        v-model="cardField"
        placeholder="Например Visa"
      />
    </fieldset>
    <button
      :disabled="!$v.cardField.required"
      :class="{ invalid: !$v.cardField.required }"
      class="btn-continue"
      @click="passCardName"
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
      v-if="this.cardField === 'Master card'"
    />
    <img
      src="@/profile/AddNewCard/images/CB.svg"
      alt="img"
      class="logo-cb"
      v-if="this.cardField === 'Master card'"
    />
    <img
      src="@/profile/AddNewCard/images/UniversalBank.svg"
      alt="img"
      class="logo-bank"
      v-if="this.cardField === 'Master card'"
    />
    <img
      src="@/profile/AddNewCard/images/Line2.svg"
      alt="img"
      class="logo-line"
      v-if="this.cardField === 'Master card'"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    cardField: '',
  }),
  validations: {
    cardField: { required },
  },
  methods: {
    passCardName() {
      this.$store.dispatch('actionCardName', this.cardField)
    },
  },
  watch: {
    cardField: function() {
      if (this.cardField === 'Master card') {
        console.log('working')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
