<template>
    <main class="apartment-page">
        <SectionWithHeaderSpacer>
            <Container v-if="apartment">
                <div class="apartment-page__content">
                    <ApartmentsMainInfo :apartment="apartment" />
                    <div class="apartment-page__additional-info">
                        <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
                        <Reviews :reviews="reviewsList" />
                    </div>
                </div>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import SectionWithHeaderSpacer from '@/components/Shared/SectionWithHeaderSpacer.vue';
import Container from '@/components/Shared/Container.vue';
// import apartments from '@/components/Apartment/apartments';
import ApartmentsMainInfo from '@/components/Apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '@/components/Apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';
import { getApartmentById } from '@/services/apartment.service';

export default {
    name: 'ApartmentPage',
    components: {
        Container,
        ApartmentsMainInfo,
        ApartmentsOwner,
        Reviews,
        SectionWithHeaderSpacer
    },
    data() {
        return {
            apartment: null
        }
    },
    computed: {
        reviewsList() {
            return reviewsList
        },
        // apartment() {
        //     return apartments.find(
        //         (apartment) => apartment.id === this.$route.params.id
        //     )
        // },
    },
    async created() {
        try {
            const { id } = this.$route.params;
            const { data } = await getApartmentById(id);
            this.apartment = data;
        } catch (error) {
            console.error(error)
        }
    },

    beforeCreate() {
        console.log(this.reviewsList, '--beforeCreate--');
    },

    // created() {
    //     console.log(this.reviewsList, '--created--');
    // },

    beforeMount() {
        console.log(this.$el, '--beforeMount--');
    },

    mounted() {
        console.log(this.$el, '--mount--');
    },

    beforeUnmount() {
        console.log(this.$el, '--beforeUnmount--');
    },

    unmounted() {
        console.log(this.$el, '--unmounted--');
    },
}
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
        gap: 30px;
    }

    &__additional-info {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__owner {
        min-width: 350px;
    }
}
</style>