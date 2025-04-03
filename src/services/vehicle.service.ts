import { MainService } from "./main.service";

export class VehicleService {
    static async getVehicleByClientId(id: number, search: string) {
        return await MainService.useAxios(`/vehicle/client/${id}?search=${search}`)
    }
}