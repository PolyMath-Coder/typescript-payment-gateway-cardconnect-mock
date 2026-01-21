# Typescript-payment-gateway-cardconnect-mock
A clean, production-style TypeScript payment gateway module that mirrors CardConnect / Fiserv–like flows without exposing real credentials.

### Project Structure

```
src/
├── auth/                 # Authentication module
├── infrastructure/                 # Authentication module
  http/
    server.ts
    server.ts
      routes.ts
    gateway/
      cardconnect.mock.ts
├──  modules/
       payments/
         payment.controller.ts
         payment.service.ts
         payment.gateway.ts
         payment.types.ts
         payment.errors.ts
├──  shared/
      logger.ts
      http-response.ts

├── shared/              # Common utilities
      logger.ts
      http-response.ts
├── tests/
    payments/
      payment.service.spec.ts
└── main.ts              # Application entry point
openapi.yaml
jest.config.ts
tsconfig.json
package.json
README.me
```

# API's
```
POST /payments/authorize

POST /payments/capture

POST /payments/refund
```
eway implementations
