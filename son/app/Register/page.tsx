"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function register() {

     const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Register failed");
    }
  }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>สมัครสมาชิก</h1>
                <input placeholder="ชื่อ นามสกุล"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                 />
                <input placeholder="Email" 
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                 />
                <button> Regirter </button>
            </form>
        </div>


    );
}