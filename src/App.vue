<template>
  <h2>{{ text }}</h2>
  <CustomInput v-model="text" />
  <ApartmentsList :items="apartments">
    <template v-slot:apartment="{ apartment }">
      <ApartmentsItem :key="apartment.id" :description="apartment.description" :rating="apartment.rating"
        :imgSrc="apartment.imgUrl" :price="apartment.price" @click="handleItemClick" />
    </template>
  </ApartmentsList>
</template>

<script>
import ApartmentsList from './components/Apartment/ApartmentsList.vue';
import ApartmentsItem from './components/Apartment/ApartmentsItem.vue';
import CustomInput from './components/Shared/CustomInput.vue';
import apartments from './components/Apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },
  data() {
    return {
      text: '',
      apartments,
    }
  },
  methods: {
    handleItemClick() {
      console.log('Item clicked');
    }
  }
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
