<script lang="ts" setup>
import Search from '@/components/Search.vue';
import { VehicleService } from '@/services/vehicle.service';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const vehicles = ref()
const route = useRoute()
const id = Number(route.params.id)
const search = ref('')

function loadData() {
    VehicleService.getVehicleByClientId(id,search.value)
        .then(rsp => vehicles.value = rsp.data)
}

function doDelete(model: any) {
    
}

onMounted(() => loadData())
</script>

<template>
    <h3>Vehicles by client {{ id }}</h3>
    <Search v-model="search" @change="loadData">
        <div class="btn-group">
            <RouterLink class="btn btn-primary" :to="`/client/${id}/vehicle/new`">
                <i class="fa-solid fa-plus"></i> Add Vehicle
            </RouterLink>
        </div>
    </Search>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Model</th>
                <th scope="col">VIN</th>
                <th scope="col">Plate</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody v-if="vehicles">
            <tr v-for="v of vehicles">
                <th scope="row">{{ v.vehicleId }}</th>
                <td>{{ v.model.name }}</td>
                <td>{{ v.vin }}</td>
                <td>{{ v.regPlate }}</td>
                <td>{{ v.year }}</td>
                <td>
                    <div class="btn-group">
                        <RouterLink class="btn btn-sm btn-success" :to="`/vehicle/${v.vehicleId}`">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </RouterLink>
                        <button class="btn btn-sm btn-danger" type="button" @click="doDelete(v)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>