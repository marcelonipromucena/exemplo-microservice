"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                'amqps://rezbjela:EarA0j97K8zBRx8_gtsew3dUCzIKYg4E@jackal.rmq.cloudamqp.com/rezbjela',
            ],
            queue: 'main_queue',
            queueOptions: {
                durable: false,
            },
        },
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main%20copy.js.map