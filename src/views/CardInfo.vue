<template>
  <div id="div">
    <div class="main-back"></div>
    <div class="nav"></div>
    <div class="emty-field __payment"></div>

    <img
      v-if="returnLink === 'fir'"
      src="@/profile/Payment/images/Card.svg"
      class="card-info__first"
    />
    <img
      v-if="returnLink === 'sec'"
      src="@/profile/AddNewCard/images/Rectangle14.png"
      class="card-info__sec"
    />
    <img
      v-if="returnLink === 'sec'"
      src="@/profile/AddNewCard/images/Rectangle14.png"
      class="card-info-backside__sec"
    />
    <button
      class="firstCardPosition"
      :class="{ secondCardPosition: returnLink === 'sec' }"
      @click="$router.push('/payment')"
    >
      Вернуться
    </button>
    <img
      class="footer__newcard"
      src="@/profile/PersonalAccount/images/footer.png"
    />
    <div v-if="returnLink === 'sec'">
      <img
        src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
        alt="img"
        class="logo__info"
        v-if="returnCardName === 'Master card'"
      />
      <img
        src="@/profile/AddNewCard/images/Visa.svg"
        alt="img"
        class="logo__info"
        v-if="returnCardName === 'Visa'"
      />
      <p class="nameCardWithName z-index">{{ returnCardName }}</p>
      <p class="mmyy__info">{{ passInfoAboutNewCard[2] }}</p>
      <p class="num__info">{{ passInfoAboutNewCard[1] }}</p>
      <img
        class="card-chip z-index"
        src="@/profile/AddNewCard/images/chip.svg"
      />
      <img
        class="card-wifi z-index"
        src="@/profile/AddNewCard/images/wifi.svg"
      />
      <img
        src="@/profile/AddNewCard/images/CB.svg"
        alt="img"
        class="logo-cb z-index"
      />
      <img
        src="@/profile/AddNewCard/images/UniversalBank.svg"
        alt="img"
        class="logo-bank z-index"
      />
      <img
        src="@/profile/AddNewCard/images/Line2.svg"
        alt="img"
        class="logo-line z-index"
      />

      <img
        class="blackStripe back-side black"
        src="@/profile/AddNewCard/images/blackStripe.svg"
      />
      <img
        class="whiteStripe back-side white"
        src="@/profile/AddNewCard/images/whiteStripe.svg"
      />
      <img
        class="recSVG back-side recSVG-info"
        src="@/profile/AddNewCard/images/recSVG.svg"
      />
      <p class="firSecName back-side firSecName-info">
        {{ passInfoAboutNewCard[4] }}
      </p>
      <p class="recSVG-text back-side recSVG-text-info">
        {{ passInfoAboutNewCard[3] }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'returnLink',
    'returnCardName',
    'passInfoAboutNewCard',
  ]),
}
</script>
