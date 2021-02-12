<template>
  <div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>
    <div class="content__payment"></div>
    <div class="overFlow">
      <img
        @click="$router.push('/card-info'), getId()"
        class="card__payment"
        :class="{
          card__paymentAfterAdding: passInfoAboutNewCard !== null,
        }"
        id="fir"
        src="@/profile/Payment/images/Card.svg"
      />
      <img
        v-if="passInfoAboutNewCard !== null"
        @click="$router.push('/card-info'), getId()"
        id="sec"
        class="secondCard"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <div class="third-div" v-if="passInfoAboutNewCard !== null">
        <h1 class="h-payment">
          {{ passInfoAboutNewCard[0] }}
        </h1>
      </div>
      <img
        v-if="returnInfoSecond !== null"
        @click="$router.push('/card-info'), getId()"
        id="th"
        class="thirdCard"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <div class="third-div" v-if="returnInfoSecond !== null">
        <h1 class="h-payment-third">
          {{ returnInfoSecond[0] }}
        </h1>
      </div>
      <img
        v-if="returnInfoThird !== null"
        @click="$router.push('/card-info'), getId()"
        id="fth"
        class="fourthCard"
        src="@/profile/AddNewCard/images/Rectangle14.png"
      />
      <div class="fourth-div" v-if="returnInfoThird !== null">
        <h1 class="h-payment-fourth">
          {{ returnInfoThird[0] }}
        </h1>
      </div>
    </div>
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
  computed: mapGetters([
    'passInfoAboutNewCard',
    'returnLink',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
  methods: {
    getId() {
      this.link = event.target.id
      this.$store.dispatch('passId', this.link)
    },
  },
}
</script>
