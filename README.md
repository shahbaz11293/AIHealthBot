# AIHealthBot

This project is a full-stack, HIPAA-ready AI HealthBot featuring:
- ASP.NET Core backend using CQRS, DDD, and Clean Architecture
- JWT authentication, consent logging, and encrypted chat history
- jQuery + Tailwind frontend widget with consent and token support
- Docker Compose for secure, containerized deployment


# AIHealthBot

A privacy-focused, consent-driven AI health chatbot designed for Australian users. Built with ASP.NET Core, React, SQLite, Tailwind, and OpenAI, wrapped in a full Docker Compose setup.

---

## ✅ Features

- GPT-powered health Q&A via **OpenAI**
- Consent & token-based anonymous chat history
- **SQLite** with EF Core, using Clean Architecture & CQRS (MediatR)
- Full-stack **React + Tailwind** UI
- JWT token placeholder for user identification
- Dockerized API & UI for easy deployment

---

## 🚀 Quick Start

1. Rename `.env.example` to `.env`, and fill in:
    ```env
    OPENAI_API_KEY=your_secret_key
    API_PORT=5000
    UI_PORT=3000
    ```

2. Build and start all services:
    ```bash
    docker compose --env-file .env up --build
    ```

3. Access the app:
   - UI: `http://localhost:3000`
   - API: `http://localhost:5000/swagger/index.html`

---

## 📚 Backend Architecture

- **Domain**: Entities like `ChatHistory`
- **Application**: Use cases with CQRS (MediatR), DTOs
- **Infrastructure**: OpenAI HTTP client, SQLite data store via EF Core
- **API Layer**: Clean controllers, ConsentMiddleware, Swagger UI
- **Docker**: Container definitions for API and frontend

### Key files:

- `Program.cs`: service registration (DB, MediatR, OpenAI)
- `ConsentMiddleware.cs`: enforces user consent
- `ChatController.cs`: `/api/chat` endpoint, reads token & consent
- `SendMessageCommandHandler.cs`: calls AI and stores history
- `AppDbContext.cs`: configured with SQLite `chatbot.db`

---

## 💬 Frontend Features

- React + Tailwind SPA
- **ConsentModal**: users must accept use and get an anonymous token
- **ChatBox**: sends messages, displays replies
- Token stored in `localStorage`, sent via `Authorization: Bearer {token}` header

---

