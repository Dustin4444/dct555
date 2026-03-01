# System Architecture Overview

```mermaid
graph TB
    Client["🖥️ Client Layer"]
    
    subgraph "API Layer"
        Gateway["API Gateway"]
        Auth["Authentication Service"]
    end
    
    subgraph "Application Services"
        UserSvc["User Service"]
        OrderSvc["Order Service"]
        PaymentSvc["Payment Service"]
    end
    
    subgraph "Data Layer"
        UserDB["User Database"]
        OrderDB["Order Database"]
        Cache["Redis Cache"]
    end
    
    subgraph "External Services"
        PaymentGW["Payment Gateway"]
        Email["Email Service"]
    end
    
    Client -->|HTTP/REST| Gateway
    Gateway --> Auth
    Gateway --> UserSvc
    Gateway --> OrderSvc
    Gateway --> PaymentSvc
    
    Auth --> Cache
    UserSvc --> UserDB
    UserSvc --> Cache
    OrderSvc --> OrderDB
    OrderSvc --> Cache
    PaymentSvc --> PaymentGW
    PaymentSvc --> Email
    
    style Client fill:#e1f5ff
    style Gateway fill:#fff3e0
    style Auth fill:#fff3e0
    style UserSvc fill:#f3e5f5
    style OrderSvc fill:#f3e5f5
    style PaymentSvc fill:#f3e5f5
    style UserDB fill:#e8f5e9
    style OrderDB fill:#e8f5e9
    style Cache fill:#e8f5e9
    style PaymentGW fill:#fce4ec
    style Email fill:#fce4ec
```

## Architecture Components

### Client Layer
- Web browsers and mobile applications that interact with the system

### API Layer
- **API Gateway**: Single entry point for all client requests, handles routing and load balancing
- **Authentication Service**: Manages user authentication and authorization

### Application Services
- **User Service**: Handles user profile management and operations
- **Order Service**: Manages order creation, processing, and tracking
- **Payment Service**: Handles payment processing and transactions

### Data Layer
- **User Database**: Stores user account information
- **Order Database**: Stores order and transaction data
- **Redis Cache**: Provides caching for frequently accessed data

### External Services
- **Payment Gateway**: Third-party payment processing service
- **Email Service**: Handles transactional email notifications

## Data Flow
1. Client sends requests to the API Gateway
2. Gateway routes requests to appropriate services
3. Services authenticate via the Authentication Service
4. Services interact with databases and cache
5. External services are called as needed for payments and notifications