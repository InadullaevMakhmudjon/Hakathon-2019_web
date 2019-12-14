<template>
  <v-card width="100%" flat class="pa-2">
        <v-row
      v-for="n in 2"
      :key="n"
      :class="n === 1 ? 'mb-2' : ''"
      no-gutters
    > <template v-if="n==1"> 
      <v-col >
        <v-card tile flat color="bottom_line" height="60">
          <v-card-title class="body_bottom_line" dark width="100%">Report Summary<v-spacer></v-spacer><span>Updated Report</span><v-btn icon><v-icon>mdi-cached</v-icon></v-btn></v-card-title>
      </v-card>
          

      </v-col>
     </template>
        <template v-else>
       <v-col v-for="i in 4" :key="i" >
         
         <v-card  height="100" max-width="98%">
           <v-row >
             <v-col class="align-center" md="6" v-for="i in 2" :key="i">
               <v-card   class="ma-2 mt-3 text-xs-center
               ">
                   <v-sheet dark

                      width="60"
                      height="60"
                      color="red"
                      tile
                      text
                      >
                  <v-icon class="text-xs-center">mdi-image-filter-center-focus-weak</v-icon>
                  </v-sheet>
           
               </v-card>
             </v-col>
           </v-row>
         </v-card>

     </v-col>
     </template>
    </v-row>
  </v-card>
</template>

<script>
export default {
data(){
  return{
    arrayOfCategories: [
      {
        
      }
    ]
  }
},
methods:{
  
}
}
</script>

<style scoped>
  @import "https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=cyrillic,cyrillic-ext";
.body_bottom_line{
 font-size: 16px !important;
 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 color: #343a40;
}
.bottom_line{
   border-bottom: 1px solid rgba(37, 37, 37, 0.199);
   
   
}
</style>