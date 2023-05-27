<template>
    <form class="form" @submit.prevent="handleSubmit">

        <CustomSelect class="form__select" :items="cities" v-model="city" />

        <CustomInput v-model="price" type="number" placeholder="Price from..." error-message="Field must not be empty..."
            :rules="rules" />

        <SubmitButton class="form__submit" type="submit">Apartment search</SubmitButton>

    </form>
</template>

<script>
import CustomSelect from '../Shared/CustomSelect.vue';
import CustomInput from '../Shared/CustomInput.vue';
import SubmitButton from '../Shared/Button.vue';
import { isRequired, charLimit } from '../../utils/validationRules';


export default {
    components: {
        CustomSelect,
        CustomInput,
        SubmitButton
    },
    computed: {
        rules() {
            return [isRequired, charLimit(5)];
        },
        cities() {
            return [{ value: '', label: 'City', selected: true }, 'Kyiv', 'Odesa', 'Poltava', 'Kharkiv', 'Dnipro', 'Lviv', 'Kherson', 'Mariupol']
        }
    },
    data() {
        return {
            price: '',
            city: '',
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', {
                city: this.city,
                price: this.price
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    padding: 30px 0;

    &__select {
        margin-right: 30px;
    }

    &__submit {
        margin-left: auto;
    }
}
</style>