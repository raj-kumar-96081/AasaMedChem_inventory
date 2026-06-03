"use client";
import { useActionState } from "react";

import {
  registerSellerAction,ActionState
} from "@/modules/auth/actions/register-seller.action";

const initialState: ActionState = {
  success: null,
};


export default function SellerRegisterPage() {
        const [state, formAction, isPending] = useActionState(registerSellerAction, initialState);
    
  return (
    <form action={formAction}>
      <h2>Seller Registration</h2>

      <input
        name="name"
        placeholder="Name"
        className="form-control mb-3"
      />

      <input
        name="email"
        placeholder="Email"
        className="form-control mb-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="form-control mb-3"
      />

      <input
        name="businessName"
        placeholder="Business Name"
        className="form-control mb-3"
      />

      <input
        name="phone"
        placeholder="Phone"
        className="form-control mb-3"
      />

      <input
        name="gstNumber"
        placeholder="GST Number"
        className="form-control mb-3"
      />

      <textarea
        name="address"
        placeholder="Address"
        className="form-control mb-3"
      />

      <button className="btn btn-success" disabled={isPending}>
        {isPending ? "Registering..." : "Register Seller"}
      </button>
    </form>
  );
}