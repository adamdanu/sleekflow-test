import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const APP_BASE_URL = process.env.BASE_URL || 'https://app.sleekflow.io';

export function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env and set it.`,
    );
  }
  return value;
}

export const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL?.trim() ?? '';
export const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD?.trim() ?? '';
export const hasTestCredentials = Boolean(process.env.TEST_USER_EMAIL?.trim() && process.env.TEST_USER_PASSWORD?.trim());
