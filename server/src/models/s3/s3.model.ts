import https from "https";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl} from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-providers";
import { GetObjectCommand } from "@aws-sdk/client-s3";

type SignUrlProps ={
  region: string;
  bucket: string;
  key: string;

}


export const  createPresignedUrl = async ({ region, bucket, key }:SignUrlProps) => {
  console.log("REGION: ", region, "BUCKET: ", bucket, "KEY: ", key)
  const client = new S3Client({ region,credentials: fromEnv() });
  const command = new PutObjectCommand({ Bucket: bucket, Key: key });
  try {
      const signed= await getSignedUrl(client, command, { expiresIn: 3600 });
      console.log("SIGNED URL: ", signed)
      return {
        preSignedurl: signed,
        url: `https://${bucket}.s3.${region}.amazonaws.com/${key}`,
      }
    
  } catch (error) {

    console.log("ERROOR CREATING SIFNED URL: ", error)
    return;
    
  }
};

export const createGetPresignedUrl = ({ region, bucket, key }:SignUrlProps) => {
  const client = new S3Client({ region,credentials: fromEnv()});
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(client, command, { expiresIn: 3600 });
};

export function put(url:string, data:string) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      { method: "PUT", headers: { "Content-Length": new Blob([data]).size } },
      (res) => {
        let responseBody = "";
        res.on("data", (chunk) => {
          responseBody += chunk;
        });
        res.on("end", () => {
          resolve(responseBody);
        });
      },
    );
    req.on("error", (err) => {
      reject(err);
    });
    req.write(data);
    req.end();
  });
}