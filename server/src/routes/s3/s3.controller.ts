import { type Request, type Response } from 'express';
import catchAsync from './../../utils/catchAsync.js';
import { createPresignedUrl, createGetPresignedUrl } from '../../entities/s3/s3.model.js';
import {REGION, BUCKET} from './constants'


export const httpCreatePresignedUrl = catchAsync(async function (req: Request, res: Response): Promise<void> {
  const { key } = req.body;  
  const signedUrl = await createPresignedUrl({region:REGION, bucket:BUCKET, key});
  res.status(200).json(signedUrl);
});

export const httpCreateGetPresignedUrl = catchAsync(async function (req: Request, res: Response): Promise<void> {
  res.status(200).json(await createGetPresignedUrl({region:REGION, bucket:BUCKET, key:req.body.key}));
});

