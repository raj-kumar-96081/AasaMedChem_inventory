import Link from "next/link";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1>
        Inventory Management System
      </h1>

      <div className="mt-4">
        <Link
          href="/auth/login"
          className="btn btn-primary me-2"
        >
          Login
        </Link>

        <Link
          href="/auth/register/buyer"
          className="btn btn-success me-2"
        >
          Buyer Register
        </Link>

        <Link
          href="/auth/register/seller"
          className="btn btn-warning"
        >
          Seller Register
        </Link>
      </div>
    </div>
  );
}