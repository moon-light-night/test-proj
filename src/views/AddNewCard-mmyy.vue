<template>
  <div>
    <div class="content__newCard"></div>
    <div class="main-layout">
      <p class="nameCardWithName">
        {{ returnCardNameThird || returnCardNameSecond || returnCardName }}
      </p>
      <img
        class="card-position"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <img class="card-wifi" src="@/profile/AddNewCard/images/wifi.svg" />
      <img class="card-chip" src="@/profile/AddNewCard/images/chip.svg" />
      <p class="card-stars card-stars__num">
        {{ returnCardNumThird || returnCardNumSecond || returnCardNum }}
      </p>
      <p class="mmyy mmyy-media">{{ cardmmyy }}</p>
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
  computed: mapGetters([
    'returnCardNum',
    'returnCardName',
    'returnCardNameSecond',
    'returnCardNameThird',
    'returnCardNumSecond',
    'returnCardNumThird',
    'passInfoAboutNewCard',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
  methods: {
    passCardmmyy() {
      if (this.passInfoAboutNewCard === null) {
        this.$store.dispatch('actionCardmmyy', this.cardmmyy)
      } else if (this.returnInfoSecond === null) {
        this.$store.dispatch('actionCardmmyySecond', this.cardmmyy)
      } else if (this.returnInfoThird === null) {
        this.$store.dispatch('actionCardmmyyThird', this.cardmmyy)
      }
    },
  },
}
</script>
