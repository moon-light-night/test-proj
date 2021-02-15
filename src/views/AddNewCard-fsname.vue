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
      <p class="content__nameCard__fullName">{{ cardfsname }}</p>
      <p class="content__nameCard__recSVG-text">
        {{ returnCardcvvThird || returnCardcvvSecond || returnCardcvv }}
      </p>
      <fieldset class="content__nameCard__field__input-outside">
        <legend class="content__nameCard__field__legend">Имя Фамилия</legend>
        <input
          type="text"
          id="cardfsname"
          class="content__nameCard__field__input-inside"
          v-model="cardfsname"
          placeholder="Например Maria Mar"
          maxlength="30"
        />
      </fieldset>
      <button
        :disabled="
          !$v.cardfsname.required ||
            !$v.cardfsname.minLength ||
            !$v.cardfsname.maxLength ||
            this.regxNum ||
            !this.regxSpace
        "
        :class="{
          invalid:
            !$v.cardfsname.required ||
            !$v.cardfsname.minLength ||
            !$v.cardfsname.maxLength ||
            this.regxNum ||
            !this.regxSpace,
        }"
        class="content__nameCard__field__btn-continue"
        @click="passCardfsname(), $router.push('/payment')"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardfsname: '',
    findSpace: / /m,
    findNum: /[0-9]/m,
    regxSpace: null,
    regxNum: null,
  }),
  validations: {
    cardfsname: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(29),
    },
  },
  computed: mapGetters([
    'returnCardcvv',
    'returnCardcvvSecond',
    'passInfoAboutNewCard',
    'returnInfoSecond',
    'returnInfoThird',
    'returnCardcvvThird',
  ]),
  updated() {
    // if (this.cardfsname.length === 5) {
    this.regxSpace = this.findSpace.test(this.cardfsname)
    this.regxNum = this.findNum.test(this.cardfsname)
    // }
  },
  methods: {
    passCardfsname() {
      if (this.passInfoAboutNewCard === null) {
        this.$store.dispatch('actionCardfsname', this.cardfsname)
      } else if (this.returnInfoSecond === null) {
        this.$store.dispatch('actionCardfsnameSecond', this.cardfsname)
      } else if (this.returnInfoThird === null) {
        this.$store.dispatch('actionCardfsnameThird', this.cardfsname)
      }
    },
  },
}
</script>
