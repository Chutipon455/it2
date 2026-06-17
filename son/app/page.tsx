import Image from "next/image";

export default function Home() {
  return (
    <div className="auth-page">
     <form className="auth-card">
      <h1>สมัครสมาชิก</h1>
      <input placeholder="ชื่อ นามสกุล" />
      <input placeholder="Email" />
      <input placeholder="Password" />

      <button> Regirter </button>
     </form>
      
       
    </div>
  );
}
