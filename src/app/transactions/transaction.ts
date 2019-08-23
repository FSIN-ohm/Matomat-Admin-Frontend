export interface Transaction {
    id: number;
    product: string;
    description?: string;
    user: string;
    amount: number;
    date: string;
}