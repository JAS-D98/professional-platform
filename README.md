# 🧪 API Test Cases (Professional-Platform)

**Base URL:** `http://localhost:8000`

## 1️⃣ Create a User

**Endpoint:** `POST /api/users`

**Request Body:**
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "password": "password123"
}
```

**Expected Response:**
```json
{
  "id": "uuid-generated-id",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "password": "password123",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 2️⃣ Get All Users

**Endpoint:** `GET /api/users`

**Expected Response:**
```json
[
  {
    "id": "uuid",
    "name": "Alice Johnson",
    "email": "alice@example.com"
  }
]
```

## 3️⃣ Create a Professional Profile

**Endpoint:** `POST /api/professionals`

**Request Body:**
```json
{
  "userId": "PASTE_USER_ID",
  "bio": "Senior Full Stack Developer",
  "category": "Software Development",
  "location": "Nairobi"
}
```

**Expected Response:**
```json
{
  "id": "uuid-generated-id",
  "userId": "user-id",
  "bio": "Senior Full Stack Developer",
  "category": "Software Development",
  "location": "Nairobi",
  "rating": 0
}
```

## 4️⃣ Get All Professionals

**Endpoint:** `GET /api/professionals`

**Expected Response:**
```json
[
  {
    "id": "uuid",
    "bio": "Senior Full Stack Developer",
    "category": "Software Development",
    "location": "Nairobi",
    "rating": 0,
    "user": {
      "id": "uuid",
      "name": "Alice Johnson"
    },
    "reviews": []
  }
]
```

## 5️⃣ Get a Professional by ID

**Endpoint:** `GET /api/professionals/:id`

**Example:** `GET /api/professionals/123e4567-e89b-12d3-a456-426614174000`

**Expected Response:**
```json
{
  "id": "uuid",
  "bio": "Senior Full Stack Developer",
  "category": "Software Development",
  "location": "Nairobi",
  "rating": 4.5,
  "user": {
    "id": "uuid",
    "name": "Alice Johnson"
  },
  "reviews": []
}
```

## 6️⃣ Create a Review

**Endpoint:** `POST /api/reviews`

**Request Body:**
```json
{
  "rating": 5,
  "comment": "Great work!",
  "reviewerId": "PASTE_USER_ID",
  "professionalId": "PASTE_PROFESSIONAL_ID"
}
```

**Expected Response:**
```json
{
  "id": "uuid",
  "rating": 5,
  "comment": "Great work!",
  "reviewerId": "uuid",
  "professionalId": "uuid",
  "createdAt": "timestamp"
}
```

## 7️⃣ Get All Reviews

**Endpoint:** `GET /api/reviews`

**Expected Response:**
```json
[
  {
    "id": "uuid",
    "rating": 5,
    "comment": "Great work!",
    "reviewer": {
      "id": "uuid",
      "name": "Alice Johnson"
    },
    "professional": {
      "id": "uuid",
      "category": "Software Development"
    }
  }
]
```