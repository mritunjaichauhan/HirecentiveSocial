# Hirecentive Social Platform API Documentation

## Authentication APIs

### 1. Email OTP Authentication
- **Endpoint**: `/api/auth/send-otp`
- **Method**: POST
- **Request Body**:
```json
{
  "email": "string"
}
```
- **Response**: 200 OK
```json
{
  "message": "OTP sent successfully"
}
```

### 2. Verify OTP
- **Endpoint**: `/api/auth/verify-otp`
- **Method**: POST
- **Request Body**:
```json
{
  "email": "string",
  "otp": "string"
}
```

## User Management APIs

### 1. User Registration
- **Endpoint**: `/api/users/register`
- **Method**: POST
- **Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### 2. User Profile
- **Endpoint**: `/api/users/profile`
- **Method**: GET, PUT
- **Headers**: Authorization Bearer Token

## Transaction APIs

### 1. Get Transactions
- **Endpoint**: `/api/transactions`
- **Method**: GET
- **Query Parameters**:
  - page: number
  - limit: number
  - type: "full-time" | "gig"
  - status: "paid" | "pending" | "processing"

### 2. Withdraw Funds
- **Endpoint**: `/api/transactions/withdraw`
- **Method**: POST
- **Request Body**:
```json
{
  "amount": "number",
  "method": "bank_transfer" | "upi" | "wallet"
}
```

## Earnings APIs

### 1. Get Earnings Overview
- **Endpoint**: `/api/earnings/overview`
- **Method**: GET
- **Response**:
```json
{
  "lifetimeEarnings": "number",
  "thisMonthEarnings": "number",
  "pendingWithdrawal": "number",
  "availableToWithdraw": "number"
}
```

## Candidates APIs

### 1. Get Candidates List
- **Endpoint**: `/api/candidates`
- **Method**: GET
- **Query Parameters**:
  - page: number
  - limit: number
  - type: "full-time" | "gig"
  - status: "placed" | "in-process" | "interviewing"

## Video Repository APIs

### 1. Get Videos
- **Endpoint**: `/api/videos`
- **Method**: GET
- **Query Parameters**:
  - search: string
  - category: string
  - page: number
  - limit: number

### 2. Video Categories
- **Endpoint**: `/api/videos/categories`
- **Method**: GET
- **Response**:
```json
{
  "categories": [
    "Delivery Jobs",
    "Manufacturing Jobs",
    "Logistics Jobs",
    "Warehouse Jobs",
    "Construction Jobs"
  ]
}
```

## Statistics APIs

### 1. Get Dashboard Stats
- **Endpoint**: `/api/stats/dashboard`
- **Method**: GET
- **Response**:
```json
{
  "totalRegistrations": "number",
  "fullTimePlacements": "number",
  "gigWorkersPlacements": "number",
  "successRate": "number"
}
```

## Notes

1. All APIs require authentication except:
   - Email OTP Authentication
   - Verify OTP
   - User Registration

2. Error Responses follow the format:
```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

3. Pagination responses include:
```json
{
  "data": [],
  "meta": {
    "currentPage": "number",
    "totalPages": "number",
    "totalItems": "number"
  }
}
```
