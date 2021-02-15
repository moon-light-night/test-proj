<template>
  <div>
    <div class="content__newCard"></div>
    <div class="main-layout">
      <img
        class="content__nameCard-position"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <img
        class="content__nameCard__blackStripe"
        src="@/profile/AddNewCard/images/blackStripe.svg"
      />
      <img
        class="content__nameCard__whiteStripe"
        src="@/profile/AddNewCard/images/whiteStripe.svg"
      />
      <img
        class="content__nameCard__recSVG"
        src="@/profile/AddNewCard/images/recSVG.svg"
      />
      <p class="content__nameCard__fullName">Имя Фамилия</p>
      <p class="content__nameCard__recSVG-text">{{ cardcvv }}</p>
      <fieldset class="content__nameCard__field__input-outside">
        <legend class="content__nameCard__field__legend">CVV</legend>
        <input
          type="text"
          id="cardcvv"
          class="content__nameCard__field__input-inside"
          v-model="cardcvv"
          placeholder="Например 123"
          maxlength="3"
        />
      </fieldset>
      <button
        :disabled="
          !$v.cardcvv.required ||
            !$v.cardcvv.minLength ||
            !$v.cardcvv.maxLength ||
            !$v.cardcvv.numeric ||
            this.regxSpace
        "
        :class="{
          invalid:
            !$v.cardcvv.required ||
            !$v.cardcvv.minLength ||
            !$v.cardcvv.maxLength ||
            !$v.cardcvv.numeric ||
            this.regxSpace,
        }"
        class="content__nameCard__field__btn-continue"
        @click="passCardcvv(), $router.push('/new-card-fsname')"
      >
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardcvv: '',
    findSpace: / /m,
    regxSpace: null,
  }),
  updated() {
    if (this.cardcvv.length === 3) {
      this.regxSpace = this.findSpace.test(this.cardcvv)
    }
  },
  validations: {
    cardcvv: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(3),
      numeric,
    },
  },
  computed: mapGetters([
    'returnCardNum',
    'returnCardName',
    'returnCardNameSecond',
    'returnCardNumSecond',
    'passInfoAboutNewCard',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
  methods: {
    passCardcvv() {
      if (this.passInfoAboutNewCard === null) {
        this.$store.dispatch('actionCardcvv', this.cardcvv)
      } else if (this.returnInfoSecond === null) {
        this.$store.dispatch('actionCardcvvSecond', this.cardcvv)
      } else if (this.returnInfoThird === null) {
        this.$store.dispatch('actionCardcvvThird', this.cardcvv)
      }
    },
  },
}
</script>
