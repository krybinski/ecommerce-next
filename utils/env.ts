type NameToType = {
  readonly ENV: 'production' | 'staging' | 'development' | 'test';
  readonly NODE_ENV: 'production' | 'development';
  readonly POSTGRES_USER: string;
  readonly POSTGRES_PASSWORD: string;
  readonly POSTGRES_DB: string;
  readonly DATABASE_URL: string;
};

export function getEnv<Env extends keyof NameToType>(name: Env): NameToType[Env];
export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = process.env[name];

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}
