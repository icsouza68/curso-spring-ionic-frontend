export interface ClienteDTO {
    id : string;
    nome : string;
    eMail : string;
    imageUrl? : string;  // o sinal ? indica que é opcional
}