<script lang="ts" setup>
import Search from '@/components/Search.vue';
import { ClientService } from '@/services/client.service';
import { onMounted, ref } from 'vue';

const clients = ref()
const search = ref('')

function loadData() {
    ClientService.getClients(search.value)
        .then(rsp => clients.value = rsp.data)
}

onMounted(() => loadData())
</script>

<template>
    <h3>Clients</h3>
    <Search v-model="search" @change="loadData">
        <div class="btn-group">
            <RouterLink class="btn btn-primary" to="/client/new">
                <i class="fa-solid fa-plus"></i> Add Client
            </RouterLink>
        </div>
    </Search>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Tax ID</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody v-if="clients">
            <tr v-for="client of clients">
                <th scope="row">{{ client.clientId }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.phone }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.taxId ? client.taxId : 'N/A' }}</td>
                <td>
                    <div class="btn-group">
                        <RouterLink class="btn btn-sm btn-success" :to="`/client/${client.clientId}`">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </RouterLink>
                        <button class="btn btn-sm btn-danger" type="button">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>