<template>
  <div>
    <div class="content__newCard"></div>
    <div class="main-layout">
      <p class="content__nameCard__field">
        {{ returnCardNameThird || returnCardNameSecond || returnCardName }}
      </p>
      <img
        class="content__nameCard-position"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <img
        class="content__nameCard__wifi"
        src="@/profile/AddNewCard/images/wifi.svg"
      />
      <img
        class="content__nameCard__chip"
        src="@/profile/AddNewCard/images/chip.svg"
      />
      <p
        class="content__nameCard__stars 
      content__nameCard__stars__num "
      >
        {{ returnCardNumThird || returnCardNumSecond || returnCardNum }}
      </p>
      <p class="content__nameCard__mmyy content__nameCard__mmyy-media">
        {{ cardmmyy }}
      </p>
      <fieldset class="content__nameCard__field__input-outside">
        <legend class="content__nameCard__field__legend">Срок действия</legend>
        <input
          type="text"
          id="cardmmyy"
          class="content__nameCard__field__input-inside"
          v-model="cardmmyy"
          placeholder="Например 08/24"
          maxlength="5"
        />
      </fieldset>
      <button
        :disabled="
          !$v.cardmmyy.required ||
            !$v.cardmmyy.minLength ||
            !$v.cardmmyy.maxLength ||
            !this.regxSlesh ||
            this.regxSpace ||
            this.regxLetter
        "
        :class="{
          invalid:
            !$v.cardmmyy.required ||
            !$v.cardmmyy.minLength ||
            !$v.cardmmyy.maxLength ||
            !this.regxSlesh ||
            this.regxSpace ||
            this.regxLetter,
        }"
        class="content__nameCard__field__btn-continue"
        @click="passCardmmyy(), $router.push('/new-card-cvv')"
      >
        Продолжить
      </button>
      <img
        src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
        alt="img"
        class="content__nameCard__logo"
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
        class="content__nameCard__logo"
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
        class="content__nameCard__logo"
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
      <img
        src="@/profile/AddNewCard/images/CB.svg"
        alt="img"
        class="content__nameCard__logo-cb"
      />
      <img
        src="@/profile/AddNewCard/images/UniversalBank.svg"
        alt="img"
        class="content__nameCard__logo-bank"
      />
      <img
        src="@/profile/AddNewCard/images/Line2.svg"
        alt="img"
        class="content__nameCard__logo-line"
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
    findLetter: /[a-z]/im,
    findSlesh: /[\/]/m,
    findSpace: / /m,
    regxLetter: null,
    regxSlesh: null,
    regxSpace: null,
  }),
  validations: {
    cardmmyy: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5),
    },
  },
  updated() {
    let regVar = document
      .querySelector('#cardmmyy')
      .value.replace(/[^\dA-Z]/g, '')
      .replace(/(.{2})/g, '$1/')
      .trim()
      .substr(0, 5)
    document.querySelector('#cardmmyy').value = regVar
    if (this.cardmmyy.length === 5) {
      this.regxSpace = this.findSpace.test(this.cardmmyy)
      this.regxSlesh = this.findSlesh.test(this.cardmmyy)
      this.regxLetter = this.findLetter.test(this.cardmmyy)
    }
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
