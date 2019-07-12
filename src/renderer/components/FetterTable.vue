<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(item, index) in zhongzus" :key="`zhongzu-${index}`" v-show="showZhongzuFetters(item.name, 1)">
        <v-card>
          <v-card-actions>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-img :src="item.icon"></v-img>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{item.name}}-{{showZhongzuCount(item.name)}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
          <v-card-title v-show="showZhongzuFetters(item.name, skill.count)" v-for="(skill, index) in item.skills" :key="`skill-${index}`">
            <span>{{ skill.count }}-{{ skill.desc }}</span>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4 v-for="(item, index) in zhiyes" :key="`zhiye-${index}`" v-show="showZhiyeFetters(item.name, 1)">
        <v-card>
          <v-card-actions>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-img :src="item.icon"></v-img>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{item.name}}-{{showZhiyeCount(item.name)}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
          <v-card-title v-show="showZhiyeFetters(item.name, skill.count)" v-for="(skill, index) in item.skills" :key="`skill-${index}`">
            <span>{{ skill.count }}-{{ skill.desc }}</span>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import zhongzus from '@/assets/dd_zhongzus_fetter.json'
  import zhiyes from '@/assets/dd_zhiyes_fetter.json'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        zhongzus: zhongzus,
        zhiyes: zhiyes
      }
    },
    computed: {
      ...mapGetters(['get_zhongzu_fetters', 'get_zhiye_fetters'])
    },
    methods: {
      showZhongzuCount(name) {
        if (this.get_zhongzu_fetters[name] && this.get_zhongzu_fetters[name].count) {
          return this.get_zhongzu_fetters[name].count
        }
        return 0
      },
      showZhiyeCount(name) {
        if (this.get_zhiye_fetters[name] && this.get_zhiye_fetters[name].count) {
          return this.get_zhiye_fetters[name].count
        }
        return 0
      },
      hasEmoZhongzuFetter() {
        let zhongzuname = '恶魔'
        if (this.get_zhongzu_fetters[zhongzuname] && this.get_zhongzu_fetters[zhongzuname].count === 1) {
          return true
        }
        return false
      },
      hasOtherZhongzuFetter() {
        for (let zhongzu of zhongzus) {
          if (zhongzu.name !== '神族' && zhongzu.name !== '恶魔') {
            if (this.get_zhongzu_fetters[zhongzu.name] && this.get_zhongzu_fetters[zhongzu.name].count >= zhongzu.skills[0].count) {
              return true
              break
            }
          }
        }
        return false
      },
      showZhongzuFetters(name, skillcount) {
        if (name === '恶魔') {
          if (this.get_zhongzu_fetters[name] && this.get_zhongzu_fetters[name].count === 1) {
            return true
          }
        } else if (name === '神族') {
          if (this.get_zhongzu_fetters[name] && this.get_zhongzu_fetters[name].count >= skillcount && !this.hasOtherZhongzuFetter() && !this.hasEmoZhongzuFetter()) {
            return true
          }
        } else if (this.get_zhongzu_fetters[name] && this.get_zhongzu_fetters[name].count >= skillcount) {
          return true
        }
        return false
      },
      showZhiyeFetters(name, skillcount) {
        if (this.get_zhiye_fetters[name] && this.get_zhiye_fetters[name].count >= skillcount) {
          return true
        }
        return false
      }
    }
  }
</script>
