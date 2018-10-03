<template>
    <div>{{ this.user.accountName }}</div>
</template>
<script>
export default {
    name: 'order',
    props: {
        user: Object
    }
}
</script>
<style lang="less" scoped>

</style>
