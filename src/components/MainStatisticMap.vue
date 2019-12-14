<template>
  <v-card elevation="8" width="99%" class=" ml-2">
      <yandex-map 
  :coords="[41.311992,69.289906]"
  zoom="14"
  style="width: 100%;  height: 400px;"
  :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
  :behaviors="['ruler','drag']"
  :controls="['trafficControl']"
  map-type="map"
>
 <ymap-marker v-for="(item,i) in complaint" :key="i"
      :marker-id="`${i+1}`"
       marker-type="placemark"
      :coords="[item.lang, item.long]"
       :hint-content="item.comments"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{
         size: '13px', 
         color: item.status==1? 'red':'green',
         gylph: 'home'
      }"
      :cluster-name="i+1"
    ></ymap-marker>
</yandex-map>
  </v-card>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    components:{yandexMap, ymapMarker },
    data() {
  return {
    placemarks: [
      {
        coords: [54.8, 39.8],
        properties: {},
        options: {},
        clusterName: "1",
        callbacks: { click: function() {} }
      }
    ],
    complaint:[
        {comments: 'There is a problem 1', lang:'41.330918',long:'69.217946',status:1,category:'Traffic'},
        {comments: 'There is a problem 2', lang:'41.328921',long:'69.261449',status:0,category:'Pollution'},
        {comments: 'There is a problem 3', lang:'41.303166',long:'69.223802',status:0,category:'Communal'},
        {comments: 'There is a problem 4', lang:'41.298540',long:'69.274555',status:1,category:'Electrocity & Gas'},
        {comments: 'There is a problem 5', lang:'41.324612',long:'69.270093',status:1,category:'propery 2'},
        {comments: 'There is a problem 6', lang:'41.315362',long:'69.249039',status:1,category:'propery 2'}
    ]
}
}
}
</script>

<style>

</style>
