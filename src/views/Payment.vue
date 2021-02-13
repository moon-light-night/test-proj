<template>
  <div>
    <div class="content__payment"></div>
    <div class="overFlow" :class="{ center: this.count === 1 }">
      <div
        class="div-card__payment-first"
        id="fir"
        v-if="passInfoAboutNewCard !== null"
        @click="getId(), $router.push('/card-info')"
      >
        <img
          id="fir"
          class="card__payment"
          src="@/profile/AddNewCard/images/emptyRec.png"
        />
        <img
          id="fir"
          class="card__payment-chip"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          id="fir"
          class="card__payment-wifi"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          id="fir"
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          class="logo__payment"
          v-if="passInfoAboutNewCard[0] === 'Master card'"
        />
        <img
          id="fir"
          src="@/profile/AddNewCard/images/Visa.svg"
          class="logo__payment"
          v-if="passInfoAboutNewCard[0] === 'Visa'"
        />
        <img
          id="fir"
          src="@/profile/AddNewCard/images/mir.svg"
          class="logo__payment"
          v-if="passInfoAboutNewCard[0] === 'МИР'"
        />

        <h5 id="fir">{{ passInfoAboutNewCard[1] }}</h5>
        <h4 id="fir">{{ passInfoAboutNewCard[0] }}</h4>
        <h3 id="fir">{{ passInfoAboutNewCard[4] }}</h3>
      </div>

      <!-- ---------------------------------------------------------------- -->

      <div
        class="div-card__payment-first"
        id="sec"
        v-if="returnInfoSecond !== null"
        @click="$router.push('/card-info'), getId()"
      >
        <img
          id="sec"
          class="card__payment"
          src="@/profile/AddNewCard/images/emptyRec.png"
        />
        <img
          id="sec"
          class="card__payment-chip"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          id="sec"
          class="card__payment-wifi"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          id="sec"
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          class="logo__payment"
          v-if="returnInfoSecond[0] === 'Master card'"
        />
        <img
          id="sec"
          src="@/profile/AddNewCard/images/Visa.svg"
          class="logo__payment"
          v-if="returnInfoSecond[0] === 'Visa'"
        />
        <img
          id="sec"
          src="@/profile/AddNewCard/images/mir.svg"
          class="logo__payment"
          v-if="returnInfoSecond[0] === 'МИР'"
        />

        <h5 id="sec">{{ returnInfoSecond[1] }}</h5>
        <h4 id="sec">{{ returnInfoSecond[0] }}</h4>
        <h3 id="sec">{{ returnInfoSecond[4] }}</h3>
      </div>

      <!-- ---------------------------------------------------------------- -->

      <div
        class="div-card__payment-first"
        id="th"
        v-if="returnInfoThird !== null"
        @click="$router.push('/card-info'), getId()"
      >
        <img
          id="th"
          class="card__payment"
          src="@/profile/AddNewCard/images/emptyRec.png"
        />
        <img
          id="th"
          class="card__payment-chip"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          id="th"
          class="card__payment-wifi"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          id="th"
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          class="logo__payment"
          v-if="returnInfoThird[0] === 'Master card'"
        />
        <img
          id="th"
          src="@/profile/AddNewCard/images/Visa.svg"
          class="logo__payment"
          v-if="returnInfoThird[0] === 'Visa'"
        />
        <img
          id="th"
          src="@/profile/AddNewCard/images/mir.svg"
          class="logo__payment"
          v-if="returnInfoThird[0] === 'МИР'"
        />

        <h5 id="th">{{ returnInfoThird[1] }}</h5>
        <h4 id="th">{{ returnInfoThird[0] }}</h4>
        <h3 id="th">{{ returnInfoThird[4] }}</h3>
      </div>
    </div>
    <!-- ---------------------------------------------------------------- -->
    <div class="btn-payment" @click="$router.push('/new-card')">
      <div>Добавить новую карту</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    link: '',
    count: 0,
  }),
  computed: mapGetters([
    'passInfoAboutNewCard',
    'returnLink',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
  mounted() {
    this.count = document.querySelector('.overFlow').childElementCount
    console.log(this.count)
  },
  methods: {
    getId() {
      this.link = event.target.id
      this.$store.dispatch('passId', this.link)
    },
  },
}
</script>
