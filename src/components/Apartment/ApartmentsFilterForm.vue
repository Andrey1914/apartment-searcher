<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect class="form__select" :items="cities" v-model="city" />
        <CustomInput v-model="price" placeholder="Price from..." />
        <SubmitButton class="form__submit" type="submit">Apartment search</SubmitButton>
    </form>
</template>

<script>
import CustomSelect from '../Shared/CustomSelect.vue';
import CustomInput from '../Shared/CustomInput.vue';
import SubmitButton from '../Shared/Button.vue'


export default {
    components: {
        CustomSelect,
        CustomInput,
        SubmitButton
    },
    computed: {
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

    &__select {
        margin-right: 30px;
    }

    &__submit {
        margin-left: auto;
    }
}
</style>