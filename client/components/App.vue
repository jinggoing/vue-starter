<template>
  <div id="app">
    <div>
      <router-link to="home">Home</router-link>
      <router-link to="xx">Test</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>
