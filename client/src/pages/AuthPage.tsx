import { Suspense } from "react";
import Verification from "../components/Verification/Verification";

const AuthPage = () => {
  return (
    <main>
      <Suspense fallback={""}>
        <Verification />
      </Suspense>
    </main>
  );
};

export default AuthPage;
