<template>
  <VContainer>
    <!-- <WBC :value="theModelComp" mode='prod'></WBC> -->
    <!-- <WBC :value="`" :linear="true"></WBC> -->
    <!-- {{value}} -->
    <!-- ************* -->
    <VCard v-if="!simple" class="mx-auto" max-width="80%" outlined>
      <VToolbarTitle class="pink d-flex justify-space-between text-caption">
        <VRow dense>
          <VCol
            >Type:
            {{
              `${typeof value} ${
                Array.isArray(value) ? "Array" : value instanceof Object ? "-Dict" : ""
              }`
            }}</VCol
          >
          <VCol v-if="value instanceof Object || typeof value === 'string'"
            >Length: {{ Object.keys(value)?.length }}</VCol
          >
          <VCol v-if="value instanceof Object || typeof value === 'string'"
            >depth: {{ items?.length }}</VCol
          >

          <VCol v-if="value instanceof Object">
            <VSelect
              :items="items"
              v-model="theModelComp.depth.props.val"
              label="Depth"
            ></VSelect>
          </VCol>
        </VRow>
      </VToolbarTitle>

      <!-- <div v-if="!simple"> -->

      <json-viewer
        :value="value"
        theme="my-awesome-json-theme"
        :expand-depth="
          theModelComp instanceof Object ? theModelComp?.depth?.props?.val || 1 : 1
        "
        copyable
        boxed
        sort
        :key="randomKey('log1')"
      ></json-viewer>
      <!-- </div> -->
    </VCard>
    <VCard v-else>
      <VRow>
        {{ value instanceof Object ? "{" : '"' }}
      </VRow>

      <VRow>
        <VCol v-for="(data, key) in value" :key="key">
          <!-- <VCard> -->
          <!-- <VCard-title> -->

          <!-- </VCard-title> -->
          <!-- <VCard-text> -->
          <!-- {{value instanceof Object && !Array.isArray(value)?key:''}} -->
          {{ key }}:
          <json-viewer
            :value="data || 'null'"
            theme="my-awesome-json-theme"
            :expand-depth="
              theModelComp instanceof Object ? theModelComp?.depth?.props?.val || 1 : 1
            "
            copyable
            boxed
            sort
            :key="randomKey('log2')"
          >
          </json-viewer>
          <!-- </VCard-text> -->
          <!-- </VCard> -->
        </VCol>
      </VRow>
      <VRow>
        {{ value instanceof Object ? "}" : '"' }}
      </VRow>
    </VCard>
    <div v-if="value instanceof Object || typeof value === 'string'">
      <VCheckbox v-model="simple"></VCheckbox>Multiple displaying
    </div>
    <!-- </VCard> -->
  </VContainer>
</template>
<script>
import Vuex from "vuex";
import JsonViewer from "vue-json-viewer";
import { randomKey } from "../globals/variables";
import {
  VCard,
  VCheckbox,
  VSelect,
  VCol,
  VRow,
  VContainer,
  VToolbarTitle,
} from "vuetify/lib";
/* import * as vuetifyModule from 'vuetify/lib'; */

export default {
  name: "WBDataViewer",
  props: {
    value: {},
  },
  data() {
    return {
      // items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      items: Array.from(
        { length: this.getObjectDepth(this.value || []) },
        (_, i) => i + 1
      ),

      selected: 3,
      simple: false,
      theModelComp: {
        comp: ["VRow~", "~displayingSection", "type", "depth"],
        props: {
          key: this.randomKey("key-console"),
          hide: !true,
          mode: "prod",
        },

        type: {
          comp: "span",
          hide: !true,
          props: {
            key: this.randomKey("key-title"),
            mode: "prod",
            // class: "text-h10 justify-center", // md: "12", // sm: "12", // lg: "12", // xl: "12",
            html:
              `[[Type: <b>${typeof this.value} ${
                Array.isArray(this.value)
                  ? "Array"
                  : this.value instanceof Object
                  ? "-Dict"
                  : ""
              }  </b>]]` +
              `[[Length:<b>${
                Array.isArray(this.value)
                  ? "Array"
                  : this.value instanceof Object
                  ? Object.keys(this.value)?.length
                  : "-1"
              }</b>|justify-center]]`,
          },
        },
        depth: {
          comp: "VSelect",
          hide: !true,
          props: {
            key: this.randomKey("key-depth"),
            class: "text-h20 justify-center", // md: "12", // sm: "12", // lg: "12", // xl: "12",
            // items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            items: Array.from({ length: this.getObjectDepth(this.value) }),

            val: 3,
            filled: true,
            label: "Depth",
            dense: true,
          },
        },

        displayingSection: {
          comp: "VContainer",
          props: {
            key: this.randomKey("key-displ-sec"),
            hide: !true,
            align: "start",
            mode: "prod",
            // hide: thiss => {
            //   let u = thiss.user;
            //   return !(u.is_staff | u.is_federation | u.is_governoment | u.is_ministry | u.is_club)
            // },
            val: 1,
            "max-width": "80%",
            outlined: true,
            class: "text-h10 justify-center pink mx-auto",
            style: {},
            // html: thiss => { return { en: 'Club choice', fr: 'Choix du club', ar: 'اختيار النادي' } [thiss.lg] },
            // html: thiss => { return { en: 'Club choice', fr: 'Choix du club', ar: 'اختيار النادي' } [thiss.lg] },
          },
        },
      },
    };
  },
  components: {
    JsonViewer,
    VCard,
    VCheckbox,
    VSelect,
    VCol,
    VRow,
    VContainer,
    VToolbarTitle,
  },
  methods: {
    randomKey: randomKey,
    // reserve () {
    //   this.loading = true
    //   setTimeout(() => (this.loading = false), 2000)
    // },
  },
  mounted() {
    // console.log('this.value',this.value)
    // this.myAlert(10);
  },
};
</script>
<!-- <style > -->
<style lang="scss">
// values are default one from jv-light template
.my-awesome-json-theme {
  background: #fff;
  white-space: nowrap;
  color: #525252;
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;

  .jv-ellipsis {
    color: #999;
    background-color: #eee;
    display: inline-block;
    line-height: 0.9;
    font-size: 0.9em;
    padding: 0px 4px 2px 4px;
    border-radius: 3px;
    vertical-align: 2px;
    cursor: pointer;
    user-select: none;
  }
  .jv-button {
    color: #49b3ff;
  }
  .jv-key {
    color: #111111;
  }
  .jv-item {
    &.jv-array {
      color: #111111;
    }
    &.jv-boolean {
      color: #fc1e70;
    }
    &.jv-function {
      color: #067bca;
    }
    &.jv-number {
      color: #fc1e70;
    }
    &.jv-number-float {
      color: #fc1e70;
    }
    &.jv-number-integer {
      color: #fc1e70;
    }
    &.jv-object {
      color: #111111;
    }
    &.jv-undefined {
      color: #e08331;
    }
    &.jv-string {
      color: #42b983;
      word-break: break-word;
      white-space: normal;
    }
  }
  .jv-code {
    .jv-toggle {
      &:before {
        padding: 0px 2px;
        border-radius: 2px;
      }
      &:hover {
        &:before {
          background: #eee;
        }
      }
    }
  }
}
</style>
