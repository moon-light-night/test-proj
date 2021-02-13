<template>
  <div>
    <div class="content__newCard cardInfo"></div>
    <div class="main-layout">
      <img
        v-if="returnLink === 'fir'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="card-info__sec"
      />
      <img
        v-if="returnLink === 'fir'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="card-info-backside__sec"
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
      <img
        v-if="returnLink === 'th'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="card-info__sec"
      />
      <img
        v-if="returnLink === 'th'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="card-info-backside__sec"
      />

      <button
        class="secondCardPosition"
        :class="{ secondCardPosition: returnLink === 'sec' }"
        @click="$router.push('/payment')"
      >
        Вернуться
      </button>

      <div v-if="returnLink === 'fir'">
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
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardName === 'МИР'"
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

      <!-- -------------------------------------------------------------- -->
      <div v-if="returnLink === 'sec'">
        <img
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameSecond === 'Master card'"
        />
        <img
          src="@/profile/AddNewCard/images/Visa.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameSecond === 'Visa'"
        />
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameSecond === 'МИР'"
        />
        <p class="nameCardWithName z-index">{{ returnCardNameSecond }}</p>
        <p class="mmyy__info">{{ returnInfoSecond[2] }}</p>
        <p class="num__info">{{ returnInfoSecond[1] }}</p>
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
          {{ returnInfoSecond[4] }}
        </p>
        <p class="recSVG-text back-side recSVG-text-info">
          {{ returnInfoSecond[3] }}
        </p>
      </div>
      <!-- -------------------------------------------------------------- -->
      <div v-if="returnLink === 'th'">
        <img
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameThird === 'Master card'"
        />
        <img
          src="@/profile/AddNewCard/images/Visa.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameThird === 'Visa'"
        />
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="logo__info"
          v-if="returnCardNameThird === 'МИР'"
        />
        <p class="nameCardWithName z-index">{{ returnCardNameThird }}</p>
        <p class="mmyy__info">{{ returnInfoThird[2] }}</p>
        <p class="num__info">{{ returnInfoThird[1] }}</p>
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
          {{ returnInfoThird[4] }}
        </p>
        <p class="recSVG-text back-side recSVG-text-info">
          {{ returnInfoThird[3] }}
        </p>
      </div>
      <!-- -------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'returnLink',
    'returnCardName',
    'returnCardNameSecond',
    'passInfoAboutNewCard',
    'returnInfoSecond',
    'returnInfoThird',
  ]),
}
</script>
