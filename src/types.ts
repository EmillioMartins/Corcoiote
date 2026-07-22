export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Omit<Customer, 'id' | 'status'>;
type CustomerWithoutId = Omit<Customer, 'id'>;
export type UpdateCustomer = Partial<CustomerWithoutId>;
