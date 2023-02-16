<template><h1>Geolocate page</h1></template>

<script setup>

const test = await useFetch('/api/static/nationalities/fr.json')

console.log('test is', test)

</script>