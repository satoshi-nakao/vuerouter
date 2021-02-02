<template>
    <div>
        <h1>ホーム</h1>
        <button @click="toUsersPage" style="word-break: keep-all">
        ユーザーのページに遷移する</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsersPage() {
            this.$router.push("userspage");
        }
    }
}
</script>

