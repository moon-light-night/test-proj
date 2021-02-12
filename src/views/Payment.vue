<template>
  <div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <div class="content__payment"></div>
    <ul class="ul">
      <li>
        <img
          @click="$router.push('/card-info'), getId()"
          class="card__payment"
          id="fir"
          :class="{
            card__paymentAfterAdding: passInfoAboutNewCard.length !== 0,
          }"
          src="@/profile/Payment/images/Card.svg"
        />
      </li>
      <li v-if="passInfoAboutNewCard.length !== 0">
        <img
          @click="$router.push('/card-info'), getId()"
          id="sec"
          class="secondCard"
          src="@/profile/Payment/images/secondCard.png"
        />
      </li>
    </ul>
    <img class="btn__payment" src="@/profile/Payment/images/Rectangle3.svg" />
    <p class="addCard__payment" @click="$router.push('/new-card')">
      Добавить новую карту
    </p>
    <img
      class="footer__payment"
      src="@/profile/PersonalAccount/images/footer.png"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    link: '',
  }),
  computed: mapGetters(['passInfoAboutNewCard']),
  methods: {
    getId() {
      this.link = event.target.id
      this.$store.dispatch('passId', this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  color: white;
  z-index: 500;
}
</style>
