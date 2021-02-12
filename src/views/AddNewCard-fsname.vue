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
    <p class="firSecName">{{ cardfsname }}</p>
    <p class="recSVG-text">{{ returnCardcvv }}</p>

    <fieldset class="field">
      <legend>Имя Фамилия</legend>
      <input
        type="text"
        id="cardfsname"
        v-model="cardfsname"
        placeholder="Например Maria Mar"
        maxlength="30"
      />
    </fieldset>
    <button
      :disabled="
        !$v.cardfsname.required ||
          !$v.cardfsname.minLength ||
          !$v.cardfsname.maxLength
      "
      :class="{
        invalid:
          !$v.cardfsname.required ||
          !$v.cardfsname.minLength ||
          !$v.cardfsname.maxLength,
      }"
      class="btn-continue"
      @click="passCardfsname(), $router.push('/payment'), addCard()"
    >
      Сохранить
    </button>
    <img
      class="footer__newcard"
      src="@/profile/PersonalAccount/images/footer.png"
    />
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardfsname: '',
  }),
  validations: {
    cardfsname: { required, minLength: minLength(5), maxLength: maxLength(29) },
  },
  computed: mapGetters(['returnCardcvv']),
  methods: {
    passCardfsname() {
      this.$store.dispatch('actionCardfsname', this.cardfsname)
    },
    addCard() {},
  },
}
</script>
