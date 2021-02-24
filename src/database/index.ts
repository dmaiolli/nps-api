import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  // Com isso vamos ter todas as informações do DB que estão no nosso ormconfig.json
  const defaultOptions = await getConnectionOptions();
  
  return createConnection(
    // Vamos pegar nosso objeto e sobrescrever o database
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultOptions.database
    })
  )
}