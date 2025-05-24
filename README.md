# Gomorroco App

**Gomorroco** is a modern, performant travel & entertainment web application built with Next.js 14, featuring a clean architecture on both frontend and backend. This README covers setup, folder structure, architectural principles, and deployment steps using AWS Lambda & SAM.

---

## 🚀 Features

* **Next.js 14**: Fast, server-rendered React framework
* **Tailwind CSS**: Utility-first responsive styling
* **Redux Toolkit**: Scalable state management
* **Axios**: Simplified API interactions
* **Authentication**: JWT / OAuth login & registration
* **Interactive Games**: Trivia, challenges, and leaderboards
* **Dashboard**: Real-time user stats & achievements
* **Mobile-First**: Fully responsive across devices

---

## 🏗️ Clean Architecture Overview

This project follows the **Clean Architecture** paradigm (Uncle Bob) to enforce separation of concerns and ease of maintenance:

```text
├── frontend/                # Next.js app (Presentation Layer)
│   ├── pages/               # Route & page components (Controllers)
│   ├── components/          # Reusable UI components (Views)
│   ├── store/               # Redux slices & middleware (Application Layer)
│   ├── services/            # API service wrappers (Infrastructure)
│   └── styles/              # Tailwind CSS config & globals
│
└── backend/                 # AWS Lambda functions via SAM
    ├── src/
    │   ├── domain/          # Entities & business rules
    │   ├── usecases/        # Application-specific logic (Interactors)
    │   ├── adapters/        # Interfaces & implementations (Controllers & Gateways)
    │   ├── infrastructure/  # DB clients, external integrations
    │   └── handlers/        # Lambda function entry points
    └── template.yml         # AWS SAM template
```

### Layer Responsibilities

1. **Presentation (frontend)**

   * Renders pages, handles user interaction, dispatches actions
2. **Application (store + usecases)**

   * Defines application workflows and orchestrates domain entities
3. **Domain**

   * Core business models, entities, and domain logic
4. **Infrastructure**

   * External systems: databases, APIs, email services, etc.

---

## 📂 Frontend Setup

```bash
# Clone repo
git clone https://github.com/your-username/gomorroco.git
cd gomorroco/frontend

# Install dependencies
npm install

# Create .env.local
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Run locally
npm run dev
```

* Development server runs on `http://localhost:3000`
* Uses Tailwind JIT by default

---

## 📂 Backend Setup (AWS SAM)

```bash
cd gomorroco/backend

# Install dependencies
npm install

# Build & package
sam build
sam deploy --guided
```

* **template.yml** defines all Lambda functions, IAM roles, API Gateway endpoints, and DynamoDB tables.
* Sample SAM snippet:

```yaml
Globals:
  Function:
    Runtime: nodejs18.x
    Timeout: 10

Resources:
  UserFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: handlers/user.handler
      Events:
        ApiGetUser:
          Type: Api
          Properties:
            Path: /users/{id}
            Method: get
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref UserTable

  UserTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      PrimaryKey:
        Name: id
        Type: String
```

### Local Testing

* Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
* Run `sam local start-api` to spin up a local API Gateway + Lambda environment.

---

## 🔧 Deployment Architecture

1. **Frontend**: Hosted on Vercel with automatic deployments from `main`
2. **Backend**: Packaged & deployed via AWS SAM to Lambda + API Gateway
3. **Database**: DynamoDB (or PostgreSQL on RDS) depending on service
4. **Storage & Media**: S3 + CloudFront CDN
5. **Monitoring**: CloudWatch Logs + X-Ray

---

## 🛠️ Scripts & Commands

| Command                          | Description                      |
| -------------------------------- | -------------------------------- |
| `npm run dev` (frontend)         | Start Next.js dev server         |
| `npm run build && npm run start` | Build & start Next.js production |
| `sam build`                      | Build back-end (SAM)             |
| `sam deploy --guided`            | Deploy back-end via SAM          |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m "feat: add xyz"`)
4. Push to branch (`git push origin feature/xyz`)
5. Open a Pull Request

Please follow the existing code style and ensure all tests pass.

---

## 📄 License

MIT © Your Name
