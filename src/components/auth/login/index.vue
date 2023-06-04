<template>
    <AuthContainer class="login">
        <MainTitle class="login__title">Login</MainTitle>
        <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.email" placeholder="email..." name="email" autocomplete="email"
                :rules="emailRules" class="login__input" />
            <CustomInput v-model="formData.password" placeholder="password..." type="password" name="password"
                autocomplete="current-password" :rules="passwordRules" class="login__input" />
            <Button class="login__btn" type="bsubmit">Login</Button>
        </Form>
    </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '@/components/Shared/MainTitle.vue';
import Form from '../../Shared/form';
import CustomInput from '@/components/Shared/CustomInput.vue';
import Button from '@/components/Shared/Button.vue';
import { emailValidation, passwordValidation, isRequired } from '@/utils/validationRules';
import { loginUser } from '@/services/auth.service';

export default {
    name: 'LoginForm',
    components: {
        Form,
        CustomInput,
        Button,
        AuthContainer,
        MainTitle,
    },
    data() {
        return {
            formData: {
                email: '',
                password: '',
            },
        };
    },
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired,
            };
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation];
        },
        passwordRules() {
            return [this.rules.isRequired];
        },
    },
    methods: {
        async handleSubmit() {
            // const isFormValid = this.$refs.form.validate();

            try {
                const { data } = await loginUser(this.formData);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

            // if (isFormValid) {
            //     try {
            //         const { data } = await loginUser(this.formData);
            //         console.log(data);
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        },
    },

}
</script>

<style lang="scss" scoped>
.login {
    &__form {
        display: block;
        flex-direction: column;
    }

    &__title {
        text-align: center;
    }

    &__input {
        width: 100%;
    }

    &__btn {
        margin-top: 15px;
        width: 100%;
    }
}
</style>