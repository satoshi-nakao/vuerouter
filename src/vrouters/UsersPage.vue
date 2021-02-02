<template>
    <div>
        <h2>ユーザー</h2>
        <button @click="toHomePage" style="word-break: keep-all">
        ホームページに戻る</button>
    </div>
</template>

<script>
export default {
    methods: {
        toHomePage() {
            this.$router.push("homepage");
        }
    }
}
</script>