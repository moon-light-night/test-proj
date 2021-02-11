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
    <p class="card-stars card-stars__num">{{ returnCardNum }}</p>
    <p class="mmyy">{{ cardmmyy }}</p>
    <fieldset class="field">
      <legend>Срок действия</legend>
      <input
        type="text"
        id="cardmmyy"
        v-model="cardmmyy"
        placeholder="Например 08/24"
      />
    </fieldset>
    <button
      :disabled="!$v.cardmmyy.required"
      :class="{ invalid: !$v.cardmmyy.required }"
      class="btn-continue"
      @click="passCardmmyy(), $router.push('/new-card-cvv')"
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
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardmmyy: '',
  }),
  validations: {
    cardmmyy: { required },
  },
  computed: mapGetters(['returnCardNum']),
  methods: {
    passCardmmyy() {
      this.$store.dispatch('actionCardmmyy', this.cardmmyy)
    },
  },
}
</script>
