<template>
    <div class="wrapper-input">
        <input :value="modelValue" @input="changeValue" v-bind="$attrs" class="custom-input"
            :class="!isValid && 'custom-input--error'" />
        <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            isValid: true,
            error: '',
        };
    },
    inject: {
        form: {
            default: null,
        }
    },
    inheritAttrs: false,
    props: {
        modelValue: {
            type: String,
            default: '',
        },

        errorMessage: {
            type: String,
            default: '',
        },
        rules: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['update:modelValue'],
    watch: {
        value(value) {
            this.validate(value);
            console.log(value);
        },
    },
    mounted() {
        if (!this.form) return;

        this.form.registerInput(this);
    },
    beforeUnmount() {
        if (!this.form) return;

        this.form.unRegisterInput(this);
    },
    methods: {
        changeValue(event) {
            const modelValue = event.target.value;
            this.$emit('update:modelValue', event.target.value)
            this.validate(modelValue);
        },

        validate(value) {
            this.isValid = this.rules.every((rule) => {
                const { hasPassed, message } = rule(value);

                if (!hasPassed) {
                    this.error = message || this.errorMessage;
                }

                return hasPassed;
            });
        },
        reset() {
            this.$emit('update:modelValue', '')
        }
    },

};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.wrapper-input {
    position: relative;
    margin-bottom: 20px;
}

.custom-input {
    height: 40px;
    width: 100%;
    border: 2px solid $main;
    font-family: 'Montserrat';
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;

    &::placeholder {
        font-family: 'Montserrat';
        color: inherit;
    }

    &--error {
        border-color: $error;
    }

    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-family: 'Montserrat';
        font-size: 10px;
        color: $error;
        line-height: 1.3;
    }
}
</style>