<template>
  <div>
    <div class="content"></div>
    <div class="person-layout"></div>
    <div class="list-layout"></div>
    <ul>
      <li>
        <img
          @click="$router.push('/main-page')"
          class="close-account-button"
          src="@/profile/PersonalAccount/images/close.png"
        />
      </li>
      <li class="avatar">
        <img src="@/profile/PersonalAccount/images/Avatar.png" />
      </li>
      <li><p class="user-name-text">Мария Маракова</p></li>
      <li><p class="phone-number">+7 (911) 715-58-67</p></li>
      <li>
        <ul
          class="personal-info second mgn-btm"
          @click="$router.push('/main-page')"
        >
          <li><p class="line"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/bookmark2.png"
            />
          </li>
          <li><p>Персональная информация</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>

      <li>
        <ul class="personal-info second" @click="$router.push('/main-page')">
          <li><p class="line-list"></p></li>
          <li>
            <img class="svg" src="@/profile/PersonalAccount/images/star1.svg" />
          </li>
          <li><p>Услуги</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li>
        <ul class="personal-info second" @click="$router.push('/main-page')">
          <li><p class="line-list"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/folder1.svg"
            />
          </li>
          <li><p>Документы</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li>
        <ul class="personal-info second" @click="$router.push('/payment')">
          <li><p class="line-list"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/payment1.svg"
            />
          </li>
          <li><p>Оплаты</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li>
        <ul class="personal-info second" @click="$router.push('/main-page')">
          <li><p class="line-list"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/inboxmax.png"
            />
          </li>
          <li><p>Сообщения</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li>
        <ul class="personal-info second" @click="$router.push('/main-page')">
          <li><p class="line-list"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/tasks1.svg"
            />
          </li>
          <li><p>Уведомления</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
      </li>
      <li>
        <ul class="personal-info second" @click="$router.push('/main-page')">
          <li><p class="line-list"></p></li>
          <li>
            <img
              class="svg"
              src="@/profile/PersonalAccount/images/settings1.svg"
            />
          </li>
          <li><p>Настройки</p></li>
          <li>
            <img
              class="arrow"
              src="@/profile/PersonalAccount/images/arrow.svg"
            />
          </li>
        </ul>
        <ul class="personal-info second mgn-tp">
          <li>
            <img
              @click="$router.push('/main-page')"
              class="svg"
              src="@/profile/PersonalAccount/images/lock1.svg"
            />
          </li>
          <li><p @click="$router.push('/main-page')">Выйти</p></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
