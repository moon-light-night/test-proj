<template>
  <div>
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <img class="card-position" src="@/profile/AddNewCard/images/defCard.svg" />
    <fieldset class="field">
      <legend>Название карты</legend>
      <input
        type="text"
        id="cardField"
        v-model="cardField"
        placeholder="Например Visa"
      />
    </fieldset>
    <button
      :disabled="!$v.cardField.required"
      :class="{ invalid: !$v.cardField.required }"
      class="btn-continue"
    >
      Продолжить
    </button>
    <img
      class="footer__newcard"
      src="@/profile/PersonalAccount/images/footer.png"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    cardField: '',
  }),
  validations: {
    cardField: { required },
  },
}
</script>

<style lang="scss" scoped></style>
