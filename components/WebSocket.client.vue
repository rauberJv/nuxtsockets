<script setup lang="ts">
// in prod: check if secure, then use wss://
const {status, data, send, open, close} = useWebSocket(`wss://${location.host}/api/websocket`);
const history = ref<string[]>([]);
const message = ref('');

watch(data, (newValue) => {
    history.value.push('server: '+newValue);
});

function sendData() {
    history.value.push(`Client: ${message.value}`);
    send(message.value);
    message.value = '';
}
</script>

<template>
    <div>
        <h1>Websocket - let's go!</h1> 
        <form @submit.prevent="sendData">
            <input v-model="message" />
            <button type="submit">Send</button>
        </form>
    </div>
    <div>
        <p v-for="entry in history">
            {{ entry }}
        </p>
    </div>
</template>