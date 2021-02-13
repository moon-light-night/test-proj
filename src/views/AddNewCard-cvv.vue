<template>
  <div>
    <div class="content__newCard"></div>
    <div class="main-layout">
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
          maxlength="3"
        />
      </fieldset>
      <button
        :disabled="
          !$v.cardcvv.required || !$v.cardcvv.minLength || !$v.cardcvv.maxLength
        "
        :class="{
          invalid:
            !$v.cardcvv.required ||
            !$v.cardcvv.minLength ||
            !$v.cardcvv.maxLength,
        }"
        class="btn-continue"
        @click="passCardcvv(), $router.push('/new-card-fsname')"
      >
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardcvv: '',
  }),
  validations: {
    cardcvv: { required, minLength: minLength(3), maxLength: maxLength(3) },
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
