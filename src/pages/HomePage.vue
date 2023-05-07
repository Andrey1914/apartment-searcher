<template>
    <main class="homepage">
        <Container>
            <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
        </Container>
        <Container>
            <p v-if="!filteredApartments.length">Nothing found</p>
            <ApartmentsList :items="apartments">
                <template v-slot:apartment="{ apartment }">
                    <ApartmentsItem :key="apartment.id" :id="apartment.id" :description="apartment.description"
                        :rating="apartment.rating" :imgSrc="apartment.imgUrl" :price="apartment.price"
                        @click="handleItemClick" />
                </template>
            </ApartmentsList>
        </Container>
    </main>
</template>

<script>
import ApartmentsFilterForm from '@/components/Apartment/ApartmentsFilterForm.vue';
import ApartmentsItem from '@/components/Apartment/ApartmentsItem.vue';
import ApartmentsList from '@/components/Apartment/ApartmentsList.vue';
import Container from '@/components/Shared/Container.vue';
import apartments from '@/components/Apartment/apartments';
import { getApartmentsList } from '@/services/apartment.service';


export default {
    name: 'App',
    components: { Container, ApartmentsFilterForm, ApartmentsList, ApartmentsItem },
    data() {
        return {
            text: '',
            // apartments: [],
            apartments,
            filters: {
                city: '',
                price: 0,
            },
        }
    },
    computed: {
        filteredApartments() {
            return this.filterByCityName(this.filterByPrice(this.apartments))
        },
    },
    async created() {
        try {
            const { data } = await getApartmentsList();
            this.apartments = data;
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        filter({ city, price }) {
            this.filters.city = city
            this.filters.price = price
        },
        filterByCityName(apartments) {
            if (!this.filters.city) return apartments
            return apartments.filter((apartment) => {
                return apartment.location.city === this.filters.city
            })
        },
        filterByPrice(apartments) {
            if (!this.filters.price) return apartments
            return apartments.filter((apartment) => {
                return apartment.price >= this.filters.price
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
