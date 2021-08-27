<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">
          <a>Home</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">
          <a>About</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">
          <a>Contact</a>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  background: #ff7f50;
  padding: 0.3rem;
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    & a {
      margin-left: 1rem;
      text-decoration: none;
    }
  }
}
</style>
