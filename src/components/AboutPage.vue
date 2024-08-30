<template>
    <div>
        <router-link to="/">Go Back to Home</router-link>
        <p>About Page</p>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    props: {
        msg: String
    }
}
</script>