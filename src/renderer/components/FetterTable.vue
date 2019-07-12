<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(item, index) in zhongzus" v-show="showZhongzuFetters(item.name, 1)">
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

      <v-flex xs12 sm6 md4 v-for="(item, index) in zhiyes" v-show="showZhiyeFetters(item.name, 1)">
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
      showZhongzuFetters(name, skillcount) {
        if (this.get_zhongzu_fetters[name] && this.get_zhongzu_fetters[name].count >= skillcount) {
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
