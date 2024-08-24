import { handleGithubLogin, login } from "../../../../lib/actions";

export default function LoginPage() {
  return (
    <main>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
      <form action={login}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login with credentials</button>
      </form>
    </main>
  );
}
