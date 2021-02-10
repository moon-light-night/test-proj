<template>
  <v-app>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <div class="content__payment"></div>
    <img
      @click="$router.push('/card-info')"
      class="card__payment"
      src="@/profile/Payment/images/Card.svg"
    />
    <img class="btn__payment" src="@/profile/Payment/images/Rectangle3.svg" />
    <p class="addCard__payment">Добавить новую карту</p>
    <img
      class="footer__payment"
      src="@/profile/PersonalAccount/images/footer.png"
    />
    <div class="footer-rectangle"></div>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
