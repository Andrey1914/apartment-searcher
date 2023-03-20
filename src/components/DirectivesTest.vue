<template>
    <div v-if="isVisible">
        <h1 v-show="false">Directives</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'kiwi'" :key="fruit">{{ fruit }}</li>
            </template>
        </ul>

        <ul>
            <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
        </ul>
    </div>
</template>

<script>



export default {
    name: 'DirectivesTest',
    data() {
        return {
            isVisible: true,
            fruits: ['kiwi', 'banana', 'apple'],
            cars: {
                audi: {
                    year: 2018,
                    color: 'grey'
                },
                bmw: {
                    year: 2020,
                    color: 'black'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>