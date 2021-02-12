<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <p class="nameCardWithName">{{ returnCardName }}</p>
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
        maxlength="5"
      />
    </fieldset>
    <button
      :disabled="
        !$v.cardmmyy.required ||
          !$v.cardmmyy.minLength ||
          !$v.cardmmyy.maxLength
      "
      :class="{
        invalid:
          !$v.cardmmyy.required ||
          !$v.cardmmyy.minLength ||
          !$v.cardmmyy.maxLength,
      }"
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
      v-if="returnCardName === 'Master card'"
    />
    <img
      src="@/profile/AddNewCard/images/Visa.svg"
      alt="img"
      class="logo"
      v-if="returnCardName === 'Visa'"
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardmmyy: '',
  }),
  validations: {
    cardmmyy: { required, minLength: minLength(5), maxLength: maxLength(5) },
  },
  computed: mapGetters(['returnCardNum', 'returnCardName']),
  methods: {
    passCardmmyy() {
      this.$store.dispatch('actionCardmmyy', this.cardmmyy)
    },
  },
}
</script>
