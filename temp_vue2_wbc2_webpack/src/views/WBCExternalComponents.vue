<template>
  <div id="ext-comps">
    <h1>WBC External Components</h1>

    <h1>JsonViewer : ƒ VueComponent(options)</h1>
    <h1>VCM : ƒ VueComponent(options)</h1>
    <h1>VueDocPreview : ƒ VueComponent(options)</h1>
    <h1>VueOfficeDocx : ƒ VueComponent(options)</h1>



    <h1>VueOfficeExcel : ƒ VueComponent(options)</h1>

    <h1>Excel files</h1>
    <div>
      <!-- File input to upload Excel file -->
      <input type="file" @change="handleFileUpload" accept=".xls, .xlsx" />
      &lt;VueOfficeExcel :src="excelFile" v-if="excelFile"&gt;
      <!-- Render Excel content -->
      <VueOfficeExcel :src="excelFile" v-if="excelFile" />
    </div>
    <div>
      &lt;VueOfficeExcel src="https://exinfm.com/excel%20files/cash_flow_model.xls" v-if="excelFile" /VueOfficeExcel&gt;
      <VueOfficeExcel value="https://exinfm.com/excel%20files/cash_flow_model.xls"></VueOfficeExcel>
    </div>


    <h1>WBAlert : ƒ VueComponent(options)</h1>
    <h1>WBC : ƒ VueComponent(options)</h1>
    <h1>WBDataViewer : ƒ VueComponent(options)</h1>
    <h1>WBHtml : ƒ VueComponent(options)</h1>
    <h1>WBLink : ƒ VueComponent(options)</h1>
    <h1>codemirror : ƒ VueComponent(options)</h1>
    <h1>pdf : ƒ VueComponent(options)</h1>
   
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCExternalComponents",
  data() {
    return {
      excelFile: null,
    };
  },
  components: {
    //WBC
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Set the file for rendering
      this.excelFile = file;
    },
  },
};
</script>

<style>
#ext-comps {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
</style>
