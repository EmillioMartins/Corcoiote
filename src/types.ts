export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type ValidationFieldError = {
	field: string;
	message: string;
};
export type Invoice = {
	id: number;
	value: string;
	customer_id: number;
	status: "pending" | "paid";
	create_AT: string;
};

export type CreateInvoice = Omit<Invoice, "id" | "status">;
type InvoiceWithoutId = Omit<Invoice, "id" | "create_AT">;
export type UpdateInvoice = Partial<InvoiceWithoutId>;
