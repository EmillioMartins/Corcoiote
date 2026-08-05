import { invoices } from "../mocks/invoice.mock.ts";
import type { CreateInvoice, Invoice, UpdateInvoice } from "../types.ts";

export function findAllInvoices(): Invoice[] {
	return invoices;
}

export function findInvoicesById(id: number): Invoice {
	const invoice = invoices.find((invoice) => {
		return invoice.id === id;
	});

	if (!invoice) {
		throw new Error("Cliente não encontrado.");
	}

	return invoice;
}

export function insertInvoice({ value, customer_id }: CreateInvoice): Invoice {
	const id = invoices[invoices.length - 1].id;
	const date = String(new Date());

	const invoice: Invoice = {
		id: id + 1,
		value,
		customer_id,
		status: "pending",
		create_AT: date,
	};

	invoices.push(invoice);
	return invoice;
}

export function modifyInvoice(
	id: number,
	{ value, status, customer_id }: UpdateInvoice,
): Invoice {
	const invoice = invoices.find((invoice) => invoice.id === id);

	if (!invoice) {
		throw new Error(`Conta do ${id} não encontrada.`);
	}

	if (value) invoice.value = value;
	if (status === "paid" || status === "pending") {
		invoice.status = status;
	}
	if (customer_id) invoice.customer_id = customer_id;

	return invoice;
}

export function removeInvoice(id: number): void {
	const index = invoices.findIndex((invoice) => invoice.id === id);

	if (index === -1) {
		throw new Error(`Cliente com ${id} não encontrado.`);
	}

	invoices.splice(index, 1);
}
