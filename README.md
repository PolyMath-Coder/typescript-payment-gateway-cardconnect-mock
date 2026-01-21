# Typescript-payment-gateway-cardconnect-mock
A clean, production-style TypeScript payment gateway module that mirrors CardConnect / Fiserv–like flows without exposing real credentials.

# Folder Structure
src/
  config/
    env.ts
    index.ts

  infrastructure/
    http/
      server.ts
      routes.ts
    gateway/
      cardconnect.mock.ts

  modules/
    payments/
      payment.controller.ts
      payment.service.ts
      payment.gateway.ts
      payment.types.ts
      payment.errors.ts

  shared/
    logger.ts
    http-response.ts

  tests/
    payments/
      payment.service.spec.ts

docs/
  architecture.md

openapi.yaml
jest.config.ts
tsconfig.json
package.json
README.md

# 📘 README Outline (use this verbatim)

## Overview
  This project demonstrates a production-style TypeScript payment gateway integration using a CardConnect (Fiserv)-like interface. The goal is to showcase clean architecture, strong typing, testability, and API contract discipline.

## Features

Modular TypeScript architecture

Gateway abstraction (CardConnect-style)

REST APIs defined via OpenAPI

Unit-tested payment services

Mock gateway for safe public usage

# Architecture

Controller → Service → Gateway

No gateway logic leaks into business code

Swappable gateway implementations

# API's

POST /payments/authorize

POST /payments/capture

POST /payments/refund
