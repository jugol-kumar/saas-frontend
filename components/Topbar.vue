<script setup>
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="top-bar"
        :class="{'scrolled-header': isScrolled}"
  >
    <ul class="d-flex align-items-center gap-2 top-bar-links">
      <li>
          <NuxtLink to="" class="top-bar-links-link">
            <Icon name="material-symbols:mail-outline"  size="20" />
          </NuxtLink>
      </li>
      <li>
        <NuxtLink to="" class="top-bar-links-link">
          <Icon name="ic:outline-chat"  size="20" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="" class="top-bar-links-link">
          <Icon name="mdi:mastodon-variant" size="20" />
        </NuxtLink>
      </li>
    </ul>

    <ul class="d-flex align-items-center gap-3">
      <li class="d-flex align-items-center gap-1">
        <!--     Toggle Dark Light Mood     -->
        <button type="button" class="icon-hover">
          <Icon name="ph:sun-bold"  />
        </button>

        <div class="dropdown">
          <button class="dropdown-toggle icon-hover" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Icon name="material-symbols:notifications-outline" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Notification</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="dropdown avatar-toggler">
          <div class="dropdown-toggle d-flex align-items-center justify-content-center gap-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div>
              <h4>Tushar Imran</h4>
              <p class="text-end">Admin</p>
            </div>
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" alt="avatar">
          </div>
          <ul class="dropdown-menu bg-glass-morphi glass-morphi-border blur-bg">
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:account-box-sharp" class="icon" /> Profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:android-messages" class="icon" /> Inbox
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:add-task" class="icon" /> Task
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:mark-chat-unread-rounded" class="icon" /> Chat
              </NuxtLink>
            </li>
            <li class="border my-2"></li>
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:settings-b-roll-rounded" class="icon" /> Setting
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="dropdown-item d-flex align-items-center gap-2" to="dashboard/profile">
                <Icon name="material-symbols:logout" class="icon" /> Logout
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.scrolled-header {
  position: fixed;
  width: auto;
  top: 10px;
  left: 310px;
  right: 10px;
  z-index: 999;
  backdrop-filter: blur(20px);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>
