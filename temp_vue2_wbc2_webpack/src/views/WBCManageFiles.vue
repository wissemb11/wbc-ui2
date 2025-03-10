<template>
  <div id="ext-comps">



    <h1>Upload file and get its content</h1>

    <!-- File input to upload Excel file -->
    <input type="file" @change="handleFileUpload" accept=".txt,.xls, .xlsx" />
    &lt;VueOfficeExcel :src="excelFile" v-if="excelFile"&gt;
    <!-- Render Excel content -->
    {{ excelFile }}
    <VueOfficeExcel :src="excelFile" v-if="excelFile" />
    <!-- <WBHtml :html="excelFile"  /> -->






  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCManageFiles",
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
      console.log("File uploaded:", event);
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
