<template>
  <AppHeader />
  <div class="content">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
    </Container>
    <Container>
      <ApartmentsList :items="apartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem :key="apartment.id" :description="apartment.description" :rating="apartment.rating"
            :imgSrc="apartment.imgUrl" :price="apartment.price" @click="handleItemClick" />
        </template>
      </ApartmentsList>
    </Container>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from './components/Header.vue'
import ApartmentsList from './components/Apartment/ApartmentsList.vue';
import ApartmentsItem from './components/Apartment/ApartmentsItem.vue';
import ApartmentsFilterForm from './components/Apartment/ApartmentsFilterForm.vue';
import apartments from './components/Apartment/apartments';
import Container from './components/Shared/Container.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
    AppFooter,
    AppHeader
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}

/* .apartments-filter {
  margin-bottom: 40px;
} */
</style>
