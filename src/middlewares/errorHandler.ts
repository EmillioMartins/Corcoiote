import type { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../erros/index.ts';

export default function errorHandler(
	error: unknown,
	_request: Request,
	response: Response,
	next: NextFunction,
) {
	if (error instanceof NotFoundError) {
		response.status(error.statusCode).json({ message: error.message });
		return;
	}
	console.log(error);

	response.status(500).json({ menssage: 'Erro interno do servodor' });
}
