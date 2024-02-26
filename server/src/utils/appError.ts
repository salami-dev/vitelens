class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  path?: string;
  value?: string;
  errmsg?: string;
  // eslint@typescript-eslint/no-explicit-any disanle that error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: Record<string, any>;

  constructor (message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
