<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <img
      class="card-position"
      src="@/profile/AddNewCard/images/Rectangle14.png"
    />

    <img
      class="blackStripe"
      src="@/profile/AddNewCard/images/blackStripe.svg"
    />
    <img
      class="whiteStripe"
      src="@/profile/AddNewCard/images/whiteStripe.svg"
    />
    <img class="recSVG" src="@/profile/AddNewCard/images/recSVG.svg" />
    <p class="firSecName">Имя Фамилия</p>
    <p class="recSVG-text">{{ cardcvv }}</p>

    <fieldset class="field">
      <legend>CVV</legend>
      <input
        type="text"
        id="cardcvv"
        v-model="cardcvv"
        placeholder="Например 123"
      />
    </fieldset>
    <button
      :disabled="!$v.cardcvv.required"
      :class="{ invalid: !$v.cardcvv.required }"
      class="btn-continue"
      @click="passCardcvv(), $router.push('/new-card-fsname')"
    >
      Продолжить
    </button>
    <img
      class="footer__newcard"
      src="@/profile/PersonalAccount/images/footer.png"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardcvv: '',
  }),
  validations: {
    cardcvv: { required },
  },
  methods: {
    passCardcvv() {
      this.$store.dispatch('actionCardcvv', this.cardcvv)
    },
  },
}
</script>
