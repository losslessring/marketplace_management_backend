import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino'
import { ApplicationsModule } from './applications/applications.module'
import { AuthModule } from './auth/auth.module'
import { ConnectionsModule } from './connections/connections.module'
import { CoreNodesModule } from './core-nodes/core-nodes.module'
import { NodeDataModule } from './node-data/node-data.module'
import { NodeTreeModule } from './node-tree/node-tree.module'
import { UiOptionsModule } from './ui-options/ui-options.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === 'production'

        return {
          pinoHttp: {
            transport: isProduction
              ? undefined
              : {
                  target: 'pino-pretty',
                  options: {
                    singleLine: false,

                    ignore: 'req.headers',
                  },
                },
            level: isProduction ? 'info' : 'debug',
          },
        }
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    ApplicationsModule,
    CoreNodesModule,
    NodeTreeModule,
    ConnectionsModule,
    NodeDataModule,
    UiOptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
