<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <p class="nameCardWithName">
      {{ returnCardNameThird || returnCardNameSecond || returnCardName }}
    </p>
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
        maxlength="19"
      />
    </fieldset>
    <button
      :disabled="
        !$v.cardNum.required || !$v.cardNum.minLength || !$v.cardNum.maxLength
      "
      :class="{
        invalid:
          !$v.cardNum.required ||
          !$v.cardNum.minLength ||
          !$v.cardNum.maxLength,
      }"
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
      v-if="
        (returnCardName === 'Master card' &&
          returnCardNameSecond === '' &&
          returnCardNameThird === '') ||
          (returnCardNameSecond === 'Master card' &&
            (returnCardName === 'Visa' || 'МИР') &&
            returnCardNameThird === '') ||
          (returnCardNameThird === 'Master card' &&
            (returnCardName === 'Visa' || 'МИР') &&
            (returnCardNameSecond === 'Visa' || 'МИР'))
      "
    />
    <img
      src="@/profile/AddNewCard/images/mir.svg"
      alt="img"
      class="logo"
      v-if="
        (returnCardName === 'МИР' &&
          returnCardNameSecond === '' &&
          returnCardNameThird === '') ||
          (returnCardNameSecond === 'МИР' &&
            (returnCardName === 'Visa' || 'Master card') &&
            returnCardNameThird === '') ||
          (returnCardNameThird === 'МИР' &&
            (returnCardName === 'Visa' || 'Master card') &&
            (returnCardNameSecond === 'Visa' || 'Master card'))
      "
    />
    <img
      src="@/profile/AddNewCard/images/Visa.svg"
      alt="img"
      class="logo"
      v-if="
        (returnCardName === 'Visa' &&
          returnCardNameSecond === '' &&
          returnCardNameThird === '') ||
          (returnCardNameSecond === 'Visa' &&
            (returnCardName === 'МИР' || 'Master card') &&
            returnCardNameThird === '') ||
          (returnCardNameThird === 'Visa' &&
            (returnCardName === 'МИР' || 'Master card') &&
            (returnCardNameSecond === 'МИР' || 'Master card'))
      "
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
    cardNum: '',
  }),
  validations: {
    cardNum: { required, minLength: minLength(19), maxLength: maxLength(19) },
  },
  computed: mapGetters([
    'returnCardName',
    'returnCardNameSecond',
    'passInfoAboutNewCard',
    'returnCardNameThird',
    'returnInfoSecond',
    'returnInfoThird',
    'returnCardNameThird',
  ]),
  methods: {
    passCardNum() {
      if (this.passInfoAboutNewCard === null) {
        this.$store.dispatch('actionCardNum', this.cardNum)
      } else if (this.returnInfoSecond === null) {
        this.$store.dispatch('actionCardNumSecond', this.cardNum)
      } else if (this.returnInfoThird === null) {
        this.$store.dispatch('actionCardNumThird', this.cardNum)
      }
    },
  },
}
</script>
