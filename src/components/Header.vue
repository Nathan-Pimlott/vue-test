<template>
  <header>
    <h1>Calculator</h1>

    <nav>
      <RouterLink to="/">Add</RouterLink>
      <RouterLink to="/subtract">Subtract</RouterLink>
      <RouterLink to="/multiply">Multiply</RouterLink>
      <RouterLink to="/divide">Divide</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #422c21;
  display: flex;
  padding: 1rem;
  color: white;
}

h1 {
  flex: 1;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
  margin: auto 0 auto 20px;
}

nav {
  display: flex;
}
</style>
