<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn color="primary" @click="clearAll" block>清空</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import zhongzus from "@/assets/dd_zhongzus_fetter.json"
  import zhiyes from "@/assets/dd_zhiyes_fetter.json"

  import { mapGetters } from "vuex"

  export default {
    data() {
      return {
        zhongzus: zhongzus,
        zhiyes: zhiyes
      }
    },
    methods: {
      clearAll() {
        for (let element of zhongzus) {
          this.$store.dispatch("clearZhongzu", element.id)
        }
        for (let element of zhiyes) {
          this.$store.dispatch("clearZhiye", element.id)
        }
        const refs = this.$parent.$refs.herotable.$refs
        for (let e in refs) {
          const children = refs[e]
          for (let cc in children) {
            children[cc].clearAll()
          }
        }
      },
      addLaizi() {
        for (let element of zhiyes) {
          this.$store.dispatch("incZhiye", element.id)
        }
      },
      delLaizi() {
        for (let element of zhiyes) {
          this.$store.dispatch("decZhiye", element.id)
        }
      }
    }
  }
</script>

<style>
</style>