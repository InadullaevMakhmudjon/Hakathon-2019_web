<template>
  <v-card elevation="6" class="p-3">
  <v-simple-table color="purple">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Category</th>
          <th class="text-left">Status</th>
           <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in getComplainsList" :key="i">
            <td>{{ item.subCategories[1].name }}</td>
          <td>{{ item.id}}</td>
          <td>{{ item.name }}</td>
     
          <td><v-btn outlined color="red">Confirm</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card>
</template>
<script>
import { relative } from 'path'

  export default {
computed:{
  getComplainsList(){
    return this.$store.getters.recieveCategoriess
  }
}
  }
</script>
