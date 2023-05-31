<template>
    <AuthContainer>
        <h1>Login</h1>
        <Form ref="form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.email" type="text" name="email" placeholder="email..." :rules="emailRules" />
            <CustomInput v-model="formData.password" type="text" name="password" placeholder="password..."
                :rules="passwordRules" />
            <Button @click="handleSubmit" type="submit">Click me</Button>
        </Form>
    </AuthContainer>
</template>

<script>

import AuthContainer from '../../auth/AuthContainer.vue';
import Form from '../../Shared/form'
import CustomInput from '../../Shared/CustomInput.vue';
import Button from '../../Shared/Button.vue';
import { emailValidation, passwordValidation, isRequired } from '@/utils/validationRules';

export default {
    name: 'LoginForm',
    components: {
        Form,
        CustomInput,
        Button,
        AuthContainer
    },
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
        };
    },
    computed: {
        rules() {
            return {
                emailValidation, passwordValidation, isRequired,
            }
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
        },
    },
    methods: {
        handleSubmit() {
            const isFormValid = this.$refs.form.validate();
            if (isFormValid) {
                console.log(this.formData);
            }
            console.log(this.formData);
        }
    },

}
</script>

<style lang="scss" scoped></style>