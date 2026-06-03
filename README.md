# Inventory & Order Management System

A production-grade Inventory, Quotation, and Order Management System built with **Next.js**, **Neon PostgreSQL**, **Prisma ORM**, **Auth.js (NextAuth)**, and deployed on **Vercel**.

The system supports multiple user roles including **Admin**, **Seller**, and **Buyer**, with robust inventory management, unit conversion, quotation generation, and order processing capabilities.

---

# Live Demo

**Application URL:** `aasa-med-chem-inventory-git-main-raj-kumar-96081s-projects.vercel.app`

---

# GitHub Repository

**Repository URL:** `https://github.com/raj-kumar-96081/AasaMedChem_inventory`

---

# Features

## Authentication & Authorization

### Admin

* Manage all sellers and buyers
* View and manage all products
* Manage all inventory
* View all quotations and orders
* View inventory transaction history
* Access platform analytics

### Seller

* Create and manage products
* Manage own inventory
* View orders related to own products
* View quotations related to own products
* Maintain seller profile

### Buyer

* Browse products
* Search and filter products
* Create quotations
* Place orders
* Track order status
* View order history

---

# Product Management

* Product creation and management
* Product categories
* SKU management
* Product status management
* Inventory tracking
* High precision quantity support

---

# Inventory Management

* Stock addition
* Stock deduction
* Stock adjustments
* Inventory audit trail
* Inventory transaction history
* Low stock monitoring

---

# Unit Conversion Support

The system supports:

## Weight

| Unit | Conversion    |
| ---- | ------------- |
| g    | Base Unit     |
| kg   | 1 kg = 1000 g |

---

## Volume

| Unit | Conversion    |
| ---- | ------------- |
| mL   | Base Unit     |
| L    | 1 L = 1000 mL |

---

## Count

| Unit | Conversion |
| ---- | ---------- |
| item | Base Unit  |

---

# Quotation System

Users can:

* Search products
* Select desired units
* Enter quantities
* Generate quotations
* View converted quantities
* View calculated pricing
* Convert quotation into order

---

# Order Management

Supported order statuses:

```text
PENDING
APPROVED
REJECTED
FULFILLED
```

Features:

* Multi-product orders
* Order tracking
* Seller visibility
* Admin monitoring
* Inventory deduction

---

# Technology Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Bootstrap 5
* React Bootstrap

---

## Backend

* Next.js Server Actions
* Auth.js (NextAuth)
* Prisma ORM

---

## Database

* Neon PostgreSQL

---

## Validation

* Zod

---

## Security

* bcryptjs Password Hashing
* Role-Based Access Control
* Protected Routes
* Session Management

---

# System Architecture

```text
Frontend (Next.js)
        │
        ▼
Server Actions
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
Prisma ORM
        │
        ▼
Neon PostgreSQL
```

---

# Folder Structure

```text
src/

├── app
│
├── modules
│   ├── auth
│   ├── seller
│   ├── buyer
│   ├── product
│   ├── inventory
│   ├── quotation
│   └── order
│
├── lib
│   ├── auth
│   ├── prisma
│   ├── pricing
│   ├── conversions
│   ├── permissions
│   ├── logger
│   └── errors
│
├── constants
│
└── types
```

---

# Database Design

## User

Stores system users.

```text
id
name
email
password
role
```

---

## SellerProfile

Stores seller-specific information.

```text
businessName
gstNumber
phone
address
```

---

## Category

Stores product categories.

```text
id
name
description
```

---

## Product

Stores product information.

```text
sku
name
description
dimension
baseUnit
inventoryQuantity
pricePerBaseUnit
status
```

---

## InventoryTransaction

Tracks inventory movements.

```text
STOCK_IN
STOCK_OUT
ADJUSTMENT
ORDER_DEDUCTION
```

---

## Order

Stores order information.

```text
buyerId
status
totalAmount
```

---

## OrderItem

Stores individual order items.

```text
enteredUnit
enteredQuantity
convertedQuantity
price
```

---

# Quantity Storage Strategy

The application stores quantities in base units.

## Weight Products

Internal storage:

```text
grams (g)
```

Examples:

```text
2 kg → 2000 g
500 g → 500 g
```

---

## Volume Products

Internal storage:

```text
milliliters (mL)
```

Examples:

```text
2 L → 2000 mL
750 mL → 750 mL
```

---

## Count Products

Internal storage:

```text
item
```

Examples:

```text
10 items → 10 items
```

---

# Pricing Strategy

Prices are stored as:

```text
pricePerBaseUnit
```

Examples:

```text
Rice:
₹0.08 per gram

Milk:
₹0.06 per mL

Pen:
₹10 per item
```

---

# Price Calculation Example

User enters:

```text
Rice
Quantity: 2 kg
```

Conversion:

```text
2 kg
=
2000 g
```

Calculation:

```text
2000 × ₹0.08
=
₹160
```

Stored values:

```text
enteredQuantity = 2

enteredUnit = kg

convertedQuantity = 2000

price = 160
```

---

# Precision Handling

To support:

* High precision quantities
* Large inventory values
* Accurate monetary calculations

The application uses PostgreSQL:

```sql
NUMERIC(30,8)
```

for:

* inventoryQuantity
* pricePerBaseUnit
* order quantities
* totals

This avoids floating-point rounding issues.

---

# Environment Variables

Create a `.env` file:

```env
DATABASE_URL=

NEXTAUTH_SECRET=

NEXTAUTH_URL=http://localhost:3000
```

---

# Local Development Setup

## Clone Repository

```bash
git clone https://github.com/your-username/inventory-order-management.git

cd inventory-order-management
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create:

```env
.env
```

Add:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

---

## Run Prisma Migration

```bash
npx prisma migrate dev
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Seed Database

```bash
npx prisma db seed
```

---

## Start Development Server

```bash
npm run dev
```

Application:

```text
http://localhost:3000
```

---

# Deployment

## Deploy To Vercel

1. Push repository to GitHub
2. Import project into Vercel
3. Configure environment variables
4. Deploy

---

## Required Vercel Variables

```env
DATABASE_URL

NEXTAUTH_SECRET

NEXTAUTH_URL
```

---

# Test Credentials

## Admin

```text
Email:
admin@test.com

Password:
Admin@123
```

---

# Future Enhancements

* Revenue Analytics
* Low Stock Alerts
* Email Notifications
* Product Images
* Bulk Inventory Upload
* Order Invoices
* GST Calculations
* Export Reports (CSV/PDF)

---

# Author

Raj Kumar

Built as part of a full-stack assessment project demonstrating:

* Scalable Architecture
* Inventory Management
* Unit Conversion Logic
* Role-Based Access Control
* Order Processing Workflows
* Production-Grade Code Organization
