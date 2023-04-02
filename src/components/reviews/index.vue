<template>
    <section class="reviews">
        <div class="reviews__heading">
            <h2 class="reviews__title">Overall rating</h2>
            <div class="reviews__rating">
                <span>{{ amountOfReviews }} Feedback(s)</span>
                <Rating :rating="rating" />
            </div>
        </div>
        <ReviewsItem v-for="review in reviews" :key="review.author" :review="review" />

    </section>
</template>

<script>
import ReviewsItem from './reviews-item/index.vue';
import Rating from '../StarRating.vue';

export default {
    name: 'ReviewsItem',
    components: {
        ReviewsItem,
        Rating
    },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.reviews {
    margin-top: 20px;
    background: $card-bg;
    padding: 0 2px;

    &__heading {
        padding: 20px 20px 10px;
    }

    &__title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__show-more {
        background: none;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: inherit;
        font-size: 16px;
    }
}
</style>