<template>
  <div>
    <div class="content"></div>
    <div class="person__layout"></div>
    <div class="list__layout"></div>
    <ul class="content__list">
      <li class="content__list__item">
        <img
          @click="$router.push('/main-page')"
          class="content__close-btn"
          src="@/profile/PersonalAccount/images/close.png"
        />
      </li>
      <li class="content__list__item-avatar">
        <img
          class="content__list__item-img"
          src="@/profile/PersonalAccount/images/Avatar.png"
        />
      </li>
      <li class="content__list__item">
        <p class="content__list__item-user">Мария Маракова</p>
      </li>
      <li class="content__list__item">
        <p class="content__list__item-phoneNumber">+7 (911) 715-58-67</p>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo 
          content__list__item__personalInfo-second 
          content__list__item__personalInfo-mgn-btm"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line
            content__list__item__personalInfo-row
          "
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/bookmark2.png"
            />
          </li>
          <li>
            <p class="content__list__item__personalInfo-row">
              Персональная информация
            </p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>

      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo content__list__item__personalInfo-second"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/star1.svg"
            />
          </li>
          <li><p class="content__list__item__personalInfo-row">Услуги</p></li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo content__list__item__personalInfo-second"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/folder1.svg"
            />
          </li>
          <li>
            <p class="content__list__item__personalInfo-row">Документы</p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo content__list__item__personalInfo-second"
          @click="$router.push('/payment')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/payment1.svg"
            />
          </li>
          <li><p class="content__list__item__personalInfo-row">Оплаты</p></li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo content__list__item__personalInfo-second"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/inboxmax.png"
            />
          </li>
          <li>
            <p class="content__list__item__personalInfo-row">Сообщения</p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo content__list__item__personalInfo-second"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/tasks1.svg"
            />
          </li>
          <li>
            <p class="content__list__item__personalInfo-row">Уведомления</p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li class="content__list__item">
        <ul
          class="content__list__item__personalInfo 
          content__list__item__personalInfo-second"
          @click="$router.push('/main-page')"
        >
          <li>
            <p
              class="content__list__item__personalInfo-line content__list__item__personalInfo-row"
            ></p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-svg"
              src="@/profile/PersonalAccount/images/settings1.svg"
            />
          </li>
          <li>
            <p class="content__list__item__personalInfo-row">
              Настройки
            </p>
          </li>
          <li>
            <img
              class="content__list__item__personalInfo-arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
        <ul
          class="content__list__item__personalInfo 
          content__list__item__personalInfo-second 
          content__list__item__personalInfo-mgn-tp"
        >
          <li>
            <img
              @click="$router.push('/main-page')"
              class="content__list__item__personalInfo-svg cursor_logout"
              src="@/profile/PersonalAccount/images/lock1.svg"
            />
          </li>
          <li>
            <p
              class="content__list__item__personalInfo-row cursor_logout"
              @click="$router.push('/main-page')"
            >
              Выйти
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
