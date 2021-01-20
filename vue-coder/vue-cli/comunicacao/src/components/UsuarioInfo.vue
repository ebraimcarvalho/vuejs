<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>{{title}}</p>
        <p>{{inverternome()}}</p>
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        inverternome() {
            return this.title.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
