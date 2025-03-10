<template>
  <!-- {{layout_}} -->
  <!-- <component v-if="!isClosed&&items_.length>0" :is="'VNavigationDrawer'"  v-bind="layout_||{}">  -->
  <component
    v-if="!isClosed && items_.length > 0"
    :is="float ? 'VNavigationDrawer' : 'VCard'"
    v-bind="float ? layout_ : {}"
    :color="rColor"
  >
    <VCheckbox v-model="isExpand" :label="!isExpand ? 'Expand' : 'Extend'"></VCheckbox>

    <VContainer>
      <!-- <VContainer v-if="display" v-bind="layout_||{}" :style="float?{...{position:'fixed',top: '10% ',left: getRandomInt(20,60)+'%','z-index': '10',height:'100%',width:'auto',padding:'0.8%',
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    cursor: draggable ? 'grabbing' : 'grab',
    'overflow-x': 'scroll'

    
  },...layout_?.style||{}}:{...layout_?.style||{}}"
  class="ma-16"
  @mousedown="startDrag"
  @mousemove="doDrag"
  @mouseup="endDrag"
  > -->
      <!-- ---start alert--- -->
      <VRow>
        <VSpacer />
        <VCol>
          <VBtn @click="handleClose"> close </VBtn>
          <VCheckbox
            v-model="float"
            :label="!float ? 'Float Layout' : 'Fixed Layout(at the bottom)'"
          ></VCheckbox>
        </VCol>
      </VRow>

      <VListGroup v-for="(v, k) in items_" v-bind="{}" :key="'key' + k">
        <template v-slot:activator>
          <h4 class="red">
            {{
              JSON.stringify(v).substr(0, Math.min(JSON.stringify(v).length, 60)) + "..."
            }}
          </h4>
        </template>
        <VCol v-if="!(typeof items_[k] == 'string' && items_[k].includes('%c'))">
          <div
            :class="
              typeof items_[k - 1] == 'string' && items_[k - 1].includes('%c')
                ? items_[k - 1].replace('%c', '')
                : 'ma-5'
            "
          >
            <WBDataViewer :item="v"> </WBDataViewer>
          </div>
        </VCol>
      </VListGroup>
      <!-- ----end Alert---- -->
    </VContainer>
  </component>
</template>
<script>
// import Vuex from 'vuex';

// import { WBC } from 'wbc-ui2';
// import vuetify from '../plugins/vuetify';
import * as vuetifyComponents from "vuetify/lib";
// import {VNavigationDrawer} from 'vuetify/lib';

export default {
  name: "WBAlert",
  props: {
    layout: {
      type: Object,
      default: () => null,
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    mode: {
      default: () => {
        return "prod";
      },
    },
  },
  data() {
    return {
      items_: [],
      rColor: "grey",
      layout_: {
        class: "ma-1 pa-1  pink--text container ",
        // color: "deep-purple lighten-4",

        permanent: true,
        // "expand-on-hover": true,
        right: !true,
        floating: true,

        app: true,
        absolute: true,
        fixed: true,
        scrollable: true,
        style: {
          backgroundColor: this.rColor,
          position: "fixed",
          top: "0% ",
          left: this.getRandomInt(0, 10) + "%",
          "z-index": "10",
          height: this.isExpand === true ? "100%" : "50%",
          width: "auto",
          padding: "0.8%",
        },
      },
      float: !true,
      isExpand: true,
      // active:true,
      display: true,
      isClosed: false,

      // draggable: false,
      // dragStartX: 0,
      // dragStartY: 0,
      // offsetX: 0,
      // offsetY: 0,

      userDrawer: false,
      mobileDrawer: false,
      group: null,
      menuKey: 1,
      ////////////////////////
      btns: [
        ["Removed", "0"],
        ["Large", "lg"],
        ["Custom", "b-xl"],
      ],
      colors: ["deep-purple accent-4", "error", "teal darken-1"],
      // items_: [...Array(4)].map((_, i) => `Item ${i}`),
    };
  },

  computed: {
    // ...Vuex.mapGetters( ...Vuex.mapGetters(['urlServer', 'user', 'loggedIn', 'lg', 'labels']),),
  },
  watch: {
    group() {
      this.userDrawer = false;
      this.mobileDrawer = false;
    },
    isExpand(newVal) {
      if (newVal) {
        // alert(newVal)
        this.layout_.style.height = "7%";
        this.layout_.style.width = "7%";
      } else {
        this.layout_.style.height = "100%";
        this.layout_.style.width = "auto";
      }
    },
    // lg(newVa){
    //   alert(this.lg);
    //   this.menuKey+=1;
    // }
  },
  methods: {
    // startDrag(event) {
    //   this.draggable = true;
    //   this.dragStartX = event.clientX;
    //   this.dragStartY = event.clientY;
    // },
    // doDrag(event) {
    //   if (this.draggable) {
    //     this.offsetX = (event.clientX - this.dragStartX)/2;
    //     this.offsetY = (event.clientY - this.dragStartY)/2;
    //   }
    // },
    // endDrag() {
    //   this.draggable = false;
    // },
    handleClose() {
      this.isClosed = true;
    },
  },
  components: {
    // ...WBC.components,
    // vuetify,
    ...vuetifyComponents,
    // VNavigationDrawer,

    // WBC: () => import('wbc-ui2'),
  },
  mounted() {
    // alert(8888888+this.items?.[0]?.[0])

    /* if (this.mode == 'wiki') 
    {
      this.layout_ = {
        tabs: {
          dark: true,
          class: 'ma-4 pa-4 deep-purple',
          color: 'black',
          'background-color': 'blue',
          app: true,
          dense: true,
          flat: true,
          height: 120,
        },
        lists: {
          class: 'ma-1 pa-1  pink--text',
          color: 'yellow',
          'background-color': 'blue',
        },
      };

      this.items_ = [
11111111111111,
2222222222222,
333333333,
      ];
    } else */
    // {
    if (Array.isArray(this.items)) {
      this.items_ = this.items;
    } else {
      this.items_ = [this.items];
    }
    if (this.layout) {
      this.layout_ = this.layout;
    }
    // if(typeof this.layout =='string'){
    //   this.layout_={class:this.layout}
    // }
    // else
    // {this.layout_=this.layout||{style:{'background-color':this.randomColor()}}}
    // {this.layout_=this.layout||{style:{'background-color':this.randomColor()}}}
    // }
  },
  created() {
    this.rColor = this.randomColor();
  },
};
</script>
<style lang="scss"></style>
