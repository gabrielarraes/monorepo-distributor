import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { User } from "./src/entities/user.entity";

const config: MysqlConnectionOptions = {
  type: 'mysql',
  entities: [User],
  username: 'root',
  database: 'distributor',
  host: 'localhost',
  port: 3306,
  password: 'mysql',
  synchronize: true
}

export default config
