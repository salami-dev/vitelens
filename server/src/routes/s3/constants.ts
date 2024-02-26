export const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
export const ACCESS = process.env.AWS_ACCESS_KEY_ID;
export const REGION = process.env.aws_region ?? "us-east-1";
export const BUCKET = process.env.aws_bucket_name ?? "vitelens-storage-dev";

// export const BUCKET = process.env.aws_bucket_name ?? "vitelens-dev-bucket";