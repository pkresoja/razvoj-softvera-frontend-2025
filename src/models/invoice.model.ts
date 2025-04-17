import type { VehicleModel } from "./vehicle.model";

export interface InvoiceModel {
    invoiceId: number
    vehicleId: number
    createdAt: string
    updatedAt: string
    generatedAt: string
    paidAt: string
    vehicle: VehicleModel
}