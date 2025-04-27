<template>
  <header>
    <h1 id="headerTitle">Calculator</h1>

    <nav>
      <RouterLink id="addLink" to="/">Add</RouterLink>
      <RouterLink id="subtractLink" to="/subtract">Subtract</RouterLink>
      <RouterLink id="multiplyLink" to="/multiply">Multiply</RouterLink>
      <RouterLink id="divideLink" to="/divide">Divide</RouterLink>
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
