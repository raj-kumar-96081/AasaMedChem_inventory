// "use server";
"use client";
import { useActionState } from "react";

import {
  registerBuyerAction, ActionState
} from "@/modules/auth/actions/register-buyer.action";

const initialState: ActionState = {
  success: null,
  message: "",
};

export default function BuyerRegisterPage() {
    const [state, formAction, isPending] = useActionState(registerBuyerAction, initialState);
  return (
    <form action={formAction}>
      <h2>User Registration</h2>

      {state.success === true && <div className="alert alert-success">{state.message}</div>}
      {state.success === false && <div className="alert alert-danger">{state.message}</div>}

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

      <button className="btn btn-success" disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </button>
    </form>
  );
}