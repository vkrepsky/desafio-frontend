import { Time } from "@angular/common";

export class User {
    id: number;
    nome: string;
    telefone: string;
    dataCheckIn: Time;
    dataCheckOut: Time;
    adicionalVeiculo: boolean;
    hospedado: boolean;
}