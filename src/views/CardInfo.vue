<template>
  <div>
    <div class="content__newCard content__newCard-info"></div>
    <div class="main-layout">
      <img
        v-if="returnLink === 'fir'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecond"
      />
      <img
        v-if="returnLink === 'fir'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecondBackside"
      />
      <img
        v-if="returnLink === 'sec'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecond"
      />

      <img
        v-if="returnLink === 'sec'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecondBackside"
      />
      <img
        v-if="returnLink === 'th'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecond"
      />
      <img
        v-if="returnLink === 'th'"
        src="@/profile/AddNewCard/images/Rectangle14.png"
        class="content__newCard-infoSecondBackside"
      />

      <button
        class="content__newCard__secondCardPosition"
        :class="{ content__newCard__secondCardPosition: returnLink === 'sec' }"
        @click="$router.push('/payment')"
      >
        Вернуться
      </button>

      <div v-if="returnLink === 'fir'">
        <img
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardName === 'Master card'"
        />
        <img
          src="@/profile/AddNewCard/images/Visa.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardName === 'Visa'"
        />
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardName === 'МИР'"
        />
        <p class="content__nameCard__field z-index">{{ returnCardName }}</p>
        <p class="content__newCard__mmyyInfo">{{ passInfoAboutNewCard[2] }}</p>
        <p class="content__newCard__numInfo">{{ passInfoAboutNewCard[1] }}</p>
        <img
          class="content__nameCard__chip z-index"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          class="content__nameCard__wifi z-index"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          src="@/profile/AddNewCard/images/CB.svg"
          alt="img"
          class="content__nameCard__logo-cb z-index"
        />
        <img
          src="@/profile/AddNewCard/images/UniversalBank.svg"
          alt="img"
          class="content__nameCard__logo-bank z-index"
        />
        <img
          src="@/profile/AddNewCard/images/Line2.svg"
          alt="img"
          class="content__nameCard__logo-line z-index"
        />
        <img
          class="content__nameCard__blackStripe content__newCard-infoSecondBackside back-side black"
          src="@/profile/AddNewCard/images/blackStripe.svg"
        />
        <img
          class="content__nameCard__whiteStripe content__newCard__whiteStripe-infoSecondBackside back-side white"
          src="@/profile/AddNewCard/images/whiteStripe.svg"
        />
        <img
          class="content__nameCard__recSVG back-side content__newCard__recSVG-info "
          src="@/profile/AddNewCard/images/recSVG.svg"
        />
        <p
          class="content__nameCard__fullName back-side content__newCard__full-info"
        >
          {{ passInfoAboutNewCard[4] }}
        </p>
        <p
          class="content__nameCard__recSVG-text back-side content__newCard__recSVG__text-info"
        >
          {{ passInfoAboutNewCard[3] }}
        </p>
      </div>

      <!-- -------------------------------------------------------------- -->
      <div v-if="returnLink === 'sec'">
        <img
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameSecond === 'Master card'"
        />
        <img
          src="@/profile/AddNewCard/images/Visa.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameSecond === 'Visa'"
        />
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameSecond === 'МИР'"
        />
        <p class="content__nameCard__field z-index">
          {{ returnCardNameSecond }}
        </p>
        <p class="content__newCard__mmyyInfo">{{ returnInfoSecond[2] }}</p>
        <p class="content__newCard__numInfo">{{ returnInfoSecond[1] }}</p>
        <img
          class="content__nameCard__chip z-index"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          class="content__nameCard__wifi z-index"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          src="@/profile/AddNewCard/images/CB.svg"
          alt="img"
          class="content__nameCard__logo-cb z-index"
        />
        <img
          src="@/profile/AddNewCard/images/UniversalBank.svg"
          alt="img"
          class="content__nameCard__logo-bank z-index"
        />
        <img
          src="@/profile/AddNewCard/images/Line2.svg"
          alt="img"
          class="content__nameCard__logo-line z-index"
        />
        <img
          class="content__nameCard__blackStripe content__newCard-infoSecondBackside back-side black"
          src="@/profile/AddNewCard/images/blackStripe.svg"
        />
        <img
          class="content__nameCard__whiteStripe content__newCard__whiteStripe-infoSecondBackside back-side white"
          src="@/profile/AddNewCard/images/whiteStripe.svg"
        />
        <img
          class="content__nameCard__recSVG back-side content__newCard__recSVG-info "
          src="@/profile/AddNewCard/images/recSVG.svg"
        />
        <p
          class="content__nameCard__fullName back-side content__newCard__full-info"
        >
          {{ returnInfoSecond[4] }}
        </p>
        <p
          class="content__nameCard__recSVG-text back-side content__newCard__recSVG__text-info"
        >
          {{ returnInfoSecond[3] }}
        </p>
      </div>
      <!-- -------------------------------------------------------------- -->
      <div v-if="returnLink === 'th'">
        <img
          src="@/profile/AddNewCard/images/mc_vrt_rev1.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameThird === 'Master card'"
        />
        <img
          src="@/profile/AddNewCard/images/Visa.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameThird === 'Visa'"
        />
        <img
          src="@/profile/AddNewCard/images/mir.svg"
          alt="img"
          class="content__newCard__logoInfo"
          v-if="returnCardNameThird === 'МИР'"
        />
        <p class="content__nameCard__field z-index">
          {{ returnCardNameThird }}
        </p>
        <p class="content__newCard__mmyyInfo">{{ returnInfoThird[2] }}</p>
        <p class="content__newCard__numInfo">{{ returnInfoThird[1] }}</p>
        <img
          class="content__nameCard__chip z-index"
          src="@/profile/AddNewCard/images/chip.svg"
        />
        <img
          class="content__nameCard__wifi z-index"
          src="@/profile/AddNewCard/images/wifi.svg"
        />
        <img
          src="@/profile/AddNewCard/images/CB.svg"
          alt="img"
          class="content__nameCard__logo-cb z-index"
        />
        <img
          src="@/profile/AddNewCard/images/UniversalBank.svg"
          alt="img"
          class="content__nameCard__logo-bank z-index"
        />
        <img
          src="@/profile/AddNewCard/images/Line2.svg"
          alt="img"
          class="content__nameCard__logo-line z-index"
        />
        <img
          class="content__nameCard__blackStripe content__newCard-infoSecondBackside back-side black"
          src="@/profile/AddNewCard/images/blackStripe.svg"
        />
        <img
          class="content__nameCard__whiteStripe content__newCard__whiteStripe-infoSecondBackside back-side white"
          src="@/profile/AddNewCard/images/whiteStripe.svg"
        />
        <img
          class="content__nameCard__recSVG back-side content__newCard__recSVG-info "
          src="@/profile/AddNewCard/images/recSVG.svg"
        />
        <p
          class="content__nameCard__fullName back-side content__newCard__full-info"
        >
          {{ returnInfoThird[4] }}
        </p>
        <p
          class="content__nameCard__recSVG-text back-side content__newCard__recSVG__text-info"
        >
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
