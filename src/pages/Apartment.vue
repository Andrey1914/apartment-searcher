<template>
    <main class="apartment-page">
        <Container>
            <div class="apartment-page__content">
                <ApartmentsMainInfo :apartment="apartment" />
                <div class="apartment-page__additional-info">
                    <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
                    <Reviews :reviews="reviewsList" />
                </div>
            </div>
        </Container>
    </main>
</template>

<script>
import Container from '@/components/Shared/Container.vue';
import apartments from '@/components/Apartment/apartments';
import ApartmentsMainInfo from '@/components/Apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '@/components/Apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';
export default {
    name: 'ApartmentPage',
    components: {
        Container,
        ApartmentsMainInfo,
        ApartmentsOwner,
        Reviews,
    },
    computed: {
        reviewsList() {
            return reviewsList;
        },
        apartment() {
            return apartments.find((apartment) => apartment.id === this.$route.params.id)
        }
    },
    // mounted() {
    //     console.log(this.apartment)
    // }
}
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
    }

    &__owner {
        min-width: 350px;
        margin-left: 30px;
    }
}
</style>