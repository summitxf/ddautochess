<template>
  <div>
    <v-item-group multiple>
      <v-subheader>种族</v-subheader>
      <v-item v-for="(zhongzu, index) in zhongzus" :key="`zhongzu-${index}`">
        <v-chip slot-scope="{ active, toggle }" :selected="active" :outline="!active" @click="toggle();selectZhongzu(!active,zhongzu.name)">
          <v-avatar>
            <v-img :src="zhongzu.icon"></v-img>
          </v-avatar>
          {{ zhongzu.name }}
        </v-chip>
      </v-item>
    </v-item-group>

    <v-item-group multiple>
      <v-subheader>职业</v-subheader>
      <v-item v-for="(zhiye, index) in zhiyes" :key="`zhiye-${index}`">
        <v-chip slot-scope="{ active, toggle }" :selected="active" :outline="!active" @click="toggle();selectZhiye(!active,zhiye.name)">
          <v-avatar>
            <v-img :src="zhiye.icon"></v-img>
          </v-avatar>
          {{ zhiye.name }}
        </v-chip>
      </v-item>
    </v-item-group>

    <v-item-group multiple>
      <v-subheader>英雄</v-subheader>
      <v-item v-for="(hero, index) in heros" :key="`hero-${index}`">
        <v-chip slot-scope="{ active, toggle }" v-show="showHero(hero.fields_data.cardType,hero.fields_data.category)" :color="getHeroStyle(hero.fields_data.cardQuality)" :selected="active" :outline="!active" @click="toggle();selectHero(!active,hero.fields_data.cardType,hero.fields_data.category)">
          <v-avatar>
            <v-img :src="hero.fields_data.icon"></v-img>
          </v-avatar>
          {{ hero.fields_data.name }}
        </v-chip>
      </v-item>
    </v-item-group>
  </div>
</template>


<script>
  import heros from '@/assets/dd_heros.json'
  import zhongzus from '@/assets/dd_zhongzus_fetter.json'
  import zhiyes from '@/assets/dd_zhiyes_fetter.json'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        heros: heros,
        zhongzus: zhongzus,
        zhiyes: zhiyes
      }
    },
    computed: {
      ...mapGetters(['get_zhongzu_fetters', 'get_zhiye_fetters', 'get_selected_zhongzus', 'get_selected_zhiyes'])
    },
    methods: {
      getHeroStyle(level) {
        switch (level) {
          case '普通':
            return '#d2d2d2'
          case '罕见':
            return '#aae6ed'
          case '稀有':
            return '#5268f4'
          case '神话':
            return '#b878ff'
          case '传说':
            return '#ff9600'
        }
      },
      selectZhongzu(active, zhongzu) {
        if (active) {
          this.$store.dispatch('addSelectedZhongzu', zhongzu)
        } else {
          this.$store.dispatch('delSelectedZhongzu', zhongzu)
        }
      },
      selectZhiye(active, zhiye) {
        if (active) {
          this.$store.dispatch('addSelectedZhiye', zhiye)
        } else {
          this.$store.dispatch('delSelectedZhiye', zhiye)
        }
      },
      selectHero(active, zhiyes, zhongzus) {
        if (active) {
          for (let element of zhiyes) {
            this.$store.dispatch('incZhiye', element)
          }
          for (let element of zhongzus) {
            this.$store.dispatch('incZhongzu', element)
          }
        } else {
          for (let element of zhiyes) {
            this.$store.dispatch('decZhiye', element)
          }
          for (let element of zhongzus) {
            this.$store.dispatch('decZhongzu', element)
          }
        }
      },
      showHero(zhiyes, zhongzus) {
        let hasZhongzu = this.get_selected_zhongzus.length == 0
        for (let element of zhongzus) {
          if (this.get_selected_zhongzus.some(e => e === element)) {
            hasZhongzu = true
            break
          }
        }
        let hasZhiye = this.get_selected_zhiyes.length == 0
        for (let element of zhiyes) {
          if (this.get_selected_zhiyes.some(e => e === element)) {
            hasZhiye = true
            break
          }
        }
        return hasZhongzu && hasZhiye
      }
    }
  }
</script>