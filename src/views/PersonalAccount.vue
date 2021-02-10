<template>
  <v-app>
    <div class="nav"></div>
    <div class="emty-field"></div>
    <div class="person"></div>
    <img class="avatar" src="@/profile/PersonalAccount/images/Ellipse14.png" />
    <p class="user-name-text">Мария Маракова</p>
    <p class="phone-number">+7 (911) 715-58-67</p>
    <img
      class="close-account-button"
      src="@/profile/PersonalAccount/images/close.png"
    />
    <p class="line"></p>
    <div class="personal-info">
      <p>Персональная информация</p>
      <img src="@/profile/PersonalAccount/images/arrow.svg" />
      <img class="svg" src="@/profile/PersonalAccount/images/bookmark1.svg" />
    </div>
    <div class="content">
      <p class="line"></p>
      <div class="list"></div>
      <!-- hh -->
      <div class="item item-1">
        <img src="@/profile/PersonalAccount/images/star1.svg" class="icon" />
        <p>Услуги</p>
        <span></span>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <div class="item item-2">
        <img src="@/profile/PersonalAccount/images/folder1.svg" class="icon" />
        <p>Документы</p>
        <span></span>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <div class="item item-3">
        <img src="@/profile/PersonalAccount/images/payment1.svg" class="icon" />
        <p>Оплата</p>
        <span></span>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <div class="item item-4">
        <img src="@/profile/PersonalAccount/images/inbox1.svg" class="icon" />
        <p>Сообщения</p>
        <span></span>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <div class="item item-5">
        <img src="@/profile/PersonalAccount/images/tasks1.svg" class="icon" />
        <p>Уведомления</p>
        <span></span>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <div class="item item-6">
        <img
          src="@/profile/PersonalAccount/images/settings1.svg"
          class="icon"
        />
        <p>Настройки</p>
        <img src="@/profile/PersonalAccount/images/arrow.svg" class="arrow" />
      </div>
      <!-- hh -->
      <img
        class="logout-icon"
        src="@/profile/PersonalAccount/images/lock1.svg"
      />
      <p class="logout">Выйти</p>
      <img class="footer" src="@/profile/PersonalAccount/images/footer.png" />
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
