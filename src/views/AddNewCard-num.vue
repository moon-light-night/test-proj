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
      content__nameCard__stars__num 
      content__nameCard__stars__num-top"
      >
        {{ cardNum }}
      </p>
      <p class="content__nameCard__mmyy">мм / yy</p>
      <fieldset class="content__nameCard__field__input-outside">
        <legend class="content__nameCard__field__legend">Номер карты</legend>
        <input
          type="text"
          id="cardNum"
          class="content__nameCard__field__input-inside"
          v-model="cardNum"
          placeholder="Например 1234 1234 1234 1234"
          maxlength="19"
        />
      </fieldset>
      <button
        :disabled="
          !$v.cardNum.required ||
            !$v.cardNum.minLength ||
            !$v.cardNum.maxLength ||
            this.regxLetter
        "
        :class="{
          invalid:
            !$v.cardNum.required ||
            !$v.cardNum.minLength ||
            !$v.cardNum.maxLength ||
            this.regxLetter,
        }"
        class="content__nameCard__field__btn-continue"
        @click="passCardNum(), $router.push('/new-card-mmyy')"
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
    cardNum: '',
    findSymbol: /\s+/gm,
    findLetter: /[a-z]/gim,
    regxLetter: null,
  }),
  validations: {
    cardNum: {
      required,
      minLength: minLength(19),
      maxLength: maxLength(19),
    },
  },
  updated() {
    let regVar = document
      .querySelector('#cardNum')
      .value.replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
    document.querySelector('#cardNum').value = regVar
    if (this.cardNum.length === 19) {
      this.regxLetter = this.findLetter.test(this.cardNum)
    }
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
