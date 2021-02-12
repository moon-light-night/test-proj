<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <p
      class="nameCard"
      v-if="
        this.cardField !== 'Master card' &&
          this.cardField !== 'Visa' &&
          this.cardField !== 'МИР'
      "
    >
      Название карты
    </p>
    <p class="nameCardWithName">{{ cardField }}</p>
    <img
      class="card-position"
      src="@/profile/AddNewCard/images/Rectangle14.png"
    />
    <img class="card-wifi" src="@/profile/AddNewCard/images/wifi.svg" />
    <img class="card-chip" src="@/profile/AddNewCard/images/chip.svg" />
    <img class="card-stars" src="@/profile/AddNewCard/images/stars.svg" />
    <p class="mmyy">мм / yy</p>
    <fieldset class="field">
      <legend>Название карты</legend>
      <input
        type="text"
        id="cardField"
        v-model="cardField"
        placeholder="Например Visa"
        maxlength="20"
      />
    </fieldset>
    <button
      :disabled="
        !$v.cardField.required ||
          !$v.cardField.minLength ||
          !$v.cardField.maxLength
      "
      :class="{
        invalid:
          !$v.cardField.required ||
          !$v.cardField.minLength ||
          !$v.cardField.maxLength,
      }"
      class="btn-continue"
      @click="passCardName(), $router.push('/new-card-num')"
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
      v-if="this.cardField === 'Master card'"
    />
    <img
      src="@/profile/AddNewCard/images/Visa.svg"
      alt="img"
      class="logo"
      v-if="this.cardField === 'Visa'"
    />
    <img
      src="@/profile/AddNewCard/images/mir.svg"
      alt="img"
      class="logo"
      v-if="this.cardField === 'МИР'"
    />
    <img
      src="@/profile/AddNewCard/images/CB.svg"
      alt="img"
      class="logo-cb"
      v-if="
        this.cardField === 'Master card' ||
          this.cardField === 'Visa' ||
          this.cardField === 'МИР'
      "
    />
    <img
      src="@/profile/AddNewCard/images/UniversalBank.svg"
      alt="img"
      class="logo-bank"
      v-if="
        this.cardField === 'Master card' ||
          this.cardField === 'Visa' ||
          this.cardField === 'МИР'
      "
    />
    <img
      src="@/profile/AddNewCard/images/Line2.svg"
      alt="img"
      class="logo-line"
      v-if="
        this.cardField === 'Master card' ||
          this.cardField === 'Visa' ||
          this.cardField === 'МИР'
      "
    />
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    cardField: '',
  }),
  validations: {
    cardField: { required, minLength: minLength(3), maxLength: maxLength(19) },
  },
  computed: mapGetters([
    'passInfoAboutNewCard',
    'returnLink',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
  methods: {
    passCardName() {
      if (this.passInfoAboutNewCard === null) {
        this.$store.dispatch('actionCardName', this.cardField)
      } else if (this.returnInfoSecond === null) {
        this.$store.dispatch('actionCardNameSecond', this.cardField)
      } else if (this.returnInfoThird === null) {
        this.$store.dispatch('actionCardNameThird', this.cardField)
      }
    },
  },
}
</script>
