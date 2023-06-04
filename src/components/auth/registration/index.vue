<template>
    <AuthContainer class="registration">
        <MainTitle class="registration__title">Registration</MainTitle>
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit($event)">
            <CustomInput v-model="formData.name" placeholder="name..." name="name" autocomplete="name" :rules="nameRules"
                class="registration__input" />
            <CustomInput v-model="formData.email" placeholder="email..." name="email" autocomplete="email"
                :rules="emailRules" class="registration__input" />
            <CustomInput v-model="formData.password" placeholder="password..." type="password" name="password"
                autocomplete="current-password" :rules="passwordRules" class="registration__input" />
            <CustomInput v-model="formData.confirmPassword" placeholder="confirm password..."
                autocomplete="current-password" type="password" name="password" :rules="confirmPassword"
                class="registration__input" />
            <Button class="registration__btn" type="bsubmit">Registration</Button>
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
import { registerUser } from '@/services/auth.service';


export default {
    name: 'RegistrationForm',
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
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
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
        nameRules() {
            return [this.rules.isRequired]
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation];
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation];
        },
        confirmPassword() {
            return [
                (value) => ({
                    hasPassed: value === this.formData.password,
                    message: 'Password mismatch.'
                }),
            ];
        },
    },
    methods: {

        async handleSubmit() {
            // const { form } = this.$refs;
            // const isFormValid = form.validate();
            const { name, password, email } = this.formData;
            console.log(this.formData);
            // if (isFormValid) {
            try {
                const { data } = await registerUser({ name, password, email });
                console.log(data);
                // form.reset();
            } catch (error) {
                console.log(error);

            }

            // }
        },

    },
}
</script>

<style lang="scss" scoped>
.registration {
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