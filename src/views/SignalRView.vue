<template>
  <h1>{{ guid }}</h1>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import ItemComponent from "@/components/Item.vue";
import * as signalR from "@microsoft/signalr";

export default defineComponent({
  components: { ItemComponent },
  setup() {
    const guid = ref("Here goes new guid");

    const hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44351/guid-hub")
      .withAutomaticReconnect()
      .withHubProtocol(new signalR.JsonHubProtocol())
      .build();

    onMounted(async () => {
      hubConnection.start();
      hubConnection.on("guid-hub", (newGuid: string) => {
        debugger;
        console.log(newGuid);
        guid.value = newGuid;
      });
    });

    onBeforeUnmount(() => {
      hubConnection.stop();
    });
    return {
      guid
    };
  }
});
</script>
