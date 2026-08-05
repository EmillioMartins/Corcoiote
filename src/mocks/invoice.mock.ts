import type { Invoice } from "../types.ts";

export const invoices: Invoice[] = [
	{
		id: 1,
		value: "7000",
		customer_id: 2,
		status: "paid",
		create_AT: "10/07/2026",
	},
	{
		id: 2,
		value: "10000",
		customer_id: 1,
		status: "paid",
		create_AT: "10/07/2026",
	},
	{
		id: 3,
		value: "2000",
		customer_id: 3,
		status: "paid",
		create_AT: "10/07/2026",
	},
];
