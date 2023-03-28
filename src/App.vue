<template>
  <h2>{{ text }}</h2>
  <!-- <CustomSelect :items="['name', 'label', 'salary']" /> -->
  <!-- <CustomInput v-model="text" /> -->
  <Container>
    <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
  </Container>

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
import ApartmentsFilterForm from './components/Apartment/ApartmentsFilterForm.vue';
// import CustomInput from './components/Shared/CustomInput.vue';
// import CustomSelect from './components/Shared/CustomSelect.vue';
import apartments from './components/Apartment/apartments';
import Container from './components/Shared/Container.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container
  },
  data() {
    return {
      text: '',
      apartments,
    }
  },
  methods: {
    logger(value) {
      console.log(value, '--form value--');
    },

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

.apartments-filter {
  margin-bottom: 40px;
}
</style>
