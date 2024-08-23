import { handleGithubLogin } from "../../../../lib/actions";

export default function LoginPage() {
  return (
    <form action={handleGithubLogin}>
      <button>Login With Github</button>
    </form>
  );
}
