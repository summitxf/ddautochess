<template>
  <div>
    <hero-table></hero-table>
    <fetter-table></fetter-table>
  </div>
</template>

<script>
  import HeroTable from './HeroTable'
  import FetterTable from './FetterTable'

  export default {
    components: { HeroTable, FetterTable }
  }
</script>

<style>
</style>